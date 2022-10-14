"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6729],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:e},c),{},{components:n})):r.createElement(f,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},15124:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:3},i="RIP",l={unversionedId:"hdplatform/stacks/instance/routing/rip",id:"hdplatform/stacks/instance/routing/rip",title:"RIP",description:"Support for Routing Information Protocol (RIP v1/v2)",source:"@site/docs/hdplatform/stacks/instance/routing/rip.md",sourceDirName:"hdplatform/stacks/instance/routing",slug:"/hdplatform/stacks/instance/routing/rip",permalink:"/hdplatform/stacks/instance/routing/rip",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adcSidebar",previous:{title:"osfp",permalink:"/hdplatform/stacks/instance/routing/osfp"},next:{title:"SNMP",permalink:"/hdplatform/stacks/instance/integration/snmp"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3}],c={toc:p};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rip"},"RIP"),(0,a.kt)("p",null,"Support for Routing Information Protocol (RIP v1/v2)"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"The Routing Information Protocol (RIP) is one of the oldest distance-vector routing protocols which employs the hop count as a routing metric. RIP prevents routing loops by implementing a limit on the number of hops allowed in a path from source to destination. The largest number of hops allowed for RIP is 15, which limits the size of networks that RIP can support."),(0,a.kt)("p",null,"RIPv2 suffers from scalability issues due to a relatively low maximum hop count of 15 routing devices. Compared to more modern dynamic routing protocols, RIPv2\u2019s methods for selecting optimal routes and the substantial convergence time it takes to recalculate paths renders it nearly obsolete."),(0,a.kt)("p",null,"For compatibility, Haltdos solution supports RIP v1 and RIP v2. This section details how to configure Haltdos to support RIP v1/2."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rip",src:n(95897).Z,width:"1506",height:"532"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack > Instances > Instance > Routing > RIP")),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable RIP Routing"),(0,a.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,a.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Listening IP"),(0,a.kt)("td",{parentName:"tr",align:null},"Listening IP"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the configuration"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))))}u.isMDXComponent=!0},95897:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/rip-7d8dc039eff740a0ca024bf171aef633.png"}}]);