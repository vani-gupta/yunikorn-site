(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{207:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return s})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return p}));var n=t(2),a=t(9),o=(t(0),t(213)),i={id:"core_features",title:"Features",keywords:["feature"]},s={id:"get_started/core_features",isDocsHomePage:!1,title:"Features",description:"\x3c!--",source:"@site/docs/get_started/core_features.md",permalink:"/docs/next/get_started/core_features",version:"next",sidebar:"docs",previous:{title:"Get Started",permalink:"/docs/next/"},next:{title:"Setup Queue Hierarchy",permalink:"/docs/next/get_started/setup_queue_hierarchy"},latestVersionMainDocPermalink:"/docs"},c=[{value:"App-aware scheduling",id:"app-aware-scheduling",children:[]},{value:"Share resources across different users or organizations",id:"share-resources-across-different-users-or-organizations",children:[]},{value:"Resource fairness between multi-tenant",id:"resource-fairness-between-multi-tenant",children:[]},{value:"Throughput",id:"throughput",children:[]}],u={rightToc:c};function p(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The main features of YuniKorn include:"),Object(o.b)("h2",{id:"app-aware-scheduling"},"App-aware scheduling"),Object(o.b)("p",null,"One of the key differences of YuniKorn is, it does app-aware scheduling. In default K8s scheduler, it simply schedules\npod by pod, without any context about user, app, queue. However, YuniKorn recognizes users, apps, queues, and it considers\na lot more factors, e.g resource, ordering etc, while making scheduling decisions. This gives us the possibility to do\nfine-grained controls on resource quotas, resource fairness and priorities, which are the most important requirements\nfor a multi-tenancy computing system."),Object(o.b)("h2",{id:"share-resources-across-different-users-or-organizations"},"Share resources across different users or organizations"),Object(o.b)("p",null,"This is usually achieved by hierarchy queues. Applications need to be properly queued in working-queues,\nthe ordering policy determines which application can get resources first. The policy can be various, such as simple FIFO,\nor priority based. Queues can maintain the order of applications, and it can also help to define how elastic can be in\nterms of the resource consumption for a team/organization."),Object(o.b)("h2",{id:"resource-fairness-between-multi-tenant"},"Resource fairness between multi-tenant"),Object(o.b)("p",null,"In a multi-tenant environment, a lot of users are sharing cluster resources. To avoid tenants from competing resources\nand potential get starving. More fine-grained fairness needs to achieve fairness across users, as well as teams/organizations.\nWith consideration of weights or priorities, some more important applications can get high demand resources that stand over its share.\nThis is often associated with resource budget, a more fine-grained fairness mode can further improve the expense control."),Object(o.b)("h2",{id:"throughput"},"Throughput"),Object(o.b)("p",null,"Throughput is a key criterion to measure scheduler performance. It is critical for a large scale distributed system.\nIf throughput is bad, applications may waste time on waiting for scheduling, and further impact service SLAs.\nWhen the cluster gets bigger, it also means the requirement of higher throughput. The ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/performance/evaluate_perf_function_with_kubemark"}),"performance evaluation based on Kube-mark"),"\nreveals some perf numbers."))}p.isMDXComponent=!0},213:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return h}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),p=function(e){var r=a.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return a.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},f=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=p(t),f=n,h=l["".concat(i,".").concat(f)]||l[f]||d[f]||o;return t?a.a.createElement(h,s(s({ref:r},u),{},{components:t})):a.a.createElement(h,s({ref:r},u))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,i=new Array(o);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);