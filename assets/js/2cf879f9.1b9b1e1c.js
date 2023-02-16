"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[96804],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||a;return r?l.createElement(m,i(i({ref:t},d),{},{components:r})):l.createElement(m,i({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<a;u++)i[u]=r[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},77493:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={sidebar_position:9},i="Correlation Rules",o={unversionedId:"products/waf/listener/profiles/rules/correlation_rules",id:"version-6.0/products/waf/listener/profiles/rules/correlation_rules",title:"Correlation Rules",description:"Overview",source:"@site/versioned_docs/version-6.0/products/waf/listener/profiles/rules/correlation_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/correlation_rules",permalink:"/v6/products/waf/listener/profiles/rules/correlation_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sidebar",previous:{title:"Tamper Rules",permalink:"/v6/products/waf/listener/profiles/rules/tamper_rules"},next:{title:"Deception Rules",permalink:"/v6/products/waf/listener/profiles/rules/deception_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Add Rule Condition",id:"add-rule-condition",level:4},{value:"Rule ID",id:"rule-id",level:4},{value:"Match",id:"match",level:4}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"correlation-rules"},"Correlation Rules"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Correlation rules support using compounding logic to make more advanced rules that address your security needs. For example, \"(Condition 1 and Condition 2)\" means that if Condition 1 and Condition 2 are met, WAF should take the action that's specified in the correlation rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses and might specify to block traffic from a certain IP address, and only if a certain browser is being used. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Correlation Rule",src:r(33455).Z,width:"1121",height:"558"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"}," Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Correlation Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"ALL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Record Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule ID"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Correlation Rule",src:r(70755).Z,width:"1115",height:"462"})),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Users are allowe to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("h4",{id:"uri"},"URI"),(0,n.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,n.kt)("h4",{id:"method"},"Method"),(0,n.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,n.kt)("h4",{id:"rule-action"},"Rule Action"),(0,n.kt)("p",null,"The following actions are available to the User-"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"DROP  & RECORD REQUEST - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},"RECORD REQUEST - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,n.kt)("li",{parentName:"ol"},"BYPASS REQUEST - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},"TEMPORARY BLACKLIST SOURCE IP - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,n.kt)("li",{parentName:"ol"},"REDIRECT - If the request satisfies the rule, then the user is redirected to another page."),(0,n.kt)("li",{parentName:"ol"},"SEND CAPTCHA CHALLENGE - If the request satisfies the rule, then the user receives a challenge like a captcha."),(0,n.kt)("li",{parentName:"ol"},"SEND RESPONSE WITH STATUS CODE - If the request satisfies the rule, a custom HTML response will be returned with a status code."),(0,n.kt)("li",{parentName:"ol"},"SEND CUSTOM RESPONSE - If the request satisfies the rule, a custom HTML response will be returned."),(0,n.kt)("li",{parentName:"ol"},"CHANGE RESPONSE CODE - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."),(0,n.kt)("li",{parentName:"ol"},"TARPIT SRC. IP - If the request satisfies the rule, the end-user IP will be tarpit."),(0,n.kt)("li",{parentName:"ol"},"NO ACTION - If the request satisfies the rule, then no action will be performed on the current request."),(0,n.kt)("li",{parentName:"ol"},"SKIP LEARNING -If the request satisfies the rule, then no learning will be performed on the current request."),(0,n.kt)("li",{parentName:"ol"},"SEND EMPTY RESPONSE - If the request satisfies the rule, the end-user will get empty response / blank page in return.")),(0,n.kt)("h4",{id:"add-rule-condition"},"Add Rule Condition"),(0,n.kt)("p",null,"By clicking on Add Rule Condition button, the end-user can add specify the location to be whitelisted. At least, one location is mandatory for this rule. "),(0,n.kt)("h4",{id:"rule-id"},"Rule ID"),(0,n.kt)("p",null,"Users can specify the rule Id for which condition should be created. "),(0,n.kt)("h4",{id:"match"},"Match"),(0,n.kt)("p",null,"Users can specify whether the rule should be matched or not matched."))}p.isMDXComponent=!0},33455:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/correlation_rule-1c48f90ce04255474bfc95bd4a923797.png"},70755:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/correlation_rule2-097b85adb154539551e3c45190a83d8b.png"}}]);