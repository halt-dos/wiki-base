"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[54652],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),b=a,d=u["".concat(c,".").concat(b)]||u[b]||f[b]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},74788:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:28},i="KB: 1028",l={unversionedId:"kb/waf/kb-1028",id:"version-6.0/kb/waf/kb-1028",title:"KB: 1028",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1028.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1028",permalink:"/v6/kb/waf/kb-1028",draft:!1,tags:[],version:"6.0",sidebarPosition:28,frontMatter:{sidebar_position:28},sidebar:"kb_sidebar",previous:{title:"KB: 1027",permalink:"/v6/kb/waf/kb-1027"},next:{title:"KB: 1029",permalink:"/v6/kb/waf/kb-1029"}},c={},s=[],p={toc:s};function f(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1028"},"KB: 1028"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-upload-ssl-certificate-and-use-them-for-a-web-application-listener"},"How to upload SSL certificate and use them for a web application (listener)?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to upload a SSL certificate and use it to offload SSL traffic."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"The early requirement of the process is to have SSL certificate in .pem format."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1028",src:r(2581).Z,width:"1789",height:"728"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"SSL Certificates")," > Click on ",(0,a.kt)("strong",{parentName:"li"},"Add Certificate")," > Configure your setting > Click on Save Changes")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1028",src:r(45873).Z,width:"1806",height:"852"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note")," After configuring SSL Certificate User also have to enable it  and Select the Certificate "),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Click on Listener > SSL Setting and enable the SSL offloading.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1028",src:r(90025).Z,width:"1803",height:"841"})),(0,a.kt)("p",null,"4.Select SSL certificate from the drop- down menu and click on save changes."))}f.isMDXComponent=!0},2581:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/geoo-6b6fe7559a4424c9e572502a2b47c637.png"},45873:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sslcerti-a0f9a3f08b570bc65e4edd2754947cc6.png"},90025:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sslsetting-dbe3a3086b51c4da8898e31ad1276bd8.png"}}]);