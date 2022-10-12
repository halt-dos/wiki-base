"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[9240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(n),m=o,u=g["".concat(s,".").concat(m)]||g[m]||c[m]||a;return n?r.createElement(u,i(i({ref:t},d),{},{components:n})):r.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},68439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const a={},i="Profile",l={unversionedId:"ddos/docs/profile/profile",id:"ddos/docs/profile/profile",title:"Profile",description:"Configure profile level configurations",source:"@site/docs/ddos/docs/profile/profile.md",sourceDirName:"ddos/docs/profile",slug:"/ddos/docs/profile/",permalink:"/wiki/ddos/docs/profile/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"ddosSidebar",previous:{title:"Anti-DDOS",permalink:"/wiki/ddos/docs/"},next:{title:"General Settings",permalink:"/wiki/ddos/docs/profile/general_settings"}},s={},p=[{value:"<strong>To configure the profile settings:</strong>",id:"to-configure-the-profile-settings",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Profile Name</strong>",id:"profile-name",level:5},{value:"<strong>Mode</strong>",id:"mode",level:5},{value:"<strong>Parent</strong>",id:"parent",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>There are 3 operational modes to select:</strong>",id:"there-are-3-operational-modes-to-select",level:4},{value:"<strong>Bypass Mode</strong>",id:"bypass-mode",level:5},{value:"<strong>Learning Mode</strong>",id:"learning-mode",level:5},{value:"<strong>Mitigation Mode</strong>",id:"mitigation-mode",level:5}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"profile"},"Profile"),(0,o.kt)("p",null,"Configure profile level configurations"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"DDos Profile helps to differentiate the network by dividing the network into different segments based on IP address. This division helps you configure each segment as per your requirement and monitor the stats on particular network segment. By default, Root profile is created."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"network_profile",src:n(94241).Z,width:"1278",height:"245"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"add_profile",src:n(82504).Z,width:"540",height:"498"})),(0,o.kt)("h3",{id:"to-configure-the-profile-settings"},(0,o.kt)("strong",{parentName:"h3"},"To configure the profile settings:")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Stack > Resource > DDoS > Profiles")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"User can Add/Edit/Delete profiles")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Click on Save and make the changes"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Settings"),(0,o.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Profile Name"),(0,o.kt)("td",{parentName:"tr",align:null},"String"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mode"),(0,o.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,o.kt)("td",{parentName:"tr",align:null},"Mitigation")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Parent"),(0,o.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,o.kt)("td",{parentName:"tr",align:null},"Root")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Destination IP"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,o.kt)("h3",{id:"description"},(0,o.kt)("strong",{parentName:"h3"},"Description:")),(0,o.kt)("h5",{id:"profile-name"},(0,o.kt)("strong",{parentName:"h5"},"Profile Name")),(0,o.kt)("p",null,"Specify a name for the security profile"),(0,o.kt)("h5",{id:"mode"},(0,o.kt)("strong",{parentName:"h5"},"Mode")),(0,o.kt)("p",null,"Specify the mode for the profile i.e. Mitigation or Bypass"),(0,o.kt)("h5",{id:"parent"},(0,o.kt)("strong",{parentName:"h5"},"Parent")),(0,o.kt)("p",null,"Select the parent for the profile created"),(0,o.kt)("h5",{id:"destination-ip"},(0,o.kt)("strong",{parentName:"h5"},"Destination IP")),(0,o.kt)("p",null,"Specify the destination IP for the profile"),(0,o.kt)("h4",{id:"there-are-3-operational-modes-to-select"},(0,o.kt)("strong",{parentName:"h4"},"There are 3 operational modes to select:")),(0,o.kt)("h5",{id:"bypass-mode"},(0,o.kt)("strong",{parentName:"h5"},"Bypass Mode")),(0,o.kt)("p",null,"After selecting this mode all the DDoS mitigations for that profile will be bypassed."),(0,o.kt)("h5",{id:"learning-mode"},(0,o.kt)("strong",{parentName:"h5"},"Learning Mode")),(0,o.kt)("p",null,"After selecting this mode, HaltDos will Learn the traffic pattern through its Machine Learning based mechanism. All the static mitigation as configured by the user will be in active mode."),(0,o.kt)("h5",{id:"mitigation-mode"},(0,o.kt)("strong",{parentName:"h5"},"Mitigation Mode")),(0,o.kt)("p",null,"In this mode, all DDoS mitigations will be turned on including both Static and Dynamic mitigation."))}c.isMDXComponent=!0},94241:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ddos2-8d5a5ac0002e05a69d9a09705b7a2641.png"},82504:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/ddos3-c654a1508187818e26e1242092d9eede.png"}}]);