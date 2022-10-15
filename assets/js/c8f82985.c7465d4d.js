"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(n),g=a,f=m["".concat(c,".").concat(g)]||m[g]||u[g]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26461:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:62},i="KB: 1062",s={unversionedId:"waf/tutorials/kb-1062",id:"waf/tutorials/kb-1062",title:"KB: 1062",description:"Problem Statement",source:"@site/docs/waf/tutorials/kb-1062.md",sourceDirName:"waf/tutorials",slug:"/waf/tutorials/kb-1062",permalink:"/waf/tutorials/kb-1062",draft:!1,tags:[],version:"current",sidebarPosition:62,frontMatter:{sidebar_position:62},sidebar:"sidebar",previous:{title:"KB: 1061",permalink:"/waf/tutorials/kb-1061"},next:{title:"KB: 1063",permalink:"/waf/tutorials/kb-1063"}},c={},l=[],p={toc:l};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1062"},"KB: 1062"),(0,a.kt)("h1",{id:"how-to-achieve-better-performance-through-haltdos-solution"},"How to achieve better performance through Haltdos solution?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"Client wants to achieve better performance through Haltdos solution."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOLUTION")),(0,a.kt)("p",null,"The client can achieve the above requirement by doing Caching and Compression at WAF listener level."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1062",src:n(17839).Z,width:"1809",height:"870"})),(0,a.kt)("p",null,"2.Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Performance")," > ",(0,a.kt)("strong",{parentName:"p"},"Caching")," > ",(0,a.kt)("strong",{parentName:"p"},"Configure the cache settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1062",src:n(26497).Z,width:"1832",height:"938"})),(0,a.kt)("p",null,"In above Caching page client can enable caching along with various settings such as CACHE METHODS, URI FILTER, MIME TYPE FILTER etc."),(0,a.kt)("p",null,"3.Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Performance")," > ",(0,a.kt)("strong",{parentName:"p"},"Compression")," > ",(0,a.kt)("strong",{parentName:"p"},"Configure the compression settings")," > ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1062",src:n(53421).Z,width:"1817",height:"924"})),(0,a.kt)("p",null,"In above Compression page client can enable compression along with various settings such as COMPRESSION LEVEL, MIME TYPE FILTER, PROXY RESPONSE FILTER, URI FILTER etc."),(0,a.kt)("p",null,"4.By enabling cache and compression client can achieve the better performance results as before. Client can also observe the performance analytics by following Stacks > Analytics > Dashboard > Performance metrics"))}u.isMDXComponent=!0},26497:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/cachingg-786db139cb053cc420d94b7ba1b0bcc7.png"},53421:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compression-58e8cb1b37397501de87fd77bd5cd39e.png"},17839:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"}}]);