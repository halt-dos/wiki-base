"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[33988],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function c(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44309:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:1},i="Servers",l={unversionedId:"community/docs/waf/server_farm/servers",id:"community/docs/waf/server_farm/servers",title:"Servers",description:"Overview",source:"@site/docs/community/docs/waf/server_farm/servers.md",sourceDirName:"community/docs/waf/server_farm",slug:"/community/docs/waf/server_farm/servers",permalink:"/community/docs/waf/server_farm/servers",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Bot Protection",permalink:"/community/docs/waf/bot_protection"},next:{title:"Load Balancing",permalink:"/community/docs/waf/server_farm/load_balancing"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description:",id:"description",level:3},{value:"<strong>Server</strong>",id:"server",level:4},{value:"<strong>Port</strong>",id:"port",level:4},{value:"<strong>Weight</strong>",id:"weight",level:4},{value:"<strong>Monitor</strong>",id:"monitor",level:4},{value:"<strong>Backup</strong>",id:"backup",level:4},{value:"<strong>Mode</strong>",id:"mode",level:4},{value:"<strong>Max Connection</strong>",id:"max-connection",level:4},{value:"<strong>Connection Timeout</strong>",id:"connection-timeout",level:4},{value:"<strong>Send Timeout</strong>",id:"send-timeout",level:4},{value:"<strong>Read Timeout</strong>",id:"read-timeout",level:4}],u={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"servers"},"Servers"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Users can add/delete the backend servers. Users are also allowed to modify the server settings like, changing server mode, set the backend port, attach monitor to the backend server, set max concurrent connection etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Servers",src:r(30730).Z,width:"1918",height:"976"})),(0,a.kt)("h2",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Server Farm")," > ",(0,a.kt)("strong",{parentName:"p"},"Servers")),(0,a.kt)("p",null,"2.Click ",(0,a.kt)("strong",{parentName:"p"},"Add Server")," and configure it with basic and advanced configuration."),(0,a.kt)("p",null,"3.Set the configurations and ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server"),(0,a.kt)("td",{parentName:"tr",align:null},"IP"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"80")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Weight"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,a.kt)("td",{parentName:"tr",align:null},"Existing monitor"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Backup"),(0,a.kt)("td",{parentName:"tr",align:null},"TRUE/FALSE"),(0,a.kt)("td",{parentName:"tr",align:null},"FALSE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Ready/Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Ready")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Max Connection"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Connection Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Send Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Read Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("h4",{id:"server"},(0,a.kt)("strong",{parentName:"h4"},"Server")),(0,a.kt)("p",null,"This option allows user to specify the IP address for the server for serving the request for the application."),(0,a.kt)("h4",{id:"port"},(0,a.kt)("strong",{parentName:"h4"},"Port")),(0,a.kt)("p",null,"This option allows user to set the port for the back-end application server for communication."),(0,a.kt)("h4",{id:"weight"},(0,a.kt)("strong",{parentName:"h4"},"Weight")),(0,a.kt)("p",null,"This option allows user to specify the weight of the server. Higher the weight more requests will be served by that server. "),(0,a.kt)("h4",{id:"monitor"},(0,a.kt)("strong",{parentName:"h4"},"Monitor")),(0,a.kt)("p",null,"This option alows user to select from the monitors created. Monitors help in monitoring the health of the server."),(0,a.kt)("h4",{id:"backup"},(0,a.kt)("strong",{parentName:"h4"},"Backup")),(0,a.kt)("p",null,"This option allows user to specify if backup is allowed for the server. In case of primary failure, the backup will be up and running."),(0,a.kt)("h4",{id:"mode"},(0,a.kt)("strong",{parentName:"h4"},"Mode")),(0,a.kt)("p",null,"This option allows user to specify the server mode, either it is ready or down."),(0,a.kt)("h4",{id:"max-connection"},(0,a.kt)("strong",{parentName:"h4"},"Max Connection")),(0,a.kt)("p",null,"This option allows user to specify the number of maximum connections allowed to the specific server."),(0,a.kt)("h4",{id:"connection-timeout"},(0,a.kt)("strong",{parentName:"h4"},"Connection Timeout")),(0,a.kt)("p",null,"This option allows user to specify the connection timeout for the server."),(0,a.kt)("h4",{id:"send-timeout"},(0,a.kt)("strong",{parentName:"h4"},"Send Timeout")),(0,a.kt)("p",null,"This option allows user to specify the send timeout for the server. "),(0,a.kt)("h4",{id:"read-timeout"},(0,a.kt)("strong",{parentName:"h4"},"Read Timeout")),(0,a.kt)("p",null,"This option allows user to specify the read timeout for the server."))}d.isMDXComponent=!0},30730:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/serversettings-8588e1eea717e2f9f217e0094c4839cd.png"}}]);