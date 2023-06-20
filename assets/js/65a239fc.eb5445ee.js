"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[45522],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=o,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||i;return r?n.createElement(h,a(a({ref:t},d),{},{components:r})):n.createElement(h,a({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},96128:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:3},a="Match Finder",l={unversionedId:"products/waf/tools/match_finder",id:"version-6.0/products/waf/tools/match_finder",title:"Match Finder",description:"Overview",source:"@site/versioned_docs/version-6.0/products/waf/tools/match_finder.md",sourceDirName:"products/waf/tools",slug:"/products/waf/tools/match_finder",permalink:"/v6/products/waf/tools/match_finder",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"FP Finder",permalink:"/v6/products/waf/tools/fp_finder"},next:{title:"Troubleshooting",permalink:"/v6/products/waf/troubleshooting/"}},c={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Event ID",id:"event-id",level:4},{value:"Matched Rule",id:"matched-rule",level:4},{value:"URI",id:"uri",level:4},{value:"Zone",id:"zone",level:4},{value:"Payload",id:"payload",level:4},{value:"Action",id:"action",level:4}],d={toc:s};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"match-finder"},"Match Finder"),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"It Identifies, stores all the rules matched by WAF, and generates match finder details for a specific or all listener so that you can identify all matched, rules for the listener by listing the events."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"matchfinder",src:r(13475).Z,width:"1625",height:"385"})),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to WAF > Match Finder"),(0,o.kt)("li",{parentName:"ol"},"Click on the Run Query button on the top right side.")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h4",{id:"event-id"},"Event ID"),(0,o.kt)("p",null,"It displays the event ID logged for the certain request found to be malicious."),(0,o.kt)("h4",{id:"matched-rule"},"Matched Rule"),(0,o.kt)("p",null,"It displays all matched rule id for the query."),(0,o.kt)("h4",{id:"uri"},"URI"),(0,o.kt)("p",null,"It displays the matching URI for the current event."),(0,o.kt)("h4",{id:"zone"},"Zone"),(0,o.kt)("p",null,"It displays the zone/sub-domain name that belongs to it."),(0,o.kt)("h4",{id:"payload"},"Payload"),(0,o.kt)("p",null,"It displays the payload matched for the current event."),(0,o.kt)("h4",{id:"action"},"Action"),(0,o.kt)("p",null,"It specifies the action to be taken. To whitelist current event rules, click on the Whitelist button.\nWe can further download all events matched based on the filter from the event page."))}u.isMDXComponent=!0},13475:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/match_finder-325cae7f7a222294ce00fc6687529e50.png"}}]);