"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6105],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?l.createElement(h,i(i({ref:t},p),{},{components:r})):l.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},27615:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={sidebar_position:12},i="Log Rules",o={unversionedId:"waf/docs/listener/profiles/rules/log_rules",id:"waf/docs/listener/profiles/rules/log_rules",title:"Log Rules",description:"Overview",source:"@site/docs/waf/docs/listener/profiles/rules/log_rules.md",sourceDirName:"waf/docs/listener/profiles/rules",slug:"/waf/docs/listener/profiles/rules/log_rules",permalink:"/wiki-base/waf/docs/listener/profiles/rules/log_rules",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"wafSidebar",previous:{title:"Script Rule",permalink:"/wiki-base/waf/docs/listener/profiles/rules/script_rules"},next:{title:"Signatures",permalink:"/wiki-base/waf/docs/listener/profiles/signatures"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"log-rules"},"Log Rules"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"These rules prevent Haltdos WAF from logging sensitive information like passwords, etc, and adhere to your compliance policy.\n",(0,n.kt)("img",{alt:"Log Rules",src:r(6609).Z,width:"1495",height:"519"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," >  ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Log Rules")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"ALL")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Log Rules",src:r(38040).Z,width:"1119",height:"785"})),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("h4",{id:"uri"},"URI"),(0,n.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,n.kt)("h4",{id:"method"},"Method"),(0,n.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,n.kt)("h4",{id:"find-location"},"Find Location"),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h4",{id:"match-condition"},"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",{id:"match-value"},"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}d.isMDXComponent=!0},6609:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/log_rules-e759e9c82c077e04211af68f1fa787d5.png"},38040:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/log_rules2-e4f28f1f3e6882f7f9c754627951fe18.png"}}]);