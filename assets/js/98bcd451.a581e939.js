"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[72879],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=c(n),u=o,g=f["".concat(l,".").concat(u)]||f[u]||m[u]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},68947:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:2},i="KB: 3003",s={unversionedId:"kb/platform/kb-3003",id:"kb/platform/kb-3003",title:"KB: 3003",description:"How to configure sync?",source:"@site/docs/kb/platform/kb-3003.md",sourceDirName:"kb/platform",slug:"/kb/platform/kb-3003",permalink:"/kb/platform/kb-3003",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"kb_sidebar",previous:{title:"KB: 3002",permalink:"/kb/platform/kb-3002"},next:{title:"KB: 3004",permalink:"/kb/platform/kb-3004"}},l={},c=[{value:"<strong>How to configure sync?</strong>",id:"how-to-configure-sync",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-3003"},"KB: 3003"),(0,o.kt)("h3",{id:"how-to-configure-sync"},(0,o.kt)("strong",{parentName:"h3"},"How to configure sync?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"The user wants to configure config sync from Haltdos console for reflecting configuration changes of one machine to other."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into Haltdos Management Console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3003",src:n(27214).Z,width:"1808",height:"960"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Home")," > ",(0,o.kt)("strong",{parentName:"li"},"Integration")," > ",(0,o.kt)("strong",{parentName:"li"},"Config Sync"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3003",src:n(54643).Z,width:"1808",height:"960"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Client can configure the config sync by entering information(IP, port, auth key) of peer machine.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3003",src:n(57202).Z,width:"1808",height:"960"})),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Client can generate auth key by going ",(0,o.kt)("strong",{parentName:"p"},"Home")," > ",(0,o.kt)("strong",{parentName:"p"},"Integration"),"> ",(0,o.kt)("strong",{parentName:"p"},"API Token")," > ",(0,o.kt)("strong",{parentName:"p"},"Generate API token"),". API key of first machine needs to be entered in second machine for setting communication between the machines.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-3003",src:n(55403).Z,width:"1808",height:"937"})))}m.isMDXComponent=!0},55403:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/api_token_kb_3003_4-6f50dd30a3d610c6db5b75620763afa9.png"},54643:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/config_sync_kb_3003_2-1c23e1014e61ba4c600ec11b31f4c38a.png"},57202:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/enable_config_sync_kb_3003_3-b5590c9d4b5a16199dd60fd1930b1020.png"},27214:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_3003_1-711e7f09f5e9a32026b8718c64a76872.png"}}]);