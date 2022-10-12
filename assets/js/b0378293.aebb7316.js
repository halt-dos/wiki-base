"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4059],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var s=n.createContext({}),c=function(t){var e=n.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=c(a),m=r,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(g,i(i({ref:e},p),{},{components:a})):n.createElement(g,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},96882:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),r=(a(67294),a(3905));const o={sidebar_position:7},i="Anti-DDoS",l={unversionedId:"saas/docs/waf/anti-ddos",id:"saas/docs/waf/anti-ddos",title:"Anti-DDoS",description:"Bullet-proof DDoS protection to ensure your website remains secure and online - all the time.",source:"@site/docs/saas/docs/waf/anti-ddos.md",sourceDirName:"saas/docs/waf",slug:"/saas/docs/waf/anti-ddos",permalink:"/wiki-base/saas/docs/waf/anti-ddos",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"saasSidebar",previous:{title:"Analytics",permalink:"/wiki-base/saas/docs/waf/analytics"},next:{title:"Deploy to Production",permalink:"/wiki-base/saas/docs/waf/deploy_to_prod"}},s={},c=[{value:"Overview",id:"overview",level:3}],p={toc:c};function u(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"anti-ddos"},"Anti-DDoS"),(0,r.kt)("p",null,"Bullet-proof DDoS protection to ensure your website remains secure and online - all the time."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Distributed denial-of-service (DDoS) attack is self-explanatory. It is a malicious attempt to deny service to legitimate users. How? By overwhelming the targeted server, network or service with a flood of Internet traffic. Here distributed implies multiple sources attacking the same target at the same time. These attacks happen using botnets."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Types of DDoS Attacks")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"VOLUMETRIC"),(0,r.kt)("th",{parentName:"tr",align:null},"PROTOCOL"),(0,r.kt)("th",{parentName:"tr",align:null},"APPLICATION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"What does it mean?"),(0,r.kt)("td",{parentName:"tr",align:null},"This attack uses an enormous amount of traffic saturating the target\u2019s bandwidth"),(0,r.kt)("td",{parentName:"tr",align:null},"This attack makes a target inaccessible. It exploits a weakness in Layer 3 and Layer 4 protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"It exploits a weakness in Layer 7 protocol stack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"How it Impacts?"),(0,r.kt)("td",{parentName:"tr",align:null},"Completely blocks access to the end-resource"),(0,r.kt)("td",{parentName:"tr",align:null},"Consumes the comprehensive processing ability of intermediate critical resources and attacked target"),(0,r.kt)("td",{parentName:"tr",align:null},"Creates a connection with the target and exhaust the resources of the server by dominating transaction and processes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Add-on Info"),(0,r.kt)("td",{parentName:"tr",align:null},"Easy to generate"),(0,r.kt)("td",{parentName:"tr",align:null},"Measured in magnitude as packets per second (pps)"),(0,r.kt)("td",{parentName:"tr",align:null},"Most sophisticated/ challenging attack")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Comprehensive DDoS Protection")),(0,r.kt)("p",null,"Our advanced global network leverages top-of-the-line, customized servers and networking equipment that protect against Layer 3-4 DDoS attacks at the device. This approach gives our platform simultaneously an exceptionally large and exceptionally deep protection plane."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Event",src:a(75286).Z,width:"917",height:"705"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How Does It Work?")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Volumetric Defense built into Infrastructure")),(0,r.kt)("p",null,"hdPlatform is deployed over multiple cloud platforms. Each cloud service provider provides basic Anti-DDoS protection against volumetric DDoS attacks. By leveraging the infrastructures of various CSP partners, hdPlatform can protect DDoS attacks of any size, any type, and anywhere! "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DDoS Mitigation at Source")),(0,r.kt)("p",null,"Another great advantage of using multiple cloud providers is our ability to detect, isolate and localize high volume  DDoS attacks for the targeted customer without impacting other customers and users of the targeted customer accessing from regions other than the source of origin of DDoS attack."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Intelligent Application Layer Protection")),(0,r.kt)("p",null,"Our Web Application Firewall comes with built-in protection against Layer7 DDoS attacks. The WAF detects and mitigates sophisticated Layer 7 DDoS attacks using:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Advanced Threshold-based limiting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Geo-IP based filtering")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Automatic Bot Detection & Mitigation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Smart JS challenge to validate Human activity")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Built-in auto-scaling for large spikes of traffic"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Behavioral-Based Detection"),"  "),(0,r.kt)("p",null,"Leveraging machine learning algorithms to analyze traffic, understand what constitutes genuine behavior, and block malicious attacks automatically."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Automatic Signature Formation"),"  "),(0,r.kt)("p",null,"With real-time virtual patching technology, hdPlatform ensures comprehensive protection against zero-day DDoS attack."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Worldwide Coverage, Huge Capacity"),"  "),(0,r.kt)("p",null,"Our cloud DDoS protection service is backed by a global network of scrubbing centers of multiple CSPs. With over 30Tbps (and counting) of total bandwidth capacity, our platform can stop DDoS attacks many times larger than the largest attack ever recorded. These centers are comprehensively connected in full mesh mode, via Anycast routing. It ensures mitigation closest to the point of origin of the attack."))}u.isMDXComponent=!0},75286:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/antiddos1-1d01a314ef95ca67e0ac05f53832aeb2.png"}}]);