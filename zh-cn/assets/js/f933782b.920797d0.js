"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8047],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=h;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},51314:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),l=["components"],i={id:"deployment",title:"Deploy to Kubernetes"},u=void 0,p={unversionedId:"developer_guide/deployment",id:"version-0.12.2/developer_guide/deployment",title:"Deploy to Kubernetes",description:"\x3c!--",source:"@site/versioned_docs/version-0.12.2/developer_guide/deployment.md",sourceDirName:"developer_guide",slug:"/developer_guide/deployment",permalink:"/zh-cn/docs/0.12.2/developer_guide/deployment",draft:!1,tags:[],version:"0.12.2",frontMatter:{id:"deployment",title:"Deploy to Kubernetes"},sidebar:"version-0.12.2/docs",previous:{title:"Build and Run",permalink:"/zh-cn/docs/0.12.2/developer_guide/build"},next:{title:"Development in CodeReady Containers",permalink:"/zh-cn/docs/0.12.2/developer_guide/openshift_development"}},c={},d=[{value:"Build docker image",id:"build-docker-image",level:2},{value:"Setup RBAC",id:"setup-rbac",level:2},{value:"Create the ConfigMap",id:"create-the-configmap",level:2},{value:"Attach ConfigMap to the Scheduler Pod",id:"attach-configmap-to-the-scheduler-pod",level:2},{value:"Deploy the Scheduler",id:"deploy-the-scheduler",level:2},{value:"Access to the web UI",id:"access-to-the-web-ui",level:2},{value:"Configuration Hot Refresh",id:"configuration-hot-refresh",level:2}],s={toc:d},h="wrapper";function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)(h,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The easiest way to deploy YuniKorn is to leverage our ",(0,a.kt)("a",{parentName:"p",href:"https://hub.helm.sh/charts/yunikorn/yunikorn"},"helm charts"),",\nyou can find the guide ",(0,a.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.12.2/"},"here"),". This document describes the manual process to deploy YuniKorn\nscheduler and it is majorly for developers."),(0,a.kt)("h2",{id:"build-docker-image"},"Build docker image"),(0,a.kt)("p",null,"Under project root of the ",(0,a.kt)("inlineCode",{parentName:"p"},"yunikorn-k8shim"),", run the command to build an image using the map for the configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"make image\n")),(0,a.kt)("p",null,"This command will build an image. The image will be tagged with a default version and image tag."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," the default build uses a hardcoded user and tag. You ",(0,a.kt)("em",{parentName:"p"},"must")," update the ",(0,a.kt)("inlineCode",{parentName:"p"},"IMAGE_TAG")," variable in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Makefile")," to push to an appropriate repository. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," the latest yunikorn images in docker hub are not updated anymore due to ASF policy. Hence, you should build both scheduler image and web image locally before deploying them."),(0,a.kt)("h2",{id:"setup-rbac"},"Setup RBAC"),(0,a.kt)("p",null,"The first step is to create the RBAC role for the scheduler, see ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/yunikorn-rbac.yaml"},"yunikorn-rbac.yaml")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f scheduler/yunikorn-rbac.yaml\n")),(0,a.kt)("p",null,"The role is a requirement on the current versions of kubernetes."),(0,a.kt)("h2",{id:"create-the-configmap"},"Create the ConfigMap"),(0,a.kt)("p",null,"This must be done before deploying the scheduler. It requires a correctly setup kubernetes environment.\nThis kubernetes environment can be either local or remote. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"download configuration file if not available on the node to add to kubernetes:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -o queues.yaml https://raw.githubusercontent.com/apache/incubator-yunikorn-k8shim/master/conf/queues.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"create ConfigMap in kubernetes:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create configmap yunikorn-configs --from-file=queues.yaml\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"check if the ConfigMap was created correctly:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl describe configmaps yunikorn-configs\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," if name of the ConfigMap is changed the volume in the scheduler yaml file must be updated to reference the new name otherwise the changes to the configuration will not be picked up. "),(0,a.kt)("h2",{id:"attach-configmap-to-the-scheduler-pod"},"Attach ConfigMap to the Scheduler Pod"),(0,a.kt)("p",null,"The ConfigMap is attached to the scheduler as a special volume. First step is to specify where to mount it in the pod:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  volumeMounts:\n    - name: config-volume\n      mountPath: /etc/yunikorn/\n")),(0,a.kt)("p",null,"Second step is to link the mount point back to the configuration map created in kubernetes:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  volumes:\n    - name: config-volume\n      configMap:\n        name: yunikorn-configs\n")),(0,a.kt)("p",null,"Both steps are part of the scheduler yaml file, an example can be seen at ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-yunikorn-k8shim/blob/master/deployments/scheduler/scheduler.yaml"},"scheduler.yaml"),"\nfor reference."),(0,a.kt)("h2",{id:"deploy-the-scheduler"},"Deploy the Scheduler"),(0,a.kt)("p",null,"The scheduler can be deployed with following command."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"kubectl create -f deployments/scheduler/scheduler.yaml\n")),(0,a.kt)("p",null,"The deployment will run 2 containers from your pre-built docker images in 1 pod,"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"yunikorn-scheduler-core (yunikorn scheduler core and shim for K8s)"),(0,a.kt)("li",{parentName:"ul"},"yunikorn-scheduler-web (web UI)")),(0,a.kt)("p",null,"The pod is deployed as a customized scheduler, it will take the responsibility to schedule pods which explicitly specifies ",(0,a.kt)("inlineCode",{parentName:"p"},"schedulerName: yunikorn")," in pod's spec. In addition to the ",(0,a.kt)("inlineCode",{parentName:"p"},"schedulerName"),", you will also have to add a label ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationId")," to the pod."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"  metadata:\n    name: pod_example\n    labels:\n      applicationId: appID\n  spec:\n    schedulerName: yunikorn\n")),(0,a.kt)("p",null,"Note: Admission controller abstracts the addition of ",(0,a.kt)("inlineCode",{parentName:"p"},"schedulerName")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"applicationId")," from the user and hence, routes all traffic to YuniKorn. If you use helm chart to deploy, it will install admission controller along with the scheduler."),(0,a.kt)("h2",{id:"access-to-the-web-ui"},"Access to the web UI"),(0,a.kt)("p",null,"When the scheduler is deployed, the web UI is also deployed in a container.\nPort forwarding for the web interface on the standard ports can be turned on via:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'POD=`kubectl get pod -l app=yunikorn -o jsonpath="{.items[0].metadata.name}"` && \\\nkubectl port-forward ${POD} 9889 9080\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"9889")," is the default port for Web UI, ",(0,a.kt)("inlineCode",{parentName:"p"},"9080")," is the default port of scheduler's Restful service where web UI retrieves info from.\nOnce this is done, web UI will be available at: http://localhost:9889."),(0,a.kt)("h2",{id:"configuration-hot-refresh"},"Configuration Hot Refresh"),(0,a.kt)("p",null,"YuniKorn supports to load configuration changes automatically from attached configmap. Simply update the content in the configmap,\nthat can be done either via Kubernetes dashboard UI or commandline. ",(0,a.kt)("em",{parentName:"p"},"Note"),", changes made to the configmap might have some\ndelay to be picked up by the scheduler."))}m.isMDXComponent=!0}}]);