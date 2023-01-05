"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[41597],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},22314:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:1},o="SSL Settings",l={unversionedId:"community/docs/waf/ssl_settings",id:"version-6.0/community/docs/waf/ssl_settings",title:"SSL Settings",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/ssl_settings.md",sourceDirName:"community/docs/waf",slug:"/community/docs/waf/ssl_settings",permalink:"/community/docs/waf/ssl_settings",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Operational Settings",permalink:"/community/docs/waf/operational"},next:{title:"Geo Fencing",permalink:"/community/docs/waf/geo_fencing"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4},{value:"Enable SSL Offloading",id:"enable-ssl-offloading",level:5},{value:"SSL Certificate",id:"ssl-certificate",level:5},{value:"SSL Cipher Suites",id:"ssl-cipher-suites",level:5},{value:"SSL Session Caching",id:"ssl-session-caching",level:5},{value:"SSL Session Timeout",id:"ssl-session-timeout",level:5}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ssl-settings"},"SSL Settings"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"It provides functionality to support SSL offloading based on configurations. As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SSL Settings",src:n(46177).Z,width:"1907",height:"904"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go To ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"SSL Settings")),(0,a.kt)("li",{parentName:"ol"},"Configure your Settings"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable SSL Offloading"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL Certificate"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL Cipher Suites"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Intermediate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL Session Caching"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL Session Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"5")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("h5",{id:"enable-ssl-offloading"},"Enable SSL Offloading"),(0,a.kt)("p",null,"Users are allowed to specify if the solution should offload SSL traffic."),(0,a.kt)("h5",{id:"ssl-certificate"},"SSL Certificate"),(0,a.kt)("p",null,"Users are allowed to specify SSL certificate for Encryption / Decryption."),(0,a.kt)("h5",{id:"ssl-cipher-suites"},"SSL Cipher Suites"),(0,a.kt)("p",null,"Users are allowed to specify the security / compatibility of SSL with modern web browsers."),(0,a.kt)("h5",{id:"ssl-session-caching"},"SSL Session Caching"),(0,a.kt)("p",null,"Users are allowed to specify the ssl session caching"),(0,a.kt)("h5",{id:"ssl-session-timeout"},"SSL Session Timeout"),(0,a.kt)("p",null,"Users are allowed to specify the ssl session timeout."))}u.isMDXComponent=!0},46177:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl_settings-0c67d9af26b894350ee47a1e7da8e144.png"}}]);