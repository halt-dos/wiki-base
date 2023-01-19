"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[87542],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),b=a,f=m["".concat(s,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36674:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:22},i="KB: 1022",l={unversionedId:"kb/waf/kb-1022",id:"kb/waf/kb-1022",title:"KB: 1022",description:"-----------",source:"@site/docs/kb/waf/kb-1022.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1022",permalink:"/rc/kb/waf/kb-1022",draft:!1,tags:[],version:"current",sidebarPosition:22,frontMatter:{sidebar_position:22},sidebar:"kb_sidebar",previous:{title:"KB: 1021",permalink:"/rc/kb/waf/kb-1021"},next:{title:"KB: 1023",permalink:"/rc/kb/waf/kb-1023"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1022"},"KB: 1022"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-change-temporary-blacklist-duration"},"How to change temporary blacklist duration?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to add or edit the temporary blacklist duration time. User should always set temp blacklist duration more than 0 so that mitigation can work.\n",(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"First of all log into the management console portal.\n",(0,a.kt)("img",{alt:"kb-1022",src:r(16980).Z,width:"1920",height:"527"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to stack > WAF > listener > profile > profile settings."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1022",src:r(14122).Z,width:"1890",height:"855"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'In bottom we get the option "Temporary Blacklist Duration"')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1022",src:r(29522).Z,width:"1888",height:"792"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After adding value click on save changes.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1022",src:r(98490).Z,width:"1891",height:"787"})),(0,a.kt)("p",null,"In this way users can change the temporary blacklist duration as per the requirement."))}u.isMDXComponent=!0},16980:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/main-bbb644391863631c783a01eb30fc46a0.png"},14122:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/main2-bf4d54de21719952f22fe6208a69a0ed.png"},29522:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/main3-7dffab6215ca41d21d03eba71c775467.png"},98490:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/main4-f30939b5a72147def3e227f2c3a446e5.png"}}]);