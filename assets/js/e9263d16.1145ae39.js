"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[16652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27921:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:7},i="Signatures",s={unversionedId:"products/waf/listener/profiles/signatures",id:"products/waf/listener/profiles/signatures",title:"Signatures",description:"These are in-built rules of WAF.",source:"@site/docs/products/waf/listener/profiles/signatures.md",sourceDirName:"products/waf/listener/profiles",slug:"/products/waf/listener/profiles/signatures",permalink:"/products/waf/listener/profiles/signatures",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar",previous:{title:"Log Rules",permalink:"/products/waf/listener/profiles/rules/log_rules"},next:{title:"SSL Settings",permalink:"/products/waf/listener/ssl_settings"}},o={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:3},{value:"<strong>Rule ID</strong>",id:"rule-id",level:5},{value:"<strong>Type</strong>",id:"type",level:5},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Status</strong>",id:"status",level:5},{value:"<strong>Timestamp</strong>",id:"timestamp",level:5},{value:"<strong>Requests</strong>",id:"requests",level:5},{value:"<strong>Match</strong>",id:"match",level:5},{value:"<strong>Action</strong>",id:"action",level:5}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signatures"},"Signatures"),(0,a.kt)("p",null,"These are in-built rules of WAF."),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Signatures",src:r(14117).Z,width:"1830",height:"949"})),(0,a.kt)("h2",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Signatures")),(0,a.kt)("li",{parentName:"ol"},"You can change the status of the signature to AUTO, PROD, STAGED, DISABLED."),(0,a.kt)("li",{parentName:"ol"},"Configurations will be deployed successfully.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Id"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of rule"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the signature"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Status"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose the status of the signature from the drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Auto")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"Date and Timestamp of the rule when last updated."),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Requests"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the count of hits"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the count when the rule is matched."),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Delete the rule"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"rule-id"},(0,a.kt)("strong",{parentName:"h5"},"Rule ID")),(0,a.kt)("p",null,"Predefined rule ID for the signatures. The ID is unique for each rule."),(0,a.kt)("h5",{id:"type"},(0,a.kt)("strong",{parentName:"h5"},"Type")),(0,a.kt)("p",null,"It specifies the type of signature like Firewall, Response, etc."),(0,a.kt)("h5",{id:"name"},(0,a.kt)("strong",{parentName:"h5"},"Name")),(0,a.kt)("p",null,"It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule."),(0,a.kt)("h5",{id:"status"},(0,a.kt)("strong",{parentName:"h5"},"Status")),(0,a.kt)("p",null,"It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED."),(0,a.kt)("h5",{id:"timestamp"},(0,a.kt)("strong",{parentName:"h5"},"Timestamp")),(0,a.kt)("p",null,"It specifies the date time stamp at which the rule has been updated."),(0,a.kt)("h5",{id:"requests"},(0,a.kt)("strong",{parentName:"h5"},"Requests")),(0,a.kt)("p",null,"It specifies the number of times request matched with the current rule while learning-enabled with the current security profile."),(0,a.kt)("h5",{id:"match"},(0,a.kt)("strong",{parentName:"h5"},"Match")),(0,a.kt)("p",null,"It specifies the number of requests matched with the current rule in the current security profile."),(0,a.kt)("h5",{id:"action"},(0,a.kt)("strong",{parentName:"h5"},"Action")),(0,a.kt)("p",null,"It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile."),(0,a.kt)("p",null,"We can reset learning by clicking the ",(0,a.kt)("strong",{parentName:"p"},"Reset Learning")," button at the top right of the page."),(0,a.kt)("p",null,"We can also update the rule status at once by selecting multiple rules. After clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Update Status")," button, select desired status to update."))}c.isMDXComponent=!0},14117:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profile_signatures-b0ec1e5ffc43e40121bd10e6fc607e75.png"}}]);