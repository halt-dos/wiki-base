"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16609:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:18},i="KB:1018",s={unversionedId:"waf/docs/tutorials/kb-1018",id:"waf/docs/tutorials/kb-1018",title:"KB:1018",description:"Problem Statement",source:"@site/docs/waf/docs/tutorials/kb-1018.md",sourceDirName:"waf/docs/tutorials",slug:"/waf/docs/tutorials/kb-1018",permalink:"/waf/docs/tutorials/kb-1018",draft:!1,tags:[],version:"current",sidebarPosition:18,frontMatter:{sidebar_position:18},sidebar:"wafSidebar",previous:{title:"KB:1017",permalink:"/waf/docs/tutorials/kb-1017"},next:{title:"KB: 1019",permalink:"/waf/docs/tutorials/kb-1019"}},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb1018"},"KB:1018"),(0,o.kt)("h1",{id:"how-to-change-waf-operational-mode-in-between-record-bypass--mitigation"},"How to change WAF operational mode in between Record, Bypass & Mitigation?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem Statement")),(0,o.kt)("p",null,"The User wants to change the profile mode to bypass, record or mitigation."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution")),(0,o.kt)("p",null,"1.First of all user need to login to the console management portal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1018",src:r(17839).Z,width:"1809",height:"870"})),(0,o.kt)("p",null,"2.Go to ",(0,o.kt)("strong",{parentName:"p"},"Stack* > "),"WAF",(0,o.kt)("strong",{parentName:"p"}," > "),"Listener",(0,o.kt)("strong",{parentName:"p"}," > "),"Profiles",(0,o.kt)("strong",{parentName:"p"}," > "),"click on settings icon**.s"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1018",src:r(17629).Z,width:"1826",height:"876"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Click on first option operational mode and from the drop-down menu user can change the operational mode for the listener profile.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1018",src:r(97778).Z,width:"1897",height:"877"})),(0,o.kt)("p",null,"In this way user can select any of the operational mode from the three mode available."),(0,o.kt)("p",null,"MITIGATION: In this mode, all the mitigation & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped."),(0,o.kt)("p",null,"BYPASSED: In this mode, all the requests get bypassed without any filtration of mitigation & rule sets."),(0,o.kt)("p",null,"RECORD: In this mode, all the mitigation & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event"))}u.isMDXComponent=!0},17629:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/miti-69fe82c0bd45d1444e834166112321d7.png"},97778:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/miti1-d8009d6205ae4842308ab4b79fc29db1.png"},17839:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"}}]);