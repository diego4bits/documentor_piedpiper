"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[935],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,p=function(e,t){if(null==e)return{};var n,r,p={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,p=e.mdxType,i=e.originalType,s=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),l=d(n),g=p,m=l["".concat(s,".").concat(g)]||l[g]||u[g]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var i=n.length,o=new Array(i);o[0]=g;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[l]="string"==typeof e?e:p,o[1]=a;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3321:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(7462),p=(n(7294),n(3905));const i={},o=void 0,a={unversionedId:"docs/src/snippet_management/snippet_storage/SnippetStorage/update_storage",id:"docs/src/snippet_management/snippet_storage/SnippetStorage/update_storage",title:"update_storage",description:"updatestorage(snippetsdict: Dict[int, CodeSnippet]) -> None",source:"@site/docs/docs/src/snippet_management/snippet_storage/SnippetStorage/update_storage.md",sourceDirName:"docs/src/snippet_management/snippet_storage/SnippetStorage",slug:"/docs/src/snippet_management/snippet_storage/SnippetStorage/update_storage",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/update_storage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"update_code_snippet",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/update_code_snippet"},next:{title:"SnippetStorage",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage"}},s={},d=[{value:"<code>update_storage(snippets_dict: Dict[int, CodeSnippet]) -&gt; None</code>",id:"update_storagesnippets_dict-dictint-codesnippet---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:d},l="wrapper";function u(e){let{components:t,...n}=e;return(0,p.kt)(l,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"update_storagesnippets_dict-dictint-codesnippet---none"},(0,p.kt)("inlineCode",{parentName:"h2"},"update_storage(snippets_dict: Dict[int, CodeSnippet]) -> None")),(0,p.kt)("h4",{id:"description"},"Description:"),(0,p.kt)("p",null,"This method updates the storage of code snippets with the provided dictionary of snippets. This method belongs to the class SnippetStorage."),(0,p.kt)("h4",{id:"parameters"},"Parameters:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"snippets_dict")," (",(0,p.kt)("inlineCode",{parentName:"li"},"Dict[int, CodeSnippet]"),"): A dictionary where the keys are integers representing the snippet IDs, and the values are CodeSnippet objects representing the code snippets to be added or updated in the storage.")),(0,p.kt)("h4",{id:"returns"},"Returns:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return anything.")),(0,p.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,p.kt)("p",null,"This method does not throw any exceptions."),(0,p.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-python"},'# Sample code to demonstrate a common use case\nsnippet1 = CodeSnippet(1, "print(\'Hello, world!\')", "Python")\nsnippet2 = CodeSnippet(2, "console.log(\'Hello, world!\');", "JavaScript")\n\nsnippets_dict = {1: snippet1, 2: snippet2}\n\nstorage = SnippetStorage()\nstorage.update_storage(snippets_dict)\n')),(0,p.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"update_storage")," method takes a dictionary of code snippets and updates the storage with the provided snippets. The keys of the dictionary represent the IDs of the snippets, and the values are CodeSnippet objects representing the code snippets to be added or updated in the storage."),(0,p.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"CodeSnippet"),": A class representing a code snippet with attributes like ID, code, and language."),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"Dict"),": A dictionary data structure provided by the Python standard library.")))}u.isMDXComponent=!0}}]);