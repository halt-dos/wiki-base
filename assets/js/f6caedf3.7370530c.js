"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[486],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>f});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},d=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(i),f=n,m=u["".concat(o,".").concat(f)]||u[f]||p[f]||r;return i?a.createElement(m,l(l({ref:t},d),{},{components:i})):a.createElement(m,l({ref:t},d))}));function f(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,l=new Array(r);l[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<r;c++)l[c]=i[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},15718:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=i(87462),n=(i(67294),i(3905));const r={sidebar_position:2},l="SSL Settings",s={unversionedId:"adc/listeners/ssl_settings",id:"adc/listeners/ssl_settings",title:"SSL Settings",description:"SSL (Secure Sockets Layer) and its successor, TLS (Transport Layer Security), are protocols for establishing authenticated and encrypted links between networked computers.",source:"@site/docs/adc/listeners/ssl_settings.md",sourceDirName:"adc/listeners",slug:"/adc/listeners/ssl_settings",permalink:"/adc/listeners/ssl_settings",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Listener Settings",permalink:"/adc/listeners/listener_settings"},next:{title:"Geo Filtering",permalink:"/adc/listeners/geo_filtering"}},o={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Enable SSL Offloading",id:"enable-ssl-offloading",level:4},{value:"SSL Certificate",id:"ssl-certificate",level:4},{value:"SSL Cipher Suites",id:"ssl-cipher-suites",level:4},{value:"SSL Session Caching",id:"ssl-session-caching",level:4},{value:"SSL Session Timeout",id:"ssl-session-timeout",level:4},{value:"Client Certificate Verification",id:"client-certificate-verification",level:4},{value:"Client Certificate",id:"client-certificate",level:4},{value:"Certifcate Revocation List",id:"certifcate-revocation-list",level:4},{value:"Client Certificate Raw Header",id:"client-certificate-raw-header",level:4},{value:"Client Certificate Fingerprint Header",id:"client-certificate-fingerprint-header",level:4},{value:"Client Certificate Issuer Header",id:"client-certificate-issuer-header",level:4},{value:"Client Certificate Subject Header",id:"client-certificate-subject-header",level:4},{value:"Client Certificate Serial Header",id:"client-certificate-serial-header",level:4},{value:"Client Certificate Verify Header",id:"client-certificate-verify-header",level:4},{value:"Client Certificate Start Date Header",id:"client-certificate-start-date-header",level:4},{value:"Client Certificate End Date Header",id:"client-certificate-end-date-header",level:4},{value:"Invalid Client Certificate Action",id:"invalid-client-certificate-action",level:4},{value:"Custom Page",id:"custom-page",level:4}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"ssl-settings"},"SSL Settings"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"SSL (Secure Sockets Layer)")," and its successor, ",(0,n.kt)("strong",{parentName:"p"},"TLS (Transport Layer Security)"),", are protocols for establishing authenticated and encrypted links between networked computers."),(0,n.kt)("hr",null),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSL Settings",src:i(43751).Z,width:"1266",height:"650"})),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"/adc/docs"},(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",{parentName:"p",href:"../listeners/"},(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > SSL Settings")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Save Changes. "))),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"SSL Settings2",src:i(13283).Z,width:"1228",height:"688"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,n.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,n.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enable SSL Offloading"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL Certificate"),(0,n.kt)("td",{parentName:"tr",align:null},"File Upload"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL Cipher Suites"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,n.kt)("td",{parentName:"tr",align:null},"INTERMEDIATE")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL Session Caching"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"10")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SSL Session Timeout"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Verification"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Disbaled")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate"),(0,n.kt)("td",{parentName:"tr",align:null},"File Upload"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Certificate Revocation List"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Raw Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Fingerprint Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Issuer Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Subject Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Serial Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Verify Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate Start Date Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Client Certificate End Date Header"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Invalid Client Certificate Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,n.kt)("td",{parentName:"tr",align:null},"No Action")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Custom Page"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("h4",{id:"enable-ssl-offloading"},"Enable SSL Offloading"),(0,n.kt)("p",null,"This option allows users to specify if the solution should offload SSL traffic. It helps to reduce burden of servers through the process of removing SSL encryption from incoming traffic."),(0,n.kt)("h4",{id:"ssl-certificate"},"SSL Certificate"),(0,n.kt)("p",null,"This option allows users to specify an SSL certificate for Encryption / Decryption. It authenticates the identity of the website and more secure. It assures users that you are using a authentic website."),(0,n.kt)("h4",{id:"ssl-cipher-suites"},"SSL Cipher Suites"),(0,n.kt)("p",null,"This option allows users to specify the security/compatibility of SSL with modern web browsers. It provides a set of algorithms and protocols to secure communication between client and server."),(0,n.kt)("h4",{id:"ssl-session-caching"},"SSL Session Caching"),(0,n.kt)("p",null,"This option allows users to specify the SSL session caching which helps to optimize and greatly improve performance through saving SSL sessions for a specific period of time until connection between client and server has been terminated."),(0,n.kt)("h4",{id:"ssl-session-timeout"},"SSL Session Timeout"),(0,n.kt)("p",null,"This option allows users to specify the SSL session timeout. This value is the amount of time given  before an SSL session expires."),(0,n.kt)("h4",{id:"client-certificate-verification"},"Client Certificate Verification"),(0,n.kt)("p",null,"This option allows users to specify if the solution should enable client certificate authentication. It provides security to encrypt data transfer so that cyber criminal cannot access, read or change the data."),(0,n.kt)("h4",{id:"client-certificate"},"Client Certificate"),(0,n.kt)("p",null,"This option allows users to specify an SSL certificate for Client Authentication."),(0,n.kt)("p",null,"This option allows users to specify an SSL certificate for Client Authentication. It provides the identity of the connecting users. User can redirect at ",(0,n.kt)("strong",{parentName:"p"},"Client Certificate")," and add certificate."),(0,n.kt)("h4",{id:"certifcate-revocation-list"},"Certifcate Revocation List"),(0,n.kt)("p",null,"Users can specify client certificate revocation list."),(0,n.kt)("h4",{id:"client-certificate-raw-header"},"Client Certificate Raw Header"),(0,n.kt)("p",null,"Users can specify header name for forwarding raw SSL client certificate to upstream"),(0,n.kt)("h4",{id:"client-certificate-fingerprint-header"},"Client Certificate Fingerprint Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate fingerprints to be upstream."),(0,n.kt)("h4",{id:"client-certificate-issuer-header"},"Client Certificate Issuer Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate Issuer to be upstream."),(0,n.kt)("h4",{id:"client-certificate-subject-header"},"Client Certificate Subject Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate Subject to be upstream."),(0,n.kt)("h4",{id:"client-certificate-serial-header"},"Client Certificate Serial Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate Serial to be upstream."),(0,n.kt)("h4",{id:"client-certificate-verify-header"},"Client Certificate Verify Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate verify to be upstream."),(0,n.kt)("h4",{id:"client-certificate-start-date-header"},"Client Certificate Start Date Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate start date to be upstream."),(0,n.kt)("h4",{id:"client-certificate-end-date-header"},"Client Certificate End Date Header"),(0,n.kt)("p",null,"This option allows users to specify header names for forwarding SSL certificate end date to be upstream."),(0,n.kt)("h4",{id:"invalid-client-certificate-action"},"Invalid Client Certificate Action"),(0,n.kt)("p",null,"This option allows users to specify the action to be performed when client certificate verification fails."),(0,n.kt)("h4",{id:"custom-page"},"Custom Page"),(0,n.kt)("p",null,"Users can specify the response page to be shown on client certificate verification failure."))}p.isMDXComponent=!0},43751:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/sslsettings1-05a55c97adfd941026fd4a880977ce73.png"},13283:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/sslsettings2-95da2ed82ceef7e9e33e281098c324f5.png"}}]);