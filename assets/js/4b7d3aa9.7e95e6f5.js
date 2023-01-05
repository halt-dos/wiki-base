"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[53574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),f=a,k=b["".concat(s,".").concat(f)]||b[f]||u[f]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},56876:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:56},i="KB: 1056",l={unversionedId:"kb/waf/kb-1056",id:"version-6.0/kb/waf/kb-1056",title:"KB: 1056",description:"Problem Statement",source:"@site/versioned_docs/version-6.0/kb/waf/kb-1056.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1056",permalink:"/kb/waf/kb-1056",draft:!1,tags:[],version:"6.0",sidebarPosition:56,frontMatter:{sidebar_position:56},sidebar:"kb_sidebar",previous:{title:"KB: 1055",permalink:"/kb/waf/kb-1055"},next:{title:"KB: 1057",permalink:"/kb/waf/kb-1057"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1056"},"KB: 1056"),(0,a.kt)("h1",{id:"how-to-configure-ntp-through-haltdos-solution"},"How to configure NTP through Haltdos Solution?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"Client wants to set Network Time Protocol (NTP) that provides a very reliable way of transmitting and receiving an accurate time source over TCP/IP-based networks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOLUTION")),(0,a.kt)("p",null,"The client can achieve the above requirement by utilizing the NTP integration under Haltdos WAF."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1056",src:n(66425).Z,width:"1822",height:"607"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Now go instances under the respective Stack.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1056",src:n(15686).Z,width:"1843",height:"442"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Go to Stacks > ",(0,a.kt)("strong",{parentName:"li"},"Instances")," > ",(0,a.kt)("strong",{parentName:"li"},"Integration")," > ",(0,a.kt)("strong",{parentName:"li"},"NTP"),"  > ",(0,a.kt)("strong",{parentName:"li"},"Configure NTP")," > ",(0,a.kt)("strong",{parentName:"li"},"Save changes"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1056",src:n(26874).Z,width:"1848",height:"390"})),(0,a.kt)("p",null,"From the above steps, client can configure NTP successfully."))}u.isMDXComponent=!0},15686:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ntp-173c2efb5d00544166eb0e6ef3aa2f7a.png"},26874:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ntpp-a4fc47505515701a53ead4b9f359085b.png"},66425:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"}}]);