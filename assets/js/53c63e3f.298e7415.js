"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[802],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},91842:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],u={id:"placement_rules",title:"Placement Rules"},o=void 0,s={unversionedId:"configuration/placement_rules",id:"version-0.8.0/configuration/placement_rules",title:"Placement Rules",description:"\x3c!--",source:"@site/versioned_docs/version-0.8.0/configuration/placement_rules.md",sourceDirName:"configuration",slug:"/configuration/placement_rules",permalink:"/docs/0.8.0/configuration/placement_rules",tags:[],version:"0.8.0",frontMatter:{id:"placement_rules",title:"Placement Rules"},sidebar:"version-0.8.0/docs",previous:{title:"Queue Config",permalink:"/docs/0.8.0/configuration/queue_config"},next:{title:"Acls",permalink:"/docs/0.8.0/configuration/acls"}},p=[{value:"Configuration",id:"configuration",children:[{value:"Create parameter",id:"create-parameter",children:[],level:3},{value:"Parent parameter",id:"parent-parameter",children:[],level:3},{value:"Filter parameter",id:"filter-parameter",children:[],level:3},{value:"Value parameter",id:"value-parameter",children:[],level:3}],level:2},{value:"Access Control List",id:"access-control-list",children:[],level:2},{value:"Rules",id:"rules",children:[{value:"Provided Rule",id:"provided-rule",children:[],level:3},{value:"User Name Rule",id:"user-name-rule",children:[],level:3},{value:"Fixed Rule",id:"fixed-rule",children:[],level:3},{value:"Tag Rule",id:"tag-rule",children:[],level:3}],level:2},{value:"Complex examples",id:"complex-examples",children:[],level:2}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"yunikorn-scheduler-placement-rules"},"YuniKorn Scheduler Placement Rules"),(0,l.kt)("p",null,"The basics for the placement rules are described in the ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.8.0/design/scheduler_configuration#placement-rules-definition"},"scheduler design document"),".\nMultiple rules can be chained to form a placement policy.\n",(0,l.kt)("a",{parentName:"p",href:"/docs/0.8.0/configuration/acls"},"Access control lists")," and rule filters are defined per rule and enforced per rule.\nThis document explains how to build a policy, including the rule usage, that is part of the scheduler with examples."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("p",null,"Rules are defined per partition as part of the scheduler queue configuration.\nThe order that the rules are defined in is the order in which they are executed.\nIf a rule matches the policy will stop executing the remaining rules."),(0,l.kt)("p",null,"A matching rule generates a fully qualified queue name.\nThis means that the name returned starts at the ",(0,l.kt)("em",{parentName:"p"},"root")," queue.\nThere is no limit on the number of levels in the queue hierarchy that can be generated."),(0,l.kt)("p",null,"When a rule is executed the result of rules that have been executed is unknown and not taken into account.\nSimilar for rule that have not been executed yet: rules cannot influence other rules except when they are configured as the ",(0,l.kt)("a",{parentName:"p",href:"#parent-parameter"},"parent")," rule."),(0,l.kt)("p",null,"If the policy does not generate a queue name and no more rules are left the application will be rejected."),(0,l.kt)("p",null,"Basic structure for the rule placement definition in the configuration:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: <name of the 1st rule>\n  - name: <name of the 2nd rule>\n")),(0,l.kt)("p",null,"Each rule can take a predefined set of parameters in the configuration.\nThe name of the rules that can be used are given in the ",(0,l.kt)("a",{parentName:"p",href:"#rules"},"rule")," description.\nA rule name is not case sensitive in the configuration.\nRule name must follow the following naming convention:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start with a letter: a-z or A-Z"),(0,l.kt)("li",{parentName:"ul"},"followed by 0 or more characters a-z, A-Z, 0-9 or _")),(0,l.kt)("p",null,"A rule that is not known, i.e. the name does not map to the rules defined below, will cause a initialisation error of the placement manager.\nRules can also throw a parse error or an error during the initialisation if the parameters are incorrect.\nA rule set with an error can never become active."),(0,l.kt)("p",null,"A placement manager is considered initialised if it has an active rule set.\nWhen the configuration is reloaded a new rule set will be created to replace the active rule set.\nIn the case that a new rule set loaded contains an error, i.e. is broken, the placement manager ignores the new rule set.\nThis means that the placement manager stays in a the state it was in when a broken rule set is loaded.\nIf the placement manager keeps using the existing active rule set in the case that it was already initialised.\nA message will be logged about the broken and ignored configuration."),(0,l.kt)("p",null,'Dots "." in the rule result are replaced by the string "',"_",'dot_".\nA dot is replaced because it is used as the hierarchy separator in the fully qualified queue name.\nReplacing the dot occurs before the full queue hierarchy is build and the result is qualified.\nThis means that we allow user name and or tag values to contain dots without the dots affecting the queue hierarchy.\nFor queues in the configuration that as an example must map to username with a dot you must specify them as follows:\nA user rule with the user ',(0,l.kt)("inlineCode",{parentName:"p"},"user.name")," will generate the queue name ",(0,l.kt)("inlineCode",{parentName:"p"},"root.user_dot_name"),' as output.\nIf that "user queue" must be added to the configuration the ',(0,l.kt)("inlineCode",{parentName:"p"},"user_dot_name")," name should be used."),(0,l.kt)("h3",{id:"create-parameter"},"Create parameter"),(0,l.kt)("p",null,"The create parameter is a boolean flag that defines if a queue that is generated by the rule may be created if it does not exist.\nThere is no guarantee that the queue will be created because the existing queues might prevent the queue creation.\nIf the queue generated by the rule does not exist and the flag is not set to ",(0,l.kt)("em",{parentName:"p"},"true")," the result of the rule will be a fail."),(0,l.kt)("p",null,"Basic yaml entry for a rule with ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: <name of the rule>\n    create: true\n")),(0,l.kt)("p",null,"The default value is ",(0,l.kt)("em",{parentName:"p"},"false"),".\nAllowed values: ",(0,l.kt)("em",{parentName:"p"},"true")," or ",(0,l.kt)("em",{parentName:"p"},"false"),", any other value will cause a parse error."),(0,l.kt)("h3",{id:"parent-parameter"},"Parent parameter"),(0,l.kt)("p",null,"The parent parameter allows specifying a rule that generates a parent queue for the current rule.\nParent rules can be nested, a parent rule ",(0,l.kt)("em",{parentName:"p"},"may")," contain another parent rule.\nThere is no enforced limit of parent rules that can be nested."),(0,l.kt)("p",null,"A parent rule is treated as if it was a rule specified at the top level of the list and thus has the same parameters and requirements as a any other rule in the placement definition.\nThe exception is that using a parent rule on a rule that already generates a fully qualified queue is considered a configuration error.\nThis error can only occur on the rule of type ",(0,l.kt)("a",{parentName:"p",href:"#fixed-rule"},"fixed"),", see the rule specification for more details."),(0,l.kt)("p",null,"NOTE: the rule execution traverses down the list of parent rules and executes the last one in the list first.\nThis means that the last parent rule will generate the queue directly below the root.\nSee the examples for details."),(0,l.kt)("p",null,"Basic yaml entry for a rule with a ",(0,l.kt)("inlineCode",{parentName:"p"},"parent")," rule:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: <name of the rule>\n    parent:\n      name: <name of the parent rule>\n")),(0,l.kt)("p",null,"The default value is ",(0,l.kt)("em",{parentName:"p"},"no")," parent."),(0,l.kt)("h3",{id:"filter-parameter"},"Filter parameter"),(0,l.kt)("p",null,"The filter on a rule allows filtering the users that the rule applies to.\nA filter is a complex configuration object."),(0,l.kt)("p",null,"The ",(0,l.kt)("em",{parentName:"p"},"users")," and ",(0,l.kt)("em",{parentName:"p"},"groups")," that can be configured can be one of two types:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"a regular expression"),(0,l.kt)("li",{parentName:"ul"},"a list of users or groups.")),(0,l.kt)("p",null,"If the entry for users or groups contains more than 1 entry in the yaml it is always considered a list of either users or groups.\nDuplicate entries in the lists are ignored and do not cause an error.\nSpecifying a regular expression beside other list elements is not allowed."),(0,l.kt)("p",null,"User and group names follow the standard linux user and group conventions.\nFor user names:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start with a letter: a-z or A-Z"),(0,l.kt)("li",{parentName:"ul"},"followed by 0 or more characters a-z, A-Z, 0-9 or _ . @ -"),(0,l.kt)("li",{parentName:"ul"},"the last character may also be a $")),(0,l.kt)("p",null,"For group names:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"start with a letter: a-z or A-Z"),(0,l.kt)("li",{parentName:"ul"},"followed by 0 or more characters a-z, A-Z, 0-9 or _ -")),(0,l.kt)("p",null,"If the list is exactly one entry it can be either a single user or group or a regular expression.\nWhen an entry contains a character that is not allowed in a user or group name the entry is considered a regular expression.\nThe regular expression must compile as specified.\nA regular expression that does not compile is ignored."),(0,l.kt)("p",null,"Specifically for the group regular expression: matching is performed one group at a time not the against the list of groups."),(0,l.kt)("p",null,"Basic ",(0,l.kt)("inlineCode",{parentName:"p"},"filter")," yaml entry:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"filter:\n  type: deny\n  users:\n    - <user name or regexp>\n    - <user name>\n  groups:\n    - <group name or regexp>\n    - <group name>\n")),(0,l.kt)("p",null,"The default value is ",(0,l.kt)("em",{parentName:"p"},"no")," filter."),(0,l.kt)("h3",{id:"value-parameter"},"Value parameter"),(0,l.kt)("p",null,"This is a generic value that can be used to pass to a rule to implement or alter its behaviour.\nThe value It is used by the ",(0,l.kt)("a",{parentName:"p",href:"#fixed-rule"},"fixed")," and the ",(0,l.kt)("a",{parentName:"p",href:"#tag-rule"},"tag")," rule.\nThe value is a single value in string form and is not interpreted or manipulated by the system."),(0,l.kt)("p",null,"Basic yaml entry for a rule with a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," set:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},'placementrules:\n  - name: <name of the rule>\n    value: "any string"\n')),(0,l.kt)("p",null,"The default is ",(0,l.kt)("em",{parentName:"p"},"no")," value."),(0,l.kt)("h2",{id:"access-control-list"},"Access Control List"),(0,l.kt)("p",null,"Access control lists are not defined in the rules but they impact the outcome of the placement policy.\nTwo access control lists can be defined on a queue:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Submit ACL: ",(0,l.kt)("em",{parentName:"li"},"submitacl")),(0,l.kt)("li",{parentName:"ol"},"Administration ACL: ",(0,l.kt)("em",{parentName:"li"},"adminacl"))),(0,l.kt)("p",null,"The placement rule will only match if the ACL of the queue allows submit access via either ACL.\nThe administrative queue ACL also provides ",(0,l.kt)("em",{parentName:"p"},"submit")," access.\nIf the queue does not exist or does not have an ACL set, the ACL of the parent queue is checked.\nThis recursive check is repeated until an ACL provides access or after the ACL of the root queue is checked."),(0,l.kt)("p",null,"For more detail on the ACL syntax check the ",(0,l.kt)("a",{parentName:"p",href:"/docs/0.8.0/configuration/acls"},"ACL documentation"),"."),(0,l.kt)("h2",{id:"rules"},"Rules"),(0,l.kt)("h3",{id:"provided-rule"},"Provided Rule"),(0,l.kt)("p",null,"Name to be used in the configuration: ",(0,l.kt)("em",{parentName:"p"},"provided")),(0,l.kt)("p",null,"Returns the queue provided during the submission of the application.\nThe behaviour of the this rule is to fully qualify the queue provided by the application if the queue is not fully qualified.\nIf a parent rule is set and the queue provided in the application submission is fully qualified then the parent rule will not be executed."),(0,l.kt)("p",null,"Supported parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create"),(0,l.kt)("li",{parentName:"ul"},"parent"),(0,l.kt)("li",{parentName:"ul"},"filter")),(0,l.kt)("p",null,"Example: create the queue passed in by the user if it does not exist under the users name"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: provided\n    create: true\n    parent:\n      name: user\n      create: true\n")),(0,l.kt)("p",null,"Application submit request by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",(0,l.kt)("inlineCode",{parentName:"p"},"my_special_queue"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.developer.my_special_queue")," (parent rule set the user name)"),(0,l.kt)("p",null,"Application submit request by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.dev_queue"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.dev_queue")," (parent rule ignored)"),(0,l.kt)("h3",{id:"user-name-rule"},"User Name Rule"),(0,l.kt)("p",null,"Name to be used in the configuration: ",(0,l.kt)("em",{parentName:"p"},"user")),(0,l.kt)("p",null,"Returns the queue based on the user name that is part of the submitted application."),(0,l.kt)("p",null,"Supported parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"create"),(0,l.kt)("li",{parentName:"ul"},"parent"),(0,l.kt)("li",{parentName:"ul"},"filter")),(0,l.kt)("p",null,"Example: submit to a queue based on the user name, do not create the queue if the queue does not exist:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: user\n    create: false\n")),(0,l.kt)("p",null,"Application submit request by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"finance.test"),", queue does exist:",(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.finance_dot_test")," (note the replacement of the dot)"),(0,l.kt)("p",null,"Application submit request by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),", queue does not exist:",(0,l.kt)("br",null),"\nResult: failed, next rule executed"),(0,l.kt)("h3",{id:"fixed-rule"},"Fixed Rule"),(0,l.kt)("p",null,"Name to be used in the configuration: ",(0,l.kt)("em",{parentName:"p"},"fixed")),(0,l.kt)("p",null,"Returns the name configured in the rule parameter ",(0,l.kt)("em",{parentName:"p"},"value"),".\nThe value configured must be a legal queue name or queue hierarchy.\nThe name does not have to be a fully qualified queue name.\nThe hierarchy in the name uses a dot as a separator for the queue names at the different levels in the hierarchy.\nThe fixed rule can only fail if the queue configured does not exist and the create flag is not set as it will always return the configured queue."),(0,l.kt)("p",null,"If the configured value is a fully qualified queue name configuring a parent rule will be considered an ",(0,l.kt)("em",{parentName:"p"},"error"),"."),(0,l.kt)("p",null,"Supported parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"value (required)"),(0,l.kt)("li",{parentName:"ul"},"create"),(0,l.kt)("li",{parentName:"ul"},"parent"),(0,l.kt)("li",{parentName:"ul"},"filter")),(0,l.kt)("p",null,"Example: a fixed queue returned always, without the ",(0,l.kt)("inlineCode",{parentName:"p"},"create")," flag set and thus requires the queue to be defined as a leaf queue in the configuration."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: fixed\n    value: last_resort\n")),(0,l.kt)("p",null,"Application submit request by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",(0,l.kt)("inlineCode",{parentName:"p"},"my_special_queue"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.last_resort")),(0,l.kt)("h3",{id:"tag-rule"},"Tag Rule"),(0,l.kt)("p",null,"Name to be used in the configuration: ",(0,l.kt)("em",{parentName:"p"},"tag"),"\nRetrieves the queue name from the applications tags.\nThe tag name that is checked for its value is configured in the rule using the ",(0,l.kt)("inlineCode",{parentName:"p"},"value"),".\nConfiguring a tag rule without a ",(0,l.kt)("inlineCode",{parentName:"p"},"value")," set is an error, however an application does not have to have the tag set."),(0,l.kt)("p",null,"If the tag is not set on the application the rule fails.\nIf the tag value returned from the application is a fully qualified queue name the parent rule, if configured, will not be executed."),(0,l.kt)("p",null,"Supported parameters:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"value (required)"),(0,l.kt)("li",{parentName:"ul"},"create"),(0,l.kt)("li",{parentName:"ul"},"parent"),(0,l.kt)("li",{parentName:"ul"},"filter")),(0,l.kt)("p",null,"Example: place an application based on the kubernetes ",(0,l.kt)("inlineCode",{parentName:"p"},"namespace")," which gets sets automatically in the application when submitted:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: tag\n    value: namespace\n    create: true\n")),(0,l.kt)("p",null,"Application submit request for a kubernetes based application in the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),", queue in the application on submit: ",(0,l.kt)("inlineCode",{parentName:"p"},"my_special_queue"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.default")),(0,l.kt)("p",null,"Application submit request for a kubernetes based application in the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"testing")," by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.testing")),(0,l.kt)("p",null,"Application submit request for a non kubernetes based application by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"developer"),(0,l.kt)("br",null),"\nResult: failed, next rule executed"),(0,l.kt)("h2",{id:"complex-examples"},"Complex examples"),(0,l.kt)("p",null,"In this complex example we chain three rules:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"a ",(0,l.kt)("inlineCode",{parentName:"li"},"user")," rule, with a parent rule ",(0,l.kt)("inlineCode",{parentName:"li"},"tag"),' using the kubernetes namespace, to be used only for users that are part of and "dev" group.'),(0,l.kt)("li",{parentName:"ol"},"a ",(0,l.kt)("inlineCode",{parentName:"li"},"tag")," rule using the kubernetes namespace, with a parent rule ",(0,l.kt)("inlineCode",{parentName:"li"},"fixed")," using the existing queue ",(0,l.kt)("inlineCode",{parentName:"li"},"root.namespaces"),"."),(0,l.kt)("li",{parentName:"ol"},"a ",(0,l.kt)("inlineCode",{parentName:"li"},"fixed")," rule to place everything that reaches this point in the ",(0,l.kt)("inlineCode",{parentName:"li"},"root.default")," queue.")),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"placementrules:\n  - name: user\n    create: true\n    filter:\n      type: allow\n      groups:\n        - dev*\n    parent:\n      - name: tag\n        value: namespace\n  - name: tag\n    value: namespace\n    create: true\n    parent:\n      - name: fixed\n        value: root.namespaces\n        filter:\n          type: allow\n          users:\n            - john\n  - name: fixed\n    value: root.default\n")),(0,l.kt)("p",null,"Application submit request for a kubernetes based application in the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"testing")," by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"john"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.namespaces.testing")," (matched in rule 2)"),(0,l.kt)("p",null,"Application submit request for a kubernetes based application in the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"newapp")," by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"sarah")," with groups membership ",(0,l.kt)("inlineCode",{parentName:"p"},"sarah, test_app, dev_app"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.newapp.sarah")," (matched in rule 1)"),(0,l.kt)("p",null,"Application submit request for a kubernetes based application in the namespace ",(0,l.kt)("inlineCode",{parentName:"p"},"testapp")," by the user ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," with groups membership ",(0,l.kt)("inlineCode",{parentName:"p"},"bob"),(0,l.kt)("br",null),"\nResult: ",(0,l.kt)("inlineCode",{parentName:"p"},"root.deault")," (matched in rule 3)"),(0,l.kt)("p",null,"In this second example we chain two rules:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"a ",(0,l.kt)("inlineCode",{parentName:"li"},"fixed")," rule to place everything in the ",(0,l.kt)("inlineCode",{parentName:"li"},"root.production")," queue"),(0,l.kt)("li",{parentName:"ol"},"a ",(0,l.kt)("inlineCode",{parentName:"li"},"user")," rule, with the create flag set")),(0,l.kt)("p",null,"In this case however we have ACLs set up on the ",(0,l.kt)("inlineCode",{parentName:"p"},"root.production")," queue to only allow two specific user to use this queue.\nSo even if the rule matches unless the user is either ",(0,l.kt)("inlineCode",{parentName:"p"},"john")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"bob")," the application will not be placed in the ",(0,l.kt)("inlineCode",{parentName:"p"},"production")," queue.\nAll other users will match the second rule and use their own queue, which is created if it does not exist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"partitions:\n  - name: default\n    queues:\n      - name: production\n        submitacl: john,bob\n    placementrules:\n      - name: fixed\n        value: root.production\n      - name: user\n        create: true\n")))}m.isMDXComponent=!0}}]);