"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[9805],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},51753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},l="Interface Groups",i={unversionedId:"llb/interface_groups",id:"llb/interface_groups",title:"Interface Groups",description:"WAN Interfaces Settings",source:"@site/docs/llb/interface_groups.md",sourceDirName:"llb",slug:"/llb/interface_groups",permalink:"/llb/interface_groups",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"adcSidebar",previous:{title:"LLB Settings",permalink:"/llb/llb_settings"},next:{title:"Monitor",permalink:"/llb/monitors/"}},p={},s=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-groups"},"Interface Groups"),(0,a.kt)("p",null,"WAN Interfaces Settings "),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Interface Group is a grouping mechanism of physical Interfaces configured on Link Load Balancer including LAN & WAN. Users can create, modify, delete interface groups, and set desired monitor types for each interface group."),(0,a.kt)("p",null,"High availability (HA) is the ability of a system to operate continuously without failure for a designated period of time. HA works to ensure a system meets an agreed-upon operational performance level. High availability (HA) is usually required in a system where there is high demand for a little downtime. Haltdos LLB has the option of a logical grouping of physical interfaces for a highly available WAN connectivity structure."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"adding_an_interface",src:r(27267).Z,width:"506",height:"457"})),(0,a.kt)("h3",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h3"},"How to Use:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > LLB > Interfaces"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configurethe following parameters to set up the desired settings:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"TYPE"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the Group Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Mandatory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Physical Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"Select Physical Interface from Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Mandatory")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Select Monitor type from Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Optional")))),(0,a.kt)("h3",{id:"description"},(0,a.kt)("strong",{parentName:"h3"},"Description:")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Group Name")),(0,a.kt)("p",null,"It allows the user to add a Group Name."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Physical Interfaces")),(0,a.kt)("p",null,"This option allows the user to select the Physical Interfaces"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monitor Type")),(0,a.kt)("p",null,"It allows the user to select the rule to monitor the terrific. This monitor rule can be added from ",(0,a.kt)("strong",{parentName:"p"},"Monitors"),"."))}u.isMDXComponent=!0},27267:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/llb4-3728796ee95d302b4ba272168c86e1e6.png"}}]);