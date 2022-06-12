---
slug: jekyll-blog-font
title: 【Jekyll】 Blog 字型更改成思源黑體
authors: mike
tags: [jekyll, blog]
---

Jekyll blog如果要更換字型要到`css`資料夾，開啟`main.scss`，修改成以下的code，以新增`Noto Sans TC`字型：

```scss
@import url(//fonts.googleapis.com/earlyaccess/notosanstc.css);
// Our variables
$base-font-family: 'Space Mono', monospace,"Helvetica Neue", Helvetica, Arial, 'Noto Sans TC';
$head-font-family: 'Work Sans',"Helvetica Neue", Helvetica, Arial, sans-serif, 'Noto Sans TC';
```