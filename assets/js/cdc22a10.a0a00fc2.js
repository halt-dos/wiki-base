"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[81530],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(r),u=a,d=k["".concat(l,".").concat(u)]||k[u]||b[u]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},25065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:36},i="KB: 1036",s={unversionedId:"kb/waf/kb-1036",id:"kb/waf/kb-1036",title:"KB: 1036",description:"-----------",source:"@site/docs/kb/waf/kb-1036.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1036",permalink:"/kb/waf/kb-1036",draft:!1,tags:[],version:"current",sidebarPosition:36,frontMatter:{sidebar_position:36},sidebar:"kb_sidebar",previous:{title:"KB: 1035",permalink:"/kb/waf/kb-1035"},next:{title:"KB: 1037",permalink:"/kb/waf/kb-1037"}},l={},c=[{value:"<strong>How to configure Blacklist and Whitelist IP addresses?</strong>",id:"how-to-configure-blacklist-and-whitelist-ip-addresses",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function b(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1036"},"KB: 1036"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"how-to-configure-blacklist-and-whitelist-ip-addresses"},(0,a.kt)("strong",{parentName:"h3"},"How to configure Blacklist and Whitelist IP addresses?")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to blacklist/whitelist the IP address or sub-network."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Firstly, login to WAF.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1036",src:r(46565).Z,width:"1810",height:"966"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Apps")," > ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"listener")," > ",(0,a.kt)("strong",{parentName:"li"},"profile")," > ",(0,a.kt)("strong",{parentName:"li"},"profile settings")," > ",(0,a.kt)("strong",{parentName:"li"},"Geo filtering"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1036",src:r(51993).Z,width:"1833",height:"963"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Configure the sub net or IP address with their CIDR value for blacklisting/ whitelisting. as given in mentioned example we have blocked the sub network  10.0.0.157/24 which will block the IP address 10.0.0.157.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1036",src:r(52643).Z,width:"1833",height:"963"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1036",src:r(85205).Z,width:"1833",height:"963"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1036",src:r(14402).Z,width:"1833",height:"963"})))}b.isMDXComponent=!0},85205:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browser_kb_1036_4-78b21aa56fa190a6321e77e558c69e32.png"},51993:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_kb_1036_2-de2195997c005abad7f22dbaba160575.png"},52643:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geo_kb_1036_3-e46863fe18954aa7399fc277e0a4532a.png"},14402:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/incident_kb_1036_5-46a96ebd8a05c884f577f1c4106feb79.png"},46565:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/overview_kb_1036_1-b66b77acbb01e13a8777400c8be88de8.png"}}]);