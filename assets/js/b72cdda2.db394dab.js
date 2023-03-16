"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[40652],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85801:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:1},i="Operational Settings",o={unversionedId:"products/ddos/listeners/settings",id:"products/ddos/listeners/settings",title:"Operational Settings",description:"Configure Operational settings of Listeners.",source:"@site/docs/products/ddos/listeners/settings.md",sourceDirName:"products/ddos/listeners",slug:"/products/ddos/listeners/settings",permalink:"/products/ddos/listeners/settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Listeners",permalink:"/products/ddos/listeners/"},next:{title:"SSL Settings",permalink:"/products/ddos/listeners/ssl_setting"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Enable IPv6",id:"enable-ipv6",level:4},{value:"Enable HTTP 2.0",id:"enable-http-20",level:4},{value:"Max Concurrent Connection",id:"max-concurrent-connection",level:4},{value:"Server Aliases",id:"server-aliases",level:4},{value:"Virtual IPs",id:"virtual-ips",level:4},{value:"Add Port",id:"add-port",level:4}],c={toc:p};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"operational-settings"},"Operational Settings"),(0,a.kt)("p",null,"Configure Operational settings of Listeners."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Users are allowed to configure many operational settings for the Listners."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"listner-setting",src:n(49735).Z,width:"1910",height:"745"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Apps > DDoS > Listener > Operational Settings"),".  "),(0,a.kt)("li",{parentName:"ol"},"Configure the settings."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save changes"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable IPv6"),(0,a.kt)("td",{parentName:"tr",align:null},"Enables IPv6 Accepted values: Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable HTTP 2.0"),(0,a.kt)("td",{parentName:"tr",align:null},"Enables Http 2.0 Accepted values: Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Max Concurent Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify max allowed requests per keep-alive connection : Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server Aliases"),(0,a.kt)("td",{parentName:"tr",align:null},"Listener Identity either domain name or IP address"),(0,a.kt)("td",{parentName:"tr",align:null},"NULL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"VIRTUAL IPS"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify assigned virtual IPs for accepting traffic. Accepted Values Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"NULL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Helps you to add HTTP/S ports for Advance Settings.Accepted values: Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"port",src:n(92553).Z,width:"1912",height:"711"})),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h4",{id:"enable-ipv6"},"Enable IPv6"),(0,a.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,a.kt)("h4",{id:"enable-http-20"},"Enable HTTP 2.0"),(0,a.kt)("p",null,"Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1\nThis option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1  "),(0,a.kt)("h4",{id:"max-concurrent-connection"},"Max Concurrent Connection"),(0,a.kt)("p",null,"Specify max allowed concurrent connections. Set 0 to disable"),(0,a.kt)("h4",{id:"server-aliases"},"Server Aliases"),(0,a.kt)("p",null,"This option specify aliases means familiar name for the listener."),(0,a.kt)("h4",{id:"virtual-ips"},"Virtual IPs"),(0,a.kt)("p",null,"This option specify assigned virtual IPs for accepting traffic."),(0,a.kt)("h4",{id:"add-port"},"Add Port"),(0,a.kt)("p",null,"This option helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port."))}u.isMDXComponent=!0},49735:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/listner_setting-63997453c6791996ba960a0436b743f9.png"},92553:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/port-8257440a8f88aa3cef9d4abe395cb878.png"}}]);