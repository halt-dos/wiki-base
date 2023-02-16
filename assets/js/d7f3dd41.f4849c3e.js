"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[87484],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78871:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={sidebar_position:5},i="Response Filtering",o={unversionedId:"products/cloud/waf/listener/security-profile/rules/response",id:"version-6.0/products/cloud/waf/listener/security-profile/rules/response",title:"Response Filtering",description:"These rules filter responses from applications and prevent sensitive data leaks",source:"@site/versioned_docs/version-6.0/products/cloud/waf/listener/security-profile/rules/response.md",sourceDirName:"products/cloud/waf/listener/security-profile/rules",slug:"/products/cloud/waf/listener/security-profile/rules/response",permalink:"/v6/products/cloud/waf/listener/security-profile/rules/response",draft:!1,tags:[],version:"6.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Whitelist Rules",permalink:"/v6/products/cloud/waf/listener/security-profile/rules/whitelist"},next:{title:"Correlation Rules",permalink:"/v6/products/cloud/waf/listener/security-profile/rules/correlation"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"response-filtering"},"Response Filtering"),(0,l.kt)("p",null,"These rules filter responses from applications and prevent sensitive data leaks"),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Response Filtering is a feature of Haltdos WAF that allows application owners to filter responses from backend application servers for HTTP requests on matching specified URL patterns."),(0,l.kt)("h3",{id:"how-to-use"},"How to Use"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Follow the links: ",(0,l.kt)("strong",{parentName:"p"},"WAF > Zones > Listener > Security Profiles > Rules > Response Filtering"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described in the table below.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on ",(0,l.kt)("strong",{parentName:"p"},"Save"),"."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,l.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,l.kt)("td",{parentName:"tr",align:null},"Description for the rule in string format"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Match URI"),(0,l.kt)("td",{parentName:"tr",align:null},"Relative URL path"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Choose from the dropdown"),(0,l.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Search For"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Replace with"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("h4",{id:"description"},"Description"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rule Name")),(0,l.kt)("p",null,"Specify a user-friendly name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Message")),(0,l.kt)("p",null,"The user can specify a short description of the rule. The description would explain the purpose of the rule."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Match URI")),(0,l.kt)("p",null,"Specify the URI for which this rule will be applied. Any requests made on this URI triggers this rule and the respective response shall be filtered according to the rule."),(0,l.kt)("p",null,"The URI should be a relative URL and in the format: ","[/home/(*)]"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Rule Action")),(0,l.kt)("p",null,"Specify the different actions to be taken by the rule."),(0,l.kt)("p",null,"::: info\nReplace : String to be replaced for specific HTTP response\nReplace All : String to be replaced for all the HTTP response\nEmpty Response : Client will received as empty page in the response.\nTemporary Blacklist : Temporarily blacklist the request\nSend Challenge : Captcha validation\nNo Action : No action will be taken\n:::"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Search For")),(0,l.kt)("p",null,"This specifies the value that will be replaced with the search pattern. In order to use the PCRE regex capture group from the search string, use dollar ($) with positions such as $1, $2. "),(0,l.kt)("p",null,"Note: In order to escape the dollar in the field, use the dollar twice consecutively such as $$."))}c.isMDXComponent=!0}}]);