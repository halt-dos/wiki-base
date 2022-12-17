"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3603],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),k=c(n),b=a,f=k["".concat(l,".").concat(b)]||k[b]||d[b]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6849:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={sidebar_position:49},i="KB: 1049",s={unversionedId:"kb/waf/kb-1049",id:"kb/waf/kb-1049",title:"KB: 1049",description:"Problem statement",source:"@site/docs/kb/waf/kb-1049.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1049",permalink:"/kb/waf/kb-1049",draft:!1,tags:[],version:"current",sidebarPosition:49,frontMatter:{sidebar_position:49},sidebar:"kb_sidebar",previous:{title:"KB: 1048",permalink:"/kb/waf/kb-1048"},next:{title:"KB: 1050",permalink:"/kb/waf/kb-1050"}},l={},c=[],p={toc:c};function d(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1049"},"KB: 1049"),(0,a.kt)("h1",{id:"how-to-add-a-listener-"},"How to add a listener ?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem statement")),(0,a.kt)("p",null,"The user wants to add a listener."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"The user can add a listener from the WAF application."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"First we need to go to Stack > WAF > listener.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(66425).Z,width:"1822",height:"607"})),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"User need to click on add listener.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(53081).Z,width:"1804",height:"880"})),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"User need to mention the domain and the back-end server IP address along with listening port in the mentioned manner.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(27963).Z,width:"1912",height:"558"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," User can follow the steps ",(0,a.kt)("a",{parentName:"p",href:"/kb/waf/kb-1028"},(0,a.kt)("strong",{parentName:"a"},"SSL Certificate"))," to create Certificate."),(0,a.kt)("p",null,"4.After creating the listener user need to go to SSL settings under listener option. We need to enable the settings and select the correct SSL certificate."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(50109).Z,width:"1816",height:"850"})),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Go to Stack > WAF > Listener > Click on Listener > profiles > Click on Settings icon > settings.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(47282).Z,width:"1807",height:"871"})),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},"User need to set the operational mode to ",(0,a.kt)("strong",{parentName:"li"},"Record mode")," and configure the further back-end application details.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(26941).Z,width:"1801",height:"849"})),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"OPTIONAL")," : We need to move to Stack > WAF > listener > Server group and click on setting icon on the default server and enable SSL for communication to back-end server."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(58949).Z,width:"1900",height:"696"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(39301).Z,width:"541",height:"729"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1049",src:n(49557).Z,width:"1903",height:"663"})))}d.isMDXComponent=!0},47282:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/lisset-1730d48bde65e5cb74fdba539ca31b6e.png"},58949:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/op-90402fe06a6fdd699b9af270dd27387a.png"},39301:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/opp-d320974aaf4e03903f68c5142e3fb70c.png"},49557:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/oppp-d6007a04596bfb56400e57446369783c.png"},66425:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"},27963:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proflis-c84ebd227148de17447f592f7f05dfd2.png"},53081:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/proflistener-db2b021fa02e9d97b9856adf20028a4c.png"},50109:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl-a21923fa9dbb9964122925b33cc66ea6.png"},26941:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ssl1-e1c2aec6d356bd1bef229872a39ddf74.png"}}]);