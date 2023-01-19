"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,y=c["".concat(p,".").concat(d)]||c[d]||s[d]||l;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},60403:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:2},i="JSON Policy",o={unversionedId:"products/cloud/waf/listener/security-profile/policy/json",id:"version-6.0/products/cloud/waf/listener/security-profile/policy/json",title:"JSON Policy",description:"Configure JSON Security Policy for Restful web service",source:"@site/versioned_docs/version-6.0/products/cloud/waf/listener/security-profile/policy/json.md",sourceDirName:"products/cloud/waf/listener/security-profile/policy",slug:"/products/cloud/waf/listener/security-profile/policy/json",permalink:"/products/cloud/waf/listener/security-profile/policy/json",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Web Policy",permalink:"/products/cloud/waf/listener/security-profile/policy/web"},next:{title:"XML Policy",permalink:"/products/cloud/waf/listener/security-profile/policy/xml"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],u={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-policy"},"JSON Policy"),(0,a.kt)("p",null,"Configure JSON Security Policy for Restful web service"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Security Profiles > Policy > JSON Policy"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes"),"."))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,a.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,a.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Children"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Key Name length"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Property Value Length"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Depth"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"100")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"JSON Example: -")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'  {\n  "employees": [\n  {\n    "firstName": "John",\n    "lastName": "Doe"\n  },\n  {\n    "firstName": "Anna",\n    "lastName": "Smith"\n  },\n  {\n    "firstName": "Peter",\n    "lastName": "Jones"\n  }\n  ]\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Children")),(0,a.kt)("p",null,"This field specifies the maximum number of keys that a JSON object can have."),(0,a.kt)("p",null,"In the above example, the maximum children's length is 3, i.e. (key employees have 3 children)."),(0,a.kt)("p",null,"A JSON object can have a minimum of 1 key and a maximum of 10000 keys."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Key Name length")),(0,a.kt)("p",null,"This field specifies the maximum key name length that a JSON object can have."),(0,a.kt)("p",null,"In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9)."),(0,a.kt)("p",null,"A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum property value length")),(0,a.kt)("p",null,"This field specifies the maximum property value size in a JSON object."),(0,a.kt)("p",null,"A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Maximum Depth")),(0,a.kt)("p",null,"This field specifies the maximum depth that a JSON object can have."),(0,a.kt)("p",null,"In the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."))}s.isMDXComponent=!0}}]);