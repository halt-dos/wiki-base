"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[76921],{3905:(e,t,a)=>{a.d(t,{Zo:()=>k,kt:()=>f});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},k=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,k=l(e,["components","mdxType","originalType","parentName"]),m=p(a),f=o,c=m["".concat(s,".").concat(f)]||m[f]||h[f]||i;return a?r.createElement(c,n(n({ref:t},k),{},{components:a})):r.createElement(c,n({ref:t},k))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,n[1]=l;for(var p=2;p<i;p++)n[p]=a[p];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68908:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=a(87462),o=(a(67294),a(3905));const i={sidebar_position:0},n="WAF",l={unversionedId:"kb/waf/waf",id:"version-6.0/kb/waf/waf",title:"WAF",description:"This section describes the knowledge base of how to use Haltdos WAF to adequately protect Web & API applications.",source:"@site/versioned_docs/version-6.0/kb/waf/waf.md",sourceDirName:"kb/waf",slug:"/kb/waf/",permalink:"/v6/kb/waf/",draft:!1,tags:[],version:"6.0",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"kb_sidebar",previous:{title:"KB: 3011",permalink:"/v6/kb/platform/kb-3011"},next:{title:"KB: 1001",permalink:"/v6/kb/waf/kb-1001"}},s={},p=[],k={toc:p};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},k,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"waf"},"WAF"),(0,o.kt)("p",null,"This section describes the knowledge base of how to use Haltdos WAF to adequately protect Web & API applications.  "),(0,o.kt)("p",null,"Some of the WAF use cases are mentioned below:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"configuring-http-redirection"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1001"},"Configuring HTTP Redirection"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"configure-machine-learning-for-0-day-protection"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1002"},"Configure Machine Learning for 0-day protection"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-add-custom-headers-for-origin-servers-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1003"},"How to add custom headers for origin servers ?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"sending-custom-header-or-cookies-to-the-client"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1004"},"Sending custom header or cookies to the client"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"configuring-multiple-security-profiles-for-complex-applications"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1005"},"Configuring multiple security profiles for complex applications"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"adding-health-monitoring-on-backend-servers"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1006"},"Adding Health monitoring on backend servers"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"selecting-appropriate-server-group-based-on-the-incoming-request"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1007"},"Selecting appropriate Server Group based on the incoming request"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"configuring-secure-file-upload"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1008"},"Configuring secure File upload"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"configuring-passwords-by-enabling-organization-specific-password-policy"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1009"},"Configuring passwords by enabling organization-specific password policy."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"configuring-av-scanner-for-an-application-behind-waf"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1010"},"Configuring AV Scanner for an application behind WAF"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"masking-login-credentials-like-passwords"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1011"},"Masking login credentials like passwords"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"preemptive-bot-protection-by-waf"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1012"},"Preemptive bot protection by WAF"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"securing-websites-from-brute-force-attack"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1013"},"Securing websites from brute force attack"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-enable-ipv6-support-in-the-listener"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1014"},"How to enable IPv6 support in the listener."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-custom-html-error-page-received-from-haltdos-web-application-firewall"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1015"},"How to configure custom HTML error page received from Haltdos Web Application Firewall."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-do-i-configure-a-syslog-server-on-haltdos-waf"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1016"},"How do I configure a Syslog server on Haltdos WAF?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-check-incident-details-in-haltdos-waf-plateform"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1017"},"How to check Incident details in Haltdos WAF plateform?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-change-web-application-firewall-mode-in-between-record-bypass--mitigation-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1018"},"How to change Web Application Firewall mode in between Record, Bypass & Mitigation? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-can-user-restrict-the-file-upload-of-any-particular-file-extension-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1019"},"How can user restrict the file upload of any particular file extension? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-add-custom-listener-ports-post-creating-the-listner"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1020"},"How to add custom listener ports post creating the listner?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-allow-access-to-only-few-ips-for-backend-web-application-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1021"},"How to allow access to only few IPs for backend web application? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-change-temperory-blacklist-duration-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1022"},"How to change temperory blacklist duration? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-change-load-balancing-algorithem-for-any-server-group"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1023"},"How to change load balancing algorithem for any server group?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-add-a-new-server-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1024"},"How to add a new server? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-createadd-a-new-server-group-in-a-listener-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1025"},"How to create/add a new server group in a listener? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-mark-any-server-as-down-true-soft-down-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1026"},"How to mark any server as down true (soft down)? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-mark-any-server-as-backup-server-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1027"},"How to mark any server as backup server? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-upload-ssl-certificate-and-use-them-for-a-web-application-listener"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1028"},"How to upload SSL certificate and use them for a web application (listener)?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-add-a-custom-security-profile-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1029"},"How to add a custom security profile? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-mitigate-bad-reputation-traffic-with-haltdos-waf-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1030"},"How to mitigate bad reputation traffic with Haltdos WAF? "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-whitelist-any-ip-or-ip-segment-for-a-listener"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1031"},"How to whitelist any IP or IP segment for a listener?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"modifying-default-signature-status"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1032"},"Modifying default signature status."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-json-policies"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1033"},"How to configure JSON policies?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-the-allowed-http-methods"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1034"},"How to configure the allowed HTTP methods?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-bot-protection-settings-in-order-to-ensure-protection-from-reconnaissance-and-scraping-activities"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1035"},"How to configure bot protection settings in order to ensure protection from reconnaissance and scraping activities?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-blacklist-and-whitelist-ip-addresses"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1036"},"How to configure Blacklist and Whitelist IP addresses?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-allowblock-and-add-suspicious-crawlers"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1037"},"How to allow/block and add suspicious crawlers?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-rate-limit-the-end-user-requests"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1038"},"How to rate limit the end user requests?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-web-extensions-and-restricted-extensions-and-validation"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1039"},"How to configure web extensions and restricted extensions and validation?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"mitigating-xss-attack"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1040"},"Mitigating XSS attack"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"mitigating-sql-injection-attack"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1041"},"Mitigating SQL injection attack"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-do-user-set-maximum-http-body-and-header-size-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1042"},"How do user set maximum HTTP body and header size ?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-setchange-the-keep-alive-timeout-for-server-and-client"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1043"},"How to set/change the keep-alive timeout for server and client?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"condition-based-redirection"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1044"},"Condition based redirection."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-set-maximum-allowed-bot-request-rate-from-a-single-client-ip"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1045"},"How to set maximum allowed Bot request rate from a single client IP?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-set-mitigation-for-pathdirectory-traversal-attack"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1046"},"How to set mitigation for Path/Directory traversal attack?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-set-mitigation-for-os-command-injection"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1047"},"How to set mitigation for OS command Injection?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-add-client-certificates"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1048"},"How to add client certificates?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-add-a-listener"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1049"},"How to add a listener?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-a-user-extract-or-set-a-custom-variable-by-using-variable-rules-in-haltdos-waf"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1050"},"How a user extract or set a custom variable by using Variable Rules in Haltdos WAF?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-make-form-rule-to-offers-a-positive-security-model-for-application-firewall-"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1051"},"How to make form rule to offers a positive security model for Application Firewall ?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-make-firewall-rules-that-allow-client-to-create-custom-security-rules-as-per-application-logic"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1052"},"How to make Firewall rules that allow client to create custom security rules as per application logic?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-the-rate-limit-rule-restrict-over-usage-of-client-application-by-throttling-requests-on-matching-users"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1053"},"How the rate limit rule restrict over-usage of client application by throttling requests on matching users?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-whitelist-rule-allows-to-add-exceptions-on-existing-rules-custom-and-managed"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1054"},"How Whitelist rule allows to add exceptions on existing rules (custom and managed)?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-create-a-response-rule-to-filter-responses-from-applications-and-prevent-sensitive-data-leaks"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1055"},"How to create a response rule to filter responses from applications and prevent sensitive data leaks?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-ntp-through-haltdos-solution"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1056"},"How to configure NTP through Haltdos Solution?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-mask-sensitive-data-content-like-ccnssn"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1057"},"How to mask sensitive data content like CCN/SSN?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-prevent-sites-from-xml-bomb-attack"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1058"},"How to prevent sites from XML Bomb attack?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-prevent-cross-site-request-forgery-through-haltdos-waf"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1059"},"How to prevent Cross-site Request Forgery through Haltdos WAF?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-configure-tls-and-ssl-versions-from-haltdos-console"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1060"},"How to configure TLS and SSL versions from Haltdos console?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-prevent-sites-from-json-injection"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1061"},"How to prevent sites from JSON injection?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-achieve-better-performance-through-haltdos-waf"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1062"},"How to achieve better performance through Haltdos WAF?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-waf-mitigate-rce-attacks"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1063"},"How WAF mitigate RCE attacks?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-whitelist-request-based-on-particular-pattern"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1064"},"How to whitelist request based on particular pattern?"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("h4",{parentName:"li",id:"how-to-set-rule-staging-from-haltdos-console-for-managing-signatures"},(0,o.kt)("a",{parentName:"h4",href:"/v6/kb/waf/kb-1065"},"How to set rule staging from Haltdos console for managing Signatures?")))))}h.isMDXComponent=!0}}]);