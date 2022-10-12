"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5701],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=p(n),m=r,k=g["".concat(s,".").concat(m)]||g[m]||c[m]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5877:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:3},o="Global Settings",i={unversionedId:"saas/waf/zones/global_settings",id:"saas/waf/zones/global_settings",title:"Global Settings",description:"---",source:"@site/docs/saas/waf/zones/global_settings.md",sourceDirName:"saas/waf/zones",slug:"/saas/waf/zones/global_settings",permalink:"/wiki-base/saas/waf/zones/global_settings",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"saasSidebar",previous:{title:"Custom Pages",permalink:"/wiki-base/saas/waf/zones/custom_pages"},next:{title:"User Group",permalink:"/wiki-base/saas/waf/zones/user_group"}},s={},p=[],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"global-settings"},"Global Settings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Overview")),(0,r.kt)("p",null,"Global settings help to configure the settings whose scope is global. Here we have Global Whitelist Rules which would whitelist the mitigations globally irrespective of zone or listener."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global Whitelist Rules")),(0,r.kt)("p",null,"These are the whitelist rule which helps in whitelisting mitigations globally for all the zones and listener in the stack."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"WAF > Global Settings > Global Whitelist Rule"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"Add Rule")," button on the top right side.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure the fields. ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save Changes"),". "))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Location"),(0,r.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Regex"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rule Name"),": This field allows the user to give a name to the global whitelist rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Message"),": This field allows the user to enter some message or description for the rule."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Location"),": This is a dropdown to select the location where the rule will be applicable like Header, Cookie, Args, Body."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Value"),": This field allows you to enter the value for the location specified."))}c.isMDXComponent=!0}}]);