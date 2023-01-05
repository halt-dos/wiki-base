"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[74639],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>g});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),u=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=u(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,s=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),g=r,k=d["".concat(s,".").concat(g)]||d[g]||c[g]||l;return n?a.createElement(k,o(o({ref:e},p),{},{components:n})):a.createElement(k,o({ref:e},p))}));function g(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25389:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:1},o="Load Balancing",i={unversionedId:"products/llb/rules/load_balancing",id:"version-6.0/products/llb/rules/load_balancing",title:"Load Balancing",description:"Load Balancing Rule & Settings",source:"@site/versioned_docs/version-6.0/products/llb/rules/load_balancing.md",sourceDirName:"products/llb/rules",slug:"/products/llb/rules/load_balancing",permalink:"/products/llb/rules/load_balancing",draft:!1,tags:[],version:"6.0",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Rules",permalink:"/products/llb/rules/"},next:{title:"Source NAT",permalink:"/products/llb/rules/snat"}},s={},u=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description</strong>:",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enable</strong>",id:"enable",level:5},{value:"<strong>Outging Interface</strong>",id:"outging-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>Criteria</strong>",id:"criteria",level:5}],p={toc:u};function c(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"load-balancing"},"Load Balancing"),(0,r.kt)("p",null,"Load Balancing Rule & Settings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"A load balancer rule is used to define how incoming traffic is distributed to all outgoing interfaces.  These rules settings help you to enable/disable the load balancing rule by specifying the rule name, message, priority, Along with various rule conditions such as Outgoing Interface, Source IP, Destination IP, Protocol, and Criteria."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"load_balancing",src:n(78448).Z,width:"1495",height:"494"})),(0,r.kt)("h3",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h3"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > LLB > Rules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Load Balancing Rule.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Add Rule")," button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Comfigure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("strong",{parentName:"p"},"Save"),"."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTING"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,r.kt)("td",{parentName:"tr",align:null},"User Friendly Message/Purpose of rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Integr"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Outgoing Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Outgoing Interface Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Source IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Source IP address with CIDR"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination IP add. with CIDR"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Any")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Criteria"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"load_balancing_rule_condition",src:n(425).Z,width:"1096",height:"459"})),(0,r.kt)("h3",{id:"description"},(0,r.kt)("strong",{parentName:"h3"},"Description"),":"),(0,r.kt)("h5",{id:"rule-name"},(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"This option allows the user to select desired rule name."),(0,r.kt)("h5",{id:"rule-message"},(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,r.kt)("h5",{id:"rule-priority"},(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."),(0,r.kt)("h5",{id:"enable"},(0,r.kt)("strong",{parentName:"h5"},"Enable")),(0,r.kt)("p",null,"It specifies rule is enabled or disabled the rule. By default, this option is enabled."),(0,r.kt)("h5",{id:"outging-interface"},(0,r.kt)("strong",{parentName:"h5"},"Outging Interface")),(0,r.kt)("p",null,"This option allows the user to select the outgoing interfaces. If any data packet matches the policy mentioned in the rule, will be routed to the ",(0,r.kt)("strong",{parentName:"p"},"Outgoing Interfaces")," for load balancing. "),(0,r.kt)("h5",{id:"source-ip"},(0,r.kt)("strong",{parentName:"h5"},"Source IP")),(0,r.kt)("p",null,"This option helps users to select the source IP or network for the IP packet on which they want to set the load balancing rule. This option will filter out all packets with mentioned IP range and take action. Source IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."),(0,r.kt)("h5",{id:"destination-ip"},(0,r.kt)("strong",{parentName:"h5"},"Destination IP")),(0,r.kt)("p",null,"This option allows users to select the destination IP or network for the IP packet on which they want to set the load balancing rule. This option will filter out all packets with mentioned IP range and take action. Destination IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."),(0,r.kt)("h5",{id:"protocol"},(0,r.kt)("strong",{parentName:"h5"},"Protocol")),(0,r.kt)("p",null,"This option allows users to set custom protocols for rules. The data packets are inspected and data packets that match with mentioned ",(0,r.kt)("strong",{parentName:"p"},"Protocol")," will be routed to an outgoing interface that is selected under ",(0,r.kt)("strong",{parentName:"p"},"Outgoing Interface"),". By default, ",(0,r.kt)("strong",{parentName:"p"},"ANY")," protocol is set i. e. all protocols are selected for the rule."),(0,r.kt)("h5",{id:"criteria"},(0,r.kt)("strong",{parentName:"h5"},"Criteria")),(0,r.kt)("p",null,"It specifies the other network-based conditions for load balancing. Users can select from many options to figure out any network fluctuation in connectivity. Users can set their packet drop, jitter, latency, etc."))}c.isMDXComponent=!0},425:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/llb10-75b92b173ee0d053e3a791dba3ac9c28.png"},78448:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/llb9-a1a727eb5a37abe7d81cbbbf72e5a911.png"}}]);