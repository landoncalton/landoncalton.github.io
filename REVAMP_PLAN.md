# Personal Website Revamp — Plan of Action

## 1. Objective

Transform the current single-screen portfolio into a polished, responsive engineering portfolio with a dark, cinematic, technology-forward visual system. The direction will take high-level inspiration from aerospace and advanced-mobility sites—precise typography, immersive imagery, restrained motion, and focused storytelling—without copying a specific company's design or content.

The result should feel credible to recruiters, collaborators, and technical audiences while remaining fast to load and simple to host on GitHub Pages.

## 2. Current-State Assessment

The site is currently a single `index.html` page that:

- Uses Bootstrap 3 and jQuery from CDNs.
- Presents a full-screen hero with six calls to action.
- Opens project media in modal-style panels.
- Mixes local media with externally hosted image and video assets.
- Has minimal project context, navigation, accessibility affordances, or metadata beyond the home page.

### Revamp priorities

1. Make the site look intentional and current on desktop and mobile.
2. Turn project links into scannable case studies with technical context.
3. Replace legacy UI dependencies with maintainable, dependency-light code.
4. Improve loading performance, keyboard support, semantic structure, and SEO.
5. Keep deployment compatible with the existing GitHub Pages repository.

## 3. Product and Content Strategy

### Primary audiences

- Hiring managers and recruiters evaluating engineering experience quickly.
- Technical collaborators who want project details and evidence of execution.
- Academic or research readers looking for publications and credentials.

### Primary actions

- View selected engineering projects.
- Review research and professional background.
- Download a résumé/portfolio.
- Open LinkedIn, GitHub, and contact links.

### Proposed information architecture

A one-page experience with anchor navigation is the recommended initial delivery. It preserves the easy GitHub Pages workflow while providing a complete portfolio narrative.

1. **Hero** — name, short engineering value proposition, two primary actions, and a quiet visual treatment.
2. **Selected work** — three to five featured project cards with category, role, tools, outcome, and media.
3. **Project detail overlays or pages** — expanded project narrative with challenge, approach, technical decisions, results, and video/image evidence.
4. **Research and credentials** — publication, education, selected technical domains, and a concise timeline.
5. **Capabilities** — grouped skill areas rather than a long, unprioritized tool list.
6. **Contact/footer** — LinkedIn, GitHub, email/contact method, résumé download, and copyright.

The first implementation should use on-page project overlays for continuity. Standalone project pages can be introduced later if additional case-study depth or search visibility is desired.

## 4. Visual Direction

### Design principles

- **Cinematic, not decorative:** use project media as evidence, with dark overlays that preserve text legibility.
- **Technical restraint:** strong grid, sharp alignment, monochrome surfaces, and one high-energy accent color.
- **Editorial hierarchy:** oversized display headlines paired with compact technical labels and concise body copy.
- **Purposeful motion:** transitions should explain state changes, not distract from content.

### Proposed design system

| Element | Direction |
| --- | --- |
| Theme | Deep charcoal/near-black foundation with off-white text and cool gray surfaces |
| Accent | Electric cyan or aerospace blue, used sparingly for active states, status marks, and key actions |
| Typography | A modern sans-serif display face paired with an accessible system sans-serif fallback; use tabular numerals for technical metadata where useful |
| Layout | 12-column desktop grid, generous horizontal margins, full-bleed image sections, compact mobile stacking |
| Components | Sticky transparent-to-solid header, pill/outlined buttons, project cards, eyebrow labels, metric blocks, modal/project panels |
| Imagery | Locally served, optimized project media; muted color grading and gradient overlays for consistency |
| Motion | 150–400 ms opacity/transform transitions; respect `prefers-reduced-motion`; avoid auto-playing sound/video |

### Responsive behavior

- Navigation condenses into an accessible menu on narrow screens.
- Hero typography uses fluid sizing rather than fixed large pixel values.
- Project grids collapse from multi-column to a single readable column.
- Media retains aspect ratio and never requires horizontal scrolling.
- Overlays use the full mobile viewport with clear close controls and focus management.

## 5. Interaction Plan

- Smooth-scroll navigation with an active section indicator.
- Primary hero actions: **View work** and **Contact / résumé**.
- Project cards open a detail panel with keyboard-accessible close behavior.
- Video playback is initiated intentionally; embedded content is paused/reset when its panel closes where practical.
- Buttons and links have visible hover, focus, and pressed states.
- A subtle scroll progress or section transition effect may be added only after the core experience is complete and performant.

## 6. Technical Architecture

### Recommended stack

Use semantic HTML, modern CSS, and small vanilla JavaScript modules. This removes the need for Bootstrap 3 and jQuery while retaining a zero-build, GitHub Pages-compatible deployment.

| Area | Plan |
| --- | --- |
| Markup | Semantic sections, heading hierarchy, native buttons/links, dialog-compatible project panels |
| Styling | A dedicated stylesheet using CSS custom properties, grid, `clamp()`, media queries, and reduced-motion support |
| Behavior | A small deferred JavaScript file for navigation, project dialogs, and scroll state |
| Assets | Store source-controlled images/video locally; provide optimized web formats and poster images |
| Hosting | Continue publishing the repository through GitHub Pages; use relative asset URLs |
| Dependencies | No UI framework by default; introduce a dependency only if it provides a clear, measurable benefit |

### Target file organization

```text
index.html
assets/
  images/
  video/
  icons/
css/
  styles.css
js/
  main.js
README.md
REVAMP_PLAN.md
```

Existing media will be evaluated and relocated only when the new asset paths are ready, so existing links are not broken during the transition.

## 7. Content Needed Before Final Build

The implementation can begin with the existing car, Tesla coil, wheelchair-assist, and AI research material. The following information should be collected or confirmed for each featured project:

- Project title, year, and a one-sentence result.
- Personal role and collaborators, if applicable.
- Problem statement and constraints.
- Methods, systems, and technical tools used.
- Measurable outcomes, lessons, or validation evidence.
- One strong cover image and optional supporting media.
- Approved external links, publication URLs, and a current résumé file.

A short professional positioning statement is also needed for the hero, for example: engineering discipline, target specialty, and the type of problems to be solved. This should be authored specifically for the intended career direction rather than inferred from the existing page.

## 8. Accessibility, Performance, and Discoverability Requirements

### Accessibility

- Semantic landmarks and a single, logical `<h1>`.
- Keyboard-operable navigation and project panels.
- Focus trapping/restoration in open dialogs; Escape closes dialogs.
- Descriptive image alternative text and video titles/captions where available.
- Sufficient text/background contrast and visible focus treatment.
- Motion reduction for users who request it.

### Performance

- Eliminate render-blocking legacy libraries where possible.
- Serve optimized, correctly sized images; use lazy loading below the fold.
- Use video poster images and avoid loading every video on initial page render.
- Self-host or efficiently load only the required fonts.
- Set explicit media dimensions to reduce layout shift.

### SEO and sharing

- Update title, description, canonical URL, Open Graph, and social preview image.
- Add a favicon and web manifest if appropriate.
- Use descriptive section and project headings.
- Add structured data for `Person`, `WebSite`, and selected `CreativeWork`/publication only after content is verified.

## 9. Delivery Phases

### Phase 1 — Content and direction

1. Confirm target audience, professional positioning, featured projects, and contact destinations.
2. Gather project summaries, approved résumé, social links, and high-resolution source assets.
3. Establish final color, typography, and imagery choices using the design system above.

**Exit criteria:** approved content outline and visual direction; no placeholder claims required for launch.

### Phase 2 — Foundation

1. Create the new page structure, asset folders, stylesheet, and JavaScript entry point.
2. Implement the global design tokens, responsive grid, header, hero, and baseline transitions.
3. Remove Bootstrap/jQuery references once replacement behavior is in place.

**Exit criteria:** responsive visual shell works without legacy UI dependencies.

### Phase 3 — Portfolio experience

1. Implement selected-work cards and reusable project detail panels.
2. Add existing car, Tesla coil, wheelchair-assist, and research content.
3. Add controlled video/image loading and panel focus management.

**Exit criteria:** every primary project is understandable without leaving the site, and all media has graceful fallback behavior.

### Phase 4 — Credibility and conversion

1. Add research, education, capabilities, and contact sections.
2. Add résumé download, GitHub/LinkedIn destinations, and an intentional contact path.
3. Finalize metadata, favicon, social preview, and analytics only if desired.

**Exit criteria:** visitors can quickly understand the profile and complete all intended actions.

### Phase 5 — QA and launch

1. Test current Chrome, Safari, Firefox, and mobile Safari/Chrome layouts.
2. Test keyboard-only navigation, focus order, modal close behavior, and reduced motion.
3. Audit responsive sizes, broken links, console errors, page weight, and social metadata.
4. Deploy through GitHub Pages and verify the production URL.

**Exit criteria:** no critical accessibility, usability, or deployment issues remain.

## 10. Definition of Done

The revamp is complete when the published site:

- Looks and behaves consistently across desktop and mobile sizes.
- Presents an unmistakably modern, technical personal brand.
- Explains featured work with context, role, and outcome.
- Has accessible navigation and project-detail interactions.
- Avoids legacy Bootstrap/jQuery reliance.
- Loads media responsibly and works on the GitHub Pages URL.
- Provides a clear way to view the résumé, professional profiles, and contact information.

## 11. Implementation Order

The build should begin with the foundation and content structure—not visual effects. Recommended sequence:

1. Lock content inventory and hero positioning.
2. Build semantic HTML and the responsive design system.
3. Add selected-project content and accessible detail panels.
4. Optimize and integrate media.
5. Add metadata and final visual polish.
6. Perform cross-browser, accessibility, and production checks.

At the time this plan was created, no production UI code had been changed. Implementation progress is tracked below.

## 12. Implementation Status

### Phase 1 — Content and direction

**Complete with deferred case-study facts.** The confirmed positioning, credentials, publication citation, public email, visual direction, media inventory, and outstanding project inputs are recorded in `PHASE_1_CONTENT_BRIEF.md`. Detailed project claims remain deferred until factual project records are supplied.

### Phase 2 — Foundation

**Complete.** The legacy Bootstrap/jQuery page has been replaced with a dependency-free responsive foundation:

- Semantic portfolio structure with a skip link, landmarks, logical heading hierarchy, and updated metadata/structured data.
- Dark, technology-oriented visual system with responsive grid, sticky navigation, mobile menu, fluid typography, focus styles, and reduced-motion handling.
- Hero, selected-work presentation, research, education/capability, and contact sections using approved Phase 1 content.
- Lightweight vanilla JavaScript for navigation state, active-section indicators, scroll progress, Escape handling, and current-year output.
- Existing local project media retained without moving assets; optimized poster creation and asset relocation remain later performance work.

### Phase 3 — Portfolio experience

**Complete with factual case-study copy pending.** The selected-work experience now provides:

- Semantic project cards with dedicated, keyboard-operable detail actions.
- Native modal project panels for the car, Tesla coil, wheelchair-assist, and research projects.
- Controlled local video playback for the car and Tesla coil, plus the wheelchair demonstration and verified publication destination.
- Escape-key close support, focus movement into dialogs, focus restoration on close, backdrop dismissal, and video reset on close.

The individual role, methods, metrics, and outcomes must still be supplied before the project summaries can be expanded into final technical case studies.
