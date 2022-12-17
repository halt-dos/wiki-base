"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4130],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),b=c(r),d=a,f=b["".concat(s,".").concat(d)]||b[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},61869:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:7},i="KB: 3008",l={unversionedId:"kb/platform/kb-3008",id:"kb/platform/kb-3008",title:"KB: 3008",description:"How to Create Member with different access control?",source:"@site/docs/kb/platform/kb-3008.md",sourceDirName:"kb/platform",slug:"/kb/platform/kb-3008",permalink:"/kb/platform/kb-3008",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"kb_sidebar",previous:{title:"KB: 3007",permalink:"/kb/platform/kb-3007"},next:{title:"KB: 3009",permalink:"/kb/platform/kb-3009"}},s={},c=[{value:"How to Create Member with different access control?",id:"how-to-create-member-with-different-access-control",level:4},{value:"Problem Statement",id:"problem-statement",level:4},{value:"Solution",id:"solution",level:4}],m={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-3008"},"KB: 3008"),(0,a.kt)("h4",{id:"how-to-create-member-with-different-access-control"},"How to Create Member with different access control?"),(0,a.kt)("h4",{id:"problem-statement"},"Problem Statement"),(0,a.kt)("p",null,"Client wants to add member with different access control. "),(0,a.kt)("h4",{id:"solution"},"Solution"),(0,a.kt)("p",null,"The client can achieve the above requirement by utilising the  Member under Haltdos WAF."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"member",src:r(77261).Z,width:"1821",height:"818"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack")," > ",(0,a.kt)("strong",{parentName:"li"},"Members"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"member",src:r(27975).Z,width:"1846",height:"889"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Add member by giving details such as Name, Email, Password and what all access you want to give to the member.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"member",src:r(62663).Z,width:"1834",height:"863"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Client can also specify what kind of access they want to give to there members. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"member",src:r(9621).Z,width:"1450",height:"784"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note"),":-\n",(0,a.kt)("strong",{parentName:"p"},"If client wants to add a member and wants that reports should be sent on email-id. There is a prerequisite (email setting needs to be configured)"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Administrator > Admin Console > Email"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"member",src:r(45712).Z,width:"1806",height:"924"})))}p.isMDXComponent=!0},77261:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mem1-67461aed9ad925653f3205fb2bff2480.png"},27975:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mem2-afdab2e6fb27f579a080c205abced315.png"},62663:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mem3-8dbfe21953af78c028d537f66335bb58.png"},9621:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mem4-3fda544a1e72643bb1cc36574a83a405.png"},45712:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/mem5-899cdd1dcd8d1a69c15473e91bb72cb8.png"}}]);