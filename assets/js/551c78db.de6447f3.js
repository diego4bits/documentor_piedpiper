"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[354],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(n),m=a,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,s(s({ref:t},c),{},{components:n})):r.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1099:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const i={},s=void 0,o={unversionedId:"docs/src/documentation_orchestrator/added_files_manager/d_AddedFilesManager",id:"docs/src/documentation_orchestrator/added_files_manager/d_AddedFilesManager",title:"d_AddedFilesManager",description:"AddedFilesManager",source:"@site/docs/docs/src/documentation_orchestrator/added_files_manager/d_AddedFilesManager.md",sourceDirName:"docs/src/documentation_orchestrator/added_files_manager",slug:"/docs/src/documentation_orchestrator/added_files_manager/d_AddedFilesManager",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/d_AddedFilesManager",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"AddedFilesManager",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager"},next:{title:"d___init__",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d___init__"}},d={},l=[{value:"<code>AddedFilesManager</code>",id:"addedfilesmanager",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:l},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"addedfilesmanager"},(0,a.kt)("inlineCode",{parentName:"h2"},"AddedFilesManager")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This class represents a manager for added files. It provides functionalities for managing and processing added files in a repository."),(0,a.kt)("h4",{id:"attributes"},"Attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"instance")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ClassVar"),"): A class variable representing an instance of the class."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_added_file_scrapper")," (",(0,a.kt)("inlineCode",{parentName:"li"},"FileScrapper"),"): An instance of the 'FileScrapper' class, used for scraping files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_snippets_to_doc")," (",(0,a.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),"): An instance of the 'SnippetStorage' class, used for storing snippets.")),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case of instantiating and using the class\ninstance = AddedFilesManager()\n# The rest of the example\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The 'AddedFilesManager' class is responsible for managing and processing added files in a repository. It utilizes the 'FileScrapper' class for scraping files and the 'SnippetStorage' class for storing snippets. The class provides various methods to handle added files, such as filtering, processing, and documenting them."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FileScrapper"),": This class is used for scraping files."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": This class is used for storing snippets.")))}u.isMDXComponent=!0}}]);