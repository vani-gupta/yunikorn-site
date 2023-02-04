"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7915],{3905:function(e,n,r){r.d(n,{Zo:function(){return l},kt:function(){return f}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=t.createContext({}),c=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},l=function(e){var n=c(e.components);return t.createElement(p.Provider,{value:n},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),s=c(r),d=a,f=s["".concat(p,".").concat(d)]||s[d]||h[d]||o;return r?t.createElement(f,i(i({ref:n},l),{},{components:r})):t.createElement(f,i({ref:n},l))}));function f(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var u={};for(var p in n)hasOwnProperty.call(n,p)&&(u[p]=n[p]);u.originalType=e,u[s]="string"==typeof e?e:a,i[1]=u;for(var c=2;c<o;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},73786:function(e,n,r){r.r(n),r.d(n,{contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],u={id:"rn-0.11.0",title:"\u53d1\u5e03\u516c\u544a v0.11.0"},p=void 0,c={type:"mdx",permalink:"/zh-cn/release-announce/0.11.0",source:"@site/i18n/zh-cn/docusaurus-plugin-content-pages/release-announce/0.11.0.md",title:"\u53d1\u5e03\u516c\u544a v0.11.0",description:"\x3c!--",frontMatter:{id:"rn-0.11.0",title:"\u53d1\u5e03\u516c\u544a v0.11.0"}},l=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u4e3b\u8981\u66f4\u65b0",id:"\u4e3b\u8981\u66f4\u65b0",level:2},{value:"\u652f\u6301\u7684 Kubernetes \u7248\u672c",id:"\u652f\u6301\u7684-kubernetes-\u7248\u672c",level:3},{value:"Gang scheduling \u589e\u5f3a\u529f\u80fd",id:"gang-scheduling-\u589e\u5f3a\u529f\u80fd",level:3},{value:"Spark operator \u96c6\u6210",id:"spark-operator-\u96c6\u6210",level:3},{value:"\u8c03\u5ea6\u5668\u6307\u6807\u589e\u5f3a",id:"\u8c03\u5ea6\u5668\u6307\u6807\u589e\u5f3a",level:3},{value:"\u7528\u6237/\u7ec4\u89e3\u6790",id:"\u7528\u6237\u7ec4\u89e3\u6790",level:3},{value:"Web UI \u548c REST API \u53ef\u7528\u6027\u589e\u5f3a",id:"web-ui-\u548c-rest-api-\u53ef\u7528\u6027\u589e\u5f3a",level:3},{value:"\u793e\u533a",id:"\u793e\u533a",level:2}],s={toc:l},h="wrapper";function d(e){var n=e.components,r=(0,a.Z)(e,i);return(0,o.kt)(h,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u53d1\u5e03\u516c\u544a-v0110"},"\u53d1\u5e03\u516c\u544a v0.11.0"),(0,o.kt)("p",null,"\u6211\u4eec\u975e\u5e38\u9ad8\u5174\u5730\u5ba3\u5e03 Apache YuniKorn (Incubating) \u793e\u533a\u5df2\u6295\u7968\u53d1\u5e03 0.11.0\u3002Apache YuniKorn (Incubating) \u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u8d44\u6e90\u8c03\u5ea6\u5668\uff0c\u65e8\u5728\u7ba1\u7406\u548c\u8c03\u5ea6\u5bb9\u5668\u7f16\u6392\u6846\u67b6\uff08\u5982 Kubernetes\uff09\u4e0a\u7684\u5927\u6570\u636e\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u652f\u6301\u672c\u5730\u548c\u4e91\u7aef\u7684\u7528\u4f8b\u3002\n\u6b64\u7248\u672c\u6709\u51e0\u4e2a REST API\u3001UI \u53ef\u7528\u6027\u548c\u8054\u90a6\u8c03\u5ea6\u7684\u6539\u8fdb\u3002"),(0,o.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,o.kt)("p",null,"Apache YuniKorn (Incubating\uff09\u793e\u533a\u5728\u6b64\u7248\u672c\u4e2d\u4fee\u590d\u4e86 110 \u591a\u4e2a JIRA \u95ee\u9898\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/issues/?filter=12350521"},"YuniKorn \u5728 0.11.0 \u4e2d\u89e3\u51b3\u7684 jira \u95ee\u9898"),"\u3002"),(0,o.kt)("p",null,"\u53d1\u5e03\u8d1f\u8d23\u4eba: Kinga Marton"),(0,o.kt)("p",null,"\u53d1\u5e03\u65e5\u671f: 2021-08-18"),(0,o.kt)("h2",{id:"\u4e3b\u8981\u66f4\u65b0"},"\u4e3b\u8981\u66f4\u65b0"),(0,o.kt)("h3",{id:"\u652f\u6301\u7684-kubernetes-\u7248\u672c"},"\u652f\u6301\u7684 Kubernetes \u7248\u672c"),(0,o.kt)("p",null,"\u5728\u6b64\u7248\u672c\u4e2d\uff0c\u652f\u6301\u7684 Kubernetes \u7248\u672c\u5df2\u66f4\u65b0\u4e3a 1.17.x\u30011.18.x \u548c 1.19.x\u3002\uff08\u65e9\u671f\u7248\u672c\u652f\u6301 1.16.x\u30011.17.x \u548c 1.18.x\uff09YuniKorn \u652f\u6301\u77e9\u9635\u4e3b\u8981\u652f\u6301 3 \u4e2a\u4e3b\u8981\u7684 Kubernetes \u7248\u672c\u3002"),(0,o.kt)("h3",{id:"gang-scheduling-\u589e\u5f3a\u529f\u80fd"},"Gang scheduling \u589e\u5f3a\u529f\u80fd"),(0,o.kt)("p",null,"\u793e\u533a\u5df2\u5bf9 ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/zh-cn/docs/user_guide/gang_scheduling"},"Gang scheduling")," \u529f\u80fd\u8fdb\u884c\u4e86\u8fdb\u4e00\u6b65\u6539\u8fdb\u3002",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/zh-cn/docs/user_guide/gang_scheduling#gang-scheduling-styles"},"Gang scheduling \u6a21\u5f0f")," \u73b0\u5728\u53ef\u4ee5\u4e3a\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u914d\u7f6e\uff0csoft \u6216\u8005 hard\u3002\u8fd9\u5141\u8bb8\u7528\u6237\u81ea\u5b9a\u4e49\u5982\u4f55\u5904\u7406\u9884\u8ba2\u8d85\u65f6\u7684\u884c\u4e3a\u3002\u8fd8\u6709\u8bb8\u591a\u589e\u5f3a\u529f\u80fd\u53ef\u4ee5\u6539\u5584\u5360\u4f4d pod \u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u4f7f\u6e05\u7406\u66f4\u52a0\u5065\u58ee\u548c\u53ef\u9760\u3002\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-553"},"YUNIKORN-553")," \u4e2d\u627e\u5230\u3002"),(0,o.kt)("h3",{id:"spark-operator-\u96c6\u6210"},"Spark operator \u96c6\u6210"),(0,o.kt)("p",null,"\u901a\u8fc7\u5229\u7528 YuniKorn \u7684\u5e94\u7528\u7ba1\u7406\u6846\u67b6\uff0c\u73b0\u5728\u5b83\u53ef\u4ee5\u66f4\u597d\u5730\u4e0e Spark operator \u96c6\u6210\u3002YuniKorn \u76d1\u542c spark \u7684 CRD \u8d44\u6e90\u5e76\u5728\u5fc5\u8981\u65f6\u505a\u51fa\u53cd\u5e94\u3002\u5728 K8s \u4e0a\u4f7f\u7528 YuniKorn \u548c Spark operator \u662f\u5b8c\u5168\u900f\u660e\u7684\uff0c\u4e0d\u9700\u8981\u989d\u5916\u7684\u914d\u7f6e\u3002\u6b64\u529f\u80fd\u5df2\u51c6\u5907\u597d\u7528\u4e8e\u751f\u4ea7\u3002\u66f4\u591a\u7ec6\u8282\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-558"},"YUNIKORN-558")," \u4e2d\u627e\u5230\u3002"),(0,o.kt)("h3",{id:"\u8c03\u5ea6\u5668\u6307\u6807\u589e\u5f3a"},"\u8c03\u5ea6\u5668\u6307\u6807\u589e\u5f3a"),(0,o.kt)("p",null,"YuniKorn \u901a\u8fc7 Prometheus \u5f00\u653e\u4e86\u6838\u5fc3\u7684 ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/zh-cn/docs/next/performance/metrics"},"\u8c03\u5ea6\u6307\u6807"),"\uff0c\u5728\u8fd9\u4e2a\u7248\u672c\u4e2d\uff0c\u4e00\u4e9b\u91cd\u8981\u7684\u6307\u6807\u5982 allocating_latency_seconds\uff0clong_pending_apps \u88ab\u6dfb\u52a0\u5230\u7cfb\u7edf\u4e2d\uff0c\u8fd9\u6837\u96c6\u7fa4\u7ba1\u7406\u5458\u53ef\u4ee5\u521b\u5efa\u66f4\u591a\u8b66\u62a5\u6765\u76d1\u63a7\u7cfb\u7edf\u5065\u5eb7\u72b6\u51b5\u3002\u6211\u4eec\u5bf9\u73b0\u6709\u6307\u6807\uff08\u4f8b\u5982\u5e94\u7528\u7a0b\u5e8f/\u961f\u5217\uff09\u8fdb\u884c\u4e86\u66f4\u591a\u589e\u5f3a\uff0c\u4f7f\u5176\u66f4\u5177\u53ef\u8bfb\u6027\u548c\u7ec4\u7ec7\u6027\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-3"},"YUNIKORN-3")," \u4e2d\u627e\u5230\u66f4\u591a\u8be6\u7ec6\u4fe1\u606f\u3002"),(0,o.kt)("h3",{id:"\u7528\u6237\u7ec4\u89e3\u6790"},"\u7528\u6237/\u7ec4\u89e3\u6790"),(0,o.kt)("p",null,"\u901a\u8fc7\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://issues.apache.org/jira/browse/YUNIKORN-649"},"YUNIKORN-649")," \u4e2d\u5b8c\u6210\u7684\u5de5\u4f5c\uff0c\u73b0\u5728\u7528\u6237\u53ef\u4ee5\u5b9a\u4e49\u5982\u4f55\u68c0\u7d22\u6bcf\u4e2a\u5e94\u7528\u7a0b\u5e8f\u548c pod \u7684\u7528\u6237/\u7ec4\u8eab\u4efd\u3002\u8fd9\u662f\u901a\u8fc7\u53ef\u914d\u7f6e\u7684\u73af\u5883\u53d8\u91cf USER_LABEL_KEY \u6765\u5b8c\u6210\u7684\uff0c\u56e0\u6b64\u7528\u6237\u53ef\u4ee5\u6307\u5b9a YuniKorn \u5c06\u4f7f\u7528\u54ea\u4e2a\u6807\u7b7e\u6765\u68c0\u7d22\u7528\u6237\u8eab\u4efd\u3002\u8be5\u6587\u6863\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/zh-cn/docs/next/user_guide/usergroup_resolution"},"\u8fd9\u91cc")," \u627e\u5230\u3002"),(0,o.kt)("h3",{id:"web-ui-\u548c-rest-api-\u53ef\u7528\u6027\u589e\u5f3a"},"Web UI \u548c REST API \u53ef\u7528\u6027\u589e\u5f3a"),(0,o.kt)("p",null,"\u793e\u533a\u5bf9 Web UI \u8fdb\u884c\u4e86\u4e00\u4e9b\u53ef\u7528\u6027\u6539\u8fdb\uff0c\u4ee5\u63d0\u4f9b\u66f4\u597d\u7684\u7528\u6237\u4f53\u9a8c\u3002UI \u5df2\u88ab\u7b80\u5316\uff0c\u501f\u4ee5\u5728\u5e94\u7528\u7a0b\u5e8f/\u8282\u70b9\u9875\u9762\u4e2d\u663e\u793a\u6709\u7528\u7684\u6570\u636e\uff0c\u4e00\u4e9b\u53ef\u7528\u6027\u9519\u8bef\u4e5f\u5df2\u5f97\u5230\u4fee\u590d\u3002\u5728\u6b64\u7248\u672c\u4e2d\uff0c\u5f15\u5165\u4e86\u4e00\u4e9b\u65b0\u7684 REST API \uff0c\u4f7f\u83b7\u53d6\u6bcf\u4e2a\u5206\u533a/\u961f\u5217\u4fe1\u606f\u6210\u4e3a\u53ef\u80fd\u3002\u60a8\u53ef\u4ee5\u5728 ",(0,o.kt)("a",{parentName:"p",href:"http://yunikorn.apache.org/docs/api/scheduler"},"\u6b64\u5904")," \u627e\u5230\u5b8c\u6574\u7684\u63a5\u53e3\u5217\u8868\u3002"),(0,o.kt)("h2",{id:"\u793e\u533a"},"\u793e\u533a"),(0,o.kt)("p",null,"Apache YuniKorn \u793e\u533a\u5f88\u9ad8\u5174\u6b22\u8fce\u65b0\u7684\u63d0\u4ea4\u8005 Manikandan R \u548c\u65b0\u7684 PPMC \u6210\u5458 Kinga Marton\u3002\u6211\u4eec\u5e0c\u671b\u770b\u5230\u66f4\u591a\u7684\u63d0\u4ea4\u8005\u52a0\u5165\u793e\u533a\u5e76\u5e2e\u52a9\u5851\u9020\u9879\u76ee\u3002\u5728\u8fc7\u53bb\u7684\u51e0\u4e2a\u6708\u91cc\uff0c\u6211\u4eec\u4f1a\u7ee7\u7eed\u57282\u4e2a\u4e0d\u540c\u7684\u65f6\u533a\u4e3e\u884c\u4e24\u5468\u4e00\u6b21\u7684\u793e\u533a\u4f1a\u8bae\u3001\u4e34\u65f6\u4f1a\u8bae\u3001\u7ebf\u4e0b\u6e20\u9053\u8ba8\u8bba\u3002\u6211\u4eec\u7684\u793e\u533a\u5c06\u7ee7\u7eed\u5f00\u653e\u7ed9\u5404\u4f4d\u3002"))}d.isMDXComponent=!0}}]);