"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[65796],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},h={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=p(n),c=a,m=u["".concat(i,".").concat(c)]||u[c]||h[c]||o;return n?r.createElement(m,l(l({ref:e},d),{},{components:n})):r.createElement(m,l({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:a,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73641:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l="Monitor",s={unversionedId:"products/llb/monitors/monitors",id:"products/llb/monitors/monitors",title:"Monitor",description:"Link monitoring in Haltdos LLB",source:"@site/docs/products/llb/monitors/monitors.md",sourceDirName:"products/llb/monitors",slug:"/products/llb/monitors/",permalink:"/products/llb/monitors/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Interface Groups",permalink:"/products/llb/interface_groups"},next:{title:"Rules",permalink:"/products/llb/rules/"}},i={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Monitor Name</strong>",id:"monitor-name",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Update Static Route</strong>",id:"update-static-route",level:5},{value:"<strong>Use IPv6</strong>",id:"use-ipv6",level:5},{value:"<strong>Check Interval</strong>",id:"check-interval",level:5},{value:"<strong>Monitor Type</strong>",id:"monitor-type",level:5},{value:"<strong>Query Server</strong>",id:"query-server",level:5},{value:"<strong>Port</strong>",id:"port",level:5},{value:"<strong>Host Name</strong>",id:"host-name",level:5},{value:"<strong>Expected Response</strong>",id:"expected-response",level:5},{value:"<strong>Match Conent</strong>",id:"match-conent",level:5},{value:"<strong>Timeout</strong>",id:"timeout",level:5},{value:"<strong>Fail Threshold</strong>",id:"fail-threshold",level:5},{value:"<strong>Pass Threshold</strong>",id:"pass-threshold",level:5},{value:"<strong>Latency Threshold</strong>",id:"latency-threshold",level:5},{value:"<strong>Jitter Threshold</strong>",id:"jitter-threshold",level:5},{value:"<strong>Packet Loss Theshold</strong>",id:"packet-loss-theshold",level:5}],d={toc:p};function h(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitor"},"Monitor"),(0,a.kt)("p",null,"Link monitoring in Haltdos LLB"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos allows users to configure custom monitoring that can monitor the interface groups. These monitors check the health of the link to assist in efficient load balancing across multiple WAN links."),(0,a.kt)("p",null,"If any of the links are monitored and marked as down, the traffic will not redirect to the same link unless the link comes up and complete the pass threshold."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"adding_monitor",src:n(76127).Z,width:"1843",height:"620"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack >LLB > Monitors"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Monitor")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"monitor_settings",src:n(88332).Z,width:"950",height:"255"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor Name"),(0,a.kt)("td",{parentName:"tr",align:null},"User friendly monitor name"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,a.kt)("td",{parentName:"tr",align:null},"False (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Update Static Route"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Use IPv6"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Check Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"10 seconds (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor type"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Query Server"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address of server to send request"),(0,a.kt)("td",{parentName:"tr",align:null},"None (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Port Number to connect the server"),(0,a.kt)("td",{parentName:"tr",align:null},"80 (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1 (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fail Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1 (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pass Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1 (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Latency Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0 (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Jitter Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0 (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Packet Loss Treshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0 (Mandatory)")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"monitor_settings",src:n(37377).Z,width:"943",height:"557"})),(0,a.kt)("h3",{id:"description"},(0,a.kt)("strong",{parentName:"h3"},"Description:")),(0,a.kt)("h5",{id:"monitor-name"},(0,a.kt)("strong",{parentName:"h5"},"Monitor Name")),(0,a.kt)("p",null,"This option allows the user to set a name for his monitoring rule."),(0,a.kt)("h5",{id:"enabled"},(0,a.kt)("strong",{parentName:"h5"},"Enabled")),(0,a.kt)("p",null,"This option allows enable or disable monitor rule. by default, It is set to disable."),(0,a.kt)("h5",{id:"update-static-route"},(0,a.kt)("strong",{parentName:"h5"},"Update Static Route")),(0,a.kt)("p",null,"It specifies if the static route should be updated upon failure."),(0,a.kt)("h5",{id:"use-ipv6"},(0,a.kt)("strong",{parentName:"h5"},"Use IPv6")),(0,a.kt)("p",null,"It specifies if the monitor should use the IPv6 stack."),(0,a.kt)("h5",{id:"check-interval"},(0,a.kt)("strong",{parentName:"h5"},"Check Interval")),(0,a.kt)("p",null,"This option allows the user to set a health check interval for monitoring the services in seconds. After the mentioned time period, defined monitor settings will be checked."),(0,a.kt)("h5",{id:"monitor-type"},(0,a.kt)("strong",{parentName:"h5"},"Monitor Type")),(0,a.kt)("p",null,"It specifies the health check type for monitoring. Users need to select the appropriate type of protocol to monitor the interfaces. By default, TCP is selected."),(0,a.kt)("h5",{id:"query-server"},(0,a.kt)("strong",{parentName:"h5"},"Query Server")),(0,a.kt)("p",null,"This option can only be seen when ICMP/TCP other protocol is selected in the ",(0,a.kt)("strong",{parentName:"p"},"Monitor Type"),". It allows the user to set the query server IP Address to which the monitor request will send."),(0,a.kt)("h5",{id:"port"},(0,a.kt)("strong",{parentName:"h5"},"Port")),(0,a.kt)("p",null,"It specifies the port number to connect the server when TCP protocol is selected in ",(0,a.kt)("strong",{parentName:"p"},"Monitor Type"),"."),(0,a.kt)("h5",{id:"host-name"},(0,a.kt)("strong",{parentName:"h5"},"Host Name")),(0,a.kt)("p",null,"This option will only appear when Monitor Type is selected to HTTP/HTTPS. This option allows the user to mention hostname to query."),(0,a.kt)("h5",{id:"expected-response"},(0,a.kt)("strong",{parentName:"h5"},"Expected Response")),(0,a.kt)("p",null,"This option will only appear when Monitor Type is selected to HTTP/HTTPS. HTTP/HTTPS response status codes indicate whether a specific HTTP/HTTPS request has been successfully completed. This option allows users to set the response we get for the HTTP request."),(0,a.kt)("h5",{id:"match-conent"},(0,a.kt)("strong",{parentName:"h5"},"Match Conent")),(0,a.kt)("p",null,"This option will only appear when Monitor Type is selected to HTTP/HTTPS. It will specify the content to match in the response. "),(0,a.kt)("h5",{id:"timeout"},(0,a.kt)("strong",{parentName:"h5"},"Timeout")),(0,a.kt)("p",null,"It specifies the timeout after which the monitoring will be marked failed. Users can specify the timeout in seconds."),(0,a.kt)("h5",{id:"fail-threshold"},(0,a.kt)("strong",{parentName:"h5"},"Fail Threshold")),(0,a.kt)("p",null,"This option allows the user to set the integer values for the fail threshold limit. When an already set monitor threshold reaches the specified threshold, it will be marked down. Users can set the threshold on network activities like latency, packet drop, and jitter."),(0,a.kt)("h5",{id:"pass-threshold"},(0,a.kt)("strong",{parentName:"h5"},"Pass Threshold")),(0,a.kt)("p",null,"This option allows the user to set the integer values for the pass threshold limit. When the set monitor threshold reaches the specified threshold, it will be marked up."),(0,a.kt)("h5",{id:"latency-threshold"},(0,a.kt)("strong",{parentName:"h5"},"Latency Threshold")),(0,a.kt)("p",null,"Latency is the time it takes for data to pass from one point on a network to another. This option specifies that Interface should be marked down if the latency threshold is breached. By default, the latency threshold is set to 0 which is its disable state."),(0,a.kt)("h5",{id:"jitter-threshold"},(0,a.kt)("strong",{parentName:"h5"},"Jitter Threshold")),(0,a.kt)("p",null,"Jitter is when there is a time delay in sending data packets over your network connection. This option specifies that the interface should be marked down if the jitter threshold is breached. By default, it is set to 0 which is the disabled state."),(0,a.kt)("h5",{id:"packet-loss-theshold"},(0,a.kt)("strong",{parentName:"h5"},"Packet Loss Theshold")),(0,a.kt)("p",null,"Packet loss occurs when one or more packets of data traveling across a computer network fail to reach their destination. Packet loss is either caused by errors in data transmission, typically across wireless networks, or network congestion. It specifies interface should be marked down if the packet loss threshold is breached. Set 0 to disable."))}h.isMDXComponent=!0},76127:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/monitor-3aa286ae90237f157bed7519afa8ad71.png"},88332:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/monitor1-46d7a871065ec8c274d26845116716bf.png"},37377:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/monitor2-d8f2b60ea6034861021d15fb060875a6.png"}}]);