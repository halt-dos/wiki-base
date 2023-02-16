"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[78999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),p=o,y=m["".concat(c,".").concat(p)]||m[p]||d[p]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1522:(e,t,n)=>{n.d(t,{Z:()=>i});var r,o=n(67294);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}const i=e=>{let{title:t,titleId:n,...i}=e;return o.createElement("svg",a({width:16,height:16,viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-labelledby":n},i),t?o.createElement("title",{id:n},t):null,r||(r=o.createElement("path",{d:"M3 8h9M8.168 12.5l4.5-4.5-4.5-4.5",stroke:"#1B2738",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"})))}},61287:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(87462),o=n(67294),a=n(39960);const i=e=>{let{to:t,...n}=e;return o.createElement(a.Z,(0,r.Z)({to:`/${t}`},n))}},517:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(87462),o=(n(67294),n(3905)),a=(n(39960),n(61287)),i=n(1522);const s={sidebar_position:5,sidebar_label:"Next Steps"},c="Next Steps",l={unversionedId:"community/getting-started/next",id:"version-6.0/community/getting-started/next",title:"Next Steps",description:"Incidents",source:"@site/versioned_docs/version-6.0/community/getting-started/next.mdx",sourceDirName:"community/getting-started",slug:"/community/getting-started/next",permalink:"/v6/community/getting-started/next",draft:!1,tags:[],version:"6.0",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Next Steps"},sidebar:"sidebar",previous:{title:"Installation",permalink:"/v6/community/getting-started/installation"},next:{title:"Overview",permalink:"/v6/community/docs/overview"}},u={},d=[],m={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"next-steps"},"Next Steps"),(0,o.kt)("div",{className:"gallery"},(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Incidents"),(0,o.kt)("p",null,"Know what all incidents are generated by Community WAF."),(0,o.kt)(a.Z,{to:"community/docs/incident",mdxType:"VersionedLink"},"See Incidents ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"WAF Rules"),(0,o.kt)("p",null,"Learn how to configure different type of rules for your WAF."),(0,o.kt)(a.Z,{to:"community/docs/waf/rules/header_rules",mdxType:"VersionedLink"},"See WAF Rules ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Load Balancing"),(0,o.kt)("p",null,"Learn how to configure Load Balancing in our WAF Solution"),(0,o.kt)(a.Z,{to:"community/docs/waf/server_farm/load_balancing",mdxType:"VersionedLink"},"See Load Balancing ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Geo Fencing"),(0,o.kt)("p",null,"Learn how to limit access to your web application based on geographic locations."),(0,o.kt)(a.Z,{to:"community/docs/waf/geo_fencing",mdxType:"VersionedLink"},"See Geo Fencing ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"Bot Protection"),(0,o.kt)("p",null,"Learn how to configure bot protection to determine, manage, and mitigate automated requests."),(0,o.kt)(a.Z,{to:"community/docs/waf/bot_protection",mdxType:"VersionedLink"},"See Bot Protection ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"}))),(0,o.kt)("div",{className:"card"},(0,o.kt)("h4",null,"WAF Signatures"),(0,o.kt)("p",null,"Learn about our WAF Signatures rules and how to configure it for your web application."),(0,o.kt)(a.Z,{to:"community/docs/waf/signatures",mdxType:"VersionedLink"},"See WAF Signatures ",(0,o.kt)(i.Z,{className:"arrow",mdxType:"ArrowRight"})))))}p.isMDXComponent=!0}}]);