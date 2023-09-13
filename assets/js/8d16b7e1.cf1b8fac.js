"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8186],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>h});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=a,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return t?n.createElement(h,o(o({ref:r},s),{},{components:t})):n.createElement(h,o({ref:r},s))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p[d]="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},231:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=t(7462),a=(t(7294),t(3905));const i={},o=void 0,p={unversionedId:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_change_file",id:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_change_file",title:"d_change_file",description:"change_file(file: FileHandler) -> bool",source:"@site/docs/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_change_file.md",sourceDirName:"docs/src/repository_scrapping/code_scrapper/CodeScrapper",slug:"/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_change_file",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_change_file",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__update_scrapper",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__update_scrapper"},next:{title:"d_extract_snippets",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d_extract_snippets"}},c={},l=[{value:"<code>change_file(file: FileHandler) -&gt; bool</code>",id:"change_filefile-filehandler---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],s={toc:l},d="wrapper";function u(e){let{components:r,...t}=e;return(0,a.kt)(d,(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"change_filefile-filehandler---bool"},(0,a.kt)("inlineCode",{parentName:"h2"},"change_file(file: FileHandler) -> bool")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This method updates the input file of the CodeScrapper object and updates the scrapper accordingly. This method belongs to the class CodeScrapper."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file")," (",(0,a.kt)("inlineCode",{parentName:"li"},"FileHandler"),"): The new input file to be used by the CodeScrapper object.")),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bool"),": Returns True if the file was successfully changed.")),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Sample code to demonstrate a common use case\nscrapper = CodeScrapper()\nfile = FileHandler("path/to/file")\nresult_case1 = scrapper.change_file(file)\nprint(result_case1) # Output: True\n\n# Another use case (if applicable)\nfile2 = FileHandler("path/to/another_file")\nresult_case2 = scrapper.change_file(file2)\nprint(result_case2) # Output: True\n')),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"This method takes a FileHandler object as a parameter and sets it as the new input file for the CodeScrapper object. Then, it calls the _update_scrapper() method to update the scrapper accordingly. Finally, it returns True to indicate that the file was successfully changed."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"FileHandler"),": Represents a file and provides methods to read and manipulate its contents.")))}u.isMDXComponent=!0}}]);