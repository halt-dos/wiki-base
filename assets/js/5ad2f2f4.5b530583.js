"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[5194],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(r),f=o,d=m["".concat(l,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},c),{},{components:r})):n.createElement(d,a({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},73116:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var n=r(87462),o=(r(67294),r(3905));const i={sidebar_position:6},a="Rules",s={unversionedId:"waf/docs/listener/profiles/rules/rules",id:"waf/docs/listener/profiles/rules/rules",title:"Rules",description:"Configure custom rules for your website",source:"@site/docs/waf/docs/listener/profiles/rules/rules.md",sourceDirName:"waf/docs/listener/profiles/rules",slug:"/waf/docs/listener/profiles/rules/",permalink:"/wiki/waf/docs/listener/profiles/rules/",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"wafSidebar",previous:{title:"XML Policy",permalink:"/wiki/waf/docs/listener/profiles/policy/xml_policy"},next:{title:"Error Rules",permalink:"/wiki/waf/docs/listener/profiles/rules/error_rules"}},l={},u=[{value:"Configure custom rules for your website",id:"configure-custom-rules-for-your-website",level:3}],c={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rules"},"Rules"),(0,o.kt)("h3",{id:"configure-custom-rules-for-your-website"},"Configure custom rules for your website"),(0,o.kt)("p",null,"Haltdos WAF comes with a pre-configured, platform-managed rule set that offers protection from many different types of attacks. These attacks include cross-site scripting, SQL injection, and others. With these managed rules, you can quickly get started and protect your web application or APIs against common threats like the OWASP Top 10 security risks, threats specific to Content Management Systems (CMS) like WordPress or Joomla, or even emerging Common Vulnerabilities and Exposures (CVE).\nHowever, there are instances where you might want to write your own rules to augment platform-managed ruleset rules. With custom rules, you can create your own rules, which are evaluated for each request that passes through WAF. These rules hold a higher priority than the rest of the rules in the managed rule sets. The custom rules contain a rule name, a rule priority, and an array of matching conditions. If these conditions are met, the specified action will be taken on the request."),(0,o.kt)("p",null,"Custom rules support using compounding logic to make more advanced rules that address your security needs. For example, \"Condition 1 and Condition 2 or Condition 3\" means that if Condition 1 and Condition 2 are met, or if Condition 3 is met, WAF should take the action that's specified in the custom rule. Different matching conditions within the same rule are always compounded by using 'and'. For example, a rule that uses 'and' might specify to block traffic from a certain IP address, and only if a certain browser is being used."),(0,o.kt)("p",null,"Unlike other WAFs, Haltdos WAF has multiple types of Rules designed to target specific use cases."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Error Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Form Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Firewall Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Rate Limit Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Whitelist Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Response Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Behavior Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Tamper Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Correlation Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Deception Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Script Rules")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Log Rules"))))}p.isMDXComponent=!0}}]);