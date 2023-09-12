"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6381],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=n,h=p["".concat(s,".").concat(d)]||p[d]||u[d]||i;return a?r.createElement(h,o(o({ref:t},m),{},{components:a})):r.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9446:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(7462),n=(a(7294),a(3905));const i={},o=void 0,l={unversionedId:"docs/src/git_tools/git_manager/GitManager/update_tail_commit",id:"docs/src/git_tools/git_manager/GitManager/update_tail_commit",title:"update_tail_commit",description:"updatetailcommit(tailcommithash: str)",source:"@site/docs/docs/src/git_tools/git_manager/GitManager/update_tail_commit.md",sourceDirName:"docs/src/git_tools/git_manager/GitManager",slug:"/docs/src/git_tools/git_manager/GitManager/update_tail_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/update_tail_commit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"update_front_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/update_front_commit"},next:{title:"GitManager",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager"}},s={},c=[{value:"<code>update_tail_commit(tail_commit_hash: str)</code>",id:"update_tail_committail_commit_hash-str",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],m={toc:c},p="wrapper";function u(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"update_tail_committail_commit_hash-str"},(0,n.kt)("inlineCode",{parentName:"h2"},"update_tail_commit(tail_commit_hash: str)")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method updates the tail commit of the GitManager instance. It is used to set the tail commit hash to a new value. This method belongs to the class GitManager."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tail_commit_hash")," (",(0,n.kt)("inlineCode",{parentName:"li"},"str"),"): The new tail commit hash that will be set.")),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None: This method does not return any value.")),(0,n.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"None: This method does not throw any exceptions.")),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nupdate_tail_commit('abcdef1234567890')\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"The method 'update_tail_commit' takes a 'tail_commit_hash' as a parameter and updates the tail commit of the GitManager instance to the provided hash value. It internally calls the '_update_tail_commit' method of the GitManager instance, which performs the actual update operation."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This method does not have any dependencies.")))}u.isMDXComponent=!0}}]);