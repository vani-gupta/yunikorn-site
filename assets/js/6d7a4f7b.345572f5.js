"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3554],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(n),d=i,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},70754:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],l={id:"scheduler_configuration",title:"Scheduler Configuration"},u=void 0,s={unversionedId:"design/scheduler_configuration",id:"version-1.0.0/design/scheduler_configuration",title:"Scheduler Configuration",description:"\x3c!--",source:"@site/versioned_docs/version-1.0.0/design/scheduler_configuration.md",sourceDirName:"design",slug:"/design/scheduler_configuration",permalink:"/docs/design/scheduler_configuration",draft:!1,tags:[],version:"1.0.0",frontMatter:{id:"scheduler_configuration",title:"Scheduler Configuration"},sidebar:"docs",previous:{title:"Support K8s Predicates",permalink:"/docs/design/predicates"},next:{title:"Batch Workloads Ordering with StateAware Policy",permalink:"/docs/design/state_aware_scheduling"}},p={},c=[{value:"Scheduler Configuration",id:"scheduler-configuration",level:2},{value:"Queue Configuration",id:"queue-configuration",level:2},{value:"Queue Definition",id:"queue-definition",level:3},{value:"User definition",id:"user-definition",level:3},{value:"Placement Rules definition",id:"placement-rules-definition",level:3},{value:"Configuration updates",id:"configuration-updates",level:3},{value:"Access Control Lists",id:"access-control-lists",level:3},{value:"Shim Configuration",id:"shim-configuration",level:2},{value:"K8s shim",id:"k8s-shim",level:3},{value:"YARN shim",id:"yarn-shim",level:3}],h={toc:c};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Yunikorn core scheduler configuration has two separate areas that need to be configured. The scheduler service itself, things like web service ports etc, and the queue configuration. The split between the two types of configuration is proposed with two points in mind:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Separation of duty"),(0,r.kt)("li",{parentName:"ul"},"Dynamic vs Static")),(0,r.kt)("p",null,"The scheduler configuration is mainly static. There is no need to change a web service port or a scheduling policy while the service is running. The queue configuration is far more dynamic and can change while the service is running."),(0,r.kt)("p",null,"From a separation of duty we can allow an operator that manages the cluster to make changes to the scheduler queues. You would not want to allow that administrator to change the scheduler configuration itself."),(0,r.kt)("p",null,"Separated from the core scheduler configuration we have one or more shim configurations. We currently cannot anticipate the deployment model of the scheduler and its shims. A shim, like the k8s-shim, might run in the same container or node but there is no guarantee it will. We also do not know the number of shims that will be used with one core scheduler. There is also still the possibility to have multiple instances of the same shim with one core scheduler."),(0,r.kt)("p",null,"Shim configuration must be independent of the core scheduler configuration."),(0,r.kt)("h2",{id:"scheduler-configuration"},"Scheduler Configuration"),(0,r.kt)("p",null,"Scheduler configuration covers all the configuration needed to start the scheduler and the dependent services. The configuration consists of a simple key value pair. All configuration to start the service must be part of this configuration.\nThe scheduler configuration must exclude the queue related configuration."),(0,r.kt)("p",null,"Scheduler configuration as currently identified"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Bind host"),(0,r.kt)("li",{parentName:"ul"},"Service port"),(0,r.kt)("li",{parentName:"ul"},"Web bind host"),(0,r.kt)("li",{parentName:"ul"},"Web service port"),(0,r.kt)("li",{parentName:"ul"},"SSL config"),(0,r.kt)("li",{parentName:"ul"},"Shims Configured"),(0,r.kt)("li",{parentName:"ul"},"SchedulerACL")),(0,r.kt)("p",null,"Configuration to consider:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Assign multiple containers in one go: use case is bin packing, don\u2019t spread an application over large number of nodes. Needs to become configurable."),(0,r.kt)("li",{parentName:"ul"},"Pre-emption related configuration:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"threshold: do not pre-empt from a queue if the cluster load is below a certain threshold."),(0,r.kt)("li",{parentName:"ul"},"Interval: pause between pre-emption checks")))),(0,r.kt)("h2",{id:"queue-configuration"},"Queue Configuration"),(0,r.kt)("h3",{id:"queue-definition"},"Queue Definition"),(0,r.kt)("p",null,"On startup the scheduler will load the configuration for the queues from the provided configuration file after initialising the service. If there is no queue configuration provided the scheduler should start up with a simple default configuration which performs a well documented default behaviour.\nBased on the kubernetes definition this configuration could be a configMap ",(0,r.kt)("sup",{id:"s1"},(0,r.kt)("a",{parentName:"p",href:"#f1"},"1"))," but not a CRD."),(0,r.kt)("p",null,"The queue configuration is dynamic. Changing the queue configuration must not require a scheduler restart.\nChanges should be allowed by either calling the GO based API, the REST based API or by updating the configuration file. Changes made through the API must be persisted in the configuration file. Making changes through an API is not a high priority requirement and could be postponed to a later release."),(0,r.kt)("p",null,"The queue configuration defines queues in a hierarchy: a tree. The base of the tree is the ",(0,r.kt)("em",{parentName:"p"},"root")," queue. The queue configuration must define a single ",(0,r.kt)("em",{parentName:"p"},"root")," queue. All queues that are defined in queue configuration are considered ",(0,r.kt)("em",{parentName:"p"},"managed")," queues."),(0,r.kt)("p",null,"The root queue reflect the whole cluster. Resource settings on the root queue are not allowed. The resources available to the root queue are calculated based on the registered node resources in the cluster. If resources would be specified on the root limit the cluster would either be artificially limited to a specific size or expect resources to be available that are not there."),(0,r.kt)("p",null,"Queues in the hierarchy in the tree are separated by the \u201c.\u201d dot character (ASCII 0x2E). This indirectly means that a queue name itself cannot contain a dot as it interferes with the hierarchy separator. Any queue name in the configuration that contains a dot will cause the configuration to be considered invalid. However we must allow placement rules to create a queue with a dot based input."),(0,r.kt)("p",null,"Not all queues can be used to submit an application to. Applications can only be submitted to a queue which does not have a queue below it. These queues are defined as the ",(0,r.kt)("em",{parentName:"p"},"leaf")," queues of the tree. Queues that are not a ",(0,r.kt)("em",{parentName:"p"},"leaf")," and thus can contain other queues or child queues are considered ",(0,r.kt)("em",{parentName:"p"},"parent")," queues."),(0,r.kt)("p",null,"Each queue must have exactly one ",(0,r.kt)("em",{parentName:"p"},"parent")," queue, besides the root queue. The root queue cannot have a ",(0,r.kt)("em",{parentName:"p"},"parent")," and will be automatically defined as a ",(0,r.kt)("em",{parentName:"p"},"parent")," queue type.\nA fully qualified queue name, case insensitive, must be unique in the hierarchy. A queue in the hierarchy can thus be only uniquely identified by its fully qualified path. This means that a queue with the same name is allowed at a different point in the hierarchy.\nExample:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"root.companyA.development\nroot.companyB.development\nroot.production.companyA\n")),(0,r.kt)("p",null,"In the example the queues ",(0,r.kt)("em",{parentName:"p"},"companyA")," and ",(0,r.kt)("em",{parentName:"p"},"companyB")," are ",(0,r.kt)("em",{parentName:"p"},"parent")," queues. Both ",(0,r.kt)("em",{parentName:"p"},"development")," queues are ",(0,r.kt)("em",{parentName:"p"},"leaf")," queues.\nThe second instance of the ",(0,r.kt)("em",{parentName:"p"},"companyA")," queue is a ",(0,r.kt)("em",{parentName:"p"},"leaf")," queue which is not related to the first instance as it is defined at a different level in the hierarchy."),(0,r.kt)("p",null,"The queue as defined in the configuration will be assigned a queue type. This can either be implicit based on how the queue is defined in the hierarchy or explicit by setting the optional ",(0,r.kt)("em",{parentName:"p"},"parent")," property as part of the queue definition. By default all queues will be assigned their type based on the configuration. There is only one case in which this should automatic process would need to be overridden and that is to mark a ",(0,r.kt)("em",{parentName:"p"},"leaf")," in the configuration as a ",(0,r.kt)("em",{parentName:"p"},"parent"),". The use case is part of the ",(0,r.kt)("a",{parentName:"p",href:"#placement-rules-definition"},"placement rules"),". In that case the configuration could be used to define a ",(0,r.kt)("em",{parentName:"p"},"parent")," queue for only ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queues."),(0,r.kt)("p",null,"Access control lists provide a split between submission permission and administration permissions. Submission access to a queue allows an application to be submitted to the queue by the users or groups specified. The administration permissions allows submission to the queue plus the administrative actions. Administrative actions are currently limited to killing an application and moving an application to a different queue."),(0,r.kt)("p",null,"Access control lists are checked recursively up to the root of the tree starting at the lowest point in the tree. In other words when the access control list of a queue does not allow access the parent queue is checked. The checks are repeated all the way up to the root of the queues."),(0,r.kt)("p",null,"On each queue, except the root queue, the following properties can be set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"QueueType:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Parent (boolean)"))),(0,r.kt)("li",{parentName:"ul"},"Resource settings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Guaranteed (resource)"),(0,r.kt)("li",{parentName:"ul"},"Maximum (resource)"))),(0,r.kt)("li",{parentName:"ul"},"Running Application limit:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum (integer)"))),(0,r.kt)("li",{parentName:"ul"},"Queue Permissions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SubmitACL (ACL)"),(0,r.kt)("li",{parentName:"ul"},"AdminACL (ACL)"))),(0,r.kt)("li",{parentName:"ul"},"Pre emption setting:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PreEmptionAllowed (boolean)"))),(0,r.kt)("li",{parentName:"ul"},"Application sort algorithm:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ApplicationSortPolicy (enumeration: fair, fifo)")))),(0,r.kt)("p",null,"On the root queue only the following properties can be set:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Running Application limit:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum (integer)"))),(0,r.kt)("li",{parentName:"ul"},"Queue Permissions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SubmitACL (ACL)"),(0,r.kt)("li",{parentName:"ul"},"AdminACL (ACL)"))),(0,r.kt)("li",{parentName:"ul"},"Application sort algorithm:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ApplicationSortPolicy (enumeration: fair, fifo)")))),(0,r.kt)("h3",{id:"user-definition"},"User definition"),(0,r.kt)("p",null,"Applications are run by a user could run in one or more queues. The queues can have limits set on the resources that can be used. This does not limit the amount of resources that can be used by the user in the cluster."),(0,r.kt)("p",null,"From an administrative perspective setting a limit of the resources that can be used by a specific user can be important.  In this case a user is broadly defined as the identity that submits the application. This can be a service or a person, from a scheduling perspective there is no difference.\nUser limits can prevent a take over of a queue or the cluster by a misbehaving user or application. From a multi tenancy perspective user limits also allows for sharing or subdivision of resources within the tenancy however that is defined."),(0,r.kt)("p",null,"Adding user based limits will allow the cluster administrators to control the cluster wide resource usage of a user:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Running Application limit:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum (integer)"))),(0,r.kt)("li",{parentName:"ul"},"Resource setting:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum (resource)")))),(0,r.kt)("h3",{id:"placement-rules-definition"},"Placement Rules definition"),(0,r.kt)("p",null,"Schedulers can place an application in a queue dynamically. This means that an application when submitted does not have to include a queue to run in."),(0,r.kt)("p",null,"A placement rule will use the application details to place the application in the queue. The outcome of running a placement rule will be a fully qualified queue or a ",(0,r.kt)("inlineCode",{parentName:"p"},"fail"),", which means execute the next rule in the list. Rules will be executed in the order that they are defined."),(0,r.kt)("p",null,"During the evaluation of the rule the result could be a queue name that contains a dot. This is especially true for user and group names which are POSIX compliant. When a rule generates a partial queue name that contains a dot it must be replaced as it is the separator in the hierarchy. The replacement text will be ",(0,r.kt)("inlineCode",{parentName:"p"},"_dot_")),(0,r.kt)("p",null,"The first rule that matches, i.e. returns a fully qualified queue name, will halt the execution of the rules. If the application is not placed at the end of the list of rules the application will be rejected. Rules can return queues that are not defined in the configuration only if the rule allows creation of queues."),(0,r.kt)("p",null,"These queues created by the placement rules are considered ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queues as they are not managed by the administrator in the configuration. An administrator cannot influence the ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queue creation or deletion. The scheduler creates the queue when it is needed and removes the queue automatically when it is no longer used."),(0,r.kt)("p",null,"Rules provide a fully qualified queue name as the result. To allow for deeper nesting of queues the parent of the queue can be set as part of the rule evaluation. The rule definition should allow a fixed configured fully qualified parent to be specified or it can call a second rule to generate the parent queue.  By default a queue is generated as a child of the root queue."),(0,r.kt)("p",null,"Example:\nPlacing an application submitted by the user ",(0,r.kt)("em",{parentName:"p"},"user1")," whom is a member of the groups ",(0,r.kt)("em",{parentName:"p"},"user1")," and ",(0,r.kt)("em",{parentName:"p"},"companyA")," in a queue based on UserName:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Rule name: UserName\n    Parent: root.fixedparent\nResult: root.fixedparent.user1\n\nRule name: UserName\n    Parent: SecondaryGroup\n    Filter:\n        Type: allow\n        Groups: company.*\nResult: root.companyA.user1\n\nRule name: UserName\nFilter:\n    Users: user2,user3\nResult: denied placement\n")),(0,r.kt)("p",null,"The default behaviour for placing an application in a queue, which would do the same as using the queue that is provided during submit, would be a rule that takes the provided queue with the create flag set to false."),(0,r.kt)("p",null,"Access permissions will be enforced as part of the rule evaluation. For ",(0,r.kt)("em",{parentName:"p"},"managed")," queues this means that the ACL for the queue itself is checked. For an ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queue the parent queue ACL is the one that is checked. For the definition of the access control list and checks see the ",(0,r.kt)("a",{parentName:"p",href:"#access-control-lists"},"Access Control Lists")," chapter."),(0,r.kt)("p",null,"Defining placement rules in the configuration requires the following information per rule:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Name (string)"))),(0,r.kt)("li",{parentName:"ul"},"Parent",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Parent (string)"))),(0,r.kt)("li",{parentName:"ul"},"Create Flag:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create (boolean)"))),(0,r.kt)("li",{parentName:"ul"},"Filter:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A regular expression or list of users/groups to apply the rule to.")))),(0,r.kt)("p",null,"The filter can be used to allow the rule to be used (default behaviour) or deny the rule to be used. User or groups matching the filter will be either allowed or denied.\nThe filter is defined as follow:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Type (string) which can have no value (empty) or "allow" or "deny", case insensitive.'))),(0,r.kt)("li",{parentName:"ul"},"Users:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A list of zero or more user names. If the list is exactly one long it will be interpreted as a regular expression."))),(0,r.kt)("li",{parentName:"ul"},"Groups:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A list of zero or more group names. If the list is exactly one long it will be interpreted as a regular expression.")))),(0,r.kt)("p",null,"Proposed rules for placing applications would be:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Provided: returns the queue provided during the submission"),(0,r.kt)("li",{parentName:"ul"},"UserName: returns the user name"),(0,r.kt)("li",{parentName:"ul"},"PrimaryGroupName: returns the primary group of the user"),(0,r.kt)("li",{parentName:"ul"},"SecondaryGroupName: returns the first secondary group of the user that matches"),(0,r.kt)("li",{parentName:"ul"},"Fixed: returns the queue name configured in the rule"),(0,r.kt)("li",{parentName:"ul"},"ApplicationType: returns the application type (if available)")),(0,r.kt)("p",null,"For ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queues in the current revision of the configuration you cannot provide any queue specific properties. However in the future we should consider propagating specific resource related settings from a ",(0,r.kt)("em",{parentName:"p"},"managed")," parent to the ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," child, specifically:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dynamic Resource settings:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Guaranteed (resource)"),(0,r.kt)("li",{parentName:"ul"},"Maximum (resource)"))),(0,r.kt)("li",{parentName:"ul"},"Dynamic Running Application limit:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Maximum (integer)")))),(0,r.kt)("h3",{id:"configuration-updates"},"Configuration updates"),(0,r.kt)("p",null,"Updating the queue definition will allow updating the existing queue properties as well as adding and removing queues. A new queue definition will only become active if the configuration can be parsed. The change of the definition is an atomic change which applies all modification in one action."),(0,r.kt)("p",null,"Updating the queue properties will not automatically trigger further action. This means that if the maximum number of resources of a queue or its parent is changed we leave the applications in the queue running as they are. The scheduler will adhere to the new property values which should see the convergence over time."),(0,r.kt)("p",null,"A ",(0,r.kt)("em",{parentName:"p"},"managed")," queue will only be removed if it is removed from the configuration. Before we can remove a queue it must not be running applications. This means that when a ",(0,r.kt)("em",{parentName:"p"},"managed")," queue is removed from the configuration it must be empty or the system needs to allow the queue to drain. Forcing a ",(0,r.kt)("em",{parentName:"p"},"managed")," queue to be empty before we can remove it is not possible which means that ",(0,r.kt)("em",{parentName:"p"},"managed")," queues are removed in multiple steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The queue is removed from the configuration"),(0,r.kt)("li",{parentName:"ol"},"The queue is marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"draining")),(0,r.kt)("li",{parentName:"ol"},"All managed queues that are ",(0,r.kt)("inlineCode",{parentName:"li"},"draining")," and empty are removed")),(0,r.kt)("p",null,"Long running applications should be handled gracefully when removing a ",(0,r.kt)("em",{parentName:"p"},"managed")," queue. The scheduler should at least track and expose that a queue has been in a ",(0,r.kt)("em",{parentName:"p"},"draining")," state for an extended period of time. In the optimal case the application should be notified of the queue change to allow it to release resources. In all cases the queue administrators should be notified to allow them to take action. This action would currently be a manual move of the application to a different queue by the administrators."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Unmanaged")," queues that are not defined in the queue definition are created by the scheduler automatically based on the placement rules. ",(0,r.kt)("em",{parentName:"p"},"Unmanaged")," queues have a lifespan independent of the configuration. Whenever an ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queue is empty it will get removed. The queue will automatically be created again when a new application is requesting it via triggering the placement rule."),(0,r.kt)("p",null,"Removing an empty ",(0,r.kt)("em",{parentName:"p"},"managed")," or ",(0,r.kt)("em",{parentName:"p"},"unmanaged")," queue is handled by the same removal code which must run independent of the configuration updates and scheduling actions."),(0,r.kt)("p",null,"Configurations can change over time. The impact of a fail over or restart must still be investigated.\nBase point to make: a changed configuration should not impact the currently running applications. Queues that no longer exist should be handled somehow."),(0,r.kt)("h3",{id:"access-control-lists"},"Access Control Lists"),(0,r.kt)("p",null,"The scheduler ACL is independent of the queue ACLs. A scheduler administrator is not by default allowed to submit an application or administer the queues in the system."),(0,r.kt)("p",null,"All ACL types should use the same definition pattern. We should allow at least POSIX user and group names which uses the portable filename character set ",(0,r.kt)("sup",{id:"s2"},(0,r.kt)("a",{parentName:"p",href:"#f2"},"2")),". However we should take into account that we could have domain specifiers based on the environment that the system runs in (@ sign as per HADOOP-12751)."),(0,r.kt)("p",null,"By default access control is enabled and access is denied. The only special case is for the core scheduler which automatically adds the system user, the scheduler process owner, to the scheduler ACL. The scheduler process owner is allowed to make sure that the process owner can use the API to call any administrative actions."),(0,r.kt)("p",null,"Access control lists give access to the users and groups that have been specified in the list. They do not provide the possibility to explicitly remove or deny access to the users and groups specified in the list."),(0,r.kt)("p",null,"The access control list is defined as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ACL ::= \u201c*\u201d |  userlist [ \u201c \u201c grouplist ]\nuserlist ::= \u201c\u201d | user { \u201c,\u201d user }\ngrouplist ::= \u201c\u201d | group { \u201c,\u201d group }\n")),(0,r.kt)("p",null,"This definition specifies a wildcard of * which results in access for everyone. If the user list is empty and the group list is empty nobody will have access. This deny all ACL has two possible representations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"an empty access control list."),(0,r.kt)("li",{parentName:"ul"},"a single space.")),(0,r.kt)("p",null,"If there is no access control list is configured access is denied by default."),(0,r.kt)("h2",{id:"shim-configuration"},"Shim Configuration"),(0,r.kt)("p",null,"The shim configuration is highly dependent on the shim implementation. The k8s shim differs from the YARN shim. Currently the k8s shim is configured via command line options but we should not depend on that."),(0,r.kt)("h3",{id:"k8s-shim"},"K8s shim"),(0,r.kt)("p",null,"The full configuration of the K8s shim is still under development."),(0,r.kt)("h3",{id:"yarn-shim"},"YARN shim"),(0,r.kt)("p",null,"The full configuration of the YARN shim is still under development."),(0,r.kt)("hr",null),(0,r.kt)("br",null),(0,r.kt)("b",{id:"f1"}),"1: https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/#should-i-use-a-configmap-or-a-custom-resource. [\u21a9](#s1)",(0,r.kt)("br",null),(0,r.kt)("b",{id:"f2"}),"2: The set of characters from which portable filenames are constructed. [\u21a9](#s2)",(0,r.kt)("br",null),"`A B C D E F G H I J K L M N O P Q R S T U V W X Y Z a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 . _ -`")}d.isMDXComponent=!0}}]);