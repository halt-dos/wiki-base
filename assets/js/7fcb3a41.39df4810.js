"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[53130],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),c=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},b=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),b=c(n),d=a,k=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return n?r.createElement(k,i(i({ref:e},p),{},{components:n})):r.createElement(k,i({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},52361:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:64},i="KB: 1064",l={unversionedId:"kb/waf/kb-1064",id:"kb/waf/kb-1064",title:"KB: 1064",description:"How to whitelist request based on particular pattern?",source:"@site/docs/kb/waf/kb-1064.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1064",permalink:"/kb/waf/kb-1064",draft:!1,tags:[],version:"current",sidebarPosition:64,frontMatter:{sidebar_position:64},sidebar:"kb_sidebar",previous:{title:"KB: 1063",permalink:"/kb/waf/kb-1063"},next:{title:"KB: 1065",permalink:"/kb/waf/kb-1065"}},s={},c=[{value:"<strong>How to whitelist request based on particular pattern?</strong>",id:"how-to-whitelist-request-based-on-particular-pattern",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1064"},"KB: 1064"),(0,a.kt)("h3",{id:"how-to-whitelist-request-based-on-particular-pattern"},(0,a.kt)("strong",{parentName:"h3"},"How to whitelist request based on particular pattern?")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"Client wants to whitelist requests based on particular pattern."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("p",null,"The client can whitelist the request by creating Whitelist rule on Haltdos WAF."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1064",src:n(20633).Z,width:"1810",height:"966"})),(0,a.kt)("p",null,"2.Now to analyze the pattern of request"),(0,a.kt)("p",null,"Go to Stacks > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Incidents"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1064",src:n(44862).Z,width:"1809",height:"967"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"On a respective incident, click on setting icon.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1064",src:n(11587).Z,width:"1809",height:"967"})),(0,a.kt)("p",null,"4.Enter the rule details along with the rule condition consisting of pattern to be whitelist."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1064",src:n(4582).Z,width:"1809",height:"967"})))}u.isMDXComponent=!0},44862:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/incidents_kb_1064_2-8b1e192f96ed9e10d91c6cb3792cb5bb.png"},20633:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/overview_kb_1064_1-b66b77acbb01e13a8777400c8be88de8.png"},11587:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/whitelist_kb_1064_3-93027ed15718756016d6f9a4cc0708e6.png"},4582:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/whitelist_kb_1064_4-198c0430628e365342d9fa00ac250aad.png"}}]);