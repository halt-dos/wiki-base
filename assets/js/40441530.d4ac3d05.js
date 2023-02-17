"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[69982],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,m=h["".concat(o,".").concat(d)]||h[d]||c[d]||l;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},65764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:11},i="Script Rule",s={unversionedId:"products/waf/listener/profiles/rules/script_rules",id:"products/waf/listener/profiles/rules/script_rules",title:"Script Rule",description:"Overview",source:"@site/docs/products/waf/listener/profiles/rules/script_rules.md",sourceDirName:"products/waf/listener/profiles/rules",slug:"/products/waf/listener/profiles/rules/script_rules",permalink:"/products/waf/listener/profiles/rules/script_rules",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sidebar",previous:{title:"Deception Rules",permalink:"/products/waf/listener/profiles/rules/deception_rules"},next:{title:"Log Rules",permalink:"/products/waf/listener/profiles/rules/log_rules"}},o={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>URI</strong>",id:"uri",level:5},{value:"<strong>Method</strong>",id:"method",level:5},{value:"<strong>Evaluation Phase</strong>",id:"evaluation-phase",level:5},{value:"<strong>Rule Action</strong>",id:"rule-action",level:5}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"script-rule"},"Script Rule"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Developer Script strategies will be implemented as a developer script rule. This rule is capable of customizing a script to interpret or managing specific requests. The goal of the developer script is to deceive and manipulate the request on the basis of certain parameters inducing them to take actions that result in blocking the requests coming from them."),(0,n.kt)("p",null,"For the given URI, the developer script will be executed and if the condition matches the rule the appropriate action will be taken as per the rule. User can define their own logic which may not be present in the WAF rules and thus could mitigate the specific attack."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Script Rule",src:r(11878).Z,width:"1833",height:"926"})),(0,n.kt)("p",null,"The developer script defines two phases:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Request Phase"),": This developer script is executed before sending the request to web-servers."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"Response Phase"),": This developer script is executed after getting the response from the web servers and before reaching the web client.  ")),(0,n.kt)("p",null,"The script for this rule is written in Lua scripting language. In this, we define the Lua script which will be executed for the required phase. In order to perform the action, the script must return 1 (Numeric) as a value. We also provide some utility methods such as MD5, Base64 encoding, and much more. We can access the Nginx variable too.  "),(0,n.kt)("p",null,"If somehow the script faces a compilation error, the script will fail to perform an action and the request will be processed.",(0,n.kt)("br",{parentName:"p"}),"\n","The behavior of the script may vary for the following configurations:  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If the Temporary Blacklist value is set to 0, then the script will be ignored."),(0,n.kt)("li",{parentName:"ol"},"If the action is set to No Action, then the script will be ignored."),(0,n.kt)("li",{parentName:"ol"},"If multiple scripts are matched for the request URI, then the first matched script will be executed and other scripts will be ignored.")),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,n.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,n.kt)("strong",{parentName:"li"},"Rules")," > ",(0,n.kt)("strong",{parentName:"li"},"Developer Script Rules"),"  "),(0,n.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters.  "),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".  ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"URI"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Method"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"ALL")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Evaluation Phase"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Request Phase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Record")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Script"),(0,n.kt)("td",{parentName:"tr",align:null},"Lua Language"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h5",{id:"rule-name"},(0,n.kt)("strong",{parentName:"h5"},"Rule Name")),(0,n.kt)("p",null,"Users are allowed to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,n.kt)("h5",{id:"rule-message"},(0,n.kt)("strong",{parentName:"h5"},"Rule Message")),(0,n.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,n.kt)("h5",{id:"rule-priority"},(0,n.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,n.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,n.kt)("h5",{id:"uri"},(0,n.kt)("strong",{parentName:"h5"},"URI")),(0,n.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,n.kt)("h5",{id:"method"},(0,n.kt)("strong",{parentName:"h5"},"Method")),(0,n.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,n.kt)("h5",{id:"evaluation-phase"},(0,n.kt)("strong",{parentName:"h5"},"Evaluation Phase")),(0,n.kt)("p",null,"Users are allowed to select the evaluation phase for the rule i.e. Request or Response."),(0,n.kt)("h5",{id:"rule-action"},(0,n.kt)("strong",{parentName:"h5"},"Rule Action")),(0,n.kt)("p",null,"The following actions are available to the User:  "),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"NO ACTION")," - If the request satisfies the rule, then no action will be performed on the current request."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"DROP & RECORD REQUEST")," - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"RECORD REQUEST")," - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"BYPASS REQUEST")," - If the Request tests positive for the rule, no other rule is tested and the Request will be allowed through the WAF."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"REDIRECT")," - If the request satisfies the rule, then the user is redirected to another page."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"SEND RESPONSE WITH STATUS CODE")," - If the request satisfies the rule, a custom HTML response will be returned with a status code."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"SEND CUSTOM RESPONSE")," - If the request satisfies the rule, a custom HTML response will be returned."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"CHANGE RESPONSE CODE")," - If the request satisfies the rule, the user can change the response code, and the changed response code will be sent back."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"SEND CAPTCHA CHALLENGE")," - If the request satisfies the rule, then the user receives a challenge like a captcha."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TARPIT SRC. IP")," - If the request satisfies the rule, the end-user IP will be tarpit."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"TEMPORARY BLACKLIST SRC IP"),": If the rule matched temporarily blacklist the user IP. This will only work if you already have set a temporary blacklist duration else it will not be considered."),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("strong",{parentName:"li"},"SKIP LEARNING")," -If the request satisfies the rule, then no learning will be performed on the current request.")))}c.isMDXComponent=!0},11878:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/script_rule-fc28124343d05221ff048dbf83ea32df.png"}}]);