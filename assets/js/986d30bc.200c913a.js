"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5529],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=s(r),d=a,f=b["".concat(c,".").concat(d)]||b[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},26749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:15},i="KB:1015",l={unversionedId:"kb/waf/kb-1015",id:"kb/waf/kb-1015",title:"KB:1015",description:"Problem Statement",source:"@site/docs/kb/waf/kb-1015.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1015",permalink:"/kb/waf/kb-1015",draft:!1,tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15},sidebar:"kb_sidebar",previous:{title:"KB:1014",permalink:"/kb/waf/kb-1014"},next:{title:"KB:1016",permalink:"/kb/waf/kb-1016"}},c={},s=[],p={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb1015"},"KB:1015"),(0,a.kt)("h1",{id:"how-to-configure-custom-html-error-page-received-from-haltdos-web-application-firewall"},"How to configure custom HTML error page received from Haltdos Web Application Firewall."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to customize the error page from Haltdos WAF."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"1.Log into the Haltdos console."),(0,a.kt)("p",null,"2.Go to Stack >Content > Web Pages"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1015",src:r(7266).Z,width:"1916",height:"842"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'Click on "Add Page" option and write HTML code for error page and save changes.')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1015",src:r(33857).Z,width:"1914",height:"827"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Now go into the listener by clicking on listener name, select error rule under rules drop down menu. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1015",src:r(4685).Z,width:"1916",height:"843"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Configure the rule as per our requirement and select the error page we have created before.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1015",src:r(25553).Z,width:"1899",height:"848"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Click on save changes.\nIn this way users can configure the error page rule to send custom error page response. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1015",src:r(14510).Z,width:"1909",height:"889"})))}u.isMDXComponent=!0},7266:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb15-47b1d3858d6de07213d03bf75b29eac6.png"},33857:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb152-cc56e7b0e1b51b94024a48b5f4056f6c.png"},4685:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb153-e8c1424d3a21c56a5b6d6dbc44ef870d.png"},25553:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb154-acd5a68fa9f4a90558b5d4704aac1d66.png"},14510:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb155-76074c38d6cb9eecfdbcaa536606c23b.png"}}]);