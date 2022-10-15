"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},34927:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2},a="Geo Fencing",l={unversionedId:"community/docs/waf/geo_fencing",id:"community/docs/waf/geo_fencing",title:"Geo Fencing",description:"Overview",source:"@site/docs/community/docs/waf/geo_fencing.md",sourceDirName:"community/docs/waf",slug:"/community/docs/waf/geo_fencing",permalink:"/community/docs/waf/geo_fencing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2}},s={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Blacklisted Countries",id:"blacklisted-countries",level:4},{value:"Whitelisted IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"Blacklisted IP Prefixes",id:"blacklisted-ip-prefixes",level:4}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geo-fencing"},"Geo Fencing"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Geo Fencing is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Geo Fencing",src:n(80089).Z,width:"1920",height:"987"})),(0,i.kt)("h3",{id:"how-to-use"},"How to Use"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log onto the Haltdos console then go to ",(0,i.kt)("strong",{parentName:"li"},"WAF")," > ",(0,i.kt)("strong",{parentName:"li"},"Geo Fencing")," "),(0,i.kt)("li",{parentName:"ol"},"Configure the settings."),(0,i.kt)("li",{parentName:"ol"},"Click on save.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blacklist Countries"),(0,i.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Whitelist IP Prefixes"),(0,i.kt)("td",{parentName:"tr",align:null},"IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blacklisted IP Prefixes"),(0,i.kt)("td",{parentName:"tr",align:null},"IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("h4",{id:"blacklisted-countries"},"Blacklisted Countries"),(0,i.kt)("p",null,"To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped."),(0,i.kt)("h4",{id:"whitelisted-ip-prefixes"},"Whitelisted IP Prefixes"),(0,i.kt)("p",null,"IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction."),(0,i.kt)("h4",{id:"blacklisted-ip-prefixes"},"Blacklisted IP Prefixes"),(0,i.kt)("p",null,"IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently."))}d.isMDXComponent=!0},80089:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/geo_filtering-1cc5c4383ea0cd4b09379838d73c4814.png"}}]);