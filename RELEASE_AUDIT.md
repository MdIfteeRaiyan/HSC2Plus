# HSC2Plus final release audit

Audit date: 21 October 2026

## Automated release result

- Production build: PASS
- Automated tests: 190/190 PASS
- TypeScript: PASS
- Database integrity issues: 0
- Internal application routes checked: 25, all reachable
- Public app assets and downloadable QA templates checked: 10, all reachable
- Custom 404 output: PASS

## Academic and question-bank structure

| Check | Result |
| --- | ---: |
| Learning-unit records | 356 |
| Total questions | 5,788 |
| MCQ | 1,578 |
| CQ | 1,202 |
| Written | 3,008 |
| Malformed MCQ records | 0 |
| Duplicate options | 0 |
| Duplicate prompts inside a chapter | 0 |
| CQ without model-answer support | 0 |
| Visual-dependent question without visual data | 0 |
| Known filler/template prompt matches | 0 |

Question totals now represent records that actually exist. Artificial minimum expansion, mechanically renamed duplicates and cross-subject fallback questions are excluded.

## Student journeys covered by tests

- Commerce/Humanities selection and compulsory-subject visibility
- Separate first/second-paper navigation where applicable
- Subject and chapter switching
- Detailed notes, revision and exam-night views
- MCQ selection, submission, explanation and mistake review
- CQ `1+2+3+4` model answers and local PDF upload workflow
- Custom/unlimited practice with unseen-question preference
- Test Centre timing, refresh recovery, unanswered handling and reports
- Subject-specific full-paper rules, including ICT and 100-mark model tests
- Progress storage, export/restore and optional Supabase account flow
- Focus timer history and audio controls
- Printable chapter notes, question papers and result layouts
- Offline shell, service-worker update flow and custom 404
- Keyboard labels, focus treatment, reduced motion, safe areas and mobile overflow safeguards

## Packaging and deployment checks

- Home, Commerce, Humanities, account, maker, privacy, support, terms and release-readiness pages returned successfully.
- All 16 generated subject routes returned successfully.
- Manifest, service worker, offline page, favicon and operational CSV downloads returned successfully.
- Added installable Android/PWA PNG icons at 192×192 and 512×512 plus a 180×180 Apple touch icon.

## Evidence-gated work that code cannot certify

The software is release-buildable, but the following must not be presented as completed without external evidence:

1. Qualified teacher sign-off for factual and pedagogical accuracy.
2. Authentic previous-board status without original scan, board, year, paper, set/code, question number and verification record.
3. Real AI assessment of uploaded handwritten CQ PDFs; the present workflow remains local-only.
4. Real-device results for Android Chrome, iPhone Safari, macOS Safari and assistive technologies. Automated responsive/accessibility safeguards are present, but they are not a substitute for physical-device testing.
5. Production Supabase authentication, retention and recovery checks if cloud accounts are enabled.

These boundaries are intentionally visible in the product and should remain in place for public beta.
