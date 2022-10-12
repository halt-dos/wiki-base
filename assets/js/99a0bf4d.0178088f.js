"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1087],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(r),c=n,h=m["".concat(s,".").concat(c)]||m[c]||p[c]||l;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86720:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:4},i="Rate Limit Rules",o={unversionedId:"waf/docs/listener/profiles/rules/ratelimit_rules",id:"waf/docs/listener/profiles/rules/ratelimit_rules",title:"Rate Limit Rules",description:"Overview",source:"@site/docs/waf/docs/listener/profiles/rules/ratelimit_rules.md",sourceDirName:"waf/docs/listener/profiles/rules",slug:"/waf/docs/listener/profiles/rules/ratelimit_rules",permalink:"/wiki-base/waf/docs/listener/profiles/rules/ratelimit_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"wafSidebar",previous:{title:"Firewall Rule",permalink:"/wiki-base/waf/docs/listener/profiles/rules/firewall_rules"},next:{title:"Whitelist Rule",permalink:"/wiki-base/waf/docs/listener/profiles/rules/whitelist_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Limit Rate",id:"limit-rate",level:4},{value:"Limit Brust",id:"limit-brust",level:4},{value:"Limit Duration",id:"limit-duration",level:4},{value:"Limit On",id:"limit-on",level:4},{value:"Condition Phase",id:"condition-phase",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rate-limit-rules"},"Rate Limit Rules"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance.\n",(0,n.kt)("img",{alt:"Rate limit",src:r(4368).Z,width:"1254",height:"664"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."),(0,n.kt)("h3",{id:"how-to-use"},"How to Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Follow the links: ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," >  ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Record request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rate"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Brust"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Track Duration"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Increment on"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Condition Phase"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Pattern Exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("h4",{id:"rule-action"},"Rule Action"),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, Temp Blacklist src IP, Tarpit Src IP etc ."),(0,n.kt)("h4",{id:"limit-rate"},"Limit Rate"),(0,n.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("h4",{id:"limit-brust"},"Limit Brust"),(0,n.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("h4",{id:"limit-duration"},"Limit Duration"),(0,n.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,n.kt)("h4",{id:"limit-on"},"Limit On"),(0,n.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," : Always limit burst must be greater than or equal to limit rate."),(0,n.kt)("h4",{id:"condition-phase"},"Condition Phase"),(0,n.kt)("p",null,"This drop-down allows to set the match condition i.e. request or response for the request."),(0,n.kt)("h4",{id:"find-location"},"Find Location"),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h4",{id:"match-condition"},"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",{id:"match-value"},"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}p.isMDXComponent=!0},4368:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rate_limit-c6a2e3175d6d605fe9e96e2852367645.png"}}]);