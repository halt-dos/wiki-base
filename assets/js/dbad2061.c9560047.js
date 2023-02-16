"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[47534],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),g=r,m=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},i="Listener Settings",l={unversionedId:"products/adc/listeners/listener_settings",id:"products/adc/listeners/listener_settings",title:"Listener Settings",description:"Make SLB listen on specific ports to accept connections and distribute across one or multiple origin servers.",source:"@site/docs/products/adc/listeners/listener_settings.md",sourceDirName:"products/adc/listeners",slug:"/products/adc/listeners/listener_settings",permalink:"/products/adc/listeners/listener_settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Listeners",permalink:"/products/adc/listeners/"},next:{title:"SSL Settings",permalink:"/products/adc/listeners/ssl_settings"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3},{value:"<strong>Enable IPv6</strong>",id:"enable-ipv6",level:5},{value:"<strong>Enable Http 2.0</strong>",id:"enable-http-20",level:5},{value:"<strong><em>Enable WebSocket</em></strong>",id:"enable-websocket",level:5},{value:"<strong>Enable HTTP Keepalive</strong>",id:"enable-http-keepalive",level:5},{value:"<strong>Enable Device Detection</strong>",id:"enable-device-detection",level:5},{value:"<strong>Operational Mode</strong>",id:"operational-mode",level:5},{value:"<strong>Proxy Protocol</strong>",id:"proxy-protocol",level:5},{value:"<strong>Enable Logging</strong>",id:"enable-logging",level:5},{value:"<strong>Client connection Timeout</strong>",id:"client-connection-timeout",level:5},{value:"<strong>Client Resume Timeout</strong>",id:"client-resume-timeout",level:5},{value:"<strong>Max Concurrent Connections</strong>",id:"max-concurrent-connections",level:5},{value:"<strong>Client Keep-Alive Timeout</strong>",id:"client-keep-alive-timeout",level:5},{value:"<strong>HTTP Request Timeout</strong>",id:"http-request-timeout",level:5},{value:"<strong>User Session Duration</strong>",id:"user-session-duration",level:5},{value:"<strong>Session Cookie</strong>",id:"session-cookie",level:5},{value:"<strong>Max Concurrent User Sessions</strong>",id:"max-concurrent-user-sessions",level:5},{value:"<strong>Max Session Exceeded Action</strong>",id:"max-session-exceeded-action",level:5},{value:"<strong>Max Session Forward URL</strong>",id:"max-session-forward-url",level:4},{value:"<strong>Max Session Exceeded Waiting Page</strong>",id:"max-session-exceeded-waiting-page",level:5},{value:"<strong>Remote IP Header</strong>",id:"remote-ip-header",level:5},{value:"<strong>Server Aliases</strong>",id:"server-aliases",level:5},{value:"<strong>Virtual IPs</strong>",id:"virtual-ips",level:5}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"listener-settings"},"Listener Settings"),(0,r.kt)("p",null,"Make SLB listen on specific ports to accept connections and distribute across one or multiple origin servers."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Users are allowed to configure many operational settings for the Listeners."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener settings1",src:n(59293).Z,width:"1830",height:"911"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("a",{parentName:"li",href:"/adc/docs"},(0,r.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,r.kt)("a",{parentName:"li",href:"/products/adc/listeners/listener_settings"},(0,r.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,r.kt)("strong",{parentName:"li"},"Operational Settings")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener settings2",src:n(9423).Z,width:"1575",height:"865"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable IPv6"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Http 2.0"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable WebSocket"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable HTTP Keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Device Detection"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operational Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Reverse Proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Proxy Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Logging"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Connection Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Resume Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Concurrent Connections"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Client Keep-Alive Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Request Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Session Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"60")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Session Cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Concurrent User Sessions"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAX Session Exceeded Action"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Redirect")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Session Forward URL"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Session Exceeded Waiting Page"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Remote IP Header"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Server Aliases"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Virtual IPs"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Listener settings3",src:n(46382).Z,width:"1548",height:"913"})),(0,r.kt)("h3",{id:"description"},"Description:"),(0,r.kt)("h5",{id:"enable-ipv6"},(0,r.kt)("strong",{parentName:"h5"},"Enable IPv6")),(0,r.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,r.kt)("h5",{id:"enable-http-20"},(0,r.kt)("strong",{parentName:"h5"},"Enable Http 2.0")),(0,r.kt)("p",null,"This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. Read more about the differences between the two and how you can get started with HTTP2 today."),(0,r.kt)("h5",{id:"enable-websocket"},(0,r.kt)("strong",{parentName:"h5"},(0,r.kt)("em",{parentName:"strong"},"Enable WebSocket"))),(0,r.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,r.kt)("h5",{id:"enable-http-keepalive"},(0,r.kt)("strong",{parentName:"h5"},"Enable HTTP Keepalive")),(0,r.kt)("p",null,"This option allows users to enable HTTP Keep-alive for client connections. HTTPKeep-Alive can speed up website as the browser only needs to go through the process of connecting to the server once through a single TCP connection."),(0,r.kt)("h5",{id:"enable-device-detection"},(0,r.kt)("strong",{parentName:"h5"},"Enable Device Detection")),(0,r.kt)("p",null,"This option allows users to detect devices and its OS on the client-side in the case of service type HTTP. If the user enabled this option, they can enable the device-based upstream rules."),(0,r.kt)("h5",{id:"operational-mode"},(0,r.kt)("strong",{parentName:"h5"},"Operational Mode")),(0,r.kt)("p",null,"Users are allowed to specify Operational mode for the application. There are two modes can be selected:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Reverse Proxy "),(0,r.kt)("li",{parentName:"ol"},"Transparent")),(0,r.kt)("h5",{id:"proxy-protocol"},(0,r.kt)("strong",{parentName:"h5"},"Proxy Protocol")),(0,r.kt)("p",null,"Users are allowed to specify Proxy protocol for the application."),(0,r.kt)("h5",{id:"enable-logging"},(0,r.kt)("strong",{parentName:"h5"},"Enable Logging")),(0,r.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP\u2019s."),(0,r.kt)("h5",{id:"client-connection-timeout"},(0,r.kt)("strong",{parentName:"h5"},"Client connection Timeout")),(0,r.kt)("p",null,"Connection timeout is a time period within which a connection between a client and a server must be established. This option is only applicable in the case of service type HTTP & TCP. This option allows users to set the connection timeout values from client-side."),(0,r.kt)("h5",{id:"client-resume-timeout"},(0,r.kt)("strong",{parentName:"h5"},"Client Resume Timeout")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify the time within which a lost client connection can resume."),(0,r.kt)("h5",{id:"max-concurrent-connections"},(0,r.kt)("strong",{parentName:"h5"},"Max Concurrent Connections")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify max allowed concurrent connections. By default, Set 0 to disable."),(0,r.kt)("h5",{id:"client-keep-alive-timeout"},(0,r.kt)("strong",{parentName:"h5"},"Client Keep-Alive Timeout")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify a timeout of keep-alive connections with clients."),(0,r.kt)("h5",{id:"http-request-timeout"},(0,r.kt)("strong",{parentName:"h5"},"HTTP Request Timeout")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout."),(0,r.kt)("h5",{id:"user-session-duration"},(0,r.kt)("strong",{parentName:"h5"},"User Session Duration")),(0,r.kt)("p",null,"Users can specify max allowed user session duration in minutes."),(0,r.kt)("h5",{id:"session-cookie"},(0,r.kt)("strong",{parentName:"h5"},"Session Cookie")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the session cookie for tracking active users."),(0,r.kt)("h5",{id:"max-concurrent-user-sessions"},(0,r.kt)("strong",{parentName:"h5"},"Max Concurrent User Sessions")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify max allowed concurrent user sessions. Set 0 to disable."),(0,r.kt)("h5",{id:"max-session-exceeded-action"},(0,r.kt)("strong",{parentName:"h5"},"Max Session Exceeded Action")),(0,r.kt)("p",null,"Users can specify the action to take when max session count exceeds."),(0,r.kt)("h4",{id:"max-session-forward-url"},(0,r.kt)("strong",{parentName:"h4"},"Max Session Forward URL")),(0,r.kt)("p",null,"Users can specify the redirected URL when max session count exceeds. This option will only visible when user has selected redirect option under 'Max Session Exceeded Action' option."),(0,r.kt)("h5",{id:"max-session-exceeded-waiting-page"},(0,r.kt)("strong",{parentName:"h5"},"Max Session Exceeded Waiting Page")),(0,r.kt)("p",null,"Users are allowed to specify the waiting room page to show when max session count exceeds. This option will only visible when user has selected send custom response option under 'Max Session Exceeded Waiting Page' option."),(0,r.kt)("h5",{id:"remote-ip-header"},(0,r.kt)("strong",{parentName:"h5"},"Remote IP Header")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the header for extracting remote IP."),(0,r.kt)("h5",{id:"server-aliases"},(0,r.kt)("strong",{parentName:"h5"},"Server Aliases")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify named aliases for this listener."),(0,r.kt)("h5",{id:"virtual-ips"},(0,r.kt)("strong",{parentName:"h5"},"Virtual IPs")),(0,r.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify assigned virtual IPs for accepting traffic."))}d.isMDXComponent=!0},59293:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersetting-fef8374fa723aac77962b247603b5df1.png"},9423:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersetting1-b604605348545316e66312c63a0d8493.png"},46382:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersetting2-d9167ea7dcd5aea3c6c7ec5b28015d99.png"}}]);