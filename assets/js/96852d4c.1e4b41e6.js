"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[78950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var l=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=l.createContext({}),u=function(e){var t=l.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,k=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return r?l.createElement(k,o(o({ref:t},p),{},{components:r})):l.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<a;u++)o[u]=r[u];return l.createElement.apply(null,o)}return l.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var l=r(87462),n=(r(67294),r(3905));const a={sidebar_position:1},o="Error Rules",i={unversionedId:"products/waf/listener/profiles/rules/error_rules",id:"products/waf/listener/profiles/rules/error_rules",title:"Error Rules",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/error_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/error_rules",permalink:"/rc/products/waf/listener/profiles/rules/error_rules",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Rules",permalink:"/rc/products/waf/listener/profiles/rules/"},next:{title:"Form Rule",permalink:"/rc/products/waf/listener/profiles/rules/form_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"HTTP Response Code",id:"http-response-code",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Custom Error Page",id:"custom-error-page",level:4}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"error-rules"},"Error Rules"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Error Page",src:r(92552).Z,width:"1840",height:"899"}),"\n",(0,n.kt)("img",{alt:"Error Page",src:r(16737).Z,width:"1835",height:"919"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Error Rules")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"ALL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"HTTP Response Code"),(0,n.kt)("td",{parentName:"tr",align:null},"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Custom Error Page"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("h4",{id:"uri"},"URI"),(0,n.kt)("p",null,"Users are allowed to specify the URI."),(0,n.kt)("h4",{id:"method"},"Method"),(0,n.kt)("p",null,"Users are allowed to specify the method for the rule."),(0,n.kt)("h4",{id:"http-response-code"},"HTTP Response Code"),(0,n.kt)("p",null,"Users are allowed to specify the HTTP response code based on the custom error rule name."),(0,n.kt)("h4",{id:"rule-action"},"Rule Action"),(0,n.kt)("p",null,"Users are allowed to specify the rule action. Users can select either to take no action or send custom response."),(0,n.kt)("h4",{id:"custom-error-page"},"Custom Error Page"),(0,n.kt)("p",null,"Users are allowed to select the custom error page from the drop-down list."))}d.isMDXComponent=!0},16737:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/errorrule1-e65e30b2f340321293804256f59a093a.png"},92552:(e,t,r)=>{r.d(t,{Z:()=>l});const l=r.p+"assets/images/errorrules-841e24152c24e2b0114955122d206b54.png"}}]);