"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[76564],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9474:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:0},a="Operational",s={unversionedId:"products/gslb/listener/operational",id:"version-6.0/products/gslb/listener/operational",title:"Operational",description:"To set up the Operational Settings for the particular Listener.",source:"@site/versioned_docs/version-6.0/products/gslb/listener/operational.md",sourceDirName:"products/gslb/listener",slug:"/products/gslb/listener/operational",permalink:"/v6/products/gslb/listener/operational",draft:!1,tags:[],version:"6.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"sidebar",previous:{title:"Listener",permalink:"/v6/products/gslb/listener/"},next:{title:"Geo Filtering",permalink:"/v6/products/gslb/listener/geo_filtering"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3},{value:"Description",id:"description",level:4}],c={toc:p};function u(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"operational"},"Operational"),(0,o.kt)("p",null,"To set up the Operational Settings for the particular Listener."),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Operational Setting configure different settings of Listener like the network protocol to be used. User can also configure the listener to work as Recursive DNS, Authoritative DNS or Both. Operational Setting specifies the IP address of the Listener. Basically, Operational enables the user to make custom changes on its DNS."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"operational",src:r(77424).Z,width:"1838",height:"858"})),(0,o.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to  ",(0,o.kt)("strong",{parentName:"li"},"Stack")," > ",(0,o.kt)("strong",{parentName:"li"},"GSLB")," > ",(0,o.kt)("strong",{parentName:"li"},"Listener")," > ",(0,o.kt)("strong",{parentName:"li"},"Operational")),(0,o.kt)("li",{parentName:"ol"},"Configure your settings."),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save"),".")),(0,o.kt)("p",null,"Configure the following parameters to set up the desired settings:"),(0,o.kt)("h4",{id:"description"},"Description"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Protocols"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify the resolution on specific Protocols for e.g. UDP, TCP or TLS.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"DNS Service Type"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify the DNS Service type  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Upstream Resolvers"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify the upstream resolver for Recursive DNS. This option only works when DNS service type is set to Rescursive  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Addresses"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify the list of addresses that should be used in Recursive DNS.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Refuse Query with no RD flag"),(0,o.kt)("br",{parentName:"p"}),"\n","Specify to respond with refuse on queries with no RD flag.  "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Domain Filter Files"),(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"/v6/products/gslb/domain-filters"},"Domain Filter Files")," is a mechanism to introduce a customized policy in Domain Name System servers, so that recursive resolvers return possibly modified results. By modifying a result, access to the corresponding host can be blocked. User can select which Domain Filter Files should be used."))}u.isMDXComponent=!0},77424:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/operational-c903050acc41d35c4c170cbf3dc304b8.png"}}]);