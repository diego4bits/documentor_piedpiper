"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9803],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},_=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),c=p(n),_=i,m=c["".concat(s,".").concat(_)]||c[_]||u[_]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=_;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[c]="string"==typeof e?e:i,a[1]=d;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}_.displayName="MDXCreateElement"},9861:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const o={},a=void 0,d={unversionedId:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_snippets_to_delete",id:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_snippets_to_delete",title:"d__update_snippets_to_delete",description:"updatesnippetstodelete() -> None",source:"@site/docs/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_snippets_to_delete.md",sourceDirName:"docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager",slug:"/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_snippets_to_delete",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_snippets_to_delete",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__update_old_deleted_snippets_dict",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_old_deleted_snippets_dict"},next:{title:"d__update_snippets_to_doc",permalink:"/documentor_piedpiper/docs/src/documentation_orchestrator/modified_files_manager/ModifiedFilesManager/d__update_snippets_to_doc"}},s={},p=[{value:"<code>_update_snippets_to_delete() -&gt; None</code>",id:"_update_snippets_to_delete---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"_update_snippets_to_delete---none"},(0,i.kt)("inlineCode",{parentName:"h2"},"_update_snippets_to_delete() -> None")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method updates the snippets to delete in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," object. It belongs to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"ModifiedFilesManager"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("p",null,"This method does not return anything (",(0,i.kt)("inlineCode",{parentName:"p"},"None"),")."),(0,i.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,i.kt)("p",null,"This method does not throw any exceptions."),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\nmanager = ModifiedFilesManager()\nmanager._update_snippets_to_delete()\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The method ",(0,i.kt)("inlineCode",{parentName:"p"},"_update_snippets_to_delete")," is called internally within the ",(0,i.kt)("inlineCode",{parentName:"p"},"ModifiedFilesManager")," class. It updates the snippets to delete in the ",(0,i.kt)("inlineCode",{parentName:"p"},"SnippetStorage")," object by calling the ",(0,i.kt)("inlineCode",{parentName:"p"},"update_storage")," method of the ",(0,i.kt)("inlineCode",{parentName:"p"},"snippets_to_delete")," attribute. The ",(0,i.kt)("inlineCode",{parentName:"p"},"update_storage")," method takes the ",(0,i.kt)("inlineCode",{parentName:"p"},"_old_deleted_snippets_dict")," attribute as its argument."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SnippetStorage"),": Represents the storage for code snippets."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"_old_deleted_snippets_dict"),": A dictionary representing the old deleted snippets.")))}u.isMDXComponent=!0}}]);