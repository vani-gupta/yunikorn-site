"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[36322],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function p(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?p(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=t.createContext({}),l=function(e){var r=t.useContext(i),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(i.Provider,{value:r},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,p=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||p;return n?t.createElement(m,s(s({ref:r},c),{},{components:n})):t.createElement(m,s({ref:r},c))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var p=n.length,s=new Array(p);s[0]=d;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o[u]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<p;l++)s[l]=n[l];return t.createElement.apply(null,s)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75545:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var t=n(87462),a=n(63366),p=(n(67294),n(3905)),s=["components"],o={id:"run_spark",title:"\u8fd0\u884cSpark\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528YuniKorn\u8fd0\u884cSpark\u4f5c\u4e1a",keywords:["spark"]},i=void 0,l={unversionedId:"user_guide/workloads/run_spark",id:"version-1.2.0/user_guide/workloads/run_spark",title:"\u8fd0\u884cSpark\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528YuniKorn\u8fd0\u884cSpark\u4f5c\u4e1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/version-1.2.0/user_guide/workloads/run_spark.md",sourceDirName:"user_guide/workloads",slug:"/user_guide/workloads/run_spark",permalink:"/zh-cn/docs/1.2.0/user_guide/workloads/run_spark",draft:!1,tags:[],version:"1.2.0",frontMatter:{id:"run_spark",title:"\u8fd0\u884cSpark\u4f5c\u4e1a",description:"\u5982\u4f55\u4f7f\u7528YuniKorn\u8fd0\u884cSpark\u4f5c\u4e1a",keywords:["spark"]},sidebar:"docs",previous:{title:"Run NVIDIA GPU Jobs",permalink:"/zh-cn/docs/1.2.0/user_guide/workloads/run_nvidia"},next:{title:"\u8fd0\u884cFlink\u4f5c\u4e1a",permalink:"/zh-cn/docs/1.2.0/user_guide/workloads/run_flink"}},c={},u=[{value:"\u4e3aSpark\u51c6\u5907docker\u955c\u50cf",id:"\u4e3aspark\u51c6\u5907docker\u955c\u50cf",level:2},{value:"\u4e3aSpark\u4f5c\u4e1a\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4",id:"\u4e3aspark\u4f5c\u4e1a\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4",level:2},{value:"\u521b\u5efa\u670d\u52a1\u5e10\u53f7\u548c\u89d2\u8272\u7ed1\u5b9a",id:"\u521b\u5efa\u670d\u52a1\u5e10\u53f7\u548c\u89d2\u8272\u7ed1\u5b9a",level:2},{value:"\u63d0\u4ea4\u4e00\u4e2aSpark\u4f5c\u4e1a",id:"\u63d0\u4ea4\u4e00\u4e2aspark\u4f5c\u4e1a",level:2},{value:"\u5e55\u540e\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f",id:"\u5e55\u540e\u53d1\u751f\u4e86\u4ec0\u4e48",level:2}],k={toc:u},d="wrapper";function m(e){var r=e.components,o=(0,a.Z)(e,s);return(0,p.kt)(d,(0,t.Z)({},k,o,{components:r,mdxType:"MDXLayout"}),(0,p.kt)("admonition",{title:"\u6ce8\u610f",type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u5047\u8bbe\u60a8\u5df2\u5b89\u88c5YuniKorn\u53ca\u5176\u51c6\u5165\u63a7\u5236\u5668\u3002\u8bf7\u53c2\u9605 ",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.2.0/"},"\u5f00\u59cb")," \u67e5\u770b\u5982\u4f55\u64cd\u4f5c\u3002")),(0,p.kt)("h2",{id:"\u4e3aspark\u51c6\u5907docker\u955c\u50cf"},"\u4e3aSpark\u51c6\u5907docker\u955c\u50cf"),(0,p.kt)("p",null,"\u8981\u5728Kubernetes\u4e0a\u8fd0\u884cSpark\uff0c\u60a8\u9700\u8981Spark\u7684docker\u955c\u50cf\u3002\u60a8\u53ef\u4ee5\n1\uff09\u4f7f\u7528Spark\u56e2\u961f\u63d0\u4f9b\u7684docker\u955c\u50cf\n2\uff09\u4ece\u5934\u5f00\u59cb\u6784\u5efa\u4e00\u4e2a\u955c\u50cf\u3002\u5982\u679c\u4f60\u60f3\u5efa\u7acb\u81ea\u5df1\u7684Spark\u7684docker\u955c\u50cf\uff0c\u60a8\u53ef\u4ee5\u627e\u5230 ",(0,p.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/building-spark.html"},"\u5b8c\u6574\u8bf4\u660e"),"\n\u5728 Spark \u6587\u6863\u4e2d\u3002\u7b80\u5316\u6b65\u9aa4:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u4e0b\u8f7d\u4e00\u4e2a\u652f\u6301Kubernetes\u7684Spark\u7248\u672c\uff0cURL: ",(0,p.kt)("a",{parentName:"li",href:"https://github.com/apache/spark"},"https://github.com/apache/spark")),(0,p.kt)("li",{parentName:"ul"},"\u6784\u5efa\u652f\u6301Kubernetes\u7684Spark\u7248\u672c:")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"./buid/mvn -Pkubernetes -DskipTests clean package\n")),(0,p.kt)("p",null,"\u5efa\u8bae\u4f7f\u7528",(0,p.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/spark/tags"},"dockerhub"),"\u4e2d\u4e0d\u540cspark\u7248\u672c\u7684\u5b98\u65b9\u955c\u50cf"),(0,p.kt)("h2",{id:"\u4e3aspark\u4f5c\u4e1a\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4"},"\u4e3aSpark\u4f5c\u4e1a\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4"),(0,p.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u7a7a\u95f4\uff1a"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"cat <<EOF | kubectl apply -f -\napiVersion: v1\nkind: Namespace\nmetadata:\n  name: spark-test\nEOF\n")),(0,p.kt)("h2",{id:"\u521b\u5efa\u670d\u52a1\u5e10\u53f7\u548c\u89d2\u8272\u7ed1\u5b9a"},"\u521b\u5efa\u670d\u52a1\u5e10\u53f7\u548c\u89d2\u8272\u7ed1\u5b9a"),(0,p.kt)("p",null,"\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"spark-test")," \u547d\u540d\u7a7a\u95f4\u4e0b\u521b\u5efa service account \u548c role bindings :"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},'cat <<EOF | kubectl apply -n spark-test -f -\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  name: spark\n  namespace: spark-test\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: Role\nmetadata:\n  name: spark-role\n  namespace: spark-test\nrules:\n- apiGroups: [""]\n  resources: ["pods"]\n  verbs: ["get", "watch", "list", "create", "delete"]\n- apiGroups: [""]\n  resources: ["configmaps"]\n  verbs: ["get", "create", "delete"]\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: RoleBinding\nmetadata:\n  name: spark-role-binding\n  namespace: spark-test\nsubjects:\n- kind: ServiceAccount\n  name: spark\n  namespace: spark-test\nroleRef:\n  kind: Role\n  name: spark-role\n  apiGroup: rbac.authorization.k8s.io\nEOF\n')),(0,p.kt)("p",null,":::\u6ce8\u610f\n\u4e0d\u53ef\u4ee5\u5728\u751f\u4ea7\u73af\u5883\u4f7f\u7528 ",(0,p.kt)("inlineCode",{parentName:"p"},"ClusterRole")," \u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"ClusterRoleBinding")," \u53bb\u8fd0\u884c\u4e00\u4e2aSpark\u4f5c\u4e1a\uff01\n\u8bf7\u4e3a\u8fd0\u884cSpark\u4f5c\u4e1a\u914d\u7f6e\u66f4\u7ec6\u7c92\u5ea6\u7684\u5b89\u5168\u4e0a\u4e0b\u6587\u3002\u6709\u5173\u5982\u4f55\u914d\u7f6e\u6b63\u786e\u7684RBAC\u89c4\u5219\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u89c1",(0,p.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"\u94fe\u63a5"),"\u3002\n:::"),(0,p.kt)("h2",{id:"\u63d0\u4ea4\u4e00\u4e2aspark\u4f5c\u4e1a"},"\u63d0\u4ea4\u4e00\u4e2aSpark\u4f5c\u4e1a"),(0,p.kt)("p",null,"\u5982\u679c\u8fd9\u662f\u4ece\u672c\u5730\u8ba1\u7b97\u673a\u8fd0\u884c\u7684\uff0c\u60a8\u9700\u8981\u542f\u52a8\u4ee3\u7406\u624d\u80fd\u4e0eapi\u670d\u52a1\u5668\u901a\u4fe1\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"kubectl proxy\n")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/apache/spark/tags"},"dockerhub"),"\u4e2d\u6709\u4e0d\u540cspark\u7248\u672c\u7684\u5b98\u65b9\u955c\u50cf\n\u8fd0\u884c\u4e00\u4e2a\u7b80\u5355\u7684 SparkPi \u4f5c\u4e1a\uff0c\u5047\u8bbe Spark \u4e8c\u8fdb\u5236\u6587\u4ef6\u672c\u5730\u5b89\u88c5\u5728 ",(0,p.kt)("inlineCode",{parentName:"p"},"/usr/local")," \u76ee\u5f55\u4e2d\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"export SPARK_HOME=/usr/local/spark/\n${SPARK_HOME}/bin/spark-submit --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n   --master k8s://http://localhost:8001 --deploy-mode cluster --name spark-pi \\\n   --class org.apache.spark.examples.SparkPi \\\n   --conf spark.executor.instances=1 \\\n   --conf spark.kubernetes.namespace=spark-test \\\n   --conf spark.kubernetes.executor.request.cores=1 \\\n   --conf spark.kubernetes.container.image=docker.io/apache/spark:v3.3.0 \\\n   --conf spark.kubernetes.authenticate.driver.serviceAccountName=spark-test:spark \\\n   local:///opt/spark/examples/jars/spark-examples_2.12-3.3.0.jar\n")),(0,p.kt)("admonition",{type:"note"},(0,p.kt)("p",{parentName:"admonition"},"\u5728 ",(0,p.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html#configuration"},"spark")," \u4e2d\u6709\u66f4\u591a\u8bbe\u7f6e\u9a71\u52a8\u7a0b\u5e8f\u548c\u6267\u884c\u7a0b\u5e8f\u7684\u9009\u9879\u3002\n\u53ef\u4ee5\u5206\u914d applicationId \u548c\u961f\u5217\u8def\u5f84\u3002"),(0,p.kt)("pre",{parentName:"admonition"},(0,p.kt)("code",{parentName:"pre"},"--conf spark.kubernetes.executor.label.applicationId=application-spark-0001\n--conf spark.kubernetes.driver.label.applicationId=application-spark-0001\n--conf spark.kubernetes.executor.label.queue=root.default.sandbox\n--conf spark.kubernetes.driver.label.queue=root.default.sandbox\n"))),(0,p.kt)("p",null,"\u60a8\u53ef\u4ee5\u770b\u89c1Spark\u7684driver\u548cexecutors\u5728Kubernetes\u4e0a\u521b\u5efa:"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"spark-pods",src:n(62766).Z,width:"645",height:"97"})),(0,p.kt)("p",null,"spark-pi\u7ed3\u679c\u5728 driver pod\u4e2d\u3002"),(0,p.kt)("p",null,(0,p.kt)("img",{alt:"spark-pods",src:n(83429).Z,width:"1081",height:"99"})),(0,p.kt)("h2",{id:"\u5e55\u540e\u53d1\u751f\u4e86\u4ec0\u4e48"},"\u5e55\u540e\u53d1\u751f\u4e86\u4ec0\u4e48\uff1f"),(0,p.kt)("p",null,"\u5f53Spark\u4f5c\u4e1a\u63d0\u4ea4\u5230\u96c6\u7fa4\u65f6\uff0c\u8be5\u4f5c\u4e1a\u5c06\u63d0\u4ea4\u5230 ",(0,p.kt)("inlineCode",{parentName:"p"},"spark-test")," \u547d\u540d\u7a7a\u95f4\u3002Spark\u7684driver\u7684pod\u5c06\u9996\u5148\u5728\u6b64\u540d\u79f0\u7a7a\u95f4\u4e0b\u521b\u5efa\u3002\n\u7531\u4e8e\u8be5\u96c6\u7fa4\u5df2\u542f\u7528YuniKorn\u51c6\u5165\u63a7\u5236\u5668\uff0c\u5f53driver\u7684pod\u521b\u5efa\u540e\uff0c\u51c6\u5165\u63a7\u5236\u5668\u4f1a\u4fee\u6539pod\u7684\u89c4\u8303\u5e76\u6ce8\u5165 ",(0,p.kt)("inlineCode",{parentName:"p"},"schedulerName=yunikorn"),"\uff0c\n\u901a\u8fc7\u8fd9\u6837\u505a\u9ed8\u8ba4K8s\u8c03\u5ea6\u7a0b\u5e8f\u5c06\u8df3\u8fc7\u6b64pod\uff0c\u800c\u7531YuniKorn\u8c03\u5ea6\u3002\u8bf7\u67e5\u770b\u8fd9\u91cc",(0,p.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/extend-kubernetes/configure-multiple-schedulers/"},"\u5728Kubernetes\u914d\u7f6e\u5176\u4ed6\u8c03\u5ea6\u5668"),"\u6765\u4e86\u89e3\u662f\u5982\u4f55\u5b8c\u6210\u7684."),(0,p.kt)("p",null,"\u9ed8\u8ba4\u914d\u7f6e\u5df2\u542f\u7528\u653e\u7f6e\u89c4\u5219\uff0c\u8be5\u89c4\u5219\u4f1a\u81ea\u52a8\u5c06 ",(0,p.kt)("inlineCode",{parentName:"p"},"spark-test")," \u547d\u540d\u7a7a\u95f4\u6620\u5c04\u5230YuniKorn\u7684\u961f\u5217 ",(0,p.kt)("inlineCode",{parentName:"p"},"root.spark test"),"\u3002\n\u63d0\u4ea4\u5230\u6b64\u547d\u540d\u7a7a\u95f4\u7684\u6240\u6709Spark\u4f5c\u4e1a\u5c06\u9996\u5148\u81ea\u52a8\u63d0\u4ea4\u5230\u8be5\u961f\u5217\u3002\n\u8981\u4e86\u89e3\u6709\u5173\u653e\u7f6e\u89c4\u5219\u5982\u4f55\u5de5\u4f5c\u7684\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6587\u6863",(0,p.kt)("a",{parentName:"p",href:"/zh-cn/docs/1.2.0/user_guide/placement_rules"},"\u5e94\u7528\u653e\u7f6e\u89c4\u5219"),"\u3002\n\u5230\u76ee\u524d\u4e3a\u6b62\uff0c\u540d\u79f0\u7a7a\u95f4\u5b9a\u4e49pod\u7684\u5b89\u5168\u4e0a\u4e0b\u6587\uff0c\u961f\u5217\u8003\u8651\u5230\u4f5c\u4e1a\u987a\u5e8f\u3001\u961f\u5217\u8d44\u6e90\u516c\u5e73\u6027\u7b49\u56e0\u7d20\u4f1a\u786e\u5b9a\u5982\u4f55\u8c03\u5ea6\u4f5c\u4e1a\u548cpod\u3002\n\u6ce8\u610f\uff0c\u8fd9\u662f\u6700\u7b80\u5355\u7684\u8bbe\u7f6e\uff0c\u4e0d\u5f3a\u5236\u6267\u884c\u961f\u5217\u5bb9\u91cf\u3002\u8be5\u961f\u5217\u88ab\u89c6\u4e3a\u5177\u6709\u65e0\u9650\u5bb9\u91cf\u3002"),(0,p.kt)("p",null,"YuniKor\u5728\u6807\u7b7e ",(0,p.kt)("inlineCode",{parentName:"p"},"spark-app-selector")," \u4e2d\u91cd\u590d\u8bbe\u7f6eSpark\u7684\u5e94\u7528\u7a0b\u5e8fID\uff0c\u5e76\u63d0\u4ea4\u6b64\u4f5c\u4e1a\u53bbYuniKorn\uff0c\u540c\u65f6\u88ab\u89c6\u4e3a\u4e00\u4efd\u4f5c\u4e1a\u3002\n\u5f53\u96c6\u7fa4\u4e2d\u6709\u8db3\u591f\u7684\u8d44\u6e90\u65f6\uff0c\u4f5c\u4e1a\u88ab\u8c03\u5ea6\u5e76\u8fd0\u884c\u3002\nYuniKorn\u5c06driver\u7684pod\u5206\u914d\u7ed9\u4e00\u4e2a\u8282\u70b9\uff0c\u7ed1\u5b9apod\u5e76\u542f\u52a8\u6240\u6709\u5bb9\u5668\u3002\n\u4e00\u65e6driver\u7684pod\u542f\u52a8\uff0c\u5b83\u4f1a\u8bf7\u6c42\u4e00\u5806executor\u7684pod\u6765\u8fd0\u884c\u5b83\u7684\u4efb\u52a1\u3002\u8fd9\u4e9bpod\u4e5f\u5c06\u5728\u76f8\u540c\u7684\u540d\u79f0\u7a7a\u95f4\u4e2d\u521b\u5efa\uff0c\u5e76\u4e14\u88abYuniKorn\u6240\u8c03\u5ea6\u3002"))}m.isMDXComponent=!0},62766:function(e,r,n){r.Z=n.p+"assets/images/RunningSparkOnK8s-81f17d64fb66e633e664e62d9fc26b3e.png"},83429:function(e,r,n){r.Z=n.p+"assets/images/sparkResult-1100ddf2b4bcd8b3f0cce9af4e119508.png"}}]);