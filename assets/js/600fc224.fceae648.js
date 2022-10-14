"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3510],{3905:(e,t,r)=>{r.d(t,{Zo:()=>f,kt:()=>d});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},f=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,f=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=i,m=c["".concat(s,".").concat(d)]||c[d]||u[d]||a;return r?n.createElement(m,l(l({ref:t},f),{},{components:r})):n.createElement(m,l({ref:t},f))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},17685:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:1},l="Security Profile",o={unversionedId:"saas/waf/listener/security-profile/security-profile",id:"saas/waf/listener/security-profile/security-profile",title:"Security Profile",description:"Create different security profiles for different sub-sections of your website",source:"@site/docs/saas/waf/listener/security-profile/security-profile.md",sourceDirName:"saas/waf/listener/security-profile",slug:"/saas/waf/listener/security-profile/",permalink:"/saas/waf/listener/security-profile/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"adcSidebar",previous:{title:"Listener",permalink:"/saas/waf/listener/"},next:{title:"Settings",permalink:"/saas/waf/listener/security-profile/settings"}},s={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],f={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security-profile"},"Security Profile"),(0,i.kt)("p",null,"Create different security profiles for different sub-sections of your website"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"When a Listener is created, a new default profile is created which is visible on the Security Profiles screen. Users can further go and create new profiles with different configurations for a particular URI in that Listener."),(0,i.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Go to ",(0,i.kt)("strong",{parentName:"p"},"WAF > Zones > Listeners > Profiles"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Add Profile"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Configure your settings.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Save Changes"),". "))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,i.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,i.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Profile Name"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Profile Priority"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Countries"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IP Prefixes"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Ports"),(0,i.kt)("td",{parentName:"tr",align:null},"Integer"),(0,i.kt)("td",{parentName:"tr",align:null},"Blank")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"URI Pattern"),(0,i.kt)("td",{parentName:"tr",align:null},"URI"),(0,i.kt)("td",{parentName:"tr",align:null},"Empty field")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Reference"),(0,i.kt)("td",{parentName:"tr",align:null},"Dropdown"),(0,i.kt)("td",{parentName:"tr",align:null},"None")))),(0,i.kt)("h4",{id:"description"},"Description"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Profile Name")," "),(0,i.kt)("p",null,"This field specifies the name of the security profile. By default, a profile with 'Default' name is already created upon adding a listener."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Profile Priority")),(0,i.kt)("p",null,"This field specifies the priority of the profile for deciding which profile will be used first to match the request and accordingly take action."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Countries")),(0,i.kt)("p",null,"This field specifies the countries for the profile. Requests coming from the specified country will be matched with this profile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"IP Prefixes")),(0,i.kt)("p",null,"This field specifies the IP Prefixes for the profile. Requests coming from specified IP Prefixes will be matched with this profile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Ports")),(0,i.kt)("p",null,"This field specifies the ports for the profile. Requests coming from specified ports will be matched with this profile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URI Pattern")),(0,i.kt)("p",null,"This field specifies the URI pattern for the profile. Request send to specified URI pattern will be matched with this profile."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"References")),(0,i.kt)("p",null,"This dropdown is used to clone an existing profile with the same configuration to a new profile."),(0,i.kt)("p",null,"Note: User can clone existing profile with the same configuration to a new profile on the new user-specified URI."),(0,i.kt)("p",null,"Following configurations are present under Security Profile"))}u.isMDXComponent=!0}}]);