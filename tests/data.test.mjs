import test from "node:test";
import assert from "node:assert/strict";
import crypto from "node:crypto";
import fs from "node:fs";

test("academic seed keeps the full learning loop", () => {
  const source = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["Accounting", "Finance & Banking", "Economics", "English", "explanation"]) assert.match(source, new RegExp(term.replace(/[&]/g, "&")));
});

test("mobile navigation and favicon are present", () => {
  assert.ok(fs.existsSync(new URL("../public/favicon.svg", import.meta.url)));
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  assert.match(shell, /bottom-nav/);
  assert.match(shell, /Public Beta|mobile-beta/);
});

test("the app is installable and reports network loss without intercepting traffic", () => {
  const layout = fs.readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const support = fs.readFileSync(new URL("../components/offline-support.tsx", import.meta.url), "utf8");
  const manifest = fs.readFileSync(new URL("../public/manifest.webmanifest", import.meta.url), "utf8");
  assert.match(layout, /manifest\.webmanifest|OfflineSupport|appleWebApp/);
  assert.match(support, /navigator\.onLine|offline/);
  assert.ok(!fs.existsSync(new URL("../public/sw.js", import.meta.url)));
  assert.match(manifest, /"display": "standalone"|"lang": "bn-BD"/);
});

test("release QA covers target devices and accessibility", () => {
  const qa = fs.readFileSync(new URL("../docs/RELEASE-QA.md", import.meta.url), "utf8");
  const support = fs.readFileSync(new URL("../components/offline-support.tsx", import.meta.url), "utf8");
  for (const marker of ["Android Chrome", "iPhone Safari", "Desktop Chrome", "Desktop Edge", "macOS Safari", "Tablet portrait", "200%", "44 CSS pixels", "Fast 3G", "179,737 bytes"]) assert.match(qa, new RegExp(marker));
  for (const marker of ["navigator.onLine", "online", "offline", 'aria-live="polite"']) assert.ok(support.includes(marker));
});

test("release assurance keeps manual and external launch gates honest", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const qa = fs.readFileSync(new URL("../docs/RELEASE-QA.md", import.meta.url), "utf8");
  for (const marker of ["releaseReadinessAudit", "terminology", "Real-device accessibility and performance approval", "Public operations and legal sign-off", "private-preview", "legal-review-pending"]) assert.ok(data.includes(marker));
  for (const marker of ["RELEASE ASSURANCE", "Public launch এখনো gated", "CONTROLLED LAUNCH PATH", "release-audit-card"]) assert.ok(dashboard.includes(marker));
  for (const marker of ["Production operations", "Legal and trust review", "controlled beta", "20–50 students"]) assert.ok(qa.includes(marker));
});

test("accessibility and language safeguards are wired into the interface", () => {
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const offline = fs.readFileSync(new URL("../components/offline-support.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["মূল অংশে যান", "aria-expanded", "aria-controls", "mainRef.current?.focus"]) assert.ok(shell.includes(marker));
  for (const marker of ['aria-live="polite"', "আপনি এখন offline", "সংযোগ ফিরলে আবার চেষ্টা করুন"]) assert.ok(offline.includes(marker));
  for (const marker of ["prefers-reduced-motion", "forced-colors", "safe-area-inset", "min-height: 44px", "release-assurance"]) assert.ok(css.includes(marker));
});

test("release validation provides executable NCTB reviewer device and beta workflows", () => {
  const page = fs.readFileSync(new URL("../app/release-readiness/page.tsx", import.meta.url), "utf8");
  const support = fs.readFileSync(new URL("../app/support/page.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["DIRECT NCTB MAPPING", "QUALIFIED REVIEWER APPROVAL", "REAL-DEVICE & SCREEN-READER QA", "CONTROLLED TEACHER/STUDENT BETA", "15–20 representative chapters", "Go / No-go thresholds", "0/356 group learning-unit records signed off"]) assert.ok(page.includes(marker));
  for (const file of ["hsc2plus-nctb-mapping-register.csv", "hsc2plus-reviewer-register.csv", "hsc2plus-chapter-signoff.csv", "hsc2plus-device-screenreader-run.csv", "hsc2plus-beta-session-log.csv", "hsc2plus-beta-issue-register.csv"]) assert.ok(fs.existsSync(new URL(`../public/templates/${file}`, import.meta.url)), `missing ${file}`);
  assert.match(support, /\/release-readiness/);
  assert.match(data, /nctb-2026-secondary-higher-catalogue|695b98afc4774958d7b7044c/);
});

test("support and legal pages state the real local-data and provenance rules", () => {
  const support = fs.readFileSync(new URL("../app/support/page.tsx", import.meta.url), "utf8");
  const privacy = fs.readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  const terms = fs.readFileSync(new URL("../app/terms/page.tsx", import.meta.url), "utf8");
  for (const marker of ["2026.10.12", "পাঠের ভুল", "Previous-board", "Board-pattern", "সরাসরি সহায়তার ইনবক্স", "নির্মাতা, লাইসেন্স", "যোগ্য বিষয় পর্যালোচকের"]) assert.ok(support.includes(marker));
  for (const marker of ["OpenAI Sites", "localStorage", "CQ-এর PDF", "Support &amp; Content Trust"]) assert.ok(privacy.includes(marker));
  for (const marker of ["স্বাধীন শিক্ষাসহায়ক প্ল্যাটফর্ম", "স্বত্ব ও পুনর্ব্যবহার", "new Date().getFullYear()", "বিগত বোর্ড প্রশ্ন নয়", "বিষয়বস্তুর সংস্করণ"]) assert.ok(terms.includes(marker));
});

test("guest identity and local-data terms are explicit", () => {
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const gateway = fs.readFileSync(new URL("../components/group-selector.tsx", import.meta.url), "utf8");
  const privacy = fs.readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  const terms = fs.readFileSync(new URL("../app/terms/page.tsx", import.meta.url), "utf8");
  assert.match(shell, /Student account/);
  assert.doesNotMatch(shell, /ইফতী রাইয়ান/);
  for (const term of ["/privacy", "/terms", "Optional cloud backup"]) assert.match(`${shell}\n${gateway}`, new RegExp(term));
  for (const term of ["browser-এ থাকে", "Supabase", "AI মূল্যায়ন চালু নয়", "manual রাখা হয়েছে", "Vercel Analytics"]) assert.match(privacy, new RegExp(term));
  for (const term of ["স্বাধীন শিক্ষাসহায়ক প্ল্যাটফর্ম", "অফিসিয়াল সেবা নয়", "বিগত বোর্ড প্রশ্ন নয়", "কোনো পরীক্ষার ফল বা গ্রেড নিশ্চিত করা হয় না"]) assert.match(terms, new RegExp(term));
});

test("all subject roadmaps and exam resources are present", () => {
  const source = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["Manufacturing accounts", "Financial planning and control", "Entrepreneurship and business ethics", "Development and Bangladesh economy", "Citizenship in Bangladesh", "Independent Bangladesh", "Formal writing and composition", "examLibraryByGroup"]) assert.match(source, new RegExp(term));
});

test("the second deep-content batch covers every core subject", () => {
  const source = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["Trial balance", "Commercial banking", "Management principles", "Production and cost", "Organs of government", "Language movement"]) {
    assert.match(source, new RegExp(term));
  }
});

test("the student interface is Bangla-first and keeps local progress", () => {
  const gateway = fs.readFileSync(new URL("../components/group-selector.tsx", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  assert.match(gateway, /Learn\. Practice\. Repeat\./);
  assert.match(gateway, /বিভাগ বেছে নাও/);
  assert.match(dashboard, /localStorage/);
  assert.match(dashboard, /Intl\.DateTimeFormat/);
});

test("priority-one content covers every roadmap chapter and exam mode", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["completeExamLibraryByGroup", "Common mistakes", "Exam tip", "Bangladesh connection", "Foundation", "Board-style", "answerGuide"]) {
    assert.match(data, new RegExp(term));
  }
  for (const term of ["সময় ধরে লেখা অনুশীলন", "প্রশ্নের ধরন", "শ্রেণি", "উত্তর ও মূল্যায়ন নির্দেশিকা দেখো", "পর্যালোচনা:"]) {
    assert.match(dashboard, new RegExp(term));
  }
});

test("the learning workspace supports discovery and continuation", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["অধ্যায় খুঁজুন", "সংরক্ষিত", "সম্পন্ন করো", "lesson-reader-head", "আগের পাঠ", "পরের পাঠ", "hsc2plus-completed-chapters"]) {
    assert.match(dashboard, new RegExp(term));
  }
});

test("practice supports a complete assessment and recovery loop", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["question-navigator", "অনুশীলন শেষ করো", "SESSION COMPLETE", "ভুলগুলো আবার চেষ্টা করো", "ভুলের খাতা", "best-score", "ভুলগুলো দেখো"]) {
    assert.match(dashboard, new RegExp(term));
  }
});

test("readiness and revision are calculated from real local activity", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["readStudentMetrics", "hsc2plus-progress", "practice-stats", "HSC Readiness Score", "subjectCompletion", "mistakeTopics", "learningPercentForSubject", "overallLearningRate", "hsc2plus-lesson-mastery", "hsc2plus-study-sections"]) {
    assert.match(dashboard, new RegExp(term));
  }
  assert.doesNotMatch(dashboard, /You improved 7 points during the last 30 days/);
});

test("progress scoring is evidence-weighted and survives stale local data", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["readLocalJson", "validChapterKeys", "practiceConfidence", "stats.questions / 20", "Asia/Dhaka", "প্রথম Practice শুরু করো"]) assert.match(dashboard, new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  for (const term of ["sidebar-footer", "Optional cloud backup", "Switch Group", "Support and policies"]) assert.match(shell, new RegExp(term));
  assert.match(css, /\.sidebar-footer/);
  assert.match(css, /grid-template-columns: repeat\(4,1fr\)/);
  assert.match(css, /@media\(max-height:760px\)/);
});

test("test center supports timed diagnostic assessment and review", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  for (const term of ["TestCenter", "TIMED MOCK", "সময় বাকি", "পরীক্ষা জমা দাও", "EXAM REPORT", "test-history", "উত্তর দেওয়া হয়নি"]) {
    assert.match(dashboard, new RegExp(term));
  }
  assert.match(shell, /Test Centre/);
});

test("test center supports renewable MCQ, CQ and full model papers", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["testMode", "MCQ Paper", "CQ Paper", "Full Model Test", "cqQuestions", "১\\+২\\+৩\\+৪", "খাতার উত্তর PDF হিসেবে যুক্ত করো", "CQ SELF-ASSESSMENT", "প্রতিবার নতুন প্রশ্নসেট", "Continue"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["test-mode-picker", "cq-exam-paper", "test-pdf-upload", "cq-result-review"]) assert.match(css, new RegExp(term));
  assert.doesNotMatch(dashboard, /উন্নতি করো/);
});

test("model tests are subject-specific and require a final answer review", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["testSubject", "test-subject-picker", "resource.subject === testSubject", 'phase === "review"', "চূড়ান্ত যাচাই", "যাচাই করে জমা দাও", "পরে আবার দেখব", "পরীক্ষা জমা দাও", "আংশিক CQ"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["test-subject-picker", "exam-review-screen", "exam-review-grid", "exam-review-stats"]) assert.match(css, new RegExp(term));
});

test("model tests follow subject-specific HSC paper structures", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ['useState<"focus" | "standard" | "extended">("extended")', '{ mcq: 30, cq: 7 }', '{ mcq: 25, cq: 5 }', 'writtenPaper', 'ICT theory: ২৫ MCQ + ৫ CQ', 'MCQ ৩০ মিনিট + CQ ১৫০ মিনিট', 'activePaperBlueprint', 'exam-pattern-panel']) {
    assert.ok(dashboard.includes(term), `missing full-paper marker: ${term}`);
  }
  for (const term of ['hscPaperBlueprints', '"bangla:1st Paper"', '"bangla:2nd Paper"', '"english:1st Paper"', '"english:2nd Paper"', '"ict:all"', 'পারিভাষিক রূপ / অনুবাদ', 'Report writing']) assert.match(data,new RegExp(term));
});

test("exam center explains the paper and tracks section progress clearly", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["exam-pattern-panel", "প্রশ্ন ও নম্বর বণ্টন", "QUESTION BLUEPRINT", "শুরু করার আগে", "answeredExamItems", "currentSectionAnswered", "exam-section-progress", "উত্তর দেওয়া হয়েছে", "পরীক্ষার নিয়ম"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["exam-pattern-panel", "exam-task-map", "exam-start-checklist", "exam-section-progress"]) assert.match(css, new RegExp(term));
});

test("unlimited practice shows a readable bank counter instead of a merged slash value", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(dashboard, /bank-seen-counter/);
  assert.match(dashboard, /মোট \{allQuestions\.length\.toLocaleString\("bn-BD"\)\} প্রশ্নের মধ্যে দেখা/);
  assert.doesNotMatch(dashboard, /<\/strong>\/\{allQuestions\.length\} ভান্ডার দেখা/);
  assert.match(css, /continuous-run-strip \.bank-seen-counter/);
});

test("custom practice prioritizes unseen questions and tracks chapter-bank coverage", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["seenQuestionIds", "question-rotation", "freshQuestions", "Smart Question Rotation", "নতুন প্রশ্ন এখনো বাকি", "প্রশ্নভান্ডার সম্পন্ন", "Reset rotation", "নতুন করে শুরু"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["practice-rotation-status", "practice-rotation-copy", "practice-coverage"]) assert.match(css, new RegExp(term));
});

test("study planner builds persistent plans, streaks and backups", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  for (const term of ["StudyPlanner", "সাত দিনের পরিকল্পনা তৈরি করো", "লক্ষ্য পরীক্ষার তারিখ", "অগ্রগতির ব্যাকআপ নাও", "activity-dates", "লক্ষ্য পর্যন্ত", "study-plan"]) {
    assert.match(dashboard, new RegExp(term));
  }
  assert.match(shell, /Study Plan/);
  assert.doesNotMatch(shell, /8 day streak/);
});

test("local progress supports validated export, restore and group-scoped reset", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const privacy = fs.readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  for (const term of ["version: 2", "isRestorableProgressKey", "recordCount", "[1, 2].includes", "file.size > 1024 * 1024", "entries.length > 250", "entries.length !== rawEntries.length", "value.length <= 250000", "const previous = new Map", "resetGroupProgress", "window.confirm", "Backup restore", "hsc2plus-last-restore-at"]) assert.match(dashboard, new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
  for (const term of ["data-safety-panel", "restore-button", "reset-data-button", "data-notice.error"]) assert.match(css, new RegExp(term));
  assert.match(privacy, /JSON ব্যাকআপ|স্বয়ংক্রিয় সমন্বয় এখনো নেই|নিশ্চিত করার পর একটি বিভাগের স্থানীয় তথ্য মুছে ফেলা যায়/);
});

test("every subject receives chapter-specific academic anchors", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["chapterKnowledge", "depreciable amount", "letter of credit", "span of control", "comparative advantage", "constitutionalism", "corroboration", "counterargument"]) {
    assert.match(data, new RegExp(term));
  }
});

test("every generated chapter has a study guide and multiple worked tasks", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["additionalWorked", "selfCheck", "examChecklist", "Guided application", "Error-check challenge", "Source-evaluation challenge", "Transfer practice", "পরীক্ষকের মূল্যায়ন অনুশীলন"]) {
    assert.match(data, new RegExp(term));
  }
  for (const term of ["বিস্তারিত পাঠ", "পূর্ণাঙ্গ নোট", "সমাধানসহ উদাহরণ", "গুরুত্বপূর্ণ পরিভাষা", "extra-worked", "METHOD TO REUSE", "WHY THIS WORKS", "EXAM PRESENTATION", "openStudyMode", "completeStudyMode"]) {
    assert.match(dashboard, new RegExp(term));
  }
});

test("large content remains simple to navigate", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  for (const term of ["অধ্যায় খুঁজুন", "বিষয় অনুযায়ী ছাঁকুন", "visibleResources", "কোনো অধ্যায় পাওয়া যায়নি"]) {
    assert.match(dashboard, new RegExp(term));
  }
  for (const term of ["LEARN", "PRACTICE", "PLAN & TRACK", "nav-group-label"]) {
    assert.match(shell, new RegExp(term));
  }
});

test("today dashboard uses real activity and simple next actions", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["PROGRESS", "তোমার অগ্রগতি", "QUICK START", "পড়া চালিয়ে যাও", "প্রশ্ন সমাধান করো", "পড়ার সময় সাজাও", "todaySubjects"]) {
    assert.match(dashboard, new RegExp(term));
  }
  for (const obsolete of ["6h 45m", "Three repeated mistakes this week", "+18%"]) {
    assert.doesNotMatch(dashboard, new RegExp(obsolete.replace("+", "\\+")));
  }
});

test("bookmarks are reusable and complete copyrighted chapter books are printable", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["শুধু সংরক্ষিত অধ্যায়", "savedOnly", "অধ্যায়ের সম্পূর্ণ PDF", "window.print", "subjectCompleted", "chapter-print-book", "© 2026 HSC2Plus"]) {
    assert.match(dashboard, new RegExp(term.replace(".", "\\.")));
  }
  assert.match(css, /@media print/);
  assert.match(css, /\.skip-link,[^}]+display: none !important/);
});

test("custom practice turns the complete question bank into sessions", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["QuestionBankPractice", "Custom Practice", "যা প্রয়োজন, সেটিই অনুশীলন করো", "মূল্যায়ন নির্দেশিকা দেখো", "আরও অনুশীলন", "বুঝেছি", "bank-review", "MCQ Practice", "showAdvanced", "Fine-tune this set"]) {
    assert.match(dashboard, new RegExp(term));
  }
});

test("quick practice uses the full renewable MCQ pool and prioritizes unseen questions", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["practiceSeenKey", "seenQuestionIds", "buildSessionIds", "difficultyOrder", "skillOrder", "আগে না-দেখা প্রশ্ন অগ্রাধিকার", "ভান্ডার শেষ হলে নতুন চক্র"]) assert.ok(dashboard.includes(term), `missing renewable-practice marker: ${term}`);
  assert.doesNotMatch(data, /\.filter\(\(question\) => question\.type === "MCQ"[^;]+\.slice\(0, 3\)/s);
  assert.match(data, /resourceIndex \* 1000 \+ questionIndex \+ 100/);
  for (const term of ["uniquePrompts", "promptKey", "objective practice contains duplicate prompts"]) assert.ok(data.includes(term), `missing objective deduplication marker: ${term}`);
  assert.match(css, /\.practice-pool-status/);
});

test("quick practice supports a truly continuous unlimited flow", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["practiceFlow", "continuousAnswered", "continuousCorrect", "Unlimited Practice", "কোনো session limit নেই", "বিরতি ছাড়া নতুন প্রশ্ন", "buildSessionIds(nextSeenIds, nextRound)", "finishContinuousPractice", "PRACTICE REVIEW", "শেষ করে রিপোর্ট দেখো", "continuous-run-strip", "নতুন প্রশ্ন চালিয়ে যাও", "practiceFlow === \"quiz\" && <div className=\"question-navigator\""]) {
    assert.ok(dashboard.includes(term), `missing unlimited-practice marker: ${term}`);
  }
  for (const term of ["quick-practice-flow", "practice-review-button"]) assert.match(css, new RegExp(term));
});

test("lesson visuals are built from the active chapter content", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["lessonSteps", "displaySteps", "concept ?? visual.caption", "lesson-visual-title"]) assert.ok(dashboard.includes(term), `missing active lesson visual marker: ${term}`);
  assert.match(css, /\.lesson-visual/);
});

test("duplicate Exam Prep navigation is removed while assessment stays in Practice", () => {
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const learnGroup = shell.slice(shell.indexOf('{ label: "LEARN"'), shell.indexOf('{ label: "PRACTICE"'));
  const practiceGroup = shell.slice(shell.indexOf('{ label: "PRACTICE"'), shell.indexOf('{ label: "PLAN & TRACK"'));
  for (const term of ["Today", "Subjects", "My Syllabus"]) assert.match(learnGroup, new RegExp(term));
  for (const term of ["Quiz Practice", "Test Centre"]) assert.match(practiceGroup, new RegExp(term));
  assert.doesNotMatch(shell, /Exam Prep/);
  assert.doesNotMatch(practiceGroup, /id: "revision"/);
});

test("assessment tools live in the correct student workspace", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ['Written / CQ & PDF', 'display="writingOnly"', 'Last-minute Revision', 'Question Archive', 'display="archiveOnly"']) assert.match(dashboard, new RegExp(term));
  assert.match(dashboard, /activePaperBlueprint\?\.minutes/);
  assert.match(dashboard, /BOARD-PATTERN TIME/);
  for (const term of ["TestRecoveryItem", "test-recovery", "যে অধ্যায়গুলো আবার দেখবে", "openRecoveryChapter", "কোন অধ্যায় আবার পড়বে দেখো"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["PracticeTarget", "practice-target", "openRecoveryPractice", "RECOVERY PRACTICE", "A fresh chapter-specific set is ready"]) assert.match(dashboard, new RegExp(term));
});

test("product navigation is English while Bangla-medium learning remains Bangla-first", () => {
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const gateway = fs.readFileSync(new URL("../components/group-selector.tsx", import.meta.url), "utf8");
  const layout = fs.readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  for (const term of ["Today", "Subjects", "My Syllabus", "Quiz Practice", "Test Centre", "Progress"]) assert.match(shell, new RegExp(term));
  assert.doesNotMatch(shell, /Exam Prep/);
  for (const term of ["Learn\\. Practice\\. Repeat\\.", "complete HSC learning companion", "ব্যবসায় শিক্ষা", "মানবিক"]) assert.match(gateway, new RegExp(term));
  assert.match(layout, /<html lang="bn">/);
});

test("creator profiles stay unobtrusive and available from the shell and gateway", () => {
  const files = ["../components/app-shell.tsx", "../components/group-selector.tsx", "../app/maker/page.tsx", "../components/maker-profile-card.tsx"].map((path) => fs.readFileSync(new URL(path, import.meta.url), "utf8")).join("\n");
  assert.match(files, /https:\/\/github\.com\/MdIfteeRaiyan\//);
  assert.match(files, /https:\/\/www\.linkedin\.com\/in\/md-iftee-raiyan-b20336386\//);
  assert.match(files, /Maker Profile/);
  assert.match(files, /iftunotsame@gmail\.com/);
});

test("syllabus preferences filter Subjects only and do not hide assessment coverage", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const subjectLibrary = dashboard.slice(dashboard.indexOf("function SubjectLibrary"), dashboard.indexOf("function SyllabusSetup"));
  const testCenter = dashboard.slice(dashboard.indexOf("function TestCenter"), dashboard.indexOf("function StudyPlanner"));
  assert.match(subjectLibrary, /syllabus-subjects/);
  assert.doesNotMatch(testCenter, /syllabus-subjects/);
  assert.match(dashboard, /শুধু Subjects পেজে নির্বাচিত বিষয়গুলো দেখা যাবে/);
});

test("Bangla English and ICT remain visible as compulsory subjects in both groups", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const subjectLibrary = dashboard.slice(dashboard.indexOf("function SubjectLibrary"), dashboard.indexOf("function SyllabusSetup"));
  const syllabusSetup = dashboard.slice(dashboard.indexOf("function SyllabusSetup"), dashboard.indexOf("function QuestionArchive"));
  for (const marker of ['const compulsory = ["bangla", "english", "ict"]', "visibleIds", "new Set([...compulsory, ...selected])"]) assert.ok(subjectLibrary.includes(marker));
  for (const marker of ["disabled={locked}", "Core subject · সবসময় থাকবে", "new Set([...compulsory,...stored])", "new Set([...compulsory,...(chosen.length"]) assert.ok(syllabusSetup.includes(marker));
  assert.match(css, /syllabus-subject-list label\.locked/);
});

test("question archive is housed inside Practice Studio after Exam Prep removal", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  assert.match(dashboard, /mode === "archive"/);
  assert.match(dashboard, /display="archiveOnly"/);
  assert.doesNotMatch(dashboard, /function ExamPrepHub/);
});

test("supplied Bangla literature note pattern adds outcomes pre-checks and annotations", () => {
  const subjectPage = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of ["banglaLiteratureClinics", "note-entry-diagnostic", "literature-note-clinic", "Aparichita", "Manab-Kalyan"]) assert.match(subjectPage, new RegExp(marker));
});

test("student-facing copy uses Practice consistently and removes redundant or awkward labels", () => {
  const files = ["../components/group-selector.tsx", "../components/dashboard.tsx", "../components/app-shell.tsx", "../app/layout.tsx", "../lib/academic-data.ts"].map((path) => fs.readFileSync(new URL(path, import.meta.url), "utf8")).join("\n");
  const gateway = fs.readFileSync(new URL("../components/group-selector.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(files, /Practise|practise|সমাধান Coach|flagged প্রশ্ন|Review marked/);
  assert.doesNotMatch(gateway, /group-arrow/);
  for (const term of ["Learn. Practice. Repeat.", "Optional cloud backup", "সমাধান নির্দেশিকা", "আবার দেখার জন্য রাখা হয়েছে"]) assert.match(files, new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("student-facing Bangla avoids robotic revision and result wording", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const awkward of ["যা নম্বর এনে দেয়, সেটিই আগে দেখো", "Active Recall—সব একটি ছোট Revision Route", "Revision সম্পন্ন", "মিনিটের Route", "CQ skill gap", "focus items", "unanswered MCQ", "Recovery Plan খুলে দেখো", "Final করার আগে", "এই অধ্যায়ের Review record", "Revision notes · দ্রুত পুনরালোচনা", "Backup download হয়েছে", "record restore হয়েছে", "Archive publish করতে"]) {
    assert.doesNotMatch(dashboard, new RegExp(awkward));
  }
  for (const natural of ["পরীক্ষার আগে জরুরি বিষয়গুলো একবার ঝালিয়ে নাও", "না দেখে মনে করার প্রশ্নগুলো এক জায়গায় গুছিয়ে পাবে", "যে অধ্যায়গুলো আবার দেখবে", "CQ মূল্যায়ন সংরক্ষিত হয়েছে", "চূড়ান্ত করার আগে যা বাকি", "এই অধ্যায়ের পর্যালোচনা নথি", "ব্যাকআপ ডাউনলোড হয়েছে"]) assert.match(dashboard, new RegExp(natural));
  assert.doesNotMatch(data, /একটি বিকল্প ফল, প্রমাণ ও সীমাবদ্ধতা বিবেচনায়/);
});

test("English subject keeps chapters, lesson controls and practice options in English", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["englishSubject", "chapterLabel", "lessonLabel", "Search chapters", "detailed lessons", "Previous lesson", "English subject · English content", "View marking guide"]) {
    assert.match(dashboard, new RegExp(term));
  }
  assert.match(dashboard, /\["A", "B", "C", "D"\]/);
  assert.match(dashboard, /item\.subject === "English" \? item\.unit : item\.unitBn/);
  assert.match(data, /if \(subjectId === "english"\) return resource/);
  assert.match(data, /Which final check would improve a response/);
});

test("every chapter has a complete database record and the duplicate unit switcher is removed", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["review:", "lastReviewed", "curriculum: \"NCTB HSC\"", "sourcePolicy", "chapter.lessonPlan ??=", "completeExamLibraryByGroup"]) assert.ok(data.includes(term), `missing database completion marker: ${term}`);
  assert.doesNotMatch(dashboard, /unit-switcher/);
});

test("chapter workspace pairs lesson navigation with unique lesson-level teaching data", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["chapter-workspace", "বিস্তারিত অধ্যয়ন", "activeLessonDetail", "lesson-checkpoint", "BEFORE YOU CONTINUE"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["lessonDetails", "lesson.format === \"Practice\"", "বই বন্ধ করে বলো", "Edit once for missing content"]) assert.match(data, new RegExp(term, "i"));
});

test("Bangla-medium subjects use Bangla board-pattern practice", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["banglaObjectivePractice", "promptBn", "answerGuideBn", "বাংলা মাধ্যম", "বোর্ড-প্যাটার্ন", "উদ্দীপক", "ক—১", "ঘ—৪"]) {
    assert.ok(data.includes(term) || dashboard.includes(term), `missing Bangla assessment marker: ${term}`);
  }
  assert.match(data, /ব্যবসায়কে ভবিষ্যতে যে দায়/);
  assert.match(data, /চাহিদার দাম-স্থিতিস্থাপকতার মান/);
  assert.match(dashboard, /resource\.subject !== "English"/);
});

test("every lesson receives chapter-specific Bangla teaching content", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["banglaChapterDetails", "banglaSubjectMethod", "হিসাববিজ্ঞান আর্থিক ঘটনা", "আজকের এক টাকা", "অসীম অভাবের বিপরীতে", "রাষ্ট্রভাষা প্রশ্নে", "প্রশ্নের উদ্দেশ্য বোঝো"]) {
    assert.match(data, new RegExp(term));
  }
  assert.doesNotMatch(data, /titleBn: "", minutes/);
  assert.match(dashboard, /featuredResource/);
  assert.match(dashboard, /এখন প্রয়োগ করো/);
});

test("question banks provide real options and board plus college-standard items", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["optionsBn", "correctIndex", "marks", "sourceStatus"]) {
    assert.ok(data.includes(term) || dashboard.includes(term), `missing complete question-bank field: ${term}`);
  }
  assert.match(data, /উচ্চতর দক্ষতার উত্তরের সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য/);
  assert.match(dashboard, /প্রতিটি বিষয়ের নিজস্ব প্রশ্নকাঠামোয় পরীক্ষা/);
  assert.match(dashboard, /resource\.bank\.questions/);
  assert.match(data, /College-standard/);
  assert.match(data, /expandedQuestionSet/);
  assert.match(data, /mcqAngles/);
  assert.match(dashboard, /সেশনে প্রশ্ন/);
});

test("chapter learning options are grouped and dense layouts reflow cleanly", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["resource-tab-group", "practice-tabs", "পরীক্ষা প্রস্তুতি", "EXAM WORKSPACE"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /@media \(max-width: 1180px\)/);
  assert.match(css, /\.lesson-plan \{ position: static; display: grid/);
});

test("subject chapters open a complete same-page detailed study studio", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["chapter-study-studio", "study-journey", "পূর্ণাঙ্গ নোট", "সমাধানসহ উদাহরণ", "শেখার উপকরণ"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["subject-deep-panel", "deep-note-grid", "deep-worked-card", "deep-cq-framework", "deep-question-list"]) assert.match(css, new RegExp(term));
});

test("chapter introduction is an actionable plan instead of another note block", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["chapter-mission", "CHAPTER CORE", "পূর্ণাঙ্গ Tutor Note খোলো", "Chapter Practice শুরু করো", "chapterProgress", "chapterCoreTerms", "chapterVisualSteps", "chapterExamTargets"]) assert.match(page, new RegExp(term));
  assert.match(css, /\.chapter-plan-route/);
  assert.match(css, /\.chapter-mission-progress/);
  assert.match(css, /\.chapter-core-grid/);
});

test("every detailed note begins with a visual chapter primer and print-safe width", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["chapter-visual-primer", "একটি চিত্রে পুরো অধ্যায়", "অধ্যায়ের সারকথা", "ধারণার প্রবাহ", "যেখানে নম্বর তৈরি হয়"]) assert.ok(page.includes(marker));
  for (const marker of [".chapter-visual-primer-grid", "width:100%!important", "writing-mode:horizontal-tb!important", "word-break:normal!important"]) assert.ok(css.includes(marker));
});

test("subjects own learning materials while exam prep owns assessment workflows", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const studyNav = dashboard.slice(dashboard.indexOf('<nav className="study-journey"'), dashboard.indexOf('</nav>', dashboard.indexOf('<nav className="study-journey"')));
  for (const term of ["বিস্তারিত পাঠ", "পূর্ণাঙ্গ নোট", "সমাধানসহ উদাহরণ", "অধ্যায় সহায়িকা"]) assert.match(studyNav, new RegExp(term));
  for (const term of ["সৃজনশীল প্রস্তুতি", "প্রশ্ন অনুশীলন", "মডেল টেস্ট"]) assert.doesNotMatch(studyNav, new RegExp(term));
  for (const term of ["exam-only-tabs", "CQ লেখা ও PDF", "প্রশ্নভান্ডার", "অধ্যায় মডেল টেস্ট", "chapterMockQuestions", "Exam Practice, Question Bank & Assessment"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.exam-only-tabs/);
});

test("every subject chapter exposes a structured learning toolkit", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["chapter-learning-toolkit", "CHAPTER TOOLKIT", "শিখনফল", "গুরুত্বপূর্ণ পরিভাষা", "সূত্র ও উত্তর কাঠামো", "বাংলাদেশভিত্তিক প্রয়োগ", "সাধারণ ভুল", "পুনরালোচনা চেকলিস্ট"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["toolkit-objectives", "toolkit-bangladesh-case", "toolkit-self-check"]) assert.match(css, new RegExp(term));
});

test("detailed study is a separate full-width section with merged chapter switching", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["chapter-study-section", "workspace-chapter-switcher", "বিস্তারিত অধ্যয়ন", "অধ্যায় পরিবর্তন", "deepChapters.map"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.chapter-study-section\s*\{[^}]*grid-column:\s*1\s*\/\s*-1/);
  assert.match(css, /\.workspace-chapter-switcher/);
});

test("the academic database enforces minimum depth and study progress", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["academicDatabaseSummary", "academicDatabaseIssues", "fewer than 32 chapter-specific questions", "fewer than 4 unique chapter-note sections", "incomplete study package", "retrievalRounds", "buildExamSprintSet", "buildMistakeClinicSet", "buildDiversifiedPracticeSet", "detailedBanglaCqAnswer", "detailedEnglishCqAnswer", "buildMasteryDepthNotes", "buildExaminerRevisionNotes"]) assert.match(data, new RegExp(term));
  for (const term of ["completedStudyModes", "studyProgressKey", "studySessionMinutes", "studySessionTrack", "studySessionStep", "chapterMasteryPercent", "continueChapterMastery", "RECOMMENDED NEXT", "পরবর্তী পরামর্শ"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.study-progress-control/);
  assert.match(css, /\.guided-study-session/);
  assert.match(css, /\.chapter-mastery-overview/);
  assert.match(css, /\.chapter-mastery-metrics/);
});

test("subject coverage reports actual ready materials without overstating academic verification", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["contentCoverageManifest", "chapter.status = \"ready\"", "chapter.progress = 100", "content coverage manifest overstates learning-pack readiness", "chapter content readiness is stale"]) assert.match(data, new RegExp(term));
  for (const term of ["contentCoverageManifest", "প্রতিটি অধ্যায়ে যা পাচ্ছ", "বর্তমানে থাকা প্রশ্নের সংখ্যা", "শেখার উপকরণ প্রস্তুত থাকা এবং একাডেমিক যাচাই এক বিষয় নয়"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["subject-material-map", "material-format-grid", "material-question-breakdown"]) assert.match(css, new RegExp(term));
});

test("every chapter bank blocks duplicate prompts and balances MCQ answer positions", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["diversifyDuplicatePrompts", "balanceChapterMcqOptions", "duplicate question prompts", "MCQ answer positions are not balanced", "contextLenses"]) assert.match(data, new RegExp(term));
  for (const term of ["পুনরাবৃত্ত প্রশ্ন যাচাই", "ক/খ/গ/ঘ উত্তর ভারসাম্য", "প্রতিটি উত্তরে ব্যাখ্যা"]) assert.match(dashboard, new RegExp(term));
});

test("release readiness separates completed product work from evidence-gated priorities", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["priorityCompletionLedger", "All learning-unit packs", "Academic reviewer sign-off", "Authentic previous-board archive", "AI assessment of uploaded answer PDFs", "external priority ledger overstates evidence-gated completion"]) assert.match(data, new RegExp(term));
  for (const term of ["প্রকাশ-পূর্ব প্রস্তুতির হিসাব", "সাইটের ভেতরের কাজ সম্পূর্ণ", "উৎস, পর্যালোচক বা সেবা প্রয়োজন"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["priority-completion-ledger", "priority-ledger-columns"]) assert.match(css, new RegExp(term));
});

test("academic review and board archive have evidence-safe handoff downloads", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["downloadReviewerPacket", "academic-review-register.csv", "review-evidence-manifest.json", "downloadArchiveIntakeTemplate", "board-paper-intake-template.csv", "Downloading a pack does not change any chapter status", "অসম্পূর্ণ নথি আর্কাইভে প্রকাশ হবে না"]) assert.match(dashboard, new RegExp(term.replace(/[.]/g, "\\.")));
  assert.match(data, /Reviewer and board-paper handoff packs/);
  for (const selector of ["review-handoff-tools", "archive-intake-callout", "archive-head-tools"]) assert.match(css, new RegExp(`\\.${selector}`));
});

test("model tests stay in assessment tools instead of duplicating the Subjects workspace", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const subjectsSource = dashboard.slice(dashboard.indexOf("function Subjects"), dashboard.indexOf("function ObjectivePractice"));
  assert.doesNotMatch(subjectsSource, /studyMode === "(?:cq|questions|mock)"/);
  assert.doesNotMatch(subjectsSource, /CHAPTER QUESTION BANK|CHAPTER MODEL TEST|CQ MASTERY/);
  for (const term of ["examVariant", "chapterMockMcqs", "chapterMockCqs", "chapterMockWritten", "নিজস্ব বোর্ড\/কলেজ-প্যাটার্ন", "মূল্যায়ন নির্দেশিকা"]) assert.match(dashboard, new RegExp(term));
});

test("model tests accept MCQ choices and reveal complete 10-mark CQ answers", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["mockMcqAnswers", "mock-mcq-options", 'role="radiogroup"', 'role="radio"', "aria-checked", "MCQ উত্তর", "সঠিক উত্তর", "পূর্ণাঙ্গ মডেল উত্তর", "ModelAnswerBreakdown"]) assert.ok(dashboard.includes(term), `missing interactive model-test marker: ${term}`);
  for (const term of ["mock-mcq-options", "selected", "correct", "incorrect", "mock-complete-answer", "full-cq-answer"]) assert.match(css, new RegExp(term));
});

test("every generated CQ has a four-part full-mark answer framework", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["ক. ১ নম্বর: ${termA}", "খ. ২ নম্বর:", "গ. ৩ নম্বর:", "ঘ. ৪ নম্বর:", "Knowledge (1)", "Comprehension (2)", "Application (3)", "Higher order (4)", "chapterSolvedCqAnswer", "isInstructionOnlyCqAnswer", "বিপরীত ব্যাখ্যা", "সীমাবদ্ধতা"]) assert.ok(data.includes(term), `missing CQ depth marker: ${term}`);
});

test("test center supports configurable papers and mark-by-mark CQ assessment", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["paperSize", "Paper length", "paperCounts", "cqPartScores", "cq-part-scoring", "cq-time-plan", "পূর্ণাঙ্গ উত্তর ও নম্বর নির্দেশিকা", "cqPartTotals", "finalizeCqAssessment", "CQ-তে আরও অনুশীলন দরকার", "পূর্ণ ফল সংরক্ষণ করো"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["paper-size-picker", "cq-part-scoring", "cq-time-plan", "cq-total-score", "cq-weakness-map", "cq-assessment-save"]) assert.match(css, new RegExp(term));
});

test("exam report separates provisional MCQ results from the final 100-mark score", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["cqAssessmentComplete", "এটি এখন শুধু MCQ-এর ফল", "CHAPTER BREAKDOWN", "অধ্যায়ভিত্তিক MCQ ফল", "mcq-answer-comparison", "দুর্বল অধ্যায়ের প্রশ্ন অনুশীলন করো"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["provisional-result-note", "chapter-performance-table", "mcq-answer-comparison", "exam-review-legend"]) assert.match(css, new RegExp(term));
});

test("visible controls do not include an inactive profile button", () => {
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(shell, /aria-label="প্রোফাইল খোলো"/);
});

test("chapter PDF is a complete offline booklet with a substantial exam pack", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["importantPrintQuestions", 'type === "MCQ" ? 15', 'type === "CQ" ? 8 : 7', "Detailed chapter reference", "মূল ধারণা ও প্রয়োগ", "পুনর্ব্যবহারযোগ্য উত্তরপদ্ধতি", "ভুল ধারণা ও নম্বর বাড়ানোর কৌশল", "Board exam toolkit", "8. CQ answer framework", "9. Important board & college-standard practice", "10. Answer key, model answers & marking guide", "সঠিক উত্তর:", "৩০টি বাছাইকৃত নিজস্ব বোর্ড-প্যাটার্ন প্রশ্ন"]) assert.ok(dashboard.includes(term), `missing PDF marker: ${term}`);
  for (const term of ["print-detailed-reference", "print-reference-foundation", "print-term-grid", "print-reference-notes", "print-clinic-grid", "print-toolkit-grid", "print-question-label", "print-answer-section", "print-mcq-key", "print-model-answer", "break-before: page", "break-inside: auto", "orphans: 3", "widows: 3"]) assert.match(css, new RegExp(term));
});

test("detailed notes save chapter-specific reading progress", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["noteReadLessons", "noteReadingKey", "toggleNoteLesson", "lessons revised", "রিভিশন চিহ্নিত করো", "note-reading-progress", "lessonExamConnections", "NOTE COVERAGE", "পরীক্ষায় এই পাঠ", "নম্বর পাওয়ার পথ দেখো"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["note-reading-progress", "note-coverage-strip", "note-exam-connection", "print-lesson-exam"]) assert.match(css, new RegExp(`\\.${term}`));
});

test("responsive layouts cover phone, tablet and desktop widths", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const width of ["1180px", "980px", "760px", "560px", "390px"]) assert.match(css, new RegExp(`@media \\(max-width: ${width.replace("px", "px")}\\)`));
  for (const term of ["env\\(safe-area-inset-bottom\\)", "safe-area-inset-left", "safe-area-inset-right", "100dvh", "overscroll-behavior: contain", "scrollbar-gutter: stable", "prefers-reduced-motion", "question-navigator button \\{ width: 42px", "library-subjects \\{ max-height: none", "completion-card \\{ padding: 25px"]) assert.match(css, new RegExp(term));
});

test("premium UI stays restrained and touch-safe across phones and desktops", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["--shadow-rest", "--shadow-lift", "Premium restraint", "@media (hover: none), (pointer: coarse)", "touch-action: manipulation", "input, select, textarea { font-size: 16px; }", "bottom-nav button::after", "content-visibility: auto", "background-attachment: scroll"]) assert.ok(css.includes(term), `missing cross-device polish: ${term}`);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)/);
});

test("Focus Studio keeps audio and persistence behind a simplified timer-first interface", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["previewSound", "chooseSoundscape", "await context.resume()", "focusTheme", "focus-history", "yesterdayMinutes", "AeroFocusBackdrop", "focus-studio-minimal", "Sound & session options", "Finish & save session"]) assert.ok(dashboard.includes(marker), `missing focus feature: ${marker}`);
  for (const marker of ["theme-forest", "theme-dusk", "theme-night", "focus-studio-minimal", "aero-focus-backdrop", "focus-minimal-shell", "prefers-reduced-motion"]) assert.ok(css.includes(marker), `missing focus styling: ${marker}`);
});

test("opening gateway contains book labels and exposes modern accessible actions", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const gateway = fs.readFileSync(new URL("../components/group-selector.tsx", import.meta.url), "utf8");
  for (const marker of ["overflow:hidden; contain:layout paint", "max-height:calc(100% - 20px)", ".tech-wordmark", ".specular-button", ".gateway-about"]) assert.ok(css.includes(marker), `missing gateway containment: ${marker}`);
  for (const marker of ["TechWordmark", "SpecularButton", "About HSC2Plus", "router.push(href)"]) assert.ok(gateway.includes(marker), `missing gateway action: ${marker}`);
});

test("the opening shelf preserves exact source and degrades without fake controls", () => {
  const opening = fs.readFileSync(new URL("../components/opening-landscape.tsx", import.meta.url), "utf8");
  const runtime = fs.readFileSync(new URL("../public/ashen-press-hsc.html", import.meta.url), "utf8");
  const component = fs.readFileSync(new URL("../src/shaders/ashen-press/AshenPress.tsx", import.meta.url));
  const canonical = fs.readFileSync(new URL("../src/shaders/ashen-press/sources/ashen-press.html", import.meta.url));
  assert.equal(crypto.createHash("sha256").update(component).digest("hex"), "36b365f7a69223f1c3347bfcb3f2d1aa1ab20d30f2c31e5efb248e62ab4ddc90");
  assert.equal(crypto.createHash("sha256").update(canonical).digest("hex"), "5fe2554e578acac5d55cb466a9564440e7767e38797981f8e829dfd2de0bc90f");
  for (const marker of ['getContext("webgl2"', "webglSupported ? <iframe", "ready ? <div className=\"gateway-scene-hint\""]) assert.ok(opening.includes(marker));
  assert.doesNotMatch(runtime, /href="#"|onclick="return false"/);
  assert.ok(Buffer.byteLength(runtime) < 100_000, "adapted runtime should not ship unused reference artwork");
});

test("app shell supports keyboard, safe-area and small-screen navigation", () => {
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["skip-link", 'href="#main-content"', 'id="main-content"', "tabIndex={-1}", "mainRef.current?.focus", "window.scrollTo", "aria-current", "aria-expanded", "aria-controls", 'event.key === "Escape"', 'document.body.style.overflow = "hidden"', "menuButtonRef.current?.focus", 'id === "practice" ? "Practice"', 'id === "tests" ? "Tests"']) assert.ok(shell.includes(term), `missing shell accessibility marker: ${term}`);
  for (const term of ["env(safe-area-inset-top)", "env(safe-area-inset-bottom)", "100dvh", "overflow-x: clip", "@media (max-width: 420px)", "@media (forced-colors: active)", "min-width: 44px", "min-height: 48px"]) assert.ok(css.includes(term), `missing responsive accessibility marker: ${term}`);
});

test("print output excludes interactive review chrome and preserves answer pagination", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.chapter-review-record, \.library-head-actions/);
  assert.match(css, /\.print-answer-section \{ break-before: page; \}/);
  assert.match(css, /\.print-question, \.print-answer[^\n]+break-inside: avoid/);
  assert.match(css, /orphans: 3; widows: 3/);
});

test("question banks add a second subject-specific assessment set", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["subjectCases", "অসম্পূর্ণ দ্বৈত দাখিলা", "চাহিদা রেখার ডানদিকে", "স্বচ্ছতা ও জবাবদিহির ঘাটতি", "উৎসের উৎপত্তি", "one-page revision note"]) assert.match(data, new RegExp(term));
  assert.match(data, /Which revision would improve a weak/);
  assert.match(dashboard, /banglaMedium \? \["ক", "খ", "গ", "ঘ"\] : \["A", "B", "C", "D"\]/);
});

test("large chapter banks remain searchable and paginated without hiding questions", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["bankQuery", "bankPage", "bankPageSize = 10", "pagedBankQuestions", "bankPageCount", "প্রশ্ন খুঁজুন", "আগের ১০টি", "পরের ১০টি", "bank-result-summary", "bank-empty"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["bank-search-field", "bank-result-summary", "bank-empty", "bank-pages"]) assert.match(css, new RegExp(term));
});

test("written practice preserves drafts while CQ accepts independent parts and PDF upload", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["answer-draft", "উত্তরের খসড়া", "স্বয়ংক্রিয়ভাবে সংরক্ষিত", "cq-parts", "selectAllCqParts", "handleCqPdf", "application/pdf", "AI জমা এখনো চালু নয়"]) {
    assert.match(dashboard, new RegExp(term));
  }
  assert.match(dashboard, /answerDraft\.trim\(\)\.length < 20/);
  assert.match(css, /\.cq-part-checklist/);
  assert.match(css, /\.pdf-dropzone/);
});

test("PDF answer practice provides an honest local rubric while AI upload is unavailable", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["cqSelfScores", "selectedCqMarks", "earnedCqMarks", "মূল্যায়ন নির্দেশিকা দিয়ে নিজে যাচাই", "PDF এই ডিভাইসেই আছে—কোথাও পাঠানো হয়নি", "এই ডিভাইসের বাইরে পাঠানো হয় না", "স্পষ্ট গোপনীয়তা নীতি", "নির্বাচিত PDF সরাও"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.cq-self-review/);
  assert.match(css, /\.cq-score-grid/);
});

test("academic verification language distinguishes authored content from official review", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["বাংলা মাধ্যমে রচিত", "নিজস্ব বোর্ড-প্যাটার্ন", "NCTB মিল যাচাই চলমান", "পর্যালোচনা:"]) {
    assert.match(dashboard, new RegExp(term));
  }
});

test("official NCTB source registry is visible and chapter verification stays honest", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["officialAcademicSources", "nctb-2026-textbooks", "nctb-hsc-curriculum", "nctb-xi-xii-textbooks", "verificationLevel", "chapterSequenceVerified: false", "incomplete official source traceability", "sourceTraceability", "chapterTitleAndSequence", "editionAndReapproval", "questionProvenance"]) assert.match(data, new RegExp(term));
  for (const term of ["AcademicSourcePanel", "NCTB উৎস ও যাচাই রেকর্ড", "৩টি একাডেমিক যাচাই বাকি", 'target="_blank" rel="noreferrer"']) assert.match(dashboard, new RegExp(term));
  for (const term of ["একাডেমিক যাচাই নীতি", "নিজস্ব বোর্ড-প্যাটার্ন প্রশ্ন"]) assert.match(data, new RegExp(term));
  assert.match(css, /\.academic-source-panel/);
  assert.match(css, /\.verification-checkpoints/);
});

test("curriculum coverage registry exposes every subject without overstating official review", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["curriculumCoverageRegistry", "totalUniqueSubjects: 13", "totalChapterRecords: 356", "chapterRecords: 150", "chapterRecords: 206", "subjectPaperMapping: \"under-review\"", "nctb-xi-xii-subject-structure"]) assert.match(data, new RegExp(term));
  for (const term of ["Curriculum coverage", "পাঠ্যক্রম কভারেজ", "Direct comparison pending", "নৈর্বাচনিক সংস্করণ যাচাই বাকি", "Coverage means every listed chapter has lessons, notes and practice"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.curriculum-coverage/);
  assert.match(css, /\.curriculum-subject-grid/);
});

test("direct NCTB comparison requires ten documented primary-evidence fields before verification", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["nctbComparison", "officialSubject", "officialPaper", "officialChapterTitle", "chapterSequence", "syllabusYear", "applicableEdition", "publisher", "approvalEvidence", "textbookStartPage", "textbookEndPage", "supportingGuideReferences", "reviewed status without complete direct NCTB comparison"]) assert.match(data, new RegExp(term));
  for (const term of ["Ten-field primary-evidence gate", "NCTB comparison \\(.csv\\)", "Direct NCTB textbook comparison", "7/10 evidence fields pending"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.nctb-comparison-desk/);
  assert.match(css, /\.chapter-nctb-comparison/);
});

test("subject audit ledger separates NCTB core-book evidence from elective edition review", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["curriculumVerificationLedger", "subjectsTraced: 13", "officialSubjectListingsConfirmed: 13", "officialCoreTextbooksLinked: 3", "electiveSyllabusReviewsRemaining: 10", "official-core-textbook", "elective-curriculum", "curriculum-located", "under-comparison", "curriculum verification ledger does not cover every unique subject", "subject ledger mapping stage is inconsistent"]) assert.match(data, new RegExp(term));
  for (const term of ["বিষয় যাচাই খতিয়ান", "NCTB মূল বই সংযুক্ত", "নৈর্বাচনিক সংস্করণ যাচাই বাকি", "পত্র ও অধ্যায়ক্রম: সরাসরি যাচাই বাকি"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.curriculum-audit/);
  assert.match(css, /\.subject-audit-list/);
});

test("official NCTB index confirms subject presence without approving chapter order", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["nctb-hsc-subject-syllabus-index", "nctb-hsc-2026-full-syllabus", "officialSubjectListingsConfirmed: 13", 'subjectPresence: "verified"', "13 subjects source-traced", "official subject-listing verification total is stale"]) assert.match(data, new RegExp(term));
  assert.match(dashboard, /subjects on official index|অফিসিয়াল সূচিতে বিষয়/);
  assert.match(data, /paperMapping: "pending"/);
  assert.match(data, /chapterSequence: "pending"/);
});

test("academic sign-off and question provenance never imply unsupported approval", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const release = fs.readFileSync(new URL("../app/release-readiness/page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["academicReviewGate", "signedOffChapterRecords: 0", "pendingChapterRecords: 356", "Qualified HSC subject reviewer", "reviewerRoles", "requiredEvidence", "workflow", "acceptanceRules", "subjectChecklists", "CQ 1\\+2\\+3\\+4 marking accuracy", "questionProvenancePolicy", "authenticPastBoardCount: 0", "academic review gate overstates reviewer sign-off", "academic reviewer roster does not cover every subject", "uncited previous-board questions are being claimed"]) assert.match(data, new RegExp(term));
  assert.doesNotMatch(dashboard, /questionSourceLabel|নিজস্ব HSC অনুশীলন · ধারণাভিত্তিক|নিজস্ব HSC অনুশীলন · প্রয়োগভিত্তিক|বর্তমান ব্যাংক: ১০০% নিজস্ব HSC অনুশীলন/);
  assert.match(release, /review|যাচাই|approval|অনুমোদন/i);
  assert.match(css, /\.academic-review-gate/);
  assert.match(css, /\.question-provenance-panel/);
});

test("student study and practice screens hide internal source and mapping clutter", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const subjectPage = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.doesNotMatch(dashboard, /<AcademicSourcePanel/);
  assert.doesNotMatch(subjectPage, /chapter-source-evidence/);
  assert.doesNotMatch(dashboard, /বর্তমান ব্যাংক: ১০০% নিজস্ব HSC অনুশীলন/);
  assert.match(css, /\.subject-detail \.content-status/);
  assert.match(css, /\.curriculum-mapping-stage/);
});

test("previous-board archive requires complete citations and exposes precise filters", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["PreviousBoardQuestion", "previousBoardArchive", 'status: "intake-ready"', "questionNumber", "sourceUrl", "verifiedOn", "verifiedBy", "previous-board archive contains incomplete citations"]) assert.match(data, new RegExp(term));
  for (const term of ["Previous-board Archive", "বিগত বোর্ড আর্কাইভ", "archiveBoard", "archiveYear", "archiveSet", "archiveQuestionNumber", "এখনও পূর্ণ উদ্ধৃতিসহ প্রশ্ন যুক্ত হয়নি", "আর্কাইভে যুক্ত করার বাধ্যতামূলক তথ্য"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.previous-board-archive/);
  assert.match(css, /\.archive-filters/);
});

test("official board-paper intake separates portal discovery from verified question papers", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["boardSourceIntakeRegistry", "sourcesChecked: 5", "authenticPapersLocated: 0", "transcriptionReady: 0", "publishedQuestions: 0", "dhaka-board-official", "nctb-question-pattern", "nctb-hsc-curriculum-source", "satt-bangla-board-index", "scribd-bangla-2-board-collection", "board-source publication count disagrees with archive"]) assert.match(data, new RegExp(term));
  for (const term of ["Official source intake queue", "অফিসিয়াল উৎস যাচাইয়ের তালিকা", "প্রশ্নপত্র পাওয়া যায়নি", "archive-stage-track", "archive-source-list", 'target="_blank" rel="noreferrer"']) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.archive-intake-ledger/);
  assert.match(css, /\.archive-source-list/);
});

test("board-paper discovery keeps official references separate from unaudited indexes", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["boardPaperSourceCatalog", "dhaka-board-moderator-manuals", "satt-accounting-index", "satt-economics-index", 'status: "official-reference"', 'status: "scan-audit-required"']) assert.match(data, new RegExp(term));
  for (const term of ["SOURCE REVIEW", "উৎস অনুসন্ধানের অগ্রগতি", "PDF এখন যাচাই চলছে", "স্ক্যান যাচাই বাকি", "মূল উৎস দেখো"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /archive-discovery-catalog/);
  assert.match(css, /archive-source-details/);
});

test("Bangla board-question discovery is matched to supplied first and second-paper guides", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of [
    "boardQuestionMatchRegister",
    'status: "secondary-source-match-complete"',
    "sattInventory",
    "secondPaperTaskMatches",
    "01_Bangla_2nd_Question_1_Rules_of_Bangla_Pronunciation.pdf",
    "12_Bangla_2nd_Question_12_Essay_and_Article_Writing.pdf",
    "paper-index-matched-question-level-review-required",
    "Original scan page and set/code are still required",
  ]) assert.match(data, new RegExp(marker));
});

test("every live subject has a board-question discovery and supplied-material match record", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const expected = ["bangla", "english", "ict", "accounting", "finance", "business", "economics", "civics", "geography", "logic", "statistics", "islamic_history", "history"];
  for (const marker of ["allSubjectBoardQuestionSurvey", "subjectCount: 13", "coveredSubjectIds", "all-subject-discovery-and-reference-match-complete", "missingMaterialPriority", "original board-paper scans/PDFs"]) assert.match(data, new RegExp(marker));
  for (const subjectId of expected) assert.match(data, new RegExp(`subjectId: "${subjectId}"`));
  const survey = data.slice(data.indexOf("export const allSubjectBoardQuestionSurvey"), data.indexOf("export const boardArchiveCoverage"));
  assert.equal((survey.match(/subjectId: "/g) || []).length, expected.length + 4, "survey must contain 13 subject records plus four material-priority records");
  assert.equal((survey.match(/sattUrls: \[/g) || []).length, expected.length, "each live subject needs a Satt discovery URL list");
  assert.equal((survey.match(/references: \[/g) || []).length, expected.length, "each live subject needs supplied-material references");
});

test("History uses the supplied eight plus nine chapter paper structure", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["historyFirstPaperReferenceChapters", "historySecondPaperReferenceChapters", "chaptersBySubject.history", "ভারতবর্ষে ইউরোপীয়দের আগমন: ইংরেজ আধিপত্য প্রতিষ্ঠা", "প্রবাসী বাঙালি ও বহির্বিশ্ব", "শিল্প বিপ্লব", "বর্ণবাদবিরোধী আন্দোলন", 'paper-chapter-lesson-and-question-family', 'chapters: 17']) assert.match(data, new RegExp(marker));
  const first = data.slice(data.indexOf("const historyFirstPaperReferenceChapters"), data.indexOf("const historySecondPaperReferenceChapters"));
  const second = data.slice(data.indexOf("const historySecondPaperReferenceChapters"), data.indexOf("const buildHistoryChapter"));
  assert.equal((first.match(/title:/g) || []).length, 8);
  assert.equal((second.match(/title:/g) || []).length, 9);
});

test("archive and mobile chapter navigation use progressive disclosure instead of stacked clutter", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["QUESTION ARCHIVE", "শিক্ষার্থীদের সাধারণ ব্যবহারে প্রয়োজন নেই", 'details className="archive-source-details"', 'details className="archive-audit-details"']) assert.ok(dashboard.includes(term), `missing uncluttered archive marker: ${term}`);
  for (const term of ["scroll-snap-type: x proximity", "scrollbar-width: none", "scroll-snap-align: start", ".library-subjects::-webkit-scrollbar"]) assert.ok(css.includes(term), `missing compact mobile selector rule: ${term}`);
});

test("board archive coverage tracks all boards without inventing verified papers", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["boardArchiveCoverage", "evidence-acquisition", "verifiedQuestionTotal: 0", "HSC Corner and result archive", "paperStatus: \"not-located\"", "paperStatus: \"not-audited\""]) assert.match(data, new RegExp(term));
  for (const term of ["Board coverage desk", "আর্কাইভ প্রকাশের আগে যা প্রয়োজন", "বিষয়ভিত্তিক পর্যালোচকের অনুমোদন", "board-coverage-grid"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /board-coverage-desk|archive-next-action/);
});

test("empty archive stays simple while full evidence remains available on demand", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["previousBoardArchive.records.length > 0", "archive-audit-details", "Archive verification details", "filters will appear when verified questions are added", "publication rule"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["archive-audit-details", "archive-audit-body", "font-size: 12px", "summary::-webkit-details-marker"]) assert.match(css, new RegExp(term));
});

test("question archive tolerates chapter records without optional source arrays", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  assert.match(dashboard, /\(resource\.review\?\.sourceIds \?\? \[\]\)\.map/);
  assert.match(dashboard, /\(resource\.review\?\.supportingGuideReferences \?\? \[\]\)\.map/);
  assert.match(dashboard, /subjectChecklists\[subject\.id[^;]+\?\? \["Chapter and paper mapping"/);
  assert.match(dashboard, /subjectChecklistsBn\[subject\.id[^;]+\?\? \["অধ্যায় ও পত্রের বিন্যাস"/);
});

test("student banks and notes reject cross-subject template filler", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["nonAcademicPromptPatterns", "isAcademicQuestion", "genericNotePatterns", "isUsefulChapterNote", "filter(isAcademicQuestion)", "filter(isUsefulChapterNote)"]) assert.ok(data.includes(marker), `missing quality gate: ${marker}`);
  for (const rejected of ["সঠিক শেখার পদ্ধতি", "পরিস্থিতি সমাধানের প্রথম কাজ", "প্রশ্নের চাওয়া ও নির্ণায়ক তথ্য", "Which first step is most effective", "Recommended method: read the task", "চার ধাপে অধ্যায়টি মনে রাখো"]) assert.ok(data.includes(rejected), `missing regression marker: ${rejected}`);
});

test("Bangla writing and English skills use task-specific worked models", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["পূর্ণ নমুনা · ঘটনা নয়, দিনের ব্যক্তিগত উপলব্ধি", "আবেদনসহ প্রাতিষ্ঠানিক প্রতিবেদন", "পত্রিকায় প্রকাশের উপযোগী প্রতিবেদন", "কার্যকর বৈদ্যুতিন চিঠি", "Worked summary · select, compress, rewrite", "Worked flow chart · parallel phrases", "Model graph response · overview before detail", "Solved passage ·"]) assert.match(data, new RegExp(term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("every chapter exposes a deeper review record without invented reviewer sign-off", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["recordId", "reviewerStatus", "reviewerName", "evidenceNote", "evidenceNoteBn", "nextAction", "nextActionBn", "blockingReasons", "blockingReasonsBn", "contentChecks", "factsDefinitionsTerminology", "mcqAnswersAndExplanations", "cqMarkDistribution", "englishLanguageAndSourceText", "finalReviewerDeclaration", 'reviewerStatus: "unassigned"', "chapter review record is incomplete or overstates sign-off", "subject-specialist checklist is incomplete or overstates approval"]) assert.match(data, new RegExp(term));
  for (const term of ["Chapter review record", "এই অধ্যায়ের পর্যালোচনা নথি", "Release blockers", "চূড়ান্ত করার আগে যা বাকি", "যোগ্য বিষয় পর্যালোচক", "chapterReviewChecks", "review-source-links", "সংযুক্ত অফিসিয়াল প্রমাণ", "নিজস্ব অনুশীলন—বিগত বোর্ড নয়"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.chapter-review-record/);
  assert.match(css, /\.chapter-review-columns/);
  assert.match(css, /\.chapter-review-checks/);
  assert.match(css, /\.review-source-links/);
});

test("academic assurance checks every assessment structure without inventing teacher approval", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["academicContentAssurance", "markingTotal", "MCQ must have four options and one valid answer index", "CQ marking guide does not contain four parts totalling 10", "CQ model answer is not visibly divided", 'academicStatus: "reviewer-sign-off-pending"']) assert.match(data, new RegExp(term));
  for (const term of ["356/356 group learning records passed automated assurance", "৩৫৬/৩৫৬টি গ্রুপভিত্তিক শেখার নথি স্বয়ংক্রিয় যাচাইয়ে উত্তীর্ণ", "ContentErrorReporter", "hsc2plus-content-issue-v1", "reportId", "subject-review", "qualified subject reviewer"]) assert.match(dashboard, new RegExp(term));
  for (const selector of ["automated-assurance", "content-error-reporter", "content-error-form", "report-action"]) assert.match(css, new RegExp(`\\.${selector}`));
});

test("exam sessions survive refresh, enforce unique full papers and use a real deadline", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["examSystemValidation", "mcq: 30, cq: 7, marks: 100, minutes: 180", "fewer than 30 unique MCQs", "fewer than 7 unique CQs"]) assert.match(data, new RegExp(term));
  for (const term of ["ActiveTestSession", "active-test", "deadlineAt", "visibilitychange", "আগের অসমাপ্ত পরীক্ষা", "সময় শেষ হয়েছে", "new Map(pool.map", "exam-session-notice"]) assert.ok(dashboard.includes(term), `missing exam recovery marker: ${term}`);
});

test("exam question papers and diagnostic reports are print-ready and CQ PDFs stay local", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["exam-print-paper", "exam-result-print", "প্রশ্নপত্রের PDF", "ফলাফলের PDF", "সময় ব্যবহার", "ফাইলটি এই ডিভাইসেই আছে", "AI মূল্যায়ন চালু নয়", "ORIGINAL BOARD-PATTERN PRACTICE"]) assert.match(dashboard, new RegExp(term));
  for (const selector of ["exam-print-paper", "exam-result-print", "exam-print-question", "exam-result-summary", "print-revision-sheet", "print-rapid-sheet"]) assert.match(css, new RegExp(`\\.${selector}`));
});

test("chapter books separate detailed, revision, last-minute, formula and practice formats", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["দ্রুত পুনরালোচনা", "পরীক্ষার আগের ঝলক", "গুরুত্বপূর্ণ পরিভাষা, সংজ্ঞা ও সূত্র", "সমাধানসহ উদাহরণ", "সৃজনশীল/CQ উত্তর কাঠামো", "অনুশীলন প্রশ্ন", "উত্তরসূচি, মডেল উত্তর ও মূল্যায়ন নির্দেশিকা", "সাধারণ ভুল"]) assert.match(dashboard, new RegExp(term));
});

test("subject cards describe full libraries without making unverified single-paper claims", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(data.slice(0, data.indexOf("export const chaptersBySubject")), /paper: "(?:1st|2nd) Paper"/);
  for (const term of ["libraryScope: \"full-subject\"", "officialPaperMapping: \"under-review\""]) assert.match(data, new RegExp(term));
  for (const term of ["Full subject", "সম্পূর্ণ বিষয়", "FULL SUBJECT LIBRARY", "সম্পূর্ণ বিষয় লাইব্রেরি"]) assert.match(dashboard, new RegExp(term));
});

test("CQ and written practice include model answers and mark-by-mark checking", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["modelAnswerBn", "markingPointsBn", "detailedBanglaCqAnswer", "detailedEnglishCqAnswer", "প্রমাণভিত্তিক বিশ্লেষণ", "বাংলাদেশভিত্তিক প্রয়োগ", "ক. ১ নম্বর:", "ঘ. ৪ নম্বর:"]) assert.match(data, new RegExp(term));
  for (const term of ["MARKING GUIDE", "পূর্ণাঙ্গ Model Answer দেখো", "marking-breakdown", "bank-model-answer", "ModelAnswerBreakdown", "cq-model-breakdown"]) assert.match(dashboard, new RegExp(term));
});

test("every chapter exposes a subject-specific exam toolkit", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["buildExamToolkit", "examToolkit", "সম্পদ = দায়", "ভবিষ্যৎ মূল্য", "স্থিতিস্থাপকতা", "ক্ষমতার পৃথকীকরণ", "পটভূমি → কারণ"]) assert.match(data, new RegExp(term));
  for (const term of ["EXAM TOOLKIT", "সূত্র ও কাঠামো", "যে ভুলগুলো এড়াবে", "Scoring Moves"]) assert.match(dashboard, new RegExp(term));
});

test("worked examples cover calculations, cases, sources and timed writing", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["buildBanglaWorkedSet", "Foundation Worked Example", "Calculation Lab", "Data & Elasticity Lab", "Management Case", "Constitutional Analysis", "Chronology Lab", "Writing Workshop"]) {
    assert.match(data, new RegExp(term));
  }
  for (const term of ["১,৪০,০০০ টাকা", "চক্রবৃদ্ধি ফলে ১,০০০ টাকা বেশি", "স্থিতিস্থাপকতার মান ০.৮", "উৎসের রচয়িতা, সময় ও উদ্দেশ্য"]) {
    assert.match(data, new RegExp(term));
  }
});

test("chapter pathways and one-click exam presets diversify preparation", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["learning-pathways", "ভিত্তি শক্ত করো", "বোর্ড-প্রস্তুত", "চ্যালেঞ্জ পথে", "bankPreset", "applyBankPreset", "Foundation MCQ", "Board CQ", "College Challenge", "bank-presets"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["learning-pathways", "learning-pathway-section", "bank-presets"]) assert.match(css, new RegExp(term));
});

test("all chapters provide deeper notes and renewable high-volume practice", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["length: 60", "length: 48", "length: 24", "fewer than 4 unique chapter-note sections", "fewer than 32 chapter-specific questions", "buildDiversifiedPracticeSet", "পড়া শুরুর আগে", "অপরিচিত ঘটনায়", "কথার সঙ্গে প্রমাণ মিলাও", "পরীক্ষা স্প্রিন্ট", "ভুল সংশোধন ক্লিনিক", "নম্বর পেতে সম্পর্কটি লিখে দেখাও"]) assert.match(data, new RegExp(term));
  for (const term of ["bankRound", "orderedVisibleQuestions", "নতুন অনুশীলন সেট", "New practice set"]) assert.match(dashboard, new RegExp(term));
});

test("chapter notes add a distinct subject-specific depth layer", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["buildSubjectDepthNotes", "লেনদেন অনুসরণ", "নগদপ্রবাহ সময়রেখা", "গ্রাফের মান", "ব্যবস্থাপনা শৃঙ্খল", "সাংবিধানিক মানচিত্র", "উৎসের উৎপত্তি", "Task control"]) {
    assert.match(data, new RegExp(term));
  }
});

test("chapter notes support detailed study, revision and a last-minute insider", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["noteView", "Detailed Notes", "Revision", "Last-minute Revision", "LAST-MINUTE REVISION", "৬০ সেকেন্ডে মনে করো", "লেখার আগে সতর্কতা", "print-rapid-sheet"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["note-view-switch", "revision-note-section", "last-minute-sheet", "glimpse-grid", "insider-strip"]) assert.match(css, new RegExp(term));
  assert.match(css, /note-view-switch \{ grid-template-columns: repeat\(3,minmax\(0,1fr\)\)/);
});

test("note modes provide full teaching depth and a distinct exam-night route", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["detailedLessonNotes", "Full teaching explanation", "পূর্ণাঙ্গ ব্যাখ্যা", "EXAM-NIGHT PLAN", "পরীক্ষার আগের রাত", "Must-see structures", "তিনটি গুরুত্বপূর্ণ উত্তর অনুশীলন", "noteSelfChecks", "CHAPTER READINESS GATE", "অধ্যায় প্রস্তুতি যাচাই"]) {
    assert.ok(dashboard.includes(term), `missing enriched-note marker: ${term}`);
  }
  for (const term of ["note-deep-explanation", "exam-night-plan", "exam-night-high-yield", "note-readiness-gate", "note-ready-message"]) assert.match(css, new RegExp(term));
});

test("revision mode adds active recall and chapter-specific high-yield exam checks", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["revisionRecallDrill", "revisionExamQuestions", "REVISION ROUTE", "ACTIVE RECALL", "HIGH-YIELD EXAM CHECK", "নোট না দেখে উত্তর দাও", "আজ লিখে দেখার মতো ৬টি গুরুত্বপূর্ণ প্রশ্ন", "মূল্যায়ন নির্দেশিকা"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["revision-route", "revision-active-recall", "revision-exam-set"]) assert.match(css, new RegExp(term));
  for (const term of ["LAST-MINUTE REVISION", "revisionMinutes", "mustKnow", "commonTraps", "recallChecks", "revisionProgress"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["last-minute-studio", "last-minute-controls", "revision-must-know", "revision-traps", "revision-recall"]) assert.match(css, new RegExp(term));
});

test("worked solutions teach a reusable method and end with an independent transfer task", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["SOLUTION METHOD", "Decode", "Select", "Execute", "Verify", "প্রশ্ন বিশ্লেষণ", "এবার একই পদ্ধতি নিজে প্রয়োগ করো", "সমাধান নির্দেশিকা", "worked-transfer-task"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["solution-method-map", "worked-transfer-task"]) assert.match(css, new RegExp(term));
});

test("detailed notes expose the complete lesson teaching loop", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["note-chapter-map", "recallQuestions", "workedSnapshot", "practicePrompt", "stretchPrompt", "answerCheck", "না দেখে মনে করো", "প্রত্যাশিত উত্তর মিলিয়ে দেখো"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["note-learning-lab", "note-answer-check", "note-concept", "scroll-margin-top"]) assert.match(css, new RegExp(term));
});

test("quick practice and test center draw balanced questions from every chapter", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["rotateObjectiveOptions", "objectivePool", "every chapter with three questions", "objective answer positions are not balanced"]) assert.match(data, new RegExp(term));
  for (const term of ["sessionSize", "সব বিষয় থেকে দ্রুত MCQ অনুশীলন", "testVariant", "paperCounts.mcq", "paperCounts.cq", "Focused", "Board Full Paper"]) assert.match(dashboard, new RegExp(term));
});

test("practice sessions are subject-balanced, language-aware and time-safe", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["perSubject", "longestSubjectPool", "first quick-practice session does not cover every objective-question subject", "isEnglish: english"]) assert.match(data, new RegExp(term));
  for (const term of ['seconds !== 0 || autoSubmittedRef.current', '["ক", "খ", "গ", "ঘ"]', "aria-label"]) assert.match(dashboard, new RegExp(term.replace(/[\[\]]/g, "\\$&")));
});

test("custom practice uses renewable bounded sessions and stable saved work", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["availableQuestions", "sessionOffset", "orderedPracticeQuestions", "activeQuestionKey", "masteredTotal", "practice-stats", "সেশনে প্রশ্ন", "মোট ${availableQuestions.length}টি পাওয়া গেছে"]) assert.match(dashboard, new RegExp(term.replace(/[${}.]/g, "\\$&")));
  assert.doesNotMatch(dashboard, /টি প্রশ্ন · সেশন সীমা নেই/);
});

test("dense learning controls use progressive disclosure and focused revision panels", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["advanced-filter-toggle", "revisionPanel", "revision-panel-tabs", "focus-view", "Active recall"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["advanced-fields", "revision-panel-tabs button.active", "last-minute-grid.focus-view > article.active"]) assert.match(css, new RegExp(term.replaceAll(".", "\\.")));
});

test("smart revision unifies objective mistakes and custom-practice review", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["bankReview", "objectiveCards", "bankGroups", "bankCards", "totalReviewItems", "Custom Practice থেকে", "queue.filter", "mistakeIds.filter"]) assert.match(dashboard, new RegExp(term));
});

test("every chapter adds applied subject-specific assessment cases", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["buildAppliedQuestionSet", "মেসার্স প্রত্যয়ে", "একটি SME", "দাম ৫০, ৪০ ও ৩০", "কাঁচামাল অপচয় ৮%", "৬০ দিন ধরে", "১৯৫২ সালের একটি সরকারি বিবৃতি", "editing log"]) assert.match(data, new RegExp(term));
});

test("subject materials include configurable guided study sessions", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["studySessionMinutes", "studySessionTrack", "sessionStages", "স্টাডি সেশন", "একটি সেশনেই বোঝা থেকে পরীক্ষা অনুশীলন", "নিজে মনে করে বলো", "session-focus-card"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["guided-study-session", "session-setup", "session-stage-map", "session-controls"]) assert.match(css, new RegExp(term));
});

test("subject chapter lists show real coverage without repetitive completion badges", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["subjectCoverage", "subject-coverage-summary", "বিস্তারিত নোট অংশ", "অনুশীলন প্রশ্ন", "পূর্ণাঙ্গ অধ্যায় উপকরণ খুলুন"]) assert.match(dashboard, new RegExp(term));
  assert.doesNotMatch(dashboard, /শেখার প্যাক সম্পূর্ণ|Learning pack complete|শেখার প্যাক যাচাইকৃত|Learning pack verified/);
  assert.doesNotMatch(dashboard, /পরিকল্পিত প্রশ্ন/);
  assert.match(css, /\.subject-coverage-summary/);
});

test("todays mission opens real study flows and resets daily", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["missionDateKey", "missionStorageKey", "openMission", "resetToday", "প্রথম কাজ শুরু করো", "পরের কাজ চালিয়ে যাও", "আজকের তালিকা রিসেট", "mission-open"]) assert.match(dashboard, new RegExp(term));
  for (const target of ['target: "subjects"', 'target: "practice"', 'practiceMode: "custom"', 'practiceMode: "writing"']) assert.match(data, new RegExp(target));
  assert.doesNotMatch(data, /target: "library"/);
  for (const term of ["subject-resume", "practice-entry", "practice-target", "window.scrollTo", "openPlanTask"]) assert.match(dashboard, new RegExp(term));
  assert.match(css, /\.mission-open/);
});

test("students resume their last section, chapter, lesson and exam workspace", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["subjectResumeReady", "examResumeReady", "navigationResumeReady", "subject-resume", "exam-resume", "last-section", "chapterTitle: featured.title", "lesson: activeLesson", "mode: studyMode", "subject: resource.subject", "unit: resource.unit"]) assert.match(dashboard, new RegExp(term));
  assert.match(dashboard, /allowedModes = \["lesson", "notes", "worked", "toolkit", "session"\]/);
  assert.match(dashboard, /display === "writingOnly" \? \["cq"\].+display === "archiveOnly" \? \["archive"\].+\["cq", "bank", "mock", "archive"\]/);
});

test("every subject lesson has a complete learn-practice-check loop", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["workedSnapshot", "practicePrompt", "answerCheck", "recallQuestions", "commonTrap", "stretchPrompt", "incomplete lesson practice loop", "A complete example, explained", "Are you ready for the exam?"]) assert.match(data, new RegExp(term.replace(/[?]/g, "\\?")));
  for (const term of ["WORKED SNAPSHOT", "TRY IT YOURSELF", "Check the expected answer", "সমাধানের নমুনা", "এবার নিজে করো", "LESSON MASTERY", "toggleLessonMastery", "lessonMasteryKey", "ACTIVE RECALL", "COMMON TRAP", "STRETCH TASK"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["lesson-worked-snapshot", "lesson-practice-loop", "lesson-depth-grid", "lesson-mastery-panel", "lesson-mastery-actions", "quick-action-grid"]) assert.match(css, new RegExp(term));
});

test("every written and CQ item has language-correct model-answer support", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const term of ["withCompleteAnswerSupport", "modelAnswer?: string", "markingPoints?: string", "incomplete model-answer support", "Knowledge: accurate identification", "প্রমাণ, সীমাবদ্ধতা ও সিদ্ধান্ত"]) assert.match(data, new RegExp(term.replace("?", "\\?")));
  for (const term of ["question.modelAnswer", "question.markingPoints", "View complete model answer", "পূর্ণাঙ্গ মডেল উত্তর"]) assert.match(dashboard, new RegExp(term.replace(".", "\\.")));
});

test("chapter completion celebrates progress and Bangla lessons use natural memory cues", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["completion-celebration", "অধ্যায় সম্পন্ন—অভিনন্দন!", "পাঠটি আয়ত্ত হয়েছে!", "মনে রাখার ধাপ", "সম্পন্ন অধ্যয়ন ধাপ", "অধ্যায় দক্ষতা", "পাঠ আয়ত্ত", "শেষ মুহূর্তের ঝালাই"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["আজকের বিষয়", "এখানে কোন ভুলটি বেশি হয়"]) assert.match(data, new RegExp(term));
  for (const term of ["lesson-memory-cue", "completion-card", "celebration-rise"]) assert.match(css, new RegExp(term));
});

test("lessons use purposeful subject visuals without decorative media placeholders", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["LessonVisual", "হিসাবচক্র এক নজরে", "সময়ের সঙ্গে অর্থের মূল্য", "চাহিদা–যোগান চিত্র পড়ার নিয়ম", "ব্যবস্থাপনা সিদ্ধান্তের প্রবাহ", "সুশাসনের সম্পর্কচিত্র", "ইতিহাস বিশ্লেষণের সময়রেখা", "Answer structure", "এখন কাজে লাগাও:"]) assert.match(dashboard, new RegExp(term));
  for (const term of ["lesson-visual", "visual-flow", "demand-line", "supply-line", "visual-step-in"]) assert.match(css, new RegExp(term));
  for (const term of ["concept={activeLessonDetail?.concept", "lessonSteps={activeLessonDetail?.steps", "displaySteps"]) assert.ok(dashboard.includes(term), `missing chapter-aware visual marker: ${term}`);
  assert.doesNotMatch(dashboard, /ChapterLessonMedia|lesson-walkthrough/);
  assert.doesNotMatch(dashboard, /video placeholder|image placeholder/i);
});

test("print question packs separate types and preserve explicit MCQ choices", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["printQuestionGroups", "প্রতিটি প্রশ্নের ধরন আলাদাভাবে নম্বরায়িত", "print-answer-options", "সঠিক উত্তর:", "কেন সঠিক:", "revealed-mcq-answer"]) {
    assert.ok(dashboard.includes(term), `missing organized question-pack marker: ${term}`);
  }
  assert.match(dashboard, /\["ক","খ","গ","ঘ"\]/);
  for (const term of ["print-question-group", "print-answer-group", "print-answer-question", "revealed-mcq-answer"]) assert.match(css, new RegExp(term));
});

test("exam-library PDFs keep MCQs unanswered until the final answer key and section detailed notes", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["printableMcqs", "printableWrittenQuestions", "কোনো উত্তর আগে থেকে চিহ্নিত করা নেই", "MCQ উত্তরসূচি", "print-mcq-key-grid", "printableNoteSections", "ধারণা ও ভিত্তি", "নীতি, ধাপ ও প্রয়োগ", "পরীক্ষায় প্রয়োগ ও পুনরালোচনা"]) assert.ok(dashboard.includes(term), `missing exam-library PDF improvement: ${term}`);
  assert.doesNotMatch(dashboard, /পূর্ণ প্রশ্নভান্ডার ও মূল্যায়ন নির্দেশিকা[^\n]+print-mcq-key/);
  for (const term of ["print-note-section", "print-mcq-key-grid", ".print-revision-sheet, .print-rapid-sheet { break-before: auto; }"]) assert.ok(css.includes(term), `missing compact print rule: ${term}`);
});

test("chapter practice avoids numbered filler labels and varies recall intent", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  assert.doesNotMatch(data, /পুনরুদ্ধার অনুশীলন/);
  for (const term of ["অর্থ ও প্রয়োগের শর্ত", "অধ্যায়ের মূলনীতির সঙ্গে", "নির্ণায়ক তথ্যে", "কাছাকাছি ধারণা", "প্রমাণটি", "সাধারণ ভুল প্রতিরোধ"]) {
    assert.match(data, new RegExp(term));
  }
});

test("repetitive subject-level photos are not injected into every chapter", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  assert.doesNotMatch(dashboard, /SubjectNoteArtwork|National_Assembly_of_Bangladesh|Shaheed_Minar\.JPG/);
});

test("complete notes stay available without overwhelming the page", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["note-access-choice", "full-note-disclosure", "পূর্ণাঙ্গ PDF সংরক্ষণ", "পূর্ণাঙ্গ নোট অনলাইনে পড়ো", "note-reading-route"]) assert.match(dashboard, new RegExp(term));
  for (const selector of ["note-access-choice", "full-note-disclosure", "full-note-body"]) assert.match(css, new RegExp(`\\.${selector}`));
  assert.match(dashboard, /useState<"detailed" \| "revision" \| "glimpse">\("revision"\)/);
});

test("generated lesson sequences stay chapter-specific and spacious", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["যে ভুলগুলো বেশি হয় এবং ঠিক করার উপায়", "সময় ধরে বোর্ড-প্যাটার্ন অনুশীলন", "না দেখে কতটুকু মনে করতে পারো", "পরীক্ষার জন্য কতটা প্রস্তুত"]) assert.ok(data.includes(term), `missing student-friendly lesson: ${term}`);
  for (const term of ["panelReveal", "activeDash", "subject-deep-panel > * + *", "prefers-reduced-motion"]) assert.match(css, new RegExp(term.replace(/[+*]/g, "\\$&")));
});

test("subject controls and dense lesson sections allocate space responsively", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(css, /\.chapter-tools \{[^}]*display: grid;[^}]*grid-template-columns: minmax\(230px,1fr\) auto/);
  assert.match(css, /\.chapter-tools > span \{[^}]*grid-column: 1 \/ -1;[^}]*justify-self: end/);
  assert.match(css, /\.lesson-depth-grid \{[^}]*repeat\(auto-fit,minmax\(220px,1fr\)\)/);
  assert.match(css, /\.lesson-mastery-panel \{[^}]*grid-template-columns: 1fr/);
  assert.match(css, /\.chapter-mastery-overview > button \{[^}]*grid-column: 1 \/ -1/);
});

test("subject notes remain visible and Bangla-English papers stay separate", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["paperOptions", "activePaper", "visibleChapterEntries", "choosePaper", "Study each paper separately", "প্রতিটি পত্র আলাদাভাবে পড়ো"]) assert.ok(page.includes(term), `missing paper separation: ${term}`);
  assert.match(page, /if\(nextMode==="notes"\) setNoteMode\(null\)/);
  assert.match(page, /setNoteMode\(null\)/);
  for (const term of ["subjectFallback", "যুক্তির গঠন", "সিস্টেম মানচিত্র", "পাঠ-অনুসন্ধান", "কালানুক্রম"]) assert.ok(data.includes(term), `missing enriched note content: ${term}`);
  for (const selector of ["subject-paper-switch", "subject-reference-groups"]) assert.match(css, new RegExp(`\\.${selector}`));
});

test("Bangla and English rails contain learning units instead of exam tools", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const term of [
    "Writer, poet and literary context",
    "Word formation and morphology",
    "Guided textbook reading",
    "Articles and determiners",
    "Formal writing and composition",
  ]) assert.ok(data.includes(term), `missing study unit: ${term}`);
  for (const title of [
    'title: "Creative question writing"',
    'title: "First Paper board practice"',
    'title: "Second Paper board practice"',
    'title: "First Paper timed practice"',
    'title: "Second Paper timed practice"',
  ]) assert.ok(!data.includes(title), `exam tool leaked into study-unit rail: ${title}`);
  assert.match(page, /Practice and Test Centre/);
  assert.match(page, /STUDY UNITS/);
});

test("thin subjects use chapter-specific knowledge and keep exam tools out of chapter rails", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of [
    "প্রসঙ্গ, কেন্দ্রীয় বক্তব্য, অনুষঙ্গ",
    "signal, bandwidth, transmission mode",
    "পদ, ব্যক্ত্যর্থ, জাত্যর্থ",
    "আব্বাসীয় বিপ্লব, বাগদাদ",
    "ঝুঁকি শনাক্ত করে prevention, response এবং recovery",
  ]) assert.ok(data.includes(term), `missing subject-specific teaching anchor: ${term}`);
  for (const title of [
    'title: "Integrated practical and board practice"',
    'title: "Integrated board practice"',
    'title: "Integrated chronology and board practice"',
  ]) assert.ok(!data.includes(title), `assessment-only unit leaked into subjects: ${title}`);
});

test("release candidate preserves focus history and handles missing routes", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const privacy = fs.readFileSync(new URL("../app/privacy/page.tsx", import.meta.url), "utf8");
  const notFound = fs.readFileSync(new URL("../app/not-found.tsx", import.meta.url), "utf8");
  const offlineSupport = fs.readFileSync(new URL("../components/offline-support.tsx", import.meta.url), "utf8");
  for (const term of ["focus-history", "focus-timer", "-recovered", "unlockAudio"]) assert.match(dashboard, new RegExp(term));
  assert.match(privacy, /Focus Timer-এর চলমান অবস্থা/);
  assert.match(notFound, /এই পেজটি পাওয়া যায়নি/);
  assert.match(offlineSupport, /navigator\.onLine/);
  assert.ok(!fs.existsSync(new URL("../public/sw.js", import.meta.url)));
});

test("release hardening covers navigation SEO overflow and trust routes", () => {
  const layout = fs.readFileSync(new URL("../app/layout.tsx", import.meta.url), "utf8");
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  const gateway = fs.readFileSync(new URL("../components/group-selector.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const subjectRoute = fs.readFileSync(new URL("../app/[group]/subjects/[subjectId]/page.tsx", import.meta.url), "utf8");
  const pages = ["commerce", "humanities", "support", "privacy", "terms", "release-readiness"].map((page) => fs.readFileSync(new URL(`../app/${page}/page.tsx`, import.meta.url), "utf8"));
  assert.match(layout, /favicon\.svg/);
  assert.ok(pages.every((page) => page.includes("description:")), "every primary static page needs a meta description");
  assert.match(subjectRoute, /generateMetadata/);
  for (const marker of ["brand-home-link", "mobile-brand", "aria-expanded", "aria-controls", "sidebar-more"]) assert.ok(shell.includes(marker), `missing navigation hardening: ${marker}`);
  for (const marker of ['href="/privacy"', 'href="/terms"', 'href="/support"', "new Date().getFullYear()"] ) assert.ok(`${shell}\n${gateway}`.includes(marker), `missing footer marker: ${marker}`);
  for (const marker of ["overflow-x: clip", "max-width:100%", "safe-area-inset-bottom", "@media (max-width:390px)"]) assert.ok(css.includes(marker), `missing overflow protection: ${marker}`);
  const interfaceSource = `${shell}\n${gateway}\n${pages.join("\n")}`;
  assert.doesNotMatch(interfaceSource, /href=["']#(?:["'])|javascript:void|Lorem ipsum|\bTBD\b|\bTODO\b/);
});

test("ICT and Business first-paper libraries follow the supplied reference books", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["ictReferenceChapters", "ICT: World and Bangladesh Perspective", "Number Systems and Digital Devices", "Introduction to Web Design and HTML", "Database Management System", "Programming Language"]) assert.match(source, new RegExp(term));
  for (const term of ["businessFirstPaperReferenceChapters", "Fundamental Concepts of Business", "Sole Proprietorship", "Joint Stock Company", "Legal Aspects of Business", "Business Ethics and Social Responsibility"]) assert.match(source, new RegExp(term));
  for (const term of ["NCTB তথ্য ও যোগাযোগ প্রযুক্তি", "user-supplied-nctb-ict-scan", "Cambridge Publications Business Organisation & Management First Paper guide", "current official mapping under review", "chapters: 6"]) assert.match(data, new RegExp(term));
  for (const range of ["১–৩৮", "৩৯–৭৪", "৭৫–১১৪", "১১৫–১৪৮", "১৪৯–১৯৮", "১৯৯–২২৬"]) assert.ok(source.includes(range));
  assert.match(data, /id: "business", name: "Business Organisation"/);
});

test("Logic and Economics keep both supplied guide papers separate and source-honest", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of [
    "logicReferenceChapters", "Introduction to Logic", "Practical Aspects of Logic", "Predicables", "Deductive Inference",
    "Logical Definition", "Methods of Proving Causal Connection", "Classification", "Probability",
    "economicsReferenceChapters", "Basic Economic Problems and their Solution", "Consumer and Producer Behaviour",
    "Aggregate Income and Expenditure", "Introduction to Bangladesh Economy", "Food Security", "Development Planning",
  ]) assert.match(source, new RegExp(term), `missing supplied-guide unit: ${term}`);
  for (const term of [
    'id: "economics", name: "Economics", nameBn: "অর্থনীতি", paper: "1st & 2nd Paper"',
    'id: "logic", name: "Logic", nameBn: "যুক্তিবিদ্যা", paper: "1st & 2nd Paper"',
    'chapters: 20', 'chapters: 16', 'not an official NCTB textbook', 'reference-guide',
  ]) assert.match(data, new RegExp(term), `missing guide provenance or paper split: ${term}`);
  const subjectPage = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  assert.match(subjectPage, /subjectId==="bangla"/);
  assert.match(subjectPage, /paper==="1st Paper"\?"১ম পত্র":"২য় পত্র"/);
});

test("Finance uses separate complete first and second paper chapter maps", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const financeBlock = source.match(/export const financeReferenceChapters = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
  assert.equal((financeBlock.match(/paper: "1st Paper"/g) ?? []).length, 9);
  assert.equal((financeBlock.match(/paper: "2nd Paper"/g) ?? []).length, 14);
  for (const term of ["Time Value of Money", "Capital Budgeting and Investment Decisions", "Central Bank", "Electronic and Modern Banking", "Life Insurance", "Miscellaneous Insurance"]) assert.match(financeBlock, new RegExp(term));
  for (const term of ["chapters: 23", "Finance, Banking & Insurance", "162-page supporting scan", "247-page supporting scan", "official edition comparison pending", "mcq: 100, cq: 36, written: 18"]) assert.match(data, new RegExp(term));
});

test("Bangla second paper, English second paper and Statistics follow supplied references", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const banglaBlock = source.match(/export const banglaSecondPaperReferenceChapters = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
  const englishBlock = source.match(/export const englishSecondPaperReferenceChapters = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
  const statisticsBlock = source.match(/export const statisticsFirstPaperReferenceChapters = \[([\s\S]*?)\] as const;/)?.[1] ?? "";
  assert.equal((banglaBlock.match(/title:/g) ?? []).length, 28);
  assert.equal((englishBlock.match(/title:/g) ?? []).length, 12);
  assert.equal((statisticsBlock.match(/title:/g) ?? []).length, 8);
  for (const term of ["Phonetics and Bangla Phonology", "Morphology", "Report Writing", "Proof Correction", "Essay Writing"]) assert.match(banglaBlock, new RegExp(term));
  for (const term of ["Articles and Determiners", "Right Form of Verbs", "Sentence Transformation", "Formal email and application", "Composition"]) assert.match(englishBlock, new RegExp(term));
  for (const term of ["Data Collection, Summarisation and Presentation", "Measures of Central Tendency", "Moments, Skewness and Kurtosis", "Correlation and Regression", "Time Series"]) assert.match(statisticsBlock, new RegExp(term));
  for (const term of ["chapters: 54", "chapters: 17", "Panjeree English 2nd Paper Digital Question Bank", "Higher Secondary Statistics First Paper supporting guide", "elective-curriculum", "totalChapterRecords: 356"]) assert.match(data, new RegExp(term));
});

test("tutor notes use a focused recall structure, ICT code labs and paper-aware practice", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const term of ["RECALL DESK", "ONE-MINUTE SUMMARY", "QUICK SELF-CHECK", "programmingCodeLab", "#include <stdio.h>", "if (mark >= 33)", "for (i = 1; i <= 5; i++)", "WRITE · TRACE · DEBUG"]) assert.ok(page.includes(term));
  for (const term of ["practicePaper", "changePracticePaper", 'englishResource?"Paper":"পত্র"', "subjectPapers.map", 'paper==="1st Paper"?"১ম পত্র":"২য় পত্র"']) assert.ok(dashboard.includes(term));
  for (const term of [".notebook-paper", ".notebook-overview", ".notebook-concepts", ".notebook-self-check", ".code-example-grid", "Segoe Print", "white-space:pre-wrap"]) assert.ok(css.includes(term));
});

test("chapter PDF waits for the selected format and prints expanded lesson content", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(page, /flushSync\(\(\)=>setNoteMode\(format\)\)/);
  assert.match(page, /printNote\(noteMode\)/);
  assert.match(css, /\.subject-full-notes details > \* \{ display:block !important; \}/);
});

test("supplied Bangla sample chapters use chapter-specific tutor lessons", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["banglaLiteratureLessons", "Aparichita", "Manab-Kalyan", "গয়না যাচাই", "মর্যাদাসম্পন্ন মানব-কল্যাণ", "curatedLessons ? [...curatedLessons"]) assert.ok(data.includes(term));
});

test("priority Accounting and Civics chapters use worked subject-specific tutor notes", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const term of ["prioritySubjectLessons", "Introduction to Accounting", "হিসাব সমীকরণ—অঙ্ক নয়, ঘটনার মানচিত্র", "Civics reference chapter 1", "রাষ্ট্র, সরকার, সমাজ ও নাগরিক—পার্থক্য এবং যোগসূত্র", "পূর্ণ ১+২+৩+৪ উত্তর"]) assert.ok(data.includes(term));
});

test("every HSC2Plus subject has its own notebook workflow and practical workbook", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const subject of ["bangla", "english", "ict", "accounting", "finance", "business", "economics", "civics", "history", "logic", "islamic_history", "statistics", "geography"]) {
    assert.match(page, new RegExp(`\\b${subject}:\\{`), `missing subject notebook configuration: ${subject}`);
  }
  for (const marker of ["subjectWorkbook", "subject-workbook-sheet", "subject-workbook-scroll", "Use this sheet now", "এই ছকটি এখন নিজে পূরণ করো"]) assert.ok(`${page}\n${css}`.includes(marker));
  assert.match(page, /FINANCE DECISION WORKFLOW|BUSINESS CASE WORKFLOW|CIVICS ANALYSIS WORKFLOW|HISTORY EVIDENCE WORKFLOW|CIVILISATION STUDY WORKFLOW/);
});

test("Business and Civics second papers plus both Geography papers follow the supplied references", () => {
  const curriculum = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of ["businessSecondPaperReferenceChapters", "civicsSecondPaperReferenceChapters", "geographyReferenceChapters", "ব্যবস্থাপনার ধারণা", "ব্রিটিশ ভারতে প্রতিনিধিত্বশীল সরকারের বিকাশ", "প্রাকৃতিক ভূগোল", "মানচিত্র অভিক্ষেপ ও জরিপ"]) assert.ok(curriculum.includes(marker));
  for (const marker of ['id: "geography"', 'chapters: 18', 'paper: "1st & 2nd Paper"', "Students.bd scan", "User-supplied Business Organisation", "User-supplied Civics"]) assert.ok(data.includes(marker));
  for (const marker of ["GEOGRAPHY WORKFLOW", "MAP & PROCESS SHEET", 'geography: { accent']) assert.ok(page.includes(marker));
});

test("Statistics second paper and Islamic History use separate complete paper maps", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["statisticsSecondPaperReferenceChapters", "Probability", "Vital Statistics", "islamicHistoryFirstPaperReferenceChapters", "islamicHistorySecondPaperReferenceChapters", "Pre-Islamic Arabia", "Establishment of Muslim Rule in India"]) assert.match(source, new RegExp(marker));
  for (const marker of ["chapters: 17", "chapters: 13", "Higher Secondary Statistics Second Paper supporting guide", "Higher Secondary Islamic History & Culture", "full-subject"]) assert.match(data, new RegExp(marker));
});

test("Bangla notes use direct, student-friendly tutor language", () => {
  const source = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const stale of ["এই পাঠে আমরা", "প্রমাণের সিঁড়ি", "উত্তরের মিতব্যয়িতা", "দুর্বল থেকে শক্তিশালী", "final checking"]) {
    assert.doesNotMatch(source, new RegExp(stale));
  }
  for (const natural of ["আজকের বিষয়", "বাস্তবে কোথায় লাগবে", "বই বন্ধ করে বলো", "নিজেই খাতা দেখো", "একটি তথ্য বদলে দেখো"]) {
    assert.match(source, new RegExp(natural));
  }
});

test("ICT HTML notes contain real code labs and English practice follows paper skills", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["HTML হাতে-কলমে খাতা", "<!DOCTYPE html>", "<table border=", "<form>", "ভুল nesting খুঁজে ঠিক করো", "student profile page"]) assert.ok(page.includes(marker));
  for (const marker of ["buildEnglishBoardPracticeSet", "Comprehension", "Information transfer", "Flow chart", "Right form of verbs", "Sentence transformation", "Formal writing"]) assert.ok(data.includes(marker));
  assert.match(dashboard, /nextSubject === "English" \? "Written" : "All"/);
  assert.match(dashboard, /Reading · Grammar · Writing/);
  assert.match(dashboard, /<option value=\{item\} key=\{item\}>/);
});

test("calculation and visual subjects expose chapter-specific workshops", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["buildChapterWorkshop", "buildAccountingWorkshop", "buildFinanceWorkshop", "buildEconomicsWorkshop", "buildIctWorkshop", "পূর্ণ হিসাব অনুশীলন", "হিসাব ও সিদ্ধান্ত ল্যাব", "তথ্য থেকে সিদ্ধান্ত", "ছক, সূত্র ও গ্রাফ", "মানচিত্র ও প্রক্রিয়া ল্যাব", "HTML build, output prediction ও debugging lab", "Database design, query ও SQL lab", "fiveMinuteRecap", "examNightChecklist"]) assert.ok(data.includes(marker));
  for (const marker of ["CHAPTER-SPECIFIC WORKSHOP", "STEP-BY-STEP CQ", "৫ মিনিটের Recap", "Exam-night Checklist", "নিজেকে যাচাই করো—উত্তরসহ"]) assert.ok(page.includes(marker));
  for (const marker of [".chapter-workshop", ".workshop-formulas", ".workshop-cq", ".workshop-self-check"]) assert.ok(css.includes(marker));
});

test("Accounting keeps ten chapters per paper with source-honest worked formats", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of ["Cost and Cost Classification", "Introduction to Management Accounting", "ব্যয় ও ব্যয়ের শ্রেণিবিভাগ", "ব্যবস্থাপনা হিসাববিজ্ঞান পরিচিতি"]) assert.ok(source.includes(marker));
  for (const marker of ["chapters: 20", "HSC Accounting First Paper supporting book", "HSC Accounting Second Paper supporting book", "441-page user-supplied scan", "369-page user-supplied solution scan", "buildAccountingWorkshop"]) assert.ok(data.includes(marker));
  for (const marker of ["হিসাবের ছক ও Working Note খাতা", "জাবেদার পূর্ণ format", "Bank reconciliation format", "Cost of production statement"]) assert.ok(page.includes(marker));
  assert.ok(page.includes('const accountingFormat = subjectId === "accounting"'));
});

test("Finance resources connect to the subject page and use chapter-specific decisions", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of ["buildFinanceWorkshop", "NPV = ΣCFₜ/(1+k)ᵗ − Initial outlay", "WACC = Σwᵢkᵢ", "Average-clause claim", "Forward premium/discount", "লক্ষ্য, সময়, নগদপ্রবাহ, ব্যয় ও ঝুঁকি", "official edition comparison pending"]) assert.ok(data.includes(marker));
  for (const marker of ['subject.id==="finance" && item.subject==="Finance & Banking"', "Finance Calculation & Decision Sheet", "Cash-flow timeline", "Relevant cash-flow checklist"]) assert.ok(page.includes(marker));
});

test("Economics first paper follows the ten supplied chapter files with distinct quantitative labs", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["Basic Economic Problems and their Solution", "Consumer and Producer Behaviour", "Production, Production Cost and Revenue", "Aggregate Income and Expenditure", "Money and Banking"]) assert.ok(source.includes(marker));
  for (const marker of ["297-page user-supplied supporting scan", "268-page user-supplied supporting scan", "buildEconomicsWorkshop", "Opportunity cost = ত্যাগ করা পরবর্তী সেরা বিকল্প", "MU = ΔTU/ΔQ", "Economic rent = Actual earning − Transfer earning", "GDP = C+I+G+(X−M)", "কোন চলক বদলেছে, কোন শর্ত অপরিবর্তিত"]) assert.ok(data.includes(marker));
});

test("supplied commerce and economics books remain transparent supporting evidence", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const marker of ["suppliedCommerceEconomicsSources", "supportingSourcePolicy", "worked-solution-reference", "question-pattern-reference", "do not prove the official syllabus", "independently rewritten rather than copied"]) assert.ok(data.includes(marker));
  for (const marker of ["supporting-source-record", "এই পাঠ তৈরির সহায়ক উৎস", "অফিসিয়াল NCTB প্রমাণ নয়", "শিক্ষার্থী-পাঠ ও প্রশ্ন নতুনভাবে রচিত"]) assert.ok(dashboard.includes(marker));
});

test("commerce and economics notes use chapter-specific solved CQ and visual profiles", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["পূর্ণ worked CQ", "PPC · সুযোগ ব্যয়", "চাহিদা রেখা · schedule", "TP curve · MP-এর turning point", "Differential rent", "মূল্যসূচক · base year", "decision timeline", "service/risk flow"]) assert.ok(data.includes(marker));
});

test("authentic board archive requires paper scan page source reviewer and searchable tags", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  for (const marker of ['paper: "1st Paper" | "2nd Paper" | "Full Subject"', "originalDocumentUrl", "scanPage", "sourceUrl", "verifiedOn", "verifiedBy", "tags: string[]", 'records: [] as PreviousBoardQuestion[]']) assert.ok(data.includes(marker));
  for (const marker of ["Original PDF or scan URL/filename", "Page reference", "Searchable tags", "Publication decision"]) assert.ok(dashboard.includes(marker));
});

test("every subject note receives complete model examples and visual practice where needed", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["buildModelExamples", 'kind: "Paragraph"', 'kind: writingFocus ? "Email" : "Letter"', "নমুনা আবেদনপত্র", "পূর্ণ ১০ নম্বরের CQ", "buildGraphPractice", 'if (!["economics","statistics","finance","geography"].includes(subjectId))']) assert.ok(data.includes(marker));
  for (const marker of ["MODEL ANSWER STUDIO", "নমুনা উত্তর স্টুডিও", "model-answer-copy", "graph-practice-layout", "আঁকো · Label দাও · ব্যাখ্যা করো"]) assert.ok(page.includes(marker));
  for (const marker of [".model-answer-grid", ".graph-practice-layout", ".graph-line", "@media print"]) assert.ok(css.includes(marker));
});

test("chapter practice consumes the same specific workshop used by the lesson", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  assert.match(data, /buildTopicCqSet\(subjectId, chapter, detail, workshop\)/);
  assert.match(data, /const context = workshop\?\.cqSolution\?\.stimulus/);
  assert.match(data, /workshopParts\.map/);
  assert.match(data, /expandedQuestionSet\(subjectId, chapter, detail, generatedQuestions\(subjectId, chapter, blueprint, detail\), chapterWorkshop, materialPack\)/);
  for (const marker of ["রাফি ট্রেডার্স নগদে পণ্য ক্রয়", "HTML build, output prediction ও debugging lab", "NPV = ΣCFₜ/(1+k)ᵗ − Initial outlay", "ছক, সূত্র ও গ্রাফ ল্যাব"]) assert.ok(data.includes(marker));
});

test("every lesson moves from basic foundation to advanced transfer", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["foundation:", "advanced:", "নির্ণায়ক নিয়ম", "সম্পর্ক, প্রমাণ ও পরিবর্তিত শর্ত", "Interpret, support and refine"]) assert.ok(data.includes(marker));
  for (const marker of ["lesson-depth-ladder", "BASIC FOUNDATION", "ADVANCED NOTE", "নতুন প্রশ্নে প্রয়োগ"]) assert.ok(page.includes(marker));
  assert.match(css, /\.lesson-depth-ladder/);
});

test("release build rejects thin or mechanically repeated lesson depth", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const release = fs.readFileSync(new URL("../app/release-readiness/page.tsx", import.meta.url), "utf8");
  for (const marker of ["lesson is missing its basic foundation explanation", "lesson is missing its advanced transfer layer", "foundation or advanced explanation is too thin", "worked example and student tasks are mechanically repeated"]) assert.ok(data.includes(marker));
  for (const marker of ["AUTOMATED CONTENT INTEGRITY", "Lesson depth gate", "Assessment gate", "Automated pass · specialist review pending"]) assert.ok(release.includes(marker));
});

test("visible lesson practice varies by subject instead of reusing one generic card", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of ["lessonDepthNotes", "lessonTransferNotes", "lessonExaminerNotes", "নিজের একটি নতুন উদাহরণ", "do not stop after naming it"]) assert.ok(data.includes(marker));
  for (const marker of ["lessonActionLabels", "খাতায় এবার সম্পূর্ণ সমাধান করো", "Table–graph–কারণ দিয়ে সমাধান করো", "যুক্তির form নিজে পরীক্ষা করো", "NOW WRITE YOUR OWN RESPONSE"]) assert.ok(page.includes(marker));
});

test("release audit covers every visible option without overstating device checks", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const release = fs.readFileSync(new URL("../app/release-readiness/page.tsx", import.meta.url), "utf8");
  for (const marker of ["চলো “${chapter.titleBn}” ধীরে ধীরে বুঝি", "তোমার কলেজ, পরিবার, স্থানীয় প্রতিষ্ঠান", "এই অধ্যায়ে তোমার কাজ তিনটি", "মুখস্থ সংজ্ঞার অধ্যায় নয়"]) assert.ok(data.includes(marker));
  for (const marker of ["OPTION & INTERACTION AUDIT", "Opening & group choice", "Subject workspace", "Student data", "No false “fully checked” claim", "Real-device tap pending"]) assert.ok(release.includes(marker));
});

test("revision and exam-night notes contain chapter knowledge instead of generic point lists", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["subject-revision-book", "এক নজরে অধ্যায়", "পরিভাষা ও কাঠামো", "ভুল ঠিক করো", "না দেখে যাচাই", "subject-exam-night-book", "অধ্যায়ের মূল তথ্য", "একটি সমাধান মনে রাখো", "CQ উত্তর কাঠামো", "যে ভুলে নম্বর কমে"]) assert.ok(page.includes(marker));
  for (const marker of [".revision-book-grid", ".exam-night-grid", ".exam-night-cq", "break-inside:auto", ".topic-cq-clinic article>header"]) assert.ok(css.includes(marker));
});

test("every subject receives a material-type note pack with worked answers", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const subject of ["bangla","english","ict","accounting","finance","business","economics","civics","history","logic","islamic_history","statistics","geography"]) assert.match(data,new RegExp(`${subject}:\\{identity:`));
  for (const marker of ["buildMaterialPack", "conceptNotes", "workedAnswers", "fullCq", "assessmentFormat", "material-type note pack is incomplete", "material assessment does not provide a complete mark-scaled answer"]) assert.ok(data.includes(marker));
  for (const marker of ["subject-material-pack", "অধ্যায়ভিত্তিক MATERIAL PACK", "প্রশ্ন, সমাধানের পথ ও পূর্ণ উত্তর", "পূর্ণাঙ্গ CQ · ১+২+৩+৪", "নোট বন্ধ করে যাচাই"]) assert.ok(page.includes(marker));
  for (const marker of [".material-concept-grid", ".material-worked-stack", ".material-full-cq", ".material-self-check"]) assert.ok(css.includes(marker));
});

test("MCQ practice contains custom set building without a duplicate top-level tab", () => {
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(dashboard, /mcqView/);
  assert.match(dashboard, /Quick & Unlimited/);
  assert.match(dashboard, /Build your set/);
  assert.match(dashboard, /mcq-workspace-switch/);
  assert.doesNotMatch(dashboard, /<strong>Custom Practice<\/strong>/);
  assert.match(css, /\.mcq-workspace-switch/);
  assert.match(css, /grid-template-columns: repeat\(3,minmax\(0,1fr\)\)/);
});

test("Bangla second paper has serial guide evidence and task-specific worked models", () => {
  const source = fs.readFileSync(new URL("../lib/source-book-curriculum.ts", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  assert.match(source, /banglaSecondPaperGuideSources/);
  assert.equal((source.match(/https:\/\/drive\.google\.com\/file\/d\//g) ?? []).length >= 12, true);
  for (const marker of ["উচ্চারণ ল্যাব", "শব্দগঠন", "বাক্য রূপান্তর", "অনুবাদ কর্মশালা", "অভিজ্ঞতা বর্ণন", "প্রুফ ল্যাব", "জলবায়ু পরিবর্তন ও বাংলাদেশ"]) assert.ok(data.includes(marker));
  assert.match(data, /url: banglaSecondPaperGuideSources\[index\]/);
});

test("new master notes feed evidence-safe rapid revision without mixing subjects", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of ["business-1-master-note", "15-page rapid-revision PDF · visually reviewed", "production-marketing-2-master-note", 'subjectId:"production_marketing"', "34-page question-answer revision PDF · visually reviewed", "login-gated social post · content review pending", "assessment-mistake-guidance"]) assert.ok(data.includes(marker));
  assert.match(page, /chapterWorkshop\?\.comparison\.rows/);
  assert.match(page, /chapterWorkshop\?\.selfCheck/);
});

test("Bangla second-paper writing lessons never fall back to CQ templates", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of [
    "buildBanglaWritingLessons",
    "প্রাতিষ্ঠানিক প্রতিবেদন: বরাবর ও প্রতিষ্ঠানের ঠিকানা",
    "সংবাদ প্রতিবেদন: তথ্যবহুল শিরোনাম",
    "প্রতিবেদনকে আবেদনপত্র, রচনা বা CQ বানিয়ে ফেলো না",
    "banglaWritingGuide",
    "কাজের ধরন ও প্রাপক/পাঠক ঠিক করো",
    'chapter.paper === "2nd Paper"',
  ]) assert.ok(data.includes(marker), `missing writing-note safeguard: ${marker}`);
  assert.match(page, /const writtenTask = resource\?\.materialPack\?\.assessmentFormat === "written-task"/);
  assert.match(page, /writtenTask&&primaryModel/);
  assert.match(page, /বিন্যাসের ঝালাই/);
  assert.doesNotMatch(page, /assessmentFormat==="written-task"[^\n]{0,300}CQ উত্তর কাঠামো/);
});

test("ICT uses the six-book chapter map and the supplied full reference pack", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  assert.match(data, /ict: ictReferenceChapters\.map/);
  assert.doesNotMatch(data, /title: "Cyber safety and responsible use"/);
  assert.match(data, /subject === "business" \? \{ paper \} : \{\}/);
  assert.match(data, /একক আবশ্যিক ICT বিষয়—১ম\/২য় পত্র বিভাজন নেই/);
  for (const source of ["ict-cq-scan-369", "ict-mcq-guide-28", "ict-akkharpatra-full-guide"]) assert.match(data, new RegExp(source));
  for (const chapter of ["ICT: World and Bangladesh Perspective", "Communication Systems and Networking", "Number Systems and Digital Devices", "Introduction to Web Design and HTML", "Programming Language", "Database Management System"]) assert.match(data, new RegExp(chapter.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
});

test("ICT practice starts from chapter-specific MCQs with explanations", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  assert.match(data, /const ictMcqSeeds/);
  assert.match(data, /buildIctSeedQuestions\(chapter\)/);
  for (const concept of ["Biometrics", "Full-duplex", "Half adder", "Browser tab", "int sum=0", "Primary key"]) assert.match(data, new RegExp(concept));
  assert.match(data, /সঠিক উত্তর: \$\{item\.options\[item\.answer\]\}/);
});

test("single-paper ICT rail does not render a stray paper separator", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  assert.match(page, /activePaper\?`\$\{activePaper==="1st Paper"\?"১ম পত্র":"২য় পত্র"\} · শেখার ইউনিট`:"শেখার ইউনিট"/);
  assert.doesNotMatch(page, /\$\{activePaper==="1st Paper"\?"১ম পত্র":activePaper==="2nd Paper"\?"২য় পত্র":""\} · শেখার ইউনিট/);
});

test("ICT detailed notes read as one visual study manual without duplicate packs", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["ict-note-manual", "ICT STUDY MANUAL", "CHAPTER ROADMAP", "ধারণা ও কার্যপ্রবাহ", "চিত্র, ছক ও CQ", "STEP-BY-STEP CQ"]) assert.ok(page.includes(marker));
  assert.match(page, /!isIct&&!isLogic&&<section className="subject-note-chapter subject-workbook-sheet"/);
  assert.match(page, /!isStructuredManual&&resource\?\.materialPack&&<section className="subject-note-chapter subject-material-pack"/);
  assert.match(page, /!isIct&&<section id="worked-examples"/);
  assert.match(page, /!isIct&&resource\?\.modelExamples\?\.length/);
  for (const marker of [".ict-note-opening", ".ict-note-manual .subject-lesson-notes>article", ".ict-note-manual .chapter-workshop", ".ict-note-manual .lesson-note-title>div", "grid-template-columns:minmax(0,1fr)", "@media(max-width:760px)"]) assert.ok(css.includes(marker));
});

test("Logic and Accounting notes use distinct reasoning and working manuals", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["logic-note-manual", "accounting-note-manual", "ARGUMENT ROADMAP", "WORKING ROADMAP", "ARGUMENT & RULE LAB", "WORKING & STATEMENT LAB", "FORMAT · POST · RECONCILE"]) assert.ok(page.includes(marker));
  for (const marker of [".logic-note-opening", ".accounting-note-opening", ".logic-note-manual .subject-note-chapter", ".accounting-note-manual .subject-note-chapter"]) assert.ok(css.includes(marker));
  for (const marker of ["logic-1-scribd-reference", "logic-2-scribd-reference", "accounting-1-scribd-note", "accounting-2-scribd-note", "full academic review pending"]) assert.ok(data.includes(marker));
});

test("Finance notes use a calculation and decision manual with traceable source intake", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["finance-note-manual", "FINANCE DECISION MANUAL", "DECISION ROADMAP", "CASH-FLOW & DECISION LAB", "CALCULATION + DECISION CQ", "সময়রেখা, সূত্রের শর্ত"]) assert.ok(page.includes(marker));
  for (const marker of [".finance-note-opening", ".finance-note-manual .subject-note-chapter", ".finance-note-manual .subject-workbook-scroll th"]) assert.ok(css.includes(marker));
  for (const marker of ["finance-1-scribd-guide", "finance-1-students-question-guide", "finance-1-students-reading", "finance-2-students-mcq", "finance-2-students-cq", "finance-2-students-reading", "direct content review pending"]) assert.ok(data.includes(marker));
});

test("question visuals remain complete across practice tests answers archive and print", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  const dashboard = fs.readFileSync(new URL("../components/dashboard.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["export type QuestionVisual", 'kind: "table" | "flow" | "graph" | "image"', "requiresVisual", "a visual-dependent question is missing its visual", "question visual has incomplete accessible data"]) assert.ok(data.includes(marker));
  for (const marker of ["function QuestionVisual", "question-visual-table-wrap", 'surface="question"', 'surface="answer"', 'loading="lazy"']) assert.ok(dashboard.includes(marker));
  for (const marker of [".question-visual", "overflow-x:auto", "page-break-inside:avoid", "@media print"]) assert.ok(css.includes(marker));
});

test("supplied Finance chapter packs stay supporting evidence rather than official curriculum claims", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["finance-1-chapter-pack-2026", "9 chapter PDFs · 250 scanned pages", "finance-2-chapter-pack-2026", "14 chapter PDFs · 220 scanned pages", "finance-2-mcq-pack-2026", "27 scanned pages"]) assert.ok(data.includes(marker));
  assert.doesNotMatch(data, /finance-[12]-chapter-pack-2026[^\n]+role:"curriculum-evidence"/);
});

test("dense learning components contain horizontal growth on mobile and desktop", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  for (const marker of [
    "Viewport containment belongs to the component that can grow",
    ".subject-full-notes,.subject-note-chapter",
    ".material-worked-stack,.material-full-cq,.chapter-workshop,.model-answer-grid",
    "overscroll-behavior-inline:contain",
    "scrollbar-gutter:stable",
    ".graph-practice-layout { grid-template-columns:minmax(0,1fr)",
  ]) assert.ok(css.includes(marker), `missing overflow safeguard: ${marker}`);
  assert.match(page, /অধ্যায়ের সারকথা/);
  assert.match(page, /তিনটি নোটের কাজ আলাদা/);
});

test("chapter study UI uses meaningful flows, printable completion checks and a collapsible rail", () => {
  const page = fs.readFileSync(new URL("../components/subject-page.tsx", import.meta.url), "utf8");
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  for (const marker of ["chapterRailOpen", "Choose chapter", "অধ্যায় বেছে নাও", "print-completion-check", "workshop-flow-result", "subjectLessonTotal"]) assert.ok(page.includes(marker), `missing subject UI control: ${marker}`);
  for (const marker of ["subject-workspace-grid.rail-open", ".chapter-rail-toggle", ".subject-identity-card.compact", ".print-completion-check", ".workshop-flow-result"]) assert.ok(css.includes(marker), `missing subject UI style: ${marker}`);
});

test("English lessons require text evidence instead of generic lesson filler", () => {
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of ["precise action, contrast, image or statement", "direct answer, two relevant details", "Retelling “${chapter.title}”", "fact from inference"]) assert.ok(data.includes(marker), `missing English lesson depth: ${marker}`);
  assert.ok(!data.includes("In this lesson, we will make ${lesson.title.toLowerCase()} clear"));
});

test("final pre-release pass keeps navigation visible, print recall readable and question workspace clean", () => {
  const css = fs.readFileSync(new URL("../app/globals.css", import.meta.url), "utf8");
  const data = fs.readFileSync(new URL("../lib/academic-data.ts", import.meta.url), "utf8");
  for (const marker of [
    ".chapter-rail-toggle::before",
    "position:sticky; top:10px",
    ".library-reader>.academic-source-panel",
    ".library-reader>.chapter-review-record",
    ".subject-full-notes .subject-lesson-notes details>summary",
    "color:#111!important",
  ]) assert.ok(css.includes(marker), `missing final UI/print safeguard: ${marker}`);
  for (const marker of ["chapterSolvedCqAnswer", "isInstructionOnlyCqAnswer", "ক. ১ নম্বর:", "ঘ. ৪ নম্বর:"]) assert.ok(data.includes(marker), `missing CQ answer-quality gate: ${marker}`);
});

test("optional Supabase login preserves local-first progress and isolates student rows", () => {
  const account = fs.readFileSync(new URL("../components/cloud-account.tsx", import.meta.url), "utf8");
  const accountPage = fs.readFileSync(new URL("../app/account/page.tsx", import.meta.url), "utf8");
  const progress = fs.readFileSync(new URL("../lib/cloud-progress.ts", import.meta.url), "utf8");
  const migration = fs.readFileSync(new URL("../supabase/migrations/001_student_progress.sql", import.meta.url), "utf8");
  const shell = fs.readFileSync(new URL("../components/app-shell.tsx", import.meta.url), "utf8");
  for (const marker of ["signInWithOtp", "Backup now", "Restore", "student_progress"]) assert.ok(account.includes(marker), `missing cloud-account safeguard: ${marker}`);
  assert.match(accountPage, /CQ PDFs are not included/);
  for (const marker of ["hsc2plus-", "schemaVersion: 1", "restoreProgressSnapshot", "hsc2plus-progress"]) assert.ok(progress.includes(marker), `missing local-first sync contract: ${marker}`);
  for (const marker of ["enable row level security", "auth.uid() = user_id", "on delete cascade"]) assert.ok(migration.includes(marker), `missing Supabase RLS rule: ${marker}`);
  assert.match(shell, /sidebar-account-row/);
});
