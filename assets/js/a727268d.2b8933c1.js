"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,l=function(e,t){if(null==e)return{};var r,a,l={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(r),m=l,h=c["".concat(u,".").concat(m)]||c[m]||d[m]||n;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=r.length,i=new Array(n);i[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<n;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},97638:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var a=r(87462),l=(r(67294),r(3905));const n={sidebar_position:8},i="Tamper Rules",o={unversionedId:"products/waf/listener/profiles/rules/tamper_rules",id:"products/waf/listener/profiles/rules/tamper_rules",title:"Tamper Rules",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/tamper_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/tamper_rules",permalink:"/rc/products/waf/listener/profiles/rules/tamper_rules",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"Behavior Rule",permalink:"/rc/products/waf/listener/profiles/rules/behavior_rules"},next:{title:"Correlation Rules",permalink:"/rc/products/waf/listener/profiles/rules/correlation_rules"}},u={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Pririty",id:"rule-pririty",level:4},{value:"Tamper Action",id:"tamper-action",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Attribute Extraction",id:"attribute-extraction",level:3},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Extract From",id:"extract-from",level:4},{value:"Parameter",id:"parameter",level:4},{value:"Attribute Validation",id:"attribute-validation",level:3},{value:"URI",id:"uri-1",level:4},{value:"Method",id:"method-1",level:4},{value:"Evaluation Phase",id:"evaluation-phase-1",level:4},{value:"Extract From",id:"extract-from-1",level:4},{value:"Parameter",id:"parameter-1",level:4}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"tamper-rules"},"Tamper Rules"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"The Tamper rule is a feature of Haltdos WAF that provides encryption for the user input fields to protect from browser based malware stealing user's credentials, It also validates hidden input fields."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tamper Rule",src:r(22305).Z,width:"1834",height:"832"})),(0,l.kt)("h3",{id:"how-to-use"},"How to Use"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Follow the links: ",(0,l.kt)("strong",{parentName:"li"},"WAF")," > ",(0,l.kt)("strong",{parentName:"li"},"Listener")," >  ",(0,l.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,l.kt)("strong",{parentName:"li"},"Rules")," > ",(0,l.kt)("strong",{parentName:"li"},"Tamper Rules")),(0,l.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,l.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Tamper Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Encrypt")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Record Request")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"URI"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Method"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"ALL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Evaluation Phase"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Response Phase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Extract From"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Body Name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Tamper Rule",src:r(90019).Z,width:"1027",height:"331"})),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("h4",{id:"rule-name"},"Rule Name"),(0,l.kt)("p",null,"Users are allowe to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,l.kt)("h4",{id:"rule-message"},"Rule Message"),(0,l.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,l.kt)("h4",{id:"rule-pririty"},"Rule Pririty"),(0,l.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,l.kt)("h4",{id:"tamper-action"},"Tamper Action"),(0,l.kt)("p",null,"Users are allowed to specify the tamper action to be taken for the request matched."),(0,l.kt)("h4",{id:"rule-action"},"Rule Action"),(0,l.kt)("p",null,"pecify the action to be taken for the request matched i.e. Drop & Record Request, Record Request, Bypass Request, Temporary Blacklist Src IP, Redirect, Send Challenge, Send Response, Tarpit Src IP, No Action, Skip Learning, Send Empty Response."),(0,l.kt)("h3",{id:"attribute-extraction"},"Attribute Extraction"),(0,l.kt)("h4",{id:"uri"},"URI"),(0,l.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"example")," - /login")),(0,l.kt)("h4",{id:"method"},"Method"),(0,l.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,l.kt)("h4",{id:"evaluation-phase"},"Evaluation Phase"),(0,l.kt)("p",null,"Users are allowed to select the evaluation phase for the rule i.e. Request or Response."),(0,l.kt)("h4",{id:"extract-from"},"Extract From"),(0,l.kt)("p",null,"Users are allowed to select the location from where you want to extract the attribute i.e. Field, Cookie, Header, Body, HTML."),(0,l.kt)("h4",{id:"parameter"},"Parameter"),(0,l.kt)("p",null,"Users are allowed to specify the parameter which will be used for the rule for extraction."),(0,l.kt)("h3",{id:"attribute-validation"},"Attribute Validation"),(0,l.kt)("h4",{id:"uri-1"},"URI"),(0,l.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,l.kt)("h4",{id:"method-1"},"Method"),(0,l.kt)("p",null,"Users are allowed to select the HTTP method for the rule to validate when matched with the request."),(0,l.kt)("h4",{id:"evaluation-phase-1"},"Evaluation Phase"),(0,l.kt)("p",null,"Users are allowed to select the evaluation phase for the rule i.e. Request or Response."),(0,l.kt)("h4",{id:"extract-from-1"},"Extract From"),(0,l.kt)("p",null,"Users are allowed to select the location from where you want to validate the attribute i.e. Header, Cookie, Body, Argument Name or Value."),(0,l.kt)("h4",{id:"parameter-1"},"Parameter"),(0,l.kt)("p",null,"Users are allowed to specify the parameter which will be used for the rule for extraction."))}d.isMDXComponent=!0},22305:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/temper_rule-1e617bdfedf02933df0357b8687d188f.png"},90019:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/temper_rule1-e45552817099cc3abf7e1c6f7d922ca3.png"}}]);