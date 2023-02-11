"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[32588],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,m=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},41121:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={},i="KB-2011",s={unversionedId:"kb/adc/kb-2011",id:"kb/adc/kb-2011",title:"KB-2011",description:"How to add a new server in a server group?",source:"@site/docs/kb/adc/kb-2011.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2011",permalink:"/rc/kb/adc/kb-2011",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB-2010",permalink:"/rc/kb/adc/kb-2010"},next:{title:"KB-2012",permalink:"/rc/kb/adc/kb-2012"}},c={},p=[{value:"<strong>How to add a new server in a server group</strong>?",id:"how-to-add-a-new-server-in-a-server-group",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],l={toc:p};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2011"},"KB-2011"),(0,a.kt)("h3",{id:"how-to-add-a-new-server-in-a-server-group"},(0,a.kt)("strong",{parentName:"h3"},"How to add a new server in a server group"),"?"),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client wants to create/add a new server in the server group which was previously created in ",(0,a.kt)("strong",{parentName:"p"},"UPSTREAM RULE"),"."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The client can utilize the Server groups in SLB to add different servers."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the management console portal."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(15635).Z,width:"1917",height:"573"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to Stack > SLB > Listener > Server Group > Click on add Server Group name."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(68445).Z,width:"1916",height:"969"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(28551).Z,width:"1687",height:"947"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),':- Now, click on "add server" option and configure the settings and click on save changes.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(26586).Z,width:"1916",height:"969"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(76221).Z,width:"1641",height:"923"})),(0,a.kt)("p",null,"In this way client can add a new server in server group."))}d.isMDXComponent=!0},15635:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc12.1-464e443730cc01dc1b29dd3e14fc7f73.png"},68445:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc12.2-cecb21727068b9941600441a9b619e43.png"},28551:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc12.3-1dac46e36a4f8e5421e7fbf728a9318d.png"},26586:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc12.4-7efcb451a8933d4142f39e5e5b287465.png"},76221:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc12.5-d71967387d65f2e6c1cdb83a4e85c167.png"}}]);