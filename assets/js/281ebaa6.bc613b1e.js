"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[983],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),h=l,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||n;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function h(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<n;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},62332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>u});var a=r(87462),l=(r(67294),r(3905));const n={sidebar_position:3},i="Firewall Rule",o={unversionedId:"waf/docs/listener/profiles/rules/firewall_rules",id:"waf/docs/listener/profiles/rules/firewall_rules",title:"Firewall Rule",description:"Overview",source:"@site/docs/waf/docs/listener/profiles/rules/firewall_rules.md",sourceDirName:"waf/docs/listener/profiles/rules",slug:"/waf/docs/listener/profiles/rules/firewall_rules",permalink:"/waf/docs/listener/profiles/rules/firewall_rules",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"wafSidebar",previous:{title:"Form Rule",permalink:"/waf/docs/listener/profiles/rules/form_rules"},next:{title:"Rate Limit Rules",permalink:"/waf/docs/listener/profiles/rules/ratelimit_rules"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Pattern",id:"match-pattern",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Variable",id:"variable",level:4},{value:"Match Condition",id:"match-condition-1",level:4},{value:"Match Value",id:"match-value",level:4}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"firewall-rule"},"Firewall Rule"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null," A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User.\n",(0,l.kt)("img",{alt:"Firewall Rule",src:r(91029).Z,width:"1254",height:"667"})),(0,l.kt)("p",null,"The following actions are available to the User :"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"DROP  & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SOURCE IP")," - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SEND CAPTCHA CHALLENGE")," - If the request satisfies the rule, then the user receives a challenge like a captcha."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SEND RESPONSE WITH STATUS CODE")," - If the request satisfies the rule, a custom HTML response will be returned with a status code."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SEND CUSTOM RESPONSE")," - If the request satisfies the rule, a custom HTML response will be returned."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"CHANGE RESPONSE CODE")," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"TARPIT SRC. IP")," -  If the request satisfies the rule, the end-user IP will be tarpit."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SKIP LEARNING")," - If the request satisfies the rule, then no learning will be performed on the current request."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("strong",{parentName:"li"},"SEND EMPTY RESPONSE")," - If the request satisfies the rule, the end-user will get empty response / blank page in return.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Firewall Condition",src:r(14998).Z,width:"1101",height:"814"})),(0,l.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"WAF")," > ",(0,l.kt)("strong",{parentName:"li"},"Listener")," >  ",(0,l.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,l.kt)("strong",{parentName:"li"},"Rules")," > ",(0,l.kt)("strong",{parentName:"li"},"Firewall Rules")),(0,l.kt)("li",{parentName:"ol"},"Click on the Add Rule Button and a pop-up box will open."),(0,l.kt)("li",{parentName:"ol"},"Configure the fields that are present."),(0,l.kt)("li",{parentName:"ol"},"Click on Save Changes and the rule will be reflected.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URI"),(0,l.kt)("td",{parentName:"tr",align:null},"Strng"),(0,l.kt)("td",{parentName:"tr",align:null},"1000")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Method"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"All")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Record Request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Variable")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Pattern Exists")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("h4",{id:"rule-name"},"Rule Name"),(0,l.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,l.kt)("h4",{id:"rule-message"},"Rule Message"),(0,l.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,l.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,l.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,l.kt)("h4",{id:"uri"},"URI"),(0,l.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,l.kt)("h4",{id:"method"},"Method"),(0,l.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. All, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,l.kt)("h4",{id:"rule-action"},"Rule Action"),(0,l.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."),(0,l.kt)("h4",{id:"match-condition"},"Match Condition"),(0,l.kt)("p",null,"This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request."),(0,l.kt)("h4",{id:"match-pattern"},"Match Pattern"),(0,l.kt)("p",null,"Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern."),(0,l.kt)("h4",{id:"find-location"},"Find Location"),(0,l.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,l.kt)("h4",{id:"variable"},"Variable"),(0,l.kt)("p",null,"Users can select the variable."),(0,l.kt)("h4",{id:"match-condition-1"},"Match Condition"),(0,l.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,l.kt)("h4",{id:"match-value"},"Match Value"),(0,l.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}d.isMDXComponent=!0},91029:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firewall_rules-bbc3e174427d3de62dc27aff29341f95.png"},14998:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/firewall_rules_condition-8d4f5f980e88ae11659fe204681d91c4.png"}}]);