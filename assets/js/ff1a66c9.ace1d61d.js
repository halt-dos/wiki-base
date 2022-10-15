"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4324],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84566:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},l="Domain Filters",o={unversionedId:"gslb/domain-filters",id:"gslb/domain-filters",title:"Domain Filters",description:"---",source:"@site/docs/gslb/domain-filters.md",sourceDirName:"gslb",slug:"/gslb/domain-filters",permalink:"/gslb/domain-filters",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Rules",permalink:"/gslb/listener/rules"},next:{title:"Sites",permalink:"/gslb/sites"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}],c={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"domain-filters"},"Domain Filters"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Domain Filters")," allows a DNS resolver to modify DNS records. It was originally developed as a way to block access to dangerous websites.  "),(0,a.kt)("p",null,"For example, if a computer queries the IP address of a known dangerous site that spreads malware, the DNS resolver can return NXDOMAIN as the DNS response, so the computer can\u2019t connect to the dangerous site. This is the original use case. As such, Domain Filter is also known as ",(0,a.kt)("strong",{parentName:"p"},"DNS firewall."),"  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain filters",src:n(62227).Z,width:"1812",height:"656"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack")," > ",(0,a.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Domain Filter")," "),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Add Domain Filter"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter the name of file and mention the domain name and click on ",(0,a.kt)("strong",{parentName:"li"},"Save changes"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Select Listener")," "),(0,a.kt)("li",{parentName:"ol"},"Go to Domain Filter Files > Select the file from Drop Down (created at Domain Filter )"),(0,a.kt)("li",{parentName:"ol"},"Click On ",(0,a.kt)("strong",{parentName:"li"},"Save Changes")," > Domain Filter File will be selected.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain filters",src:n(99521).Z,width:"1837",height:"840"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Script Area"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"domain filters",src:n(92889).Z,width:"1808",height:"737"})),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Name")),(0,a.kt)("p",null,"Users can specify the name for the Domain Filter files."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Domain Names")),(0,a.kt)("p",null,"Users can mention the domains of which record need to be blocked."))}m.isMDXComponent=!0},92889:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/domain_file-92965d04539e143bb897f906e3a594ce.png"},99521:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/domain_filter_listener-803bb5afd10ad098976e4aa95242dd93.png"},62227:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/domain_filters-77c2d4d7c9c5b3790ea760a6acfd4233.png"}}]);