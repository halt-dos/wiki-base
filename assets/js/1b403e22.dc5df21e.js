"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[79911],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>g});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),g=o,f=d["".concat(i,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(f,s(s({ref:t},p),{},{components:r})):n.createElement(f,s({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,s[1]=l;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51393:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={},s=void 0,l={unversionedId:"kb/adc/KB-2020",id:"version-6.0/kb/adc/KB-2020",title:"KB-2020",description:"How do I configure a Syslog server on Haltdos SLB?",source:"@site/versioned_docs/version-6.0/kb/adc/KB-2020.md",sourceDirName:"kb/adc",slug:"/kb/adc/KB-2020",permalink:"/kb/adc/KB-2020",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB-2019",permalink:"/kb/adc/KB-2019"},next:{title:"KB-2021",permalink:"/kb/adc/KB-2021"}},i={},c=[{value:"<strong>How do I configure a Syslog server on Haltdos SLB</strong>?",id:"how-do-i-configure-a-syslog-server-on-haltdos-slb",level:3},{value:"<strong>Problem Staement</strong>",id:"problem-staement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"how-do-i-configure-a-syslog-server-on-haltdos-slb"},(0,o.kt)("strong",{parentName:"h3"},"How do I configure a Syslog server on Haltdos SLB"),"?"),(0,o.kt)("h4",{id:"problem-staement"},(0,o.kt)("strong",{parentName:"h4"},"Problem Staement")),(0,o.kt)("p",null,"The user wants to add a syslog server which is already there in the local environment. The user is using syslog server on the port 514 (UDP)."),(0,o.kt)("h4",{id:"solution"},(0,o.kt)("strong",{parentName:"h4"},"Solution")),(0,o.kt)("p",null,"The client can achieve the above requirement by utilizing the Syslog feature of the SLB."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step to Solve")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the Haltdos management portal."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(15783).Z,width:"1844",height:"397"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,o.kt)("strong",{parentName:"p"},"Stack > Integration > Syslog"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(65961).Z,width:"1842",height:"944"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Step 3"),":- configure the settings and enable Syslog and save changes."),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(76226).Z,width:"1839",height:"949"})),(0,o.kt)("p",null,"In this way we can configure the syslog server on the haltdos plateform to take the logs on locally syslog server."))}u.isMDXComponent=!0},15783:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc20.1-01bf2b4be074a188ca4ff8d5eac22fe4.png"},65961:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc20.2-14ec526e8f66419eae8e4f5f63006d67.png"},76226:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc20.3-74bfc363457a15aa9846ae30e6b6295b.png"}}]);