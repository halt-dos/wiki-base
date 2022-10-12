"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6866],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),p=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=n,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},94822:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const l={},o="Rules",s={unversionedId:"adc/docs/listeners/rules/rules",id:"adc/docs/listeners/rules/rules",title:"Rules",description:"---",source:"@site/docs/adc/docs/listeners/rules/rules.md",sourceDirName:"adc/docs/listeners/rules",slug:"/adc/docs/listeners/rules/",permalink:"/wiki-base/adc/docs/listeners/rules/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"adcSidebar",previous:{title:"Performance",permalink:"/wiki-base/adc/docs/listeners/performance"},next:{title:"Error Rules",permalink:"/wiki-base/adc/docs/listeners/rules/error_rules"}},i={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Types of Rules",id:"types-of-rules",level:3}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"rules"},"Rules"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos SLB has various types of rules for users to configure SLB as per their network requirements. Users can set Error rules, header rules, redirection, load balancing, policy based & rate limit rules."),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("a",{parentName:"p",href:"/adc/docs"},(0,n.kt)("strong",{parentName:"a"},"SLB"))," > ",(0,n.kt)("a",{parentName:"p",href:"../../listeners/"},(0,n.kt)("strong",{parentName:"a"},"Listeners"))," > Rules.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the appropriate rule.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure your settings. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click Save Changes. "))),(0,n.kt)("h3",{id:"types-of-rules"},"Types of Rules"),(0,n.kt)("p",null,"In Haltdos SLB, users can set multiple types of rules based on their requirements. This feature allows users to set the following rules on the inbound as well as outbound traffic."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"error_rules"},(0,n.kt)("strong",{parentName:"a"},"Error Rules")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"header_rules"},(0,n.kt)("strong",{parentName:"a"},"Header Rules")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"redirection_rules"},(0,n.kt)("strong",{parentName:"a"},"Redirection Rules")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"upstream_rule"},(0,n.kt)("strong",{parentName:"a"},"Load Balancing Rules")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"policy_rules"},(0,n.kt)("strong",{parentName:"a"},"Policy Rules")))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"rate_limit_rules"},(0,n.kt)("strong",{parentName:"a"},"Rate Limit Rules"))))))}c.isMDXComponent=!0}}]);