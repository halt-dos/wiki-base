"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8985],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=a.createContext({}),p=function(e){var r=a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=n,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||o;return t?a.createElement(h,s(s({ref:r},u),{},{components:t})):a.createElement(h,s({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},24746:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={},s="Server Groups",i={unversionedId:"adc/listeners/server_groups/server_groups",id:"adc/listeners/server_groups/server_groups",title:"Server Groups",description:"User can determine load balancing mechanism and specify Server Groups.",source:"@site/docs/adc/listeners/server_groups/server_groups.md",sourceDirName:"adc/listeners/server_groups",slug:"/adc/listeners/server_groups/",permalink:"/adc/listeners/server_groups/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Geo Filtering",permalink:"/adc/listeners/geo_filtering"},next:{title:"Servers",permalink:"/adc/listeners/server_groups/servers"}},l={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Group Name",id:"group-name",level:4},{value:"Monitor",id:"monitor",level:4},{value:"SSL",id:"ssl",level:4},{value:"View Dashboard",id:"view-dashboard",level:3}],u={toc:p};function d(e){let{components:r,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,o,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"server-groups"},"Server Groups"),(0,n.kt)("p",null,"User can determine load balancing mechanism and specify Server Groups."),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Server Groups helps user to distributes network traffic to load balance across group of servers, for this at first we define a group name. Creating a group name in Servers Group helps to optimize and increase throughput of solution."),(0,n.kt)("p",null,"Purpose of Server Groups:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Server Groups is specifically designed for high availability solution. In case, if a server is having a problem another server from the group takes over issue. This ensures the high availability of solution.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If an active server from the group requires maintenance, it can be stopped while other servers handles its load. Thus, makes the maintenance more easier. The Server Groups can be configured and managed easily without any trouble.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Set up is easy because of Server Groups. If we want to change or modify at every servers, we can do it easily. Solution provides user to edit or modify the Group Name, Monitor, SSL and save the changes."))),(0,n.kt)("p",null,"Server Groups provide user two functionality at a page to add Server Group and View Dashboard for optimal solution."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Server group",src:t(90342).Z,width:"1567",height:"375"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to Stack > ",(0,n.kt)("a",{parentName:"p",href:"/adc/docs"},(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",{parentName:"p",href:"../../listeners/"},(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > Server groups.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Server Group")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,n.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,n.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Group Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Monitor"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Disabled")))),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("h4",{id:"group-name"},"Group Name"),(0,n.kt)("p",null,"This option allows users to specify the user-friendly name to identify the Group Name. "),(0,n.kt)("h4",{id:"monitor"},"Monitor"),(0,n.kt)("p",null,"This option allows users to set the monitor type which continuously test upstream server, avoid the failed server and gracefully add recovered servers into the server group."),(0,n.kt)("h4",{id:"ssl"},"SSL"),(0,n.kt)("p",null,"This option allows users to enable/disable ",(0,n.kt)("strong",{parentName:"p"},"SSL"),". It helps to add more operational settings for send information safely and efficiently with the support of SSL Settings. "),(0,n.kt)("h3",{id:"view-dashboard"},"View Dashboard"),(0,n.kt)("p",null,"This option allows user to see the Server Analytics which is a dynamically report of server groups, show the analysis of resources, their upstream summary based on given date range. According to Date Range, dashboard shows report from past 5 Minutes to Custom Range."),(0,n.kt)("p",null,"This analytics is different from the homepage's analytics because here the dashboard is organized on the basis of server group and the analytics located under the ",(0,n.kt)("strong",{parentName:"p"},"Stack")," option is organized on the basis of ",(0,n.kt)("a",{parentName:"p",href:"../../listeners/"},(0,n.kt)("strong",{parentName:"a"},"listeners")),"."))}d.isMDXComponent=!0},90342:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/servergroup-89f18fde1edfa82f934ac585d13b4034.png"}}]);