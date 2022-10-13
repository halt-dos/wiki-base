"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4391],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},90009:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:5},o="Monitors",i={unversionedId:"adc/docs/listeners/monitors",id:"adc/docs/listeners/monitors",title:"Monitors",description:"---",source:"@site/docs/adc/docs/listeners/monitors.md",sourceDirName:"adc/docs/listeners",slug:"/adc/docs/listeners/monitors",permalink:"/adc/docs/listeners/monitors",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"adcSidebar",previous:{title:"SNMP",permalink:"/adc/docs/listeners/server_groups/snmp"},next:{title:"Performance",permalink:"/adc/docs/listeners/performance"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Monitor Name",id:"monitor-name",level:4},{value:"Health Check Interval",id:"health-check-interval",level:4},{value:"Fail Threshold",id:"fail-threshold",level:4},{value:"Pass Threshold",id:"pass-threshold",level:4},{value:"Monitor Timeout",id:"monitor-timeout",level:4},{value:"Health Check Type",id:"health-check-type",level:4}],c={toc:p};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"monitors"},"Monitors"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack")," > ",(0,a.kt)("a",{parentName:"p",href:"/adc/docs"},(0,a.kt)("strong",{parentName:"a"},"SLB")),"  > ",(0,a.kt)("a",{parentName:"p",href:"../listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,a.kt)("strong",{parentName:"p"},"Monitors"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Add Monitor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"monitor1",src:r(15669).Z,width:"1564",height:"742"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Health Check Interval"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fail Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Pass Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Monitor Timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Health Check Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("h4",{id:"monitor-name"},"Monitor Name"),(0,a.kt)("p",null,"This option allows users to specify a user-friendly name to monitor."),(0,a.kt)("h4",{id:"health-check-interval"},"Health Check Interval"),(0,a.kt)("p",null,"This option allows users to specify the health check interval in seconds."),(0,a.kt)("h4",{id:"fail-threshold"},"Fail Threshold"),(0,a.kt)("p",null,"This option allows users to specify the fail threshold."),(0,a.kt)("h4",{id:"pass-threshold"},"Pass Threshold"),(0,a.kt)("p",null,"This option allows users to specify the pass threshold."),(0,a.kt)("h4",{id:"monitor-timeout"},"Monitor Timeout"),(0,a.kt)("p",null,"This option allows users to specify the timeout interval in seconds."),(0,a.kt)("h4",{id:"health-check-type"},"Health Check Type"),(0,a.kt)("p",null,"This option allows users to specify the health check type for the load balancer."))}d.isMDXComponent=!0},15669:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/monitor1-8790d72859ad8f5cbacd4063449aad83.png"}}]);