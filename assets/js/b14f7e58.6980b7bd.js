"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[39366],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},u=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(r),f=a,g=d["".concat(p,".").concat(f)]||d[f]||c[f]||i;return r?n.createElement(g,l(l({ref:e},u),{},{components:r})):n.createElement(g,l({ref:e},u))}));function f(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},62580:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:11},l="Virtual Patching",o={unversionedId:"products/waf/listener/virtualpatching",id:"version-6.0/products/waf/listener/virtualpatching",title:"Virtual Patching",description:"Integration with SAST / DAST scanners",source:"@site/versioned_docs/version-6.0/products/waf/listener/virtualpatching.md",sourceDirName:"products/waf/listener",slug:"/products/waf/listener/virtualpatching",permalink:"/products/waf/listener/virtualpatching",draft:!1,tags:[],version:"6.0",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sidebar",previous:{title:"Auto Profiling",permalink:"/products/waf/listener/autoprofiling"},next:{title:"Learning",permalink:"/products/waf/listener/learning"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:2}],u={toc:s};function c(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"virtual-patching"},"Virtual Patching"),(0,a.kt)("p",null,"Integration with SAST / DAST scanners"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Virtual Patching is a feature of Haltdos WAF to display all the scan results and showcase the graph and statistics of the application scanned. Some of the supported scanners include:"),(0,a.kt)("p",null,"\u26abBurp(XML)"),(0,a.kt)("p",null,"\u26abOWASP Zap(Json)"),(0,a.kt)("p",null,"\u26abAcunetix(Json)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"virtualpatching",src:r(90060).Z,width:"1406",height:"460"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use:"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Virtual Patching")),(0,a.kt)("p",null,"2.Configure your settings"),(0,a.kt)("p",null,"3.Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),".."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Upload Result"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the button to upload the result"),(0,a.kt)("td",{parentName:"tr",align:null},"Button"),(0,a.kt)("td",{parentName:"tr",align:null},"NA")))))}c.isMDXComponent=!0},90060:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/virtual_patching-d8be98afa85b89da2e734e848fd2c8ad.png"}}]);