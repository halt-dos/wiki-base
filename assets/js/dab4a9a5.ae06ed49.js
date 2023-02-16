"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[63791],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,f=m["".concat(l,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:45},i="KB: 1045",s={unversionedId:"kb/waf/kb-1045",id:"version-6.0/kb/waf/kb-1045",title:"KB: 1045",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1045.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1045",permalink:"/v6/kb/waf/kb-1045",draft:!1,tags:[],version:"6.0",sidebarPosition:45,frontMatter:{sidebar_position:45},sidebar:"kb_sidebar",previous:{title:"KB: 1044",permalink:"/v6/kb/waf/kb-1044"},next:{title:"KB: 1046",permalink:"/v6/kb/waf/kb-1046"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1045"},"KB: 1045"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-set-maximum-allowed-bot-request-rate-from-a-single-client-ip"},"How to set maximum allowed Bot request rate from a single client IP?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to set the maximum value that is allowed for the bot requests coming from a single IP address."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the haltdos management portal.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1045",src:r(61742).Z,width:"1920",height:"527"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > profile > profile settings > Bot protection.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1045",src:r(187).Z,width:"1802",height:"873"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"User can set the desired configuration using ",(0,a.kt)("strong",{parentName:"li"},"Maximum Bot Request Rate")," and ",(0,a.kt)("strong",{parentName:"li"},"Maximum Bot Request Burst"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1045",src:r(95402).Z,width:"1886",height:"848"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After finishing, click on save changes.")),(0,a.kt)("p",null,"In this way, a user can limit the rate and burst value for the bot requests."))}u.isMDXComponent=!0},61742:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},95402:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ee1-dea5db4986f7a449a3095db27f116bd0.png"},187:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/pro1-0ae800125b99e1e320e6b12bc11ba6c3.png"}}]);