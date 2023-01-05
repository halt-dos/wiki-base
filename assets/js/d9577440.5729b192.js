"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[24647],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>k});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=a,m=d["".concat(p,".").concat(k)]||d[k]||u[k]||o;return n?r.createElement(m,l(l({ref:e},c),{},{components:n})):r.createElement(m,l({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79121:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:2},l="API Tokens",i={unversionedId:"products/hdplatform/stacks/integrations/api_tokens",id:"version-6.0/products/hdplatform/stacks/integrations/api_tokens",title:"API Tokens",description:"Generating API tokens for enabling API functionality",source:"@site/versioned_docs/version-6.0/products/hdplatform/stacks/integrations/api_tokens.md",sourceDirName:"products/hdplatform/stacks/integrations",slug:"/products/hdplatform/stacks/integrations/api_tokens",permalink:"/products/hdplatform/stacks/integrations/api_tokens",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Syslog",permalink:"/products/hdplatform/stacks/integrations/syslog"},next:{title:"Webhooks",permalink:"/products/hdplatform/stacks/integrations/webhooks"}},p={},s=[{value:"How to Use:",id:"how-to-use",level:3}],c={toc:s};function u(t){let{components:e,...o}=t;return(0,a.kt)("wrapper",(0,r.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"api-tokens"},"API Tokens"),(0,a.kt)("p",null,"Generating API tokens for enabling API functionality"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos platform is an API first solution supporting API access via JSON (RESTFul) or XML. To authenticate API requests, API tokens are needed. Access of these tokens can be restricted to READ ONLY or READ AND WRITE."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"All API requests are ",(0,a.kt)("strong",{parentName:"p"},"Authorization: Bearer ",(0,a.kt)("inlineCode",{parentName:"strong"},"<TOKEN>"))," header. Depending upon requirement, specify ",(0,a.kt)("strong",{parentName:"p"},"Content-Type: application/xml")," for XML and ",(0,a.kt)("strong",{parentName:"p"},"Content-Type"),": ",(0,a.kt)("strong",{parentName:"p"},"application/json")," for JSON output. If not Content-Type header is found, API will resort to JSON output. ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"apitokens",src:n(71998).Z,width:"1275",height:"209"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to Stack > Settings > API Tokens"),(0,a.kt)("li",{parentName:"ol"},"Configure your settings"),(0,a.kt)("li",{parentName:"ol"},"Click Save")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Create API Token"),(0,a.kt)("td",{parentName:"tr",align:null},"Click on the button to create API token"),(0,a.kt)("td",{parentName:"tr",align:null},"Button"),(0,a.kt)("td",{parentName:"tr",align:null},"NA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter a name for the token"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Access"),(0,a.kt)("td",{parentName:"tr",align:null},"Select the scope of access for the token"),(0,a.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,a.kt)("td",{parentName:"tr",align:null},"Read And Write")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Scope"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays the scope of access for the token"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"NA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Token"),(0,a.kt)("td",{parentName:"tr",align:null},"Displays the token generated"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"NA")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Let's copy and delete the token"),(0,a.kt)("td",{parentName:"tr",align:null},"NA"),(0,a.kt)("td",{parentName:"tr",align:null},"Icon")))))}u.isMDXComponent=!0},71998:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/token1-a08ef460c3d9d135407713920d43bf05.png"}}]);