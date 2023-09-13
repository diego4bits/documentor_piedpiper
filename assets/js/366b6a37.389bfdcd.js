"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8402],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=m(r),u=i,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||a;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function g(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:i,o[1]=c;for(var m=2;m<a;m++)o[m]=r[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1909:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>m});var n=r(7462),i=(r(7294),r(3905));const a={},o=void 0,c={unversionedId:"docs/src/git_tools/git_manager/GitManager/d_get_head_parent_commit",id:"docs/src/git_tools/git_manager/GitManager/d_get_head_parent_commit",title:"d_get_head_parent_commit",description:"getheadparent_commit() -> Commit",source:"@site/docs/docs/src/git_tools/git_manager/GitManager/d_get_head_parent_commit.md",sourceDirName:"docs/src/git_tools/git_manager/GitManager",slug:"/docs/src/git_tools/git_manager/GitManager/d_get_head_parent_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_get_head_parent_commit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_front_commit_tree",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_front_commit_tree"},next:{title:"d_head_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_head_commit"}},s={},m=[{value:"<code>get_head_parent_commit() -&gt; Commit</code>",id:"get_head_parent_commit---commit",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:m},p="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"get_head_parent_commit---commit"},(0,i.kt)("inlineCode",{parentName:"h2"},"get_head_parent_commit() -> Commit")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method retrieves the parent commit of the current head commit. It is used to navigate the commit history and obtain information about the previous commit. This method belongs to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"GitManager"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Commit"),": The parent commit of the current head commit.")),(0,i.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Exception"),": This exception is raised when there is no parent commit for the current head commit.")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = get_head_parent_commit()\nprint(result_case1)\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The method first checks if the current head commit has a parent commit. If it does, it returns the parent commit. If it doesn't have a parent commit, it raises an exception indicating that there is no head parent commit."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GitManager"),": The class to which this method belongs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Commit"),": The class representing a commit in the Git repository.")))}d.isMDXComponent=!0}}]);