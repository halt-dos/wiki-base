"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[63529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=o,g=d["".concat(l,".").concat(u)]||d[u]||c[u]||s;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<s;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45776:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),o=(n(67294),n(3905));const s={},a="Compression",i={unversionedId:"products/waf/listener/performance/compression",id:"products/waf/listener/performance/compression",title:"Compression",description:"Configure compression or decompression of responses",source:"@site/docs/products/waf/listener/performance/compression.md",sourceDirName:"products/waf/listener/performance",slug:"/products/waf/listener/performance/compression",permalink:"/products/waf/listener/performance/compression",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Caching",permalink:"/products/waf/listener/performance/caching"},next:{title:"Server Groups",permalink:"/products/waf/listener/server_groups/servergroup"}},l={},p=[{value:"Overview",id:"overview",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Enable Compression</strong>",id:"enable-compression",level:5},{value:"<strong>Compression Level</strong>",id:"compression-level",level:5},{value:"<strong>Min Length Compression</strong>",id:"min-length-compression",level:5},{value:"<strong>Disable Compression</strong>",id:"disable-compression",level:5},{value:"<strong>Minimum HTTP Version</strong>",id:"minimum-http-version",level:5},{value:"<strong>URI Filter</strong>",id:"uri-filter",level:5},{value:"<strong>Proxy Response Filter</strong>",id:"proxy-response-filter",level:5},{value:"<strong>Mime Type Filter</strong>",id:"mime-type-filter",level:5},{value:"<strong>Decompression</strong>",id:"decompression",level:5}],m={toc:p};function c(e){let{components:t,...s}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"compression"},"Compression"),(0,o.kt)("p",null,"Configure compression or decompression of responses"),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Caching",src:n(5981).Z,width:"1835",height:"942"})),(0,o.kt)("h1",{id:"how-to-use-"},"How to Use :"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to ",(0,o.kt)("strong",{parentName:"li"},"WAF")," > ",(0,o.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,o.kt)("strong",{parentName:"li"},"Performance")," > ",(0,o.kt)("strong",{parentName:"li"},"Compression")),(0,o.kt)("li",{parentName:"ol"},"Click on ",(0,o.kt)("strong",{parentName:"li"},"Add Compression Configuration ")," "),(0,o.kt)("li",{parentName:"ol"},"Click ",(0,o.kt)("strong",{parentName:"li"},"Save Changes"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,o.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,o.kt)("th",{parentName:"tr",align:null},"Default"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Enable Compression"),(0,o.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Compression Level"),(0,o.kt)("td",{parentName:"tr",align:null},"Integer (1-9)"),(0,o.kt)("td",{parentName:"tr",align:null},"1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Min Length Compression"),(0,o.kt)("td",{parentName:"tr",align:null},"Length in bytes"),(0,o.kt)("td",{parentName:"tr",align:null},"1000")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Disable Compression"),(0,o.kt)("td",{parentName:"tr",align:null},"Regex"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Minimum HTTP version"),(0,o.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,o.kt)("td",{parentName:"tr",align:null},"HTTP 1.1")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"URI Filter"),(0,o.kt)("td",{parentName:"tr",align:null},"URI Regex"),(0,o.kt)("td",{parentName:"tr",align:null},"Blank")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Proxy Response Filter"),(0,o.kt)("td",{parentName:"tr",align:null},"expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth"),(0,o.kt)("td",{parentName:"tr",align:null},"expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Mime Type Filter"),(0,o.kt)("td",{parentName:"tr",align:null},"Any mime type"),(0,o.kt)("td",{parentName:"tr",align:null},"text/xml , text/plain")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"De-Compression"),(0,o.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,o.kt)("td",{parentName:"tr",align:null},"Disabled")))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Compression",src:n(21660).Z,width:"793",height:"551"})),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("h5",{id:"enable-compression"},(0,o.kt)("strong",{parentName:"h5"},"Enable Compression")),(0,o.kt)("p",null,"To enable compression, enable the toggle button. It compresses the responses to an extent."),(0,o.kt)("h5",{id:"compression-level"},(0,o.kt)("strong",{parentName:"h5"},"Compression Level")),(0,o.kt)("p",null,"The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9."),(0,o.kt)("h5",{id:"min-length-compression"},(0,o.kt)("strong",{parentName:"h5"},"Min Length Compression")),(0,o.kt)("p",null,"This field specifies the minimum length of the response to be compressed."),(0,o.kt)("h5",{id:"disable-compression"},(0,o.kt)("strong",{parentName:"h5"},"Disable Compression")),(0,o.kt)("p",null,"Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests."),(0,o.kt)("h5",{id:"minimum-http-version"},(0,o.kt)("strong",{parentName:"h5"},"Minimum HTTP Version")),(0,o.kt)("p",null,"Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed."),(0,o.kt)("h5",{id:"uri-filter"},(0,o.kt)("strong",{parentName:"h5"},"URI Filter")),(0,o.kt)("p",null,"This field allows performing compression on the specific URI using one or more regex. If the field is empty then no filter perform."),(0,o.kt)("h5",{id:"proxy-response-filter"},(0,o.kt)("strong",{parentName:"h5"},"Proxy Response Filter")),(0,o.kt)("p",null,"This field allows performing compression on the specific type of HTTP requests. "),(0,o.kt)("h5",{id:"mime-type-filter"},(0,o.kt)("strong",{parentName:"h5"},"Mime Type Filter")),(0,o.kt)("p",null,"By default, WAF compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field."),(0,o.kt)("h5",{id:"decompression"},(0,o.kt)("strong",{parentName:"h5"},"Decompression")),(0,o.kt)("p",null,"Some clients do not support responses with the GZIP encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client."))}c.isMDXComponent=!0},21660:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/performance-079cb6ad76634151d39397d063464396.png"},5981:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/performance_compression-72402c7defebf62fa8fdc37f76cab41a.png"}}]);