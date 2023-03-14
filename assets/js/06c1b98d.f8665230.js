"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[47002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>k});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),k=r,g=u["".concat(s,".").concat(k)]||u[k]||d[k]||a;return n?o.createElement(g,i(i({ref:t},c),{},{components:n})):o.createElement(g,i({ref:t},c))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99103:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},i="KB: 4001",l={unversionedId:"kb/gslb/kb-4001",id:"kb/gslb/kb-4001",title:"KB: 4001",description:'How to add Monitor to the Zone Record Type "A" or Quad A("AAAA") through Haltdos GSLB Solution?',source:"@site/docs/kb/gslb/kb-4001.md",sourceDirName:"kb/gslb",slug:"/kb/gslb/kb-4001",permalink:"/kb/gslb/kb-4001",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"Global Server Load Balancing",permalink:"/kb/gslb/"},next:{title:"KB: 4002",permalink:"/kb/gslb/kb-4002"}},s={},p=[{value:"<strong>How to add Monitor to the Zone Record Type &quot;A&quot; or Quad A(&quot;AAAA&quot;) through Haltdos GSLB Solution?</strong>",id:"how-to-add-monitor-to-the-zone-record-type-a-or-quad-aaaaa-through-haltdos-gslb-solution",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4}],c={toc:p};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"kb-4001"},"KB: 4001"),(0,r.kt)("h3",{id:"how-to-add-monitor-to-the-zone-record-type-a-or-quad-aaaaa-through-haltdos-gslb-solution"},(0,r.kt)("strong",{parentName:"h3"},'How to add Monitor to the Zone Record Type "A" or Quad A("AAAA") through Haltdos GSLB Solution?')),(0,r.kt)("h4",{id:"problem-statement"},(0,r.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,r.kt)("p",null,"Clients wants to configure Monitor to a Zone so that client can see if any server is down or if any of DNS Server is marked as down, the traffic will not be sent to the same DNS unless the DNS comes up and pass the given threshold.  "),(0,r.kt)("h4",{id:"solution"},(0,r.kt)("strong",{parentName:"h4"},"Solution")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Steps to Solve"),":-"),(0,r.kt)("p",null,"The client can achieve the above requirement by utilising the Monitor under Haltdos GSLB."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"First, log into the haltdos management console.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"\u200bkb-4001",src:n(35199).Z,width:"1831",height:"945"})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now go to ",(0,r.kt)("strong",{parentName:"p"},"Apps")," > ",(0,r.kt)("strong",{parentName:"p"},"GSLB")," > ",(0,r.kt)("strong",{parentName:"p"},"Listener Page will open"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a Listener. After Listener is created ,click on it."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-4001",src:n(93161).Z,width:"1831",height:"945"})),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Operational page will open > Select DNS record type ",(0,r.kt)("strong",{parentName:"li"},"Authoritative")," > ",(0,r.kt)("strong",{parentName:"li"},"Click on Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-4001",src:n(52020).Z,width:"1831",height:"945"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":- Specify the IP of Listener you have created in Operational "),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click on Monitor")," > ",(0,r.kt)("strong",{parentName:"li"},"Configure Monitor")," > ",(0,r.kt)("strong",{parentName:"li"},"Click on Save Changes"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-4001",src:n(46895).Z,width:"1831",height:"945"})),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Click on Zones")," > ",(0,r.kt)("strong",{parentName:"li"},"Click on Add Zone")," > ",(0,r.kt)("strong",{parentName:"li"},"Configure the Zone")," > ",(0,r.kt)("strong",{parentName:"li"},"Click on Save Changes"),". ")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"kb-4001",src:n(57514).Z,width:"1831",height:"945"})),(0,r.kt)("ol",{start:7},(0,r.kt)("li",{parentName:"ol"},'After creating a Zone, Configure a Zone Record of record type as "A" or "AAAA" > Select the Monitor from the drop down> Click on save changes ')),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(54172).Z,width:"1831",height:"945"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),':- Monitor can only be assigned to those zone on which record type is either "A" or Quad A ("AAAA").\n\u200b'))}d.isMDXComponent=!0},93161:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/listener_kb_4001_2-8cde5bb8142b1c0eac5327dd19a1bb46.png"},46895:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/monitors_kb_4001_4-38de3a135cfc2a2c0e9885ff90cb0ce0.png"},52020:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/operational_kb_4001_3-b97678b0fd5306e69edd7af4c8c224bf.png"},35199:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/overview_kb_4001_1-28d57536a9bc52f76916ab89dac8d7f8.png"},57514:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zone_kb_4001_5-8147627e544fa1fae4b1d51e81a338b6.png"},54172:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/zone_kb_4001_6-d5d344653e331e990cb811bb6a792016.png"}}]);