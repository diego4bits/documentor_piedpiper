"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8560],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||s;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,i=new Array(s);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,i[1]=o;for(var l=2;l<s;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5641:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const s={},i=void 0,o={unversionedId:"docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/d_start_first_run",id:"docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/d_start_first_run",title:"d_start_first_run",description:"startfirstrun() -> None",source:"@site/docs/docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/d_start_first_run.md",sourceDirName:"docs/src/documentation_orchestrator/first_run_manager/FirstRunManager",slug:"/docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/d_start_first_run",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/d_start_first_run",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_get_snippets_to_doc",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/d_get_snippets_to_doc"},next:{title:"get_snippets_to_doc",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/first_run_manager/FirstRunManager/get_snippets_to_doc"}},c={},l=[{value:"<code>start_first_run() -&gt; None</code>",id:"start_first_run---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"start_first_run---none"},(0,a.kt)("inlineCode",{parentName:"h2"},"start_first_run() -> None")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This method performs the initial setup for the first run of the application. It is used to configure and initialize the necessary components for the application to run properly. This method belongs to the class FirstRunManager."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("p",null,"This method does not take any parameters."),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("p",null,"This method does not return any value."),(0,a.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,a.kt)("p",null,"This method does not throw any exceptions."),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nstart_first_run()\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The method 'start_first_run' is a wrapper method that calls the private method '_start_first_run' from the class FirstRunManager. This private method contains the logic to perform the initial setup for the application."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"FirstRunManager: This class is responsible for managing the first run of the application and initializing the necessary components."),(0,a.kt)("li",{parentName:"ul"},"GitFilePaths: This class provides the file paths for the Git repository."),(0,a.kt)("li",{parentName:"ul"},"GitManager: This class handles the interactions with the Git repository."),(0,a.kt)("li",{parentName:"ul"},"FileScrapper: This class is used for scrapping files from the repository."),(0,a.kt)("li",{parentName:"ul"},"SnippetStorage: This class is responsible for storing and managing code snippets."),(0,a.kt)("li",{parentName:"ul"},"SingletonMeta: This metaclass ensures that only one instance of FirstRunManager is created.")))}d.isMDXComponent=!0}}]);