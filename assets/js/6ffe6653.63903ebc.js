"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3126],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var i=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);r&&(i=i.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,i)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,i,n=function(e,r){if(null==e)return{};var t,i,n={},p=Object.keys(e);for(i=0;i<p.length;i++)t=p[i],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(i=0;i<p.length;i++)t=p[i],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=i.createContext({}),l=function(e){var r=i.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=l(e.components);return i.createElement(o.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return i.createElement(i.Fragment,{},r)}},f=i.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(t),f=n,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||p;return t?i.createElement(m,a(a({ref:r},c),{},{components:t})):i.createElement(m,a({ref:r},c))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,a=new Array(p);a[0]=f;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s[d]="string"==typeof e?e:n,a[1]=s;for(var l=2;l<p;l++)a[l]=t[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6911:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>p,metadata:()=>s,toc:()=>l});var i=t(7462),n=(t(7294),t(3905));const p={},a=void 0,s={unversionedId:"docs/src/repository_scrapping/file_scrapper/FileScrapper",id:"docs/src/repository_scrapping/file_scrapper/FileScrapper",title:"FileScrapper",description:"FileScrapper",source:"@site/docs/docs/src/repository_scrapping/file_scrapper/FileScrapper.md",sourceDirName:"docs/src/repository_scrapping/file_scrapper",slug:"/docs/src/repository_scrapping/file_scrapper/FileScrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"storage_dict",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/storage_dict"},next:{title:"d_FileScrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/d_FileScrapper"}},o={},l=[{value:"<code>FileScrapper</code>",id:"filescrapper",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(d,(0,i.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"filescrapper"},(0,n.kt)("inlineCode",{parentName:"h2"},"FileScrapper")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This class represents a file scrapper and provides functionalities for scrapping code snippets from files."),(0,n.kt)("h4",{id:"attributes"},"Attributes:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_root_dir")," (",(0,n.kt)("inlineCode",{parentName:"li"},"Path"),"): Represents the root directory where the file scrapper will operate."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_current_file")," (",(0,n.kt)("inlineCode",{parentName:"li"},"FileHandler"),"): Represents the current file being processed by the scrapper."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_code_scrapper")," (",(0,n.kt)("inlineCode",{parentName:"li"},"CodeScrapper"),"): Represents the code scrapper used to extract code snippets from files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"_ignore")," (",(0,n.kt)("inlineCode",{parentName:"li"},"DocIgnore"),"): Represents the ignore rules to be applied during the scrapping process.")),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Creating an instance of FileScrapper with a specified root directory\nfile_scrapper = FileScrapper(root_dir)\n\n# Using the file scrapper to scrap code snippets\nfile_scrapper.scrap_code()\n\n# Accessing the current file being processed\ncurrent_file = file_scrapper.current_file\n\n# Accessing the code scrapper used by the file scrapper\ncode_scrapper = file_scrapper.code_scrapper\n\n# Accessing the ignore rules applied by the file scrapper\nignore_rules = file_scrapper.ignore\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"FileScrapper")," class is used to scrap code snippets from files. It operates on a specified root directory and uses a ",(0,n.kt)("inlineCode",{parentName:"p"},"CodeScrapper")," object to extract code snippets from files. The scrapper applies ignore rules specified in a ",(0,n.kt)("inlineCode",{parentName:"p"},"DocIgnore")," object to exclude certain files or directories from the scrapping process. The class keeps track of the current file being processed and provides methods to access it, as well as the code scrapper and ignore rules."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CodeScrapper"),": Represents the code scrapper used to extract code snippets from files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FileHandler"),": Represents a file handler used to handle file operations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DocIgnore"),": Represents ignore rules to be applied during the scrapping process."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GitManager"),": Represents a Git manager used for version control operations."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Path"),": Represents a path in the file system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"List"),": Represents a list of elements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Dict"),": Represents a dictionary (key-value pairs)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FileExtension"),": Represents file extensions used by the tree-sitter-logic library.")))}u.isMDXComponent=!0}}]);