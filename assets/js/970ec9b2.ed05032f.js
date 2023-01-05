"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[22722],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3592:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:4},o="Redirection Rules",i={unversionedId:"products/cloud/waf/listener/rules/redirection_rules",id:"version-6.0/products/cloud/waf/listener/rules/redirection_rules",title:"Redirection Rules",description:"These rules allow you to configure redirection for your application pages",source:"@site/versioned_docs/version-6.0/products/cloud/waf/listener/rules/redirection_rules.md",sourceDirName:"products/cloud/waf/listener/rules",slug:"/products/cloud/waf/listener/rules/redirection_rules",permalink:"/products/cloud/waf/listener/rules/redirection_rules",draft:!1,tags:[],version:"6.0",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Header Rules",permalink:"/products/cloud/waf/listener/rules/header_rules"},next:{title:"Variable Rules",permalink:"/products/cloud/waf/listener/rules/variables_rules"}},p={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],s={toc:u};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"redirection-rules"},"Redirection Rules"),(0,a.kt)("p",null,"These rules allow you to configure redirection for your application pages"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Redirection Rules is a feature of Haltdos WAF that allows application owners to redirect a request to another site or URL, temporarily or permanently on matching a particular URL pattern."),(0,a.kt)("h3",{id:"how-to-use"},"How to Use"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Follow the links: ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Rules > Redirection Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," and set relevant parameters described in the table below.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Message"),(0,a.kt)("td",{parentName:"tr",align:null},"Description for the rule in String format"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Match URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute URL path"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Forward URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Absolute URL path"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Response Code"),(0,a.kt)("td",{parentName:"tr",align:null},"301, 302"),(0,a.kt)("td",{parentName:"tr",align:null},"302 - Temporary Redirect")))),(0,a.kt)("h4",{id:"description"},"Description"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Name")),(0,a.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Message")),(0,a.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Match URL")),(0,a.kt)("p",null,"Specify the URL for which this rule will be applied. Any requests made on this URL trigger this rule and the request shall be redirected or forwarded according to the rule."),(0,a.kt)("p",null,"The match URL should follow the format: ","[http(s)://www.(",(0,a.kt)("em",{parentName:"p"},").haltdos.io/("),")]"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Forward URL")),(0,a.kt)("p",null,"The user can specify the URL on which the request has to be redirected. All the requests that trigger this rule will be forwarded to this URL."),(0,a.kt)("p",null,"The forward URL should follow the format: ","[http(s)://(",(0,a.kt)("em",{parentName:"p"},").haltdos-1.io/("),")]"," "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Priority")),(0,a.kt)("p",null,"Specify the priority for the rule for execution when matched with the request."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Response Code")),(0,a.kt)("p",null,"In this option, the end-user can decide that the redirection should be permanent or temporary by selecting the option from the drop-down list."),(0,a.kt)("p",null,"301 - Permanent Redirect "),(0,a.kt)("p",null,"302 - Temporary Redirect"))}d.isMDXComponent=!0}}]);