"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[70341],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),l=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(r),f=n,m=u["".concat(p,".").concat(f)]||u[f]||s[f]||i;return r?o.createElement(m,a(a({ref:t},d),{},{components:r})):o.createElement(m,a({ref:t},d))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},96958:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(87462),n=(r(67294),r(3905));const i={sidebar_position:8},a="Deploy to Production",c={unversionedId:"products/cloud/waf/deploy_to_prod",id:"version-6.0/products/cloud/waf/deploy_to_prod",title:"Deploy to Production",description:"Steps to deploy WAF into production.",source:"@site/versioned_docs/version-6.0/products/cloud/waf/deploy_to_prod.md",sourceDirName:"products/cloud/waf",slug:"/products/cloud/waf/deploy_to_prod",permalink:"/products/cloud/waf/deploy_to_prod",draft:!1,tags:[],version:"6.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"Anti-DDoS",permalink:"/products/cloud/waf/anti-ddos"},next:{title:"Overview",permalink:"/products/cloud/cdn/overview"}},p={},l=[],d={toc:l};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"deploy-to-production"},"Deploy to Production"),(0,n.kt)("p",null,"Steps to deploy WAF into production."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Steps to deploy to production")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Delete the existing A Record for the subdomain.\nDNS A-Record is an association of the subdomain with the backend server IP. For the safer side, it is recommended to keep a  copy of the A record.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a CNAME record with minimum TTL for the    same subdomain with the Protection URL provided by Haltdos when the listener for the subdomain was created. The Protection URL for a subdomain can be found under Go to stack >> Go to resource >> WAF >> Listeners. Note that it might take a few minutes, depending on the TTL that was set for the A record, for the DNS record to go live.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After validating the website after this process, you can change the TTL to the desired value."))))}s.isMDXComponent=!0}}]);