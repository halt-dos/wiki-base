"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7127],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(r),b=o,k=m["".concat(s,".").concat(b)]||m[b]||u[b]||a;return r?n.createElement(k,i(i({ref:e},c),{},{components:r})):n.createElement(k,i({ref:e},c))}));function b(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72652:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:58},i="KB: 1058",l={unversionedId:"kb/tutorials/kb-1058",id:"kb/tutorials/kb-1058",title:"KB: 1058",description:"Problem Statement",source:"@site/docs/kb/tutorials/kb-1058.md",sourceDirName:"kb/tutorials",slug:"/kb/tutorials/kb-1058",permalink:"/kb/tutorials/kb-1058",draft:!1,tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58}},s={},p=[],c={toc:p};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1058"},"KB: 1058"),(0,o.kt)("h1",{id:"how-to-prevent-sites-from-xml-bomb-attack"},"How to prevent sites from XML bomb attack?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem Statement")),(0,o.kt)("p",null,"Client wants to protect their sites from XML bomb attack which are protected by Haltdos solutions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SOLUTION")),(0,o.kt)("p",null,"The client can achieve the above requirement by configuring XML policies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1058",src:r(17839).Z,width:"1809",height:"870"})),(0,o.kt)("p",null,"2.Go to ",(0,o.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,o.kt)("strong",{parentName:"p"},"WAF")," > ",(0,o.kt)("strong",{parentName:"p"},"Listener")," > ",(0,o.kt)("strong",{parentName:"p"},"Profile")," > ",(0,o.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,o.kt)("strong",{parentName:"p"},"Policy")," > ",(0,o.kt)("strong",{parentName:"p"},"XML Policy ")," > ",(0,o.kt)("strong",{parentName:"p"},"Configure the XML Policy")," > ",(0,o.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1058",src:r(33440).Z,width:"1843",height:"873"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now send bulk XML to the respective listener.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Below WAF incident is showing dropped request when bulk XML payload hit the listener."))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1058",src:r(42485).Z,width:"1129",height:"517"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1058",src:r(36568).Z,width:"1519",height:"768"})))}u.isMDXComponent=!0},17839:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},33440:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/xml-c1bd59b9713350961cff93f5b0a17180.png"},36568:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/xmlincident-e58827896af8cb57ab0ba05b883739bd.png"},42485:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/xmlreport-7d1998a0a317d9572758022aa796856c.png"}}]);