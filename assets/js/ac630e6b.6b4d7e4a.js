"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[99369],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||l;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},74101:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2},o="Zones",i={unversionedId:"products/gslb/listener/zones",id:"version-6.0/products/gslb/listener/zones",title:"Zones",description:"Creation of DNS zones and records in GSLB",source:"@site/versioned_docs/version-6.0/products/gslb/listener/zones.md",sourceDirName:"products/gslb/listener",slug:"/products/gslb/listener/zones",permalink:"/products/gslb/listener/zones",draft:!1,tags:[],version:"6.0",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"sidebar",previous:{title:"Geo Filtering",permalink:"/products/gslb/listener/geo_filtering"},next:{title:"Monitors",permalink:"/products/gslb/listener/monitors"}},s={},d=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Records",id:"records",level:3},{value:"Overview",id:"overview",level:3},{value:"Types of DNS Records :",id:"types-of-dns-records-",level:4},{value:"Creating A Record",id:"creating-a-record",level:4},{value:"Configurable Fields",id:"configurable-fields",level:4}],p={toc:d};function u(e){let{components:t,...l}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"zones"},"Zones"),(0,a.kt)("p",null,"Creation of DNS zones and records in GSLB"),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Zones provide you an opportunity to create and manage domains. End users can also choose a list of Apps they want to configure for that root domain. DNS Service type should be Authoritative.  "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"zones",src:r(96136).Z,width:"1904",height:"525"})),(0,a.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to  ",(0,a.kt)("strong",{parentName:"li"},"Stack")," > ",(0,a.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,a.kt)("strong",{parentName:"li"},"Listener")," > ",(0,a.kt)("strong",{parentName:"li"},"Zones")),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Add Zone")," button."),(0,a.kt)("li",{parentName:"ol"},"Configure your settings."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Save"),".")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Settings"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Zone Name"),(0,a.kt)("td",{parentName:"tr",align:null},"String"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DNSSEC"),(0,a.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"0")))),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"records"},"Records"),(0,a.kt)("h3",{id:"overview"},"Overview"),(0,a.kt)("p",null,"A DNS Record is a database entry that maps a URL to a specified IP address. These records are then stored in the DNS Servers, which can be accessed by different users globally using the URL address. When you search the URL, the browser forwards the URL to the DNS server, and it redirects you to the specific Web server. This web server then serves the site or directs the user to an email server that takes care of the incoming mail."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"records",src:r(67884).Z,width:"1828",height:"774"})),(0,a.kt)("h4",{id:"types-of-dns-records-"},"Types of DNS Records :"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Record Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Common Name"),(0,a.kt)("th",{parentName:"tr",align:null},"Purpose"),(0,a.kt)("th",{parentName:"tr",align:null},"Value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"A"),(0,a.kt)("td",{parentName:"tr",align:null},"IPv4 Address Mapping Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Maps domain names to IPv4 addresses"),(0,a.kt)("td",{parentName:"tr",align:null},"[IPv4 Address]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"AAAA"),(0,a.kt)("td",{parentName:"tr",align:null},"IPv6 Address Mapping Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Maps domain names to IPv6 addresses."),(0,a.kt)("td",{parentName:"tr",align:null},"[IPv6 Address]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CAA"),(0,a.kt)("td",{parentName:"tr",align:null},"CAA (Certificate Authority Authorization records)"),(0,a.kt)("td",{parentName:"tr",align:null},"Check CAA value to ensure that only certain certificate authorities are allowed to issue valid certificates."),(0,a.kt)("td",{parentName:"tr",align:null},"[Flag(0-255)][Tag(issue/issuewild/iode)]"," ","[Certificate Authority Provider]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CNAME"),(0,a.kt)("td",{parentName:"tr",align:null},"Canonical Name Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Maps one domain name to another, map multiple domains to one IP address or routing external domains."),(0,a.kt)("td",{parentName:"tr",align:null},"[Fully Qualified Domain Name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CERT"),(0,a.kt)("td",{parentName:"tr",align:null},"Certificate  Record"),(0,a.kt)("td",{parentName:"tr",align:null},"Certificates Record specifies  the authenticity of the sending and receiving parties."),(0,a.kt)("td",{parentName:"tr",align:null},"[Type][Key-Tag]"," ","[Algorithm Code][Base 64 Encoded Certificate Data]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"PTR"),(0,a.kt)("td",{parentName:"tr",align:null},"Pointer Record"),(0,a.kt)("td",{parentName:"tr",align:null},"PTR records provide specifies that the given hostname or a domain are connected to the IP address."),(0,a.kt)("td",{parentName:"tr",align:null},"[Fully Qualified Domain Name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"MX"),(0,a.kt)("td",{parentName:"tr",align:null},"Mail Exchange Records"),(0,a.kt)("td",{parentName:"tr",align:null},"Specifies a mail exchange server address."),(0,a.kt)("td",{parentName:"tr",align:null},"[Priority][Fully Qualified Domain Name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TXT"),(0,a.kt)("td",{parentName:"tr",align:null},"Text Record"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores strings of information in DNS."),(0,a.kt)("td",{parentName:"tr",align:null},"[Enclosed text in quotation marks]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SRV"),(0,a.kt)("td",{parentName:"tr",align:null},"Service Record"),(0,a.kt)("td",{parentName:"tr",align:null},"Points one domain to another domain name using a specific destination port."),(0,a.kt)("td",{parentName:"tr",align:null},"[Priority][Weight]"," ","[Port][Fully Qualified Domain Name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"NS"),(0,a.kt)("td",{parentName:"tr",align:null},"Name server"),(0,a.kt)("td",{parentName:"tr",align:null},"Points to the authoritative server for the domain"),(0,a.kt)("td",{parentName:"tr",align:null},"[Fully Qualified Domain Name]")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"SOA"),(0,a.kt)("td",{parentName:"tr",align:null},"Start of Authority"),(0,a.kt)("td",{parentName:"tr",align:null},"Stores important information about a domain such as email address of the administrator, when the domain was last updated, and how long the server should wait between refreshes etch."),(0,a.kt)("td",{parentName:"tr",align:null},"[MNAME][RNAME]"," ","[Serial][Refresh]"," ","[Retry][Expire]"," ","[TTL]")))),(0,a.kt)("h4",{id:"creating-a-record"},"Creating A Record"),(0,a.kt)("p",null,"The process is quite intuitive. Steps included: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Go to ",(0,a.kt)("strong",{parentName:"li"},"Stack")," > ",(0,a.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,a.kt)("strong",{parentName:"li"},"Zones")," > ",(0,a.kt)("strong",{parentName:"li"},"Records.")),(0,a.kt)("li",{parentName:"ol"},"Click On ",(0,a.kt)("strong",{parentName:"li"},"Add Record"),". "),(0,a.kt)("li",{parentName:"ol"},"Configure your settings. "),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create Record"),".")),(0,a.kt)("h4",{id:"configurable-fields"},"Configurable Fields"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Record Name"),": Specify the name for your DNS record. It helps in easy identification of the record. It can be empty also. "),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Record Type:")," Specify the type of record. You can select record type from the drop-down list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Time to Live (TTL):")," Specify the duration of the DNS record on the server in minutes, hour, day."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"LB Algorithm:")," Specify the algorithm."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Monitors:")," Users can specify the monitors for the zone."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Record Value"),": Specify the value for the record type. Refer to the table for the format of the desired record type."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Back-up Record Value:")," Specify the value for the record type you want to maintain back-up. As in Substitute."))}u.isMDXComponent=!0},67884:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/records-c8c8e5a12e651bdd0aef5fec95b34a5d.png"},96136:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/zones-3d7a0427dcfadb5db26de1741b184ff4.png"}}]);