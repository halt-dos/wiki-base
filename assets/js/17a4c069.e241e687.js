"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[15120],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),b=o,f=d["".concat(l,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12628:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},a="Managing False Positives",s={unversionedId:"products/waf/troubleshooting/case-9001",id:"version-6.0/products/waf/troubleshooting/case-9001",title:"Managing False Positives",description:"---",source:"@site/versioned_docs/version-6.0/products/waf/troubleshooting/case-9001.md",sourceDirName:"products/waf/troubleshooting",slug:"/products/waf/troubleshooting/case-9001",permalink:"/products/waf/troubleshooting/case-9001",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Troubleshooting",permalink:"/products/waf/troubleshooting/"},next:{title:"Masking Server Error",permalink:"/products/waf/troubleshooting/case-9002"}},l={},c=[{value:"Case: 9001",id:"case-9001",level:2},{value:"Problem Statement",id:"problem-statement",level:3},{value:"Solution",id:"solution",level:3}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"managing-false-positives"},"Managing False Positives"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"case-9001"},"Case: 9001"),(0,o.kt)("h3",{id:"problem-statement"},"Problem Statement"),(0,o.kt)("p",null,"Problem: The protected web application starts witnessing Haltdos WAF HTTP 403 error page for genuine requests."),(0,o.kt)("h3",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Haltdos WAF by default shows built-in HTTP 403 error page when blocking request identified as attack. Sometimes, genuine requests may be blocked because the WAF solution has not been fine-tuned as per the application behavior. To solve this problem, Haltdos provides details of every request blocked by WAF with reason and support whitelisting to prevent genuine requests from getting blocked.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the reference Id in Haltdos WAF HTTP 403 error page as shown below:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85589).Z,width:"1164",height:"737"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go to Incident page to check why WAF dropped the request. Each entry has an incident Id associated with the listed incident. This incident id is the same reference id shown in default Haltdos WAF HTTP 403 error page as shown below:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(15434).Z,width:"1458",height:"1000"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"After verifying if the incident was a False Positive, click on the gear icon in the matched rule as shown below to fine-tune WAF:")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(80463).Z,width:"1888",height:"980"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"A pop-up window allows you to create a whitelist rule for the problematic built-in or user-defined rule blocking genuine queries. The whitelist rule can be customized only for the affected page or can be created for the entire web application.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(77181).Z,width:"1836",height:"991"})))}u.isMDXComponent=!0},80463:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/troubleshooting_finetune-c7f6925434e12fd96298e6bc00cc7b60.png"},85589:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/troubleshooting_http403-1ff610d9e4be47c2da5fac32752643ac.png"},15434:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/troubleshooting_incident-384802d54a8f1119ba4a4d93deb8a208.png"},77181:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/troubleshooting_whitelist-9b72586162b701e4cb0cc400e6b68f8c.png"}}]);