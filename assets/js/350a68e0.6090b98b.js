"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[48692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(n),b=i,d=u["".concat(p,".").concat(b)]||u[b]||f[b]||a;return n?r.createElement(d,o(o({ref:t},s),{},{components:n})):r.createElement(d,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},46295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:5},o="KB:1005",l={unversionedId:"kb/waf/kb-1005",id:"version-6.0/kb/waf/kb-1005",title:"KB:1005",description:"---------",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1005.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1005",permalink:"/v6/kb/waf/kb-1005",draft:!1,tags:[],version:"6.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"kb_sidebar",previous:{title:"KB:1004",permalink:"/v6/kb/waf/kb-1004"},next:{title:"KB:1006",permalink:"/v6/kb/waf/kb-1006"}},p={},c=[],s={toc:c};function f(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"kb1005"},"KB:1005"),(0,i.kt)("hr",null),(0,i.kt)("h1",{id:"how-to-configure-multiple-security-profiles-for-complex-application-"},"How to configure multiple security profiles for complex application ?"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Problem Statement")),(0,i.kt)("p",null,"The client wants the Application to behave for a set of user in different way or client wants to configure different type of Application behind the WAF."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Solution")),(0,i.kt)("p",null,"The client can achieve the above requirement by configuring different profile."),(0,i.kt)("p",null,"Example :We have DEFAULT ",(0,i.kt)("a",{parentName:"p",href:"docs/waf/listener/profiles/profiles.md"},(0,i.kt)("strong",{parentName:"a"},"Profiles")),",in which we configured that application will not handle the POST request using ",(0,i.kt)("a",{parentName:"p",href:"docs/waf/listener/profiles/policy/Web_policy.md"},(0,i.kt)("strong",{parentName:"a"},"Web Policy"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1005",src:n(12857).Z,width:"1574",height:"647"})),(0,i.kt)("p",null,"After Policy is applied,WAF will automatically block the POST request."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1005",src:n(13160).Z,width:"1844",height:"894"})),(0,i.kt)("p",null,"And now we are configuring the Profile for another set of users and in which we have configured that it will handle POST request. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1005",src:n(69071).Z,width:"1546",height:"846"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1005",src:n(53736).Z,width:"1535",height:"627"})),(0,i.kt)("p",null,"After configuring the profile, WAF is allowing the POST request for the same application."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"kb-1005",src:n(58811).Z,width:"1836",height:"929"})),(0,i.kt)("p",null,"In the same way, the client can configure the Profile for different application types (i.e. websites, web socket)."))}f.isMDXComponent=!0},12857:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb5-5c59db516136fb56115990ca3a282e6e.png"},13160:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb52-ddab7079249e9163f372a40a585e9ecb.png"},69071:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb53-1ff6fc4ab049ea2c75925a73812b2e3e.png"},53736:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb54-cd7fc57aed90af042ba2d037e0228fe0.png"},58811:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/kb55-1a303e1798756d97f94d6058fe7bb310.png"}}]);