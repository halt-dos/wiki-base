"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[31849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||k[m]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22800:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:57},i="KB: 1057",s={unversionedId:"kb/waf/kb-1057",id:"kb/waf/kb-1057",title:"KB: 1057",description:"How to mask sensitive data content like CCN/SSN?",source:"@site/docs/kb/waf/kb-1057.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1057",permalink:"/kb/waf/kb-1057",draft:!1,tags:[],version:"current",sidebarPosition:57,frontMatter:{sidebar_position:57},sidebar:"kb_sidebar",previous:{title:"KB: 1056",permalink:"/kb/waf/kb-1056"},next:{title:"KB: 1058",permalink:"/kb/waf/kb-1058"}},l={},p=[{value:"<strong>How to mask sensitive data content like CCN/SSN?</strong>",id:"how-to-mask-sensitive-data-content-like-ccnssn",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function k(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1057"},"KB: 1057"),(0,a.kt)("h3",{id:"how-to-mask-sensitive-data-content-like-ccnssn"},(0,a.kt)("strong",{parentName:"h3"},"How to mask sensitive data content like CCN/SSN?")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"Client wants mask sensitive details such as CCN and SSN."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("p",null,"The client can achieve the above requirement by utilizing the Response Rule feature of the WAF."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Firstly, login to WAF.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(42719).Z,width:"1810",height:"966"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Apps")," > ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Profile")," > ",(0,a.kt)("strong",{parentName:"li"},"Profile default setting")," > ",(0,a.kt)("strong",{parentName:"li"},"Profile Rule")," > ",(0,a.kt)("strong",{parentName:"li"},"Response Rule")," > ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," > ",(0,a.kt)("strong",{parentName:"li"},"Configure the Rule")," > ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(49538).Z,width:"1816",height:"964"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(17609).Z,width:"1809",height:"950"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open the listener in the browser after applying the rule and login to the page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(9812).Z,width:"973",height:"953"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Now enter the sensitive data like CCN/SSN.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(24730).Z,width:"946",height:"109"})),(0,a.kt)("p",null,"Above steps are shown, with the help of which client can mask sensitive data by using Haltdos response rule"))}k.isMDXComponent=!0},42719:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_1057_1-b66b77acbb01e13a8777400c8be88de8.png"},49538:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rules_kb_1057_2-ba21940c47101ad9c670200a1e13430a.png"},17609:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rules_kb_1057_3-c777c7532e99eea372145d5353c7ea3b.png"},24730:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/maskedCCN-49f4e94db9ec7fa2aa6104766e255e0a.png"},9812:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/responserule1-0eedd3f2df1af8771f5057ef736110fd.png"}}]);