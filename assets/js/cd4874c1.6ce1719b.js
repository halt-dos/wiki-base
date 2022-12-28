"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[228],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=c(n),f=a,d=b["".concat(s,".").concat(f)]||b[f]||u[f]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},53174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:23},i="KB: 1023",l={unversionedId:"kb/waf/kb-1023",id:"kb/waf/kb-1023",title:"KB: 1023",description:"-----------",source:"@site/docs/kb/waf/kb-1023.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1023",permalink:"/kb/waf/kb-1023",draft:!1,tags:[],version:"current",sidebarPosition:23,frontMatter:{sidebar_position:23},sidebar:"kb_sidebar",previous:{title:"KB: 1022",permalink:"/kb/waf/kb-1022"},next:{title:"KB: 1024",permalink:"/kb/waf/kb-1024"}},s={},c=[],p={toc:c};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1023"},"KB: 1023"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"how-to-change-load-balancing-algorithm-for-any-server-group"},"How to change load balancing algorithm for any server group?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The User wants to change the load balancing algorithm for any particular server group so that it can balance the load as per the requirement."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"1.First of all log into the management portal.\n",(0,a.kt)("img",{alt:"kb-1023",src:n(2581).Z,width:"1789",height:"728"})),(0,a.kt)("p",null,"2.Go to  listener > Load Balancing > Settings\n",(0,a.kt)("img",{alt:"kb-1023",src:n(12168).Z,width:"1810",height:"789"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},'User can select the desired algorithm under the option "Algorithm". Users can select any of the following load balancing methods;')),(0,a.kt)("p",null,"a. Round Robin"),(0,a.kt)("p",null,"b. Least Connection "),(0,a.kt)("p",null,"c. Least Listener Connection "),(0,a.kt)("p",null,"d. Least Response Time"),(0,a.kt)("p",null,"e. Minimum Jitter ( requires ICMP monitor)"),(0,a.kt)("p",null,"f. Least Bandwidth "),(0,a.kt)("p",null,"g. IP Hash"),(0,a.kt)("p",null,"h. Persistent Hash "),(0,a.kt)("p",null,"i. Least Request"),(0,a.kt)("p",null,"j. SNMP Metrics (requires SNMP Monitor)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1023",src:n(90378).Z,width:"1564",height:"559"})))}u.isMDXComponent=!0},2581:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geoo-6b6fe7559a4424c9e572502a2b47c637.png"},12168:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/load-fa7e758ad5c1e6b730228e9779e228f8.png"},90378:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/load33-c52c52d7bcf1080a4dd3cd2a5e213e7e.png"}}]);