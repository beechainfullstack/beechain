# Bee Brower Portfolio — Design & Implementation Brief

## Purpose

This is a single-page personal portfolio for **Bee Brower**, tailored to thoughtful experiences, community, growth, and creative strategy opportunities.

The site is deliberately **not** a conventional work-history page or project portfolio. It establishes a memorable point of view, then sends hiring managers and collaborators to the résumé for the full professional record.

## Primary audience

- Hiring managers and recruiters for event, field marketing, community, growth, and brand roles.
- Event partners, collaborators, and people looking to contact Bee about a gathering or activation.

## Positioning

Core positioning:

> Experiences · community · growth

Hero voice:

> I’m a [rotating role] who crafts experiences people remember.

Rotating roles:

- community builder
- experience maker
- creative strategist
- growth operator
- host

The work should feel editorial, thoughtful, and quietly confident—not startup-generic, overly corporate, or crypto-coded.

## Reference and interpretation

The original inspiration was [dawsbot.com](https://dawsbot.com/): concise positioning, an animated rotating role phrase, section numbering, simple calls to action, and a clear résumé path.

This site should borrow that **information clarity and pacing only**. Do not reproduce its content, components, branding, or visual identity.

## Design direction

### Tone

- Editorial and professional
- Philosophical and poetic, with a restrained Dante-inspired sensibility
- Warm, worldly, and human rather than mystical or ornate
- Intentional but not precious

### Visual cues

- **Silicon Dreams / retro B2B futurism:** cool blue-white technical grids, metallic surfaces, beveled chrome frames, and polished early-2000s software physicality
- Saturated system blue for hierarchy and primary actions; restrained green for live/status metadata
- High-gloss gel buttons, small technical labels, and brushed-silver framed content cards
- A dark navy approach section with wireframe grid structure and a quiet atmospheric glow
- Spacious asymmetric compositions that keep the content editorial rather than becoming an app dashboard

### Avoid

- Project-card grids or case studies (the user does not want to foreground current projects)
- Long work-history timelines on the site
- Overly ornate “Dante” motifs, medieval illustrations, wax seals, flames, or literal references
- Heavy parallax, particle fields, exaggerated animations, or generic stock event imagery
- Unnecessary framework dependencies or Tailwind CDN usage for this static site

## Current visual tokens

```css
--ink: #0a192f;
--paper: #f5fafe;
--silver: #d6dade;
--blue: #005a9e;
--blue-dark: #003b70;
--blue-light: #70bfff;
--green: #31a24c;
--mono: "JetBrains Mono", monospace;
--sans: "Libre Franklin", Arial, sans-serif;
```

Fonts currently load from Google Fonts:

- Frutiger: preferred display and body face when installed on the visitor’s device
- Arial/Helvetica: reliable fallback for all browser environments
- Arial: used for labels, navigation, buttons, location, and timer

## Page architecture

### 1. Header

- Left: compact `B.B` wordmark.
- Right: `Approach`, `Résumé ↗`, `Contact ↗`.
- Desktop: single-row, full-width header with a bottom rule.
- Mobile: retain all three links in a compact row; no hamburger menu.

### 2. Hero

Two-column desktop composition.

Left:

- Eyebrow: “Community growth · events · field marketing”
- Very large `Bee Brower` display title
- Rotating role sentence
- Primary résumé button and secondary email CTA

Right:

- **Reserved blank headshot frame.** Do not use an existing repository photo until Bee provides/selects one.
- The current placeholder is a normal, simple silver-white photo area with only a small `Headshot forthcoming` label.
- Location note: `Los Gatos, California / Available globally` appears below the hero CTAs.

On mobile, stack the text first, then the portrait frame at full content width.

### 3. Principles

Three equal, beveled silver content tiles:

1. Make people feel expected.
2. Let the signal travel.
3. Leave room for wonder.

These describe how Bee works without claiming a project portfolio.

On mobile, make these three stacked panels with rules between them.

### 4. Footer

- Contact invitation: “Have an experience in mind? Let’s make it matter. ↗”
- Email, LinkedIn, GitHub
- Copyright
- Live session timer: `Thank you for N seconds of your time.`

## Interaction and motion

Motion is intentionally subtle and must honor `prefers-reduced-motion`.

### Existing interactions

- The role phrase cross-fades and shifts upward every 2.6 seconds.
- The underscore cursor blinks.
- Buttons lift by 3px on hover.
- Navigation and text links shift to moss green on hover.
- The footer counts the seconds since the page loaded and thanks the visitor for each second.

### Motion guidelines for improvements

- Keep durations around 180–300ms for UI feedback.
- Avoid autoplayed cinematic motion, scroll-jacking, fast transforms, or large layout shifts.
- Small opacity/reveal effects are acceptable if they preserve performance and accessibility.
- Hover states can brighten or lightly lift physical controls; avoid making whole sections move.

## Responsiveness and accessibility requirements

- The current implementation was visually checked at a wide desktop viewport and at **390px** mobile width.
- Do not introduce horizontal scrolling.
- Preserve readable type sizes at 320px–390px widths.
- Keep tap targets at least 44px where practical.
- Do not hide core navigation on mobile.
- Use semantic `header`, `main`, `section`, `article`, `footer`, headings, and descriptive link text.
- Portrait area must have useful accessible labeling when it becomes an actual image (including appropriate alt text).
- Keep reduced-motion support.
- Ensure all text meets accessible contrast against both paper and ink backgrounds.

## Content source of truth

The downloadable résumé is the source of truth for professional experience:

- File: `Bee Brower Resume.pdf`
- It was replaced with the user-provided Events & Growth Marketing résumé.
- All site résumé links point to `Bee%20Brower%20Resume.pdf`.

Do not add a detailed résumé, employment timeline, or project showcase unless Bee requests it.

## Current implementation

| File | Responsibility |
| --- | --- |
| `index.html` | Page content, semantic structure, links, font imports |
| `style.css` | All visual tokens, layouts, responsive behavior, hover and reduced-motion styling |
| `scripts.js` | Rotating role phrase, footer timer, dynamic copyright year |
| `Bee Brower Resume.pdf` | Current downloadable résumé |

This is static HTML/CSS/JavaScript. No framework, build step, or dependency installation is required.

## Useful output to return from a design coding agent

Ask the agent to return the following so changes can be reviewed and integrated efficiently:

1. A short written design rationale naming what was preserved and what changed.
2. A file-by-file changelog, including exact changed paths.
3. Desktop and mobile screenshots (at least 1440px and 390px wide).
4. Confirmation that there is no horizontal overflow at mobile width and that `prefers-reduced-motion` works.
5. Any proposed replacement copy, separately listed, so Bee can approve it without combing through code.
6. A list of new assets, fonts, external services, or dependencies—plus why each is needed.
7. Any questions or decisions that need Bee’s approval, especially headshot choice, changes to the role list, or additions beyond the résumé-led scope.

## Guardrails for the coding agent

- Preserve the blank headshot frame.
- Keep the site résumé-led; do not turn it into a project portfolio.
- Preserve the rotating-role interaction and footer time-thank-you interaction, unless replacing them with an equally accessible refinement.
- Keep direct mailto, LinkedIn, GitHub, and PDF résumé links working.
- Preserve clean mobile behavior.
- Avoid unnecessary libraries or a framework migration.
- Do not alter the résumé PDF.
