"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8291],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,g=d["".concat(i,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(g,c(c({ref:t},p),{},{components:n})):a.createElement(g,c({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var l=2;l<r;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3222:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={id:"noupdateserviceaccount",title:"Block updating Service Account"},c="Block updating Service Account",s={unversionedId:"noupdateserviceaccount",id:"noupdateserviceaccount",title:"Block updating Service Account",description:"Description",source:"@site/docs/noupdateserviceaccount.md",sourceDirName:".",slug:"/noupdateserviceaccount",permalink:"/gatekeeper-library/website/noupdateserviceaccount",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/noupdateserviceaccount.md",tags:[],version:"current",frontMatter:{id:"noupdateserviceaccount",title:"Block updating Service Account"},sidebar:"docs",previous:{title:"Image Digests",permalink:"/gatekeeper-library/website/imagedigests"},next:{title:"Pod Disruption Budget",permalink:"/gatekeeper-library/website/poddisruptionbudget"}},i={},l=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"block-updating-service-account"},"Block updating Service Account"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Blocks updating the service account on resources that abstract over Pods. This policy is ignored in audit mode."),(0,o.kt)("h2",{id:"template"},"Template"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: noupdateserviceaccount\n  annotations:\n    metadata.gatekeeper.sh/title: "Block updating Service Account"\n    metadata.gatekeeper.sh/version: 1.0.0\n    description: "Blocks updating the service account on resources that abstract over Pods. This policy is ignored in audit mode."\nspec:\n  crd:\n    spec:\n      names:\n        kind: NoUpdateServiceAccount\n      validation:\n        openAPIV3Schema:\n          type: object\n          properties:\n            allowedGroups:\n              description: Groups that should be allowed to bypass the policy.\n              type: array\n              items:\n                type: string\n            allowedUsers:\n              description: Users that should be allowed to bypass the policy.\n              type: array\n              items:\n                type: string\n  targets:\n  - target: admission.k8s.gatekeeper.sh\n    rego: |\n      package noupdateserviceaccount\n\n      privileged(userInfo, allowedUsers, allowedGroups) {\n        # Allow if the user is in allowedUsers.\n        # Use object.get so omitted parameters can\'t cause policy bypass by\n        # evaluating to undefined.\n        username := object.get(userInfo, "username", "")\n        allowedUsers[_] == username\n      } {\n        # Allow if the user\'s groups intersect allowedGroups.\n        # Use object.get so omitted parameters can\'t cause policy bypass by\n        # evaluating to undefined.\n        userGroups := object.get(userInfo, "groups", [])\n        groups := {g | g := userGroups[_]}\n        allowed := {g | g := allowedGroups[_]}\n        intersection := groups & allowed\n        count(intersection) > 0\n      }\n\n      get_service_account(obj) = spec {\n        obj.kind == "Pod"\n        spec := obj.spec.serviceAccountName\n      } {\n        obj.kind == "ReplicationController"\n        spec := obj.spec.template.spec.serviceAccountName\n      } {\n        obj.kind == "ReplicaSet"\n        spec := obj.spec.template.spec.serviceAccountName\n      } {\n        obj.kind == "Deployment"\n        spec := obj.spec.template.spec.serviceAccountName\n      } {\n        obj.kind == "StatefulSet"\n        spec := obj.spec.template.spec.serviceAccountName\n      } {\n        obj.kind == "DaemonSet"\n        spec := obj.spec.template.spec.serviceAccountName\n      } {\n        obj.kind == "Job"\n        spec := obj.spec.template.spec.serviceAccountName\n      } {\n        obj.kind == "CronJob"\n        spec := obj.spec.jobTemplate.spec.template.spec.serviceAccountName\n      }\n\n      violation[{"msg": msg}] {\n        # This policy only applies to updates of existing resources.\n        input.review.operation == "UPDATE"\n\n        # Use object.get so omitted parameters can\'t cause policy bypass by\n        # evaluating to undefined.\n        params := object.get(input, "parameters", {})\n        allowedUsers := object.get(params, "allowedUsers", [])\n        allowedGroups := object.get(params, "allowedGroups", [])\n\n        # Extract the service account.\n        oldKSA := get_service_account(input.review.oldObject)\n        newKSA := get_service_account(input.review.object)\n\n        # Deny unprivileged users and groups from changing serviceAccountName.\n        not privileged(input.review.userInfo, allowedUsers, allowedGroups)\n        oldKSA != newKSA\n        msg := "user does not have permission to modify serviceAccountName"\n      } {\n        # Defensively require object to have a serviceAccountName.\n        input.review.operation == "UPDATE"\n        not get_service_account(input.review.object)\n        msg := "missing serviceAccountName field in object under review"\n      } {\n        # Defensively require oldObject to have a serviceAccountName.\n        input.review.operation == "UPDATE"\n        not get_service_account(input.review.oldObject)\n        msg := "missing serviceAccountName field in oldObject under review"\n      }\n\n')),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/noupdateserviceaccount/template.yaml\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"noupdateserviceaccount"),(0,o.kt)("blockquote",null,(0,o.kt)("details",null,(0,o.kt)("summary",null,"constraint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# IMPORTANT: Before deploying this policy, make sure you allow-list any groups\n# or users that need to deploy workloads to kube-system, such as cluster-\n# lifecycle controllers, addon managers, etc. Such controllers may need to\n# update service account names during automated rollouts (e.g. of refactored\n# configurations). You can allow-list them with the allowedGroups and\n# allowedUsers properties of the NoUpdateServiceAccount Constraint.\napiVersion: constraints.gatekeeper.sh/v1beta1\nkind: NoUpdateServiceAccount\nmetadata:\n  name: no-update-kube-system-service-account\nspec:\n  match:\n    namespaces: ["kube-system"]\n    kinds:\n    - apiGroups: [""]\n      kinds:\n      # You can optionally add "Pod" here, but it is unnecessary because\n      # Pod service account immutability is enforced by the Kubernetes API.\n      - "ReplicationController"\n    - apiGroups: ["apps"]\n      kinds:\n      - "ReplicaSet"\n      - "Deployment"\n      - "StatefulSet"\n      - "DaemonSet"\n    - apiGroups: ["batch"]\n      kinds:\n      # You can optionally add "Job" here, but it is unnecessary because\n      # Job service account immutability is enforced by the Kubernetes API.\n      - "CronJob"\n  parameters:\n    allowedGroups: []\n    allowedUsers: []\n\n')),(0,o.kt)("p",null,"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/noupdateserviceaccount/samples/noupdateserviceaccount/constraint.yaml\n"))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"example-allowed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Note: The gator tests currently require exactly one object per example file.\n# Since this is an update-triggered policy, at least two objects are technically\n# required to demonstrate it. Due to the gator requirement, we only have one\n# object below. The policy should allow changing everything but the\n# serviceAccountName field.\nkind: Deployment\napiVersion: apps/v1\nmetadata:\n  name: policy-test\n  namespace: kube-system\n  labels:\n    app: policy-test\nspec:\n  replicas: 1\n  selector:\n    matchLabels:\n      app: policy-test-deploy\n  template:\n    metadata:\n      labels:\n        app: policy-test-deploy\n    spec:\n      # Changing anything except this field should be allowed by the policy.\n      serviceAccountName: policy-test-sa-1\n      containers:\n      - name: policy-test\n        image: ubuntu\n        command:\n        - /bin/bash\n        - -c\n        - sleep 99999\n\n")),(0,o.kt)("p",null,"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/general/noupdateserviceaccount/samples/noupdateserviceaccount/constraint.yaml\n"))))))}u.isMDXComponent=!0}}]);