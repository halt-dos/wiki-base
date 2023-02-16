"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[46186],{3905:(A,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>p});var n=t(67294);function i(A,e,t){return e in A?Object.defineProperty(A,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):A[e]=t,A}function r(A,e){var t=Object.keys(A);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(A);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(A,e).enumerable}))),t.push.apply(t,n)}return t}function a(A){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){i(A,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(A,e,Object.getOwnPropertyDescriptor(t,e))}))}return A}function o(A,e){if(null==A)return{};var t,n,i=function(A,e){if(null==A)return{};var t,n,i={},r=Object.keys(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||(i[t]=A[t]);return i}(A,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(A);for(n=0;n<r.length;n++)t=r[n],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(A,t)&&(i[t]=A[t])}return i}var s=n.createContext({}),c=function(A){var e=n.useContext(s),t=e;return A&&(t="function"==typeof A?A(e):a(a({},e),A)),t},l=function(A){var e=c(A.components);return n.createElement(s.Provider,{value:e},A.children)},u={inlineCode:"code",wrapper:function(A){var e=A.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(A,e){var t=A.components,i=A.mdxType,r=A.originalType,s=A.parentName,l=o(A,["components","mdxType","originalType","parentName"]),g=c(t),p=i,f=g["".concat(s,".").concat(p)]||g[p]||u[p]||r;return t?n.createElement(f,a(a({ref:e},l),{},{components:t})):n.createElement(f,a({ref:e},l))}));function p(A,e){var t=arguments,i=e&&e.mdxType;if("string"==typeof A||i){var r=t.length,a=new Array(r);a[0]=g;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=A,o.mdxType="string"==typeof A?A:i,a[1]=o;for(var c=2;c<r;c++)a[c]=t[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},70703:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var n=t(87462),i=(t(67294),t(3905));const r={sidebar_position:8},a="Virtual Machines",o={unversionedId:"products/platform/stacks/instance/virtual_machines",id:"version-6.0/products/platform/stacks/instance/virtual_machines",title:"Virtual Machines",description:"Built on proprietary hypervisor technology",source:"@site/versioned_docs/version-6.0/products/platform/stacks/instance/virtual_machines.md",sourceDirName:"products/platform/stacks/instance",slug:"/products/platform/stacks/instance/virtual_machines",permalink:"/v6/products/platform/stacks/instance/virtual_machines",draft:!1,tags:[],version:"6.0",sidebarPosition:8,frontMatter:{sidebar_position:8},sidebar:"sidebar",previous:{title:"DHCP Settings",permalink:"/v6/products/platform/stacks/instance/dhcp_settings"},next:{title:"Integrations",permalink:"/v6/products/platform/stacks/integrations/"}},s={},c=[{value:"How to Use:",id:"how-to-use",level:3},{value:"VM Management",id:"vm-management",level:3}],l={toc:c};function u(A){let{components:e,...r}=A;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"virtual-machines"},"Virtual Machines"),(0,i.kt)("p",null,"Built on proprietary hypervisor technology"),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Haltdos ADC leverages proprietary hypervisor technology to provide virtual instances (VM) that can run independently of other VMs. Virtualization provides ability for organizations to support multi-tenancy and extend Haltdos hardware to support multiple self-contained applications behind different virtual instances. The host hardware machine along with virtual instances can be used to run various apps (WAF, SLB, ADC, DDOS, GSLB, etc.) depending upon your configured license. "),(0,i.kt)("p",null,"Haltdos leverages the use of SR-IOV and fast path technology to optimize traffic to and from virtual instance to ethernet NICs. The number of virtual instances that can be created depends on hardware capacity and configured license. Multiple virtual instances can be grouped together in a virtual stack that can be managed by different administrators. "),(0,i.kt)("p",null,"Virtual Instances can be resized based to increase / decrease CPU, RAM & Hard Disk. Haltdos provides pre-built images supporting different Operating Systems (OS) and versions. You can manage your OS templates from Haltdos console (see VM Templates) ."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"virtual_machines",src:t(49106).Z,width:"1280",height:"340"})),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The resources allocated to each virtual instance is dedicated to the virtual instance and cannot be leveraged by another virtual instance. This is done to ensure complete isolation of virtual instances.")),(0,i.kt)("h3",{id:"how-to-use"},"How to Use:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"virtual_machines",src:t(33571).Z,width:"542",height:"613"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to Stack > Instances > (Select Instance) > Virtual Machines"),(0,i.kt)("li",{parentName:"ol"},"Click Add"),(0,i.kt)("li",{parentName:"ol"},"Configure CPU, RAM, OS Template, and Virtual Stack"),(0,i.kt)("li",{parentName:"ol"},"Click Save")),(0,i.kt)("h3",{id:"vm-management"},"VM Management"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Resizing VM")),(0,i.kt)("p",null,"Once created, you can reconfigure the VM by stopping the VM and resizing the CPU, RAM and Hard Disk as per physical availability on the host machine."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Stopping & Rebooting VM")),(0,i.kt)("p",null,"The VM can be stopped and rebooted from the GUI / CLI. Do note, changing the state of an actively serving virtual instance may result in downtime. However, changing the state of one virtual instance will not have any effect on other running virtual instance."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Deleting VM")),(0,i.kt)("p",null,"The VM can also be deleted if necessary. Do note, deleting an actively serving virtual instance may result in downtime. However, deleting one virtual instance will not have any effect on other running virtual instance."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"After crearting a VM under this option user can go to stack page and add a virtual stack by clicking on add stack option.")))}u.isMDXComponent=!0},49106:(A,e,t)=>{t.d(e,{Z:()=>n});const n="data:image/png;base64,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"},33571:(A,e,t)=>{t.d(e,{Z:()=>n});const n=t.p+"assets/images/virtual_machines2-940f29287b951543d9790d6087f829fd.png"}}]);