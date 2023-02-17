"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[47926],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(a),m=n,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return a?r.createElement(h,l(l({ref:t},p),{},{components:a})):r.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},60487:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:3},l="Rate Limit Rules",o={unversionedId:"community/docs/waf/rules/rate_limit",id:"community/docs/waf/rules/rate_limit",title:"Rate Limit Rules",description:"Overview",source:"@site/docs/community/docs/waf/rules/rate_limit.md",sourceDirName:"community/docs/waf/rules",slug:"/community/docs/waf/rules/rate_limit",permalink:"/community/docs/waf/rules/rate_limit",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Firewall Rules",permalink:"/community/docs/waf/rules/firewall_rules"},next:{title:"Redirection Rules",permalink:"/community/docs/waf/rules/redirection_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Limit Rate",id:"limit-rate",level:4},{value:"Limit Brust",id:"limit-brust",level:4},{value:"Limit Duration",id:"limit-duration",level:4},{value:"Limit On",id:"limit-on",level:4},{value:"Condition Phase",id:"condition-phase",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],p={toc:u};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rate-limit-rules"},"Rate Limit Rules"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Rate Limiting is a feature of Haltdos WAF that allows application owners to enforce rate limiting on some of the pages which affect their website performance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Rate limit",src:a(60615).Z,width:"1644",height:"984"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Warning")," Manual configuration of rate limit rules is risky for administrators without the relevant training and experience. Badly conceived or misconfigured rate limit rules can result in loss of performance, incorrect behavior."),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Rate Limit Rule")),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Record request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rate"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Brust"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"20")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Track Duration"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Increment on"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Requests")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Condition Phase"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Pattern Exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"Users are allowed to specify the priority for the rule for execution when matched with the request."),(0,n.kt)("h4",{id:"rule-action"},"Rule Action"),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. record request,Drop & record request, Bypass request, redirect, and no action."),(0,n.kt)("h4",{id:"limit-rate"},"Limit Rate"),(0,n.kt)("p",null,"Users are allowed to specify the request rate for the page. The limit rate specified will validate the number of requests coming per second which is not exceeding the limit rate."),(0,n.kt)("h4",{id:"limit-brust"},"Limit Brust"),(0,n.kt)("p",null,"Specify the request burst rate for the page. The burst rate specified will validate the total number of requests received. "),(0,n.kt)("h4",{id:"limit-duration"},"Limit Duration"),(0,n.kt)("p",null,"Users are allowed to specify the time duration for which the rule will limit the request."),(0,n.kt)("h4",{id:"limit-on"},"Limit On"),(0,n.kt)("p",null,"Users are allowed to specify the object on which we apply the limit such as Client IP, User-Agent, URI, Source Port, HTTP Method, HTTP Referrer."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note")," : Always limit burst must be greater than or equal to limit rate."),(0,n.kt)("h4",{id:"condition-phase"},"Condition Phase"),(0,n.kt)("p",null,"This drop-down allows to set the match condition i.e. request or response for the request."),(0,n.kt)("h4",{id:"find-location"},"Find Location"),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URL:")," Select this if the specified value has to be searched in the URL part of the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HTTP Scheme:")," Select this if the specified value has to be searched in the "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Country:")," Select if specified value has to be search as source country."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Header Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header variables."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Header Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Headers:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookie Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookie Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookies:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body Argument Name:")," Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body Argument Value:")," Select this if the specified value has to be searched in the values in the Body part of the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body:")," Select this if the specified value has to be searched in the Body part of the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Argument Name:")," Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Argument Value:")," Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments:"),"  Select this if the specified value has to be searched in the Arguments section in the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Variable:")," Users can select the specific variable that has to be find."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SRC IP:"),"  Select if specified value has to be search as source IP."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Client Browser:")," Select if specified value has to be search as client browser."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Client OS:")," Select if specified value has to be search as client OS."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Client Device:"),"  Select if specified value has to be search as client device."),(0,n.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,n.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,n.kt)("h4",{id:"match-condition"},"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",{id:"match-value"},"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}d.isMDXComponent=!0},60615:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/rate_limit-3d8ecfee31883f0112c363132e5bbd16.png"}}]);