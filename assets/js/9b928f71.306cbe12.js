"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6790],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=u(a),c=n,m=h["".concat(s,".").concat(c)]||h[c]||p[c]||l;return a?r.createElement(m,i(i({ref:t},d),{},{components:a})):r.createElement(m,i({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},87877:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:2},i="Firewall Rules",o={unversionedId:"community-waf/docs/waf/rules/firewall_rules",id:"community-waf/docs/waf/rules/firewall_rules",title:"Firewall Rules",description:"Overview",source:"@site/docs/community-waf/docs/waf/rules/firewall_rules.md",sourceDirName:"community-waf/docs/waf/rules",slug:"/community-waf/docs/waf/rules/firewall_rules",permalink:"/community-waf/docs/waf/rules/firewall_rules",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"communitySidebar",previous:{title:"Header Rules",permalink:"/community-waf/docs/waf/rules/header_rules"},next:{title:"Rate Limit Rules",permalink:"/community-waf/docs/waf/rules/rate_limit"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Pattern",id:"match-pattern",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Match Condition",id:"match-condition-1",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:u};function p(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"firewall-rules"},"Firewall Rules"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null," A Firewall Rule is used to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firewall Rule",src:a(55338).Z,width:"1661",height:"983"})),(0,n.kt)("p",null,"The following actions are available to the User :"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"DROP  & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Firewall Condition",src:a(16291).Z,width:"1001",height:"587"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Firewall Rules"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on the Add Rule Button and a pop-up box will open."),(0,n.kt)("li",{parentName:"ol"},"Configure the fields that are present."),(0,n.kt)("li",{parentName:"ol"},"Click on Save Changes and the rule will be reflected.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"Strng"),(0,n.kt)("td",{parentName:"tr",align:null},"1000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"All")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Record Request")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Variable")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variable"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Pattern Exists")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"rule-name"},"Rule Name"),(0,n.kt)("p",null,"Users are allowed to specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h4",{id:"rule-message"},"Rule Message"),(0,n.kt)("p",null,"Users are allowed to specify a rule message to understand the purpose of the rule. It can contain a detailed description to identify the rule."),(0,n.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("h4",{id:"uri"},"URI"),(0,n.kt)("p",null,"Users are allowed to specify the URI. Specify the URI on which the firewall rule will be applied."),(0,n.kt)("h4",{id:"method"},"Method"),(0,n.kt)("p",null,"Users are allowed to specify the HTTP method on which the rule will be applied i.e. ANY, GET, POST, PUT, DELETE, HEAD, OPTIONS."),(0,n.kt)("h4",{id:"rule-action"},"Rule Action"),(0,n.kt)("p",null,"Users are allowed to specify the action to be taken for the request matched i.e. No Action, Drop, Record, Bypass, Redirect, Temporary Blacklist, Send Challenge, Skip Learning."),(0,n.kt)("h4",{id:"match-condition"},"Match Condition"),(0,n.kt)("p",null,"This drop-down allows to set the match condition i.e. Pattern Match or Pattern Not Match for the request."),(0,n.kt)("h4",{id:"match-pattern"},"Match Pattern"),(0,n.kt)("p",null,"Users are allowed to specify the keyword to match when the rule is invoked. The entered value can be a regex pattern."),(0,n.kt)("h4",{id:"find-location"},"Find Location"),(0,n.kt)("p",null,"Users can define the source location where this condition needs to be applied."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Find Location")),(0,n.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Variable")," Select if the specified users can select the variable."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"URL:")," Select this if the specified value has to be searched in the URL part of the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Header Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header variables."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Header Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Headers:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookie Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookie Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Cookies:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body Argument Name:")," Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body Argument Value:")," Select this if the specified value has to be searched in the values in the Body part of the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Body:")," Select this if the specified value has to be searched in the Body part of the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Argument Name:")," Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Argument Value:")," Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Arguments:")," Select this if the specified value has to be searched in the Arguments section in the HTTP Header."),(0,n.kt)("h4",{id:"match-condition-1"},"Match Condition"),(0,n.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,n.kt)("h4",{id:"match-value"},"Match Value"),(0,n.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}p.isMDXComponent=!0},55338:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/firewall_rules-aee979c597efd9510bcb0a614728d659.png"},16291:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/firewall_rules_condition-458844c9d9abdd6360d2b1ffa230754e.png"}}]);