"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[12817],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var d=n.createContext({}),u=function(t){var e=n.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=u(t.components);return n.createElement(d.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),c=u(r),m=a,k=c["".concat(d,".").concat(m)]||c[m]||p[m]||l;return r?n.createElement(k,i(i({ref:e},s),{},{components:r})):n.createElement(k,i({ref:e},s))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,i=new Array(l);i[0]=c;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},67229:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2},i="Header Rules",o={unversionedId:"products/adc/listeners/rules/header_rules",id:"products/adc/listeners/rules/header_rules",title:"Header Rules",description:"---",source:"@site/docs/products/adc/listeners/rules/header_rules.md",sourceDirName:"products/adc/listeners/rules",slug:"/products/adc/listeners/rules/header_rules",permalink:"/rc/products/adc/listeners/rules/header_rules",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Error Rules",permalink:"/rc/products/adc/listeners/rules/error_rules"},next:{title:"Redirection Rules",permalink:"/rc/products/adc/listeners/rules/redirection_rules"}},d={},u=[{value:"How to Use:",id:"how-to-use",level:4},{value:"Rule Condition",id:"rule-condition",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Find Location</strong>",id:"find-location",level:5},{value:"<strong>Find Parameter</strong>",id:"find-parameter",level:5},{value:"<strong>Match Condition</strong>",id:"match-condition",level:5},{value:"<strong>Match Value</strong>",id:"match-value",level:5},{value:"<strong>Negation</strong>",id:"negation",level:5}],s={toc:u};function p(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"header-rules"},"Header Rules"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header in the request to the web-server (back-end) as well as respond to the client."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"headerrules",src:r(65087).Z,width:"1830",height:"640"})),(0,a.kt)("h4",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Stack > ",(0,a.kt)("a",{parentName:"li",href:"/adc/docs"},(0,a.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,a.kt)("a",{parentName:"li",href:"../../listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,a.kt)("strong",{parentName:"li"},"Rules"),"."),(0,a.kt)("li",{parentName:"ol"},"Select the ",(0,a.kt)("strong",{parentName:"li"},"Header Rule"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Remove Request Header")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Attribute Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Search Pattern"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Attribute Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"rule-condition"},"Rule Condition"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"headerrules2",src:r(38778).Z,width:"946",height:"599"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"TYPE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Location"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Source IP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Find Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Condition"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Match IP Prefix")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Negation"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("h5",{id:"find-location"},(0,a.kt)("strong",{parentName:"h5"},"Find Location")),(0,a.kt)("p",null,"User can specify the location at which the header rule condition is being applied."),(0,a.kt)("h5",{id:"find-parameter"},(0,a.kt)("strong",{parentName:"h5"},"Find Parameter")),(0,a.kt)("p",null,"The user can set the parameter value for the header rule condition."),(0,a.kt)("h5",{id:"match-condition"},(0,a.kt)("strong",{parentName:"h5"},"Match Condition")),(0,a.kt)("p",null,"The user can set the match condition for above set parameter value and location."),(0,a.kt)("h5",{id:"match-value"},(0,a.kt)("strong",{parentName:"h5"},"Match Value")),(0,a.kt)("p",null,"The user can set the value that is matched with the condition set for particular rule condition. "),(0,a.kt)("h5",{id:"negation"},(0,a.kt)("strong",{parentName:"h5"},"Negation")),(0,a.kt)("p",null,"The user can also negate the rule condition."))}p.isMDXComponent=!0},65087:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/headerrule-2d77e7e2456d06d64ae4002d3e6acb5c.png"},38778:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/headerrule1-033a344dac496adbad5f95c151d3ef2c.png"}}]);