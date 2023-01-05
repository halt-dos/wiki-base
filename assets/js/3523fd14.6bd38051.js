"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[65050],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},g=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),g=p(n),c=a,m=g["".concat(s,".").concat(c)]||g[c]||u[c]||l;return n?r.createElement(m,o(o({ref:e},d),{},{components:n})):r.createElement(m,o({ref:e},d))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},14302:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:3},o="Destination NAT",i={unversionedId:"products/llb/rules/dnat",id:"version-6.0/products/llb/rules/dnat",title:"Destination NAT",description:"Haltdos Destination NAT & Settings",source:"@site/versioned_docs/version-6.0/products/llb/rules/dnat.md",sourceDirName:"products/llb/rules",slug:"/products/llb/rules/dnat",permalink:"/products/llb/rules/dnat",draft:!1,tags:[],version:"6.0",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"Source NAT",permalink:"/products/llb/rules/snat"},next:{title:"Fixed Routing",permalink:"/products/llb/rules/fixed_routing"}},s={},p=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Type</strong>",id:"type",level:5},{value:"<strong>Incoming Interface</strong>",id:"incoming-interface",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>External IP Range</strong>",id:"external-ip-range",level:5},{value:"<strong>Mapped IP Range</strong>",id:"mapped-ip-range",level:5},{value:"<strong>Service Protocol</strong>",id:"service-protocol",level:5},{value:"<strong>Port Forwarding</strong>",id:"port-forwarding",level:5}],d={toc:p};function u(t){let{components:e,...l}=t;return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"destination-nat"},"Destination NAT"),(0,a.kt)("p",null,"Haltdos Destination NAT & Settings"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Destination NAT changes the destination address in the IP header of a packet. It may also change the destination port in the TCP/UDP headers. These rules help you to set the destination NAT by specifying the rule name, rule message, and rule priority. Additional rule conditions can also be applied such as Type, Incoming & Outgoing Interface, External and Mapped IP Range, Service Protocol, and Port forwarding."),(0,a.kt)("p",null,"The typical usage of this is to redirect incoming packets with a destination of a public address/port to a private IP address/port inside your network."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"destination_nat",src:n(76460).Z,width:"1494",height:"488"})),(0,a.kt)("h3",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h3"},"How to Use:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > LLB > Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"select Destination NAT rule.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dnat_rule_condition",src:n(9323).Z,width:"1095",height:"591"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"User Friendly Message for Rule"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Type"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"IPv4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Incoming Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"None (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Outgoing Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"None (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"External IP Range"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address with CIDR"),(0,a.kt)("td",{parentName:"tr",align:null},"None (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mapped IP Range"),(0,a.kt)("td",{parentName:"tr",align:null},"IP Address with CIDR"),(0,a.kt)("td",{parentName:"tr",align:null},"None (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Service Protocol"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,a.kt)("td",{parentName:"tr",align:null},"TCP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Port Forwarding"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"False")))),(0,a.kt)("h3",{id:"description"},(0,a.kt)("strong",{parentName:"h3"},"Description:")),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"This option allows the user to select desired rule name."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"It Specifies the custom message for the rule."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"This option allows the user to set rule priority."),(0,a.kt)("h5",{id:"enabled"},(0,a.kt)("strong",{parentName:"h5"},"Enabled")),(0,a.kt)("p",null,"It Specify rule is enabled or disabled. By default, this option is enabled."),(0,a.kt)("h5",{id:"type"},(0,a.kt)("strong",{parentName:"h5"},"Type")),(0,a.kt)("p",null,"This specifies the type of IP protocol used for rules. By default, IPv4 is selected. Users can select any from IPv4, IPv6, DNS46, and DNS64."),(0,a.kt)("h5",{id:"incoming-interface"},(0,a.kt)("strong",{parentName:"h5"},"Incoming Interface")),(0,a.kt)("p",null,"This option allows the user to specify the Incoming interface from the drop-down list. This rule will apply to the data packets which are moving inside from the interface mentioned."),(0,a.kt)("h5",{id:"outgoing-interface"},(0,a.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,a.kt)("p",null,"This option allows the user to specify the outgoing interface from the drop-down list. This rule will check and validate the data which is moving outside from the interface mentioned."),(0,a.kt)("h5",{id:"external-ip-range"},(0,a.kt)("strong",{parentName:"h5"},"External IP Range")),(0,a.kt)("p",null,"It specifies the external IP address range. This option allows the user to set the range of IP address that belonged to an external network."),(0,a.kt)("h5",{id:"mapped-ip-range"},(0,a.kt)("strong",{parentName:"h5"},"Mapped IP Range")),(0,a.kt)("p",null,"It specifies the mapped IP address range. This option allows the user to set the range of IP address that needs to be mapped from the internal network."),(0,a.kt)("h5",{id:"service-protocol"},(0,a.kt)("strong",{parentName:"h5"},"Service Protocol")),(0,a.kt)("p",null,"This option allows users to select the protocol on which rule will apply."),(0,a.kt)("h5",{id:"port-forwarding"},(0,a.kt)("strong",{parentName:"h5"},"Port Forwarding")),(0,a.kt)("p",null,"Port forwarding or port mapping is an application of network address translation (NAT) that redirects a communication request from one address and port number combination to another. This option allows users to enable or disable the port forwarding option."),(0,a.kt)("p",null,"If this option is enabled by the user, the user will get the option to mention mapped port numbers."))}u.isMDXComponent=!0},76460:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/llb14-063c8b78b1c795bd711a4b22d438fdb6.png"},9323:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/llb15-8c0bdcb4c7d69640a6df166836b9563f.png"}}]);