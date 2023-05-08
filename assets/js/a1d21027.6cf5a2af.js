"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[70011],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),k=o,u=d["".concat(s,".").concat(k)]||d[k]||b[k]||a;return n?r.createElement(u,i(i({ref:t},p),{},{components:n})):r.createElement(u,i({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},99567:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const a={sidebar_position:21},i="KB: 1021",l={unversionedId:"kb/waf/kb-1021",id:"kb/waf/kb-1021",title:"KB: 1021",description:"-----------",source:"@site/docs/kb/waf/kb-1021.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1021",permalink:"/kb/waf/kb-1021",draft:!1,tags:[],version:"current",sidebarPosition:21,frontMatter:{sidebar_position:21},sidebar:"kb_sidebar",previous:{title:"KB: 1020",permalink:"/kb/waf/kb-1020"},next:{title:"KB: 1022",permalink:"/kb/waf/kb-1022"}},s={},c=[{value:"<strong>How to allow access to only few IPs for backend web application?</strong>",id:"how-to-allow-access-to-only-few-ips-for-backend-web-application",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function b(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1021"},"KB: 1021"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"how-to-allow-access-to-only-few-ips-for-backend-web-application"},(0,o.kt)("strong",{parentName:"h3"},"How to allow access to only few IPs for backend web application?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"The user wants to allow only few IP address over the WAF to access the web application and block rest of all IP address from public facing internet."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Firstly, login to WAF.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1021",src:n(53877).Z,width:"1810",height:"966"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Go to  ",(0,o.kt)("strong",{parentName:"li"},"Apps")," > ",(0,o.kt)("strong",{parentName:"li"},"WAF")," > ",(0,o.kt)("strong",{parentName:"li"},"listener")," > ",(0,o.kt)("strong",{parentName:"li"},"Profile")," > ",(0,o.kt)("strong",{parentName:"li"},"click on setting icon")," > ",(0,o.kt)("strong",{parentName:"li"},"Geo-filtering"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1021",src:n(10290).Z,width:"1810",height:"962"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Under \"Blacklisted IP Prefixes\" option user can add the IP address with their CIDR value. User need to make sure that while adding the IP addresses it should start with '~' to achieve the mentioned scenario.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1021",src:n(87111).Z,width:"1810",height:"962"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Now under ",(0,o.kt)("strong",{parentName:"li"},"Incident")," User can see the website is only accessible for IP 192.168.0.123 and rest all other IP addresses are blocked to access the website.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1021",src:n(43619).Z,width:"1810",height:"962"})))}b.isMDXComponent=!0},10290:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geo_kb_1021_2-8efb4d5043be05a988b480d6a844fb32.png"},87111:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geo_kb_1021_3-fbe2d280da601f4a5472765ab1b29e44.png"},43619:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incident_kb_1021_4-ebc567e1f5cd6d6545a1844354606772.png"},53877:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview_kb_1021_1-b66b77acbb01e13a8777400c8be88de8.png"}}]);