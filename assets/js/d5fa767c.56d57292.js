"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[354],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,b=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(b,o(o({ref:t},c),{},{components:r})):n.createElement(b,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16092:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:8},o="KB:1008",l={unversionedId:"kb/tutorials/kb-1008",id:"kb/tutorials/kb-1008",title:"KB:1008",description:"----------",source:"@site/docs/kb/tutorials/kb-1008.md",sourceDirName:"kb/tutorials",slug:"/kb/tutorials/kb-1008",permalink:"/kb/tutorials/kb-1008",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8}},s={},p=[],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb1008"},"KB:1008"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"securing-file-uploads-in-web-application"},"Securing File Uploads in web application"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to have a safe and secure file upload for Web Applications"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("a",{parentName:"p",href:"docs/waf/listener/profiles/policy/web_policy.md"},(0,a.kt)("strong",{parentName:"a"},"Web Policy")),"  page and configure the file extensions that should be allowed or restricted for  file upload on the Web Application. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1008",src:r(33488).Z,width:"1908",height:"1508"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Specify the anticipated max file size that will be uploaded in Maximum HTTP Body Size on ",(0,a.kt)("a",{parentName:"li",href:"docs/waf/listener/settings.md"},(0,a.kt)("strong",{parentName:"a"},"Settings"))," page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1008",src:r(44203).Z,width:"1813",height:"846"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Client can also secure the file uploads by enabling ",(0,a.kt)("a",{parentName:"li",href:"docs/waf/listener/profiles/anti_virus.md"},(0,a.kt)("strong",{parentName:"a"},"Anti Virus"))," scanning on the application from  page. Haltdos has a built-in antivirus which can secure the files uploaded on the Application. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1008",src:r(39609).Z,width:"1920",height:"995"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"All malicious files will be restricted from upload and the request details can be viewed on Incident page.")))}u.isMDXComponent=!0},44203:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb8-008fbc583f0dfd1a6e17652fedfdcb8d.png"},39609:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/kb82-9f906893b7f71f55788399478879104e.png"},33488:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/webbb-262b4e9ed9099a462ac9700ecea735f7.png"}}]);