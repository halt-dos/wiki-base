"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=i,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},19178:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const r={sidebar_position:1},o="Haltdos Community WAF Features",s={unversionedId:"community/getting-started/docs",id:"community/getting-started/docs",title:"Haltdos Community WAF Features",description:"- #### Automated Patches",source:"@site/docs/community/getting-started/docs.md",sourceDirName:"community/getting-started",slug:"/community/getting-started/docs",permalink:"/community/getting-started/docs",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Haltdos Community WAF",permalink:"/community/"},next:{title:"How WAF works?",permalink:"/community/getting-started/works"}},l={},c=[],d={toc:c};function p(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"haltdos-community-waf-features"},"Haltdos Community WAF Features"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"automated-patches"},(0,i.kt)("strong",{parentName:"h4"},"Automated Patches")),(0,i.kt)("p",{parentName:"li"},"  Automated patches is used to detect components and environment settings to adapt the firewall more efficiently. Endpoint WAF is something that is installed inside your application. It is more aware of the environment of your website than a cloud firewall. Haltdos WAFs have the ability to use your scan report to temporarily patch your application for immediate protection.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"data-leakage-prevention"},(0,i.kt)("strong",{parentName:"h4"},"Data Leakage Prevention")),(0,i.kt)("p",{parentName:"li"},"  Data Loss Prevention (DLP) is a set of technologies and business policies to make sure end-users do not send sensitive or confidential data outside the organization without proper authorization. Sensitive information might include financial records, customer data, credit card data, or other protected information.  "),(0,i.kt)("p",{parentName:"li"},"  Haltdos WAF inspects all inbound traffic for attacks and outbound traffic for sensitive data. When any sensitive or malicious data is identified, it can be blocked or masked automatically. Comprehensive traffic logging helps you identify the source of any potential leaks.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"rules-with-learning"},(0,i.kt)("strong",{parentName:"h4"},"Rules with Learning")),(0,i.kt)("p",{parentName:"li"},"  Unlike most WAFs that depend upon attack signatures (aka. rules) to detect and mitigate attacks, Haltdos WAF lookout for new vectors of attacks and continuously publishes signatures to mitigate them using a combination of Rules, Artificial Intelligence, and Threat Intelligence to provide 360 \xb0 protection for your application. It continuously learns user and application behavior to detect anomalies and take remedial measures to block 0-day attacks.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"positive--negative-security-model"},(0,i.kt)("strong",{parentName:"h4"},"Positive + Negative Security Model")),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("strong",{parentName:"p"},"Positive Model WAF")," looks to allow access to specific characters or via specific rules. This means that each rule added provides greater access and conversely having no rules in place will block everything by default. This model has the benefit of severely limiting the vectors an attacker can exploit simply because everything that is not expressly allowed is automatically blocked.  "),(0,i.kt)("p",{parentName:"li"},"  ",(0,i.kt)("strong",{parentName:"p"},"Negative Model WAF")," works on the premise that most attackers are using exploits that have already been uncovered. By blocking these exploits and by creating patches or updates for new vulnerabilities that occur, the client will have to do very little besides ensuring that their WAF is up to date to remain secure.  "))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Haltdos WAF")," is based on a Negative Security model that protects against known attacks and a Positive Security model that only admits pre-approved traffic. Think of a negative model as a club bouncer instructed to deny admittance to guests who don\u2019t meet the dress code. Now in the positive model, this is like the bouncer at an exclusive party only admitting people who are invited. Both negative and positive have their advantages and drawbacks but when combined together with Artificial Intelligence, ",(0,i.kt)("strong",{parentName:"p"},"Haltdos WAF")," provides comprehensive protection to your website."))}p.isMDXComponent=!0}}]);