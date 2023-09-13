"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),h=r,u=c["".concat(s,".").concat(h)]||c[h]||f[h]||a;return n?i.createElement(u,l(l({ref:t},p),{},{components:n})):i.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3589:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var i=n(7462),r=(n(7294),n(3905));const a={},l=void 0,o={unversionedId:"docs/src/file_handler/file_handler/FileHandler/d___init__",id:"docs/src/file_handler/file_handler/FileHandler/d___init__",title:"d___init__",description:"init(file_path: Path) -> None",source:"@site/docs/docs/src/file_handler/file_handler/FileHandler/d___init__.md",sourceDirName:"docs/src/file_handler/file_handler/FileHandler",slug:"/docs/src/file_handler/file_handler/FileHandler/d___init__",permalink:"/documentor_piedpiper/docs/src/file_handler/file_handler/FileHandler/d___init__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_ModifiedFilesManager",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/d_ModifiedFilesManager"},next:{title:"d___str__",permalink:"/documentor_piedpiper/docs/src/file_handler/file_handler/FileHandler/d___str__"}},s={},d=[{value:"<code>__init__(file_path: Path) -&gt; None</code>",id:"__init__file_path-path---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],p={toc:d},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"__init__file_path-path---none"},(0,r.kt)("inlineCode",{parentName:"h2"},"__init__(file_path: Path) -> None")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method initializes an instance of the FileHandler class. It takes a file path as a parameter and performs the necessary operations to set up the instance variables. This method belongs to the class FileHandler."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_path")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Path"),"): The path of the file to be handled.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return anything.")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Exception"),": This exception is raised when the given file path is not a file.")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Initializing a FileHandler instance with a file path\nhandler = FileHandler(Path("path/to/file.txt"))\n\n# Another usage case (if applicable)\nhandler = FileHandler(Path("path/to/another_file.py"))\n')),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The method first checks if the given file path exists and is a file. If it is, then it proceeds to set the instance variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self.file_path"),": The given file path."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self.file_name"),": The name of the file (extracted from the file path)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self.file_extension"),": The extension of the file (extracted from the file path)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"self.file_str"),": The contents of the file, retrieved using the GitRetrieaver class.")),(0,r.kt)("p",null,"If the given file path is not a file, an exception is raised."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GitRetrieaver"),": This dependency is used to retrieve the contents of the file."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Path"),": This dependency is used to represent file paths.")))}f.isMDXComponent=!0}}]);