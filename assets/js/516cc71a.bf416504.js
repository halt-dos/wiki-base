"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[31999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,m=c["".concat(i,".").concat(d)]||c[d]||h[d]||o;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},50361:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:6},l="Monitors",s={unversionedId:"products/waf/listener/monitor",id:"version-6.0/products/waf/listener/monitor",title:"Monitors",description:"Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group.",source:"@site/versioned_docs/version-6.0/products/waf/listener/monitor.md",sourceDirName:"products/waf/listener",slug:"/products/waf/listener/monitor",permalink:"/v6/products/waf/listener/monitor",draft:!1,tags:[],version:"6.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"Servers",permalink:"/v6/products/waf/listener/server_groups/servers"},next:{title:"Rules",permalink:"/v6/products/waf/listener/rules/"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"How to you use:",id:"how-to-you-use",level:3},{value:"Description",id:"description",level:3}],u={toc:p};function h(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"monitors"},"Monitors"),(0,n.kt)("p",null,"Continually test your upstream servers, avoid the servers that have failed, and gracefully add the recovered servers into the server group."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Monitoring provides a comprehensive overview of the status and performance of the Server Group  and/or individual real servers inside the server group. If a monitor is attached to a server group, then it will get applied to all the servers inside that group automatically. If a monitor is attached to a particular server then it will override the configuration of the server-group monitor. Health Checks computes an overall health state for each upstream server in the listener. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Monitors",src:r(39390).Z,width:"1494",height:"773"})),(0,n.kt)("h3",{id:"how-to-you-use"},"How to you use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to WAF > Listeners > Monitors"),(0,n.kt)("li",{parentName:"ol"},"Click on Add Monitor"),(0,n.kt)("li",{parentName:"ol"},"Click on the monitor name to configure the Health Check and click on Save changes"),(0,n.kt)("li",{parentName:"ol"},"Now go to WAF > Listener > Server Group "),(0,n.kt)("li",{parentName:"ol"},"Add the Monitor to the server group / or server as required  ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Monitor Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enabled Health Check"),(0,n.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,n.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Health Check Type"),(0,n.kt)("td",{parentName:"tr",align:null},"TCP/HTTP/SSL Hello/HTTPS/etc"),(0,n.kt)("td",{parentName:"tr",align:null},"TCP")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Port"),(0,n.kt)("td",{parentName:"tr",align:null},"Port Number"),(0,n.kt)("td",{parentName:"tr",align:null},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Check URI"),(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"GET")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Status"),(0,n.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,n.kt)("td",{parentName:"tr",align:null},"200")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Match Content"),(0,n.kt)("td",{parentName:"tr",align:null},"Content to be matched in header/body"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fail Threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pass Threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Monitor Name:"),"\nSpecify a user friendly name to monitor.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Enable Health Check:"),"\nEnable to periodically check the health of upstream servers by sending special health\u2011check requests to each server and verifying the correct response.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Health Check Interval:"),"\nSet the seconds, say 10, then every 10 seconds WAF sends a request for \u201c/\u201d to each server/server group. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fail Threshold:"),"\nSets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt).\n")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Pass Threshold:"),"\nSets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Health Check Type:")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TCP"),":\nHealth check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SSL HELLO"),":\nHealth check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP"),":\nHealth check sends HTTP request, if unable to receive response, then we make that server unhealthy."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTPS"),":\nHealth check sends HTTPS request, if unable to receive response, then we make that server as unhealthy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DNS"),":\nHealth check sends DNS query, if unable to receive response, then we make that server as unhealthy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ICMP"),":\nHealth check sends ICMP ping, if unable to receive response, then we make that server as unhealthy"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SNMP"),":\nHealth check sends SNMP query, if unable to receive response, then we make that server as unhealthy. For SNMP, measurement can be based on CPU, RAM or both. User will also need to specify maximum threshold (percentage) for marking the health of the server as up. SNMP v2,v2c and v3 are supported."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Custom Script"),":\nHealth check runs custom script (shell script, perl script or Lua script). The script is executed with parameters of server IP and server Port. If the script responds with 1, heath check is passed. If the script responds with 0, we make that server as unhealthy")),(0,n.kt)("ol",{start:7},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Port"),":\nSpecify a new port with the port parameter")))}h.isMDXComponent=!0},39390:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Monitors-e8a974f0d51a385047d38108338678ff.png"}}]);