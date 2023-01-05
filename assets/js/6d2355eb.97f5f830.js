"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[12744],{3905:(e,t,i)=>{i.d(t,{Zo:()=>f,kt:()=>u});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},f=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),p=c(i),u=n,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||a;return i?r.createElement(h,s(s({ref:t},f),{},{components:i})):r.createElement(h,s({ref:t},f))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},52929:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={sidebar_position:3},s="SSL Settings",o={unversionedId:"products/waf/listener/ssl_settings",id:"version-6.0/products/waf/listener/ssl_settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/versioned_docs/version-6.0/products/waf/listener/ssl_settings.md",sourceDirName:"products/waf/listener",slug:"/products/waf/listener/ssl_settings",permalink:"/products/waf/listener/ssl_settings",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Signatures",permalink:"/products/waf/listener/profiles/signatures"},next:{title:"Performance",permalink:"/products/waf/listener/performance/"}},l={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Encrypt Traffic to Upstream",id:"encrypt-traffic-to-upstream",level:4},{value:"Enable SSL Offloading",id:"enable-ssl-offloading",level:4},{value:"SSL Certificate",id:"ssl-certificate",level:4},{value:"SSL Ciphers",id:"ssl-ciphers",level:4},{value:"SSL Ciphers Suites",id:"ssl-ciphers-suites",level:4},{value:"SSL Session Caching",id:"ssl-session-caching",level:4},{value:"SSL Session Timeout",id:"ssl-session-timeout",level:4},{value:"Client Certificate Verification",id:"client-certificate-verification",level:4},{value:"Client Certificate",id:"client-certificate",level:4},{value:"Client Certificate Fingerprint Header",id:"client-certificate-fingerprint-header",level:4},{value:"Client Certificate Issuer Header",id:"client-certificate-issuer-header",level:4},{value:"Client Certificate Subject Header",id:"client-certificate-subject-header",level:4},{value:"Client Certificate Serial Header",id:"client-certificate-serial-header",level:4},{value:"Client Certificate Verify Header",id:"client-certificate-verify-header",level:4},{value:"Client Certificate Start Date Header",id:"client-certificate-start-date-header",level:4},{value:"Client Certificate End Date Header",id:"client-certificate-end-date-header",level:4},{value:"Invalid Client Certificate Action",id:"invalid-client-certificate-action",level:4}],f={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ssl-settings"},"SSL Settings"),(0,n.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"As many applications are running over HTTPS, for the WAF / ADC solution to inspect user payload, it is necessary to decrypt SSL/TLS traffic. The following settings allow users to configure SSL offloading based and optional re-encryption in Haltdos solution. The performance of SSL offloading will vary based on chosen model."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSL Settings",src:i(84929).Z,width:"1493",height:"993"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go To WAF >  Listeners > SSL Settings "),(0,n.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,n.kt)("li",{parentName:"ol"},"Click Save Changes ")),(0,n.kt)("h4",{id:"encrypt-traffic-to-upstream"},"Encrypt Traffic to Upstream"),(0,n.kt)("p",null,"This specifies WAF should re-encrypt traffic before sending it to the back-end web application. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"We can listen to non-HTTPS traffic and send it as HTTPS traffic to the back end server."))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSL Settings",src:i(93171).Z,width:"1487",height:"722"})),(0,n.kt)("h4",{id:"enable-ssl-offloading"},"Enable SSL Offloading"),(0,n.kt)("p",null,"This option specifies if the WAF should enable HTTPS traffic for the configured website."),(0,n.kt)("h4",{id:"ssl-certificate"},"SSL Certificate"),(0,n.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the drop-down or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page"),(0,n.kt)("h4",{id:"ssl-ciphers"},"SSL Ciphers"),(0,n.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web-server they're connecting to (your website). Users can select respective ciphers from the drop-down."),(0,n.kt)("h4",{id:"ssl-ciphers-suites"},"SSL Ciphers Suites"),(0,n.kt)("p",null,"In order to secure or make SSL compatible with specific web browsers. Users can select from the drop-down i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,n.kt)("h4",{id:"ssl-session-caching"},"SSL Session Caching"),(0,n.kt)("p",null,"This optionm allows users to specify the number of SSL session cache for HTTPS requests on the listener."),(0,n.kt)("h4",{id:"ssl-session-timeout"},"SSL Session Timeout"),(0,n.kt)("p",null,"This option allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."),(0,n.kt)("h4",{id:"client-certificate-verification"},"Client Certificate Verification"),(0,n.kt)("p",null,"This option specifies if the solution should enable client certificate authentication."),(0,n.kt)("h4",{id:"client-certificate"},"Client Certificate"),(0,n.kt)("p",null,"Thids option specifies an SSL certificate for Client Authentication."),(0,n.kt)("h4",{id:"client-certificate-fingerprint-header"},"Client Certificate Fingerprint Header"),(0,n.kt)("p",null,"This option specifies header name for forwarding SSL certificate fingerprint to be upstream"),(0,n.kt)("h4",{id:"client-certificate-issuer-header"},"Client Certificate Issuer Header"),(0,n.kt)("p",null,"This option specifies header name for forwarding SSL Certificate Issuer to be upstream"),(0,n.kt)("h4",{id:"client-certificate-subject-header"},"Client Certificate Subject Header"),(0,n.kt)("p",null,"It specifies header name for forwarding SSL certificate Subject to be upstream"),(0,n.kt)("h4",{id:"client-certificate-serial-header"},"Client Certificate Serial Header"),(0,n.kt)("p",null,"This option specifies header name for forwarding SSL certificate Serial to be upstream"),(0,n.kt)("h4",{id:"client-certificate-verify-header"},"Client Certificate Verify Header"),(0,n.kt)("p",null,"This option  specifies header name for forwarding SSL certificate verified to be upstream"),(0,n.kt)("h4",{id:"client-certificate-start-date-header"},"Client Certificate Start Date Header"),(0,n.kt)("p",null,"This option specifies header name for forwarding SSL certificate start date to be upstream"),(0,n.kt)("h4",{id:"client-certificate-end-date-header"},"Client Certificate End Date Header"),(0,n.kt)("p",null,"This option allows user to add header name for forwarding SSL certificate end date to be upstream."),(0,n.kt)("h4",{id:"invalid-client-certificate-action"},"Invalid Client Certificate Action"),(0,n.kt)("p",null,"This option allows user to specifies the action to be performed when client certificate verification fails."))}d.isMDXComponent=!0},84929:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/SSL_Settings-49847d891ac4aacf459b6561d5c1f8fb.png"},93171:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/SSL_Settings_pg2-787a6e8cd5eaf023d81dc8a1ce60d9ac.png"}}]);