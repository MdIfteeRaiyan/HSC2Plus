# HSC2Plus release QA record

Release record: `2026.10.08`

This file separates automated evidence from checks that require physical devices. A row is never marked passed only because responsive CSS exists.

## Journey matrix

Every device run must cover: group selection; primary and bottom navigation; subject and chapter switching; detailed/revision/last-minute notes; unlimited MCQ; CQ writing/PDF-local notice; 30 MCQ + 7 CQ model test; refresh recovery; result report; print/PDF; progress backup; restore; offline revisit; and service-worker update.

| Environment | Width / input | Automated structure | Physical/browser run |
|---|---:|---|---|
| Android Chrome | 360×800, touch | Covered | Required before public release |
| iPhone Safari | 390×844, touch | Covered | Required before public release |
| Tablet portrait | 768×1024, touch | Covered | Required before public release |
| Tablet landscape | 1024×768, touch/keyboard | Covered | Required before public release |
| Desktop Chrome | 1440×900, keyboard/mouse | Covered | Required before public release |
| Desktop Edge | 1440×900, keyboard/mouse | Covered | Required before public release |
| macOS Safari | 1440×900, keyboard/trackpad | Covered | Required before public release |

## Language and typography audit

Automated copy review now enforces the product vocabulary **Practice, Revision, Test Centre and Exam Prep**. English subject headings and learning content remain English; Bangla-medium subjects use natural Bangla explanations and retain established English academic terms only where they improve clarity. Timers, scores, percentages and technical record IDs use English numerals; Bangla prose and CQ `ক/খ/গ/ঘ` mark references use Bengali numerals where natural.

Manual release evidence still required: read every route aloud at mobile and desktop widths; inspect mixed-script punctuation and spacing; confirm line wrapping at 200% zoom; and obtain subject-specialist approval for terminology.

## Accessibility acceptance

- Complete all primary journeys without a pointer; focus must remain visible and the mobile menu must return focus to its trigger.
- At 200% browser zoom, no learning control, answer choice, table action or bottom navigation item may be clipped or require horizontal page scrolling. Data tables may use their own labelled horizontal scroll region.
- Verify names and states for navigation, tabs, radio groups, MCQ radio buttons, checkboxes, dialogs, file inputs and status notices with VoiceOver or NVDA.
- Text and meaningful icons target WCAG AA contrast: 4.5:1 for normal text and 3:1 for large text/UI boundaries.
- Coarse-pointer controls target at least 44 CSS pixels. Do not rely on colour alone for correct/incorrect or active states.
- Reduced-motion mode removes nonessential animation and smooth scrolling; forced-colour mode retains active-state outlines.

## Performance budgets

| Measure | Release budget | 2026.10.05 evidence |
|---|---:|---:|
| Largest authored client chunk, gzip | ≤ 180 KB | 179,737 bytes |
| Largest authored client chunk, raw | monitor | 750,825 bytes |
| Note imagery | lazy, sized, WebP/fallback | enforced |
| Layout shift from note images | explicit dimensions | enforced |
| Startup content | no PDF/image eager load | enforced |

The large academic data remains in one route-level client chunk, but its measured compressed size is below the current 180 KB release budget and the group selector route does not need it. Split by group and chapter when the gzip budget is exceeded, Lighthouse interaction delay regresses on a representative low-end Android device, or a chapter-data change causes the route chunk to exceed 750 KB raw. This is an evidence-based threshold, not a claim that the current architecture can grow without limit.

## Slow network and service worker

Test with Fast 3G and 4× CPU slowdown: first group navigation, chapter open, practice start and model-test resume. An already visited route must remain readable offline. A new deployment installs beside the active worker; the UI shows **Update ready**, and **Update now** activates the waiting worker and reloads once. Old `hsc2plus-*` caches are deleted on activation while local progress remains untouched.

## Print/PDF inspection

Print one Accounting, Economics/Civics and English chapter plus one full model paper and one result report. Check A4 page breaks, Bangla glyphs, accounting tables, graph/image sizing, captions and licences, answer pagination, copyright footer and mobile print preview.

## Production operations

The current deployment is an owner-private preview. Public release remains blocked until the final domain, public access policy, production analytics disclosure, error-monitoring service, named support owner, broken-link monitor, rollback drill and backup/recovery drill are recorded. Version history provides a rollback source, but a successful rollback must be rehearsed rather than assumed.

## Legal and trust review

Current product copy covers independence from NCTB and education boards, copyright and classroom reuse, image credit/licence records, local-only CQ PDFs, academic-error reporting, authentic-board evidence requirements, and hosting/analytics disclosure. A human legal review is still required after the final domain, support channel and production analytics configuration are fixed.

## Controlled launch path

1. Complete direct NCTB mapping.
2. Appoint seven subject reviewers.
3. Approve 15–20 representative chapters.
4. Audit their complete MCQ and CQ banks.
5. Complete real-device, accessibility and PDF testing.
6. Run a controlled beta with teachers and 20–50 students.
7. Resolve academic and usability reports.
8. Expand sign-off to all 94 chapters.
9. Build the authentic previous-board archive.
10. Complete operations and legal sign-off, then make the site public.

## Trust gate

- Previous-board requires board, year, set, question number and source evidence.
- Board-pattern and college-standard are original practice and must never inherit a previous-board label.
- Automated assurance is not academic sign-off.
- Content issues are stored/downloaded locally; no submission is claimed until a real support channel exists.
- CQ PDFs remain local-only until a real consented assessment service exists.

