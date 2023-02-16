"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[44229],{3905:(e,r,t)=>{t.d(r,{Zo:()=>f,kt:()=>p});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},f=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,f=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=o,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||i;return t?n.createElement(h,a(a({ref:r},f),{},{components:t})):n.createElement(h,a({ref:r},f))}));function p(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},36492:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=t(87462),o=(t(67294),t(3905));const i={},a="Link Load Balancers (LLB)",s={unversionedId:"scenarios/llb/llb",id:"scenarios/llb/llb",title:"Link Load Balancers (LLB)",description:"LLB configuration under different Scenarios",source:"@site/docs/scenarios/llb/llb.md",sourceDirName:"scenarios/llb",slug:"/scenarios/llb/",permalink:"/scenarios/llb/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Scenario 3",permalink:"/scenarios/adc/scenario-3"},next:{title:"Scenario 1",permalink:"/scenarios/llb/scenario-1"}},c={},l=[],f={toc:l};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"link-load-balancers-llb"},"Link Load Balancers (LLB)"),(0,o.kt)("p",null,"LLB configuration under different Scenarios"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Haltdos LLB")," is designed to manage traffic over multiple Internet Service Providers (ISP) or Wide Area Network (WAN) links. This enables you to subscribe to or provision multiple links, resulting in reduced risk of outages, additional bandwidth for peak events, and potential cost savings if your ISP uses billing tiers based on bandwidth rate or peak/off-peak hours. It roves Internet availability and response times across networks.  "),(0,o.kt)("p",null,"In most cases, Users configure link load balancing for outgoing traffic. Outbound traffic might be user or server traffic that is routed from your local network through your ISP transit links, leased lines, or other WAN links to destinations on the Internet or WAN. You configure link policies that select the gateway for outbound traffic.\nWhen the Haltdos LLB system receives outbound traffic that matches a source/destination/service tuple that you configure, it forwards it to an outbound gateway link according to system logic and policy rules that you specify.  "),(0,o.kt)("p",null,"Here, we have created some scenarios to understand the basic configuration of the Haltdos LLB device."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/scenarios/llb/scenario-1"},"Scenario 1"),"\u200b: Company ABC which is having an internal network of class A private IP addresses. The Company has 2 internet connections from the different service providers. One service provider is having a dynamic public IP address and the other is having a static public IP address.  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/scenarios/llb/scenario-2"},"Scenario 2"),"\u200b: Company ABC which is having an internal network of class C private IP addresses. The Company has two internet connections from two different service providers. Both of the service providers are having different static IPs. The user wants to forward the internal traffic in a 75:25 ratio from both of the ISPs.  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/scenarios/llb/scenario-3"},"Scenario 3"),"\u200b: Company ABC is having two WAN connections with two different service providers WAN1 & WAN2. Org. also have two LAN network for their internal communication. The user wants his traffic coming from LAN 1 should only be moved from the WAN 2 connection & traffic coming from LAN 2 should only be moved from the WAN 1 connection.  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/scenarios/llb/scenario-4"},"Scenario 4"),"\u200b: Company ABC is having two ISPs with different service providers. The users want the traffic of some websites should be moved from the WAN 1 connection and some websites traffic should be moved from the WAN 2 connection.  "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/scenarios/llb/scenario-5"},"Scenario 5"),"\u200b: Company ABC, which is having two ISPs from two different service providers. The first ISP link is having IP from network 2.2.2.0/28 and other is having network ID of 3.3.3.0/28.The ISP link that is having static IP addresses  (2.2.2.2) handle all the DMZ traffic. Both ISPs are connected with LLB then there's one link which is connected to firewall. "),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"scenario-6.md"},"Scenario 6"),"\u200b: Company ABC is having two ISPs from two different service providers. The user wants to use one ISP as primary and second as backup link. The user also has DMZ zone. The user has bonded one public IP from both ISPs to its DMZ servers. User wants to configure SNAT for both ISPs links."))}u.isMDXComponent=!0}}]);