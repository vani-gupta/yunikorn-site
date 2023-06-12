"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[44993],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(t),d=o,f=s["".concat(u,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},c),{},{components:t})):r.createElement(f,i({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[s]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},66039:function(e,n,t){t.r(n),t.d(n,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],l={id:"cluster",title:"\u96c6\u7fa4"},u=void 0,p={unversionedId:"api/cluster",id:"api/cluster",title:"\u96c6\u7fa4",description:"\x3c!--",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/cluster.md",sourceDirName:"api",slug:"/api/cluster",permalink:"/zh-cn/docs/next/api/cluster",draft:!1,tags:[],version:"current",frontMatter:{id:"cluster",title:"\u96c6\u7fa4"},sidebar:"docs",previous:{title:"\u8fd0\u884cMPI\u4f5c\u4e1a",permalink:"/zh-cn/docs/next/user_guide/workloads/run_mpi"},next:{title:"\u8c03\u5ea6\u5668",permalink:"/zh-cn/docs/next/api/scheduler"}},c={},s=[{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:2},{value:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94",level:3},{value:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94",level:3}],m={toc:s},d="wrapper";function f(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u96c6\u7fa4"},"\u96c6\u7fa4"),(0,a.kt)("p",null,"\u5c06\u56de\u4f20Yunikorn\u6240\u7ba1\u7406\u7684\u96c6\u7fa4\u7684\u4fe1\u606f\u3002\u4fe1\u606f\u5305\u62ec\u5e94\u7528\u7a0b\u5e8f\u7684\u6570\u91cf\uff08\u5305\u542b\u603b\u6570\u3001\u5931\u8d25\u3001\u6302\u8d77\u3001\u6b63\u5728\u8fd0\u884c\u3001\u5df2\u5b8c\u6210\uff09\u548c\u5bb9\u5668\u7684\u6570\u91cf\uff0c\u4ee5\u53ca\u8d44\u6e90\u7ba1\u7406\u5668\u7684\u6784\u5efa\u4fe1\u606f\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4f4d\u7f6e(URL)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"/ws/v1/clusters")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u65b9\u6cd5(Method)")," : ",(0,a.kt)("inlineCode",{parentName:"p"},"GET")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u9700\u6c42\u6743\u9650"),"\uff1a\u65e0"),(0,a.kt)("h3",{id:"\u6210\u529f\u65f6\u7684\u54cd\u5e94"},"\u6210\u529f\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"200 OK")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("p",null,"\u5728\u672c\u793a\u4f8b\u4e2d\uff0c\u54cd\u5e94\u7684\u5185\u5bb9\u6765\u81ea\u4e00\u4e2a\u7fa4\u96c6\uff0c\u62e5\u6709\u4e00\u4e2a\u8d44\u6e90\u7ba1\u7406\u5668\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "startTime": 1649167576110754000,\n        "rmBuildInformation": [\n            {\n                "buildDate": "2022-02-21T19:09:16+0800",\n                "buildVersion": "latest",\n                "isPluginVersion": "false",\n                "rmId": "rm-123"\n            }\n        ],\n        "partition": "default",\n        "clusterName": "kubernetes"\n    }\n]\n')),(0,a.kt)("h3",{id:"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"},"\u51fa\u9519\u65f6\u7684\u54cd\u5e94"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u56de\u4f20\u4ee3\u7801"),"\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"500 Internal Server Error")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "status_code": 500,\n    "message": "system error message. for example, json: invalid UTF-8 in string: ..",\n    "description": "system error message. for example, json: invalid UTF-8 in string: .."\n}\n')))}f.isMDXComponent=!0}}]);