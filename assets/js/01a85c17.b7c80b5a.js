"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4013],{9058:function(e,t,a){a.d(t,{Z:function(){return _}});var n=a(3366),r=a(7294),l=a(6010),i=a(3557),c=a(7524),s=a(9960),m=a(5999),o="sidebar_re4s",u="sidebarItemTitle_pO2u",g="sidebarItemList_Yudw",b="sidebarItem__DBe",d="sidebarItemLink_mo7H",E="sidebarItemLinkActive_I1ZP";function p(e){var t=e.sidebar;return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,l.Z)(o,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),r.createElement("ul",{className:(0,l.Z)(g,"clean-list")},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:b},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:E},e.title))})))))}var f=a(3102);function v(e){var t=e.sidebar;return r.createElement("ul",{className:"menu__list"},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return r.createElement(f.Zo,{component:v,props:e})}function k(e){var t=e.sidebar,a=(0,c.i)();return null!=t&&t.items.length?"mobile"===a?r.createElement(h,{sidebar:t}):r.createElement(p,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,c=e.children,s=(0,n.Z)(e,N),m=t&&t.items.length>0;return r.createElement(i.Z,s,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(k,{sidebar:t}),r.createElement("main",{className:(0,l.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},c),a&&r.createElement("div",{className:"col col--2"},a))))}},1223:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),r=a(6010),l=a(5999);var i=a(1944),c=a(5281),s=a(9058),m=a(3008),o="tag_Nnez";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:o},n.createElement(m.Z,e))}))),n.createElement("hr",null))}function g(e){var t=function(e){var t={};return Object.values(e).forEach((function(e){var a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((function(e,t){var a=e[0],n=t[0];return a.localeCompare(n)})).map((function(e){return{letter:e[0],tags:e[1].sort((function(e,t){return e.label.localeCompare(t.label)}))}}))}(e.tags);return n.createElement("section",{className:"margin-vert--lg"},t.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))}var b=a(197);function d(e){var t=e.tags,a=e.sidebar,m=(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});return n.createElement(i.FG,{className:(0,r.Z)(c.k.wrapper.blogPages,c.k.page.blogTagsListPage)},n.createElement(i.d,{title:m}),n.createElement(b.Z,{tag:"blog_tags_list"}),n.createElement(s.Z,{sidebar:a},n.createElement("h1",null,m),n.createElement(g,{tags:t})))}},3008:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(9960),i="tag_zVej",c="tagRegular_sFm0",s="tagWithCount_h2kH";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(l.Z,{href:t,className:(0,r.Z)(i,m?s:c)},a,m&&n.createElement("span",null,m))}}}]);