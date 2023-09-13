"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9752:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={},i=void 0,s={unversionedId:"docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d_update_doc_log",id:"docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d_update_doc_log",title:"d_update_doc_log",description:"updatedoclog() -> None",source:"@site/docs/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d_update_doc_log.md",sourceDirName:"docs/src/documentation_orchestrator/documentation_manager/DocumentationManager",slug:"/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d_update_doc_log",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d_update_doc_log",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_start_documentation",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d_start_documentation"},next:{title:"get_snippets_to_delete",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/get_snippets_to_delete"}},l={},c=[{value:"<code>update_doc_log() -&gt; None</code>",id:"update_doc_log---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"update_doc_log---none"},(0,o.kt)("inlineCode",{parentName:"h2"},"update_doc_log() -> None")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method updates the document log with the snippets that need to be documented and the snippets that need to be deleted. This method belongs to the class DocumentationManager."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not have any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("p",null,"This method does not return anything."),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not throw any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Updating the document log\nupdate_doc_log()\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"update_doc_log()")," method retrieves the snippets that need to be documented and the snippets that need to be deleted from the DocumentationManager instance. It then calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"update_doc_log()")," method of the DocLog class, passing the snippets to be documented and deleted as arguments."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DocumentationManager"),": This class is responsible for managing the documentation process."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DocLog"),": This class is responsible for updating the document log."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": This class is responsible for storing and retrieving snippets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GitFileChecker"),": This class is responsible for checking the status of git files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GitManager"),": This class is responsible for managing git operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ModifiedFilesManager"),": This class is responsible for managing modified files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"AddedFilesManager"),": This class is responsible for managing added files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FirstRunManager"),": This class is responsible for managing the first run of the application."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SingletonMeta"),": This metaclass is responsible for creating singleton instances of classes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"List"),": This class represents a list of elements."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ClassVar"),": This class represents a class variable."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Path"),": This class represents a file or directory path.")))}u.isMDXComponent=!0}}]);