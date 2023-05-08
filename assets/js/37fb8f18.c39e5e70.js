"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[24435],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),u=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(m.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,h=d["".concat(m,".").concat(c)]||d[c]||s[c]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4859:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var n=a(87462),r=(a(67294),a(3905));const i={sidebar_position:3},l="XML Policy",o={unversionedId:"products/waf/listener/profiles/policy/xml_policy",id:"products/waf/listener/profiles/policy/xml_policy",title:"XML Policy",description:"Configure XML Security Policy for XML based API web service.",source:"@site/docs/products/waf/listener/profiles/policy/xml_policy.md",sourceDirName:"products/waf/listener/profiles/policy",slug:"/products/waf/listener/profiles/policy/xml_policy",permalink:"/products/waf/listener/profiles/policy/xml_policy",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"sidebar",previous:{title:"JSON Policy",permalink:"/products/waf/listener/profiles/policy/json_policy"},next:{title:"Rules",permalink:"/products/waf/listener/profiles/rules/"}},m={},u=[{value:"Configure XML Security Policy for XML based API web service.",id:"configure-xml-security-policy-for-xml-based-api-web-service",level:4},{value:"Overview",id:"overview",level:3},{value:"How to Use:",id:"how-to-use",level:3},{value:"Example :",id:"example-",level:3},{value:"Description",id:"description",level:3},{value:"<strong>Supported Header</strong>",id:"supported-header",level:5},{value:"<strong>Maximum Children</strong>",id:"maximum-children",level:5},{value:"<strong>Maximum Depth</strong>",id:"maximum-depth",level:5},{value:"<strong>Maximum Attributes</strong>",id:"maximum-attributes",level:5},{value:"<strong>Maximum Node Name</strong>",id:"maximum-node-name",level:5},{value:"<strong>Maximum Node Value</strong>",id:"maximum-node-value",level:5},{value:"<strong>Maximum Attribute Name</strong>",id:"maximum-attribute-name",level:5},{value:"<strong>Maximum Attribute Value</strong>",id:"maximum-attribute-value",level:5}],p={toc:u};function s(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"xml-policy"},"XML Policy"),(0,r.kt)("h4",{id:"configure-xml-security-policy-for-xml-based-api-web-service"},"Configure XML Security Policy for XML based API web service."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,"XML Policy is a feature of Haltdos WAF. It allows application owners to block unwanted requests that feature malware XML documents or documents bigger than the allowed size. The owner can set their Minimum & Maximum size limit for the XML document."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Xmlpolicy",src:a(95666).Z,width:"1829",height:"767"})),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"WAF")," > ",(0,r.kt)("strong",{parentName:"li"},"Listeners")," > ",(0,r.kt)("strong",{parentName:"li"},"Profiles")," > ",(0,r.kt)("strong",{parentName:"li"},"Policy")," > ",(0,r.kt)("strong",{parentName:"li"},"XML Policy"),"."),(0,r.kt)("li",{parentName:"ol"},"Configure your settings."),(0,r.kt)("li",{parentName:"ol"},"Click on ",(0,r.kt)("strong",{parentName:"li"},"Save Changes"),".")),(0,r.kt)("h3",{id:"example-"},"Example :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'<bookstore>\n    <book category="children">\n    <title>Harry Potter</title>\n    <author>J K. Rowling</author>\n    <year>2005</year>\n    <price>29.99</price>\n    </book>\n    <book category="web">\n    <title>Learning XML</title>\n    <author>Erik T. Ray</author>\n    <year>2003</year>\n    <price>39.95</price>\n    </book>\n</bookstore> \n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Parameters"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted value"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Supported Header"),(0,r.kt)("td",{parentName:"tr",align:null},"Drop-Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Application/xml, text/xml")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Children"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Depth"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"100")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Node Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Node Value"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Attribute Name"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Maximum Attribute value"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"1000")))),(0,r.kt)("h3",{id:"description"},"Description"),(0,r.kt)("h5",{id:"supported-header"},(0,r.kt)("strong",{parentName:"h5"},"Supported Header")),(0,r.kt)("p",null," Users are allowed to specify supported header i.e. content-type, to identify request as XML."),(0,r.kt)("h5",{id:"maximum-children"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Children")),(0,r.kt)("p",null,"This field specifies the maximum child nodes of the XML document. In the above example, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has 4 children. An XML document can have a minimum of 1 child and a maximum of 10000 children."),(0,r.kt)("h5",{id:"maximum-depth"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Depth")),(0,r.kt)("p",null,"This field specifies the maximum depth of an XML document. In the above example, maximum depth is 2, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," is at depth 1 & children are at depth 2. An XML document can have a minimum depth of 1 and a maximum depth up to 1000000."),(0,r.kt)("h5",{id:"maximum-attributes"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Attributes")),(0,r.kt)("p",null,"This field specifies the maximum attributes for a single node of an XML document. In the above example, the maximum attribute is 1, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has 1 attribute. An XML document can have a minimum of 1 attribute and a maximum of 1000 attributes."),(0,r.kt)("h5",{id:"maximum-node-name"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Node Name")),(0,r.kt)("p",null,"This field specifies the maximum node name size of an XML document. In the above example, the maximum node name is 9, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<bookstore>")," length is 9. An XML document can have a minimum of 1 node name size and a maximum of 10000 node name size."),(0,r.kt)("h5",{id:"maximum-node-value"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Node Value")),(0,r.kt)("p",null,"This field specifies the maximum node value of the XML document. In the above example, the maximum node value is 12, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<title>")," has a value of Harry Potter of length 12. An XML document can have a minimum of 1 node value and a maximum of 1000000 node values."),(0,r.kt)("h5",{id:"maximum-attribute-name"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Attribute Name")),(0,r.kt)("p",null,"This field specifies the maximum attribute name size of an XML document. In the above example, the maximum attribute name is 8, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8. An XML document can have a minimum of 1 attribute name and a maximum of 10000 attribute names."),(0,r.kt)("h5",{id:"maximum-attribute-value"},(0,r.kt)("strong",{parentName:"h5"},"Maximum Attribute Value")),(0,r.kt)("p",null,"This field specifies the maximum attribute value size of the XML document. In the above example, the maximum attribute value is 8, Tag ",(0,r.kt)("inlineCode",{parentName:"p"},"<book>")," has an attribute category of length 8. An XML document can have a minimum of 1 attribute value and a maximum of 1000000 attribute value."))}s.isMDXComponent=!0},95666:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/profile_xmlpolicy-e2675b03a5b25767305a34b08ff9b503.png"}}]);