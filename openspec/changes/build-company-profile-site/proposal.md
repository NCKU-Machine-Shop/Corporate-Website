## Why

We need a public-facing company profile website — similar in structure to [aif.net.tw](https://www.aif.net.tw/) — to introduce the company, showcase custom engineering projects and R&D experience, and give potential customers a way to make contact. The repo is currently empty; there is no site to host yet.

## What Changes

- Scaffold a static HTML/CSS/JS site (no framework, no build step)
- Add a shared responsive header/nav/footer used across all pages, mobile-first with a collapsible nav, including a zh-TW/English language switcher
- Add Home, About, Custom Projects, R&D Experience, and Contact pages, each with a zh-TW version (repo root) and an English mirror under `en/`
- Centralize brand colors/logo reference as CSS custom properties so the real CIS (logo, color palette) can be dropped in later without touching page markup
- Add baseline repo files: `.gitignore`, `README.md`
- **Deferred (out of scope for this change)**: GitHub Pages configuration/deployment — will be a separate change once a GitHub account/remote exists
- **Deferred (out of scope for this change)**: LICENSE — will be brought in later by forking an upstream template repo and pulling it in, not authored here
- **Deferred (process, not a spec item)**: no git commits for this change; local files only until a GitHub remote is connected, after which history should be built up in stages reflecting repo setup → site completion

## Capabilities

### New Capabilities
- `site-shell`: shared page layout — responsive header, navigation (incl. language switcher), and footer used consistently across all pages; brand values exposed as swappable CSS variables
- `content-pages`: the site's informational pages (home, about, custom projects, R&D experience, contact), each available in zh-TW and English, and the content sections each must contain

### Modified Capabilities
_None — this is a new project with no existing specs._

## Impact

- New static site files under the repo root (`index.html`, `about.html`, `projects.html`, `rd/`, `contact.html`, `en/`, `assets/`)
- New repo hygiene files: `.gitignore`, `README.md` (no `LICENSE` yet — see Deferred above)
- New specs: `openspec/specs/site-shell`, `openspec/specs/content-pages`
- GitHub Pages deployment intentionally not covered by this change (see Deferred above)
- No existing code, backend, or dependencies affected (repo was empty)
