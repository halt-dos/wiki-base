"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[82275],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(r),k=o,b=g["".concat(l,".").concat(k)]||g[k]||u[k]||a;return r?n.createElement(b,s(s({ref:t},c),{},{components:r})):n.createElement(b,s({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},96432:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:59},s="KB: 1059",i={unversionedId:"kb/waf/kb-1059",id:"kb/waf/kb-1059",title:"KB: 1059",description:"How to prevent Cross-site Request Forgery through Haltdos WAF?",source:"@site/docs/kb/waf/kb-1059.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1059",permalink:"/kb/waf/kb-1059",draft:!1,tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59},sidebar:"kb_sidebar",previous:{title:"KB: 1058",permalink:"/kb/waf/kb-1058"},next:{title:"KB: 1060",permalink:"/kb/waf/kb-1060"}},l={},p=[{value:"<strong>How to prevent Cross-site Request Forgery through Haltdos WAF?</strong>",id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1059"},"KB: 1059"),(0,o.kt)("h3",{id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf"},(0,o.kt)("strong",{parentName:"h3"},"How to prevent Cross-site Request Forgery through Haltdos WAF?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"Client wants prevent their sites by Cross-site Request Forgery attack."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("p",null,"The client can achieve the above requirement by configuring settings to prevent CSRF on Haltdos console."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Firstly, login to WAF.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1059",src:r(71462).Z,width:"1810",height:"966"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")," > ",(0,o.kt)("strong",{parentName:"li"},"WAF")," > ",(0,o.kt)("strong",{parentName:"li"},"Listener")," > ",(0,o.kt)("strong",{parentName:"li"},"Advance Bot")," > ",(0,o.kt)("strong",{parentName:"li"},"Configure settings for CSRF")," > ",(0,o.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1059",src:r(2353).Z,width:"1816",height:"964"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")," > ",(0,o.kt)("strong",{parentName:"li"},"WAF")," > ",(0,o.kt)("strong",{parentName:"li"},"Listener")," > ",(0,o.kt)("strong",{parentName:"li"},"Profile")," > ",(0,o.kt)("strong",{parentName:"li"},"Profile default setting")," > ",(0,o.kt)("strong",{parentName:"li"},"Policy")," > ",(0,o.kt)("strong",{parentName:"li"},"Web Policy")," > ",(0,o.kt)("strong",{parentName:"li"},"Enable CSRF toggle")," > ",(0,o.kt)("strong",{parentName:"li"},"Save changes"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1059",src:r(70673).Z,width:"1816",height:"964"})),(0,o.kt)("p",null,"By configuring above CSRF settings client can protect their sites from CSRF attack."))}u.isMDXComponent=!0},2353:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/csrf_kb_1059_2-3d3394f128fc0ed24319ce5b428a3901.png"},70673:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/csrf_kb_1059_3-65869ed7fdc9a29a8e6a225f28f38b7d.png"},71462:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1059_1-b66b77acbb01e13a8777400c8be88de8.png"}}]);