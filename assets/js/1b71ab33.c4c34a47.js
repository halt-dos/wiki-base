"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[66766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),b=c(n),d=o,u=b["".concat(s,".").concat(d)]||b[d]||g[d]||a;return n?r.createElement(u,l(l({ref:t},p),{},{components:n})):r.createElement(u,l({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},68315:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={},l=void 0,i={unversionedId:"kb/gslb/kb-4005",id:"version-6.0/kb/gslb/kb-4005",title:"kb-4005",description:"How to configure load balancing for DNS Records?",source:"@site/versioned_docs/version-6.0/kb/gslb/kb-4005.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/kb-4005",permalink:"/kb/gslb/kb-4005",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"kb-4004",permalink:"/kb/gslb/kb-4004"},next:{title:"kb-4006",permalink:"/kb/gslb/kb-4006"}},s={},c=[{value:"<strong>How to configure load balancing for DNS Records</strong>?",id:"how-to-configure-load-balancing-for-dns-records",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function g(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-configure-load-balancing-for-dns-records"},(0,o.kt)("strong",{parentName:"h3"},"How to configure load balancing for DNS Records"),"?"),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"Client want to balance load or traffic on certain IP for a particular Zone.\n\u200b"),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The client can achieve the above requirement by utilising the ",(0,o.kt)("strong",{parentName:"p"},"Load Balancing Algorithm")," under Haltdos GSLB.\n\u200b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(62841).Z,width:"1843",height:"657"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"GSLB > Go to Listener > Zones. > Configure a Zone > Click on Save Changes"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(40352).Z,width:"1813",height:"657"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After creating a Zone User have to create its Record as well. ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(54779).Z,width:"1802",height:"867"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add Record > Configure Zone Record > Select Load Balancing from Drop Down LB Algorithm > Click on Save Record"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(1255).Z,width:"1787",height:"928"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note"),':- LB Algorithm can only be applied when Record Type is A or Quad A ("AAAA").'))}g.isMDXComponent=!0},62841:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gslb5.1-a8376b38f54f5bdcf5a4be9c5e037e93.png"},40352:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gslb5.2-ea2681457507b09d9a365df1c7de4903.png"},54779:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gslb5.3-ae50649ca76be6f4f9e8397255ba35a4.png"},1255:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/gslb5.4-d6761766951bd7aab4ee435080f6ddde.png"}}]);