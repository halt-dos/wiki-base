"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[65],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(n),b=a,f=d["".concat(s,".").concat(b)]||d[b]||u[b]||i;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:11},l="KB: 1011",o={unversionedId:"kb/waf/kb-1011",id:"kb/waf/kb-1011",title:"KB: 1011",description:"-----------",source:"@site/docs/kb/waf/kb-1011.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1011",permalink:"/kb/waf/kb-1011",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"kb_sidebar",previous:{title:"KB: 1010",permalink:"/kb/waf/kb-1010"},next:{title:"KB: 1012",permalink:"/kb/waf/kb-1012"}},s={},c=[],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1011"},"KB: 1011"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"masking-login-credentials-for-applications-that-are-behind-haltdos-waf"},"Masking login credentials for applications that are behind Haltdos WAF."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to mask the login credentials. This means that wehn any user is logging in, the login credentials can be accessed via access logs. Hence, Haltdos WAF needs to ensure masking of sensitive information / Login credentials for the websites that are behind WAF."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"1.Go to Listener --\x3e Profile --\x3e Rules --\x3e Log Rules"),(0,a.kt)("p",null,"2.Create a new Log rule"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Enter rule name and rule message along with rule priority."),(0,a.kt)("li",{parentName:"ul"},"Enter URI (PCRE Regex) - to filter URI"),(0,a.kt)("li",{parentName:"ul"},"Enter Method")),(0,a.kt)("p",null,"3.Adding attributes to be masked."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add location"),(0,a.kt)("li",{parentName:"ul"},"Mention parameter"),(0,a.kt)("li",{parentName:"ul"},"Enter match condition and value"),(0,a.kt)("li",{parentName:"ul"},"Add attribute")),(0,a.kt)("p",null,"4.Repeat step 3 for multiple attributes."),(0,a.kt)("p",null,"5.Save changes."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb1011",src:n(45134).Z,width:"1811",height:"936"})),(0,a.kt)("p",null,"As per entered log rule details, the password should be hidden with Asterisk (*) sign"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kn1011",src:n(58671).Z,width:"1495",height:"949"})),(0,a.kt)("p",null,"As passwords can be extracted from the access log, but after deploying log rules in WAF, the password value is masked with Asterisk sign (*)."))}u.isMDXComponent=!0},45134:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/logrule-231a884ea8caa9d28104b70f5b165fc1.png"},58671:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/logruleresult-3159fc5b2599ec72718be92531c7aa9c.png"}}]);