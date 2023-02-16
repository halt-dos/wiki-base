"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[30854],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),d=a,b=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},77133:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:39},i="KB: 1039",s={unversionedId:"kb/waf/kb-1039",id:"kb/waf/kb-1039",title:"KB: 1039",description:"-----------",source:"@site/docs/kb/waf/kb-1039.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1039",permalink:"/kb/waf/kb-1039",draft:!1,tags:[],version:"current",sidebarPosition:39,frontMatter:{sidebar_position:39},sidebar:"kb_sidebar",previous:{title:"KB: 1038",permalink:"/kb/waf/kb-1038"},next:{title:"KB: 1040",permalink:"/kb/waf/kb-1040"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1039"},"KB: 1039"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-configure-web-extensions-and-restricted-extensions-and-validation"},"How to configure web extensions and restricted extensions and validation?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to configure web extension for which Human Authentication will be enabled. Also, user wants to configure the extensions that should be blocked."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the Haltdos management portal")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1039",src:n(61742).Z,width:"1920",height:"527"})),(0,a.kt)("p",null,"2.Go to stack > WAF > listener > profile > profile settings > policy  > Web Policy."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1039",src:n(72051).Z,width:"1809",height:"876"})),(0,a.kt)("p",null,'3.Using option "Web Extensions" & "Restricted Extensions" user can get desired results. Like for example we have restricted file upload extension of ".exe".'),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1039",src:n(63571).Z,width:"1896",height:"855"})),(0,a.kt)("p",null,"4.Once configuration done, click on save changes and as a resultant file upload request was dropped and an event is generated."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1039",src:n(86632).Z,width:"1251",height:"829"})))}u.isMDXComponent=!0},61742:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"},63571:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/h1-6403d7fcdda59900cfaf1250e52c1bae.png"},86632:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/l1-9e868faffd2c9bcafa920371fbadd416.png"},72051:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/web1-57f727d0a26a476ccaa13ada7b38f0be.png"}}]);