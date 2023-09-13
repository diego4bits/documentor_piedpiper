"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2545],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(7294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(o),u=i,g=c["".concat(p,".").concat(u)]||c[u]||m[u]||a;return o?n.createElement(g,r(r({ref:t},d),{},{components:o})):n.createElement(g,r({ref:t},d))}));function g(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<a;s++)r[s]=o[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},8722:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=o(7462),i=(o(7294),o(3905));const a={},r=void 0,l={unversionedId:"docs/src/doc_log/doc_log/DocLog/d_update_doc_log",id:"docs/src/doc_log/doc_log/DocLog/d_update_doc_log",title:"d_update_doc_log",description:"updatedoclog(snippetstodoc SnippetStorage) -> None",source:"@site/docs/docs/src/doc_log/doc_log/DocLog/d_update_doc_log.md",sourceDirName:"docs/src/doc_log/doc_log/DocLog",slug:"/docs/src/doc_log/doc_log/DocLog/d_update_doc_log",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/DocLog/d_update_doc_log",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_get_doc_log_path",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/DocLog/d_get_doc_log_path"},next:{title:"exists_doc_log",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/DocLog/exists_doc_log"}},p={},s=[{value:"<code>update_doc_log(snippets_to_doc: SnippetStorage, snippets_to_delete: SnippetStorage) -&gt; None</code>",id:"update_doc_logsnippets_to_doc-snippetstorage-snippets_to_delete-snippetstorage---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:s},c="wrapper";function m(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"update_doc_logsnippets_to_doc-snippetstorage-snippets_to_delete-snippetstorage---none"},(0,i.kt)("inlineCode",{parentName:"h2"},"update_doc_log(snippets_to_doc: SnippetStorage, snippets_to_delete: SnippetStorage) -> None")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method performs the update of the document log by adding new information about the head commit hash, the number of snippets to document, and the number of snippets to delete. It belongs to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"DocLog")," and is used to keep track of the changes made to the document log."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snippets_to_doc")," (",(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),"): The storage object containing the snippets to be documented."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"snippets_to_delete")," (",(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),"): The storage object containing the snippets to be deleted.")),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return any value.")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nupdate_doc_log(snippets_to_doc, snippets_to_delete)\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The method first calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"create_doc_log()")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DocLog")," class to create the document log if it does not exist. It then retrieves the number of snippets to document and the number of snippets to delete by getting the length of the ",(0,i.kt)("inlineCode",{parentName:"p"},"snippets_to_doc")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"snippets_to_delete")," storage objects respectively."),(0,i.kt)("p",null,"Next, it retrieves the short ID of the head commit using the ",(0,i.kt)("inlineCode",{parentName:"p"},"head_commit()")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GitManager")," class. It then constructs a new log message by formatting the commit hash, number of snippets to document, and number of snippets to delete."),(0,i.kt)("p",null,"After that, it gets the path of the document log file using the ",(0,i.kt)("inlineCode",{parentName:"p"},"get_doc_log_path()")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"DocLog")," class. It reads the original content of the document log file and prepends the new log message to it."),(0,i.kt)("p",null,"Finally, it writes the updated log message to the document log file."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": A storage object used to store and manage snippets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DocLog"),": The class that contains the ",(0,i.kt)("inlineCode",{parentName:"li"},"update_doc_log()")," method."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GitManager"),": The class that provides methods for managing Git repositories."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dedent")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"textwrap"),": A function that removes leading whitespace from multiline strings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"pathlib"),": A class representing file system paths.")),(0,i.kt)("p",null,"This method has the following dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": Used to store and manage snippets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GitManager"),": Provides methods for managing Git repositories."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"dedent")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"textwrap"),": Removes leading whitespace from multiline strings."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path")," from ",(0,i.kt)("inlineCode",{parentName:"li"},"pathlib"),": Represents file system paths.")))}m.isMDXComponent=!0}}]);