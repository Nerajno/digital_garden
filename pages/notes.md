---
layout: Post
permalink: /notes
notes_index: true
title: Welcome to the Garden
---

{% comment %}
  Notes index. Everything below comes from note front matter (feed, stage, tended, date,
  type, start_here) and _data/stages.yml + _data/note_types.yml: never hardcode a note here.
  Views: _includes/notes-by-type.html, _includes/notes-by-stage.html. Toggle + search:
  assets/js/notes-view.js. Without JS both views render, type first.
{% endcomment %}
{%- assign notes = site.notes | where: "feed", "show" -%}
{%- assign last_tended = "" -%}
{%- for n in notes -%}
  {%- assign t = n.tended | default: n.date | date: "%Y-%m-%d" -%}
  {%- if t > last_tended -%}{%- assign last_tended = t -%}{%- endif -%}
{%- endfor -%}
{%- assign start_here = notes | where_exp: "n", "n.start_here" | sort: "start_here" %}

<div class="notes-page" data-notes>
  <p class="notes-meta">{{ notes.size }} notes · last tended <time datetime="{{ last_tended }}">{{ last_tended | date: '%-d %b %Y' }}</time></p>

  <p class="notes-intro">Welcome to my digital garden, it uses Obsidian and the Jekyll garden theme. Its job is to be documentation of the junior front end developer to a more experienced technical consultant and professional.</p>

  {%- if start_here.size > 0 %}
  <section class="start-here" aria-labelledby="start-here-title">
    <h2 class="start-here__title" id="start-here-title">Start here</h2>
    <ol class="start-here__list">
      {%- for n in start_here %}
      {%- assign type = site.data.note_types | where: "id", n.type | first %}
      <li class="start-here__card{% if forloop.first %} start-here__card--lead{% endif %}">
        <p class="start-here__type">{{ type.label | default: "Other" }}</p>
        <a class="start-here__link" href="{{ n.url | relative_url }}">{{ n.title }}</a>
        <p class="start-here__excerpt">{{ n.excerpt | strip_html | normalize_whitespace | truncatewords: 18 }}</p>
        {%- if n.stage %}<span class="stage-chip stage-chip--{{ n.stage }}">{{ n.stage | capitalize }}</span>{% endif %}
      </li>
      {%- endfor %}
    </ol>
  </section>
  {%- endif %}

  <div class="notes-bar">
    <div class="notes-bar__toggle" role="group" aria-label="View notes" data-js-only hidden>
      <button type="button" class="notes-bar__button" data-view-btn="type" aria-pressed="true">By type</button>
      <button type="button" class="notes-bar__button" data-view-btn="stage" aria-pressed="false">By stage</button>
    </div>
    <a class="notes-bar__link" href="?view=stage#by-stage" data-no-js>View by stage</a>
    <div class="notes-bar__search" data-js-only hidden>
      <label for="notes-search">Search notes</label>
      <input id="notes-search" class="notes-bar__input" type="search" autocomplete="off" spellcheck="false" placeholder="Title or excerpt">
    </div>
  </div>
  <p class="notes-empty" role="status" data-empty></p>

  {% include notes-by-type.html %}
  {% include notes-by-stage.html %}

  <p class="notes-key">
    {%- for stage in site.data.stages -%}
    <span class="stage-chip stage-chip--{{ stage.id }}">{{ stage.label }}</span> = {{ stage.key }}{% unless forloop.last %}<span aria-hidden="true"> · </span>{% endunless %}
    {%- endfor -%}
  </p>
</div>

<script src="{{ '/assets/js/notes-view.js' | relative_url }}" defer></script>
