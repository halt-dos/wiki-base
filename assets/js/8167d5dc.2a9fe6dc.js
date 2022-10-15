"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2930],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87179:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={},o="Upstream Rules",i={unversionedId:"waf/docs/listener/rules/upstreamrules",id:"waf/docs/listener/rules/upstreamrules",title:"Upstream Rules",description:"You can switch between your server groups by creating upstream rules.",source:"@site/docs/waf/docs/listener/rules/upstreamrules.md",sourceDirName:"waf/docs/listener/rules",slug:"/waf/docs/listener/rules/upstreamrules",permalink:"/waf/docs/listener/rules/upstreamrules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Redirectional Rules",permalink:"/waf/docs/listener/rules/redirectionalrules"},next:{title:"Variable Rules",permalink:"/waf/docs/listener/rules/variablerule"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How to use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upstream-rules"},"Upstream Rules"),(0,a.kt)("p",null,"You can switch between your server groups by creating upstream rules."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,'If a user has defined server groups and wants to use different groups depending upon different conditions then he can make use of Upstream Rules. For example, if a user wants its /API calls to be served by server-group "API" and console by "DEFAULT" then he can create a rule with a search pattern and search location as URL/Header/Cookie/Body/Arguments'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"upstream rules",src:r(21017).Z,width:"1498",height:"982"})),(0,a.kt)("h2",{id:"how-to-use"},"How to use:"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Rules")," > ",(0,a.kt)("strong",{parentName:"p"},"Upstream Rules")),(0,a.kt)("p",null,"2.Create rules with different conditions"),(0,a.kt)("p",null,"3.Click on ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server Group"),(0,a.kt)("td",{parentName:"tr",align:null},"Existing server group"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,a.kt)("td",{parentName:"tr",align:null},"URL/HEADER VAL/COOKIE VAL/BODY VAL/ARGS VAL"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,a.kt)("td",{parentName:"tr",align:null},"ARG."),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,a.kt)("td",{parentName:"tr",align:null},"Regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Rule Name :")),(0,a.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Message :")),(0,a.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Rule Priority:")," "),(0,a.kt)("p",null,"Set the priority of the rule. If two rules have the same priority, then selection will be random."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Server Group:")," "),(0,a.kt)("p",null,"Which server group should serve the request of this type. The server group configured will be serving requests specifically."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Find Location:")," "),(0,a.kt)("p",null,"The block in which the search pattern will be searched like URL, Port, Header Val, Cookie Val, Body Val, Args Val."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Match Condition:")),(0,a.kt)("p",null,"Users can set the condition which was need to be followed by next field Match Value."),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"Match Value:")),(0,a.kt)("p",null,"The pattern to be searched in the request so that it can be forwarded to the mentioned server group."))}c.isMDXComponent=!0},21017:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/upstreamrules-48c63636cbf8a019c9fdba537a24717a.png"}}]);