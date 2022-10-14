"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2824],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),b=a,m=f["".concat(s,".").concat(b)]||f[b]||p[b]||i;return r?n.createElement(m,o(o({ref:t},u),{},{components:r})):n.createElement(m,o({ref:t},u))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},65421:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:13},o="KB: 1013",l={unversionedId:"waf/tutorials/kb-1013",id:"waf/tutorials/kb-1013",title:"KB: 1013",description:"-----------",source:"@site/docs/waf/tutorials/kb-1013.md",sourceDirName:"waf/tutorials",slug:"/waf/tutorials/kb-1013",permalink:"/waf/tutorials/kb-1013",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13},sidebar:"adcSidebar",previous:{title:"KB: 1012",permalink:"/waf/tutorials/kb-1012"},next:{title:"KB:1014",permalink:"/waf/tutorials/kb-1014"}},s={},c=[],u={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-1013"},"KB: 1013"),(0,a.kt)("hr",null),(0,a.kt)("h1",{id:"securing-the-website-from-brute-force-attack"},"Securing the website from brute force attack"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Problem Statement")),(0,a.kt)("p",null,"The client requires to secure its website from brute force attack."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Solution")),(0,a.kt)("p",null,"1.The above requirement can be achieved by enabling and deploying rate limit rules along with sending challenges for limiting brute force attack on the website. WAF will ensure that incoming requests are processed in the configured manner, hence genuine users can access the website even if the brute force attack is in play."),(0,a.kt)("p",null,"2.Go to Listener --\x3e Profile --\x3e Rules --\x3e ",(0,a.kt)("a",{parentName:"p",href:"docs/waf/listener/profiles/rules/ratelimit_rules.md"},(0,a.kt)("strong",{parentName:"a"},"Rate Limit Rules"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"kb-1013",src:r(85904).Z,width:"1254",height:"664"})))}p.isMDXComponent=!0},85904:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/ratee-c6a2e3175d6d605fe9e96e2852367645.png"}}]);