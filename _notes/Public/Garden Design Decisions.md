---
title: Garden Design Decisions
feed: show
date: 2026-10-07
stage: budding
tended: 2026-10-07
---

## Goal

✍️ TODO (Nerando): one line on what this redesign is for.

## Palette

Two themes, one set of token names. Every text/background pair is measured against the WCAG 4.5:1 minimum.

| Token | Role | Light | Dark | Contrast on ground (light / dark) |
|---|---|---|---|---|
| ground | page background | `#F3F5F0` | `#111813` | n/a |
| surface | cards and panels | `#FFFFFF` | `#18211B` | n/a |
| ink | body text | `#17231C` | `#E6EBE2` | 14.79 / 14.90 |
| muted | dates, meta, secondary text | `#4F5E54` | `#A9B5AC` | 6.25 / 8.50 |
| line | borders and dividers | `#D6DDD2` | `#2C3A31` | decorative |
| accent | links, primary button, brand | `#24573F` | `#7FC4A0` | 7.62 / 8.85 |

Button text on the accent: 8.37 (light) / 8.85 (dark). Code blocks use a dark panel in both themes; every syntax colour is at least 5.4:1.

✍️ TODO (Nerando): why sage and deep green, and why these over the old blue-on-white.

## Type

- **Space Grotesk**: headings
- **IBM Plex Sans**: body text
- **IBM Plex Mono**: dates, meta and code

✍️ TODO (Nerando): why each face, and why three rather than one.

## Growth stages

| Stage | Meaning | Chip contrast (light / dark) |
|---|---|---|
| Seedling | Rough idea or first notes. Probably wrong in places. | 7.25 / 10.13 |
| Budding | It clicked. Written in my own words, with an example I've used. | 6.50 / 9.14 |
| Evergreen | Applied in real work. I'd teach it from this note. | 8.37 / 8.85 |

Each note carries `stage` and `tended` in its front matter; the layout reads them, so no page hardcodes a stage.

✍️ TODO (Nerando): why growth stages at all, and why chips over icons.

## Layout

**Homepage, top to bottom:** hero, Now tending card, stage legend, Recently tended (the five most recently tended notes), Rolodex teaser, footer.

**Note page:** breadcrumb, title, meta row (stage, planted, last tended), then the article with a sidebar holding the growth timeline, an on-this-page list and the notes that link here.

✍️ TODO (Nerando): why this order, and why the sidebar on notes.

## What I rejected

- **Bulma defaults**: replaced by the token file and the garden components. ✍️ TODO (Nerando): one-line reason.
- **The hotlinked banner**: replaced by a text hero; there are no hotlinked images on the homepage. ✍️ TODO (Nerando): one-line reason.
- **The per-quarter checkbox rollover**: ✍️ TODO (Nerando): what replaced it and a one-line reason.

## Architecture

![Diagram: notes are written in Obsidian and saved to _notes/Public, pushed to GitHub, built by Netlify with Jekyll and served at garden.developingdvlpr.com. Pull requests get a GitHub Actions build check and a Netlify deploy preview.](/assets/img/notes/garden-architecture.svg)

Netlify builds and hosts the site; GitHub Actions only checks that it builds. Every change goes through a pull request with its own deploy preview before it reaches `main`.

## Before and after

**Before:** the homepage and a note page on the original theme.

![Before: the old homepage. Plain white page with the site name in large text, a short intro, blue links and a large hotlinked banner photo.](/assets/img/notes/design-before-home.jpg)

![Before: the old note page for Concept: Vue 3 Composables. A narrow centred column on white with a Back link and blue links.](/assets/img/notes/design-before-note.jpg)

**After:** the same pages on the learning-garden design.

![After: the new homepage in light mode. Sage background, a large Space Grotesk headline, two buttons and a Now tending card listing three items with stage chips.](/assets/img/notes/design-after-home-light.jpg)

![After: the new homepage in dark mode. Near-black green background with light text, a mint accent and the same layout.](/assets/img/notes/design-after-home-dark.jpg)

![After: the new note page for Concept: Vue 3 Composables. Breadcrumb, title, a Budding chip with planted and tended dates, the article on the left and a sidebar with Growth, On this page and Linked from cards.](/assets/img/notes/design-after-note-light.jpg)
