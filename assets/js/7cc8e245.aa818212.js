"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2299],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,k=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(k,i(i({ref:t},u),{},{components:r})):n.createElement(k,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18236:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:3},i="Redirection Rule",o={unversionedId:"adc/listeners/rules/redirection_rules",id:"adc/listeners/rules/redirection_rules",title:"Redirection Rule",description:"---",source:"@site/docs/adc/listeners/rules/redirection_rules.md",sourceDirName:"adc/listeners/rules",slug:"/adc/listeners/rules/redirection_rules",permalink:"/adc/listeners/rules/redirection_rules",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"adcSidebar",previous:{title:"Header Rules",permalink:"/adc/listeners/rules/header_rules"},next:{title:"Policy Rules",permalink:"/adc/listeners/rules/policy_rules"}},p={},s=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4},{value:"Rule Name",id:"rule-name",level:4},{value:"Rule Message",id:"rule-message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"Match Criteria",id:"match-criteria",level:4},{value:"Forward URL",id:"forward-url",level:4},{value:"Response Code",id:"response-code",level:4}],u={toc:s};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redirection-rule"},"Redirection Rule"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Redirection Rules is a feature of Haltdos SLB that allows application owners to redirect a request to another URL, temporarily or permanently on matching a particular URL pattern."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Redirection rule",src:r(2875).Z,width:"1253",height:"479"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to Stack > ",(0,a.kt)("a",{parentName:"p",href:"/adc/docs"},(0,a.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,a.kt)("a",{parentName:"p",href:"../../listeners/"},(0,a.kt)("strong",{parentName:"a"},"Listeners"))," > ",(0,a.kt)("strong",{parentName:"p"},"Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("strong",{parentName:"p"},"Redirection Rule"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save Changes"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUE"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match Criteria"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Forward URL"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"302 -Temprary Redirect")))),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("h4",{id:"rule-name"},"Rule Name"),(0,a.kt)("p",null,"User can specify the rule name for redirection rule"),(0,a.kt)("h4",{id:"rule-message"},"Rule Message"),(0,a.kt)("p",null,"User can specify message that specifies the purpose for this particular rule. "),(0,a.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,a.kt)("p",null,"The user can specify the priority for this particular rule."),(0,a.kt)("h4",{id:"match-criteria"},"Match Criteria"),(0,a.kt)("p",null,"The user can specify the URL that needs to be redirected."),(0,a.kt)("h4",{id:"forward-url"},"Forward URL"),(0,a.kt)("p",null,"The user can specify the URL where the match URL needs to be redirected."),(0,a.kt)("h4",{id:"response-code"},"Response Code"),(0,a.kt)("p",null,"The user can specify the response code as temporary or permanent redirect."))}c.isMDXComponent=!0},2875:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/redirectionrule-ca2399fc622cc7a4055f96f3913257b0.png"}}]);