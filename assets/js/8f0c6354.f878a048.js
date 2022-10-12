"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8909],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=n.createContext({}),d=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(a),m=r,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},81439:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:6},i="Rate Limit Rules",o={unversionedId:"adc/docs/listeners/rules/rate_limit_rules",id:"adc/docs/listeners/rules/rate_limit_rules",title:"Rate Limit Rules",description:"---",source:"@site/docs/adc/docs/listeners/rules/rate_limit_rules.md",sourceDirName:"adc/docs/listeners/rules",slug:"/adc/docs/listeners/rules/rate_limit_rules",permalink:"/wiki/adc/docs/listeners/rules/rate_limit_rules",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"adcSidebar",previous:{title:"Upstream Rule",permalink:"/wiki/adc/docs/listeners/rules/upstream_rule"},next:{title:"Action Scripts",permalink:"/wiki/adc/docs/listeners/action_scripts"}},u={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Enabled",id:"rule-enabled",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Max Rate",id:"max-rate",level:4},{value:"Track Limit",id:"track-limit",level:4},{value:"Track Duration",id:"track-duration",level:4},{value:"Rule Condition",id:"rule-condition",level:3},{value:"Description:",id:"description-1",level:3},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4},{value:"Negation",id:"negation",level:4}],p={toc:d};function s(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rate-limit-rules"},"Rate Limit Rules"),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to Stack > ",(0,r.kt)("a",{parentName:"p",href:"../../adc.md"},(0,r.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,r.kt)("a",{parentName:"p",href:"../../listeners/"},(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,r.kt)("strong",{parentName:"p"},"Rules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Rate Limit Rules.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limit rule",src:a(74838).Z,width:"1261",height:"520"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop Request")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rate"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Track Limit"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"20")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Track Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1")))),(0,r.kt)("h3",{id:"description"},"Description:"),(0,r.kt)("h4",{id:"rule-name"},"Rule Name"),(0,r.kt)("p",null,"The user can define the rule name."),(0,r.kt)("h4",{id:"rule-message"},"Rule Message"),(0,r.kt)("p",null,"The user can define the rule message."),(0,r.kt)("h4",{id:"rule-enabled"},"Rule Enabled"),(0,r.kt)("p",null,"Users can enable or disable the rule."),(0,r.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,r.kt)("p",null,"The user can define the rule priority for this particular rule among various other rules in Rate Limit Rules"),(0,r.kt)("h4",{id:"rule-action"},"Rule Action"),(0,r.kt)("p",null,"The user can define what action needs to be taken when this rule condition is matched."),(0,r.kt)("h4",{id:"max-rate"},"Max Rate"),(0,r.kt)("p",null,"The user can define the request rate for the page"),(0,r.kt)("h4",{id:"track-limit"},"Track Limit"),(0,r.kt)("p",null,"The user can define the track limit in order to track if the rate is exceeding the limit or not."),(0,r.kt)("h4",{id:"track-duration"},"Track Duration"),(0,r.kt)("p",null,"Specify the time duration for which the rule will limit the request."),(0,r.kt)("h3",{id:"rule-condition"},"Rule Condition"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Rate Limit rule",src:a(35949).Z,width:"924",height:"464"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Source IP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Contains")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Negation"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"True")))),(0,r.kt)("h3",{id:"description-1"},"Description:"),(0,r.kt)("h4",{id:"find-location"},"Find Location"),(0,r.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,r.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,r.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,r.kt)("h4",{id:"match-condition"},"Match Condition"),(0,r.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,r.kt)("h4",{id:"match-value"},"Match Value"),(0,r.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,r.kt)("h4",{id:"negation"},"Negation"),(0,r.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}s.isMDXComponent=!0},74838:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ratelimitrule-d11d8fff9dec505f6e94dbd1a4257aa6.png"},35949:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ratelimitrule2-307a54d0e37575f2d8fb60ccabfd9ae6.png"}}]);