"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[25357],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6344:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:3},o="Geo Filtering",l={unversionedId:"products/cloud/waf/listener/security-profile/geo-filtering",id:"products/cloud/waf/listener/security-profile/geo-filtering",title:"Geo Filtering",description:"Block connections to or from geolocation based on IP Addresses and/or Countries.",source:"@site/docs/products/cloud/waf/listener/security-profile/geo-filtering.md",sourceDirName:"products/cloud/waf/listener/security-profile",slug:"/products/cloud/waf/listener/security-profile/geo-filtering",permalink:"/products/cloud/waf/listener/security-profile/geo-filtering",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Settings",permalink:"/products/cloud/waf/listener/security-profile/settings"},next:{title:"Antivirus",permalink:"/products/cloud/waf/listener/security-profile/antivirus"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"geo-filtering"},"Geo Filtering"),(0,i.kt)("p",null,"Block connections to or from geolocation based on IP Addresses and/or Countries."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Geo Filtering is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the geolocation techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geolocation also aids in content modification."),(0,i.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"WAF")," > ",(0,i.kt)("strong",{parentName:"p"},"Zones")," > ",(0,i.kt)("strong",{parentName:"p"},"Listener")," > ",(0,i.kt)("strong",{parentName:"p"},"Security Profiles")," > ",(0,i.kt)("strong",{parentName:"p"},"Geo Filtering"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure your settings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save"),". "))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blacklisted Countries"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the list of countries that will be permanently disallowed from accessing the website."),(0,i.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Whitelisted IP Prefixes"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the list of IPs that will be permanently allowed for accessing the website."),(0,i.kt)("td",{parentName:"tr",align:null},"IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Blacklisted IP Prefixes"),(0,i.kt)("td",{parentName:"tr",align:null},"Specify the list of IPs that will be permanently disallowed from accessing the website."),(0,i.kt)("td",{parentName:"tr",align:null},"IP"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Blacklisted Countries"),"\nTo block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Whitelisted IP Prefixes"),"\nIP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction.  ")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Blacklisted IP Prefixes"),"\nIP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently.  "))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Use Case"),"\nYour product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originated from multiple countries. In this case, you need to cautious about IP address blocking.  "),(0,i.kt)("p",null,"It is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well.",(0,i.kt)("br",{parentName:"p"}),"\n","Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious.  "),(0,i.kt)("p",null,"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs.  "),(0,i.kt)("p",null,"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actual they are not present there."))}p.isMDXComponent=!0}}]);