"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},p=Object.keys(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)n=p[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(o,".").concat(m)]||d[m]||u[m]||p;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,a=new Array(p);a[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[d]="string"==typeof e?e:r,a[1]=s;for(var c=2;c<p;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const p={},a=void 0,s={unversionedId:"docs/src/snippet_management/snippet_extract/SnippetExtract",id:"docs/src/snippet_management/snippet_extract/SnippetExtract",title:"SnippetExtract",description:"SnippetExtract",source:"@site/docs/docs/src/snippet_management/snippet_extract/SnippetExtract.md",sourceDirName:"docs/src/snippet_management/snippet_extract",slug:"/docs/src/snippet_management/snippet_extract/SnippetExtract",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_extract/SnippetExtract",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"NodeInfo",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo"},next:{title:"add_code_snippet",permalink:"/documentor_piedpiper/docs/src/snippet_management/snippet_storage/SnippetStorage/add_code_snippet"}},o={},c=[{value:"<code>SnippetExtract</code>",id:"snippetextract",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"snippetextract"},(0,r.kt)("inlineCode",{parentName:"h2"},"SnippetExtract")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This class represents a snippet extraction. It is used to store information about a specific snippet, including its parent type, parent identifier, snippet type, snippet identifier, and snippet implementation."),(0,r.kt)("h4",{id:"attributes"},"Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent_type")," (",(0,r.kt)("inlineCode",{parentName:"li"},"str"),"): The type of the parent entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"parent_identifier")," (",(0,r.kt)("inlineCode",{parentName:"li"},"str"),"): The identifier of the parent entity."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snippet_type")," (",(0,r.kt)("inlineCode",{parentName:"li"},"str"),"): The type of the snippet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snippet_identifier")," (",(0,r.kt)("inlineCode",{parentName:"li"},"str"),"): The identifier of the snippet."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"snippet_implementation")," (",(0,r.kt)("inlineCode",{parentName:"li"},"str"),"): The implementation of the snippet.")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Example 1: Creating a SnippetExtract instance\nsnippet = SnippetExtract("parent_type", "parent_identifier", "snippet_type", "snippet_identifier", "snippet_implementation")\n\n# Example 2: Accessing the attributes of a SnippetExtract instance\nprint(snippet.parent_type)  # Output: parent_type\nprint(snippet.snippet_identifier)  # Output: snippet_identifier\n')),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"SnippetExtract")," class is used to represent and store information about a snippet extraction. It contains attributes to hold the type and identifier of the parent entity, as well as the type, identifier, and implementation of the snippet. These attributes can be accessed and manipulated using the instance of the class."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This class does not have any dependencies.")))}u.isMDXComponent=!0}}]);