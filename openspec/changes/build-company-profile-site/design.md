## Context

Empty repo, no GitHub remote yet. Goal right now is to get the **layout/template correct** — bilingual page structure, shared shell, brand values pluggable — while final CIS (logo, color palette), final copy, and actual GitHub hosting all arrive later as separate, well-scoped follow-ups.

## Goals / Non-Goals

**Goals:**
- Static site with no build step, ready to deploy straight from a repo once one exists
- Consistent responsive header/nav/footer across all pages, including a zh-TW/English switcher
- Every content page exists in a zh-TW version and an English mirror under `en/`
- Brand colors/logo reference centralized as CSS custom properties so CIS can be dropped in later by editing one place
- Baseline repo hygiene files (`.gitignore`, `README.md`) present from the start
- Content pages editable directly as HTML by a non-technical maintainer copy-pasting text/images

**Non-Goals (this change):**
- No JS framework, bundler, or package.json
- No CMS, database, or contact-form backend (contact page links to email/phone/LINE, not a submitting form)
- No GitHub Pages configuration/deployment — deferred to a future change once a GitHub account/remote exists
- No LICENSE file — will be brought in later via forking an upstream template repo and `git pull`, not authored here
- No git commits as part of this change — files are created locally only; commit history begins once a GitHub remote is connected (see Migration Plan)
- No final branding (logo/colors) or final page copy — placeholders only
- No automated tests (static content site)

## Decisions

- **No framework / no build step**: plain HTML/CSS/JS, deployment-agnostic. Alternative considered: Astro/Hugo — rejected per user preference and because content updates are infrequent, so template reuse isn't worth a build pipeline.
- **Shared header/footer via copy-paste, not includes**: no server-side includes are available for a plain static site without a build step. Each page repeats the same header/footer markup. Trade-off accepted: edits to nav must be repeated across files (now double, for zh + en) — acceptable at this page count.
- **Bilingual via separate pages per language, not client-side toggle**: e.g. `about.html` (zh-TW) and `en/about.html` (English), linked via a language switcher in the header. Alternative considered: single page with JS-toggled `data-lang` blocks — rejected because it doubles file weight per page, needs JS to render correctly, and is worse for SEO/shareable links than plain per-language URLs. Per-language files also require zero new tooling.
- **Brand values as CSS custom properties**: define `--color-primary`, `--color-secondary`, `--color-accent`, `--font-heading`, `--font-body`, and a `--logo-src`-equivalent placeholder image path in one place (`assets/css/tokens.css` or a `:root` block in `style.css`). When CIS is provided, only that block and the logo asset file need to change.
- **R&D Experience as a single page with anchor sections** (not one file per category): matches aif.net.tw's information density without multiplying near-duplicate page shells; can be split into `rd/<category>.html` later if content grows too long for one page. Applies per language (`rd.html` / `en/rd.html`).
- **LICENSE not authored here**: user will fork an upstream template repo and `git pull` it in later, so this change deliberately omits a `LICENSE` file to avoid conflicting with that source of truth.
- **GitHub Pages deployment deferred**: no GitHub account/remote exists yet; deployment config (`.nojekyll`, Pages settings) is out of scope here and will be its own change when a remote is available.
- **No commits in this change**: work stays as uncommitted local files. Once a GitHub remote exists, commit history should be built up in stages (e.g. repo scaffolding → site shell → content pages → deployment) rather than a single squashed commit, so the repo's history reads as the project's actual build-out.

## Risks / Trade-offs

- [Nav/footer duplicated across pages, now ×2 for language] → Mitigation: keep header/footer markup minimal and clearly delimited with HTML comments so find-and-replace edits are easy across all 10–12 files.
- [Bilingual content can drift out of sync] → Mitigation: keep zh/en page structure identical (same sections, same order) so a diff between a page and its `en/` counterpart stays meaningful.
- [No contact form means no lead capture beyond mailto/tel] → Mitigation: acceptable for v1; a form (e.g. via a third-party form endpoint) can be added later without changing hosting.
- [Placeholder CIS colors look generic until real branding arrives] → Mitigation: isolate all brand tokens in one CSS block so the swap is a single, low-risk edit.
- [Uncommitted local work could be lost before a remote exists] → Mitigation: user is aware and has explicitly requested this; no repo backup mechanism needed beyond normal filesystem care.

## Migration Plan

Once a GitHub remote is connected: `git init` (if not already), then commit in stages that mirror the build order — e.g. (1) repo scaffolding (`.gitignore`, `README.md`), (2) site shell, (3) content pages, (4) later, GitHub Pages deployment as its own change — instead of one bulk commit, so the history documents how the site was actually built.

## Open Questions

- Final CIS values (logo file, color palette, fonts) — pending from user
- Final zh/en copy for each page — pending from user
- Upstream LICENSE template repo to fork — pending from user
