## ADDED Requirements

### Requirement: Bilingual page availability
Every content page SHALL exist in a zh-TW version at the repo root and an English version under `en/` with the same filename, both following the same section structure and order.

#### Scenario: English mirror exists for a zh-TW page
- **WHEN** a zh-TW page such as `about.html` exists at the repo root
- **THEN** an equivalent `en/about.html` exists containing the same sections in the same order, translated into English

### Requirement: Home page overview
The home page SHALL introduce the company and link to the site's other main sections, in both languages.

#### Scenario: Home page loads with overview and links
- **WHEN** a visitor loads `index.html` (or `en/index.html`)
- **THEN** the page displays the company name/tagline in that page's language and links to the About, Custom Projects, R&D Experience, and Contact pages in the same language

### Requirement: About page company background
The About page SHALL present company background information, in both languages.

#### Scenario: About content displayed
- **WHEN** a visitor loads `about.html` (or `en/about.html`)
- **THEN** the page displays company introduction text covering history, mission, and location, in that page's language

### Requirement: Custom Projects case listing
The Custom Projects page SHALL list custom project case studies, each with a title and short description, in both languages.

#### Scenario: Projects listed
- **WHEN** a visitor loads `projects.html` (or `en/projects.html`)
- **THEN** the page displays one or more project entries, each showing a title and a short description in that page's language

### Requirement: R&D Experience categorized sections
The R&D Experience page SHALL organize R&D experience into named categories, reachable from a category index, in both languages.

#### Scenario: R&D categories displayed with index
- **WHEN** a visitor loads the R&D Experience page in either language
- **THEN** the page displays a category index at the top and multiple named category sections, each reachable via an anchor link from that index, in that page's language

### Requirement: Contact page channels
The Contact page SHALL display the company's contact channels, in both languages.

#### Scenario: Contact info displayed
- **WHEN** a visitor loads `contact.html` (or `en/contact.html`)
- **THEN** the page displays a phone number, an email address as a `mailto:` link, and the company's address or service area, with surrounding labels in that page's language
