"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8424],{3905:(A,t,e)=>{e.d(t,{Zo:()=>s,kt:()=>o});var n=e(67294);function r(A,t,e){return t in A?Object.defineProperty(A,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):A[t]=e,A}function i(A,t){var e=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(A,t).enumerable}))),e.push.apply(e,n)}return e}function a(A){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?i(Object(e),!0).forEach((function(t){r(A,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(e)):i(Object(e)).forEach((function(t){Object.defineProperty(A,t,Object.getOwnPropertyDescriptor(e,t))}))}return A}function l(A,t){if(null==A)return{};var e,n,r=function(A,t){if(null==A)return{};var e,n,r={},i=Object.keys(A);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||(r[e]=A[e]);return r}(A,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(A);for(n=0;n<i.length;n++)e=i[n],t.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(A,e)&&(r[e]=A[e])}return r}var c=n.createContext({}),u=function(A){var t=n.useContext(c),e=t;return A&&(e="function"==typeof A?A(t):a(a({},t),A)),e},s=function(A){var t=u(A.components);return n.createElement(c.Provider,{value:t},A.children)},y={inlineCode:"code",wrapper:function(A){var t=A.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(A,t){var e=A.components,r=A.mdxType,i=A.originalType,c=A.parentName,s=l(A,["components","mdxType","originalType","parentName"]),p=u(e),o=r,d=p["".concat(c,".").concat(o)]||p[o]||y[o]||i;return e?n.createElement(d,a(a({ref:t},s),{},{components:e})):n.createElement(d,a({ref:t},s))}));function o(A,t){var e=arguments,r=t&&t.mdxType;if("string"==typeof A||r){var i=e.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=A,l.mdxType="string"==typeof A?A:r,a[1]=l;for(var u=2;u<i;u++)a[u]=e[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},66809:(A,t,e)=>{e.r(t),e.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=e(87462),r=(e(67294),e(3905));const i={sidebar_position:3},a="KB: 1003",l={unversionedId:"waf/tutorials/kb-1003",id:"waf/tutorials/kb-1003",title:"KB: 1003",description:"---",source:"@site/docs/waf/tutorials/kb-1003.md",sourceDirName:"waf/tutorials",slug:"/waf/tutorials/kb-1003",permalink:"/waf/tutorials/kb-1003",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"KB: 1002",permalink:"/waf/tutorials/kb-1002"},next:{title:"KB:1004",permalink:"/waf/tutorials/kb-1004"}},c={},u=[],s={toc:u};function y(A){let{components:t,...i}=A;return(0,r.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kb-1003"},"KB: 1003"),(0,r.kt)("hr",null),(0,r.kt)("h1",{id:"how-to-add-custom-headers-for-origin-servers-"},"How to add custom headers for origin servers ?"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Problem Statement")),(0,r.kt)("p",null,"The client web application are running on real servers which are behind WAF. Now, the clients requirement is to find out the source of request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Solution")),(0,r.kt)("p",null,"The client can utilize the header rules in WAF to add source address in the request."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Solve")),(0,r.kt)("p",null,"This can be achieved by the following way: Adding a rule in Header Files"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1003",src:e(57923).Z,width:"1254",height:"622"})),(0,r.kt)("p",null,"Similarly we also need to mention the rule condition:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1003",src:e(30900).Z,width:"951",height:"410"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-1003",src:e(12681).Z,width:"757",height:"756"})),(0,r.kt)("p",null,"As you can observe, the header rule is working as intended."))}y.isMDXComponent=!0},57923:(A,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/kb3-d7415dc58c10359158e2e087f0fdaf43.png"},12681:(A,t,e)=>{e.d(t,{Z:()=>n});const n=e.p+"assets/images/kb31-9c1477de7b3f52c7156dd998e628affe.png"},30900:(A,t,e)=>{e.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);