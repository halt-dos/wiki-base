"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,k=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64498:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:8},l="Action Scripts",s={unversionedId:"adc/listeners/action_scripts",id:"adc/listeners/action_scripts",title:"Action Scripts",description:"---",source:"@site/docs/adc/listeners/action_scripts.md",sourceDirName:"adc/listeners",slug:"/adc/listeners/action_scripts",permalink:"/adc/listeners/action_scripts",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"Rate Limit Rules",permalink:"/adc/listeners/rules/rate_limit_rules"},next:{title:"Incidents",permalink:"/adc/incidents"}},c={},o=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enabled",id:"enabled",level:4},{value:"Script Name",id:"script-name",level:4},{value:"Run Freequency",id:"run-freequency",level:4},{value:"Next Run",id:"next-run",level:4},{value:"Timezones",id:"timezones",level:4},{value:"Script Area",id:"script-area",level:4}],p={toc:o};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"action-scripts"},"Action Scripts"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Actions Scripts can be run on the set time intervals. Users can set the script with freequency details and at specified time script will run automatically."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"actionscript",src:n(38030).Z,width:"1919",height:"921"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("a",{parentName:"p",href:"/adc/docs"},(0,a.kt)("strong",{parentName:"a"},"SLB")),"  > ",(0,a.kt)("a",{parentName:"p",href:"../listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > Action Scripts.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save Changes."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Script name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Run Freequency"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Next Run"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop- down"),(0,a.kt)("td",{parentName:"tr",align:null},"01/01/1970")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timezones"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Asia/Culcutta")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Script Area"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("h4",{id:"enabled"},"Enabled"),(0,a.kt)("p",null,"Users can enable or disable the script."),(0,a.kt)("h4",{id:"script-name"},"Script Name"),(0,a.kt)("p",null,"User can specify the script name."),(0,a.kt)("h4",{id:"run-freequency"},"Run Freequency"),(0,a.kt)("p",null,"Users can sprcify the run freequency of the rule."),(0,a.kt)("h4",{id:"next-run"},"Next Run"),(0,a.kt)("p",null,"User can specify the next run time "),(0,a.kt)("h4",{id:"timezones"},"Timezones"),(0,a.kt)("p",null,"Users can specify the local timezones so that script can run on the desired time."),(0,a.kt)("h4",{id:"script-area"},"Script Area"),(0,a.kt)("p",null,"User can specify the script as per the need."))}u.isMDXComponent=!0},38030:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/actionscript-937eab41ecc4208e6d2fd4b099d70196.png"}}]);