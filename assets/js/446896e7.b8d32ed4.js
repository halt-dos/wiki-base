"use strict";(self.webpackChunkwiki_base=self.webpackChunkwiki_base||[]).push([[9828],{3905:(A,I,g)=>{g.d(I,{Zo:()=>Q,kt:()=>E});var C=g(67294);function e(A,I,g){return I in A?Object.defineProperty(A,I,{value:g,enumerable:!0,configurable:!0,writable:!0}):A[I]=g,A}function t(A,I){var g=Object.keys(A);if(Object.getOwnPropertySymbols){var C=Object.getOwnPropertySymbols(A);I&&(C=C.filter((function(I){return Object.getOwnPropertyDescriptor(A,I).enumerable}))),g.push.apply(g,C)}return g}function i(A){for(var I=1;I<arguments.length;I++){var g=null!=arguments[I]?arguments[I]:{};I%2?t(Object(g),!0).forEach((function(I){e(A,I,g[I])})):Object.getOwnPropertyDescriptors?Object.defineProperties(A,Object.getOwnPropertyDescriptors(g)):t(Object(g)).forEach((function(I){Object.defineProperty(A,I,Object.getOwnPropertyDescriptor(g,I))}))}return A}function n(A,I){if(null==A)return{};var g,C,e=function(A,I){if(null==A)return{};var g,C,e={},t=Object.keys(A);for(C=0;C<t.length;C++)g=t[C],I.indexOf(g)>=0||(e[g]=A[g]);return e}(A,I);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(A);for(C=0;C<t.length;C++)g=t[C],I.indexOf(g)>=0||Object.prototype.propertyIsEnumerable.call(A,g)&&(e[g]=A[g])}return e}var r=C.createContext({}),D=function(A){var I=C.useContext(r),g=I;return A&&(g="function"==typeof A?A(I):i(i({},I),A)),g},Q=function(A){var I=D(A.components);return C.createElement(r.Provider,{value:I},A.children)},w={inlineCode:"code",wrapper:function(A){var I=A.children;return C.createElement(C.Fragment,{},I)}},a=C.forwardRef((function(A,I){var g=A.components,e=A.mdxType,t=A.originalType,r=A.parentName,Q=n(A,["components","mdxType","originalType","parentName"]),a=D(g),E=e,o=a["".concat(r,".").concat(E)]||a[E]||w[E]||t;return g?C.createElement(o,i(i({ref:I},Q),{},{components:g})):C.createElement(o,i({ref:I},Q))}));function E(A,I){var g=arguments,e=I&&I.mdxType;if("string"==typeof A||e){var t=g.length,i=new Array(t);i[0]=a;var n={};for(var r in I)hasOwnProperty.call(I,r)&&(n[r]=I[r]);n.originalType=A,n.mdxType="string"==typeof A?A:e,i[1]=n;for(var D=2;D<t;D++)i[D]=g[D];return C.createElement.apply(null,i)}return C.createElement.apply(null,g)}a.displayName="MDXCreateElement"},21843:(A,I,g)=>{g.r(I),g.d(I,{assets:()=>r,contentTitle:()=>i,default:()=>w,frontMatter:()=>t,metadata:()=>n,toc:()=>D});var C=g(87462),e=(g(67294),g(3905));const t={sidebar_position:52},i="KB: 1052",n={unversionedId:"kb/waf/kb-1052",id:"kb/waf/kb-1052",title:"KB: 1052",description:"Problem Statement",source:"@site/docs/kb/waf/kb-1052.md",sourceDirName:"kb/waf",slug:"/kb/waf/kb-1052",permalink:"/kb/waf/kb-1052",draft:!1,tags:[],version:"current",sidebarPosition:52,frontMatter:{sidebar_position:52},sidebar:"kb_sidebar",previous:{title:"KB: 1051",permalink:"/kb/waf/kb-1051"},next:{title:"KB: 1053",permalink:"/kb/waf/kb-1053"}},r={},D=[],Q={toc:D};function w(A){let{components:I,...t}=A;return(0,e.kt)("wrapper",(0,C.Z)({},Q,t,{components:I,mdxType:"MDXLayout"}),(0,e.kt)("h1",{id:"kb-1052"},"KB: 1052"),(0,e.kt)("h1",{id:"how-to-make-firewall-rules-that-allow-client-to-create-custom-security-rules-as-per-application-logic"},"How to make Firewall rules that allow client to create custom security rules as per application logic?"),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Problem Statement")),(0,e.kt)("p",null,"Client want to set up regulations on a particular domain. When a request is made to that domain, the WAF checks for the violation of a rule and carries out the appropriate action that is configured by the User."),(0,e.kt)("p",null,(0,e.kt)("strong",{parentName:"p"},"Solution")),(0,e.kt)("p",null,"The user can make use of Haltdos WAF form rule features."),(0,e.kt)("p",null,"1.First, log into the haltdos management console."),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"kb-1052",src:g(66425).Z,width:"1822",height:"607"})),(0,e.kt)("p",null,"2.Go to ",(0,e.kt)("strong",{parentName:"p"},"Stacks")," > ",(0,e.kt)("strong",{parentName:"p"},"WAF")," > ",(0,e.kt)("strong",{parentName:"p"},"Listener")," > ",(0,e.kt)("strong",{parentName:"p"},"Profile")," > ",(0,e.kt)("strong",{parentName:"p"},"Profile default setting")," > ",(0,e.kt)("strong",{parentName:"p"},"Profile Rule")," > ",(0,e.kt)("strong",{parentName:"p"},"Firewall Rule")," > ",(0,e.kt)("strong",{parentName:"p"},"Add Rule")," > ",(0,e.kt)("strong",{parentName:"p"},"Save changes")),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"kb-1052",src:g(66425).Z,width:"1822",height:"607"})),(0,e.kt)("p",null,"3.Below picture is showing that listener is working fine as per configuring rule details."),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"kb-1052",src:g(47299).Z,width:"1843",height:"947"})),(0,e.kt)("p",null,"4.Add rule condition and save the configuration in firewall rule to the violation of a rule and carries out the appropriate action that is configured by the User."),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"kb-1052",src:g(65892).Z,width:"1839",height:"698"})),(0,e.kt)("p",null,"5.Open listener in the browser and open /index.php page for our default server to show you that wether it is violating the condition or not.If the condition is matched than it will show you custome error page."),(0,e.kt)("p",null,(0,e.kt)("img",{alt:"kb-1052",src:g(89604).Z,width:"1017",height:"791"})),(0,e.kt)("p",null,"Above picture is showing custome error page when the condition is getting matched."))}w.isMDXComponent=!0},89604:(A,I,g)=>{g.d(I,{Z:()=>C});const C="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA/kAAAMXCAYAAABhC5X+AAAAiXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjaVY7LCcBACETvVpES/K2u5YSQhXSQ8uN+YMk7jKPIKNzv0+DoECpo8WphhomGBp9pKk4EkRip19TJqkLpONvVg/A0FtVR96Iq/ihi1ZqruxW77OJM51tkKAnC2Oph/ZXYQS3GH3n6Pydf8wV8/oktIJ8Z4BcAAAoIaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+CiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIKICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICBleGlmOlBpeGVsWERpbWVuc2lvbj0iMTAxNyIKICAgZXhpZjpQaXhlbFlEaW1lbnNpb249Ijc5MSIKICAgdGlmZjpJbWFnZVdpZHRoPSIxMDE3IgogICB0aWZmOkltYWdlSGVpZ2h0PSI3OTEiCiAgIHRpZmY6T3JpZW50YXRpb249IjEiLz4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PsC/K0cAAAAEc0JJVAgICAh8CGSIAAAS/0lEQVR42u3dT4iUdQDH4e+4E42wqIsHyUMqbmDZIbEg2cJLBzMoySBBhIywJCKTVswgAltDhYqKMhDqUERilyLNpQLXTFJxoTBRizJwSVpwBdnxX/w6tJQH2cWZTVSeB+aw82X28GMvn5135q3U6/USAAAA4JpX3b9/v1MAAACA60CllOKdfAAAALgOjHEEAAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACL/ks4f+iQvPb44Cx9cmLV7/3JqAAAAcBWqjlz4P+S1JevT986+fJq38+KAQwMAAIBrM/KP7shnv0zKoiljkknPpsuZAQAAwFVp5Mv1+0+mrzLSvwPOpP+bTXl9R5/9f9kBAABgZMOm++k9m7J24+f54/Sf2bz0kXw97u4890Fn5p4/nC2rns+7x8elvXYqP/UeyHcTH8vOL2/654V1e1M7AAAAjHbkt855Kus7f8+W3b154v2teWZiJUlysGtpHj28IEe7V6U9ycHVc3L7zlraakP7BnszOwAAADTi8m+hV05k97eHkpmz0j701K2zZiRHevP92WJvdgcAAIArFvlJatVKcvGd9C6cTaq1jG2p2EdhBwAAgCsT+ZVJ6bjvjmTXtvScLklO5YuvDiQPPJz5NXvTOwAAADSoUkoZ/hrxnjWZtqA3K49u+/cz+anvzcvzl2dn24y0tybnb74/T69enLta7aOyAwAAQAOql/+SU9nVuSxvtS7Mm0tmp23oN5w7NpDMbLM3vQMAAECDynCObC+vLrqz3HjD1HLvsjVl3fafSyml9G9dUWaPr5QkFz3Gl6ld+8qgvekdAAAAGjH8Z/JvmZfVH+/LmXO/pue9rrwwb3qS5GT/yUxedySllKFHPT++Miu/ffhR9l6wN7sDAABAIy7/cv3B7mzsOpZ79ky/6MlabpsxLWlJqnV7MzsAAAA0qqFb6KVlIMdP1P/7uX44mzfvypQli9PRYm9mn1v1RwkAAEBjRv52/Uvo716fFW/0ZHDChIzNmQwMJJMfWpkNT3akzd70DgAAAFcs8gEAAICrzxhHAAAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAABEPgAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAABEPgAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAACIfAAAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAABEPgAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAACIfAAAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAABEPgAAACDyAQAAAJEPAAAAiHwAAAAQ+QAAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAACIfAAAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAABEPgAAACDyAQAAAJEPAAAAiHwAAAAQ+QAAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAiHwAAABD5AAAAgMgHAAAARD4AAACIfAAAAEDkAwAAACIfAAAAEPkAAAAg8gEAAACRDwAAAIh8AAAAQOQDAAAAIh8AAABEPgAAACDyAQAAAJEPAAAAiHwAAAAQ+QAAAIDIBwAAAEQ+AAAAIPIBAABA5DsCAAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAABD5AAAAgMgHAAAARD4AAAAg8gEAAEDkAwAAACIfAAAAEPkAAACAyAcAAACRDwAAAIh8AAAAQOQDAAAAIh8AAAAQ+QAAACDyAQAAAJEPAAAAiHwAAABA5AMAAIDIBwAAAEQ+AAAAIPIBAAAAkQ8AAAAi3xEAAACAyAcAAABEPgAAACDyAQAAAJEPAAAAIh8AAAAQ+QAAAIDIBwAAAEQ+AAAAiHwAAABA5AMAAAAiHwAAABD5AAAAgMgHAAAAkQ8AAACIfAAAAEDkAwAAACIfAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAAJEPAAAAIh8AAAAQ+QAAAIDIBwAAAEQ+AAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAACIfAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAAJEPAAAAIh8AAAAQ+QAAAIDIBwAAAEQ+AAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAACIfAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAEQ+AAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAACIfAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAEQ+AAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAEQ+AAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAAIh8AAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAABD5AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAACDyAQAAQOQDAAAAIh8AAAAQ+QAAAIDIBwAAAJEPAAAAiHwAAABA5AMAAAAiHwAAAEQ+AAAAIPIBAAAAkQ8AAACIfAAAAEDkAwAAgMgHAAAARD4AAAAg8gEAAACRDwAAACIfAAAAEPkAAACAyAcAAABEPgAAAIh8AAAA4Br3N/Hu2RMPqpluAAAAAElFTkSuQmCC"},47299:(A,I,g)=>{g.d(I,{Z:()=>C});const C=g.p+"assets/images/firewall-0c75c31f4106feb166fce3cf7f6c8abd.png"},65892:(A,I,g)=>{g.d(I,{Z:()=>C});const C=g.p+"assets/images/firewallrule-e53abed602362bf6dd4f4b467bfd2a95.png"},66425:(A,I,g)=>{g.d(I,{Z:()=>C});const C=g.p+"assets/images/professionalconsole-00c4f5a00bd2b755e31bcab3d1a4de71.png"}}]);