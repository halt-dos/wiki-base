"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[18619],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),f=p(r),b=a,k=f["".concat(l,".").concat(b)]||f[b]||u[b]||o;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2719:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:55},i="KB: 1055",s={unversionedId:"kb/waf/kb-1055",id:"kb/waf/kb-1055",title:"KB: 1055",description:"Problem Statement",source:"@site/docs/kb/waf/kb-1055.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1055",permalink:"/rc/kb/waf/kb-1055",draft:!1,tags:[],version:"current",sidebarPosition:55,frontMatter:{sidebar_position:55},sidebar:"kb_sidebar",previous:{title:"KB: 1054",permalink:"/rc/kb/waf/kb-1054"},next:{title:"KB: 1056",permalink:"/rc/kb/waf/kb-1056"}},l={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1055"},"KB: 1055"),(0,a.kt)("h1",{id:"how-to-create-a-response-rule-to-filter-responses-from-applications-and-prevent-sensitive-data-leaks"},"How to create a response rule to filter responses from applications and prevent sensitive data leaks?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"Client want to filter responses from back-end application servers for HTTP requests on matching specified URL patterns."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOLUTION")),(0,a.kt)("p",null,"The client can achieve the above requirement by utilizing the Response Rule feature of the WAF."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1055",src:r(66425).Z,width:"1822",height:"607"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Open the listener in the browser before applying the rule and login to the page.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1055",src:r(59417).Z,width:"1343",height:"951"})),(0,a.kt)("p",null,"3.Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Response Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1055",src:r(34870).Z,width:"1841",height:"798"})),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"After configuring the rule details client will open listener in the browser and check the replacement of the content (example-: Client search for a content General Instruction and replace with Rules which he created in rule configuration).")))}u.isMDXComponent=!0},59417:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/broswer-edf95b64849dbf97f41b6a0a215c0498.png"},34870:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/leak11-27301023067718d098b1777c180933ce.png"},66425:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"}}]);