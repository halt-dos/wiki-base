"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2690],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=s(r),d=i,m=f["".concat(p,".").concat(d)]||f[d]||u[d]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},70702:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={},o="Profiles",l={unversionedId:"products/waf/listener/profiles/profiles",id:"products/waf/listener/profiles/profiles",title:"Profiles",description:"Create different security profiles for different sub-sections of your website.",source:"@site/docs/products/waf/listener/profiles/profiles.md",sourceDirName:"products/waf/listener/profiles",slug:"/products/waf/listener/profiles/",permalink:"/products/waf/listener/profiles/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Settings",permalink:"/products/waf/listener/settings"},next:{title:"Settings",permalink:"/products/waf/listener/profiles/settings"}},p={},s=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:2}],c={toc:s};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"profiles"},"Profiles"),(0,i.kt)("p",null,"Create different security profiles for different sub-sections of your website."),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Profiles is the default profile that contains most commonly used web application settings served through a virtual service. For customizing a profile, it is highly recommended to create a new profile instead of editing the default profile.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{alt:"Profiles.png",src:r(77162).Z,width:"1819",height:"766"})),(0,i.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to WAF > Listeners > Profiles"),(0,i.kt)("li",{parentName:"ol"},"Click Add Profile."),(0,i.kt)("li",{parentName:"ol"},"Configure your settings."),(0,i.kt)("li",{parentName:"ol"},"Click Save Changes.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Profile Name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Profile Priority"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Application Type"),(0,i.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,i.kt)("td",{parentName:"tr",align:null},"Others")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,i.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,i.kt)("td",{parentName:"tr",align:null},"Any")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Countries"),(0,i.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Source IP Prefixes"),(0,i.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Destination Port"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reference"),(0,i.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"1.",(0,i.kt)("strong",{parentName:"p"},"Profile Name:"),"\nThis option allows user to specify a user-friendly name of security profile. By default, a profile with 'Default' name is already created upon adding a listener.\n2.",(0,i.kt)("strong",{parentName:"p"},"Profile Priority:")),(0,i.kt)("p",null,"This option provides priotize feature for deciding which profile want to use first for matching request and taking action."),(0,i.kt)("p",null,"3.",(0,i.kt)("strong",{parentName:"p"},"Application Type:")),(0,i.kt)("p",null,"This option specifies type of application ( i.e. website or web service or web socket) want to select. A website is defined as a collection of web pages and related content that is identified by a common domain name whereas, a web service is a standardized medium to propagate communication between the client and server applications. And a web socket is a duplex protocol used mainly in the client-server communication channel."),(0,i.kt)("p",null,"4.",(0,i.kt)("strong",{parentName:"p"},"Protocol:")),(0,i.kt)("p",null,"This option specify the service type for the subdomain i.e. HTTP, TCP, UDP. Based on the protocol of the backend application, the listener/subdomain can be created with any of the three protocols. "),(0,i.kt)("p",null,"5.",(0,i.kt)("strong",{parentName:"p"},"Countries:")),(0,i.kt)("p",null,"This option specify countries from where request is coming should match with this profile."),(0,i.kt)("p",null,"6.",(0,i.kt)("strong",{parentName:"p"},"Source IP Prefixes:"),"\nThis option specify the source IP Prefixes for the requests coming will be matched with this profile."),(0,i.kt)("p",null,"7.",(0,i.kt)("strong",{parentName:"p"},"Destination Port:")),(0,i.kt)("p",null,"This option specify the destination port Prefixes where requests coming will be matched with this profile."),(0,i.kt)("p",null,"8.",(0,i.kt)("strong",{parentName:"p"},"Reference:")),(0,i.kt)("p",null,"This drop-down is used to clone an existing profile with the same configuration to a new profile.\nNote: User can clone existing profile with the same configuration to a new profile on the new user-specified URI.\nFollowing configurations are present under Security Profile."))}u.isMDXComponent=!0},77162:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/profileee-93e2cab3801ffbec658db919a62d2ed6.png"}}]);