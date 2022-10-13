"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5661],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67037:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:3},i="Sites",o={unversionedId:"gslb/docs/sites",id:"gslb/docs/sites",title:"Sites",description:"Identification of global data centers through sites",source:"@site/docs/gslb/docs/sites.md",sourceDirName:"gslb/docs",slug:"/gslb/docs/sites",permalink:"/gslb/docs/sites",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"gslbSidebar",previous:{title:"Domain Filters",permalink:"/gslb/docs/domain-filters"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description :",id:"description-",level:3}],c={toc:p};function u(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sites"},"Sites"),(0,a.kt)("p",null,"Identification of global data centers through sites"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A GSLB site is the logical collection of GSLB virtual server, GSLB service, LB virtual server, etc. A GSLB service identifies a load balancing or content switching virtual server, which can be at the local site or a remote site. If the GSLB virtual server selects a load balancing or content switching virtual server at a remote site, it sends the virtual server\u2019s IP address to the DNS server. The DNS server sends it to the client. The client then resends the request to the new virtual server at the new IP."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"sites",src:n(649).Z,width:"1813",height:"935"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("p",null,"1.Follow the links: ",(0,a.kt)("strong",{parentName:"p"},"Stack")," > ",(0,a.kt)("strong",{parentName:"p"},"GSLB")," > ",(0,a.kt)("strong",{parentName:"p"},"Sites")," > ",(0,a.kt)("strong",{parentName:"p"},"Add Site"),"."),(0,a.kt)("p",null,"2.Click on ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described in the table below."),(0,a.kt)("p",null,"3.Click on ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Site Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Site Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Site ID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Stack ID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Site IP"),(0,a.kt)("td",{parentName:"tr",align:null},"Server I.P."),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Username"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Password"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Empty")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Inactivity Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"60")))),(0,a.kt)("h3",{id:"description-"},"Description :"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Site Enabled ")),(0,a.kt)("p",null,"Specify to enable the Site."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Site Name ")),(0,a.kt)("p",null,"Specify the name for your site."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Site ID")),(0,a.kt)("p",null,"It is auto generated function."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Site IP")),(0,a.kt)("p",null,"User can Specify the IP address of the Site "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Port")),(0,a.kt)("p",null,"It specifies the port number to connect "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Username")),(0,a.kt)("p",null,"User can set a username to access the site "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Password ")),(0,a.kt)("p",null,"User can set a password to protect the site from any unknown login"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Inactivity Threshold")),(0,a.kt)("p",null,"In this User can specify when no events or flows are generated in the specified time."))}u.isMDXComponent=!0},649:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/sites-30c9eccda0d62049c524dad7ba5146c2.png"}}]);