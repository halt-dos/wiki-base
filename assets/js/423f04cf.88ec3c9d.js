"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6727],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var i=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(a),d=r,m=c["".concat(o,".").concat(d)]||c[d]||h[d]||n;return a?i.createElement(m,l(l({ref:t},u),{},{components:a})):i.createElement(m,l({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,l=new Array(n);l[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<n;p++)l[p]=a[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,a)}c.displayName="MDXCreateElement"},34454:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(87462),r=(a(67294),a(3905));const n={sidebar_position:4},l="Whitelist Rules",s={unversionedId:"saas/waf/listener/security-profile/rules/whitelist",id:"saas/waf/listener/security-profile/rules/whitelist",title:"Whitelist Rules",description:"This rule allows to add exceptions on existing rules (custom and managed)",source:"@site/docs/saas/waf/listener/security-profile/rules/whitelist.md",sourceDirName:"saas/waf/listener/security-profile/rules",slug:"/saas/waf/listener/security-profile/rules/whitelist",permalink:"/saas/waf/listener/security-profile/rules/whitelist",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Rate Limiting",permalink:"/saas/waf/listener/security-profile/rules/limiting"},next:{title:"Response Filtering",permalink:"/saas/waf/listener/security-profile/rules/response"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p};function h(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"whitelist-rules"},"Whitelist Rules"),(0,r.kt)("p",null,"This rule allows to add exceptions on existing rules (custom and managed)"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,'A whitelist is "the cybersecurity list," granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list.'),(0,r.kt)("p",null,"Whitelist Rules help to list services that access your site regularly (APIs, crawlers, payment providers, etc.). Whitelists are not one-size-fits-all; whitelists are tailor-made managers based on their particular needs and desires. YouTube, for example, has released a whitelisted YouTube Kids version that goes off of handpicked, age-appropriate videos rather than algorithmic recommendations."),(0,r.kt)("p",null,"Here\u2019s another use case: To reduce insider threat, a cyberattack caused behind company doors businesses with BYOL policies whitelist websites, they consider safe for employees to visit when using their private network."),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("p",null,"Follow the Steps Given Below to configure a Whitelist Rule:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF > Zones > Listeners > Security Profiles > Rules > Whitelist Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Add Rule")," button and a pop-up box will open."),(0,r.kt)("li",{parentName:"ol"},"Configure the Fields that are present."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Configurable Fields")),(0,r.kt)("p",null,"All the fields are required unless disabled by the UI"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Name For the Configured Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Name eg. Example Rule")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"Description For the Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Brief Description eg. This Rule is used for Allowing Example API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Custom Rule ID"),(0,r.kt)("td",{parentName:"tr",align:null},"ID that you assign the Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"9 Digit Number")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Specific URI"),(0,r.kt)("td",{parentName:"tr",align:null},"URI to whitelisted for this Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Valid URI eg. /login")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Location"),(0,r.kt)("td",{parentName:"tr",align:null},"Location of the entity that has to be whitelisted"),(0,r.kt)("td",{parentName:"tr",align:null},"Any value from the Drop Down List")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Value at the Location that has to be selected for White Listing"),(0,r.kt)("td",{parentName:"tr",align:null},"The value that you want to match at the specific location")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rule Name"),": Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Message"),": Specify a rule message containing a detailed description to identify the rule which is to be created. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Custom Rule Id"),": Specify the rule/mitigation id that needs to be whitelisted so that action against that request will be allowed."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Specific URI"),": Specify the URI or regex for which the whitelist rule will be applicable. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add Location"),": By clicking on the Add Location button, the end-user can add specify the location to be whitelisted. If no location is added then, the rule/mitigation is whitelisted completely."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Location"),": Specify the location of the entity that has to be whitelisted. The accepted values are: "),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"URL"),": Select this if the specified value has to be searched in the URL part of the HTTP Header. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HEADER VAR"),": Select this if the specified value has to be searched in the Headers part of the HTTP Header variables. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HEADER VAL"),": Select this if the specified value has to be searched in the Headers part of the HTTP Header values. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"HEADERS"),": Select this if the specified value has to be searched in the Headers part of the HTTP Header. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"COOKIE VAR"),": Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie variables. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"COOKIE VAL"),": Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"COOKIES"),": Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BODY VAR"),": Select this if the specified value has to be searched in the variables in the Body part of the HTTP Header. ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BODY VAL"),": Select this if the specified value has to be searched in the values in the Body part of the HTTP Header ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"BODY"),": Select this if the specified value has to be searched in the Body part of the HTTP Header ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ARGS VAR"),": Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ARGS VAL"),": Select this if the specified value has to be searched in the values in the Arguments section in the HTTP Header ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"ARGS"),": Select this if the specified value has to be searched in the Arguments section in the HTTP Header ")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VARIABLE"),": Select this if the specified value has to be searched in the variables in the HTTP Header."))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value"),": Value at the Location that has to be checked for White Listing.  "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Add"),": By clicking on the Add button, the end-user can add multiple conditions for Location and Value to be whitelisted. If no location is added then, the rule/mitigation is whitelisted completely."))}h.isMDXComponent=!0}}]);