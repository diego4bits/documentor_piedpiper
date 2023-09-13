"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7843],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(r),u=i,f=p["".concat(s,".").concat(u)]||p[u]||h[u]||a;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(7462),i=(r(7294),r(3905));const a={},o=void 0,c={unversionedId:"docs/src/git_tools/git_file_checker/GitFileChecker/d__extract_changes",id:"docs/src/git_tools/git_file_checker/GitFileChecker/d__extract_changes",title:"d__extract_changes",description:"extractchanges() -> None",source:"@site/docs/docs/src/git_tools/git_file_checker/GitFileChecker/d__extract_changes.md",sourceDirName:"docs/src/git_tools/git_file_checker/GitFileChecker",slug:"/docs/src/git_tools/git_file_checker/GitFileChecker/d__extract_changes",permalink:"/documentor_piedpiper/docs/src/git_tools/git_file_checker/GitFileChecker/d__extract_changes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_FileHandler",permalink:"/documentor_piedpiper/docs/src/file_handler/file_handler/d_FileHandler"},next:{title:"d__get_diff",permalink:"/documentor_piedpiper/docs/src/git_tools/git_file_checker/GitFileChecker/d__get_diff"}},s={},l=[{value:"<code>_extract_changes() -&gt; None</code>",id:"_extract_changes---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:l},p="wrapper";function h(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"_extract_changes---none"},(0,i.kt)("inlineCode",{parentName:"h2"},"_extract_changes() -> None")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method performs the extraction of changes from the GitFileChecker.files_diff attribute. It categorizes the changes into added, modified, and deleted files. This method belongs to the class GitFileChecker."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("p",null,"This method does not return anything."),(0,i.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,i.kt)("p",null,"This method does not throw any exceptions."),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nchecker = GitFileChecker()\nchecker._extract_changes()\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"_extract_changes")," method iterates over each patch in the ",(0,i.kt)("inlineCode",{parentName:"p"},"GitFileChecker.files_diff")," attribute. For each patch, it checks the status of the delta (change) and categorizes the file accordingly. If the status is ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_DELTA_ADDED"),", the path of the new file is appended to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GitFileChecker.added")," list. If the status is ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_DELTA_MODIFIED"),", the path of the new file is appended to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GitFileChecker.modified")," list. If the status is ",(0,i.kt)("inlineCode",{parentName:"p"},"GIT_DELTA_DELETED"),", the path of the old file is appended to the ",(0,i.kt)("inlineCode",{parentName:"p"},"GitFileChecker.deleted")," list."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GitFileChecker.files_diff"),": A list of patches representing the changes in the Git repository.")))}h.isMDXComponent=!0}}]);