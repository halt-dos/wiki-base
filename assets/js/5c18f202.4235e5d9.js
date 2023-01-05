"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[98878],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var i=a.createContext({}),p=function(t){var e=a.useContext(i),r=e;return t&&(r="function"==typeof t?t(e):l(l({},e),t)),r},c=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,i=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,l(l({ref:e},c),{},{components:r})):a.createElement(f,l({ref:e},c))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:n,l[1]=s;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},83677:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:3},l="Password Policy",s={unversionedId:"products/hdplatform/user_management/password_policy",id:"version-6.0/products/hdplatform/user_management/password_policy",title:"Password Policy",description:"Password policy for securing user access on Haltdos solutions",source:"@site/versioned_docs/version-6.0/products/hdplatform/user_management/password_policy.md",sourceDirName:"products/hdplatform/user_management",slug:"/products/hdplatform/user_management/password_policy",permalink:"/products/hdplatform/user_management/password_policy",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Active Directory",permalink:"/products/hdplatform/user_management/active_directory"},next:{title:"Admin Users",permalink:"/products/hdplatform/user_management/admin_users"}},i={},p=[],c={toc:p};function u(t){let{components:e,...o}=t;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"password-policy"},"Password Policy"),(0,n.kt)("p",null,"Password policy for securing user access on Haltdos solutions"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"Haltdos platform allows administrators to configure password policy as per organization's compliances. To avoid weak passwords, administrators can configure fine grained user password policy to ensure secure access to Haltdos appliances. Password policy also supports password rotation, no repeat passwords, etc. to assist administrators enforce compliance."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"password",src:r(73284).Z,width:"1521",height:"851"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"How to Use:")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"Password Policy")),(0,n.kt)("li",{parentName:"ol"},"Configure your settings"),(0,n.kt)("li",{parentName:"ol"},"Click Save")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,n.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"),(0,n.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,n.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,n.kt)("td",{parentName:"tr",align:null},"Enable organization specific password policy"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Minimum Length"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the minimum length of password."),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Password Expiry"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify the expiry duration of password after which a new password must be set to access HaltDos"),(0,n.kt)("td",{parentName:"tr",align:null},"Integer"),(0,n.kt)("td",{parentName:"tr",align:null},"90")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Contain Uppercase"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the password must compulsory contain upper case characters"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Contain LowerCase"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the password must compulsory contain lower case characters"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Contain Special Characters"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the password must compulsory contain special characters"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Contain Numbers"),(0,n.kt)("td",{parentName:"tr",align:null},"Specify if the password must compulsory contain numbers"),(0,n.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,n.kt)("td",{parentName:"tr",align:null},"True")))))}u.isMDXComponent=!0},73284:(t,e,r)=>{r.d(e,{Z:()=>a});const a=r.p+"assets/images/password_policy1-f65e06865d57644c362487fb3b6e8f05.png"}}]);