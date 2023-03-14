"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[25806],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,b=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(b,i(i({ref:t},u),{},{components:r})):n.createElement(b,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},81012:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const o={},i="KB: 2009",l={unversionedId:"kb/adc/kb-2009",id:"kb/adc/kb-2009",title:"KB: 2009",description:"How to set rate limit rules based on the requirement?",source:"@site/docs/kb/adc/kb-2009.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2009",permalink:"/kb/adc/kb-2009",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB: 2008",permalink:"/kb/adc/kb-2008"},next:{title:"KB: 2010",permalink:"/kb/adc/kb-2010"}},s={},c=[{value:"<strong>How to set rate limit rules based on the requirement?</strong>",id:"how-to-set-rate-limit-rules-based-on-the-requirement",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2009"},"KB: 2009"),(0,a.kt)("h3",{id:"how-to-set-rate-limit-rules-based-on-the-requirement"},(0,a.kt)("strong",{parentName:"h3"},"How to set rate limit rules based on the requirement?")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to secure its website from brute force attack."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The client can achieve the above requirement by utilizing the Rate limit Rule feature of the SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step to Solve"),":-"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"We have to show the page where our request is going.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9914).Z,width:"1344",height:"664"})),(0,a.kt)("p",null,"Request is going on our default page."),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Apps")," > ",(0,a.kt)("strong",{parentName:"li"},"SLB")," > ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Rate limit rules")," > ",(0,a.kt)("strong",{parentName:"li"},"Add rule")," > ",(0,a.kt)("strong",{parentName:"li"},"Save changes"))),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9398).Z,width:"1809",height:"967"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Client request will be drooped Because client define the request rate for the page and the client can define the track limit in order to track if the rate is exceeding the limit or not and specify the time duration for which the rule will limit the request.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(47070).Z,width:"1918",height:"981"})))}p.isMDXComponent=!0},9914:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc10.1-f561489e0d9fe32eb1abc705e3d27f0a.png"},47070:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/adc10.3-7942161efa6a557a38fa1e01a8cc5ea7.png"},9398:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rate_limit_rule_kb_2009_2-26ea4fb86e04404e8b6f1f3d8892e0d8.png"}}]);