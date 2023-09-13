"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6961],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>u});var i=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),d=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=d(e.components);return i.createElement(p.Provider,{value:n},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},m=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(t),m=r,u=c["".concat(p,".").concat(m)]||c[m]||_[m]||o;return t?i.createElement(u,a(a({ref:n},l),{},{components:t})):i.createElement(u,a({ref:n},l))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,a=new Array(o);a[0]=m;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[c]="string"==typeof e?e:r,a[1]=s;for(var d=2;d<o;d++)a[d]=t[d];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8552:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>_,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=t(7462),r=(t(7294),t(3905));const o={},a=void 0,s={unversionedId:"docs/src/snippet_management/dependencies_info/DependenciesInfo/d___init__",id:"docs/src/snippet_management/dependencies_info/DependenciesInfo/d___init__",title:"d___init__",description:"init(self, node str)",source:"@site/docs/docs/src/snippet_management/dependencies_info/DependenciesInfo/d___init__.md",sourceDirName:"docs/src/snippet_management/dependencies_info/DependenciesInfo",slug:"/docs/src/snippet_management/dependencies_info/DependenciesInfo/d___init__",permalink:"/documentor_piedpiper/docs/src/snippet_management/dependencies_info/DependenciesInfo/d___init__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_CodeSnippet",permalink:"/documentor_piedpiper/docs/src/snippet_management/code_snippet/d_CodeSnippet"},next:{title:"d__get_imports_string",permalink:"/documentor_piedpiper/docs/src/snippet_management/dependencies_info/DependenciesInfo/d__get_imports_string"}},p={},d=[{value:"<code>__init__(self, node: Node, file_str: str)</code>",id:"__init__self-node-node-file_str-str",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:d},c="wrapper";function _(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"__init__self-node-node-file_str-str"},(0,r.kt)("inlineCode",{parentName:"h2"},"__init__(self, node: Node, file_str: str)")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method initializes an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DependenciesInfo")," class. It sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," attribute by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"_get_imports_string")," method."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"node")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Node"),"): The tree-sitter Node object representing the root node of the parsed code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_str")," (",(0,r.kt)("inlineCode",{parentName:"li"},"str"),"): The string representation of the code file.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"None")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample usage\nnode = get_node()\nfile_str = read_code_file('example.py')\ninfo = DependenciesInfo(node, file_str)\nprint(info.dependencies)\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__")," method takes a ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"file_str")," as input parameters. It initializes an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DependenciesInfo")," class and sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," attribute by calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"_get_imports_string")," method."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Node")," from tree_sitter: Represents the root node of the parsed code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"get_node")," from tree_sitter_util: Retrieves the root node of the parsed code."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"read_code_file")," from file_utils: Reads the content of a code file as a string.")))}_.isMDXComponent=!0}}]);