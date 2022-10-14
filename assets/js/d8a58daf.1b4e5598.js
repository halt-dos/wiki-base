"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[494],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),c=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),m=c(r),f=a,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(b,i(i({ref:e},u),{},{components:r})):n.createElement(b,i({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},42003:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:45},i="KB: 1045",l={unversionedId:"waf/tutorials/kb-1045",id:"waf/tutorials/kb-1045",title:"KB: 1045",description:"-----------",source:"@site/docs/waf/tutorials/kb-1045.md",sourceDirName:"waf/tutorials",slug:"/waf/tutorials/kb-1045",permalink:"/waf/tutorials/kb-1045",draft:!1,tags:[],version:"current",sidebarPosition:45,frontMatter:{sidebar_position:45},sidebar:"adcSidebar",previous:{title:"KB: 1044",permalink:"/waf/tutorials/kb-1044"},next:{title:"KB: 1046",permalink:"/waf/tutorials/kb-1046"}},s={},c=[],u={toc:c};function p(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1045"},"KB: 1045"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-set-maximum-allowed-bot-request-rate-from-a-single-client-ip"},"How to set maximum allowed Bot request rate from a single client IP?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to set the maximum value that is allowed for the bot requests coming from a single IP address."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the haltdos management portal.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1045",src:r(61742).Z,width:"1920",height:"527"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > profile > profile settings > Bot protection.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1045",src:r(187).Z,width:"1802",height:"873"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"User can set the desired configuration using ",(0,a.kt)("strong",{parentName:"li"},"Maximum Bot Request Rate")," and ",(0,a.kt)("strong",{parentName:"li"},"Maximum Bot Request Burst"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1045",src:r(95402).Z,width:"1886",height:"848"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After finishing, click on save changes.")),(0,a.kt)("p",null,"In this way, a user can limit the rate and burst value for the bot requests."))}p.isMDXComponent=!0},61742:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},95402:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/ee1-dea5db4986f7a449a3095db27f116bd0.png"},187:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/pro1-0ae800125b99e1e320e6b12bc11ba6c3.png"}}]);