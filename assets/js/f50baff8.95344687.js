"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3820],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||d[f]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},76174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={},o="Scenario 3",c={unversionedId:"scenarios/adc/scenario-3",id:"version-6.0/scenarios/adc/scenario-3",title:"Scenario 3",description:"SLB configuration under different Scenarios",source:"@site/versioned_docs/version-6.0/scenarios/adc/scenario-3.md",sourceDirName:"scenarios/adc",slug:"/scenarios/adc/scenario-3",permalink:"/scenarios/adc/scenario-3",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"sidebar",previous:{title:"Scenario 2",permalink:"/scenarios/adc/scenario-2"},next:{title:"Link Load Balancers (LLB)",permalink:"/scenarios/llb/"}},s={},l=[],p={toc:l};function d(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"scenario-3"},"Scenario 3"),(0,a.kt)("p",null,"SLB configuration under different Scenarios"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Suppose company ABC is having two listeners example1.com and example2.com that are having two back-end server IPs 10.11.0.100/24 and 10.11.0.110/24 which are connected with the haltdos SLB using two links which are further bound with LACP  which logically become 1 interface with IP 10.11.0.11/24. The Production environment is protected with a firewall and to enhance security is separated with VLAN 10. The device is having a management IP of 15.2.2.10/24. Haltdos SLB device will be connected to the switch and should be configured with the same VLAN 10 so that data come on firewall and will be transferred to Haltdos SLB devices and SLB device will load balance between back-end servers as per the configuration specified."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(72951).Z,width:"1046",height:"473"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1: Configuration of the management port")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(47023).Z,width:"1678",height:"843"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2: Configuration of VLAN")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(80245).Z,width:"1630",height:"781"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(77603).Z,width:"1628",height:"786"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3: Configuration of the listener")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(82900).Z,width:"541",height:"527"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 4: Verify the back-end server")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Diagram",src:n(21775).Z,width:"1650",height:"327"})))}d.isMDXComponent=!0},72951:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-1-7e4ba428e35908019972873ceffaa0b4.png"},47023:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-2-339c944b2dc87133d2ed05678269fdc2.png"},80245:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-3-645153520d01c1645dc55368ae743718.png"},77603:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-4-546034303b7e0c0d6de92c232ce97d75.png"},82900:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-5-c36ea2965134d64d0a04f3fa7631f125.png"},21775:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/scenario3-6-aa650e82a4f4f2ad9028dfe04979cab3.png"}}]);