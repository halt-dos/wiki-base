"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2596],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(s,".").concat(d)]||h[d]||c[d]||i;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},97883:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:8},l="Developer Script",o={unversionedId:"saas/docs/waf/listener/security-profile/rules/developer-scripts",id:"saas/docs/waf/listener/security-profile/rules/developer-scripts",title:"Developer Script",description:"Developer Script provides a unique alternative approach for security that can deliver a useful additional layer of protection.",source:"@site/docs/saas/docs/waf/listener/security-profile/rules/developer-scripts.md",sourceDirName:"saas/docs/waf/listener/security-profile/rules",slug:"/saas/docs/waf/listener/security-profile/rules/developer-scripts",permalink:"/wiki-base/saas/docs/waf/listener/security-profile/rules/developer-scripts",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"saasSidebar",previous:{title:"Deception Rules",permalink:"/wiki-base/saas/docs/waf/listener/security-profile/rules/deception"},next:{title:"Access Log Rules",permalink:"/wiki-base/saas/docs/waf/listener/security-profile/rules/log"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to use",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"developer-script"},"Developer Script"),(0,n.kt)("p",null,"Developer Script provides a unique alternative approach for security that can deliver a useful additional layer of protection."),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Developer Script strategies will be implemented as a developer script rule. This rule is capable of customizing a script to interpret or managing specific requests."),(0,n.kt)("p",null,"The goal of the developer script is to deceive and manipulate the request on the basis of certain parameters inducing them to take actions that result in blocking the requests coming from them."),(0,n.kt)("p",null,"For the given URI, the developer script will be executed and if the condition matches the rule the appropriate action will be taken as per the rule. User can define their own logic which may not be present in the WAF rules and thus could mitigate the specific attack."),(0,n.kt)("p",null,"The developer script defines two phases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Request Phase"),": This developer script is executed before sending the request to webservers."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Response Phase"),": This developer script is executed after getting the response from the webservers and before reaching the web client.")),(0,n.kt)("p",null,"The script for this rule is written in Lua scripting language. In this, we define the Lua script which will be executed for the required phase. In order to perform the action, the script must return 1 (Numeric) as a value. We also provide some utility methods such as MD5, Base64 encoding, and much more. We can access the Nginx variable too. "),(0,n.kt)("p",null,"If somehow the script faces a compilation error, the script will fail to perform an action and the request will be processed."),(0,n.kt)("p",null,"The behavior of the script may vary for the following configurations:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If the Temporary Blacklist value is set to 0, then the script will be ignored.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If the action is set to No Action, then the script will be ignored.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"If multiple scripts are matched for the request URI, then the first matched script will be executed and other scripts will be ignored."))),(0,n.kt)("h3",{id:"how-to-use"},"How to use"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Security Profiles > Rules > Developer Script Rules"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click on Save Changes. "))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,n.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,n.kt)("th",{parentName:"tr",align:null},"Default Value"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Name eg. Example Rule")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Brief Description eg. This Rule is used for Allowing Example API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Phase"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose from the drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Request/Response")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Choose from the drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"RECORD/DROP/TEMPORARY BLACKLIST/BYPASS/SEND CHALLENGE/NO ACTION")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Specific URI"),(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Script"),(0,n.kt)("td",{parentName:"tr",align:null},"Lua language"),(0,n.kt)("td",{parentName:"tr",align:null},"None")))),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Name"),": Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Message"),": Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Priority"),": It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Phase"),": Specify the phase for the rule i.e. Request/Response while evaluating the request."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Rule Action"),": Action that should be performed when the Rule Condition is Satisfied. The valid values for action are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DROP"),": If the rule matches then drop the request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"RECORD"),": If the rule matches then put the request in record mode."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"BYPASS"),": If the rule matches put the request in BYPASS mode."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST"),": If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SEND CHALLENGE"),": If the rule matches then send a captcha challenge to the user to validate the user is human or bot. And if the challenge fails then temporarily blacklist the user and if temp. Blacklist duration Is 0 then send him a challenge unless he passes the challenge, or the challenge duration expires.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Specific URI"),": Specify the specific URI for which the rule will evaluate the request."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Script"),": Specify the Lua script for the rule. The Lua script is a user-customized script that can be configured for mitigating real-time attacks."))}c.isMDXComponent=!0}}]);