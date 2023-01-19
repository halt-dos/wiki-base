"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[77560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},75730:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},l="Load Balancing",o={unversionedId:"products/cloud/waf/listener/server-groups/load-balancing",id:"version-6.0/products/cloud/waf/listener/server-groups/load-balancing",title:"Load Balancing",description:"Load Balancing mechanism used for WAF",source:"@site/versioned_docs/version-6.0/products/cloud/waf/listener/server-groups/load-balancing.md",sourceDirName:"products/cloud/waf/listener/server-groups",slug:"/products/cloud/waf/listener/server-groups/load-balancing",permalink:"/products/cloud/waf/listener/server-groups/load-balancing",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Servers",permalink:"/products/cloud/waf/listener/server-groups/servers"},next:{title:"Monitors",permalink:"/products/cloud/waf/listener/monitors"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"load-balancing"},"Load Balancing"),(0,r.kt)("p",null,"Load Balancing mechanism used for WAF"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault\u2011tolerant configurations."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Load Balancing Algorithms")),(0,r.kt)("p",null,"This field specifies the load balancing algorithm according to the configured website."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ROUND ROBIN"),": This algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST CONNECTIONS"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST LISTENER CONNECTIONS"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections to the backend server.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST RESPONSE TIME"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LEAST REQUEST"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IP HASH"),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"PERSIST HASH"),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"COOKIE HASH"),": This algorithm takes the cookie name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HEADER HASH"),": This algorithm takes the header name specified by the user in param input field to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. "))),(0,r.kt)("p",null,"Note: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address."),(0,r.kt)("h3",{id:"how-to-use"},"How to use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Server Groups > Load Balancing"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Set the configurations and ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Web Socket Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep-Alive Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Keep-Alive Timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"3600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Connection Pool Size"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"32")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Max Keep-Alive Requests"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Upstream Retries"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Failover Threshold"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"Round Robin")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Param"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add Location"),(0,r.kt)("td",{parentName:"tr",align:null},"String & Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"None & Src IP")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Socket Enabled")),(0,r.kt)("p",null,"This toggle button allows you to enable the Websocket support for servers in the server group."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keep-Alive Enabled")),(0,r.kt)("p",null,"This toggle button allows you to enable keep-alive connections with servers in the server group."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Keep-Alive Timeout")),(0,r.kt)("p",null,"This field specifies upstream keep-alive connection timeout in seconds. By default, the value is set to 3600 seconds."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Connection Pool Size")),(0,r.kt)("p",null,"This field specifies the connection pool size. By default, the value is set to 32."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Max Keep-Alive Requests")),(0,r.kt)("p",null,"This field specifies the max allowed requests per keep-alive connection. By default, the value is set to 100 requests."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Upstream Retries")),(0,r.kt)("p",null,"This field specifies the upstream retries. By default, the value is set to 1."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Failover Threshold")),(0,r.kt)("p",null,"This field specifies the failover threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Algorithm")),(0,r.kt)("p",null,"This dropdown specifies the algorithm used by the server group. By default, the value is selected as Round Robin."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Param")),(0,r.kt)("p",null,"This field specifies the parameters for the location. Location will be specified with its Priority and Location like IP, Cookie, Port, Session, etc."))}c.isMDXComponent=!0}}]);