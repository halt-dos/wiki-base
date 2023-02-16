"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[35168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=p(n),k=a,b=f["".concat(l,".").concat(k)]||f[k]||u[k]||o;return n?r.createElement(b,s(s({ref:t},c),{},{components:n})):r.createElement(b,s({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:57},s="KB: 1057",i={unversionedId:"kb/waf/kb-1057",id:"version-6.0/kb/waf/kb-1057",title:"KB: 1057",description:"Problem Statement",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1057.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1057",permalink:"/v6/kb/waf/kb-1057",draft:!1,tags:[],version:"6.0",sidebarPosition:57,frontMatter:{sidebar_position:57},sidebar:"kb_sidebar",previous:{title:"KB: 1056",permalink:"/v6/kb/waf/kb-1056"},next:{title:"KB: 1058",permalink:"/v6/kb/waf/kb-1058"}},l={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1057"},"KB: 1057"),(0,a.kt)("h1",{id:"how-to-mask-sensitive-data-content-like-ccnssn-"},"How to mask sensitive data content like CCN/SSN ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"Client wants mask sensitive details such as CCN and SSN."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOLUTION")),(0,a.kt)("p",null,"The client can achieve the above requirement by utilizing the Response Rule feature of the WAF."),(0,a.kt)("p",null,"1.First, log into the haltdos management console."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(17839).Z,width:"1809",height:"870"})),(0,a.kt)("p",null,"2.Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Response Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Configure the Rule > "),"Save Changes**."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(7351).Z,width:"1851",height:"852"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(1078).Z,width:"1847",height:"853"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open the listener in the browser after applying the rule and login to the page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(9812).Z,width:"973",height:"953"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Now enter the sensitive data like CCN/SSN.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1057",src:n(24730).Z,width:"946",height:"109"})),(0,a.kt)("p",null,"Above steps are shown, with the help of which client can mask sensitive data by using Haltdos response rule"))}u.isMDXComponent=!0},24730:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/maskedCCN-49f4e94db9ec7fa2aa6104766e255e0a.png"},17839:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},7351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/responserule-0027f150db8eb4296a816684d9bbaf71.png"},9812:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/responserule1-0eedd3f2df1af8771f5057ef736110fd.png"},1078:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/responserulee-b845eb9aa7bcff6b0d17ee83e63e0bed.png"}}]);