"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8575],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(t),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},c),{},{components:t})):r.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:o,a[1]=d;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1500:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const i={},a=void 0,d={unversionedId:"docs/src/snippet_management/node_info/NodeInfo/d_children",id:"docs/src/snippet_management/node_info/NodeInfo/d_children",title:"d_children",description:"children() -> List[Node]",source:"@site/docs/docs/src/snippet_management/node_info/NodeInfo/d_children.md",sourceDirName:"docs/src/snippet_management/node_info/NodeInfo",slug:"/docs/src/snippet_management/node_info/NodeInfo/d_children",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d_children",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__get_identifier",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d__get_identifier"},next:{title:"NodeInfo",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo"}},l={},s=[{value:"<code>children() -&gt; List[Node]</code>",id:"children---listnode",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:s},p="wrapper";function u(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"children---listnode"},(0,o.kt)("inlineCode",{parentName:"h2"},"children() -> List[Node]")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method returns the children of a node. It is used for accessing the child nodes of a given node. This method belongs to the class ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeInfo"),"."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not have any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"List[Node]"),": A list of child nodes of the current node.")),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not throw any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nchildren_list = node_info.children()\nfor child in children_list:\n    print(child)\n\n# Another use case (if applicable)\nchildren_list = root_node.children()\nfor child in children_list:\n    print(child)\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"children()")," method retrieves the children of a node by accessing the ",(0,o.kt)("inlineCode",{parentName:"p"},"children")," attribute of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeInfo")," object. It returns a list of child nodes."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Node"),": This method depends on the ",(0,o.kt)("inlineCode",{parentName:"li"},"Node")," class from the ",(0,o.kt)("inlineCode",{parentName:"li"},"tree_sitter")," module. The ",(0,o.kt)("inlineCode",{parentName:"li"},"Node")," class represents a node in the abstract syntax tree (AST).")))}u.isMDXComponent=!0}}]);