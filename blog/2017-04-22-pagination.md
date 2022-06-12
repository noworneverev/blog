---
slug: jekyll-pagination
title: 【Jekyll】 Blog Pagination 分頁(換頁)
authors: mike
tags: [jekyll, blog]
---

To enable pagination for your blog, you have to include `jekyll-paginate` plugin in your Gemfile and in your  `_config.yml` under gems.

<!--truncate-->

1\. Install ``jekyll-paginate``

```ruby
$ gem install jekyll-paginate
```

2\. Modify ``_config.yml``

```yml
gems: [jekyll-paginate]
paginate: 5
# Permalinks
permalink: pretty
url: https://noworneverev.github.io 
baseurl: 
```

Remember to change url to your domain name.

3\. Modify ``index.html``, Refer to [Jekyll docs](https://jekyllrb.com/docs/pagination/):


```html
{% raw %}

<!-- This loops through the paginated posts -->
{% for post in paginator.posts %}
<div class="list">
<div class="post-index">
    <div class="post-image">
        <a href="{{post.url}}">
              <i class="fa fa-{{post.icon}} fa-fw"></i>
        </a>
    </div>
    <div class="post-content">
        <p class="post-index-title"><a href="{{site.baseurl}}{{post.url}}">{{post.title}}</a></p>
        <p>
             <span class="excerpt">{{ post.content | strip_html | strip_newlines | truncate: 90 }}</span>
        </p>
        <p class="post-detail">{{ post.date | date: '%B %d, %Y' }}
             <a href="{{site.baseurl}}{{post.url}}/index.html#disqus_thread" data-disqus-identifier="{{post.url}}"></a>
        </p>
    </div>
</div>
</div>
{% endfor %}

{% if paginator.total_pages > 1 %}
<div class="pagination" style="text-align: center;">
  {% if paginator.previous_page %}
    <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
  {% else %}
    <span>&laquo; Prev</span>
  {% endif %}
  {% for page in (1..paginator.total_pages) %}
    {% if page == paginator.page %}
      <em>{{ page }}</em>
    {% elsif page == 1 %}
      <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
    {% else %}
      <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
    {% endif %}
  {% endfor %}
  {% if paginator.next_page %}
    <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
  {% else %}
    <span>Next &raquo;</span>
  {% endif %}
</div>
{% endif %}

{% endraw %}
```
Then, it's done.