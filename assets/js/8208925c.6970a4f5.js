"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[21060],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,o(o({ref:e},u),{},{components:n})):r.createElement(f,o({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61814:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:6},o="Match Finder",i={unversionedId:"products/cloud/waf/zones/match_finder",id:"version-6.0/products/cloud/waf/zones/match_finder",title:"Match Finder",description:"---",source:"@site/versioned_docs/version-6.0/products/cloud/waf/zones/match_finder.md",sourceDirName:"products/cloud/waf/zones",slug:"/products/cloud/waf/zones/match_finder",permalink:"/v6/products/cloud/waf/zones/match_finder",draft:!1,tags:[],version:"6.0",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"FP Finder",permalink:"/v6/products/cloud/waf/zones/fp_finder"},next:{title:"Listener",permalink:"/v6/products/cloud/waf/listener/"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Description",id:"description",level:4}],u={toc:c};function s(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"match-finder"},"Match Finder"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"It Identifies, stores all the rules matched by WAF and generates match finder details for a specific or all listener so that you can identify all matched rule for the listener by listing of the events."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Event ID"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Matched Rule"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URI"),(0,a.kt)("td",{parentName:"tr",align:null},"URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zone"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Payload"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Button"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Event ID"),": Displays the event ID logged for the certain request found to malicious."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Matched Rule"),": Displays all matched rule id for the query. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"URI"),": Displays the matching URI for the current event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Zone"),": Displays the zone/sub-domain name that belongs to it."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload"),": Displays the payload matched for the current event."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Action"),": It specifies the action to be taken. To whitelist current event rules, click on the Whitelist button."),(0,a.kt)("p",null,"We can further download all events matched based on the filter from the event page."))}s.isMDXComponent=!0}}]);