"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[8290],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=i,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},69976:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3},o="Incidents",s={unversionedId:"community-waf/docs/incident",id:"community-waf/docs/incident",title:"Incidents",description:"Overview",source:"@site/docs/community-waf/docs/incident.md",sourceDirName:"community-waf/docs",slug:"/community-waf/docs/incident",permalink:"/wiki/community-waf/docs/incident",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"communitySidebar",previous:{title:"Signatures",permalink:"/wiki/community-waf/docs/waf/signatures"},next:{title:"SSL Certificates",permalink:"/wiki/community-waf/docs/ssl_certificates"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Incident Page",id:"incident-page",level:4},{value:"Incident Details",id:"incident-details",level:4},{value:"Type of Incidents",id:"type-of-incidents",level:4},{value:"How to Use:",id:"how-to-use",level:2},{value:"Filter",id:"filter",level:3},{value:"Refresh",id:"refresh",level:3},{value:"Date Range",id:"date-range",level:3}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"incidents"},"Incidents"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Haltdos solutions provide real-time alerts for various types of incidents from attacks to accounting/audit incidents through Events. Events can be generated by the platform and various Apps subscribed to in your Stack. You can view all events or filter them based on category, scope, and time."),(0,i.kt)("h4",{id:"incident-page"},"Incident Page"),(0,i.kt)("p",null,"All events are listed on the Events Page. Filters are available to view events of a specific App/ Zone/ Listener and Category. Each event is identified by a unique Event ID which can also be used for searching a specific event on the Events Page. All events are listed in decreasing chronological order."),(0,i.kt)("h4",{id:"incident-details"},"Incident Details"),(0,i.kt)("p",null,"Depending upon the type of event, clicking on any Event shows details of the incident. For example, a WAF Attack Event will detail the request/response that got dropped along with details of the request and the reason for dropping the request."),(0,i.kt)("p",null,"Further to detailing the incident through Events, users can perform various actions. For example, virtual patching functionality is implemented through actions in Event Details. Virtual Patching is the ability to create custom WAF rules from the result of a security scan."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Events",src:n(67706).Z,width:"1642",height:"983"})),(0,i.kt)("h4",{id:"type-of-incidents"},"Type of Incidents"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Drop Incidents"),":")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Recorded Incidents"),":")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Server Errors"),":")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Health Incidents")," :"))),(0,i.kt)("h2",{id:"how-to-use"},"How to Use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"WAF")," > ",(0,i.kt)("strong",{parentName:"li"},"Incidents"),"."),(0,i.kt)("li",{parentName:"ol"},"Choose Type of Incidents that you want to view.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You may also check the previous incidents by changing the date.")),(0,i.kt)("h3",{id:"filter"},"Filter"),(0,i.kt)("p",null,"Users can filter out the events based on type of incidents."),(0,i.kt)("h3",{id:"refresh"},"Refresh"),(0,i.kt)("p",null,"Users can enable auto-refresh in order to refresh the real-time alerts for requests. The details will be displayed in events for the specific type of request."),(0,i.kt)("h3",{id:"date-range"},"Date Range"),(0,i.kt)("p",null,"Users are allowed to select an appropriate date range no longer than 1 month."))}d.isMDXComponent=!0},67706:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/incidents-3993c77119dfa066ce56861cfe55a3e5.png"}}]);