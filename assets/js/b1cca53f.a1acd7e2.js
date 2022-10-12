"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(n),d=i,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={sidebar_position:3,sidebar_title:"Installation on App Server"},a="Installation on App Server",s={unversionedId:"community-waf/getting-started/appserver",id:"community-waf/getting-started/appserver",title:"Installation on App Server",description:"Step 1: Review System Requirements",source:"@site/docs/community-waf/getting-started/appserver.md",sourceDirName:"community-waf/getting-started",slug:"/community-waf/getting-started/appserver",permalink:"/wiki/community-waf/getting-started/appserver",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_title:"Installation on App Server"},sidebar:"communitySidebar",previous:{title:"Installation on Server Farm",permalink:"/wiki/community-waf/getting-started/serverfarm"},next:{title:"Next Steps",permalink:"/wiki/community-waf/getting-started/next"}},l={},u=[{value:"Step 1: Review System Requirements",id:"step-1-review-system-requirements",level:3},{value:"Step 2: Community WAF Setup",id:"step-2-community-waf-setup",level:3},{value:"Step 3: License Registration",id:"step-3-license-registration",level:3},{value:"Step 4: Accesing Haltdos Community Controller",id:"step-4-accesing-haltdos-community-controller",level:3}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"installation-on-app-server"},"Installation on App Server"),(0,i.kt)("h3",{id:"step-1-review-system-requirements"},"Step 1: Review System Requirements"),(0,i.kt)("p",null,"Haltdos Community Web Application Firewall requires Ubunutu 20.04 as the Operating System. "),(0,i.kt)("p",null,"Minimum 2GB RAM is required for the WAF solution."),(0,i.kt)("h3",{id:"step-2-community-waf-setup"},"Step 2: Community WAF Setup"),(0,i.kt)("p",null,"Our Setup Script will download and install all the requirements and components of our Community WAF Solution.\nYou can download the script from ",(0,i.kt)("a",{parentName:"p",href:"http://10.0.0.93/debian/debug.sh"},"Haltdos Community WAF"),"."),(0,i.kt)("p",null,"To run this script, you will need to run it with administrative privileges."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo bash setup.sh\n")),(0,i.kt)("p",null,"The script will download and setup Haltdos Community WAF in your machine. Please ensure that there is no service running in the port 9000 of your machine, as our setup will deploy the Haltdos Community Controller at port 9000 of your local machine. "),(0,i.kt)("p",null,"To access the Haltdos Community Controller, if your machine private IP Address is 10.0.0.115, then Haltdos Community Controller will be setup in ",(0,i.kt)("a",{parentName:"p",href:"https://10.0.0.50:9000/"},"https://10.0.0.50:9000/"),".  "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"haltdos",src:n(43373).Z,width:"1920",height:"1080"}),"  "),(0,i.kt)("p",null,"This is the first screen that you will get."),(0,i.kt)("h3",{id:"step-3-license-registration"},"Step 3: License Registration"),(0,i.kt)("p",null,"To start using our Community WAF Solution, you will require a License to enable the WAF Solution. For that, you will have to first sign up to get a free license. "),(0,i.kt)("p",null,"Click on Sign up as you can see in the given below image."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"signup",src:n(24748).Z,width:"443",height:"382"})),(0,i.kt)("p",null,"You will be taken to registration page. Fill the form and after submitting it, you will get a License ID from us in the email address, provided by you.\n",(0,i.kt)("img",{alt:"registration",src:n(68793).Z,width:"1916",height:"1009"})),(0,i.kt)("h3",{id:"step-4-accesing-haltdos-community-controller"},"Step 4: Accesing Haltdos Community Controller"),(0,i.kt)("p",null,"Go back to the setup page, enter the License ID, and you will be redirected to Controller Login Page. Enter your email id in the username field and the password that you provided during the registration. You will be able to successfully login into Haltdos Controller, and can start configuring Haltdos Community WAF for your website."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"overview",src:n(84387).Z,width:"1916",height:"1009"})))}c.isMDXComponent=!0},43373:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/first-a785c5d0ab284f2d227876ceb68d5dd6.png"},84387:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/overview-1f9fbd773af2df626f9292e0e8fb3e63.png"},68793:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/registration-66bdd30e5e93b8d3b73ba8b73fad7183.png"},24748:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/signup-00a6ea9943431ea7dd1c02eb7c4084a4.png"}}]);