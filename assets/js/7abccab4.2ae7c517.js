"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(a),d=r,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||n;return a?i.createElement(m,l(l({ref:t},p),{},{components:a})):i.createElement(m,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<n;s++)l[s]=a[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}f.displayName="MDXCreateElement"},97702:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>n,metadata:()=>o,toc:()=>s});var i=a(87462),r=(a(67294),a(3905));const n={sidebar_position:4},l="SSL Certificates",o={unversionedId:"community/docs/ssl_certificates",id:"community/docs/ssl_certificates",title:"SSL Certificates",description:"It provides functionality to support SSL offloading based on configurations.",source:"@site/docs/community/docs/ssl_certificates.md",sourceDirName:"community/docs",slug:"/community/docs/ssl_certificates",permalink:"/community/docs/ssl_certificates",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4}},c={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Generate Certificate",id:"generate-certificate",level:3},{value:"<strong>Step 1: Order Certificate</strong>",id:"step-1-order-certificate",level:4},{value:"<strong>Step 2: Verify Challenge</strong>",id:"step-2-verify-challenge",level:4},{value:"Step 3: Issue/Renew Certificate",id:"step-3-issuerenew-certificate",level:4},{value:"Upload Certificate",id:"upload-certificate",level:3},{value:"Description",id:"description",level:3},{value:"Certificate Name",id:"certificate-name",level:4},{value:"Certificate Domain",id:"certificate-domain",level:4},{value:"App Option",id:"app-option",level:4},{value:"Public Key",id:"public-key",level:4},{value:"Private key",id:"private-key",level:4}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ssl-certificates"},"SSL Certificates"),(0,r.kt)("p",null,"It provides functionality to support SSL offloading based on configurations."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"An SSL certificate is a few lines of code on your web server that provides security for online communications. When a web browser contacts your secured website, the SSL certificate enables an encrypted connection. It's kind of like sealing a letter in an envelope before sending it through the mail."),(0,r.kt)("p",null,"Haltdos platform supports SSL certificate management that allows customers to upload their existing SSL certificates or create new certificates using Let's Encrypt. The platform periodically checks the validity of the certificate and notifies users when the renewal is 2 weeks away from due date. If the certificate was created by Let's Encrypt, Haltdos platform automatically renews the certificate without requiring human intervention. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SSL Certificate",src:a(81803).Z,width:"1642",height:"983"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go To ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"SSL Certificates")),(0,r.kt)("li",{parentName:"ol"},"Configure Your Settings "),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes")," ")),(0,r.kt)("p",null,"Users can either upload a certificate or generate a new certificate with Let's Encrypt for their FQDN. For successfully generating Let's Encrypt certificate, you will have validate ownership of those domains. The solution supports 2-types of validations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"HTTP Validation")," for single domain certificate"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DNS Validation")," for wildcard certificate")),(0,r.kt)("h3",{id:"generate-certificate"},"Generate Certificate"),(0,r.kt)("p",null,"In order to generate a certificate, it's a three-step based process i.e."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Order Certificate: Select the listener/zone for which you need to order the certificate."),(0,r.kt)("li",{parentName:"ol"},"Verify Challenge: Verify the challenge for generating the certificate."),(0,r.kt)("li",{parentName:"ol"},"Issue/Renew Certificate: Upon verifying the challenge, the user can click on the Issue/Renew certificate accordingly.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes")," : Let's Encrypt certificate are valid for 3 months only. In order to renew, we have to re-issue the certificate with the same steps as mentioned above. This is applicable only for DNS validations. For certificates issued via HTTP validation, Haltdos automatically renews the certificates."),(0,r.kt)("h4",{id:"step-1-order-certificate"},(0,r.kt)("strong",{parentName:"h4"},"Step 1: Order Certificate")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the domain that we are aiming to issue for it."),(0,r.kt)("li",{parentName:"ol"},"Click on Generate.")),(0,r.kt)("h4",{id:"step-2-verify-challenge"},(0,r.kt)("strong",{parentName:"h4"},"Step 2: Verify Challenge")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select appropriate challenge option i.e. ",(0,r.kt)("strong",{parentName:"li"},"HTTP Challenge")," or ",(0,r.kt)("strong",{parentName:"li"},"DNS Challenge"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Verify Challenge"),"."),(0,r.kt)("li",{parentName:"ol"},"We have to wait at least 5 minutes duration in order to re-verify the certificate to change the status to update status.  "),(0,r.kt)("li",{parentName:"ol"},"After 5 minutes, click on ",(0,r.kt)("strong",{parentName:"li"},"Verify Challenge"),".")),(0,r.kt)("h4",{id:"step-3-issuerenew-certificate"},"Step 3: Issue/Renew Certificate"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Click on Issue/Renew Certificate.")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Certificate verification can fail if verification is not completed within stipulated time.  For any issues, please contact support. ")),(0,r.kt)("h3",{id:"upload-certificate"},"Upload Certificate"),(0,r.kt)("p",null,"To upload custom certificates, follow the steps below:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Domain"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"App Option"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate/upload certificate")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Public Key"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Private key"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"certificate-name"},"Certificate Name"),(0,r.kt)("p",null,"Users are allowed to specify the name for the certification."),(0,r.kt)("h4",{id:"certificate-domain"},"Certificate Domain"),(0,r.kt)("p",null,"Users are allowed to specify the domain name fo the certifiate."),(0,r.kt)("h4",{id:"app-option"},"App Option"),(0,r.kt)("p",null,"Users are allowed to select the certificate generate options."),(0,r.kt)("h4",{id:"public-key"},"Public Key"),(0,r.kt)("p",null,"User can specify the public key of certificate."),(0,r.kt)("h4",{id:"private-key"},"Private key"),(0,r.kt)("p",null,"User can specify the private key of certificate."))}u.isMDXComponent=!0},81803:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/ssl_certificate-d415109a4b40c3a9afffef11b6f34a9e.png"}}]);