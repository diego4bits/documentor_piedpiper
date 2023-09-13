"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1518],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5005:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={},o=void 0,p={unversionedId:"docs/src/snippet_management/snippet_storage/SnippetStorage",id:"docs/src/snippet_management/snippet_storage/SnippetStorage",title:"SnippetStorage",description:"SnippetStorage",source:"@site/docs/docs/src/snippet_management/snippet_storage/SnippetStorage.md",sourceDirName:"docs/src/snippet_management/snippet_storage",slug:"/docs/src/snippet_management/snippet_storage/SnippetStorage",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"update_storage",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/update_storage"},next:{title:"d_SnippetStorage",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/d_SnippetStorage"}},s={},c=[{value:"<code>SnippetStorage</code>",id:"snippetstorage",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"snippetstorage"},(0,a.kt)("inlineCode",{parentName:"h2"},"SnippetStorage")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This class represents a storage for code snippets and provides functionalities for managing and accessing these snippets."),(0,a.kt)("h4",{id:"attributes"},"Attributes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_storage")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Dict[int, CodeSnippet]"),"): A dictionary that stores code snippets, where the key is the snippet ID and the value is an instance of the ",(0,a.kt)("inlineCode",{parentName:"li"},"CodeSnippet")," class. Default: an empty dictionary.")),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Creating an instance of SnippetStorage\nstorage = SnippetStorage()\n\n# Accessing the code snippets stored in the storage\nsnippets = storage._storage\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," class is used to store and manage code snippets. It has a dictionary attribute ",(0,a.kt)("inlineCode",{parentName:"p"},"_storage")," that holds the snippets. The keys of the dictionary are the IDs of the snippets, and the values are instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"CodeSnippet")," class. This class provides methods to add, remove, and retrieve code snippets from the storage."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CodeSnippet"),": This class represents a code snippet and provides functionalities for managing the snippet's content and metadata."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Dict")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Union")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"typing")," module: These modules are used to define the type hints for the ",(0,a.kt)("inlineCode",{parentName:"li"},"_storage")," attribute.")))}u.isMDXComponent=!0}}]);