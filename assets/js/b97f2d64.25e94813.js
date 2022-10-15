"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[992],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||l;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},77467:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={},i="Header Rules",o={unversionedId:"waf/docs/listener/rules/headerrules",id:"waf/docs/listener/rules/headerrules",title:"Header Rules",description:"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client.",source:"@site/docs/waf/docs/listener/rules/headerrules.md",sourceDirName:"waf/docs/listener/rules",slug:"/waf/docs/listener/rules/headerrules",permalink:"/waf/docs/listener/rules/headerrules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Error Rules",permalink:"/waf/docs/listener/rules/errorrules"},next:{title:"Redirectional Rules",permalink:"/waf/docs/listener/rules/redirectionalrules"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:2}],u={toc:p};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"header-rules"},"Header Rules"),(0,a.kt)("p",null,"Helps to modify headers, cookies, and arguments in the request sent to the back-end server as well as modifying response sent to the client."),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"header rules",src:r(36990).Z,width:"1496",height:"996"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use:"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Rules")," > *Header Rules**."),(0,a.kt)("p",null,"2.Click on ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described below."),(0,a.kt)("p",null,"3.Click on ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Rule Name:")),(0,a.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Message:")),(0,a.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Rule Priority:")),(0,a.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"URI:")),(0,a.kt)("p",null,"Specify the URI or regex for which rule will be applied. "),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Method:")),(0,a.kt)("p",null,"Select the HTTP method for the rule to validate when matched with the request."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Rule Action:")),(0,a.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,a.kt)("p",null,"1) ",(0,a.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location."),(0,a.kt)("p",null,"2) ",(0,a.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location."),(0,a.kt)("p",null,"3) ",(0,a.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."),(0,a.kt)("p",null,"If the action is ",(0,a.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,a.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,a.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,a.kt)("p",null,"If the action is ",(0,a.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,a.kt)("p",null,"If the action is ",(0,a.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,a.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,a.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," In order to escape the dollar($) character in the replace, add the dollar symbol twice."),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"Evaluation Phase:")),(0,a.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,a.kt)("p",null,"8.",(0,a.kt)("strong",{parentName:"p"},"Attribute Name:")),(0,a.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,a.kt)("p",null,"9.",(0,a.kt)("strong",{parentName:"p"},"Attribute Value:")),(0,a.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,a.kt)("p",null,"10.",(0,a.kt)("strong",{parentName:"p"},"Parameter:")),(0,a.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which action will be performed."),(0,a.kt)("p",null,"11.",(0,a.kt)("strong",{parentName:"p"},"Add Condition:")),(0,a.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"header rules",src:r(33932).Z,width:"1125",height:"594"})),(0,a.kt)("p",null,"For adding a condition, the required fields are:"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Check Response:")),(0,a.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Find Location:")),(0,a.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,a.kt)("p",null,"HEADER_VAL: Rule will be applicable on the header value in the request or response."),(0,a.kt)("p",null,"COOKIE_VAL: Rule will be applicable to the cookie value in the request or response."),(0,a.kt)("p",null,"AGRS_VAL: Rule will be applicable to the argument value in the request or response. "),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Parameter:")),(0,a.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Match Condition:")),(0,a.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Match Value:")),(0,a.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}c.isMDXComponent=!0},36990:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_rules-9b9fb1be95adbac0d6289e7e3d525a49.png"},33932:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/headerrulescondition-92e7cf38b5e5d69dcda213d171efef4a.png"}}]);