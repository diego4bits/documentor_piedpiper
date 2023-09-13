"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>_});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),l=p(n),m=a,_=l["".concat(d,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(_,i(i({ref:t},c),{},{components:n})):r.createElement(_,i({ref:t},c))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d_get_snippets_to_doc",id:"docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d_get_snippets_to_doc",title:"d_get_snippets_to_doc",description:"getsnippetsto_doc() -> SnippetStorage",source:"@site/docs/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d_get_snippets_to_doc.md",sourceDirName:"docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager",slug:"/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d_get_snippets_to_doc",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d_get_snippets_to_doc",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_check_added_files",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d_check_added_files"},next:{title:"get_snippets_to_doc",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/get_snippets_to_doc"}},d={},p=[{value:"<code>get_snippets_to_doc() -&gt; SnippetStorage</code>",id:"get_snippets_to_doc---snippetstorage",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:p},l="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"get_snippets_to_doc---snippetstorage"},(0,a.kt)("inlineCode",{parentName:"h2"},"get_snippets_to_doc() -> SnippetStorage")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This method returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"_snippets_to_doc")," attribute of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddedFilesManager")," class. It is used to retrieve the ",(0,a.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," object that contains all the snippets to be documented. This method belongs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddedFilesManager")," class."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("p",null,"This method does not take any parameters."),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": The ",(0,a.kt)("inlineCode",{parentName:"li"},"SnippetStorage")," object that contains all the snippets to be documented.")),(0,a.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,a.kt)("p",null,"This method does not throw any exceptions."),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nsnippets = AddedFilesManager.get_snippets_to_doc()\nprint(snippets)\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The method simply returns the ",(0,a.kt)("inlineCode",{parentName:"p"},"_snippets_to_doc")," attribute of the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddedFilesManager")," class, which is an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," class. This attribute is updated by other methods in the ",(0,a.kt)("inlineCode",{parentName:"p"},"AddedFilesManager")," class."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AddedFilesManager"),": The class to which this method belongs."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": The class that represents the storage for snippets.")))}u.isMDXComponent=!0}}]);