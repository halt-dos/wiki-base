"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[93870],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=a,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},13028:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:9},i="Correlation Rules",o={unversionedId:"products/waf/listener/profiles/rules/correlation_rules",id:"products/waf/listener/profiles/rules/correlation_rules",title:"Correlation Rules",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/correlation_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/correlation_rules",permalink:"/rc/products/waf/listener/profiles/rules/correlation_rules",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sidebar",previous:{title:"Tamper Rules",permalink:"/rc/products/waf/listener/profiles/rules/tamper_rules"},next:{title:"Deception Rules",permalink:"/rc/products/waf/listener/profiles/rules/deception_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Add Rule Condition</strong>",id:"add-rule-condition",level:4},{value:"<strong>Rule ID</strong>",id:"rule-id",level:5},{value:"<strong>Match</strong>",id:"match",level:5}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"correlation-rules"},"Correlation Rules"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, \"(Condition 1 and Condition 2)\" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Correlation Rule",src:r(75664).Z,width:"1830",height:"928"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the links: ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Correlation Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URI"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Record Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule ID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,a.kt)("h5",{id:"uri"},(0,a.kt)("strong",{parentName:"h5"},"URI")),(0,a.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,a.kt)("h5",{id:"method"},(0,a.kt)("strong",{parentName:"h5"},"Method")),(0,a.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,a.kt)("h5",{id:"rule-action"},(0,a.kt)("strong",{parentName:"h5"},"Rule Action")),(0,a.kt)("p",null,"The following actions are available to the User-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DROP & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SOURCE IP")," - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND CAPTCHA CHALLENGE")," - If the request satisfies the rule, then the user receives a challenge like a captcha."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND RESPONSE WITH STATUS CODE")," - If the request satisfies the rule, a custom HTML response will be returned with a status code."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND CUSTOM RESPONSE")," - If the request satisfies the rule, a custom HTML response will be returned."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"CHANGE RESPONSE CODE")," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TARPIT SRC.IP")," - If the request satisfies the rule, the end-user IP will be tarpit."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SKIP LEARNING")," -If the request satisfies the rule, then no learning will be performed on the current request."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"SEND EMPTY RESPONSE")," - If the request satisfies the rule, the end-user will get empty response / blank page in return.")),(0,a.kt)("h4",{id:"add-rule-condition"},(0,a.kt)("strong",{parentName:"h4"},"Add Rule Condition")),(0,a.kt)("p",null,"By clicking on Add Rule Condition button, the end-user can add specify the location to be whitelisted. At least, one location is mandatory for this rule. "),(0,a.kt)("h5",{id:"rule-id"},(0,a.kt)("strong",{parentName:"h5"},"Rule ID")),(0,a.kt)("p",null,"Users can specify the rule ID for which condition should be created. "),(0,a.kt)("h5",{id:"match"},(0,a.kt)("strong",{parentName:"h5"},"Match")),(0,a.kt)("p",null,"Users can specify whether the rule should be matched or not matched."))}d.isMDXComponent=!0},75664:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/correlation_rule-4b188f131dce090902f26b5ea48991bb.png"}}]);