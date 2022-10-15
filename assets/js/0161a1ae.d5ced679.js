"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1314],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(s,".").concat(k)]||d[k]||u[k]||i;return n?r.createElement(m,l(l({ref:e},c),{},{components:n})):r.createElement(m,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19166:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3},l="Link Bonds",o={unversionedId:"hdplatform/stacks/instance/network_settings/link_bonds",id:"hdplatform/stacks/instance/network_settings/link_bonds",title:"Link Bonds",description:"Link Aggregating of Ethernet NICs for high throughput and reliability",source:"@site/docs/hdplatform/stacks/instance/network_settings/link_bonds.md",sourceDirName:"hdplatform/stacks/instance/network_settings",slug:"/hdplatform/stacks/instance/network_settings/link_bonds",permalink:"/hdplatform/stacks/instance/network_settings/link_bonds",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Virtual LAN",permalink:"/hdplatform/stacks/instance/network_settings/virtual_lan"},next:{title:"Routing",permalink:"/hdplatform/stacks/instance/routing/"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:2}],c={toc:p};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"link-bonds"},"Link Bonds"),(0,a.kt)("p",null,"Link Aggregating of Ethernet NICs for high throughput and reliability"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Aggregating two or more links to achieve one fat link brings a number of advantages, in short more bandwidth. Haltdos appliances (physical or virtual instanes) support Link bonding that combines multiple NICs that are running in Active-Active or Active-Passive scenarios."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"linkbonds",src:n(43457).Z,width:"1255",height:"664"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack > Instances > Instance > Network > Link Bonds")),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Addresses"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Route Via"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Route Type"),(0,a.kt)("td",{parentName:"tr",align:null},"UNICAST / UNREACHABLE / PROHIBIT / BLACKHOLE"),(0,a.kt)("td",{parentName:"tr",align:null},"UNICAST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Route Scope"),(0,a.kt)("td",{parentName:"tr",align:null},"GLOBAL / LINK / HOST"),(0,a.kt)("td",{parentName:"tr",align:null},"GLOBAL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Metric"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))))}u.isMDXComponent=!0},43457:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/linkbonds1-6a7f6e4e35527e4adeb20ad126326538.png"}}]);