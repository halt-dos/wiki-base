"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},52255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:3},i="KB: 3004",l={unversionedId:"kb/kb/kb-3004",id:"kb/kb/kb-3004",title:"KB: 3004",description:"How to configure DNS  IP through Haltdos Console?",source:"@site/docs/kb/kb/kb-3004.md",sourceDirName:"kb/kb",slug:"/kb/kb/kb-3004",permalink:"/kb/kb/kb-3004",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3}},s={},c=[{value:"How to configure DNS  IP through Haltdos Console?",id:"how-to-configure-dns--ip-through-haltdos-console",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-3004"},"KB: 3004"),(0,o.kt)("h2",{id:"how-to-configure-dns--ip-through-haltdos-console"},"How to configure DNS  IP through Haltdos Console?"),(0,o.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Client wants to set Domain Name Server (DNS) IP that all the domain related queries can be solved. Users are allowed to set DNS server IP for port basis, i.e. if they wanted to add multiple DNS IP on single port they can add it using following steps."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"The client can achieve the above requirement by configuring a DNS IP under Haltdos WAF.  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dns",src:n(92126).Z,width:"1809",height:"870"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Now go instances under the respective Stack.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dns",src:n(56288).Z,width:"1843",height:"442"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Stacks")," > ",(0,o.kt)("strong",{parentName:"li"},"Instances")," > ",(0,o.kt)("strong",{parentName:"li"},"Integration"),"> ",(0,o.kt)("strong",{parentName:"li"},"NTP"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dns",src:n(85996).Z,width:"1423",height:"740"}),"  "),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Configure NTP Settings  ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"dns",src:n(33123).Z,width:"1441",height:"732"})),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save Changes"))))}u.isMDXComponent=!0},92126:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns1-ef27260554c01615e596a8f4a18f8419.png"},56288:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns2-53da253d424771550b169d10a55abc68.png"},85996:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns3-a16c116961b8337a984ed0f1c60e0bfe.png"},33123:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dns4-2785dadd0ce72088a0fae72ea45bc543.png"}}]);