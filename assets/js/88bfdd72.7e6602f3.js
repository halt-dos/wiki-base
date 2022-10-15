"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4802],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(g,i(i({ref:e},c),{},{components:n})):r.createElement(g,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96673:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6},i="Config Synchronization",l={unversionedId:"products/hdplatform/stacks/stack_settings/config_sync",id:"products/hdplatform/stacks/stack_settings/config_sync",title:"Config Synchronization",description:"Synchronizing configurations across peer managements",source:"@site/docs/products/hdplatform/stacks/stack_settings/config_sync.md",sourceDirName:"products/hdplatform/stacks/stack_settings",slug:"/products/hdplatform/stacks/stack_settings/config_sync",permalink:"/products/hdplatform/stacks/stack_settings/config_sync",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"Dashboards",permalink:"/products/hdplatform/stacks/stack_settings/dashboards"},next:{title:"Status Page",permalink:"/products/hdplatform/stacks/status_page"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3}],c={toc:p};function u(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"config-synchronization"},"Config Synchronization"),(0,a.kt)("p",null,"Synchronizing configurations across peer managements"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos platform supports periodic and on-demand synchronization of configurations across multiple peer managements. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"API Token with READ AND WRITE access is required to sync configurations.")),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack > Settings > Config Sync")),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable configuration sync with peer management"),(0,a.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Auto Sync"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable automatic configuration sync with peer management"),(0,a.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Peer Host"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the host name or IP address of peer management"),(0,a.kt)("td",{parentName:"tr",align:null},"IP / Host Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Peer Stack"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the peer management StackId"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Peer Host Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the peer management port"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"9000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Auth Key"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify Auth Key for authentication"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")))))}u.isMDXComponent=!0}}]);