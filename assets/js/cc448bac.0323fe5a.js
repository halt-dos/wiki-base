"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[67901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},60026:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:4},o="RUM Metric",l={unversionedId:"products/cloud/waf/listener/performance/rum_metric",id:"version-6.0/products/cloud/waf/listener/performance/rum_metric",title:"RUM Metric",description:"Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side.",source:"@site/versioned_docs/version-6.0/products/cloud/waf/listener/performance/rum_metric.md",sourceDirName:"products/cloud/waf/listener/performance",slug:"/products/cloud/waf/listener/performance/rum_metric",permalink:"/products/cloud/waf/listener/performance/rum_metric",draft:!1,tags:[],version:"6.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Compression",permalink:"/products/cloud/waf/listener/performance/compression"},next:{title:"Rules",permalink:"/products/cloud/waf/listener/rules/"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rum-metric"},"RUM Metric"),(0,a.kt)("p",null,"Real User Monitoring (RUM) helps in analyzing website performance (till page metrics) on client side."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Haltdos provides the user to monitor performance in real-time on the client-side. When the RUM metric is enabled, WAF monitors performance to a specific URI w.r.t. duration set for collecting information for the request. The performance analysis is displayed in terms of statistics on the Analytics page in Real User Monitoring."),(0,a.kt)("h3",{id:"how-to-use"},"How to use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF > Zones > Listeners > Performance > Rum Metric")),(0,a.kt)("li",{parentName:"ol"},"Add the configuration and ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Rum Metric"),(0,a.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Duration"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"3600")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add URI"),(0,a.kt)("td",{parentName:"tr",align:null},"URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Enable RUM Metric"),": To enable RUM metric, enable the toggle button. It starts to monitor the performance for a specific URI at a defined interval."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Duration"),": This field specifies the duration for collecting information for the request recursively. The time duration is specified in seconds."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Add URI"),": This field specifies the URI address where the RUM metric will analyze the performance."))}u.isMDXComponent=!0}}]);