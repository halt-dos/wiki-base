"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[9234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,y=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(y,o(o({ref:t},s),{},{components:n})):a.createElement(y,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},36471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:2},o="JSON Policy",l={unversionedId:"community-waf/docs/waf/policy/json_policy",id:"community-waf/docs/waf/policy/json_policy",title:"JSON Policy",description:"Overview",source:"@site/docs/community-waf/docs/waf/policy/json_policy.md",sourceDirName:"community-waf/docs/waf/policy",slug:"/community-waf/docs/waf/policy/json_policy",permalink:"/community-waf/docs/waf/policy/json_policy",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"WEB Policy",permalink:"/community-waf/docs/waf/policy/web_policy"},next:{title:"XML Policy",permalink:"/community-waf/docs/waf/policy/xml_policy"}},p={},m=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"JSON Example",id:"json-example",level:3},{value:"Description",id:"description",level:2}],s={toc:m};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"json-policy"},"JSON Policy"),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"JSON Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that include malware JSON or data size bigger than the allowed size. The owner can set their limit up to which he wants to accept the data or how many keys in JSON object he wants to allow. Minimum and Maximum limits are:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"JSON Policy",src:n(96892).Z,width:"1918",height:"976"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"JSON Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h3",{id:"json-example"},"JSON Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{   \n  "employees": [   \n  {   \n    "firstName": "John",   \n    "lastName": "Doe"   \n  },   \n  {   \n    "firstName": "Anna",   \n    "lastName": "Smith"   \n  },   \n  {   \n    "firstName": "Peter",   \n    "lastName": "Jones"   \n  }   \n  ]   \n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Defaults"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Policy Mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Strict")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supported Header"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Children"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Key Name Length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Property Value length"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Depth"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")))),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Policy Mode:"),"\nUsers are allowed to specify support for json/json5 using STRICT mode where as RELAX will extends support for ",(0,r.kt)("a",{parentName:"p",href:"https://json5.org/"},(0,r.kt)("strong",{parentName:"a"},"json5")),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Supported Header:"),"\nUsers are allowed to specify supported header i.e. content-type, to identify request as json."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Children:"),"\nThis field specifies the maximum number of keys that a JSON object can have.\nIn the above example, the maximum children's length is 3, i.e. (key employees have 3 children).\nA JSON object can have a minimum of 1 key and a maximum of 10000 keys."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Key Name Length:"),"\nThis field specifies the maximum key name length that a JSON object can have. In the above example, the maximum key name length is 9, i.e. (the key employee's length is 9). A JSON object can have 1 as minimum key name length and 1000 as maximum key name length."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Property Value length:"),"\nThis field specifies the maximum property value size in a JSON object. A JSON object can have a minimum property value size of 1 and a maximum property value size of 10000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Depth:"),"\nThis field specifies the maximum depth that a JSON object can have.\nIn the above example, maximum depth is 2, i.e. (key employee is at depth 1 & children First Name is at depth 2). A JSON object can have a minimum depth of 1 and a maximum depth of keys up to 1000000."))}c.isMDXComponent=!0},96892:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/json-4463147abeb81976a2ee6be18de058ed.png"}}]);