"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84142:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:7},i="Signatures",s={unversionedId:"waf/docs/listener/profiles/signatures",id:"waf/docs/listener/profiles/signatures",title:"Signatures",description:"These are in-built rules of WAF.",source:"@site/docs/waf/docs/listener/profiles/signatures.md",sourceDirName:"waf/docs/listener/profiles",slug:"/waf/docs/listener/profiles/signatures",permalink:"/wiki-base/waf/docs/listener/profiles/signatures",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"wafSidebar",previous:{title:"Log Rules",permalink:"/wiki-base/waf/docs/listener/profiles/rules/log_rules"},next:{title:"SSL Settings",permalink:"/wiki-base/waf/docs/listener/ssl_settings"}},o={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"signatures"},"Signatures"),(0,a.kt)("p",null,"These are in-built rules of WAF."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Signatures contain rules that are evaluated for each request that passes through WAF. The rules offer protection from many different types of attacks for Web Service/API including OWASP top 10 as well as it can help users to specify the behavior for their application. The WAF has multiple types of Rules designed to target specific use cases."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Signatures",src:n(25899).Z,width:"1781",height:"944"})),(0,a.kt)("h2",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Security Profiles")," > ",(0,a.kt)("strong",{parentName:"p"},"Rules")," > ",(0,a.kt)("strong",{parentName:"p"},"Signatures"),"\n2.You can change the status of the signature to AUTO, PROD, STAGED, DISABLED.\n3.Configurations will be deployed successfully."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Id"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Type of rule"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Name of the signature"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Status"),(0,a.kt)("td",{parentName:"tr",align:null},"Choose the status of the signature from the drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Auto")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timestamp"),(0,a.kt)("td",{parentName:"tr",align:null},"Date and Timestamp of the rule when last updated."),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Requests"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the count of hits"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the count when the rule is matched."),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Delete the rule"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Rule Id:")),(0,a.kt)("p",null,"Predefined rule id for the signatures. The Id is unique for each rule."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Type:")),(0,a.kt)("p",null,"It specifies the type of signature like Firewall, Response, etc."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Name:")),(0,a.kt)("p",null,"It specifies the name of the signatures. The name describes the identity of the rule which helps the user understand what is the use of that rule."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Status:")),(0,a.kt)("p",null,"It specifies the status of the signature and can be set accordingly to PROD, STAGED, DISABLED."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Timestamp:")),(0,a.kt)("p",null,"It specifies the date time stamp at which the rule has been updated."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Requests:")),(0,a.kt)("p",null,"It specifies the number of times request matched with the current rule while learning-enabled with the current security profile."),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"Match")),(0,a.kt)("p",null,"It specifies the number of requests matched with the current rule in the current security profile."),(0,a.kt)("p",null,"8.",(0,a.kt)("strong",{parentName:"p"},"Action:")),(0,a.kt)("p",null,"It specifies the action need to perform on the current rule. In order to delete the rule, we can click on the delete button to remove certain rules in the current security profile."),(0,a.kt)("p",null,"We can reset learning by clicking the ",(0,a.kt)("strong",{parentName:"p"},"Reset Learning")," button at the top right of the page."),(0,a.kt)("p",null,"We can also update the rule status at once by selecting multiple rules. After clicking on the ",(0,a.kt)("strong",{parentName:"p"},"Update Status")," button, select desired status to update."))}c.isMDXComponent=!0},25899:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/signatures-1a644f9d751d26f6b337d61278f668c7.png"}}]);