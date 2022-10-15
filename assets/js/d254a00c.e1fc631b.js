"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>p});var r=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),h=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=h(a),p=i,m=u["".concat(s,".").concat(p)]||u[p]||c[p]||n;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var h=2;h<n;h++)l[h]=a[h];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28752:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>n,metadata:()=>o,toc:()=>h});var r=a(87462),i=(a(67294),a(3905));const n={sidebar_position:1},l="Header Rules",o={unversionedId:"community/docs/waf/rules/header_rules",id:"community/docs/waf/rules/header_rules",title:"Header Rules",description:"Overview",source:"@site/docs/community/docs/waf/rules/header_rules.md",sourceDirName:"community/docs/waf/rules",slug:"/community/docs/waf/rules/header_rules",permalink:"/community/docs/waf/rules/header_rules",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Variables",permalink:"/community/docs/waf/variable"},next:{title:"Firewall Rules",permalink:"/community/docs/waf/rules/firewall_rules"}},s={},h=[{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:3},{value:"Rule Name",id:"rule-name",level:4},{value:"Message",id:"message",level:4},{value:"Rule Priority",id:"rule-priority",level:4},{value:"HTTP URI",id:"http-uri",level:4},{value:"HTTP Method",id:"http-method",level:4},{value:"Rule Action",id:"rule-action",level:4},{value:"Evaluation Phase",id:"evaluation-phase",level:4},{value:"Attribute Name",id:"attribute-name",level:4},{value:"Attribute Value",id:"attribute-value",level:4},{value:"Parameter",id:"parameter",level:4},{value:"Add Condition",id:"add-condition",level:4},{value:"Condition Phase",id:"condition-phase",level:4},{value:"Find Location",id:"find-location",level:4},{value:"Parameter",id:"parameter-1",level:4},{value:"Match Condition",id:"match-condition",level:4},{value:"Match Value",id:"match-value",level:4}],d={toc:h};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"header-rules"},"Header Rules"),(0,i.kt)("h3",{id:"overview"},"Overview"),(0,i.kt)("p",null,"We have introduced Header rules by which application owners can manipulate request headers, cookies, and arguments in request as well as response headers. Users can create/update header rules at run time with on-the-fly updates. It has the functionality to add/remove/update any cookie/header/arguments in the request to the web-server(back-end) as well as respond to the client."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"header rules",src:a(91170).Z,width:"1658",height:"978"})),(0,i.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log onto the Haltdos Community WAF portal."),(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("strong",{parentName:"li"},"WAF")," > ",(0,i.kt)("strong",{parentName:"li"},"Rules")," > ",(0,i.kt)("strong",{parentName:"li"},"Header Rules"),"."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Add Rule")," and set relevant parameters described below."),(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"Save Changes"))),(0,i.kt)("h3",{id:"description"},"Description"),(0,i.kt)("h4",{id:"rule-name"},"Rule Name"),(0,i.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,i.kt)("h4",{id:"message"},"Message"),(0,i.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,i.kt)("h4",{id:"rule-priority"},"Rule Priority"),(0,i.kt)("p",null,"User can define the rule's priority among various other custom error rules."),(0,i.kt)("h4",{id:"http-uri"},"HTTP URI"),(0,i.kt)("p",null,"Specify the URI or regex for which rule will be applied. "),(0,i.kt)("h4",{id:"http-method"},"HTTP Method"),(0,i.kt)("p",null,"Select the HTTP method for the rule to validate when matched with the request."),(0,i.kt)("h4",{id:"rule-action"},"Rule Action"),(0,i.kt)("p",null,"The rule action determines what action (add/remove/overwrite) the rule will perform. The accepted values are:"),(0,i.kt)("p",null,"1) ",(0,i.kt)("strong",{parentName:"p"},"ADD:")," This condition will allow adding a value at the specified location."),(0,i.kt)("p",null,"2) ",(0,i.kt)("strong",{parentName:"p"},"REMOVE:")," This condition will allow removing a value at the specified location."),(0,i.kt)("p",null,"3) ",(0,i.kt)("strong",{parentName:"p"},"OVERWRITE:")," This condition will allow overwriting a value at the specified location."),(0,i.kt)("p",null,"If the action is ",(0,i.kt)("strong",{parentName:"p"},"ADD")," then another field is required I.e., ",(0,i.kt)("strong",{parentName:"p"},"Value")," that will be added for the specified ",(0,i.kt)("strong",{parentName:"p"},"Parameter"),"."),(0,i.kt)("p",null,"If the action is ",(0,i.kt)("strong",{parentName:"p"},"REMOVE"),", then the specified parameter is removed."),(0,i.kt)("p",null,"If the action is ",(0,i.kt)("strong",{parentName:"p"},"OVERWRITE"),", then two other fields are required first is ",(0,i.kt)("strong",{parentName:"p"},"Search Pattern")," (string/regex that should match the existing value) and ",(0,i.kt)("strong",{parentName:"p"},"Replace")," (the string that should be overwritten). We can capture string from the PCRE capturing group using position with a prefix of '$'. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," In order to escape the dollar($) character in the replace, add the dollar symbol twice."),(0,i.kt)("h4",{id:"evaluation-phase"},"Evaluation Phase"),(0,i.kt)("p",null,"Select the evaluation phase for the rule i.e. Request or Response."),(0,i.kt)("h4",{id:"attribute-name"},"Attribute Name"),(0,i.kt)("p",null,"Specify the attribute name which need to add/delete/overwrite with rule."),(0,i.kt)("h4",{id:"attribute-value"},"Attribute Value"),(0,i.kt)("p",null,"Specify the attribute value which will be mentioned in the attribute."),(0,i.kt)("h4",{id:"parameter"},"Parameter"),(0,i.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which action will be performed."),(0,i.kt)("h4",{id:"add-condition"},"Add Condition"),(0,i.kt)("p",null,"The user can specify some request/response-based conditions which can be used as mandatory conditions to be fulfilled to apply the rule."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"header rules",src:a(89258).Z,width:"930",height:"401"})),(0,i.kt)("p",null,"For adding a condition, the required fields are:"),(0,i.kt)("h4",{id:"condition-phase"},"Condition Phase"),(0,i.kt)("p",null,"This field determines that the condition will be checked on request/response parameters."),(0,i.kt)("h4",{id:"find-location"},"Find Location"),(0,i.kt)("p",null,"This field determines whether the condition should be checked on headers/cookies/arguments. The accepted values are:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL:")," Select this if the specified value has to be searched in the URL part of the HTTP Header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"HTTP Scheme:")," Select this if the specified value has to be searched in the "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Country:")," Select if specified value has to be search as source country."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Header Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header variables."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Header Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header values."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Headers:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cookie Name:")," Select this if the specified name has to be searched in the Headers part of the HTTP Header cookie variables. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cookie Value:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookie values."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cookies:")," Select this if the specified value has to be searched in the Headers part of the HTTP Header cookies."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body Argument Name:")," Select this if the specified name has to be searched in the variables in the Body part of the HTTP Header. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body Argument Value:")," Select this if the specified value has to be searched in the values in the Body part of the HTTP Header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Body:")," Select this if the specified value has to be searched in the Body part of the HTTP Header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Argument Name:")," Select this if the specified name has to be searched in the variables in the Arguments section in the HTTP Header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Argument Value:")," Select this if the specified value has to be searched in the variables in the Arguments section in the HTTP Header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Arguments:"),"  Select this if the specified value has to be searched in the Arguments section in the HTTP Header."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Variable:")," Users can select the specific variable that has to be find."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"SRC IP:"),"  Select if specified value has to be search as source IP."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client Browser:")," Select if specified value has to be search as client browser."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client OS:")," Select if specified value has to be search as client OS."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Client Device:"),"  Select if specified value has to be search as client device."),(0,i.kt)("h4",{id:"parameter-1"},"Parameter"),(0,i.kt)("p",null,"This field specifies the name of the header/cookie/ arguments on which condition will be validated. Search Pattern: This field specifies the pattern that will be matched against the header/cookie/ argument value to satisfy the condition."),(0,i.kt)("h4",{id:"match-condition"},"Match Condition"),(0,i.kt)("p",null,"The user can define the match condition for the parameter and match value."),(0,i.kt)("h4",{id:"match-value"},"Match Value"),(0,i.kt)("p",null,"The user can define what value needs to be matched with the match condition."))}c.isMDXComponent=!0},91170:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/header_rules-a297f220e494569f889ccd381c5ebcf4.png"},89258:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/headerrulescondition-f21c38af1f66abe1bb89e0d6a6a0d059.png"}}]);