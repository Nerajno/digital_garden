# CLAUDE.md — Nerando's Learning Garden

Read this first. It is the shared source of truth for every ticket; don't re-derive
conventions from the whole repo. If something here is wrong, fix this file in the same PR.

## Stack

- **Jekyll 4.4** on **Ruby 4.0.7** (static site), **Kramdown** (GFM input, Rouge highlighting)
- **Bulma 0.8.2** CSS (being replaced by the learning-garden restyle, #17)
- Plugins: `jekyll-feed`, `jekyll-sitemap`, `jekyll-tidy`
- Theme base: Jekyll Garden v0.4 (MIT) — wikilinks, backlinks, page previews, search, dark mode
- Notes are written in **Obsidian**; `_notes/Public/` is what gets published
- Ruby version lives in `.ruby-version` only: CI (`setup-ruby`) and Netlify read it; the `Dockerfile`
  tag must match it. `logger` and `bigdecimal` are in the Gemfile because Ruby 4 no longer ships
  them as default gems. Local Ruby must be built with OpenSSL linked
  (`RUBY_CONFIGURE_OPTS="--with-openssl-dir=$(brew --prefix openssl@3)" asdf install ruby 4.0.7`).
- Hosting: **Netlify** builds `main` and serves garden.developingdvlpr.com; every PR gets a deploy
  preview link. Build settings and headers live in `netlify.toml`; GitHub Actions only checks the
  build. CSS/JS are served `max-age=0, must-revalidate` (filenames aren't hashed) — never give
  them a long cache. Redirects go in `_redirects` (published via `include:` in `_config.yml`) — every renamed
  or moved note gets a `301` line there.

## Build and run

```bash
bundle install
bundle exec jekyll serve          # http://localhost:4000
bundle exec jekyll build          # output in _site/
```

**Build check (run before every commit):**

```bash
bundle exec jekyll build > /tmp/jekyll.log 2>&1 && ! grep -iE 'error|warn' /tmp/jekyll.log && echo "BUILD CLEAN"
```

## Design language (learning garden)

Mockups: `docs/mockup-home.png`, `docs/mockup-note.png` (not published). Use the values
below — don't re-derive them from the images.

**Palette**

| Token | Hex | Use |
|---|---|---|
| ground | `#F3F5F0` | page background (sage) |
| surface | `#FFFFFF` | cards, panels |
| ink | `#17231C` | body text |
| muted | `#4F5E54` | secondary text, meta |
| line | `#D6DDD2` | borders, dividers |
| accent | `#24573F` | links, primary buttons, brand green |

Core pairing: green `#24573F` on sage `#F3F5F0`.

**Dark theme** (same token names; `assets/css/garden.css`)

| Token | Dark |
|---|---|
| ground | `#111813` |
| surface | `#18211B` |
| ink | `#E6EBE2` |
| muted | `#A9B5AC` |
| line | `#2C3A31` |
| accent | `#7FC4A0` |

Theme lives only on `<html data-theme="light|dark">` (saved in `localStorage`, applied by the
inline script at the top of the layout `<head>`); with no saved choice, `prefers-color-scheme`
follows the OS. Components use the tokens and never check the theme themselves.

**Fonts** (Google Fonts, `display=swap`, always with fallbacks)

- Headings: **Space Grotesk**
- Body: **IBM Plex Sans**
- Meta, dates, code: **IBM Plex Mono**

Every text/background pair must pass **4.5:1** contrast.

## Growth stages

The only allowed values, in order: **seedling → budding → evergreen**.

| Stage | Meaning | Chip (bg / text) |
|---|---|---|
| `seedling` | Rough idea or first notes. Probably wrong in places. | `#E3EFC4` / `#3B5212` |
| `budding` | It clicked. Written in my own words, with an example I've used. | `#F7DFBC` / `#7A3D08` |
| `evergreen` | Applied in real work. I'd teach it from this note. | `#24573F` / `#FFFFFF` |

Dark chips (bg / text): seedling `#263318` / `#D4E8A6`, budding `#3A2810` / `#F5C98F`, evergreen `#7FC4A0` / `#111813`.

Layouts read the stage from front matter; never hardcode per-note values.

## Dates

**`YYYY-MM-DD`** everywhere (front matter, data files, filenames). Older notes still use
`DD-MM-YYYY` until #15 converts them — don't copy that format.

## Front matter

Notes live in `_notes/Public/*.md` and get `layout: Post` and `/note/:title` permalinks
from `_config.yml` defaults, so don't set those per note.

```yaml
---
title: "Concept: Vue 3 Composables"   # quote titles containing a colon
feed: show                            # show | hide — lowercase only
date: 2026-03-26                      # planted date, YYYY-MM-DD
stage: budding                        # optional: seedling | budding | evergreen (#16)
tended: 2026-03-28                    # optional: last meaningful edit, YYYY-MM-DD (#16)
format: list                          # optional: list-style note layout
type: concept                         # concept | index | meta | projects | work-notes (shelf on /notes; _data/note_types.yml)
start_here: 1                         # optional: 1–3, order in the /notes "Start here" row
start_here_label: the why             # optional: label after the number on that card ("01 · the why")
start_here_blurb: "One line for the card"  # optional; "{terms}" becomes the Rolodex term count
summary: "One line used on /notes"    # shown in the shelf tables and stage cards (falls back to the excerpt)
---
```

- Link between notes with Obsidian `[[wikilinks]]`, not file paths — they survive
  permalink changes and feed backlinks.
- Filenames: no leading/trailing spaces. Renaming a published note needs a `_redirects`
  line (see #15).
- **Liquid and `{{`:** any note containing `{{` (Vue templates, Handlebars…) wraps that
  code in `{% raw %}…{% endraw %}`, or Liquid eats it (`{{ count }}` renders as nothing or
  a number). Data files are never Liquid-parsed, so `_data/*.yml` values print literally —
  don't add `{% raw %}` there (it would show as text); an include that outputs code from
  data escapes it with `| escape` instead (see `_includes/term-card.html`).

## Rolodex

`/note/Rolodex` (`_notes/Public/Rolodex.md`) is built from `_data/terms.yml`: one entry per
term. `_includes/rolodex-spindle.html` lays out the "spindle" (A–Z tabs, one card, Prev/Next,
topic select, grid) and renders every card with `_includes/term-card.html`; `assets/js/spindle.js`
shows one card at a time with the URL hash (`#term-slug`) as state. Without JS every card shows as
a list. Styled in section 08b of `assets/css/garden.css`. Adding a term means editing only `terms.yml`.
When a term outgrows its card, write it up as a note and set the term's `note:` to its URL.
The homepage Highlights carousel (`_includes/rolodex.html`, `rolodex.css`/`rolodex.js`,
data in `_data/rolodex.yml`) is a separate component that owns the `.rolodex` class.

## Notes index

`/notes` (`pages/notes.md`, `notes_index: true`) is built from note front matter only: shelves
by `type` (`_includes/notes-by-type.html`, labels/order in `_data/note_types.yml`) and plots by
`stage` (`_includes/notes-by-stage.html`, meanings in `_data/stages.yml`, shared with the homepage
legend; `plot` and `empty` are the /notes-only lines). `assets/js/notes-view.js` toggles
`?view=type|stage` and searches. A shown note without a known `type` lands in "Other" and
`_plugins/notes_type_check.rb` logs a build warning. Notes with `start_here` show only in the
"Start here" row and the stage view, not on the shelves, and empty shelves are hidden. The page
renders its own meta line and `<h1>` (the layout skips them when `notes_index` is set).

## Repo map

```
_notes/Public/    published notes (from Obsidian)
_notes/000 Inbox, 200 Private, 300 Templates   excluded from the build — never publish
_posts/           long-form posts (/post/:title)
_data/            now.yml (homepage), rolodex.yml (Highlights), terms.yml (Rolodex page),
                  stages.yml (stage meanings), note_types.yml (/notes shelves)
_plugins/         notes_type_check.rb (build warning for notes without a type)
_includes/        Nav, Footer, Homepage, Feed, Backlinks, Content, Related, rolodex, rolodex-spindle, term-card,
                  notes-by-type, notes-by-stage
_layouts/         Post.html (all page types), Stylesheet.html
assets/css/       style.css, main.css, Util.css, fruity.css, rolodex.css, garden.css, vendor/
assets/js/        Search, modeswitcher, Hamburger, rolodex, terms
pages/            index, notes feed, posts feed, lists, 404
docs/             design references — excluded from the build
```

## Do not touch

- `Gemfile.lock` — unless the ticket says so
- `_notes/000 Inbox/`, `_notes/200 Private/` — private, never commit or publish
- Note body content — unless the ticket is a content ticket

## Public-content rule

Everything in `_notes/Public/` and this repo is public and read by recruiters.
**Never name employer systems, clients, colleagues, ticket numbers or internal code** in
notes. Rewrite as a generic example ("a reporting dashboard at work") that keeps the
learning point. If unsure, flag it for the owner instead of publishing it.

## Workflow

- One ticket per branch (`feature/`, `fix/`, `docs/`, `chore/`…), from up-to-date `main`.
- Stay inside the ticket's **Scope guard**; note anything else as a follow-up.
- Run the build check before committing; PRs show a Netlify deploy preview.
- Tickets are GitHub issues #10–#23 ("Ticket N" in the title).
