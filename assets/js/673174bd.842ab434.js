"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[28205],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var i=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),c=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return a?i.createElement(y,o(o({ref:t},p),{},{components:a})):i.createElement(y,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}d.displayName="MDXCreateElement"},60037:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));const r={sidebar_position:1},o="Overview",s={unversionedId:"products/cloud/waf/overview",id:"version-6.0/products/cloud/waf/overview",title:"Overview",description:"Secure your website with Enterprise Grade Web Application Firewall (WAF)",source:"@site/versioned_docs/version-6.0/products/cloud/waf/overview.md",sourceDirName:"products/cloud/waf",slug:"/products/cloud/waf/overview",permalink:"/v6/products/cloud/waf/overview",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Support & Ticketing",permalink:"/v6/products/cloud/support"},next:{title:"Zones",permalink:"/v6/products/cloud/waf/zones/"}},l={},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Secure your website with Enterprise Grade Web Application Firewall (WAF)"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Web Application Firewall (WAF / WAAP) is a reverse proxy solution to secure applications against common cyber-attacks. WAF is designed to protect the company\u2019s Web applications against various critical cyber-attacks such as SQL-Injection, Cross-Site Scripting (XSS), Session Hijacking, and OWASP top 10 vulnerability threats. It sits on an organization\u2019s network, between a Web client and Web server, and protects the organization from vulnerabilities."),(0,n.kt)("p",null,"Deploying a WAF in front of a web application, a shield is placed between the web client and web server. While a proxy server protects a client machine\u2019s identity by using an intermediary, WAF is a type of reverse proxy, protecting the server from exposure by having clients pass through the WAF before reaching the server."),(0,n.kt)("p",null,"A WAF operates through a set of rules often called policies. These policies aim to protect against vulnerabilities in the application by filtering out malicious traffic. The value of WAF is the speed and ease with which policy modification can be implemented, allowing for faster response to varying attack vectors. For example, during a DDoS attack, rate limiting can be quickly implemented by modifying WAF policies."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"wafoverview",src:a(63564).Z,width:"1920",height:"1080"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Benefits")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Automated Patches")),(0,n.kt)("p",null,"It\u2019s always good to run vulnerability scans regularly. Ideally, if you are in an online business you would be running scans once a quarter or several times a month. Consider what might happen if you discover a vulnerability in your website or application, you might have the resources to patch the application or fix the problem quickly but most businesses don't have the expertise or skill immediately available. If your company falls into the second group, then your company is at risk as long as that vulnerability is present. Haltdos WAFs have the ability to use your scan report to temporarily patch your application for immediate protection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Stops Data Leakage")),(0,n.kt)("p",null,"Hackers can gather data in numerous ways unless you know you\u2019ve been compromised and detecting them can be challenging. Data leakage can be caused by something as insignificant as a malicious error message presented to a user, so if your application is harboring critical data such as source code or credit card details, then it\u2019s very easy to breach the data and any kind of leak can turn into a disaster. Haltdos WAF scans every response from Web Application to your end-users and if something appears unusual, the WAF stops it from leaving your network. Haltdos WAF has built-in high-level behavioral signatures looking for sensitive information such as credit card details and social security numbers. But you can customize, and add any additional signatures, such as specific files, information, or code."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rules with Learning")),(0,n.kt)("p",null,"Unlike most WAFs that depend upon attack signatures (aka. rules) to detect and mitigate attacks, Haltdos WAF lookout for new vectors of attacks and continuously publish signatures to mitigate them using a combination of Rules, Artificial Intelligence and Threat Intelligence to provide 360 \xb0 protection for your application. It continuously learns user and application behavior to detect anomalies and take remedial measures to block 0-day attacks."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Positive + Negative Security Model")),(0,n.kt)("p",null,"Haltdos WAF is based on a Negative Security model that protects against known attacks and a Positive Security model that only admits pre-approved traffic. Think of a negative model as a club bouncer instructed to deny admittance to guests who don\u2019t meet the dress code. Now in the positive model, this is like the bouncer at an exclusive party only admits people who are invited. Both negative and positive have their advantages and drawbacks but when combined together with Artificial Intelligence, Haltdos WAF provides comprehensive protection to your website."))}u.isMDXComponent=!0},63564:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/wafoverview1-2b9a8cd3caf79d596f4178f175364c47.png"}}]);