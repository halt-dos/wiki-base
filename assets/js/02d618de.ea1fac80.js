"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4771],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(m,o(o({ref:t},u),{},{components:n})):i.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},o="Geo Fencing",l={unversionedId:"community-waf/docs/waf/geo_fencing",id:"community-waf/docs/waf/geo_fencing",title:"Geo Fencing",description:"Overview",source:"@site/docs/community-waf/docs/waf/geo_fencing.md",sourceDirName:"community-waf/docs/waf",slug:"/community-waf/docs/waf/geo_fencing",permalink:"/wiki-base/community-waf/docs/waf/geo_fencing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"communitySidebar",previous:{title:"SSL Settings",permalink:"/wiki-base/community-waf/docs/waf/ssl_settings"},next:{title:"Bot Protection",permalink:"/wiki-base/community-waf/docs/waf/bot_protection"}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Blacklisted Countries",id:"blacklisted-countries",level:4},{value:"Whitelisted IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"Blacklisted IP Prefixes",id:"blacklisted-ip-prefixes",level:4}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geo-fencing"},"Geo Fencing"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Geo Fencing is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Geo Fencing",src:n(80089).Z,width:"1920",height:"987"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Log onto the Haltdos console then go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Geo Fencing")," "),(0,r.kt)("li",{parentName:"ol"},"Configure the settings."),(0,r.kt)("li",{parentName:"ol"},"Click on save.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blacklist Countries"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist IP Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blacklisted IP Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"blacklisted-countries"},"Blacklisted Countries"),(0,r.kt)("p",null,"To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped."),(0,r.kt)("h4",{id:"whitelisted-ip-prefixes"},"Whitelisted IP Prefixes"),(0,r.kt)("p",null,"IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction."),(0,r.kt)("h4",{id:"blacklisted-ip-prefixes"},"Blacklisted IP Prefixes"),(0,r.kt)("p",null,"IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently."))}d.isMDXComponent=!0},80089:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/geo_filtering-1cc5c4383ea0cd4b09379838d73c4814.png"}}]);