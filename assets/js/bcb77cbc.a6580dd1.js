"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2578],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57908:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={},i="Variable Rules",o={unversionedId:"waf/docs/listener/rules/variablerule",id:"waf/docs/listener/rules/variablerule",title:"Variable Rules",description:"Overview",source:"@site/docs/waf/docs/listener/rules/variablerule.md",sourceDirName:"waf/docs/listener/rules",slug:"/waf/docs/listener/rules/variablerule",permalink:"/wiki-base/waf/docs/listener/rules/variablerule",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"wafSidebar",previous:{title:"Upstream Rules",permalink:"/wiki-base/waf/docs/listener/rules/upstreamrules"},next:{title:"Variables",permalink:"/wiki-base/waf/docs/listener/variable"}},s={},u=[{value:"Overview",id:"overview",level:2},{value:"How to use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:2}],p={toc:u};function c(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"variable-rules"},"Variable Rules"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"If a user wants to extract or set a custom variable, then it can be done using Variable Rules. It can be used in the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Form Validation : If a user wants a form field to be immutable, then he can create a variable for that field that is going to be immutable. This variable can be used in form validation to check whether the field is immutable or not. If the field is modified, then the request will be dropped")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," Any parameter from the Request/Response can be stored in a variable."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"variable rule",src:n(54915).Z,width:"1496",height:"957"})),(0,a.kt)("h2",{id:"how-to-use"},"How to use:"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Rules")," > ",(0,a.kt)("strong",{parentName:"p"},"Variable Rules")),(0,a.kt)("p",null,"2.Create rules with different conditions"),(0,a.kt)("p",null,"3.Click on ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"None")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Evaluation Phase"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Request")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Variable"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mutation Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"SET")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Value"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"None")))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"variable rules",src:n(81536).Z,width:"1127",height:"584"})),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Rule Name:")," "),(0,a.kt)("p",null,"Specify a user-friendly name to identify the rule. The rule name takes alpha-numeric input."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Rule Message:")," "),(0,a.kt)("p",null,"The user can add a short description of the rule. The description would explain the purpose of the rule."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Rule Priority :")),(0,a.kt)("p",null,"Set the priority of the rule. If two rules have the same priority, then selection will be random."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Evaluation Phase:")),(0,a.kt)("p",null,"Users can set the evaluation phase either for request coming from end users or for response sending back to end users."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Variable:")),(0,a.kt)("p",null,"User can select the variable which should be earlier created under variables."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Mutation action:")),(0,a.kt)("p",null,"Users can specify the mutation action."),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"Value:")),(0,a.kt)("p",null,"Users can specify the value for the rule."),(0,a.kt)("p",null,"8.",(0,a.kt)("strong",{parentName:"p"},"Condition Phase:")),(0,a.kt)("p",null,"User can define the condition phase"),(0,a.kt)("p",null,"9.",(0,a.kt)("strong",{parentName:"p"},"Find Location:")),(0,a.kt)("p",null,"User can define the source location where this condition needs to be applied"),(0,a.kt)("p",null,"10.",(0,a.kt)("strong",{parentName:"p"},"Match condition:")),(0,a.kt)("p",null,"User can select the condition which was previously mentioned in the drop down."),(0,a.kt)("p",null,"11.",(0,a.kt)("strong",{parentName:"p"},"Match Value:")),(0,a.kt)("p",null,"User can mention the value which should be matched."))}c.isMDXComponent=!0},54915:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/variablerules-f6529cf0f79ab2d1d6243ff830c18f62.png"},81536:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/variablerulescondition-156211fc6a2bb8a8068c62a3d6c793af.png"}}]);