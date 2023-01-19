"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5884],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:4},i="Policy Rules",o={unversionedId:"products/adc/listeners/rules/policy_rules",id:"products/adc/listeners/rules/policy_rules",title:"Policy Rules",description:"---",source:"@site/docs/products/adc/listeners/rules/policy_rules.md",sourceDirName:"products/adc/listeners/rules",slug:"/products/adc/listeners/rules/policy_rules",permalink:"/rc/products/adc/listeners/rules/policy_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Redirection Rule",permalink:"/rc/products/adc/listeners/rules/redirection_rules"},next:{title:"Upstream Rule",permalink:"/rc/products/adc/listeners/rules/upstream_rule"}},u={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Enabled",id:"rule-enabled",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Rule Condition",id:"rule-condition",level:3},{value:"Description:",id:"description-1",level:3},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4},{value:"Negation",id:"negation",level:4}],d={toc:p};function s(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"policy-rules"},"Policy Rules"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Policy rule is the feature of Haltdos SLB that allows application owners to set various policy rules based on their  requirements. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Policy rule",src:n(72544).Z,width:"1830",height:"772"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Stack > ",(0,a.kt)("a",{parentName:"p",href:"/adc/docs"},(0,a.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,a.kt)("a",{parentName:"p",href:"../../listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,a.kt)("strong",{parentName:"p"},"Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Policy Rule"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Request")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("h4",{id:"rule-name"},"Rule Name"),(0,a.kt)("p",null,"User can define the rule name."),(0,a.kt)("h4",{id:"rule-message"},"Rule Message"),(0,a.kt)("p",null,"User can define the rule message."),(0,a.kt)("h4",{id:"rule-enabled"},"Rule Enabled"),(0,a.kt)("p",null,"Users can enable and disable the rule."),(0,a.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,a.kt)("p",null,"User can define the rule priority among various other policy rules."),(0,a.kt)("h4",{id:"rule-action"},"Rule Action"),(0,a.kt)("p",null,"User can define what action needs to be taken in case this rule is being satisfied."),(0,a.kt)("h3",{id:"rule-condition"},"Rule Condition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Policy rule2",src:n(91448).Z,width:"1028",height:"599"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Source IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Contains")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Negation"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("h3",{id:"description-1"},"Description:"),(0,a.kt)("h4",{id:"find-location"},"Find Location"),(0,a.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,a.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,a.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,a.kt)("h4",{id:"match-condition"},"Match Condition"),(0,a.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,a.kt)("h4",{id:"match-value"},"Match Value"),(0,a.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,a.kt)("h4",{id:"negation"},"Negation"),(0,a.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}s.isMDXComponent=!0},72544:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policyrule-4531c7b2d21ba57bb29aaf1052564b86.png"},91448:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/policyrule1-be5ad20e48ef9dde473eb5919e112124.png"}}]);