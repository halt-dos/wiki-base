"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[43945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,u=m["".concat(l,".").concat(f)]||m[f]||d[f]||a;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},32945:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={},i="KB-9002",c={unversionedId:"community/kb/kb-9002",id:"community/kb/kb-9002",title:"KB-9002",description:"How to add free SSL certificate?",source:"@site/docs/community/kb/kb-9002.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9002",permalink:"/community/kb/kb-9002",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"KB-9001",permalink:"/community/kb/kb-9001"},next:{title:"KB-9003",permalink:"/community/kb/kb-9003"}},l={},s=[{value:"<strong>How to add free SSL certificate?</strong>",id:"how-to-add-free-ssl-certificate",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-9002"},"KB-9002"),(0,o.kt)("h3",{id:"how-to-add-free-ssl-certificate"},(0,o.kt)("strong",{parentName:"h3"},"How to add free SSL certificate?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"User wants to add free SSL certificates"),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"User can add the free SSL certificate in Haltdos WAF CE. They need to follow below steps to generate and add certificate on the Haltdos WAF Community Edition."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the first step user need to log in to the Haltdos WAF CE Web UI console using following URL in any web browser.")),(0,o.kt)("p",null,"(https://<\\machineIP>:9000)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13871).Z,width:"1920",height:"972"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"User need to go to following path : ",(0,o.kt)("strong",{parentName:"li"},"Home > SSL Certificate")," and click on ",(0,o.kt)("strong",{parentName:"li"},"Add Certificate")," option.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SSL Certificate",src:n(31759).Z,width:"1906",height:"901"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"To add free SSL certificate user need to fill the certificate name and certificate domain.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, User need to click on copy - paste option and click on generate button. Once generate button is clicked system will generate Free SSL certificate. User need to click on save changes to save the SSL certificate.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now, User need to go to the following path: ",(0,o.kt)("strong",{parentName:"p"},"Home > WAF > SSL Settings"),". "))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SSL Certificate",src:n(70817).Z,width:"1903",height:"747"})),(0,o.kt)("p",null,"User need to click on Enable SSL Offloading, select the SSL certificate from the drop-down and click on save changes."),(0,o.kt)("p",null,"In this way, any Haltdos WAF CE user can enable the SSL Offloading on their application."))}d.isMDXComponent=!0},13871:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},70817:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_cert-923b96198568c21c855fcc29124c3026.png"},31759:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_certificate-eba5631dc2c2d1bc7552620412905cb6.png"}}]);