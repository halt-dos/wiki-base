"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[70743],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,m=u["".concat(s,".").concat(b)]||u[b]||f[b]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53672:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>f,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:5},a="KB: 1005",l={unversionedId:"kb/waf/kb-1005",id:"kb/waf/kb-1005",title:"KB: 1005",description:"---------",source:"@site/docs/kb/waf/kb-1005.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1005",permalink:"/kb/waf/kb-1005",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"kb_sidebar",previous:{title:"KB: 1004",permalink:"/kb/waf/kb-1004"},next:{title:"KB: 1006",permalink:"/kb/waf/kb-1006"}},s={},p=[{value:"<strong>How to configure multiple security profiles for complex application?</strong>",id:"how-to-configure-multiple-security-profiles-for-complex-application",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function f(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1005"},"KB: 1005"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-configure-multiple-security-profiles-for-complex-application"},(0,o.kt)("strong",{parentName:"h3"},"How to configure multiple security profiles for complex application?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"The client wants the Application to behave for a set of user in different way or client wants to configure different type of Application behind the WAF."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The client can achieve the above requirement by configuring different profile.")),(0,o.kt)("p",null,"Example :We have DEFAULT ",(0,o.kt)("a",{parentName:"p",href:"docs/waf/listener/profiles/profiles.md"},(0,o.kt)("strong",{parentName:"a"},"Profiles")),",in which we configured that application will not handle the POST request using ",(0,o.kt)("a",{parentName:"p",href:"docs/waf/listener/profiles/policy/Web_policy.md"},(0,o.kt)("strong",{parentName:"a"},"Web Policy"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1005",src:r(26479).Z,width:"1806",height:"957"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"After Policy is applied,WAF will automatically block the POST request.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1005",src:r(93395).Z,width:"1833",height:"998"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"And now we are configuring the Profile for another set of users and in which we have configured that it will handle POST request. ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1005",src:r(52301).Z,width:"1833",height:"998"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1005",src:r(72486).Z,width:"1833",height:"961"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"After configuring the profile, WAF is allowing the POST request for the same application.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1005",src:r(51666).Z,width:"1833",height:"993"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"In the same way, the client can configure the Profile for different application types (i.e. websites, web socket).")))}f.isMDXComponent=!0},93395:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browser_kb_1005_2-f96922717ee00480ca17cad4d7fd7446.png"},51666:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/browser_kb_1005_5-f84f975e412e54029040f0e8045a4655.png"},52301:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profiles_kb_1005_3-5b1fbdaa65470cc8c04e4688d5bc5978.png"},26479:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/web_kb_1005_1-4a25f0f673facd35b7f06f38b9a18ebc.png"},72486:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/web_kb_1005_4-cf49d8b2b48ee6d24736165d4eb08b9a.png"}}]);