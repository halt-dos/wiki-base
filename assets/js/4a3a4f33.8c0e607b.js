"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8600],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,b=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},59180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:30},i="KB: 1030",l={unversionedId:"kb/tutorials/kb-1030",id:"kb/tutorials/kb-1030",title:"KB: 1030",description:"-----------",source:"@site/docs/kb/tutorials/kb-1030.md",sourceDirName:"kb/tutorials",slug:"/kb/tutorials/kb-1030",permalink:"/kb/tutorials/kb-1030",draft:!1,tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30}},s={},c=[],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1030"},"KB: 1030"),(0,o.kt)("hr",null),(0,o.kt)("h1",{id:"how-to-mitigate-bad-reputation-traffic-with-haltdos-waf"},"How to mitigate bad reputation traffic with Haltdos WAF?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem Statement")),(0,o.kt)("p",null,"The user requires to mitigate the bad reputation traffic by either dropping or sending challenge to the incoming requests from anonymous IP, suspicious IP or TOR network."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution")),(0,o.kt)("p",null,"The user can make use of Haltdos WAF bot protection features."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1030",src:r(3666).Z,width:"1920",height:"527"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to Stack > WAF > Listener > Profile > Bot Protection"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"kb-1030",src:r(42891).Z,width:"1886",height:"854"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"For incoming bad reputation traffic, traffic coming from suspicious IP addresses and TOR network, the user can select the action to be performed, like, Send Challenge and Drop."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"kb-1030",src:r(27837).Z,width:"1884",height:"868"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on save changes to deploy the configuration on the Haltdos WAF."))))}u.isMDXComponent=!0},3666:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b1-bbb644391863631c783a01eb30fc46a0.png"},42891:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b2-8ac89b014498db9850d0e694da229a1d.png"},27837:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/b3-562eb2727857270975a78f6f3edf2800.png"}}]);