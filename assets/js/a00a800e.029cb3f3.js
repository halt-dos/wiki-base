"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[31746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,b=u["".concat(s,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(b,i(i({ref:t},p),{},{components:n})):r.createElement(b,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58365:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={},i="KB-2022",c={unversionedId:"kb/adc/kb-2022",id:"kb/adc/kb-2022",title:"KB-2022",description:"How to upload SSL certificate and use them for a web application (listener)?",source:"@site/docs/kb/adc/kb-2022.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2022",permalink:"/rc/kb/adc/kb-2022",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB-2021",permalink:"/rc/kb/adc/kb-2021"},next:{title:"Global Server Load Balancing",permalink:"/rc/kb/gslb/"}},s={},l=[{value:"<strong>How to upload SSL certificate and use them for a web application (listener)</strong>?",id:"how-to-upload-ssl-certificate-and-use-them-for-a-web-application-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:l};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2022"},"KB-2022"),(0,a.kt)("h3",{id:"how-to-upload-ssl-certificate-and-use-them-for-a-web-application-listener"},(0,a.kt)("strong",{parentName:"h3"},"How to upload SSL certificate and use them for a web application (listener)"),"?"),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to upload a SSL certificate and use it to offload SSL traffic."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The early requirement of the process is to have SSL certificate in .pem format."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- Login into Haltdos console."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97689).Z,width:"1913",height:"401"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > Resources > SSL Certificate"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(29578).Z,width:"1842",height:"939"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),":- Click on add new certificate and add your public and private key for certificate. "),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(19787).Z,width:"1849",height:"949"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4"),":- Click on save changes."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32).Z,width:"1847",height:"947"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 5"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB > listener > SSL settings and enable the SSL offloading"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(71285).Z,width:"1847",height:"949"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 6"),":-Select SSL certificate from the drop- down menu and click on save changes."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(60117).Z,width:"1847",height:"952"})))}d.isMDXComponent=!0},97689:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc22.1-a3479be5389b5c501bbf4ac9ed01b4f2.png"},29578:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc22.2-36ba217bb4c72a59b2dfcac54deba059.png"},19787:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc22.3-c0795dd3bdab68458ad81a3e9a683daf.png"},32:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc22.4-aee4056ca424aba50fc35a41d3b12473.png"},71285:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc22.5-eda2fb5b2993de1dbc2164077fd72a5b.png"},60117:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/adc22.6-f38cf08c185a5167d298b7d47aa57699.png"}}]);