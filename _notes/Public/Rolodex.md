---
title: The Rolodex
feed: show
date: 2026-03-28
stage: budding
tended: 2026-10-07
---

This page is a living index of terms, concepts, and ideas I've encountered and actually understood. It's not a glossary of definitions I've copied — each entry is written in my own words once something has clicked. Think of it as a personal vocabulary: the language I've picked up while building, reading, and figuring things out. New entries get added whenever a concept earns its place.

{%- comment -%}
  Everything below is built from _data/terms.yml: add a term there, not here.
  Card markup: _includes/term-card.html. Filters: assets/js/terms.js.
{%- endcomment -%}
{%- assign terms = site.data.terms | sort_natural: "term" -%}
{%- assign alphabet = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,#" | split: "," -%}
{%- comment -%} Each term's letter: first letter of the name, ignoring case and leading punctuation; digits go under # {%- endcomment -%}
{%- capture letters_csv -%}
  {%- for t in terms -%}
    {%- assign chars = t.term | upcase | split: "" -%}
    {%- assign found = "" -%}
    {%- for c in chars -%}
      {%- if "ABCDEFGHIJKLMNOPQRSTUVWXYZ" contains c -%}{%- assign found = c -%}{%- break -%}
      {%- elsif "0123456789" contains c -%}{%- assign found = "#" -%}{%- break -%}{%- endif -%}
    {%- endfor -%}
    {{ found | default: "#" }}{% unless forloop.last %},{% endunless %}
  {%- endfor -%}
{%- endcapture -%}
{%- assign term_letters = letters_csv | split: "," -%}
{%- assign topics = terms | map: "topics" | join: "|" | split: "|" | uniq | sort_natural -%}
{%- assign latest = terms | sort: "added" | last %}

<div class="rolodex-page">
  <dl class="rolodex-stats">
    <div class="rolodex-stats__item"><dt>Terms</dt><dd>{{ terms.size }}</dd></div>
    <div class="rolodex-stats__item"><dt>Topics</dt><dd>{{ topics.size }}</dd></div>
    <div class="rolodex-stats__item"><dt>Latest added</dt><dd><time datetime="{{ latest.added | date: '%Y-%m-%d' }}">{{ latest.added | date: '%-d %b %Y' }}</time></dd></div>
  </dl>

  <div class="rolodex-bar">
    <div class="rolodex-bar__controls" data-terms-controls hidden>
      <div class="rolodex-bar__search">
        <label for="term-filter">Filter terms</label>
        <input id="term-filter" class="rolodex-bar__input" type="search" autocomplete="off" spellcheck="false" placeholder="e.g. vue, async, build">
      </div>
      <div class="rolodex-bar__topics" role="group" aria-label="Filter by topic">
        <button type="button" class="topic-button" data-topic="" aria-pressed="true">All <span class="topic-button__count">{{ terms.size }}</span></button>
        {%- for topic in topics %}
        {%- assign topic_count = 0 -%}
        {%- for t in terms -%}{%- if t.topics contains topic -%}{%- assign topic_count = topic_count | plus: 1 -%}{%- endif -%}{%- endfor %}
        <button type="button" class="topic-button" data-topic="{{ topic | slugify }}" aria-pressed="false">{{ topic }} <span class="topic-button__count">{{ topic_count }}</span></button>
        {%- endfor %}
      </div>
      <p class="rolodex-bar__status" role="status" data-terms-status></p>
    </div>
    <nav class="az" aria-label="Jump to letter">
      <ul class="az__list">
        {%- for letter in alphabet %}
        {%- if term_letters contains letter %}
        <li><a class="az__letter" href="#letter-{% if letter == '#' %}num{% else %}{{ letter }}{% endif %}">{{ letter }}</a></li>
        {%- elsif letter != "#" %}
        <li><span class="az__letter az__letter--empty">{{ letter }}</span></li>
        {%- endif %}
        {%- endfor %}
      </ul>
    </nav>
  </div>

  <div class="rolodex-groups">
    {%- for letter in alphabet %}
    {%- if term_letters contains letter %}
    {%- if letter == "#" %}{% assign letter_id = "num" %}{% else %}{% assign letter_id = letter %}{% endif %}
    <section class="letter-group" aria-labelledby="letter-{{ letter_id }}" data-letter-group>
      <h2 class="letter-group__letter" id="letter-{{ letter_id }}">{{ letter }}</h2>
      <div class="term-grid">
        {%- for t in terms %}
        {%- if term_letters[forloop.index0] == letter %}
        {% include term-card.html term=t %}
        {%- endif %}
        {%- endfor %}
      </div>
    </section>
    {%- endif %}
    {%- endfor %}
    <p class="rolodex-empty" data-terms-empty hidden>No terms match that filter yet.</p>
  </div>
</div>

<script src="{{ '/assets/js/terms.js' | relative_url }}" defer></script>
