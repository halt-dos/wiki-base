"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[518],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=l,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=r(87462),l=(r(67294),r(3905));const a={sidebar_position:3},o="Security",i={unversionedId:"saas/cdn/pullzone/security",id:"saas/cdn/pullzone/security",title:"Security",description:"Configure Edge Security (IP Addresses, Legitimate/Malicious Referrers, and Countries) for CDN.",source:"@site/docs/saas/cdn/pullzone/security.md",sourceDirName:"saas/cdn/pullzone",slug:"/saas/cdn/pullzone/security",permalink:"/saas/cdn/pullzone/security",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adcSidebar",previous:{title:"General Settings",permalink:"/saas/cdn/pullzone/general_settings"},next:{title:"CDN Rules",permalink:"/saas/cdn/pullzone/cdn_rules"}},s={},p=[],u={toc:p};function c(e){let{components:t,...r}=e;return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"security"},"Security"),(0,l.kt)("p",null,"Configure Edge Security (IP Addresses, Legitimate/Malicious Referrers, and Countries) for CDN."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Overview")),(0,l.kt)("p",null,"This section describes three main actions:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How to set up hotlinking protection.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How to protect your site content from getting stole.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"How to stop other websites from increasing your bandwidth bills."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"How to Use")),(0,l.kt)("p",null,"The process is quite easy. You simply have to create a list of allowed referrers. Steps included:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to ",(0,l.kt)("strong",{parentName:"p"},"CDN > Pullzones > Security"),".")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your settings.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on Save."))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,l.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blocked Referrers"),(0,l.kt)("td",{parentName:"tr",align:null},"Hostnames"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allowed Referrers"),(0,l.kt)("td",{parentName:"tr",align:null},"Hostnames"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blocked IP Addresses"),(0,l.kt)("td",{parentName:"tr",align:null},"IP Addresses"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Blocked Countries"),(0,l.kt)("td",{parentName:"tr",align:null},"Country Name"),(0,l.kt)("td",{parentName:"tr",align:null},"None")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Blocked Referrers")),(0,l.kt)("p",null,"Specify a list of hostnames that will be blocked from accessing the pull zone."),(0,l.kt)("p",null,"Note: Use Allowed Referrers only for full hotlinking protection"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Allowed Referrers")),(0,l.kt)("p",null,"Specify a list of hostnames that will be allowed to access the pull zone content. If no hostname is, all requests will be allowed."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Blocked IP Addresses")),(0,l.kt)("p",null,"Specify a list of IPs that will be blocked from accessing the pull zone."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Blocked Countries")),(0,l.kt)("p",null,"Specify a list of countries whose traffic will be rejected on the DNS level and will not reach our servers at all."))}c.isMDXComponent=!0}}]);