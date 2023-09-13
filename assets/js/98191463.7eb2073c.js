"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9260],{3905:(e,t,r)=>{r.d(t,{Zo:()=>o,kt:()=>m});var i=r(7294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,i,s=function(e,t){if(null==e)return{};var r,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var l=i.createContext({}),c=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},o=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(r),u=s,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||a;return r?i.createElement(m,n(n({ref:t},o),{},{components:r})):i.createElement(m,n({ref:t},o))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,n=new Array(a);n[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:s,n[1]=p;for(var c=2;c<a;c++)n[c]=r[c];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9266:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>f,frontMatter:()=>a,metadata:()=>p,toc:()=>c});var i=r(7462),s=(r(7294),r(3905));const a={},n=void 0,p={unversionedId:"docs/src/repository_scrapping/file_scrapper/FileScrapper/scrape_specified",id:"docs/src/repository_scrapping/file_scrapper/FileScrapper/scrape_specified",title:"scrape_specified",description:"scrapespecified(specifiedfiles: List[Path]) -> bool",source:"@site/docs/docs/src/repository_scrapping/file_scrapper/FileScrapper/scrape_specified.md",sourceDirName:"docs/src/repository_scrapping/file_scrapper/FileScrapper",slug:"/docs/src/repository_scrapping/file_scrapper/FileScrapper/scrape_specified",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/scrape_specified",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_storage_dict",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d_storage_dict"},next:{title:"storage_dict",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/storage_dict"}},l={},c=[{value:"<code>scrape_specified(specified_files: List[Path]) -&gt; bool</code>",id:"scrape_specifiedspecified_files-listpath---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],o={toc:c},d="wrapper";function f(e){let{components:t,...r}=e;return(0,s.kt)(d,(0,i.Z)({},o,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"scrape_specifiedspecified_files-listpath---bool"},(0,s.kt)("inlineCode",{parentName:"h2"},"scrape_specified(specified_files: List[Path]) -> bool")),(0,s.kt)("h4",{id:"description"},"Description:"),(0,s.kt)("p",null,"This method performs the scraping of specified files and is used for scraping multiple files at once. This method belongs to the class ",(0,s.kt)("inlineCode",{parentName:"p"},"FileScrapper"),"."),(0,s.kt)("h4",{id:"parameters"},"Parameters:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"specified_files")," (",(0,s.kt)("inlineCode",{parentName:"li"},"List[Path]"),"): A list of file paths that need to be scraped.")),(0,s.kt)("h4",{id:"returns"},"Returns:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bool"),": Returns ",(0,s.kt)("inlineCode",{parentName:"li"},"True")," if the scraping of specified files is successful.")),(0,s.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = scrape_specified([Path('file1.py'), Path('file2.py')])\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = scrape_specified([Path('fileA.py'), Path('fileB.py'), Path('fileC.py')])\nprint(result_case2)\n")),(0,s.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"The method takes a list of file paths as input."),(0,s.kt)("li",{parentName:"ul"},"It iterates over each file path in the given list."),(0,s.kt)("li",{parentName:"ul"},"For each file path, it checks if the file is valid using the ",(0,s.kt)("inlineCode",{parentName:"li"},"_valid_file")," method."),(0,s.kt)("li",{parentName:"ul"},"If the file is valid, it starts the scraping process using the ",(0,s.kt)("inlineCode",{parentName:"li"},"_start_scrape")," method."),(0,s.kt)("li",{parentName:"ul"},"Finally, it returns ",(0,s.kt)("inlineCode",{parentName:"li"},"True")," indicating the successful scraping of specified files.")),(0,s.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"This method does not have any dependencies.")))}f.isMDXComponent=!0}}]);