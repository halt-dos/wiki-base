"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1259],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),p=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},g=function(t){var e=p(t.components);return a.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,o=t.parentName,g=s(t,["components","mdxType","originalType","parentName"]),c=p(n),m=r,d=c["".concat(o,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(d,l(l({ref:e},g),{},{components:n})):a.createElement(d,l({ref:e},g))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=c;var s={};for(var o in e)hasOwnProperty.call(e,o)&&(s[o]=e[o]);s.originalType=t,s.mdxType="string"==typeof t?t:r,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22747:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:4},l="Staging Settings",s={unversionedId:"saas/waf/listener/advanced-settings/staging-settings",id:"saas/waf/listener/advanced-settings/staging-settings",title:"Staging Settings",description:"User can specify rule staging settings on this page for Listener",source:"@site/docs/saas/waf/listener/advanced-settings/staging-settings.md",sourceDirName:"saas/waf/listener/advanced-settings",slug:"/saas/waf/listener/advanced-settings/staging-settings",permalink:"/saas/waf/listener/advanced-settings/staging-settings",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"adcSidebar",previous:{title:"Bot Settings",permalink:"/saas/waf/listener/advanced-settings/bot-settings"},next:{title:"Learning",permalink:"/saas/waf/listener/learning"}},o={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],g={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"staging-settings"},"Staging Settings"),(0,r.kt)("p",null,"User can specify rule staging settings on this page for Listener"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Users can configure below rule staging settings for Listener."),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Advanced Settings > Staging Settings"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Staging Policy"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the Staging policy and auto-deployment of new signatures."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accepted values: Dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"Manual"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minimum Staging Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify minimum requests before deploying new signatures."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accepted values: Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"10000"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minimum Staging Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the minimum duration before deploying new signatures"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accepted values: Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"7"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Staging Threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify maximum acceptable match for auto-deploying new signatures."),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Accepted values: Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Staging Policy"),": Specify the staging policy and auto-deployment of new signatures. Accepted values: MANUAL / REQUEST/ DURATION/ REQUEST AND DURATION/ REQUEST OR DURATION. By default, it is MANUAL."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimum Staging Requests"),": Specify minimum requests before deploying new signatures. By default, it is 10000 requests."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Minimum Staging Duration"),": Specify minimum duration before deploying new signatures. By default, it is 7 days."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Staging Threshold"),": Specify the maximum acceptable match for auto-deploying new signatures. By default, it is 0."))}u.isMDXComponent=!0}}]);