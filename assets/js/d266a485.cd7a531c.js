"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[59698],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=l,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},51485:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var n=r(87462),l=(r(67294),r(3905));const a={sidebar_position:1},o="Error Rules",i={unversionedId:"products/waf/listener/profiles/rules/error_rules",id:"version-6.0/products/waf/listener/profiles/rules/error_rules",title:"Error Rules",description:"Overview",source:"@site/versioned_docs/version-6.0/products/waf/listener/profiles/rules/error_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/error_rules",permalink:"/v6/products/waf/listener/profiles/rules/error_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Rules",permalink:"/v6/products/waf/listener/profiles/rules/"},next:{title:"Form Rule",permalink:"/v6/products/waf/listener/profiles/rules/form_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"HTTP Response Code",id:"http-response-code",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Custom Error Page",id:"custom-error-page",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"error-rules"},"Error Rules"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Error Page",src:r(52758).Z,width:"1614",height:"810"}),"\n",(0,l.kt)("img",{alt:"Error Page",src:r(48189).Z,width:"1614",height:"777"})),(0,l.kt)("h3",{id:"how-to-use"},"How to Use"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Follow the links: ",(0,l.kt)("strong",{parentName:"li"},"WAF")," > ",(0,l.kt)("strong",{parentName:"li"},"Listener")," > ",(0,l.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,l.kt)("strong",{parentName:"li"},"Rules")," > ",(0,l.kt)("strong",{parentName:"li"},"Error Rules")),(0,l.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,l.kt)("li",{parentName:"ol"},"Click on Save changes.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URI"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Method"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"ALL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Response Code"),(0,l.kt)("td",{parentName:"tr",align:null},"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Custom Error Page"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("h4",{id:"rule-name"},"Rule Name"),(0,l.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,l.kt)("h4",{id:"rule-message"},"Rule Message"),(0,l.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,l.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,l.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,l.kt)("h4",{id:"uri"},"URI"),(0,l.kt)("p",null,"Users are allowed to specify the URI."),(0,l.kt)("h4",{id:"method"},"Method"),(0,l.kt)("p",null,"Users are allowed to specify the method for the rule."),(0,l.kt)("h4",{id:"http-response-code"},"HTTP Response Code"),(0,l.kt)("p",null,"Users are allowed to specify the HTTP response code based on the custom error rule name."),(0,l.kt)("h4",{id:"rule-action"},"Rule Action"),(0,l.kt)("p",null,"Users are allowed to specify the rule action. Users can select either to take no action or send custom response."),(0,l.kt)("h4",{id:"custom-error-page"},"Custom Error Page"),(0,l.kt)("p",null,"Users are allowed to select the custom error page from the drop-down list."))}d.isMDXComponent=!0},52758:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error_rule-cc7a20ef57056751605a13705970819f.png"},48189:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error_rule_config-9be7ae76adc158af74e7b86ed1fefea3.png"}}]);