"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5959],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)o=c[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(o),g=n,m=p["".concat(l,".").concat(g)]||p[g]||u[g]||c;return o?r.createElement(m,a(a({ref:t},s),{},{components:o})):r.createElement(m,a({ref:t},s))}));function m(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=o.length,a=new Array(c);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:n,a[1]=i;for(var d=2;d<c;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}g.displayName="MDXCreateElement"},2081:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const c={},a=void 0,i={unversionedId:"docs/src/doc_log/doc_log/DocLog/create_doc_log",id:"docs/src/doc_log/doc_log/DocLog/create_doc_log",title:"create_doc_log",description:"createdoclog() -> None",source:"@site/docs/docs/src/doc_log/doc_log/DocLog/create_doc_log.md",sourceDirName:"docs/src/doc_log/doc_log/DocLog",slug:"/docs/src/doc_log/doc_log/DocLog/create_doc_log",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/DocLog/create_doc_log",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d_DocIgnore",permalink:"/documentor_piedpiper/docs/src/doc_ignore/doc_ignore/d_DocIgnore"},next:{title:"d_create_doc_log",permalink:"/documentor_piedpiper/docs/src/doc_log/doc_log/DocLog/d_create_doc_log"}},l={},d=[{value:"<code>create_doc_log() -&gt; None</code>",id:"create_doc_log---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],s={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,r.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"create_doc_log---none"},(0,n.kt)("inlineCode",{parentName:"h2"},"create_doc_log() -> None")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method creates a document log file. It belongs to the class ",(0,n.kt)("inlineCode",{parentName:"p"},"DocLog")," and is used for logging document information."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("p",null,"This method does not take any parameters."),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("p",null,"This method does not return anything (",(0,n.kt)("inlineCode",{parentName:"p"},"None"),")."),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-python"},"# Create a document log file\ncreate_doc_log()\n")),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"This method creates a file in the desired path specified by the ",(0,n.kt)("inlineCode",{parentName:"p"},"DocLog.get_doc_log_path()")," method. The file is created using the ",(0,n.kt)("inlineCode",{parentName:"p"},"touch()")," method, which creates a file if it does not exist or updates the modified timestamp if it already exists."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"DocLog.get_doc_log_path()"),": Retrieves the desired path for the document log file.")))}u.isMDXComponent=!0}}]);