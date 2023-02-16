"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[66153],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=c(r),d=a,f=b["".concat(l,".").concat(d)]||b[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},5312:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:26},i="KB: 1026",s={unversionedId:"kb/waf/kb-1026",id:"kb/waf/kb-1026",title:"KB: 1026",description:"-----------",source:"@site/docs/kb/waf/kb-1026.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1026",permalink:"/kb/waf/kb-1026",draft:!1,tags:[],version:"current",sidebarPosition:26,frontMatter:{sidebar_position:26},sidebar:"kb_sidebar",previous:{title:"KB: 1025",permalink:"/kb/waf/kb-1025"},next:{title:"KB: 1027",permalink:"/kb/waf/kb-1027"}},l={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1026"},"KB: 1026"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-mark-any-server-as--ready-or-down-"},"How to mark any server as  Ready or Down ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"A listener is having multiple backend server in which some of them can be marked as soft down. It means when a  server is marked down in a server group, Haltdos WAF will not send any client request to that server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"1.First log into the console management portal."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1026",src:r(2581).Z,width:"1789",height:"728"})),(0,a.kt)("p",null,"2.Go to  listener > Load Balancing > Servers."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1026",src:r(39456).Z,width:"1825",height:"663"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click on server group name and click on edit button on server. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1026",src:r(63859).Z,width:"1806",height:"927"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Under ",(0,a.kt)("strong",{parentName:"li"},"Mode")," option User can set the server Down or Ready as per required.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1026",src:r(76075).Z,width:"1912",height:"915"})),(0,a.kt)("p",null,"For example In the above image user has marked  server as Down. After this no end user request will be forwarded to that server."))}u.isMDXComponent=!0},63859:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aa1-b1e8db7244cbc09ffd7e3a9b0977215f.png"},76075:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/aaaa-df57e788ad5c8fb51c863b5348078098.png"},2581:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geoo-6b6fe7559a4424c9e572502a2b47c637.png"},39456:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server1-a0c95a8b6e89cb3864f2dc132684ef94.png"}}]);