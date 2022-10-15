"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[677],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(r),f=a,g=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(g,s(s({ref:t},c),{},{components:r})):n.createElement(g,s({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},16107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:25},s="KB: 1025",i={unversionedId:"waf/tutorials/kb-1025",id:"waf/tutorials/kb-1025",title:"KB: 1025",description:"-----------",source:"@site/docs/waf/tutorials/kb-1025.md",sourceDirName:"waf/tutorials",slug:"/waf/tutorials/kb-1025",permalink:"/waf/tutorials/kb-1025",draft:!1,tags:[],version:"current",sidebarPosition:25,frontMatter:{sidebar_position:25},sidebar:"sidebar",previous:{title:"KB: 1024",permalink:"/waf/tutorials/kb-1024"},next:{title:"KB: 1026",permalink:"/waf/tutorials/kb-1026"}},l={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1025"},"KB: 1025"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-createadd-a-new-server-group-in-a-listener"},"How to create/add a new server group in a listener?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The user wants to add a new server group in a listener si that listener can listen on a different port and forward the request to a specific server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First log into the management console portal.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(17839).Z,width:"1809",height:"870"})),(0,a.kt)("p",null,"2.Go to ",(0,a.kt)("strong",{parentName:"p"},"stack")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Server Group")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(44815).Z,width:"1826",height:"729"})),(0,a.kt)("p",null,'3.Click on "add server group" option.'),(0,a.kt)("p",null,"4.Configure the settings as per requirements and click on save changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(80871).Z,width:"542",height:"735"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"After creating a server group user must add a server in the newly created server group.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(44049).Z,width:"1915",height:"644"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(52251).Z,width:"545",height:"688"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(66138).Z,width:"1897",height:"649"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > rules > upstream rule.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(51976).Z,width:"1900",height:"838"})),(0,a.kt)("ol",{start:7},(0,a.kt)("li",{parentName:"ol"},"Click on add rule option and add a rule to send request to newly created server group.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1025",src:r(29648).Z,width:"1871",height:"829"})))}u.isMDXComponent=!0},66138:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/default_server-cdabd9e91454bb189eafa76595b06792.png"},29648:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/newserver-9680f2260dddef9fc489a0826a9aab32.png"},17839:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"},80871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server__group-d2ec46d467dae97065d39ce9a78f13dc.png"},44815:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server_grp-091ad370a6753a536424752d25200a1e.png"},52251:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/serverr-851678d4dabf81f5293d25daef6d70ff.png"},44049:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/test_server-b0bfd4bc2e43d549cbb9b516555db044.png"},51976:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/upstream_rule-14029a10be94561cd113f133bbde3fd6.png"}}]);