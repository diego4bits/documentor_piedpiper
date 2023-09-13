"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7879],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(r),_=o,m=l["".concat(i,".").concat(_)]||l[_]||u[_]||a;return r?n.createElement(m,p(p({ref:t},d),{},{components:r})):n.createElement(m,p({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=_;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[l]="string"==typeof e?e:o,p[1]=s;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},3728:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},p=void 0,s={unversionedId:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_ast_root",id:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_ast_root",title:"d__update_ast_root",description:"updateast_root() -> None",source:"@site/docs/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_ast_root.md",sourceDirName:"docs/src/repository_scrapping/code_scrapper/CodeScrapper",slug:"/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_ast_root",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_ast_root",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__scrape_relevant",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__scrape_relevant"},next:{title:"d__update_file_dependencies",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_file_dependencies"}},i={},c=[{value:"<code>_update_ast_root() -&gt; None</code>",id:"_update_ast_root---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:c},l="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"_update_ast_root---none"},(0,o.kt)("inlineCode",{parentName:"h2"},"_update_ast_root() -> None")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method updates the abstract syntax tree (AST) root node of the CodeScrapper instance. It is used to parse the input file and set the AST root node accordingly. This method belongs to the class CodeScrapper."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not take any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("p",null,"This method does not return anything."),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not throw any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nscrapper = CodeScrapper()\nscrapper._update_ast_root()\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The method uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"_parser")," attribute of the CodeScrapper instance to parse the input file. It converts the file content to bytes using the UTF-8 encoding and passes it to the ",(0,o.kt)("inlineCode",{parentName:"p"},"_parser.parse()")," method. The resulting tree object is assigned to the ",(0,o.kt)("inlineCode",{parentName:"p"},"_ast_root")," attribute of the CodeScrapper instance."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Parser")," (from tree_sitter): Used to parse the input file and generate the AST."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node")," (from tree_sitter): Represents a node in the AST.")))}u.isMDXComponent=!0}}]);