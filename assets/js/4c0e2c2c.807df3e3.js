"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[64090],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},67341:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:2},i="False Positive Finder",l={unversionedId:"products/waf/tools/fp_finder",id:"products/waf/tools/fp_finder",title:"False Positive Finder",description:"---",source:"@site/docs/products/waf/tools/fp_finder.md",sourceDirName:"products/waf/tools",slug:"/products/waf/tools/fp_finder",permalink:"/rc/products/waf/tools/fp_finder",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Tools",permalink:"/rc/products/waf/tools/"},next:{title:"Match Finder",permalink:"/rc/products/waf/tools/match_finder"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"false-positive-finder"},"False Positive Finder"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"It Identifies, stores all the rules matched by WAF, and generates False-Positive details for a specific listener so that you can identify the actual false positive generated."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"FP Finder",src:r(86730).Z,width:"1833",height:"542"})),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")," "),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"WAF"),"  > Click ",(0,o.kt)("strong",{parentName:"li"},"Tools")," > ",(0,o.kt)("strong",{parentName:"li"},"False Positive Finder")),(0,o.kt)("li",{parentName:"ol"},"Configure the settings "),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Export"))),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Matched Rules")),(0,o.kt)("p",null,"It displays the rules for which False Positive is generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Impacted URLs")),(0,o.kt)("p",null,"It displays all matched URLs for the query."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Blocked Payload")),(0,o.kt)("p",null,"It displays the payload matched for the query like Event Id, Variable, Content, Attack Type, Action.\nWe can further download all events matched based on the filter from the event page."))}d.isMDXComponent=!0},86730:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/false_positive-63cdea185bccabbf994e89514b5a170c.png"}}]);