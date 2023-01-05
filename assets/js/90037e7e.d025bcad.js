"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[95958],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,g=m["".concat(i,".").concat(d)]||m[d]||c[d]||o;return r?n.createElement(g,l(l({ref:t},u),{},{components:r})):n.createElement(g,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},69937:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="Server Groups",s={unversionedId:"products/waf/listener/server_groups/servergroup",id:"products/waf/listener/server_groups/servergroup",title:"Server Groups",description:"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen",source:"@site/docs/products/waf/listener/server_groups/servergroup.md",sourceDirName:"products/waf/listener/server_groups",slug:"/products/waf/listener/server_groups/servergroup",permalink:"/rc/products/waf/listener/server_groups/servergroup",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Compression",permalink:"/rc/products/waf/listener/performance/compression"},next:{title:"Load Balancing",permalink:"/rc/products/waf/listener/server_groups/loadbalancing"}},i={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description",id:"description",level:2}],u={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"server-groups"},"Server Groups"),(0,a.kt)("p",null,"User can select the Load Balancing mechanism and specify Origin Server IPs on this screen"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"To load balance HTTP traffic to a group of servers, first, you need to define the group. Servers in the group are configured using the ",(0,a.kt)("a",{parentName:"p",href:"/rc/products/waf/listener/server_groups/servers"},(0,a.kt)("strong",{parentName:"a"},"servers"))," page. To pass requests to a server group, use ",(0,a.kt)("strong",{parentName:"p"},"Upstream Rules"),"."),(0,a.kt)("p",null,"This is useful for:"),(0,a.kt)("p",null,"1.Auto-scaling, when you need to add more servers."),(0,a.kt)("p",null,"2.Backup Server, When all active servers breach the failure threshold then the backup server will be up and inline to handle the traffic."),(0,a.kt)("p",null,"3.Quick Setup, when you need to change upstream server settings such as server weight, active connections, slow start, failure timeouts."),(0,a.kt)("p",null,"Monitoring, when you get the state of the server or server group with one command."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Server Group",src:r(99804).Z,width:"1836",height:"763"})),(0,a.kt)("h2",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Server Groups")),(0,a.kt)("p",null,"2.Click ",(0,a.kt)("strong",{parentName:"p"},"Add Server Group")," and Configure details."),(0,a.kt)("p",null,"3.Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,a.kt)("td",{parentName:"tr",align:null},"Select from existing monitors"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SSL"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Max Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connection Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Send Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Read Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null," 1.",(0,a.kt)("strong",{parentName:"p"},"Group Name")," "),(0,a.kt)("p",null," Specify a user-friendly name to identify the server group. The group name takes alpha-numeric input.  "),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Monitor")),(0,a.kt)("p",null,"This option alllows user to attach any existing monitor to the server group."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"SSL")),(0,a.kt)("p",null,"This option allows user to enable or disable SSL for the server group."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Max Connection:"),"\nThis option allows user to specify the number of maximum connections allowed to the specific server."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Connection Timeout:"),"\nThis option allows user to specify the connection timeout for the server."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Send Timeout:"),"\nThis option allows user to specify the send timeout for the server. "),(0,a.kt)("p",null," 7.",(0,a.kt)("strong",{parentName:"p"},"Read Timeout:"),"\nThis option allows user to specify the read timeout for the server."))}c.isMDXComponent=!0},99804:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/servergroup-115c5755033914ae6302919ef17e75e0.png"}}]);