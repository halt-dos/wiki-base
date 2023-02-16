"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[79731],{3905:(t,e,n)=>{n.d(e,{Zo:()=>c,kt:()=>g});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},i=Object.keys(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(o=0;o<i.length;o++)n=i[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),p=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},c=function(t){var e=p(t.components);return o.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,l=t.parentName,c=s(t,["components","mdxType","originalType","parentName"]),m=p(n),g=a,d=m["".concat(l,".").concat(g)]||m[g]||u[g]||i;return n?o.createElement(d,r(r({ref:e},c),{},{components:n})):o.createElement(d,r({ref:e},c))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,r[1]=s;for(var p=2;p<i;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43246:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(87462),a=(n(67294),n(3905));const i={},r="KB-2019",s={unversionedId:"kb/adc/kb-2019",id:"kb/adc/kb-2019",title:"KB-2019",description:"How to set a Timeout and Duration for different operational settings",source:"@site/docs/kb/adc/kb-2019.md",sourceDirName:"kb/adc",slug:"/kb/adc/kb-2019",permalink:"/kb/adc/kb-2019",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kb_sidebar",previous:{title:"KB-2018",permalink:"/kb/adc/kb-2018"},next:{title:"KB-2020",permalink:"/kb/adc/kb-2020"}},l={},p=[{value:"<strong>How to set a Timeout and Duration for different operational settings</strong>",id:"how-to-set-a-timeout-and-duration-for-different-operational-settings",level:3},{value:"<strong>Problem Statement</strong>",id:"problem-statement",level:4},{value:"<strong>Solution</strong>",id:"solution",level:4},{value:"<strong>Problem statement II</strong>",id:"problem-statement-ii",level:4},{value:"<strong>Solution</strong>",id:"solution-1",level:4},{value:"<strong>Problem Statement III</strong>",id:"problem-statement-iii",level:4},{value:"<strong>Solution</strong>",id:"solution-2",level:4},{value:"<strong>Problem Statement IV</strong>",id:"problem-statement-iv",level:4},{value:"<strong>Solution</strong>",id:"solution-3",level:4},{value:"<strong>Problem Statement V</strong>",id:"problem-statement-v",level:4},{value:"<strong>Solution</strong>",id:"solution-4",level:4}],c={toc:p};function u(t){let{components:e,...i}=t;return(0,a.kt)("wrapper",(0,o.Z)({},c,i,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"kb-2019"},"KB-2019"),(0,a.kt)("h3",{id:"how-to-set-a-timeout-and-duration-for-different-operational-settings"},(0,a.kt)("strong",{parentName:"h3"},"How to set a Timeout and Duration for different operational settings")),(0,a.kt)("h4",{id:"problem-statement"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement")),(0,a.kt)("p",null,"The client want to manage client connection timeout for the listener level."),(0,a.kt)("h4",{id:"solution"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The above requirement can be achieved by specifying client connection timeout option under listener in Haltdos SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step to Solve"),":-"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the Haltdos management portal."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(14752).Z,width:"1844",height:"397"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB > listener name > listener settings"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13526).Z,width:"1842",height:"953"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),":- Client have to manage the timeout by configuring client connection timeout in operational setting ."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(36570).Z,width:"1525",height:"104"})),(0,a.kt)("p",null,"Connection timeout is a time period within which a connection between a client and a server must be established.This option allows users to set the connection timeout values from client-side."),(0,a.kt)("h4",{id:"problem-statement-ii"},(0,a.kt)("strong",{parentName:"h4"},"Problem statement II")),(0,a.kt)("p",null,"The client want to manage client resume timeout for the listener level."),(0,a.kt)("h4",{id:"solution-1"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The above requirement can be achieved by specifying client resume timeout option under listener in Haltdos SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step to solve"),":-"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the Haltdos management portal."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69562).Z,width:"1844",height:"397"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB > listener > listener settings"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88749).Z,width:"1842",height:"953"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),":- Client have to manage the timeout by configuring client resume timeout in operational setting."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69563).Z,width:"1503",height:"93"})),(0,a.kt)("p",null,"This option allows users to specify the time within which a lost client connection can resume."),(0,a.kt)("h4",{id:"problem-statement-iii"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement III")),(0,a.kt)("p",null,"The client want to manage client keep-alive timeout for the listener level."),(0,a.kt)("h4",{id:"solution-2"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The above requirement can be achieved by specifying client keep-alive timeout option under listener in Haltdos SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step to Solve")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the Haltdos management portal."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(85333).Z,width:"1844",height:"397"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB > listener > listener settings"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(1791).Z,width:"1842",height:"953"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),":- Client have to manage the timeout by configuring client keep-alive timeout in operational setting."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13008).Z,width:"1511",height:"96"})),(0,a.kt)("p",null,"This option allows users to specify a timeout of keep-alive connections with clients."),(0,a.kt)("h4",{id:"problem-statement-iv"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement IV")),(0,a.kt)("p",null,"The client want to manage HTTP request timeout for the listener level."),(0,a.kt)("h4",{id:"solution-3"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The above requirement can be achieved by specifying HTTP request timeout option under listener in Haltdos SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step to Solve"),":-"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- First log into the Haltdos management portal."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(79233).Z,width:"1844",height:"397"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB > Listener > Listener settings"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(31058).Z,width:"1842",height:"953"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),":- Client have to manage the timeout by configuring HTTP request timeout in operational setting."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20402).Z,width:"1496",height:"90"})),(0,a.kt)("p",null,"This option is only applicable in the case of service type HTTP. This option allows users to specify client HTTP request timeout."),(0,a.kt)("h4",{id:"problem-statement-v"},(0,a.kt)("strong",{parentName:"h4"},"Problem Statement V")),(0,a.kt)("p",null,"The client want to manage user session duration for the listener level."),(0,a.kt)("h4",{id:"solution-4"},(0,a.kt)("strong",{parentName:"h4"},"Solution")),(0,a.kt)("p",null,"The above requirement can be achieved by specifying user session duration option under listener in Haltdos SLB."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step to Solve"),":-"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 1"),":- First log into th Haltdos management portal."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(88326).Z,width:"1844",height:"397"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2"),":- Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > SLB > Listener > Listener settings"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(48441).Z,width:"1842",height:"953"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 3"),":- Client have to set the duration by configuring user session durationin operational setting."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(48441).Z,width:"1842",height:"953"})),(0,a.kt)("p",null,"This option allows users to specify max allowed user session duration in minutes."))}u.isMDXComponent=!0},14752:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.1-01bf2b4be074a188ca4ff8d5eac22fe4.png"},79233:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.10-01bf2b4be074a188ca4ff8d5eac22fe4.png"},31058:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.11-265f71aa96dd765982a9e28c02035fca.png"},20402:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.12-f65d033986af3186e821b1e4f4bcc890.png"},88326:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.13-01bf2b4be074a188ca4ff8d5eac22fe4.png"},48441:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.14-265f71aa96dd765982a9e28c02035fca.png"},13526:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.2-265f71aa96dd765982a9e28c02035fca.png"},36570:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.3-982dfde69a96eb5673046abdf6b1873c.png"},69562:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.4-01bf2b4be074a188ca4ff8d5eac22fe4.png"},88749:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.5-265f71aa96dd765982a9e28c02035fca.png"},69563:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.6-0d965f3772c5b4ea828ba1b1465e4fc8.png"},85333:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.7-01bf2b4be074a188ca4ff8d5eac22fe4.png"},1791:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.8-265f71aa96dd765982a9e28c02035fca.png"},13008:(t,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/adc19.9-482122e40879a176eb6b95f867e3e867.png"}}]);