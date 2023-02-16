"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[54002],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),h=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=h(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=h(r),d=n,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(m,l(l({ref:t},c),{},{components:r})):a.createElement(m,l({ref:t},c))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var h=2;h<o;h++)l[h]=r[h];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},32800:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>h});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:3},l="Server Monitors",i={unversionedId:"community/docs/waf/server_farm/monitors",id:"version-6.0/community/docs/waf/server_farm/monitors",title:"Server Monitors",description:"Overview",source:"@site/versioned_docs/version-6.0/community/docs/waf/server_farm/monitors.md",sourceDirName:"community/docs/waf/server_farm",slug:"/community/docs/waf/server_farm/monitors",permalink:"/v6/community/docs/waf/server_farm/monitors",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Load Balancing",permalink:"/v6/community/docs/waf/server_farm/load_balancing"},next:{title:"WEB Policy",permalink:"/v6/community/docs/waf/policy/web_policy"}},s={},h=[{value:"Overview",id:"overview",level:3},{value:"How to you Use:",id:"how-to-you-use",level:3},{value:"Description",id:"description",level:3},{value:"Monitor Name",id:"monitor-name",level:4},{value:"Enable Health Check",id:"enable-health-check",level:4},{value:"Health Check Interval",id:"health-check-interval",level:4},{value:"Fail Threshold",id:"fail-threshold",level:4},{value:"Pass Threshold",id:"pass-threshold",level:4},{value:"Health Check Type:",id:"health-check-type",level:4},{value:"Check URI",id:"check-uri",level:4},{value:"Match Status",id:"match-status",level:4},{value:"Match Content",id:"match-content",level:4}],c={toc:h};function p(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"server-monitors"},"Server Monitors"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Monitoring provides a comprehensive overview of the status and performance of the individual real servers. If a monitor is attached to a server, then it will get applied to the server for monitoring purposes as per the health check specified in the monitor. Health Checks computes an overall health state for upstream server in the WAF. Backend(upstream) that responds successfully for the configured number of times is considered healthy. Backend(upstream) that fails to respond successfully for a separate number of times is unhealthy."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Monitors",src:r(25155).Z,width:"1918",height:"976"})),(0,n.kt)("h3",{id:"how-to-you-use"},"How to you Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Farm")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Monitors")),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Monitor")),(0,n.kt)("li",{parentName:"ol"},"Click on the monitor name to configure the Health Check and click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Monitor Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enable Health Check"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Health Check Interval"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fail Threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Interger"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Pass Threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Health Check Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"TCP")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"monitor-name"},"Monitor Name"),(0,n.kt)("p",null,"Users are allowed to specify a user friendly name to monitor."),(0,n.kt)("h4",{id:"enable-health-check"},"Enable Health Check"),(0,n.kt)("p",null,"Users are allowed to enable to periodically check the health of upstream servers by sending special health\u2011check requests to each server and verifying the correct response."),(0,n.kt)("h4",{id:"health-check-interval"},"Health Check Interval"),(0,n.kt)("p",null,"Set the seconds, say 10, then every 10 seconds WAF sends a request for \u201c/\u201d to each server. If any communication error or timeout occurs (the server responds with a status code other than the expected code) the health check fails. The server is marked as unhealthy, and WAF does not send client requests to it (if attached to server group) until it once again passes a health check."),(0,n.kt)("h4",{id:"fail-threshold"},"Fail Threshold"),(0,n.kt)("p",null,"Sets the number of failed attempts that must occur during the heath check interval period for the server to be marked unavailable (default is 1 attempt)."),(0,n.kt)("h4",{id:"pass-threshold"},"Pass Threshold"),(0,n.kt)("p",null,"Sets the number of passes that must occur during the heath check interval period for the server to be marked available (default is 1 attempt). If set as 2, then the server must pass two consecutive checks to be marked as healthy again instead of the default one."),(0,n.kt)("h4",{id:"health-check-type"},"Health Check Type:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TCP"),":\nHealth check attempts to open a TCP connection to the server on the specified port (which are specified in the configuration file)."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"SSL HELLO"),":\nHealth check sends SSL handshake with the server, if failed to do SSL handshake then we make that server as unhealthy."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"HTTP"),":\nHealth check sends HTTP request, if unable to receive response, then we make that server unhealthy."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"HTTPS"),":\nHealth check sends HTTPS request, if unable to receive response, then we make that server as unhealthy")),(0,n.kt)("h4",{id:"check-uri"},"Check URI"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows user to specify the URI for the health check."),(0,n.kt)("h4",{id:"match-status"},"Match Status"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows user to specify the HTTP status code that need to be checked during the health check."),(0,n.kt)("h4",{id:"match-content"},"Match Content"),(0,n.kt)("p",null,"This option is only visible when ",(0,n.kt)("strong",{parentName:"p"},"Health Check Type")," is set to HTTP/HTTPs. This option allows users to specify the content to match in the response."))}p.isMDXComponent=!0},25155:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/monitor2-e9925e9c11d611196908f7b5ee23ff1a.png"}}]);