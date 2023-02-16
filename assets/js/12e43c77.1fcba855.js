"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[16117],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,s(s({ref:t},p),{},{components:r})):n.createElement(m,s({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},61107:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={"sidebar position":4},s="Session Table",i={unversionedId:"products/waf/session_table",id:"products/waf/session_table",title:"Session Table",description:"Overview",source:"@site/docs/products/waf/session_table.md",sourceDirName:"products/waf",slug:"/products/waf/session_table",permalink:"/rc/products/waf/session_table",draft:!1,tags:[],version:"current",frontMatter:{"sidebar position":4},sidebar:"sidebar",previous:{title:"Fine-tuning WAF",permalink:"/rc/products/waf/troubleshooting/case-9007"},next:{title:"Link Load Balancer (LLB)",permalink:"/rc/products/llb/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"How to use it",id:"how-to-use-it",level:3},{value:"Description",id:"description",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"session-table"},"Session Table"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The session table records the connection status of on boarded listeners. It plays an important role  to understand the traffic flow and to identify which request has forwarded to which upstream."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"session_table",src:r(83164).Z,width:"1848",height:"690"})),(0,o.kt)("h3",{id:"how-to-use-it"},"How to use it"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Apps")),(0,o.kt)("li",{parentName:"ol"},"Select ",(0,o.kt)("strong",{parentName:"li"},"WAF"),"  > Click ",(0,o.kt)("strong",{parentName:"li"},"Session Table")),(0,o.kt)("li",{parentName:"ol"},"Here User can view all the connections that has been establish and also about the status of connection and timestamp as well."),(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("strong",{parentName:"li"},"Resources"),", User can select desired resource of listed listener."),(0,o.kt)("li",{parentName:"ol"},"From ",(0,o.kt)("strong",{parentName:"li"},"Date Range")," User can select customize date to view Incidents.")),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null," ",(0,o.kt)("strong",{parentName:"p"},"TIMESTAMP")),(0,o.kt)("p",null,"In the time stamp column user can get details about the connection intialization time for that particular session, for each session time session can be different."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SOURCE")),(0,o.kt)("p",null,"In source column user can get details about the client source ip from which the request has been generated."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"PROXY")),(0,o.kt)("p",null,"In proxy column the user can see the ip address that has been NAT for the client request. As the waf is working as a reverse proxy, hence requests forwarded to backend sever should be NAT with waf ip addresss."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"CLIENT NAT")),(0,o.kt)("p",null,"If user has configured client ip pool and server groups then requests forwarded to backend sever will be NAT with cllient ip pool address."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"UPSTREAM")),(0,o.kt)("p",null,"In upstream column user can see the ip of backend server."))}u.isMDXComponent=!0},83164:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/sessiontable-9a2762a5f0b3d8d58a7058c4a8e6b5f0.png"}}]);