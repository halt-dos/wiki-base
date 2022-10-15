"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3753],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||l;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},77605:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:3},i="Header Rules",o={unversionedId:"saas/waf/listener/rules/header_rules",id:"saas/waf/listener/rules/header_rules",title:"Header Rules",description:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.",source:"@site/docs/saas/waf/listener/rules/header_rules.md",sourceDirName:"saas/waf/listener/rules",slug:"/saas/waf/listener/rules/header_rules",permalink:"/saas/waf/listener/rules/header_rules",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Error Rules",permalink:"/saas/waf/listener/rules/error_rules"},next:{title:"Redirection Rules",permalink:"/saas/waf/listener/rules/redirection_rules"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"header-rules"},"Header Rules"),(0,n.kt)("p",null,"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the webserver(back-end) as well as respond to the client."),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Follow the links: ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Rules > Header Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described below.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save"),"."))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name"),": Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Message"),": Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Change Response"),": This field determines that the rule will update the request or response. If the toggle is enabled the rule will be applicable to response and if it is disabled then the rule will be applicable to request. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI"),": Specify the URI or regex for which rule will be applied. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Search Location"),": This field determines whether the rule has to perform the action on headers/cookies/arguments value. The accepted values are:"),(0,n.kt)("p",null,"HEADER_VAL: Rule will be applicable on the header value in the request or response."),(0,n.kt)("p",null,"COOKIE_VAL: Rule will be applicable to the cookie value in the request or response."),(0,n.kt)("p",null,"AGRS_VAL: Rule will be applicable to the argument value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Action"),": The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,n.kt)("p",null,"1) ADD: This condition will allow adding a value at the specified location."),(0,n.kt)("p",null,"2) REMOVE: This condition will allow removing a value at the specified location."),(0,n.kt)("p",null,"3) OVERWRITE: This condition will allow overwriting a value at the specified location."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,n.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,n.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,n.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and Replace (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,n.kt)("p",null,"Note: In order to escape the dollar($) character in the replace, add the dollar symbol twice."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameter"),": This field specifies the name of the header/cookie/ arguments on which action will be performed."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Add Condition"),": The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Condition Location"),(0,n.kt)("th",{parentName:"tr",align:null},"Search Location"),(0,n.kt)("th",{parentName:"tr",align:null},"Allowed"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request"),(0,n.kt)("td",{parentName:"tr",align:null},"Request"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Request"),(0,n.kt)("td",{parentName:"tr",align:null},"Response"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Response"),(0,n.kt)("td",{parentName:"tr",align:null},"Response"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Response"),(0,n.kt)("td",{parentName:"tr",align:null},"Request"),(0,n.kt)("td",{parentName:"tr",align:null},"False")))),(0,n.kt)("p",null,"For adding a condition, the required fields are:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Check Response"),": This field determines that the condition will be checked on request/response parameters."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Search Location"),": This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,n.kt)("p",null,"HEADER_VAL: Rule will be applicable on the header value in the request or response."),(0,n.kt)("p",null,"COOKIE_VAL: Rule will be applicable to the cookie value in the request or response."),(0,n.kt)("p",null,"AGRS_VAL: Rule will be applicable to the argument value in the request or response. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameter"),": This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Search Pattern"),": This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."))}d.isMDXComponent=!0}}]);