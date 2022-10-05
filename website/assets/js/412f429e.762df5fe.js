"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4995],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var i=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var l=i.createContext({}),p=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=p(e.components);return i.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(t),d=s,x=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return t?i.createElement(x,r(r({ref:n},c),{},{components:t})):i.createElement(x,r({ref:n},c))}));function d(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,r=new Array(a);r[0]=m;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:s,r[1]=o;for(var p=2;p<a;p++)r[p]=t[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2868:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var i=t(7462),s=(t(7294),t(3905));const a={id:"selinux",title:"SELinux V2"},r="SELinux V2",o={unversionedId:"selinux",id:"selinux",title:"SELinux V2",description:"Description",source:"@site/docs/selinux.md",sourceDirName:".",slug:"/selinux",permalink:"/gatekeeper-library/website/selinux",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/selinux.md",tags:[],version:"current",frontMatter:{id:"selinux",title:"SELinux V2"},sidebar:"docs",previous:{title:"Seccomp",permalink:"/gatekeeper-library/website/seccomp"},next:{title:"Allowed Users",permalink:"/gatekeeper-library/website/users"}},l={},p=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Usage",id:"usage",level:3},{value:"Examples",id:"examples",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"selinux-v2"},"SELinux V2"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,"Defines an allow-list of seLinuxOptions configurations for pod containers. Corresponds to a PodSecurityPolicy requiring SELinux configs. For more information, see ",(0,s.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#selinux"},"https://kubernetes.io/docs/concepts/policy/pod-security-policy/#selinux")),(0,s.kt)("h2",{id:"template"},"Template"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspselinuxv2\n  annotations:\n    metadata.gatekeeper.sh/title: "SELinux V2"\n    description: >-\n      Defines an allow-list of seLinuxOptions configurations for pod\n      containers. Corresponds to a PodSecurityPolicy requiring SELinux configs.\n      For more information, see\n      https://kubernetes.io/docs/concepts/policy/pod-security-policy/#selinux\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPSELinuxV2\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Defines an allow-list of seLinuxOptions configurations for pod\n            containers. Corresponds to a PodSecurityPolicy requiring SELinux configs.\n            For more information, see\n            https://kubernetes.io/docs/concepts/policy/pod-security-policy/#selinux\n          properties:\n            exemptImages:\n              description: >-\n                Any container that uses an image that matches an entry in this list will be excluded\n                from enforcement. Prefix-matching can be signified with `*`. For example: `my-image-*`.\n\n                It is recommended that users use the fully-qualified Docker image name (e.g. start with a domain name)\n                in order to avoid unexpectedly exempting images from an untrusted repository.\n              type: array\n              items:\n                type: string\n            allowedSELinuxOptions:\n              type: array\n              description: "An allow-list of SELinux options configurations."\n              items:\n                type: object\n                description: "An allowed configuration of SELinux options for a pod container."\n                properties:\n                  level:\n                    type: string\n                    description: "An SELinux level."\n                  role:\n                    type: string\n                    description: "An SELinux role."\n                  type:\n                    type: string\n                    description: "An SELinux type."\n                  user:\n                    type: string\n                    description: "An SELinux user."\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspselinux\n\n        import data.lib.exempt_container.is_exempt\n\n        # Disallow top level custom SELinux options\n        violation[{"msg": msg, "details": {}}] {\n            has_field(input.review.object.spec.securityContext, "seLinuxOptions")\n            not input_seLinuxOptions_allowed(input.review.object.spec.securityContext.seLinuxOptions)\n            msg := sprintf("SELinux options is not allowed, pod: %v. Allowed options: %v", [input.review.object.metadata.name, input.parameters.allowedSELinuxOptions])\n        }\n        # Disallow container level custom SELinux options\n        violation[{"msg": msg, "details": {}}] {\n            c := input_security_context[_]\n            not is_exempt(c)\n            has_field(c.securityContext, "seLinuxOptions")\n            not input_seLinuxOptions_allowed(c.securityContext.seLinuxOptions)\n            msg := sprintf("SELinux options is not allowed, pod: %v, container %v. Allowed options: %v", [input.review.object.metadata.name, c.name, input.parameters.allowedSELinuxOptions])\n        }\n\n        input_seLinuxOptions_allowed(options) {\n            params := input.parameters.allowedSELinuxOptions[_]\n            field_allowed("level", options, params)\n            field_allowed("role", options, params)\n            field_allowed("type", options, params)\n            field_allowed("user", options, params)\n        }\n\n        field_allowed(field, options, params) {\n            params[field] == options[field]\n        }\n        field_allowed(field, options, params) {\n            not has_field(options, field)\n        }\n\n        input_security_context[c] {\n            c := input.review.object.spec.containers[_]\n            has_field(c.securityContext, "seLinuxOptions")\n        }\n        input_security_context[c] {\n            c := input.review.object.spec.initContainers[_]\n            has_field(c.securityContext, "seLinuxOptions")\n        }\n        input_security_context[c] {\n            c := input.review.object.spec.ephemeralContainers[_]\n            has_field(c.securityContext, "seLinuxOptions")\n        }\n\n        # has_field returns whether an object has a field\n        has_field(object, field) = true {\n            object[field]\n        }\n      libs:\n        - |\n          package lib.exempt_container\n\n          is_exempt(container) {\n              exempt_images := object.get(object.get(input, "parameters", {}), "exemptImages", [])\n              img := container.image\n              exemption := exempt_images[_]\n              _matches_exemption(img, exemption)\n          }\n\n          _matches_exemption(img, exemption) {\n              not endswith(exemption, "*")\n              exemption == img\n          }\n\n          _matches_exemption(img, exemption) {\n              endswith(exemption, "*")\n              prefix := trim_suffix(exemption, "*")\n              startswith(img, prefix)\n          }\n\n')),(0,s.kt)("h3",{id:"usage"},"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/selinux/template.yaml\n")),(0,s.kt)("h2",{id:"examples"},"Examples"),(0,s.kt)("details",null,(0,s.kt)("summary",null,"require-matching-selinux-options"),(0,s.kt)("blockquote",null,(0,s.kt)("details",null,(0,s.kt)("summary",null,"constraint"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPSELinuxV2\nmetadata:\n  name: psp-selinux-v2\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    allowedSELinuxOptions:\n      - level: s0:c123,c456\n        role: object_r\n        type: svirt_sandbox_file_t\n        user: system_u\n\n')),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/selinux/samples/psp-selinux-v2/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-disallowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx-selinux-disallowed\n    labels:\n        app: nginx-selinux\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      seLinuxOptions:\n        level: s1:c234,c567\n        user: sysadm_u\n        role: sysadm_r\n        type: svirt_lxc_net_t\n\n")),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/selinux/samples/psp-selinux-v2/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"example-allowed"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx-selinux-allowed\n    labels:\n        app: nginx-selinux\nspec:\n  containers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      seLinuxOptions:\n        level: s0:c123,c456\n        role: object_r\n        type: svirt_sandbox_file_t\n        user: system_u\n\n")),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/selinux/samples/psp-selinux-v2/constraint.yaml\n"))),(0,s.kt)("details",null,(0,s.kt)("summary",null,"disallowed-ephemeral"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: v1\nkind: Pod\nmetadata:\n    name: nginx-selinux-disallowed\n    labels:\n        app: nginx-selinux\nspec:\n  ephemeralContainers:\n  - name: nginx\n    image: nginx\n    securityContext:\n      seLinuxOptions:\n        level: s1:c234,c567\n        user: sysadm_u\n        role: sysadm_r\n        type: svirt_lxc_net_t\n\n")),(0,s.kt)("p",null,"Usage"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper-library/master/library/pod-security-policy/selinux/samples/psp-selinux-v2/constraint.yaml\n"))))))}u.isMDXComponent=!0}}]);