"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4926],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(c,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8382:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={slug:"convert",title:"\u3010VBA\u3011 Convert Working Papers",authors:"mike",tags:["vba","excel"]},c=void 0,u={permalink:"/blog/convert",source:"@site/blog/2017-10-28-convert/index.md",title:"\u3010VBA\u3011 Convert Working Papers",description:"Download",date:"2017-10-28T00:00:00.000Z",formattedDate:"October 28, 2017",tags:[{label:"vba",permalink:"/blog/tags/vba"},{label:"excel",permalink:"/blog/tags/excel"}],readingTime:.435,truncated:!0,authors:[{name:"Yan-Ying Liao",title:"Maintainer of Go-Germany",url:"https://github.com/noworneverev",imageURL:"https://avatars.githubusercontent.com/u/18380064?s=400&u=76e0d43fe3f371c897942b8fe18b840b177f0a9d&v=4",key:"mike"}],frontMatter:{slug:"convert",title:"\u3010VBA\u3011 Convert Working Papers",authors:"mike",tags:["vba","excel"]},prevItem:{title:"\u3010VBA\u3011 Search financial reports through Market Observation Post System",permalink:"/blog/market-observation"},nextItem:{title:"\u3010VBA\u3011 Thousands separator",permalink:"/blog/thousands-separator"}},s={authorsImageUrls:[void 0]},p=[{value:"Download",id:"download",level:2},{value:"Demo",id:"demo",level:2}],f={toc:p};function m(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"download"},"Download"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/noworneverev/noworneverev.github.io/releases/download/1.5/convert.xlam"},"Convert.xlam")),(0,a.kt)("h2",{id:"demo"},"Demo"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(4178).Z,width:"1680",height:"1050"})),(0,a.kt)("p",null,"If you don't know how to use xlam file, here's the ",(0,a.kt)("a",{parentName:"p",href:"./excel-customized-ribbon"},"tutorial"),"."),(0,a.kt)("p",null,"After the audit team has finished auditing or reviewing, we have to pass working papers to the client. In case the working paper would have referencing errors, it would be safer convert all formula to values. So, this function would make all cells existing in all sheets convert to values, and delete all comments simultaneously.\n(Noted that if your workbook has hidden sheets, the macro would not work.)"))}m.isMDXComponent=!0},4178:function(e,t,r){t.Z=r.p+"assets/images/convert-05117f56e73e14e6942b0c30c382eecb.gif"}}]);