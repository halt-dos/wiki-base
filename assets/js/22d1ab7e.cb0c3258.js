"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[4659],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),s=m(a),f=r,c=s["".concat(p,".").concat(f)]||s[f]||d[f]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},71769:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:1},i="Form Validation",o={unversionedId:"saas/docs/waf/listener/security-profile/rules/form",id:"saas/docs/waf/listener/security-profile/rules/form",title:"Form Validation",description:"These rules (Positive Security Model) enforce validation on different forms in your application.",source:"@site/docs/saas/docs/waf/listener/security-profile/rules/form.md",sourceDirName:"saas/docs/waf/listener/security-profile/rules",slug:"/saas/docs/waf/listener/security-profile/rules/form",permalink:"/saas/docs/waf/listener/security-profile/rules/form",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"saasSidebar",previous:{title:"Rules",permalink:"/saas/docs/waf/listener/security-profile/rules/"},next:{title:"Firewall Rules",permalink:"/saas/docs/waf/listener/security-profile/rules/firewall"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Configuring Form Validation Rule",id:"configuring-form-validation-rule",level:4}],u={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"form-validation"},"Form Validation"),(0,r.kt)("p",null,"These rules (Positive Security Model) enforce validation on different forms in your application."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Form Validation offers a positive security model of Application Firewall and allows enforcing specific values or a range of values for various form fields of a web application form."),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Follow the links: ",(0,r.kt)("strong",{parentName:"p"},"WAF > Zones > Listener > Security Profiles > Rules > Form"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Add Rule and set relevant parameters described in the table below.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on Save Changes."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Match URI"),(0,r.kt)("td",{parentName:"tr",align:null},"URI"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"HTTP Method"),(0,r.kt)("td",{parentName:"tr",align:null},"GET, POST, PUT, DELETE, HEAD, CONNECT, OPTIONS, TRACE, PATCH"),(0,r.kt)("td",{parentName:"tr",align:null},"POST")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Request Validation"),(0,r.kt)("td",{parentName:"tr",align:null},"Chose from dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Field Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Field Type"),(0,r.kt)("td",{parentName:"tr",align:null},"Chose from dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"None")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Field Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Chose from dropdown"),(0,r.kt)("td",{parentName:"tr",align:null},"None")))),(0,r.kt)("h4",{id:"configuring-form-validation-rule"},"Configuring Form Validation Rule"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rule Name")),(0,r.kt)("p",null,"Specify a rule name to identify the rule which is to be created. The rule name takes alpha-numeric input."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Rule Message")),(0,r.kt)("p",null,"Specify a rule message containing a detailed description to identify the rule which is to be created."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Match URI")),(0,r.kt)("p",null,"Specify the URI of the form for which the form validation rule will be applied. The request to specified URI will only be validated."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Example")," /login")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"HTTP Method")),(0,r.kt)("p",null,"Specify the HTTP method on which the rule will be applied. All the HTTP methods are supported like GET, POST, PUT, DELETE, OPTIONS, HEAD."),(0,r.kt)("p",null,"By clicking on the ",(0,r.kt)("strong",{parentName:"p"},"Request Validation")," and ",(0,r.kt)("strong",{parentName:"p"},"Field Validation")," tab, the end-user can add the validation according to a particular set value."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Validation")),(0,r.kt)("p",null,"Specify the type of validation to be implemented by selecting the validation type from the drop-down list."),(0,r.kt)("p",null,"Accepted Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Minimum Request Size")," - Specify the minimum size of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Maximum Request Size")," - Specify the maximum size of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Minimum Header Count")," - Specify the minimum header count of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Maximum Header Count")," - Specify the maximum header count of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Minimum Body Length")," - Specify the minimum body length of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Maximum Body length")," - Specify the maximum body length of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Maximum Header length")," - Specify the maximum header length of the request.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Maximum Header Value length")," - Specify the maximum header value length of the request."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Field Validation")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Field Name")," - Specify the name of the form field which you want the form validation rule to validate.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Field Type")," - Select the type of the form field which you want the form validation rule to validate.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Field Value")," - Select the value of the form field which you want the form validation rule to validate."))),(0,r.kt)("p",null,"Accepted Values:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Field Type")," - Specify the type of the field of the form"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown select the required field type (Integer, String, Email, etc)."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Min Value")," - Specify the minimum value accepted by that form field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the minimum value of the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Max Value")," - Specify the maximum value accepted by that form field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the maximum value of the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Min File Size")," - Specify the minimum file size accepted by that form field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the minimum file size for the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Max File Size")," - Specify the maximum file size accepted by that form field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the maximum file size for the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Allowed File Extension")," - Specify the file extension which will be allowed with a request which could be restricted."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the file extensions allowed for the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Min Length")," - Specify the minimum length of the value accepted by that form field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the minimum length of the value of the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Max Length")," - Specify the maximum length of the value accepted by that form field."),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"On Selecting Field Type in the adjacent dropdown enter the maximum length of the value of the form field."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Immutable field")," - Select this if you want to validate such that the form field becomes immutable."))))}d.isMDXComponent=!0}}]);