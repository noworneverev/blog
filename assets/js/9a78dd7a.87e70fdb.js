"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2732],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),g=s(t),f=r,m=g["".concat(p,".").concat(f)]||g[f]||c[f]||o;return t?a.createElement(m,l(l({ref:n},u),{},{components:t})):a.createElement(m,l({ref:n},u))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=g;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},9813:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c}});var a=t(7462),r=t(3366),o=(t(7294),t(3905)),l=["components"],i={slug:"jekyll-pagination",title:"\u3010Jekyll\u3011 Blog Pagination \u5206\u9801(\u63db\u9801)",authors:"mike",tags:["jekyll","blog"]},p=void 0,s={permalink:"/blog/jekyll-pagination",source:"@site/blog/2017-04-22-pagination.md",title:"\u3010Jekyll\u3011 Blog Pagination \u5206\u9801(\u63db\u9801)",description:"To enable pagination for your blog, you have to include jekyll-paginate plugin in your Gemfile and in your  _config.yml under gems.",date:"2017-04-22T00:00:00.000Z",formattedDate:"April 22, 2017",tags:[{label:"jekyll",permalink:"/blog/tags/jekyll"},{label:"blog",permalink:"/blog/tags/blog"}],readingTime:1.3,truncated:!0,authors:[{name:"Yan-Ying Liao",title:"Maintainer of Go Germany/Termin Line Group",url:"https://github.com/noworneverev",imageURL:"https://avatars.githubusercontent.com/u/18380064?s=400&u=76e0d43fe3f371c897942b8fe18b840b177f0a9d&v=4",key:"mike"}],frontMatter:{slug:"jekyll-pagination",title:"\u3010Jekyll\u3011 Blog Pagination \u5206\u9801(\u63db\u9801)",authors:"mike",tags:["jekyll","blog"]},prevItem:{title:"\u3010Jekyll\u3011 Blog Disqus \u7559\u8a00\u677f",permalink:"/blog/disqus"},nextItem:{title:"\u3010Jekyll\u3011 Blog \u5b57\u578b\u66f4\u6539\u6210\u601d\u6e90\u9ed1\u9ad4",permalink:"/blog/jekyll-blog-font"}},u={authorsImageUrls:[void 0]},c=[],g={toc:c};function f(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"To enable pagination for your blog, you have to include ",(0,o.kt)("inlineCode",{parentName:"p"},"jekyll-paginate")," plugin in your Gemfile and in your  ",(0,o.kt)("inlineCode",{parentName:"p"},"_config.yml")," under gems."),(0,o.kt)("p",null,"1","."," Install ",(0,o.kt)("inlineCode",{parentName:"p"},"jekyll-paginate")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"$ gem install jekyll-paginate\n")),(0,o.kt)("p",null,"2","."," Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"_config.yml")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"gems: [jekyll-paginate]\npaginate: 5\n# Permalinks\npermalink: pretty\nurl: https://noworneverev.github.io \nbaseurl: \n")),(0,o.kt)("p",null,"Remember to change url to your domain name."),(0,o.kt)("p",null,"3","."," Modify ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html"),", Refer to ",(0,o.kt)("a",{parentName:"p",href:"https://jekyllrb.com/docs/pagination/"},"Jekyll docs"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'{% raw %}\n\n\x3c!-- This loops through the paginated posts --\x3e\n{% for post in paginator.posts %}\n<div class="list">\n<div class="post-index">\n    <div class="post-image">\n        <a href="{{post.url}}">\n              <i class="fa fa-{{post.icon}} fa-fw"></i>\n        </a>\n    </div>\n    <div class="post-content">\n        <p class="post-index-title"><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></p>\n        <p>\n             <span class="excerpt">{{ post.content | strip_html | strip_newlines | truncate: 90 }}</span>\n        </p>\n        <p class="post-detail">{{ post.date | date: \'%B %d, %Y\' }}\n             <a href="{{site.baseurl}}{{post.url}}/index.html#disqus_thread" data-disqus-identifier="{{post.url}}"></a>\n        </p>\n    </div>\n</div>\n</div>\n{% endfor %}\n\n{% if paginator.total_pages > 1 %}\n<div class="pagination" style="text-align: center;">\n  {% if paginator.previous_page %}\n    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: \'//\', \'/\' }}">&laquo; Prev</a>\n  {% else %}\n    <span>&laquo; Prev</span>\n  {% endif %}\n  {% for page in (1..paginator.total_pages) %}\n    {% if page == paginator.page %}\n      <em>{{ page }}</em>\n    {% elsif page == 1 %}\n      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: \'//\', \'/\' }}">{{ page }}</a>\n    {% else %}\n      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: \'//\', \'/\' | replace: \':num\', page }}">{{ page }}</a>\n    {% endif %}\n  {% endfor %}\n  {% if paginator.next_page %}\n    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: \'//\', \'/\' }}">Next &raquo;</a>\n  {% else %}\n    <span>Next &raquo;</span>\n  {% endif %}\n</div>\n{% endif %}\n\n{% endraw %}\n')),(0,o.kt)("p",null,"Then, it's done."))}f.isMDXComponent=!0}}]);