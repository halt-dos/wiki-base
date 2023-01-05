"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[90078],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||s;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,i=new Array(s);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var c=2;c<s;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6184:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const s={sidebar_position:3},i="SSL Settings",a={unversionedId:"products/cloud/waf/listener/ssl-settings",id:"products/cloud/waf/listener/ssl-settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations",source:"@site/docs/products/cloud/waf/listener/ssl-settings.md",sourceDirName:"products/cloud/waf/listener",slug:"/products/cloud/waf/listener/ssl-settings",permalink:"/rc/products/cloud/waf/listener/ssl-settings",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"signatures",permalink:"/rc/products/cloud/waf/listener/security-profile/rules/signatures"},next:{title:"Performance",permalink:"/rc/products/cloud/waf/listener/performance/"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssl-settings"},"SSL Settings"),(0,o.kt)("p",null,"It provides functionality to support SSL offloading based on configurations"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Go to ",(0,o.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > SSL Settings"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click ",(0,o.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Encrypt Traffic to Upstream")),(0,o.kt)("p",null,"This specifies WAF should re-encrypt traffic before sending it to the backend web application. "),(0,o.kt)("p",null,"Note: We can listen to non-HTTPS traffic and send as HTTPS traffic to the backend server."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Enable SSL Offloading")),(0,o.kt)("p",null,"This specifies if the WAF should enable HTTPS traffic for the configured website."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSL Certificate")),(0,o.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the dropdown or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSL Cipher Suites")),(0,o.kt)("p",null,"In order to secure or make ssl compatible with specific web browsers. Users can select from the dropdown i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSL Ciphers")),(0,o.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web server they're connecting to (your website). Users can select respective ciphers from the dropdown."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSL Protocols")),(0,o.kt)("p",null,"This field specifies the protocol to be used for selected custom ssl cipher."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSL Session Caching")),(0,o.kt)("p",null,"This field allows users to specify the number of SSL session cache for HTTPS requests on the listener. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"SSL Session Timeout")),(0,o.kt)("p",null,"This field allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."))}u.isMDXComponent=!0}}]);