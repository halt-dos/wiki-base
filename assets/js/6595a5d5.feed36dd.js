"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[59683],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},66766:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:10},i="Deception Rules",o={unversionedId:"products/waf/listener/profiles/rules/deception_rules",id:"products/waf/listener/profiles/rules/deception_rules",title:"Deception Rules",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/deception_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/deception_rules",permalink:"/rc/products/waf/listener/profiles/rules/deception_rules",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"sidebar",previous:{title:"Correlation Rules",permalink:"/rc/products/waf/listener/profiles/rules/correlation_rules"},next:{title:"Script Rule",permalink:"/rc/products/waf/listener/profiles/rules/script_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Decoy URI</strong>",id:"decoy-uri",level:5},{value:"<strong>Decoy Methods</strong>",id:"decoy-methods",level:5},{value:"<strong>Fields</strong>",id:"fields",level:5}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deception-rules"},"Deception Rules"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic.\nThe goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them.\nThe attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way."),(0,a.kt)("p",null,"The rule will have to do the following :\nIntercept HTTP responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"For GET requests, the parameters will be added to existing ",(0,a.kt)("inlineCode",{parentName:"li"},"<a href>")," link values."),(0,a.kt)("li",{parentName:"ol"},"For POST requests, the parameters will be added as hidden input type parameters of existing forms.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Deception Rule",src:r(77215).Z,width:"1836",height:"887"})),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Deception Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on save changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URI"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Record")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Decoy URI"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Decoy Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"GET")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fields"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,a.kt)("h5",{id:"uri"},(0,a.kt)("strong",{parentName:"h5"},"URI")),(0,a.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,a.kt)("h5",{id:"method"},(0,a.kt)("strong",{parentName:"h5"},"Method")),(0,a.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,a.kt)("h5",{id:"rule-action"},(0,a.kt)("strong",{parentName:"h5"},"Rule Action")),(0,a.kt)("p",null,"The following actions are available to the User-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"DROP & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated, but the request will not be allowed through the WAF."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SOURCE IP")," - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"TARPIT SRC.IP")," - If the request satisfies the rule, the end-user IP will be tarpit.")),(0,a.kt)("h5",{id:"decoy-uri"},(0,a.kt)("strong",{parentName:"h5"},"Decoy URI")),(0,a.kt)("p",null,"Users can specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack."),(0,a.kt)("h5",{id:"decoy-methods"},(0,a.kt)("strong",{parentName:"h5"},"Decoy Methods")),(0,a.kt)("p",null,"Users can specify the HTTP methods for the rule to be created."),(0,a.kt)("h5",{id:"fields"},(0,a.kt)("strong",{parentName:"h5"},"Fields")),(0,a.kt)("p",null,"Users can specify the fields for which the rule will be applicable."))}d.isMDXComponent=!0},77215:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/deception_rule-3cf6d1f92bab5a0e9a8ce756a43da758.png"}}]);