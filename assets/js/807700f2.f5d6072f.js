"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7548],{3905:(e,t,A)=>{A.d(t,{Zo:()=>s,kt:()=>c});var i=A(67294);function r(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function l(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,i)}return A}function a(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?l(Object(A),!0).forEach((function(t){r(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):l(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function n(e,t){if(null==e)return{};var A,i,r=function(e,t){if(null==e)return{};var A,i,r={},l=Object.keys(e);for(i=0;i<l.length;i++)A=l[i],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)A=l[i],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var o=i.createContext({}),p=function(e){var t=i.useContext(o),A=t;return e&&(A="function"==typeof e?e(t):a(a({},t),e)),A},s=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var A=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=n(e,["components","mdxType","originalType","parentName"]),d=p(A),c=r,I=d["".concat(o,".").concat(c)]||d[c]||u[c]||l;return A?i.createElement(I,a(a({ref:t},s),{},{components:A})):i.createElement(I,a({ref:t},s))}));function c(e,t){var A=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=A.length,a=new Array(l);a[0]=d;var n={};for(var o in t)hasOwnProperty.call(t,o)&&(n[o]=t[o]);n.originalType=e,n.mdxType="string"==typeof e?e:r,a[1]=n;for(var p=2;p<l;p++)a[p]=A[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,A)}d.displayName="MDXCreateElement"},34880:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>l,metadata:()=>n,toc:()=>p});var i=A(87462),r=(A(67294),A(3905));const l={sidebar_position:10},a="Deception Rules",n={unversionedId:"waf/docs/listener/profiles/rules/deception_rules",id:"waf/docs/listener/profiles/rules/deception_rules",title:"Deception Rules",description:"Overview",source:"@site/docs/waf/docs/listener/profiles/rules/deception_rules.md",sourceDirName:"waf/docs/listener/profiles/rules",slug:"/waf/docs/listener/profiles/rules/deception_rules",permalink:"/wiki/waf/docs/listener/profiles/rules/deception_rules",draft:!1,tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"wafSidebar",previous:{title:"Correlation Rules",permalink:"/wiki/waf/docs/listener/profiles/rules/correlation_rules"},next:{title:"Script Rule",permalink:"/wiki/waf/docs/listener/profiles/rules/script_rules"}},o={},p=[{value:"Overview",id:"overview",level:3},{value:"How to use",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Pririty",id:"rule-pririty",level:4},{value:"URI",id:"uri",level:4},{value:"Method",id:"method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Decoy URI",id:"decoy-uri",level:4},{value:"Decoy Methods",id:"decoy-methods",level:4},{value:"Fields",id:"fields",level:4}],s={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deception-rules"},"Deception Rules"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Deception strategies will be implemented as a deception rule. This rule is capable of generating and injecting deception data automatically into HTTP traffic.\nThe goal of deception is to deceive and manipulate attackers inducing them to take actions that result in blocking the requests coming from them.\nThe attacker should believe that fake parameters are genuine and really belong to the real application and should try to modify them in a malicious way."),(0,r.kt)("p",null,"The rule will have to do the following :\nIntercept HTTP responses of the original application and inject fake parameters before delivering the response to the client. The possible fake parameter values will try to have attractive names and values."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"For GET requests, the parameters will be added to existing ",(0,r.kt)("inlineCode",{parentName:"li"},"<a href>")," link values."),(0,r.kt)("li",{parentName:"ol"},"For POST requests, the parameters will be added as hidden input type parameters of existing forms.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deception Rule",src:A(58903).Z,width:"1507",height:"572"})),(0,r.kt)("h3",{id:"how-to-use"},"How to use"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listener")," > ",(0,r.kt)("strong",{parentName:"li"}," Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Rules")," > ",(0,r.kt)("strong",{parentName:"li"},"Deception Rules"),"."),(0,r.kt)("li",{parentName:"ol"},"Click on Add Rule and set relevant parameters described in the table below."),(0,r.kt)("li",{parentName:"ol"},"Click on save changes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"URI"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"ALL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Action"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Record")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decoy URI"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Decoy Method"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"GET")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fields"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Deception Rule",src:A(40018).Z,width:"1120",height:"311"})),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h4",{id:"rule-name"},"Rule Name"),(0,r.kt)("p",null,"Users are allowe to specify the rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,r.kt)("h4",{id:"rule-message"},"Rule Message"),(0,r.kt)("p",null,"Users are allowed to specify a rule message containing a detailed description to identify the rule which is to be created."),(0,r.kt)("h4",{id:"rule-pririty"},"Rule Pririty"),(0,r.kt)("p",null,"It is a numeric field that specifies the priority of the rule in which the rule will be executed while evaluating the request. The lower value of priority means it will be executed first while executing the type of rule. The default value Is 0. "),(0,r.kt)("h4",{id:"uri"},"URI"),(0,r.kt)("p",null,"Users are allowed to specify the URI on which the tamper rule will be applied."),(0,r.kt)("h4",{id:"method"},"Method"),(0,r.kt)("p",null,"Users are allowed to select the HTTP method for the rule to extract when matched with the request."),(0,r.kt)("h4",{id:"rule-action"},"Rule Action"),(0,r.kt)("p",null,"The following actions are available to the User-"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"DROP  & RECORD REQUEST - If the Request to the subscribed domain matches the Firewall Rule, an event is generated but the request will not be allowed through the WAF."),(0,r.kt)("li",{parentName:"ol"},"RECORD REQUEST - An event is generated whenever the Request satisfies the Rule, but whenever the request passes through other rules its events are logged by Haltdos."),(0,r.kt)("li",{parentName:"ol"},"TEMPORARY BLACKLIST SOURCE IP - If the request satisfies the rule, then the user is temporarily blacklisted."),(0,r.kt)("li",{parentName:"ol"},"TARPIT SRC. IP - If the request satisfies the rule, the end-user IP will be tarpit.")),(0,r.kt)("h4",{id:"decoy-uri"},"Decoy URI"),(0,r.kt)("p",null,"Users can specify the smoke URI for the rule. The smoke URI will be the one that could be used by attackers to attack."),(0,r.kt)("h4",{id:"decoy-methods"},"Decoy Methods"),(0,r.kt)("p",null,"Users can specify the HTTP methods for the rule to be created."),(0,r.kt)("h4",{id:"fields"},"Fields"),(0,r.kt)("p",null,"Users can specify the fields for which the rule will be applicable."))}u.isMDXComponent=!0},58903:(e,t,A)=>{A.d(t,{Z:()=>i});const i=A.p+"assets/images/deception_rules-1fd27397202dd681b839287480f4440c.png"},40018:(e,t,A)=>{A.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAAE3CAIAAABq36AWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEnQAABJ0Ad5mH3gAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAB4XSURBVHhe7d37c1XlvT/w/nf+cMbO93Sm45nOdPzOqe3pmdb2zJlab23x3uIVaZWWWhWxiDQqCF6QYrgUFYhIFLwACmkC4ZZwS0iEEM4neR5Xl2vvBAzskGS9XvOezH6e9ey1V5jJ9nm7d3a+dXpgQERERERERAbPnlWQRERERERExnJmYEBBEhERERERyVGQREREREREchQkERERERGRHAVJREREREQkR0ESERERERHJUZBERERERERyFCQREREREZEcBUlERERERCRHQRIREREREclRkERERERERHIUJBERERERkRwFSUREREREJEdBEhERERERyVGQREREREREchQkERERERGRHAVJREREREQkR0ESERERERHJUZBERERERERyFCQREREREZGcVhekrhV33XndjeXMu+E3ixZv+Lz31OTLvspTO0rLBnr3bFn88KM3/Gj80I/u+cXi9Z2H/3U0p2vrM79fmNfcNO/79y9ZuftIPnRs6/yfjM3f9vZXM1+lY+k9MX/977f0fn1eRERERETqk+kvSDnX/3btvn91pMsqSPveWHh95WjkpoUr9hfnGejtWHJDZcF4fry0MzWff769aOwkP1mype9f9zp9aNNtN8WyR1d0lSZFRERERKRmmaaC9FjHVzOnTu7reOkX4y/v/OBvn064rDFda29OVefprftOjM8c2r3isbGXfa67fdXHqWvFmrGeM7bm476TYzMnejpeW5wq072b+8ZmTn36zO1jw5tf6xobjuXklqfGznPD0t1fzYiIiIiISB0z7QUppXPFv0dpuWnJlvwi0qULUseSsQ7z73/c+rW3wEXb+c2j89ftTm/YS2sa3ya379VHY36sR40Pj3csGX/0p9cdG1/w+aoflIciIiIiIlLXXKOCNLD7D2O/C3TPHz5Kw0sWpMr6pvn0mV9McJK+LfeOvYi0cEV3mjny+oNjK8dfMupb9/ux26UXlEREREREpKa5VgUpz9+7efyNcF8NG7JkS1p/auv8seGkvyM02Zodj42f8LEdX83sf338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du/efccdd8TXNAyxYNmyZd3d3el2efElP6Qhvs2enp40H5p+dwAwWyhIQK21oiCFy/mY72tYkOIy4mLi5OkDxOMi41BcYVx24+Iwycd8xzDaYNx+7733okrFcPv27ZNcCQDMcAoSUGstKkjhkn8o9hoWpBBlpvKHYvv7+9OhaHTr16+/9dZb49HjGtJk8YdiY/HLL7+cWlA8aByK7yu+uwceeCCOhvnz53/wwQflTzAHgFlEQQJqbRqeBAGAWURBAmpNQQIAyhQkoNYUJACgTEECak1BAgDKFCSg1hQkAKBMQQJqTUECAMoUJKDWFCQAoExBAmpNQQIAyhQkoNYUJACgTEECak1BAgDKFCSg1hQkAKBMQQJqTUECAMoUJKDWFCQAoExBAmpNQQIAyhQkoNba2tpGRkbyAACot9gVxN4gD1pGQQJmrvb29p6enjwAAOotdgWxN8iDllGQgJmrq6tr3bp1XkQCAGI/ELuC2BvkccsoSMCM1tnZGc+GPT09ahIA1FPsAWInEPuB2BXkqVZSkICZrqurq729va2tbQUAUD+xB4idwDS8dpQoSAAAAJmCBAAAkClIAAAAmYIEAACQKUgAAACZggQAAJApSAAAAJmCBAAAkClIAAAAmYIEAACQKUgAAACZggQAAJApSAAAAJmCBAAAkClIAAAAmYIEAACQKUgAAACZggQAAJApSAAAAJmCBAAAkClIAAAAmYIEAACQKUgAAACZggQAAJApSAAAAJmCBAAAkClIAAAAmYIEAACQKUgAAACZggQAAJApSAAAAJmCBAAAkClIAAAAmYIEAAAw7uLF/wMl7Fd2poahJAAAAABJRU5ErkJggg=="}}]);