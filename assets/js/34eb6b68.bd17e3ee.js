"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7780],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=l(n),u=i,m=c["".concat(d,".").concat(u)]||c[u]||f[u]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6962:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"docs/src/snippet_management/node_info/NodeInfo/d__get_identifier",id:"docs/src/snippet_management/node_info/NodeInfo/d__get_identifier",title:"d__get_identifier",description:"getidentifier(node str) -> str",source:"@site/docs/docs/src/snippet_management/node_info/NodeInfo/d__get_identifier.md",sourceDirName:"docs/src/snippet_management/node_info/NodeInfo",slug:"/docs/src/snippet_management/node_info/NodeInfo/d__get_identifier",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d__get_identifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d___str__",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d___str__"},next:{title:"d_children",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d_children"}},d={},l=[{value:"<code>_get_identifier(node: Node, file_str: str) -&gt; str</code>",id:"_get_identifiernode-node-file_str-str---str",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],p={toc:l},c="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"_get_identifiernode-node-file_str-str---str"},(0,i.kt)("inlineCode",{parentName:"h2"},"_get_identifier(node: Node, file_str: str) -> str")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method performs a search in the given node for an identifier and returns it as a string. It belongs to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"NodeInfo"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"node")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Node"),"): The node to search for an identifier."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"file_str")," (",(0,i.kt)("inlineCode",{parentName:"li"},"str"),"): The string representation of the file where the node is located.")),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str"),": The identifier found in the node, or None if no identifier is found.")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = _get_identifier(node, file_str)\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = _get_identifier(node, file_str)\nprint(result_case2)\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,'The method iterates through the children of the given node. If a child has a type of "identifier", it extracts the corresponding substring from the file string and returns it. If no identifier is found, it returns None.'),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Node"),": It is a class imported from the 'tree_sitter' module. It represents a node in the syntax tree."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"str"),": It is a built-in Python type representing a string.")))}f.isMDXComponent=!0}}]);