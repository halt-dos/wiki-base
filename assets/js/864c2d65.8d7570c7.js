"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7242],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},65709:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:6},i="Performance",l={unversionedId:"adc/listeners/performance",id:"adc/listeners/performance",title:"Performance",description:"---",source:"@site/docs/adc/listeners/performance.md",sourceDirName:"adc/listeners",slug:"/adc/listeners/performance",permalink:"/adc/listeners/performance",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"adcSidebar",previous:{title:"Monitors",permalink:"/adc/listeners/monitors"},next:{title:"Rules",permalink:"/adc/listeners/rules/"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enable Caching",id:"enable-caching",level:4},{value:"Enable Compression",id:"enable-compression",level:4},{value:"Cache Pool",id:"cache-pool",level:4},{value:"Minimum Response To Compress",id:"minimum-response-to-compress",level:4},{value:"Maximum Response To Compress",id:"maximum-response-to-compress",level:4},{value:"Compression Mime Filter",id:"compression-mime-filter",level:4}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"performance"},"Performance"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Performance settings are designed to increase the performance of the traffic coming from the client-side. Users can enable the caching and compression method to increase the performance of the system."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"performance",src:n(23090).Z,width:"1901",height:"934"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Stack > ",(0,a.kt)("a",{parentName:"p",href:"/adc/docs"},(0,a.kt)("strong",{parentName:"a"},"SLB")),"  > ",(0,a.kt)("a",{parentName:"p",href:"../listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > performance")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Caching"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Cache Pool"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Compression"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compression Algorithm"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Minimum Response To Compress"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Response To Compress"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compression Mime Filter"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"File Etensions")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("h4",{id:"enable-caching"},"Enable Caching"),(0,a.kt)("p",null,"This option allows users to enable content caching. Content Caching helps to improve solution performance, reduce cost through minimizing resources and increase throughput."),(0,a.kt)("h4",{id:"enable-compression"},"Enable Compression"),(0,a.kt)("p",null,"This option allows users to enable content compression. It helps to increase throughput and significant for cost savings. "),(0,a.kt)("p",null,"This option allows users to select a cache pool to use for content caching."),(0,a.kt)("h4",{id:"cache-pool"},"Cache Pool"),(0,a.kt)("p",null,"This option allows users to select a cache pool for content caching. It helps to increase read performance and speed up of solution. User can redirect at ",(0,a.kt)("strong",{parentName:"p"},"Cache Pools")," and add cache."),(0,a.kt)("p",null,"Users can specify supported compression algorithm."),(0,a.kt)("h4",{id:"minimum-response-to-compress"},"Minimum Response To Compress"),(0,a.kt)("p",null,"Users can specify minimum HTTP response content length to compress. If HTTP response content length is larger than the specified minimum limit, it will be compresses. If HTTP response content length is smaller than the specified minimum limit, it will be skipped for compression."),(0,a.kt)("h4",{id:"maximum-response-to-compress"},"Maximum Response To Compress"),(0,a.kt)("p",null,"Users can specify maximum HTTP response content length to compress.If HTTP response content length is smaller than the specified maximum limit, it will be compresses. If HTTP response content length is larger than the specified maximum limit, it will be skipped for compression."),(0,a.kt)("h4",{id:"compression-mime-filter"},"Compression Mime Filter"),(0,a.kt)("p",null,"This option allows users to specify the Disabled selective list of mime-types for content compression."))}c.isMDXComponent=!0},23090:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/performance-bb9e372351a9f641c83b7972314eaf4c.png"}}]);