"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5395:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:3},i="Bot Protection",l={unversionedId:"community-waf/docs/waf/bot_protection",id:"community-waf/docs/waf/bot_protection",title:"Bot Protection",description:"Overview",source:"@site/docs/community-waf/docs/waf/bot_protection.md",sourceDirName:"community-waf/docs/waf",slug:"/community-waf/docs/waf/bot_protection",permalink:"/community-waf/docs/waf/bot_protection",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adcSidebar",previous:{title:"Geo Fencing",permalink:"/community-waf/docs/waf/geo_fencing"},next:{title:"Servers",permalink:"/community-waf/docs/waf/server_farm/servers"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How To Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Allowed Crawlers",id:"allowed-crawlers",level:4},{value:"Bad Crawlers",id:"bad-crawlers",level:4},{value:"Bad Reputation Traffic",id:"bad-reputation-traffic",level:4}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bot-protection"},"Bot Protection"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Bot Protection",src:r(69264).Z,width:"1920",height:"987"})),(0,n.kt)("h3",{id:"how-to-use"},"How To Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Bot Protection")),(0,n.kt)("li",{parentName:"ol"},"Configure your setting"),(0,n.kt)("li",{parentName:"ol"},"Click on save changes.")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Allowed Crawlers"),(0,n.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bad Crawlers"),(0,n.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bad Reputation Traffic"),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION / / DROP"),(0,n.kt)("td",{parentName:"tr",align:null},"No Action")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"allowed-crawlers"},"Allowed Crawlers"),(0,n.kt)("p",null,"Specify the list of good crawlers by specifying their user agents. Such requests will be allowed."),(0,n.kt)("h4",{id:"bad-crawlers"},"Bad Crawlers"),(0,n.kt)("p",null,"Users are allowed to specify the list of bad crawlers by specifying their user agents. Such requests will be dropped.This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers, their requests will be dropped."),(0,n.kt)("h4",{id:"bad-reputation-traffic"},"Bad Reputation Traffic"),(0,n.kt)("p",null,"Users are allowed to specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM."))}u.isMDXComponent=!0},69264:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/bot_protection-d0409f9f4ef6df295c65977a67f98d2b.png"}}]);