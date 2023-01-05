"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[38718],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},94075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:6},i="Variables",o={unversionedId:"community/docs/waf/variable",id:"community/docs/waf/variable",title:"Variables",description:"Overview",source:"@site/docs/community/docs/waf/variable.md",sourceDirName:"community/docs/waf",slug:"/community/docs/waf/variable",permalink:"/rc/community/docs/waf/variable",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"sidebar",previous:{title:"XML Policy",permalink:"/rc/community/docs/waf/policy/xml_policy"},next:{title:"Header Rules",permalink:"/rc/community/docs/waf/rules/header_rules"}},p={},u=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Variable Name",id:"variable-name",level:4},{value:"Variable Type",id:"variable-type",level:4},{value:"Variable Scope",id:"variable-scope",level:4},{value:"Default Value",id:"default-value",level:4},{value:"Value Expiry",id:"value-expiry",level:4}],s={toc:u};function c(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"variables"},"Variables"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Under varaibles user can create user defiend variable by configuring it's scope and value, these variable can be further use in the WAF solution like in variable rule, behavior rule.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Variable",src:a(94582).Z,width:"1918",height:"976"}),"  "),(0,n.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to ",(0,n.kt)("strong",{parentName:"li"},"WAF")," > ",(0,n.kt)("strong",{parentName:"li"},"Variables"),"."),(0,n.kt)("li",{parentName:"ol"},"Click on ",(0,n.kt)("strong",{parentName:"li"},"Add Variable")," button."),(0,n.kt)("li",{parentName:"ol"},"Configure your settings."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save Changes"),".  ")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,n.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,n.kt)("th",{parentName:"tr",align:null},"Default"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variable Name"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variable Type"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"String")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Variable Scope"),(0,n.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,n.kt)("td",{parentName:"tr",align:null},"Transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Default Value"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"Blank")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Value Expiry"),(0,n.kt)("td",{parentName:"tr",align:null},"Integers"),(0,n.kt)("td",{parentName:"tr",align:null},"1")))),(0,n.kt)("h3",{id:"description"},"Description"),(0,n.kt)("h4",{id:"variable-name"},"Variable Name"),(0,n.kt)("p",null,"Users can specify the user-friendly variable name."),(0,n.kt)("h4",{id:"variable-type"},"Variable Type"),(0,n.kt)("p",null,"Users can specify the variable type either it is string or integer."),(0,n.kt)("h4",{id:"variable-scope"},"Variable Scope"),(0,n.kt)("p",null,"Users can specify the scope of the variable. Users can select any of the following: ",(0,n.kt)("strong",{parentName:"p"},"GLOBAL"),", ",(0,n.kt)("strong",{parentName:"p"},"TRANSACTION"),", ",(0,n.kt)("strong",{parentName:"p"},"SESSION"),", ",(0,n.kt)("strong",{parentName:"p"},"CUSTOM"),"."),(0,n.kt)("h4",{id:"default-value"},"Default Value"),(0,n.kt)("p",null,"Users can specify the default value for the variable."),(0,n.kt)("h4",{id:"value-expiry"},"Value Expiry"),(0,n.kt)("p",null,"Users can specify the expiry for the variable in seconds."))}c.isMDXComponent=!0},94582:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/variable-2c2853a18cb32eba0683e40e82126372.png"}}]);