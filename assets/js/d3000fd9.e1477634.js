"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[35688],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},22891:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:1},l="WEB Policy",o={unversionedId:"products/waf/listener/profiles/policy/web_policy",id:"products/waf/listener/profiles/policy/web_policy",title:"WEB Policy",description:"Configure Web Security Policy for HTML based websites - , Dynamic, Wordpress, etc.",source:"@site/docs/products/waf/listener/profiles/policy/web_policy.md",sourceDirName:"products/waf/listener/profiles/policy",slug:"/products/waf/listener/profiles/policy/web_policy",permalink:"/products/waf/listener/profiles/policy/web_policy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Policy",permalink:"/products/waf/listener/profiles/policy/"},next:{title:"JSON Policy",permalink:"/products/waf/listener/profiles/policy/json_policy"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"<strong>Maximum Allowed Header Fields</strong>",id:"maximum-allowed-header-fields",level:5},{value:"<strong>Maximum Header Field Name Length</strong>",id:"maximum-header-field-name-length",level:5},{value:"<strong>Maximum Header Field Value Length</strong>",id:"maximum-header-field-value-length",level:5},{value:"<strong>Allowed HTTP Methods</strong>",id:"allowed-http-methods",level:5},{value:"<strong>Allowed MIME Types</strong>",id:"allowed-mime-types",level:5},{value:"<strong>Web Extensions</strong>",id:"web-extensions",level:5},{value:"<strong>Restricted Extention</strong>",id:"restricted-extention",level:5},{value:"<strong>Restricted File Upload</strong>",id:"restricted-file-upload",level:5},{value:"<strong>X-FRAME OPTIONS</strong>",id:"x-frame-options",level:5},{value:"<strong>CAPTCHA VALIDATION EXPIRY</strong>",id:"captcha-validation-expiry",level:5},{value:"<strong>CSRF</strong>",id:"csrf",level:5},{value:"<strong>Immutable Cookie Validity</strong>",id:"immutable-cookie-validity",level:5}],p={toc:d};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-policy"},"WEB Policy"),(0,r.kt)("p",null,"Configure Web Security Policy for HTML based websites - , Dynamic, Wordpress, etc."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"A web policy or policies are constraints or mandates in relation to technical constraints, legal, editorial, and compliance. Configure policies that HTTP(s) requests must conform to when requesting data from the backend web application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Policy",src:a(59220).Z,width:"1835",height:"883"})),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"webpolicy",src:a(45304).Z,width:"1573",height:"535"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"Web Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Acceptable Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Allowed Header Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Header Field Name Length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Header Field Value Length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2048")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allowed HTTP Methods"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALLOWED MIME TYPES"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WEB EXTENSIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTRICTED EXTENSIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTRICTED FILE UPLOAD"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-FRAME OPTIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CAPTCHA VALIDATION EXPIRY"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"86400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRF"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"OFF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Immutable Cookie Validity"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"86400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cookie Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("h5",{id:"maximum-allowed-header-fields"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Allowed Header Fields")),(0,r.kt)("p",null,"HTTP header fields provide necessary data about the request or response. It also provides the details about the object sent in the message body.\nThis field specifies the maximum number of allowed HTTP header fields in the HTTP request header. If the header field exceeds, then the request gets dropped."),(0,r.kt)("h5",{id:"maximum-header-field-name-length"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Header Field Name Length")),(0,r.kt)("p",null,"This field specifies the maximum allowed length of the HTTP header field name. If the header field name length exceeds the specified length then the request gets dropped."),(0,r.kt)("h5",{id:"maximum-header-field-value-length"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Header Field Value Length")),(0,r.kt)("p",null,"This field specifies the maximum allowed length of the HTTP header field value. If the header field value length exceeds the specified length then the request gets dropped."),(0,r.kt)("h5",{id:"allowed-http-methods"},(0,r.kt)("strong",{parentName:"h5"},"Allowed HTTP Methods")),(0,r.kt)("p",null,"HTTP Methods are a set of common request methods for HTTP. These request methods indicate the specific action that you need to take care of a specific resource. Each of the request methods implements a different semantic. A group of these methods represents some common features. E.g. a request method can be safe, cache-able, or idempotent.  "),(0,r.kt)("p",null,"We support the following HTTP Methods:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"GET"),":  It requests a specified resource representation. It helps to retrieve data."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HEAD"),":  It inquires for a response identical to that of a GET request. It doesn't enquire the response body."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"POST"),":  It helps to submit an entity to the desired resource. It often causes a change in state or side effects on the server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"PUT"),":  It exchanges all existing representations of the target resource with the request payload."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DELETE"),":  It helps to delete the specified resource"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"OPTIONS"),":  It helps to indicate the communication options for the target resource.\nThis field specifies all the allowed HTTP methods. If the request includes any methods other than the stated ones, then the request gets dropped.")),(0,r.kt)("h5",{id:"allowed-mime-types"},(0,r.kt)("strong",{parentName:"h5"},"Allowed MIME Types")),(0,r.kt)("p",null,"MIME Type, also known as media type or a Multipurpose Internet Mail Extensions is a standard that indicates both format and nature of a file, document, or bytes assortment.\nMIME-type helps browsers to determine how to process a URL. A browser must send an exact MIME type Content-Type header response. In case, it isn't configured correctly; the browser will misinterpret file content. The Website will not function properly, and there will be mishandling of downloaded files.\nThis field specifies the list of the allowed HTTP MIME type. If the request contains any mime types other than specified ones, then the request gets dropped."),(0,r.kt)("h5",{id:"web-extensions"},(0,r.kt)("strong",{parentName:"h5"},"Web Extensions")),(0,r.kt)("p",null,"Users are allowed to specify the list of extensions for which Human Authentication will be enabled."),(0,r.kt)("h5",{id:"restricted-extention"},(0,r.kt)("strong",{parentName:"h5"},"Restricted Extention")),(0,r.kt)("p",null,"Restricted extensions are files that don't reside on a web server. This field specifies the list of extensions that should be blocked or restricted."),(0,r.kt)("h5",{id:"restricted-file-upload"},(0,r.kt)("strong",{parentName:"h5"},"Restricted File Upload")),(0,r.kt)("p",null,"Restricted file uploads restrict or block the request with a file that is malicious or corrupted based on the file extensions specified, such requests are dropped."),(0,r.kt)("h5",{id:"x-frame-options"},(0,r.kt)("strong",{parentName:"h5"},"X-FRAME OPTIONS")),(0,r.kt)("p",null,"X-frame is used for adding a header to stop clickjacking. Clickjacking is an interface-based attack in which a user is tricked into clicking on actionable content on a hidden website by clicking on some other content in a decoy website."),(0,r.kt)("h5",{id:"captcha-validation-expiry"},(0,r.kt)("strong",{parentName:"h5"},"CAPTCHA VALIDATION EXPIRY")),(0,r.kt)("p",null,"In order to protect the web application from automated attacks. Captcha is used to validate the user but its validity is set in seconds for which the captcha will be valid."),(0,r.kt)("h5",{id:"csrf"},(0,r.kt)("strong",{parentName:"h5"},"CSRF")),(0,r.kt)("p",null,"Cross-Site Request Forgery (CSRF) is an attack-type in which a malicious blog, email, instant message, or program causes a browser of the user to execute an unwanted action on a trusted site in case of user authentication. Enable cookie-based CSRF protection for incoming HTTP requests."),(0,r.kt)("h5",{id:"immutable-cookie-validity"},(0,r.kt)("strong",{parentName:"h5"},"Immutable Cookie Validity")),(0,r.kt)("p",null,"An HTTP cookie, also known as a browser cookie or web cookie is a small data piece that a server sends to the web browser of the user. A browser can store it and send it back to the same server with the next request. It tells whether the two requests are coming from the same browser. It reminisces accurate data for the stateless HTTP protocol.  "),(0,r.kt)("p",null,"Three primary purposes of cookies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Session management"),": Games scores, shopping carts, logins, or anything else the server should remember."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Personalization"),": Themes, user preferences, and other settings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tracking"),": User behavior recording and analyzing.  ")),(0,r.kt)("p",null,"Cookies are primarily for session management. Attackers try to steal its data for session hijacking. Parameters to consider while securing cookie:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cookie Name"),": This field specifies the cookie name for which you need to apply the policies.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Immutable (Cookie Signing)"),": This field allows you to ensure that the specified cookie remains unchanged by the client. Any request with a modified cookie value gets rejected.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable HTTP Only Flag"),": This field prevents the client-side script from accessing and manipulating the cookie.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Secure Flag"),": This field allows you to ensure that the cookie is only sent over a secured HTTPS channel.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Same Site"),": This field doesn't allow the browser to send this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin data leakage. Even, it protects against cross-site request forgery attacks.  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STRICT")," - This value ensures the cookie is not being sent to the target site in all cross-site browsing contexts.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"LAX")," - This value provides both security and usability to the sites that need to manage the user's logged-in session once the user login from an external link."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This value specifies no action would be taken, and cookies will be allowed to pass to an external site.")))}c.isMDXComponent=!0},59220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/profile_webpolicy-5c23374400e3c2126a1df936782e7829.png"},45304:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/profile_webpolicy1-5f58d8315f9bdbae23b049e9820427c7.png"}}]);