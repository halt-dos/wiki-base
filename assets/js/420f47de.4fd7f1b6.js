"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[65785],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),i=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=i(r),f=a,d=m["".concat(p,".").concat(f)]||m[f]||c[f]||l;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},37379:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>i});var n=r(87462),a=(r(67294),r(3905));const l={},o="Rules",s={unversionedId:"products/llb/rules/rules",id:"products/llb/rules/rules",title:"Rules",description:"Custom Rules for NAT, Static & Policy-based routing, QoS",source:"@site/docs/products/llb/rules/rules.md",sourceDirName:"products/llb/rules",slug:"/products/llb/rules/",permalink:"/products/llb/rules/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Monitor",permalink:"/products/llb/monitors/"},next:{title:"Load Balancing",permalink:"/products/llb/rules/load_balancing"}},p={},i=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Types of Rules</strong>",id:"types-of-rules",level:3}],u={toc:i};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rules"},"Rules"),(0,a.kt)("p",null,"Custom Rules for NAT, Static & Policy-based routing, QoS"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos LLB supports various types of rules for users to configure LLB as per their network requirements. Users can set Load Balancing rules, fixed as well as policy-based routing & traffic shaper rules."),(0,a.kt)("h3",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h3"},"How to Use:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > LLB > Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the appropriate rule.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."))),(0,a.kt)("h3",{id:"types-of-rules"},(0,a.kt)("strong",{parentName:"h3"},"Types of Rules")),(0,a.kt)("p",null,"In Haltdos LLB, users can set multiple types of rules based on their requirements. This feature allows users to set the following rules on the inbound as well as outbound traffic."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/products/llb/rules/load_balancing"},(0,a.kt)("strong",{parentName:"a"},"Load Balancing")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/products/llb/rules/snat"},(0,a.kt)("strong",{parentName:"a"},"Source NAT")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/products/llb/rules/dnat"},(0,a.kt)("strong",{parentName:"a"},"Destination NAT")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/products/llb/rules/fixed_routing"},(0,a.kt)("strong",{parentName:"a"},"Fixed Route")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/products/llb/rules/policy_routing"},(0,a.kt)("strong",{parentName:"a"},"Policy Route")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/products/llb/rules/QoS"},(0,a.kt)("strong",{parentName:"a"},"Traffic Shaper"))))))}c.isMDXComponent=!0}}]);