"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[59076],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),k=i,d=u["".concat(l,".").concat(k)]||u[k]||f[k]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},11968:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:48},o="KB: 1048",c={unversionedId:"kb/waf/kb-1048",id:"version-6.0/kb/waf/kb-1048",title:"KB: 1048",description:"-----------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1048.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1048",permalink:"/v6/kb/waf/kb-1048",draft:!1,tags:[],version:"6.0",sidebarPosition:48,frontMatter:{sidebar_position:48},sidebar:"kb_sidebar",previous:{title:"KB: 1047",permalink:"/v6/kb/waf/kb-1047"},next:{title:"KB: 1049",permalink:"/v6/kb/waf/kb-1049"}},l={},s=[],p={toc:s};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kb-1048"},"KB: 1048"),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"how-to-add-client-certificates"},"How to add client certificates?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Statement")),(0,i.kt)("p",null,"The user wants to add a client certificate."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solution")),(0,i.kt)("p",null,"The Certificate Revocation List (CRL) is key to making this security approach work with many users. Without the CRL, should a certificate become compromised you would need to re-issue the Certificate Authority (CA) and any client certificates. With a CRL, however, you can revoke a certificate - allowing sane user management for your back-end application."),(0,i.kt)("p",null,'With the above part, only a valid client certificate will gain you access to the site(s) behind "listen VIP". '),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Creating certificates")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First log into the haltdos management console.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1048",src:n(61742).Z,width:"1920",height:"527"})),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Go to stack > WAF > Client Certificate.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1048",src:n(53863).Z,width:"1911",height:"840"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Click on add certificate button.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1048",src:n(61329).Z,width:"1920",height:"804"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure the certificate, set the scope of certificate and click on save changes.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to stack > WAF > listener > SSL settings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},'Enable the client certificate under option "Client Certificate Verification" and from next option named as "Client Certificate" where we can select that which certificate should be used with which listener.'))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1048",src:n(5933).Z,width:"1884",height:"888"})),(0,i.kt)("p",null,"In this way, we can configure the client certificate for allowing the clients to access the web application only if they have required certificate."))}f.isMDXComponent=!0},61329:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/addcerti-c10f7668b028fe846f717ef62837896a.png"},5933:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/certi-2e8c8eca98e6e8a52620a926a1f3bbbc.png"},53863:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/client-c9f0d4103d5047bf62189de354cd3d6e.png"},61742:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/d1-bbb644391863631c783a01eb30fc46a0.png"}}]);