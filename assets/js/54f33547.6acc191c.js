"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[61881],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||l;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(87462),o=(n(67294),n(3905));const l={sidebar_position:1},a="Pullzone",i={unversionedId:"products/cloud/cdn/pullzone/pullzone",id:"products/cloud/cdn/pullzone/pullzone",title:"Pullzone",description:"A Pull Zone specifies the location of the static files that need to be cached. It also defines how to serve them to the clients",source:"@site/docs/products/cloud/cdn/pullzone/pullzone.md",sourceDirName:"products/cloud/cdn/pullzone",slug:"/products/cloud/cdn/pullzone/",permalink:"/rc/products/cloud/cdn/pullzone/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/rc/products/cloud/cdn/overview"},next:{title:"General Settings",permalink:"/rc/products/cloud/cdn/pullzone/general_settings"}},c={},u=[{value:"How to Use:",id:"how-to-use",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pullzone"},"Pullzone"),(0,o.kt)("p",null,"A Pull Zone specifies the location of the static files that need to be cached. It also defines how to serve them to the clients"),(0,o.kt)("hr",null),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Overview")),(0,o.kt)("p",null,"A Pull Zone is used to pull static files from a predefined zone, which is cached on our servers. This also lays down the method used to fetch the files."),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"CDN > Pullzones")),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add Pullzone")),(0,o.kt)("li",{parentName:"ol"},"Configure your settings"),(0,o.kt)("li",{parentName:"ol"},"Click on Save")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,o.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,o.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Origin URL"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTP URL"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Name")),(0,o.kt)("p",null,"Specify the name for your pullzone as unique identifier."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Origin URL")),(0,o.kt)("p",null,"Specify the HTTP URL of your back-end server on which you need to do caching."))}s.isMDXComponent=!0}}]);