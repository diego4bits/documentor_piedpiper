"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3362],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=l(r),u=o,f=p["".concat(c,".").concat(u)]||p[u]||d[u]||i;return r?n.createElement(f,a(a({ref:t},m),{},{components:r})):n.createElement(f,a({ref:t},m))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},1343:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const i={},a=void 0,s={unversionedId:"docs/src/git_tools/git_manager/GitManager/d_front_commit_tree",id:"docs/src/git_tools/git_manager/GitManager/d_front_commit_tree",title:"d_front_commit_tree",description:"frontcommittree() -> Tree",source:"@site/docs/docs/src/git_tools/git_manager/GitManager/d_front_commit_tree.md",sourceDirName:"docs/src/git_tools/git_manager/GitManager",slug:"/docs/src/git_tools/git_manager/GitManager/d_front_commit_tree",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_front_commit_tree",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_front_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_front_commit"},next:{title:"d_get_head_parent_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_get_head_parent_commit"}},c={},l=[{value:"<code>front_commit_tree() -&gt; Tree</code>",id:"front_commit_tree---tree",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],m={toc:l},p="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"front_commit_tree---tree"},(0,o.kt)("inlineCode",{parentName:"h2"},"front_commit_tree() -> Tree")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method returns the front commit tree. It belongs to the class GitManager."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not have any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Tree"),": The front commit tree.")),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not throw any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nresult_case1 = front_commit_tree()\nprint(result_case1)\n\n# Another use case (if applicable)\nresult_case2 = front_commit_tree()\nprint(result_case2)\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"This method simply returns the front commit tree."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"GitManager"),": This class is responsible for managing Git operations.")))}d.isMDXComponent=!0}}]);