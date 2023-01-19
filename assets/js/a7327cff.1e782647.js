"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[97863],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>g});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),g=r,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return o?n.createElement(h,i(i({ref:t},p),{},{components:o})):n.createElement(h,i({ref:t},p))}));function g(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=o[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},20663:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=o(87462),r=(o(67294),o(3905));const a={},i=void 0,l={unversionedId:"kb/gslb/KB-4001",id:"version-6.0/kb/gslb/KB-4001",title:"KB-4001",description:'How to add Monitor to the Zone Record Type "A" or Quad A("AAAA") through Haltdos GSLB Solution?',source:"@site/versioned_docs/version-6.0/kb/gslb/KB-4001.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/KB-4001",permalink:"/kb/gslb/KB-4001",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"Global Server Load Balancing",permalink:"/kb/gslb/"},next:{title:"KB-4002",permalink:"/kb/gslb/KB-4002"}},s={},c=[{value:"<strong>How to add Monitor to the Zone Record Type &quot;A&quot; or Quad A(&quot;AAAA&quot;) through Haltdos GSLB Solution</strong>?",id:"how-to-add-monitor-to-the-zone-record-type-a-or-quad-aaaaa-through-haltdos-gslb-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"how-to-add-monitor-to-the-zone-record-type-a-or-quad-aaaaa-through-haltdos-gslb-solution"},(0,r.kt)("strong",{parentName:"h3"},'How to add Monitor to the Zone Record Type "A" or Quad A("AAAA") through Haltdos GSLB Solution'),"?"),(0,r.kt)("h4",{id:"problem-statement"},(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"Clients wants to configure Monitor to a Zone so that client can see if any server is down or if any of DNS Server is marked as down, the traffic will not be sent to the same DNS unless the DNS comes up and pass the given threshold. "),(0,r.kt)("h4",{id:"solution"},(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,"The client can achieve the above requirement by utilising the Monitor under Haltdos GSLB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u200b",src:o(66315).Z,width:"1843",height:"657"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click on ",(0,r.kt)("strong",{parentName:"p"},"GSLB > Listener Page will open"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Listener. After Listener is created ,click on it."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(64615).Z,width:"1830",height:"555"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Operational page will open > Select DNS record type ",(0,r.kt)("strong",{parentName:"li"},"Authoritative. > Click on Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":- Specify the IP of Listener you have created in Operational "),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Click on Monitor > Configure Monitor > Click on Save Changes")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(63218).Z,width:"1796",height:"869"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Zone > Click on Add Zone > Configure the Zone > Click on Save Changes"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(63282).Z,width:"1825",height:"616"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},'After creating a Zone, Configure a Zone Record of record type as "A" or "AAAA" > Select the Monitor from the drop down> Click on save changes ')),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(4600).Z,width:"1818",height:"817"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),':- Monitor can only be assigned to those zone on which record type is either "A" or Quad A ("AAAA").\n\u200b'))}u.isMDXComponent=!0},66315:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gslb1.1-a8376b38f54f5bdcf5a4be9c5e037e93.png"},64615:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gslb1.2-ef2c571017a52517e4c3971ed8246dcb.png"},63218:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gslb1.3-c4a5f89e258005f952cbd8157193f843.png"},63282:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gslb1.4-faec4472ee9ee99b67c0210c03d9611d.png"},4600:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gslb1.5-210a66346b97e89b885b3f969775e833.png"}}]);