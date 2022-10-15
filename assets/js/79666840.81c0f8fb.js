"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3433],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:e},c),{},{components:n})):a.createElement(g,i({ref:e},c))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10883:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:6},i="Config Synchronization",l={unversionedId:"hdplatform/stacks/stack_settings/config_sync",id:"hdplatform/stacks/stack_settings/config_sync",title:"Config Synchronization",description:"Synchronizing configurations across peer managements",source:"@site/docs/hdplatform/stacks/stack_settings/config_sync.md",sourceDirName:"hdplatform/stacks/stack_settings",slug:"/hdplatform/stacks/stack_settings/config_sync",permalink:"/hdplatform/stacks/stack_settings/config_sync",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"Dashboards",permalink:"/hdplatform/stacks/stack_settings/dashboards"},next:{title:"Status Page",permalink:"/hdplatform/stacks/status_page"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3}],c={toc:p};function m(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"config-synchronization"},"Config Synchronization"),(0,r.kt)("p",null,"Synchronizing configurations across peer managements"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Haltdos platform supports periodic and on-demand synchronization of configurations across multiple peer managements. "),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"API Token with READ AND WRITE access is required to sync configurations.")),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Settings > Config Sync")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click Save")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable configuration sync with peer management"),(0,r.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Auto Sync"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable automatic configuration sync with peer management"),(0,r.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Peer Host"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the host name or IP address of peer management"),(0,r.kt)("td",{parentName:"tr",align:null},"IP / Host Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Peer Stack"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the peer management StackId"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Peer Host Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the peer management port"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Auth Key"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify Auth Key for authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")))))}m.isMDXComponent=!0}}]);