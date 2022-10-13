"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6735],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},l=Object.keys(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)r=l[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},u=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(r),k=a,c=d["".concat(s,".").concat(k)]||d[k]||m[k]||l;return r?n.createElement(c,o(o({ref:e},u),{},{components:r})):n.createElement(c,o({ref:e},u))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=r.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},44320:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:4},o="Rules",i={unversionedId:"gslb/docs/listener/rules",id:"gslb/docs/listener/rules",title:"Rules",description:"---",source:"@site/docs/gslb/docs/listener/rules.md",sourceDirName:"gslb/docs/listener",slug:"/gslb/docs/listener/rules",permalink:"/gslb/docs/listener/rules",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"gslbSidebar",previous:{title:"Monitors",permalink:"/gslb/docs/listener/monitors"},next:{title:"Domain Filters",permalink:"/gslb/docs/domain-filters"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Rule Condition :-",id:"rule-condition--",level:3},{value:"Condition :-",id:"condition--",level:3},{value:"Description:",id:"description",level:3}],u={toc:p};function m(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,n.Z)({},u,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"rules"},"Rules"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Haltdos GSLB supports various types of rules for users to configure GSLB as per their network requirements. Users can set GSLB Policy Rules to manage traffic and a custom type DNS Resolver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rules",src:r(32655).Z,width:"1823",height:"876"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to  ",(0,a.kt)("strong",{parentName:"li"},"Stack")," > ",(0,a.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Monitors")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Rule")," button."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("h3",{id:"rule-condition--"},"Rule Condition :-"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Filter Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"ALL")))),(0,a.kt)("h3",{id:"condition--"},"Condition :-"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Condition Action"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Request (mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Record Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Values"),(0,a.kt)("td",{parentName:"tr",align:null},"Integers"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TTL"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"description"},"Description:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Name")),(0,a.kt)("p",null,"This option allows the user to set a name for the rule."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Message")," "),(0,a.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Rule Priority")),(0,a.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritize"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Filter Type")),(0,a.kt)("p",null,"This option allow user to select filter type it can be PATTERN, SUFFIX, DOMAIN or ALL according to rule user want to set."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Condition Action")," "),(0,a.kt)("p",null,"This Option allows user to select what action user want to apply on the query. Following are the Option available for it "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"DROP Request :- Terminate query resolution and return SERVFAIL to the requestor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"DENY :- Deny existence of names matching filter, i.e. reply NXDOMAIN authoritatively ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"ByPass Request :- The query will pass through without any blockage.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Answer :- In this query will be answered as per user set it's rule. In this User also have select the record type and value also.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Refuse :- Terminate query resolution and return REFUSED to the requestor.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Forward :-  the resolver will forward the query to another DNS resolver for resolution. And for that User  have to write the Value.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Force TCP :- Force requestor to use TCP "))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Value")),(0,a.kt)("p",null,"User have to mention IP address when condition action is Answer or Forward. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"TTL (Time to Live)")),(0,a.kt)("p",null,"User can specify the time  duration of the Condition Action on the server in minutes, hour, day."))}m.isMDXComponent=!0},32655:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/rules-b1b09f12554d307d53bb0aafa20c3618.png"}}]);