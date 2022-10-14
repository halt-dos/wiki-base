"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),f=p(r),d=s,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:s,i[1]=a;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},68394:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var n=r(87462),s=(r(67294),r(3905));const o={sidebar_position:3},i="SSL Settings",a={unversionedId:"saas/waf/listener/ssl-settings",id:"saas/waf/listener/ssl-settings",title:"SSL Settings",description:"It provides functionality to support SSL offloading based on configurations",source:"@site/docs/saas/waf/listener/ssl-settings.md",sourceDirName:"saas/waf/listener",slug:"/saas/waf/listener/ssl-settings",permalink:"/saas/waf/listener/ssl-settings",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adcSidebar",previous:{title:"signatures",permalink:"/saas/waf/listener/security-profile/rules/signatures"},next:{title:"Performance",permalink:"/saas/waf/listener/performance/"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ssl-settings"},"SSL Settings"),(0,s.kt)("p",null,"It provides functionality to support SSL offloading based on configurations"),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"overview"},"Overview"),(0,s.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,s.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Go to ",(0,s.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > SSL Settings"))),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,s.kt)("li",{parentName:"ol"},(0,s.kt)("p",{parentName:"li"},"Click ",(0,s.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Encrypt Traffic to Upstream")),(0,s.kt)("p",null,"This specifies WAF should re-encrypt traffic before sending it to the backend web application. "),(0,s.kt)("p",null,"Note: We can listen to non-HTTPS traffic and send as HTTPS traffic to the backend server."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Enable SSL Offloading")),(0,s.kt)("p",null,"This specifies if the WAF should enable HTTPS traffic for the configured website."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SSL Certificate")),(0,s.kt)("p",null,"This field allows us to Select or Upload an SSL Certificate for SSL Offloading in case of encrypted traffic. Users can select the SSL certificate from the dropdown or add a new certificate by clicking the ADD button which will redirect to the SSL Certificates page."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SSL Cipher Suites")),(0,s.kt)("p",null,"In order to secure or make ssl compatible with specific web browsers. Users can select from the dropdown i.e. Modern(Very Secure), Intermediate (Recommended),  Old(Backward Compatibility), Custom, etc."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SSL Ciphers")),(0,s.kt)("p",null,"It is a set of algorithms or a set of instructions/steps that helps to establish a secure connection between two entities \u2014 usually the client (a user's browser) and the web server they're connecting to (your website). Users can select respective ciphers from the dropdown."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SSL Protocols")),(0,s.kt)("p",null,"This field specifies the protocol to be used for selected custom ssl cipher."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SSL Session Caching")),(0,s.kt)("p",null,"This field allows users to specify the number of SSL session cache for HTTPS requests on the listener. "),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"SSL Session Timeout")),(0,s.kt)("p",null,"This field allows users to specify the SSL session timeout in minutes for every HTTPS request on the listener."))}u.isMDXComponent=!0}}]);