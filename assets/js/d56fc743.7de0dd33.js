"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5061],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=i.createContext({}),s=function(e){var t=i.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(a),u=n,h=p["".concat(c,".").concat(u)]||p[u]||d[u]||r;return a?i.createElement(h,o(o({ref:t},m),{},{components:a})):i.createElement(h,o({ref:t},m))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4868:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=a(7462),n=(a(7294),a(3905));const r={},o=void 0,l={unversionedId:"docs/src/git_tools/git_manager/GitManager/d_update_tail_commit",id:"docs/src/git_tools/git_manager/GitManager/d_update_tail_commit",title:"d_update_tail_commit",description:"updatetailcommit(tailcommithash: str) -> None",source:"@site/docs/docs/src/git_tools/git_manager/GitManager/d_update_tail_commit.md",sourceDirName:"docs/src/git_tools/git_manager/GitManager",slug:"/docs/src/git_tools/git_manager/GitManager/d_update_tail_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_update_tail_commit",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_update_front_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/d_update_front_commit"},next:{title:"front_commit",permalink:"/documentor_piedpiper/docs/src/git_tools/git_manager/GitManager/front_commit"}},c={},s=[{value:"<code>update_tail_commit(tail_commit_hash: str) -&gt; None</code>",id:"update_tail_committail_commit_hash-str---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],m={toc:s},p="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(p,(0,i.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"update_tail_committail_commit_hash-str---none"},(0,n.kt)("inlineCode",{parentName:"h2"},"update_tail_commit(tail_commit_hash: str) -> None")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method updates the tail commit of the GitManager instance. It calls the private method ",(0,n.kt)("inlineCode",{parentName:"p"},"_update_tail_commit")," to perform the update. This method belongs to the class ",(0,n.kt)("inlineCode",{parentName:"p"},"GitManager"),"."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"tail_commit_hash")," (",(0,n.kt)("inlineCode",{parentName:"li"},"str"),"): The hash of the commit that will be set as the new tail commit.")),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"None"),": This method does not return anything.")),(0,n.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,n.kt)("p",null,"This method does not throw any exceptions."),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},'# Updating the tail commit with a specific commit hash\nGitManager.update_tail_commit("f5d2a2c")\n\n# Updating the tail commit with another commit hash\nGitManager.update_tail_commit("a8c6b4f")\n')),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"This method takes a commit hash as input and calls the private method ",(0,n.kt)("inlineCode",{parentName:"p"},"_update_tail_commit")," to update the tail commit of the GitManager instance. The private method ",(0,n.kt)("inlineCode",{parentName:"p"},"_update_tail_commit")," handles the logic to update the tail commit."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("p",null,"This method does not have any dependencies."))}d.isMDXComponent=!0}}]);