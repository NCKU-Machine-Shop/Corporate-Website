## 1. Repo Scaffolding

- [x] 1.1 Create `assets/css/`, `assets/js/`, `assets/img/`, `en/` folders
- [x] 1.2 Add `.gitignore` (OS/editor artifacts; no git repo/commits created yet — see design.md Migration Plan)
- [x] 1.3 Add `README.md` (project overview, bilingual note, tech stack, status: branding/content pending, license pending)
- [x] 1.4 Add base `assets/css/style.css` with shared resets and mobile-first breakpoints
- [x] 1.5 Add `assets/css/tokens.css` (or a `:root` block) defining placeholder brand CSS custom properties (colors, fonts, logo path) to be swapped once CIS is provided

## 2. Site Shell

- [x] 2.1 Build shared header markup (logo/company name + nav links + language switcher) to be copied into every page
- [x] 2.2 Add collapsible mobile nav toggle in `assets/js/nav.js`
- [x] 2.3 Add active-link highlighting (per-page `class="active"` on the current nav item)
- [x] 2.4 Build shared footer markup (company name, copyright year, link to contact)
- [x] 2.5 Wire language switcher links so each page points to its exact counterpart in the other language

## 3. Content Pages (zh-TW)

- [x] 3.1 `index.html` — home page with intro/tagline and links to About, Custom Projects, R&D Experience, Contact
- [x] 3.2 `about.html` — company background (history/mission/location)
- [x] 3.3 `projects.html` — custom project case list (title + short description per entry)
- [x] 3.4 R&D Experience page — category index at top plus anchor-linked category sections
- [x] 3.5 `contact.html` — phone, `mailto:` email link, address/service area

## 4. Content Pages (English mirror)

- [x] 4.1 `en/index.html` mirroring 3.1, same structure, English copy
- [x] 4.2 `en/about.html` mirroring 3.2
- [x] 4.3 `en/projects.html` mirroring 3.3
- [x] 4.4 English R&D Experience page mirroring 3.4
- [x] 4.5 `en/contact.html` mirroring 3.5

## 5. Verification

- [x] 5.1 Walk through each spec scenario in `specs/` manually (both languages, desktop + mobile widths) and confirm it passes when opening the files locally — verified with a Playwright smoke test (all 10 pages, active-nav state, desktop/mobile nav visibility, mobile toggle + aria-expanded, zh↔en language-switcher round trip, R&D index/anchors, mailto link, no console errors); also fixed a CSS specificity bug where `.site-nav a { display:block }` was stretching the language-switch pill full width
- [x] 5.2 Confirm every zh-TW page has a matching `en/` page with identical section structure — 5 pages mirrored 1:1 in `en/`
- [x] 5.3 Confirm changing a value in the brand tokens block updates color/font site-wide with no per-page edits — all colors/fonts are read via `var(--...)` from `tokens.css` only; no hard-coded brand values in `style.css` or page markup

## Deferred (separate future changes)

- GitHub Pages deployment (`.nojekyll`, Pages settings) — once a GitHub account/remote exists
- `LICENSE` — to be brought in via forking an upstream template repo and `git pull`, not authored here
- Real company name/logo/CIS colors and final zh/en copy — currently placeholders (see design.md Open Questions)
- git init / commits — no commits in this change; see design.md Migration Plan for the staged-commit approach once a remote is connected
