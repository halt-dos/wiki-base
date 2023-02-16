"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[79675],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),l=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=l(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(f,o(o({ref:e},p),{},{components:n})):r.createElement(f,o({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},54788:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1,sidebar_label:"Introduction"},o="Introduction",s={unversionedId:"community/getting-started/introduction",id:"version-6.0/community/getting-started/introduction",title:"Introduction",description:"Web Application Firewall (WAF/ WAAP) is a reverse proxy solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secure company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.",source:"@site/versioned_docs/version-6.0/community/getting-started/introduction.md",sourceDirName:"community/getting-started",slug:"/community/getting-started/introduction",permalink:"/v6/community/getting-started/introduction",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Introduction"},sidebar:"sidebar",previous:{title:"Haltdos Community WAF",permalink:"/v6/community"},next:{title:"Features",permalink:"/v6/community/getting-started/docs"}},c={},l=[],p={toc:l};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Web Application Firewall (WAF/ WAAP)")," is a ",(0,a.kt)("a",{parentName:"p",href:"/glossary#reverse-proxy"},(0,a.kt)("strong",{parentName:"a"},"reverse proxy"))," solution which helps to protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet. It secure company's Web applications against application layer cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats.  "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WAF")," works as the intermediary as well as shield between the user and the app itself, analyzing and securing all communications before they reach the app or the user. A ",(0,a.kt)("strong",{parentName:"p"},"WAF")," operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic.  "),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"WAF")," analyzes ",(0,a.kt)("strong",{parentName:"p"},"Hypertext Transfer Protocol (HTTP)")," requests and applies a set of rules that define what parts of that conversation are begin and what parts are malicious. The main parts of HTTP conversations that a WAF analyzes are ",(0,a.kt)("strong",{parentName:"p"},"GET")," and ",(0,a.kt)("strong",{parentName:"p"},"POST")," requests. GET requests are used to retrieve data from the server, and POST requests are used to send data to a server to change its state.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"haltdos",src:n(3642).Z,width:"1920",height:"1080"}),"  "),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"WAF")," can take two approaches to analyzing and filtering the content contained in these HTTP requests or a hybrid combination of the two:  "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Whitelisting"),": A whitelisting approach means that the WAF will deny all requests by default and allow only requests that are known to be trusted. It provides a list of what IP addresses are known to be safe.  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blacklisting"),": A blacklisting approach defaults to letting packets through and uses preset signatures to block malicious web traffic and protect vulnerabilities of websites or web applications."))))}u.isMDXComponent=!0},3642:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/waf-2b9a8cd3caf79d596f4178f175364c47.png"}}]);