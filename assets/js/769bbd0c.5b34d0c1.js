"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7492],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return r?a.createElement(k,o(o({ref:t},s),{},{components:r})):a.createElement(k,o({ref:t},s))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97654:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:5},o="Variable Rules",i={unversionedId:"products/cloud/waf/listener/rules/variables_rules",id:"products/cloud/waf/listener/rules/variables_rules",title:"Variable Rules",description:"---",source:"@site/docs/products/cloud/waf/listener/rules/variables_rules.md",sourceDirName:"products/cloud/waf/listener/rules",slug:"/products/cloud/waf/listener/rules/variables_rules",permalink:"/products/cloud/waf/listener/rules/variables_rules",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Redirection Rules",permalink:"/products/cloud/waf/listener/rules/redirection_rules"},next:{title:"Upstream rules",permalink:"/products/cloud/waf/listener/rules/upstream_rules"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"variable-rules"},"Variable Rules"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Form Validation: If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},'Rate Limit: Assume if a user wants to rate limit on a variable then, it can be done by storing a parameter from the Request/Response. For example, the "User-Agent" header stored in the variable can be used for Rate Limit. '))),(0,n.kt)("p",null,"Note: Any parameter from the Request/Response can be stored in a variable."),(0,n.kt)("h3",{id:"how-to-use"},"How to use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Rules > Variable Rules"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create rules with different conditions and ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,n.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,n.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"Existing server group"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Scope"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose from the dropdown"),(0,n.kt)("td",{parentName:"tr",align:null},"GLOBAL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variable Extraction"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose from the dropdown"),(0,n.kt)("td",{parentName:"tr",align:null},"SET")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Extraction Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose from the dropdown"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Parameter Cast"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose from the dropdown"),(0,n.kt)("td",{parentName:"tr",align:null},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variable Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("h4",{id:"description"},"Description"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name")),(0,n.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Message")," "),(0,n.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Priority")," "),(0,n.kt)("p",null,"Set the priority of the rule. If two rules have the same priority, then selection will be random."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URI")," "),(0,n.kt)("p",null,"Enter the match URI for the rule. Any request coming to the specified URI will invoke this rule.   "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Scope")," "),(0,n.kt)("p",null,"Select the scope where the rule will be applicable like Global/Transaction/Session. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Variable Extraction")," "),(0,n.kt)("p",null,"Select from the dropdown like Set/Mutate/Request/Response."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Extraction Location")," "),(0,n.kt)("p",null,"Select the location from the dropdown like for Request Variables: URL, Header value, Cookie value, Body value, Body, Arguments value, and for Response Variables: Header value, Body."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameter Cast")," "),(0,n.kt)("p",null,"Select the type of parameter from the dropdown like String, Integer, XML, JSON, HTML. This defines the specific type of parameter for which the rule will be applicable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Variable Name")," "),(0,n.kt)("p",null,"Enter the name of the variable to be set. The variable defined will be applicable for the rule."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Parameter")," "),(0,n.kt)("p",null,"Enter the parameter name to be used for Variable extraction."))}d.isMDXComponent=!0}}]);