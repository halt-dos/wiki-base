"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[21811],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>d});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||a;return n?r.createElement(f,i(i({ref:e},s),{},{components:n})):r.createElement(f,i({ref:e},s))}));function d(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},73123:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="KB-9009",l={unversionedId:"community/kb/kb-9009",id:"community/kb/kb-9009",title:"KB-9009",description:"How to drop bad reputation traffic?",source:"@site/docs/community/kb/kb-9009.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9009",permalink:"/community/kb/kb-9009",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"KB-9008",permalink:"/community/kb/kb-9008"},next:{title:"KB-9010",permalink:"/community/kb/kb-9010"}},c={},p=[{value:"<strong>How to drop bad reputation traffic?</strong>",id:"how-to-drop-bad-reputation-traffic",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],s={toc:p};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,r.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-9009"},"KB-9009"),(0,o.kt)("h3",{id:"how-to-drop-bad-reputation-traffic"},(0,o.kt)("strong",{parentName:"h3"},"How to drop bad reputation traffic?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"User wants to enable mitigation for bad reputation traffic."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"Users are allowed to enable mitigation for the application on-boarded application. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the first step user need to log in to the Haltdos WAF CE Web UI console using following URL in any web browser.")),(0,o.kt)("p",null,"(https://<'machineIP>:9000)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13871).Z,width:"1920",height:"972"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Users need to go to following path : ",(0,o.kt)("strong",{parentName:"li"},"Home > WAF > Bot Protection"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bad Reputation",src:n(4403).Z,width:"1877",height:"748"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"To enable mitigation against malicious & bad reputation traffic, user need to change menu option from no action to drop.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Bad Reputation",src:n(48672).Z,width:"1889",height:"699"})),(0,o.kt)("p",null,"In this way, users can enable mitigation against bad reputation traffic."))}u.isMDXComponent=!0},4403:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/bd_rep-5ae5b60a2d2d1f932d8247f430bd851b.png"},48672:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/bd_rep1-0334831d0cef9e3c8eea68ef93f59784.png"},13871:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"}}]);