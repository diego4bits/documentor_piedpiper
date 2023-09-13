"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>_});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),l=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,i=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(r),d=n,_=u["".concat(i,".").concat(d)]||u[d]||p[d]||s;return r?a.createElement(_,o(o({ref:t},m),{},{components:r})):a.createElement(_,o({ref:t},m))}));function _(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:n,o[1]=c;for(var l=2;l<s;l++)o[l]=r[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const s={},o=void 0,c={unversionedId:"docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_system_message_template",id:"docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_system_message_template",title:"d__set_default_system_message_template",description:"setdefaultsystemmessage_template() -> None",source:"@site/docs/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_system_message_template.md",sourceDirName:"docs/src/ai_logic/documentor_chat/DocumentorChat",slug:"/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_system_message_template",permalink:"/documentor_piedpiper/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_system_message_template",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d__set_default_documentation",permalink:"/documentor_piedpiper/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_default_documentation"},next:{title:"d__set_function_current_chat_message",permalink:"/documentor_piedpiper/docs/src/ai_logic/documentor_chat/DocumentorChat/d__set_function_current_chat_message"}},i={},l=[{value:"<code>_set_default_system_message_template() -&gt; None</code>",id:"_set_default_system_message_template---none",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],m={toc:l},u="wrapper";function p(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"_set_default_system_message_template---none"},(0,n.kt)("inlineCode",{parentName:"h2"},"_set_default_system_message_template() -> None")),(0,n.kt)("h4",{id:"description"},"Description:"),(0,n.kt)("p",null,"This method sets the default system message template for the DocumentorChat class."),(0,n.kt)("h4",{id:"parameters"},"Parameters:"),(0,n.kt)("p",null,"This method does not have any parameters."),(0,n.kt)("h4",{id:"returns"},"Returns:"),(0,n.kt)("p",null,"This method does not return any value."),(0,n.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,n.kt)("p",null,"This method is called internally and does not have any specific usage cases."),(0,n.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,n.kt)("p",null,"This method creates a PromptTemplate object with a specific template string and input variables. It then assigns this PromptTemplate object to the system_message attribute of the DocumentorChat class."),(0,n.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"PromptTemplate"),": A class that represents a template for generating prompts."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"SystemMessagePromptTemplate"),": A class that represents a system message prompt template.")))}p.isMDXComponent=!0}}]);