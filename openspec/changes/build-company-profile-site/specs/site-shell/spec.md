## ADDED Requirements

### Requirement: Responsive navigation header
The site SHALL display a shared header with company navigation on every page. On viewports narrower than 768px, the navigation SHALL collapse behind a toggle control.

#### Scenario: Desktop navigation visible
- **WHEN** a visitor loads any page at a viewport width of 768px or wider
- **THEN** the full navigation menu is visible in the header without requiring interaction

#### Scenario: Mobile navigation collapses
- **WHEN** a visitor loads any page at a viewport width narrower than 768px
- **THEN** the navigation is hidden behind a toggle control that expands the menu when tapped

### Requirement: Consistent footer
The site SHALL display a shared footer on every page showing the company name, copyright year, and a reference to the contact page.

#### Scenario: Footer present on every page
- **WHEN** a visitor loads any page
- **THEN** the footer displays the company name, the current copyright year, and a link to the contact page

### Requirement: Active navigation state
The navigation SHALL visually indicate which page the visitor is currently viewing.

#### Scenario: Current page highlighted in nav
- **WHEN** a visitor is on a given page
- **THEN** the corresponding navigation link is visually marked as active and other links are not

### Requirement: Language switcher
The header SHALL include a switcher that links the current page to its counterpart in the other language.

#### Scenario: Switching from zh-TW to English
- **WHEN** a visitor on a zh-TW page (e.g. `about.html`) activates the language switcher
- **THEN** they are taken to the equivalent English page (e.g. `en/about.html`)

#### Scenario: Switching from English to zh-TW
- **WHEN** a visitor on an English page (e.g. `en/about.html`) activates the language switcher
- **THEN** they are taken to the equivalent zh-TW page (e.g. `about.html`)

### Requirement: Centralized brand tokens
Brand colors, fonts, and the logo reference SHALL be defined as CSS custom properties in one place rather than hard-coded per page, so final CIS values can be applied without editing page markup.

#### Scenario: Updating brand tokens applies site-wide
- **WHEN** a color or font CSS custom property is changed in the shared tokens definition
- **THEN** every page that uses that property reflects the new value without any page-level markup changes
