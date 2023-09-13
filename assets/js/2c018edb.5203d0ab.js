"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2390],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),_=i,h=d["".concat(s,".").concat(_)]||d[_]||u[_]||a;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=_;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},7562:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={},o=void 0,p={unversionedId:"docs/src/snippet_management/code_snippet/CodeSnippet/d___hash__",id:"docs/src/snippet_management/code_snippet/CodeSnippet/d___hash__",title:"d___hash__",description:"hash() -> int",source:"@site/docs/docs/src/snippet_management/code_snippet/CodeSnippet/d___hash__.md",sourceDirName:"docs/src/snippet_management/code_snippet/CodeSnippet",slug:"/docs/src/snippet_management/code_snippet/CodeSnippet/d___hash__",permalink:"/documentor_piedpiper/docs/src/snippet_management/code_snippet/CodeSnippet/d___hash__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_FileScrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/d_FileScrapper"},next:{title:"d___init__",permalink:"/documentor_piedpiper/docs/src/snippet_management/code_snippet/CodeSnippet/d___init__"}},s={},c=[{value:"<code>__hash__() -&gt; int</code>",id:"__hash__---int",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"__hash__---int"},(0,i.kt)("inlineCode",{parentName:"h2"},"__hash__() -> int")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method calculates the hash value of the CodeSnippet object. It is used to uniquely identify the object in hash-based data structures. This method belongs to the class CodeSnippet."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"int"),": The hash value of the CodeSnippet object.")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Calculate the hash value of a CodeSnippet object\nsnippet = CodeSnippet(...)\nhash_value = snippet.__hash__()\nprint(hash_value)\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The method calculates the hash value by taking a hash of a tuple containing the following attributes of the CodeSnippet object: file_path, file_name, file_extension, code_snippet_type, and code_snippet_identifier. The hash value is used to uniquely identify the object."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("p",null,"This method does not have any dependencies."))}u.isMDXComponent=!0}}]);