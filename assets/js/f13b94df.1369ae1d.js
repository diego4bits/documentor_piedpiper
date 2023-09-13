"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2041],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>h});var r=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),p=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(i),f=n,h=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return i?r.createElement(h,l(l({ref:t},c),{},{components:i})):r.createElement(h,l({ref:t},c))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}f.displayName="MDXCreateElement"},1913:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var r=i(7462),n=(i(7294),i(3905));const a={},l=void 0,o={unversionedId:"docs/src/repository_scrapping/file_scrapper/FileScrapper/d__valid_file",id:"docs/src/repository_scrapping/file_scrapper/FileScrapper/d__valid_file",title:"d__valid_file",description:"validfile(sys_path: Path) -> bool",source:"@site/docs/docs/src/repository_scrapping/file_scrapper/FileScrapper/d__valid_file.md",sourceDirName:"docs/src/repository_scrapping/file_scrapper/FileScrapper",slug:"/docs/src/repository_scrapping/file_scrapper/FileScrapper/d__valid_file",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d__valid_file",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__update_current_file",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d__update_current_file"},next:{title:"d_scrape_specified",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/file_scrapper/FileScrapper/d_scrape_specified"}},s={},p=[{value:"<code>_valid_file(sys_path: Path) -&gt; bool</code>",id:"_valid_filesys_path-path---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"_valid_filesys_path-path---bool"},(0,n.kt)("inlineCode",{parentName:"h2"},"_valid_file(sys_path: Path) -> bool")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method checks whether a given file is valid or not. It is used to filter out unwanted files based on certain conditions. This method belongs to the ",(0,n.kt)("inlineCode",{parentName:"p"},"FileScrapper")," class."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"sys_path")," (",(0,n.kt)("inlineCode",{parentName:"li"},"Path"),"): The path of the file to be checked.")),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"bool"),": Returns ",(0,n.kt)("inlineCode",{parentName:"li"},"True")," if the file is valid, ",(0,n.kt)("inlineCode",{parentName:"li"},"False")," otherwise.")),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nis_valid = _valid_file(sys_path)\nprint(is_valid)\n\n# Another use case (if applicable)\nis_valid = _valid_file(sys_path)\nprint(is_valid)\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"The method first splits the given ",(0,n.kt)("inlineCode",{parentName:"p"},"sys_path")," into individual directory and file names. It then checks for various conditions to determine the validity of the file. The conditions include checking if any part of the path is present in the ",(0,n.kt)("inlineCode",{parentName:"p"},"_ignore")," list, checking if the file extension is in the ",(0,n.kt)("inlineCode",{parentName:"p"},"_ignore")," list (excluding empty extension), checking if the file name matches certain predefined names, and checking if the file is not a ",(0,n.kt)("inlineCode",{parentName:"p"},".py")," file. If any of these conditions are met, the method returns ",(0,n.kt)("inlineCode",{parentName:"p"},"False"),", indicating that the file is not valid. Otherwise, it returns ",(0,n.kt)("inlineCode",{parentName:"p"},"True"),"."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"FileScrapper"),": This method belongs to the ",(0,n.kt)("inlineCode",{parentName:"li"},"FileScrapper")," class and is used internally within the class.")))}u.isMDXComponent=!0}}]);