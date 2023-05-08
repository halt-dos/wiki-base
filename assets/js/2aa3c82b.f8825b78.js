"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[99924],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,k=b["".concat(s,".").concat(m)]||b[m]||u[m]||o;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},94377:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},i="KB: 2014",l={unversionedId:"kb/adc/kb-2014",id:"kb/adc/kb-2014",title:"KB: 2014",description:"How to enable IPv6 support in listener?",source:"@site/docs/kb/adc/kb-2014.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2014",permalink:"/kb/adc/kb-2014",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2013",permalink:"/kb/adc/kb-2013"},next:{title:"KB: 2015",permalink:"/kb/adc/kb-2015"}},s={},p=[{value:"<strong>How to enable IPv6 support in listener?</strong>",id:"how-to-enable-ipv6-support-in-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2014"},"KB: 2014"),(0,a.kt)("h3",{id:"how-to-enable-ipv6-support-in-listener"},(0,a.kt)("strong",{parentName:"h3"},"How to enable IPv6 support in listener?")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client requires IPv6 to be enabled on the listener level."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The above requirement can be achieved by enabling IPv6 option under listener in Haltdos SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the Haltdos management portal.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(86865).Z,width:"1836",height:"963"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Apps")," > ",(0,a.kt)("strong",{parentName:"li"},"SLB")," > ",(0,a.kt)("strong",{parentName:"li"},"listener name")," > ",(0,a.kt)("strong",{parentName:"li"},"listener settings"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(81618).Z,width:"1811",height:"955"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Enable IPv6 option.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(93486).Z,width:"1811",height:"955"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"User Icon")," > ",(0,a.kt)("strong",{parentName:"li"},"System")," > ",(0,a.kt)("strong",{parentName:"li"},"Instance")," > ",(0,a.kt)("strong",{parentName:"li"},"Click on Instance name")," > ",(0,a.kt)("strong",{parentName:"li"},"Network")," > ",(0,a.kt)("strong",{parentName:"li"},"Ethernet"),". Select the active interface and enable IPv6 address option and configure the settings.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71161).Z,width:"1811",height:"955"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,a.kt)("p",null,"In this way client can enable IPv6 support in their listener. Client will add static/dynamic IPv6 address to listen."))}u.isMDXComponent=!0},71161:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incidents_kb_2014_4-eee4b6d1cc54fae1f6aa96261cc4f0b8.png"},86865:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_2014_1-235dcc07fe1668182be616f50b2d5b5e.png"},81618:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2014_2-eadd347f2bea2bd9c9e4250d2537aa56.png"},93486:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2014_3-58e4ac4ecf3b11b782051f4859d72775.png"}}]);