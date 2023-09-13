"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1179],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>u});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(i),h=r,u=d["".concat(s,".").concat(h)]||d[h]||f[h]||a;return i?n.createElement(u,o(o({ref:t},c),{},{components:i})):n.createElement(u,o({ref:t},c))}));function u(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"},6081:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={},o=void 0,l={unversionedId:"docs/src/git_tools/git_file_paths/GitFilePaths",id:"docs/src/git_tools/git_file_paths/GitFilePaths",title:"GitFilePaths",description:"GitFilePaths",source:"@site/docs/docs/src/git_tools/git_file_paths/GitFilePaths.md",sourceDirName:"docs/src/git_tools/git_file_paths",slug:"/docs/src/git_tools/git_file_paths/GitFilePaths",permalink:"/documentor_piedpiper/docs/src/git_tools/git_file_paths/GitFilePaths",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"get_all_valid_paths",permalink:"/documentor_piedpiper/docs/src/git_tools/git_file_paths/GitFilePaths/get_all_valid_paths"},next:{title:"d_GitFilePaths",permalink:"/documentor_piedpiper/docs/src/git_tools/git_file_paths/d_GitFilePaths"}},s={},p=[{value:"<code>GitFilePaths</code>",id:"gitfilepaths",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:p},d="wrapper";function f(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"gitfilepaths"},(0,r.kt)("inlineCode",{parentName:"h2"},"GitFilePaths")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This class represents a collection of file paths in a git repository and provides functionalities for managing and manipulating these paths."),(0,r.kt)("h4",{id:"attributes"},"Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"git_manager")," (",(0,r.kt)("inlineCode",{parentName:"li"},"GitManager"),"): An instance of the ",(0,r.kt)("inlineCode",{parentName:"li"},"GitManager")," class that provides methods for interacting with a git repository."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"doc_ignore")," (",(0,r.kt)("inlineCode",{parentName:"li"},"DocIgnore"),"): An instance of the ",(0,r.kt)("inlineCode",{parentName:"li"},"DocIgnore")," class that allows for excluding certain files or directories from the collection of file paths."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"file_paths")," (",(0,r.kt)("inlineCode",{parentName:"li"},"List[str]"),"): A list of file paths in the git repository.")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'# Instantiating the class\ngit_file_paths = GitFilePaths(git_manager, doc_ignore)\n\n# Accessing the file paths\npaths = git_file_paths.file_paths\n\n# Adding a new file path\ngit_file_paths.add_file_path("/path/to/new_file.py")\n\n# Removing a file path\ngit_file_paths.remove_file_path("/path/to/file.py")\n')),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"GitFilePaths")," class uses an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"GitManager")," class to interact with a git repository and retrieve the file paths. It also uses an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"DocIgnore")," class to exclude certain files or directories from the collection of file paths. The file paths are stored in a list called ",(0,r.kt)("inlineCode",{parentName:"p"},"file_paths"),"."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GitManager"),": Provides methods for interacting with a git repository."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DocIgnore"),": Allows for excluding certain files or directories from the collection of file paths.")))}f.isMDXComponent=!0}}]);