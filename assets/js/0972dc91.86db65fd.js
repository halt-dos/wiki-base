"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[67862],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),p=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(k,i(i({ref:e},c),{},{components:n})):r.createElement(k,i({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4479:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:1},i="AAA Policy",s={unversionedId:"products/platform/stacks/settings/aaa_policy",id:"products/platform/stacks/settings/aaa_policy",title:"AAA Policy",description:"Integration with AAA service for securing access to Haltdos appliances",source:"@site/docs/products/platform/stacks/settings/aaa_policy.md",sourceDirName:"products/platform/stacks/settings",slug:"/products/platform/stacks/settings/aaa_policy",permalink:"/rc/products/platform/stacks/settings/aaa_policy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Settings",permalink:"/rc/products/platform/stacks/settings/"},next:{title:"Forensics",permalink:"/rc/products/platform/stacks/settings/forensics"}},l={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:3}],c={toc:p};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aaa-policy"},"AAA Policy"),(0,a.kt)("p",null,"Integration with AAA service for securing access to Haltdos appliances"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"AAA is a standard-based framework used to control who is permitted to use network resources (through authentication), what they are authorized to do (through authorization), and capture the actions performed while accessing the network (through accounting)."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authentication - The process by which it can be identified that the user, which wants to access the network resources.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authorization - It provides capabilities to enforce policies on network resources after the user has gained access to the network resources through authentication.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Accounting - It provides means of monitoring and capturing the events done by the user while accessing the network resources."))),(0,a.kt)("p",null,"Haltdos supports built-in integration AAA solutions such as RADIUS or TACACS+. These services ensure authentication, authorization, and accounting when accessing Haltdos appliances."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Depending upon the organization's policy, if AAA is enabled, the same should also be configured for Haltdos appliances")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"aaa_policy",src:n(52257).Z,width:"1805",height:"835"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > Settings > AAA"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AAA Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service"),(0,a.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,a.kt)("td",{parentName:"tr",align:null},"RADIUS")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Allow SSH"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Host Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Secret"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"AAA Enabled")),(0,a.kt)("p",null,"This option allows the user to enable or disable the AAA feature. By default, it is set to disable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Service")),(0,a.kt)("p",null,"This option allows the user to select the type of implementation it can be either ",(0,a.kt)("strong",{parentName:"p"},"TACACS")," or ",(0,a.kt)("strong",{parentName:"p"},"RADIUS"),"."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Terminal Access Controller Access Control System (TACACS+)")," is a Cisco proprietary protocol that is used for the communication of the Cisco client and Cisco ACS server. It uses TCP port number ",(0,a.kt)("strong",{parentName:"p"},"49")," which makes it reliable."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Remote Access Dial-In User Service (RADIUS)")," is an open standard protocol used for the communication between any vendor AAA client and ACS server. It uses port number ",(0,a.kt)("strong",{parentName:"p"},"1812")," for authentication and authorization and ",(0,a.kt)("em",{parentName:"p"},"1813")," for accounting."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Host Name")),(0,a.kt)("p",null,"This option allows the users to specify the hostname or IP address of ",(0,a.kt)("strong",{parentName:"p"},"AAA")," server."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allow SSH")),(0,a.kt)("p",null,"This option will only apprears when ",(0,a.kt)("strong",{parentName:"p"},"AAA")," type is selected to ",(0,a.kt)("strong",{parentName:"p"},"RADIUS"),". When this option is enabled it allow ",(0,a.kt)("strong",{parentName:"p"},"SSH")," if ",(0,a.kt)("strong",{parentName:"p"},"Radius Server")," is down "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Secret")),(0,a.kt)("p",null,"This option allows the user to mention the credential information to access AAA server."))}u.isMDXComponent=!0},52257:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/aaa_policy_newui-3abb87d33e7989eba98f8590290fae3b.png"}}]);