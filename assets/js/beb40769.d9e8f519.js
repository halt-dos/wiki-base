"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1729],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=a,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?r.createElement(y,l(l({ref:t},m),{},{components:n})):r.createElement(y,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30012:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:2},l="JSON Policy",o={unversionedId:"waf/docs/listener/profiles/policy/json_policy",id:"waf/docs/listener/profiles/policy/json_policy",title:"JSON Policy",description:"Configure JSON Security Policy for Restful web service",source:"@site/docs/waf/docs/listener/profiles/policy/json_policy.md",sourceDirName:"waf/docs/listener/profiles/policy",slug:"/waf/docs/listener/profiles/policy/json_policy",permalink:"/waf/docs/listener/profiles/policy/json_policy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"wafSidebar",previous:{title:"WEB Policy",permalink:"/waf/docs/listener/profiles/policy/web_policy"},next:{title:"XML Policy",permalink:"/waf/docs/listener/profiles/policy/xml_policy"}},p={},s=[{value:"Configure JSON Security Policy for Restful web service",id:"configure-json-security-policy-for-restful-web-service",level:4},{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"JSON Example",id:"json-example",level:3},{value:"Description",id:"description",level:2}],m={toc:s};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"json-policy"},"JSON Policy"),(0,a.kt)("h4",{id:"configure-json-security-policy-for-restful-web-service"},"Configure JSON Security Policy for Restful web service"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"JSON Policy",src:n(96273).Z,width:"1834",height:"719"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"WAF")," > ",(0,a.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"li"},"Security Profiles")," > ",(0,a.kt)("strong",{parentName:"li"},"Policy")," > ",(0,a.kt)("strong",{parentName:"li"},"JSON Policy"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings."),(0,a.kt)("li",{parentName:"ol"},"Click on ",(0,a.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,a.kt)("h3",{id:"json-example"},"JSON Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{   \n  "employees": [   \n  {   \n    "firstName": "John",   \n    "lastName": "Doe"   \n  },   \n  {   \n    "firstName": "Anna",   \n    "lastName": "Smith"   \n  },   \n  {   \n    "firstName": "Peter",   \n    "lastName": "Jones"   \n  }   \n  ]   \n}\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Defaults"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Policy Mode"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Strict")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Supported Header"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,a.kt)("td",{parentName:"tr",align:null},"application/json")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Children"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"100")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Key Name Length"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Property Value length"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Maximum Depth"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"100")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Policy Mode:"),"\nUsers are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for json5."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Supported Header:"),"\nUsers are allowed to specify supported header i.e. content-type, to identify request as json."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Maximum Children:"),"\nThis field specifies the maximum number of keys that a JSON object can have.\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\nA JSON object can have a minimum of 1 key and a maximum of 10000 keys."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Maximum Key Name Length:"),"\nThis field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Maximum Property Value length:"),"\nThis field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Maximum Depth:"),"\nThis field specifies the maximum depth that a JSON object can have.\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."))}c.isMDXComponent=!0},96273:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/json-034cfd10e3bec7655e2e94eeb955d780.png"}}]);