"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),g=r,f=d["".concat(l,".").concat(g)]||d[g]||u[g]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},3231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(7462),r=(n(7294),n(3905));const a={},o=void 0,s={unversionedId:"docs/src/git_tools/git_manager/GitManager/d__stage_file_list",id:"docs/src/git_tools/git_manager/GitManager/d__stage_file_list",title:"d__stage_file_list",description:"stagefilelist(filespaths: List[Path]) -> None",source:"@site/docs/docs/src/git_tools/git_manager/GitManager/d__stage_file_list.md",sourceDirName:"docs/src/git_tools/git_manager/GitManager",slug:"/docs/src/git_tools/git_manager/GitManager/d__stage_file_list",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d__stage_file_list",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__stage_file",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d__stage_file"},next:{title:"d__update_front_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d__update_front_commit"}},l={},p=[{value:"<code>_stage_file_list(files_paths: List[Path]) -&gt; None</code>",id:"_stage_file_listfiles_paths-listpath---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"_stage_file_listfiles_paths-listpath---none"},(0,r.kt)("inlineCode",{parentName:"h2"},"_stage_file_list(files_paths: List[Path]) -> None")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method stages a list of files for commit. It belongs to the class ",(0,r.kt)("inlineCode",{parentName:"p"},"GitManager"),"."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"files_paths")," (",(0,r.kt)("inlineCode",{parentName:"li"},"List[Path]"),"): A list of ",(0,r.kt)("inlineCode",{parentName:"li"},"Path")," objects representing the paths to the files that need to be staged.")),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return anything.")),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This method does not throw any exceptions.")),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\ngit_manager = GitManager()\nfiles = [Path('file1.txt'), Path('file2.txt'), Path('file3.txt')]\ngit_manager._stage_file_list(files)\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"_stage_file_list")," method iterates over the list of file paths provided as input. For each file path, it calls the ",(0,r.kt)("inlineCode",{parentName:"p"},"_stage_file")," method to stage the file for commit."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"This method does not have any dependencies.")))}u.isMDXComponent=!0}}]);