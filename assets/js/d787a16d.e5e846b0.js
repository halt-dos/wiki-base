"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7794],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),g=p(n),u=a,m=g["".concat(s,".").concat(u)]||g[u]||d[u]||o;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function u(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},29017:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="General Settings",l={unversionedId:"ddos/docs/profile/general_settings",id:"ddos/docs/profile/general_settings",title:"General Settings",description:"For inspect the packet",source:"@site/docs/ddos/docs/profile/general_settings.md",sourceDirName:"ddos/docs/profile",slug:"/ddos/docs/profile/general_settings",permalink:"/wiki/ddos/docs/profile/general_settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"ddosSidebar",previous:{title:"Profile",permalink:"/wiki/ddos/docs/profile/"},next:{title:"Detection",permalink:"/wiki/ddos/docs/profile/detection"}},s={},p=[{value:"<strong>How to Go:</strong>",id:"how-to-go",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Graceful Startup Period</strong>",id:"graceful-startup-period",level:5},{value:"<strong>SSL Renegotiation Threshold</strong>",id:"ssl-renegotiation-threshold",level:5},{value:"<strong>Anti-Scanning Threshold</strong>",id:"anti-scanning-threshold",level:5}],c={toc:p};function d(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"general-settings"},"General Settings"),(0,a.kt)("p",null,"For inspect the packet"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"General settings evaluates the data part and the header of a packet that is transmitted through an inspection point, weeding out any non-compliance to protocol, spam, viruses, intrusions, and any other defined criteria to block the packet from passing through the inspection point."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"general_setting",src:n(56575).Z,width:"1278",height:"427"})),(0,a.kt)("h3",{id:"how-to-go"},(0,a.kt)("strong",{parentName:"h3"},"How to Go:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profile > General Settings"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Enable/Disable the settings")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on Save Changes."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Protocols"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Graceful Startup Period"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"30")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL Renegotiation Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Anti-Scanning Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"5")))),(0,a.kt)("h3",{id:"description"},(0,a.kt)("strong",{parentName:"h3"},"Description:")),(0,a.kt)("h5",{id:"protocol"},(0,a.kt)("strong",{parentName:"h5"},"Protocol")),(0,a.kt)("p",null,"Select the protocol name for inspection of the packets"),(0,a.kt)("h5",{id:"graceful-startup-period"},(0,a.kt)("strong",{parentName:"h5"},"Graceful Startup Period")),(0,a.kt)("p",null,"Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)"),(0,a.kt)("h5",{id:"ssl-renegotiation-threshold"},(0,a.kt)("strong",{parentName:"h5"},"SSL Renegotiation Threshold")),(0,a.kt)("p",null,"Users can specify the maximum allowed SSL negotiations in a connection."),(0,a.kt)("h5",{id:"anti-scanning-threshold"},(0,a.kt)("strong",{parentName:"h5"},"Anti-Scanning Threshold")),(0,a.kt)("p",null,"Users can specify thresholds in pps to block network scanning attempts."))}d.isMDXComponent=!0},56575:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ddos4-bfa78dee13dd5389eec14638f78f1faa.png"}}]);