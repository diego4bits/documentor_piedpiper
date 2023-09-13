"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3430],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,a(a({ref:t},p),{},{components:n})):r.createElement(g,a({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6741:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,l={unversionedId:"docs/src/doc_log/doc_log/d_DocLog",id:"docs/src/doc_log/doc_log/d_DocLog",title:"d_DocLog",description:"DocLog",source:"@site/docs/docs/src/doc_log/doc_log/d_DocLog.md",sourceDirName:"docs/src/doc_log/doc_log",slug:"/docs/src/doc_log/doc_log/d_DocLog",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/d_DocLog",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"DocLog",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/DocLog"},next:{title:"d___init__",permalink:"/documentor_piedpiper/docs/src/doc_writer/doc_writer/DocWriter/d___init__"}},c={},s=[{value:"<code>DocLog</code>",id:"doclog",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"doclog"},(0,o.kt)("inlineCode",{parentName:"h2"},"DocLog")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This class represents a document log and provides functionalities for managing and retrieving document information."),(0,o.kt)("h4",{id:"attributes"},"Attributes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snippet_storage")," (",(0,o.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),"): Represents a storage for document snippets. Default: None."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git_manager")," (",(0,o.kt)("inlineCode",{parentName:"li"},"GitManager"),"): Represents a manager for Git operations. Default: None."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"git_retriever")," (",(0,o.kt)("inlineCode",{parentName:"li"},"GitRetriever"),"): Represents a retriever for Git information. Default: None."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," (",(0,o.kt)("inlineCode",{parentName:"li"},"Path"),"): Represents the path of the document log file. Default: None.")),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case of instantiating and using the class\nlog = DocLog()\n# The rest of the example\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"DocLog")," class is used to manage and retrieve document information. It has attributes such as ",(0,o.kt)("inlineCode",{parentName:"p"},"snippet_storage")," for storing document snippets, ",(0,o.kt)("inlineCode",{parentName:"p"},"git_manager")," for performing Git operations, ",(0,o.kt)("inlineCode",{parentName:"p"},"git_retriever")," for retrieving Git information, and ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," for specifying the path of the document log file."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": Represents a storage for document snippets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GitManager"),": Represents a manager for Git operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GitRetriever"),": Represents a retriever for Git information."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Path"),": Represents a path in the file system.")))}u.isMDXComponent=!0}}]);