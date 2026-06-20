---
layout: default
title: Blog
---
# Blog

<style>
.blog-index { list-style: none; padding: 0; margin: 0; }
.blog-card {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  padding: 18px 0;
  border-bottom: 1px solid rgba(255,255,255,0.12);
  text-decoration: none;
  color: inherit;
}
.blog-card:last-child { border-bottom: none; }
.blog-thumb {
  flex-shrink: 0;
  width: 90px;
  height: 65px;
  object-fit: cover;
  border-radius: 6px;
  background: rgba(255,255,255,0.08);
}
.blog-thumb-placeholder {
  flex-shrink: 0;
  width: 90px;
  height: 65px;
  border-radius: 6px;
  background: rgba(255,255,255,0.08);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 26px;
  color: rgba(255,255,255,0.3);
}
.blog-body { flex: 1; min-width: 0; }
.blog-meta {
  font-size: 12px;
  opacity: 0.6;
  margin-bottom: 4px;
  letter-spacing: .02em;
}
.blog-title {
  font-size: 15px;
  font-weight: 600;
  color: #66b2e8;
  margin-bottom: 6px;
  line-height: 1.3;
  text-decoration: none;
}
.blog-title:hover { text-decoration: underline; }
.blog-excerpt {
  font-size: 13px;
  opacity: 0.75;
  line-height: 1.5;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>

<ul class="blog-index">
{% for post in site.posts %}
  <li>
    <div class="blog-card">
      {% if post.image %}
        <img class="blog-thumb" src="{{ post.image }}" alt="{{ post.title }}" loading="lazy"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="blog-thumb-placeholder" style="display:none;">✍️</div>
      {% else %}
        <div class="blog-thumb-placeholder">✍️</div>
      {% endif %}
      <div class="blog-body">
        <div class="blog-meta">{{ post.date | date: "%b %-d, %Y" }}</div>
        <a class="blog-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
        <div class="blog-excerpt">{{ post.excerpt | strip_html | truncate: 160 }}</div>
      </div>
    </div>
  </li>
{% endfor %}
</ul>
