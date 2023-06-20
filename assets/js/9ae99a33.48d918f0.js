"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[48299],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(r),k=o,g=m["".concat(s,".").concat(k)]||m[k]||u[k]||a;return r?n.createElement(g,i(i({ref:e},c),{},{components:r})):n.createElement(g,i({ref:e},c))}));function k(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},26114:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:0},i="KB: 3001",l={unversionedId:"kb/platform/kb-3001",id:"kb/platform/kb-3001",title:"KB: 3001",description:"How to configure NTP through Haltdos Solution?",source:"@site/docs/kb/platform/kb-3001.md",sourceDirName:"kb/platform",slug:"/kb/platform/kb-3001",permalink:"/kb/platform/kb-3001",draft:!1,tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"kb_sidebar",previous:{title:"Platform",permalink:"/kb/platform/"},next:{title:"KB: 3002",permalink:"/kb/platform/kb-3002"}},s={},p=[{value:"<strong>How to configure NTP through Haltdos Solution?</strong>",id:"how-to-configure-ntp-through-haltdos-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-3001"},"KB: 3001"),(0,o.kt)("h3",{id:"how-to-configure-ntp-through-haltdos-solution"},(0,o.kt)("strong",{parentName:"h3"},"How to configure NTP through Haltdos Solution?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"Client wants to set Network Time Protocol (NTP) that provides a very reliable way of transmitting and receiving an accurate time source over TCP/IP-based networks."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("p",null,"The client can achieve the above requirement by utilising the NTP Integration under Haltdos WAF."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into Haltdos Management Console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3001",src:r(52015).Z,width:"1801",height:"955"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Now go to ",(0,o.kt)("strong",{parentName:"li"},"User Icon")," > ",(0,o.kt)("strong",{parentName:"li"},"System")," > ",(0,o.kt)("strong",{parentName:"li"},"Instances"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3001",src:r(98360).Z,width:"1801",height:"955"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"System")," > ",(0,o.kt)("strong",{parentName:"p"},"Instances")," > ",(0,o.kt)("strong",{parentName:"p"},"Integration"),"> ",(0,o.kt)("strong",{parentName:"p"},"NTP"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure NTP Settings.  "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3001",src:r(50137).Z,width:"1801",height:"955"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save Changes"))),(0,o.kt)("p",null,"From the above steps, client can configure NTP successfully."))}u.isMDXComponent=!0},50137:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/NTP_kb_3001_3-fcf2a72aa34c5fc3515c423adca393cb.png"},98360:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/instances_kb_3001_2-dca271615daeadade1b58d5591dc0df8.png"},52015:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/overview_kb_3001_1-e82da98452f1806756972372325c2c7d.png"}}]);