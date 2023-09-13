"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7310],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),u=i,f=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"docs/src/git_tools/git_manager/GitManager/d_select_front_commit",id:"docs/src/git_tools/git_manager/GitManager/d_select_front_commit",title:"d_select_front_commit",description:"selectfrontcommit() -> None",source:"@site/docs/docs/src/git_tools/git_manager/GitManager/d_select_front_commit.md",sourceDirName:"docs/src/git_tools/git_manager/GitManager",slug:"/docs/src/git_tools/git_manager/GitManager/d_select_front_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_select_front_commit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_project_repo",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_project_repo"},next:{title:"d_select_tail_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_select_tail_commit"}},l={},c=[{value:"<code>select_front_commit() -&gt; None</code>",id:"select_front_commit---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"select_front_commit---none"},(0,i.kt)("inlineCode",{parentName:"h2"},"select_front_commit() -> None")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method performs the selection of the front commit in a Git repository. It is used for retrieving the first commit made in a repository. This method belongs to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"GitManager"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("p",null,"This method does not have a return value."),(0,i.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,i.kt)("p",null,"This method does not throw any exceptions."),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nselect_front_commit()\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"select_front_commit()")," method internally calls the ",(0,i.kt)("inlineCode",{parentName:"p"},"_select_front_commit()")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"GitManager")," singleton instance."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"GitManager"),": This class provides the functionality to manage a Git repository. It is a singleton class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SingletonMeta"),": This metaclass is used to implement the singleton pattern for the ",(0,i.kt)("inlineCode",{parentName:"li"},"GitManager")," class."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path"),": This class represents the path of a file or directory in the file system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pygit2.Repository"),": This class represents a Git repository."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pygit2.Commit"),": This class represents a Git commit object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pygit2.Tree"),": This class represents a Git tree object."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"List"),": This class represents a list of elements.")))}d.isMDXComponent=!0}}]);