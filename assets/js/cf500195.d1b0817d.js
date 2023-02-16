"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[36139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(r),u=o,v=f["".concat(s,".").concat(u)]||f[u]||p[u]||i;return r?n.createElement(v,a(a({ref:t},d),{},{components:r})):n.createElement(v,a({ref:t},d))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},53076:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:2},a="FP Finder",l={unversionedId:"products/waf/tools/fp_finder",id:"version-6.0/products/waf/tools/fp_finder",title:"FP Finder",description:"Overview",source:"@site/versioned_docs/version-6.0/products/waf/tools/fp_finder.md",sourceDirName:"products/waf/tools",slug:"/products/waf/tools/fp_finder",permalink:"/v6/products/waf/tools/fp_finder",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Global Whitelist",permalink:"/v6/products/waf/tools/global_whitelist"},next:{title:"Match Finder",permalink:"/v6/products/waf/tools/match_finder"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Matched Rules",id:"matched-rules",level:4},{value:"Affected URLs",id:"affected-urls",level:4},{value:"Impacting Payload",id:"impacting-payload",level:4}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"fp-finder"},"FP Finder"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FP Finder",src:r(69431).Z,width:"1631",height:"480"})),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to WAF > FP Finder"),(0,o.kt)("li",{parentName:"ol"},"Click on the Run Query button on the top right side.")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h4",{id:"matched-rules"},"Matched Rules"),(0,o.kt)("p",null,"It displays the rules for which False Positive is generated."),(0,o.kt)("h4",{id:"affected-urls"},"Affected URLs"),(0,o.kt)("p",null,"It displays all matched URLs for the query."),(0,o.kt)("h4",{id:"impacting-payload"},"Impacting Payload"),(0,o.kt)("p",null,"It displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action.\nWe can further download all events matched based on the filter from the event page."))}p.isMDXComponent=!0},69431:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/fp_finder-97f3ddfe3245d3afe47df45617b22f4d.png"}}]);