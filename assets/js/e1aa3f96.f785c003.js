"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6503],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=i.createContext({}),c=function(e){var t=i.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=c(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=n,u=p["".concat(d,".").concat(m)]||p[m]||f[m]||o;return r?i.createElement(u,a(a({ref:t},l),{},{components:r})):i.createElement(u,a({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9997:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var i=r(7462),n=(r(7294),r(3905));const o={},a=void 0,s={unversionedId:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/check_modified_files",id:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/check_modified_files",title:"check_modified_files",description:"checkmodifiedfiles() -> None",source:"@site/docs/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/check_modified_files.md",sourceDirName:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager",slug:"/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/check_modified_files",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/check_modified_files",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"FirstRunManager",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/first_run_manager/FirstRunManager"},next:{title:"get_snippets_to_delete",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/get_snippets_to_delete"}},d={},c=[{value:"<code>check_modified_files() -&gt; None</code>",id:"check_modified_files---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,i.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"check_modified_files---none"},(0,n.kt)("inlineCode",{parentName:"h2"},"check_modified_files() -> None")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method checks for modified files and is used for managing modified files. This method belongs to the class ",(0,n.kt)("inlineCode",{parentName:"p"},"ModifiedFilesManager"),"."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("p",null,"This method does not have any parameters."),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("p",null,"This method does not return any value."),(0,n.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,n.kt)("p",null,"This method does not throw any exceptions."),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\ncheck_modified_files()\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"This method calls the private method ",(0,n.kt)("inlineCode",{parentName:"p"},"_check_modified_files()")," of the ",(0,n.kt)("inlineCode",{parentName:"p"},"ModifiedFilesManager")," instance."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ModifiedFilesManager"),": This class manages modified files.")))}f.isMDXComponent=!0}}]);