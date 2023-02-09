"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[40057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),b=c(r),d=o,g=b["".concat(s,".").concat(d)]||b[d]||p[d]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},82450:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,l={unversionedId:"kb/gslb/kb-4006",id:"kb/gslb/kb-4006",title:"kb-4006",description:"How to configure a Authoritative DNS Zone Record?",source:"@site/docs/kb/gslb/kb-4006.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/kb-4006",permalink:"/rc/kb/gslb/kb-4006",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"kb-4005",permalink:"/rc/kb/gslb/kb-4005"},next:{title:"kb-4007",permalink:"/rc/kb/gslb/kb-4007"}},s={},c=[{value:"<strong>How to configure a Authoritative DNS Zone Record</strong>?",id:"how-to-configure-a-authoritative-dns-zone-record",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-configure-a-authoritative-dns-zone-record"},(0,o.kt)("strong",{parentName:"h3"},"How to configure a Authoritative DNS Zone Record"),"?"),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"Client wants to set a Authoritative DNS to answer all the recursive DNS nameservers about where specific websites can be found. "),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The client can achieve the above requirement by utilising the Zone Record under Haltdos GSLB."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(18558).Z,width:"1843",height:"657"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"GSLB > Go to Listener > Configure Listener by IP address and Select Authoritative DNS from DNS Service Type Drop Down"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(91302).Z,width:"1819",height:"800"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Zone > Configure Zone >Click on Save Changes"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(98224).Z,width:"1807",height:"474"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Zone > Add Record > Configure Zone Record > Click on Save Record"),".\n\u200b\n\u200b",(0,o.kt)("img",{src:r(11251).Z,width:"1803",height:"799"}))))}p.isMDXComponent=!0},18558:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb6.1-a8376b38f54f5bdcf5a4be9c5e037e93.png"},91302:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb6.2-a9c05e0320de9c5e8d9dc58c3a2e221c.png"},98224:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb6.3-75a7834f9050b57c5548edb851861b42.png"},11251:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb6.4-ca596317b76cf93e99d94175d8d893af.png"}}]);