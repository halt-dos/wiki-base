"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1685],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},14681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:0},i="hdPlatform",l={unversionedId:"saas/docs/hdplatform/hdplatform",id:"saas/docs/hdplatform/hdplatform",title:"hdPlatform",description:"Underlying platform for Haltdos Cloud",source:"@site/docs/saas/docs/hdplatform/hdplatform.md",sourceDirName:"saas/docs/hdplatform",slug:"/saas/docs/hdplatform/",permalink:"/saas/docs/hdplatform/",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"saasSidebar",previous:{title:"Haltdos Saas",permalink:"/saas/docs/"},next:{title:"Infrastructure",permalink:"/saas/docs/hdplatform/infrastructure"}},s={},p=[{value:"Infrastructure Agnostic",id:"infrastructure-agnostic",level:3},{value:"Separation of Planes",id:"separation-of-planes",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"hdplatform"},"hdPlatform"),(0,n.kt)("p",null,"Underlying platform for Haltdos Cloud"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos is a security company providing next generation security products. Our solutions are catered for enterprise regardless of the underlying infrastructure. All our security products are built on top of Haltdos Platform (hdPlatform) which is internationally certified with Common Criteria EAL 2+ certification."),(0,n.kt)("h3",{id:"infrastructure-agnostic"},"Infrastructure Agnostic"),(0,n.kt)("p",null,"hdPlatform separates logical entities from physical infrastructure. This allows hdPlatform to be installed in various flavors - SaaS, Hardware or Virtual form factor. Separating logical entities from physical infrastructure provide the following benefits:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Horizontally scale by adding more hardware."),(0,n.kt)("li",{parentName:"ul"},"Flexible Deployment for any environment."),(0,n.kt)("li",{parentName:"ul"},"Apps built on hdPlatform can work across any flavor - SaaS, Hardware or Virtual without compromising on features.")),(0,n.kt)("h3",{id:"separation-of-planes"},"Separation of Planes"),(0,n.kt)("p",null,"hdPlatform is divided into multiple planes - each with its dedicated functions and purpose."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Management Plane"),": Covers all managerial aspects of installing, managing and operating solutions provided by Haltdos. Operations such as updating policy, user management, installing updates and reporting are done in this plane. This plane also exposes GUI, CLI, and API interfaces for user interaction and integration with 3rd party tools."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Enforcement Plane"),": Enforcement of policies is done through this plane. This plane connects to Management Plane for retrieving updates, policies and procedures."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Auxiliary Plane"),": The Enforcement Plane can encompass multiple instances to support High Availability / Clustering scenarios. The Auxiliary Plane manages status and intelligence sharing between multiple instances in the Enforcement Plane."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Data Plane"),": All traffic flowing through your protected infrastructure is the Data Plane. All products and services by Haltdos are built as Apps in hdPlatform. These apps include Anti-DDoS, Web Application Firewall, Secure DNS Management, Content Delivery Network (CDN), etc.")))}u.isMDXComponent=!0}}]);