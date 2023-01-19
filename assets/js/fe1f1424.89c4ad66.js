"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[80230],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>b});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function s(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var l=r.createContext({}),c=function(t){var e=r.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=c(t.components);return r.createElement(l.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,l=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),k=c(a),b=n,d=k["".concat(l,".").concat(b)]||k[b]||f[b]||i;return a?r.createElement(d,o(o({ref:e},p),{},{components:a})):r.createElement(d,o({ref:e},p))}));function b(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=k;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},5384:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:46},o="KB: 1046",s={unversionedId:"kb/waf/kb-1046",id:"kb/waf/kb-1046",title:"KB: 1046",description:"-----------",source:"@site/docs/kb/waf/kb-1046.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1046",permalink:"/rc/kb/waf/kb-1046",draft:!1,tags:[],version:"current",sidebarPosition:46,frontMatter:{sidebar_position:46},sidebar:"kb_sidebar",previous:{title:"KB: 1045",permalink:"/rc/kb/waf/kb-1045"},next:{title:"KB: 1047",permalink:"/rc/kb/waf/kb-1047"}},l={},c=[],p={toc:c};function f(t){let{components:e,...i}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"kb-1046"},"KB: 1046"),(0,n.kt)("hr",null),(0,n.kt)("h1",{id:"how-to-set-mitigation-for-pathdirectory-traversal-attack"},"How to set mitigation for Path/Directory traversal attack?"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Problem Statement")),(0,n.kt)("p",null,"The user wants to set  mitigation for the path traversal attack."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(8472).Z,width:"1918",height:"940"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Solution")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"First log into the Haltdos management portal.\n",(0,n.kt)("img",{alt:"kb-1046",src:a(80438).Z,width:"1887",height:"438"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to stack > WAF > listener > profile > profile settings > signatures."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(475).Z,width:"1879",height:"903"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Select all signature by select all button.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(43225).Z,width:"1906",height:"472"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},'Click on update button and select "Prod" and update the status for all the signature.')),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(12480).Z,width:"1910",height:"893"})),(0,n.kt)("ol",{start:5},(0,n.kt)("li",{parentName:"ol"},"Go to stack > WAF > listener > profile > profile settings >settings.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(39938).Z,width:"1913",height:"911"})),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},"Set operational settings to mitigation to mitigate the attack.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(3001).Z,width:"1920",height:"916"})),(0,n.kt)("p",null,"In this way user can set and the mitigation and mitigate the attack."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"kb-1046",src:a(32185).Z,width:"1918",height:"958"}),"\n",(0,n.kt)("img",{alt:"kb-1046",src:a(12749).Z,width:"1636",height:"793"}),"\n",(0,n.kt)("img",{alt:"kb-1046",src:a(11402).Z,width:"1215",height:"817"})))}f.isMDXComponent=!0},8472:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q1-63ef6cb40cc77e7a7c0349b7e76e0ee0.png"},11402:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q10-03ce0e2fdc83c21d0b5f5143116b3970.png"},80438:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q2-e46989e662afab979f794243530b9e7c.png"},475:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q3-8e2445ec318c14f328ea14b05477ff7f.png"},43225:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q4-5459e1f4aaf22964fbc9442e9f629dba.png"},12480:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q5-a7cefb5fc067005b03a627e9f42857f8.png"},39938:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q6-7dd3eb85507e86a550794daf5795dbef.png"},3001:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q7-0c0402e61f2c1ba8fb2c6a7cd8bda6de.png"},32185:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q8-5049fa6f468f9e124dc89d5d9eeda8eb.png"},12749:(t,e,a)=>{a.d(e,{Z:()=>r});const r=a.p+"assets/images/q9-0e529b0dccac223f779eae5377a2958a.png"}}]);