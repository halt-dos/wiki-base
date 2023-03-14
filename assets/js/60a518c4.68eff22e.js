"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[66094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=a,d=u["".concat(s,".").concat(b)]||u[b]||g[b]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11256:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},o="KB: 1002",l={unversionedId:"kb/waf/kb-1002",id:"kb/waf/kb-1002",title:"KB: 1002",description:"---",source:"@site/docs/kb/waf/kb-1002.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1002",permalink:"/kb/waf/kb-1002",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kb_sidebar",previous:{title:"KB: 1001",permalink:"/kb/waf/kb-1001"},next:{title:"KB: 1003",permalink:"/kb/waf/kb-1003"}},s={},c=[{value:"<strong>Enabling Learning for application</strong>",id:"enabling-learning-for-application",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function g(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1002"},"KB: 1002"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"enabling-learning-for-application"},(0,a.kt)("strong",{parentName:"h3"},"Enabling Learning for application")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"Enabling Machine Learning based 0-day protection for web applications"),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"Haltdos WAF solution uses a combination of built-in signatures, user defined policies and machine learning for detecting and blocking attacks on web apps. This module also defends against 0-day attacks by assigning suspicion score to every request based on anomaly based machine learning techniques. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Enable Learning mode in WAF by going into Listener -> Learning and configuring the mode as Learning Only.  For first time learning, configure the sample rate high based (30% or higher). You may restrict learning to be computed from selected IP pools for accurate learning.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1002",src:n(50341).Z,width:"1808",height:"965"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," For accurate learning, keep the trigger threshold high enough for creating a good baseline for machine learning in WAF"),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Keep the WAF in Learning Only mode for a few days. You can check the learning by visiting Discovery section for discovered URLs and allotted suspicion scores.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1002",src:n(3556).Z,width:"1808",height:"965"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Once more than 70% URLs are visible in auto-profiling section, configure Learning mode to Learn & Mitigate to enable WAF to continue learning as well as mitigating 0-day attacks based on existing learning.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1002",src:n(51325).Z,width:"1808",height:"965"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:")," Reduce the sampling rate once in Learn & Mitigate mode to between 10-30% for effective improvement in baseline learning."))}g.isMDXComponent=!0},3556:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/discovery_kb_1002_2-002bea581f8fc04b147ce00676ddebd8.png"},50341:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/learning_kb_1002_1-44644d635030149b60b16d283a8b9490.png"},51325:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/learning_kb_1002_3-b1dd4cc5622f5224c96795858ddedf8f.png"}}]);