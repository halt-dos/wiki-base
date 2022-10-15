"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1865],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=n,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||i;return a?r.createElement(k,l(l({ref:t},u),{},{components:a})):r.createElement(k,l({ref:t},u))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},80616:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:4},l="Bot Protection",o={unversionedId:"waf/docs/listener/profiles/bot",id:"waf/docs/listener/profiles/bot",title:"Bot Protection",description:"Detect and Block malicious bots in real-time",source:"@site/docs/waf/docs/listener/profiles/bot.md",sourceDirName:"waf/docs/listener/profiles",slug:"/waf/docs/listener/profiles/bot",permalink:"/waf/docs/listener/profiles/bot",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Antivirus",permalink:"/waf/docs/listener/profiles/anti_virus"},next:{title:"Policy",permalink:"/waf/docs/listener/profiles/policy/"}},s={},p=[{value:"How To Use",id:"how-to-use",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bot-protection"},"Bot Protection"),(0,n.kt)("p",null,"Detect and Block malicious bots in real-time"),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"bot",src:a(48144).Z,width:"1254",height:"633"})),(0,n.kt)("h2",{id:"how-to-use"},"How To Use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listener")," > ",(0,n.kt)("strong",{parentName:"li"},"Security Profiles ")," > ",(0,n.kt)("strong",{parentName:"li"},"Bot Protection")),(0,n.kt)("li",{parentName:"ol"},"Configure your setting"),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes")," ")),(0,n.kt)("p",null,"Configure the following parameters to set up the desired settings:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Allowed Crawlers"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the list of good crawlers by specifying their user agents. Such requests will be allowed."),(0,n.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bad Crawlers"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the list of bad crawlers by specifying their user agents. Such requests will be dropped."),(0,n.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Suspicious Crawlers"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify a list of suspicious crawlers by specifying their user agents. Such requests will be rate-limited."),(0,n.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maximum Bot Request Rate"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the maximum allowed Bot request rate from a single client IP."),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Maximum Bot Request Burst"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the maximum allowed Bot request burst from a single client IP."),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bot Track Duration"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the Bot request rate track duration in seconds."),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Tor Traffic"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the action to perform on TOR Network traffic."),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION / DROP / SEND CHALLENGE"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Bad Reputation Traffic"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM."),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION / DROP / SEND CHALLENGE"),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Anonymous Proxy Traffic"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the action when request contains no token, if token validation is enabled."),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION / RECORD / RATE LIMIT / DROP"),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Advance Bot Protection"),(0,n.kt)("td",{parentName:"tr",align:null},"Specifies the advance bot protection method."),(0,n.kt)("td",{parentName:"tr",align:null},"NO ACTION / RECORD / RATE LIMIT / DROP"),(0,n.kt)("td",{parentName:"tr",align:null},"NONE")))),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Allowed Crawlers"),"\nThis field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL. "),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Accepted values: String  \n\nDefault: Empty  \n\nE.g. Google Crawler  \n\nUser-Agent: google  \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Bad Crawlers"),"\nThis field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers does not permit the crawlers to access the protected URL."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Accepted values: String  \n\nDefault: Empty  \n\nE.g. Google Crawler  \n\nUser-Agent: google  \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Suspicious Crawlers"),"\nThis field specifies a list of suspicious crawlers by specifying their user agents. These requests will be rate-limited based on the Bot rate limit i.e. Max Request Rate and Max Request Burst."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Accepted values: String  \n\nDefault: Empty  \n\nE.g. Suspicious Crawler  \n\nUser-Agent: wow.tor \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Maximum Bot Request Rate"),"\nThis field specifies the maximum allowed Bot request rate from a single client IP. In case the request rate of the user is higher than the defined rate, the request gets dropped."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Accepted values: Numbers  \n\nDefault: 30  \n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Maximum Bot Request Burst"),"\nThis field specifies the maximum allowed Bot request burst from a single client IP. In case the requested burst of the user is higher than the defined rate, the request gets dropped."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"Accepted values: Numbers  \nDefault: 50  \n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Bot Request Burst must be greater than or equal to Bot Request Rate")),(0,n.kt)("ol",{start:6},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Bot Track Duration"),"\nSpecify the Bot request rate track duration in seconds.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Tor Traffic")))),(0,n.kt)("p",null,"This field allows you to take action in case there is Tor traffic in the network. Tor traffic are the request coming from tor browser or dark web. It includes two actions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NO ACTION"),"\nDon't perform any action  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DROP"),"\nDrop the request  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SEND CHALLENGE"),"\nSend a challenge like a captcha  "))),(0,n.kt)("ol",{start:8},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Bad Reputation Traffic"))),(0,n.kt)("p",null,"This field allows you to take action on traffic when Haltdos Threat Stream TM reports suspicious IPs. It includes two actions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NO ACTION"),"\nDon't perform any action  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DROP"),"\nDrop the request  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"SEND CHALLENGE"),"\nSend a challenge like a captcha  "))),(0,n.kt)("ol",{start:9},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Advance Bot Protection"),"\nThis field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"NONE")," :\nDon't perform any action  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"FINGERPRINT"),":\nPerform fingerprint-based validation for protection of Web Applications, Web Services, and Mobile Applications from automated threats like bots. Action on the request is taken after the analysis of user activity and browser-based calculated score which helps in confirming the source of the request, human or bot. The following actions can be taken: Drop, Send Challenge, Record, Rate Limit.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"TOKEN VALIDATION")," :\nPerform token-based validation. API requests will be authenticated using tokens associated with the request. This ensures that the web service is serving authorized requests with the help of Haltdos Advance Bot Protection.  ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"ANY"),":\nOn the basis of application configuration, the required challenge will be thrown on the requests.\nNote: User can configure Advance Bot Settings in the Advanced settings for the listener by using the link: Advance Bot Settings"))))}c.isMDXComponent=!0},48144:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/bot_protection-6485935907e39ad57a4b3046d81ef05a.png"}}]);