"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[47579],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=c(r),d=o,b=g["".concat(l,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},77481:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="KB: 4003",s={unversionedId:"kb/gslb/kb-4003",id:"kb/gslb/kb-4003",title:"KB: 4003",description:"How to configure Listener and its DNS Service Type through Haltdos GSLB Solution?",source:"@site/docs/kb/gslb/kb-4003.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/kb-4003",permalink:"/kb/gslb/kb-4003",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 4002",permalink:"/kb/gslb/kb-4002"},next:{title:"KB: 4004",permalink:"/kb/gslb/kb-4004"}},l={},c=[{value:"<strong>How to configure Listener and its DNS Service Type through Haltdos GSLB Solution?</strong>",id:"how-to-configure-listener-and-its-dns-service-type-through-haltdos-gslb-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-4003"},"KB: 4003"),(0,o.kt)("h3",{id:"how-to-configure-listener-and-its-dns-service-type-through-haltdos-gslb-solution"},(0,o.kt)("strong",{parentName:"h3"},"How to configure Listener and its DNS Service Type through Haltdos GSLB Solution?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"GSLB is running on a server with certain IP. Client wants to create a Listener which can work as Recursive DNS , Authoritative DNS or Both."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("p",null,"The client can achieve the above requirement by utilising the Listener and Operational under Haltdos GSLB."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-4003",src:r(72981).Z,width:"1831",height:"945"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Now go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")," > ",(0,o.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,o.kt)("strong",{parentName:"li"},"Listener Page will appear")," > ",(0,o.kt)("strong",{parentName:"li"},"Click on Add Listener")," > ",(0,o.kt)("strong",{parentName:"li"},"Type the Listener Name")," > ",(0,o.kt)("strong",{parentName:"li"},"Click on Save"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-4003",src:r(86098).Z,width:"1798",height:"941"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Click on the Listener you have created")," > ",(0,o.kt)("strong",{parentName:"li"},"Operational Page will appear")," > ",(0,o.kt)("strong",{parentName:"li"},"Type the IP address of the Listener under Addresses")," > ",(0,o.kt)("strong",{parentName:"li"},"Press Enter")," > ",(0,o.kt)("strong",{parentName:"li"},"Select DNS Service Type from Drop Down i.e. Recursive DNS, Authoritative DNS or Both"),".\n\u200b\n",(0,o.kt)("img",{alt:"kb-4003",src:r(74545).Z,width:"1798",height:"941"}))))}u.isMDXComponent=!0},86098:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/listener_kb_4003_2-8f1af6a87aecadd7de591caa1017bca1.png"},74545:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/operational_kb_4003_3-982ff910f1d2c41d503dcef3d2460a13.png"},72981:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_4003_1-28d57536a9bc52f76916ab89dac8d7f8.png"}}]);