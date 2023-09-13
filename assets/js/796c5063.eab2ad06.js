"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,s={unversionedId:"docs/src/repository_scrapping/code_scrapper/d_CodeScrapper",id:"docs/src/repository_scrapping/code_scrapper/d_CodeScrapper",title:"d_CodeScrapper",description:"CodeScrapper",source:"@site/docs/docs/src/repository_scrapping/code_scrapper/d_CodeScrapper.md",sourceDirName:"docs/src/repository_scrapping/code_scrapper",slug:"/docs/src/repository_scrapping/code_scrapper/d_CodeScrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/d_CodeScrapper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"CodeScrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper"},next:{title:"d___init__",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d___init__"}},p={},l=[{value:"<code>CodeScrapper</code>",id:"codescrapper",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"codescrapper"},(0,i.kt)("inlineCode",{parentName:"h2"},"CodeScrapper")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This class represents a code scrapper and provides functionalities for extracting code snippets from files."),(0,i.kt)("h4",{id:"attributes"},"Attributes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_input_file")," (",(0,i.kt)("inlineCode",{parentName:"li"},"FileHandler"),"): An instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"FileHandler")," class that is used to handle input files. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_file_dependencies")," (",(0,i.kt)("inlineCode",{parentName:"li"},"DependenciesInfo"),"): An instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"DependenciesInfo")," class that is used to store information about file dependencies. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_snippet_storage")," (",(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),"): An instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage")," class that is used to store code snippets. Default: An empty instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_parser")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Parser"),"): An instance of the ",(0,i.kt)("inlineCode",{parentName:"li"},"Parser")," class that is used to parse code files. Default: An empty instance of ",(0,i.kt)("inlineCode",{parentName:"li"},"Parser"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_relevant_nodes_names")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Set[str]"),"): A set of relevant node names that are used for code snippet extraction. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_assignment_nodes_names")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Set[str]"),"): A set of assignment node names that are used for code snippet extraction. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_ast_root")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Node"),"): The root node of the abstract syntax tree. Default: ",(0,i.kt)("inlineCode",{parentName:"li"},"None"),".")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case of instantiating and using the class\ninstance = CodeScrapper()\n# The rest of the example\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeScrapper")," class is used for extracting code snippets from files. It uses a ",(0,i.kt)("inlineCode",{parentName:"p"},"FileHandler")," instance to handle input files, a ",(0,i.kt)("inlineCode",{parentName:"p"},"DependenciesInfo")," instance to store information about file dependencies, a ",(0,i.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," instance to store code snippets, and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Parser")," instance to parse code files. The class also maintains sets of relevant node names and assignment node names for code snippet extraction."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FileHandler"),": This class is used to handle input files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DependenciesInfo"),": This class is used to store information about file dependencies."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": This class is used to store code snippets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Parser"),": This class is used to parse code files.")))}u.isMDXComponent=!0}}]);