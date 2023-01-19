"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[55423],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>c});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var p=n.createContext({}),s=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(a),c=r,k=d["".concat(p,".").concat(c)]||d[c]||m[c]||l;return a?n.createElement(k,i(i({ref:e},u),{},{components:a})):n.createElement(k,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},77640:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i="Operational Settings",o={unversionedId:"products/hdplatform/stacks/instance/operational_settings",id:"version-6.0/products/hdplatform/stacks/instance/operational_settings",title:"Operational Settings",description:"To configure Haltdos appliance in various operational modes",source:"@site/versioned_docs/version-6.0/products/hdplatform/stacks/instance/operational_settings.md",sourceDirName:"products/hdplatform/stacks/instance",slug:"/products/hdplatform/stacks/instance/operational_settings",permalink:"/products/hdplatform/stacks/instance/operational_settings",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Instance",permalink:"/products/hdplatform/stacks/instance/"},next:{title:"High Availiability",permalink:"/products/hdplatform/stacks/instance/high_availiability"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],u={toc:s};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"operational-settings"},"Operational Settings"),(0,r.kt)("p",null,"To configure Haltdos appliance in various operational modes"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Haltdos platform supports multiple modes of operations of various Apps depending upon user requirement and deployment strategy. The appliance can be configured in the following modes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Layer 2 mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bridge"),(0,r.kt)("li",{parentName:"ul"},"Transparent"))),(0,r.kt)("li",{parentName:"ul"},"Layer 3 mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Reverse Proxy"),(0,r.kt)("li",{parentName:"ul"},"Direct Server Return"),(0,r.kt)("li",{parentName:"ul"},"Out-of-Path mode with BGP Flowspec"))),(0,r.kt)("li",{parentName:"ul"},"Offline mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TAP / SPAN interface"),(0,r.kt)("li",{parentName:"ul"},"Netflow / IPFIX / SFlow"),(0,r.kt)("li",{parentName:"ul"},"Parsing access logs")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Operational setting",src:a(26929).Z,width:"1277",height:"450"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > Instance > Operational")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click Save")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Enable Bypass"),(0,r.kt)("th",{parentName:"tr",align:null},"Enable Hardware Bypass on instance"),(0,r.kt)("th",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,r.kt)("th",{parentName:"tr",align:null},"DISABLED"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operational Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose the mode of operation"),(0,r.kt)("td",{parentName:"tr",align:null},"LAYER 3 / LAYER 2"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"/ OFFLINE"),(0,r.kt)("td",{parentName:"tr",align:null},"LAYER 3"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Management IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure instance management IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Offline Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Choose the mode of offline operation"),(0,r.kt)("td",{parentName:"tr",align:null},"SPAN / NETFLOW /"),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"SFLOW / IPFIX"),(0,r.kt)("td",{parentName:"tr",align:null},"SPAN"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"High Watermark Threshold")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Resource"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU / RAM / DISK"),(0,r.kt)("td",{parentName:"tr",align:null},"CPU")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Low Watermark"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"No Value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"High Watermark"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"No Value")))))}m.isMDXComponent=!0},26929:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/operational_settings1-d5d8a6ade9a1fec374694a8f6ab1b9ba.png"}}]);