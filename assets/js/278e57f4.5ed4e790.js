"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},d=Object.keys(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)r=d[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,d=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,m=p["".concat(s,".").concat(u)]||p[u]||_[u]||d;return r?a.createElement(m,i(i({ref:t},c),{},{components:r})):a.createElement(m,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=r.length,i=new Array(d);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:n,i[1]=o;for(var l=2;l<d;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7014:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>_,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const d={},i=void 0,o={unversionedId:"docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d__start_added_file_scrapper",id:"docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d__start_added_file_scrapper",title:"d__start_added_file_scrapper",description:"startaddedfilescrapper() -> None",source:"@site/docs/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d__start_added_file_scrapper.md",sourceDirName:"docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager",slug:"/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d__start_added_file_scrapper",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d__start_added_file_scrapper",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d___init__",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d___init__"},next:{title:"d__update_snippets_to_doc",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/AddedFilesManager/d__update_snippets_to_doc"}},s={},l=[{value:"<code>_start_added_file_scrapper() -&gt; None</code>",id:"_start_added_file_scrapper---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:l},p="wrapper";function _(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"_start_added_file_scrapper---none"},(0,n.kt)("inlineCode",{parentName:"h2"},"_start_added_file_scrapper() -> None")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method performs the scraping of added files and is used to initiate the process of scraping added files. This method belongs to the class ",(0,n.kt)("inlineCode",{parentName:"p"},"AddedFilesManager"),"."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("p",null,"This method does not take any parameters."),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("p",null,"This method does not return anything (",(0,n.kt)("inlineCode",{parentName:"p"},"None"),")."),(0,n.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,n.kt)("p",null,"This method does not throw any exceptions."),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Start the scraping of added files\nadded_files_manager = AddedFilesManager()\nadded_files_manager._start_added_file_scrapper()\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"If there are added files according to the ",(0,n.kt)("inlineCode",{parentName:"li"},"GitFileChecker")," class, the method proceeds to the next step."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"GitManager")," class is called to select the front commit."),(0,n.kt)("li",{parentName:"ol"},"The ",(0,n.kt)("inlineCode",{parentName:"li"},"_added_file_scrapper")," object of the ",(0,n.kt)("inlineCode",{parentName:"li"},"FileScrapper")," class is used to scrape the specified added files.")),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GitFileChecker"),": Checks for added files."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"GitManager"),": Manages the Git repository."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FileScrapper"),": Scrapes files.")))}_.isMDXComponent=!0}}]);