"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[66865],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,g=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(g,o(o({ref:t},p),{},{components:n})):r.createElement(g,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36249:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="Scenario 2",c={unversionedId:"scenarios/adc/scenario-2",id:"version-6.0/scenarios/adc/scenario-2",title:"Scenario 2",description:"SLB configuration under different Scenarios",source:"@site/versioned_docs/version-6.0/scenarios/adc/scenario-2.md",sourceDirName:"scenarios/adc",slug:"/scenarios/adc/scenario-2",permalink:"/scenarios/adc/scenario-2",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"sidebar",previous:{title:"Scenario 1",permalink:"/scenarios/adc/scenario-1"},next:{title:"Scenario 3",permalink:"/scenarios/adc/scenario-3"}},s={},l=[],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scenario-2"},"Scenario 2"),(0,a.kt)("p",null,"SLB configuration under different Scenarios"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Suppose company ABC is having a listener example.com which is having a back-end server IP 14.2.2.10/24 which needs to be set on ",(0,a.kt)("strong",{parentName:"p"},"Haltdos SLB")," device and the backend IP will be changed to 14.2.2.20 which is listener IP. The Production environment is protected with a firewall and to enhance security is separated with VLAN 20. The device is having a management IP of 14.2.3.10/24. Haltdos SLB device will be connected to the switch using two ports which need to be bound with LACP protocol and then should be configured with the same VLAN 20 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device can load balance the end-user requests between back-end servers as per the configuration specified."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(7715).Z,width:"1026",height:"436"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1: Configuration of the management port")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(53132).Z,width:"1912",height:"890"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2: Configuration of LACP Link Bond")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(13171).Z,width:"1641",height:"839"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3: Configuration of VLAN")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(59212).Z,width:"1633",height:"850"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3: Configuration of the listener")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(39856).Z,width:"490",height:"474"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4: Verify the backend server")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(65193).Z,width:"1920",height:"907"})))}d.isMDXComponent=!0},7715:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario2-1-cd70e24e96cfee749449c59ff6b04a78.png"},53132:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario2-2-13108bb324f8d72a2f5397ac8cd5cd1e.png"},13171:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario2-3-03bada60e903f7d57d76f358a7c6c865.png"},59212:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario2-4-37688de850124b0b30c43c31a74fd3d2.png"},39856:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario2-5-6cc60467e441a55aefb9b2b16fc3acab.png"},65193:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario2-6-4bb2d341af8ae1d2e6a854d34af1ed11.png"}}]);