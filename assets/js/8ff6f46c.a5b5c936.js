"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=s(r),k=a,u=b["".concat(p,".").concat(k)]||b[k]||m[k]||o;return r?n.createElement(u,i(i({ref:t},c),{},{components:r})):n.createElement(u,i({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=b;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},3900:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:58},i="KB: 1058",l={unversionedId:"kb/waf/kb-1058",id:"kb/waf/kb-1058",title:"KB: 1058",description:"Problem Statement",source:"@site/docs/kb/waf/kb-1058.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1058",permalink:"/kb/waf/kb-1058",draft:!1,tags:[],version:"current",sidebarPosition:58,frontMatter:{sidebar_position:58},sidebar:"kb_sidebar",previous:{title:"KB: 1057",permalink:"/kb/waf/kb-1057"},next:{title:"KB: 1059",permalink:"/kb/waf/kb-1059"}},p={},s=[],c={toc:s};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1058"},"KB: 1058"),(0,a.kt)("h1",{id:"how-to-prevent-sites-from-xml-bomb-attack"},"How to prevent sites from XML bomb attack?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"Client wants to protect their sites from XML bomb attack which are protected by Haltdos solutions."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOLUTION")),(0,a.kt)("p",null,"The client can achieve the above requirement by configuring XML policies."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1058",src:r(17839).Z,width:"1809",height:"870"})),(0,a.kt)("p",null,"2.Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,a.kt)("strong",{parentName:"p"},"Policy")," > ",(0,a.kt)("strong",{parentName:"p"},"XML Policy ")," > ",(0,a.kt)("strong",{parentName:"p"},"Configure the XML Policy")," > ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1058",src:r(33440).Z,width:"1843",height:"873"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now send bulk XML to the respective listener.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Below WAF incident is showing dropped request when bulk XML payload hit the listener."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1058",src:r(42485).Z,width:"1129",height:"517"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1058",src:r(36568).Z,width:"1519",height:"768"})))}m.isMDXComponent=!0},17839:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},33440:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xml-c1bd59b9713350961cff93f5b0a17180.png"},36568:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xmlincident-e58827896af8cb57ab0ba05b883739bd.png"},42485:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/xmlreport-7d1998a0a317d9572758022aa796856c.png"}}]);