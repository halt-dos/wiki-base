"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(r),k=a,d=u["".concat(s,".").concat(k)]||u[k]||m[k]||o;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},62997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},l="KB-2000",i={unversionedId:"kb/adc/kb-2000",id:"kb/adc/kb-2000",title:"KB-2000",description:"How to mark all server origin cookies as HTTP Only",source:"@site/docs/kb/adc/kb-2000.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2000",permalink:"/kb/adc/kb-2000",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"**Application Delivery Controller**",permalink:"/kb/adc/"},next:{title:"KB-2001",permalink:"/kb/adc/kb-2001"}},s={},p=[{value:"<strong>How to mark all server origin cookies as HTTP Only</strong>",id:"how-to-mark-all-server-origin-cookies-as-http-only",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Steps to Solve</strong>",id:"steps-to-solve",level:5}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2000"},"KB-2000"),(0,a.kt)("h3",{id:"how-to-mark-all-server-origin-cookies-as-http-only"},(0,a.kt)("strong",{parentName:"h3"},"How to mark all server origin cookies as HTTP Only")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to mark all the server origin cookies as HTTP Only"),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("h5",{id:"steps-to-solve"},(0,a.kt)("strong",{parentName:"h5"},"Steps to Solve")),(0,a.kt)("p",null,"The client can achieve the requirement by creating the header rule as mentioned below"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login into Haltdos console.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB(APP) > Listner > Rules > Heade Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now create header rule by entering the information mentioned below."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header Name: ",(0,a.kt)("strong",{parentName:"p"},"set-cookie"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pattern: ",(0,a.kt)("strong",{parentName:"p"},"^((?:.(?!\\ ","[Hh]","ttp","[Oo]","nly))*)$"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header Value: ",(0,a.kt)("strong",{parentName:"p"},"\\1;\\ HttpOnly"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Action: ",(0,a.kt)("strong",{parentName:"p"},"Overwrite Response Header"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Conditions: ",(0,a.kt)("strong",{parentName:"p"},"NA")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click on save changes for saving the rule.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Header Rule",src:r(2602).Z,width:"1238",height:"566"})),(0,a.kt)("p",null,"The above image shows creation of header rule with overwriting the response header."))}m.isMDXComponent=!0},2602:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc1-7d04d2890629ee577ab12f04573ad86e.png"}}]);