"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[6371],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,s=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),k=p(n),d=r,m=k["".concat(s,".").concat(d)]||k[d]||c[d]||o;return n?a.createElement(m,l(l({ref:e},u),{},{components:n})):a.createElement(m,l({ref:e},u))}));function d(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},16070:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:1},l="Backup Policy",i={unversionedId:"hdplatform/stacks/stack_settings/backup_policy",id:"hdplatform/stacks/stack_settings/backup_policy",title:"Backup Policy",description:"Integration with FTP server for backing up and restoration",source:"@site/docs/hdplatform/stacks/stack_settings/backup_policy.md",sourceDirName:"hdplatform/stacks/stack_settings",slug:"/hdplatform/stacks/stack_settings/backup_policy",permalink:"/hdplatform/stacks/stack_settings/backup_policy",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Stack Settings",permalink:"/hdplatform/stacks/stack_settings/"},next:{title:"AAA Policy",permalink:"/hdplatform/stacks/stack_settings/aaa_policy"}},s={},p=[{value:"How to Use:",id:"how-to-use",level:3},{value:"Description:",id:"description",level:4}],u={toc:p};function c(t){let{components:e,...o}=t;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"backup-policy"},"Backup Policy"),(0,r.kt)("p",null,"Integration with FTP server for backing up and restoration"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Haltdos")," supports periodic or on-demand backup for storing logs and policies to external FTP / SFTP servers. The platform also supports restoring from FTP if needed."),(0,r.kt)("p",null,"By default, ",(0,r.kt)("strong",{parentName:"p"},"Haltdos")," retains logs locally on the device for a duration of 90 days. This duration can be increased to at most 550 days depending upon organization policy."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It is recommended to configure periodic backup to avoid data loss and ensure log availability for compliance and forensic examination.")),(0,r.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to ",(0,r.kt)("strong",{parentName:"li"},"Stack > Settings > Security > Backup Policy")),(0,r.kt)("li",{parentName:"ol"},"Configure your settings"),(0,r.kt)("li",{parentName:"ol"},"Click Save")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"backup_policy",src:n(49337).Z,width:"1254",height:"650"})),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETERS"),(0,r.kt)("th",{parentName:"tr",align:null},"ACCEPTED VALUES"),(0,r.kt)("th",{parentName:"tr",align:null},"DEFAULT"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Log Retention Period"),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"90")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backup Enabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backup Host Name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Use SFTP"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Authentication"),(0,r.kt)("td",{parentName:"tr",align:null},"Boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Username"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Password"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backup Directory"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Backup Now"),(0,r.kt)("td",{parentName:"tr",align:null},"Button"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Restore"),(0,r.kt)("td",{parentName:"tr",align:null},"Button"),(0,r.kt)("td",{parentName:"tr",align:null},"Blank")))),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Log Retention Period")),(0,r.kt)("p",null,"This policy allows users to set the retention period for backups. This policy refers to the number of days for which logs retain locally on the device."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Enabled")),(0,r.kt)("p",null,"This option allows users to enable or disable the backup settings."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Host Name")),(0,r.kt)("p",null,"This option allows users to specify the hostname or IP address of the backup server. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Use SFTP")),(0,r.kt)("p",null,"This option helps to choose if the user wants data transfer is over SFTP (Port 22), otherwise data will transfer using FTP (Port 21). Users can enable or disable the settings as per their chioce. By default, it is set to disable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Authentication")),(0,r.kt)("p",null,"This option allows users to set a user authentication method to access the backup server. By default, this is set to disable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Username")),(0,r.kt)("p",null,"Users can only use this option when Authentication is set to enable. This option allows users to set a username to authenticate the people"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Password")),(0,r.kt)("p",null,"This option allows users to set the desired password to authenticate the user. This option will only be available when authentication is set to enable."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Directory")),(0,r.kt)("p",null,"This option allows users to specify the directory on the backup server where they can use credential information to access the backup server."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Backup Now")),(0,r.kt)("p",null,"This option allows users to click on the button to back up the current configuration."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Restore")),(0,r.kt)("p",null,"This option Click on the button to restore the default configuration"))}c.isMDXComponent=!0},49337:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/backup_policy1-1c8ee5bf777a1e8a46057782278768ec.png"}}]);