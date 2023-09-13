"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5277],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,_=u["".concat(c,".").concat(m)]||u[m]||p[m]||a;return n?r.createElement(_,i(i({ref:t},l),{},{components:n})):r.createElement(_,i({ref:t},l))}));function _(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var d=2;d<a;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4900:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const a={},i=void 0,s={unversionedId:"docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d___init__",id:"docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d___init__",title:"d___init__",description:"init(self)",source:"@site/docs/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d___init__.md",sourceDirName:"docs/src/documentation_orchestrator/documentation_manager/DocumentationManager",slug:"/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d___init__",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d___init__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_AddedFilesManager",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/added_files_manager/d_AddedFilesManager"},next:{title:"d__run_diagnosis",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/documentation_manager/DocumentationManager/d__run_diagnosis"}},c={},d=[{value:"<code>__init__(self)</code>",id:"__init__self",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:d},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"__init__self"},(0,o.kt)("inlineCode",{parentName:"h2"},"__init__(self)")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method initializes an instance of the DocumentationManager class. It creates instances of SnippetStorage for storing snippets to document and snippets to delete. It also initializes the _files_to_delete attribute."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not take any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("p",null,"This method does not return anything."),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not throw any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Creating a new instance of DocumentationManager\ndoc_manager = DocumentationManager()\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"init")," method creates instances of SnippetStorage for storing snippets to document and snippets to delete. It also initializes the _files_to_delete attribute to None."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"SnippetStorage: A class for storing snippets."),(0,o.kt)("li",{parentName:"ul"},"None")))}p.isMDXComponent=!0}}]);