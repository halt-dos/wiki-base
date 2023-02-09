"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[54541],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},98417:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o="Error Rules",i={unversionedId:"products/waf/listener/rules/errorrules",id:"products/waf/listener/rules/errorrules",title:"Error Rules",description:"These rules mask application exceptions and errors with custom pages.",source:"@site/docs/products/waf/listener/rules/errorrules.md",sourceDirName:"products/waf/listener/rules",slug:"/products/waf/listener/rules/errorrules",permalink:"/rc/products/waf/listener/rules/errorrules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Rules",permalink:"/rc/products/waf/listener/rules/"},next:{title:"Header Rules",permalink:"/rc/products/waf/listener/rules/headerrules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use :",id:"how-to-use-",level:3},{value:"Description",id:"description",level:3},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes",level:5},{value:"<strong>Error Handling</strong>",id:"error-handling",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page",level:5},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>HTTP Response Codes</strong>",id:"http-response-codes-1",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Custom Error Page</strong>",id:"custom-error-page-1",level:5}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"error-rules"},"Error Rules"),(0,a.kt)("p",null,"These rules mask application exceptions and errors with custom pages."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Error Rules is a feature of Haltdos WAF that allows application owners to show custom pages without revealing internal exceptions generated by the application upon failure. The custom pages can be created for specific HTTP error codes respectively and thus be used with the error rules."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"error rules",src:r(9963).Z,width:"1834",height:"863"})),(0,a.kt)("h3",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Error Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URI"),(0,a.kt)("td",{parentName:"tr",align:null},"URI Regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Method"),(0,a.kt)("td",{parentName:"tr",align:null},"URL / Headers / Header Name / Header Value / Specific Header Value Data / Cookies / Cookie Name /  Cookie Value / Specific Cookie Value Data / Body / Body Argument Name / Body Argument Value / Specific Body Value Data / Arguments / Argument Name / Argument Value / Specific Argument Value Data / Variable"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 419, 420, 421, 422, 423, 424, 425, 426, 428, 429, 431, 440, 444, 449, 450, 451, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 520, 521, 522, 523, 524, 525, 526, 527, 530"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"No Action / Send Response"),(0,a.kt)("td",{parentName:"tr",align:null},"No Action")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"http-response-codes"},(0,a.kt)("strong",{parentName:"h5"},"HTTP Response Codes")),(0,a.kt)("p",null,"HTTP error codes for which the custom error page needs to be shown. These are the response codes that the back-end sends in returns."),(0,a.kt)("h5",{id:"error-handling"},(0,a.kt)("strong",{parentName:"h5"},"Error Handling")),(0,a.kt)("p",null,"If this field is enabled, then the custom error page will be displayed. If it is disabled, then the default server error page will be displayed."),(0,a.kt)("h5",{id:"custom-error-page"},(0,a.kt)("strong",{parentName:"h5"},"Custom Error Page")),(0,a.kt)("p",null,"Select the desired custom error page which will be displayed when the specified error occurs. Or click the ",(0,a.kt)("strong",{parentName:"p"},"Add")," button which redirects to the custom pages screen to create a custom page and add HTML content and then select it from the drop-down list."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We can globally disable error handling from WAF in the operational settings under advanced settings that we will learn later in Operational Settings.")),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alphanumeric input."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"Specify the priority for the rule for execution when matched with the request."),(0,a.kt)("h5",{id:"uri"},(0,a.kt)("strong",{parentName:"h5"},"URI")),(0,a.kt)("p",null,"Specify the URI on which the tamper rule will be applied."),(0,a.kt)("p",null,"Example /login"),(0,a.kt)("h5",{id:"method"},(0,a.kt)("strong",{parentName:"h5"},"Method")),(0,a.kt)("p",null,"Select the HTTP method for the rule to extract when matched with the request."),(0,a.kt)("h5",{id:"http-response-codes-1"},(0,a.kt)("strong",{parentName:"h5"},"HTTP Response Codes")),(0,a.kt)("p",null,"User can mention the HTTP response code based on the custom error rule name."),(0,a.kt)("h5",{id:"rule-action"},(0,a.kt)("strong",{parentName:"h5"},"Rule Action")),(0,a.kt)("p",null,"Specifies the action to be executed when this is gets triggered"),(0,a.kt)("h5",{id:"custom-error-page-1"},(0,a.kt)("strong",{parentName:"h5"},"Custom Error Page")),(0,a.kt)("p",null,"User can add custom error page that will be visible to end-users."))}d.isMDXComponent=!0},9963:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/error_rule-34a9f33601ff39b833058ccef78b3c8c.png"}}]);