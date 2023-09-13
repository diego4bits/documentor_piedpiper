"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[751],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),l=c(n),g=p,m=l["".concat(a,".").concat(g)]||l[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,o=new Array(i);o[0]=g;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s[l]="string"==typeof e?e:p,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),p=(n(7294),n(3905));const i={},o=void 0,s={unversionedId:"docs/src/snippet_management/snippet_storage/SnippetStorage/get_code_snippet",id:"docs/src/snippet_management/snippet_storage/SnippetStorage/get_code_snippet",title:"get_code_snippet",description:"getcodesnippet(code_snippet: CodeSnippet) -> Union[CodeSnippet, None]",source:"@site/docs/docs/src/snippet_management/snippet_storage/SnippetStorage/get_code_snippet.md",sourceDirName:"docs/src/snippet_management/snippet_storage/SnippetStorage",slug:"/docs/src/snippet_management/snippet_storage/SnippetStorage/get_code_snippet",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/get_code_snippet",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"delete_code_snippet",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/delete_code_snippet"},next:{title:"show_storage",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/show_storage"}},a={},c=[{value:"<code>get_code_snippet(code_snippet: CodeSnippet) -&gt; Union[CodeSnippet, None]</code>",id:"get_code_snippetcode_snippet-codesnippet---unioncodesnippet-none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,p.kt)(l,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"get_code_snippetcode_snippet-codesnippet---unioncodesnippet-none"},(0,p.kt)("inlineCode",{parentName:"h2"},"get_code_snippet(code_snippet: CodeSnippet) -> Union[CodeSnippet, None]")),(0,p.kt)("h4",{id:"description"},"Description:"),(0,p.kt)("p",null,"This method retrieves a code snippet from the storage based on its hash value. It returns the code snippet if it exists in the storage, otherwise it returns None. This method belongs to the class 'SnippetStorage'."),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"code_snippet")," (",(0,p.kt)("inlineCode",{parentName:"li"},"CodeSnippet"),"): The code snippet to be retrieved from the storage.")),(0,p.kt)("h4",{id:"returns"},"Returns:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Union[CodeSnippet, None]"),": The retrieved code snippet if it exists in the storage, otherwise None.")),(0,p.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'# Sample code to demonstrate retrieving a code snippet\nsnippet = CodeSnippet("print(\'Hello, World!\')")\nstorage = SnippetStorage()\nstorage.add_code_snippet(snippet)\n\nretrieved_snippet = storage.get_code_snippet(snippet)\nprint(retrieved_snippet)\n\n# Output:\n# CodeSnippet(code="print(\'Hello, World!\')")\n\n# Another use case to demonstrate retrieving a non-existing code snippet\nnon_existing_snippet = CodeSnippet("for i in range(10):")\nnon_existing_retrieval = storage.get_code_snippet(non_existing_snippet)\nprint(non_existing_retrieval)\n\n# Output:\n# None\n')),(0,p.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,p.kt)("p",null,"The method first calculates the hash value of the given code snippet. It then checks if the hashed snippet exists in the storage. If it does, the method retrieves the corresponding code snippet from the storage and returns it. If the hashed snippet does not exist in the storage, the method returns None."),(0,p.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"CodeSnippet"),": Represents a code snippet object.")))}u.isMDXComponent=!0}}]);