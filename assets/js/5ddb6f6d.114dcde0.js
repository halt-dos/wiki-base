"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[49533],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(g,i(i({ref:t},p),{},{components:r})):n.createElement(g,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},34616:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:5},i="Upstream Rule",o={unversionedId:"products/adc/listeners/rules/upstream_rules",id:"products/adc/listeners/rules/upstream_rules",title:"Upstream Rule",description:"---",source:"@site/docs/products/adc/listeners/rules/upstream_rules.md",sourceDirName:"products/adc/listeners/rules",slug:"/products/adc/listeners/rules/upstream_rules",permalink:"/products/adc/listeners/rules/upstream_rules",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Policy Rules",permalink:"/products/adc/listeners/rules/policy_rules"},next:{title:"Rate Limit Rules",permalink:"/products/adc/listeners/rules/rate_limit_rules"}},s={},u=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name </strong>",id:"rule-name-",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Enabled</strong>",id:"rule-enabled",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Server Group</strong>",id:"server-group",level:5},{value:"<strong>Rule Condition</strong>",id:"rule-condition",level:4},{value:"Description",id:"description-1",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5},{value:"<strong>Negation</strong>",id:"negation",level:5}],p={toc:u};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upstream-rule"},"Upstream Rule"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If a user has defined server group and wants to use different groups depending upon different conditions then he can make use of Upstream Rules."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upstream rule",src:r(2310).Z,width:"1832",height:"833"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,a.kt)("a",{parentName:"li",href:"/products/adc/"},(0,a.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,a.kt)("a",{parentName:"li",href:"/products/adc/listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,a.kt)("strong",{parentName:"li"},"Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Load Balancing Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server Group"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"rule-name-"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name ")),(0,a.kt)("p",null,"User can specify the rule name."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"User can specify the rule message."),(0,a.kt)("h5",{id:"rule-enabled"},(0,a.kt)("strong",{parentName:"h5"},"Rule Enabled")),(0,a.kt)("p",null,"Users can enable or disable the rule."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"User can specify the rule priority among other created rules in LB rules."),(0,a.kt)("h5",{id:"server-group"},(0,a.kt)("strong",{parentName:"h5"},"Server Group")),(0,a.kt)("p",null,"User can specify which server group to associate with this particular rule."),(0,a.kt)("h4",{id:"rule-condition"},(0,a.kt)("strong",{parentName:"h4"},"Rule Condition")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Upstream rule",src:r(6154).Z,width:"967",height:"603"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Source IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Match IP Prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Negation"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h3",{id:"description-1"},"Description"),(0,a.kt)("h5",{id:"find-location"},(0,a.kt)("strong",{parentName:"h5"},"Find Location")),(0,a.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,a.kt)("h5",{id:"find-parameter"},(0,a.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,a.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,a.kt)("h5",{id:"match-condition"},(0,a.kt)("strong",{parentName:"h5"},"Match Condition")),(0,a.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,a.kt)("h5",{id:"match-value"},(0,a.kt)("strong",{parentName:"h5"},"Match Value")),(0,a.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,a.kt)("h5",{id:"negation"},(0,a.kt)("strong",{parentName:"h5"},"Negation")),(0,a.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}d.isMDXComponent=!0},2310:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/upstream-641b10f3af1672764979e4325ea9c530.png"},6154:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/upstreamrule1-19f0607921767f2cb80426b08a97673d.png"}}]);