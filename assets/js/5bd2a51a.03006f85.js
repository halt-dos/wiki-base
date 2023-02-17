"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[77655],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(n),c=l,k=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return n?a.createElement(k,r(r({ref:t},d),{},{components:n})):a.createElement(k,r({ref:t},d))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},75711:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const i={sidebar_position:0},r="Operational Settings",o={unversionedId:"community/docs/waf/operational",id:"version-6.0/community/docs/waf/operational",title:"Operational Settings",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/operational.md",sourceDirName:"community/docs/waf",slug:"/community/docs/waf/operational",permalink:"/v6/community/docs/waf/operational",draft:!1,tags:[],version:"6.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar",previous:{title:"Overview",permalink:"/v6/community/docs/overview"},next:{title:"SSL Settings",permalink:"/v6/community/docs/waf/ssl_settings"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Enable IPv6",id:"enable-ipv6",level:4},{value:"Enable HTTP 2.0",id:"enable-http-20",level:4},{value:"Web-socket Enabled",id:"web-socket-enabled",level:4},{value:"Enable Logging",id:"enable-logging",level:4},{value:"Enable Static Extension Logging",id:"enable-static-extension-logging",level:4},{value:"Enable Error Handling",id:"enable-error-handling",level:4},{value:"Operational Mode",id:"operational-mode",level:4},{value:"Application Type",id:"application-type",level:4},{value:"Connection Pool Size",id:"connection-pool-size",level:4},{value:"Client Keep-Alive Timeout",id:"client-keep-alive-timeout",level:4},{value:"Upstream Keep-Alive Timeout",id:"upstream-keep-alive-timeout",level:4},{value:"Operational Mode",id:"operational-mode-1",level:4},{value:"Limit MAX Collection",id:"limit-max-collection",level:4},{value:"Client Body Timeout",id:"client-body-timeout",level:4},{value:"Client Header Timeout",id:"client-header-timeout",level:4},{value:"Client Send Timeout",id:"client-send-timeout",level:4},{value:"Static Extensions",id:"static-extensions",level:4},{value:"Maximum HTTP Body Size",id:"maximum-http-body-size",level:4},{value:"Maximum HTTP Header Size",id:"maximum-http-header-size",level:4},{value:"Proxy HTTP Version",id:"proxy-http-version",level:4},{value:"Proxy Buffers",id:"proxy-buffers",level:4},{value:"Proxy Buffer Size",id:"proxy-buffer-size",level:4},{value:"Client IP Location",id:"client-ip-location",level:4},{value:"Host Header",id:"host-header",level:4},{value:"Server Aliases",id:"server-aliases",level:4},{value:"Virtual IPs",id:"virtual-ips",level:4},{value:"Add Port",id:"add-port",level:4}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"operational-settings"},"Operational Settings"),(0,l.kt)("h3",{id:"overview"},"Overview"),(0,l.kt)("p",null,"Users are allowed to configure many operational settings for the Listeners configured under the WAF. These setting specifies all the operational configuration for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Operational Settings",src:n(47123).Z,width:"1907",height:"904"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Operational Settings",src:n(45334).Z,width:"1920",height:"987"})),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Operational Settings",src:n(50592).Z,width:"1920",height:"987"})),(0,l.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Go to ",(0,l.kt)("strong",{parentName:"li"},"WAF")," > ",(0,l.kt)("strong",{parentName:"li"},"Operational"),"."),(0,l.kt)("li",{parentName:"ol"},"Configure the settings."),(0,l.kt)("li",{parentName:"ol"},"Click on Save changes.")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable IPv6"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable HTTP 2.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Host Check"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"WebSocket Enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Static Extension Logging"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"False")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enable Error Handling"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"True")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Security Mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Bypass")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Application Type"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Website")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Connection Pool Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Keep-Alive Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Upstream Keep-Alive Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Operational Mode"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Reverse-Proxy")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Limit Max Connections"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Body Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Header Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client Send Timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"300")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Static Extentions"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"default extention")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum HTTP body size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"10485760")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Maximum HTTP header size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"4096")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy HTTP Version"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"Any")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy Buffers"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Proxy Buffer Size"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Client IP Location"),(0,l.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,l.kt)("td",{parentName:"tr",align:null},"SRC IP")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Host Header"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Server Aliases"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Virtual IPs"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,l.kt)("h3",{id:"description"},"Description"),(0,l.kt)("h4",{id:"enable-ipv6"},"Enable IPv6"),(0,l.kt)("p",null,"This option allows user to enable traffic over IPv6 and applicable in the case of all service types. Internet Protocol version 6 is the most recent version of the Internet Protocol that allows communication to take place over the network."),(0,l.kt)("h4",{id:"enable-http-20"},"Enable HTTP 2.0"),(0,l.kt)("p",null,"Specify if the WAF should allow HTTP 2.0 requests. By default, it supports other versions like HTTP 1.1\nThis option allows user to specify whether the solution supports HTTP 2.0 request. HTTP/2 aims to be a faster, more efficient protocol than HTTP. By default, it supports other versions like HTTP 1.1 "),(0,l.kt)("h4",{id:"web-socket-enabled"},"Web-socket Enabled"),(0,l.kt)("p",null,"This option allows user to enable web-socket support for servers or server group. It is a communication, an upgraded, quick, and seamless protocol to use when one needs to establish constant client-server communication over a single TCP connection."),(0,l.kt)("h4",{id:"enable-logging"},"Enable Logging"),(0,l.kt)("p",null,"This option allows user to enable access logs in the case of service type HTTP & TCP."),(0,l.kt)("h4",{id:"enable-static-extension-logging"},"Enable Static Extension Logging"),(0,l.kt)("p",null,"This option allows user to specify whether to do log requests for static extension."),(0,l.kt)("h4",{id:"enable-error-handling"},"Enable Error Handling"),(0,l.kt)("p",null,"This option allows user to specify whether to enable error handling by firewall."),(0,l.kt)("h4",{id:"operational-mode"},"Operational Mode"),(0,l.kt)("p",null,"This option allows user to specify operational mode for every given security profile. Different operational modes are:  "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"MITIGATION"),":  In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped.  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"BYPASSED"),": In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.  "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"RECORD"),": In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  ")),(0,l.kt)("h4",{id:"application-type"},"Application Type"),(0,l.kt)("p",null,"This option allows users to specify the type of application ( i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems."),(0,l.kt)("h4",{id:"connection-pool-size"},"Connection Pool Size"),(0,l.kt)("p",null,"This option allows user to specify the connection pool size with upstream."),(0,l.kt)("h4",{id:"client-keep-alive-timeout"},"Client Keep-Alive Timeout"),(0,l.kt)("p",null,"This option specify the timeout of keep-alive connections of clients. Set 0 to disable."),(0,l.kt)("h4",{id:"upstream-keep-alive-timeout"},"Upstream Keep-Alive Timeout"),(0,l.kt)("p",null,"This option specify timeout of keep-alive connections of upstream. Set 0 to disable."),(0,l.kt)("h4",{id:"operational-mode-1"},"Operational Mode"),(0,l.kt)("p",null,"This option allows users to specify operational mode for the listener."),(0,l.kt)("h4",{id:"limit-max-collection"},"Limit MAX Collection"),(0,l.kt)("p",null,"Specify max allowed concurrent connections. Set 0 to disable"),(0,l.kt)("h4",{id:"client-body-timeout"},"Client Body Timeout"),(0,l.kt)("p",null,"This option specify the timeout for receiving the request body."),(0,l.kt)("h4",{id:"client-header-timeout"},"Client Header Timeout"),(0,l.kt)("p",null,"Specify timeout for receiving request header"),(0,l.kt)("h4",{id:"client-send-timeout"},"Client Send Timeout"),(0,l.kt)("p",null,"Specify timeout for send response"),(0,l.kt)("h4",{id:"static-extensions"},"Static Extensions"),(0,l.kt)("p",null,"This option specify the list of allowed static extensions that don't require security validation."),(0,l.kt)("h4",{id:"maximum-http-body-size"},"Maximum HTTP Body Size"),(0,l.kt)("p",null,"This field specifies the maximum allowed HTTP body size (in bytes) from a single client IP. If the size exceeds, then the request gets dropped. By default, it is 10485760 bytes."),(0,l.kt)("p",null,"Note: In the case of HTTP/0.9, no headers get transmitted."),(0,l.kt)("h4",{id:"maximum-http-header-size"},"Maximum HTTP Header Size"),(0,l.kt)("p",null,"This field specifies the maximum allowed HTTP Header size (in bytes) from a single client IP. If size exceeds, then the request gets dropped. By default, it is 4096 bytes.\nIt comprises types, capabilities, and versions of the browser that makes the request. These elements help in returning compatible data."),(0,l.kt)("h4",{id:"proxy-http-version"},"Proxy HTTP Version"),(0,l.kt)("p",null,"Specify http version used while connecting upstream server."),(0,l.kt)("h4",{id:"proxy-buffers"},"Proxy Buffers"),(0,l.kt)("p",null,"This option specify the number of buffers used for reading a response from the server for a single connection."),(0,l.kt)("h4",{id:"proxy-buffer-size"},"Proxy Buffer Size"),(0,l.kt)("p",null,"This option specify the size of the buffer used for reading the first part of the server response. Proper value can cause improper utilization of proxy buffer optimally for each request."),(0,l.kt)("h4",{id:"client-ip-location"},"Client IP Location"),(0,l.kt)("p",null,"This option specify the location of the client IP."),(0,l.kt)("h4",{id:"host-header"},"Host Header"),(0,l.kt)("p",null,"This option specify the host header allowed by the backend, if it's different from the listener sub-domain. This allows the incoming request to alter the host header in each request and transmit it to the backend server."),(0,l.kt)("h4",{id:"server-aliases"},"Server Aliases"),(0,l.kt)("p",null,"This option specify aliases means familiar name for the listener."),(0,l.kt)("h4",{id:"virtual-ips"},"Virtual IPs"),(0,l.kt)("p",null,"This option specify assigned virtual IPs for accepting traffic."),(0,l.kt)("h4",{id:"add-port"},"Add Port"),(0,l.kt)("p",null,"This option helps you to add HTTP/S ports for Advance Settings. Here you can unique port either HTTP  or HTTPS enabled configuration without changing backend server port.\n",(0,l.kt)("strong",{parentName:"p"},"Note:")," Proxy Buffer and Proxy Buffer are sensitive configurations that can affect applications that should be configured with prior knowledge."))}u.isMDXComponent=!0},47123:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Lsettings-c9f7756e6a30ac6a3794ecc225d906d4.png"},45334:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Lsettings2-1d2767ba03b40c96c476db174f8e4935.png"},50592:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/Lsettings3-4ccc9efa9781d40f51fd9d3d4ab54172.png"}}]);