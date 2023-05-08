"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[78950],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(i,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},58169:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:1},o="Error Rules",s={unversionedId:"products/waf/listener/profiles/rules/error_rules",id:"products/waf/listener/profiles/rules/error_rules",title:"Error Rules",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/error_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/error_rules",permalink:"/products/waf/listener/profiles/rules/error_rules",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Rules",permalink:"/products/waf/listener/profiles/rules/"},next:{title:"Form Rule",permalink:"/products/waf/listener/profiles/rules/form_rules"}},i={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>HTTP Response Code</strong>",id:"http-response-code",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-rules"},"Error Rules"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Error Page",src:r(92552).Z,width:"1840",height:"899"}),"\n",(0,a.kt)("img",{alt:"Error Page",src:r(16737).Z,width:"1835",height:"919"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the links: ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Error Rules")),(0,a.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on Save changes.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URI"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Custom Error Page"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,a.kt)("h5",{id:"uri"},(0,a.kt)("strong",{parentName:"h5"},"URI")),(0,a.kt)("p",null,"Users are allowed to specify the URI."),(0,a.kt)("h5",{id:"method"},(0,a.kt)("strong",{parentName:"h5"},"Method")),(0,a.kt)("p",null,"Users are allowed to specify the method for the rule."),(0,a.kt)("h5",{id:"http-response-code"},(0,a.kt)("strong",{parentName:"h5"},"HTTP Response Code")),(0,a.kt)("p",null,"Users are allowed to specify the HTTP response code based on the custom error rule name."),(0,a.kt)("h5",{id:"rule-action"},(0,a.kt)("strong",{parentName:"h5"},"Rule Action")),(0,a.kt)("p",null,"Users are allowed to specify the rule action. Users can select either to take no action or send custom response."),(0,a.kt)("h5",{id:"custom-error-page"},(0,a.kt)("strong",{parentName:"h5"},"Custom Error Page")),(0,a.kt)("p",null,"Users are allowed to select the custom error page from the drop-down list."))}d.isMDXComponent=!0},16737:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/errorrule1-e65e30b2f340321293804256f59a093a.png"},92552:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/errorrules-841e24152c24e2b0114955122d206b54.png"}}]);