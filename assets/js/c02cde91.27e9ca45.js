"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4161],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>_});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,_=p["".concat(i,".").concat(u)]||p[u]||m[u]||o;return n?r.createElement(_,s(s({ref:t},d),{},{components:n})):r.createElement(_,s({ref:t},d))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1317:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s=void 0,c={unversionedId:"docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_doc_message_template",id:"docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_doc_message_template",title:"d__set_default_doc_message_template",description:"setdefaultdocmessage_template() -> None",source:"@site/docs/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_doc_message_template.md",sourceDirName:"docs/src/ai_logic/documentor_chat/DocumentorChat",slug:"/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_doc_message_template",permalink:"/documentor_piedpiper/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_doc_message_template",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__set_default_current_chat_message",permalink:"/documentor_piedpiper/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_current_chat_message"},next:{title:"d__set_default_documentation",permalink:"/documentor_piedpiper/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_documentation"}},i={},l=[{value:"<code>_set_default_doc_message_template() -&gt; None</code>",id:"_set_default_doc_message_template---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:l},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"_set_default_doc_message_template---none"},(0,a.kt)("inlineCode",{parentName:"h2"},"_set_default_doc_message_template() -> None")),(0,a.kt)("h4",{id:"description"},"Description:"),(0,a.kt)("p",null,"This method sets the default document message template for the DocumentorChat class. It creates a template for documenting code snippets, taking into consideration the provided information about the snippet's identifier and implementation. The template is designed to help in understanding the reasons for the snippet's existence and its importance within the codebase."),(0,a.kt)("h4",{id:"parameters"},"Parameters:"),(0,a.kt)("p",null,"This method does not take any parameters."),(0,a.kt)("h4",{id:"returns"},"Returns:"),(0,a.kt)("p",null,"This method does not return any value."),(0,a.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# Example usage of the _set_default_doc_message_template() method\nchat = DocumentorChat()\nchat._set_default_doc_message_template()\n")),(0,a.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,a.kt)("p",null,"The method creates a PromptTemplate object, which serves as the template for the document message. It includes placeholders for the snippet identifier and implementation. The template is designed to be used with the HumanMessagePromptTemplate, which is then assigned to the current_doc_message attribute of the DocumentorChat object."),(0,a.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PromptTemplate"),": A template for creating chat prompts."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HumanMessagePromptTemplate"),": A specific type of prompt template for human messages.")))}m.isMDXComponent=!0}}]);