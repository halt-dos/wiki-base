"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[11411],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||p[h]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},10151:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const i={},l="Header Rules",o={unversionedId:"products/ddos/listeners/rules/header",id:"products/ddos/listeners/rules/header",title:"Header Rules",description:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.",source:"@site/docs/products/ddos/listeners/rules/header.md",sourceDirName:"products/ddos/listeners/rules",slug:"/products/ddos/listeners/rules/header",permalink:"/products/ddos/listeners/rules/header",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Error Rules",permalink:"/products/ddos/listeners/rules/error"},next:{title:"Policy Rules",permalink:"/products/ddos/listeners/rules/policy"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Attribute Name",id:"attribute-name",level:4},{value:"Attribute Value",id:"attribute-value",level:4},{value:"Add Condition",id:"add-condition",level:4},{value:"Check Response",id:"check-response",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:u};function p(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"header-rules"},"Header Rules"),(0,n.kt)("p",null,"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Header rule",src:r(18822).Z,width:"1901",height:"939"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Apps")," > ",(0,n.kt)("strong",{parentName:"p"},"DDOS")," > ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"p"},"Rules")," > ",(0,n.kt)("strong",{parentName:"p"},"Header Rules"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described below.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Save Changes")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,n.kt)("h4",{id:"rule-action"},"Rule Action"),(0,n.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."))),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,n.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,n.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,n.kt)("p",null,"If the action is ",(0,n.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,n.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,n.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"In order to escape the dollar($) character in the replace, add the dollar symbol twice.")),(0,n.kt)("h4",{id:"evaluation-phase"},"Evaluation Phase"),(0,n.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,n.kt)("h4",{id:"attribute-name"},"Attribute Name"),(0,n.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,n.kt)("h4",{id:"attribute-value"},"Attribute Value"),(0,n.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,n.kt)("h4",{id:"add-condition"},"Add Condition"),(0,n.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,n.kt)("p",null,"For adding a condition, the required fields are:"),(0,n.kt)("h4",{id:"check-response"},"Check Response"),(0,n.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,n.kt)("h4",{id:"find-location"},"Find Location"),(0,n.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HEADER_VAL:")," Rule will be applicable on the header value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"COOKIE_VAL:")," Rule will be applicable to the cookie value in the request or response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"AGRS_VAL:")," Rule will be applicable to the argument value in the request or response. "),(0,n.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,n.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,n.kt)("h4",{id:"match-condition"},"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",{id:"match-value"},"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}p.isMDXComponent=!0},18822:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/header-5195ecd30e60e84ac345e5b97ea4472f.png"}}]);