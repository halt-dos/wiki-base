"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[84066],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},12117:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},i=void 0,s={unversionedId:"kb/adc/kb-2012",id:"version-6.0/kb/adc/kb-2012",title:"kb-2012",description:"How to set monitoring on origin servers?",source:"@site/versioned_docs/version-6.0/kb/adc/kb-2012.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2012",permalink:"/kb/adc/kb-2012",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"kb-2011",permalink:"/kb/adc/kb-2011"},next:{title:"kb-2013",permalink:"/kb/adc/kb-2013"}},p={},c=[{value:"<strong>How to set monitoring on origin servers</strong>?",id:"how-to-set-monitoring-on-origin-servers",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],l={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-to-set-monitoring-on-origin-servers"},(0,o.kt)("strong",{parentName:"h3"},"How to set monitoring on origin servers"),"?"),(0,o.kt)("h4",{id:"problem-statement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,o.kt)("p",null,"The client requires to have health check for the Server Group."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The client can achieve this by attaching the Monitor with Server Group."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the Haltdos management portal."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(52476).Z,width:"1912",height:"353"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),":- Go to Monitors page and create a monitor ",(0,o.kt)("strong",{parentName:"p"},"(Stack > SLB > Listner > Monitors)")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(6101).Z,width:"1912",height:"950"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),":- Attach the Monitor to the Server Group. ",(0,o.kt)("strong",{parentName:"p"},"(Stack > SLB > Listner > Server Group)")),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(8320).Z,width:"1912",height:"950"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 4"),":- Now go to the Incidents page to see the status of Server Group."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(61090).Z,width:"1585",height:"951"})))}u.isMDXComponent=!0},52476:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc13.1-adce64355c8453ae65e90c1857037e2f.png"},6101:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc13.2-c302e266fef077876a539bb016e4452d.png"},8320:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc13.3-f46c2ae1968480ec5a9dd87b63cba0e3.png"},61090:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc13.4-8971abe6250a8385b1f135beb7442743.png"}}]);