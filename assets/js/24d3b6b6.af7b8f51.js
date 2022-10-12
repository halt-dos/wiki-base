"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4465],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,k=d["".concat(o,".").concat(m)]||d[m]||c[m]||i;return a?n.createElement(k,l(l({ref:t},u),{},{components:a})):n.createElement(k,l({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},31575:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:3},l="Load Balancing",s={unversionedId:"saas/waf/listener/server_groups/load_balancing",id:"saas/waf/listener/server_groups/load_balancing",title:"Load Balancing",description:"Load Balancing mechanism used for WAF",source:"@site/docs/saas/waf/listener/server_groups/load_balancing.md",sourceDirName:"saas/waf/listener/server_groups",slug:"/saas/waf/listener/server_groups/load_balancing",permalink:"/wiki/saas/waf/listener/server_groups/load_balancing",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"saasSidebar",previous:{title:"Servers",permalink:"/wiki/saas/waf/listener/server_groups/servers"},next:{title:"Monitors",permalink:"/wiki/saas/waf/listener/monitors"}},o={},p=[],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"load-balancing"},"Load Balancing"),(0,r.kt)("p",null,"Load Balancing mechanism used for WAF"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Overview")),(0,r.kt)("p",null,"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault\u2011tolerant configurations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Load Balancing Algorithms")),(0,r.kt)("p",null,"This field specifies the load balancing algorithm according to the configured website."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ROUND ROBIN"),": This algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST CONNECTIONS"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST LISTENER CONNECTIONS"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections to the backend server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST RESPONSE TIME"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST REQUEST"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IP HASH"),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PERSIST HASH"),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"COOKIE HASH"),": This algorithm takes the cookie name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HEADER HASH"),": This algorithm takes the header name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. "))),(0,r.kt)("p",null,"Note: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Server Groups > Load Balancing"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the configurations and ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web Socket Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep-Alive Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep-Alive Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"3600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Pool Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Keep-Alive Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream Retries"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Failover Threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"Round Robin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Param"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add Location"),(0,r.kt)("td",{parentName:"tr",align:null},"String & Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"None & Src IP")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Socket Enabled")),(0,r.kt)("p",null,"This toggle button allows you to enable the Websocket support for servers in the server group."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keep-Alive Enabled")),(0,r.kt)("p",null,"This toggle button allows you to enable keep-alive connections with servers in the server group."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keep-Alive Timeout")),(0,r.kt)("p",null,"This field specifies upstream keep-alive connection timeout in seconds. By default, the value is set to 3600 seconds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection Pool Size")),(0,r.kt)("p",null,"This field specifies the connection pool size. By default, the value is set to 32."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Max Keep-Alive Requests")),(0,r.kt)("p",null,"This field specifies the max allowed requests per keep-alive connection. By default, the value is set to 100 requests."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upstream Retries")),(0,r.kt)("p",null,"This field specifies the upstream retries. By default, the value is set to 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failover Threshold")),(0,r.kt)("p",null,"This field specifies the failover threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Algorithm")),(0,r.kt)("p",null,"This dropdown specifies the algorithm used by the server group. By default, the value is selected as Round Robin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Param")),(0,r.kt)("p",null,"This field specifies the parameters for the location. Location will be specified with its Priority and Location like IP, Cookie, Port, Session, etc."))}c.isMDXComponent=!0}}]);