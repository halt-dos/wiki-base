"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1636],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var i=n.createContext({}),p=function(t){var e=n.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return n.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),g=p(r),d=o,m=g["".concat(i,".").concat(d)]||g[d]||u[d]||a;return r?n.createElement(m,l(l({ref:e},c),{},{components:r})):n.createElement(m,l({ref:e},c))}));function d(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,l=new Array(a);l[0]=g;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:o,l[1]=s;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},71912:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:1},l="Syslog",s={unversionedId:"products/hdplatform/stacks/integrations/syslog",id:"products/hdplatform/stacks/integrations/syslog",title:"Syslog",description:"Integration with Syslog Server for monitoring Haltdos appliances",source:"@site/docs/products/hdplatform/stacks/integrations/syslog.md",sourceDirName:"products/hdplatform/stacks/integrations",slug:"/products/hdplatform/stacks/integrations/syslog",permalink:"/products/hdplatform/stacks/integrations/syslog",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Integrations",permalink:"/products/hdplatform/stacks/integrations/"},next:{title:"API Tokens",permalink:"/products/hdplatform/stacks/integrations/api_tokens"}},i={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],c={toc:p};function u(t){let{components:e,...a}=t;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"syslog"},"Syslog"),(0,o.kt)("p",null,"Integration with Syslog Server for monitoring Haltdos appliances"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syslog")," stands for ",(0,o.kt)("strong",{parentName:"p"},"System Logging Protocol")," and is a standard protocol used to send system log or event messages to a specific server, called a ",(0,o.kt)("strong",{parentName:"p"},"Syslog server"),". It is primarily used to collect various device logs from several different machines in a central location for monitoring and review."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Haltdos")," supports integration with 3rd party Syslog service for sending real-time alerts. All logs in ",(0,o.kt)("strong",{parentName:"p"},"Haltdos")," are written in CEF format. The body of the log entry itself is JSON format. This allows simple integration with monitoring tools such as SIEM solutions without the need for writing custom parsers."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"It is recommended to configure Syslog (if available) for centralized monitoring of all Haltdos appliances")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"syslog",src:r(63284).Z,width:"1278",height:"405"})),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"Stack > Settings > Integration> Syslog"),"."),(0,o.kt)("li",{parentName:"ol"},"Configure your settings"),(0,o.kt)("li",{parentName:"ol"},"Click Save")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,o.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,o.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Syslog Export Enabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,o.kt)("td",{parentName:"tr",align:null},"False")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,o.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,o.kt)("td",{parentName:"tr",align:null},"UDP")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Host Name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Syslog Server Port"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syslog Export Enabled")),(0,o.kt)("p",null,"This option allows users to enable or disable exporting Syslog to an external server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Protocol")),(0,o.kt)("p",null,"This option allows the user to select the protocol type on which the Syslog server is running. Users can select either TCP or UDP."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Host Name")),(0,o.kt)("p",null,"This option helps the user to mention the IP address or the hostname of the external backup server on which the Syslog service is exporting the log details."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Syslog Server Port")),(0,o.kt)("p",null,"This option allows the users to mention the port number to communicate with Syslog server."))}u.isMDXComponent=!0},63284:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/syslog1-4f5910940aa19d15f69d3de9d5f88899.png"}}]);