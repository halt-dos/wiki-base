"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[1157],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),u=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(m,".").concat(d)]||c[d]||s[d]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},48718:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3},l="XML Policy",o={unversionedId:"saas/waf/listener/security-profile/policy/xml",id:"saas/waf/listener/security-profile/policy/xml",title:"XML Policy",description:"Configure XML Security Policy for XML based API web service.",source:"@site/docs/saas/waf/listener/security-profile/policy/xml.md",sourceDirName:"saas/waf/listener/security-profile/policy",slug:"/saas/waf/listener/security-profile/policy/xml",permalink:"/saas/waf/listener/security-profile/policy/xml",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"JSON Policy",permalink:"/saas/waf/listener/security-profile/policy/json"},next:{title:"Rules",permalink:"/saas/waf/listener/security-profile/rules/"}},m={},u=[{value:"Overview",id:"overview",level:2},{value:"How to Use:",id:"how-to-use",level:3}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xml-policy"},"XML Policy"),(0,r.kt)("p",null,"Configure XML Security Policy for XML based API web service."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"XML Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that feature malware XML documents or documents bigger than the allowed size. The owner can set their Minimum & Maximum size limit for the XML document."),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF > Zones > Listeners > Security Profiles > Policy > XML Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click ",(0,r.kt)("strong",{parentName:"li"},"Save"),".")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"SETTINGS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Children"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Depth"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Node Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Node Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Attribute Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Attribute Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  <bookstore>\n    <book category="children">\n    <title>Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n    </book>\n    <book category="web">\n    <title>Learning XML</title>\n    <author>Erik T. Ray</author>\n    <year>2003</year>\n    <price>39.95</price>\n    </book>\n  </bookstore>\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Children")),(0,r.kt)("p",null,"This field specifies the maximum child nodes of the XML document."),(0,r.kt)("p",null,"In the above example, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has 4 children."),(0,r.kt)("p",null,"An XML document can have a minimum of 1 child and a maximum of 10000 children."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Depth")),(0,r.kt)("p",null,"This field specifies the maximum depth of an XML document."),(0,r.kt)("p",null,"In the above example, maximum depth is 2, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," is at depth 1 & children are at depth 2."),(0,r.kt)("p",null,"An XML document can have a minimum depth of 1 and a maximum depth up to 1000000."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Attributes")),(0,r.kt)("p",null,"This field specifies the maximum attributes for a single node of an XML document."),(0,r.kt)("p",null,"In the above example, the maximum attribute is 1, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has 1 attribute."),(0,r.kt)("p",null,"An XML document can have a minimum of 1 attribute and a maximum of 1000 attributes."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Node Name")),(0,r.kt)("p",null,"This field specifies the maximum node name size of an XML document."),(0,r.kt)("p",null,"In the above example, the maximum node name is 9, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<bookstore>")," length is 9."),(0,r.kt)("p",null,"An XML document can have a minimum of 1 node name size and a maximum of 10000 node name size."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Node Value")),(0,r.kt)("p",null,"This field specifies the maximum node value of the XML document."),(0,r.kt)("p",null,"In the above example, the maximum node value is 12, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>")," has value Harry Potter of length 12."),(0,r.kt)("p",null,"An XML document can have a minimum of 1 node value and a maximum of 1000000 node values."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Attribute Name")),(0,r.kt)("p",null,"This field specifies the maximum attribute name size of an XML document."),(0,r.kt)("p",null,"In the above example, the maximum attribute name is 8, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8."),(0,r.kt)("p",null,"An XML document can have a minimum of 1 attribute name and a maximum of 10000 attribute names."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Maximum Attribute Value")),(0,r.kt)("p",null,"This field specifies the maximum attribute value size of the XML document."),(0,r.kt)("p",null,"In the above example, the maximum attribute value is 8, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8."),(0,r.kt)("p",null,"An XML document can have a minimum of 1 attribute value and a maximum of 1000000 attribute value."))}s.isMDXComponent=!0}}]);