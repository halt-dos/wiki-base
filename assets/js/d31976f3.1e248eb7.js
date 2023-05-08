"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[59569],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(g,l(l({ref:t},u),{},{components:n})):a.createElement(g,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},l="Settings",o={unversionedId:"products/waf/listener/profiles/settings",id:"version-6.0/products/waf/listener/profiles/settings",title:"Settings",description:"Overview",source:"@site/versioned_docs/version-6.0/products/waf/listener/profiles/settings.md",sourceDirName:"products/waf/listener/profiles",slug:"/products/waf/listener/profiles/settings",permalink:"/v6/products/waf/listener/profiles/settings",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Profiles",permalink:"/v6/products/waf/listener/profiles/"},next:{title:"Geo Filtering",permalink:"/v6/products/waf/listener/profiles/geo_filtering"}},p={},s=[{value:"Overview",id:"overview",level:4},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"settings"},"Settings"),(0,r.kt)("h4",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Profile Setting specifies all the operational settings for user different application type (i.e. WEBSITE/WEB SERVICE/WEB SOCKET). It provides user protection and invokes signature rules to every configured specific settings for mentioned application type."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profile_settings",src:n(58506).Z,width:"1817",height:"868"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to WAF > Listener > Security Profiles > Settings."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on Save Changes.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Profile_settings",src:n(95530).Z,width:"1536",height:"374"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Operational Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Bypass")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Paranoia Level"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Low")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable Signature Validation"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable LibInjection"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application Framewwork"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application Language"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application Server"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application Database"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Application OS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Other")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User Groups"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Temporary Blacklist Duration"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"1.",(0,r.kt)("strong",{parentName:"p"},"Operational Mode:"),"\nThis option allows user to specify operational mode for every given security profile. Different operational modes are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MITIGATION:")," In this mode, all the mitigations & rule sets will monitor the traffic. If any request matches the criteria, it gets dropped  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BYPASS:")," In this mode, all the requests get bypassed without any filtration of mitigations & rule sets.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"RECORD:")," In this mode, all the mitigations & rule sets will monitor the traffic. If any request is about to drop, then it gets captured and forwarded in the form of a Record Event.  "))),(0,r.kt)("p",null,"2.",(0,r.kt)("strong",{parentName:"p"},"Paranoia Level:"),"\nParanoia level configures the severity in which HTTP requests should be allowed. It lets you disable certain rules to minimize several false positives that they may encounter.  "),(0,r.kt)("p",null,"Note: Higher paranoia can also result in false positives.  "),(0,r.kt)("p",null,"Haltdos WAF comes with four Security Paranoia Levels:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"LOW")," -Adequate security level to defend almost all web applications from generic exploits. Recommended security level to ensure the least disruption from false positives.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"MEDIUM")," - A slightly higher level of security to block nearly all web application exploits. It might result in some false positives.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HIGH")," - A more paranoid approach to web security. It delivers a higher number of false positives.  ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"UNDER ATACK")," - The most paranoid defensive security method. It blocks sufficient legitimate requests to your site.  "))),(0,r.kt)("p",null,"3.",(0,r.kt)("strong",{parentName:"p"},"Enable Signature Validation:"),"\nUsers can specify to enable the signature validation for the present profile.  "),(0,r.kt)("p",null,"4.",(0,r.kt)("strong",{parentName:"p"},"Enable LibInjection:"),"\nUsers can configure settings related to Specify whether to enable internal libinjection based validations.  "),(0,r.kt)("p",null,"5.",(0,r.kt)("strong",{parentName:"p"},"Application Type:"),"\nSpecify the type of application ( i.e. website or web service). A website is a collection of linked web pages (plus their associated resources) that share a unique domain name. A web service is a collection of open protocols and standards used for exchanging data between applications or systems.  "),(0,r.kt)("p",null,"6.",(0,r.kt)("strong",{parentName:"p"},"Application Framework:"),"\nSpecify the framework used for developing the application (if any)."),(0,r.kt)("p",null,"7.",(0,r.kt)("strong",{parentName:"p"},"Application Language:"),"\nSpecify the programming language in which application is developed."),(0,r.kt)("p",null,"8.",(0,r.kt)("strong",{parentName:"p"},"Application Server:"),"\nSpecify the server on which application is running."),(0,r.kt)("p",null,"9.",(0,r.kt)("strong",{parentName:"p"},"Application  Database"),"\nSpecify the database which is being used in the application (if any)."),(0,r.kt)("p",null,"10.",(0,r.kt)("strong",{parentName:"p"},"Application OS:"),"\nSpecify the Operating system on which application is running."),(0,r.kt)("p",null,"11.",(0,r.kt)("strong",{parentName:"p"},"User Groups:"),"\nCreate a user group for operating the API gateway. Detailed information can be found using this link User Group.  "),(0,r.kt)("p",null,"12.",(0,r.kt)("strong",{parentName:"p"},"Temporary Blacklist Duration:"),"\nThe time duration for which a malicious IP is suspended by WAF is specified here. The WAF Rules and Web Policy use this value."))}c.isMDXComponent=!0},58506:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/profilesetting-b1f30e3fb52b8d7acba7dd91a0112ac8.png"},95530:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/profilesetting1-c3e5f96ad31fc4682ce9bb61c7d59d09.png"}}]);