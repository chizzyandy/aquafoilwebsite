# aQuaFoil Website Improvement Plan

Using the "Contextualizing aQuaFoil" article as a design pillar.

---

## The Core Problem

The article tells a story the website currently doesn't: **why the problem matters before the team matters.** Right now the site leads with the team and the boat. The article leads with the fiberglass disposal crisis, the materials revolution, and the SuMoth Challenge as a platform — and the team doesn't appear until the reader already cares. The website needs to follow the same narrative arc.

This plan maps every article insight to a specific change in the codebase.

---

## 1. Home Page (`src/app/page.tsx`) — Restructure the Narrative

### Current State
The home page has 7 sections: Hero → What is aQuaFoil → What We're Building → The Team → Timeline → Partnership → (no closing CTA for students). The opening section ("What is aQuaFoil") is generic — it says the marine industry is "under pressure" but gives no data, no emotion, no stakes.

### Changes

**1a. Replace Section 02 ("What is aQuaFoil") with "The Problem"**
Pull directly from the article's "An Industry Built to Last — In the Wrong Way" section. The website currently says "the marine industry is under pressure to demonstrate sustainability credentials" — that's vague. Replace with the sourced, visceral version:

- 200,000 boats reach end-of-life annually in the U.S.¹
- 100,000+ fiberglass boats reach end-of-life in the EU per year; only ~2,000 recycled²
- Carbon fiber composites carry 2–5x the carbon footprint previously estimated³
- Fiberglass does not biodegrade — these boats sit in landfills for centuries

This is section 02 of `page.tsx`. Rewrite the left column heading to something like "The boats outlast us" and the right column to the data-driven problem statement from the article.

**1b. Add a new Section 03: "A New Wave of Materials" + "Nature's Original Composite"**
Insert a new section between the problem and the build section. Pull from the article:

- Flax fibers: comparable specific strength to glass, superior vibration damping⁵
- 60%+ carbon footprint reduction with flax/bio-epoxy hulls⁶
- Bcomp ampliTex: 85% lower CO₂ than equivalent carbon fiber⁷
- Wood as nature's composite: cellulose fibers in lignin matrix, 1 m³ stores 1+ tonne CO₂¹⁸ ¹⁹
- CNC-enabled wood construction produces competitive performance²⁰

Design: use the existing `card-light` component style with a 2-column grid. Left: natural fiber composites. Right: wood/timber renaissance. This gives the visitor the "shift is happening" feeling before they see the boat.

**1c. Update Stats in Section 02**
The current `StatCounter` shows "20+" team members and "2027" competition year. Add two more:

- `60%+` — Carbon footprint reduction with sustainable composites
- `200,000` — Boats reaching end-of-life annually in the U.S.

These ground the problem in numbers on the home page itself.

**1d. Add a Student CTA at the Bottom**
The home page currently ends with "Explore partnership" (sponsor-facing only). Add a second CTA section or modify the existing one to include a `Link` to `/join` alongside `/partners`. The article speaks to both audiences — the home page should too.

---

## 2. About Page (`src/app/about/page.tsx`) — Lead with People, Not Placeholders

### Current State
The mission section is generic ("Our goal is to design and build a competition-grade foiling Moth"). Team leads have photo placeholders. Member names are "Member 1" through "Member 10". Advisors are "Faculty Advisor 1" and "Faculty Advisor 2". This undermines credibility — Cody's feedback was right: "lead with the people."

### Changes

**2a. Rewrite the Mission Statement**
Replace the current copy with language drawn from the article's executive summary and closing statement. Current: "Our goal is to design and build a competition-grade foiling Moth at Queen's University." New: pull from the article's framing — sustainability is not a constraint on performance, it's the same challenge. The closing line from the article works here: "sustainable performance, built to race" is already the tagline, but the mission section doesn't embody it.

**2b. Add Founder Bios**
The article's "What We Are Building" section has full bios for Andrew and Thomas. Port these directly into the About page. Create a distinct "Founders" section above the Sub-Team Leads grid with:

- Andrew: Schulich Leader, WASZP Junior World Champion 2025, NorthStar SailGP intern, youth coaching
- Thomas: Team Canada ISAF Youth Worlds (Brazil 2023, Italy 2024), CSA robotic arm, aQuatonomous director, NSERC USRA grant holder

Add LinkedIn links (already in `team.ts` schema as optional field — populate them).

**2c. Fill Real Names and Photos**
Update `src/data/team.ts`:
- Replace all "Member X" placeholders with real names
- Replace all "Faculty Advisor X" placeholders with real names
- Add `image` and `linkedin` fields where available
- The About page already renders photo placeholders with "Photo" text — replace with actual headshots (Cody's note: consistent lighting, same backdrop)

**2d. Add a "Why We Started" Narrative Block**
Insert a section between the Mission and Affiliation blocks that tells the founding story from the article: two first-years meeting at Queen's orientation in September 2025, bonded by sailing, saw the SuMoth Challenge as the perfect platform. This is the emotional hook Cody asked for.

---

## 3. Build Page (`src/app/build/page.tsx`) — Add the Sustainability Problem Context

### Current State
The Build page goes straight into the vessel specs and engineering systems. There is no context on *why* sustainable materials matter — it just says "every material decision must meet measurable sustainability standards" without explaining the alternative.

### Changes

**3a. Add a "The Problem We're Solving" Section at the Top**
Before the vessel specs, insert a section using the article's environmental data. This is the "sustainability problem page" that the Deliverables doc (section A3) and Cody both flagged. Content:

- The fiberglass end-of-life crisis (200K boats/year, no recycling pathway)
- Carbon fiber production footprint (2–5x higher than estimated)
- The materials comparison table from the article (Traditional vs. Sustainable Build)

This gives context to every engineering decision that follows on the page.

**3b. Add the Wood Section**
The Build page discusses bio-composites but doesn't mention wood/timber construction at all. Add the "Nature's Original Composite" angle from the article as a subsection under Materials (system 05). This is a differentiator — most SuMoth teams don't frame timber this way.

**3c. Replace Image Placeholders**
The build page has multiple "Image placeholder" divs with gray backgrounds. These need real images:
- A foiling Moth reference photo (from IMCA or SuMoth media, with licensing)
- CFD visualization renders (the team already has these per `updates.ts`)
- Material samples or layup photos

---

## 4. Partners Page (`src/app/partners/page.tsx`) — Embed the Article's Value Proposition

### Current State
The Partners page has a good structure but the copy is internally focused. The `partnershipValues` data in `src/data/partners.ts` has three values: "Proof, Not Claims", "Talent Before the Market", "First-Mover Advantage". These are decent but don't leverage the article's data.

### Changes

**4a. Add Environmental Impact Data to the Hero**
The partners hero currently says "precision manufacturing, sustainable materials, and the next generation of technical talent." Strengthen with a sourced stat from the article: something like "The marine composites industry produces boats that will sit in landfills for centuries. We're building the alternative — and we want your brand on it."

**4b. Update `partnershipValues` in `src/data/partners.ts`**
Add two more values drawn from the article:

- **ESG & Sustainability Alignment**: "Every material choice is assessed through MarineShift360 lifecycle analysis. Your sponsorship is tied to measurable, documented environmental impact — not aspirational language." (Source: article refs 12, 23)
- **International Competition Visibility**: "Your brand travels to Lake Garda, Italy alongside teams from 7+ nations during Foiling Week — covered by sailing and engineering media worldwide." (Source: article refs 5, 6)

**4c. Add the Comparison Table**
Port the Traditional vs. Sustainable Build table from the article directly into the Partners page, between the value proposition cards and the "What Partners Get" section. This is the single most compelling data element for a sponsor who has never thought about boat materials before.

**4d. Add the Canadian Market Context**
The article includes: "Canada's marine economy generates $51 billion in annual GDP and supports nearly 446,000 jobs, with employment growing at 4.8% annually."¹⁷ Add this as a stat or callout on the Partners page. It frames the talent pipeline value in economic terms.

---

## 5. New Page: `/article` or `/context` — Host the Article Itself

### What to Build
Create a new page that renders the full "Contextualizing aQuaFoil" article as a long-form editorial piece on the website. This is the CSSIC model — they host their article at cssic.ca/blog.

**Implementation:**
- New file: `src/app/article/page.tsx`
- Use the existing editorial dark/light design system
- Render the article content with proper typography (the site already has `text-hero`, `text-section`, `text-subsection`, etc.)
- Include inline superscript reference numbers linking to the References section at the bottom
- Add the data visualization (when ready) as an embedded component
- Add the comparison table as a styled HTML table matching the site's design tokens

**Navigation:**
- Add "The Problem" or "Why It Matters" to the nav links in `src/components/Nav.tsx`
- Position it before "The Build" in the nav order — the narrative arc should flow: Problem → Build → Partners → Donate → Join

---

## 6. New Page: `/updates` — Build Log (Already Scaffolded)

### Current State
`src/data/updates.ts` has 6 update entries but no page renders them. The data structure is ready (id, title, date, category, summary, optional image/link).

### What to Build
- New file: `src/app/updates/page.tsx`
- Render updates reverse-chronologically
- Use category badges (design, materials, fabrication, team, milestone)
- This is Cody's "proof we ship" page — it should feel like a build journal
- Add "Updates" to the nav in `src/components/Nav.tsx`

---

## 7. Data Files — Fill the Gaps

### `src/data/team.ts`
- Replace placeholder names with real team member names
- Add `linkedin` URLs for all leads (Andrew and Thomas at minimum)
- Add `image` paths once headshots are taken
- Update advisor names and affiliations

### `src/data/updates.ts`
- Update dates (current entries show 2024–2025 dates which may be inaccurate)
- Add recent updates: CFD hull validation, material testing progress, sponsorship milestones
- Add images to updates (CFD renders, material test photos)

### `src/data/partners.ts`
- Add the two new `partnershipValues` entries described in section 4b
- Update partner descriptions as new sponsors come on

---

## 8. Content & Asset Gaps

These aren't code changes but are blockers for the website improvements above:

| Asset | Needed For | Priority |
|---|---|---|
| Team headshots (consistent style) | About page section 2c | High |
| Foiling Moth reference photo (licensed) | Build page, Home hero | High |
| Hero video (`/video/hero.mp4`) | Home page — currently renders black fallback | Medium |
| Data visualization (CO₂ comparison) | Article page, Build page | Medium |
| CFD renders (standardized) | Build page, Updates page | Low (some exist) |
| Build-in-progress photography | Updates page | Ongoing |

---

## 9. Implementation Priority

### Sprint 1 (Highest Impact, Lowest Effort)
1. Rewrite home page Section 02 with article problem data (1a)
2. Update `team.ts` with real names and LinkedIn URLs (7)
3. Add founder bios to About page (2b, 2d)
4. Update `partnershipValues` in partners data (4b)

### Sprint 2 (New Content Sections)
5. Add sustainability problem section to Build page top (3a)
6. Add wood/timber section to Build page (3b)
7. Add comparison table to Partners page (4c)
8. Add materials section to home page (1b)

### Sprint 3 (New Pages)
9. Create `/article` page hosting the full article (5)
10. Create `/updates` page rendering the build log (6)
11. Update Nav links to include new pages (5, 6)

### Sprint 4 (Polish)
12. Replace all image placeholders with real photography (3c, 8)
13. Add student CTA to home page bottom (1d)
14. Add Canadian market stats to Partners page (4d)
15. Add hero video when available

---

## 10. Design System Notes

The existing design system is strong — dark/light editorial with signal teal accents, clean typography, reveal animations. No design system changes needed. All new content should use:

- `section-dark` / `section-carbon` / `section-light` for backgrounds
- `SectionDivider` between theme transitions
- `RevealSection` for scroll animations
- `container-editorial` for text-heavy content (max-width constrained)
- `container-full` for wider layouts
- `card-dark` / `card-light` for content cards
- `text-label text-signal` for section labels
- `text-section` for headings
- `StatCounter` for key metrics

The article's data-driven, source-cited style should carry through to the website. Every stat on the site should have a visible source — either as a footnote or a subtle citation link. This is what separates aQuaFoil from every other student team website that makes unsourced claims.
