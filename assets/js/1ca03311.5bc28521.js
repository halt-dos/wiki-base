"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6080],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),p=o,y=m["".concat(s,".").concat(p)]||m[p]||d[p]||a;return r?n.createElement(y,i(i({ref:t},u),{},{components:r})):n.createElement(y,i({ref:t},u))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1522:(e,t,r)=>{r.d(t,{Z:()=>i});var n,o=r(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const i=e=>{let{title:t,titleId:r,...i}=e;return o.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":r},i),t?o.createElement("title",{id:r},t):null,n||(n=o.createElement("path",{d:"M3 8h9M8.168 12.5l4.5-4.5-4.5-4.5",stroke:"#1B2738",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},61287:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(87462),o=r(67294),a=r(39960);const i=e=>{let{to:t,...r}=e;return o.createElement(a.Z,(0,n.Z)({to:`/${t}`},r))}},14335:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(87462),o=(r(67294),r(3905)),a=(r(39960),r(61287)),i=r(1522);const c={sidebar_position:5,sidebar_label:"Next Steps"},s="Next Steps",l={unversionedId:"community/getting-started/next",id:"community/getting-started/next",title:"Next Steps",description:"Incidents",source:"@site/docs/community/getting-started/next.mdx",sourceDirName:"community/getting-started",slug:"/community/getting-started/next",permalink:"/rc/community/getting-started/next",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Next Steps"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/rc/community/getting-started/installation"},next:{title:"Overview",permalink:"/rc/community/docs/overview"}},u={},d=[],m={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("div",{className:"gallery"},(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Incidents"),(0,o.kt)("p",null,"Know what all incidents are generated by Community WAF."),(0,o.kt)(a.Z,{to:"community/docs/incident",mdxType:"VersionedLink"},"See Incidents ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"WAF Rules"),(0,o.kt)("p",null,"Learn how to configure different type of rules for your WAF."),(0,o.kt)(a.Z,{to:"community/docs/waf/rules/header_rules",mdxType:"VersionedLink"},"See WAF Rules ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Load Balancing"),(0,o.kt)("p",null,"Learn how to configure Load Balancing in our WAF Solution"),(0,o.kt)(a.Z,{to:"community/docs/waf/server_farm/load_balancing",mdxType:"VersionedLink"},"See Load Balancing ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Geo Fencing"),(0,o.kt)("p",null,"Learn how to limit access to your web application based on geographic locations."),(0,o.kt)(a.Z,{to:"community/docs/waf/geo_fencing",mdxType:"VersionedLink"},"See Geo Fencing ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Bot Protection"),(0,o.kt)("p",null,"Learn how to configure bot protection to determine, manage, and mitigate automated requests."),(0,o.kt)(a.Z,{to:"community/docs/waf/bot_protection",mdxType:"VersionedLink"},"See Bot Protection ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"WAF Signatures"),(0,o.kt)("p",null,"Learn about our WAF Signatures rules and how to configure it for your web application."),(0,o.kt)(a.Z,{to:"community/docs/waf/signatures",mdxType:"VersionedLink"},"See WAF Signatures ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"})))))}p.isMDXComponent=!0}}]);