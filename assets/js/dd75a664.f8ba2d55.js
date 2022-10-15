"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6729],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var p=n.createContext({}),l=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):s(s({},e),t)),r},c=function(t){var e=l(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),g=l(r),f=o,m=g["".concat(p,".").concat(f)]||g[f]||u[f]||a;return r?n.createElement(m,s(s({ref:e},c),{},{components:r})):n.createElement(m,s({ref:e},c))}));function f(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,s=new Array(a);s[0]=g;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},23633:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:59},s="KB: 1059",i={unversionedId:"kb/tutorials/kb-1059",id:"kb/tutorials/kb-1059",title:"KB: 1059",description:"Problem Statement",source:"@site/docs/kb/tutorials/kb-1059.md",sourceDirName:"kb/tutorials",slug:"/kb/tutorials/kb-1059",permalink:"/kb/tutorials/kb-1059",draft:!1,tags:[],version:"current",sidebarPosition:59,frontMatter:{sidebar_position:59}},p={},l=[],c={toc:l};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1059"},"KB: 1059"),(0,o.kt)("h1",{id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf"},"How to prevent Cross-site Request Forgery through Haltdos WAF?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem Statement")),(0,o.kt)("p",null,"Client wants prevent their sites by Cross-site Request Forgery attack."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SOLUTION")),(0,o.kt)("p",null,"The client can achieve the above requirement by configuring settings to prevent CSRF on Haltdos console."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1059",src:r(17839).Z,width:"1809",height:"870"})),(0,o.kt)("p",null,"2.Go to ",(0,o.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,o.kt)("strong",{parentName:"p"},"WAF")," > ",(0,o.kt)("strong",{parentName:"p"},"Listener")," > ",(0,o.kt)("strong",{parentName:"p"},"Advance Bot")," > ",(0,o.kt)("strong",{parentName:"p"},"Configure settings for CSRF")," > ",(0,o.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1059",src:r(22167).Z,width:"1844",height:"178"})),(0,o.kt)("p",null,"3.Go to ",(0,o.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,o.kt)("strong",{parentName:"p"},"WAF")," > ",(0,o.kt)("strong",{parentName:"p"},"Listener")," > ",(0,o.kt)("strong",{parentName:"p"},"Profile")," > ",(0,o.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,o.kt)("strong",{parentName:"p"},"Policy")," > ",(0,o.kt)("strong",{parentName:"p"},"Web Policy")," > ",(0,o.kt)("strong",{parentName:"p"},"Enable CSRF toggle")," > ",(0,o.kt)("strong",{parentName:"p"},"Save changes")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1059",src:r(89566).Z,width:"1835",height:"553"})),(0,o.kt)("p",null,"By configuring above CSRF settings client can protect their sites from CSRF attack."))}u.isMDXComponent=!0},89566:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/csfr-e6bbc2878f92d9a36df887d3c60185f9.png"},22167:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/enablecsfr-a12281a105e8cc494f0e8e38497c293d.png"},17839:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"}}]);