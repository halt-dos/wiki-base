"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[14213],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:e},c),{},{components:r})):n.createElement(f,l({ref:e},c))}));function m(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},96353:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:4},l="Threat Feeds",i={unversionedId:"products/platform/stacks/integrations/threat_feeds",id:"version-6.0/products/platform/stacks/integrations/threat_feeds",title:"Threat Feeds",description:"Integration with 3rd party Threat Intelligence feeds",source:"@site/versioned_docs/version-6.0/products/platform/stacks/integrations/threat_feeds.md",sourceDirName:"products/platform/stacks/integrations",slug:"/products/platform/stacks/integrations/threat_feeds",permalink:"/v6/products/platform/stacks/integrations/threat_feeds",draft:!1,tags:[],version:"6.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Webhooks",permalink:"/v6/products/platform/stacks/integrations/webhooks"},next:{title:"Resource Content",permalink:"/v6/products/platform/stacks/resource_content/"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3}],c={toc:p};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"threat-feeds"},"Threat Feeds"),(0,a.kt)("p",null,"Integration with 3rd party Threat Intelligence feeds"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos solutions comes with Haltdos Threat Steam which provides periodic threat intel curated from open and paid sources for valid licensed customers. However, at times, customers may wish to also include custom 3rd party Threat Intel feeds for list of Bad Reputation IP addresses."),(0,a.kt)("p",null,"Custom threat intel can be pulled into Haltdos appliances from three sources: pull APIs, FTP or File upload. This section explains various options to include threat intel feeds into Haltdos products."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Only IPv4/IPv6 addresses / prefix having poor reputation is currently supported.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"threat_feeds",src:r(21589).Z,width:"1920",height:"966"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Threat Intel")),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Telemetry"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable sending telemetry & attack information (anonymous) to Haltdos"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Threat Source"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify how to read threat source"),(0,a.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Upload Threat Intel"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the button to upload threat intel"),(0,a.kt)("td",{parentName:"tr",align:null},"Button"),(0,a.kt)("td",{parentName:"tr",align:null},"NA")))))}u.isMDXComponent=!0},21589:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/threat_feeds1-660fa858d046695c9cf48de5e4777afc.png"}}]);