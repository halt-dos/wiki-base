"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[52439],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(n),m=o,k=f["".concat(p,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(k,i(i({ref:t},c),{},{components:n})):r.createElement(k,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:61},i="KB: 1061",l={unversionedId:"kb/waf/kb-1061",id:"kb/waf/kb-1061",title:"KB: 1061",description:"Problem Statement",source:"@site/docs/kb/waf/kb-1061.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1061",permalink:"/kb/waf/kb-1061",draft:!1,tags:[],version:"current",sidebarPosition:61,frontMatter:{sidebar_position:61},sidebar:"kb_sidebar",previous:{title:"KB: 1060",permalink:"/kb/waf/kb-1060"},next:{title:"KB: 1062",permalink:"/kb/waf/kb-1062"}},p={},s=[],c={toc:s};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1061"},"KB: 1061"),(0,o.kt)("h1",{id:"how-to-prevent-sites-from-json-injection"},"How to prevent sites from JSON injection?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem Statement")),(0,o.kt)("p",null,"Client wants to protect their sites from JSON injection attack which are protected by Haltdos solutions."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SOLUTION")),(0,o.kt)("p",null,"The client can achieve the above requirement by configuring JSON policies."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1061",src:n(17839).Z,width:"1809",height:"870"})),(0,o.kt)("p",null,"2.Go to ",(0,o.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,o.kt)("strong",{parentName:"p"},"WAF")," > ",(0,o.kt)("strong",{parentName:"p"},"Listener")," > ",(0,o.kt)("strong",{parentName:"p"},"Profile")," > ",(0,o.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,o.kt)("strong",{parentName:"p"},"Policy")," > ",(0,o.kt)("strong",{parentName:"p"},"JSON Policy")," >",(0,o.kt)("strong",{parentName:"p"},"Configure the Policy > "),"Save Changes**."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1061",src:n(71382).Z,width:"1827",height:"823"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Now inject malicious JSON data to the respective listener.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Haltdos solutions take action on the malicious JSON data as per the configuration saved."))))}u.isMDXComponent=!0},71382:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/jsonpol-767fa5db93e77e4e142d784b710aa689.png"},17839:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proflogin-ef27260554c01615e596a8f4a18f8419.png"}}]);