"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[90597],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=a,f=c["".concat(u,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},44171:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:7},i="Behavior Rule",o={unversionedId:"products/waf/listener/profiles/rules/behavior_rules",id:"version-6.0/products/waf/listener/profiles/rules/behavior_rules",title:"Behavior Rule",description:"Overview",source:"@site/versioned_docs/version-6.0/products/waf/listener/profiles/rules/behavior_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/behavior_rules",permalink:"/v6/products/waf/listener/profiles/rules/behavior_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar",previous:{title:"Response Rule",permalink:"/v6/products/waf/listener/profiles/rules/response_rules"},next:{title:"Tamper Rules",permalink:"/v6/products/waf/listener/profiles/rules/tamper_rules"}},u={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Variable Name",id:"variable-name",level:4},{value:"Condition",id:"condition",level:4},{value:"Condition Value",id:"condition-value",level:4}],p={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"behavior-rule"},"Behavior Rule"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Behavior rule is a feature of Haltdos WAF that that allows application owners to identify the malicious user intent with the help of the behavioral engine."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Behavior Rule",src:r(36442).Z,width:"1605",height:"762"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the links: ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"}," Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Behavior Rules")),(0,a.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Record Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Variable Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Condition"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"PATTERN EXIST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Condition Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"rule-name"},"Rule Name"),(0,a.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h4",{id:"rule-message"},"Rule Message"),(0,a.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,a.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,a.kt)("h4",{id:"rule-action"},"Rule Action"),(0,a.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. no action, drop, record, tarpit, temperory blacklist, etc."),(0,a.kt)("h4",{id:"variable-name"},"Variable Name"),(0,a.kt)("p",null,"Users are allowed to specify the name of the variable for the rule."),(0,a.kt)("h4",{id:"condition"},"Condition"),(0,a.kt)("p",null,"Users are allowed to specify the condition from the drop-down menu."),(0,a.kt)("h4",{id:"condition-value"},"Condition Value"),(0,a.kt)("p",null,"Users are allowed to specify the condition value for the rule."))}d.isMDXComponent=!0},36442:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/behavior_rule-2f08a519633a4dd45a6e8c2b595d8a34.png"}}]);