"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[337],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},95318:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:54},i="KB: 1054",s={unversionedId:"waf/docs/tutorials/kb-1054",id:"waf/docs/tutorials/kb-1054",title:"KB: 1054",description:"Problem Statement",source:"@site/docs/waf/docs/tutorials/kb-1054.md",sourceDirName:"waf/docs/tutorials",slug:"/waf/docs/tutorials/kb-1054",permalink:"/waf/docs/tutorials/kb-1054",draft:!1,tags:[],version:"current",sidebarPosition:54,frontMatter:{sidebar_position:54},sidebar:"wafSidebar",previous:{title:"KB: 1053",permalink:"/waf/docs/tutorials/kb-1053"},next:{title:"KB: 1055",permalink:"/waf/docs/tutorials/kb-1055"}},l={},p=[],c={toc:p};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1054"},"KB: 1054"),(0,a.kt)("h1",{id:"how-whitelist-rule-allows-to-add-exceptions-on-existing-rules-custom-and-managed"},"How Whitelist rule allows to add exceptions on existing rules (custom and managed)?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The client wants to list granting only programs, IP, and email addresses access to the network, which is approved by the administrator. It blocks something that is not on the list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"SOLUTION")),(0,a.kt)("p",null,"The client can achieve the above requirement by utilizing the Whitelist Rule feature of the WAF."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1054",src:r(66425).Z,width:"1822",height:"607"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Client have to firstly create form rule to achieve the above requirement.")),(0,a.kt)("p",null,"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Rate Limit  Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1054",src:r(73446).Z,width:"1847",height:"951"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Open the listener in the browser.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1054",src:r(49783).Z,width:"1847",height:"757"})),(0,a.kt)("p",null,"As we can see that from above picture the request has been blocked because we specify values or a range of values for various form fields of a web application form."),(0,a.kt)("p",null,"4.Go to ",(0,a.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,a.kt)("strong",{parentName:"p"},"Profile Rule")," >  ",(0,a.kt)("strong",{parentName:"p"},"Whitelist rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Add rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Configure Rule")," > ",(0,a.kt)("strong",{parentName:"p"},"Save changes")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1054",src:r(81990).Z,width:"1826",height:"947"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE:"),'- In above picture there is one option of custom rule id means ID that client assign the Rule.In whitelist rule we use custom rule id for whitelisted the rule so that action against that request will be allowed.In above rule detail client have to fill the custom rule id and they can get the custom id from existing rule "form rule".'),(0,a.kt)("p",null,"5.Open the listener in the browser."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1054",src:r(87300).Z,width:"1846",height:"787"})),(0,a.kt)("p",null,"As we can see that from above picture client had made a form rule (in step 2) and it has dropping the request but with the help of whitelist rule client had whitelisted the existing form rule so that against that request will be allowed."))}u.isMDXComponent=!0},73446:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/form-ff8df08c5b1a4a7cf10586116bd2e49f.png"},49783:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/link-4b38acf4d3651ccfc12f870c4ed513f4.png"},66425:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"},81990:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/white-2c173991d3ce1790427f5e478ec92ffd.png"},87300:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/whitedvwa-d3acc5376bd9905e8e0d9c280c082047.png"}}]);