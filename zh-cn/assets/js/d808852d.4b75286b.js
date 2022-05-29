"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7584],{3905:function(e,r,t){t.d(r,{Zo:function(){return l},kt:function(){return h}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(t),h=o,f=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return t?n.createElement(f,a(a({ref:r},l),{},{components:t})):n.createElement(f,a({ref:r},l))}));function h(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},26255:function(e,r,t){t.r(r),t.d(r,{assets:function(){return l},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={id:"core_features",title:"Features",keywords:["feature"]},u=void 0,c={unversionedId:"get_started/core_features",id:"version-0.11.0/get_started/core_features",title:"Features",description:"\x3c!--",source:"@site/versioned_docs/version-0.11.0/get_started/core_features.md",sourceDirName:"get_started",slug:"/get_started/core_features",permalink:"/zh-cn/docs/0.11.0/get_started/core_features",draft:!1,tags:[],version:"0.11.0",frontMatter:{id:"core_features",title:"Features",keywords:["feature"]},sidebar:"version-0.11.0/docs",previous:{title:"Get Started",permalink:"/zh-cn/docs/0.11.0/"},next:{title:"Partition and Queue Configuration",permalink:"/zh-cn/docs/0.11.0/user_guide/queue_config"}},l={},d=[{value:"App-aware scheduling",id:"app-aware-scheduling",level:2},{value:"Hierarchy Resource Queues",id:"hierarchy-resource-queues",level:2},{value:"Job Ordering and Queuing",id:"job-ordering-and-queuing",level:2},{value:"Resource fairness",id:"resource-fairness",level:2},{value:"Resource Reservation",id:"resource-reservation",level:2},{value:"Throughput",id:"throughput",level:2}],p={toc:d};function h(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The main features of YuniKorn include:"),(0,i.kt)("h2",{id:"app-aware-scheduling"},"App-aware scheduling"),(0,i.kt)("p",null,"One of the key differences of YuniKorn is, it does app-aware scheduling. In default K8s scheduler, it simply schedules\npod by pod, without any context about user, app, queue. However, YuniKorn recognizes users, apps, queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to do\nfine-grained controls on resource quotas, resource fairness and priorities, which are the most important requirements\nfor a multi-tenancy computing system."),(0,i.kt)("h2",{id:"hierarchy-resource-queues"},"Hierarchy Resource Queues"),(0,i.kt)("p",null,"Hierarchy queues provide an efficient mechanism to manage cluster resources. The hierarchy of the queues can logically\nmap to the structure of an organization. This gives fine-grained control over resources for different tenants. The YuniKorn\nUI provides a centralised view to monitor the usage of resource queues, it helps you to get the insight how the resources are\nused across different tenants. What's more, By leveraging the min/max queue capacity, it can define how elastic it can be\nin terms of the resource consumption for each tenant."),(0,i.kt)("h2",{id:"job-ordering-and-queuing"},"Job Ordering and Queuing"),(0,i.kt)("p",null,"Applications can be properly queued in working-queues, the ordering policy determines which application can get resources first.\nThe policy can be various, such as simple ",(0,i.kt)("inlineCode",{parentName:"p"},"FIFO"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Fair"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"StateAware")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"Priority")," based. Queues can maintain the order of applications,\nand based on different policies, the scheduler allocates resources to jobs accordingly. The behavior is much more predictable."),(0,i.kt)("p",null,"What's more, when the queue max-capacity is configured, jobs and tasks can be properly queued up in the resource queue.\nIf the remaining capacity is not enough, they can be waiting in line until some resources are released. This simplifies\nthe client side operation. Unlike the default scheduler, resources are capped by namespace resource quotas,\nand that is enforced by the quota-admission-controller, if the underneath namespace has no enough quota, pods cannot be\ncreated. Client side needs complex logic, e.g retry by condition, to handle such scenarios."),(0,i.kt)("h2",{id:"resource-fairness"},"Resource fairness"),(0,i.kt)("p",null,"In a multi-tenant environment, a lot of users are sharing cluster resources. To avoid tenants from competing resources\nand potential get starving. More fine-grained fairness needs to achieve fairness across users, as well as teams/organizations.\nWith consideration of weights or priorities, some more important applications can get high demand resources that stand over its share.\nThis is often associated with resource budget, a more fine-grained fairness mode can further improve the expense control."),(0,i.kt)("h2",{id:"resource-reservation"},"Resource Reservation"),(0,i.kt)("p",null,"YuniKorn automatically does reservations for outstanding requests. If a pod could not be allocated, YuniKorn will try to\nreserve it on a qualified node and tentatively allocate the pod on this reserved node (before trying rest of nodes).\nThis mechanism can avoid this pod gets starved by later submitted smaller, less-picky pods.\nThis feature is important in the batch workloads scenario because when a large amount of heterogeneous pods is submitted\nto the cluster, it's very likely some pods can be starved even they are submitted much earlier. "),(0,i.kt)("h2",{id:"throughput"},"Throughput"),(0,i.kt)("p",null,"Throughput is a key criterion to measure scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling, and further impact service SLAs.\nWhen the cluster gets bigger, it also means the requirement of higher throughput. The ",(0,i.kt)("a",{parentName:"p",href:"/zh-cn/docs/0.11.0/performance/evaluate_perf_function_with_kubemark"},"performance evaluation based on Kube-mark"),"\nreveals some perf numbers."))}h.isMDXComponent=!0}}]);