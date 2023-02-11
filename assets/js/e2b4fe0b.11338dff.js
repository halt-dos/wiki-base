"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[18410],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),k=p(r),u=a,d=k["".concat(s,".").concat(u)]||k[u]||m[u]||o;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"},55290:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="KB-2003",l={unversionedId:"kb/adc/kb-2003",id:"kb/adc/kb-2003",title:"KB-2003",description:"How to mark all server origin cookies as SameSites?",source:"@site/docs/kb/adc/kb-2003.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2003",permalink:"/rc/kb/adc/kb-2003",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB-2002",permalink:"/rc/kb/adc/kb-2002"},next:{title:"KB-2004",permalink:"/rc/kb/adc/kb-2004"}},s={},p=[{value:"<strong>How to mark all server origin cookies as SameSites</strong>?",id:"how-to-mark-all-server-origin-cookies-as-samesites",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2003"},"KB-2003"),(0,a.kt)("h3",{id:"how-to-mark-all-server-origin-cookies-as-samesites"},(0,a.kt)("strong",{parentName:"h3"},"How to mark all server origin cookies as SameSites"),"?"),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to mark all the server origin cookies as SameSite."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve")),(0,a.kt)("p",null,"The client can achive the requirement by creating the header rule as mentioned below"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Login into Haltdos console")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB(APP) > Listner > Rule > Header Rule"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now create header rule by entering the information mentioned below"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header Name: ",(0,a.kt)("strong",{parentName:"p"},"Set-cookie"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pattern: ",(0,a.kt)("strong",{parentName:"p"},"^((?:.(?!\\ ","[Ss]","ame","[Ss]","ite))*)$"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Header Value: ",(0,a.kt)("strong",{parentName:"p"},"\\1;\\ SameSite=none"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Action: ",(0,a.kt)("strong",{parentName:"p"},"Overwrite Response Header"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Conditions: ",(0,a.kt)("strong",{parentName:"p"},"NA")))),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Click on save changes for saving the rule ")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"header",src:r(1003).Z,width:"1186",height:"566"})),(0,a.kt)("p",null,"The above image shows creation of header rule with overwriting the response header."))}m.isMDXComponent=!0},1003:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc4.1-713092f47a9839508edeb5a1c915b078.png"}}]);