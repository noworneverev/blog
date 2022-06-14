"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8397],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=s(n),f=o,d=p["".concat(u,".").concat(f)]||p[f]||m[f]||l;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var s=2;s<l;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return m}});var r=n(7462),o=n(3366),l=(n(7294),n(3905)),i=["components"],a={slug:"sumif",title:"\u3010VBA\u3011 Add symbols next to selected cells and show the result of the sum with one click",authors:"mike",tags:["vba","excel"]},u=void 0,s={permalink:"/blog/sumif",source:"@site/blog/2018-03-18-sumif/index.md",title:"\u3010VBA\u3011 Add symbols next to selected cells and show the result of the sum with one click",description:"Download",date:"2018-03-18T00:00:00.000Z",formattedDate:"March 18, 2018",tags:[{label:"vba",permalink:"/blog/tags/vba"},{label:"excel",permalink:"/blog/tags/excel"}],readingTime:.795,truncated:!0,authors:[{name:"Yan-Ying Liao",title:"Maintainer of Go-Germany",url:"https://github.com/noworneverev",imageURL:"https://avatars.githubusercontent.com/u/18380064?s=400&u=76e0d43fe3f371c897942b8fe18b840b177f0a9d&v=4",key:"mike"}],frontMatter:{slug:"sumif",title:"\u3010VBA\u3011 Add symbols next to selected cells and show the result of the sum with one click",authors:"mike",tags:["vba","excel"]},prevItem:{title:"\u3010\u5fc3\u5f97\u3011 107\u6703\u8a08\u5e2b \u4e09\u5e74\u53ca\u683c \u4e8b\u52d9\u6240\u5728\u8077\u6e96\u5099",permalink:"/blog/CPA"},nextItem:{title:"\u3010VBA\u3011 Insert tickmarks PBC textbox",permalink:"/blog/insert-tickmarks-PBC-textbox"}},c={authorsImageUrls:[void 0]},m=[{value:"Download",id:"download",level:2},{value:"Demo",id:"demo",level:2}],p={toc:m};function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,l.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"download"},"Download"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/noworneverev/noworneverev.github.io/releases/download/2.2/sumif.xlam"},"Sumif.xlam")),(0,l.kt)("h2",{id:"demo"},"Demo"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/Zblrcke.gif",alt:null})),(0,l.kt)("p",null,"If you don't know how to use xlam file, here's the ",(0,l.kt)("a",{parentName:"p",href:"./excel-customized-ribbon"},"tutorial"),"."),(0,l.kt)("p",null,"It's quite often to use Excel Sumif function when we need to sum some specific values, and now you can speed up that work with one click."),(0,l.kt)("p",null,"There are 4 combinations in the userform, that's adding the symbols to the right or left next to the selected cells and either storing them in Cells or in Textboxes. After you press OK, it'll pop up an input box to let you select where the result would be put.\nThe default symbol is \"A\", you can customize it by changing the text in the userform."),(0,l.kt)("p",null,"Noted that when you select the option that symbols are stored in Cells, it'll only sum up that column's value, because I use ",(0,l.kt)("code",null,"=Sumif"),' function here, however, there\'s no limitation when you select the "Textboxes" option, I simply use ',(0,l.kt)("code",null,"=Sum")," to sum values up in this situation."))}f.isMDXComponent=!0}}]);