"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8294],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>s});var r=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,r,l=function(t,e){if(null==t)return{};var a,r,l={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var A=r.createContext({}),p=function(t){var e=r.useContext(A),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},d=function(t){var e=p(t.components);return r.createElement(A.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,l=t.mdxType,n=t.originalType,A=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),m=p(a),s=l,c=m["".concat(A,".").concat(s)]||m[s]||u[s]||n;return a?r.createElement(c,i(i({ref:e},d),{},{components:a})):r.createElement(c,i({ref:e},d))}));function s(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var A in e)hasOwnProperty.call(e,A)&&(o[A]=e[A]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55829:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>A,contentTitle:()=>i,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=a(87462),l=(a(67294),a(3905));const n={sidebar_position:4},i="Policy Rules",o={unversionedId:"adc/docs/listeners/rules/policy_rules",id:"adc/docs/listeners/rules/policy_rules",title:"Policy Rules",description:"---",source:"@site/docs/adc/docs/listeners/rules/policy_rules.md",sourceDirName:"adc/docs/listeners/rules",slug:"/adc/docs/listeners/rules/policy_rules",permalink:"/adc/docs/listeners/rules/policy_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"adcSidebar",previous:{title:"Redirection Rule",permalink:"/adc/docs/listeners/rules/redirection_rules"},next:{title:"Upstream Rule",permalink:"/adc/docs/listeners/rules/upstream_rule"}},A={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Enabled",id:"rule-enabled",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Rule Condition",id:"rule-condition",level:3},{value:"Description:",id:"description-1",level:3},{value:"Find Location",id:"find-location",level:4},{value:"Find Parameter",id:"find-parameter",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4},{value:"Negation",id:"negation",level:4}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"policy-rules"},"Policy Rules"),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Policy rule is the feature of Haltdos SLB that allows application owners to set various policy rules based on their  requirements. "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Policy rule",src:a(21663).Z,width:"1262",height:"376"})),(0,l.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to Stack > ",(0,l.kt)("a",{parentName:"p",href:"/adc/docs"},(0,l.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,l.kt)("a",{parentName:"p",href:"../../listeners/"},(0,l.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,l.kt)("strong",{parentName:"p"},"Rules"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Select the ",(0,l.kt)("strong",{parentName:"p"},"Policy Rule"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click ",(0,l.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,l.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop Request")))),(0,l.kt)("h4",{id:"description"},"Description:"),(0,l.kt)("h4",{id:"rule-name"},"Rule Name"),(0,l.kt)("p",null,"User can define the rule name."),(0,l.kt)("h4",{id:"rule-message"},"Rule Message"),(0,l.kt)("p",null,"User can define the rule message."),(0,l.kt)("h4",{id:"rule-enabled"},"Rule Enabled"),(0,l.kt)("p",null,"Users can enable and disable the rule."),(0,l.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,l.kt)("p",null,"User can define the rule priority among various other policy rules."),(0,l.kt)("h4",{id:"rule-action"},"Rule Action"),(0,l.kt)("p",null,"User can define what action needs to be taken in case this rule is being satisfied."),(0,l.kt)("h3",{id:"rule-condition"},"Rule Condition"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Policy rule2",src:a(32067).Z,width:"924",height:"384"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,l.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Source IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Contains")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Negation"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,l.kt)("td",{parentName:"tr",align:null},"True")))),(0,l.kt)("h3",{id:"description-1"},"Description:"),(0,l.kt)("h4",{id:"find-location"},"Find Location"),(0,l.kt)("p",null,"User can define the source location where this condition needs to be applied."),(0,l.kt)("h4",{id:"find-parameter"},"Find Parameter"),(0,l.kt)("p",null,"The user can define the parameter based on the location of the condition."),(0,l.kt)("h4",{id:"match-condition"},"Match Condition"),(0,l.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,l.kt)("h4",{id:"match-value"},"Match Value"),(0,l.kt)("p",null,"The user can define what value needs to be matched with the match condition."),(0,l.kt)("h4",{id:"negation"},"Negation"),(0,l.kt)("p",null,"The user can define either to negate the condition for this rule or not."))}u.isMDXComponent=!0},21663:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/policyrule-9b5c939bd423da0cafe02d1d896499df.png"},32067:(t,e,a)=>{a.d(e,{Z:()=>r});const r="data:image/png;base64,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"}}]);