"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[17423],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),b=a,m=f["".concat(l,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},30442:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:30},i="KB: 1030",s={unversionedId:"kb/waf/kb-1030",id:"version-6.0/kb/waf/kb-1030",title:"KB: 1030",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1030.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1030",permalink:"/v6/kb/waf/kb-1030",draft:!1,tags:[],version:"6.0",sidebarPosition:30,frontMatter:{sidebar_position:30},sidebar:"kb_sidebar",previous:{title:"KB: 1029",permalink:"/v6/kb/waf/kb-1029"},next:{title:"KB: 1031",permalink:"/v6/kb/waf/kb-1031"}},l={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1030"},"KB: 1030"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-mitigate-bad-reputation-traffic-with-haltdos-waf"},"How to mitigate bad reputation traffic with Haltdos WAF?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user requires to mitigate the bad reputation traffic by either dropping or sending challenge to the incoming requests from anonymous IP, suspicious IP or TOR network."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"The user can make use of Haltdos WAF bot protection features."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1030",src:r(3666).Z,width:"1920",height:"527"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Stack > WAF > Listener > Profile > Bot Protection"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"kb-1030",src:r(42891).Z,width:"1886",height:"854"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"For incoming bad reputation traffic, traffic coming from suspicious IP addresses and TOR network, the user can select the action to be performed, like, Send Challenge and Drop."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"kb-1030",src:r(27837).Z,width:"1884",height:"868"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on save changes to deploy the configuration on the Haltdos WAF."))))}u.isMDXComponent=!0},3666:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b1-bbb644391863631c783a01eb30fc46a0.png"},42891:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b2-8ac89b014498db9850d0e694da229a1d.png"},27837:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b3-562eb2727857270975a78f6f3edf2800.png"}}]);