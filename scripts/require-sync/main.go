// Verify referential templates include sync data

package main

import (
	"context"
	"flag"
	"fmt"
	"io/fs"
	"log"
	"os"
	"path/filepath"
	"strings"

	opa "github.com/open-policy-agent/frameworks/constraint/pkg/client"
	"github.com/open-policy-agent/frameworks/constraint/pkg/client/drivers/local"
	"github.com/open-policy-agent/frameworks/constraint/pkg/core/templates"
	"k8s.io/apimachinery/pkg/runtime"

	gkapis "github.com/open-policy-agent/gatekeeper/apis"
	"github.com/open-policy-agent/gatekeeper/pkg/gator"
	"github.com/open-policy-agent/gatekeeper/pkg/target"
)

const syncAnnotation string = "metadata.gatekeeper.sh/requiresSyncData"

var (
	pathFlag = flag.String("path", "", "Path to verify referential templates include sync data.")
	fileFlag = flag.Bool("sync_file", false, "When `true`, require a `sync.yaml` file for each referential template.")
)

var scheme *runtime.Scheme

func init() {
	scheme = runtime.NewScheme()
	err := gkapis.AddToScheme(scheme)
	if err != nil {
		panic(fmt.Errorf("adding gatekeeper apis to scheme: %w", err))
	}
}

func main() {
	flag.Parse()
	if *pathFlag == "" {
		log.Fatal("Missing `path` flag")
	}
	log.Printf("Verifying path: %s\n", *pathFlag)

	err := checkTemplates(*pathFlag)
	if err != nil {
		log.Fatal(err)
	}
}

func checkTemplates(libraryPath string) error {
	system := os.DirFS(libraryPath)

	err := fs.WalkDir(system, ".", func(path string, d fs.DirEntry, err error) error {
		if err != nil {
			return err
		}

		if d.IsDir() {
			return nil
		}

		if d.Name() != "template.yaml" {
			return nil
		}

		absolutePath := filepath.Join(libraryPath, path)

		tmpl, err := gator.ReadTemplate(scheme, system, path)
		if err != nil {
			return fmt.Errorf("reading template: %w", err)
		}

		isRef, err := isReferential(tmpl)
		if err != nil {
			return fmt.Errorf("detecting referential: %w", err)
		}

		// nothing to check for non referential templates
		if !isRef {
			return nil
		}

		log.Printf("Referential template: %s\n", absolutePath)

		// verify our annotation is present
		if _, ok := tmpl.GetAnnotations()[syncAnnotation]; !ok {
			return fmt.Errorf("template at path '%s' is missing annotation with key '%s'", absolutePath, syncAnnotation)
		}

		// verify that the sync object is present in the same directory as the template
		if !*fileFlag {
			return nil
		}

		syncPath := filepath.Join(filepath.Dir(path), "sync.yaml")
		_, err = fs.Stat(system, syncPath)

		if err != nil {
			if os.IsNotExist(err) {
				return fmt.Errorf("`sync.yaml` not found in dir '%s'", filepath.Dir(absolutePath))
			}

			return fmt.Errorf("stat on '%s': %w", syncPath, err)
		}

		return nil
	})

	return err
}

func isReferential(ct *templates.ConstraintTemplate) (bool, error) {
	nonRefClient, err := opaClient(false)
	if err != nil {
		return false, err
	}

	// a referential template will fail when added to a client that does not
	// have the `inventory` field enabled.  Trying to add the template to the
	// non-referential client thus serves as an indication of it being
	// referential.
	_, err = nonRefClient.AddTemplate(context.Background(), ct)
	if err == nil {
		// successfully added template to non-referential client.  Template is
		// non-referential.
		return false, nil
	} else if strings.Contains(err.Error(), "check refs failed on module") {
		// referential data is required.  i.e. we have a referential template

		// do a sanity check that we can add the template to a referential
		// client
		refClient, err := opaClient(true)
		if err != nil {
			return false, err
		}
		if _, err := refClient.AddTemplate(context.Background(), ct); err != nil {
			return false, fmt.Errorf("adding template to referential client: %w", err)
		}
		return true, nil
	} else {
		return false, fmt.Errorf("adding template to client: %v", err)
	}
}

func opaClient(referential bool) (*opa.Client, error) {
	externs := local.Externs()
	if referential {
		externs = local.Externs("inventory")
	}

	driver, err := local.New(local.Tracing(false), externs)
	if err != nil {
		return nil, fmt.Errorf("creating driver: %w", err)
	}

	if referential {
		driver, err = local.New(local.Tracing(false), local.Externs("inventory"))
	}
	if err != nil {
		return nil, fmt.Errorf("creating driver: %w", err)
	}

	client, err := opa.NewClient(opa.Targets(&target.K8sValidationTarget{}), opa.Driver(driver))
	if err != nil {
		return nil, fmt.Errorf("creating client: %w", err)
	}

	return client, nil
}
