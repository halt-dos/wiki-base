"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[92900],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=a,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||l;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:4},i="Rate Limit Rules",o={unversionedId:"products/waf/listener/profiles/rules/ratelimit_rules",id:"products/waf/listener/profiles/rules/ratelimit_rules",title:"Rate Limit Rules",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/ratelimit_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/ratelimit_rules",permalink:"/rc/products/waf/listener/profiles/rules/ratelimit_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Firewall Rule",permalink:"/rc/products/waf/listener/profiles/rules/firewall_rules"},next:{title:"Whitelist Rule",permalink:"/rc/products/waf/listener/profiles/rules/whitelist_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5},{value:"<strong>Limit Rate</strong>",id:"limit-rate",level:5},{value:"<strong>Limit Burst</strong>",id:"limit-burst",level:5},{value:"<strong>Limit Duration</strong>",id:"limit-duration",level:5},{value:"<strong>Limit On</strong>",id:"limit-on",level:5},{value:"<strong>Condition Phase</strong>",id:"condition-phase",level:5},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rate-limit-rules"},"Rate Limit Rules"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance.\n",(0,a.kt)("img",{alt:"Rate limit",src:r(79291).Z,width:"1836",height:"800"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rate limit",src:r(65099).Z,width:"1840",height:"645"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Rate limit",src:r(82953).Z,width:"1025",height:"383"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Follow the links: ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Rate Limit Rule")),(0,a.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,a.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Record request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Burst"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"20")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Track Duration"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Increment on"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Requests")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Condition Phase"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Variable")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Pattern Exists")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,a.kt)("h5",{id:"rule-action"},(0,a.kt)("strong",{parentName:"h5"},"Rule Action")),(0,a.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc."),(0,a.kt)("h5",{id:"limit-rate"},(0,a.kt)("strong",{parentName:"h5"},"Limit Rate")),(0,a.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,a.kt)("h5",{id:"limit-burst"},(0,a.kt)("strong",{parentName:"h5"},"Limit Burst")),(0,a.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,a.kt)("h5",{id:"limit-duration"},(0,a.kt)("strong",{parentName:"h5"},"Limit Duration")),(0,a.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,a.kt)("h5",{id:"limit-on"},(0,a.kt)("strong",{parentName:"h5"},"Limit On")),(0,a.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Always limit burst must be greater than or equal to limit rate.")),(0,a.kt)("h5",{id:"condition-phase"},(0,a.kt)("strong",{parentName:"h5"},"Condition Phase")),(0,a.kt)("p",null,"This drop-down allows to set the match condition i.e. request or response for the request."),(0,a.kt)("h5",{id:"find-location"},(0,a.kt)("strong",{parentName:"h5"},"Find Location")),(0,a.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,a.kt)("h5",{id:"find-parameter"},(0,a.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,a.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,a.kt)("h5",{id:"match-condition"},(0,a.kt)("strong",{parentName:"h5"},"Match Condition")),(0,a.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,a.kt)("h5",{id:"match-value"},(0,a.kt)("strong",{parentName:"h5"},"Match Value")),(0,a.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}d.isMDXComponent=!0},79291:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit-e73eb20c76160b6ad04f6f8a4dc412ad.png"},65099:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit1-be5ef46627a11728592f1378aa09e02d.png"},82953:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit2-6df03e599427f572b9361a60b83e31ce.png"}}]);