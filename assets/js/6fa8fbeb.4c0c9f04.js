"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2223],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),f=r,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},98697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:2},o="Geo Filtering",s={unversionedId:"waf/docs/listener/profiles/geo_filtering",id:"waf/docs/listener/profiles/geo_filtering",title:"Geo Filtering",description:"Overview",source:"@site/docs/waf/docs/listener/profiles/geo_filtering.md",sourceDirName:"waf/docs/listener/profiles",slug:"/waf/docs/listener/profiles/geo_filtering",permalink:"/waf/docs/listener/profiles/geo_filtering",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wafSidebar",previous:{title:"Settings",permalink:"/waf/docs/listener/profiles/settings"},next:{title:"Antivirus",permalink:"/waf/docs/listener/profiles/anti_virus"}},l={},c=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Use Cases",id:"use-cases",level:4}],u={toc:c};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"geo-filtering"},"Geo Filtering"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Geo-filtering")," is the practice of restricting access to Internet content, based upon the user's geographical location. With the help of Internet geolocation techniques, check user's IP address against a blacklist or whitelist, accounts, and measuring the end-to-end delay of a network connection to estimate the physical location of the user and restrict them.\nOur solution restricts user's based upon BlackListed IP Prefixes and Countries. It also allows permanently to access website through WhiteListed IP Prefixes.  "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"geo-filtering",src:n(20215).Z,width:"1521",height:"450"}),"  "),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to WAF > Listener > Security Profiles > Geo Filtering."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on Save Changes.  ")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blacklist Countries"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist IP Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Blacklist IP Prefixes"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("p",null,"1.",(0,r.kt)("strong",{parentName:"p"},"Blacklist Countries:"),"\nThis section specify the list of countries that will be permanently disallowed from accessing the website. Countries can be selected by typing the name of the country and any request coming from the specified countries will be dropped.  "),(0,r.kt)("p",null,"2.",(0,r.kt)("strong",{parentName:"p"},"Whitelist IP Prefixes:"),"\nThis section specify the list of IPs that will be permanently allowed for accessing the website. IP whitelisting is when you grant network access only to specific IP addresses.  "),(0,r.kt)("p",null,"3.",(0,r.kt)("strong",{parentName:"p"},"Blacklist IP Prefixes:"),"\nThis section specify the list of IPs that will be permanently disallowed from accessing the website. IP blacklisting is a method used to filter out illegitimate or malicious IP addresses from accessing your networks. Blacklists are lists containing ranges of or individual IP addresses that you want to block.  "),(0,r.kt)("h4",{id:"use-cases"},"Use Cases"),(0,r.kt)("p",null,"Try to understand the concept of geo-filtering through some real-world based example. If your product is single-country based, for example, India. Geo-filtering provides feature to block or blacklist the IPs of other countries and only give access within India.",(0,r.kt)("br",{parentName:"p"}),"\n","The other condition is that you are not dealing with foreign clients but using online services or technology that is present outside of India like web hosting and webmail. In this case, allow such services through the Firewall.  "),(0,r.kt)("p",null,"Your product is single-country based, say, for example, India. You have blocked or blacklisted all the IPs that don't originate within India. Now, you have a website or product that you need to access by IPs originating from multiple countries. In this case, you need to be cautious about IP address blocking.\nIt is possible that even though you are not dealing with foreign clients, you may be using online services or technology that have a presence outside India like web hosting and webmail. You need to allow such services through the Firewall as well."),(0,r.kt)("p",null,"Blacklisting countries is quite easy and quick. However, Geo-filtering usage is more efficient. It makes your web-blocking more precise. You can block specific IPs, a range of IPs, IP addresses list that is known to be malicious."),(0,r.kt)("p",null,"In case you have blocked a whole country, you can add specific IPs to the Whitelist to access websites. For example, your staff is abroad and wants to access the network; you can whitelist their IPs."),(0,r.kt)("p",null,"If you wish to accept traffic from only a few countries and blacklist all the others, then use the Not Country name (e.g. Not India) option. Geo Filtering also has limitations. It cannot block a targeted attack as criminals can mask their location. They can show the attack is from a particular country, but in actuality, they are not present there."))}p.isMDXComponent=!0},20215:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/geo_filtering-7f1315dd0404acc5bd8ac1c7a6bd4076.png"}}]);