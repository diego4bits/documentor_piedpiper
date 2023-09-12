"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9813],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,f=p["".concat(l,".").concat(g)]||p[g]||u[g]||o;return n?i.createElement(f,s(s({ref:t},d),{},{components:n})):i.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=g;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:r,s[1]=a;for(var c=2;c<o;c++)s[c]=n[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},4116:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const o={},s=void 0,a={unversionedId:"docs/src/tree_sitter_logic/tree_sitter_util/get_identifier",id:"docs/src/tree_sitter_logic/tree_sitter_util/get_identifier",title:"get_identifier",description:"LanguageNodes",source:"@site/docs/docs/src/tree_sitter_logic/tree_sitter_util/get_identifier.md",sourceDirName:"docs/src/tree_sitter_logic/tree_sitter_util",slug:"/docs/src/tree_sitter_logic/tree_sitter_util/get_identifier",permalink:"/documentor_piedpiper/docs/src/tree_sitter_logic/tree_sitter_util/get_identifier",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"get_dependencies",permalink:"/documentor_piedpiper/docs/src/tree_sitter_logic/tree_sitter_util/get_dependencies"},next:{title:"get_implementation",permalink:"/documentor_piedpiper/docs/src/tree_sitter_logic/tree_sitter_util/get_implementation"}},l={},c=[{value:"<code>LanguageNodes</code>",id:"languagenodes",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"languagenodes"},(0,r.kt)("inlineCode",{parentName:"h2"},"LanguageNodes")),(0,r.kt)("h4",{id:"description"},"Description:"),(0,r.kt)("p",null,"This class represents a collection of language nodes and provides functionalities for working with these nodes."),(0,r.kt)("h4",{id:"attributes"},"Attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"py")," (",(0,r.kt)("inlineCode",{parentName:"li"},"Tuple[Set[str], Set[str]]"),"): A tuple containing two sets. The first set represents the language nodes related to class definitions and function definitions. The second set represents the language nodes related only to function definitions. Default: ",(0,r.kt)("inlineCode",{parentName:"li"},'({"class_definition", "function_definition"}, {"function_definition"})'))),(0,r.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case of instantiating and using the class\ninstance = LanguageNodes()\n# The rest of the example\n")),(0,r.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LanguageNodes")," class is used to represent a collection of language nodes. It has an attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"py")," which is a tuple containing two sets. The first set in the tuple represents the language nodes related to class definitions and function definitions, while the second set represents the language nodes related only to function definitions."),(0,r.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tree_sitter.Language"),": This dependency provides the language parsing functionality."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enum.Enum"),": This dependency provides the Enum class for creating enumerations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typing.Tuple"),": This dependency provides the Tuple class for creating tuple objects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"typing.Set"),": This dependency provides the Set class for creating set objects.")))}u.isMDXComponent=!0}}]);