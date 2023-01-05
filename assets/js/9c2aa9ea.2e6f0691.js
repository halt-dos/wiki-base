"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6334],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>u});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=o.createContext({}),c=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=c(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},g=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,s=t.parentName,d=l(t,["components","mdxType","originalType","parentName"]),g=c(n),u=r,m=g["".concat(s,".").concat(u)]||g[u]||p[u]||a;return n?o.createElement(m,i(i({ref:e},d),{},{components:n})):o.createElement(m,i({ref:e},d))}));function u(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},60660:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(87462),r=(n(67294),n(3905));const a={sidebar_position:1},i="TCP Settings",l={unversionedId:"products/ddos/profile/connections/tcp_settings",id:"products/ddos/profile/connections/tcp_settings",title:"TCP Settings",description:"Overview",source:"@site/docs/products/ddos/profile/connections/tcp_settings.md",sourceDirName:"products/ddos/profile/connections",slug:"/products/ddos/profile/connections/tcp_settings",permalink:"/rc/products/ddos/profile/connections/tcp_settings",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Connections",permalink:"/rc/products/ddos/profile/connections/"},next:{title:"TCP Shield",permalink:"/rc/products/ddos/profile/connections/tcp_shield"}},s={},c=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>TCP Settings:</strong>",id:"tcp-settings-1",level:3},{value:"<strong>Agressive AGING</strong>",id:"agressive-aging",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>TCP</strong>",id:"tcp",level:5},{value:"<strong>Payload Length Misbehaviour Threshold</strong>",id:"payload-length-misbehaviour-threshold",level:5},{value:"<strong>Minimum payload length</strong>",id:"minimum-payload-length",level:5},{value:"<strong>Allow beyond max connection</strong>",id:"allow-beyond-max-connection",level:5},{value:"Note:- If Enabled, the new flows beyond the limit will not be tracked",id:"note--if-enabled-the-new-flows-beyond-the-limit-will-not-be-tracked",level:5},{value:"<strong>Max Inbound concurrent connections</strong>",id:"max-inbound-concurrent-connections",level:5},{value:"<strong>Max Outbound concurrent connections</strong>",id:"max-outbound-concurrent-connections",level:5},{value:"<strong>Max Connections Per Source</strong>",id:"max-connections-per-source",level:5},{value:"<strong>Out of order drops</strong>",id:"out-of-order-drops",level:5},{value:"<strong>Window size validation</strong>",id:"window-size-validation",level:5},{value:"<strong>Graceful Startup period</strong>",id:"graceful-startup-period",level:5},{value:"<strong>Limit Tracking Connections on Ports</strong>",id:"limit-tracking-connections-on-ports",level:5},{value:"<strong>Connection FIN Time Wait</strong>",id:"connection-fin-time-wait",level:5},{value:"<strong>Connection proxy</strong>",id:"connection-proxy",level:5},{value:"<strong>Connection Proxy Trigger Threshold</strong>",id:"connection-proxy-trigger-threshold",level:5},{value:"Note:  Applicable only when Connection Proxy is enabled",id:"note--applicable-only-when-connection-proxy-is-enabled",level:5},{value:"<strong>Connection proxy advertised MSS</strong>",id:"connection-proxy-advertised-mss",level:5},{value:"<strong>Aggressive Aging Settings:</strong>",id:"aggressive-aging-settings",level:5},{value:"<strong>Description:</strong>",id:"description-1",level:3},{value:"<strong>Aggresive Aging Settings</strong>",id:"aggresive-aging-settings",level:5},{value:"<strong>Aging Enabled</strong>",id:"aging-enabled",level:5},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:5},{value:"<strong>Incomplete connection timeout</strong>",id:"incomplete-connection-timeout",level:5}],d={toc:c};function p(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tcp-settings"},"TCP Settings"),(0,r.kt)("p",null,"Overview"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In DDoS connection, you can configure Connection based protocols which will regulate the payload length, number of inbound & outbound connections, out of order drops, TCP ports, FIN time wait, TCP connection Proxy threshold & advertised MSS."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(5659).Z,width:"1834",height:"895"})),(0,r.kt)("h3",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h3"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profile > Connection"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the settings")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(50152).Z,width:"1564",height:"260"})),(0,r.kt)("h3",{id:"tcp-settings-1"},(0,r.kt)("strong",{parentName:"h3"},"TCP Settings:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"TCP"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Inbound concurrent connections"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Outbound concurrent connections"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Connections Per Source"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Out of order drops"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Window size validation"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Payload Length Misbehaviour Threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minimum payload length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allow beyond max connections"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Limit Tracking Connections on Ports"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection FIN Time Wait"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection proxy"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection proxy trigger threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection proxy advertised MSS"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1460")))),(0,r.kt)("h3",{id:"agressive-aging"},(0,r.kt)("strong",{parentName:"h3"},"Agressive AGING")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tcp_aging",src:n(7595).Z,width:"1854",height:"707"})),(0,r.kt)("h3",{id:"description"},(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",{id:"tcp"},(0,r.kt)("strong",{parentName:"h5"},"TCP")),(0,r.kt)("p",null,"Enable/Disable validation checks for IPv4/ IPv6 packets"),(0,r.kt)("h5",{id:"payload-length-misbehaviour-threshold"},(0,r.kt)("strong",{parentName:"h5"},"Payload Length Misbehaviour Threshold")),(0,r.kt)("p",null,"Specify the threshold limit for misbehaviour. IP address breaching the threshold is temporarily blacklisted"),(0,r.kt)("h5",{id:"minimum-payload-length"},(0,r.kt)("strong",{parentName:"h5"},"Minimum payload length")),(0,r.kt)("p",null,"Specify minimum payload length of packets in TCP connection"),(0,r.kt)("h5",{id:"allow-beyond-max-connection"},(0,r.kt)("strong",{parentName:"h5"},"Allow beyond max connection")),(0,r.kt)("p",null,"Specify if new TCP flows should be allowed beyond the max"),(0,r.kt)("h5",{id:"note--if-enabled-the-new-flows-beyond-the-limit-will-not-be-tracked"},"Note:- If Enabled, the new flows beyond the limit will not be tracked"),(0,r.kt)("h5",{id:"max-inbound-concurrent-connections"},(0,r.kt)("strong",{parentName:"h5"},"Max Inbound concurrent connections")),(0,r.kt)("p",null,"Sets the maximum inbound concurrent TCP connections to allow"),(0,r.kt)("h5",{id:"max-outbound-concurrent-connections"},(0,r.kt)("strong",{parentName:"h5"},"Max Outbound concurrent connections")),(0,r.kt)("p",null,"Sets the maximum outbound concurrent TCP connections to allow"),(0,r.kt)("h5",{id:"max-connections-per-source"},(0,r.kt)("strong",{parentName:"h5"},"Max Connections Per Source")),(0,r.kt)("p",null,"Specify the max concurrent connections from a single source IP address"),(0,r.kt)("h5",{id:"out-of-order-drops"},(0,r.kt)("strong",{parentName:"h5"},"Out of order drops")),(0,r.kt)("p",null,"Specify if system should drop TCP packets not belonging to a TCP flow"),(0,r.kt)("h5",{id:"window-size-validation"},(0,r.kt)("strong",{parentName:"h5"},"Window size validation")),(0,r.kt)("p",null,"Specify if system should drop invalid window size header in TCP flow"),(0,r.kt)("h5",{id:"graceful-startup-period"},(0,r.kt)("strong",{parentName:"h5"},"Graceful Startup period")),(0,r.kt)("p",null,"Specify the time till which Connection mitigations trigger will wait before starting mitigation on startup (in seconds)"),(0,r.kt)("h5",{id:"limit-tracking-connections-on-ports"},(0,r.kt)("strong",{parentName:"h5"},"Limit Tracking Connections on Ports")),(0,r.kt)("p",null,"Specify TCP port(s) that will be tracked for flow monitoring"),(0,r.kt)("h5",{id:"connection-fin-time-wait"},(0,r.kt)("strong",{parentName:"h5"},"Connection FIN Time Wait")),(0,r.kt)("p",null,"This field specifies the time duration for tracking TCP connections after graceful termination. This allows any unsent packets to be transmitted without getting dropped"),(0,r.kt)("h5",{id:"connection-proxy"},(0,r.kt)("strong",{parentName:"h5"},"Connection proxy")),(0,r.kt)("p",null,"Enable TCP connection proxy for protecting against TCP Flood attacks such as TCP SYN Flood, etc"),(0,r.kt)("h5",{id:"connection-proxy-trigger-threshold"},(0,r.kt)("strong",{parentName:"h5"},"Connection Proxy Trigger Threshold")),(0,r.kt)("p",null,"Specify the number of concurrent flows beyond with Connection Proxy should be enabled for subsequent concurrent TCP flows"),(0,r.kt)("h5",{id:"note--applicable-only-when-connection-proxy-is-enabled"},"Note:  Applicable only when Connection Proxy is enabled"),(0,r.kt)("h5",{id:"connection-proxy-advertised-mss"},(0,r.kt)("strong",{parentName:"h5"},"Connection proxy advertised MSS")),(0,r.kt)("p",null,"Specify the connection proxy advertised MSS"),(0,r.kt)("h5",{id:"aggressive-aging-settings"},(0,r.kt)("strong",{parentName:"h5"},"Aggressive Aging Settings:")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aging Enable"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Time Out"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incomplete Connection Time Out"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"30")))),(0,r.kt)("h3",{id:"description-1"},(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",{id:"aggresive-aging-settings"},(0,r.kt)("strong",{parentName:"h5"},"Aggresive Aging Settings")),(0,r.kt)("h5",{id:"aging-enabled"},(0,r.kt)("strong",{parentName:"h5"},"Aging Enabled")),(0,r.kt)("p",null,"Enable Aggressive Aging for protecting against TCP Connection flood attacks"),(0,r.kt)("h5",{id:"connection-timeout"},(0,r.kt)("strong",{parentName:"h5"},"Connection Timeout")),(0,r.kt)("p",null,"Time after which the established inbound TCP connection will be considered stale and will be scheduled for deletion"),(0,r.kt)("h5",{id:"incomplete-connection-timeout"},(0,r.kt)("strong",{parentName:"h5"},"Incomplete connection timeout")),(0,r.kt)("p",null,"Specify the half open TCP connection timeout"))}p.isMDXComponent=!0},7595:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/tcp_aging-d23eece372d5aa3148a88c5f1e7b6484.png"},5659:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/tcpsetting-2e8430354eae5fc0df81c7f42d68ffb8.png"},50152:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/tcpsetting1-0f31f66d777ed85ab7a26c8af9627f5d.png"}}]);