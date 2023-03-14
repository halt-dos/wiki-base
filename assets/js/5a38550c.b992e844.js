"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[83850],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=s(r),m=a,b=k["".concat(p,".").concat(m)]||k[m]||u[m]||o;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},60532:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="KB: 2002",l={unversionedId:"kb/adc/kb-2002",id:"kb/adc/kb-2002",title:"KB: 2002",description:"How to mark all server origin cookies as Secure?",source:"@site/docs/kb/adc/kb-2002.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2002",permalink:"/kb/adc/kb-2002",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2001",permalink:"/kb/adc/kb-2001"},next:{title:"KB: 2003",permalink:"/kb/adc/kb-2003"}},p={},s=[{value:"<strong>How to mark all server origin cookies as Secure?</strong>",id:"how-to-mark-all-server-origin-cookies-as-secure",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2002"},"KB: 2002"),(0,a.kt)("h3",{id:"how-to-mark-all-server-origin-cookies-as-secure"},(0,a.kt)("strong",{parentName:"h3"},"How to mark all server origin cookies as Secure?")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to mark all the server origin cookies as Secure"),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to solve"),":-"),(0,a.kt)("p",null,"The client can achieve the requirement by creating the header rule as mentioned below"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login into Haltdos console.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Apps")," > ",(0,a.kt)("strong",{parentName:"p"},"SLB")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Rules")," > ",(0,a.kt)("strong",{parentName:"p"},"Header Rule"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now create header rule by entering the information mentioned below"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header Name: ",(0,a.kt)("strong",{parentName:"p"},"Set-cookie"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pattern: ",(0,a.kt)("strong",{parentName:"p"},"^((?:.(?!\\ ","[Ss]","ecure))*)$"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header Value: ",(0,a.kt)("strong",{parentName:"p"},"\\1;\\ Secure"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Action: ",(0,a.kt)("strong",{parentName:"p"},"Overwrite Response Header"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Conditions: ",(0,a.kt)("strong",{parentName:"p"},"NA")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click on save changes for saving the rule ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"header",src:r(15033).Z,width:"1836",height:"963"})),(0,a.kt)("p",null,"The above image shows creaton of header rule with overwriting the response header."))}u.isMDXComponent=!0},15033:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/header_kb_2002_1-96a71bba44fa54e04c6e2440528b569a.png"}}]);