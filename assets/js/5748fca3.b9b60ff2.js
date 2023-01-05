"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[33391],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,k=d["".concat(l,".").concat(u)]||d[u]||c[u]||o;return n?r.createElement(k,s(s({ref:t},m),{},{components:n})):r.createElement(k,s({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51190:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},s="Compression",i={unversionedId:"products/waf/listener/performance/compression",id:"version-6.0/products/waf/listener/performance/compression",title:"Compression",description:"Configure compression or decompression of responses",source:"@site/versioned_docs/version-6.0/products/waf/listener/performance/compression.md",sourceDirName:"products/waf/listener/performance",slug:"/products/waf/listener/performance/compression",permalink:"/products/waf/listener/performance/compression",draft:!1,tags:[],version:"6.0",frontMatter:{},sidebar:"sidebar",previous:{title:"Caching",permalink:"/products/waf/listener/performance/caching"},next:{title:"RUM Metric",permalink:"/products/waf/listener/performance/rum"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Description",id:"description",level:2}],m={toc:p};function c(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"compression"},"Compression"),(0,a.kt)("p",null,"Configure compression or decompression of responses"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Haltdos provides you the ability to compress or decompress the responses which often significantly reduce the size of transmitted data and increase performance. The compression level is defined based on which responses are compressed to an extent. It also allows configuring other settings for compression."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Caching",src:n(33737).Z,width:"1503",height:"845"})),(0,a.kt)("h1",{id:"how-to-use-"},"How to Use :"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Go to ",(0,a.kt)("strong",{parentName:"p"},"WAF")," > ",(0,a.kt)("strong",{parentName:"p"},"Listeners")," > ",(0,a.kt)("strong",{parentName:"p"},"Performance")," > ",(0,a.kt)("strong",{parentName:"p"},"Compression"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click on ",(0,a.kt)("strong",{parentName:"p"},"Add Compression Configuration ")," ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Click ",(0,a.kt)("strong",{parentName:"p"},"Save Changes")),(0,a.kt)("table",{parentName:"li"},(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,a.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enable Compression"),(0,a.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Compression Level"),(0,a.kt)("td",{parentName:"tr",align:null},"Integer (1-9)"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Min Length Compression"),(0,a.kt)("td",{parentName:"tr",align:null},"Length in bytes"),(0,a.kt)("td",{parentName:"tr",align:null},"1000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Disable Compression"),(0,a.kt)("td",{parentName:"tr",align:null},"Regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Minimum HTTP version"),(0,a.kt)("td",{parentName:"tr",align:null},"Drop-down"),(0,a.kt)("td",{parentName:"tr",align:null},"HTTP 1.1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"URI Filter"),(0,a.kt)("td",{parentName:"tr",align:null},"URI Regex"),(0,a.kt)("td",{parentName:"tr",align:null},"Blank")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Proxy Response Filter"),(0,a.kt)("td",{parentName:"tr",align:null},"expired/no-cache/no-store/private/no_last_modified/no_etag/any/auth"),(0,a.kt)("td",{parentName:"tr",align:null},"expired, no-cache, no-store, private, no_last_modified, no_etag, any, auth")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Mime Type Filter"),(0,a.kt)("td",{parentName:"tr",align:null},"Any mime type"),(0,a.kt)("td",{parentName:"tr",align:null},"text/xml , text/plain")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"De-Compression"),(0,a.kt)("td",{parentName:"tr",align:null},"Enabled/Disabled"),(0,a.kt)("td",{parentName:"tr",align:null},"Disabled")))))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Compression",src:n(91778).Z,width:"1478",height:"896"})),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"1.",(0,a.kt)("strong",{parentName:"p"},"Enable Compression")),(0,a.kt)("p",null,"To enable compression, enable the toggle button. It compresses the responses to an extent."),(0,a.kt)("p",null,"2.",(0,a.kt)("strong",{parentName:"p"},"Compression Level")),(0,a.kt)("p",null,"The level of compression to be achieved. The greater the number more the compression. The range is 1 - 9."),(0,a.kt)("p",null,"3.",(0,a.kt)("strong",{parentName:"p"},"Min Length Compression")),(0,a.kt)("p",null,"This field specifies the minimum length of the response to be compressed."),(0,a.kt)("p",null,"4.",(0,a.kt)("strong",{parentName:"p"},"Disable Compression")),(0,a.kt)("p",null,"Specify one or more regular expressions (Regex) that will be evaluated on HTTP requests and disable compression for matching requests."),(0,a.kt)("p",null,"5.",(0,a.kt)("strong",{parentName:"p"},"Minimum HTTP Version")),(0,a.kt)("p",null,"Specify the minimum HTTP version from which compression will be applied. The response above the specified version is compressed."),(0,a.kt)("p",null,"6.",(0,a.kt)("strong",{parentName:"p"},"URI Filter")),(0,a.kt)("p",null,"This field allows to perform compression on the specific URI using one or more regex. If the field is empty then no filter perform."),(0,a.kt)("p",null,"7.",(0,a.kt)("strong",{parentName:"p"},"Proxy Response Filter")),(0,a.kt)("p",null,"This field allows to perform compression on the specific type of HTTP requests. "),(0,a.kt)("p",null,"8.",(0,a.kt)("strong",{parentName:"p"},"Mime Type Filter")),(0,a.kt)("p",null,"By default, WAF compresses responses only with MIME-type text/HTML. To compress responses with other MIME types then include them in this field."),(0,a.kt)("p",null,"9.",(0,a.kt)("strong",{parentName:"p"},"De-Compression")),(0,a.kt)("p",null,"Some clients do not support responses with the GZIP encoding method. At the same time, it might be desirable to store compressed data, or compress responses on the fly and store them in the cache. To successfully serve both clients that do and do not accept compressed data, WAF can decompress data on the fly when sending it to the latter type of client."))}c.isMDXComponent=!0},33737:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compression-3a68f250adbe91670897ec6ce4492d4e.png"},91778:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/compression_cont-771496c3ae5aa19fc609d221b9f83128.png"}}]);