"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[49395],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25859:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),o=(n(67294),n(3905));const i={},a="KB-9001",s={unversionedId:"community/kb/kb-9001",id:"community/kb/kb-9001",title:"KB-9001",description:"How to configure Website?",source:"@site/docs/community/kb/kb-9001.md",sourceDirName:"community/kb",slug:"/community/kb/kb-9001",permalink:"/community/kb/kb-9001",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"WAF CE Knowledge Base",permalink:"/community/kb/"},next:{title:"KB-9002",permalink:"/community/kb/kb-9002"}},l={},c=[{value:"<strong>How to configure Website?</strong>",id:"how-to-configure-website",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-9001"},"KB-9001"),(0,o.kt)("h3",{id:"how-to-configure-website"},(0,o.kt)("strong",{parentName:"h3"},"How to configure Website?")),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"User wants to configure their application on the Haltdos CE WAF. They have to install community edition of Haltdos WAF using the Installation guide. Post installation they can use below steps to onboard their application on Haltdos WAF CE."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The user need to follow below steps to configure a new application on the Haltdos WAF CE."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"User need to log in to the Haltdos WAF CE Web UI console using following URL in the web browser. (https://<\\machineIP>:9000)")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"User can log in first time with credential which they have set at the time of registering the license.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(13871).Z,width:"1920",height:"972"})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Post login, users need to add their application alias under operational settings using following path: ",(0,o.kt)("strong",{parentName:"li"},"Home > WAF > Operational"),". Users can add their server alias and click on ",(0,o.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Operational Settings",src:n(38377).Z,width:"1892",height:"928"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Post adding server alias in the operational settings, user need to add the backend server using following path: ",(0,o.kt)("strong",{parentName:"li"},"Home > WAF > Server Farm > Servers"),". User can get details about how to configure a backend server using following link : ",(0,o.kt)("a",{parentName:"li",href:"/community/docs/waf/server_farm/servers"},"Servers"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Servers",src:n(41670).Z,width:"1918",height:"860"})),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Post adding backend details in server farm, user need to set SSL security using SSL settings option. First user need to add SSL certificate using following path: ",(0,o.kt)("strong",{parentName:"li"},"Home > SSL Certificate"),". ")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SSL Certificate",src:n(11455).Z,width:"1906",height:"915"})),(0,o.kt)("p",null,"User can get help of guide of SSL certificate here - ",(0,o.kt)("a",{parentName:"p",href:"/community/docs/ssl_certificates"},"SSL certificate")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SSl settings",src:n(29772).Z,width:"1907",height:"904"})),(0,o.kt)("p",null,"After adding certificate on the above option, User need to go to following path to enable SSL settings : ",(0,o.kt)("strong",{parentName:"p"},"Home > WAF > SSL Settings"),". User can get help of following document to understand how to configure SSL settings on Haltdos WAF CE : ",(0,o.kt)("a",{parentName:"p",href:"/community/docs/waf/ssl_settings"},"SSL Settings")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Post enabling the SSL for the website user should enable a redirection rule using following path : ",(0,o.kt)("strong",{parentName:"li"},"Home > WAF > Rules > Redirection Rule"),". To configure the rule, User can take help from the ",(0,o.kt)("a",{parentName:"li",href:"/community/docs/waf/rules/redirection_rules"},(0,o.kt)("strong",{parentName:"a"},"Redirection rule"))," document.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Redirection rule",src:n(68057).Z,width:"1915",height:"942"})),(0,o.kt)("p",null,"Now, all the HTTP request that are coming on Haltdos WAF CE will be redirected to HTTPs."),(0,o.kt)("p",null,"In this way, users can onboard their application on Haltdos WAF CE."))}u.isMDXComponent=!0},38377:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CE_operational_settings-a90f6a4b3b26a0fb7c021718d1085a84.png"},41670:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CE_servers-cbc3d657653f6e1d39d2ea8b78b0315e.png"},13871:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/login-410ae7eabc3c453bd5dc82b7a7810293.png"},68057:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/redirection_rules-5f9fb50f719e1a201804619527359e24.png"},11455:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_certificates-bb324fb81d3aa6df1dc958849ff29b94.png"},29772:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_settings-0c67d9af26b894350ee47a1e7da8e144.png"}}]);