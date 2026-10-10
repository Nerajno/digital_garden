# Nerando's Learning Garden

A living notebook for things I'm building, breaking, and figuring out as a developer. Working notes, concept breakdowns, and project logs, published in public as I go.

> "It's not polished. That's the point."

**Live site:** [garden.developingdvlpr.com](https://garden.developingdvlpr.com/) &nbsp;·&nbsp; **Portfolio:** [developingdvlpr.com](https://developingdvlpr.com/) &nbsp;·&nbsp; **Design decisions:** [why it looks the way it does](https://garden.developingdvlpr.com/note/Garden-Design-Decisions)

---

## What's in here

- **Work Notes**: quarterly learning logs tracking concepts, projects, and goals (Q2 2025 → present)
- **Notes**: atomic notes on Vue 3, JavaScript, CSS, build tooling, and general dev topics
- **Posts**: longer-form write-ups when something is worth a full post

---

## Tech Stack

| Layer | Tool |
|---|---|
| Static site generator | [Jekyll](https://jekyllrb.com/) 4.4 |
| Theme | [Jekyll Garden v0.4](https://jekyll-garden.github.io/) |
| Markdown engine | Kramdown (GFM) |
| Syntax highlighting | Rouge (Fruity theme on a dark panel) |
| Design system | `assets/css/garden.css` tokens: light and dark palette, Space Grotesk / IBM Plex Sans / IBM Plex Mono |
| CSS framework | Bulma v0.8.2 (legacy; being replaced by the garden components) |
| Analytics | Google Analytics (GA4) |
| Hosting | [Netlify](https://www.netlify.com/) (deploy previews on every PR) |
| CI/CD | Netlify builds and deploys; GitHub Actions runs a build check |
| Runtime | Ruby 4.0.7 (`.ruby-version`) |
| Local dev | Docker (`ruby:4.0.7-alpine`) |
| Note-taking source | [Obsidian](https://obsidian.md/)  ?? |

### Key features

- Wiki-style `[[links]]` auto-converted to hyperlinks (Obsidian-compatible)
- Bidirectional backlinks on every note
- Page previews on hover
- Full-text search
- Dark / light mode toggle
- RSS feed

---

## Running locally

**With Bundler:**
```bash
bundle install
bundle exec jekyll serve
```
Open `http://localhost:4000`

**With Docker:**
```bash
docker-compose up -d
```

---

## Project structure

```
_notes/Public/   # published notes (synced from Obsidian)
_posts/          # long-form blog posts
_includes/       # reusable HTML components (Nav, Footer, Feed, etc.)
_layouts/        # page templates (Post, Stylesheet)
assets/          # CSS, images, JS
pages/           # static pages (notes feed, posts feed, 404)
_config.yml      # site configuration
```

Notes in `_notes/000 Inbox`, `_notes/200 Private`, and `_notes/300 Templates` are excluded from the build.

---

## Content license

Contents under [CC-BY-NC](https://creativecommons.org/licenses/by-nc/4.0/). Feel free to read and reference, please don't republish commercially.

Theme: [MIT License](http://opensource.org/licenses/MIT) © Jekyll Garden contributors.
