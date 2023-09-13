"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1398],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),s=function(e){var r=n.useContext(a),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=s(e.components);return n.createElement(a.Provider,{value:r},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},_=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),_=i,f=d["".concat(a,".").concat(_)]||d[_]||u[_]||o;return t?n.createElement(f,p(p({ref:r},l),{},{components:t})):n.createElement(f,p({ref:r},l))}));function f(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,p=new Array(o);p[0]=_;var c={};for(var a in r)hasOwnProperty.call(r,a)&&(c[a]=r[a]);c.originalType=e,c[d]="string"==typeof e?e:i,p[1]=c;for(var s=2;s<o;s++)p[s]=t[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}_.displayName="MDXCreateElement"},3731:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>p,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=t(7462),i=(t(7294),t(3905));const o={},p=void 0,c={unversionedId:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__check_input_file",id:"docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__check_input_file",title:"d__check_input_file",description:"checkinput_file() -> bool",source:"@site/docs/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__check_input_file.md",sourceDirName:"docs/src/repository_scrapping/code_scrapper/CodeScrapper",slug:"/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__check_input_file",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__check_input_file",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"change_file",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/change_file"},next:{title:"d__save_code_snippet",permalink:"/documentor_piedpiper/docs/src/repository_scrapping/code_scrapper/CodeScrapper/d__save_code_snippet"}},a={},s=[{value:"<code>_check_input_file() -&gt; bool</code>",id:"_check_input_file---bool",level:2},{value:"Description:",id:"description",level:4},{value:"Parameters:",id:"parameters",level:4},{value:"Returns:",id:"returns",level:4},{value:"Usage Cases:",id:"usage-cases",level:4},{value:"How it Works:",id:"how-it-works",level:4},{value:"Dependencies:",id:"dependencies",level:4}],l={toc:s},d="wrapper";function u(e){let{components:r,...t}=e;return(0,i.kt)(d,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"_check_input_file---bool"},(0,i.kt)("inlineCode",{parentName:"h2"},"_check_input_file() -> bool")),(0,i.kt)("h4",{id:"description"},"Description:"),(0,i.kt)("p",null,"This method checks if the input file is valid and of the correct type. It belongs to the class ",(0,i.kt)("inlineCode",{parentName:"p"},"CodeScrapper"),"."),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("p",null,"This method does not take any parameters."),(0,i.kt)("h4",{id:"returns"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bool"),": Returns ",(0,i.kt)("inlineCode",{parentName:"li"},"True")," if the input file is valid and of the correct type, otherwise ",(0,i.kt)("inlineCode",{parentName:"li"},"False"),".")),(0,i.kt)("h4",{id:"usage-cases"},"Usage Cases:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Sample code to demonstrate a common use case\ncode_scrapper = CodeScrapper()\ncode_scrapper._input_file = FileHandler()\nresult_case1 = code_scrapper._check_input_file()\nprint(result_case1)\n# Output: True\n\n# Another use case (if applicable)\ncode_scrapper._input_file = None\nresult_case2 = code_scrapper._check_input_file()\nprint(result_case2)\n# Output: False\n")),(0,i.kt)("h4",{id:"how-it-works"},"How it Works:"),(0,i.kt)("p",null,"The method checks if the ",(0,i.kt)("inlineCode",{parentName:"p"},"_input_file")," attribute is not ",(0,i.kt)("inlineCode",{parentName:"p"},"None")," and is an instance of ",(0,i.kt)("inlineCode",{parentName:"p"},"FileHandler"),". If both conditions are met, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", indicating that the input file is valid and of the correct type. Otherwise, it returns ",(0,i.kt)("inlineCode",{parentName:"p"},"False"),"."),(0,i.kt)("h4",{id:"dependencies"},"Dependencies:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"FileHandler"),": This class is required to check the type of the input file.")))}u.isMDXComponent=!0}}]);