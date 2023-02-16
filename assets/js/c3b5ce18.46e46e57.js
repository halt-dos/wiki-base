"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[32330],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,k=m["".concat(s,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40966:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:5},i="Bot Protection",o={unversionedId:"products/cloud/waf/listener/security-profile/bot-protection",id:"products/cloud/waf/listener/security-profile/bot-protection",title:"Bot Protection",description:"Detect and Block malicious bots in real-time",source:"@site/docs/products/cloud/waf/listener/security-profile/bot-protection.md",sourceDirName:"products/cloud/waf/listener/security-profile",slug:"/products/cloud/waf/listener/security-profile/bot-protection",permalink:"/products/cloud/waf/listener/security-profile/bot-protection",draft:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"sidebar",previous:{title:"Antivirus",permalink:"/products/cloud/waf/listener/security-profile/antivirus"},next:{title:"Policy",permalink:"/products/cloud/waf/listener/security-profile/policy/"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"bot-protection"},"Bot Protection"),(0,a.kt)("p",null,"Detect and Block malicious bots in real-time"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Bot Protection helps you quickly determine, manage, and mitigate automated requests. You can configure Legitimate/Malicious Crawlers, Tor, Bot Request Rate, and Bad Traffics. HaltDos Threat Stream TM provides a list of malicious IPs, known as bad bots and crawlers. Enterprise can specify the action to take against this malicious traffic."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listener > Security Profiles > Bot Protection"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configure the following parameters to set up the desired settings:")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Allowed Crawlers"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the list of good crawlers by specifying their user agents. Such requests will be allowed."),(0,a.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bad Crawlers"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the list of bad crawlers by specifying their user agents. Such requests will be dropped."),(0,a.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Suspicious Crawlers"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify a list of suspicious crawlers by specifying their user agents. Such requests will be rate-limited."),(0,a.kt)("td",{parentName:"tr",align:null},"User Agent"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Bot Request Rate"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the maximum allowed Bot request rate from a single client IP."),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"30")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Bot Request Burst"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the maximum allowed Bot request burst from a single client IP."),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"50")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Tor Traffic"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the action to perform on TOR Network traffic."),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION / DROP / SEND CHALLENGE"),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Bad Reputation Traffic"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the action to perform on traffic from suspicious IPs reported by Haltdos Threat Stream TM."),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION / DROP / SEND CHALLENGE"),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Advance Bot Protection"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the advanced bot protection method."),(0,a.kt)("td",{parentName:"tr",align:null},"NONE / FINGERPRINT / TOKEN VALIDATION / ANY"),(0,a.kt)("td",{parentName:"tr",align:null},"NONE")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fingerprint Suspicion Threshold"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify the score after which the request will be marked as bot request if fingerprinting enabled. As value increased, requests marked as suspicious."),(0,a.kt)("td",{parentName:"tr",align:null},"Integer (2-10)"),(0,a.kt)("td",{parentName:"tr",align:null},"8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fingerprint Bot Traffic Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the action when the request is marked by the bot using fingerprinting"),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION / RECORD / RATE LIMIT /SEND CHALLENGE / DROP"),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Invalid Token Traffic Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the action when the request contains an invalid token, if token validation is enabled."),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION / RECORD / RATE LIMIT / DROP"),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Anonymous Traffic Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies the action when request contains no token, if token validation is enabled."),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION / RECORD / RATE LIMIT / DROP"),(0,a.kt)("td",{parentName:"tr",align:null},"NO ACTION")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Allowed Crawlers")),(0,a.kt)("p",null,"This field specifies the list of good crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Allowed Crawlers permits the crawlers to access the protected URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accepted values: String\n\u200bDefault: Empty\n\u200bE.g. Google Crawler\n\u200bUser-Agent: google\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bad Crawlers")),(0,a.kt)("p",null,"This field specifies the list of bad crawlers by specifying their user agents. You can add single or multiple user agents. All the user agent mentioned in Bad Crawlers does not permit the crawlers to access the protected URL."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accepted values: String\n\u200bDefault: Empty\n\u200bE.g. Google Crawler\n\u200bUser-Agent: google\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Suspicious Crawlers")),(0,a.kt)("p",null,"This field specifies a list of suspicious crawlers by specifying their user agents. These requests will be rate-limited based on the Bot rate limit i.e. Max Request Rate and Max Request Burst."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accepted values: String\n\u200bDefault: Empty\n\u200bE.g. Suspicious Crawler\n\u200bUser-Agent: wow.tor\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Bot Request Rate")),(0,a.kt)("p",null,"This field specifies the maximum allowed Bot request rate from a single client IP. In case the request rate of the user is higher than the defined rate, the request gets dropped."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accepted values: Number\n\u200bDefault: 50\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE"),": Bot Request Burst must be greater than or equal to Bot Request Rate"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Tor Traffic")),(0,a.kt)("p",null,"This field allows you to take action in case there is Tor traffic in the network. Tor traffic are the request coming from tor browser or dark web. It includes two actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"NO ACTION")," - Don't perform any action"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"DROP")," - Drop the request"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"SEND CHALLENGE")," - Send a challenge like a captcha")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Bad Reputation Traffic")),(0,a.kt)("p",null,"This field allows you to take action on traffic when Haltdos Threat Stream TM reports suspicious IPs. It includes two actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NO ACTION - Don't perform any action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DROP - Drop the request")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"SEND CHALLENGE - Send a challenge like a captcha"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Advance Bot Protection")),(0,a.kt)("p",null,"This field allows you to enable Haltdos Advance Bot Protection for an incoming request for the current security profile. It includes the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NONE")," - Don't perform any action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"FINGERPRINT")," - Perform fingerprint-based validation for protection of Web Applications, Web Services, and Mobile Applications from automated threats like bots. Action on the request is taken after the analysis of user activity and browser-based calculated score which helps in confirming the source of the request, human or bot. The following actions can be taken: Drop, Send Challenge, Record, Rate Limit.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"TOKEN VALIDATION - Perform token-based validation. API requests will be authenticated using tokens associated with the request. This ensures that the web service is serving authorized requests with the help of Haltdos Advance Bot Protection.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ANY - On the basis of application configuration, the required challenge will be thrown on the requests."))),(0,a.kt)("p",null,"Note: User can configure Advance Bot Settings in the Advanced settings for the listener by using the link: ",(0,a.kt)("strong",{parentName:"p"},"Advance Bot Settings")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fingerprint Suspicion Threshold")),(0,a.kt)("p",null,"This field specifies the score after which the request will be marked as a bot request. In case the request will be taken under fingerprint bot traffic action. Value can be ranged between 2 and 10 inclusive. A score increase, request marked as suspicious request."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"Accepted values: Integer\n\u200bDefault: 8\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Fingerprint Bot Traffic Action")),(0,a.kt)("p",null,"This field allows you to take action on traffic when Haltdos Advance Bot Protection reports a suspicious bot and breaches the fingerprint suspicion threshold. It includes the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"NONE")," - Don't perform any action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"RECORD")," - Don't perform any action and record this request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"RATE LIMIT")," - Perform rate limit for every request belong to a specific client.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"SEND CHALLENGE")," - Send a challenge like a captcha")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"DROP")," - Drop the request."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Invalid Token Traffic Action")),(0,a.kt)("p",null,"This field allows you to take action on traffic when Haltdos Advance Bot Protection detects current request contains an invalid token for the current security profile. It includes the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NO ACTION - Don't perform any action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RECORD - Don't perform any action and record this request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RATE LIMIT - Perform rate limiting on the request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DROP - Drop the request."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Anonymous Traffic Action")),(0,a.kt)("p",null,"This field allows you to take action on traffic when Haltdos Advance Bot Protection reports the current request with no token. It includes the following actions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"NO ACTION - Don't perform any action")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RECORD - Don't perform any action and record this request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"RATE LIMIT - Perform rate limiting on the request.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"DROP - Drop the request."))))}c.isMDXComponent=!0}}]);