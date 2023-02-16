"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2044],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=o,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},45648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={},a="KB-9007",l={unversionedId:"community/kb/kb-9007",id:"community/kb/kb-9007",title:"KB-9007",description:"How to add HTTP to HTTPS redirection rule?",source:"@site/docs/community/kb/kb-9007.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9007",permalink:"/rc/community/kb/kb-9007",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"KB-9006",permalink:"/rc/community/kb/kb-9006"},next:{title:"KB-9008",permalink:"/rc/community/kb/kb-9008"}},c={},s=[{value:"<strong>How to add HTTP to HTTPS redirection rule?</strong>",id:"how-to-add-http-to-https-redirection-rule",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-9007"},"KB-9007"),(0,o.kt)("h3",{id:"how-to-add-http-to-https-redirection-rule"},(0,o.kt)("strong",{parentName:"h3"},"How to add HTTP to HTTPS redirection rule?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"Users want to redirect all the HTTP traffic to HTTPS in Haltdos WAF Community Edition."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"In Haltdos WAF community as well as enterprise edition, users are allowed to make a HTTP to HTTPS redirection rule. This rule will match all the traffic coming as HTTP request will be redirected to HTTPS mode.\nUsers can make the redirection rule for ",(0,o.kt)("strong",{parentName:"p"},"Temporary mode")," as well as ",(0,o.kt)("strong",{parentName:"p"},"Permanent mode"),"."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the first step user need to log in to the Haltdos WAF CE Web UI console using following URL in any web browser.")),(0,o.kt)("p",null,"(https://<'machineIP>:9000)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(13871).Z,width:"1920",height:"972"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Users need to go to following path : ",(0,o.kt)("strong",{parentName:"li"},"Home > WAF > Rules > Redirection Rule")," and click on ",(0,o.kt)("strong",{parentName:"li"},"Add Rule"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redirection Rule",src:r(93555).Z,width:"1895",height:"894"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redirection Rule",src:r(25906).Z,width:"1896",height:"914"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"User need to add HTTP URL regex in the match URL field and HTTPS URL in forward URL. Post configuring the rule, click on save changes.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redirection Rule",src:r(91472).Z,width:"1889",height:"920"})),(0,o.kt)("p",null,"In this way, User can create a redirection rule to move all the HTTP requests to HTTPS."))}u.isMDXComponent=!0},13871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},93555:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rd_rule-8d5227f91b73f1ca0238e27bf823d7cb.png"},25906:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rd_rule1-01ddd45dd156ece1ea221c8ea2583e77.png"},91472:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rd_rule2-edfd5bcc0cd0321cc31f2a5a11ea0718.png"}}]);