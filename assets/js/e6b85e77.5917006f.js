"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[9446],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=l,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(k,r(r({ref:t},c),{},{components:n})):a.createElement(k,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79291:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={sidebar_position:1},r="Listener Settings",o={unversionedId:"adc/listeners/listener_settings",id:"adc/listeners/listener_settings",title:"Listener Settings",description:"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers.",source:"@site/docs/adc/listeners/listener_settings.md",sourceDirName:"adc/listeners",slug:"/adc/listeners/listener_settings",permalink:"/adc/listeners/listener_settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Listeners",permalink:"/adc/listeners/"},next:{title:"SSL Settings",permalink:"/adc/listeners/ssl_settings"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enable IPv6",id:"enable-ipv6",level:4},{value:"Enable Http 2.0",id:"enable-http-20",level:4},{value:"Enable WebSocket",id:"enable-websocket",level:4},{value:"Enable HTTP Keepalive",id:"enable-http-keepalive",level:4},{value:"Enable Device Detection",id:"enable-device-detection",level:4},{value:"Enable Logging",id:"enable-logging",level:4},{value:"Log Format",id:"log-format",level:4},{value:"Client connection Timeout",id:"client-connection-timeout",level:4},{value:"Client Resume Timeout",id:"client-resume-timeout",level:4},{value:"Max Concurrent Connections",id:"max-concurrent-connections",level:4},{value:"Client Keep-Alive Timeout",id:"client-keep-alive-timeout",level:4},{value:"HTTP Request Timeout",id:"http-request-timeout",level:4},{value:"User Session Duration",id:"user-session-duration",level:4},{value:"Session Cookie",id:"session-cookie",level:4},{value:"Max Concurrent User Sessions",id:"max-concurrent-user-sessions",level:4},{value:"Max Session Exceeded Action",id:"max-session-exceeded-action",level:4},{value:"MAX Session Forward URL",id:"max-session-forward-url",level:4},{value:"Remote IP Header",id:"remote-ip-header",level:4},{value:"Server Aliases",id:"server-aliases",level:4},{value:"Virtual IPs",id:"virtual-ips",level:4}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"listener-settings"},"Listener Settings"),(0,l.kt)("p",null,"Make WAF listen on specific ports to accept connections and distribute across one or multiple origin servers."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"overview"},"Overview"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Users are allowed to configure many operational settings for the Listeners.")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Listener settings1",src:n(98248).Z,width:"1256",height:"643"})),(0,l.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Go to ",(0,l.kt)("a",{parentName:"p",href:"/adc/docs"},(0,l.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,l.kt)("a",{parentName:"p",href:"../listeners/"},(0,l.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,l.kt)("strong",{parentName:"p"},"Operational Settings"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure your settings")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Listener settings2",src:n(57147).Z,width:"1229",height:"665"})),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,l.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,l.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable IPv6"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Http 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable WebSocket"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable HTTP Keepalive"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Device Detection"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"Enabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Log Format"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Connection Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"30")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Resume Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max Concurrent Connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Keep-Alive Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"HTTP Request Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"User Session Duration"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"60")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Session Cookie"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Max Concurrent User Sessions"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAX SESSION EXCEEDED ACTION"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Redirect")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"MAX SESSION FORWARD URL"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Remote IP Header"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Aliases"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Virtual IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Listener settings3",src:n(38473).Z,width:"1238",height:"571"})),(0,l.kt)("h4",{id:"description"},"Description:"),(0,l.kt)("h4",{id:"enable-ipv6"},"Enable IPv6"),(0,l.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,l.kt)("h4",{id:"enable-http-20"},"Enable Http 2.0"),(0,l.kt)("p",null,"This option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. Read more about the differences between the two and how you can get started with HTTP2 today."),(0,l.kt)("h4",{id:"enable-websocket"},"Enable WebSocket"),(0,l.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,l.kt)("h4",{id:"enable-http-keepalive"},"Enable HTTP Keepalive"),(0,l.kt)("p",null,"This option allows users to enable HTTP Keep-alive for client connections. HTTPKeep-Alive can speed up website as the browser only needs to go through the process of connecting to the server once through a single TCP connection."),(0,l.kt)("h4",{id:"enable-device-detection"},"Enable Device Detection"),(0,l.kt)("p",null,"This option allows users to detect devices and its OS on the client-side in the case of service type HTTP. If the user enabled this option, they can enable the device-based upstream rules."),(0,l.kt)("h4",{id:"enable-logging"},"Enable Logging"),(0,l.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP.s"),(0,l.kt)("h4",{id:"log-format"},"Log Format"),(0,l.kt)("p",null,"This option allows users to request information to be logged. All logs in JSON format. Users can select from SRC, PORT, COUNTRY, METHODE, URI, UA, UPSTREAM, STATUS, REQUEST / RESPONSE SIZE, DEVICE & OS. All these logs method works for service type HTTP only, SRC, PORT, COUNTRY, & UPSTREAM works for service type TCP only."),(0,l.kt)("h4",{id:"client-connection-timeout"},"Client connection Timeout"),(0,l.kt)("p",null,"Connection timeout is a time period within which a connection between a client and a server must be established. This option is only applicable in the case of service type HTTP & TCP. This option allows users to set the connection timeout values from client-side."),(0,l.kt)("h4",{id:"client-resume-timeout"},"Client Resume Timeout"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify the time within which a lost client connection can resume."),(0,l.kt)("h4",{id:"max-concurrent-connections"},"Max Concurrent Connections"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP & TCP. This option allows users to specify max allowed concurrent connections. By default, Set 0 to disable."),(0,l.kt)("h4",{id:"client-keep-alive-timeout"},"Client Keep-Alive Timeout"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify a timeout of keep-alive connections with clients."),(0,l.kt)("h4",{id:"http-request-timeout"},"HTTP Request Timeout"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout."),(0,l.kt)("h4",{id:"user-session-duration"},"User Session Duration"),(0,l.kt)("p",null,"Users can specify max allowed user session duration in minutes."),(0,l.kt)("h4",{id:"session-cookie"},"Session Cookie"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the session cookie for tracking active users."),(0,l.kt)("h4",{id:"max-concurrent-user-sessions"},"Max Concurrent User Sessions"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify max allowed concurrent user sessions. Set 0 to disable."),(0,l.kt)("h4",{id:"max-session-exceeded-action"},"Max Session Exceeded Action"),(0,l.kt)("p",null,"Users can specify the action to take when max session count exceeds."),(0,l.kt)("h4",{id:"max-session-forward-url"},"MAX Session Forward URL"),(0,l.kt)("p",null,"Users can specify the redirected URL when max session count exceeds."),(0,l.kt)("h4",{id:"remote-ip-header"},"Remote IP Header"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify the header for extracting remote IP."),(0,l.kt)("h4",{id:"server-aliases"},"Server Aliases"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify named aliases for this listener."),(0,l.kt)("h4",{id:"virtual-ips"},"Virtual IPs"),(0,l.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify assigned virtual IPs for accepting traffic."))}u.isMDXComponent=!0},98248:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersettings1-5965b89257c2a7319305ee61ef8ee437.png"},57147:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersettings2-4946dadcd178a701e7a2723c24bde11a.png"},38473:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/listenersettings3-9643646ba4041e736a6f8c495026e8fd.png"}}]);