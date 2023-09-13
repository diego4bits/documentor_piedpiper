"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),l=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return i.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,u=p["".concat(d,".").concat(m)]||p[m]||f[m]||o;return n?i.createElement(u,a(a({ref:t},c),{},{components:n})):i.createElement(u,a({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[p]="string"==typeof e?e:r,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9042:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var i=n(7462),r=(n(7294),n(3905));const o={},a=void 0,s={unversionedId:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d___init__",id:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d___init__",title:"d___init__",description:"init() -> None",source:"@site/docs/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d___init__.md",sourceDirName:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager",slug:"/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d___init__",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d___init__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"check_modified_files",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/check_modified_files"},next:{title:"d__check_modified_files",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__check_modified_files"}},d={},l=[{value:"<code>__init__() -&gt; None</code>",id:"__init__---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],c={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"__init__---none"},(0,r.kt)("inlineCode",{parentName:"h2"},"__init__() -> None")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This method initializes an instance of the ",(0,r.kt)("inlineCode",{parentName:"p"},"ModifiedFilesManager")," class. It creates instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"FileScrapper"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"SnippetStorage"),", and dictionaries to store old deleted snippets, new added snippets, and modified snippets."),(0,r.kt)("h4",{id:"parameters"},"Parameters:"),(0,r.kt)("p",null,"This method does not take any parameters."),(0,r.kt)("h4",{id:"returns"},"Returns:"),(0,r.kt)("p",null,"This method does not return any value."),(0,r.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,r.kt)("p",null,"This method does not raise any exceptions."),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Initializing an instance of ModifiedFilesManager\nmanager = ModifiedFilesManager()\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"__init__")," method creates instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"FileScrapper")," for both the front and tail files. It also creates instances of ",(0,r.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," to store snippets that need to be documented and snippets that need to be deleted. Additionally, it initializes dictionaries to store old deleted snippets, new added snippets, and modified snippets."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FileScrapper"),": This class is responsible for scraping files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": This class is responsible for storing code snippets.")))}f.isMDXComponent=!0}}]);