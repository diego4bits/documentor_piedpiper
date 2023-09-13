"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4191],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3644:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},s=void 0,i={unversionedId:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_show_storage",id:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_show_storage",title:"d_show_storage",description:"show_storage() -> None",source:"@site/docs/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_show_storage.md",sourceDirName:"docs/src/repository_scrapping/code_scrapper/CodeScrapper",slug:"/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_show_storage",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_show_storage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_extract_snippets",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_extract_snippets"},next:{title:"d_storage_dict",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_storage_dict"}},p={},l=[{value:"<code>show_storage() -&gt; None</code>",id:"show_storage---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:l},d="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"show_storage---none"},(0,o.kt)("inlineCode",{parentName:"h2"},"show_storage() -> None")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method displays the contents of the snippet storage. It is used to view the stored code snippets. This method belongs to the class ",(0,o.kt)("inlineCode",{parentName:"p"},"CodeScrapper"),"."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not take any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("p",null,"This method does not return anything."),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not throw any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Example of how to use the show_storage method\ncode_scrapper = CodeScrapper()\ncode_scrapper.show_storage()\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"show_storage")," method calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"show_storage")," method of the ",(0,o.kt)("inlineCode",{parentName:"p"},"_snippet_storage")," object. This method displays the stored code snippets on the console."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": Stores and manages the code snippets."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CodeSnippet"),": Represents a code snippet."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SnippetExtract"),": Extracts code snippets from source files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FileExtension"),": Represents a file extension."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"LanguageNodes"),": Represents the nodes of a programming language."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_specified_nodes"),": Retrieves specified nodes from a syntax tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"global_node_types"),": Represents global node types."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_nodes"),": Retrieves nodes from a syntax tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"FileHandler"),": Handles file-related operations."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Parser"),": Parses source code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node"),": Represents a node in a syntax tree."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DependenciesInfo"),": Provides information about the dependencies of a code snippet.")))}u.isMDXComponent=!0}}]);