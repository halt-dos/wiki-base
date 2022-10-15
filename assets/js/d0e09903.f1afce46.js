"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8350],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),u=n,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},74974:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:2},o="Load Balancing",l={unversionedId:"community-waf/docs/waf/server_farm/load_balancing",id:"community-waf/docs/waf/server_farm/load_balancing",title:"Load Balancing",description:"Overview",source:"@site/docs/community-waf/docs/waf/server_farm/load_balancing.md",sourceDirName:"community-waf/docs/waf/server_farm",slug:"/community-waf/docs/waf/server_farm/load_balancing",permalink:"/community-waf/docs/waf/server_farm/load_balancing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Servers",permalink:"/community-waf/docs/waf/server_farm/servers"},next:{title:"Server Monitors",permalink:"/community-waf/docs/waf/server_farm/monitors"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Load Balancing Algorithms",id:"load-balancing-algorithms",level:2},{value:"How to use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:3},{value:"Encrypt to Upstream",id:"encrypt-to-upstream",level:4},{value:"Upstream Retries",id:"upstream-retries",level:4},{value:"Fail-over Threshold",id:"fail-over-threshold",level:4},{value:"Load Balancing Algorithm",id:"load-balancing-algorithm",level:4},{value:"Sticky Session Cookie",id:"sticky-session-cookie",level:4}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"load-balancing"},"Load Balancing"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Load balancing across multiple application server is a commonly used technique for optimizing resource utilization, maximizing throughput, reducing latency, and ensuring fault\u2011tolerant configurations.\nUsers can configure the load balancing settings, select desired load balancing algorithem, enable SSL while forwarding the data towards backend, etc. under this section. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Load Balancing",src:a(81562).Z,width:"1918",height:"976"})),(0,n.kt)("h2",{id:"load-balancing-algorithms"},"Load Balancing Algorithms"),(0,n.kt)("p",null,"This field specifies the load balancing algorithm according to the configured website."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ROUND ROBIN"),":\nThis algorithm is a smart approach to distribute client requests across an array of servers. It forwards the client request to each server in turn. Also, assigns a weight to each server as per current load and idle capacity.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST CONNECTIONS"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which has the least no. of active connections on the server.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST RESPONSE TIME")," : This load balancing algorithem is used to provide the response from the server which has the less response time. Suppose there are two servers in the backend which have repsonse time A and B. A is less than B. In this case, Haltdos WAF Solution will give preference to the server which is having less response time than others. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST BANDWIDTH")," : This load balancing algorithem is used to load balance as per the bandwidth available for the backend to handle the load coming from the client side. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"IP HASH"),": This algorithm takes the client's and server's source and destination IP address to generate a unique hash key. This key is used to assign the client to a specific server. In the case of a broken session, the key can be regenerated, and the client can be directed to the same server. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"LEAST REQUEST"),": This algorithm is a dynamic load balancing algorithm. It forwards client requests to the server, which have served the minimum amount of requests."))),(0,n.kt)("h2",{id:"how-to-use"},"How to use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Server Farm")," > ",(0,n.kt)("strong",{parentName:"li"},"Load Balancing")),(0,n.kt)("li",{parentName:"ol"},"Set the configurations and ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Encrypt to Upstream"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Upstream Retries"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Failover Threshold"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"50")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Load Balancing Algorithm"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Least Connection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Sticky Session Cookie"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"encrypt-to-upstream"},"Encrypt to Upstream"),(0,n.kt)("p",null,"This option allows users to specify if WAF should re-encrypt traffic before sending to servers"),(0,n.kt)("h4",{id:"upstream-retries"},"Upstream Retries"),(0,n.kt)("p",null,"This option specify the upstream retries. By default, the value is set to 1."),(0,n.kt)("h4",{id:"fail-over-threshold"},"Fail-over Threshold"),(0,n.kt)("p",null,"This option specify the fail-over threshold in percentage of (active/total) primary servers for switching to backup servers. By default, the value is set to 50%."),(0,n.kt)("h4",{id:"load-balancing-algorithm"},"Load Balancing Algorithm"),(0,n.kt)("p",null,"This drop-down specify the algorithm used by the server group. By default, the value is selected as Round Robin."),(0,n.kt)("h4",{id:"sticky-session-cookie"},"Sticky Session Cookie"),(0,n.kt)("p",null,"The users are allowed to specify enabling sticky session based on specified cookie"))}d.isMDXComponent=!0},81562:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/lbsettings-68aa62d6938fd726b81830a492a2927b.png"}}]);