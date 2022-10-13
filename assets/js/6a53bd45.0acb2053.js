"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1666],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67596:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3},o="Geo Filtering",s={unversionedId:"saas/docs/waf/listener/security-profile/geo-filtering",id:"saas/docs/waf/listener/security-profile/geo-filtering",title:"Geo Filtering",description:"Block connections to or from geolocation based on IP Addresses and/or Countries.",source:"@site/docs/saas/docs/waf/listener/security-profile/geo-filtering.md",sourceDirName:"saas/docs/waf/listener/security-profile",slug:"/saas/docs/waf/listener/security-profile/geo-filtering",permalink:"/wiki-base/saas/docs/waf/listener/security-profile/geo-filtering",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"saasSidebar",previous:{title:"Settings",permalink:"/wiki-base/saas/docs/waf/listener/security-profile/settings"},next:{title:"Antivirus",permalink:"/wiki-base/saas/docs/waf/listener/security-profile/antivirus"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"geo-filtering"},"Geo Filtering"),(0,a.kt)("p",null,"Block connections to or from geolocation based on IP Addresses and/or Countries."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Geo Filtering is a smart way to limit access to Internet content as per the geographic location of the user. Firstly, we determine the location of the user using the geolocation techniques (such as reviewing the IP address of the user against Whitelist or blacklist, accounts, calculating network connection end-to-end delay to assess the user's physical location). Lastly, result analysis takes place to determine whether the system will allow or deny access to the site or particular content. Geolocation also aids in content modification."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Zones")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Security Profiles")," > ",(0,a.kt)("strong",{parentName:"p"},"Geo Filtering"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),". "))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blacklisted Countries"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the list of countries that will be permanently disallowed from accessing the website."),(0,a.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Whitelisted IP Prefixes"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the list of IPs that will be permanently allowed for accessing the website."),(0,a.kt)("td",{parentName:"tr",align:null},"IP"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Blacklisted IP Prefixes"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the list of IPs that will be permanently disallowed from accessing the website."),(0,a.kt)("td",{parentName:"tr",align:null},"IP"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blacklisted Countries"),"\nTo block requests based on country of origin. It enables the request to be filtered based on the countries specified. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Whitelisted IP Prefixes"),"\nIP whitelisting is when you grant network access only to specific IP addresses. This field allows the request coming from specified IP Prefixes permanently though the country is blacklisted or any other restriction.  ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Blacklisted IP Prefixes"),"\nIP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block. This field restricts the requests coming from specified IP Prefixes permanently.  "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Use Case"),"\nYour product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originated from multiple countries. In this case, you need to cautious about IP address blocking.  "),(0,a.kt)("p",null,"It is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well.",(0,a.kt)("br",{parentName:"p"}),"\n","Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious.  "),(0,a.kt)("p",null,"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs.  "),(0,a.kt)("p",null,"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actual they are not present there."))}p.isMDXComponent=!0}}]);