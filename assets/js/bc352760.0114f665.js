"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[471],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),p=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,i=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),u=p(n),c=r,k=u["".concat(i,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},d),{},{components:n})):a.createElement(k,o({ref:e},d))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var s={};for(var i in e)hasOwnProperty.call(e,i)&&(s[i]=e[i]);s.originalType=t,s.mdxType="string"==typeof t?t:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1984:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={sidebar_position:7},o="DHCP Settings",s={unversionedId:"hdplatform/stacks/instance/dhcp_settings",id:"hdplatform/stacks/instance/dhcp_settings",title:"DHCP Settings",description:"Configuring DHCP settings on Haltdos solution",source:"@site/docs/hdplatform/stacks/instance/dhcp_settings.md",sourceDirName:"hdplatform/stacks/instance",slug:"/hdplatform/stacks/instance/dhcp_settings",permalink:"/hdplatform/stacks/instance/dhcp_settings",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"sidebar",previous:{title:"NTP",permalink:"/hdplatform/stacks/instance/integration/ntp"},next:{title:"Virtual Machines",permalink:"/hdplatform/stacks/instance/virtual_machines"}},i={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4},{value:"Description",id:"description-1",level:3}],d={toc:p};function m(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"dhcp-settings"},"DHCP Settings"),(0,r.kt)("p",null,"Configuring DHCP settings on Haltdos solution"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"The Dynamic Host Configuration Protocol (DHCP) is a network management protocol used on Internet Protocol (IP) networks for automatically assigning IP addresses and other communication parameters to devices connected to the network using a client-server architecture."),(0,r.kt)("p",null,"This section details how to configure the Haltdos solution as a DHCP server for assigning IP addresses."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"dhcp",src:n(77397).Z,width:"1262",height:"608"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Instances > Instance > DHCP")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click Save Changes")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable"),(0,r.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Local Link"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4 / IPv6"),(0,r.kt)("td",{parentName:"tr",align:null},"IPv4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Subnet Network"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nameserver"),(0,r.kt)("td",{parentName:"tr",align:null},"IP String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Network Mask"),(0,r.kt)("td",{parentName:"tr",align:null},"IP String"),(0,r.kt)("td",{parentName:"tr",align:null},"255.255.255.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Gateway"),(0,r.kt)("td",{parentName:"tr",align:null},"IP String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"NTP Server"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enable IP Lease"),(0,r.kt)("td",{parentName:"tr",align:null},"ENABLED / DISABLED"),(0,r.kt)("td",{parentName:"tr",align:null},"DISABLED")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Default Lease Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"3600")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Lease Time"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"7200")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allowed IP Range"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"BlackList Mac Address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")))),(0,r.kt)("h4",{id:"description"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enable")),(0,r.kt)("p",null,"This option allows users to enable/disable the current configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Name")),(0,r.kt)("p",null,"This option allows users to set the desired name for the network setting."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Local Link")),(0,r.kt)("p",null,"This option allows users to set whether they wanted to use IPv4 or IPv6. by default IPv4 is selected. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Interface")),(0,r.kt)("p",null,"This option allows users to set a network interface for DHCP configuration. Users can add an Interface on which DHCP service dynamically assigns an IP address and other network configuration parameters to each device on a network so they can communicate with other IP networks."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Subnet Network")),(0,r.kt)("p",null,"This feature allows you to share the subnet mask for the subnetwork."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Nameserver"),"\nName Server refers to the server component of the Domain Name System (DNS), one of the two principal namespaces of the Internet. The most important function of DNS servers is the translation (resolution) of human-memorable domain names (example.com) and hostnames into the corresponding numeric Internet Protocol (IP) addresses (93.184.216.34), the second principal namespace of the Internet, which is used to identify and locate computer systems and resources on the Internet. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Network Mask")),(0,r.kt)("p",null,"This option allows users to set the network mask which will be assigned to devices on the network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Gateway")),(0,r.kt)("p",null,"This option allows users to set the default gateway IP as it will be assigned to devices in the network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"NTP Server")),(0,r.kt)("p",null,"The Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks. Users are allowed to mention the NTP."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Enable IP Lease")),(0,r.kt)("p",null,"A DHCP lease is a temporary assignment of an IP address to a device on the network. When using DHCP to manage a pool of IP addresses, each client served on the network is only \u201crenting\u201d its IP address. Thus, IP addresses managed by a DHCP server are only assigned for a limited period of time. Users are allowed to set the DHCP IP lease which will be assigned to the PC."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Default Lease Time")),(0,r.kt)("p",null,"When DHCP sends configuration information to a client, the information is sent with a lease time. This is the length of time that the client can use the IP address it has been assigned. The duration of the lease time can be changed according to your specific requirement. Users are allowed to set the Default Lease Time for each IP that has been assigned to clients."),(0,r.kt)("p",null,"During the lease time, the DHCP server cannot assign that IP address to any other clients."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Lease Time")),(0,r.kt)("p",null,"This option allows users to set the maximum lease time for the IP assigned to the host device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Allowed IP Range  ")),(0,r.kt)("p",null,"This option allows users to set the IP range which is allowed to the host device within the network."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"BlackList Mac Address"),"\nThis option allows user to block access for IP alllocation. MAC addresses listed in the Blacklist are denied access, while all other clients are allowed access"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Mac IP Binding")),(0,r.kt)("p",null,"Mac-binding essentially means binding together the MAC and IP addresses, so that all requests from that IP address are served only by the computer having that particular MAC address. In effect, it means that if the IP address or the MAC address changes, the device can no longer access the Internet."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"MAC Address"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"IP Address"),(0,r.kt)("td",{parentName:"tr",align:null},"IP String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Description"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Empty")))),(0,r.kt)("h3",{id:"description-1"},"Description"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"MAC Address")),(0,r.kt)("p",null,"This option allows users to mention the MAC address which need to be bind with a IP address for MAC IP Binding."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"IP Address")),(0,r.kt)("p",null,"This option allows users to mention the IP address which need to be bind with MAC Address."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Description")),(0,r.kt)("p",null,"This field allows users to mention a short description about the MAC IP binding or the reason for the binding."))}m.isMDXComponent=!0},77397:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/dhcp1-225fb8efaea218a4b5517797fe814e56.png"}}]);