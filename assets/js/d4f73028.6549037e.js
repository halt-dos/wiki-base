"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5344],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},f=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return r?n.createElement(d,i(i({ref:t},f),{},{components:r})):n.createElement(d,i({ref:t},f))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},24025:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:51},i="KB: 1051",l={unversionedId:"waf/tutorials/kb-1051",id:"waf/tutorials/kb-1051",title:"KB: 1051",description:"Problem Statement",source:"@site/docs/waf/tutorials/kb-1051.md",sourceDirName:"waf/tutorials",slug:"/waf/tutorials/kb-1051",permalink:"/waf/tutorials/kb-1051",draft:!1,tags:[],version:"current",sidebarPosition:51,frontMatter:{sidebar_position:51},sidebar:"adcSidebar",previous:{title:"KB: 1050",permalink:"/waf/tutorials/kb-1050"},next:{title:"KB: 1052",permalink:"/waf/tutorials/kb-1052"}},s={},c=[],f={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"kb-1051"},"KB: 1051"),(0,o.kt)("h1",{id:"how-to-make-form-rule-to-offers-a-positive-security-model-for-application-firewall-"},"How to make form rule to offers a positive security model for Application Firewall ?"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Problem Statement")),(0,o.kt)("p",null,"Client want to Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Solution")),(0,o.kt)("p",null,"The user can make use of Haltdos WAF form rule features."),(0,o.kt)("p",null,"1.First, log into the haltdos management console"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1051",src:r(66425).Z,width:"1822",height:"607"})),(0,o.kt)("p",null,"2.Go to Stacks > WAF > Listener > Profile > Profile default setting > Profile Rule > Form Rule > Add Rule > Save changes"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1051",src:r(73446).Z,width:"1847",height:"951"})),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Open the listener in the browser.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1051",src:r(43826).Z,width:"1847",height:"757"})),(0,o.kt)("p",null,"As we can see that from above picture the request has been blocked because we specify values or a range of values for various form fields of a web application form also we have to check the incidents to know about the detailed information of blocked request."),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Go to Stacks > WAF > Incidents")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"kb-1051",src:r(52282).Z,width:"1847",height:"324"})),(0,o.kt)("p",null,"As we can see that from above picture the content size is 145 and in form rule we configure the rule details by following values"),(0,o.kt)("p",null,"Request validation = Maximum  Body Length"),(0,o.kt)("p",null,"Value = 2 , but here we set the maximum content size by 2 that is the reason the request gets blocked.In this way we can achieve form rule."))}u.isMDXComponent=!0},73446:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/form-ff8df08c5b1a4a7cf10586116bd2e49f.png"},43826:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/formm-4b38acf4d3651ccfc12f870c4ed513f4.png"},52282:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/inci-35e2c7dffc16a4dd9a58fef325a82142.png"},66425:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"}}]);