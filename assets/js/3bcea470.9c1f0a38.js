"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[50260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2},o="Error Rules",s={unversionedId:"products/cloud/waf/listener/rules/error_rules",id:"version-6.0/products/cloud/waf/listener/rules/error_rules",title:"Error Rules",description:"These rules mask application exceptions and errors with custom pages",source:"@site/versioned_docs/version-6.0/products/cloud/waf/listener/rules/error_rules.md",sourceDirName:"products/cloud/waf/listener/rules",slug:"/products/cloud/waf/listener/rules/error_rules",permalink:"/v6/products/cloud/waf/listener/rules/error_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Rules",permalink:"/v6/products/cloud/waf/listener/rules/"},next:{title:"Header Rules",permalink:"/v6/products/cloud/waf/listener/rules/header_rules"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-rules"},"Error Rules"),(0,a.kt)("p",null,"These rules mask application exceptions and errors with custom pages"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the links: ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Rules > Error Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Add Rule and set relevant parameters described in the table below.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Save Changes."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Error Handling"),(0,a.kt)("td",{parentName:"tr",align:null},"ENABLED/DISABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"ENABLED")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Custom Error Page"),(0,a.kt)("td",{parentName:"tr",align:null},"Select from Custom Pages added"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HTTP Response Codes")),(0,a.kt)("p",null,"HTTP error codes for which the custom error page needs to be shown. These are the response codes that the backend sends in returns."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Error Handling")),(0,a.kt)("p",null,"If this field is enabled, then the custom error page will be displayed. If it is disabled, then the default server error page will be displayed."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Custom Error Page")),(0,a.kt)("p",null,"Select the desired custom error page which will be displayed when the specified error occurs. Or click the ",(0,a.kt)("strong",{parentName:"p"},"Add")," button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the dropdown list."),(0,a.kt)("p",null,"Note: We can globally disable error handling from WAF in the operational settings under advanced settings that we will learn later in ",(0,a.kt)("strong",{parentName:"p"},"Operational Settings"),"."))}c.isMDXComponent=!0}}]);