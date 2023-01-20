"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[65750],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,h=p["".concat(u,".").concat(m)]||p[m]||c[m]||l;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94567:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:8},i="Correlation Rules",o={unversionedId:"community/docs/waf/rules/correlation_rules",id:"version-6.0/community/docs/waf/rules/correlation_rules",title:"Correlation Rules",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/rules/correlation_rules.md",sourceDirName:"community/docs/waf/rules",slug:"/community/docs/waf/rules/correlation_rules",permalink:"/community/docs/waf/rules/correlation_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"Variable Rules",permalink:"/community/docs/waf/rules/variable_rules"},next:{title:"Signatures",permalink:"/community/docs/waf/signatures"}},u={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Add Rule Condition",id:"add-rule-condition",level:4},{value:"Rule ID",id:"rule-id",level:4},{value:"Match",id:"match",level:4}],d={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"correlation-rules"},"Correlation Rules"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, \"(Condition 1 and Condition 2)\" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Correlation Rule",src:r(68504).Z,width:"1643",height:"980"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Correlation Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP URI"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Record-request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Redirection URL"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"/")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule ID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"correlation rule",src:r(76587).Z,width:"1046",height:"337"})),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"rule-name"},"Rule Name"),(0,a.kt)("p",null,"Users are allowe to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h4",{id:"rule-message"},"Rule Message"),(0,a.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,a.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0."),(0,a.kt)("h4",{id:"uri"},"URI"),(0,a.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,a.kt)("h4",{id:"method"},"Method"),(0,a.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,a.kt)("h4",{id:"rule-action"},"Rule Action"),(0,a.kt)("p",null,"The following actions are available to the User-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DROP & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request.")),(0,a.kt)("h4",{id:"add-rule-condition"},"Add Rule Condition"),(0,a.kt)("p",null,"By clicking on Add Rule Condition button, the end-user can add specify the location to be whitelisted. At least, one location is mandatory for this rule."),(0,a.kt)("h4",{id:"rule-id"},"Rule ID"),(0,a.kt)("p",null,"Users can specify the rule Id for which condition should be created."),(0,a.kt)("h4",{id:"match"},"Match"),(0,a.kt)("p",null,"Users can specify whether the rule should be matched or not matched."))}c.isMDXComponent=!0},68504:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/correlation_rule-543043eb5177f1529be2c46218f2262e.png"},76587:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/correlation_rule22-8f418538c56ae32ef86eed11e60c0905.png"}}]);