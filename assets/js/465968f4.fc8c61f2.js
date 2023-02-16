"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[35666],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,g=u["".concat(l,".").concat(h)]||u[h]||d[h]||i;return r?a.createElement(g,o(o({ref:t},c),{},{components:r})):a.createElement(g,o({ref:t},c))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},29757:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},o="Load Balancing",s={unversionedId:"products/waf/listener/server_groups/loadbalancing",id:"products/waf/listener/server_groups/loadbalancing",title:"Load Balancing",description:"Load Balancing mechanism used for WAF",source:"@site/docs/products/waf/listener/server_groups/loadbalancing.md",sourceDirName:"products/waf/listener/server_groups",slug:"/products/waf/listener/server_groups/loadbalancing",permalink:"/products/waf/listener/server_groups/loadbalancing",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Server Groups",permalink:"/products/waf/listener/server_groups/servergroup"},next:{title:"Servers",permalink:"/products/waf/listener/server_groups/servers"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Load Balancing Algorithms",id:"load-balancing-algorithms",level:3},{value:"How to use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Upstream Retries</strong>",id:"upstream-retries",level:5},{value:"<strong>Fail-over Threshold</strong>",id:"fail-over-threshold",level:5},{value:"<strong>Client IP Pool</strong>",id:"client-ip-pool",level:5},{value:"<strong>Algorithm</strong>",id:"algorithm",level:5},{value:"<strong>Sticky Session Cookie</strong>",id:"sticky-session-cookie",level:5}],c={toc:p};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"load-balancing"},"Load Balancing"),(0,n.kt)("p",null,"Load Balancing mechanism used for WAF"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Load balancing across multiple application instances is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault-tolerant configurations."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Load Balancing",src:r(70355).Z,width:"1824",height:"779"})),(0,n.kt)("h3",{id:"load-balancing-algorithms"},"Load Balancing Algorithms"),(0,n.kt)("p",null,"This field specifies the load balancing algorithm according to the configured website."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ROUND ROBIN"),":\nThis algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST CONNECTIONS"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST LISTENER CONNECTIONS"),":\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST RESPONSE TIME"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have a small response time in order to serve requests.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"MINIMUM JITTER"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum jitter. NOTE: For this algorithm to work, the server group should have ICMP monitor attached.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"IP HASH"),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"PERSISTENT HASH"),": This algorithm takes the user input location within the current request to generate a user-defined custom unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. NOTE: In hashing-based load balancing,  if a specified value does not exists then the request is served on the basis of client's IP address.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Least Requests:"),"\nThis algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SNMP Metrics"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have least CPU / RAM usage. NOTE: For this algorithm to work, the server group should have SNMP monitor attached.    "))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Load Balancing",src:r(51885).Z,width:"1834",height:"710"})),(0,n.kt)("h3",{id:"how-to-use"},"How to use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF")," > ",(0,n.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"p"},"Server Groups")," > ",(0,n.kt)("strong",{parentName:"p"},"Load Balancing"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set the configurations and ",(0,n.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Upstream Retries This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections to the back-end server."),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Fail-over Threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client IP Pool"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Algorithm"),(0,n.kt)("td",{parentName:"tr",align:null},"Algorithm Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"ROUND ROBIN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sticky Session Cookie"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Add location"),(0,n.kt)("td",{parentName:"tr",align:null},"String & Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"This toggle button allows you to enable the Web-socket support for servers in the server group.None & Src IP")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h5",{id:"upstream-retries"},(0,n.kt)("strong",{parentName:"h5"},"Upstream Retries")),(0,n.kt)("p",null,"This option used to specify the upstream retries. By default, the value is set to 1."),(0,n.kt)("h5",{id:"fail-over-threshold"},(0,n.kt)("strong",{parentName:"h5"},"Fail-over Threshold")),(0,n.kt)("p",null,"This option specify the fail-over threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%."),(0,n.kt)("h5",{id:"client-ip-pool"},(0,n.kt)("strong",{parentName:"h5"},"Client IP Pool")),(0,n.kt)("p",null,"Specify list of client IP to use when connecting to upstream. Leave blank for auto"),(0,n.kt)("h5",{id:"algorithm"},(0,n.kt)("strong",{parentName:"h5"},"Algorithm")),(0,n.kt)("p",null,"This option is used to specify the algorithm used by the server group. By default, the value is selected as Round Robin."),(0,n.kt)("h5",{id:"sticky-session-cookie"},(0,n.kt)("strong",{parentName:"h5"},"Sticky Session Cookie")),(0,n.kt)("p",null,"Specify enabling sticky session based on specified cookie"))}d.isMDXComponent=!0},70355:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/loadbalancing-cede59aa38b1f3ee5575cf795e6bb8bb.png"},51885:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/loadbalancing1-9fbe4e5f15f424764c7da50a605add33.png"}}]);