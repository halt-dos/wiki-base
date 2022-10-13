"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2244],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=r,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},39761:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:1},o="WEB Policy",l={unversionedId:"community-waf/docs/waf/policy/web_policy",id:"community-waf/docs/waf/policy/web_policy",title:"WEB Policy",description:"Overview",source:"@site/docs/community-waf/docs/waf/policy/web_policy.md",sourceDirName:"community-waf/docs/waf/policy",slug:"/community-waf/docs/waf/policy/web_policy",permalink:"/wiki-base/community-waf/docs/waf/policy/web_policy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"communitySidebar",previous:{title:"Server Monitors",permalink:"/wiki-base/community-waf/docs/waf/server_farm/monitors"},next:{title:"JSON Policy",permalink:"/wiki-base/community-waf/docs/waf/policy/json_policy"}},s={},p=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"web-policy"},"WEB Policy"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Configure Web Security Policy for HTML based websites - Static, Dynamic, Wordpress, etc.A web policy or policies are constraints or mandates in relation to technical constraints, legal, editorial, and compliance. Configure policies that HTTP(s) requests must conform to when requesting data from the backend web application."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Policy",src:n(64742).Z,width:"1942",height:"1080"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"Web Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Acceptable Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Allowed Header Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"30")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Header Field Name Length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"50")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Header Field Value Length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"2048")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allowed HTTP Methods"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ALLOWED MIME TYPES"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"WEB EXTENSIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTRICTED EXTENSIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"RESTRICTED FILE UPLOAD"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Pre-selected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"X-FRAME OPTIONS"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CAPTCHA VALIDATION EXPIRY"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"86400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CSRF"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"OFF")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Immutable Cookie Validity"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"86400")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cookie Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Allowed Header Fields"),"\nHTTP header fields provide necessary data about the request or response. It also provides the details about the object sent in the message body.\nThis field specifies the maximum number of allowed HTTP header fields in the HTTP request header. If the header field exceeds, then the request gets dropped."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Header Field Name Length"),"\nThis field specifies the maximum allowed length of the HTTP header field name. If the header field name length exceeds the specified length then the request gets dropped."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Header Field Value Length"),"\nThis field specifies the maximum allowed length of the HTTP header field value. If the header field value length exceeds the specified length then the request gets dropped."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allowed HTTP Methods"),"\nHTTP methods are a set of common request methods for HTTP. These request methods indicate the specific action that you need to take care of a specific resource. Each of the request methods implements a different semantic. A group of these methods represents some common features. E.g. a request method can be safe, cache-able, or idempotent.  "),(0,r.kt)("p",null,"We support the following HTTP Methods:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"GET"),":  It requests a specified resource representation. It helps to retrieve data."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"HEAD"),":  It inquires for a response identical to that of a GET request. It doesn't enquire the response body."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"POST"),":  It helps to submit an entity to the desired resource. It often causes a change in state or side effects on the server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"PUT"),":  It exchanges all existing representations of the target resource with the request payload."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"DELETE"),":  It helps to delete the specified resource"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"OPTIONS"),":  It helps to indicate the communication options for the target resource.\nThis field specifies all the allowed HTTP methods. If the request includes any methods other than the stated ones, then the request gets dropped.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allowed MIME Types"),"\nMIME Type, also known as media type or a Multipurpose Internet Mail Extensions is a standard that indicates both format and nature of a file, document, or bytes assortment.\nMIME-type helps browsers to determine how to process a URL. A browser must send an exact MIME type Content-Type header response. In case, it isn't configured correctly; the browser will misinterpret file content. The Website will not function properly, and there will be mishandling of downloaded files.\nThis field specifies the list of the allowed HTTP MIME type. If the request contains any mime types other than specified ones, then the request gets dropped."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Extensions"),"\nUsers are allowed to specify the list of extensions for which Human Authentication will be enabled."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Restricted Extentions"),"\nRestricted extensions are files that don't reside on a web server. This field specifies the list of extensions that should be blocked or restricted."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Restricted File Upload"),"\nRestricted file uploads restrict or block the request with a file that is malicious or corrupted based on the file extensions specified, such requests are dropped."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"X-FRAME OPTIONS"),"\nX-frame is used for adding a header to stop clickjacking. Clickjacking is an interface-based attack in which a user is tricked into clicking on actionable content on a hidden website by clicking on some other content in a decoy website."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Web Policy",src:n(50713).Z,width:"566",height:"430"})),(0,r.kt)("p",null,"Cookies are primarily for session management. Attackers try to steal its data for session hijacking. Parameters to consider while securing cookie:  "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Cookie Name"),": This field specifies the cookie name for which you need to apply the policies.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable HTTP Only Flag"),": This field prevents the client-side script from accessing and manipulating the cookie.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Enable Secure Flag"),": This field allows you to ensure that the cookie is only sent over a secured HTTPS channel.  "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Same Site"),": This field doesn't allow the browser to send this cookie along with cross-site requests. The main goal is to mitigate the risk of cross-origin data leakage. Even, it protects against cross-site request forgery attacks.  ")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"STRICT")," - This value ensures the cookie is not being sent to the target site in all cross-site browsing contexts.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("strong",{parentName:"p"},"LAX")," - This value provides both security and usability to the sites that need to manage the user's logged-in session once the user login from an external link."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This value specifies no action would be taken, and cookies will be allowed to pass to an external site.")))}c.isMDXComponent=!0},64742:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_policy2-cc4a56264fc333c9a3bf3d481cc9d2e9.png"},50713:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/web_policy4-c6c99ad8ab342d4e36f8acf91de9c50d.png"}}]);