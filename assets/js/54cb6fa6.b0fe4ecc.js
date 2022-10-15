"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1601],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=s(n),f=a,g=c["".concat(p,".").concat(f)]||c[f]||d[f]||o;return n?r.createElement(g,i(i({ref:e},u),{},{components:n})):r.createElement(g,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},33959:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},i="Traffic Shaping",l={unversionedId:"ddos/profile/traffic_shaping",id:"ddos/profile/traffic_shaping",title:"Traffic Shaping",description:"Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks.",source:"@site/docs/ddos/profile/traffic_shaping.md",sourceDirName:"ddos/profile",slug:"/ddos/profile/traffic_shaping",permalink:"/ddos/profile/traffic_shaping",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Network Rules",permalink:"/ddos/profile/network_rules"},next:{title:"Signature",permalink:"/ddos/profile/signature"}},p={},s=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Inbound Rate</strong>",id:"inbound-rate",level:5},{value:"<strong>Inbound Burst</strong>",id:"inbound-burst",level:5},{value:"<strong>Outbound Rate</strong>",id:"outbound-rate",level:5},{value:"<strong>Outbound Burst</strong>",id:"outbound-burst",level:5}],u={toc:s};function d(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"traffic-shaping"},"Traffic Shaping"),(0,a.kt)("p",null,"Traffic shaping is a powerful and flexible way to ensure quality of service and defend against bandwidth-abusing distributed denial-of- service (DDoS) attacks."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Traffic shaping is a computer network bandwidth management technique that delays some or all data-gram in line with a traffic profile to improve latency, optimize performance, or increase usable bandwidth for certain types of packets by delaying other types."),(0,a.kt)("p",null,"It support protocols IPv4, IPv6, TCP, UDP, ICMP, IGMP, DNS, SIP, SNMP, NTP, SMTP, IRC, FTP."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"traffic_shaping",src:n(70706).Z,width:"1519",height:"529"})),(0,a.kt)("h3",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h3"},"How to Use:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profile > Traffic Shaping"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure the settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Save Changes"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Inbound  Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer(Mbps)"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Inbound Burst"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer(Mbps)"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Outbound Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer(Mbps)"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Outbound Burst"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer(Mbps)"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("h3",{id:"description"},(0,a.kt)("strong",{parentName:"h3"},"Description:")),(0,a.kt)("h5",{id:"inbound-rate"},(0,a.kt)("strong",{parentName:"h5"},"Inbound Rate")),(0,a.kt)("p",null,"Specify allowed overall inbound traffic rate"),(0,a.kt)("h5",{id:"inbound-burst"},(0,a.kt)("strong",{parentName:"h5"},"Inbound Burst")),(0,a.kt)("p",null,"Specify allowed overall inbound traffic burst"),(0,a.kt)("h5",{id:"outbound-rate"},(0,a.kt)("strong",{parentName:"h5"},"Outbound Rate")),(0,a.kt)("p",null,"Specify allowed overall outbound traffic rate"),(0,a.kt)("h5",{id:"outbound-burst"},(0,a.kt)("strong",{parentName:"h5"},"Outbound Burst")),(0,a.kt)("p",null,"Specify allowed overall outbound traffic burst"))}d.isMDXComponent=!0},70706:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ddos18-2900a7e99d19daf0ad627893d8990395.png"}}]);