"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[3830],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),g=u(n),c=a,m=g["".concat(s,".").concat(c)]||g[c]||p[c]||l;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},10643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(87462),a=(n(67294),n(3905));const l={sidebar_position:4},i="Fixed Routing",o={unversionedId:"products/llb/rules/fixed_routing",id:"products/llb/rules/fixed_routing",title:"Fixed Routing",description:"Fixed Routing Rules & settings",source:"@site/docs/products/llb/rules/fixed_routing.md",sourceDirName:"products/llb/rules",slug:"/products/llb/rules/fixed_routing",permalink:"/products/llb/rules/fixed_routing",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"sidebar",previous:{title:"Destination NAT",permalink:"/products/llb/rules/dnat"},next:{title:"Policy Routing",permalink:"/products/llb/rules/policy_routing"}},s={},u=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Gateway IP</strong>",id:"gateway-ip",level:5},{value:"<strong>Enabled NAT</strong>",id:"enabled-nat",level:5}],d={toc:u};function p(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fixed-routing"},"Fixed Routing"),(0,a.kt)("p",null,"Fixed Routing Rules & settings"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Fixed Routing is a static mechanism that is used to transfer data packets from the source to the destination. Users can set fixed routing rules by specifying rule name, priority, destination IPs, Outgoing Interface, etc."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fixed_routing",src:n(4151).Z,width:"1496",height:"482"})),(0,a.kt)("h3",{id:"how-to-use"},(0,a.kt)("strong",{parentName:"h3"},"How to Use:")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"Stack > LLB > Rules"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select Fixed Route rule.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Configure your settings.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click Save."))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"fixed_routing_rule_condition",src:n(36728).Z,width:"1078",height:"452"})),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Setting"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Specify Rule Name"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,a.kt)("td",{parentName:"tr",align:null},"User Friendly Message for Rule"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer"),(0,a.kt)("td",{parentName:"tr",align:null},"0")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Destination IP"),(0,a.kt)("td",{parentName:"tr",align:null},"IP address with CIDR"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Outgoing Interface"),(0,a.kt)("td",{parentName:"tr",align:null},"IP address with CIDR"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Gateway IP"),(0,a.kt)("td",{parentName:"tr",align:null},"IP address"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enabled NAT"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"True")))),(0,a.kt)("h3",{id:"description"},(0,a.kt)("strong",{parentName:"h3"},"Description:")),(0,a.kt)("h5",{id:"rule-name"},(0,a.kt)("strong",{parentName:"h5"},"Rule Name")),(0,a.kt)("p",null,"This option allows the user to select desired rule name."),(0,a.kt)("h5",{id:"rule-message"},(0,a.kt)("strong",{parentName:"h5"},"Rule Message")),(0,a.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,a.kt)("h5",{id:"rule-priority"},(0,a.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,a.kt)("p",null,"This option allows the user to set rule priority. The lower the priority value "),(0,a.kt)("h5",{id:"enabled"},(0,a.kt)("strong",{parentName:"h5"},"Enabled")),(0,a.kt)("p",null,"It specifies rule is enabled or disabled the rule. By default, this option is enabled."),(0,a.kt)("h5",{id:"destination-ip"},(0,a.kt)("strong",{parentName:"h5"},"Destination IP")),(0,a.kt)("p",null,"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected with the IP address and data packets with a mentioned destination IP address will only route to the outgoing interface which is mentioned by the user in the next settings."),(0,a.kt)("h5",{id:"outgoing-interface"},(0,a.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,a.kt)("p",null,"This option allows the user to select the outgoing interface from which the packets will move."),(0,a.kt)("h5",{id:"gateway-ip"},(0,a.kt)("strong",{parentName:"h5"},"Gateway IP")),(0,a.kt)("p",null,"A gateway is a network node that serves as an access point to another network. This option allows user to set their gateway IP address. IP can be set in a format like 192.168.0.1"),(0,a.kt)("h5",{id:"enabled-nat"},(0,a.kt)("strong",{parentName:"h5"},"Enabled NAT")),(0,a.kt)("p",null,"This option allows users to enable or disable NAT. NAT is a method of mapping an IP address space into another by modifying network address information in the IP header of packets. If there is any NAT rule already configured by the user, the source or destination IPs address will be mapped accordingly. If there is no such NAT rule added by the user, then the user can add a new rule for Network Address Translation."))}p.isMDXComponent=!0},4151:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb16-a27b4bb168b922e49c3aed1cf1244c8c.png"},36728:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/llb17-74e58172b351ef472b92ecb409821d92.png"}}]);