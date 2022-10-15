"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7774],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),m=a,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},u),{},{components:r})):n.createElement(h,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},57224:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:4},o="Redirection Rules",i={unversionedId:"saas/waf/listener/rules/redirection_rules",id:"saas/waf/listener/rules/redirection_rules",title:"Redirection Rules",description:"These rules allow you to configure redirection for your application pages",source:"@site/docs/saas/waf/listener/rules/redirection_rules.md",sourceDirName:"saas/waf/listener/rules",slug:"/saas/waf/listener/rules/redirection_rules",permalink:"/saas/waf/listener/rules/redirection_rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Header Rules",permalink:"/saas/waf/listener/rules/header_rules"},next:{title:"Variable Rules",permalink:"/saas/waf/listener/rules/variables_rules"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redirection-rules"},"Redirection Rules"),(0,a.kt)("p",null,"These rules allow you to configure redirection for your application pages"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the links: ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Rules > Redirection Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described in the table below.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"Description for the rule in String format"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute URL path"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Forward URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute URL path"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"301, 302"),(0,a.kt)("td",{parentName:"tr",align:null},"302 - Temporary Redirect")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Name")),(0,a.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Message")),(0,a.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Match URL")),(0,a.kt)("p",null,"Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule."),(0,a.kt)("p",null,"The match URL should follow the format: ","[http(s)://www.(",(0,a.kt)("em",{parentName:"p"},").haltdos.io/("),")]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Forward URL")),(0,a.kt)("p",null,"The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL."),(0,a.kt)("p",null,"The forward URL should follow the format: ","[http(s)://(",(0,a.kt)("em",{parentName:"p"},").haltdos-1.io/("),")]"," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Priority")),(0,a.kt)("p",null,"Specify the priority for the rule for execution when matched with the request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response Code")),(0,a.kt)("p",null,"In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list."),(0,a.kt)("p",null,"301 - Permanent Redirect "),(0,a.kt)("p",null,"302 - Temporary Redirect"))}d.isMDXComponent=!0}}]);