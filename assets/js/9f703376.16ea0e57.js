"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[68839],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(r),f=a,m=d["".concat(p,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,l(l({ref:e},u),{},{components:r})):n.createElement(m,l({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18570:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:6},l="Virtual Patching",i={unversionedId:"products/waf/tools/virtualpatching",id:"products/waf/tools/virtualpatching",title:"Virtual Patching",description:"Integration with SAST / DAST scanners",source:"@site/docs/products/waf/tools/virtualpatching.md",sourceDirName:"products/waf/tools",slug:"/products/waf/tools/virtualpatching",permalink:"/products/waf/tools/virtualpatching",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"Scan Importer",permalink:"/products/waf/tools/scan_importer"},next:{title:"Troubleshooting",permalink:"/products/waf/troubleshooting/"}},p={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3}],u={toc:s};function c(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-patching"},"Virtual Patching"),(0,a.kt)("p",null,"Integration with SAST / DAST scanners"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Virtual Patching is a feature of Haltdos WAF to display all the scan results and showcase the graph and statistics of the application scanned. Some of the supported scanners include:"),(0,a.kt)("p",null,"\u26ab Burp(XML)"),(0,a.kt)("p",null,"\u26ab OWASP Zap(Json)"),(0,a.kt)("p",null,"\u26ab Acunetix(Json)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virtualpatching",src:r(84256).Z,width:"1886",height:"933"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Virtual Patching")),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Upload Result"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the button to upload the result"),(0,a.kt)("td",{parentName:"tr",align:null},"Button"),(0,a.kt)("td",{parentName:"tr",align:null},"NA")))))}c.isMDXComponent=!0},84256:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/virtualpatching-a925dac27b32ff8a7b67d025876276e0.png"}}]);