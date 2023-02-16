"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[49464],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},25087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="KB-9012",l={unversionedId:"community/kb/kb-9012",id:"community/kb/kb-9012",title:"KB-9012",description:"How to configure multiple ports on same server?",source:"@site/docs/community/kb/kb-9012.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9012",permalink:"/rc/community/kb/kb-9012",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"KB-9011",permalink:"/rc/community/kb/kb-9011"},next:{title:"KB-9013",permalink:"/rc/community/kb/kb-9013"}},s={},c=[{value:"<strong>How to configure multiple ports on same server?</strong>",id:"how-to-configure-multiple-ports-on-same-server",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-9012"},"KB-9012"),(0,o.kt)("h3",{id:"how-to-configure-multiple-ports-on-same-server"},(0,o.kt)("strong",{parentName:"h3"},"How to configure multiple ports on same server?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"User wants to forward user request to multiple backend with their respective port numbers."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"Users can configure the Haltdos WAF CE to handle multiple client requests to be load balanced between multiple backend server having multiple backend ports."),(0,o.kt)("p",null,"Users need to follow below-mentioned steps to configure multiple backend servers with their multiple ports."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User need to log in to the Haltdos WAF CE Web UI console using following URL in the web browser. (https://<\\machineIP>:9000)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(13871).Z,width:"1920",height:"972"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Post login, users need to follow this path to reach the server farm : ",(0,o.kt)("strong",{parentName:"li"},"Home > WAF > Server Farm > Servers")," and click on add server option.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(14644).Z,width:"1891",height:"804"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Users need to fill the required details like, server IP address and backend server port and click on save changes.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(80309).Z,width:"1877",height:"705"})),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(9294).Z,width:"1884",height:"829"})),(0,o.kt)("p",null,"Once user click on save changes, server will be added in server farm. Now, Haltdos WAF CE will automatically start balancing the load between the server."),(0,o.kt)("p",null,"In this way, users can configure multiple backend server listening on multiple backend ports."))}u.isMDXComponent=!0},14644:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_server-4c7479cd511eb05faa8c8c720a83a05d.png"},80309:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_server3-877f7a488b7072928548c3a719d4d330.png"},9294:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add_server4-5a2a47c9e0e168ab0e860b7bc79fac79.png"},13871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"}}]);