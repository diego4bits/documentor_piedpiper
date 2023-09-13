"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9958],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=c(n),m=s,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:s,r[1]=o;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=n(7462),s=(n(7294),n(3905));const i={},r=void 0,o={unversionedId:"docs/src/metaclasses/singleton_meta/SingletonMeta",id:"docs/src/metaclasses/singleton_meta/SingletonMeta",title:"SingletonMeta",description:"SingletonMeta",source:"@site/docs/docs/src/metaclasses/singleton_meta/SingletonMeta.md",sourceDirName:"docs/src/metaclasses/singleton_meta",slug:"/docs/src/metaclasses/singleton_meta/SingletonMeta",permalink:"/documentor_piedpiper/docs/src/metaclasses/singleton_meta/SingletonMeta",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"d___call__",permalink:"/documentor_piedpiper/docs/src/metaclasses/singleton_meta/SingletonMeta/d___call__"},next:{title:"d_SingletonMeta",permalink:"/documentor_piedpiper/docs/src/metaclasses/singleton_meta/d_SingletonMeta"}},l={},c=[{value:"<code>SingletonMeta</code>",id:"singletonmeta",level:2},{value:"Description:",id:"description",level:4},{value:"Attributes:",id:"attributes",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"singletonmeta"},(0,s.kt)("inlineCode",{parentName:"h2"},"SingletonMeta")),(0,s.kt)("h4",{id:"description"},"Description:"),(0,s.kt)("p",null,"This class represents a metaclass used for implementing the Singleton design pattern in Python."),(0,s.kt)("h4",{id:"attributes"},"Attributes:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"_instances")," (",(0,s.kt)("inlineCode",{parentName:"li"},"dict"),"): A dictionary that keeps track of the instances created for each class that uses this metaclass.")),(0,s.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case of instantiating and using the class\nclass MyClass(metaclass=SingletonMeta):\n    def __init__(self, arg1, arg2):\n        self.arg1 = arg1\n        self.arg2 = arg2\n\ninstance1 = MyClass(1, 2)\ninstance2 = MyClass(3, 4)\n\nprint(instance1 is instance2)  # Output: True\n")),(0,s.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"SingletonMeta")," class is a metaclass used for implementing the Singleton design pattern in Python. The purpose of this metaclass is to ensure that only one instance of a class is created and shared among all the objects that need it."),(0,s.kt)("p",null,"The metaclass achieves this by keeping track of the instances created for each class that uses it. It maintains a dictionary called ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances"),", which maps each class to its instance. When an instance is requested, the metaclass first checks if an instance of the class already exists in the ",(0,s.kt)("inlineCode",{parentName:"p"},"_instances")," dictionary. If so, it returns the existing instance; otherwise, it creates a new instance, adds it to the dictionary, and returns it."),(0,s.kt)("p",null,"By using the ",(0,s.kt)("inlineCode",{parentName:"p"},"SingletonMeta")," metaclass, classes can be designed to have a single shared instance, ensuring that any modifications made to that instance are visible to all objects that use it."),(0,s.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,s.kt)("p",null,"This class does not have any dependencies."))}u.isMDXComponent=!0}}]);