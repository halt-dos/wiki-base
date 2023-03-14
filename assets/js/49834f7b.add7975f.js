"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6235],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(n),b=o,d=p["".concat(c,".").concat(b)]||p[b]||u[b]||a;return n?r.createElement(d,i(i({ref:t},m),{},{components:n})):r.createElement(d,i({ref:t},m))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},32024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={},i="KB: 2017",s={unversionedId:"kb/adc/kb-2017",id:"kb/adc/kb-2017",title:"KB: 2017",description:"How to manage maximum concurrent connection?",source:"@site/docs/kb/adc/kb-2017.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2017",permalink:"/kb/adc/kb-2017",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2016",permalink:"/kb/adc/kb-2016"},next:{title:"KB: 2018",permalink:"/kb/adc/kb-2018"}},c={},l=[{value:"<strong>How to manage maximum concurrent connection?</strong>",id:"how-to-manage-maximum-concurrent-connection",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],m={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-2017"},"KB: 2017"),(0,o.kt)("h3",{id:"how-to-manage-maximum-concurrent-connection"},(0,o.kt)("strong",{parentName:"h3"},"How to manage maximum concurrent connection?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"The client want to manage maximum concurrent connection on the listener level."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The above requirement can be achieved by specifying maximum concurrent connection option under listener in Haltdos SLB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First log into the Haltdos management portal.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(76820).Z,width:"1836",height:"963"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")," > ",(0,o.kt)("strong",{parentName:"li"},"SLB")," > ",(0,o.kt)("strong",{parentName:"li"},"listener")," > ",(0,o.kt)("strong",{parentName:"li"},"listener settings"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(19724).Z,width:"1815",height:"958"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Client has to manage the maximum concurrent connection by using  session cookie,maximum concurrent user sessions and taking appropriate action against the maximum session exceeded action.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(92815).Z,width:"1809",height:"967"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In the above picture, we are using a sample configuration to showing the result.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(75814).Z,width:"1815",height:"936"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"In above steps, we are configuring maximum concurrent user session = 1, which means that user will have one user session if someone tried for another user session then the maximum session is exceeded and the user request will be drooped on the basis of action mentioned(drop) in configuration.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(64088).Z,width:"1852",height:"697"})))}u.isMDXComponent=!0},64088:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc17.5-03f48a31255cf9a1c5913e7546182d77.png"},75814:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/browser_kb_2017_4-58644956f287b4c8b0ef6ab084056f4d.png"},76820:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_2017_1-235dcc07fe1668182be616f50b2d5b5e.png"},19724:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2017_2-ba861def7d81bb3c0650a45548ef8897.png"},92815:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/settings_kb_2017_3-dfb7782b3a56e5989ebacb60fdb05c27.png"}}]);