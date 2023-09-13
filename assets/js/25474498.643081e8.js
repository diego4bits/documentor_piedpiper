"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2764],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},_=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(r),_=i,m=d["".concat(s,".").concat(_)]||d[_]||u[_]||a;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=_;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[d]="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}_.displayName="MDXCreateElement"},34:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={},o=void 0,p={unversionedId:"docs/src/repository_scrapping/file_scrapper/FileScrapper/d___init__",id:"docs/src/repository_scrapping/file_scrapper/FileScrapper/d___init__",title:"d___init__",description:'init(root_dir: Path = Path(".")) -> None',source:"@site/docs/docs/src/repository_scrapping/file_scrapper/FileScrapper/d___init__.md",sourceDirName:"docs/src/repository_scrapping/file_scrapper/FileScrapper",slug:"/docs/src/repository_scrapping/file_scrapper/FileScrapper/d___init__",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d___init__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_CodeScrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/d_CodeScrapper"},next:{title:"d__start_scrape",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d__start_scrape"}},s={},c=[{value:"<code>__init__(root_dir: Path = Path(&quot;.&quot;)) -&gt; None</code>",id:"__init__root_dir-path--path---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Dependencies:",id:"dependencies",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4}],l={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"__init__root_dir-path--path---none"},(0,i.kt)("inlineCode",{parentName:"h2"},'__init__(root_dir: Path = Path(".")) -> None')),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method initializes an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FileScrapper")," class. It sets the root directory, creates an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"DocIgnore"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeScrapper"),", and sets the current file to None."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"root_dir")," (",(0,i.kt)("inlineCode",{parentName:"li"},"Path"),", optional): The root directory to start the file scrapping process. Defaults to the current directory.")),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return any value.")),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DocIgnore"),": This class is used to ignore certain files or directories during the file scrapping process."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"CodeScrapper"),": This class is used to extract code snippets from files."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path"),": This class is used to represent file paths.")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Initialize an instance of FileScrapper with the default root directory\nfile_scrapper = FileScrapper()\n\n# Initialize an instance of FileScrapper with a specific root directory\nfile_scrapper = FileScrapper(Path("/path/to/root/directory"))\n')),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"__init__")," method takes an optional ",(0,i.kt)("inlineCode",{parentName:"p"},"root_dir")," parameter, which represents the root directory for file scrapping. It sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"_root_dir")," attribute to the provided ",(0,i.kt)("inlineCode",{parentName:"p"},"root_dir"),". It then creates an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"DocIgnore")," with the ",(0,i.kt)("inlineCode",{parentName:"p"},"root_dir")," and assigns it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"_ignore")," attribute. It also creates an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeScrapper")," and assigns it to the ",(0,i.kt)("inlineCode",{parentName:"p"},"_code_scrapper")," attribute. Finally, it sets the ",(0,i.kt)("inlineCode",{parentName:"p"},"_current_file")," attribute to None."))}u.isMDXComponent=!0}}]);