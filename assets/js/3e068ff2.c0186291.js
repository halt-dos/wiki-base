"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2434],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(i,".").concat(f)]||d[f]||c[f]||l;return n?r.createElement(m,s(s({ref:t},u),{},{components:n})):r.createElement(m,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<l;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},91187:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:5},s="Events",o={unversionedId:"saas/waf/events",id:"saas/waf/events",title:"Events",description:"---",source:"@site/docs/saas/waf/events.md",sourceDirName:"saas/waf",slug:"/saas/waf/events",permalink:"/wiki/saas/waf/events",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"saasSidebar",previous:{title:"SSL Certificates",permalink:"/wiki/saas/waf/ssl_certificates"},next:{title:"Analytics",permalink:"/wiki/saas/waf/analytics"}},i={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"events"},"Events"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos Cloud solution provides real-time alerts for various types of incidents on your configured zone through Events. Events can be generated by different Apps. However, all events are grouped into events per zone or listener. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event Details")),(0,a.kt)("p",null,"Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request."),(0,a.kt)("p",null,"Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event Types")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"All"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays all the events for all the Apps subscribed.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Attack"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays details of blocked HTTP request/response")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Health"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays details of healthy and unhealthy upstream web servers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Download"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays all the file download events")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Failed Jobs"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays the events for failed jobs")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scan"),(0,a.kt)("td",{parentName:"tr",align:null},"Details of security scan results")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Server"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays details of server error observed.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Filter")),(0,a.kt)("p",null,"Users can filter out the events based on All, App, Zone, and Listener configured for the specific app."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Download")),(0,a.kt)("p",null,"Users can download the events specifying the event count, start time & date, and category i.e. All, Attack, Health. Upon specifying the fields user will click on the Download button and a spreadsheet will be downloaded."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Auto Refresh")),(0,a.kt)("p",null,"Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."))}c.isMDXComponent=!0}}]);