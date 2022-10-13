"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[2037],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(r),u=a,k=c["".concat(s,".").concat(u)]||c[u]||m[u]||o;return r?n.createElement(k,l(l({ref:t},d),{},{components:r})):n.createElement(k,l({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},33614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:2},l="Records",i={unversionedId:"saas/docs/dns/zone/records",id:"saas/docs/dns/zone/records",title:"Records",description:"Configure DNS Records for your domain",source:"@site/docs/saas/docs/dns/zone/records.md",sourceDirName:"saas/docs/dns/zone",slug:"/saas/docs/dns/zone/records",permalink:"/saas/docs/dns/zone/records",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"saasSidebar",previous:{title:"Zone",permalink:"/saas/docs/dns/zone/"},next:{title:"NameServers",permalink:"/saas/docs/dns/zone/nameservers"}},s={},p=[],d={toc:p};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"records"},"Records"),(0,a.kt)("p",null,"Configure DNS Records for your domain"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Overview")),(0,a.kt)("p",null,"A DNS Record is a database entry that maps a URL to a specified IP address. These records are then stored in the DNS Servers, which can be accessed by different users globally using the URL address. When you search the URL, the browser forwards the URL to the DNS server, and it redirects you to the specific Web server. This web server then serves the site or directs the user to an email server that takes care of the incoming mail."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Types of DNS Records")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Record Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Common Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"),(0,a.kt)("th",{parentName:"tr",align:null},"Example"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"Record Address Mapping"),(0,a.kt)("td",{parentName:"tr",align:null},"Maps domain names to IPv4 addresses."),(0,a.kt)("td",{parentName:"tr",align:null},"[IPv4 Address]"),(0,a.kt)("td",{parentName:"tr",align:null},"102.203.0.113")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AAAA"),(0,a.kt)("td",{parentName:"tr",align:null},"IPv6 Address Mapping Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Maps domain names to IPv6 addresses."),(0,a.kt)("td",{parentName:"tr",align:null},"[IPv6 Address]"),(0,a.kt)("td",{parentName:"tr",align:null},"fe80::a2e6:69de:f4ff:48d5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Canonical Name Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Maps one domain name to another, map multiple domains to one IP address or routing external domains."),(0,a.kt)("td",{parentName:"tr",align:null},"[Fully Qualified Domain Name]"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"http://www.example.com"},"www.example.com"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MX"),(0,a.kt)("td",{parentName:"tr",align:null},"Mail Exchange Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies a mail exchange server address."),(0,a.kt)("td",{parentName:"tr",align:null},"[Priority][Fully Qualified Domain Name]"),(0,a.kt)("td",{parentName:"tr",align:null},"10 mail.example.com")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TXT"),(0,a.kt)("td",{parentName:"tr",align:null},"Text Record"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores strings of information in DNS."),(0,a.kt)("td",{parentName:"tr",align:null},"[Enclosed text in quotation marks]"),(0,a.kt)("td",{parentName:"tr",align:null},'"v=spf1 mx-all"')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SRV"),(0,a.kt)("td",{parentName:"tr",align:null},"Service Record"),(0,a.kt)("td",{parentName:"tr",align:null},"Points one domain to another domain name using a specific destination port."),(0,a.kt)("td",{parentName:"tr",align:null},"[Priority][Weight]"," ","[Port][Fully Qualified Domain Name]"),(0,a.kt)("td",{parentName:"tr",align:null},"1 10 5269 xmpp.example.com")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Creating A Record")),(0,a.kt)("p",null,"The process is quite intuitive. Steps included: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"DNS > Zones > Records"),"."),(0,a.kt)("li",{parentName:"ol"},"Click On Add Record. "),(0,a.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,a.kt)("li",{parentName:"ol"},"Click Create Record.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Configurable Fields")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Record Name"),": Specify the name for your DNS record. It helps in easy identification of the record. It can be empty also. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Type"),": Specify the type of record. You can select record type from the drop-down list.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Record Value"),": Specify the value for the record type. Refer to the table for the format of the desired record type.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Time to Live (TTL)"),": Specify the duration of the DNS record on the server in minutes, hour, day."))))}m.isMDXComponent=!0}}]);