"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[83326],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,b=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return n?r.createElement(b,a(a({ref:t},c),{},{components:n})):r.createElement(b,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:31},a="KB: 1031",s={unversionedId:"kb/waf/kb-1031",id:"kb/waf/kb-1031",title:"KB: 1031",description:"-----------",source:"@site/docs/kb/waf/kb-1031.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1031",permalink:"/kb/waf/kb-1031",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31},sidebar:"kb_sidebar",previous:{title:"KB: 1030",permalink:"/kb/waf/kb-1030"},next:{title:"KB: 1032",permalink:"/kb/waf/kb-1032"}},l={},p=[{value:"<strong>How to whitelist any IP or IP segment for a listener?</strong>",id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1031"},"KB: 1031"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener"},(0,o.kt)("strong",{parentName:"h3"},"How to whitelist any IP or IP segment for a listener?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"The user wants to whitelist any particular IP address which is getting blocked by some rules or policy."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("p",null,"The user can use the geo whitelisting option to whitelist any IP address or IP  addresses for a listener only."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")," > ",(0,o.kt)("strong",{parentName:"li"},"WAF")," > ",(0,o.kt)("strong",{parentName:"li"},"Listeners")," > click on listener name > ",(0,o.kt)("strong",{parentName:"li"},"Profile")," > click on setting icon on profile > ",(0,o.kt)("strong",{parentName:"li"},"Geo Filtering"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1031",src:n(55709).Z,width:"1805",height:"962"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},'User can see the option named "WhiteListed IP Prefixes". by using this option user can add IPs which need to be whitelisted. after mentioning the IPs click on save changes.')),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1031",src:n(39046).Z,width:"1805",height:"962"})))}u.isMDXComponent=!0},39046:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geo_kb_1031_2-20337e6de368cc861aeeed45c8ab74ee.png"},55709:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/setting_kb_1031_1-f666a689df167c6ec0d2f65537a61420.png"}}]);