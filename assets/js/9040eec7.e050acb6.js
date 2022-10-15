"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||l;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},36576:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:9},i="Access Log Rules",o={unversionedId:"products/cloud/waf/listener/security-profile/rules/log",id:"products/cloud/waf/listener/security-profile/rules/log",title:"Access Log Rules",description:"These rules prevent Haltdos WAF from logging sensitive fields like password, etc. and adhere to your compliance policy",source:"@site/docs/products/cloud/waf/listener/security-profile/rules/log.md",sourceDirName:"products/cloud/waf/listener/security-profile/rules",slug:"/products/cloud/waf/listener/security-profile/rules/log",permalink:"/products/cloud/waf/listener/security-profile/rules/log",draft:!1,tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"sidebar",previous:{title:"Developer Script",permalink:"/products/cloud/waf/listener/security-profile/rules/developer-scripts"},next:{title:"signatures",permalink:"/products/cloud/waf/listener/security-profile/rules/signatures"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"access-log-rules"},"Access Log Rules"),(0,a.kt)("p",null,"These rules prevent Haltdos WAF from logging sensitive fields like password, etc. and adhere to your compliance policy"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"These rules prevent Haltdos WAF from logging sensitive information like passwords, etc, and adhere to your compliance policy."),(0,a.kt)("p",null,"Log Rules provide the user with the functionality to hide certain fields or sensitive data from the access logs to avoid misuse and sensitive data leakage."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the links: ",(0,a.kt)("strong",{parentName:"li"},"WAF > Zones > Listeners > Security Profiles > Rules > Access Log")," "),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Specific URI"),(0,a.kt)("td",{parentName:"tr",align:null},"URI eg. /login"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Location"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose from the predefined options"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the value to be searched in the specified location"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Name")),(0,a.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Message")),(0,a.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Specific URI")),(0,a.kt)("p",null,"Specify the URI or regex ( If the URI Regex field is enabled) for which log rule will be applied."),(0,a.kt)("p",null,"By clicking on ",(0,a.kt)("strong",{parentName:"p"},"+ Add Location")," button, the end-user can add specify the location to be hidden from the access logs :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Location")),(0,a.kt)("p",null,"Specify the location in the HTTP Header where the specified value will be searched"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Accepted Values")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ALL")," - Select this if the specified value has to be searched in the entire HTTP Request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"HEADERS")," - Select this if the specified value has to be searched in the Headers part of the HTTP Header"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"COOKIES")," - Select this if the specified value has to be searched in the Cookies part of the HTTP Header"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"BODY")," - Select this if the specified value has to be searched in the Body part of the HTTP Header"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"ARGS")," - Select this if the specified value has to be searched in the Arguments section in the HTTP Header")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Value")),(0,a.kt)("p",null,"Specify the value to be searched in the specified location for the rule to evaluate the request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add")," "),(0,a.kt)("p",null,"Click on the Add button to add the location and values."))}u.isMDXComponent=!0}}]);