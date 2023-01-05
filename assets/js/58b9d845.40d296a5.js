"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[87891],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},79864:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2},o="Servers",i={unversionedId:"products/cloud/waf/listener/server-groups/servers",id:"products/cloud/waf/listener/server-groups/servers",title:"Servers",description:"Configure the application servers",source:"@site/docs/products/cloud/waf/listener/server-groups/servers.md",sourceDirName:"products/cloud/waf/listener/server-groups",slug:"/products/cloud/waf/listener/server-groups/servers",permalink:"/rc/products/cloud/waf/listener/server-groups/servers",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Server Groups",permalink:"/rc/products/cloud/waf/listener/server-groups/"},next:{title:"Load Balancing",permalink:"/rc/products/cloud/waf/listener/server-groups/load-balancing"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"How to use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],u={toc:s};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servers"},"Servers"),(0,a.kt)("p",null,"Configure the application servers"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Configuration of upstream servers in a server group can be modified on-the-fly by using Servers."),(0,a.kt)("h3",{id:"how-to-use"},"How to use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Server Groups > Servers"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Server")," and configure it with basic and advanced configuration.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Set the configurations and ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server"),(0,a.kt)("td",{parentName:"tr",align:null},"IP"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Remote"),(0,a.kt)("td",{parentName:"tr",align:null},"TRUE/FALSE"),(0,a.kt)("td",{parentName:"tr",align:null},"FALSE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,a.kt)("td",{parentName:"tr",align:null},"Existing monitor"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backup"),(0,a.kt)("td",{parentName:"tr",align:null},"TRUE/FALSE"),(0,a.kt)("td",{parentName:"tr",align:null},"FALSE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Down"),(0,a.kt)("td",{parentName:"tr",align:null},"TRUE/FALSE"),(0,a.kt)("td",{parentName:"tr",align:null},"FALSE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Max Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connection Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Send Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Read Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Server")),(0,a.kt)("p",null,"Specify the IP address for the server. This IP address will be used for serving the requests for the application."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Port")," "),(0,a.kt)("p",null,"Set the port for the backend application server will communicate."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Weight")," "),(0,a.kt)("p",null,"Specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remote")," "),(0,a.kt)("p",null,"Specify if the server can be accessed remotely or not."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monitor")," "),(0,a.kt)("p",null,"Select from the monitors created. Monitors help in monitoring the health of the server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Backup")," "),(0,a.kt)("p",null,"Specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Down")," "),(0,a.kt)("p",null,"Makes the server active/inactive. When marked Down the server will not be able to serve requests."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Max Connection")," "),(0,a.kt)("p",null,"Specify the number of max connections allowed to the specific server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Connection Timeout")," "),(0,a.kt)("p",null,"Specify the connection timeout for the server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Send Timeout")," "),(0,a.kt)("p",null,"Specify the send timeout for the server. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Read Timeout")," "),(0,a.kt)("p",null,"Specify the read timeout for the server."))}c.isMDXComponent=!0}}]);