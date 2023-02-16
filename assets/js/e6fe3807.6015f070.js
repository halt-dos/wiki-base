"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[26887],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>g});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(i),g=r,h=d["".concat(s,".").concat(g)]||d[g]||p[g]||a;return i?n.createElement(h,l(l({ref:t},u),{},{components:i})):n.createElement(h,l({ref:t},u))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,l=new Array(a);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<a;c++)l[c]=i[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},16403:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var n=i(87462),r=(i(67294),i(3905));const a={sidebar_position:1},l="Geo Filtering",o={unversionedId:"products/gslb/listener/geo_filtering",id:"version-6.0/products/gslb/listener/geo_filtering",title:"Geo Filtering",description:"Geo Filtering on DNS traffic",source:"@site/versioned_docs/version-6.0/products/gslb/listener/geo_filtering.md",sourceDirName:"products/gslb/listener",slug:"/products/gslb/listener/geo_filtering",permalink:"/v6/products/gslb/listener/geo_filtering",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Operational",permalink:"/v6/products/gslb/listener/operational"},next:{title:"Zones",permalink:"/v6/products/gslb/listener/zones"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Blacklisted Countries",id:"blacklisted-countries",level:4},{value:"Whitelisted IP Prefixes",id:"whitelisted-ip-prefixes",level:4},{value:"Blacklisted IP Prefixes",id:"blacklisted-ip-prefixes",level:4},{value:"Use Cases",id:"use-cases",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geo-filtering"},"Geo Filtering"),(0,r.kt)("p",null,"Geo Filtering on DNS traffic"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Geo Filtering is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the Geo location techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geo -location also aids in content modification."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"geo_filtering",src:i(84069).Z,width:"1851",height:"753"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to  ",(0,r.kt)("strong",{parentName:"li"},"Stack")," > ",(0,r.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"},"Geo Filtering")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".  ")),(0,r.kt)("p",null,"Configure the following parameters to set up the desired settings:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Vallue"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blacklisted IP Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the list of IPs that will be permanently disallowed from accessing the website.the website"),(0,r.kt)("td",{parentName:"tr",align:null},"IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whitelisted IP Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the list of IPs that will be permanently allowed for accessing the website."),(0,r.kt)("td",{parentName:"tr",align:null},"IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blacklisted Countries"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the list of countries that will be permanently disallowed from accessing  the website."),(0,r.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"blacklisted-countries"},"Blacklisted Countries"),(0,r.kt)("p",null,"To block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped."),(0,r.kt)("h4",{id:"whitelisted-ip-prefixes"},"Whitelisted IP Prefixes"),(0,r.kt)("p",null,"IP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction."),(0,r.kt)("h4",{id:"blacklisted-ip-prefixes"},"Blacklisted IP Prefixes"),(0,r.kt)("p",null,"IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently. "),(0,r.kt)("h4",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking."),(0,r.kt)("p",null,"It is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well."),(0,r.kt)("p",null,"Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious."),(0,r.kt)("p",null,"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs."),(0,r.kt)("p",null,"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actually they are not present there."))}p.isMDXComponent=!0},84069:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/geo-67e821f7285e65f0bbe097b5416367e1.png"}}]);