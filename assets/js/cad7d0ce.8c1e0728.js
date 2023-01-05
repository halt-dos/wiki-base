"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[63031],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),b=o,m=g["".concat(l,".").concat(b)]||g[b]||u[b]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},47252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,i={unversionedId:"kb/gslb/KB-4004",id:"version-6.0/kb/gslb/KB-4004",title:"KB-4004",description:"How to configure DNS resolver to block the access to dangerous websites?",source:"@site/versioned_docs/version-6.0/kb/gslb/KB-4004.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/KB-4004",permalink:"/kb/gslb/KB-4004",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB-4003",permalink:"/kb/gslb/KB-4003"},next:{title:"KB-4005",permalink:"/kb/gslb/KB-4005"}},l={},c=[{value:"<strong>How to configure DNS resolver to block the access to dangerous websites</strong>?",id:"how-to-configure-dns-resolver-to-block-the-access-to-dangerous-websites",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Splution</strong>",id:"splution",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-configure-dns-resolver-to-block-the-access-to-dangerous-websites"},(0,o.kt)("strong",{parentName:"h3"},"How to configure DNS resolver to block the access to dangerous websites"),"?"),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"Client wants to configure DNS resolver to block the access to dangerous websites. So if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can\u2019t connect to the dangerous site."),(0,o.kt)("h4",{id:"splution"},(0,o.kt)("strong",{parentName:"h4"},"Splution")),(0,o.kt)("p",null,"The client can achieve the above requirement by utilising the Domain Filter under Haltdos GSLB."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(80239).Z,width:"1843",height:"657"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"GSLB > Listener Page will appear > Select Domain Filters"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(14594).Z,width:"1816",height:"568"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add Domain Filter > Configure Domain Filter >Click on Save Changes"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(61006).Z,width:"1820",height:"739"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Go Back to ",(0,o.kt)("strong",{parentName:"li"},"Listener > Select a Listener > Operational Page will appear > Select Domain Filter File from Drop Down you have created > Click on Save Changes"),"\n\u200b\n",(0,o.kt)("img",{src:r(29234).Z,width:"1818",height:"747"}))))}u.isMDXComponent=!0},80239:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb4.1-a8376b38f54f5bdcf5a4be9c5e037e93.png"},14594:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb4.2-925f2008f65b6cf16919b115fc65abea.png"},61006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb4.3-59222eb731921c950552aae7bcc7276d.png"},29234:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/gslb4.4-e4c68acc7b3ee107990b41a2ce5a70cf.png"}}]);