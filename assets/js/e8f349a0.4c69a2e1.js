"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5669],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},d=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,o=t.originalType,p=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),u=s(n),m=l,g=u["".concat(p,".").concat(m)]||u[m]||c[m]||o;return n?r.createElement(g,a(a({ref:e},d),{},{components:n})):r.createElement(g,a({ref:e},d))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=n.length,a=new Array(o);a[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:l,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53766:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),l=(n(67294),n(3905));const o={sidebar_position:3},a="Miscellaneous",i={unversionedId:"ddos/docs/profile/application/miscellaneous",id:"ddos/docs/profile/application/miscellaneous",title:"Miscellaneous",description:"It helps in stopping different kinds of SMTP flood attack.",source:"@site/docs/ddos/docs/profile/application/miscellaneous.md",sourceDirName:"ddos/docs/profile/application",slug:"/ddos/docs/profile/application/miscellaneous",permalink:"/wiki/ddos/docs/profile/application/miscellaneous",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"ddosSidebar",previous:{title:"DNS",permalink:"/wiki/ddos/docs/profile/application/dns"},next:{title:"Network Rules",permalink:"/wiki/ddos/docs/profile/network_rules"}},p={},s=[{value:"<strong>How to Go:</strong>",id:"how-to-go",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Allow Inbound NTP Monlist</strong>",id:"allow-inbound-ntp-monlist",level:5},{value:"<strong>Allow Outbound NTP Monlist</strong>",id:"allow-outbound-ntp-monlist",level:5},{value:"<strong>Enter failed FTP login attempts per IP</strong>",id:"enter-failed-ftp-login-attempts-per-ip",level:5},{value:"<strong>Enter failed SMTP login attempts per IP</strong>",id:"enter-failed-smtp-login-attempts-per-ip",level:5}],d={toc:s};function c(t){let{components:e,...o}=t;return(0,l.kt)("wrapper",(0,r.Z)({},d,o,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"miscellaneous"},"Miscellaneous"),(0,l.kt)("p",null,"It helps in stopping different kinds of SMTP flood attack."),(0,l.kt)("hr",null),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"miscellaneous_settimgs",src:n(60904).Z,width:"1277",height:"419"})),(0,l.kt)("h3",{id:"how-to-go"},(0,l.kt)("strong",{parentName:"h3"},"How to Go:")),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profile > Application > Miscellaneous Settings"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure the settings ")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Click on Save Changes."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allow Inbound NTP Monlist"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Allow Outbound NTP Monlist"),(0,l.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enter failed FTP login attempts per IP"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Enter failed SMTP login attempts per IP"),(0,l.kt)("td",{parentName:"tr",align:null},"Integer"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("h3",{id:"description"},(0,l.kt)("strong",{parentName:"h3"},"Description:")),(0,l.kt)("h5",{id:"allow-inbound-ntp-monlist"},(0,l.kt)("strong",{parentName:"h5"},"Allow Inbound NTP Monlist")),(0,l.kt)("p",null,"This option allow accepting NTP monito list from Internet."),(0,l.kt)("h5",{id:"allow-outbound-ntp-monlist"},(0,l.kt)("strong",{parentName:"h5"},"Allow Outbound NTP Monlist")),(0,l.kt)("p",null,"This option allow accepting NTP monito list to be sent to Internet."),(0,l.kt)("h5",{id:"enter-failed-ftp-login-attempts-per-ip"},(0,l.kt)("strong",{parentName:"h5"},"Enter failed FTP login attempts per IP")),(0,l.kt)("p",null,"This mitigation limits failed FTP login attempt allowed by an IP"),(0,l.kt)("h5",{id:"enter-failed-smtp-login-attempts-per-ip"},(0,l.kt)("strong",{parentName:"h5"},"Enter failed SMTP login attempts per IP")),(0,l.kt)("p",null,"This mitigation limits failed SMTP login attempt allowed by an IP"))}c.isMDXComponent=!0},60904:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/ddos17-a66df5d9d7d790703c09ceae19c3dc1d.png"}}]);