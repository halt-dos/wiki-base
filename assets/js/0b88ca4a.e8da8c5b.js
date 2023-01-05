"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[23071],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(a),g=r,m=c["".concat(i,".").concat(g)]||c[g]||u[g]||l;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},82997:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_position:2},o="Source NAT",s={unversionedId:"products/llb/rules/snat",id:"products/llb/rules/snat",title:"Source NAT",description:"Source NAT Rule & Settings",source:"@site/docs/products/llb/rules/snat.md",sourceDirName:"products/llb/rules",slug:"/products/llb/rules/snat",permalink:"/rc/products/llb/rules/snat",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Load Balancing",permalink:"/rc/products/llb/rules/load_balancing"},next:{title:"Destination NAT",permalink:"/rc/products/llb/rules/dnat"}},i={},p=[{value:"<strong>How to Use:</strong>",id:"how-to-use",level:3},{value:"<strong>Description:</strong>",id:"description",level:3},{value:"<strong>Rule Name</strong>",id:"rule-name",level:5},{value:"<strong>Rule Message</strong>",id:"rule-message",level:5},{value:"<strong>Rule Priority</strong>",id:"rule-priority",level:5},{value:"<strong>Enabled</strong>",id:"enabled",level:5},{value:"<strong>Incoming Interface</strong>",id:"incoming-interface",level:5},{value:"<strong>Outgoing Interface</strong>",id:"outgoing-interface",level:5},{value:"<strong>Source IP</strong>",id:"source-ip",level:5},{value:"<strong>Destination IP</strong>",id:"destination-ip",level:5},{value:"<strong>Protocol</strong>",id:"protocol",level:5},{value:"<strong>ARP Reply</strong>",id:"arp-reply",level:5},{value:"<strong>Preserve Source Port</strong>",id:"preserve-source-port",level:5},{value:"<strong>Translation</strong>",id:"translation",level:5},{value:"<strong>Translate IP Range</strong>",id:"translate-ip-range",level:5},{value:"<strong>Port Mapping</strong>",id:"port-mapping",level:5}],d={toc:p};function u(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"source-nat"},"Source NAT"),(0,r.kt)("p",null,"Source NAT Rule & Settings"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Source NAT is the translation of the source IP address of a packet. It changes the source IP address of the packets which are passing through the Link Load Balancing Device. This rule helps you to set the SNAT rule by specifying the rule name, Incoming and Outgoing Interface, Source and Destination IP, Protocol, ARP Reply, Preserve Secure Port, Translation, Translate IP Range, and Port Mapping."),(0,r.kt)("p",null,"In static SNAT all internal IP addresses are always mapped to the same public IP address."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"source_net",src:a(87118).Z,width:"1496",height:"488"})),(0,r.kt)("h3",{id:"how-to-use"},(0,r.kt)("strong",{parentName:"h3"},"How to Use:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Go to ",(0,r.kt)("strong",{parentName:"p"},"Stack > LLB Rules"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select Source NAT rule.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Add Rule button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure your settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click Save."))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Settings"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify Rule Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Message"),(0,r.kt)("td",{parentName:"tr",align:null},"User Friendly Message for Rule"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Rule Priority"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolen"),(0,r.kt)("td",{parentName:"tr",align:null},"True")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Incoming Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Incoming Interface Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Outgoing Interface"),(0,r.kt)("td",{parentName:"tr",align:null},"Outgoing Interface Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Source Ip"),(0,r.kt)("td",{parentName:"tr",align:null},"Source IP address with CIDR"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Destination IP"),(0,r.kt)("td",{parentName:"tr",align:null},"Destination IP add. with CIDR"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Select the Protocol"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ARP Reply"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Preserve Source Port"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Translation"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Overload (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Translate IP Range"),(0,r.kt)("td",{parentName:"tr",align:null},"Intger"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer (Mandatory)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Port Mapping"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"snat_rule_condition",src:a(29604).Z,width:"1092",height:"789"})),(0,r.kt)("h3",{id:"description"},(0,r.kt)("strong",{parentName:"h3"},"Description:")),(0,r.kt)("h5",{id:"rule-name"},(0,r.kt)("strong",{parentName:"h5"},"Rule Name")),(0,r.kt)("p",null,"This option allows the user to select desired rule name."),(0,r.kt)("h5",{id:"rule-message"},(0,r.kt)("strong",{parentName:"h5"},"Rule Message")),(0,r.kt)("p",null,"This option allows users to use specifies the custom message for the rule."),(0,r.kt)("h5",{id:"rule-priority"},(0,r.kt)("strong",{parentName:"h5"},"Rule Priority")),(0,r.kt)("p",null,"This option allows the user to set rule priority. The rule with lower Priority Value will be prioritized."),(0,r.kt)("h5",{id:"enabled"},(0,r.kt)("strong",{parentName:"h5"},"Enabled")),(0,r.kt)("p",null,"It specifies rule is enabled or disabled. By default, this option is enabled."),(0,r.kt)("h5",{id:"incoming-interface"},(0,r.kt)("strong",{parentName:"h5"},"Incoming Interface")),(0,r.kt)("p",null,"This option allows the user to set Incoming Interface. Every data packet entered from Incoming Interface will be inspected and mapped to translation IPs."),(0,r.kt)("h5",{id:"outgoing-interface"},(0,r.kt)("strong",{parentName:"h5"},"Outgoing Interface")),(0,r.kt)("p",null,"This option allows the user to select the Outgoing Interface from the list of interfaces. data packets that are mapped will move outside from Outgoing Interface."),(0,r.kt)("h5",{id:"source-ip"},(0,r.kt)("strong",{parentName:"h5"},"Source IP")),(0,r.kt)("p",null,"This option allows the user to set the source IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned source IP address will be translated according to the Translate IP Range."),(0,r.kt)("h5",{id:"destination-ip"},(0,r.kt)("strong",{parentName:"h5"},"Destination IP")),(0,r.kt)("p",null,"This option allows the user to set the destination IP range with a CIDR value. The data packets are inspected and data packets that match with a mentioned destination IP address will be translated according to the Translate IP Range."),(0,r.kt)("h5",{id:"protocol"},(0,r.kt)("strong",{parentName:"h5"},"Protocol")),(0,r.kt)("p",null,"This option allows the user to set the protocol for the rule. The data packets are inspected and data packets that match with the mentioned protocol will be translated according to the Translate IP Range."),(0,r.kt)("h5",{id:"arp-reply"},(0,r.kt)("strong",{parentName:"h5"},"ARP Reply")),(0,r.kt)("p",null,"This option allows the user to get an ARP reply from the next hop."),(0,r.kt)("h5",{id:"preserve-source-port"},(0,r.kt)("strong",{parentName:"h5"},"Preserve Source Port")),(0,r.kt)("p",null,"Preserve Source Port keeps the same source port for services that expect traffic to come from a specific source port. This option allows the user to select the preserved source port. It maps the source port for outgoing traffic through which it came from."),(0,r.kt)("h5",{id:"translation"},(0,r.kt)("strong",{parentName:"h5"},"Translation")),(0,r.kt)("p",null,"It allows users to select the type of translation. By default, Overload is selected."),(0,r.kt)("p",null,"In Haltdos LLB, we have three types of NAT translation which are mentioned below;"),(0,r.kt)("p",null,"a). ",(0,r.kt)("strong",{parentName:"p"},"Overload:")," SNAT maps the private IP addresses to the first available public address from a pool of addresses. An IP pool defines a single IP address or a range of IP addresses to be used as the source address for the duration of the session. If "),(0,r.kt)("p",null,"The Users need to define an external IP range that contains one or more IP addresses. For example, assume, we have defined an overload type IP pool with two external IP addresses (172.16.200.1\xe2\u20ac\u201d172.16.200.2), since there are 60,416 available port numbers per IP, this IP pool can handle 60,416*2 internal IP addresses."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"overload_translation",src:a(59458).Z,width:"578",height:"190"})),(0,r.kt)("p",null,"b). ",(0,r.kt)("strong",{parentName:"p"},"Outgoing Interface IP:")," If this option is selected as translation mode then all internal traffic will be moved to the public domain by changing its source IP address to the WAN outgoing port IP."),(0,r.kt)("p",null,"c). ",(0,r.kt)("strong",{parentName:"p"},"Fixed Port Range:")," If this is selected as a translation method, all internal traffic will not be affected. Users can manually define the Source IP range and translation IP range. it will automatically bind the source IP with the translation IP."),(0,r.kt)("h5",{id:"translate-ip-range"},(0,r.kt)("strong",{parentName:"h5"},"Translate IP Range")),(0,r.kt)("p",null,"Users can specify the translation IP or IP address range. If the user selects overload as translation type, another option will be shown there for translation IP or IP address range. Translation IP can be written as 192.168.1.1/24 or 192.168.1.5-192.168.1.25."),(0,r.kt)("h5",{id:"port-mapping"},(0,r.kt)("strong",{parentName:"h5"},"Port Mapping")),(0,r.kt)("p",null,"It allows users to enable port mapping"))}u.isMDXComponent=!0},87118:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llb11-2740eb121508bf6592b98efd6602c781.png"},29604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llb12-a0d1d5bebc0a05bf5af510b6917f4c4b.png"},59458:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/llb13-0e22228675e710a6970ba22e4ad3ece5.png"}}]);