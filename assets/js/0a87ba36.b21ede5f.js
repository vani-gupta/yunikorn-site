"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4540],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=r,k=p["".concat(s,".").concat(d)]||p[d]||m[d]||l;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},46464:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},s=void 0,u={unversionedId:"performance/metrics",id:"performance/metrics",title:"Scheduler Metrics",description:"\x3c!--",source:"@site/docs/performance/metrics.md",sourceDirName:"performance",slug:"/performance/metrics",permalink:"/docs/next/performance/metrics",draft:!1,tags:[],version:"current",frontMatter:{id:"metrics",title:"Scheduler Metrics",keywords:["metrics"]},sidebar:"docs",previous:{title:"Benchmarking Tutorial",permalink:"/docs/next/performance/performance_tutorial"},next:{title:"Profiling",permalink:"/docs/next/performance/profiling"}},c={},p=[{value:"Scheduler Metrics",id:"scheduler-metrics",level:3},{value:"Queue Metrics",id:"queue-metrics",level:3},{value:"Event Metrics",id:"event-metrics",level:3},{value:"Access Metrics",id:"access-metrics",level:2},{value:"Aggregate Metrics to Prometheus",id:"aggregate-metrics-to-prometheus",level:2}],m={toc:p},d="wrapper";function k(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"YuniKorn leverages ",(0,l.kt)("a",{parentName:"p",href:"https://prometheus.io/"},"Prometheus")," to record metrics. The metrics system keeps tracking of\nscheduler's critical execution paths, to reveal potential performance bottlenecks. Currently, there are three categories\nfor these metrics:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"scheduler: generic metrics of the scheduler, such as allocation latency, num of apps etc."),(0,l.kt)("li",{parentName:"ul"},"queue: each queue has its own metrics sub-system, tracking queue status."),(0,l.kt)("li",{parentName:"ul"},"event: record various changes of events in YuniKorn.")),(0,l.kt)("p",null,"all metrics are declared in ",(0,l.kt)("inlineCode",{parentName:"p"},"yunikorn")," namespace."),(0,l.kt)("h3",{id:"scheduler-metrics"},"Scheduler Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metrics Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metrics Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerAllocation"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of attempts to allocate containers. State of the attempt includes ",(0,l.kt)("inlineCode",{parentName:"td"},"allocated"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"rejected"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"error"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"released"),". Increase only.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicationSubmission"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of application submissions. State of the attempt includes ",(0,l.kt)("inlineCode",{parentName:"td"},"accepted")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"rejected"),". Increase only.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"applicationStatus"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of application status. State of the application includes ",(0,l.kt)("inlineCode",{parentName:"td"},"running")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"completed"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalNodeActive"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of active nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalNodeFailed"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total number of failed nodes.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeResourceUsage"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total resource usage of node, by resource name.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"schedulingLatency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"Latency of the main scheduling routine, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodeSortingLatency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"Latency of all nodes sorting, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appSortingLatency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"Latency of all applications sorting, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"queueSortingLatency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"Latency of all queues sorting, in seconds.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tryNodeLatency"),(0,l.kt)("td",{parentName:"tr",align:null},"Histogram"),(0,l.kt)("td",{parentName:"tr",align:null},"Latency of node condition checks for container allocations, such as placement constraints, in seconds, in seconds.")))),(0,l.kt)("h3",{id:"queue-metrics"},"Queue Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metrics Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metrics Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"appMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Counter"),(0,l.kt)("td",{parentName:"tr",align:null},"Application Metrics, record the total number of applications. State of the application includes ",(0,l.kt)("inlineCode",{parentName:"td"},"accepted"),",",(0,l.kt)("inlineCode",{parentName:"td"},"rejected")," and ",(0,l.kt)("inlineCode",{parentName:"td"},"Completed"),".")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"usedResourceMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Queue used resource.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"pendingResourceMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Queue pending resource.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"availableResourceMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Used resource metrics related to queues etc.")))),(0,l.kt)("h3",{id:"event-metrics"},"Event Metrics"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Metrics Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Metrics Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsCreated"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events created.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsChanneled"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events channeled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsNotChanneled"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events not channeled.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsProcessed"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events processed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsStored"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events stored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsNotStored"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events not stored.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"totalEventsCollected"),(0,l.kt)("td",{parentName:"tr",align:null},"Gauge"),(0,l.kt)("td",{parentName:"tr",align:null},"Total events collected.")))),(0,l.kt)("h2",{id:"access-metrics"},"Access Metrics"),(0,l.kt)("p",null,"YuniKorn metrics are collected through Prometheus client library, and exposed via scheduler restful service.\nOnce started, they can be accessed via endpoint http://localhost:9080/ws/v1/metrics."),(0,l.kt)("h2",{id:"aggregate-metrics-to-prometheus"},"Aggregate Metrics to Prometheus"),(0,l.kt)("p",null,"It's simple to setup a Prometheus server to grab YuniKorn metrics periodically. Follow these steps:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Setup Prometheus (read more from ",(0,l.kt)("a",{parentName:"p",href:"https://prometheus.io/docs/prometheus/latest/installation/"},"Prometheus docs"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Configure Prometheus rules: a sample configuration "))),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"global:\n  scrape_interval:     3s\n  evaluation_interval: 15s\n\nscrape_configs:\n  - job_name: 'yunikorn'\n    scrape_interval: 1s\n    metrics_path: '/ws/v1/metrics'\n    static_configs:\n    - targets: ['docker.for.mac.host.internal:9080']\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start Prometheus")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell",metastring:"script",script:!0},"docker pull prom/prometheus:latest\ndocker run -p 9090:9090 -v /path/to/prometheus.yml:/etc/prometheus/prometheus.yml prom/prometheus\n")),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"docker.for.mac.host.internal")," instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"localhost")," if you are running Prometheus in a local docker container\non Mac OS. Once started, open Prometheus web UI: http://localhost:9090/graph. You'll see all available metrics from\nYuniKorn scheduler."))}k.isMDXComponent=!0}}]);