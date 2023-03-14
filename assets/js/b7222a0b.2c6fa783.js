"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),k=a,d=m["".concat(s,".").concat(k)]||m[k]||u[k]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},42595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:11},i="KB: 1011",l={unversionedId:"kb/waf/kb-1011",id:"kb/waf/kb-1011",title:"KB: 1011",description:"-----------",source:"@site/docs/kb/waf/kb-1011.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1011",permalink:"/kb/waf/kb-1011",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"kb_sidebar",previous:{title:"KB: 1010",permalink:"/kb/waf/kb-1010"},next:{title:"KB: 1012",permalink:"/kb/waf/kb-1012"}},s={},p=[{value:"<strong>Masking login credentials for applications that are behind Haltdos WAF.</strong>",id:"masking-login-credentials-for-applications-that-are-behind-haltdos-waf",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1011"},"KB: 1011"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"masking-login-credentials-for-applications-that-are-behind-haltdos-waf"},(0,a.kt)("strong",{parentName:"h3"},"Masking login credentials for applications that are behind Haltdos WAF.")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to mask the login credentials. This means that wehn any user is logging in, the login credentials can be accessed via access logs. Hence, Haltdos WAF needs to ensure masking of sensitive information / Login credentials for the websites that are behind WAF."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Apps")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile")," > ",(0,a.kt)("strong",{parentName:"p"},"Rules")," > ",(0,a.kt)("strong",{parentName:"p"},"Log Rules"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create a new Log rule"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter rule name and rule message along with rule priority."),(0,a.kt)("li",{parentName:"ul"},"Enter URI (PCRE Regex) - to filter URI"),(0,a.kt)("li",{parentName:"ul"},"Enter Method")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Adding attributes to be masked.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add location"),(0,a.kt)("li",{parentName:"ul"},"Mention parameter"),(0,a.kt)("li",{parentName:"ul"},"Enter match condition and value"),(0,a.kt)("li",{parentName:"ul"},"Add attribute")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Repeat step 3 for multiple attributes.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Save changes."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb1011",src:n(60116).Z,width:"1816",height:"961"})),(0,a.kt)("p",null,"As per entered log rule details, the password should be hidden with Asterisk (*) sign"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kn1011",src:n(58671).Z,width:"1495",height:"949"})),(0,a.kt)("p",null,"As passwords can be extracted from the access log, but after deploying log rules in WAF, the password value is masked with Asterisk sign (*)."))}u.isMDXComponent=!0},60116:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/log_rules_kb_1011_1-c5926bf913b129ff20fca4912f51cbfd.png"},58671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/logruleresult-3159fc5b2599ec72718be92531c7aa9c.png"}}]);