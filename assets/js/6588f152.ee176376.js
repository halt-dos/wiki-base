"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[524],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,f=h["".concat(s,".").concat(m)]||h[m]||u[m]||r;return n?i.createElement(f,o(o({ref:t},p),{},{components:n})):i.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},95184:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(87462),a=(n(67294),n(3905));const r={sidebar_position:2},o="High Availiability",l={unversionedId:"hdplatform/stacks/instance/high_availiability",id:"hdplatform/stacks/instance/high_availiability",title:"High Availiability",description:"---",source:"@site/docs/hdplatform/stacks/instance/high_availiability.md",sourceDirName:"hdplatform/stacks/instance",slug:"/hdplatform/stacks/instance/high_availiability",permalink:"/hdplatform/stacks/instance/high_availiability",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"adcSidebar",previous:{title:"Operational Settings",permalink:"/hdplatform/stacks/instance/operational_settings"},next:{title:"VRRP",permalink:"/hdplatform/stacks/instance/vrrp"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"high-availiability"},"High Availiability"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"High availability (HA) is the ability of a system to operate continuously without failing for a designated period of time. HA works to ensure a system meets an agreed-upon operational performance level. Haltdos platform provides built-in capability for high availability using VRRP technology."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For more information on the deployment architecture, please see Infrastructure & Deployment.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Cluster / HA Active-Active")),(0,a.kt)("p",null,"Haltdos platform consists of Stacks for multi-tenancy. Each Stack corresponds to a Cluster that contains one or more instances. Every instance in the stack runs the same policy as defined by the user. These instances synchronise data in real-time among themselves using Auxiliary Plane. These instances therefore run in Active-Active (if 2 instances) or Cluster mode (more than 2 instances) by design."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HA Active-Passive")),(0,a.kt)("p",null,"To configure instances in Active-Passive mode, configure HA settings in each instances. In Layer 3 mode, they will share the same VIP and depending upon the status of the instance, any one of them will be actively handling the traffic. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"high availiability",src:n(41248).Z,width:"1734",height:"779"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack > Instances > (Select Instance) > HA")),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HA MODE")),(0,a.kt)("p",null,"Specify high availability mode between multiple mitigation instances"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PRIMARY INSTANCE")),(0,a.kt)("p",null,"Enable if this instance is primary"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HA PORT")),(0,a.kt)("p",null,"Specify port over which mitigation instances communicate with each other"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PEER CHECK INTERVAL")),(0,a.kt)("p",null,"Specify the time in milliseconds (ms) after which one mitigation instance checks the health of its peer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PEER FAILURE THRESHOLD")),(0,a.kt)("p",null,"Specify the number of failed peer health checks after which a mitigation instance consider its peer unhealthy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"PEER RECOVERY THRESHOLD")),(0,a.kt)("p",null,"Specify the number of successful peer health checks after which a mitigation instance changes its peer status from unhealthy to healthy"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MAXIMUM ALLOWED FLAPS")),(0,a.kt)("p",null,"Specify allowed number of flaps after which the primary instance goes into hardware bypass"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"ENABLE BANDWIDTH MONITORING")),(0,a.kt)("p",null,"Specify if bandwidth monitoring should be used to trigger failover in HA cluster"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MINIMUM BANDWIDTH")),(0,a.kt)("p",null,"Specify minimum bandwidth in bps for specified interval in seconds below which failover is triggered"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LINK MONITORING INTERVAL")),(0,a.kt)("p",null,"Specify interval in milliseconds (ms) for periodic link monitoring between multiple mitigation instances"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"MINIMUM ACTIVE LINKS")),(0,a.kt)("p",null,"Specify the minimum allowed active link pairs below which the solution will mark itself down"))}u.isMDXComponent=!0},41248:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/high_availability-98e4ac82a1e5c60ae67645e6cfc2e603.png"}}]);