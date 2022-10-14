"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1214],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var l=n.createContext({}),c=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,i(i({ref:e},p),{},{components:r})):n.createElement(m,i({ref:e},p))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23530:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:40},i="KB: 1040",s={unversionedId:"waf/docs/tutorials/kb-1040",id:"waf/docs/tutorials/kb-1040",title:"KB: 1040",description:"-----------",source:"@site/docs/waf/docs/tutorials/kb-1040.md",sourceDirName:"waf/docs/tutorials",slug:"/waf/docs/tutorials/kb-1040",permalink:"/waf/docs/tutorials/kb-1040",draft:!1,tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40},sidebar:"wafSidebar",previous:{title:"KB: 1039",permalink:"/waf/docs/tutorials/kb-1039"},next:{title:"KB: 1041",permalink:"/waf/docs/tutorials/kb-1041"}},l={},c=[],p={toc:c};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1040"},"KB: 1040"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-mitigate-xss-attack-through-haltdos-waf-solution-"},"How to Mitigate XSS attack through Haltdos WAF Solution ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to set the WAF mitigation which can mitigate XSS attack."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the haltdos management portal.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1040",src:r(61742).Z,width:"1920",height:"527"})),(0,a.kt)("p",null,"2.Go to stack > WAF > listener > profile > profile settings."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1040",src:r(69047).Z,width:"1692",height:"828"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1040",src:r(47256).Z,width:"1243",height:"828"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Set the optional mode to mitigation.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1040",src:r(98965).Z,width:"1684",height:"818"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1040",src:r(46925).Z,width:"1247",height:"830"})),(0,a.kt)("p",null,"In this way, we can configure the WAF to mitigate the XSS drop."))}u.isMDXComponent=!0},61742:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},69047:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/s1-70a0f11ca362742ae07ce72c676d8440.png"},47256:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/s2-9c3615e734e53cccbfe29410394307a4.png"},98965:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/s3-1d278c9695c20a428d56b2b9f61be544.png"},46925:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/s4-0dd418aa1eb843d144c4ceb10ac4b48a.png"}}]);