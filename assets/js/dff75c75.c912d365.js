"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[82272],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(r),g=o,d=b["".concat(l,".").concat(g)]||b[g]||u[g]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},10906:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={},a=void 0,s={unversionedId:"kb/gslb/kb-4003",id:"version-6.0/kb/gslb/kb-4003",title:"kb-4003",description:"How to configure Listener and its DNS Service Type through Haltdos GSLB Solution?",source:"@site/versioned_docs/version-6.0/kb/gslb/kb-4003.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/kb-4003",permalink:"/v6/kb/gslb/kb-4003",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"kb-4002",permalink:"/v6/kb/gslb/kb-4002"},next:{title:"kb-4004",permalink:"/v6/kb/gslb/kb-4004"}},l={},c=[{value:"<strong>How to configure Listener and its DNS Service Type through Haltdos GSLB Solution</strong>?",id:"how-to-configure-listener-and-its-dns-service-type-through-haltdos-gslb-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-configure-listener-and-its-dns-service-type-through-haltdos-gslb-solution"},(0,o.kt)("strong",{parentName:"h3"},"How to configure Listener and its DNS Service Type through Haltdos GSLB Solution"),"?"),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"GSLB is running on a server with certain IP. Client wants to create a Listener which can work as Recursive DNS , Authoritative DNS or Both."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The client can achieve the above requirement by utilising the Listener and Operational under Haltdos GSLB."),(0,o.kt)("p",null,"1.First, log into the haltdos management console."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(21706).Z,width:"1843",height:"657"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Now Click on ",(0,o.kt)("strong",{parentName:"li"},"GSLB > Listener Page will appear > Click on Add Listener > Type the Listener Name > Click on Save"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(87978).Z,width:"1814",height:"451"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click on the Listener you have created > Operational Page will appear > Type the IP address of the Listener under Addresses > Press Enter > Select DNS Service Type from Drop Down i.e. Recursive DNS, Authoritative DNS or Both"),".\n\u200b")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(39113).Z,width:"1824",height:"864"})))}u.isMDXComponent=!0},21706:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb3.1-a8376b38f54f5bdcf5a4be9c5e037e93.png"},87978:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb3.2-5c4594347bb98e9d1e19829fe48f8f5f.png"},39113:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb3.3-13e9105e7c0f9acf3b2403d895a618f6.png"}}]);