---
layout: Post
permalink: /notes
notes_index: true
title: Welcome to the Garden
---

{% comment %}
  Notes index. Everything below comes from note front matter (feed, stage, tended, date, type,
  summary, start_here, start_here_label, start_here_blurb) and _data/stages.yml +
  _data/note_types.yml: never hardcode a note here. The layout skips its own "← Home" and <h1>
  for this page (notes_index) so the meta line can sit above the title.
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
  <script>
    /* Hide the view that isn't selected before first paint (no flash). notes-view.js takes over. */
    (function (r) {
      var v = new URLSearchParams(location.search).get('view') === 'stage' ? 'stage' : 'type';
      r.setAttribute('data-js-view', v);
    })(document.currentScript.parentNode);
  </script>
  <header class="notes-head">
    <p class="notes-meta">{{ notes.size }} notes · last tended <time datetime="{{ last_tended }}">{{ last_tended | date: '%-d %b %Y' }}</time></p>
    <h1 class="notes-title">{{ page.title }}</h1>
    <p class="notes-intro">Notes from a junior front-end developer growing into a technical consultant. Start with the three below, then browse by type, or see how far along everything is.</p>
  </header>

  {%- if start_here.size > 0 %}
  <section class="start-here" aria-labelledby="start-here-title">
    <h2 class="start-here__title" id="start-here-title">Start here</h2>
    <ol class="start-here__list">
      {%- for n in start_here %}
      {%- assign blurb = n.start_here_blurb | default: n.summary | default: n.excerpt | strip_html | normalize_whitespace | truncatewords: 18 | replace: "{terms}", site.data.terms.size %}
      <li class="start-here__card{% if forloop.first %} start-here__card--lead{% endif %}">
        <a class="start-here__link" href="{{ n.url | relative_url }}">
          <span class="start-here__label">{% if forloop.index < 10 %}0{% endif %}{{ forloop.index }}{% if n.start_here_label %} · {{ n.start_here_label }}{% endif %}</span>
          <span class="start-here__name">{{ n.title }}</span>
          <span class="start-here__blurb">{{ blurb }}</span>
        </a>
      </li>
      {%- endfor %}
    </ol>
  </section>
  {%- endif %}

  <div class="notes-bar">
    <div class="notes-bar__toggle" role="group" aria-label="Arrange notes" data-js-only hidden>
      <button type="button" class="notes-bar__button" data-view-btn="type" aria-pressed="true">By type</button>
      <button type="button" class="notes-bar__button" data-view-btn="stage" aria-pressed="false">By stage</button>
    </div>
    <a class="notes-bar__link" href="?view=stage#by-stage" data-no-js>View by stage</a>
    <div class="notes-bar__search" data-js-only hidden>
      <label for="notes-search">Search</label>
      <input id="notes-search" class="notes-bar__input" type="search" autocomplete="off" spellcheck="false" placeholder="composables, Q3…">
    </div>
  </div>
  <p class="notes-empty" role="status" data-empty></p>

  {% include notes-by-type.html %}
  {% include notes-by-stage.html %}

  <p class="notes-key">
    {%- for stage in site.data.stages -%}
    <span>{{ stage.label }} = {{ stage.key }}</span>
    {%- endfor -%}
  </p>
</div>

<script src="{{ '/assets/js/notes-view.js' | relative_url }}?v={{ site.time | date: '%s' }}" defer></script>
