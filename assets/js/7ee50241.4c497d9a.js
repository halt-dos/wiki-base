"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[10394],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},28639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:12},l="Learning",o={unversionedId:"products/waf/listener/learning",id:"products/waf/listener/learning",title:"Learning",description:"Enable Machine Learning in WAF",source:"@site/docs/products/waf/listener/learning.md",sourceDirName:"products/waf/listener",slug:"/products/waf/listener/learning",permalink:"/rc/products/waf/listener/learning",draft:!1,tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12},sidebar:"sidebar",previous:{title:"Virtual Patching",permalink:"/rc/products/waf/listener/virtualpatching"},next:{title:"Action Script",permalink:"/rc/products/waf/listener/actionscript"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use :",id:"how-to-use-",level:2},{value:"Description:",id:"description",level:2}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"learning"},"Learning"),(0,a.kt)("p",null,"Enable Machine Learning in WAF"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Haltdos\u2019s security is adaptive through automated learning and can make policy recommendations by learning about application behavior, which can make it easier for security teams to manage policies. Administrators retain full control over the activation and deactivation of each ruleset, with the opportunity to screen for false-positive before committing to production."),(0,a.kt)("p",null,"This module also defends against 0-day attacks by assigning suspicion score to every request based on anomaly based machine learning techniques. The learning requires creation of baseline during normal operations to understand user and application behavior for every URL. Once the baseline has been set, the WAF solution starts to look for anomalous patterns and block malicious 0-day attacks. As an adaptive solution, the learning continues at the set sampling rate to improve the baseline for dynamic web applications."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"learning",src:n(17989).Z,width:"1832",height:"669"})),(0,a.kt)("h2",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Learning"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Learning Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Learning Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sampling Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"10")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Trigger Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"100000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Error Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Drop Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"IP Prefixes"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h2",{id:"description"},"Description:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Learning Mode"))),(0,a.kt)("p",null,"This option specify the learning mode to enable/disable Machine Learning. When enabled it will start learning the requests and store all the required information and accordingly take action on the request detected malicious."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Sampling Rate"))),(0,a.kt)("p",null,"Specify the rate of sampling of requests for learning. This allows anomaly based machine learning to generate baseline at the specified sampling rate."),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Trigger Threshold"))),(0,a.kt)("p",null,"Specify the minimum number of HTTP requests required per URL to enable learning mitigations. When the threshold is breached then it triggers is turned on for the learnt URLs."),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Error Rate"))),(0,a.kt)("p",null,"Specify the maximum allowed error rate from the source IP beyond which the IP is temporarily blacklisted."),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Drop Rate"))),(0,a.kt)("p",null,"Specify the maximum allowed drop rate from the source IP beyond which the IP is temporarily blacklisted."),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"IP Prefixes"))),(0,a.kt)("p",null,"Users can specify the list of IPs."))}u.isMDXComponent=!0},17989:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/learning-ba393da02b0840c3a27344c73fc2aaab.png"}}]);