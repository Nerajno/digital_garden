---
title: Temare - Learning Showcase
feed: show
date : 22-07-2025
---

### Ideation - July 22, 2025

####  Learning Showcase
*A Chronicle of Completed~ish Learning Journeys*

#### The Philosophy

In the fast-paced world of technology, we're constantly pressured to maintain, scale, and productize every project we touch. But what if the real value isn't in the final product—it's in the learning journey itself?

Inspired by [Google's project cemetery](https://killedbygoogle.com/), this graveyard serves a fundamentally different purpose. While Google's graveyard mourns discontinued products that users once depended on, my graveyard celebrates learning projects that have reached their natural end. These aren't failures, they  completed educational purpose to me.

#### The Problem with Perpetual Maintenance

I have been brainstorming and continuous project maintenance can become counter-productive to learning as a tech professional. Here is is my perspective:

**Context Switching Overhead**: maintaining old projects fragments one's attention across outdated codebases.
**Technology Debt**: yesterday's learning experiments become today's legacy systems requiring updates and updating stuff never ends.
**Opportunity Cost**: time spent maintaining is time not spent exploring new technologies.
**Perfectionism Paralysis**: The pressure to "finish" everything prevents starting new explorations.
**Learning Dilution**: maintenance work teaches you less than building something new.

#### The Wisdom of Sunsetting Projects

Not every project needs to become a product. Sometimes the greatest value lies in the journey itself—learning new technologies, understanding different paradigms, and discovering what works (and what doesn't).

Knowing when to sunset a learning project is as important as starting it. These projects served their purpose: they taught us something valuable, and now they rest here as a testament to continuous learning and skill aqquistion.

#### What Lives Here

Each project in this graveyard represents or should:
**Valuable Lessons**: Core insights gained from hands-on exploration
**Failed Experiments**: What didn't work and why (often more valuable than what did)
**Wisdom Gained**: Understanding acquired through building, breaking, and rebuilding
**Completed Learning Objectives**: Specific skills or concepts that were mastered
**Natural Conclusions**: Projects that achieved their educational purpose

#### The Proposed Lifecycle of a Learning Project || Going Forward 2025

1. **Curiosity Spark**: A new technology or concept catches your interest.
2. **Initial Exploration**: You dive in with a specific learning .
3. **Deep Dive**: Building, experimenting, and discovering edge cases.
4. **Knowledge Extraction**: Documenting insights, patterns, and lessons learned.
5. **Natural Conclusion**: The learning objective is achieved.
6. **Honorable Sunset**: The project is archived with its lessons preserved.

#### Benefits of This Approach

1. **Mental Clarity**: No guilt about "unfinished" projects
2. **Learning Velocity**: Freedom to explore without maintenance burden
3. **Knowledge Preservation**: Lessons are documented before moving on
4. **Professional Growth**: Continuous exposure to new technologies and paradigms
5. **Sustainable Learning**: A maintainable approach to technical exploration

---

*Remember: The goal isn't to build products || projects — it's to build your skillsets among other things. Each project here represents growth, curiosity satisfied, and wisdom earned through deliberate practice.*

#### Proposed Tech Stack

This is my current proposed tech and the maybe of my whys :
Vue 3: Reactive frontend framework with excellent TypeScript support and intuitive composition API.
TypeScript: Type safety for better developer experience and fewer runtime errors
Tailwind CSS: Utility-first CSS framework for rapid, consistent styling without maintenance overhead.

This stack balances learning value with practical implementation—modern enough to teach current best practices, mature enough to avoid constant breaking changes.

### Implementation Details
#### Project Structure

I have tried to build the out twice so vibe coding it ..... what a let down as the docs and current with the llms. It always seem to break at the part of where to implement tailwind due to either how vite is configured or postcss setup.

here is the proposed directory structure:

```plaintext
learnt-project || temare/
├── astro.config.mjs
├── tsconfig.json
├── tailwind.config.js
├── package.json
├── .gitignore
├── README.md
├── netlify.toml
│
├── public/                       
│   ├── favicon.svg
│   ├── og-image.png
│   └── images/                  
│       ├── placeholder-project.png
│       └── screenshots/         
│           ├── todo-v1.png
│           ├── ripley-scraper.png
│           ├── blog-ssg.png
│           ├── weather-dashboard.png
│           ├── portfolio-v2.png
│           ├── habit-tracker.png
│           ├── recipe-api.png
│           ├── css-art.png
│           ├── markdown-notes.png
│           ├── ecommerce-mock.png
│           ├── chatbot-ui.png
│           ├── stock-tracker.png
│           ├── quiz-app.png
│           ├── movie-explorer.png
│           ├── kanban-board.png
│           ├── image-compressor.png
│           ├── expense-tracker.png
│           ├── url-shortener.png
│           ├── music-player.png
│           └── blog-cms.png
│
├── src/
│   ├── components/              
│   │   ├── ProjectCard.astro       # ✅ Individual project card
│   │   ├── ProjectList.astro       # 🆕 Grid/list of projects
│   │   ├── ProjectDetail.astro     # 🆕 Single project detail view
│   │   └── SearchBar.astro         # ✅ Search + filtering
│   │
│   ├── data/                    
│   │   └── projects.ts             # ✅ Project data + helpers
│   │
│   ├── layouts/                 
│   │   └── Layout.astro            # ✅ Shared layout (nav, SEO, dark mode)
│   │
│   ├── pages/                   
│   │   ├── index.astro             # ✅ Homepage (hero, featured projects)
│   │   ├── learnt.astro            # ✅ Project listing page w/ filters
│   │   ├── learnt/                
│   │   │   └── [slug].astro        # ✅ Dynamic project detail page
│   │   ├── about.astro             # 🆕 About page
│   │   ├── contact.astro           # 🆕 Contact page
│   │   └── 404.astro               # 🆕 Custom 404 page
│   │
│   └── styles/                  
│       └── global.css              # ✅ Tailwind + custom styles
│
├── .astro/                      
│   └── types.d.ts
│
└── dist/                        
    └── ...                       

```