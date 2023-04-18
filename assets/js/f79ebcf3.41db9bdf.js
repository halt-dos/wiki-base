"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[16515],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9046:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:0,pagination_prev:null},i="Haltdos Platform",l={unversionedId:"products/platform/platform",id:"products/platform/platform",title:"Haltdos Platform",description:"Overview of Haltdos Platform",source:"@site/docs/products/platform/platform.md",sourceDirName:"products/platform",slug:"/products/platform/",permalink:"/products/platform/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0,pagination_prev:null},sidebar:"sidebar",next:{title:"Stacks",permalink:"/products/platform/stacks/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"Infrastructure Agnostic",id:"infrastructure-agnostic",level:2},{value:"Separation of Planes",id:"separation-of-planes",level:2}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"haltdos-platform"},"Haltdos Platform"),(0,a.kt)("p",null,"Overview of Haltdos Platform"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Haltdos is a security company providing next-generation security products. Our solutions are catered for enterprise regardless of the underlying infrastructure. All our security products are built on top of Haltdos Platform (hdPlatform) which is internationally certified with Common Criteria EAL 2+ certification."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"infrastructure-agnostic"},"Infrastructure Agnostic"),(0,a.kt)("p",null,"hdPlatform separates logical entities from physical infrastructure. This allows hdPlatform to be installed in various flavors - SaaS, Hardware, or Virtual form factor. Separating logical entities from physical infrastructure provide the following benefits:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Horizontally scale by adding more hardware"),(0,a.kt)("li",{parentName:"ul"},"Flexible Deployment for any environment"),(0,a.kt)("li",{parentName:"ul"},"Apps built on hdPlatform can work across any flavor - SaaS, Hardware or Virtual without compromising on features")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"separation-of-planes"},"Separation of Planes"),(0,a.kt)("p",null,"hdPlatform is divided into multiple planes - each with its dedicated functions and purpose.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Management Plane"),"\nCovers all managerial aspects of installing, managing, and operating solutions provided by Haltdos. Operations such as updating policy, user management, installing updates, and reporting are done in this plane. This plane also exposes GUI, CLI, and API interfaces for user interaction and integration with 3rd party tools. For security reasons, except user creation, deletion, and change of user permission and administrator capabilities, all functionality of GUI can be managed through CLI as well.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enforcement Plane"),"\nEnforcement of policies is done through this plane. This plane connects to Management Plane for retrieving updates, policies. and procedures.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auxiliary Plane"),(0,a.kt)("br",{parentName:"p"}),"\n","The Enforcement Plane can encompass multiple instances to support High Availability / Clustering scenarios. The Auxiliary Plane manages status and intelligence sharing between multiple instances in the Enforcement Plane. The shared data includes connection status, SSL status, intel status such as blocked IP, state information such as variables, learning, rule staging, etc.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Data Plane"),"\nAll traffic flowing through your protected infrastructure is the Data Plane. All products and services by Haltdos are built as Apps in hdPlatform. These apps include Anti-DDoS, Web Application Firewall, Server Load Balancer, Global Server Load Balancer, Link Load Balancer, etc."))}u.isMDXComponent=!0}}]);