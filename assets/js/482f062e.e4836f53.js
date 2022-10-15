"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8769],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>f});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function s(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?s(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},s=Object.keys(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(a=0;a<s.length;a++)r=s[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,s=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=l(r),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||s;return r?a.createElement(m,o(o({ref:e},u),{},{components:r})):a.createElement(m,o({ref:e},u))}));function f(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:n,o[1]=i;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6182:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:1},o="Stack Status",i={unversionedId:"products/hdplatform/stacks/stack_status",id:"products/hdplatform/stacks/stack_status",title:"Stack Status",description:"Overview of Status of resources allocated to a stack",source:"@site/docs/products/hdplatform/stacks/stack_status.md",sourceDirName:"products/hdplatform/stacks",slug:"/products/hdplatform/stacks/stack_status",permalink:"/products/hdplatform/stacks/stack_status",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Haltdos Platform",permalink:"/products/hdplatform/"},next:{title:"Events",permalink:"/products/hdplatform/stacks/events"}},c={},l=[{value:"Overview",id:"overview",level:2}],u={toc:l};function p(t){let{components:e,...s}=t;return(0,n.kt)("wrapper",(0,a.Z)({},u,s,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"stack-status"},"Stack Status"),(0,n.kt)("p",null,"Overview of Status of resources allocated to a stack"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"All stacks have one or more instances associated with them. Each instance may be configured with one or more NIC cards sending and receiving traffic over them."),(0,n.kt)("p",null,"This status page shows the details of all instances, their health, the status of various services running in it as well as the status of traffic flowing through various NIC ports."),(0,n.kt)("p",null,"A sample instance status associated with a stack is shown below:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"stackstatus",src:r(94834).Z,width:"1500",height:"467"})),(0,n.kt)("p",null,"The status information shows: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Last Updated Time: Shows the last time when status was updated for the instance. By default, instance status is updated once every minute.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Resource Utilisation: Shows the CPU, RAM and Hard disk utilisation in terms of percentage")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Service Status: Shows the status of various services running on the instance along with their up time."))))}p.isMDXComponent=!0},94834:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/stack_status1-d4285757b6ad145e0e63d02119fbe25d.png"}}]);