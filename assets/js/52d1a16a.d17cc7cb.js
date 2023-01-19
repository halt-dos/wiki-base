"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[28336],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},72955:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i="Handiling HTTP Errors",l={unversionedId:"products/waf/troubleshooting/case-9003",id:"products/waf/troubleshooting/case-9003",title:"Handiling HTTP Errors",description:"---",source:"@site/docs/products/waf/troubleshooting/case-9003.md",sourceDirName:"products/waf/troubleshooting",slug:"/products/waf/troubleshooting/case-9003",permalink:"/rc/products/waf/troubleshooting/case-9003",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Masking Server Error",permalink:"/rc/products/waf/troubleshooting/case-9002"},next:{title:"Configuring Maintenance Mode",permalink:"/rc/products/waf/troubleshooting/case-9004"}},s={},c=[{value:"Case: 9003",id:"case-9003",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"handiling-http-errors"},"Handiling HTTP Errors"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"case-9003"},"Case: 9003"),(0,o.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"The client requires to have custom error pages as per the error codes."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve")),(0,o.kt)("p",null,"The client can design the custom error pages and can also associate designed custom error pages with the error codes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(95489).Z,width:"938",height:"671"})),(0,o.kt)("p",null,"Here, the customer can configure the error rules and can also define the URI, error code, rule action and custom error page. Custom error pages can be designed by following the below steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Login to GUI, and select the stack."),(0,o.kt)("li",{parentName:"ul"},"Select the Application, for example: WAF and further select the pages"),(0,o.kt)("li",{parentName:"ul"},"Under pages, client can add pages and can fill the relevant information."),(0,o.kt)("li",{parentName:"ul"},"Save changes.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(60024).Z,width:"735",height:"665"})))}p.isMDXComponent=!0},95489:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/troubleshooting_403_error_rule-526c1002bb88a9a6bbde6415289e05d9.png"},60024:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/troubleshooting_403_error_rule_output-0cbd004e9fd16aef8d677d24e2d9dee7.png"}}]);