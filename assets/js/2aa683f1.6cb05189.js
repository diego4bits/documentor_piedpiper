"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4284],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",_={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=d(n),u=o,m=c["".concat(p,".").concat(u)]||c[u]||_[u]||i;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>_,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,s={unversionedId:"docs/src/snippet_management/node_info/NodeInfo/d___repr__",id:"docs/src/snippet_management/node_info/NodeInfo/d___repr__",title:"d___repr__",description:"repr() -> str",source:"@site/docs/docs/src/snippet_management/node_info/NodeInfo/d___repr__.md",sourceDirName:"docs/src/snippet_management/node_info/NodeInfo",slug:"/docs/src/snippet_management/node_info/NodeInfo/d___repr__",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d___repr__",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d___init__",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d___init__"},next:{title:"d___str__",permalink:"/documentor_piedpiper/docs/src/snippet_management/node_info/NodeInfo/d___str__"}},p={},d=[{value:"<code>__repr__() -&gt; str</code>",id:"__repr__---str",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Exceptions:",id:"exceptions",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:d},c="wrapper";function _(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"__repr__---str"},(0,o.kt)("inlineCode",{parentName:"h2"},"__repr__() -> str")),(0,o.kt)("h4",{id:"description"},"Description:"),(0,o.kt)("p",null,"This method returns a string representation of the object. It is used to provide a concise and unambiguous representation of the object. This method belongs to the class NodeInfo."),(0,o.kt)("h4",{id:"parameters"},"Parameters:"),(0,o.kt)("p",null,"This method does not take any parameters."),(0,o.kt)("h4",{id:"returns"},"Returns:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"str"),": The string representation of the object.")),(0,o.kt)("h4",{id:"exceptions"},"Exceptions:"),(0,o.kt)("p",null,"This method does not raise any exceptions."),(0,o.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"node = NodeInfo()\nresult = repr(node)\nprint(result)\n")),(0,o.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"__repr__")," method internally calls the ",(0,o.kt)("inlineCode",{parentName:"p"},"__str__")," method to get the string representation of the object. The ",(0,o.kt)("inlineCode",{parentName:"p"},"__str__")," method should be implemented in the class NodeInfo to provide a meaningful string representation. If ",(0,o.kt)("inlineCode",{parentName:"p"},"__str__")," is not implemented, the default implementation provided by the object class will be used, which may not be very informative."),(0,o.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This method does not have any dependencies.")))}_.isMDXComponent=!0}}]);