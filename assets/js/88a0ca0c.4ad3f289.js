"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[47599],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),u=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(h,l(l({ref:e},p),{},{components:n})):r.createElement(h,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9523:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:5},l="Scan Importer",i={unversionedId:"products/waf/tools/scan_importer",id:"products/waf/tools/scan_importer",title:"Scan Importer",description:"---",source:"@site/docs/products/waf/tools/scan_importer.md",sourceDirName:"products/waf/tools",slug:"/products/waf/tools/scan_importer",permalink:"/products/waf/tools/scan_importer",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Match Finder",permalink:"/products/waf/tools/match_finder"},next:{title:"Virtual Patching",permalink:"/products/waf/tools/virtualpatching"}},s={},u=[{value:"Overview",id:"overview",level:3},{value:"How to use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Name</strong>",id:"name",level:5},{value:"<strong>Scan Tool</strong>",id:"scan-tool",level:5},{value:"<strong>HTTP method</strong>",id:"http-method",level:5},{value:"<strong>URL</strong>",id:"url",level:5},{value:"<strong>Import Frequency</strong>",id:"import-frequency",level:5},{value:"<strong>Next Run</strong>",id:"next-run",level:5},{value:"<strong>Timezone</strong>",id:"timezone",level:5},{value:"<strong>Attribute</strong>",id:"attribute",level:4},{value:"<strong>Attribute Type</strong>",id:"attribute-type",level:5},{value:"<strong>Attribute Name</strong>",id:"attribute-name",level:5},{value:"<strong>Attribute Value</strong>",id:"attribute-value",level:5}],p={toc:u};function c(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scan-importer"},"Scan Importer"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Scan Importer is an API based tool provided in Haltdos WAF to pull scan results A security policy enforcement layer that prevents known vulnerabilities from being exploited.\nSince the security enforcement layer analyzes transactions and intercepts attacks in transit, malicious traffic never reaches the web application with the virtual patch. Virtual patches prevent exploitation attempts from succeeding, even when no changes have been made to the application source code."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Scan Importer",src:n(57020).Z,width:"1413",height:"885"})),(0,a.kt)("h3",{id:"how-to-use"},"How to use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Tools")," > ",(0,a.kt)("strong",{parentName:"li"},"Scan Importer")),(0,a.kt)("li",{parentName:"ol"},"Configure your scanner settings."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"save changes"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default Values"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scan Tool"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HTTP Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"GET")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Import Frequency"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Next Run"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Current Time")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Time zones"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Africa/Abidjan")))),(0,a.kt)("h3",{id:"description"},"Description"),(0,a.kt)("h5",{id:"enabled"},(0,a.kt)("strong",{parentName:"h5"},"Enabled")),(0,a.kt)("p",null,"This option allows users to enable the scan importer."),(0,a.kt)("h5",{id:"name"},(0,a.kt)("strong",{parentName:"h5"},"Name")),(0,a.kt)("p",null,"This option allows users to configure a user-friendly name for the scan rule."),(0,a.kt)("h5",{id:"scan-tool"},(0,a.kt)("strong",{parentName:"h5"},"Scan Tool")),(0,a.kt)("p",null,"This option allows users to select the scanning tools from the list of tools provided."),(0,a.kt)("h5",{id:"http-method"},(0,a.kt)("strong",{parentName:"h5"},"HTTP method")),(0,a.kt)("p",null,"This option allows users to select the HTTP method for the scanning requests. Users can select any HTTP method among GET, PUT, & POST."),(0,a.kt)("h5",{id:"url"},(0,a.kt)("strong",{parentName:"h5"},"URL")),(0,a.kt)("p",null,"This option allows users to add the URL for the scan import request."),(0,a.kt)("h5",{id:"import-frequency"},(0,a.kt)("strong",{parentName:"h5"},"Import Frequency")),(0,a.kt)("p",null,"This option allows users to set the scanning frequency. The scan will run on the mentioned frequency without any manual intervention."),(0,a.kt)("h5",{id:"next-run"},(0,a.kt)("strong",{parentName:"h5"},"Next Run")),(0,a.kt)("p",null,"This option allows users to set the next time frequency for the next run."),(0,a.kt)("h5",{id:"timezone"},(0,a.kt)("strong",{parentName:"h5"},"Timezone")),(0,a.kt)("p",null,"This option allows users to set the timezone for the next run time."),(0,a.kt)("h4",{id:"attribute"},(0,a.kt)("strong",{parentName:"h4"},"Attribute")),(0,a.kt)("p",null,"This option allows users to add username & password attributes for the API request. User can set the any of the following: ",(0,a.kt)("strong",{parentName:"p"},"ARG, PARAM, HEADER, COOKIE"),"."),(0,a.kt)("h5",{id:"attribute-type"},(0,a.kt)("strong",{parentName:"h5"},"Attribute Type")),(0,a.kt)("p",null,"This option allows users to add multiple attribute to select which attribute should be used to authenticate the API request."),(0,a.kt)("h5",{id:"attribute-name"},(0,a.kt)("strong",{parentName:"h5"},"Attribute Name")),(0,a.kt)("p",null,"This option allows users to select the attribute name."),(0,a.kt)("h5",{id:"attribute-value"},(0,a.kt)("strong",{parentName:"h5"},"Attribute Value")),(0,a.kt)("p",null,"This option allows users to set the attribute value."))}c.isMDXComponent=!0},57020:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/scanimporter-ac95ce7491b0d2849103a566b54be02a.png"}}]);