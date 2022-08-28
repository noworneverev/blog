"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1871],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=u(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},871:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={slug:"special-paste",title:"\u3010VBA\u3011 Special Paste",authors:"mike",tags:["vba","excel"]},c=void 0,u={permalink:"/blog/special-paste",source:"@site/blog/2017-11-11-special-paste/index.md",title:"\u3010VBA\u3011 Special Paste",description:"Download",date:"2017-11-11T00:00:00.000Z",formattedDate:"November 11, 2017",tags:[{label:"vba",permalink:"/blog/tags/vba"},{label:"excel",permalink:"/blog/tags/excel"}],readingTime:.38,truncated:!0,authors:[{name:"Yan-Ying Liao",title:"Maintainer of Go-Germany/Termin Line Group",url:"https://github.com/noworneverev",imageURL:"https://avatars.githubusercontent.com/u/18380064?s=400&u=76e0d43fe3f371c897942b8fe18b840b177f0a9d&v=4",key:"mike"}],frontMatter:{slug:"special-paste",title:"\u3010VBA\u3011 Special Paste",authors:"mike",tags:["vba","excel"]},prevItem:{title:"\u3010VBA\u3011 Switch Editing Mode and Direction After Pressing Enter",permalink:"/blog/edit-directly-in-cells"},nextItem:{title:"\u3010VBA\u3011 Search financial reports through Market Observation Post System",permalink:"/blog/market-observation"}},s={authorsImageUrls:[void 0]},p=[{value:"Download",id:"download",level:2},{value:"Demo",id:"demo",level:2}],m={toc:p};function f(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"download"},"Download"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/noworneverev/noworneverev.github.io.old/releases/download/1.7/SpecialPaste_Value.xlam"},"SpecialPaste.xlam")),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(4410).Z,width:"1680",height:"1050"})),(0,o.kt)("p",null,"If you don't know how to use xlam file, here's the ",(0,o.kt)("a",{parentName:"p",href:"./excel-customized-ribbon"},"tutorial"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"This macro has two functions:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"SpecialPaste_Value")," can convert your selected area into values"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PasteSpecial")," can be used when you want to copy client's PBCs to your working papers and keep its format at the same time. With the customized special pasting add-in, you could paste the data with its original values, column widths and formats.")))}f.isMDXComponent=!0},4410:function(e,t,n){t.Z=n.p+"assets/images/specialpaste-e455aefff0a63658bf312a14d1e50b59.gif"}}]);