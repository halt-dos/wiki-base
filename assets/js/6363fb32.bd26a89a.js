"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[7060],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=a,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9939:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:11},i="Auto Profiling",o={unversionedId:"waf/docs/listener/autoprofiling",id:"waf/docs/listener/autoprofiling",title:"Auto Profiling",description:"Overview",source:"@site/docs/waf/docs/listener/autoprofiling.md",sourceDirName:"waf/docs/listener",slug:"/waf/docs/listener/autoprofiling",permalink:"/waf/docs/listener/autoprofiling",draft:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"sidebar",previous:{title:"Rule Staging",permalink:"/waf/docs/listener/rulestaging"},next:{title:"Virtual Patching",permalink:"/waf/docs/listener/virtualpatching"}},p={},s=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:2},{value:"Description",id:"description",level:2}],u={toc:s};function d(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"auto-profiling"},"Auto Profiling"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Auto Profiling displays all the parameters learned from the request i.e. headers, cookies, arguments. The learning can be deployed using Deploy Learning. Users can also upload a swagger file."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Auto Profiling",src:n(35512).Z,width:"1537",height:"495"})),(0,a.kt)("h2",{id:"how-to-use"},"How to Use:"),(0,a.kt)("p",null,"1.Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listener")," > ",(0,a.kt)("strong",{parentName:"p"},"Auto Profiling")),(0,a.kt)("p",null,"2.Configure your settings"),(0,a.kt)("p",null,"3.Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Add URI"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the URI"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the specific URI regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Description"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter the URI description"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Method"),(0,a.kt)("td",{parentName:"tr",align:null},"Select the method"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"POST")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Fixed URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Enable it for fixed URL"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameter Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Enter parameter name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Parameter Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Select from the drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Add URI"),":"),(0,a.kt)("p",null,"Users can enter the URI."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Regex"),":"),(0,a.kt)("p",null,"Users can enter the specific URI regex."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Description"),":"),(0,a.kt)("p",null,"Users can enter the URI description."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Method"),":"),(0,a.kt)("p",null,"Users can select the method."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Fixed URL"),":"),(0,a.kt)("p",null,"Users can enable it for fixed URL."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"Parameter Name"),":"),(0,a.kt)("p",null,"Users can enter parameter name."),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"Parameter Type"),":"),(0,a.kt)("p",null,"Users can select the parameter type from drop down menu."))}d.isMDXComponent=!0},35512:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/autoprofiling-e2d3eba6b965e931946d651b21084d16.png"}}]);