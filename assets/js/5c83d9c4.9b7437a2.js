"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5699],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,c=o(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15177:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:14},l="Action Script",o={unversionedId:"waf/docs/listener/actionscript",id:"waf/docs/listener/actionscript",title:"Action Script",description:"Actions Scripts can be run on the set time intervals. Users can set the script with frequency details and at specified time script will run automatically.",source:"@site/docs/waf/docs/listener/actionscript.md",sourceDirName:"waf/docs/listener",slug:"/waf/docs/listener/actionscript",permalink:"/wiki/waf/docs/listener/actionscript",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"wafSidebar",previous:{title:"Learning",permalink:"/wiki/waf/docs/listener/learning"},next:{title:"User Groups",permalink:"/wiki/waf/docs/usergroups"}},p={},s=[{value:"How to Use:",id:"how-to-use",level:2},{value:"Description:",id:"description",level:2}],c={toc:s};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"action-script"},"Action Script"),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Actions Scripts can be run on the set time intervals. Users can set the script with frequency details and at specified time script will run automatically."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Action Script",src:n(31430).Z,width:"1801",height:"795"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use:"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Action Scripts"),".\n2.Configure your settings.\n3.Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Script name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Run Freequency"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Next Run"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop- down"),(0,a.kt)("td",{parentName:"tr",align:null},"01/01/1970")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Timezones"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Asia/Culcutta")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Script Area"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h2",{id:"description"},"Description:"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Enabled:")),(0,a.kt)("p",null,"Users can enable or disable the script."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Script Name:")),(0,a.kt)("p",null,"User can specify the script name."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Run Freequency:")),(0,a.kt)("p",null,"Users can sprcify the run freequency of the rule."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Next Run")),(0,a.kt)("p",null,"User can specify the next run time "),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Timezones:")),(0,a.kt)("p",null,"Users can specify the local timezones so that script can run on the desired time."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Script Area")),(0,a.kt)("p",null,"User can specify the script as per the need."))}u.isMDXComponent=!0},31430:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/actionscript-d1ef610d678170f9f022d70bf3bc6304.png"}}]);