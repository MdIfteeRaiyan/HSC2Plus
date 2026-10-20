"use client";

import { useCallback, useEffect, useEffectEvent, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  Bookmark,
  BookOpen,
  Brain,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CircleAlert,
  Clock3,
  Download,
  ExternalLink,
  FileText,
  FileImage,
  FileUp,
  Flame,
  ListChecks,
  Headphones,
  Music2,
  Minus,
  Pause,
  PenLine,
  Play,
  RotateCcw,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Target,
  Timer,
  Trash2,
  Upload,
} from "lucide-react";
import {
  businessMissions,
  boardSourceIntakeRegistry,
  boardPaperSourceCatalog,
  boardArchiveCoverage,
  aiCqAssessmentReadiness,
  academicReviewGate,
  academicContentAssurance,
  chaptersBySubject,
  completeExamLibraryByGroup,
  contentCoverageManifest,
  curriculumCoverageRegistry,
  curriculumVerificationLedger,
  humanitiesMissions,
  hscPaperBlueprints,
  mcqQualityAudit,
  officialAcademicSources,
  practiceQuestionsByGroup,
  previousBoardArchive,
  priorityCompletionLedger,
  releaseReadinessAudit,
  subjectsByGroup,
} from "@/lib/academic-data";
import type { QuestionVisual as QuestionVisualData } from "@/lib/academic-data";
import { AppShell } from "./app-shell";
import { AeroFocusBackdrop, SoundStatus } from "./premium-ui";

function Ring({ value, size = 72 }: { value: number; size?: number }) {
  const r = 26;
  const c = 2 * Math.PI * r;
  return (
    <div className="ring" style={{ width: size, height: size }}>
      <svg viewBox="0 0 64 64">
        <circle className="ring-bg" cx="32" cy="32" r={r} />
        <circle
          className="ring-value"
          cx="32"
          cy="32"
          r={r}
          strokeDasharray={c}
          strokeDashoffset={c * (1 - value / 100)}
        />
      </svg>
      <strong>{value}%</strong>
    </div>
  );
}

function stableQuestionKey(question: { type: string; prompt: string; promptBn?: string }) {
  const source = `${question.type}|${question.promptBn ?? question.prompt}`;
  let hash = 2166136261;
  for (let index = 0; index < source.length; index += 1) {
    hash ^= source.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return (hash >>> 0).toString(36);
}

function csvCell(value: unknown) {
  return `"${String(value ?? "").replaceAll('"', '""')}"`;
}

function downloadTextFile(filename: string, content: string, mime = "text/csv;charset=utf-8") {
  const blob = new Blob(["\uFEFF", content], { type: mime });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
}

type ContentIssueTarget = {
  recordId: string;
  subject: string;
  chapter: string;
  reviewerStatus: string;
};

function ContentErrorReporter({ target, bangla }: { target: ContentIssueTarget; bangla: boolean }) {
  const [issueType, setIssueType] = useState("Factual accuracy");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [suggestedCorrection, setSuggestedCorrection] = useState("");
  const [sourceUrl, setSourceUrl] = useState("");
  const [notice, setNotice] = useState("");
  const issueTypes = ["Factual accuracy", "MCQ answer or explanation", "CQ marking or model answer", "Formula or calculation", "Date or terminology", "Language or clarity", "Chapter or syllabus mapping"];
  const labels: Record<string, string> = {
    "Factual accuracy": "তথ্যগত নির্ভুলতা",
    "MCQ answer or explanation": "MCQ উত্তর বা ব্যাখ্যা",
    "CQ marking or model answer": "CQ মানবণ্টন বা মডেল উত্তর",
    "Formula or calculation": "সূত্র বা হিসাব",
    "Date or terminology": "তারিখ বা পরিভাষা",
    "Language or clarity": "ভাষা বা স্পষ্টতা",
    "Chapter or syllabus mapping": "অধ্যায় বা সিলেবাস মিল",
  };
  const prepareReport = () => {
    if (description.trim().length < 12) {
      setNotice(bangla ? "সমস্যাটি অন্তত ১২ অক্ষরে স্পষ্ট করে লিখো।" : "Describe the issue clearly in at least 12 characters.");
      return;
    }
    const report = {
      schema: "hsc2plus-content-issue-v1",
      reportId: `issue-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 7)}`,
      createdAt: new Date().toISOString(),
      status: "new",
      target,
      issueType,
      location: location.trim() || "Not specified",
      description: description.trim(),
      suggestedCorrection: suggestedCorrection.trim() || "Not supplied",
      supportingSource: sourceUrl.trim() || "Not supplied",
      workflow: ["new", "triage", "subject-review", "correction", "verification", "published"],
      publicationRule: "The report does not change academic status. A qualified subject reviewer must verify any correction before publication.",
    };
    const key = "hsc2plus-content-issue-outbox";
    let existing: unknown[] = [];
    try { existing = JSON.parse(window.localStorage.getItem(key) ?? "[]"); } catch { existing = []; }
    window.localStorage.setItem(key, JSON.stringify([...existing.slice(-49), report]));
    downloadTextFile(`${report.reportId}.json`, JSON.stringify(report, null, 2), "application/json;charset=utf-8");
    setNotice(bangla ? `রিপোর্ট ${report.reportId} তৈরি হয়েছে। ফাইলটি একাডেমিক টিমকে পাঠানোর জন্য ডাউনলোড হয়েছে।` : `Report ${report.reportId} is ready. The file was downloaded for submission to the academic team.`);
    setDescription("");
    setSuggestedCorrection("");
    setSourceUrl("");
  };
  return (
    <details className="content-error-reporter">
      <summary><CircleAlert size={16}/><span><strong>{bangla ? "কনটেন্টে সমস্যা জানাও" : "Report a content issue"}</strong><small>{bangla ? "ভুল, অস্পষ্টতা বা সিলেবাসের অমিল" : "Accuracy, clarity or curriculum mismatch"}</small></span><ChevronRight size={16}/></summary>
      <div className="content-error-form">
        <div className="report-context"><ShieldCheck size={17}/><p>{bangla ? `${target.subject} · ${target.chapter} · রেকর্ড ${target.recordId}` : `${target.subject} · ${target.chapter} · record ${target.recordId}`}</p></div>
        <label><span>{bangla ? "সমস্যার ধরন" : "Issue type"}</span><select value={issueType} onChange={(event)=>setIssueType(event.target.value)}>{issueTypes.map((type)=><option key={type} value={type}>{bangla ? labels[type] : type}</option>)}</select></label>
        <label><span>{bangla ? "কোথায় সমস্যা" : "Location"}</span><input value={location} onChange={(event)=>setLocation(event.target.value)} placeholder={bangla ? "যেমন: MCQ ১২, CQ-এর গ অংশ, সূত্রের ছক" : "For example: MCQ 12, CQ part (c), formula table"}/></label>
        <label className="report-wide"><span>{bangla ? "সমস্যাটি ব্যাখ্যা করো *" : "Describe the issue *"}</span><textarea value={description} onChange={(event)=>setDescription(event.target.value)} rows={4} placeholder={bangla ? "কোন অংশটি ভুল বা বিভ্রান্তিকর এবং কেন—স্পষ্ট করে লেখো" : "Explain what appears wrong or misleading and why"}/></label>
        <label className="report-wide"><span>{bangla ? "প্রস্তাবিত সংশোধন" : "Suggested correction"}</span><textarea value={suggestedCorrection} onChange={(event)=>setSuggestedCorrection(event.target.value)} rows={3}/></label>
        <label className="report-wide"><span>{bangla ? "সমর্থনকারী উৎসের লিংক" : "Supporting source link"}</span><input type="url" value={sourceUrl} onChange={(event)=>setSourceUrl(event.target.value)} placeholder="https://"/></label>
        <div className="report-action"><button type="button" onClick={prepareReport}><Download size={15}/>{bangla ? "রিপোর্ট তৈরি ও ডাউনলোড" : "Prepare and download report"}</button><small>{bangla ? "কোনো তথ্য স্বয়ংক্রিয়ভাবে পাঠানো হয় না। ডাউনলোড করা রিপোর্ট একাডেমিক টিমকে পাঠাতে হবে।" : "Nothing is transmitted automatically. Send the downloaded report to the academic team."}</small></div>
        {notice && <p className="report-notice" role="status">{notice}</p>}
      </div>
    </details>
  );
}

function ModelAnswerBreakdown({ text, bangla, cq }: { text: string; bangla: boolean; cq: boolean }) {
  const parts = text.split(/\n\s*\n/).map((part) => part.trim()).filter(Boolean);
  if (!cq || parts.length < 4) return <p style={{ whiteSpace: "pre-line" }}>{text}</p>;
  const meta = bangla
    ? [["ক", "জ্ঞান", "১"], ["খ", "অনুধাবন", "২"], ["গ", "প্রয়োগ", "৩"], ["ঘ", "উচ্চতর দক্ষতা", "৪"]]
    : [["A", "Knowledge", "1"], ["B", "Comprehension", "2"], ["C", "Application", "3"], ["D", "Higher order", "4"]];
  return <div className="cq-model-breakdown">{parts.slice(0, 4).map((part, index) => <section key={`${index}-${part.slice(0,20)}`}><header><span>{meta[index][0]}</span><strong>{meta[index][1]}</strong><em>{meta[index][2]} {bangla ? "নম্বর" : Number(meta[index][2]) === 1 ? "mark" : "marks"}</em></header><p style={{ whiteSpace: "pre-line" }}>{part}</p></section>)}</div>;
}

function QuestionVisual({ visual, surface }: { visual?: QuestionVisualData; surface: "question" | "answer" }) {
  if (!visual || (visual.placement && visual.placement !== "both" && visual.placement !== surface)) return null;
  const points = visual.points ?? [];
  const xValues = points.map((point) => point.x), yValues = points.map((point) => point.y);
  const xMin = Math.min(...xValues, 0), xMax = Math.max(...xValues, 1), yMin = Math.min(...yValues, 0), yMax = Math.max(...yValues, 1);
  const coordinates = points.map((point) => ({...point,cx:55+((point.x-xMin)/Math.max(1,xMax-xMin))*400,cy:170-((point.y-yMin)/Math.max(1,yMax-yMin))*125}));
  return <figure className={`question-visual question-visual-${visual.kind}`} aria-label={visual.alt}>
    <figcaption><strong>{visual.title}</strong><span>{visual.caption}</span></figcaption>
    {visual.kind === "table" && <div className="question-visual-table-wrap"><table><thead><tr>{visual.headers?.map((header)=><th key={header} scope="col">{header}</th>)}</tr></thead><tbody>{visual.rows?.map((row,rowIndex)=><tr key={`${rowIndex}-${row.join("-")}`}>{row.map((cell,cellIndex)=><td key={`${cellIndex}-${cell}`}>{cell}</td>)}</tr>)}</tbody></table></div>}
    {visual.kind === "flow" && <div className="question-visual-flow" role="img" aria-label={visual.alt}>{visual.steps?.map((step,index)=><div key={`${index}-${step}`}><span>{index+1}</span><strong>{step}</strong>{index < (visual.steps?.length ?? 0)-1 && <ArrowRight size={17} aria-hidden="true"/>}</div>)}</div>}
    {visual.kind === "graph" && <svg viewBox="0 0 500 210" role="img" aria-label={visual.alt}><line x1="55" y1="170" x2="470" y2="170"/><line x1="55" y1="170" x2="55" y2="25"/><polyline points={coordinates.map((point)=>`${point.cx},${point.cy}`).join(" ")}/>{coordinates.map((point,index)=><g key={`${point.label}-${index}`}><circle cx={point.cx} cy={point.cy} r="5"/><text x={point.cx+7} y={point.cy-7}>{point.label}</text></g>)}<text x="420" y="198">{visual.xLabel}</text><text x="8" y="24">{visual.yLabel}</text></svg>}
    {visual.kind === "image" && visual.src && <img src={visual.src} alt={visual.alt} loading="lazy" decoding="async"/>}
  </figure>;
}

function LessonVisual({ subjectId, english, chapter, lesson, concept, lessonSteps }: { subjectId: string; english: boolean; chapter: string; lesson: string; concept?: string; lessonSteps?: string[] }) {
  const labels: Record<string, { title: string; caption: string; steps: string[] }> = {
    accounting: { title: english ? "Accounting cycle" : "হিসাবচক্র এক নজরে", caption: english ? "Follow the movement of information before solving the lesson task." : "লেনদেনের তথ্য কোন ধাপে কোথায় যায়—সমাধানের আগে এই প্রবাহটি মনে রাখো।", steps: english ? ["Transaction", "Journal", "Ledger", "Trial balance"] : ["লেনদেন", "জাবেদা", "খতিয়ান", "রেওয়ামিল"] },
    finance: { title: english ? "Value across time" : "সময়ের সঙ্গে অর্থের মূল্য", caption: english ? "Place cash flows on the timeline before selecting a formula." : "সূত্র বাছাইয়ের আগে নগদপ্রবাহটি সময়রেখায় বসাও।", steps: english ? ["Present value", "Rate & time", "Compounding", "Future value"] : ["বর্তমান মূল্য", "হার ও সময়", "চক্রবৃদ্ধি", "ভবিষ্যৎ মূল্য"] },
    economics: { title: english ? "Demand–supply reading" : "চাহিদা–যোগান চিত্র পড়ার নিয়ম", caption: english ? "Read axes, curves and equilibrium before explaining a change." : "পরিবর্তন ব্যাখ্যার আগে অক্ষ, রেখা ও ভারসাম্য বিন্দু শনাক্ত করো।", steps: english ? ["Price", "Demand", "Supply", "Equilibrium"] : ["দাম", "চাহিদা", "যোগান", "ভারসাম্য"] },
    business: { title: english ? "Management decision flow" : "ব্যবস্থাপনা সিদ্ধান্তের প্রবাহ", caption: english ? "Connect the problem to a principle, action and measurable result." : "সমস্যা থেকে নীতি, করণীয় ও পরিমাপযোগ্য ফলের যোগসূত্র দেখো।", steps: english ? ["Problem", "Principle", "Action", "Result"] : ["সমস্যা", "নীতি", "করণীয়", "ফল"] },
    civics: { title: english ? "Governance relationship" : "সুশাসনের সম্পর্কচিত্র", caption: english ? "A strong answer connects law, institutions and citizen impact." : "ভালো উত্তরে আইন, প্রতিষ্ঠান ও নাগরিক প্রভাবের সম্পর্ক স্পষ্ট থাকবে।", steps: english ? ["Constitution", "Institution", "Citizen", "Accountability"] : ["সংবিধান", "প্রতিষ্ঠান", "নাগরিক", "জবাবদিহি"] },
    history: { title: english ? "Historical reasoning line" : "ইতিহাস বিশ্লেষণের সময়রেখা", caption: english ? "Move from context and cause to event, result and significance." : "পটভূমি ও কারণ থেকে ঘটনা, ফল এবং গুরুত্বের ধারাবাহিকতা তৈরি করো।", steps: english ? ["Context", "Cause", "Event", "Significance"] : ["পটভূমি", "কারণ", "ঘটনা", "গুরুত্ব"] },
    english: { title: "Answer structure", caption: "Use the task, plan, evidence and final check to control every response.", steps: ["Read task", "Plan", "Write", "Proofread"] },
  };
  const visual = labels[subjectId] ?? labels.business;
  const chapterSteps = lessonSteps?.filter(Boolean).slice(0, 4);
  const displaySteps = chapterSteps?.length ? chapterSteps : visual.steps;
  const isGraph = subjectId === "economics";
  return <figure className={`lesson-visual ${isGraph ? "graph" : "flow"}`} aria-labelledby="lesson-visual-title">
    <figcaption><span>{visual.title}</span><strong id="lesson-visual-title">{lesson}</strong><p>{concept ?? visual.caption}</p></figcaption>
    {isGraph ? <svg viewBox="0 0 520 210" role="img" aria-label={english ? `Demand and supply model for ${lesson}` : `${lesson} পাঠের চাহিদা ও যোগান মডেল`}>
      <line className="axis" x1="55" y1="170" x2="480" y2="170"/><line className="axis" x1="55" y1="170" x2="55" y2="25"/>
      <path className="demand-line" d="M100 45 L425 155"/><path className="supply-line" d="M100 155 L425 45"/>
      <circle cx="263" cy="100" r="7"/><line className="guide" x1="263" y1="100" x2="263" y2="170"/><line className="guide" x1="55" y1="100" x2="263" y2="100"/>
      <text x="432" y="158">D</text><text x="432" y="48">S</text><text x="272" y="92">E</text><text x="445" y="194">{english ? "Quantity" : "পরিমাণ"}</text><text x="8" y="28">{english ? "Price" : "দাম"}</text>
    </svg> : <div className="visual-flow" role="img" aria-label={`${lesson}: ${displaySteps.join(" to ")}`}>
      {displaySteps.map((step, index) => <div className="visual-step" key={step}><span>{index + 1}</span><strong>{step}</strong>{index < displaySteps.length - 1 && <ArrowRight size={18} aria-hidden="true"/>}</div>)}
    </div>}
    <footer><strong>{english ? "Use it now:" : "এখন কাজে লাগাও:"}</strong> {english ? `Locate “${lesson}” inside this model, then explain the next step without looking.` : `“${lesson}” পাঠটি এই চিত্রের কোন ধাপে পড়ে তা শনাক্ত করে পরের ধাপটি না দেখে বলো।`}<small>{chapter}</small></footer>
  </figure>;
}

function AcademicSourcePanel({ english = false, group }: { english?: boolean; group: "commerce" | "humanities" }) {
  const coverage = curriculumCoverageRegistry.groups[group];
  const subjectAudits = coverage.subjects.map((subject) => ({
    ...subject,
    audit: curriculumVerificationLedger.subjects.find((entry) => entry.id === subject.id)!,
  }));
  const downloadReviewerPacket = () => {
    const headers = ["Record ID", "Group", "Subject", "Chapter", "Curriculum and paper", "Chapter title and sequence", "Edition or reapproval", "Facts, definitions and terminology", "Formulas, calculations or entries", "MCQ options, answer and explanation", "CQ 1+2+3+4 marking", "English grammar, writing and source text", "Reviewer name", "Reviewer role", "Source ID", "Edition or publication year", "Page or chapter reference", "Correction log", "Review date", "Decision", "Final declaration"];
    const rows = completeExamLibraryByGroup[group].map((resource) => [
      resource.review?.recordId,
      coverage.label,
      resource.subject,
      resource.unit,
      "PENDING",
      "PENDING",
      "PENDING",
      "PENDING",
      "PENDING / NOT APPLICABLE",
      "PENDING",
      "PENDING",
      resource.subject === "English" ? "PENDING" : "NOT APPLICABLE",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "",
      "PENDING / CORRECTION REQUIRED / SIGNED OFF",
      "",
    ]);
    const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
    downloadTextFile(`hsc2plus-${group}-academic-review-register.csv`, csv);
  };
  const downloadSourceManifest = () => {
    const manifest = {
      product: "HSC2Plus",
      exportedOn: new Date().toISOString(),
      group,
      rule: academicReviewGate.releaseRule,
      reviewerProtocol: {
        requiredReviewer: academicReviewGate.requiredReviewer,
        workflow: academicReviewGate.workflow,
        acceptanceRules: academicReviewGate.acceptanceRules,
        requiredEvidence: academicReviewGate.requiredEvidence,
      },
      officialSources: officialAcademicSources.entries,
      records: completeExamLibraryByGroup[group].map((resource) => ({
        recordId: resource.review?.recordId,
        subject: resource.subject,
        chapter: resource.unit,
        currentStatus: resource.review?.status,
        reviewerStatus: resource.review?.reviewerStatus,
        checks: resource.review?.checks,
        nctbComparison: resource.review?.nctbComparison,
        blockingReasons: resource.review?.blockingReasons,
        nextAction: resource.review?.nextAction,
      })),
    };
    downloadTextFile(`hsc2plus-${group}-review-evidence-manifest.json`, JSON.stringify(manifest, null, 2), "application/json;charset=utf-8");
  };
  const downloadNctbComparisonRegister = () => {
    const headers = ["Record ID", "Subject", "Current chapter label", "Exact paper mapping", "Paper source ID/page", "Official chapter title", "Title source ID/page", "Official sequence", "Contents source ID/page", "Applicable edition/year", "Edition/imprint source", "Approved/reapproved publisher edition", "Approval notice/source", "Chapter page range", "Page-range source", "Compared by", "Role", "Compared on", "Decision", "Correction note"];
    const rows = completeExamLibraryByGroup[group].map((resource) => [resource.review?.recordId, resource.subject, resource.unit, "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "PENDING", ""]);
    const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
    downloadTextFile(`hsc2plus-${group}-nctb-direct-comparison.csv`, csv);
  };
  const downloadMcqAuditRegister = () => {
    const headers = ["Question ID", "Subject", "Chapter", "Question", "Option A/ক", "Option B/খ", "Option C/গ", "Option D/ঘ", "Recorded answer", "Difficulty", "Cognitive type", "Single correct answer", "No ambiguity", "Distractors valid", "Explanation chapter-specific", "Difficulty accurate", "Language natural", "No repeated pattern", "XI-XII level", "Recall/understanding/application balance", "Textbook edition/page", "Reviewer name", "Reviewer role", "Decision", "Correction note", "Review date"];
    const rows = completeExamLibraryByGroup[group].flatMap((resource) => (resource.bank.questions ?? []).filter((question) => question.type === "MCQ").map((question, index) => [
      `${resource.review?.recordId}-MCQ-${String(index + 1).padStart(3,"0")}`,
      resource.subject,
      resource.unit,
      question.promptBn ?? question.prompt,
      ...(question.optionsBn ?? ["", "", "", ""]),
      question.correctIndex === undefined ? "" : String(question.correctIndex + 1),
      question.level,
      question.category,
      "PENDING", "PENDING", "PENDING", "PENDING", "PENDING", "PENDING", "PENDING", "PENDING", "PENDING",
      "", "", "", "PENDING / CORRECTION REQUIRED / REJECTED", "", "",
    ]));
    const csv = [headers, ...rows].map((row) => row.map(csvCell).join(",")).join("\r\n");
    downloadTextFile(`hsc2plus-${group}-mcq-human-quality-audit.csv`, csv);
  };
  return (
    <details className="academic-source-panel">
      <summary>
        <span><ShieldCheck size={17} /></span>
        <div>
          <strong>{english ? "NCTB source & verification record" : "NCTB উৎস ও যাচাই রেকর্ড"}</strong>
          <small>{english ? `Catalogue checked ${officialAcademicSources.checkedOn} · chapter sequence review continues` : `ক্যাটালগ দেখা হয়েছে ${officialAcademicSources.checkedOnBn} · অধ্যায়ক্রম যাচাই চলমান`}</small>
        </div>
        <ChevronRight size={17} />
      </summary>
      <div className="academic-source-body">
        <p>{english ? "These official references establish the current curriculum and textbook layer. A chapter is not marked final until its title and sequence are checked directly against the relevant book or syllabus." : "এই অফিসিয়াল উৎসগুলো চলতি পাঠ্যক্রম ও পাঠ্যবইয়ের ভিত্তি নির্ধারণ করে। সংশ্লিষ্ট বই বা সিলেবাসের সঙ্গে নাম ও ক্রম সরাসরি না মেলা পর্যন্ত কোনো অধ্যায়কে চূড়ান্ত বলা হবে না।"}</p>
        <div className="verification-policy">
          <strong>{english ? officialAcademicSources.policy.label : officialAcademicSources.policy.labelBn}</strong>
          <p>{english ? officialAcademicSources.policy.statement : officialAcademicSources.policy.statementBn}</p>
          <p>{english ? officialAcademicSources.policy.questionStatement : officialAcademicSources.policy.questionStatementBn}</p>
        </div>
        <section className="review-handoff-tools" aria-label={english ? "Academic review handoff tools" : "একাডেমিক রিভিউ হ্যান্ডঅফ টুলস"}>
          <div><span className="eyebrow">REVIEW HANDOFF</span><strong>{english ? "Move all 356 group learning-unit records into qualified review" : "৩৫৬টি গ্রুপভিত্তিক শেখার ইউনিট যোগ্য পর্যালোচকের কাছে দাও"}</strong><p>{english ? "The register keeps every decision attached to a record ID. The evidence manifest preserves sources, blockers and current status without claiming approval." : "পর্যালোচনা তালিকায় প্রতিটি সিদ্ধান্ত নির্দিষ্ট নথি নম্বরের সঙ্গে থাকবে। প্রমাণপত্রে উৎস, প্রতিবন্ধকতা ও বর্তমান অবস্থা সংরক্ষিত থাকবে—অনুমোদনের কোনো অযাচাইকৃত দাবি ছাড়া।"}</p></div>
          <div className="review-handoff-actions">
            <button type="button" onClick={downloadReviewerPacket}><Download size={15}/>{english ? "Reviewer register (.csv)" : "পর্যালোচকের তালিকা (.csv)"}</button>
            <button type="button" onClick={downloadNctbComparisonRegister}><Download size={15}/>{english ? "NCTB comparison (.csv)" : "NCTB তুলনা তালিকা (.csv)"}</button>
            <button type="button" onClick={downloadSourceManifest}><FileText size={15}/>{english ? "Evidence manifest (.json)" : "Evidence manifest (.json)"}</button>
          </div>
          <small><ShieldCheck size={13}/>{english ? "Downloading a pack does not change any chapter status. Only a named qualified reviewer can sign off a record." : "পর্যালোচনা ফাইল ডাউনলোড করলে কোনো অধ্যায়ের অবস্থা বদলাবে না। কেবল পরিচয়-উল্লেখিত যোগ্য বিষয় পর্যালোচক একটি নথি অনুমোদন করতে পারবেন।"}</small>
        </section>
        <section className="automated-assurance" aria-label={english ? "Automated content assurance" : "স্বয়ংক্রিয় কনটেন্ট যাচাই"}>
          <div className="automated-assurance-head"><span><CheckCircle2 size={18}/><strong>{english ? "356/356 group learning records passed automated assurance" : "৩৫৬/৩৫৬টি গ্রুপভিত্তিক শেখার নথি স্বয়ংক্রিয় যাচাইয়ে উত্তীর্ণ"}</strong></span><small>{english ? academicContentAssurance.auditedOn : academicContentAssurance.auditedOnBn}</small></div>
          <p>{english ? academicContentAssurance.scope : academicContentAssurance.scopeBn}</p>
          <div>{academicContentAssurance.checks.map((check)=><span key={check.id}><Check size={13}/>{english ? check.label : check.labelBn}</span>)}</div>
          <aside><CircleAlert size={16}/><p>{english ? academicContentAssurance.limitation : academicContentAssurance.limitationBn}</p></aside>
        </section>
        <section className="mcq-human-audit" aria-label={english ? "MCQ human quality audit" : "MCQ মানব যাচাই"}>
          <header><div><span className="eyebrow">MCQ QUALITY GATE</span><strong>{english ? "Subject-by-subject human audit" : "বিষয়ভিত্তিক মানব যাচাই"}</strong><p>{english ? mcqQualityAudit.rule : mcqQualityAudit.ruleBn}</p></div><span><Clock3 size={14}/>{mcqQualityAudit.checkedSubjects}/{mcqQualityAudit.totalSubjects} {english ? "subjects approved" : "বিষয় অনুমোদিত"}</span></header>
          <div className="mcq-audit-criteria">{mcqQualityAudit.criteria.map((criterion)=><div key={criterion.id}><Clock3 size={13}/><span>{english ? criterion.label : criterion.labelBn}</span></div>)}</div>
          <div className="mcq-subject-audit-grid">{mcqQualityAudit.subjects.filter((subject)=>subjectAudits.some((item)=>item.id===subject.id)).map((subject)=><article key={subject.id}><div><strong>{english || subject.id === "english" ? subject.label : subject.labelBn}</strong><span>{english ? "Human review pending" : "মানব যাচাই বাকি"}</span></div><p>{english ? subject.specialistFocus : subject.specialistFocusBn}</p></article>)}</div>
          <footer><div><ShieldCheck size={15}/><span><strong>{english ? "Evidence required for every decision" : "প্রতিটি সিদ্ধান্তের প্রমাণ লাগবে"}</strong><small>{mcqQualityAudit.requiredRecord.join(" · ")}</small></span></div><button type="button" onClick={downloadMcqAuditRegister}><Download size={14}/>{english ? "MCQ audit register (.csv)" : "MCQ যাচাই তালিকা (.csv)"}</button></footer>
        </section>
        <section className="curriculum-coverage" aria-label={english ? "Curriculum coverage" : "পাঠ্যক্রম কভারেজ"}>
          <div className="curriculum-coverage-head">
            <div>
              <strong>{english ? "Curriculum coverage" : "পাঠ্যক্রম কভারেজ"}</strong>
              <small>{english ? `${coverage.label} · ${coverage.chapterRecords} chapter records` : `${coverage.labelBn} · ${coverage.chapterRecords}টি অধ্যায়ের নথি`}</small>
            </div>
            <span className="pending"><Clock3 size={14}/>{english ? "Direct comparison pending" : "সরাসরি তুলনা বাকি"}</span>
          </div>
          <div className="curriculum-subject-grid">
            {subjectAudits.map((subject) => (
              <div key={subject.id}>
                <span><strong>{english || subject.id === "english" ? subject.label : subject.labelBn}</strong><small>{subject.chapters} {english ? "chapters" : "অধ্যায়"}</small></span>
                <em className={subject.audit.catalogueEvidence === "official-core-textbook" ? "catalogue-linked" : "edition-pending"}>{english || subject.id === "english" ? subject.audit.catalogueLabel : subject.audit.catalogueLabelBn}</em>
              </div>
            ))}
          </div>
          <p>{english ? "Coverage means every listed chapter has lessons, notes and practice. It does not mean the official paper, title order or edition review is complete." : "কভারেজ সম্পূর্ণ অর্থ প্রতিটি তালিকাভুক্ত অধ্যায়ে পাঠ, নোট ও অনুশীলন আছে। এর অর্থ অফিসিয়াল পত্র, অধ্যায়ক্রম বা সংস্করণ যাচাই শেষ—এমন নয়।"}</p>
        </section>
        <section className="curriculum-audit" aria-label={english ? "Subject audit ledger" : "বিষয় যাচাই খতিয়ান"}>
          <div className="curriculum-audit-head">
            <div><strong>{english ? "Subject audit ledger" : "বিষয় যাচাই খতিয়ান"}</strong><small>{english ? "Exact evidence, without overstating approval" : "অনুমোদন বাড়িয়ে না বলে সঠিক প্রমাণের অবস্থা"}</small></div>
            <span>{curriculumVerificationLedger.summary.subjectsTraced} {english ? "subjects traced" : "বিষয় উৎস-সংযুক্ত"}</span>
          </div>
          <div className="audit-stats">
            <span><strong>{curriculumVerificationLedger.summary.officialSubjectListingsConfirmed}/{curriculumVerificationLedger.summary.subjectsTraced}</strong>{english ? "subjects on official index" : "অফিসিয়াল সূচিতে বিষয়"}</span>
            <span><strong>{curriculumVerificationLedger.summary.officialCoreTextbooksLinked}</strong>{english ? "NCTB core book linked" : "NCTB মূল বই সংযুক্ত"}</span>
            <span><strong>{curriculumVerificationLedger.summary.electiveSyllabusReviewsRemaining}</strong>{english ? "elective edition reviews left" : "নৈর্বাচনিক সংস্করণ যাচাই বাকি"}</span>
            <span><strong>{coverage.chapterRecords}</strong>{english ? "learning records ready" : "শেখার নথি প্রস্তুত"}</span>
          </div>
          <div className="audit-distinction">
            <CircleAlert size={15}/>
            <div><strong>{english ? curriculumVerificationLedger.distinction.label : curriculumVerificationLedger.distinction.labelBn}</strong><p>{english ? curriculumVerificationLedger.distinction.statement : curriculumVerificationLedger.distinction.statementBn}</p></div>
          </div>
          <div className="subject-audit-list">
            {subjectAudits.map((subject) => (
              <div key={subject.id}>
                <strong>{english || subject.id === "english" ? subject.label : subject.labelBn}</strong>
                <span className={subject.audit.catalogueEvidence === "official-core-textbook" ? "linked" : "pending"}>{english || subject.id === "english" ? subject.audit.catalogueLabel : subject.audit.catalogueLabelBn}</span>
                <small><Clock3 size={12}/>{english ? "Paper & chapter sequence: direct review pending" : "পত্র ও অধ্যায়ক্রম: সরাসরি যাচাই বাকি"}</small>
              </div>
            ))}
          </div>
        </section>
        <section className="nctb-comparison-desk" aria-label={english ? "Direct NCTB textbook comparison" : "সরাসরি NCTB পাঠ্যবই তুলনা"}>
          <header><div><span className="eyebrow">DIRECT TEXTBOOK COMPARISON</span><strong>{english ? "Ten-field primary-evidence gate" : "দশ ধাপের প্রাথমিক-প্রমাণ যাচাই"}</strong><p>{english ? curriculumVerificationLedger.verificationRule : curriculumVerificationLedger.verificationRuleBn}</p></div><span><Clock3 size={14}/>{english ? "0 chapters verified" : "০টি অধ্যায় যাচাইকৃত"}</span></header>
          <div className="nctb-comparison-grid">
            {curriculumVerificationLedger.comparisonFields.map((field) => { const linked = ["officialSubject","officialPaper","syllabusYear"].includes(field.id); return <article key={field.id}>{linked ? <CheckCircle2 size={15}/> : <Clock3 size={15}/>}<div><strong>{english ? field.label : field.labelBn}</strong><small>{field.requiredEvidence}</small></div><em>{linked ? (field.id === "officialPaper" ? (english ? "Reference-mapped" : "রেফারেন্স-ম্যাপড") : (english ? "Official source linked" : "অফিসিয়াল উৎস সংযুক্ত")) : (english ? "Pending evidence" : "প্রমাণ বাকি")}</em></article>})}
          </div>
          <div className="nctb-subject-matrix">
            {subjectAudits.map((subject) => <article key={subject.id}><strong>{english || subject.id === "english" ? subject.label : subject.labelBn}</strong><div>{curriculumVerificationLedger.comparisonFields.map((field)=>{const linked=["officialSubject","officialPaper","syllabusYear"].includes(field.id); return <span key={field.id} title={english ? field.label : field.labelBn}>{linked ? <CheckCircle2 size={11}/> : <Clock3 size={11}/>} {linked ? (english ? "Mapped" : "ম্যাপড") : (english ? "Pending" : "বাকি")}</span>})}</div><small>{english || subject.id === "english" ? subject.audit.catalogueLabel : subject.audit.catalogueLabelBn}</small></article>)}
          </div>
          <p className="nctb-comparison-note"><ShieldCheck size={14}/>{english ? "A catalogue link proves traceability, not a chapter title, order, edition or page range. The comparison register must be completed from the applicable book and approval notice." : "ক্যাটালগ লিংক শুধু উৎসের সন্ধান প্রমাণ করে; অধ্যায়ের নাম, ক্রম, সংস্করণ বা পৃষ্ঠা প্রমাণ করে না। প্রযোজ্য বই ও অনুমোদন নোটিশ দেখে তুলনা তালিকা পূরণ করতে হবে।"}</p>
        </section>
        <section className="academic-review-gate" aria-label={english ? "Academic sign-off gate" : "একাডেমিক অনুমোদন গেট"}>
          <div className="review-gate-head">
            <div><strong>{english ? "Academic sign-off gate" : "একাডেমিক অনুমোদনের ধাপ"}</strong><small>{english ? academicReviewGate.requiredReviewer : academicReviewGate.requiredReviewerBn}</small></div>
            <span>{academicReviewGate.pendingChapterRecords}/{academicReviewGate.totalChapterRecords} {english ? "pending" : "বাকি"}</span>
          </div>
          <p>{english ? academicReviewGate.releaseRule : academicReviewGate.releaseRuleBn}</p>
          <div className="review-gate-checks">
            {academicReviewGate.checks.map((check) => <span key={check.id}><Clock3 size={13}/>{english ? check.label : check.labelBn}</span>)}
          </div>
          <details className="review-protocol-details">
            <summary>{english ? "Reviewer roles and required evidence" : "পর্যালোচকের যোগ্যতা ও প্রয়োজনীয় প্রমাণ"}<ChevronRight size={14}/></summary>
            <div className="review-protocol-body">
              <div className="review-role-list">{academicReviewGate.reviewerRoles.filter((role) => subjectAudits.some((subject) => subject.id === role.subjectId)).map((role) => <article key={role.subjectId}><strong>{english ? role.role : role.roleBn}</strong><small>{english ? role.emphasis : role.emphasisBn}</small></article>)}</div>
              <div className="review-evidence-list"><strong>{english ? "A valid sign-off must record" : "বৈধ অনুমোদনে যা নথিভুক্ত থাকবে"}</strong><ol>{(english ? academicReviewGate.requiredEvidence : academicReviewGate.requiredEvidenceBn).map((item) => <li key={item}>{item}</li>)}</ol></div>
            </div>
            <div className="review-workflow-list">{academicReviewGate.workflow.map((stage) => <article key={stage.id}><span>{stage.id === "source" ? "01" : stage.id === "content" ? "02" : stage.id === "assessment" ? "03" : "04"}</span><div><strong>{english ? stage.label : stage.labelBn}</strong><p>{english ? stage.detail : stage.detailBn}</p></div></article>)}</div>
            <div className="review-acceptance-grid">{academicReviewGate.acceptanceRules.map((rule) => <article key={rule.label}><CheckCircle2 size={15}/><div><strong>{english ? rule.label : rule.labelBn}</strong><p>{english ? rule.detail : rule.detailBn}</p></div></article>)}</div>
            <div className="subject-review-scopes">{subjectAudits.map((subject) => { const scope = academicReviewGate.subjectChecklists[subject.id as keyof typeof academicReviewGate.subjectChecklists] ?? ["Chapter and paper mapping", "Definitions, examples and assessment answers", "Qualified reviewer declaration"]; const scopeBn = academicReviewGate.subjectChecklistsBn[subject.id as keyof typeof academicReviewGate.subjectChecklistsBn] ?? ["অধ্যায় ও পত্রের বিন্যাস", "সংজ্ঞা, উদাহরণ ও প্রশ্নের উত্তর", "যোগ্য বিষয়-পর্যালোচকের চূড়ান্ত অনুমোদন"]; return <details key={subject.id}><summary><span><strong>{english || subject.id === "english" ? subject.label : subject.labelBn}</strong><small>{english ? "Subject-specialist checks" : "বিষয় বিশেষজ্ঞের যাচাই তালিকা"}</small></span><ChevronRight size={14}/></summary><ul>{(english ? scope : scopeBn).map((item) => <li key={item}>{item}</li>)}</ul></details>; })}</div>
          </details>
        </section>
        <div className="verification-checkpoints" aria-label={english ? "Academic verification checkpoints" : "একাডেমিক যাচাই ধাপ"}>
          {officialAcademicSources.checkpoints.map((checkpoint) => (
            <div key={checkpoint.id} className={checkpoint.status === "verified" ? "verified" : "pending"}>
              {checkpoint.status === "verified" ? <CheckCircle2 size={15}/> : <Clock3 size={15}/>} 
              <span>
                <strong>{english ? checkpoint.label : checkpoint.labelBn}</strong>
                <small>{checkpoint.status === "verified" ? (english ? "Recorded" : "নথিভুক্ত") : (english ? "Direct review pending" : "সরাসরি যাচাই বাকি")}</small>
              </span>
            </div>
          ))}
        </div>
        <div className="academic-source-list">
          {officialAcademicSources.entries.map((source) => (
            <a key={source.id} href={source.url} target="_blank" rel="noreferrer">
              <span><strong>{english ? source.label : source.labelBn}</strong><small>{english ? "Official NCTB reference" : source.scopeBn}</small></span>
              <ExternalLink size={15} />
            </a>
          ))}
        </div>
        <div className="academic-verification-legend">
          <span><CheckCircle2 size={14}/>{english ? "Source-linked materials" : "উৎস-সংযুক্ত উপকরণ"}</span>
          <span className="pending"><Clock3 size={14}/>{english ? "3 academic checks pending" : "৩টি একাডেমিক যাচাই বাকি"}</span>
        </div>
        <section className="priority-completion-ledger" aria-label={english ? "Priority completion ledger" : "অগ্রাধিকার কাজের অবস্থা"}>
          <header><div><strong>{english ? "Release-readiness ledger" : "প্রকাশ-পূর্ব প্রস্তুতির হিসাব"}</strong><small>{english ? `Audited ${priorityCompletionLedger.checkedOn}` : `সর্বশেষ যাচাই: ${priorityCompletionLedger.checkedOnBn}`}</small></div><span>{priorityCompletionLedger.internal.length}/{priorityCompletionLedger.internal.length} {english ? "internal complete" : "অভ্যন্তরীণ কাজ সম্পূর্ণ"}</span></header>
          <div className="priority-ledger-columns">
            <section><h4><CheckCircle2 size={15}/>{english ? "Completed in the product" : "সাইটের ভেতরের কাজ সম্পূর্ণ"}</h4>{priorityCompletionLedger.internal.map((item)=><article key={item.id}><CheckCircle2 size={14}/><span><strong>{english ? item.label : item.labelBn}</strong><small>{item.evidence}</small></span></article>)}</section>
            <section className="external"><h4><Clock3 size={15}/>{english ? "Requires evidence or service" : "উৎস, পর্যালোচক বা সেবা প্রয়োজন"}</h4>{priorityCompletionLedger.external.map((item)=><article key={item.id}><Clock3 size={14}/><span><strong>{english ? item.label : item.labelBn}</strong><small>{"progress" in item ? `${item.progress} · ` : ""}{item.owner}</small></span></article>)}</section>
          </div>
          <p><ShieldCheck size={14}/>{english ? priorityCompletionLedger.rule : priorityCompletionLedger.ruleBn}</p>
        </section>
        <section className="release-assurance" aria-label={english ? "Release assurance for language accessibility performance operations and legal review" : "ভাষা, accessibility, performance, operations ও legal review"}>
          <header><div><span className="eyebrow">RELEASE ASSURANCE</span><strong>{english ? "What is verified—and what still needs a real test" : "কোন অংশ যাচাই হয়েছে, আর কোন অংশে বাস্তব পরীক্ষা বাকি"}</strong><p>{english ? `Evidence reviewed ${releaseReadinessAudit.checkedOn}. Automated safeguards never replace physical-device, operational or legal approval.` : `প্রমাণ সর্বশেষ দেখা হয়েছে ${priorityCompletionLedger.checkedOnBn}। স্বয়ংক্রিয় সুরক্ষা বাস্তব ডিভাইস, operations বা legal approval-এর বিকল্প নয়।`}</p></div><span><Clock3 size={14}/>{english ? "Public launch gated" : "Public launch এখনো gated"}</span></header>
          <div className="release-assurance-grid">
            {([
              ["08", english ? "Language & typography" : "Language & typography", releaseReadinessAudit.language.automated, releaseReadinessAudit.language.manual],
              ["09", "Accessibility", releaseReadinessAudit.accessibility.automated, releaseReadinessAudit.accessibility.manual],
              ["10", english ? "Performance & offline" : "Performance & offline", [...releaseReadinessAudit.performance.budgets, ...releaseReadinessAudit.performance.offline], releaseReadinessAudit.performance.manual],
              ["11", english ? "Production operations" : "Production operations", releaseReadinessAudit.operations.ready, releaseReadinessAudit.operations.blocked],
              ["12", english ? "Trust & legal clarity" : "Trust & legal clarity", releaseReadinessAudit.legal.covered, releaseReadinessAudit.legal.manual],
            ] as const).map(([number,title,ready,pending])=><details key={number} className="release-audit-card"><summary><span>{number}</span><div><strong>{title}</strong><small>{ready.length} {english ? "safeguards recorded" : "টি safeguard নথিভুক্ত"} · {pending.length} {english ? "manual checks open" : "টি manual check বাকি"}</small></div><ChevronRight size={16}/></summary><div className="release-audit-body"><section><h4><CheckCircle2 size={14}/>{english ? "Implemented or documented" : "প্রস্তুত বা নথিভুক্ত"}</h4><ul>{ready.map((item)=><li key={item}>{item}</li>)}</ul></section><section className="pending"><h4><Clock3 size={14}/>{english ? "Evidence still required" : "প্রমাণ এখনো বাকি"}</h4><ul>{pending.map((item)=><li key={item}>{item}</li>)}</ul></section></div></details>)}
          </div>
          <div className="launch-path"><div><span className="eyebrow">CONTROLLED LAUNCH PATH</span><strong>{english ? "Ten evidence-led steps to public release" : "Public release-এর আগে ১০টি প্রমাণভিত্তিক ধাপ"}</strong></div><ol>{releaseReadinessAudit.launchPath.map((step)=><li key={step}>{step}</li>)}</ol></div>
        </section>
      </div>
    </details>
  );
}

type StudentMetrics = {
  readiness: number;
  bestScore: number;
  completedChapters: number;
  totalChapters: number;
  missionRate: number;
  mistakes: number;
  mistakeTopics: string[];
  questionsAnswered: number;
  correctAnswers: number;
  sessions: number;
  streak: number;
  subjectCompletion: (subjectId: string) => number;
};

function readLocalJson<T>(key: string, fallback: T): T {
  try {
    const stored = window.localStorage.getItem(key);
    return stored === null ? fallback : JSON.parse(stored) as T;
  } catch {
    return fallback;
  }
}

function readStudentMetrics(group: "commerce" | "humanities"): StudentMetrics {
  const subjects = subjectsByGroup[group];
  const totalChapters = subjects.reduce((total, subject) => total + (chaptersBySubject[subject.id]?.length ?? 0), 0);
  const validChapterKeys = new Set(subjects.flatMap((subject) => (chaptersBySubject[subject.id] ?? []).map((chapter) => `${group}:${subject.id}:${chapter.title}`)));
  const completedKeys = readLocalJson<string[]>("hsc2plus-completed-chapters", []);
  const groupCompleted = [...new Set(Array.isArray(completedKeys) ? completedKeys : [])].filter((key) => validChapterKeys.has(key));
  const bestScoreValue = Number(window.localStorage.getItem(`hsc2plus-${group}-best-score`) ?? 0);
  const bestScore = Number.isFinite(bestScoreValue) ? Math.min(100, Math.max(0, bestScoreValue)) : 0;
  const storedMistakes = readLocalJson<number[]>(`hsc2plus-${group}-mistakes`, []);
  const mistakes = Array.isArray(storedMistakes) ? storedMistakes : [];
  const todayInDhaka = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());
  const storedMissions = readLocalJson<{ done?: boolean }[]>(`hsc2plus-${group}-missions:${todayInDhaka}`, []);
  const missions = Array.isArray(storedMissions) ? storedMissions : [];
  const missionRate = missions.length ? Math.round((missions.filter((item) => item.done).length / missions.length) * 100) : 0;
  const rawStats = readLocalJson<Partial<{ questions: number; correct: number; sessions: number }>>(`hsc2plus-${group}-practice-stats`, {});
  const stats = { questions: Math.max(0, Number(rawStats.questions) || 0), correct: Math.max(0, Number(rawStats.correct) || 0), sessions: Math.max(0, Number(rawStats.sessions) || 0) };
  stats.correct = Math.min(stats.correct, stats.questions);
  const storedActivityDates = readLocalJson<string[]>(`hsc2plus-${group}-activity-dates`, []);
  const activityDates = Array.isArray(storedActivityDates) ? storedActivityDates : [];
  let streak = 0;
  const cursor = new Date();
  while (activityDates.includes(cursor.toISOString().slice(0, 10))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  const learningPercentForSubject = (subjectId: string) => {
    const chapters = (chaptersBySubject[subjectId] ?? []).filter((chapter) => chapter.lessonPlan?.length);
    if (!chapters.length) return 0;
    const total = chapters.reduce((sum, chapter) => {
      const chapterKey = `${group}:${subjectId}:${chapter.title}`;
      const mastery = readLocalJson<Record<string, string[]>>(`hsc2plus-lesson-mastery:${chapterKey}`, {});
      const lessonChecks = (chapter.lessonPlan?.length ?? 0) * 3;
      const completedChecks = Array.from({ length: chapter.lessonPlan?.length ?? 0 }, (_, index) => ["understand", "attempt", "verify"].filter((action) => mastery[String(index)]?.includes(action)).length).reduce((count, value) => count + value, 0);
      const stages = readLocalJson<string[]>(`hsc2plus-study-sections:${chapterKey}`, []);
      const stageCount = ["lesson", "notes", "worked", "toolkit", "session"].filter((stage) => stages.includes(stage)).length;
      return sum + ((lessonChecks ? completedChecks / lessonChecks : 0) * .7 + (stageCount / 5) * .3) * 100;
    }, 0);
    return Math.round(total / chapters.length);
  };
  const subjectLearning = subjects.map((subject) => learningPercentForSubject(subject.id));
  const overallLearningRate = subjectLearning.length ? Math.round(subjectLearning.reduce((sum, value) => sum + value, 0) / subjectLearning.length) : 0;
  const practiceAccuracy = stats.questions ? Math.round((stats.correct / stats.questions) * 100) : 0;
  const practiceConfidence = Math.min(1, stats.questions / 20);
  const practiceSignal = Math.max(bestScore, practiceAccuracy) * practiceConfidence;
  const readiness = Math.min(100, Math.max(0, Math.round(practiceSignal * 0.45 + overallLearningRate * 0.35 + missionRate * 0.2)));
  return {
    readiness,
    bestScore,
    completedChapters: groupCompleted.length,
    totalChapters,
    missionRate,
    mistakes: mistakes.length,
    mistakeTopics: mistakes
      .map((id) => practiceQuestionsByGroup[group].find((question) => question.id === id)?.topic)
      .filter((topic): topic is string => Boolean(topic)),
    questionsAnswered: stats.questions,
    correctAnswers: stats.correct,
    sessions: stats.sessions,
    streak,
    subjectCompletion: learningPercentForSubject,
  };
}

function useStudentMetrics(group: "commerce" | "humanities") {
  const empty: StudentMetrics = {
    readiness: 0, bestScore: 0, completedChapters: 0,
    totalChapters: subjectsByGroup[group].reduce((total, subject) => total + subject.chapters, 0),
    missionRate: 0, mistakes: 0, mistakeTopics: [], questionsAnswered: 0, correctAnswers: 0, sessions: 0, streak: 0,
    subjectCompletion: () => 0,
  };
  const [metrics, setMetrics] = useState<StudentMetrics>(empty);
  useEffect(() => {
    const refresh = () => setMetrics(readStudentMetrics(group));
    const recordAndRefresh = () => {
      const key = `hsc2plus-${group}-activity-dates`;
      const storedDates = readLocalJson<string[]>(key, []);
      const dates = Array.isArray(storedDates) ? storedDates : [];
      const today = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(new Date());
      if (!dates.includes(today)) window.localStorage.setItem(key, JSON.stringify([...dates, today].slice(-120)));
      refresh();
    };
    const timer = window.setTimeout(refresh, 0);
    window.addEventListener("hsc2plus-progress", recordAndRefresh);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hsc2plus-progress", recordAndRefresh);
    };
  }, [group]);
  return metrics;
}

type FocusSession = { id: string; date: string; minutes: number; subject: string; note: string };

function StudyFocusTimer({ group }: { group: "commerce" | "humanities" }) {
  const subjects = subjectsByGroup[group];
  const storageKey = `hsc2plus-${group}-focus-timer`;
  const historyKey = `hsc2plus-${group}-focus-history`;
  const [duration, setDuration] = useState(25);
  const [customMinutes, setCustomMinutes] = useState("35");
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [endAt, setEndAt] = useState<number | null>(null);
  const [subject, setSubject] = useState(subjects[0]?.nameBn ?? subjects[0]?.name ?? "Study");
  const [note, setNote] = useState("");
  const [soundOn, setSoundOn] = useState(true);
  const [soundscape, setSoundscape] = useState<"piano" | "rain" | "forest" | "cafe">("piano");
  const [previewing, setPreviewing] = useState(false);
  const [focusTheme, setFocusTheme] = useState<"forest" | "dusk" | "night">("forest");
  const [volume, setVolume] = useState(65);
  const [history, setHistory] = useState<FocusSession[]>([]);
  const [notice, setNotice] = useState("");
  const restored = useRef(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const audioRequestRef = useRef(0);
  const ambientRef = useRef<{ sources: AudioScheduledSourceNode[]; master: GainNode; timers: number[] } | null>(null);
  const todayKey = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  };
  const unlockAudio = useCallback(() => {
    if (!soundOn) return;
    try {
      const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const context = audioContextRef.current ?? new AudioContextClass();
      audioContextRef.current = context;
      if (context.state === "suspended") void context.resume();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      gain.gain.value = .00001;
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(); oscillator.stop(context.currentTime + .02);
    } catch { /* Audio is optional. */ }
  }, [soundOn]);
  const stopAmbient = useCallback(() => {
    audioRequestRef.current += 1;
    const graph = ambientRef.current;
    if (!graph) return;
    try {
      graph.timers.forEach((timer) => window.clearInterval(timer));
      const context = audioContextRef.current;
      if (context) graph.master.gain.setTargetAtTime(0, context.currentTime, .12);
      window.setTimeout(() => graph.sources.forEach((source) => { try { source.stop(); } catch { /* already stopped */ } }), 450);
    } catch { /* Ambient audio is optional. */ }
    ambientRef.current = null;
  }, []);
  const startAmbient = useCallback(async () => {
    if (!soundOn || ambientRef.current) return;
    const request = ++audioRequestRef.current;
    try {
      const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const context = audioContextRef.current ?? new AudioContextClass();
      audioContextRef.current = context;
      if (context.state === "suspended") await context.resume();
      if (request !== audioRequestRef.current || !soundOn) return;
      const master = context.createGain();
      master.gain.setValueAtTime(0, context.currentTime);
      master.gain.linearRampToValueAtTime((volume / 100) * .48, context.currentTime + .8);
      master.connect(context.destination);
      const sources: AudioScheduledSourceNode[] = [];
      const timers: number[] = [];
      const createNoise = (colour: "soft" | "warm", cutoff: number, level: number) => {
        const seconds = 4;
        const buffer = context.createBuffer(1, context.sampleRate * seconds, context.sampleRate);
        const data = buffer.getChannelData(0);
        let last = 0;
        for (let index = 0; index < data.length; index += 1) {
          const white = Math.random() * 2 - 1;
          last = last * (colour === "warm" ? .992 : .982) + white * (colour === "warm" ? .008 : .018);
          data[index] = last * (colour === "warm" ? 5.1 : 3.25);
        }
        const source = context.createBufferSource();
        const filter = context.createBiquadFilter();
        const gain = context.createGain();
        filter.type = "lowpass"; filter.frequency.value = cutoff; filter.Q.value = .45;
        gain.gain.value = level;
        source.buffer = buffer; source.loop = true;
        source.connect(filter).connect(gain).connect(master); source.start(); sources.push(source);
        return gain;
      };
      const playTone = (frequency: number, at: number, length: number, level = .13) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine"; oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(.0001, at);
        gain.gain.exponentialRampToValueAtTime(level, at + .055);
        gain.gain.exponentialRampToValueAtTime(.0001, at + length);
        oscillator.connect(gain).connect(master); oscillator.start(at); oscillator.stop(at + length + .04);
      };
      if (soundscape === "piano") {
        const playPhrase = () => {
          const start = context.currentTime + .04;
          [261.63, 329.63, 392, 523.25, 392, 329.63].forEach((frequency, index) => {
            const oscillator = context.createOscillator();
            const gain = context.createGain();
            oscillator.type = "sine";
            oscillator.frequency.value = frequency;
            const noteStart = start + index * .72;
            gain.gain.setValueAtTime(.0001, noteStart);
            gain.gain.exponentialRampToValueAtTime(.16, noteStart + .045);
            gain.gain.exponentialRampToValueAtTime(.0001, noteStart + 1.18);
            oscillator.connect(gain).connect(master);
            oscillator.start(noteStart);
            oscillator.stop(noteStart + 1.22);
          });
        };
        playPhrase();
        timers.push(window.setInterval(playPhrase, 5100));
      } else if (soundscape === "rain") {
        createNoise("soft", 1700, 1.35);
      } else if (soundscape === "forest") {
        createNoise("warm", 720, .72);
        const playForest = () => {
          const start = context.currentTime + .08;
          [783.99, 1046.5, 880].forEach((frequency, index) => playTone(frequency, start + index * 1.15, .75, .075));
        };
        playForest(); timers.push(window.setInterval(playForest, 6200));
      } else {
        const cafeGain = createNoise("warm", 940, .8);
        const lfo = context.createOscillator();
        const lfoGain = context.createGain();
        lfo.frequency.value = .13; lfoGain.gain.value = .22;
        lfo.connect(lfoGain).connect(cafeGain.gain); lfo.start(); sources.push(lfo);
      }
      ambientRef.current = { sources, master, timers };
    } catch { /* Ambient audio is optional. */ }
  }, [soundOn, soundscape, volume]);
  const playCompletionTune = useCallback(() => {
    if (!soundOn) return;
    try {
      const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
      if (!AudioContextClass) return;
      const context = audioContextRef.current ?? new AudioContextClass();
      audioContextRef.current = context;
      if (context.state === "suspended") void context.resume();
      const notes = [523.25, 659.25, 783.99, 1046.5];
      notes.forEach((frequency, index) => {
        const oscillator = context.createOscillator();
        const gain = context.createGain();
        oscillator.type = "sine";
        oscillator.frequency.value = frequency;
        gain.gain.setValueAtTime(0, context.currentTime + index * .22);
        gain.gain.linearRampToValueAtTime(.075, context.currentTime + index * .22 + .04);
        gain.gain.exponentialRampToValueAtTime(.001, context.currentTime + index * .22 + .55);
        oscillator.connect(gain).connect(context.destination);
        oscillator.start(context.currentTime + index * .22);
        oscillator.stop(context.currentTime + index * .22 + .58);
      });
    } catch { /* Audio is optional. */ }
  }, [soundOn]);
  const saveSession = useCallback((minutes: number) => {
    const entry: FocusSession = { id: `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`, date: todayKey(), minutes, subject, note: note.trim() };
    setHistory((current) => {
      const next = [...current, entry].slice(-120);
      window.localStorage.setItem(historyKey, JSON.stringify(next));
      return next;
    });
    window.dispatchEvent(new Event("hsc2plus-progress"));
  }, [historyKey, note, subject]);
  const completeSession = useCallback(() => {
    setRunning(false);
    setEndAt(null);
    setRemaining(0);
    saveSession(duration);
    playCompletionTune();
    setNotice(`দারুণ! আজকের ${duration} মিনিটের Focus Session সম্পন্ন হয়েছে।`);
    window.localStorage.removeItem(storageKey);
  }, [duration, playCompletionTune, saveSession, storageKey]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const savedHistory = JSON.parse(window.localStorage.getItem(historyKey) ?? "[]") as FocusSession[];
        if (Array.isArray(savedHistory)) setHistory(savedHistory.filter((item) => item && typeof item.minutes === "number"));
        const saved = JSON.parse(window.localStorage.getItem(storageKey) ?? "null") as { duration?: number; remaining?: number; running?: boolean; endAt?: number | null; subject?: string; note?: string; soundOn?: boolean; soundscape?: "piano"|"rain"|"forest"|"cafe"; volume?: number; focusTheme?: "forest"|"dusk"|"night" } | null;
        if (saved) {
          const savedDuration = Math.max(1, Math.min(180, Number(saved.duration) || 25));
          const liveRemaining = saved.running && saved.endAt ? Math.max(0, Math.ceil((saved.endAt - Date.now()) / 1000)) : Math.max(0, Number(saved.remaining) || savedDuration * 60);
          setDuration(savedDuration); setRemaining(liveRemaining); setSubject(saved.subject || subjects[0]?.nameBn || "Study"); setNote(saved.note || ""); setSoundOn(saved.soundOn !== false); setSoundscape(["piano","rain","forest","cafe"].includes(saved.soundscape ?? "") ? saved.soundscape! : "piano"); setVolume(Math.max(0,Math.min(100,saved.volume ?? 55))); setFocusTheme(saved.focusTheme === "dusk" || saved.focusTheme === "night" ? saved.focusTheme : "forest");
          if (saved.running && liveRemaining > 0) { setRunning(true); setEndAt(saved.endAt ?? null); }
          if (saved.running && saved.endAt && liveRemaining === 0) {
            const completed: FocusSession = { id: `${saved.endAt}-recovered`, date: todayKey(), minutes: savedDuration, subject: saved.subject || subjects[0]?.nameBn || "Study", note: saved.note || "" };
            const alreadyRecorded = savedHistory.some((item) => item.id === completed.id);
            const nextHistory = alreadyRecorded ? savedHistory : [...savedHistory, completed].slice(-120);
            setHistory(nextHistory);
            window.localStorage.setItem(historyKey, JSON.stringify(nextHistory));
            window.localStorage.removeItem(storageKey);
            setNotice(`তোমার ${savedDuration} মিনিটের শেষ হওয়া Focus Session ইতিহাসে যোগ হয়েছে।`);
          }
        }
      } catch { window.localStorage.removeItem(storageKey); }
      restored.current = true;
    }, 0);
    return () => window.clearTimeout(timer);
  }, [historyKey, storageKey, subjects]);
  useEffect(() => {
    if (!restored.current) return;
    window.localStorage.setItem(storageKey, JSON.stringify({ duration, remaining, running, endAt, subject, note, soundOn, soundscape, volume, focusTheme }));
  }, [duration, endAt, focusTheme, note, remaining, running, soundOn, soundscape, storageKey, subject, volume]);
  useEffect(() => {
    if ((running || previewing) && soundOn) void startAmbient(); else stopAmbient();
    return stopAmbient;
  }, [previewing, running, soundOn, soundscape, startAmbient, stopAmbient]);
  useEffect(() => {
    if (!ambientRef.current || !audioContextRef.current) return;
    ambientRef.current.master.gain.setTargetAtTime((volume / 100) * .48, audioContextRef.current.currentTime, .15);
  }, [volume]);
  useEffect(() => {
    if (!running || !endAt) return;
    const tick = () => {
      const next = Math.max(0, Math.ceil((endAt - Date.now()) / 1000));
      setRemaining(next);
      if (next === 0) completeSession();
    };
    tick();
    const interval = window.setInterval(tick, 1000);
    return () => window.clearInterval(interval);
  }, [completeSession, endAt, running]);
  const chooseDuration = (minutes: number) => { if (running) return; setDuration(minutes); setRemaining(minutes * 60); setNotice(""); };
  const startPause = () => {
    setNotice("");
    if (running) { setRunning(false); setEndAt(null); setPreviewing(false); return; }
    const seconds = remaining > 0 ? remaining : duration * 60;
    unlockAudio(); setPreviewing(false);
    setRemaining(seconds); setEndAt(Date.now() + seconds * 1000); setRunning(true);
  };
  const previewSound = () => {
    if (previewing) { setPreviewing(false); return; }
    setSoundOn(true);
    unlockAudio();
    setPreviewing(true);
  };
  const chooseSoundscape = (next: "piano" | "rain" | "forest" | "cafe") => {
    setSoundscape(next);
    setSoundOn(true);
    unlockAudio();
    setPreviewing(true);
  };
  const reset = () => { setRunning(false); setEndAt(null); setRemaining(duration * 60); setNotice(""); };
  const finishEarly = () => {
    const studiedMinutes = Math.floor((duration * 60 - remaining) / 60);
    if (studiedMinutes < 1) { setNotice("রেকর্ড রাখতে অন্তত ১ মিনিট পড়ো।"); return; }
    setRunning(false); setEndAt(null); setRemaining(duration * 60); saveSession(studiedMinutes); playCompletionTune(); setNotice(`${studiedMinutes} মিনিটের পড়া আজকের রেকর্ডে যোগ হয়েছে।`); window.localStorage.removeItem(storageKey);
  };
  const applyCustom = () => { const value = Math.max(1, Math.min(180, Number(customMinutes) || 25)); setCustomMinutes(String(value)); chooseDuration(value); };
  const formatTime = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, "0")}:${String(seconds % 60).padStart(2, "0")}`;
  const minutesFor = (date: string) => history.filter((item) => item.date === date).reduce((sum, item) => sum + item.minutes, 0);
  const dateAtOffset = (offset: number) => { const date = new Date(); date.setDate(date.getDate() - offset); return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`; };
  const todayMinutes = minutesFor(dateAtOffset(0));
  const yesterdayMinutes = minutesFor(dateAtOffset(1));
  const week = Array.from({ length: 7 }, (_, index) => { const offset = 6 - index; const date = dateAtOffset(offset); const day = new Date(`${date}T12:00:00`).toLocaleDateString("bn-BD", { weekday: "short" }); return { date, day, minutes: minutesFor(date) }; });
  const maxWeekMinutes = Math.max(30, ...week.map((day) => day.minutes));
  const weekMinutes = week.reduce((sum, day) => sum + day.minutes, 0);
  const weekSessions = history.filter((item) => week.some((day) => day.date === item.date)).length;
  const activeDays = week.filter((day) => day.minutes > 0).length;
  const recentSessions = [...history].reverse().slice(0, 5);
  const progress = Math.min(100, Math.max(0, ((duration * 60 - remaining) / (duration * 60)) * 100));

  return <section className={`focus-studio focus-studio-v2 focus-studio-minimal theme-${focusTheme} ${running ? "is-running" : ""}`} aria-label="Study focus timer">
    <AeroFocusBackdrop />
    <div className="focus-minimal-shell">
      <header><span className="section-kicker"><Timer size={15}/> FOCUS STUDIO</span><p>{todayMinutes ? `আজ ${todayMinutes} মিনিট পড়া হয়েছে` : "একটি সময় বেছে নিয়ে পড়া শুরু করো"}</p></header>
      <div className="focus-clock" aria-live="polite"><div className="focus-clock-ring" style={{ "--focus-progress": `${progress * 3.6}deg` } as React.CSSProperties}><div><strong>{formatTime(remaining)}</strong><span>{running ? "FOCUS" : `${duration} MINUTES`}</span></div></div></div>
      <div className="focus-minimal-presets" aria-label="Focus duration">{[25,45,60].map((minutes) => <button type="button" key={minutes} disabled={running} className={duration === minutes ? "active" : ""} onClick={() => chooseDuration(minutes)}>{minutes} min</button>)}</div>
      <div className="focus-primary-actions"><button type="button" className="focus-start" onClick={startPause}>{running ? <Pause size={18}/> : <Play size={18}/>} {running ? "Pause" : "Start focus"}</button><button type="button" className="focus-reset" onClick={reset} aria-label="Reset timer"><RotateCcw size={17}/></button><button type="button" className={`focus-sound ${soundOn ? "active" : ""}`} onClick={() => setSoundOn((value) => !value)} aria-pressed={soundOn}><Music2 size={16}/><SoundStatus on={soundOn}/></button></div>
      <div className="focus-mini-history" aria-label="Recent focus record"><span><small>Today</small><strong>{todayMinutes} min</strong></span><span><small>Yesterday</small><strong>{yesterdayMinutes} min</strong></span><span><small>7 days</small><strong>{weekMinutes} min</strong></span></div>
      <details className="focus-minimal-audio"><summary><Headphones size={14}/> Sound & session options</summary><div><label><span>Soundscape</span><select value={soundscape} onChange={(event)=>chooseSoundscape(event.target.value as "piano"|"rain"|"forest"|"cafe")}><option value="piano">Soft piano</option><option value="rain">Steady rain</option><option value="forest">Forest birds</option><option value="cafe">Quiet café</option></select></label><label><span>Volume · {volume}%</span><input aria-label="Focus sound volume" type="range" min="0" max="100" value={volume} onChange={(event)=>setVolume(Number(event.target.value))}/></label><button type="button" onClick={previewSound}>{previewing?"Stop preview":"Hear preview"}</button><p className="focus-audio-help">Tap “Hear preview” once—mobile browsers allow sound only after a direct tap.</p></div></details>
      {(running || remaining < duration*60)&&<button type="button" className="focus-finish" onClick={finishEarly}>Finish & save session</button>}
      {notice && <p className="focus-notice" role="status"><Sparkles size={15}/>{notice}</p>}
    </div>
  </section>;
}

function FocusStudioPage({ group }: { group: "commerce" | "humanities" }) {
  return <div className="page-shell focus-page"><section className="page-title focus-page-title"><span className="eyebrow">FOCUS STUDIO</span><h1>Set the timer. Read without distraction.</h1><p>Timer, calm sound and a focused background—nothing extra.</p></section><StudyFocusTimer group={group}/></div>;
}

function Today({
  group,
  onNavigate,
}: {
  group: "commerce" | "humanities";
  onNavigate: (id: string) => void;
}) {
  const initialMissions =
    group === "commerce" ? businessMissions : humanitiesMissions;
  const subjects = subjectsByGroup[group];
  const metrics = useStudentMetrics(group);
  const [items, setItems] = useState(initialMissions);
  const now = new Date();
  const missionDateKey = new Intl.DateTimeFormat("en-CA", { timeZone: "Asia/Dhaka" }).format(now);
  const missionStorageKey = `hsc2plus-${group}-missions:${missionDateKey}`;
  const dateLabel = new Intl.DateTimeFormat("bn-BD", {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: "Asia/Dhaka",
  }).format(now);
  const dhakaHour = Number(new Intl.DateTimeFormat("en-GB", {
    hour: "2-digit",
    hour12: false,
    timeZone: "Asia/Dhaka",
  }).format(now));
  const greeting =
    dhakaHour < 12
      ? "সুপ্রভাত"
      : dhakaHour < 17
        ? "শুভ অপরাহ্ণ"
        : "শুভ সন্ধ্যা";
  useEffect(() => {
    const saved = window.localStorage.getItem(missionStorageKey);
    if (saved) {
      try {
        const restored = JSON.parse(saved);
        const timer = window.setTimeout(() => setItems(restored), 0);
        return () => window.clearTimeout(timer);
      } catch {
        window.localStorage.removeItem(missionStorageKey);
      }
    }
  }, [missionStorageKey]);
  const done = items.filter((i) => i.done).length;
  const totalMinutes = items.reduce((n, i) => n + (i.done ? 0 : i.minutes), 0);
  const todaySubjects = subjects.slice(0, 4);
  const toggle = (id: number) => {
    const updated = items.map((i) =>
      i.id === id ? { ...i, done: !i.done } : i,
    );
    setItems(updated);
    window.localStorage.setItem(
      missionStorageKey,
      JSON.stringify(updated),
    );
    window.dispatchEvent(new Event("hsc2plus-progress"));
  };
  const openMission = (item: (typeof items)[number]) => {
    const subjectId = "subjectId" in item ? item.subjectId : undefined;
    const subjectName = "subjectName" in item ? item.subjectName : undefined;
    const chapterTitle = "chapterTitle" in item ? item.chapterTitle : undefined;
    const lesson = "lesson" in item ? item.lesson : 0;
    const studyMode = "studyMode" in item ? item.studyMode : "lesson";
    const practiceMode = "practiceMode" in item ? item.practiceMode : "objective";
    const questionType = "questionType" in item ? item.questionType : undefined;
    if (item.target === "subjects" && subjectId && chapterTitle) {
      window.localStorage.setItem(`hsc2plus-${group}-subject-resume`, JSON.stringify({ subjectId, chapterTitle, lesson, mode: studyMode }));
    }
    if (item.target === "practice") {
      const entry = { mode: practiceMode, subject: subjectName, unit: chapterTitle, questionType, source: "mission" };
      window.localStorage.setItem(`hsc2plus-${group}-practice-entry`, JSON.stringify(entry));
      if (subjectName && chapterTitle) window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: subjectName, unit: chapterTitle, questionType, source: "mission" }));
    }
    onNavigate(item.target);
  };
  const resetToday = () => {
    setItems(initialMissions);
    window.localStorage.setItem(missionStorageKey, JSON.stringify(initialMissions));
    window.dispatchEvent(new Event("hsc2plus-progress"));
  };
  const openSubject = (subjectId?: string) => {
    if (subjectId) {
      window.localStorage.setItem(`hsc2plus-${group}-subject-resume`, JSON.stringify({ subjectId }));
      window.location.href = `/${group}/subjects/${subjectId}`;
      return;
    }
    onNavigate("subjects");
  };

  return (
    <div className="page-shell">
      <section className="welcome-row today-welcome">
        <div>
          <span className="eyebrow">{dateLabel}</span>
          <h1>{greeting}, রাইয়ান।</h1>
          <p>একটি কাজ দিয়ে শুরু করো। বাকিটা ধীরে ধীরে এগোবে।</p>
        </div>
        <div className="calm-score">
          <Ring value={metrics.readiness} />
          <div>
            <span>HSC READINESS</span>
            <strong>{metrics.readiness >= 75 ? "পরীক্ষার জন্য প্রস্তুত" : metrics.readiness >= 45 ? "ভালোভাবে এগোচ্ছো" : "পরিকল্পনা শুরু করো"}</strong>
          </div>
        </div>
      </section>

      <section className="mission-panel">
        <div className="mission-intro">
          <div>
            <span className="section-kicker">
              <Sparkles size={15} /> TODAY
            </span>
            <h2>
              {done === items.length
                ? "আজকের পরিকল্পনা শেষ"
                : "আজকের ছোট পরিকল্পনা"}
            </h2>
            <p>
              {items.length - done}টি কাজ · প্রায় {totalMinutes} মিনিট
            </p>
          </div>
          <div className="mission-progress">
            <strong>
              {done}/{items.length}
            </strong>
            <span>সম্পন্ন</span>
          </div>
        </div>
        <div className="mission-list">
          {items.map((item, index) => (
            <article key={item.id} className={`mission-item ${item.done ? "done" : ""}`}>
              <button className="mission-check" onClick={() => toggle(item.id)} aria-label={item.done ? "কাজটি আবার অসম্পন্ন করো" : "কাজটি সম্পন্ন হিসেবে চিহ্নিত করো"}>
                {item.done ? <Check size={17} /> : index + 1}
              </button>
              <span className="mission-copy">
                <small>
                {item.subject} · {item.type}
                </small>
                <strong>{item.task}</strong>
              </span>
              <span className="mission-time">
                <Clock3 size={15} />
                {item.minutes} মিনিট
              </span>
              <button className="mission-open" onClick={() => openMission(item)}>{item.done ? "আবার খোলো" : "শুরু করো"}<ChevronRight size={16} /></button>
            </article>
          ))}
        </div>
        <div className="mission-footer">
          <div className="progress-track large">
            <i style={{ width: `${(done / items.length) * 100}%` }} />
          </div>
          <div className="mission-footer-actions">
          {done > 0 && done < items.length && <button className="mission-reset" onClick={resetToday}>আজকের তালিকা রিসেট</button>}
          <button className="primary-button" onClick={() => openMission(items.find((item) => !item.done) ?? items[0])}>
            {done === items.length ? "আজকের কাজ আবার দেখো" : done ? "পরের কাজ চালিয়ে যাও" : "প্রথম কাজ শুরু করো"}
            <ArrowRight size={17} />
          </button>
          </div>
        </div>
      </section>

      <div className="content-grid">
        <section className="surface">
          <div className="section-heading">
            <div>
              <span className="eyebrow">YOUR SUBJECTS</span>
              <h2>পড়া চালিয়ে যাও</h2>
              <p className="section-subtext">সাম্প্রতিক বিষয় থেকে আবার শুরু করো।</p>
            </div>
            <button className="text-button" onClick={() => openSubject()}>
              সব দেখো <ArrowRight size={15} />
            </button>
          </div>
          <div className="subject-list">
            {todaySubjects.map((s) => (
              <button className="subject-row" key={s.id} onClick={() => openSubject(s.id)}>
                <span
                  className="subject-icon"
                  style={{ color: s.color, background: `${s.color}14` }}
                >
                  <BookOpen size={19} />
                </span>
                <span className="subject-name">
                  <strong>{s.id === "english" ? s.name : s.nameBn}</strong>
                  <small>{s.paper === "1st & 2nd Paper" ? (s.id === "english" ? "1st + 2nd Paper" : "১ম + ২য় পত্র") : (s.id === "english" ? "Full subject" : "সম্পূর্ণ বিষয়")}</small>
                </span>
                <span className="subject-next">
                  <small>পরবর্তী অধ্যায়</small>
                  <strong>{s.id === "english" ? s.nextChapter : (chaptersBySubject[s.id]?.find((chapter) => chapter.title === s.nextChapter)?.titleBn ?? s.nextChapter)}</strong>
                </span>
                <span className="mastery">
                  <strong>{metrics.subjectCompletion(s.id)}%</strong>
                  <span className="progress-track">
                    <i
                      style={{ width: `${metrics.subjectCompletion(s.id)}%`, background: s.color }}
                    />
                  </span>
                </span>
                <ChevronRight size={18} />
              </button>
            ))}
          </div>
        </section>
        <aside className="right-stack">
          <section className="surface compact">
            <div className="section-heading">
              <div>
                <span className="eyebrow">PROGRESS</span>
                <h2>তোমার অগ্রগতি</h2>
              </div>
              <span className="good-change">টানা {metrics.streak} দিন</span>
            </div>
            <div className="activity-summary">
              <span><strong>{metrics.completedChapters}</strong><small>অধ্যায়</small></span>
              <span><strong>{metrics.questionsAnswered}</strong><small>প্রশ্ন</small></span>
              <span><strong>{metrics.sessions}</strong><small>পরীক্ষা</small></span>
            </div>
          </section>
          <section className="surface compact focus-card">
            <div className="focus-icon">
              <CircleAlert size={20} />
            </div>
            <div>
              <span className="eyebrow">RECOMMENDED</span>
              <h3>
                {metrics.mistakeTopics[0] ?? (group === "commerce"
                  ? "হিসাববিজ্ঞান · মৌলিক ধারণা দিয়ে শুরু করো"
                  : "অর্থনীতি · মৌলিক ধারণা দিয়ে শুরু করো")}
              </h3>
              <p>
                {metrics.mistakes
                  ? `তোমার সংরক্ষিত ${metrics.mistakes}টি ভুল এখন পুনরাবৃত্তির জন্য প্রস্তুত।`
                  : "একটি Practice শেষ করলে পরের করণীয় এখানে দেখা যাবে।"}
              </p>
              <button className="text-button" onClick={() => onNavigate("practice")}>
                {metrics.mistakes ? "পুনরাবৃত্তি শুরু করো" : "অনুশীলন শুরু করো"} <ArrowRight size={15} />
              </button>
            </div>
          </section>
          <section className="surface compact quick-actions">
            <div className="quick-actions-head"><span className="eyebrow">QUICK START</span><small>যেটি দরকার, সেটি বেছে নাও</small></div>
            <div className="quick-action-grid">
              <button onClick={() => onNavigate("subjects")}><span className="quick-action-icon"><BookOpen size={18}/></span><span><small>LEARN</small><strong>একটি অধ্যায় পড়ো</strong></span><ChevronRight size={16}/></button>
              <button onClick={() => onNavigate("practice")}><span className="quick-action-icon"><PenLine size={18}/></span><span><small>PRACTICE</small><strong>প্রশ্ন সমাধান করো</strong></span><ChevronRight size={16}/></button>
              <button onClick={() => onNavigate("planner")}><span className="quick-action-icon"><CalendarDays size={18}/></span><span><small>PLAN</small><strong>পড়ার সময় সাজাও</strong></span><ChevronRight size={16}/></button>
            </div>
          </section>
        </aside>
      </div>
    </div>
  );
}

function Subjects({ group }: { group: "commerce" | "humanities" }) {
  const subjects = subjectsByGroup[group];
  const [selectedId, setSelectedId] = useState(subjects[0].id);
  const [selectedDeep, setSelectedDeep] = useState(-1);
  const [query, setQuery] = useState("");
  const [activeLesson, setActiveLesson] = useState(0);
  const [studyMode, setStudyMode] = useState<"lesson" | "notes" | "worked" | "toolkit" | "session">("lesson");
  const [noteView, setNoteView] = useState<"detailed" | "revision" | "glimpse">("revision");
  const [studySessionMinutes, setStudySessionMinutes] = useState<25 | 45 | 60>(45);
  const [studySessionTrack, setStudySessionTrack] = useState<"Foundation" | "Standard" | "Challenge">("Standard");
  const [studySessionStep, setStudySessionStep] = useState(0);
  const [completedStudyModes, setCompletedStudyModes] = useState<string[]>([]);
  const [lessonMastery, setLessonMastery] = useState<Record<string, string[]>>({});
  const [noteReadLessons, setNoteReadLessons] = useState<number[]>([]);
  const [noteSelfChecks, setNoteSelfChecks] = useState<number[]>([]);
  const [savedOnly, setSavedOnly] = useState(false);
  const [completed, setCompleted] = useState<string[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [celebration, setCelebration] = useState<{ title: string; message: string } | null>(null);
  const [printReady, setPrintReady] = useState(false);
  const subjectResumeReady = useRef(false);
  const selected =
    subjects.find((subject) => subject.id === selectedId) ?? subjects[0];
  const englishSubject = selected.id === "english";
  const subjectResources = completeExamLibraryByGroup[group].filter((resource) => resource.subject === selected.name);
  const subjectCoverage = {
    chapters: subjectResources.length,
    notes: subjectResources.reduce((total, resource) => total + resource.notes.length, 0),
    questions: subjectResources.reduce((total, resource) => total + (resource.bank.questions?.length ?? 0), 0),
  };
  const subjectCoverageRecords = contentCoverageManifest[group].filter((record) => record.subject === selected.name);
  const materialTotals = subjectCoverageRecords.reduce((totals, record) => ({
    mcq: totals.mcq + record.mcq,
    cq: totals.cq + record.cq,
    written: totals.written + record.written,
    boardPattern: totals.boardPattern + record.boardPattern,
    collegeStandard: totals.collegeStandard + record.collegeStandard,
  }), { mcq: 0, cq: 0, written: 0, boardPattern: 0, collegeStandard: 0 });
  const chapterLabel = (chapter: { title: string; titleBn: string }) => englishSubject ? chapter.title : chapter.titleBn;
  const lessonLabel = (lesson: { title: string; titleBn: string }) => englishSubject ? lesson.title : lesson.titleBn;
  const chapters = chaptersBySubject[selected.id] ?? [];
  const deepChapters = chapters.filter((chapter) => chapter.lessonPlan);
  const featured = selectedDeep >= 0 ? deepChapters[selectedDeep] : undefined;
  const featuredResource = completeExamLibraryByGroup[group].find(
    (resource) => resource.subject === selected.name && resource.unit === featured?.title,
  );
  const noteGroups = featuredResource ? [
    { title: englishSubject ? "Foundation and key ideas" : "ভিত্তি ও মূল ধারণা", subtitle: englishSubject ? "Definitions, rules and chapter language" : "সংজ্ঞা, নিয়ম ও অধ্যায়ের ভাষা", notes: featuredResource.notes.slice(0, 12) },
    { title: englishSubject ? "Method and application" : "পদ্ধতি ও প্রয়োগ", subtitle: englishSubject ? "How to use the ideas in unfamiliar situations" : "নতুন পরিস্থিতিতে ধারণা প্রয়োগের কৌশল", notes: featuredResource.notes.slice(12, 26) },
    { title: englishSubject ? "Exam writing and error control" : "পরীক্ষার উত্তর ও ভুল নিয়ন্ত্রণ", subtitle: englishSubject ? "Presentation, checking and mark-saving moves" : "উপস্থাপন, যাচাই ও নম্বর বাঁচানোর কৌশল", notes: featuredResource.notes.slice(26) },
  ].filter((section) => section.notes.length) : [];
  const detailedLessonNotes = featuredResource?.lessonDetails?.map((lesson, lessonIndex) => {
    const referenceNote = featuredResource.notes[29 + (lessonIndex % Math.max(1, featuredResource.notes.length - 29))];
    return [
      lesson.concept,
      englishSubject
        ? `How the method works: ${lesson.steps.join(" ")}`
        : `পদ্ধতিটি যেভাবে কাজ করে: ${lesson.steps.join(" ")}`,
      englishSubject
        ? `Where to use it: ${lesson.application}`
        : `কোথায় প্রয়োগ করবে: ${lesson.application}`,
      referenceNote,
    ].filter((point): point is string => Boolean(point));
  }) ?? [];
  const rapidRecall = featuredResource ? [
    ...(featuredResource.guide?.terminology ?? []).slice(0, 5),
    ...(featuredResource.guide?.structures ?? []).slice(0, 3),
  ] : [];
  const revisionRecallDrill = featuredResource?.lessonDetails
    ?.flatMap((lesson) => lesson.recallQuestions ?? [])
    .filter((question, index, all) => all.indexOf(question) === index)
    .slice(0, 8) ?? [];
  const revisionExamQuestions = featuredResource?.bank.questions
    ?.filter((question) => question.category === "Board-style" || question.category === "College-standard")
    .sort((a, b) => (a.type === "CQ" ? 0 : a.type === "Written" ? 1 : 2) - (b.type === "CQ" ? 0 : b.type === "Written" ? 1 : 2))
    .slice(0, 6) ?? [];
  const lessonExamPool = featuredResource?.bank.questions
    ?.filter((question) => (question.type === "CQ" || question.type === "Written") && (question.category === "Board-style" || question.category === "College-standard")) ?? [];
  const lessonExamConnections = featuredResource?.lessonDetails?.map((_, index) => lessonExamPool[index % Math.max(1, lessonExamPool.length)]) ?? [];
  const activeLessonDetail = featuredResource?.lessonDetails?.[activeLesson];
  const chapterQuestions = featuredResource?.bank.questions ?? [];
  const importantPrintQuestions = (["MCQ", "CQ", "Written"] as const).flatMap((type) => {
    const limit = type === "MCQ" ? 15 : type === "CQ" ? 8 : 7;
    return chapterQuestions
      .filter((question) => question.type === type)
      .sort((a, b) => {
        const priority = (category: string) => category === "Board-style" ? 0 : category === "College-standard" ? 1 : category === "Application" ? 2 : 3;
        return priority(a.category) - priority(b.category);
      })
      .slice(0, limit);
  });
  const printQuestionGroups = (["MCQ", "CQ", "Written"] as const).map((type) => ({
    type,
    questions: importantPrintQuestions.filter((question) => question.type === type),
  }));
  const sessionQuestion = chapterQuestions.find((question) => question.level === studySessionTrack && (studySessionTrack === "Foundation" ? question.type === "MCQ" : question.type === "CQ")) ?? chapterQuestions[0];
  const sessionStages = featuredResource ? [
    { title: englishSubject ? "Preview the chapter" : "অধ্যায়টি এক নজরে দেখো", minutes: Math.max(3, Math.round(studySessionMinutes * .1)), body: featuredResource.guide?.concept ?? featuredResource.notes[0] },
    { title: englishSubject ? "Deep lesson" : "মূল ধারণা বুঝে পড়ো", minutes: Math.max(7, Math.round(studySessionMinutes * .3)), body: featuredResource.lessonDetails?.[activeLesson]?.concept ?? featuredResource.notes[1] },
    { title: englishSubject ? "Active recall notes" : "নিজে মনে করে বলো", minutes: Math.max(5, Math.round(studySessionMinutes * .2)), body: featuredResource.notes.slice(studySessionTrack === "Foundation" ? 0 : studySessionTrack === "Standard" ? 8 : 16, studySessionTrack === "Foundation" ? 4 : studySessionTrack === "Standard" ? 12 : 20).join(" ") },
    { title: englishSubject ? "Worked method" : "উদাহরণ দিয়ে প্রয়োগ করো", minutes: Math.max(5, Math.round(studySessionMinutes * .2)), body: `${featuredResource.worked.problem} ${featuredResource.worked.steps.join(" ")}` },
    { title: englishSubject ? "Exam checkpoint" : "পরীক্ষার মতো উত্তর দাও", minutes: Math.max(5, Math.round(studySessionMinutes * .2)), body: sessionQuestion ? (englishSubject ? sessionQuestion.prompt : (sessionQuestion.promptBn ?? sessionQuestion.prompt)) : "" },
  ] : [];
  const filteredChapters = chapters.filter((chapter) => {
    const matchesQuery = `${chapter.title} ${chapter.titleBn}`.toLowerCase().includes(query.trim().toLowerCase());
    const key = `${group}:${selected.id}:${chapter.title}`;
    return matchesQuery && (!savedOnly || bookmarks.includes(key));
  });
  const chapterKey = featured ? `${group}:${selected.id}:${featured.title}` : "";
  const studyProgressKey = `hsc2plus-study-sections:${chapterKey}`;
  const lessonMasteryKey = `hsc2plus-lesson-mastery:${chapterKey}`;
  const noteReadingKey = `hsc2plus-note-reading:${chapterKey}`;
  const noteSelfCheckKey = `hsc2plus-note-self-check:${chapterKey}`;
  const studyModes = ["lesson", "notes", "worked", "toolkit", "session"] as const;
  const completedStudyCount = completedStudyModes.filter((item) => studyModes.includes(item as typeof studyModes[number])).length;
  const masteryActions = ["understand", "attempt", "verify"] as const;
  const masteredLessonCount = featured?.lessonPlan?.filter((_, index) => masteryActions.every((action) => lessonMastery[String(index)]?.includes(action))).length ?? 0;
  const totalLessonChecks = (featured?.lessonPlan?.length ?? 0) * masteryActions.length;
  const completedLessonChecks = Array.from({ length: featured?.lessonPlan?.length ?? 0 }, (_, index) => masteryActions.filter((action) => lessonMastery[String(index)]?.includes(action)).length).reduce((total, count) => total + count, 0);
  const chapterMasteryPercent = Math.round(((totalLessonChecks ? completedLessonChecks / totalLessonChecks : 0) * .7 + (completedStudyCount / 5) * .3) * 100);
  const firstIncompleteLesson = featured?.lessonPlan?.findIndex((_, index) => !masteryActions.every((action) => lessonMastery[String(index)]?.includes(action))) ?? -1;
  const nextIncompleteMode = (["notes", "worked", "toolkit", "session"] as const).find((mode) => !completedStudyModes.includes(mode));
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setCompleted(JSON.parse(window.localStorage.getItem("hsc2plus-completed-chapters") ?? "[]"));
        setBookmarks(JSON.parse(window.localStorage.getItem("hsc2plus-bookmarked-chapters") ?? "[]"));
      } catch {
        window.localStorage.removeItem("hsc2plus-completed-chapters");
        window.localStorage.removeItem("hsc2plus-bookmarked-chapters");
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-subject-resume`) ?? "null") as { subjectId?: string; chapterTitle?: string; lesson?: number; mode?: string } | null;
        const subject = saved?.subjectId ? subjects.find((item) => item.id === saved.subjectId) : undefined;
        if (subject) {
          const allowedModes = ["lesson", "notes", "worked", "toolkit", "session"];
          setSelectedId(subject.id);
          setSelectedDeep(-1);
          setActiveLesson(0);
          setStudyMode(saved?.mode && allowedModes.includes(saved.mode) ? saved.mode as typeof studyMode : "lesson");
        }
      } catch { window.localStorage.removeItem(`hsc2plus-${group}-subject-resume`); }
      subjectResumeReady.current = true;
    }, 0);
    return () => window.clearTimeout(timer);
  }, [group, subjects]);
  useEffect(() => {
    if (!subjectResumeReady.current || !featured) return;
    window.localStorage.setItem(`hsc2plus-${group}-subject-resume`, JSON.stringify({ subjectId: selected.id, chapterTitle: featured.title, lesson: activeLesson, mode: studyMode }));
  }, [activeLesson, featured, group, selected.id, studyMode]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setCompletedStudyModes(JSON.parse(window.localStorage.getItem(studyProgressKey) ?? "[]"));
      } catch {
        setCompletedStudyModes([]);
        window.localStorage.removeItem(studyProgressKey);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [studyProgressKey]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(lessonMasteryKey) ?? "{}") as Record<string, string[]>;
        setLessonMastery(saved && typeof saved === "object" && !Array.isArray(saved) ? saved : {});
      } catch {
        setLessonMastery({});
        window.localStorage.removeItem(lessonMasteryKey);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [lessonMasteryKey]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(noteReadingKey) ?? "[]");
        setNoteReadLessons(Array.isArray(saved) ? saved.filter((item): item is number => Number.isInteger(item)) : []);
      } catch {
        setNoteReadLessons([]);
        window.localStorage.removeItem(noteReadingKey);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [noteReadingKey]);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(noteSelfCheckKey) ?? "[]");
        setNoteSelfChecks(Array.isArray(saved) ? saved.filter((item): item is number => Number.isInteger(item)) : []);
      } catch {
        setNoteSelfChecks([]);
        window.localStorage.removeItem(noteSelfCheckKey);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [noteSelfCheckKey]);
  useEffect(() => {
    if (!celebration) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setCelebration(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [celebration]);
  const saveStudyProgress = (next: string[]) => {
    const clean = [...new Set(next.filter((item) => studyModes.includes(item as typeof studyModes[number])))];
    setCompletedStudyModes(clean);
    window.localStorage.setItem(studyProgressKey, JSON.stringify(clean));
    window.dispatchEvent(new Event("hsc2plus-progress"));
  };
  const completeStudyMode = (mode: typeof studyMode) => {
    if (!completedStudyModes.includes(mode)) saveStudyProgress([...completedStudyModes, mode]);
  };
  const toggleNoteLesson = (lessonIndex: number) => {
    const next = noteReadLessons.includes(lessonIndex) ? noteReadLessons.filter((item) => item !== lessonIndex) : [...noteReadLessons, lessonIndex];
    setNoteReadLessons(next);
    window.localStorage.setItem(noteReadingKey, JSON.stringify(next));
  };
  const toggleNoteSelfCheck = (checkIndex: number) => {
    const next = noteSelfChecks.includes(checkIndex) ? noteSelfChecks.filter((item) => item !== checkIndex) : [...noteSelfChecks, checkIndex];
    setNoteSelfChecks(next);
    window.localStorage.setItem(noteSelfCheckKey, JSON.stringify(next));
  };
  const openStudyMode = (mode: typeof studyMode) => {
    setStudyMode(mode);
    if (mode !== "session" && mode !== "lesson") completeStudyMode(mode);
  };
  const toggleStudyModeComplete = () => saveStudyProgress(
    completedStudyModes.includes(studyMode)
      ? completedStudyModes.filter((item) => item !== studyMode)
      : [...completedStudyModes, studyMode],
  );
  const workedTeachingNotes: Record<string, { method: string; why: string; exam: string }> = englishSubject ? {
    english: {
      method: "Read the task, identify audience and purpose, plan the response, then edit for accuracy and format.",
      why: "Planning protects relevance; editing protects language marks. Both are required in an HSC-standard response.",
      exam: "Show a clear structure, answer every instruction and reserve time for proofreading.",
    },
  } : {
    accounting: { method: "প্রথমে হিসাব শনাক্ত ও শ্রেণিবিন্যাস, পরে নিয়ম প্রয়োগ, শেষে ডেবিট–ক্রেডিট/সমীকরণ দিয়ে যাচাই।", why: "শ্রেণিবিন্যাস ঠিক হলে দাখিলা, খতিয়ান ও চূড়ান্ত হিসাবের পরবর্তী ধাপগুলো ধারাবাহিকভাবে নির্ভুল থাকে।", exam: "কার্যপ্রণালি, হিসাবের শিরোনাম, টাকা ও চূড়ান্ত মিল—চারটিই দেখাবে।" },
    finance: { method: "প্রদত্ত তথ্য ও সময় একক সাজিয়ে সূত্র/সিদ্ধান্তের মানদণ্ড নির্বাচন, হিসাব এবং আর্থিক ব্যাখ্যা।", why: "শুধু সংখ্যা সিদ্ধান্ত নয়; ঝুঁকি, তারল্য, সময় ও নগদপ্রবাহের অর্থ দেখালেই বিশ্লেষণ সম্পূর্ণ হয়।", exam: "সূত্র, মান বসানো, একক, ফল ও সিদ্ধান্ত আলাদা লাইনে লেখো।" },
    economics: { method: "চলক ও সম্পর্ক শনাক্ত করে ছক/সূত্র/গ্রাফে পরিবর্তন দেখাও, তারপর অর্থনৈতিক ভাষায় ফল ব্যাখ্যা করো।", why: "অর্থনীতিতে রেখা বরাবর চলাচল ও রেখার স্থানান্তর, কিংবা সংখ্যা ও তার অর্থ—দুটি আলাদা নম্বর বহন করে।", exam: "অক্ষ, রেখা, ভারসাম্য, হিসাব ও ব্যাখ্যা স্পষ্টভাবে লেবেল করো।" },
    business: { method: "ঘটনার লক্ষণ থেকে মূল সমস্যা আলাদা করে নীতি প্রয়োগ, বাস্তবসম্মত পদক্ষেপ ও ফল মাপার সূচক দাও।", why: "নীতির নাম লিখলেই প্রয়োগ হয় না; সিদ্ধান্তটি প্রতিষ্ঠানের সমস্যা কীভাবে সমাধান করে তা দেখাতে হয়।", exam: "উদ্দীপকের তথ্য → নীতি → প্রয়োগ → ফল—এই ক্রমে লেখো।" },
    civics: { method: "অধিকার, দায়িত্ব, প্রতিষ্ঠান ও আইনগত নীতি শনাক্ত করে প্রমাণভিত্তিক ভারসাম্যপূর্ণ সিদ্ধান্ত দাও।", why: "ব্যক্তিগত মতের বদলে সাংবিধানিক নীতি ও প্রাতিষ্ঠানিক পথ ব্যবহার করলে উত্তর বিশ্লেষণধর্মী হয়।", exam: "প্রাসঙ্গিক প্রতিষ্ঠান, নীতি, নাগরিক প্রভাব ও করণীয় উল্লেখ করো।" },
    history: { method: "সময়ক্রম, কারণ, ঘটনা, ফল এবং উৎসের নির্ভরযোগ্যতা—পাঁচ স্তরে প্রমাণ সাজাও।", why: "তারিখের তালিকা ইতিহাস নয়; ঘটনাগুলোর কারণগত সংযোগ ও প্রমাণের সীমা দেখানোই বিশ্লেষণ।", exam: "তারিখ/ঘটনা, কারণ, তাৎক্ষণিক ফল ও দীর্ঘমেয়াদি গুরুত্ব আলাদা করো।" },
  };
  const teachingNote = workedTeachingNotes[selected.id] ?? { method: "প্রশ্নের চাওয়া শনাক্ত করে নিয়ম প্রয়োগ ও ফল যাচাই করো।", why: "প্রতিটি ধাপের কারণ বুঝলে নতুন প্রশ্নেও একই পদ্ধতি ব্যবহার করা যায়।", exam: "প্রমাণসহ ধাপে ধাপে উত্তর উপস্থাপন করো।" };
  const lessonMemoryCue = englishSubject
    ? "Task → Rule → Attempt → Check"
    : ({
        accounting: "লেনদেন → হিসাব → ডেবিট–ক্রেডিট → যাচাই",
        finance: "তথ্য → সূত্র → হিসাব → আর্থিক সিদ্ধান্ত",
        economics: "চলক → পরিবর্তন → ছক/চিত্র → ব্যাখ্যা",
        business: "সমস্যা → নীতি → করণীয় → প্রত্যাশিত ফল",
        civics: "নীতি → প্রতিষ্ঠান → নাগরিক প্রভাব → সিদ্ধান্ত",
        history: "সময় → কারণ → ঘটনা → ফল ও গুরুত্ব",
      } as Record<string, string>)[selected.id] ?? "ধারণা → নিয়ম → প্রয়োগ → যাচাই";
  const toggleLessonMastery = (action: typeof masteryActions[number]) => {
    const lessonId = String(activeLesson);
    const current = lessonMastery[lessonId] ?? [];
    const nextActions = current.includes(action) ? current.filter((item) => item !== action) : [...current, action];
    const next = { ...lessonMastery, [lessonId]: nextActions };
    setLessonMastery(next);
    window.localStorage.setItem(lessonMasteryKey, JSON.stringify(next));
    const lessonCount = featured?.lessonPlan?.length ?? 0;
    const allMastered = lessonCount > 0 && Array.from({ length: lessonCount }, (_, index) => masteryActions.every((item) => next[String(index)]?.includes(item))).every(Boolean);
    if (allMastered) completeStudyMode("lesson");
    if (!current.includes(action) && nextActions.length === masteryActions.length) {
      setCelebration({
        title: englishSubject ? "Lesson mastered!" : "পাঠটি আয়ত্ত হয়েছে!",
        message: englishSubject ? "Excellent work. Continue while the idea is still fresh." : "দারুণ! ধারণা বোঝা, নিজে চেষ্টা ও উত্তর যাচাই—তিন ধাপই সম্পন্ন হয়েছে।",
      });
    }
    window.dispatchEvent(new Event("hsc2plus-progress"));
  };
  const continueChapterMastery = () => {
    if (firstIncompleteLesson >= 0) {
      setStudyMode("lesson");
      setActiveLesson(firstIncompleteLesson);
      return;
    }
    if (nextIncompleteMode) {
      setStudyMode(nextIncompleteMode);
      if (nextIncompleteMode === "session") setStudySessionStep(0);
      else completeStudyMode(nextIncompleteMode);
      return;
    }
    setStudyMode("lesson");
    setActiveLesson(0);
  };
  const nextMasteryLabel = firstIncompleteLesson >= 0
    ? (englishSubject ? `Continue lesson ${firstIncompleteLesson + 1}` : `পাঠ ${firstIncompleteLesson + 1} চালিয়ে যাও`)
    : nextIncompleteMode === "notes" ? (englishSubject ? "Read complete notes" : "পূর্ণাঙ্গ নোট পড়ো")
    : nextIncompleteMode === "worked" ? (englishSubject ? "Study worked solutions" : "সমাধানসহ উদাহরণ দেখো")
    : nextIncompleteMode === "toolkit" ? (englishSubject ? "Review chapter toolkit" : "অধ্যায় সহায়িকা দেখো")
    : nextIncompleteMode === "session" ? (englishSubject ? "Finish guided session" : "স্টাডি সেশন শেষ করো")
    : (englishSubject ? "Review the chapter again" : "অধ্যায়টি আবার পুনরালোচনা করো");
  const toggleSaved = (
    key: string,
    values: string[],
    update: (items: string[]) => void,
    storageKey: string,
  ) => {
    const next = values.includes(key)
      ? values.filter((item) => item !== key)
      : [...values, key];
    update(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    window.dispatchEvent(new Event("hsc2plus-progress"));
  };
  const toggleChapterComplete = () => {
    const alreadyComplete = completed.includes(chapterKey);
    toggleSaved(chapterKey, completed, setCompleted, "hsc2plus-completed-chapters");
    if (!alreadyComplete) {
      setCelebration({
        title: englishSubject ? "Chapter completed!" : "অধ্যায় সম্পন্ন—অভিনন্দন!",
        message: englishSubject ? "Your progress is saved. A short revision will help it stay with you." : "তোমার অগ্রগতি সংরক্ষিত হয়েছে। মনে রাখতে পরের রিভিশনের সময় অধ্যায়টি একবার ঝালিয়ে নাও।",
      });
    }
  };
  const printChapterBook = () => {
    setPrintReady(true);
    window.setTimeout(() => window.print(), 80);
  };
  useEffect(() => {
    const clearPrintBook = () => setPrintReady(false);
    window.addEventListener("afterprint", clearPrintBook);
    return () => window.removeEventListener("afterprint", clearPrintBook);
  }, []);
  const chooseSubject = (id: string) => {
    setSelectedId(id);
    setSelectedDeep(-1);
    setActiveLesson(0);
    setStudyMode("lesson");
    setStudySessionStep(0);
    setQuery("");
  };
  return (
    <div className="page-shell">
      <section className="page-title">
        <span className="eyebrow">LEARNING MAP</span>
        <h1>
          {group === "commerce"
            ? "ব্যবসায় শিক্ষা বিভাগের বিষয়সমূহ"
            : "মানবিক বিভাগের বিষয়সমূহ"}
        </h1>
        <p>
          বিষয় নির্বাচন করে অধ্যায়, পাঠ ও অনুশীলনের পূর্ণ কাঠামো দেখো।
        </p>
      </section>
      <div className="subject-content-layout">
        <div className="subject-card-grid compact-grid">
          {subjects.map((s) => (
            (() => {
              const subjectCompleted = completed.filter((key) => key.startsWith(`${group}:${s.id}:`)).length;
              const subjectBookmarks = bookmarks.filter((key) => key.startsWith(`${group}:${s.id}:`)).length;
              const completion = s.chapters ? Math.round((subjectCompleted / s.chapters) * 100) : 0;
              return (
            <button
              className={`subject-card selectable ${selectedId === s.id ? "selected" : ""}`}
              key={s.id}
              onClick={() => chooseSubject(s.id)}
            >
              <div className="subject-card-head">
                <span
                  className="subject-icon large"
                  style={{ color: s.color, background: `${s.color}14` }}
                >
                  <BookOpen />
                </span>
                <span className="status-pill">{s.paper === "1st & 2nd Paper" ? (s.id === "english" ? "1st + 2nd Paper" : "১ম + ২য় পত্র") : (s.id === "english" ? "Full subject" : "সম্পূর্ণ বিষয়")}</span>
              </div>
              <h2>{s.id === "english" ? s.name : s.nameBn}</h2>
              <p>{s.id === "english" ? `${s.chapters} chapters · structured exam preparation` : `${s.chapters}টি অধ্যায় · গুছানো পরীক্ষা প্রস্তুতি`}</p>
              <div className="metric-row">
                <span>
                  <small>{s.id === "english" ? "Completed" : "সম্পন্ন"}</small>
                  <strong>{subjectCompleted}/{s.chapters}</strong>
                </span>
                <span>
                  <small>{s.id === "english" ? "Saved" : "সংরক্ষিত"}</small>
                  <strong>{subjectBookmarks}</strong>
                </span>
              </div>
              <div className="progress-track large">
                <i style={{ width: `${completion}%`, background: s.color }} />
              </div>
              <div className="group-enter">
                {s.id === "english" ? "View subject" : "বিষয়টি দেখো"} <ArrowRight size={16} />
              </div>
            </button>
              );
            })()
          ))}
        </div>
        <section className="subject-detail">
          <div className="subject-detail-head">
            <div>
              <span className="eyebrow">{englishSubject ? "FULL SUBJECT LIBRARY" : "সম্পূর্ণ বিষয় লাইব্রেরি"}</span>
              <h2>{englishSubject ? selected.name : selected.nameBn}</h2>
              <p>{englishSubject ? `${selected.chapters} chapters in the current learning plan` : `বর্তমান পাঠপরিকল্পনায় ${selected.chapters}টি অধ্যায়`}</p>
            </div>
            <span
              className="subject-icon large"
              style={{
                color: selected.color,
                background: `${selected.color}14`,
              }}
            >
              <BookOpen />
            </span>
          </div>
          <div className="subject-coverage-summary">
            <span><strong>{subjectCoverage.chapters}</strong><small>{englishSubject ? "complete chapters" : "পূর্ণ অধ্যায়"}</small></span>
            <span><strong>{subjectCoverage.notes.toLocaleString()}</strong><small>{englishSubject ? "detailed note sections" : "বিস্তারিত নোট অংশ"}</small></span>
            <span><strong>{subjectCoverage.questions.toLocaleString()}</strong><small>{englishSubject ? "practice questions" : "অনুশীলন প্রশ্ন"}</small></span>
          </div>
          <details className="subject-material-map">
            <summary><span><ListChecks size={17}/><span><strong>{englishSubject ? "What every chapter includes" : "প্রতিটি অধ্যায়ে যা পাচ্ছ"}</strong><small>{englishSubject ? "Notes, lessons, practice and offline support" : "নোট, পাঠ, অনুশীলন ও অফলাইন সহায়তা"}</small></span></span><ChevronRight size={17}/></summary>
            <div className="subject-material-map-body">
              <section className="material-format-grid">
                <article><span>01</span><strong>{englishSubject ? "Detailed Notes" : "বিস্তারিত নোট"}</strong><small>{englishSubject ? "Complete lessons, methods and examples" : "পূর্ণ পাঠ, পদ্ধতি ও উদাহরণ"}</small></article>
                <article><span>02</span><strong>{englishSubject ? "Revision" : "দ্রুত রিভিশন"}</strong><small>{englishSubject ? "Key rules, recall and common mistakes" : "মূল নিয়ম, মনে করার অনুশীলন ও সাধারণ ভুল"}</small></article>
                <article><span>03</span><strong>{englishSubject ? "Last-minute Revision" : "শেষ মুহূর্তের ঝালাই"}</strong><small>{englishSubject ? "High-yield exam-night essentials" : "পরীক্ষার আগের জরুরি বিষয়"}</small></article>
                <article><span>04</span><strong>{englishSubject ? "Printable Chapter Book" : "প্রিন্টযোগ্য অধ্যায় বই"}</strong><small>{englishSubject ? "Full notes and exam pack for offline study" : "অফলাইনে পড়ার জন্য নোট ও প্রশ্নপ্যাক"}</small></article>
              </section>
              <section className="material-question-breakdown" aria-label={englishSubject ? "Question bank breakdown" : "প্রশ্নভান্ডারের ধরন"}>
                <header><strong>{englishSubject ? "Question-bank coverage" : "প্রশ্নভান্ডারের কভারেজ"}</strong><small>{englishSubject ? "Actual available questions—not planned counts" : "পরিকল্পিত নয়—বর্তমানে থাকা প্রশ্নের সংখ্যা"}</small></header>
                <div><span><strong>{materialTotals.mcq.toLocaleString("bn-BD")}</strong><small>MCQ</small></span><span><strong>{materialTotals.cq.toLocaleString("bn-BD")}</strong><small>CQ</small></span><span><strong>{materialTotals.written.toLocaleString("bn-BD")}</strong><small>{englishSubject ? "Written" : "লিখিত"}</small></span><span><strong>{materialTotals.boardPattern.toLocaleString("bn-BD")}</strong><small>{englishSubject ? "Board-pattern" : "বোর্ড-প্যাটার্ন"}</small></span><span><strong>{materialTotals.collegeStandard.toLocaleString("bn-BD")}</strong><small>{englishSubject ? "College-standard" : "কলেজ-স্ট্যান্ডার্ড"}</small></span></div>
              </section>
              <div className="question-quality-guard"><span><CheckCircle2 size={14}/>{englishSubject ? "Duplicate-prompt check" : "পুনরাবৃত্ত প্রশ্ন যাচাই"}</span><span><CheckCircle2 size={14}/>{englishSubject ? "Balanced answer positions" : "ক/খ/গ/ঘ উত্তর ভারসাম্য"}</span><span><CheckCircle2 size={14}/>{englishSubject ? "Explanation required" : "প্রতিটি উত্তরে ব্যাখ্যা"}</span></div>
              <aside><ShieldCheck size={17}/><p>{englishSubject ? "Learning-pack availability and academic verification are separate. Every chapter has study materials; NCTB sequence, edition and answer sign-off remain clearly marked in the review record." : "শেখার উপকরণ প্রস্তুত থাকা এবং একাডেমিক যাচাই এক বিষয় নয়। প্রতিটি অধ্যায়ের উপকরণ আছে; NCTB অধ্যায়ক্রম, সংস্করণ ও উত্তরের অনুমোদনের অবস্থা পর্যালোচনা নথিতে আলাদাভাবে দেখানো হয়েছে।"}</p></aside>
            </div>
          </details>
          <div className="chapter-tools">
            <label>
              <Search size={17} />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={englishSubject ? "Search chapters" : "অধ্যায় খুঁজুন"}
                aria-label={englishSubject ? "Search chapters" : "অধ্যায় খুঁজুন"}
              />
            </label>
            <button className={savedOnly ? "saved-filter active" : "saved-filter"} onClick={() => setSavedOnly((value) => !value)}>
              <Bookmark size={16} fill={savedOnly ? "currentColor" : "none"}/>
              {englishSubject ? "Saved chapters only" : "শুধু সংরক্ষিত অধ্যায়"}
            </button>
            <span>{englishSubject ? `${filteredChapters.length} of ${chapters.length} chapters` : `${chapters.length}টির মধ্যে ${filteredChapters.length}টি অধ্যায়`}</span>
          </div>
          <div className="chapter-list">
            {filteredChapters.map((chapter) => {
              const originalIndex = chapters.findIndex((item) => item.title === chapter.title);
              const detailIndex = deepChapters.findIndex((item) => item.title === chapter.title);
              const chapterResource = subjectResources.find((resource) => resource.unit === chapter.title);
              const key = `${group}:${selected.id}:${chapter.title}`;
              return (
              <article key={chapter.title} className={`chapter-row ${selectedDeep === detailIndex ? "active" : ""}`}>
                <span className="chapter-number">
                  {String(originalIndex + 1).padStart(2, "0")}
                </span>
                <div className="chapter-copy">
                  <strong>{chapterLabel(chapter)}</strong>
                  <div className="chapter-meta">
                    {chapter.paper && <span className="chapter-paper-tag">{englishSubject ? chapter.paper : chapter.paper === "1st Paper" ? "১ম পত্র" : "২য় পত্র"}</span>}
                    <span>{englishSubject ? `${chapterResource?.lessonDetails?.length ?? chapter.lessons} detailed lessons` : `${chapterResource?.lessonDetails?.length ?? chapter.lessons}টি বিস্তারিত পাঠ`}</span>
                    <span>{englishSubject ? `${chapterResource?.notes.length ?? 0} note sections` : `${chapterResource?.notes.length ?? 0}টি নোট অংশ`}</span>
                    <span>{englishSubject ? `${chapterResource?.bank.questions?.length ?? 0} questions` : `${chapterResource?.bank.questions?.length ?? 0}টি প্রশ্ন`}</span>
                    {completed.includes(key) && <span className="chapter-complete-label">{englishSubject ? "Completed" : "সম্পন্ন"}</span>}
                  </div>
                </div>
                <button
                  className="chapter-action"
                  aria-label={englishSubject ? `Open ${chapter.title}` : `${chapter.titleBn} খুলুন`}
                  title={englishSubject ? "Open complete chapter materials" : "পূর্ণাঙ্গ অধ্যায় উপকরণ খুলুন"}
                  onClick={() => {
                    if (detailIndex >= 0) {
                      setSelectedDeep(detailIndex);
                      setActiveLesson(0);
                      setStudyMode("lesson");
                      window.setTimeout(() => document.getElementById("chapter-study-studio")?.scrollIntoView({ behavior: "smooth", block: "start" }), 0);
                    }
                  }}
                >
                  <span>{englishSubject ? "Study" : "পড়ো"}</span><ChevronRight size={17} />
                </button>
              </article>
            )})}
            {filteredChapters.length === 0 && (
              <div className="chapter-empty">
                <Search size={20} />
                <strong>{englishSubject ? "No chapters found" : "কোনো অধ্যায় পাওয়া যায়নি"}</strong>
                <span>{englishSubject ? (savedOnly ? "Save a chapter or turn off the saved filter." : "Try a different or shorter search term.") : (savedOnly ? "একটি অধ্যায় সংরক্ষণ করো অথবা সংরক্ষিত ফিল্টার বন্ধ করো।" : "অন্য বা ছোট শব্দ দিয়ে খোঁজ করো।")}</span>
              </div>
            )}
          </div>
          <div className="verification-note compact-verification-note">
            <CircleAlert size={17} />
            <p>
              {englishSubject ? "Chapter names and sequence are under academic review against the current NCTB curriculum. No material is labelled final or an official board question until verification is complete." : "অধ্যায়ের নাম ও ক্রম বর্তমান এনসিটিবি পাঠ্যক্রমের সঙ্গে মিলিয়ে একাডেমিক পর্যালোচনা করা হচ্ছে। যাচাই সম্পন্ন না হওয়া পর্যন্ত কোনো উপকরণকে চূড়ান্ত বা সরকারি বোর্ড প্রশ্ন হিসেবে দেখানো হবে না।"}
            </p>
          </div>
        </section>
          {featured && (
            <section className="featured-unit chapter-study-section" id="chapter-study-studio">
              <div className="featured-unit-head">
                <div>
                  <span className="eyebrow">{englishSubject ? "DETAILED STUDY" : "বিস্তারিত অধ্যয়ন"}</span>
                  <h3>{chapterLabel(featured)}</h3>
                  <p>{englishSubject ? "Concepts, guided examples and exam-focused practice" : "ধারণা, নির্দেশিত উদাহরণ ও পরীক্ষাভিত্তিক অনুশীলন"}</p>
                </div>
                <div className="featured-unit-controls">
                  <label className="workspace-chapter-switcher">
                    <span>{englishSubject ? "Switch chapter" : "অধ্যায় পরিবর্তন"}</span>
                    <select
                      value={selectedDeep}
                      onChange={(event) => {
                        setSelectedDeep(Number(event.target.value));
                        setActiveLesson(0);
                        setStudyMode("lesson");
                        setNoteView("revision");
                      }}
                    >
                      {deepChapters.map((chapter, index) => <option key={chapter.title} value={index}>{index + 1}. {chapterLabel(chapter)}</option>)}
                    </select>
                  </label>
                  <span className="unit-time">
                    ≈{" "}
                    {featured.lessonPlan?.reduce(
                      (total, lesson) => total + lesson.minutes,
                      0,
                    )}{" "}
                    {englishSubject ? "min" : "মিনিট"}
                  </span>
                  <div className="lesson-actions">
                    <button onClick={printChapterBook} title={englishSubject ? "Save complete chapter materials as PDF" : "পূর্ণ অধ্যায়ের উপকরণ PDF হিসেবে সংরক্ষণ করো"}>
                      <Download size={17}/>{englishSubject ? "Chapter PDF" : "অধ্যায়ের সম্পূর্ণ PDF"}
                    </button>
                    <button
                      className={bookmarks.includes(chapterKey) ? "active" : ""}
                      onClick={() => toggleSaved(chapterKey, bookmarks, setBookmarks, "hsc2plus-bookmarked-chapters")}
                    >
                      <Bookmark size={17} fill={bookmarks.includes(chapterKey) ? "currentColor" : "none"} />
                      {bookmarks.includes(chapterKey) ? (englishSubject ? "Saved" : "সংরক্ষিত") : (englishSubject ? "Save" : "সংরক্ষণ")}
                    </button>
                    <button
                      className={completed.includes(chapterKey) ? "active complete" : ""}
                      onClick={toggleChapterComplete}
                    >
                      <CheckCircle2 size={17} />
                      {completed.includes(chapterKey) ? (englishSubject ? "Completed" : "সম্পন্ন") : (englishSubject ? "Mark complete" : "সম্পন্ন করো")}
                    </button>
                  </div>
                </div>
              </div>
              {featuredResource && printReady && <article className="chapter-print-book" aria-hidden="true">
                <header><span>HSC2Plus · {featuredResource.review?.curriculum ?? "NCTB HSC"}</span><h1>{englishSubject ? featuredResource.unit : featuredResource.unitBn}</h1><p>{englishSubject ? featuredResource.subject : (featuredResource.subjectBn ?? featuredResource.subject)} · {englishSubject ? "Complete learning materials" : "পূর্ণাঙ্গ শেখার উপকরণ"}</p></header>
                {featuredResource.guide && <><section className="print-rapid-sheet"><h2>{englishSubject ? "1. Last-minute revision sheet" : "১. শেষ মুহূর্তের পুনরালোচনা"}</h2><p><strong>{englishSubject ? "Core idea:" : "মূল ধারণা:"}</strong> {featuredResource.guide.concept}</p><h3>{englishSubject ? "Must recall" : "যা অবশ্যই মনে রাখবে"}</h3><ul>{rapidRecall.map((item) => <li key={item}>{item}</li>)}</ul><h3>{englishSubject ? "Final checks" : "শেষবার যাচাই"}</h3><ul>{[...(featuredResource.examToolkit?.mistakes ?? []).slice(0,3),...featuredResource.guide.examChecklist.slice(0,3)].map((item) => <li key={item}>{item}</li>)}</ul></section><section><h2>{englishSubject ? "2. Chapter foundation" : "২. অধ্যায়ের ভিত্তি"}</h2><p>{featuredResource.guide.concept}</p><p>{featuredResource.guide.application}</p></section><section><h2>{englishSubject ? "3. Key terms, definitions and formulas" : "৩. গুরুত্বপূর্ণ পরিভাষা, সংজ্ঞা ও সূত্র"}</h2><ul>{[...featuredResource.guide.terminology,...featuredResource.guide.structures].map((item) => <li key={item}>{item}</li>)}</ul></section><section className="print-revision-sheet"><h2>{englishSubject ? "Revision notes" : "দ্রুত পুনরালোচনা"}</h2><ul>{featuredResource.guide.examChecklist.map((item)=><li key={item}>{item}</li>)}</ul><h3>{englishSubject ? "Active self-check" : "নিজে যাচাই"}</h3><ul>{featuredResource.guide.selfCheck.map((item)=><li key={item}>{item}</li>)}</ul></section></>}
                <section><h2>{englishSubject ? "4. Complete lessons" : "৪. পূর্ণাঙ্গ পাঠসমূহ"}</h2>{featuredResource.lessonDetails?.map((lesson, index) => { const examLink = lessonExamConnections[index]; return <div className="print-lesson" key={lesson.title}><h3>{index + 1}. {lesson.title}</h3><p>{lesson.concept}</p><ol>{lesson.steps.map((step) => <li key={step}>{step}</li>)}</ol>{lesson.recallQuestions && <><h4>{englishSubject ? "Active recall" : "না দেখে মনে করো"}</h4><ul>{lesson.recallQuestions.map((question) => <li key={question}>{question}</li>)}</ul></>}<p><strong>{englishSubject ? "Common trap:" : "সাধারণ ভুল:"}</strong> {lesson.commonTrap}</p><p><strong>{englishSubject ? "Application:" : "প্রয়োগ:"}</strong> {lesson.application}</p><p><strong>{englishSubject ? "Worked snapshot:" : "সমাধানের নমুনা:"}</strong> {lesson.workedSnapshot}</p><p><strong>{englishSubject ? "Independent practice:" : "নিজে করো:"}</strong> {lesson.practicePrompt}</p><p><strong>{englishSubject ? "Challenge task:" : "চ্যালেঞ্জ অনুশীলন:"}</strong> {lesson.stretchPrompt}</p><p><strong>{englishSubject ? "Answer check:" : "উত্তর যাচাই:"}</strong> {lesson.answerCheck}</p>{examLink && <div className="print-lesson-exam"><h4>{englishSubject ? "Exam connection" : "পরীক্ষায় প্রয়োগ"} · {examLink.marks ?? 10} {englishSubject ? "marks" : "নম্বর"}</h4><p>{englishSubject ? examLink.prompt : (examLink.promptBn ?? examLink.prompt)}</p><p><strong>{englishSubject ? "What earns marks:" : "যেভাবে নম্বর পাবে:"}</strong> {englishSubject ? examLink.answerGuide : (examLink.answerGuideBn ?? examLink.answerGuide)}</p></div>}</div>})}</section>
                <section className="print-detailed-reference">
                  <h2>{englishSubject ? "5. Detailed chapter reference" : "৫. বিস্তারিত অধ্যায় রেফারেন্স"}</h2>
                  <p className="print-section-intro">{englishSubject ? "Use this section after the complete lessons: connect the chapter ideas, revise the method, diagnose mistakes and prepare an exam-ready response." : "পূর্ণাঙ্গ পাঠ শেষ করার পর এই অংশটি ব্যবহার করো—অধ্যায়ের ধারণাগুলো যুক্ত করো, সমাধানপদ্ধতি ঝালিয়ে নাও, ভুল শনাক্ত করো এবং পরীক্ষার উপযোগী উত্তর তৈরি করো।"}</p>
                  {featuredResource.guide && <div className="print-reference-foundation"><h3>{englishSubject ? "5.1 Core understanding and application" : "৫.১ মূল ধারণা ও প্রয়োগ"}</h3><p><strong>{englishSubject ? "Central idea:" : "কেন্দ্রীয় ধারণা:"}</strong> {featuredResource.guide.concept}</p><p><strong>{englishSubject ? "Bangladesh/application context:" : "বাংলাদেশ/প্রয়োগ প্রেক্ষাপট:"}</strong> {featuredResource.guide.application}</p></div>}
                  {featuredResource.guide && <div className="print-reference-block"><h3>{englishSubject ? "5.2 Essential terminology and structures" : "৫.২ প্রয়োজনীয় পরিভাষা ও কাঠামো"}</h3><div className="print-term-grid">{[...featuredResource.guide.terminology,...featuredResource.guide.structures].map((item,index)=><p key={`${index}-${item}`}><strong>{index + 1}</strong><span>{item}</span></p>)}</div></div>}
                  {noteGroups.map((group, groupIndex) => <div className="print-reference-block" key={group.title}><h3>5.{groupIndex + 3} {group.title}</h3><p className="print-reference-subtitle">{group.subtitle}</p><div className="print-reference-notes">{group.notes.map((note, index) => <article key={note}><strong>{String(index + 1).padStart(2,"0")}</strong><p>{note}</p></article>)}</div></div>)}
                  {featuredResource.guide && <div className="print-reference-block"><h3>{englishSubject ? "5.6 Reusable answer method" : "৫.৬ পুনর্ব্যবহারযোগ্য উত্তরপদ্ধতি"}</h3><ol>{featuredResource.guide.method.map((step)=><li key={step}>{step}</li>)}</ol></div>}
                  {featuredResource.examToolkit && <div className="print-reference-block"><h3>{englishSubject ? "5.7 Misconception and scoring clinic" : "৫.৭ ভুল ধারণা ও নম্বর বাড়ানোর কৌশল"}</h3><div className="print-clinic-grid"><section><h4>{englishSubject ? "Avoid" : "যে ভুলগুলো এড়াবে"}</h4><ul>{featuredResource.examToolkit.mistakes.map((item)=><li key={item}>{item}</li>)}</ul></section><section><h4>{englishSubject ? "Do for marks" : "নম্বর পেতে যা করবে"}</h4><ul>{featuredResource.examToolkit.scoringMoves.map((item)=><li key={item}>{item}</li>)}</ul></section></div></div>}
                </section>
                <section><h2>{englishSubject ? "6. Worked solutions" : "৬. সমাধানসহ উদাহরণ"}</h2><h3>{featuredResource.worked.problem}</h3><ol>{featuredResource.worked.steps.map((step) => <li key={step}>{step}</li>)}</ol><p><strong>{englishSubject ? "Answer:" : "উত্তর:"}</strong> {featuredResource.worked.answer}</p>{featuredResource.extraWorked?.map((item) => <div className="print-worked" key={item.title}><h3>{item.title}</h3><p>{item.problem}</p><ol>{item.approach.map((step) => <li key={step}>{step}</li>)}</ol><p>{item.checkpoint}</p></div>)}</section>
                {featuredResource.examToolkit && <section><h2>{englishSubject ? "7. Board exam toolkit" : "৭. বোর্ড পরীক্ষা সহায়িকা"}</h2><div className="print-toolkit-grid"><div><h3>{englishSubject ? "Must know" : "যা অবশ্যই জানবে"}</h3><ul>{featuredResource.examToolkit.essentials.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>{englishSubject ? "Common mistakes" : "সাধারণ ভুল"}</h3><ul>{featuredResource.examToolkit.mistakes.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>{englishSubject ? "Scoring moves" : "নম্বর বাড়ানোর কৌশল"}</h3><ul>{featuredResource.examToolkit.scoringMoves.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>}
                {featuredResource.masteryPlan && <section><h2>{englishSubject ? "7-day chapter mastery plan" : "৭ দিনের অধ্যায় দক্ষতা পরিকল্পনা"}</h2>{featuredResource.masteryPlan.map((day) => <div className="print-worked" key={`plan-${day.day}`}><h3>{englishSubject ? `Day ${day.day}` : `দিন ${day.day}`} · {day.title} · {day.minutes} {englishSubject ? "minutes" : "মিনিট"}</h3><p>{day.focus}</p><ol>{day.tasks.map((task) => <li key={task}>{task}</li>)}</ol><p><strong>{englishSubject ? "Evidence:" : "দিনশেষের প্রমাণ:"}</strong> {day.output}</p></div>)}</section>}
                {featuredResource.examinerRubric && <section><h2>{englishSubject ? "Examiner command-word rubric" : "পরীক্ষকের নির্দেশক শব্দ ও নম্বর নির্দেশিকা"}</h2>{featuredResource.examinerRubric.map((row) => <div className="print-worked" key={`rubric-${row.command}`}><h3>{row.command} · {row.marks} {englishSubject ? "marks" : "নম্বর"}</h3><p><strong>{englishSubject ? "Must show:" : "যা অবশ্যই থাকবে:"}</strong> {row.mustShow}</p><p><strong>{englishSubject ? "Useful opening:" : "উত্তর শুরুর ভাষা:"}</strong> {row.sentenceStart}</p><p><strong>{englishSubject ? "Marks are lost when:" : "যে ভুলে নম্বর কাটে:"}</strong> {row.losesMarks}</p></div>)}</section>}
                <section><h2>{englishSubject ? "8. CQ answer framework" : "৮. সৃজনশীল উত্তর কাঠামো"}</h2><p>{featuredResource.cq.stimulus}</p><ol>{featuredResource.cq.framework.map((step) => <li key={step}>{step}</li>)}</ol></section>
                <section className="print-question-bank"><h2>{englishSubject ? "9. Important board & college-standard practice" : "৯. গুরুত্বপূর্ণ বোর্ড ও কলেজ-স্ট্যান্ডার্ড অনুশীলন"}</h2><p className="print-section-intro">{englishSubject ? "30 carefully selected paper-specific reading, grammar and writing tasks. HSC English does not use the CQ/MCQ structure of group subjects." : "৩০টি বাছাইকৃত নিজস্ব বোর্ড-প্যাটার্ন প্রশ্ন: ১৫টি MCQ, ৮টি সৃজনশীল এবং ৭টি লিখিত। প্রতিটি প্রশ্নের ধরন আলাদাভাবে নম্বরায়িত।"}</p>{printQuestionGroups.map((group) => <section className="print-question-group" key={`questions-${group.type}`}><h3>{group.type === "MCQ" ? (englishSubject ? "A. MCQ" : "ক. বহুনির্বাচনি প্রশ্ন") : group.type === "CQ" ? (englishSubject ? "B. Creative questions" : "খ. সৃজনশীল প্রশ্ন") : (englishSubject ? "Paper-specific tasks" : "গ. লিখিত প্রশ্ন")}</h3>{group.questions.map((question, questionIndex) => <article className="print-question" key={`${question.type}-${questionIndex}`}><div className="print-question-label"><strong>{questionIndex + 1}. {question.type}</strong><span>{question.category} · {question.level} · {question.marks ?? (question.type === "MCQ" ? 1 : 10)} {englishSubject ? "marks" : "নম্বর"}</span></div><p style={{whiteSpace:"pre-line"}}>{englishSubject ? question.prompt : (question.promptBn ?? question.prompt)}</p>{question.optionsBn && <div className="print-options">{question.optionsBn.map((option, optionIndex) => <p key={option}><strong>{(englishSubject ? ["A","B","C","D"] : ["ক","খ","গ","ঘ"])[optionIndex]}.</strong><span>{option}</span></p>)}</div>}</article>)}</section>)}</section>
                <section className="print-answer-section"><h2>{englishSubject ? "10. Answer key, model answers & marking guide" : "১০. উত্তর, মডেল উত্তর ও মূল্যায়ন নির্দেশিকা"}</h2>{printQuestionGroups.map((group) => <section className="print-answer-group" key={`answers-${group.type}`}><h3>{group.type === "MCQ" ? (englishSubject ? "A. Explained MCQ answers" : "ক. ব্যাখ্যাসহ MCQ উত্তর") : group.type === "CQ" ? (englishSubject ? "B. CQ model answers" : "খ. সৃজনশীল মডেল উত্তর") : (englishSubject ? "C. Written answer guides" : "গ. লিখিত উত্তর নির্দেশিকা")}</h3>{group.questions.map((question, questionIndex) => <article className="print-answer" key={`answer-${question.type}-${questionIndex}`}><h4>{questionIndex + 1}. {question.type}</h4><p className="print-answer-question" style={{whiteSpace:"pre-line"}}><strong>{englishSubject ? "Question:" : "প্রশ্ন:"}</strong> {englishSubject ? question.prompt : (question.promptBn ?? question.prompt)}</p>{question.optionsBn && <div className="print-answer-options">{question.optionsBn.map((option, optionIndex) => <p className={optionIndex === question.correctIndex ? "correct" : ""} key={option}><strong>{(englishSubject ? ["A","B","C","D"] : ["ক","খ","গ","ঘ"])[optionIndex]}.</strong><span>{option}</span></p>)}</div>}{question.optionsBn && question.correctIndex !== undefined && <p className="print-mcq-key"><strong>{englishSubject ? "Correct answer:" : "সঠিক উত্তর:"}</strong> {(englishSubject ? ["A","B","C","D"] : ["ক","খ","গ","ঘ"])[question.correctIndex]}. {question.optionsBn[question.correctIndex]}</p>}<p><strong>{question.type === "MCQ" ? (englishSubject ? "Why it is correct:" : "কেন সঠিক:") : (englishSubject ? "Answer guide:" : "উত্তর নির্দেশিকা:")}</strong> {englishSubject ? question.answerGuide : (question.answerGuideBn ?? question.answerGuide)}</p>{(englishSubject ? question.markingPoints : question.markingPointsBn) && <ul>{(englishSubject ? question.markingPoints : question.markingPointsBn)?.map((point) => <li key={point}>{point}</li>)}</ul>}{(englishSubject ? question.modelAnswer : question.modelAnswerBn) && <div className="print-model-answer" style={{whiteSpace:"pre-line"}}><strong>{englishSubject ? "Model answer:" : "মডেল উত্তর:"}</strong><ModelAnswerBreakdown text={(englishSubject ? question.modelAnswer : question.modelAnswerBn)!} bangla={!englishSubject} cq={question.type === "CQ"}/></div>}</article>)}</section>)}</section>
                <footer>© 2026 HSC2Plus. All rights reserved. Personal educational use only.</footer>
              </article>}
              <div className="outcome-grid">
                <div>
                  <span className="mini-heading">
                    <Target size={15} /> {englishSubject ? "LEARNING OUTCOMES" : "তুমি যা শিখবে"}
                  </span>
                  <ul>
                    {(englishSubject ? (featured.outcomes ?? []) : [
                      "অধ্যায়ের গুরুত্বপূর্ণ ধারণা ও পরিভাষা নির্ভুলভাবে ব্যাখ্যা করতে পারবে।",
                      "বাস্তব উদাহরণ ও উদ্দীপকে প্রয়োজনীয় নীতি প্রয়োগ করতে পারবে।",
                      "বোর্ড-প্যাটার্ন প্রশ্নে মান অনুযায়ী গুছিয়ে উত্তর লিখতে পারবে।",
                    ]).map((outcome) => <li key={outcome}>{outcome}</li>)}
                  </ul>
                </div>
                <div>
                  <span className="mini-heading">
                    <FileText size={15} /> {englishSubject ? "LEARNING MATERIALS" : "শেখার উপকরণ"}
                  </span>
                  <div className="exam-plan">
                    <span>
                      <strong>{featuredResource?.lessonDetails?.length ?? featured.lessons}</strong>
                      <small>{englishSubject ? "Lessons" : "পাঠ"}</small>
                    </span>
                    <span>
                      <strong>{featuredResource?.notes.length ?? 0}</strong>
                      <small>{englishSubject ? "Note sections" : "নোট অংশ"}</small>
                    </span>
                    <span>
                      <strong>{1 + (featuredResource?.extraWorked?.length ?? 0)}</strong>
                      <small>{englishSubject ? "Worked tasks" : "সমাধান"}</small>
                    </span>
                  </div>
                </div>
              </div>
              <nav className="study-journey" aria-label={englishSubject ? "Detailed chapter study" : "বিস্তারিত অধ্যয়ন ধাপ"}>
                {([
                  ["lesson", englishSubject ? "Lessons" : "বিস্তারিত পাঠ", BookOpen],
                  ["notes", englishSubject ? "Complete Notes" : "পূর্ণাঙ্গ নোট", FileText],
                  ["worked", englishSubject ? "Worked Solutions" : "সমাধানসহ উদাহরণ", Brain],
                  ["toolkit", englishSubject ? "Chapter Toolkit" : "অধ্যায় সহায়িকা", Target],
                  ["session", englishSubject ? "Study Session" : "স্টাডি সেশন", Clock3],
                ] as const).map(([id, label, Icon], index) => (
                  <button key={id} className={studyMode === id ? "active" : ""} onClick={() => openStudyMode(id)}>
                    <span>{completedStudyModes.includes(id) ? <Check size={12}/> : index + 1}</span><Icon size={16}/><strong>{label}</strong>
                  </button>
                ))}
              </nav>
              <div className="study-progress-control">
                <div><span>{englishSubject ? "Learning stages completed" : "সম্পন্ন অধ্যয়ন ধাপ"}</span><div className="progress-track large"><i style={{width:`${(completedStudyCount / 5) * 100}%`}}/></div><strong>{completedStudyCount}/5</strong></div>
                <button className={completedStudyModes.includes(studyMode) ? "complete" : ""} onClick={toggleStudyModeComplete}><CheckCircle2 size={16}/>{completedStudyModes.includes(studyMode) ? (englishSubject ? "Section completed" : "ধাপটি সম্পন্ন") : (englishSubject ? "Mark section complete" : "এই ধাপ সম্পন্ন করো")}</button>
              </div>
              <section className="chapter-mastery-overview" aria-label={englishSubject ? "Chapter mastery overview" : "অধ্যায় দক্ষতা সারাংশ"}>
                <div className="chapter-mastery-score"><Ring value={chapterMasteryPercent} size={74}/><div><span className="eyebrow">{englishSubject ? "CHAPTER MASTERY" : "অধ্যায় দক্ষতা"}</span><strong>{englishSubject ? "Your real study progress" : "তোমার প্রকৃত শেখার অগ্রগতি"}</strong><p>{englishSubject ? "Calculated from lesson learning checks and the five chapter study stages." : "পাঠের শেখার যাচাই ও পাঁচটি অধ্যয়ন ধাপ থেকে এই অগ্রগতি হিসাব করা হয়েছে।"}</p></div></div>
                <div className="chapter-mastery-metrics">
                  <span><strong>{masteredLessonCount}/{featured.lessonPlan?.length ?? 0}</strong><small>{englishSubject ? "lessons mastered" : "পাঠ আয়ত্ত"}</small></span>
                  <span><strong>{completedLessonChecks}/{totalLessonChecks}</strong><small>{englishSubject ? "learning checks" : "শেখার যাচাই"}</small></span>
                  <span><strong>{completedStudyCount}/5</strong><small>{englishSubject ? "study stages" : "অধ্যয়ন ধাপ"}</small></span>
                </div>
                <button onClick={continueChapterMastery}><span><small>{englishSubject ? "RECOMMENDED NEXT" : "পরবর্তী পরামর্শ"}</small><strong>{nextMasteryLabel}</strong></span><ArrowRight size={17}/></button>
              </section>
              {studyMode === "lesson" && <div className="chapter-workspace">
                <aside className="lesson-plan" aria-label={englishSubject ? "Chapter lessons" : "অধ্যায়ের পাঠসমূহ"}>
                  <div className="lesson-plan-label">{englishSubject ? "LESSONS" : "পাঠসমূহ"}</div>
                  {featured.lessonPlan?.map((lesson, index) => (
                    <button
                      className={`lesson-line ${activeLesson === index ? "active" : ""}`}
                      key={lesson.title}
                      onClick={() => setActiveLesson(index)}
                    >
                      <span>{masteryActions.every((action) => lessonMastery[String(index)]?.includes(action)) ? <Check size={13}/> : index + 1}</span>
                      <div>
                        <strong>{lessonLabel(lesson)}</strong>
                        <small>{englishSubject ? lesson.format : lesson.format === "Concept" ? "ধারণা" : lesson.format === "Worked example" ? "সমাধানসহ উদাহরণ" : "অনুশীলন"}</small>
                      </div>
                      <small>{lesson.minutes} {englishSubject ? "min" : "মিনিট"}</small>
                    </button>
                  ))}
                </aside>
                {featured.lessonPlan?.[activeLesson] && (
                  <article className="lesson-reader">
                  <div className="lesson-reader-head">
                    <div>
                      <span className="eyebrow">{englishSubject ? `LESSON ${activeLesson + 1} OF ${featured.lessonPlan.length}` : `${featured.lessonPlan.length}টি পাঠের মধ্যে পাঠ ${activeLesson + 1}`}</span>
                      <h3>{lessonLabel(featured.lessonPlan[activeLesson])}</h3>
                    </div>
                    <span>{featured.lessonPlan[activeLesson].minutes} {englishSubject ? "min" : "মিনিট"}</span>
                  </div>
                  <div className="lesson-flow-map" aria-label={englishSubject ? "Lesson workflow" : "পাঠের ধাপসমূহ"}>
                    {[
                      [englishSubject ? "Understand" : "ধারণা বোঝো", englishSubject ? "Core idea" : "মূল ধারণা"],
                      [englishSubject ? "Visualise" : "চিত্রে দেখো", englishSubject ? "See the full flow" : "সম্পূর্ণ প্রবাহ"],
                      [englishSubject ? "Apply" : "প্রয়োগ করো", englishSubject ? "Method and example" : "পদ্ধতি ও উদাহরণ"],
                      [englishSubject ? "Check" : "নিজেকে যাচাই", englishSubject ? "Recall and mastery" : "মনে করা ও আয়ত্ত"],
                    ].map(([title, detail], index) => <div key={title}><span>{index + 1}</span><strong>{title}</strong><small>{detail}</small></div>)}
                  </div>
                  <section className="lesson-stage lesson-stage-understand">
                    <header><span>01</span><div><strong>{englishSubject ? "Understand the idea" : "মূল ধারণাটি বোঝো"}</strong><small>{englishSubject ? "Start here before memorising any rule" : "কোনো নিয়ম মুখস্থ করার আগে এখান থেকে শুরু করো"}</small></div></header>
                    <p>{activeLessonDetail?.concept ?? featuredResource?.guide?.concept ?? "প্রথমে মূল ধারণাটি বোঝো, তারপর উদাহরণে প্রয়োগ করে নিজের ভাষায় ব্যাখ্যা করো।"}</p>
                    <div className="lesson-memory-cue"><Brain size={16}/><div><strong>{englishSubject ? "MEMORY ROUTE" : "মনে রাখার ধাপ"}</strong><span>{lessonMemoryCue}</span></div></div>
                  </section>
                  <section className="lesson-stage lesson-stage-visual">
                    <header><span>02</span><div><strong>{englishSubject ? "See the complete flow" : "সম্পূর্ণ প্রবাহটি চিত্রে দেখো"}</strong><small>{englishSubject ? "Connect this lesson to the whole chapter" : "এই পাঠটি পুরো অধ্যায়ের কোথায় আছে তা মিলিয়ে নাও"}</small></div></header>
                    <LessonVisual
                      subjectId={selected.id}
                      english={englishSubject}
                      chapter={chapterLabel(featured)}
                      lesson={lessonLabel(featured.lessonPlan[activeLesson])}
                      concept={activeLessonDetail?.concept ?? featuredResource?.guide?.concept}
                      lessonSteps={activeLessonDetail?.steps ?? featuredResource?.guide?.method}
                    />
                  </section>
                  <section className="lesson-stage lesson-stage-method">
                    <header><span>03</span><div><strong>{englishSubject ? "Follow the method" : "ধাপে ধাপে পদ্ধতিটি অনুসরণ করো"}</strong><small>{englishSubject ? "Know what to do and why each step matters" : "কী করতে হবে এবং প্রতিটি ধাপ কেন প্রয়োজন—দুটিই বোঝো"}</small></div></header>
                    <ol>
                      {(activeLessonDetail?.steps ?? featuredResource?.guide?.method ?? [
                        "প্রাসঙ্গিক সংজ্ঞা, নিয়ম বা সম্পর্কটি মনে করো।",
                        "উদাহরণের প্রতিটি ধাপ কেন প্রয়োজন তা বোঝো।",
                        "সমাধান না দেখে একই পদ্ধতিতে নিজে চেষ্টা করো।",
                        "পরিভাষা, হিসাব, প্রমাণ ও উপসংহার যাচাই করো।",
                      ]).map((step) => <li key={step}>{step}</li>)}
                    </ol>
                  </section>
                  <div className="lesson-stage-divider"><span>04</span><div><strong>{englishSubject ? "Apply, recall and verify" : "প্রয়োগ, মনে করা ও যাচাই"}</strong><small>{englishSubject ? "Finish the lesson through active work" : "সক্রিয় অনুশীলনের মাধ্যমে পাঠটি সম্পন্ন করো"}</small></div></div>
                  {(activeLessonDetail?.recallQuestions || activeLessonDetail?.commonTrap || activeLessonDetail?.stretchPrompt) && <div className="lesson-depth-grid">
                    {activeLessonDetail?.recallQuestions && <section><span>01 · {englishSubject ? "ACTIVE RECALL" : "না দেখে মনে করো"}</span><h4>{englishSubject ? "Can you retrieve the lesson?" : "পাঠটি সত্যিই মনে আছে?"}</h4><ul>{activeLessonDetail.recallQuestions.map((question) => <li key={question}>{question}</li>)}</ul></section>}
                    {activeLessonDetail?.commonTrap && <section className="trap"><span>02 · {englishSubject ? "COMMON TRAP" : "সাধারণ ভুল"}</span><h4>{englishSubject ? "Avoid the tempting mistake" : "যে ভুলটি এড়িয়ে চলবে"}</h4><p>{activeLessonDetail.commonTrap}</p></section>}
                    {activeLessonDetail?.stretchPrompt && <section><span>03 · {englishSubject ? "STRETCH TASK" : "চ্যালেঞ্জ অনুশীলন"}</span><h4>{englishSubject ? "Transfer the method" : "পদ্ধতিটি নতুনভাবে প্রয়োগ করো"}</h4><p>{activeLessonDetail.stretchPrompt}</p></section>}
                  </div>}
                  {(activeLessonDetail?.application ?? featuredResource?.guide?.application) && <div className="lesson-application"><strong>{englishSubject ? "APPLY IT" : "এখন প্রয়োগ করো"}</strong><p>{activeLessonDetail?.application ?? featuredResource?.guide?.application}</p></div>}
                  {activeLessonDetail?.workedSnapshot && <div className="lesson-worked-snapshot"><strong>{englishSubject ? "WORKED SNAPSHOT" : "সমাধানের নমুনা"}</strong><p>{activeLessonDetail.workedSnapshot}</p></div>}
                  {activeLessonDetail?.practicePrompt && <div className="lesson-practice-loop"><div><strong>{englishSubject ? "TRY IT YOURSELF" : "এবার নিজে করো"}</strong><p>{activeLessonDetail.practicePrompt}</p></div>{activeLessonDetail.answerCheck && <details><summary>{englishSubject ? "Check the expected answer" : "প্রত্যাশিত উত্তর মিলিয়ে দেখো"}</summary><p>{activeLessonDetail.answerCheck}</p></details>}</div>}
                  {activeLessonDetail?.checkpoint && <div className="lesson-checkpoint"><CheckCircle2 size={17}/><div><strong>{englishSubject ? "BEFORE YOU CONTINUE" : "পরের পাঠের আগে"}</strong><p>{activeLessonDetail.checkpoint}</p></div></div>}
                  <section className="lesson-mastery-panel">
                    <div><span className="eyebrow">{englishSubject ? "LESSON MASTERY" : "পাঠ আয়ত্ত"}</span><strong>{englishSubject ? `${masteredLessonCount}/${featured.lessonPlan.length} lessons mastered` : `${featured.lessonPlan.length}টি পাঠের মধ্যে ${masteredLessonCount}টি আয়ত্ত`}</strong><p>{englishSubject ? "Complete all three checks for this lesson. Your progress is saved on this device." : "বোঝা, নিজে চেষ্টা ও উত্তর যাচাই—তিনটি ধাপ শেষ করলে পাঠটি আয়ত্ত হিসেবে ধরা হবে।"}</p></div>
                    <div className="lesson-mastery-actions">
                      {([
                        ["understand", englishSubject ? "I can explain it" : "ধারণাটি বুঝেছি"],
                        ["attempt", englishSubject ? "I attempted the task" : "নিজে চেষ্টা করেছি"],
                        ["verify", englishSubject ? "I checked the answer" : "উত্তর যাচাই করেছি"],
                      ] as const).map(([action, label]) => <button key={action} className={lessonMastery[String(activeLesson)]?.includes(action) ? "complete" : ""} onClick={() => toggleLessonMastery(action)}><span>{lessonMastery[String(activeLesson)]?.includes(action) ? <Check size={13}/> : masteryActions.indexOf(action) + 1}</span>{label}</button>)}
                    </div>
                  </section>
                  <div className="lesson-reader-nav">
                    <button
                      disabled={activeLesson === 0}
                      onClick={() => setActiveLesson((value) => Math.max(0, value - 1))}
                    >
                      {englishSubject ? "Previous lesson" : "আগের পাঠ"}
                    </button>
                    <button
                      disabled={activeLesson === featured.lessonPlan.length - 1}
                      onClick={() => setActiveLesson((value) => Math.min(featured.lessonPlan!.length - 1, value + 1))}
                    >
                      {englishSubject ? "Next lesson" : "পরের পাঠ"} <ArrowRight size={15} />
                    </button>
                  </div>
                  </article>
                )}
              </div>}
              {studyMode === "notes" && featuredResource && (
                <section className="subject-deep-panel">
                  <div className="deep-panel-head"><div><span className="eyebrow">{englishSubject ? "COMPLETE CHAPTER NOTES" : "পূর্ণাঙ্গ অধ্যায় নোট"}</span><h3>{englishSubject ? "Learn deeply, revise quickly, recall confidently" : "বিস্তারিত শেখা, দ্রুত রিভিশন ও শেষ মুহূর্তের ঝালাই"}</h3><p>{englishSubject ? "Choose the reading depth you need now. The complete PDF keeps every layer for offline study." : "এখন যতটুকু গভীরতা প্রয়োজন, সেই ধরনটি বেছে নাও। অফলাইন অধ্যয়নের PDF-এ তিন স্তরের সব উপকরণ থাকবে।"}</p></div><span>{noteReadLessons.length}/{featuredResource.lessonDetails?.length ?? 0} {englishSubject ? "lessons revised" : "টি পাঠ রিভিশন"}</span></div>
                  <div className="note-view-switch" role="tablist" aria-label={englishSubject ? "Note reading mode" : "নোট পড়ার ধরন"}>
                    {([['detailed', englishSubject ? 'Detailed Notes' : 'বিস্তারিত নোট', englishSubject ? 'Full lessons and explanations' : 'পূর্ণ পাঠ, ব্যাখ্যা ও প্রয়োগ'],['revision', englishSubject ? 'Revision' : 'দ্রুত রিভিশন', englishSubject ? 'Key rules, methods and mistakes' : 'মূল নিয়ম, পদ্ধতি ও সাধারণ ভুল'],['glimpse', englishSubject ? 'Last-minute Revision' : 'শেষ মুহূর্তের ঝালাই', englishSubject ? 'Five-minute review before the exam' : 'পরীক্ষার আগে ৫ মিনিটে জরুরি বিষয়']] as const).map(([mode,label,help]) => <button key={mode} role="tab" aria-selected={noteView === mode} className={noteView === mode ? "active" : ""} onClick={() => setNoteView(mode)}><strong>{label}</strong><span>{help}</span></button>)}
                  </div>
                  <div className="note-reading-progress"><div><span style={{width:`${Math.round((noteReadLessons.length / Math.max(1, featuredResource.lessonDetails?.length ?? 1)) * 100)}%`}}/></div><small>{englishSubject ? "Mark each detailed lesson after you can explain it without looking." : "কোনো পাঠ না দেখে ব্যাখ্যা করতে পারলে সেটি রিভিশন হয়েছে হিসেবে চিহ্নিত করো।"}</small></div>
                  {noteView === "detailed" && <div className="note-mode-content">
                    <section className="note-access-choice">
                      <div><span>{englishSubject ? "FULL CHAPTER NOTE" : "পূর্ণ অধ্যায় নোট"}</span><h4>{englishSubject ? "Read online only when you need the complete explanation" : "সম্পূর্ণ ব্যাখ্যা প্রয়োজন হলে অনলাইনে পড়ো"}</h4><p>{englishSubject ? "For offline study, save the same complete chapter as a clean PDF. The long note stays folded to keep this page simple." : "অফলাইনে পড়ার জন্য একই পূর্ণাঙ্গ অধ্যায় পরিষ্কার PDF হিসেবে সংরক্ষণ করো। পেজটি সহজ রাখতে দীর্ঘ নোট শুরুতে বন্ধ থাকবে।"}</p></div>
                      <button type="button" onClick={printChapterBook}><Download size={17}/><span><strong>{englishSubject ? "Save complete PDF" : "পূর্ণাঙ্গ PDF সংরক্ষণ"}</strong><small>{englishSubject ? "Lessons, revision and practice" : "পাঠ, রিভিশন ও অনুশীলনসহ"}</small></span></button>
                    </section>
                    <details className="full-note-disclosure">
                      <summary><span><BookOpen size={18}/><span><strong>{englishSubject ? "Open full notes online" : "পূর্ণাঙ্গ নোট অনলাইনে পড়ো"}</strong><small>{englishSubject ? `${featuredResource.lessonDetails?.length ?? 0} lessons · opens on this page` : `${featuredResource.lessonDetails?.length ?? 0}টি পাঠ · এই পেজেই খুলবে`}</small></span></span><ChevronRight size={17}/></summary>
                      <div className="full-note-body">
                    <section className="note-coverage-strip" aria-label={englishSubject ? "Chapter note coverage" : "অধ্যায় নোটে যা আছে"}>
                      <header><span>{englishSubject ? "NOTE COVERAGE" : "এই নোটে যা পাবে"}</span><strong>{englishSubject ? "A complete learn-to-exam route" : "শেখা থেকে পরীক্ষা—সম্পূর্ণ প্রস্তুতি"}</strong></header>
                      <div>
                        <span><strong>{featuredResource.lessonDetails?.length ?? 0}</strong><small>{englishSubject ? "full lessons" : "পূর্ণাঙ্গ পাঠ"}</small></span>
                        <span><strong>{featuredResource.guide?.terminology.length ?? 0}</strong><small>{englishSubject ? "key terms" : "মূল পরিভাষা"}</small></span>
                        <span><strong>{1 + (featuredResource.extraWorked?.length ?? 0)}</strong><small>{englishSubject ? "worked examples" : "সমাধানসহ উদাহরণ"}</small></span>
                        <span><strong>{lessonExamConnections.length}</strong><small>{englishSubject ? "lesson exam links" : "পাঠভিত্তিক পরীক্ষার প্রশ্ন"}</small></span>
                      </div>
                    </section>
                    <section className="note-reading-route" aria-label={englishSubject ? "Detailed note reading route" : "বিস্তারিত নোট পড়ার পথ"}>
                      <header><div><span>{englishSubject ? "READING ROUTE" : "নোট পড়ার সহজ পথ"}</span><strong>{englishSubject ? "Understand first, retrieve next, then write" : "আগে বোঝো, তারপর মনে করো, শেষে লিখে যাচাই করো"}</strong></div><small>{englishSubject ? `${featuredResource.lessonDetails?.length ?? 0} lessons · complete chapter` : `${featuredResource.lessonDetails?.length ?? 0}টি পাঠ · পূর্ণ অধ্যায়`}</small></header>
                      <div>{[
                        [englishSubject ? "Preview" : "আগে দেখে নাও", englishSubject ? "Read the chapter map and visual guide before entering the first lesson." : "প্রথম পাঠে যাওয়ার আগে অধ্যায়ের মানচিত্র ও চিত্রটি দেখে নাও।"],
                        [englishSubject ? "Learn" : "বুঝে শেখো", englishSubject ? "Read the explanation, method and application—not isolated bullet points." : "শুধু পয়েন্ট নয়—ব্যাখ্যা, পদ্ধতি ও প্রয়োগ একসঙ্গে পড়ো।"],
                        [englishSubject ? "Retrieve" : "না দেখে মনে করো", englishSubject ? "Close the note and answer the active-recall prompts in your own words." : "নোট বন্ধ করে Active Recall প্রশ্নের উত্তর নিজের ভাষায় বলো।"],
                        [englishSubject ? "Prove" : "লিখে প্রমাণ করো", englishSubject ? "Attempt the task, check the expected answer and mark the lesson revised." : "নিজে প্রশ্ন সমাধান করে উত্তর মিলিয়ে তারপর পাঠটি Revised চিহ্নিত করো।"],
                      ].map(([title,body],index)=><article key={title}><span>{String(index+1).padStart(2,"0")}</span><div><strong>{title}</strong><p>{body}</p></div></article>)}</div>
                    </section>
                    <nav className="note-chapter-map" aria-label={englishSubject ? "Chapter note map" : "অধ্যায় নোটের মানচিত্র"}>
                      <header><div><span>{englishSubject ? "CHAPTER MAP" : "অধ্যায়ের মানচিত্র"}</span><strong>{englishSubject ? "Follow the lessons in order" : "ক্রম ধরে পাঠগুলো সম্পন্ন করো"}</strong></div><em>{featuredResource.lessonDetails?.length ?? 0} {englishSubject ? "lessons" : "টি পাঠ"}</em></header>
                      <div>{featuredResource.lessonDetails?.map((lesson, index) => <a key={lesson.title} href={`#note-lesson-${index + 1}`}><span>{String(index + 1).padStart(2,"0")}</span>{lesson.title}</a>)}</div>
                    </nav>
                    {featuredResource.guide && <article className="deep-note-foundation"><strong>{englishSubject ? "Chapter foundation" : "অধ্যায়ের ভিত্তি"}</strong><h4>{featuredResource.guide.concept}</h4><p>{featuredResource.guide.application}</p></article>}
                    <div className="deep-note-grid">{featuredResource.lessonDetails?.map((lesson, index) => <article id={`note-lesson-${index + 1}`} key={lesson.title}>
                      <header className="note-lesson-head"><div><span>{englishSubject ? `LESSON ${String(index + 1).padStart(2,"0")}` : `পাঠ ${String(index + 1).padStart(2,"0")}`}</span><h4>{lesson.title}</h4></div><button type="button" className={noteReadLessons.includes(index) ? "complete" : ""} onClick={() => toggleNoteLesson(index)}>{noteReadLessons.includes(index) ? <Check size={14}/> : null}{noteReadLessons.includes(index) ? (englishSubject ? "Revised" : "রিভিশন হয়েছে") : (englishSubject ? "Mark revised" : "রিভিশন চিহ্নিত করো")}</button></header>
                      <section className="note-concept"><strong>{englishSubject ? "Understand the idea" : "ধারণাটি বোঝো"}</strong><p>{lesson.concept}</p></section>
                      <section className="note-deep-explanation"><header><strong>{englishSubject ? "Full teaching explanation" : "পূর্ণাঙ্গ ব্যাখ্যা"}</strong><span>{englishSubject ? "Read slowly" : "ধীরে পড়ে বোঝো"}</span></header><ul>{detailedLessonNotes[index]?.map((point) => <li key={point}>{point}</li>)}</ul><p><b>{englishSubject ? "Why it matters:" : "কেন গুরুত্বপূর্ণ:"}</b> {lesson.application}</p></section>
                      <section className="note-study-route"><h5>{englishSubject ? "Study route" : "যেভাবে শিখবে"}</h5><ol>{lesson.steps.map((step) => <li key={step}>{step}</li>)}</ol></section>
                      <div className="note-application"><strong>{englishSubject ? "Apply the idea:" : "ধারণার প্রয়োগ:"}</strong> {lesson.application}</div>
                      {lesson.commonTrap && <aside><strong>{englishSubject ? "Common trap:" : "সাধারণ ভুল:"}</strong> {lesson.commonTrap}</aside>}
                      <div className="note-learning-lab">
                        {lesson.recallQuestions && <section><strong><Brain size={15}/>{englishSubject ? "Active recall" : "না দেখে মনে করো"}</strong><ol>{lesson.recallQuestions.map((question) => <li key={question}>{question}</li>)}</ol></section>}
                        <section><strong><PenLine size={15}/>{englishSubject ? "Worked snapshot" : "সমাধানের নমুনা"}</strong><p>{lesson.workedSnapshot}</p></section>
                        <section><strong><Target size={15}/>{englishSubject ? "Try independently" : "নিজে চেষ্টা করো"}</strong><p>{lesson.practicePrompt}</p>{lesson.stretchPrompt && <p className="note-stretch"><b>{englishSubject ? "Challenge:" : "চ্যালেঞ্জ:"}</b> {lesson.stretchPrompt}</p>}</section>
                      </div>
                      {lesson.answerCheck && <details className="note-answer-check"><summary>{englishSubject ? "Check the expected answer" : "প্রত্যাশিত উত্তর মিলিয়ে দেখো"}<ChevronRight size={16}/></summary><p>{lesson.answerCheck}</p></details>}
                      {lessonExamConnections[index] && <section className="note-exam-connection"><header><div><span>{englishSubject ? "EXAM CONNECTION" : "পরীক্ষায় এই পাঠ"}</span><strong>{lessonExamConnections[index].type} · {lessonExamConnections[index].category}</strong></div><em>{lessonExamConnections[index].marks ?? 10} {englishSubject ? "marks" : "নম্বর"}</em></header><p>{englishSubject ? lessonExamConnections[index].prompt : (lessonExamConnections[index].promptBn ?? lessonExamConnections[index].prompt)}</p><details><summary>{englishSubject ? "Open the marking route" : "নম্বর পাওয়ার পথ দেখো"}<ChevronRight size={15}/></summary><div><p>{englishSubject ? lessonExamConnections[index].answerGuide : (lessonExamConnections[index].answerGuideBn ?? lessonExamConnections[index].answerGuide)}</p>{(englishSubject ? lessonExamConnections[index].markingPoints : lessonExamConnections[index].markingPointsBn)?.length ? <ul>{(englishSubject ? lessonExamConnections[index].markingPoints : lessonExamConnections[index].markingPointsBn)?.map((point)=><li key={point}>{point}</li>)}</ul> : null}</div></details></section>}
                    </article>)}</div>
                    <section className="note-readiness-gate"><header><div><span>{englishSubject ? "CHAPTER READINESS GATE" : "অধ্যায় প্রস্তুতি যাচাই"}</span><h4>{englishSubject ? "Finish only when you can do these without the notes" : "নোট না দেখে এগুলো পারলেই অধ্যায়টি প্রস্তুত"}</h4></div><strong>{noteSelfChecks.length}/{featuredResource.guide?.selfCheck.length ?? 0}</strong></header><div>{featuredResource.guide?.selfCheck.map((item,index)=><button type="button" className={noteSelfChecks.includes(index) ? "complete" : ""} onClick={()=>toggleNoteSelfCheck(index)} key={item}><span>{noteSelfChecks.includes(index) ? <Check size={15}/> : index + 1}</span><p>{item}</p></button>)}</div>{noteSelfChecks.length === (featuredResource.guide?.selfCheck.length ?? 0) && <p className="note-ready-message"><CheckCircle2 size={17}/>{englishSubject ? "Ready for a timed board-pattern question." : "এখন সময় ধরে একটি বোর্ড-প্যাটার্ন প্রশ্ন সমাধান করো।"}</p>}</section>
                      </div>
                    </details>
                  </div>}
                  {noteView === "revision" && <div className="revision-mode-content">
                    <section className="revision-route"><header><span>{englishSubject ? "REVISION ROUTE" : "রিভিশনের পথ"}</span><strong>{englishSubject ? "Recall → Connect → Write → Check" : "মনে করো → সম্পর্ক খুঁজে নাও → লেখো → যাচাই করো"}</strong></header><div>{[englishSubject ? "Recall the chapter without looking" : "নোট না দেখে মূল ধারণা মনে করো", englishSubject ? "Connect each rule to an application" : "প্রতিটি নিয়মের সঙ্গে প্রয়োগ মিলাও", englishSubject ? "Write one board-pattern answer" : "একটি বোর্ড-প্যাটার্ন উত্তর লেখো", englishSubject ? "Check structure and common errors" : "কাঠামো ও সাধারণ ভুল যাচাই করো"].map((step,index)=><span key={step}><b>{index+1}</b>{step}</span>)}</div></section>
                    {noteGroups.map((section, groupIndex) => <section key={section.title} className="revision-note-section"><header><span>0{groupIndex + 1}</span><div><h4>{section.title}</h4><p>{section.subtitle}</p></div></header><div className="deep-revision-list">{section.notes.map((note, index) => <p key={note}><span>{index + 1}</span>{note}</p>)}</div></section>)}
                    <section className="revision-active-recall"><header><div><span>ACTIVE RECALL</span><h4>{englishSubject ? "Answer before opening the notes" : "নোট না দেখে উত্তর দাও"}</h4><p>{englishSubject ? "If an answer takes longer than 45 seconds, return to that lesson." : "কোনো উত্তর মনে করতে ৪৫ সেকেন্ডের বেশি লাগলে সংশ্লিষ্ট পাঠে ফিরে যাও।"}</p></div><Brain size={24}/></header><ol>{revisionRecallDrill.map((question)=><li key={question}>{question}</li>)}</ol></section>
                    <section className="revision-exam-set"><header><div><span>HIGH-YIELD EXAM CHECK</span><h4>{englishSubject ? "Six questions worth writing today" : "আজ লিখে দেখার মতো ৬টি গুরুত্বপূর্ণ প্রশ্ন"}</h4><p>{englishSubject ? "Attempt each response first, then open the marking guide." : "প্রথমে নিজে উত্তর দাও, তারপর মূল্যায়ন নির্দেশিকা খোলো।"}</p></div><Target size={24}/></header><div>{revisionExamQuestions.map((question,index)=>{const prompt=englishSubject ? question.prompt : (question.promptBn ?? question.prompt); const guide=englishSubject ? question.answerGuide : (question.answerGuideBn ?? question.answerGuide); return <details key={`${question.type}-${prompt}`}><summary><span>{String(index+1).padStart(2,"0")}</span><div><strong>{prompt}</strong><small>{question.type} · {question.marks ?? (question.type === "MCQ" ? 1 : 10)} {englishSubject ? "marks" : "নম্বর"}</small></div><ChevronRight size={16}/></summary><section><strong>{englishSubject ? "Marking guide" : "মূল্যায়ন নির্দেশিকা"}</strong><p>{guide}</p>{(englishSubject ? question.markingPoints : question.markingPointsBn)?.length ? <ul>{(englishSubject ? question.markingPoints : question.markingPointsBn)?.map((point)=><li key={point}>{point}</li>)}</ul> : null}</section></details>})}</div></section>
                  </div>}
                  {noteView === "glimpse" && featuredResource.guide && <div className="last-minute-sheet">
                    <header><div><span>LAST-MINUTE REVISION · 5 MIN</span><h4>{englishSubject ? "Five things to review before the exam" : "পাঁচ মিনিটে জরুরি বিষয়গুলো ঝালিয়ে নাও"}</h4></div><Clock3 size={25}/></header>
                    <section className="glimpse-core"><strong>{englishSubject ? "One core idea" : "একটি মূল ধারণা"}</strong><p>{featuredResource.guide.concept}</p></section>
                    <div className="glimpse-grid"><section><strong>{englishSubject ? "Must recall" : "মনে রাখতেই হবে"}</strong><ul>{rapidRecall.map((item) => <li key={item}>{item}</li>)}</ul></section><section><strong>{englishSubject ? "Avoid these traps" : "এই ভুলগুলো এড়াও"}</strong><ul>{(featuredResource.examToolkit?.mistakes ?? featuredResource.guide.examChecklist).slice(0,5).map((item) => <li key={item}>{item}</li>)}</ul></section></div>
                    <section className="insider-strip" aria-label={englishSubject ? "Exam-room reminders" : "পরীক্ষার কক্ষের জরুরি স্মরণিকা"}>
                      <article><span>01</span><div><strong>{englishSubject ? "60-second recall" : "৬০ সেকেন্ডে মনে করো"}</strong><p>{rapidRecall.slice(0,3).join(" · ")}</p></div></article>
                      <article><span>02</span><div><strong>{englishSubject ? "Highest-yield move" : "সবচেয়ে গুরুত্বপূর্ণ প্রয়োগ"}</strong><p>{featuredResource.guide.application}</p></div></article>
                      <article><span>03</span><div><strong>{englishSubject ? "Before you write" : "লেখার আগে সতর্কতা"}</strong><p>{(featuredResource.examToolkit?.mistakes ?? featuredResource.guide.examChecklist)[0]}</p></div></article>
                    </section>
                    <section className="exam-night-plan"><header><span>{englishSubject ? "EXAM-NIGHT PLAN" : "পরীক্ষার আগের রাত"}</span><h4>{englishSubject ? "Review familiar topics; do not begin a new chapter" : "নতুন অধ্যায় নয়—যা পড়েছ, সেটিই শান্তভাবে ঝালিয়ে নাও"}</h4></header><div>{[
                      [englishSubject ? "First 10 min" : "প্রথম ১০ মিনিট", englishSubject ? "Recall definitions, terms and formulas without looking." : "না দেখে সংজ্ঞা, পরিভাষা ও সূত্রগুলো মনে করো।"],
                      [englishSubject ? "Next 15 min" : "পরের ১৫ মিনিট", englishSubject ? "Review the highest-yield answer structures and one worked example." : "সবচেয়ে গুরুত্বপূর্ণ উত্তর কাঠামো ও একটি সমাধান করা উদাহরণ দেখো।"],
                      [englishSubject ? "Next 15 min" : "পরের ১৫ মিনিট", englishSubject ? "Mentally outline three likely questions; do not write full answers." : "গুরুত্বপূর্ণ তিনটি প্রশ্নের উত্তর মনে মনে সাজাও; পূর্ণ উত্তর লিখতে যেও না।"],
                      [englishSubject ? "Final 5 min" : "শেষ ৫ মিনিট", englishSubject ? "Check common traps, presentation rules and the first task for the morning." : "সাধারণ ভুল, উপস্থাপনার নিয়ম ও সকালে প্রথমে কী দেখবে—তা ঠিক করো।"],
                    ].map(([time,task], index) => <article key={time}><span>{index + 1}</span><div><strong>{time}</strong><p>{task}</p></div></article>)}</div></section>
                    <section className="exam-night-high-yield"><div><strong>{englishSubject ? "Must-see structures" : "অবশ্যই দেখে যাবে"}</strong><ul>{featuredResource.guide.structures.slice(0,5).map((item) => <li key={item}>{item}</li>)}</ul></div><div><strong>{englishSubject ? "Three likely answer prompts" : "তিনটি গুরুত্বপূর্ণ উত্তর অনুশীলন"}</strong><ol>{revisionExamQuestions.slice(0,3).map((question) => <li key={question.prompt}>{englishSubject ? question.prompt : (question.promptBn ?? question.prompt)}</li>)}</ol></div></section>
                    <section className="glimpse-check"><strong>{englishSubject ? "Final answer check" : "উত্তর জমা দেওয়ার আগে"}</strong><div>{featuredResource.guide.examChecklist.slice(0,4).map((item) => <span key={item}><CheckCircle2 size={15}/>{item}</span>)}</div></section>
                  </div>}
                </section>
              )}
              {studyMode === "worked" && featuredResource && (
                <section className="subject-deep-panel">
                  <div className="deep-panel-head"><div><span className="eyebrow">WORKED SOLUTIONS</span><h3>{englishSubject ? "Learn the method, reasoning and exam presentation" : "সমাধান, যুক্তি ও পরীক্ষার উপস্থাপন—সব একসঙ্গে শেখো"}</h3><p>{englishSubject ? "Each example breaks the task into a reusable method, a fully ordered solution and a final verification." : "প্রতিটি উদাহরণে প্রশ্ন বিশ্লেষণ, ব্যবহারযোগ্য পদ্ধতি, ধাপে ধাপে সমাধান, কারণ ও চূড়ান্ত যাচাই আছে।"}</p></div><span>{1 + (featuredResource.extraWorked?.length ?? 0)} {englishSubject ? "teaching examples" : "টি শেখার উদাহরণ"}</span></div>
                  <section className="solution-method-map"><header><span>SOLUTION METHOD</span><strong>{englishSubject ? "Use the same four moves for every unfamiliar question" : "অপরিচিত প্রশ্নেও একই ৪ ধাপে সমাধান করো"}</strong></header><div>{[
                    [englishSubject ? "Decode" : "প্রশ্ন বিশ্লেষণ", englishSubject ? "Identify the task, given information and required output." : "কী দেওয়া আছে, কী চাওয়া হয়েছে এবং কত নম্বর—চিহ্নিত করো।"],
                    [englishSubject ? "Select" : "পদ্ধতি নির্বাচন", englishSubject ? "Choose the rule, formula, evidence or answer structure." : "প্রযোজ্য নিয়ম, সূত্র, প্রমাণ বা উত্তর কাঠামো ঠিক করো।"],
                    [englishSubject ? "Execute" : "ধাপে সমাধান", englishSubject ? "Show the reasoning in a clear, mark-worthy order." : "যুক্তি ও হিসাব নম্বর পাওয়ার মতো পরিষ্কার ক্রমে দেখাও।"],
                    [englishSubject ? "Verify" : "যাচাই ও উপস্থাপন", englishSubject ? "Check accuracy, units, evidence and the final conclusion." : "নির্ভুলতা, একক, প্রমাণ ও চূড়ান্ত সিদ্ধান্ত মিলিয়ে দেখো।"],
                  ].map(([title,body],stepIndex)=><article key={title}><span>{String(stepIndex+1).padStart(2,"0")}</span><div><strong>{title}</strong><p>{body}</p></div></article>)}</div></section>
                  <div className="worked-example-stack">{[{ title: englishSubject ? "Core worked model" : "মূল সমাধান মডেল", ...featuredResource.worked }, ...(featuredResource.extraWorked ?? []).map((item) => ({ title: item.title, problem: item.problem, steps: item.approach, answer: item.checkpoint }))].map((item, index) => <article className="deep-worked-card" key={`${item.problem}-${index}`}>
                    <header><div><span>{englishSubject ? `TEACHING EXAMPLE ${String(index + 1).padStart(2,"0")}` : `শেখার উদাহরণ ${String(index + 1).padStart(2,"0")}`}</span><h4>{item.title}</h4></div><em>{index === 0 ? (englishSubject ? "Foundation" : "ভিত্তিমূলক") : index < 4 ? (englishSubject ? "Board ready" : "বোর্ড প্রস্তুতি") : (englishSubject ? "Challenge" : "চ্যালেঞ্জ")}</em></header>
                    <section className="worked-question"><strong>{englishSubject ? "QUESTION & TARGET" : "প্রশ্ন ও লক্ষ্য"}</strong><p>{item.problem}</p></section>
                    <section className="worked-method"><strong>{englishSubject ? "METHOD TO REUSE" : "যে পদ্ধতি আবার ব্যবহার করবে"}</strong><p>{teachingNote.method}</p></section>
                    <section className="worked-steps"><strong>{englishSubject ? "STEP-BY-STEP SOLUTION" : "ধাপে ধাপে পূর্ণ সমাধান"}</strong><ol>{item.steps.map((step, stepIndex) => <li key={step}><span>{stepIndex + 1}</span><p>{step}</p></li>)}</ol></section>
                    <div className="worked-result"><CheckCircle2 size={18}/><p><strong>{englishSubject ? "Final answer & verification:" : "চূড়ান্ত উত্তর ও যাচাই:"}</strong> {item.answer}</p></div>
                    <footer><div><strong>{englishSubject ? "WHY THIS WORKS" : "পদ্ধতিটি কেন কাজ করে"}</strong><p>{teachingNote.why}</p></div><div><strong>{englishSubject ? "EXAM PRESENTATION" : "পরীক্ষায় যেভাবে লিখবে"}</strong><p>{teachingNote.exam}</p></div></footer>
                    {revisionExamQuestions[index % revisionExamQuestions.length] && (()=>{const transfer=revisionExamQuestions[index % revisionExamQuestions.length]; const prompt=englishSubject ? transfer.prompt : (transfer.promptBn ?? transfer.prompt); const guide=englishSubject ? transfer.answerGuide : (transfer.answerGuideBn ?? transfer.answerGuide); const points=englishSubject ? transfer.markingPoints : transfer.markingPointsBn; return <details className="worked-transfer-task"><summary><span><PenLine size={16}/></span><div><strong>{englishSubject ? "Now transfer the method" : "এবার একই পদ্ধতি নিজে প্রয়োগ করো"}</strong><small>{englishSubject ? "Attempt before opening the solution guide" : "সমাধান নির্দেশিকা খোলার আগে নিজে চেষ্টা করো"}</small></div><ChevronRight size={16}/></summary><section><h5>{prompt}</h5><div><strong>{englishSubject ? "Solution guide" : "সমাধান নির্দেশিকা"}</strong><p>{guide}</p>{points?.length ? <ul>{points.map((point)=><li key={point}>{point}</li>)}</ul> : null}</div></section></details>})()}
                  </article>)}</div>
                </section>
              )}
              {studyMode === "toolkit" && featuredResource?.guide && (
                <section className="subject-deep-panel chapter-learning-toolkit">
                  <div className="deep-panel-head"><div><span className="eyebrow">{englishSubject ? "CHAPTER TOOLKIT" : "অধ্যায় সহায়িকা"}</span><h3>{englishSubject ? "Everything to understand, remember and revise the chapter" : "অধ্যায় বুঝতে, মনে রাখতে ও পুনরালোচনা করতে যা প্রয়োজন"}</h3></div></div>
                  <div className="toolkit-objectives">
                    <span className="mini-heading"><Target size={16}/>{englishSubject ? "LEARNING OBJECTIVES" : "শিখনফল"}</span>
                    <ol>{(englishSubject ? (featured.outcomes ?? []) : ["মূল ধারণা ও পরিভাষা নিজের ভাষায় ব্যাখ্যা করা", "বাংলাদেশের বাস্তব পরিস্থিতিতে অধ্যায়ের নিয়ম প্রয়োগ করা", "সূত্র, প্রমাণ বা যুক্তি ব্যবহার করে নির্ভুল সিদ্ধান্তে পৌঁছানো", "নোট ছাড়া অধ্যায়ের পূর্ণ সারাংশ ও সমাধান পদ্ধতি পুনরুদ্ধার করা"]).map((item) => <li key={item}>{item}</li>)}</ol>
                  </div>
                  <div className="guide-grid">
                    <section><span className="mini-heading">{englishSubject ? "KEY TERMINOLOGY" : "গুরুত্বপূর্ণ পরিভাষা"}</span><div className="term-cloud">{featuredResource.guide.terminology.map((term) => <span key={term}>{term}</span>)}</div></section>
                    <section><span className="mini-heading">{englishSubject ? "FORMULAS & ANSWER STRUCTURES" : "সূত্র ও উত্তর কাঠামো"}</span><ul>{featuredResource.guide.structures.map((item) => <li key={item}>{item}</li>)}</ul></section>
                  </div>
                  <article className="toolkit-bangladesh-case"><strong>{englishSubject ? "BANGLADESH APPLICATION" : "বাংলাদেশভিত্তিক প্রয়োগ"}</strong><p>{featuredResource.guide.application}</p></article>
                  <section className="learning-pathway-section">
                    <div className="toolkit-heading"><span className="eyebrow">{englishSubject ? "LEARNING PATHWAYS" : "শেখার পথ"}</span><h3>{englishSubject ? "Choose the route that matches your preparation" : "প্রস্তুতির অবস্থা অনুযায়ী নিজের শেখার পথ বেছে নাও"}</h3><p>{englishSubject ? "Each route uses the same complete chapter materials in a focused order." : "একই পূর্ণাঙ্গ অধ্যায় উপকরণ—তবে লক্ষ্য অনুযায়ী সাজানো সহজ ক্রমে।"}</p></div>
                    <div className="learning-pathways">
                      <article><span>01 · FOUNDATION</span><h4>{englishSubject ? "Build the foundation" : "ভিত্তি শক্ত করো"}</h4><ol><li>{englishSubject ? "Learn the key terms" : "মূল পরিভাষা বোঝো"}</li><li>{englishSubject ? "Read the detailed lessons" : "বিস্তারিত পাঠ পড়ো"}</li><li>{englishSubject ? "Follow a worked example" : "সমাধান করা উদাহরণ দেখো"}</li><li>{englishSubject ? "Complete the self-check" : "নিজে যাচাই করো"}</li></ol></article>
                      <article className="board-path"><span>02 · BOARD READY</span><h4>{englishSubject ? "Become board-ready" : "বোর্ড-প্রস্তুত হও"}</h4><ol><li>{englishSubject ? "Revise the full notes" : "পূর্ণাঙ্গ নোট পুনরালোচনা করো"}</li><li>{englishSubject ? "Master the answer method" : "উত্তর লেখার পদ্ধতি আয়ত্ত করো"}</li><li>{englishSubject ? "Write a timed CQ in Practice Studio" : "Practice Studio-তে সময় ধরে CQ লেখো"}</li><li>{englishSubject ? "Check the marking guide" : "মূল্যায়ন নির্দেশিকা মিলিয়ে দেখো"}</li></ol></article>
                      <article><span>03 · CHALLENGE</span><h4>{englishSubject ? "Take the challenge path" : "চ্যালেঞ্জ পথে এগোও"}</h4><ol><li>{englishSubject ? "Solve unfamiliar cases" : "অপরিচিত পরিস্থিতি সমাধান করো"}</li><li>{englishSubject ? "Analyse evidence and errors" : "প্রমাণ ও ভুল বিশ্লেষণ করো"}</li><li>{englishSubject ? "Attempt college-standard questions" : "কলেজ-স্ট্যান্ডার্ড প্রশ্ন করো"}</li><li>{englishSubject ? "Finish with a model test" : "মডেল টেস্ট দিয়ে শেষ করো"}</li></ol></article>
                    </div>
                  </section>
                  {featuredResource.examToolkit && <section className="exam-toolkit"><div className="toolkit-heading"><span className="eyebrow">MASTERY SUPPORT</span><h3>{englishSubject ? "Essentials, common mistakes and stronger learning moves" : "প্রয়োজনীয় বিষয়, সাধারণ ভুল ও দক্ষতা বাড়ানোর কৌশল"}</h3></div><div className="toolkit-grid"><article><span>01</span><h4>{englishSubject ? "Essentials" : "যা অবশ্যই জানবে"}</h4><ul>{featuredResource.examToolkit.essentials.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span>02</span><h4>{englishSubject ? "Common mistakes" : "সাধারণ ভুল"}</h4><ul>{featuredResource.examToolkit.mistakes.map((item) => <li key={item}>{item}</li>)}</ul></article><article><span>03</span><h4>{englishSubject ? "Mastery moves" : "দক্ষতা বাড়ানোর কৌশল"}</h4><ul>{featuredResource.examToolkit.scoringMoves.map((item) => <li key={item}>{item}</li>)}</ul></article></div></section>}
                  {featuredResource.masteryPlan && <details className="toolkit-disclosure chapter-mastery-plan"><summary><span><CalendarDays size={18}/></span><div><strong>{englishSubject ? "7-day chapter mastery plan" : "৭ দিনের অধ্যায় দক্ষতা পরিকল্পনা"}</strong><small>{englishSubject ? "Daily tasks from diagnosis to chapter mock" : "প্রাথমিক যাচাই থেকে অধ্যায় মডেল টেস্ট"}</small></div><ChevronRight size={17}/></summary><div className="toolkit-disclosure-body"><div className="toolkit-heading"><span className="eyebrow">7-DAY CHAPTER MASTERY</span><h3>{englishSubject ? "A complete route from first check to board-ready performance" : "প্রাথমিক যাচাই থেকে বোর্ড-প্রস্তুতি—সম্পূর্ণ ৭ দিনের পথ"}</h3><p>{englishSubject ? "Use one day at a time; each day ends with a clear piece of evidence." : "প্রতিদিন একটি ধাপ শেষ করো; প্রতিটি দিনের শেষে নিজের কাজের দৃশ্যমান প্রমাণ রাখো।"}</p></div><div className="mastery-plan-grid">{featuredResource.masteryPlan.map((day) => <article key={day.day}><header><span>{englishSubject ? `DAY ${day.day}` : `দিন ${day.day}`}</span><em><Clock3 size={13}/>{day.minutes} {englishSubject ? "min" : "মিনিট"}</em></header><h4>{day.title}</h4><p>{day.focus}</p><ol>{day.tasks.map((task) => <li key={task}>{task}</li>)}</ol><footer><CheckCircle2 size={14}/><span><strong>{englishSubject ? "Evidence:" : "দিনশেষের প্রমাণ:"}</strong> {day.output}</span></footer></article>)}</div></div></details>}
                  {featuredResource.examinerRubric && <details className="toolkit-disclosure examiner-command-rubric"><summary><span><ListChecks size={18}/></span><div><strong>{englishSubject ? "Examiner command-word rubric" : "নির্দেশক শব্দ ও নম্বর নির্দেশিকা"}</strong><small>{englishSubject ? "Required evidence, answer openings and mark-losing mistakes" : "প্রয়োজনীয় প্রমাণ, উত্তর শুরুর ভাষা ও নম্বর কাটার কারণ"}</small></div><ChevronRight size={17}/></summary><div className="toolkit-disclosure-body"><div className="toolkit-heading"><span className="eyebrow">EXAMINER RUBRIC</span><h3>{englishSubject ? "What each command word requires—and what loses marks" : "নির্দেশক শব্দ অনুযায়ী কী লিখবে—কোথায় নম্বর কাটে"}</h3><p>{englishSubject ? "Match the response depth to the command before you begin writing." : "উত্তর শুরুর আগে নির্দেশক শব্দ দেখে প্রয়োজনীয় গভীরতা ঠিক করো।"}</p></div><div className="rubric-scroll"><table><thead><tr><th>{englishSubject ? "Command" : "নির্দেশক শব্দ"}</th><th>{englishSubject ? "Marks" : "নম্বর"}</th><th>{englishSubject ? "Must show" : "যা অবশ্যই থাকবে"}</th><th>{englishSubject ? "Useful opening" : "উত্তর শুরুর ভাষা"}</th><th>{englishSubject ? "Marks are lost when" : "যে ভুলে নম্বর কাটে"}</th></tr></thead><tbody>{featuredResource.examinerRubric.map((row) => <tr key={row.command}><th>{row.command}</th><td><strong>{row.marks}</strong></td><td>{row.mustShow}</td><td><em>{row.sentenceStart}</em></td><td>{row.losesMarks}</td></tr>)}</tbody></table></div></div></details>}
                  <div className="toolkit-self-check"><section><span className="mini-heading">{englishSubject ? "SELF-CHECK" : "নিজে যাচাই করো"}</span><ul>{featuredResource.guide.selfCheck.map((item) => <li key={item}>{item}</li>)}</ul></section><section><span className="mini-heading">{englishSubject ? "REVISION CHECKLIST" : "পুনরালোচনা চেকলিস্ট"}</span><ul>{featuredResource.guide.examChecklist.map((item) => <li key={item}>{item}</li>)}</ul></section></div>
                </section>
              )}
              {studyMode === "session" && featuredResource && sessionStages.length > 0 && (
                <section className="subject-deep-panel guided-study-session">
                  <div className="deep-panel-head"><div><span className="eyebrow">GUIDED STUDY SESSION</span><h3>{englishSubject ? "One focused session—from understanding to exam practice" : "একটি সেশনেই বোঝা থেকে পরীক্ষা অনুশীলন"}</h3></div><span>{studySessionMinutes} {englishSubject ? "minutes" : "মিনিট"}</span></div>
                  <div className="session-setup">
                    <fieldset><legend>{englishSubject ? "Session length" : "সেশনের সময়"}</legend>{([25,45,60] as const).map((minutes) => <button key={minutes} className={studySessionMinutes === minutes ? "active" : ""} onClick={() => { setStudySessionMinutes(minutes); setStudySessionStep(0); }}>{minutes} {englishSubject ? "min" : "মিনিট"}</button>)}</fieldset>
                    <fieldset><legend>{englishSubject ? "Preparation route" : "প্রস্তুতির স্তর"}</legend>{(["Foundation","Standard","Challenge"] as const).map((track) => <button key={track} className={studySessionTrack === track ? "active" : ""} onClick={() => { setStudySessionTrack(track); setStudySessionStep(0); }}>{englishSubject ? track : track === "Foundation" ? "ভিত্তিমূলক" : track === "Standard" ? "বোর্ড প্রস্তুতি" : "চ্যালেঞ্জ"}</button>)}</fieldset>
                  </div>
                  <div className="session-stage-map">{sessionStages.map((stage,index) => <button key={stage.title} className={studySessionStep === index ? "active" : ""} onClick={() => { setStudySessionStep(index); if (index === sessionStages.length - 1) completeStudyMode("session"); }}><span>{index + 1}</span><strong>{stage.title}</strong><small>{stage.minutes} {englishSubject ? "min" : "মিনিট"}</small></button>)}</div>
                  <article className="session-focus-card"><div><span>{englishSubject ? `STEP ${studySessionStep + 1} OF 5` : `ধাপ ${studySessionStep + 1}/৫`}</span><strong>{sessionStages[studySessionStep].title}</strong></div><p>{sessionStages[studySessionStep].body}</p>{studySessionStep === 4 && sessionQuestion && <details><summary>{englishSubject ? "Show answer and marking guide" : "উত্তর ও মূল্যায়ন নির্দেশিকা দেখো"}</summary><p>{englishSubject ? sessionQuestion.answerGuide : (sessionQuestion.answerGuideBn ?? sessionQuestion.answerGuide)}</p>{(englishSubject ? sessionQuestion.markingPoints : sessionQuestion.markingPointsBn) && <ul>{(englishSubject ? sessionQuestion.markingPoints : sessionQuestion.markingPointsBn)?.map((point) => <li key={point}>{point}</li>)}</ul>}{(englishSubject ? sessionQuestion.modelAnswer : sessionQuestion.modelAnswerBn) && <p style={{whiteSpace:"pre-line"}}>{englishSubject ? sessionQuestion.modelAnswer : sessionQuestion.modelAnswerBn}</p>}</details>}</article>
                  <div className="session-controls"><button disabled={studySessionStep === 0} onClick={() => setStudySessionStep((step) => Math.max(0,step-1))}>{englishSubject ? "Previous step" : "আগের ধাপ"}</button><span>{englishSubject ? "Read actively, recall without notes, then check." : "মনোযোগ দিয়ে পড়ো, না দেখে মনে করো, শেষে যাচাই করো।"}</span><button disabled={studySessionStep === sessionStages.length - 1} onClick={() => { const nextStep = Math.min(sessionStages.length-1,studySessionStep+1); setStudySessionStep(nextStep); if (nextStep === sessionStages.length - 1) completeStudyMode("session"); }}>{englishSubject ? "Next step" : "পরের ধাপ"}<ArrowRight size={14}/></button></div>
                </section>
              )}
            </section>
          )}
      </div>
      {celebration && <div className="completion-celebration" role="dialog" aria-modal="true" aria-labelledby="completion-title" onClick={() => setCelebration(null)}>
        <div className="completion-card" onClick={(event) => event.stopPropagation()}>
          <div className="celebration-burst" aria-hidden="true">{Array.from({length: 8}, (_, index) => <i key={index}/>)}</div>
          <span className="completion-icon"><Check size={24}/></span>
          <h2 id="completion-title">{celebration.title}</h2>
          <p>{celebration.message}</p>
          <button autoFocus onClick={() => setCelebration(null)}>{englishSubject ? "Continue learning" : "পড়া চালিয়ে যাও"}</button>
        </div>
      </div>}
    </div>
  );
}

function ObjectivePractice({ group }: { group: "commerce" | "humanities" }) {
  const allQuestions = practiceQuestionsByGroup[group];
  const sessionSize = Math.min(20, allQuestions.length);
  const practiceSeenKey = `hsc2plus-${group}-quick-practice-seen`;
  const buildSessionIds = useCallback((seenIds: number[], round: number) => {
    const seen = new Set(seenIds);
    const unseen = allQuestions.filter((question) => !seen.has(question.id));
    const cyclePool = unseen.length >= sessionSize ? unseen : [...unseen, ...allQuestions.filter((question) => !unseen.some((fresh) => fresh.id === question.id))];
    const subjects = Array.from(new Set(cyclePool.map((question) => question.topic.split(" · ")[0])));
    const difficultyOrder = ["Foundation", "Standard", "Challenge"] as const;
    const skillOrder = ["Recall", "Apply", "Analyse"] as const;
    const used = new Set<number>();
    const selected: typeof cyclePool = [];
    for (let slot = 0; slot < sessionSize && used.size < cyclePool.length; slot += 1) {
      const subject = subjects[(slot + round) % subjects.length];
      const subjectPool = cyclePool.filter((question) => question.topic.startsWith(`${subject} ·`) && !used.has(question.id));
      const difficulty = difficultyOrder[(slot + round) % difficultyOrder.length];
      const skill = skillOrder[(slot + Math.floor(slot / Math.max(subjects.length, 1)) + round) % skillOrder.length];
      const chosen = subjectPool.find((question) => question.difficulty === difficulty && question.skill === skill)
        ?? subjectPool.find((question) => question.difficulty === difficulty)
        ?? subjectPool.find((question) => question.skill === skill)
        ?? subjectPool[0]
        ?? cyclePool.find((question) => !used.has(question.id));
      if (chosen) {
        used.add(chosen.id);
        selected.push(chosen);
      }
    }
    return selected.map((question) => question.id);
  }, [allQuestions, sessionSize]);
  const [questionIds, setQuestionIds] = useState(() => buildSessionIds([], 0));
  const [sessionRound, setSessionRound] = useState(0);
  const [seenQuestionIds, setSeenQuestionIds] = useState<number[]>([]);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [complete, setComplete] = useState(false);
  const [mistakeIds, setMistakeIds] = useState<number[]>([]);
  const [bestScore, setBestScore] = useState(0);
  const [practiceFlow, setPracticeFlow] = useState<"quiz" | "continuous">("quiz");
  const [continuousAnswered, setContinuousAnswered] = useState(0);
  const [continuousCorrect, setContinuousCorrect] = useState(0);
  const practiceQuestions = questionIds
    .map((id) => allQuestions.find((item) => item.id === id))
    .filter((item): item is (typeof allQuestions)[number] => Boolean(item));
  const q = practiceQuestions[index];
  const selected = answers[q.id] ?? null;
  const answered = selected !== null;
  const score = practiceQuestions.filter((item) => answers[item.id] === item.answer).length;
  const wrongIds = practiceQuestions
    .filter((item) => answers[item.id] !== undefined && answers[item.id] !== item.answer)
    .map((item) => item.id);
  const continuousCurrentAnswered = Object.keys(answers).length;
  const reportAnswered = practiceFlow === "continuous" ? continuousAnswered + continuousCurrentAnswered : practiceQuestions.length;
  const reportCorrect = practiceFlow === "continuous" ? continuousCorrect + score : score;
  const reportWrongIds = practiceFlow === "continuous" ? mistakeIds : wrongIds;
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setMistakeIds(JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-mistakes`) ?? "[]"));
        setBestScore(Number(window.localStorage.getItem(`hsc2plus-${group}-best-score`) ?? 0));
        const savedSeenIds = JSON.parse(window.localStorage.getItem(practiceSeenKey) ?? "[]") as number[];
        const validSeenIds = savedSeenIds.filter((id) => allQuestions.some((question) => question.id === id));
        setSeenQuestionIds(validSeenIds);
        setQuestionIds(buildSessionIds(validSeenIds.length >= allQuestions.length ? [] : validSeenIds, 0));
      } catch {
        window.localStorage.removeItem(`hsc2plus-${group}-mistakes`);
        window.localStorage.removeItem(practiceSeenKey);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [allQuestions, buildSessionIds, group, practiceSeenKey]);
  const choose = (i: number) => {
    if (answered) return;
    setAnswers((current) => ({ ...current, [q.id]: i }));
    if (i !== q.answer) {
      const nextMistakes = mistakeIds.includes(q.id) ? mistakeIds : [...mistakeIds, q.id];
      setMistakeIds(nextMistakes);
      window.localStorage.setItem(`hsc2plus-${group}-mistakes`, JSON.stringify(nextMistakes));
    } else if (mistakeIds.includes(q.id)) {
      const nextMistakes = mistakeIds.filter((id) => id !== q.id);
      setMistakeIds(nextMistakes);
      window.localStorage.setItem(`hsc2plus-${group}-mistakes`, JSON.stringify(nextMistakes));
    }
  };
  const next = () => {
    if (index === practiceQuestions.length - 1) {
      const finalScore = score;
      const percent = Math.round((finalScore / practiceQuestions.length) * 100);
      const nextBest = Math.max(bestScore, percent);
      setBestScore(nextBest);
      window.localStorage.setItem(`hsc2plus-${group}-best-score`, String(nextBest));
      const currentStats = JSON.parse(
        window.localStorage.getItem(`hsc2plus-${group}-practice-stats`) ??
          '{"questions":0,"correct":0,"sessions":0}',
      ) as { questions: number; correct: number; sessions: number };
      window.localStorage.setItem(
        `hsc2plus-${group}-practice-stats`,
        JSON.stringify({
          questions: currentStats.questions + practiceQuestions.length,
          correct: currentStats.correct + finalScore,
          sessions: currentStats.sessions + 1,
        }),
      );
      window.dispatchEvent(new Event("hsc2plus-progress"));
      const completedIds = Array.from(new Set([...seenQuestionIds, ...practiceQuestions.map((question) => question.id)]));
      setSeenQuestionIds(completedIds);
      window.localStorage.setItem(practiceSeenKey, JSON.stringify(completedIds));
      if (practiceFlow === "continuous") {
        const nextRound = sessionRound + 1;
        const nextSeenIds = completedIds.length >= allQuestions.length ? [] : completedIds;
        if (nextSeenIds.length === 0) {
          setSeenQuestionIds([]);
          window.localStorage.setItem(practiceSeenKey, "[]");
        }
        setContinuousAnswered((value) => value + practiceQuestions.length);
        setContinuousCorrect((value) => value + finalScore);
        setSessionRound(nextRound);
        setQuestionIds(buildSessionIds(nextSeenIds, nextRound));
        setIndex(0);
        setAnswers({});
      } else {
        setComplete(true);
      }
    } else {
      setIndex((value) => value + 1);
    }
  };
  const restart = (ids?: number[]) => {
    if (ids?.length) {
      setQuestionIds(ids);
    } else {
      const nextRound = sessionRound + 1;
      const nextSeenIds = seenQuestionIds.length >= allQuestions.length ? [] : seenQuestionIds;
      if (nextSeenIds.length === 0 && seenQuestionIds.length > 0) {
        setSeenQuestionIds([]);
        window.localStorage.setItem(practiceSeenKey, "[]");
      }
      setSessionRound(nextRound);
      setQuestionIds(buildSessionIds(nextSeenIds, nextRound));
    }
    setIndex(0);
    setAnswers({});
    setComplete(false);
    setContinuousAnswered(0);
    setContinuousCorrect(0);
  };
  const finishContinuousPractice = () => {
    if (continuousCurrentAnswered === 0 && continuousAnswered === 0) return;
    const answeredQuestionIds = practiceQuestions.filter((item) => answers[item.id] !== undefined).map((item) => item.id);
    const completedIds = Array.from(new Set([...seenQuestionIds, ...answeredQuestionIds]));
    setSeenQuestionIds(completedIds);
    window.localStorage.setItem(practiceSeenKey, JSON.stringify(completedIds));
    if (continuousCurrentAnswered > 0) {
      const currentStats = JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-practice-stats`) ?? '{"questions":0,"correct":0,"sessions":0}') as { questions: number; correct: number; sessions: number };
      window.localStorage.setItem(`hsc2plus-${group}-practice-stats`, JSON.stringify({ questions: currentStats.questions + continuousCurrentAnswered, correct: currentStats.correct + score, sessions: currentStats.sessions + 1 }));
      window.dispatchEvent(new Event("hsc2plus-progress"));
    }
    const percent = Math.round((reportCorrect / Math.max(1, reportAnswered)) * 100);
    const nextBest = Math.max(bestScore, percent);
    setBestScore(nextBest);
    window.localStorage.setItem(`hsc2plus-${group}-best-score`, String(nextBest));
    setComplete(true);
  };
  if (complete) {
    const percent = Math.round((reportCorrect / Math.max(1, reportAnswered)) * 100);
    return (
      <div className="page-shell practice-shell">
        <section className="session-result">
          <span className="eyebrow">{practiceFlow === "continuous" ? "PRACTICE REVIEW" : "SESSION COMPLETE"}</span>
          <div className="result-score"><Ring value={percent} size={116} /></div>
          <h1>{percent >= 80 ? "খুব ভালো করেছো!" : percent >= 60 ? "ভালো অগ্রগতি।" : "পুনরাবৃত্তি করে আবার চেষ্টা করো।"}</h1>
          <p>{reportAnswered}টির মধ্যে {reportCorrect}টি সঠিক হয়েছে। তোমার সর্বোচ্চ স্কোর {Math.max(bestScore, percent)}%।</p>
          <div className="result-breakdown">
            <span><strong>{reportCorrect}</strong><small>সঠিক</small></span>
            <span><strong>{reportWrongIds.length}</strong><small>ভুলের খাতায়</small></span>
            <span><strong>{percent}%</strong><small>নির্ভুলতা</small></span>
          </div>
          <div className="result-actions">
            {reportWrongIds.length > 0 && <button className="primary-button" onClick={() => restart(reportWrongIds)}><RotateCcw size={16}/>ভুলগুলো আবার চেষ্টা করো</button>}
            <button className="secondary-button" onClick={() => restart()}>নতুন অনুশীলন শুরু করো</button>
          </div>
        </section>
      </div>
    );
  }
  return (
    <div className="page-shell practice-shell">
      <section className="page-title">
        <span className="eyebrow">
          {group === "commerce" ? "COMMERCE · ALL SUBJECTS" : "HUMANITIES · ALL SUBJECTS"}
        </span>
        <h1>{practiceFlow === "continuous" ? "যতক্ষণ চাও, ততক্ষণ MCQ Practice" : "সব বিষয় থেকে দ্রুত MCQ অনুশীলন"}</h1>
        <p>
          {practiceFlow === "continuous" ? `${allQuestions.length}টি প্রশ্নের ভান্ডার চক্রাকারে চলবে—কোনো session limit নেই, আগে না-দেখা প্রশ্ন অগ্রাধিকার পাবে।` : `${allQuestions.length}টি অধ্যায়ভিত্তিক প্রশ্নের নবায়নযোগ্য ভান্ডার থেকে প্রতিবার ২০টি—আগে না-দেখা প্রশ্ন অগ্রাধিকার পাবে, প্রতিটির সঙ্গে তাৎক্ষণিক ব্যাখ্যা।`}
        </p>
      </section>
      <div className="quick-practice-flow" role="group" aria-label="Practice flow"><button className={practiceFlow === "quiz" ? "active" : ""} onClick={() => setPracticeFlow("quiz")}><strong>Quick Quiz</strong><span>ছোট Session + Report</span></button><button className={practiceFlow === "continuous" ? "active" : ""} onClick={() => { setPracticeFlow("continuous"); setComplete(false); }}><strong>Unlimited Practice</strong><span>বিরতি ছাড়া নতুন প্রশ্ন</span></button></div>
      <div className="practice-layout">
        <section className="question-card">
          <div className="question-meta">
            <span>{practiceFlow === "continuous" ? `প্রশ্ন ${continuousAnswered + index + 1}` : `প্রশ্ন ${index + 1}/${practiceQuestions.length}`}</span>
            <span>{practiceFlow === "continuous" ? `মোট সঠিক ${continuousCorrect + score}` : `স্কোর ${score}`}</span>
          </div>
          {practiceFlow === "quiz" && <div className="question-navigator" aria-label="প্রশ্ন নির্বাচন">
            {practiceQuestions.map((item, itemIndex) => (
              <button
                key={item.id}
                className={`${itemIndex === index ? "active" : ""} ${answers[item.id] !== undefined ? "answered" : ""}`}
                onClick={() => setIndex(itemIndex)}
              aria-label={`প্রশ্ন ${itemIndex + 1}-এ যান`}
              >
                {itemIndex + 1}
              </button>
            ))}
          </div>}
          {practiceFlow === "quiz" ? <div className="progress-track large">
            <i
              style={{
                width: `${((index + 1) / practiceQuestions.length) * 100}%`,
              }}
            />
          </div> : <div className="continuous-run-strip"><span><strong>{continuousAnswered + continuousCurrentAnswered}</strong><small>টি উত্তর দেওয়া হয়েছে</small></span><span><strong>{continuousAnswered + continuousCurrentAnswered ? Math.round(((continuousCorrect + score) / (continuousAnswered + continuousCurrentAnswered)) * 100) : 0}%</strong><small>সঠিক উত্তরের হার</small></span><span className="bank-seen-counter"><strong>{Math.min(allQuestions.length, seenQuestionIds.length + continuousCurrentAnswered).toLocaleString("bn-BD")}</strong><small>মোট {allQuestions.length.toLocaleString("bn-BD")} প্রশ্নের মধ্যে দেখা</small></span></div>}
          <div className="question-tags">
            <span className="topic-pill">{q.topic}</span>
            <span>{q.difficulty}</span>
            <span>{q.skill}</span>
          </div>
          <h2>{q.question}</h2>
          <div className="option-list">
            {q.options.map((o, i) => (
              <button
                onClick={() => choose(i)}
                key={o}
                aria-label={`${q.isEnglish ? ["A", "B", "C", "D"][i] : ["ক", "খ", "গ", "ঘ"][i]}. ${o}`}
                className={`option ${answered && i === q.answer ? "correct" : ""} ${answered && selected === i && i !== q.answer ? "wrong" : ""}`}
              >
                <span>{q.isEnglish ? ["A", "B", "C", "D"][i] : ["ক", "খ", "গ", "ঘ"][i]}</span>
                {o}
                {answered && i === q.answer && <CheckCircle2 size={18} />}
              </button>
            ))}
          </div>
          {answered && (
            <div className="explanation">
              <strong>
                {selected === q.answer
                  ? "সঠিক—খুব ভালো!"
                  : "সঠিক হয়নি। ধারণাটি বুঝে নাও:"}
              </strong>
              <p>{q.explanation}</p>
            </div>
          )}
          <button
            className="primary-button full"
            disabled={!answered}
            onClick={next}
          >
            {practiceFlow === "continuous" ? (index === practiceQuestions.length - 1 ? "নতুন প্রশ্ন চালিয়ে যাও" : "পরের প্রশ্ন") : (index === practiceQuestions.length - 1 ? "অনুশীলন শেষ করো" : "পরের প্রশ্ন")} <ArrowRight size={17} />
          </button>
        </section>
        <aside className="practice-aside">
          <div className="surface compact">
            <Target size={22} />
            <h3>অনুশীলনের লক্ষ্য</h3>
            <p>
              {practiceFlow === "continuous" ? "জ্ঞান, প্রয়োগ ও বিশ্লেষণ—সব দক্ষতা ও বিষয় থেকে নতুন প্রশ্ন আসতে থাকবে।" : "জ্ঞান, প্রয়োগ ও বিশ্লেষণ—তিন দক্ষতা এবং সব বিষয় মিলিয়ে এই রাউন্ডের ২০টি প্রশ্ন শেষ করো।"}
            </p>
            <div className="metric-row">
              <span>
                <small>{practiceFlow === "continuous" ? "মোট উত্তর" : "উত্তর দিয়েছো"}</small>
                <strong>{practiceFlow === "continuous" ? continuousAnswered + Object.keys(answers).length : Object.keys(answers).length}</strong>
              </span>
              <span>
                <small>সঠিক</small>
                <strong>{practiceFlow === "continuous" ? continuousCorrect + score : score}</strong>
              </span>
            </div>
            <p className="practice-pool-status">এই চক্রে দেখা হয়েছে {Math.min(seenQuestionIds.length, allQuestions.length)}/{allQuestions.length} · ভান্ডার শেষ হলে নতুন চক্র শুরু হবে।</p>
            {practiceFlow === "continuous" && <button className="secondary-button full practice-review-button" disabled={continuousAnswered + continuousCurrentAnswered === 0} onClick={finishContinuousPractice}><BarChart3 size={16}/>শেষ করে রিপোর্ট দেখো</button>}
          </div>
          <div className="surface compact">
            <RotateCcw size={22} />
            <h3>ভুলের খাতা</h3>
            <p>পুনরাবৃত্তির জন্য {mistakeIds.length}টি প্রশ্ন সংরক্ষিত আছে।</p>
            <button className="text-button" disabled={mistakeIds.length === 0} onClick={() => restart(mistakeIds)}>
              ভুলগুলো দেখো <ArrowRight size={14} />
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

type PracticeTarget = { subject: string; unit: string; source: "revision" | "recovery" | "mission" | "planner"; questionType?: "All" | "MCQ" | "CQ" | "Written" };

function QuestionBankPractice({ group, target }: { group: "commerce" | "humanities"; target?: PracticeTarget | null }) {
  const resources = completeExamLibraryByGroup[group];
  const subjects = Array.from(new Set(resources.map((item) => item.subject)));
  const [subject, setSubject] = useState(subjects[0]);
  const selectedSubjectId = subjectsByGroup[group].find((item) => item.name === subject)?.id;
  const subjectPapers = Array.from(new Set((selectedSubjectId ? chaptersBySubject[selectedSubjectId] : []).map((chapter) => chapter.paper).filter((paper): paper is "1st Paper"|"2nd Paper" => Boolean(paper))));
  const [practicePaper, setPracticePaper] = useState<"All"|"1st Paper"|"2nd Paper">("All");
  const allSubjectResources = resources
    .map((item, resourceIndex) => ({ item, resourceIndex }))
    .filter(({ item }) => item.subject === subject);
  const subjectResources = allSubjectResources.filter(({item}) => {
    if (practicePaper === "All" || !selectedSubjectId) return true;
    return chaptersBySubject[selectedSubjectId]?.find((chapter) => chapter.title === item.unit)?.paper === practicePaper;
  });
  const [resourceIndex, setResourceIndex] = useState(subjectResources[0]?.resourceIndex ?? 0);
  const [level, setLevel] = useState<"All" | "Foundation" | "Standard" | "Challenge">("All");
  const [questionType, setQuestionType] = useState<"All" | "MCQ" | "CQ" | "Written">("All");
  const [practiceCategory, setPracticeCategory] = useState<"All" | "Concept" | "Application" | "Board-style" | "College-standard">("All");
  const [sessionSize, setSessionSize] = useState<10 | 20 | 40>(20);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sessionRound, setSessionRound] = useState(0);
  const [seenQuestionIds, setSeenQuestionIds] = useState<string[]>([]);
  const [rotationReady, setRotationReady] = useState(false);
  const [phase, setPhase] = useState<"setup" | "running" | "result">("setup");
  const [index, setIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [results, setResults] = useState<Record<number, "mastered" | "review">>({});
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number | null>>({});
  const [sessionQuestionKeys, setSessionQuestionKeys] = useState<string[]>([]);
  const [answerDraft, setAnswerDraft] = useState("");
  const [practiceAnswerPdf, setPracticeAnswerPdf] = useState<{name:string;size:number}|null>(null);
  const [practicePdfError, setPracticePdfError] = useState("");
  const resource = resources[resourceIndex] ?? resources[0];
  const englishResource = resource.subject === "English";
  const resourceSubjectId = subjectsByGroup[group].find((item) => item.name === resource.subject)?.id;
  const resourceChapter = resourceSubjectId ? chaptersBySubject[resourceSubjectId]?.find((chapter) => chapter.title === resource.unit) : undefined;
  useEffect(() => {
    if (!target) return;
    const targetIndex = resources.findIndex((item) => item.subject === target.subject && item.unit === target.unit);
    if (targetIndex < 0) return;
    const restore = window.setTimeout(() => {
      setSubject(target.subject);
      setResourceIndex(targetIndex);
      setLevel("All");
      setQuestionType(target.questionType ?? "All");
      setPracticeCategory("All");
      setPhase("setup");
    }, 0);
    return () => window.clearTimeout(restore);
  }, [target, resources]);
  const availableQuestions = (resource.bank.questions ?? []).filter(
    (question) =>
      (level === "All" || question.level === level) &&
      (questionType === "All" || question.type === questionType) &&
      (practiceCategory === "All" || question.category === practiceCategory),
  );
  const rotationKey = `hsc2plus-${group}-question-rotation:${resource.subject}:${resource.unit}`;
  useEffect(() => {
    const restore = window.setTimeout(() => {
      setRotationReady(false);
      try {
        const stored = JSON.parse(window.localStorage.getItem(rotationKey) ?? "[]");
        setSeenQuestionIds(Array.isArray(stored) ? stored.filter((item): item is string => typeof item === "string") : []);
      } catch {
        setSeenQuestionIds([]);
      }
      setRotationReady(true);
    }, 0);
    return () => window.clearTimeout(restore);
  }, [rotationKey]);
  const seenSet = new Set(seenQuestionIds);
  const freshQuestions = availableQuestions.filter((question) => !seenSet.has(stableQuestionKey(question)));
  const repeatQuestions = availableQuestions.filter((question) => seenSet.has(stableQuestionKey(question)));
  const sessionOffset = repeatQuestions.length ? (sessionRound * sessionSize) % repeatQuestions.length : 0;
  const rotatedRepeats = sessionOffset ? [...repeatQuestions.slice(sessionOffset), ...repeatQuestions.slice(0, sessionOffset)] : repeatQuestions;
  const orderedPracticeQuestions = [...freshQuestions, ...rotatedRepeats];
  const candidateQuestions = orderedPracticeQuestions.slice(0, Math.min(sessionSize, orderedPracticeQuestions.length));
  const questions = phase === "setup"
    ? candidateQuestions
    : sessionQuestionKeys.map((key) => (resource.bank.questions ?? []).find((question) => stableQuestionKey(question) === key)).filter((question): question is NonNullable<typeof question> => Boolean(question));
  const seenInCurrentPool = availableQuestions.length - freshQuestions.length;
  const coveragePercent = availableQuestions.length ? Math.round((seenInCurrentPool / availableQuestions.length) * 100) : 0;
  const activeQuestion = questions[index];
  const activeQuestionKey = activeQuestion ? (activeQuestion.promptBn ?? activeQuestion.prompt).slice(0, 120) : "";
  const answerDraftKey = activeQuestion
    ? `hsc2plus-${group}-answer-draft:${resource.subject}:${resource.unit}:${activeQuestion.type}:${activeQuestionKey}`
    : "";
  useEffect(() => {
    const restore = window.setTimeout(() => setAnswerDraft(answerDraftKey ? (window.localStorage.getItem(answerDraftKey) ?? "") : ""), 0);
    return () => window.clearTimeout(restore);
  }, [answerDraftKey]);
  const updateAnswerDraft = (value: string) => {
    setAnswerDraft(value);
    if (answerDraftKey) window.localStorage.setItem(answerDraftKey, value);
  };
  const selectPracticePdf = (file?: File) => {
    setPracticePdfError("");
    if (!file) return;
    if (file.type !== "application/pdf") { setPracticeAnswerPdf(null); setPracticePdfError("শুধু PDF ফাইল নির্বাচন করা যাবে।"); return; }
    if (file.size > 20 * 1024 * 1024) { setPracticeAnswerPdf(null); setPracticePdfError("PDF-এর আকার সর্বোচ্চ ২০ MB হতে পারবে।"); return; }
    setPracticeAnswerPdf({name:file.name,size:file.size});
  };
  const start = (retryKeys?: string[]) => {
    const nextQuestions = retryKeys?.length
      ? (resource.bank.questions ?? []).filter((question) => retryKeys.includes(stableQuestionKey(question)))
      : candidateQuestions;
    setSessionQuestionKeys(nextQuestions.map(stableQuestionKey));
    setSessionRound((value) => value + 1);
    setIndex(0);
    setResults({});
    setSelectedAnswers({});
    setRevealed(false);
    setSelectedOption(null);
    setPracticeAnswerPdf(null);
    setPracticePdfError("");
    setPhase("running");
  };
  const changeSubject = (nextSubject: string) => {
    setSubject(nextSubject);
    setPracticePaper("All");
    const nextIndex = resources.findIndex((item) => item.subject === nextSubject);
    setResourceIndex(Math.max(0, nextIndex));
    setQuestionType(nextSubject === "English" ? "Written" : "All");
    setLevel("All");
    setPracticeCategory("All");
  };
  const changePracticePaper = (paper: "All"|"1st Paper"|"2nd Paper") => {
    setPracticePaper(paper);
    const next = allSubjectResources.find(({item}) => paper === "All" || (selectedSubjectId && chaptersBySubject[selectedSubjectId]?.find((chapter) => chapter.title === item.unit)?.paper === paper));
    if (next) setResourceIndex(next.resourceIndex);
  };
  const assess = (result: "mastered" | "review") => {
    if (!activeQuestion) return;
    const updated = { ...results, [index]: result };
    setResults(updated);
    setSelectedAnswers((current) => ({ ...current, [index]: activeQuestion.optionsBn ? selectedOption : null }));
    const reviewKey = `hsc2plus-${group}-bank-review`;
    const queue: string[] = JSON.parse(window.localStorage.getItem(reviewKey) ?? "[]");
    const reviewId = `${resource.subject}:${resource.unit}:${activeQuestionKey}`;
    const completedQuestionId = stableQuestionKey(activeQuestion);
    if (!seenSet.has(completedQuestionId)) {
      const updatedSeen = [...seenQuestionIds, completedQuestionId];
      setSeenQuestionIds(updatedSeen);
      window.localStorage.setItem(rotationKey, JSON.stringify(updatedSeen));
    }
    if (result === "review") {
      if (!queue.includes(reviewId)) window.localStorage.setItem(reviewKey, JSON.stringify([...queue, reviewId]));
    } else if (answerDraftKey) {
      window.localStorage.removeItem(answerDraftKey);
      if (queue.includes(reviewId)) window.localStorage.setItem(reviewKey, JSON.stringify(queue.filter((id) => id !== reviewId)));
    }
    if (index === questions.length - 1) {
      const masteredTotal = Object.values(updated).filter((item) => item === "mastered").length;
      const statsKey = `hsc2plus-${group}-practice-stats`;
      const currentStats = JSON.parse(window.localStorage.getItem(statsKey) ?? '{"questions":0,"correct":0,"sessions":0}') as { questions: number; correct: number; sessions: number };
      window.localStorage.setItem(statsKey, JSON.stringify({ questions: currentStats.questions + questions.length, correct: currentStats.correct + masteredTotal, sessions: currentStats.sessions + 1 }));
      window.dispatchEvent(new Event("hsc2plus-progress"));
      setPhase("result");
    } else {
      setIndex((value) => value + 1);
      setRevealed(false);
      setSelectedOption(null);
      setPracticeAnswerPdf(null);
      setPracticePdfError("");
    }
  };
  const resetRotation = () => {
    setSeenQuestionIds([]);
    setSessionRound(0);
    window.localStorage.removeItem(rotationKey);
  };
  if (phase === "setup") {
    return (
      <div className="page-shell">
        <section className="page-title">
          <span className="eyebrow">PRACTICE STUDIO</span>
          <h1>যা প্রয়োজন, সেটিই অনুশীলন করো।</h1>
          <p>বিষয়, অধ্যায় ও কঠিনতার স্তর বেছে নাও। আগে নিজে চেষ্টা করো, তারপর মূল্যায়ন নির্দেশিকা দেখো।</p>
        </section>
        <section className="practice-builder">
          {target && resource.subject === target.subject && resource.unit === target.unit && <div className="targeted-practice-banner"><div><span>{target.source === "recovery" ? "RECOVERY PRACTICE" : "REVISION FOLLOW-UP"}</span><strong>{englishResource ? resource.unit : resource.unitBn}</strong><small>{englishResource ? "A fresh chapter-specific set is ready. Unseen questions appear first." : "এই অধ্যায়ের জন্য নতুন Practice Set প্রস্তুত। আগে না-দেখা প্রশ্নগুলো প্রথমে আসবে।"}</small></div><CheckCircle2 size={24}/></div>}
          <div className="builder-fields">
            <label>{englishResource ? "Subject" : "বিষয়"}<select value={subject} onChange={(event) => changeSubject(event.target.value)}>{subjects.map((item) => <option value={item} key={item}>{item === "English" ? "English" : completeExamLibraryByGroup[group].find((r) => r.subject === item)?.subjectBn ?? item}</option>)}</select></label>
            {subjectPapers.length>1&&<label>{englishResource?"Paper":"পত্র"}<select value={practicePaper} onChange={(event)=>changePracticePaper(event.target.value as "All"|"1st Paper"|"2nd Paper")}><option value="All">{englishResource?"All papers":"সব পত্র"}</option>{subjectPapers.map((paper)=><option value={paper} key={paper}>{englishResource?paper:paper==="1st Paper"?"১ম পত্র":"২য় পত্র"}</option>)}</select></label>}
            <label>{englishResource ? "Chapter" : "অধ্যায়"}<select value={resourceIndex} onChange={(event) => setResourceIndex(Number(event.target.value))}>{subjectResources.map(({ item, resourceIndex: optionIndex }) => { const subjectId = subjectsByGroup[group].find((subjectItem) => subjectItem.name === item.subject)?.id; const chapter = subjectId ? chaptersBySubject[subjectId]?.find((chapterItem) => chapterItem.title === item.unit) : undefined; const paper = chapter?.paper ? (item.subject === "English" ? chapter.paper : chapter.paper === "1st Paper" ? "১ম পত্র" : "২য় পত্র") : ""; return <option value={optionIndex} key={item.unit}>{paper ? `${paper} · ` : ""}{item.subject === "English" ? item.unit : item.unitBn}</option>; })}</select></label>
            <label>{englishResource ? "Session size" : "সেশনে প্রশ্ন"}<select value={sessionSize} onChange={(event) => setSessionSize(Number(event.target.value) as 10 | 20 | 40)}><option value={10}>10</option><option value={20}>20</option><option value={40}>40</option></select></label>
          </div>
          <button type="button" className={`advanced-filter-toggle ${showAdvanced ? "open" : ""}`} onClick={() => setShowAdvanced((value) => !value)} aria-expanded={showAdvanced}><SlidersHorizontal size={16}/><span>{englishResource ? "Fine-tune this set" : "আরও নির্দিষ্টভাবে বেছে নাও"}</span><small>{showAdvanced ? (englishResource ? "Hide options" : "অপশন লুকাও") : (englishResource ? "Difficulty, type and standard" : "কঠিনতা, ধরন ও প্রশ্নের মান")}</small></button>
          {showAdvanced && <div className="builder-fields advanced-fields">
            <label>{englishResource ? "Difficulty" : "কঠিনতার স্তর"}<select value={level} onChange={(event) => setLevel(event.target.value as typeof level)}><option value="All">{englishResource ? "All" : "সব"}</option><option value="Foundation">{englishResource ? "Foundation" : "ভিত্তিমূলক"}</option><option value="Standard">{englishResource ? "Standard" : "মানসম্মত"}</option><option value="Challenge">{englishResource ? "Challenge" : "চ্যালেঞ্জ"}</option></select></label>
            <label>{englishResource ? "Practice type" : "প্রশ্নের ধরন"}<select value={englishResource?"Written":questionType} onChange={(event) => setQuestionType(event.target.value as typeof questionType)}>{englishResource?<option value="Written">Reading · Grammar · Writing</option>:<><option value="All">সব</option><option value="MCQ">বহুনির্বাচনি</option><option value="CQ">সৃজনশীল</option><option value="Written">লিখিত</option></>}</select></label>
            <label>{englishResource ? "Standard" : "প্রশ্নের মান"}<select value={practiceCategory} onChange={(event) => setPracticeCategory(event.target.value as typeof practiceCategory)}><option value="All">{englishResource ? "All available" : "সব প্রশ্ন"}</option><option value="Board-style">{englishResource ? "Board-style" : "বোর্ড-প্যাটার্ন"}</option><option value="College-standard">{englishResource ? "College-standard" : "কলেজ-স্ট্যান্ডার্ড"}</option><option value="Concept">{englishResource ? "Concept" : "ধারণাভিত্তিক"}</option><option value="Application">{englishResource ? "Application" : "প্রয়োগ"}</option></select></label>
          </div>}
          <div className="builder-preview">
            <div><span>{resource.subject}{resourceChapter?.paper ? ` · ${englishResource ? resourceChapter.paper : resourceChapter.paper === "1st Paper" ? "১ম পত্র" : "২য় পত্র"}` : ""}</span><h2>{englishResource ? resource.unit : resource.unitBn}</h2><p>{resource.bank.focus}</p></div>
            <strong>{questions.length}<small>{englishResource ? ` in this session · ${availableQuestions.length} available` : `টি এই সেশনে · মোট ${availableQuestions.length}টি পাওয়া গেছে`}</small></strong>
          </div>
          <div className="practice-rotation-status">
            <div className="practice-rotation-copy"><span><Sparkles size={16}/>{englishResource ? "Smart question rotation" : "Smart Question Rotation"}</span><strong>{englishResource ? `${freshQuestions.length} unseen questions remain` : `${freshQuestions.length}টি নতুন প্রশ্ন এখনো বাকি`}</strong><small>{englishResource ? "Unseen questions appear first; completed questions return only after the fresh pool is exhausted." : "আগে না-দেখা প্রশ্ন আসবে; নতুন প্রশ্ন শেষ হলে পুরোনো প্রশ্ন পুনরাবৃত্তির জন্য ফিরবে।"}</small></div>
            <div className="practice-coverage"><span><strong>{coveragePercent}%</strong><small>{englishResource ? "pool covered" : "প্রশ্নভান্ডার সম্পন্ন"}</small></span><div className="progress-track"><i style={{ width: `${coveragePercent}%` }}/></div><button type="button" onClick={resetRotation} disabled={seenInCurrentPool === 0}>{englishResource ? "Reset rotation" : "নতুন করে শুরু"}</button></div>
          </div>
          <button className="primary-button full" onClick={() => start()} disabled={!rotationReady || questions.length === 0}>{englishResource ? "Start practice" : "অনুশীলন শুরু করো"} <ArrowRight size={17}/></button>
        </section>
      </div>
    );
  }
  if (phase === "result") {
    const mastered = Object.values(results).filter((item) => item === "mastered").length;
    const percent = questions.length ? Math.round((mastered / questions.length) * 100) : 0;
    const mistakeEntries = questions.map((question, questionIndex) => ({ question, questionIndex, result: results[questionIndex], selected: selectedAnswers[questionIndex] })).filter(({ question, result, selected }) => result === "review" || (question.optionsBn && selected !== question.correctIndex));
    const weakType = (["MCQ", "CQ", "Written"] as const).map((type) => ({ type, count: mistakeEntries.filter(({ question }) => question.type === type).length })).sort((a, b) => b.count - a.count)[0];
    const weakLevel = (["Foundation", "Standard", "Challenge"] as const).map((itemLevel) => ({ level: itemLevel, count: mistakeEntries.filter(({ question }) => question.level === itemLevel).length })).sort((a, b) => b.count - a.count)[0];
    const retryKeys = mistakeEntries.map(({ question }) => stableQuestionKey(question));
    return (
      <div className="page-shell">
        <section className="session-result bank-attempt-report">
          <span className="eyebrow">SESSION COMPLETE</span>
          <div className="result-score"><Ring value={percent} size={116}/></div>
          <h1>{mastered === questions.length ? "অধ্যায়টি ভালোভাবে আয়ত্ত হয়েছে।" : "কী পুনরাবৃত্তি করতে হবে তা এখন পরিষ্কার।"}</h1>
          <p>{mastered}টি বুঝেছো · {questions.length - mastered}টি পুনরাবৃত্তির জন্য সংরক্ষিত</p>
          <div className="practice-report-grid">
            <article><span>Mastery</span><strong>{percent}%</strong><small>{mastered}/{questions.length} প্রশ্ন</small></article>
            <article><span>Focus area</span><strong>{weakType?.count ? weakType.type : "Maintained"}</strong><small>{weakType?.count ? `${weakType.count}টি উত্তরে ঘাটতি` : "সব ধরনের প্রশ্নে ভালো"}</small></article>
            <article><span>Difficulty gap</span><strong>{weakLevel?.count ? weakLevel.level : "None"}</strong><small>{weakLevel?.count ? "এই স্তরটি আবার অনুশীলন করো" : "কোনো বড় ঘাটতি নেই"}</small></article>
          </div>
          {mistakeEntries.length > 0 && <section className="focus-plan"><span className="eyebrow">PERSONAL FOCUS REPORT</span><h2>পরের সেশনে যেগুলোতে মনোযোগ দেবে</h2><ul><li><strong>{resource.subject === "English" ? resource.unit : resource.unitBn}</strong> অধ্যায়ের মূল ধারণা ও গুরুত্বপূর্ণ শব্দ একবার Revision করো।</li><li>{weakType?.type === "CQ" ? "CQ-তে উদ্দীপক থেকে তথ্য নিয়ে ক–খ–গ–ঘ অংশের ১+২+৩+৪ কাঠামো মেনে লেখো।" : weakType?.type === "MCQ" ? "MCQ-তে ভুল অপশন বাদ দেওয়ার আগে সংজ্ঞা, শর্ত ও মূল পার্থক্য যাচাই করো।" : "লিখিত উত্তরে সংজ্ঞা, ব্যাখ্যা, উদাহরণ ও উপসংহার আলাদা রাখো।"}</li><li>নিচের ভুলগুলো দেখে শুধু ভুল প্রশ্ন দিয়ে একটি targeted retry দাও।</li></ul></section>}
          {mistakeEntries.length > 0 && <section className="mistake-review-list"><header><span className="eyebrow">MISTAKE REVIEW</span><h2>ভুল ও পুনরাবৃত্তির খাতা</h2><p>প্রতিটি ভুলের কারণ বুঝে নাও—শুধু সঠিক উত্তর মুখস্থ কোরো না।</p></header>{mistakeEntries.map(({ question, questionIndex, selected }) => { const bangla = resource.subject !== "English"; return <details key={stableQuestionKey(question)}><summary><span>{questionIndex + 1}</span><div><strong>{bangla ? (question.promptBn ?? question.prompt) : question.prompt}</strong><small>{question.type} · {question.level} · Focus needed</small></div></summary>{question.optionsBn && <p className="answer-comparison"><span>তোমার উত্তর: <strong>{selected === null || selected === undefined ? "উত্তর দেওয়া হয়নি" : question.optionsBn[selected]}</strong></span><span>সঠিক উত্তর: <strong>{question.optionsBn[question.correctIndex ?? 0]}</strong></span></p>}<p>{bangla ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p>{(bangla ? question.markingPointsBn : question.markingPoints) && <ol>{(bangla ? question.markingPointsBn : question.markingPoints)?.map((point) => <li key={point}>{point}</li>)}</ol>}</details>})}</section>}
          <div className="result-actions">{retryKeys.length > 0 && <button className="primary-button" onClick={() => start(retryKeys)}>শুধু ভুলগুলো আবার দাও</button>}<button className={retryKeys.length ? "secondary-button" : "primary-button"} onClick={() => start()}>নতুন Practice Set</button><button className="secondary-button" onClick={() => setPhase("setup")}>নির্বাচন পরিবর্তন</button></div>
        </section>
      </div>
    );
  }
  const question = questions[index];
  const banglaMedium = resource.subject !== "English";
  const practicePrompt = banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt;
  const practiceGuide = banglaMedium ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide;
  const incorrectMcq = Boolean(question.optionsBn && selectedOption !== null && selectedOption !== question.correctIndex);
  const selectedMcqText = question.optionsBn && selectedOption !== null ? question.optionsBn[selectedOption] : "";
  return (
    <div className="page-shell">
      <section className="bank-practice-card">
        <div className="bank-practice-meta"><span>{resource.subject} · {banglaMedium ? resource.unitBn : resource.unit}</span><strong>{index + 1}/{questions.length}</strong></div>
        <div className="question-tags"><span className="topic-pill">{question.type === "MCQ" ? "MCQ" : question.type === "CQ" ? (banglaMedium ? "CQ · ১০ নম্বর" : "CQ · 10 marks") : (banglaMedium ? "লিখিত" : "Written")}</span><span>{banglaMedium ? (question.level === "Foundation" ? "সহজ" : question.level === "Standard" ? "মাঝারি" : "কঠিন") : question.level}</span></div>
        <h1 className={banglaMedium ? "bangla-question-title" : ""} style={{ whiteSpace: "pre-line" }}>{practicePrompt}</h1>
        <QuestionVisual visual={question.visual} surface="question"/>
        {question.optionsBn && (
          <div className="option-list bank-options">
            {question.optionsBn.map((option, optionIndex) => (
              <button
                key={option}
                className={`option ${selectedOption === optionIndex ? "selected" : ""} ${revealed && optionIndex === question.correctIndex ? "correct" : ""} ${revealed && selectedOption === optionIndex && optionIndex !== question.correctIndex ? "wrong" : ""}`}
                onClick={() => !revealed && setSelectedOption(optionIndex)}
              >
                <span>{(banglaMedium ? ["ক", "খ", "গ", "ঘ"] : ["A", "B", "C", "D"])[optionIndex]}</span>{option}
              </button>
            ))}
          </div>
        )}
        {!question.optionsBn && question.type === "CQ" && (
          <section className={`practice-cq-pdf ${practiceAnswerPdf ? "ready" : ""}`}>
            <header><FileUp size={19}/><div><strong>{banglaMedium ? "খাতায় লেখা উত্তর PDF হিসেবে দাও" : "Upload your handwritten answer as a PDF"}</strong><span>{banglaMedium ? "PDF এই browser-এর বাইরে পাঠানো হবে না" : "The PDF does not leave this browser"}</span></div></header>
            <label><input type="file" accept="application/pdf,.pdf" disabled={revealed} onChange={(event)=>selectPracticePdf(event.target.files?.[0])}/><Upload size={24}/><strong>{practiceAnswerPdf ? practiceAnswerPdf.name : (banglaMedium ? "উত্তরের PDF নির্বাচন করো" : "Choose answer PDF")}</strong><small>{practiceAnswerPdf ? `${(practiceAnswerPdf.size/1024/1024).toFixed(2)} MB · প্রস্তুত` : (banglaMedium ? "সর্বোচ্চ ২০ MB" : "Maximum 20 MB")}</small></label>
            {practicePdfError&&<p className="upload-error">{practicePdfError}</p>}
            <aside><ShieldCheck size={16}/><p>{banglaMedium ? "AI handwriting assessment এখনো production-ready নয়। আপাতত PDF যুক্ত করে নিচের ১+২+৩+৪ marking guide-এর সঙ্গে উত্তর মিলিয়ে self-review করো।" : "AI handwriting assessment is not production-ready. Attach the PDF, then review it against the marking guide below."}</p></aside>
          </section>
        )}
        {!question.optionsBn && question.type !== "CQ" && (
          <div className="answer-workspace">
            <div className="answer-workspace-head">
              <div><PenLine size={18}/><strong>{banglaMedium ? "উত্তরের খসড়া" : "Answer draft"}</strong></div>
              <span>{answerDraft.trim() ? answerDraft.trim().split(/\s+/).length : 0} {banglaMedium ? "শব্দ · স্বয়ংক্রিয়ভাবে সংরক্ষিত" : "words · autosaved"}</span>
            </div>
            <textarea value={answerDraft} onChange={(event) => updateAnswerDraft(event.target.value)} disabled={revealed} placeholder={banglaMedium ? "নিজের ভাষায় পূর্ণ উত্তর লেখো…" : "Write your complete answer in English…"} aria-label={banglaMedium ? "উত্তরের খসড়া" : "Answer draft"} />
            {!revealed && answerDraft.trim().length < 20 && <small>{banglaMedium ? "নির্দেশিকা দেখার আগে অন্তত একটি অর্থপূর্ণ চেষ্টা লেখো।" : "Write a meaningful attempt before viewing the guide."}</small>}
          </div>
        )}
        {!revealed ? (
          <div className="attempt-first"><Brain size={24}/><h2>{banglaMedium ? "উত্তর দেখার আগে নিজে চেষ্টা করো।" : "Attempt it before viewing the answer."}</h2><p>{question.type === "CQ" ? (banglaMedium ? "খাতায় ক, খ, গ ও ঘ আলাদা করে লিখে PDF যুক্ত করো; তারপর ১+২+৩+৪ marking guide মিলিয়ে দেখো।" : "Write every part on paper, attach the PDF, then compare it with the marking guide.") : (banglaMedium ? "প্রশ্নের নির্দেশনা মেনে নিজের ভাষায় পূর্ণ উত্তর লেখো।" : "Write in English using accurate grammar, relevant evidence and the required structure.")}</p><button className="primary-button" disabled={question.optionsBn ? selectedOption === null : question.type === "CQ" ? !practiceAnswerPdf : answerDraft.trim().length < 20} onClick={() => setRevealed(true)}>{banglaMedium ? "মূল্যায়ন নির্দেশিকা দেখো" : "View marking guide"}</button></div>
        ) : (
          <div className="revealed-guide">
            <span className="mini-heading"><CheckCircle2 size={16}/> MARKING GUIDE</span>
            {question.optionsBn && question.correctIndex !== undefined && <div className="revealed-mcq-answer"><span>{banglaMedium ? "সঠিক উত্তর" : "CORRECT ANSWER"}</span><strong>{(banglaMedium ? ["ক","খ","গ","ঘ"] : ["A","B","C","D"])[question.correctIndex]}. {question.optionsBn[question.correctIndex]}</strong></div>}
            {question.optionsBn && <section className={`mcq-feedback ${incorrectMcq ? "incorrect" : "correct"}`}><strong>{incorrectMcq ? (banglaMedium ? "কেন তোমার উত্তরটি সঠিক নয়" : "Why your answer is incorrect") : (banglaMedium ? "কেন উত্তরটি সঠিক" : "Why the answer is correct")}</strong>{incorrectMcq && <p>{banglaMedium ? `“${selectedMcqText}” বিকল্পটি প্রশ্নের নির্ণায়ক ধারণা, শর্ত বা প্রমাণের সঙ্গে সম্পূর্ণভাবে মেলে না।` : `“${selectedMcqText}” does not fully satisfy the decisive concept, condition or evidence required by the question.`}</p>}<p>{practiceGuide}</p><small>{banglaMedium ? "মনে রাখো: প্রশ্নের মূল শব্দ শনাক্ত করো, তারপর প্রতিটি বিকল্প অধ্যায়ের নিয়মের সঙ্গে মিলিয়ে বাদ দাও।" : "Remember: identify the controlling word, then eliminate each option against the chapter rule."}</small></section>}
            {!question.optionsBn && <p>{practiceGuide}</p>}
            <QuestionVisual visual={question.visual} surface="answer"/>
            {(banglaMedium ? question.markingPointsBn : question.markingPoints) && <ol className="marking-breakdown">{(banglaMedium ? question.markingPointsBn : question.markingPoints)?.map((point) => <li key={point}>{point}</li>)}</ol>}
            {(banglaMedium ? question.modelAnswerBn : question.modelAnswer) && <details className="model-answer"><summary>{banglaMedium ? "পূর্ণাঙ্গ Model Answer দেখো" : "View complete model answer"}</summary><ModelAnswerBreakdown text={(banglaMedium ? question.modelAnswerBn : question.modelAnswer)!} bangla={banglaMedium} cq={question.type === "CQ"}/></details>}
            <div><button onClick={() => assess("review")}><RotateCcw size={16}/>{banglaMedium ? "আরও অনুশীলন" : "Practice again"}</button><button className="mastered" onClick={() => assess("mastered")}><Check size={16}/>{banglaMedium ? "বুঝেছি" : "Got it"}</button></div>
          </div>
        )}
      </section>
    </div>
  );
}

function Practice({ group }: { group: "commerce" | "humanities" }) {
  const [mode, setMode] = useState<"objective" | "custom" | "writing" | "archive">("objective");
  const [mcqView, setMcqView] = useState<"quick" | "custom">("quick");
  const [target, setTarget] = useState<PracticeTarget | null>(null);
  useEffect(() => {
    const key = `hsc2plus-${group}-practice-target`;
    const entryKey = `hsc2plus-${group}-practice-entry`;
    const restore = window.setTimeout(() => {
      try {
        const stored = JSON.parse(window.localStorage.getItem(key) ?? "null") as PracticeTarget | null;
        const entry = JSON.parse(window.localStorage.getItem(entryKey) ?? "null") as { mode?: "objective" | "custom" | "writing" | "archive" } | null;
        if (entry?.mode === "custom") { setMode("objective"); setMcqView("custom"); }
        else if (entry?.mode) setMode(entry.mode);
        if (stored?.subject && stored?.unit) {
          setTarget(stored);
          if (!entry?.mode) { setMode("objective"); setMcqView("custom"); }
          window.localStorage.removeItem(key);
        }
        window.localStorage.removeItem(entryKey);
      } catch {
        window.localStorage.removeItem(key);
        window.localStorage.removeItem(entryKey);
      }
    }, 0);
    return () => window.clearTimeout(restore);
  }, [group]);
  return (
    <div className="practice-hub">
      <header className="practice-purpose">
        <div><span className="eyebrow">PRACTICE STUDIO</span><h1 className="bangla-interface-title">Practice that knows where you need help.</h1><p>MCQ, লিখিত/CQ অথবা Question Archive—কাজ অনুযায়ী একটি পথ বেছে নাও।</p><div className="practice-promise"><span><CheckCircle2 size={14}/>Instant explanation</span><span><RotateCcw size={14}/>Mistake recovery</span><span><BarChart3 size={14}/>Progress report</span></div></div>
        <div className="practice-mode-switch" role="tablist" aria-label="অনুশীলনের ধরন">
          <button role="tab" aria-selected={mode === "objective" || mode === "custom"} className={mode === "objective" || mode === "custom" ? "active" : ""} onClick={() => setMode("objective")}><Brain size={18}/><span><strong>MCQ Practice</strong><small>Quick অথবা নিজের মতো প্রশ্নসেট</small></span></button>
          <button role="tab" aria-selected={mode === "writing"} className={mode === "writing" ? "active" : ""} onClick={() => setMode("writing")}><PenLine size={18}/><span><strong>Written / CQ & PDF</strong><small>বিষয় অনুযায়ী সঠিক লিখিত ধরন</small></span></button>
          <button role="tab" aria-selected={mode === "archive"} className={mode === "archive" ? "active" : ""} onClick={() => setMode("archive")}><FileText size={18}/><span><strong>Question Archive</strong><small>Board-pattern ও verified source</small></span></button>
        </div>
      </header>
      <div className="practice-active-route" role="status"><span>{mode === "objective" || mode === "custom" ? "01" : mode === "writing" ? "02" : "03"}</span><div><strong>{mode === "objective" || mode === "custom" ? mcqView === "quick" ? "Unlimited MCQ practice" : "Build a focused question set" : mode === "writing" ? "Subject-correct written practice" : "Search the question archive"}</strong><small>{mode === "objective" || mode === "custom" ? mcqView === "quick" ? "Start immediately and learn from every wrong answer." : "Choose subject, paper, chapter, difficulty and standard." : mode === "writing" ? "English writing, Bangla written tasks or ১+২+৩+৪ CQ—প্রশ্নের ধরন বিষয় অনুযায়ী বদলাবে।" : "Board-pattern practice এবং পূর্ণ source record থাকা authentic প্রশ্ন আলাদাভাবে দেখো।"}</small></div></div>
      <div role="tabpanel" className="practice-workspace">
        {(mode === "objective" || mode === "custom") ? <><div className="mcq-workspace-switch" role="group" aria-label="MCQ practice setup"><button className={mcqView === "quick" ? "active" : ""} onClick={() => setMcqView("quick")}><Brain size={17}/><span><strong>Quick & Unlimited</strong><small>সরাসরি প্রশ্ন শুরু করো</small></span></button><button className={mcqView === "custom" ? "active" : ""} onClick={() => setMcqView("custom")}><SlidersHorizontal size={17}/><span><strong>Build your set</strong><small>বিষয় · অধ্যায় · স্তর</small></span></button></div>{mcqView === "quick" ? <ObjectivePractice group={group}/> : <QuestionBankPractice group={group} target={target}/>}</> : mode === "writing" ? <ExamLibrary group={group} display="writingOnly" target={target}/> : <ExamLibrary group={group} display="archiveOnly"/>}
      </div>
    </div>
  );
}

type TestRecord = { date: string; score: number; total: number; duration: number; elapsedSeconds?: number; unanswered?: number; mode?: "mcq" | "cq" | "full"; cqAttempted?: number; cqScore?: number; cqTotal?: number; cqAssessed?: boolean; subject?: string };
type TestRecoveryItem = { id: string; subject: string; unit: string; topic: string; kind: "MCQ" | "CQ"; reason: "wrong" | "unanswered" | "incomplete" | "weak"; savedAt: string };
type ActiveTestSession = { version: 1; subject: string; paper?: "all" | "1st Paper" | "2nd Paper"; mode: "mcq" | "cq" | "full"; paperSize: "focus" | "standard" | "extended"; variant: number; phase: "running" | "review"; deadlineAt: number; startedAt: number; index: number; answers: Record<string, number>; cqParts: Record<string, boolean[]>; flagged: Record<string, boolean>; answerPdf: { name: string; size: number } | null };

function TestCenter({ group, onNavigate }: { group: "commerce" | "humanities"; onNavigate: (id: string) => void }) {
  const [testVariant, setTestVariant] = useState(0);
  const [testMode, setTestMode] = useState<"mcq" | "cq" | "full">("full");
  const [paperSize, setPaperSize] = useState<"focus" | "standard" | "extended">("extended");
  const testResources = completeExamLibraryByGroup[group];
  const testSubjects = useMemo(() => {
    return Array.from(new Set(testResources.map((resource) => resource.subject)));
  }, [testResources]);
  const [testSubject, setTestSubject] = useState(testSubjects[0]);
  useEffect(() => {
    if (testSubjects.length && !testSubjects.includes(testSubject)) setTestSubject(testSubjects[0]);
  }, [testSubject, testSubjects]);
  const selectedTestSubject = subjectsByGroup[group].find((subject) => subject.name === testSubject);
  const [testPaper, setTestPaper] = useState<"all" | "1st Paper" | "2nd Paper">("all");
  const paperAwareSubject = selectedTestSubject?.id === "bangla" || selectedTestSubject?.id === "english";
  const englishPaper = selectedTestSubject?.id === "english";
  const banglaSecondPaper = selectedTestSubject?.id === "bangla" && testPaper === "2nd Paper";
  const writtenPaper = englishPaper || banglaSecondPaper;
  const ictPaper = selectedTestSubject?.id === "ict";
  const blueprintKey = ictPaper ? "ict:all" : paperAwareSubject && testPaper !== "all" ? `${selectedTestSubject?.id}:${testPaper}` : "";
  const activePaperBlueprint = blueprintKey ? hscPaperBlueprints[blueprintKey] : undefined;
  const paperCounts = paperSize === "focus"
    ? writtenPaper ? { mcq: 0, cq: 3 } : ictPaper ? { mcq: 10, cq: 1 } : { mcq: 10, cq: 1 }
    : paperSize === "standard"
      ? writtenPaper ? { mcq: 0, cq: 6 } : ictPaper ? { mcq: 20, cq: 3 } : { mcq: 20, cq: 2 }
      : writtenPaper ? { mcq: 0, cq: activePaperBlueprint?.tasks?.length ?? 10 } : ictPaper ? { mcq: 25, cq: 5 } : { mcq: 30, cq: 7 };
  const eligibleTestResources = useMemo(() => testResources.filter((resource) => resource.subject === testSubject && (
    !paperAwareSubject || testPaper === "all" || !selectedTestSubject || chaptersBySubject[selectedTestSubject.id]?.find((chapter) => chapter.title === resource.unit)?.paper === testPaper
  )), [paperAwareSubject, selectedTestSubject, testPaper, testResources, testSubject]);
  useEffect(() => {
    if (paperAwareSubject && testPaper === "all") setTestPaper("1st Paper");
    if (writtenPaper && testMode !== "full") setTestMode("full");
  }, [paperAwareSubject, testMode, testPaper, writtenPaper]);
  const mcqQuestions = useMemo(() => {
    const pool = eligibleTestResources.flatMap((resource) => (resource.bank.questions ?? [])
      .filter((question) => !writtenPaper && question.type === "MCQ" && question.optionsBn && question.correctIndex !== undefined)
      .map((question, questionIndex) => ({
        key: `${resource.subject}:${resource.unit}:mcq:${questionIndex}:${question.prompt}`,
        subject: resource.subject,
        unit: resource.unit,
        topic: resource.subject === "English" ? resource.unit : resource.unitBn,
        question: resource.subject === "English" ? question.prompt : (question.promptBn ?? question.prompt),
        options: question.optionsBn!,
        answer: question.correctIndex!,
        explanation: resource.subject === "English" ? question.answerGuide : (question.answerGuideBn ?? question.answerGuide),
        isEnglish: resource.subject === "English",
      })));
    const uniquePool = [...new Map(pool.map((question) => [question.question.toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim(), question])).values()];
    const count = Math.min(paperCounts.mcq, uniquePool.length);
    const offset = uniquePool.length ? (testVariant * count) % uniquePool.length : 0;
    return Array.from({ length: count }, (_, index) => uniquePool[(offset + index) % uniquePool.length]);
  }, [eligibleTestResources, paperCounts.mcq, testVariant, writtenPaper]);
  const cqQuestions = useMemo(() => {
    const pool = eligibleTestResources.flatMap((resource) => (resource.bank.questions ?? [])
      .filter((question) => writtenPaper ? question.type === "Written" : question.type === "CQ")
      .map((question, questionIndex) => ({ ...question, subject: resource.subject, subjectBn: resource.subjectBn, unit: resource.unit, unitBn: resource.unitBn, key: `${resource.subject}:${resource.unit}:${questionIndex}:${question.prompt}` })));
    const uniquePool = [...new Map(pool.map((question) => [(question.promptBn ?? question.prompt).toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim(), question])).values()];
    const count = Math.min(paperCounts.cq, uniquePool.length);
    const offset = uniquePool.length ? (testVariant * count) % uniquePool.length : 0;
    return Array.from({ length: count }, (_, itemIndex) => {
      const question=uniquePool[(offset + itemIndex) % uniquePool.length];
      if (!writtenPaper) return question;
      const promptLabel = question.prompt.split("\n", 1)[0]?.replace(/\s*·\s*Practice set\s*\d+\s*$/i, "").trim();
      const task = activePaperBlueprint?.tasks?.find((candidate) => candidate.label.toLocaleLowerCase().includes((promptLabel ?? "").toLocaleLowerCase()) || (promptLabel ?? "").toLocaleLowerCase().includes(candidate.label.toLocaleLowerCase()));
      const cleanPrompt = question.prompt.includes("\n") ? question.prompt.slice(question.prompt.indexOf("\n") + 1) : question.prompt;
      return {...question,prompt:cleanPrompt,marks:task?.marks ?? question.marks,taskLabel:promptLabel || task?.label || "Written task",taskInstruction:task?.instruction ?? question.answerGuide};
    });
  }, [activePaperBlueprint, eligibleTestResources, paperCounts.cq, testVariant, writtenPaper]);
  const examItems = useMemo(() => [
    ...(testMode === "cq" ? [] : mcqQuestions.map((question) => ({ kind: "MCQ" as const, key: `mcq:${question.key}`, question }))),
    ...(testMode === "mcq" ? [] : cqQuestions.map((question) => ({ kind: "CQ" as const, key: `cq:${question.key}`, question }))),
  ], [testMode, mcqQuestions, cqQuestions]);
  const [phase, setPhase] = useState<"setup" | "running" | "review" | "result">("setup");
  const [seconds, setSeconds] = useState(90 * 60);
  const [deadlineAt, setDeadlineAt] = useState<number | null>(null);
  const [startedAt, setStartedAt] = useState<number | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [sessionNotice, setSessionNotice] = useState("");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [cqParts, setCqParts] = useState<Record<string, boolean[]>>({});
  const [cqPartScores, setCqPartScores] = useState<Record<string, number[]>>({});
  const [answerPdf, setAnswerPdf] = useState<{ name: string; size: number } | null>(null);
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [history, setHistory] = useState<TestRecord[]>([]);
  const [cqAssessmentSaved, setCqAssessmentSaved] = useState(false);
  const autoSubmittedRef = useRef(false);
  const activeSessionKey = `hsc2plus-${group}-active-test`;
  const mcqScore = mcqQuestions.filter((question) => answers[`mcq:${question.key}`] === question.answer).length;
  const mcqUnanswered = mcqQuestions.filter((question) => answers[`mcq:${question.key}`] === undefined).length;
  const cqAttempted = cqQuestions.filter((question) => (cqParts[`cq:${question.key}`] ?? []).some(Boolean)).length;
  const cqScore = cqQuestions.reduce((total, question) => total + (cqPartScores[`cq:${question.key}`] ?? []).reduce((partTotal, score) => partTotal + Math.max(0, score), 0), 0);
  const cqPartMax = [1, 2, 3, 4];
  const cqPartTotals = cqPartMax.map((max, partIndex) => ({
    part: ["ক", "খ", "গ", "ঘ"][partIndex],
    label: ["জ্ঞান", "অনুধাবন", "প্রয়োগ", "উচ্চতর দক্ষতা"][partIndex],
    score: cqQuestions.reduce((total, question) => total + Math.max(0, cqPartScores[`cq:${question.key}`]?.[partIndex] ?? 0), 0),
    maximum: max * cqQuestions.length,
  }));
  const totalScore = mcqScore + cqScore;
  const writtenMarks = cqQuestions.reduce((sum, question) => sum + (question.marks ?? 10), 0);
  const totalMarks = mcqQuestions.length + writtenMarks;
  const duration = paperSize === "extended" ? (activePaperBlueprint?.minutes ?? (ictPaper ? 150 : 180)) : writtenPaper ? (paperSize === "focus" ? 45 : 90) : mcqQuestions.length + cqQuestions.length * 20;
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        setHistory(JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-test-history`) ?? "[]"));
      } catch {
        window.localStorage.removeItem(`hsc2plus-${group}-test-history`);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [group]);
  useEffect(() => {
    const restore = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(activeSessionKey) ?? "null") as ActiveTestSession | null;
        if (!saved || saved.version !== 1 || !testSubjects.includes(saved.subject)) return;
        setTestSubject(saved.subject);
        if (saved.paper === "1st Paper" || saved.paper === "2nd Paper" || saved.paper === "all") setTestPaper(saved.paper);
        setTestMode(saved.mode);
        setPaperSize(saved.paperSize);
        setTestVariant(saved.variant);
        setDeadlineAt(saved.deadlineAt);
        setStartedAt(saved.startedAt);
        setIndex(Math.max(0, saved.index));
        setAnswers(saved.answers ?? {});
        setCqParts(saved.cqParts ?? {});
        setFlagged(saved.flagged ?? {});
        setAnswerPdf(saved.answerPdf ?? null);
        setSeconds(Math.max(0, Math.ceil((saved.deadlineAt - Date.now()) / 1000)));
        setSessionNotice(saved.deadlineAt <= Date.now() ? "সময় শেষ হয়েছে—সংরক্ষিত উত্তর স্বয়ংক্রিয়ভাবে জমা হচ্ছে।" : "আগের অসমাপ্ত পরীক্ষা ও উত্তরগুলো ফিরিয়ে আনা হয়েছে।");
        setPhase(saved.deadlineAt <= Date.now() ? "running" : saved.phase);
      } catch { window.localStorage.removeItem(activeSessionKey); }
    }, 0);
    return () => window.clearTimeout(restore);
  }, [activeSessionKey, testSubjects]);
  useEffect(() => {
    if ((phase !== "running" && phase !== "review") || !deadlineAt) return;
    const updateRemaining = () => setSeconds(Math.max(0, Math.ceil((deadlineAt - Date.now()) / 1000)));
    const timer = window.setInterval(updateRemaining, 500);
    const visible = () => updateRemaining();
    document.addEventListener("visibilitychange", visible);
    return () => { window.clearInterval(timer); document.removeEventListener("visibilitychange", visible); };
  }, [phase, deadlineAt]);
  useEffect(() => {
    if ((phase !== "running" && phase !== "review") || !deadlineAt || !startedAt) return;
    const session: ActiveTestSession = { version: 1, subject: testSubject, paper: testPaper, mode: testMode, paperSize, variant: testVariant, phase, deadlineAt, startedAt, index, answers, cqParts, flagged, answerPdf };
    window.localStorage.setItem(activeSessionKey, JSON.stringify(session));
  }, [activeSessionKey, answerPdf, answers, cqParts, deadlineAt, flagged, index, paperSize, phase, startedAt, testMode, testPaper, testSubject, testVariant]);
  const start = () => {
    const nextVariant = testVariant + 1;
    const nextStartedAt = Date.now();
    setTestVariant(nextVariant);
    setStartedAt(nextStartedAt);
    setDeadlineAt(nextStartedAt + duration * 60 * 1000);
    setSeconds(duration * 60);
    setElapsedSeconds(0);
    setAnswers({});
    setCqParts({});
    setCqPartScores({});
    setAnswerPdf(null);
    setFlagged({});
    setCqAssessmentSaved(false);
    setSessionNotice("পরীক্ষা স্বয়ংক্রিয়ভাবে এই ডিভাইসে সংরক্ষিত হচ্ছে।");
    autoSubmittedRef.current = false;
    setIndex(0);
    setPhase("running");
  };
  const submit = () => {
    const finalElapsedSeconds = startedAt ? Math.round(Math.min(duration * 60, Math.max(0, Date.now() - startedAt) / 1000)) : 0;
    setElapsedSeconds(finalElapsedSeconds);
    const record = {
      date: new Intl.DateTimeFormat("bn-BD", { day: "numeric", month: "short" }).format(new Date()),
      score: mcqScore,
      total: totalMarks,
      duration,
      elapsedSeconds: finalElapsedSeconds,
      unanswered: mcqUnanswered + cqQuestions.filter((question) => !(cqParts[`cq:${question.key}`] ?? []).every(Boolean)).length,
      mode: testMode,
      cqAttempted,
      cqScore: 0,
      cqTotal: writtenMarks,
      cqAssessed: cqQuestions.length === 0,
      subject: testSubject,
    };
    const nextHistory = [record, ...history].slice(0, 5);
    setHistory(nextHistory);
    window.localStorage.setItem(`hsc2plus-${group}-test-history`, JSON.stringify(nextHistory));
    const recoveryKey = `hsc2plus-${group}-test-recovery`;
    let existingRecovery: TestRecoveryItem[] = [];
    try { existingRecovery = JSON.parse(window.localStorage.getItem(recoveryKey) ?? "[]"); } catch { existingRecovery = []; }
    const mcqRecovery: TestRecoveryItem[] = mcqQuestions.filter((question) => answers[`mcq:${question.key}`] !== question.answer).map((question) => ({ id: `mcq:${question.key}`, subject: question.subject, unit: question.unit, topic: question.topic, kind: "MCQ", reason: answers[`mcq:${question.key}`] === undefined ? "unanswered" : "wrong", savedAt: new Date().toISOString() }));
    const cqRecovery: TestRecoveryItem[] = cqQuestions.filter((question) => !(cqParts[`cq:${question.key}`] ?? []).every(Boolean)).map((question) => ({ id: `cq:${question.key}`, subject: question.subject, unit: question.unit, topic: question.subject === "English" ? question.unit : question.unitBn, kind: "CQ", reason: (cqParts[`cq:${question.key}`] ?? []).some(Boolean) ? "incomplete" : "unanswered", savedAt: new Date().toISOString() }));
    const recoveryMap = new Map(existingRecovery.map((item) => [item.id, item]));
    [...mcqRecovery, ...cqRecovery].forEach((item) => recoveryMap.set(item.id, item));
    window.localStorage.setItem(recoveryKey, JSON.stringify([...recoveryMap.values()].slice(-80)));
    window.localStorage.removeItem(activeSessionKey);
    window.dispatchEvent(new Event("hsc2plus-progress"));
    setPhase("result");
  };
  const submitEvent = useEffectEvent(submit);
  const finalizeCqAssessment = () => {
    const everyPartAssessed = cqQuestions.every((question) => {
      const scores = cqPartScores[`cq:${question.key}`] ?? [];
      return writtenPaper ? scores.length === 1 && scores[0] >= 0 : scores.length === 4 && scores.every((score) => score >= 0);
    });
    if (!cqQuestions.length || !everyPartAssessed) return;
    const updatedRecord: TestRecord = { ...(history[0] ?? { date: new Intl.DateTimeFormat("bn-BD", { day: "numeric", month: "short" }).format(new Date()), duration, mode: testMode, subject: testSubject, cqAttempted }), score: totalScore, total: totalMarks, cqScore, cqTotal: writtenMarks, cqAssessed: true };
    const nextHistory = [updatedRecord, ...history.slice(1)].slice(0, 5);
    setHistory(nextHistory);
    window.localStorage.setItem(`hsc2plus-${group}-test-history`, JSON.stringify(nextHistory));
    const recoveryKey = `hsc2plus-${group}-test-recovery`;
    let existingRecovery: TestRecoveryItem[] = [];
    try { existingRecovery = JSON.parse(window.localStorage.getItem(recoveryKey) ?? "[]"); } catch { existingRecovery = []; }
    const recoveryMap = new Map(existingRecovery.map((item) => [item.id, item]));
    cqQuestions.forEach((question) => {
      const key = `cq:${question.key}`;
      const score = (cqPartScores[key] ?? []).reduce((sum, value) => sum + value, 0);
      const recoveryId = `cqweak:${question.key}`;
      if (score < (question.marks ?? 10) * .7) recoveryMap.set(recoveryId, { id: recoveryId, subject: question.subject, unit: question.unit, topic: question.subject === "English" ? question.unit : question.unitBn, kind: "CQ", reason: "weak", savedAt: new Date().toISOString() });
      else recoveryMap.delete(recoveryId);
    });
    window.localStorage.setItem(recoveryKey, JSON.stringify([...recoveryMap.values()].slice(-80)));
    window.dispatchEvent(new Event("hsc2plus-progress"));
    setCqAssessmentSaved(true);
  };
  useEffect(() => {
    if ((phase !== "running" && phase !== "review") || seconds !== 0 || autoSubmittedRef.current) return;
    autoSubmittedRef.current = true;
    const autoSubmit = window.setTimeout(() => submitEvent(), 0);
    return () => window.clearTimeout(autoSubmit);
  }, [phase, seconds]);
  const examPrintPaper = (
    <article className="exam-print-paper" aria-hidden="true">
      <header><span>HSC2Plus · ORIGINAL BOARD-PATTERN PRACTICE</span><h1>{testSubject === "English" ? `English ${testPaper === "2nd Paper" ? "2nd" : "1st"} Paper Model Test` : `${selectedTestSubject?.nameBn ?? testSubject} মডেল টেস্ট`}</h1><p>{writtenPaper ? `${cqQuestions.length} written tasks` : `${mcqQuestions.length} MCQ + ${cqQuestions.length} CQ`} · {totalMarks} marks · {duration} minutes</p></header>
      <section className="exam-print-instructions"><strong>Instructions</strong>{mcqQuestions.length > 0 && <span>MCQ: choose one answer for each question.</span>}<span>{writtenPaper ? "Complete the reading, grammar or writing tasks according to their individual instructions." : "CQ: answer all four parts—১+২+৩+৪."}</span><span>Questions are original practice written in board pattern; they are not claimed as previous-board questions.</span></section>
      {mcqQuestions.length > 0 && <section><h2>Part A · MCQ · {mcqQuestions.length} marks</h2>{mcqQuestions.map((question, questionIndex)=><article className="exam-print-question" key={question.key}><strong>{questionIndex+1}. {question.question}</strong><div>{question.options.map((option, optionIndex)=><span key={option}><b>{question.isEnglish ? ["A","B","C","D"][optionIndex] : ["ক","খ","গ","ঘ"][optionIndex]}.</b> {option}</span>)}</div></article>)}</section>}
      {cqQuestions.length > 0 && <section className="exam-print-cq"><h2>{writtenPaper ? "Written tasks" : "Part B · CQ"} · {writtenMarks} marks</h2>{cqQuestions.map((question, questionIndex)=><article className="exam-print-question" key={question.key}><strong>{questionIndex+1}. {"taskLabel" in question ? String(question.taskLabel) : question.subject === "English" ? question.unit : question.unitBn} · {question.marks ?? 10} marks</strong>{"taskInstruction" in question&&<small>{String(question.taskInstruction)}</small>}<p style={{whiteSpace:"pre-line"}}>{question.subject === "English" ? question.prompt : (question.promptBn ?? question.prompt)}</p><QuestionVisual visual={question.visual} surface="question"/></article>)}</section>}
      <section className="exam-print-answer-grid"><h2>MCQ answer grid</h2><div>{mcqQuestions.map((_, questionIndex)=><span key={questionIndex}>{questionIndex+1}. □ ক/A&nbsp; □ খ/B&nbsp; □ গ/C&nbsp; □ ঘ/D</span>)}</div></section>
      <footer>© 2026 HSC2Plus · Personal educational use only · Page <span className="print-page-number"/></footer>
    </article>
  );
  if (phase === "setup") {
    return (
      <div className="page-shell test-center-page">
        <section className="page-title">
          <span className="eyebrow">EXAM CENTER</span>
          <h1>প্রতিটি বিষয়ের নিজস্ব প্রশ্নকাঠামোয় পরীক্ষা।</h1>
          <p>English, বাংলা, ICT ও বিভাগীয় বিষয়ের প্রশ্নপদ্ধতি এক নয়। নির্বাচিত বিষয় ও পত্র অনুযায়ী প্রশ্ন, নম্বর এবং সময় স্বয়ংক্রিয়ভাবে বদলাবে।</p>
        </section>
        <div className="test-setup-layout">
          <section className="test-setup-card">
            <span className="section-kicker"><Clock3 size={15}/> TIMED MOCK</span>
            <h2>{testSubject === "English" ? "English Model Test" : `${selectedTestSubject?.nameBn ?? testSubject} Model Test`}</h2>
            <p>{writtenPaper ? `${cqQuestions.length}টি Reading/Grammar/Writing task · মোট ${totalMarks} নম্বর` : testMode === "mcq" ? `${mcqQuestions.length}টি MCQ · ${mcqQuestions.length} নম্বর` : testMode === "cq" ? `${cqQuestions.length}টি CQ · ${writtenMarks} নম্বর` : `${mcqQuestions.length}টি MCQ + ${cqQuestions.length}টি CQ · মোট ${totalMarks} নম্বর`} · প্রতিবার নতুন প্রশ্নসেট</p>
            {paperSize === "extended" && activePaperBlueprint && <section className="exam-pattern-panel" aria-label="নির্বাচিত পত্রের প্রশ্নকাঠামো">
              <header><div><span>QUESTION BLUEPRINT</span><strong>{testSubject === "English" ? "Task-by-task marks" : "প্রশ্ন ও নম্বর বণ্টন"}</strong></div><b>{activePaperBlueprint.total}</b></header>
              {(activePaperBlueprint.mcq||activePaperBlueprint.cq)&&<div className="exam-pattern-summary">
                {activePaperBlueprint.mcq&&<article><span>MCQ</span><strong>{activePaperBlueprint.mcq.answer} × 1 = {activePaperBlueprint.mcq.marks}</strong><small>{activePaperBlueprint.mcq.shown===activePaperBlueprint.mcq.answer?"সবগুলোর উত্তর আবশ্যক":`${activePaperBlueprint.mcq.shown}টি থাকবে · ${activePaperBlueprint.mcq.answer}টির উত্তর`}</small></article>}
                {activePaperBlueprint.cq&&<article><span>CQ</span><strong>{activePaperBlueprint.cq.answer} × {activePaperBlueprint.cq.marksEach} = {activePaperBlueprint.cq.answer*activePaperBlueprint.cq.marksEach}</strong><small>{activePaperBlueprint.cq.shown}টি থাকবে · {activePaperBlueprint.cq.answer}টির উত্তর</small></article>}
                {activePaperBlueprint.practicalMarks&&<article><span>PRACTICAL</span><strong>{activePaperBlueprint.practicalMarks} marks</strong><small>তত্ত্বীয় পরীক্ষার বাইরে আলাদা মূল্যায়ন</small></article>}
              </div>}
              {activePaperBlueprint.tasks&&<details><summary>{activePaperBlueprint.tasks.length}টি task ও আলাদা নম্বর দেখো <ChevronRight size={16}/></summary><div className="exam-task-map">{activePaperBlueprint.tasks.map((task,index)=><article key={`${task.label}-${index}`}><b>{String(index+1).padStart(2,"0")}</b><div><strong>{task.label}</strong><small>{task.instruction}</small></div><em>{task.marks}</em></article>)}</div></details>}
              <footer><span>{activePaperBlueprint.evidence.label}</span><small>{activePaperBlueprint.warning}</small></footer>
            </section>}
            <div className="test-subject-picker"><label htmlFor="test-subject">Subject</label><select id="test-subject" value={testSubject} onChange={(event) => { const next=event.target.value; const nextId=subjectsByGroup[group].find(item=>item.name===next)?.id; setTestSubject(next); setTestPaper(nextId==="bangla"||nextId==="english"?"1st Paper":"all"); setTestMode("full"); setTestVariant((value) => value + 1); }}>{testSubjects.map((subject) => { const detail = subjectsByGroup[group].find((item) => item.name === subject); return <option key={subject} value={subject}>{subject === "English" ? subject : (detail?.nameBn ?? subject)}</option>; })}</select><span>{eligibleTestResources.length} {testSubject === "English" ? "chapters covered" : "টি অধ্যায় কভার করা হয়েছে"}</span></div>
            {paperAwareSubject && <div className="test-paper-picker" role="group" aria-label={testSubject === "English" ? "Choose English paper" : "বাংলা পত্র নির্বাচন"}>{([['1st Paper',testSubject === "English" ? '1st Paper' : '১ম পত্র'],['2nd Paper',testSubject === "English" ? '2nd Paper' : '২য় পত্র']] as const).map(([paper,label]) => <button type="button" key={paper} className={testPaper === paper ? "active" : ""} aria-pressed={testPaper === paper} onClick={() => { setTestPaper(paper); setTestMode("full"); setTestVariant((value) => value + 1); }}>{label}</button>)}</div>}
            {!writtenPaper && <fieldset className="test-mode-picker">
              <legend>Exam format</legend>
              {([['mcq','MCQ Paper','Objective · auto-marked'],['cq','CQ Paper','১+২+৩+৪ · লিখিত'],['full','Full Model Test','MCQ + CQ · real flow']] as const).map(([mode,label,detail]) => <label key={mode} className={testMode === mode ? "active" : ""}><input type="radio" name="test-mode" checked={testMode === mode} onChange={() => setTestMode(mode)}/><strong>{label}</strong><span>{detail}</span></label>)}
            </fieldset>}
            <fieldset className="paper-size-picker">
              <legend>Paper length</legend>
              {([['focus','Focused'],['standard','Standard'],['extended','Board Full Paper']] as const).map(([size,label]) => <label key={size} className={paperSize === size ? "active" : ""}><input type="radio" name="paper-size" checked={paperSize === size} onChange={() => setPaperSize(size)}/><span><strong>{label}</strong><small>{writtenPaper ? `${size==="focus"?3:size==="standard"?6:(activePaperBlueprint?.tasks?.length??10)} written tasks` : ictPaper ? `${size==="focus"?"10 MCQ + 1 CQ":size==="standard"?"20 MCQ + 3 CQ":"25 MCQ + 5 CQ · 75 theory marks"}` : testMode === "mcq" ? `${paperCounts.mcq} MCQ` : testMode === "cq" ? `${paperCounts.cq} CQ` : `${paperCounts.mcq} MCQ + ${paperCounts.cq} CQ`}</small></span></label>)}
            </fieldset>
            <div className="board-time-allocation"><Clock3 size={22}/><div><span>BOARD-PATTERN TIME</span><strong>{duration} মিনিট স্বয়ংক্রিয়ভাবে নির্ধারিত</strong><small>{writtenPaper ? "English/Bangla written paper · paper-specific task flow" : ictPaper && paperSize==="extended" ? "ICT theory: ২৫ MCQ + ৫ CQ · practical assessment আলাদা" : testMode === "full" && paperSize === "extended" ? "MCQ ৩০ মিনিট + CQ ১৫০ মিনিট · ৩০ + ৭০ = ১০০ নম্বর" : <>{mcqQuestions.length ? `${mcqQuestions.length} MCQ × ১ মিনিট` : ""}{mcqQuestions.length && cqQuestions.length ? " + " : ""}{cqQuestions.length ? `${cqQuestions.length} CQ × ২০ মিনিট` : ""}</>}</small></div></div>
            <div className="exam-start-checklist"><strong>শুরু করার আগে</strong>{mcqQuestions.length>0&&<span><Check size={14}/>MCQ-এর উত্তর সরাসরি নির্বাচন করবে</span>}<span><Check size={14}/>{writtenPaper?"প্রতিটি task-এর instruction, format ও marks দেখে উত্তর লিখবে":"CQ খাতায় লিখে ক, খ, গ ও ঘ সম্পন্ন হলে চিহ্ন দেবে"}</span><span><Check size={14}/>জমা দেওয়ার আগে চূড়ান্ত যাচাইয়ের পর্দায় বাদ পড়া প্রশ্ন দেখবে</span></div>
            <button className="primary-button full" onClick={start}>পরীক্ষা শুরু করো <ArrowRight size={17}/></button>
          </section>
          <aside className="test-side-rail">
            <section className="test-plan-summary" aria-live="polite">
              <span className="eyebrow">YOUR EXAM PLAN</span>
              <h2>পরীক্ষার আগে এক নজরে</h2>
              <div className="test-plan-subject"><span>{testSubject === "English" ? testSubject : (selectedTestSubject?.nameBn ?? testSubject)}{paperAwareSubject ? ` · ${testPaper === "2nd Paper" ? (testSubject === "English" ? "2nd Paper" : "২য় পত্র") : (testSubject === "English" ? "1st Paper" : "১ম পত্র")}` : ""}</span><strong>{totalMarks}<small> নম্বর</small></strong></div>
              <div className="test-plan-metrics"><span><Clock3 size={16}/><b>{duration}</b><small>মিনিট</small></span>{mcqQuestions.length > 0 && <span><ListChecks size={16}/><b>{mcqQuestions.length}</b><small>MCQ</small></span>}{cqQuestions.length > 0 && <span><PenLine size={16}/><b>{cqQuestions.length}</b><small>{writtenPaper ? "Task" : "CQ"}</small></span>}</div>
              <div className="test-report-preview"><strong>পরীক্ষা শেষে পাবে</strong><span><CheckCircle2 size={15}/> ভুল ও বাদ পড়া প্রশ্ন</span><span><CheckCircle2 size={15}/> অধ্যায়ভিত্তিক প্রস্তুতির মান</span><span><CheckCircle2 size={15}/> সময় ব্যবহারের বিশ্লেষণ</span><span><CheckCircle2 size={15}/> পরবর্তী Revision Plan</span></div>
            </section>
            <section className="test-history surface compact">
              <span className="eyebrow">RECENT TESTS</span>
              <h2>সাম্প্রতিক পরীক্ষার ফল</h2>
              {history.length ? history.map((record, itemIndex) => (
                <div key={`${record.date}-${itemIndex}`}>
                  <span>{record.date} · {record.subject ?? "মিশ্র বিষয়"}<small>{record.duration} মিনিট · {record.mode === "cq" ? "CQ" : record.mode === "full" ? "পূর্ণাঙ্গ পরীক্ষা" : "MCQ"}</small></span>
                  <strong>{record.cqTotal && !record.cqAssessed ? "যাচাই বাকি" : `${record.score}/${record.total}`}</strong>
                </div>
              )) : <div className="test-history-empty"><BarChart3 size={24}/><strong>প্রথম পরীক্ষার রিপোর্ট এখানে থাকবে</strong><p>Score, ভুলের ধরন, সময় ব্যবহার ও কোন অধ্যায় আগে পড়বে—সব একসঙ্গে দেখতে পারবে।</p></div>}
            </section>
          </aside>
        </div>
      </div>
    );
  }
  if (phase === "review") {
    const completedCount = examItems.filter((item) => item.kind === "MCQ" ? answers[item.key] !== undefined : (cqParts[item.key] ?? []).every(Boolean)).length;
    const partialCount = examItems.filter((item) => item.kind === "CQ" && (cqParts[item.key] ?? []).some(Boolean) && !(cqParts[item.key] ?? []).every(Boolean)).length;
    return <div className="page-shell exam-print-host"><section className="exam-review-screen"><header><span className="eyebrow">চূড়ান্ত যাচাই</span><h1>জমা দেওয়ার আগে একবার যাচাই করো</h1><p>জমা দেওয়ার পর উত্তর পরিবর্তন করা যাবে না। অসম্পূর্ণ বা পরে দেখার জন্য রাখা প্রশ্নে ফিরতে প্রশ্ন নম্বরে চাপ দাও।</p></header><div className="exam-review-stats"><span><strong>{completedCount}</strong><small>সম্পূর্ণ</small></span><span><strong>{examItems.length - completedCount}</strong><small>অসম্পূর্ণ</small></span><span><strong>{partialCount}</strong><small>আংশিক CQ</small></span><span><strong>{Object.values(flagged).filter(Boolean).length}</strong><small>আবার দেখবে</small></span></div><div className="exam-review-legend"><span className="complete">সম্পূর্ণ</span><span className="partial">আংশিক</span><span className="incomplete">উত্তর নেই</span><span className="flagged">আবার দেখবে</span></div><div className="exam-review-grid">{examItems.map((reviewItem,itemIndex)=>{const complete=reviewItem.kind === "MCQ" ? answers[reviewItem.key] !== undefined : (cqParts[reviewItem.key] ?? []).every(Boolean);const partial=reviewItem.kind === "CQ" && (cqParts[reviewItem.key] ?? []).some(Boolean) && !complete;return <button key={reviewItem.key} className={`${complete ? "complete" : partial ? "partial" : "incomplete"} ${flagged[reviewItem.key] ? "flagged" : ""}`} onClick={()=>{setIndex(itemIndex);setPhase("running");}}><strong>{itemIndex+1}</strong><span>{reviewItem.kind}{flagged[reviewItem.key] ? " · আবার দেখবে" : complete ? " · সম্পূর্ণ" : partial ? " · আংশিক" : " · উত্তর নেই"}</span></button>})}</div><div className="exam-review-actions"><button className="secondary-button" onClick={()=>setPhase("running")}>পরীক্ষায় ফিরে যাও</button><button className="secondary-button" onClick={()=>window.print()}><Download size={15}/> প্রশ্নপত্রের PDF</button><button className="primary-button" onClick={submit}>পরীক্ষা জমা দাও</button></div></section>{examPrintPaper}</div>;
  }
  if (phase === "result") {
    const cqAssessmentComplete = cqQuestions.length === 0 || (cqAssessmentSaved && cqQuestions.every((question) => (cqPartScores[`cq:${question.key}`] ?? []).length === (writtenPaper ? 1 : 4)));
    const percent = cqAssessmentComplete ? Math.round((totalScore / Math.max(1, totalMarks)) * 100) : Math.round((mcqScore / Math.max(1, mcqQuestions.length)) * 100);
    const topicStats = Array.from(new Set(mcqQuestions.map((question) => question.topic))).map((topic) => { const items = mcqQuestions.filter((question) => question.topic === topic); const correct = items.filter((question) => answers[`mcq:${question.key}`] === question.answer).length; return { topic, correct, total: items.length, percent: Math.round((correct / Math.max(1, items.length)) * 100) }; }).sort((a, b) => a.percent - b.percent);
    const weakestTopic = topicStats[0];
    const incorrectCount = mcqQuestions.length - mcqScore - mcqUnanswered;
    const cqIncomplete = cqQuestions.filter((question) => !(cqParts[`cq:${question.key}`] ?? []).every(Boolean)).length;
    const timeUsedMinutes = Math.max(1, Math.round(elapsedSeconds / 60));
    const timeUseAdvice = timeUsedMinutes > duration * .95 ? "শেষ ৫% সময়ের আগে উত্তর শেষ করার অনুশীলন করো" : timeUsedMinutes < duration * .55 && (mcqUnanswered + cqIncomplete) > 0 ? "দ্রুত শেষ হলেও বাদ পড়া প্রশ্ন যাচাই করো" : "সময় বণ্টন নিয়ন্ত্রিত ছিল";
    const weakestQuestion = weakestTopic ? mcqQuestions.find((question) => question.topic === weakestTopic.topic) : undefined;
    const openWeakPractice = () => {
      if (weakestQuestion) window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: weakestQuestion.subject, unit: weakestQuestion.unit, source: "recovery" } satisfies PracticeTarget));
      onNavigate("practice");
    };
    return (
      <div className="page-shell">
        <section className="session-result test-result">
          <div className="report-print-action"><button className="secondary-button" onClick={()=>window.print()}><Download size={15}/> ফলাফলের PDF</button></div>
          <span className="eyebrow">EXAM REPORT</span>
          <div className="result-score"><Ring value={percent} size={116}/></div>
          <h1>{!cqAssessmentComplete ? "MCQ ফল প্রস্তুত—CQ যাচাই বাকি।" : percent >= 80 ? "দারুণ প্রস্তুতি!" : percent >= 60 ? "ভালো ভিত্তি তৈরি হয়েছে।" : "মনোযোগ দিয়ে পুনরাবৃত্তি করলে উন্নতি হবে।"}</h1>
          <p>{mcqQuestions.length ? `MCQ ${mcqScore}/${mcqQuestions.length} · ${mcqUnanswered}টি উত্তর দেওয়া হয়নি` : ""}{cqQuestions.length ? ` · CQ ${cqAttempted}/${cqQuestions.length}টি লেখা হয়েছে${cqAssessmentComplete ? ` · প্রাপ্ত নম্বর ${cqScore}/${cqQuestions.length * 10}` : " · মূল্যায়ন শেষ হলে মোট ফল পাওয়া যাবে"}` : ""}</p>
          {!cqAssessmentComplete && <aside className="provisional-result-note"><CircleAlert size={20}/><div><strong>এটি এখন শুধু MCQ-এর ফল</strong><span>নিচে প্রতিটি CQ-এর ক, খ, গ ও ঘ অংশ Model Answer-এর সঙ্গে মিলিয়ে নম্বর দাও। এরপর ১০০ নম্বরের পূর্ণ ফল ও অধ্যায়ভিত্তিক Recovery Plan সংরক্ষিত হবে।</span></div></aside>}
          <section className="exam-performance-report">
            <header><span className="eyebrow">PERFORMANCE REPORT</span><h2>কোথায় ভুল হয়েছে, এখন কী করবে</h2><p>তোমার উত্তর, বাদ পড়া প্রশ্ন এবং অধ্যায়ভিত্তিক ফল বিশ্লেষণ করে এই রিপোর্ট তৈরি হয়েছে।</p></header>
            <div><article><span>ভুল MCQ</span><strong>{incorrectCount}</strong><small>ধারণা ও বিকল্প বাছাইয়ের নিয়ম আবার দেখো</small></article><article><span>অসম্পূর্ণ/উত্তর নেই</span><strong>{mcqUnanswered + cqIncomplete}</strong><small>সময় বণ্টন ও প্রশ্ন বদলের অভ্যাস উন্নত করো</small></article><article><span>সময় ব্যবহার</span><strong>{timeUsedMinutes}/{duration} মিনিট</strong><small>{timeUseAdvice}</small></article><article><span>আগে যে বিষয়ে কাজ করবে</span><strong>{weakestTopic?.topic ?? (cqQuestions.length ? "CQ কাঠামো" : "রিভিশন")}</strong><small>{weakestTopic ? `${weakestTopic.correct}/${weakestTopic.total}টি সঠিক` : "১+২+৩+৪ কাঠামো যাচাই করো"}</small></article></div>
            <ul><li>{weakestTopic ? <><strong>{weakestTopic.topic}</strong> অধ্যায়ের নোট পড়ো, দ্রুত রিভিশন দাও, তারপর আবার প্রশ্ন অনুশীলন করো।</> : writtenPaper ? "মডেল উত্তর ও task-specific rubric-এর সঙ্গে নিজের লেখা মিলিয়ে নম্বর দাও।" : "মডেল উত্তরের সঙ্গে নিজের CQ মিলিয়ে প্রতিটি অংশে কত নম্বর পেয়েছ লিখে রাখো।"}</li>{mcqUnanswered > 0 && <li>{mcqUnanswered}টি MCQ-এর উত্তর দেওয়া হয়নি। পরের পরীক্ষায় শেষ ৫ মিনিট উত্তরগুলো যাচাইয়ের জন্য রাখো।</li>}{incorrectCount > 0 && <li>ভুল হওয়া প্রতিটি MCQ-তে সঠিক উত্তরটির পাশাপাশি অন্য বিকল্পগুলো কেন ভুল, সেটিও বোঝার চেষ্টা করো।</li>}{cqQuestions.length > 0 && <li>{writtenPaper ? "প্রতিটি task-এ instruction, format, content, organisation ও language accuracy আলাদাভাবে যাচাই করো।" : "CQ-তে ক ও খ সংক্ষিপ্ত রাখো; গ-তে প্রয়োগ এবং ঘ-তে যুক্তি ও সিদ্ধান্ত স্পষ্টভাবে লেখো।"}</li>}</ul>
          </section>
          {topicStats.length > 0 && <section className="chapter-performance-table"><header><span className="eyebrow">CHAPTER BREAKDOWN</span><h2>অধ্যায়ভিত্তিক MCQ ফল</h2><p>কম নম্বর পাওয়া অধ্যায় আগে পড়ো; তারপর শুধু সেই অধ্যায়ের প্রশ্ন অনুশীলন করো।</p></header><div>{topicStats.map((topic) => <article key={topic.topic} className={topic.percent < 60 ? "needs-focus" : ""}><span><strong>{topic.topic}</strong><small>{topic.correct}/{topic.total}টি সঠিক</small></span><div><i style={{width:`${topic.percent}%`}}/></div><b>{topic.percent}%</b></article>)}</div>{weakestQuestion && <button className="secondary-button" onClick={openWeakPractice}>দুর্বল অধ্যায়ের প্রশ্ন অনুশীলন করো</button>}</section>}
          {cqQuestions.length > 0 && (
            <section className="cq-result-review">
              <header><span className="eyebrow">{writtenPaper ? "WRITTEN SELF-ASSESSMENT" : "CQ SELF-ASSESSMENT"}</span><h2>{writtenPaper ? "প্রতিটি task-এর rubric ধরে নিজের লেখা যাচাই করো" : "১+২+৩+৪ নম্বর ধরে নিজের উত্তর যাচাই করো"}</h2><p>{writtenPaper ? "Content, organisation, format ও language accuracy মিলিয়ে task-এর পূর্ণ নম্বরের মধ্যে score দাও।" : "খাতা বা যুক্ত করা PDF-এর উত্তর পূর্ণাঙ্গ Model Answer ও মূল্যায়ন নির্দেশিকার সঙ্গে মিলিয়ে প্রতিটি অংশে আলাদা নম্বর দাও।"}</p></header>
              {!writtenPaper && <div className="cq-weakness-map">
                {cqPartTotals.map((part) => {
                  const partPercent = Math.round((part.score / Math.max(1, part.maximum)) * 100);
                  return <article key={part.part} className={partPercent < 60 ? "needs-focus" : ""}><span>{part.part}</span><div><strong>{part.label}</strong><small>{part.score} of {part.maximum} নম্বর</small><div><i style={{ width: `${partPercent}%` }}/></div></div><b>{partPercent}%</b></article>;
                })}
              </div>}
              {cqQuestions.map((question, cqIndex) => {
                const key = `cq:${question.key}`;
                const bangla = question.subject !== "English";
                const partScores = cqPartScores[key] ?? [];
                const cqTotal = partScores.reduce((sum, score) => sum + Math.max(0, score), 0);
                return (
                  <article key={key}>
                    <div className="cq-result-head"><span>{cqIndex + 1}</span><div><strong>{bangla ? (question.subjectBn ?? question.subject) : question.subject} · {bangla ? question.unitBn : question.unit}</strong><p>{bangla ? (question.promptBn ?? question.prompt) : question.prompt}</p></div><div className="cq-total-score"><small>মোট</small><strong>{cqTotal}/{question.marks ?? 10}</strong></div></div>
                    {writtenPaper ? <div className="cq-part-scoring"><label><span><b>Score</b>Task rubric</span><select aria-label="Written task score" value={partScores[0] ?? ""} onChange={(event)=>{setCqAssessmentSaved(false);setCqPartScores(current=>({...current,[key]:[Number(event.target.value)]}));}}><option value="" disabled>নম্বর দাও</option>{Array.from({length:(question.marks??10)+1},(_,value)=><option key={value} value={value}>{value}/{question.marks??10}</option>)}</select></label></div> : <div className="cq-part-scoring">{([['ক','জ্ঞান',1],['খ','অনুধাবন',2],['গ','প্রয়োগ',3],['ঘ','উচ্চতর দক্ষতা',4]] as const).map(([part, skill, max], partIndex) => <label key={part}><span><b>{part}</b>{bangla ? skill : ['Knowledge','Understanding','Application','Higher order'][partIndex]}</span><select aria-label={`${part} score`} value={partScores[partIndex] ?? ""} onChange={(event) => { setCqAssessmentSaved(false); setCqPartScores((current) => { const next = [...(current[key] ?? [-1,-1,-1,-1])]; next[partIndex] = Number(event.target.value); return { ...current, [key]: next }; }); }}><option value="" disabled>নম্বর দাও</option>{Array.from({ length: max + 1 }, (_, scoreValue) => <option key={scoreValue} value={scoreValue}>{scoreValue}/{max}</option>)}</select></label>)}</div>}
                    <details><summary>পূর্ণাঙ্গ উত্তর ও নম্বর নির্দেশিকা দেখো</summary><QuestionVisual visual={question.visual} surface="answer"/><p>{bangla ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p>{(bangla ? question.markingPointsBn : question.markingPoints) && <ol>{(bangla ? question.markingPointsBn : question.markingPoints)?.map((point) => <li key={point}>{point}</li>)}</ol>}{(bangla ? question.modelAnswerBn : question.modelAnswer) && <ModelAnswerBreakdown text={(bangla ? question.modelAnswerBn : question.modelAnswer)!} bangla={bangla} cq/>}</details>
                  </article>
                );
              })}
              <div className="cq-assessment-save"><div><strong>{cqAssessmentSaved ? (writtenPaper ? "লিখিত মূল্যায়ন সংরক্ষিত হয়েছে" : "CQ মূল্যায়ন সংরক্ষিত হয়েছে") : "সব উত্তর যাচাই শেষ?"}</strong><span>{cqAssessmentSaved ? "পূর্ণ ফল, পরীক্ষার ইতিহাস ও পরবর্তী অনুশীলনের তালিকা আপডেট হয়েছে।" : writtenPaper ? "প্রতিটি written task-এর score দিলে পূর্ণ ফল সংরক্ষণ করতে পারবে।" : "প্রতিটি CQ-এর ক, খ, গ ও ঘ অংশে পাওয়া নম্বর লিখলে পূর্ণ ফল সংরক্ষণ করতে পারবে।"}</span></div><button className="primary-button" disabled={!cqQuestions.every((question) => { const scores = cqPartScores[`cq:${question.key}`] ?? []; return writtenPaper ? scores.length===1&&scores[0]>=0 : scores.length === 4 && scores.every((score) => score >= 0); }) || cqAssessmentSaved} onClick={finalizeCqAssessment}>{cqAssessmentSaved ? "সংরক্ষিত" : "পূর্ণ ফল সংরক্ষণ করো"}</button></div>
            </section>
          )}
          <div className="test-review-list">
            {mcqQuestions.map((question, itemIndex) => (
              <details key={question.key} className={answers[`mcq:${question.key}`] === question.answer ? "correct-answer" : answers[`mcq:${question.key}`] === undefined ? "unanswered-answer" : "wrong-answer"}>
                <summary><span>{itemIndex + 1}</span>{answers[`mcq:${question.key}`] === question.answer ? "সঠিক" : answers[`mcq:${question.key}`] === undefined ? "উত্তর দেওয়া হয়নি" : "পুনরাবৃত্তি প্রয়োজন"} · {question.topic}</summary>
                <p>{question.question}</p>
                <div className="mcq-answer-comparison"><span>তোমার উত্তর: <strong>{answers[`mcq:${question.key}`] === undefined ? "উত্তর দেওয়া হয়নি" : `${question.isEnglish ? ["A","B","C","D"][answers[`mcq:${question.key}`]] : ["ক","খ","গ","ঘ"][answers[`mcq:${question.key}`]]} — ${question.options[answers[`mcq:${question.key}`]]}`}</strong></span><span>সঠিক উত্তর: <strong>{question.isEnglish ? ["A","B","C","D"][question.answer] : ["ক","খ","গ","ঘ"][question.answer]} — {question.options[question.answer]}</strong></span></div>
                <p>{question.explanation}</p>
              </details>
            ))}
          </div>
          <div className="result-actions">
            {(incorrectCount + mcqUnanswered + cqIncomplete) > 0 && <button className="primary-button" onClick={() => onNavigate("subjects")}>কোন অধ্যায় আবার পড়বে দেখো</button>}
            <button className="primary-button" onClick={() => setPhase("setup")}>পরীক্ষা তালিকায় ফিরে যাও</button>
            <button className="secondary-button" onClick={start}>আবার পরীক্ষা দাও</button>
          </div>
          <article className="exam-result-print" aria-hidden="true"><header><span>HSC2Plus · EXAM REPORT</span><h1>{testSubject === "English" ? "English" : (selectedTestSubject?.nameBn ?? testSubject)} · {totalMarks} marks</h1><p>{new Intl.DateTimeFormat("bn-BD", { dateStyle: "long" }).format(new Date())}</p></header><section className="exam-result-summary"><div><strong>{cqAssessmentComplete ? `${totalScore}/${totalMarks}` : `${mcqScore}/${mcqQuestions.length}`}</strong><span>{cqAssessmentComplete ? "Final score" : "Provisional MCQ score"}</span></div><div><strong>{Math.max(1, Math.round(elapsedSeconds/60))} min</strong><span>Time used of {duration} min</span></div><div><strong>{incorrectCount}</strong><span>Wrong MCQ</span></div><div><strong>{mcqUnanswered + cqQuestions.filter((question) => !(cqParts[`cq:${question.key}`] ?? []).every(Boolean)).length}</strong><span>Unanswered/incomplete</span></div></section><section><h2>Chapter performance</h2>{topicStats.map((topic)=><p key={topic.topic}><strong>{topic.topic}</strong> · {topic.correct}/{topic.total} · {topic.percent}% {topic.percent < 60 ? "· Focus first" : ""}</p>)}</section><section><h2>Recommended revision</h2><ol><li>{weakestTopic ? `${weakestTopic.topic}: read the revision sheet, then complete a focused practice round.` : "Complete CQ self-assessment before treating this as a final score."}</li><li>Review every wrong option and explain why it is incorrect.</li><li>Redo unanswered or incomplete items under a shorter timer.</li></ol></section><footer>© 2026 HSC2Plus · This report is stored on this device.</footer></article>
        </section>
      </div>
    );
  }
  if (!examItems.length) return <div className="page-shell"><section className="empty-exam-state"><CircleAlert size={30}/><h1>এই selection-এর প্রশ্ন প্রস্তুত হচ্ছে</h1><p>Paper বা subject বদলে আবার চেষ্টা করো। কোনো খালি question screen দেখানো হবে না।</p><button className="primary-button" onClick={()=>setPhase("setup")}>Test setup-এ ফিরো</button></section></div>;
  const item = examItems[index];
  const mcqQuestion = item.kind === "MCQ" ? item.question : null;
  const cqQuestion = item.kind === "CQ" ? item.question : null;
  const writtenQuestion = cqQuestion as (typeof cqQuestion & { taskLabel?: string; taskInstruction?: string }) | null;
  const itemKey = item.key;
  const answeredExamItems = examItems.filter((examItem) => examItem.kind === "MCQ" ? answers[examItem.key] !== undefined : (cqParts[examItem.key] ?? []).some(Boolean)).length;
  const currentSectionItems = examItems.filter((examItem) => examItem.kind === item.kind);
  const currentSectionAnswered = currentSectionItems.filter((examItem) => examItem.kind === "MCQ" ? answers[examItem.key] !== undefined : (cqParts[examItem.key] ?? []).some(Boolean)).length;
  const currentSectionLabel = item.kind === "MCQ" ? "MCQ অংশ" : writtenPaper ? "Written অংশ" : "CQ অংশ";
  const currentSectionIndex = currentSectionItems.findIndex((sectionItem) => sectionItem.key === item.key);
  return (
    <div className="page-shell test-running exam-print-host">
      <div className="test-toolbar">
        <div><small>সময় বাকি</small><strong className={seconds < 60 ? "urgent" : ""}>{String(Math.floor(seconds / 60)).padStart(2, "0")}:{String(seconds % 60).padStart(2, "0")}</strong></div>
        <div><small>সম্পূর্ণ পরীক্ষা</small><strong>{answeredExamItems}/{examItems.length}</strong></div>
        <div><small>{currentSectionLabel}</small><strong>{currentSectionAnswered}/{currentSectionItems.length}</strong></div>
        <button className="test-print-button" onClick={()=>window.print()}><Download size={14}/> PDF</button><button onClick={() => seconds === 0 ? submit() : setPhase("review")}>{seconds === 0 ? "সময় শেষ—জমা দাও" : "যাচাই করে জমা দাও"}</button>
      </div>
      {sessionNotice && <div className="exam-session-notice" role="status"><CheckCircle2 size={16}/>{sessionNotice}</div>}
      <div className="exam-section-progress"><span><strong>{currentSectionLabel}</strong><small>{item.kind === "MCQ" ? "প্রতি প্রশ্ন ১ নম্বর" : writtenPaper ? "Task-specific marks ও instruction" : "প্রতি প্রশ্ন ১০ নম্বর · ক+খ+গ+ঘ"}</small></span><div className="progress-track"><i style={{width:`${Math.round((currentSectionAnswered / Math.max(1,currentSectionItems.length))*100)}%`}}/></div><b>{Math.round((currentSectionAnswered / Math.max(1,currentSectionItems.length))*100)}%</b></div>
      <div className="practice-layout">
        <section className="question-card">
          <div className="question-meta"><span>{currentSectionLabel} · প্রশ্ন {currentSectionIndex + 1}/{currentSectionItems.length}</span><span>{mcqQuestion ? `MCQ · ${mcqQuestion.topic}` : `${writtenPaper ? "Written" : "CQ"} · ${cqQuestion!.subject !== "English" ? (cqQuestion!.subjectBn ?? cqQuestion!.subject) : cqQuestion!.subject}`}</span></div>
          <div className="question-navigator exam-split-navigator">
            {(["MCQ","CQ"] as const).map((kind) => { const section=examItems.filter((navItem)=>navItem.kind===kind); if(!section.length)return null; return <section key={kind}><strong>{kind==="MCQ"?`MCQ · ${section.length}`:`${writtenPaper?"WRITTEN":"CQ"} · ${section.length}`}</strong><div>{section.map((navItem,sectionIndex)=>{const itemIndex=examItems.findIndex((candidate)=>candidate.key===navItem.key);return <button key={navItem.key} aria-label={`${kind} question ${sectionIndex+1}`} className={`${itemIndex === index ? "active" : ""} ${navItem.kind === "MCQ" ? answers[navItem.key] !== undefined ? "answered" : "" : (cqParts[navItem.key] ?? []).some(Boolean) ? "answered" : ""}`} onClick={() => setIndex(itemIndex)}>{sectionIndex + 1}</button>})}</div></section>})}
          </div>
          {mcqQuestion ? <><h2>{mcqQuestion.question}</h2><div className="option-list">{mcqQuestion.options.map((option, optionIndex) => <button key={option} aria-label={`${mcqQuestion.isEnglish ? ["A", "B", "C", "D"][optionIndex] : ["ক", "খ", "গ", "ঘ"][optionIndex]}. ${option}`} className={`option ${answers[itemKey] === optionIndex ? "selected" : ""}`} onClick={() => setAnswers((current) => ({ ...current, [itemKey]: optionIndex }))}><span>{mcqQuestion.isEnglish ? ["A", "B", "C", "D"][optionIndex] : ["ক", "খ", "গ", "ঘ"][optionIndex]}</span>{option}</button>)}</div></> : writtenPaper ? <div className="cq-exam-paper"><span>{cqQuestion!.marks ?? 10} marks · {writtenQuestion?.taskLabel ?? "WRITTEN TASK"}</span>{writtenQuestion?.taskInstruction&&<p className="written-task-instruction">{writtenQuestion.taskInstruction}</p>}<h2>{cqQuestion!.subject !== "English" ? (cqQuestion!.promptBn ?? cqQuestion!.prompt) : cqQuestion!.prompt}</h2><QuestionVisual visual={cqQuestion!.visual} surface="question"/><p>{englishPaper ? "Write the answer on paper following the task instruction, required format and word limit. No hint or model answer is shown before submission." : "নির্দেশনা, নির্ধারিত কাঠামো ও শব্দসীমা মেনে খাতায় উত্তর লেখো। জমা দেওয়ার আগে কোনো উত্তর দেখানো হবে না।"}</p><div><label><input type="checkbox" checked={cqParts[itemKey]?.[0]??false} onChange={()=>setCqParts(current=>({...current,[itemKey]:[!(current[itemKey]?.[0]??false)]}))}/><span>{englishPaper?"Task completed and checked":"উত্তর লেখা ও যাচাই সম্পন্ন"}</span></label></div></div> : <div className="cq-exam-paper"><span>১০ নম্বর · ১+২+৩+৪</span><h2>{cqQuestion!.subject !== "English" ? (cqQuestion!.promptBn ?? cqQuestion!.prompt) : cqQuestion!.prompt}</h2><QuestionVisual visual={cqQuestion!.visual} surface="question"/><p>খাতায় উত্তর লেখো। প্রতিটি অংশ শেষ হলে নিচে চিহ্ন দাও—জমা দেওয়ার আগে কোনো hint বা answer দেখানো হবে না।</p><div className="cq-time-plan"><span><b>২ মিনিট</b> উদ্দীপক পড়া ও ক</span><span><b>৫ মিনিট</b> খ সম্পন্ন</span><span><b>১১ মিনিট</b> গ সম্পন্ন</span><span><b>২০ মিনিট</b> ঘ ও final check</span></div><div>{["ক · জ্ঞান · ১", "খ · অনুধাবন · ২", "গ · প্রয়োগ · ৩", "ঘ · উচ্চতর দক্ষতা · ৪"].map((part,partIndex)=><label key={part}><input type="checkbox" checked={cqParts[itemKey]?.[partIndex] ?? false} onChange={() => setCqParts((current)=>{const next=[...(current[itemKey] ?? [false,false,false,false])];next[partIndex]=!next[partIndex];return {...current,[itemKey]:next};})}/><span>{part}</span></label>)}</div></div>}
          <div className="test-question-nav">
            <button disabled={index === 0} onClick={() => setIndex((value) => Math.max(0, value - 1))}>আগের প্রশ্ন</button>
            <button className={flagged[itemKey] ? "flagged" : ""} onClick={() => setFlagged((current) => ({...current,[itemKey]:!current[itemKey]}))}><Bookmark size={15} fill={flagged[itemKey] ? "currentColor" : "none"}/>{flagged[itemKey] ? "আবার দেখার জন্য রাখা হয়েছে" : "পরে আবার দেখব"}</button>
            <button disabled={index === examItems.length - 1} onClick={() => setIndex((value) => Math.min(examItems.length - 1, value + 1))}>পরের প্রশ্ন <ArrowRight size={15}/></button>
          </div>
        </section>
        <aside className="practice-aside"><div className="surface compact"><CircleAlert size={21}/><h3>পরীক্ষার নিয়ম</h3><p>জমা দেওয়ার আগে উত্তর বা ব্যাখ্যা দেখা যাবে না। {writtenPaper ? "প্রতিটি written task পরে model answer ও task rubric দিয়ে নিজে মূল্যায়ন করবে।" : "MCQ স্বয়ংক্রিয়ভাবে যাচাই হবে; CQ-এর প্রতিটি অংশ মানবণ্টনের সঙ্গে মিলিয়ে নিজে নম্বর দেবে।"}</p></div>{cqQuestions.length > 0 && <label className={`test-pdf-upload surface compact ${answerPdf ? "ready" : ""}`}><FileUp size={20}/><strong>{answerPdf ? "উত্তরের PDF এই ডিভাইসে যুক্ত" : "খাতার উত্তর PDF হিসেবে যুক্ত করো"}</strong><span>{answerPdf ? `${answerPdf.name} · ফাইলটি এই ডিভাইসেই আছে` : "শুধু এই ডিভাইসে থাকবে · AI মূল্যায়ন চালু নয় · সর্বোচ্চ ১৫ MB"}</span><input type="file" accept="application/pdf" onChange={(event)=>{const file=event.target.files?.[0];if(file && file.size <= 15*1024*1024)setAnswerPdf({name:file.name,size:file.size});}}/></label>}</aside>
      </div>
      {examPrintPaper}
    </div>
  );
}

function ExamLibrary({ group, display = "full", target = null }: { group: "commerce" | "humanities"; display?: "full" | "writingOnly" | "archiveOnly"; target?: PracticeTarget | null }) {
  const resources = completeExamLibraryByGroup[group];
  const [selected, setSelected] = useState(0);
  const [mode, setMode] = useState<"guide" | "notes" | "worked" | "cq" | "bank" | "mock" | "archive">(display === "archiveOnly" ? "archive" : "cq");
  const [level, setLevel] = useState<"All" | "Foundation" | "Standard" | "Challenge">("All");
  const [questionType, setQuestionType] = useState<"All" | "MCQ" | "CQ" | "Written">("All");
  const [category, setCategory] = useState<"All" | "Concept" | "Application" | "Board-style" | "College-standard">("All");
  const [cqSeconds, setCqSeconds] = useState(20 * 60);
  const [cqRunning, setCqRunning] = useState(false);
  const [cqChecklist, setCqChecklist] = useState([false, false, false, false]);
  const [cqSelfScores, setCqSelfScores] = useState([0, 0, 0, 0]);
  const [cqPdf, setCqPdf] = useState<{ name: string; size: number } | null>(null);
  const [cqPdfError, setCqPdfError] = useState("");
  const [resourceQuery, setResourceQuery] = useState("");
  const [resourceSubject, setResourceSubject] = useState("All subjects");
  const [examVariant, setExamVariant] = useState(0);
  const [examGuideVisible, setExamGuideVisible] = useState(false);
  const [mockMcqAnswers, setMockMcqAnswers] = useState<Record<number, number>>({});
  const [bankQuery, setBankQuery] = useState("");
  const [bankPage, setBankPage] = useState(0);
  const [bankPreset, setBankPreset] = useState<"all" | "foundation" | "board-cq" | "college-challenge" | "custom">("all");
  const [bankRound, setBankRound] = useState(0);
  const [attemptedBankQuestions, setAttemptedBankQuestions] = useState<string[]>([]);
  const [unseenOnly, setUnseenOnly] = useState(false);
  const [archiveBoard, setArchiveBoard] = useState("All boards");
  const [archiveYear, setArchiveYear] = useState("All years");
  const [archiveSet, setArchiveSet] = useState("");
  const [archiveQuestionNumber, setArchiveQuestionNumber] = useState("");
  const [archiveView, setArchiveView] = useState<"practice" | "authentic">("practice");
  const [archiveQuery, setArchiveQuery] = useState("");
  const [archivePage, setArchivePage] = useState(0);
  const downloadArchiveIntakeTemplate = () => {
    const headers = ["Record ID", "Subject", "Paper", "Chapter", "Board", "Year", "Set or version", "Question number", "Question type", "Marks", "Exact question text", "Answer or marking source", "Original PDF or scan URL/filename", "Page reference", "Source URL", "Transcribed by", "Verified by", "Verified on", "Searchable tags", "Publication decision", "Evidence note"];
    const example = ["LEAVE BLANK", resource.subject, "1st Paper / 2nd Paper / Full Subject", resource.unit, "Dhaka / Chattogram / ...", "", "", "", "MCQ / CQ / Written", "", "", "", "", "", "", "", "", "", "chapter; topic; skill", "PENDING", "Do not publish until the original paper and every citation field are verified."];
    const csv = [headers, example].map((row) => row.map(csvCell).join(",")).join("\r\n");
    downloadTextFile(`hsc2plus-${group}-board-paper-intake-template.csv`, csv);
  };
  const examResumeReady = useRef(false);
  const librarySubjects = ["All subjects", ...Array.from(new Set(resources.map((item) => item.subject)))];
  useEffect(() => {
    if (!target?.subject || !target.unit || display === "archiveOnly") return;
    const targetIndex = resources.findIndex((item) => item.subject === target.subject && item.unit === target.unit);
    if (targetIndex < 0) return;
    const timer = window.setTimeout(() => {
      setSelected(targetIndex);
      setResourceSubject(target.subject);
      setMode("cq");
    }, 0);
    return () => window.clearTimeout(timer);
  }, [display, resources, target]);
  const visibleResources = resources
    .map((item, originalIndex) => ({ item, originalIndex }))
    .filter(({ item }) =>
      (resourceSubject === "All subjects" || item.subject === resourceSubject) &&
      (`${item.subject} ${item.subjectBn ?? ""} ${item.unit} ${item.unitBn}`.toLowerCase().includes(resourceQuery.trim().toLowerCase())),
    );
  const displayedIndex = visibleResources.some(({ originalIndex }) => originalIndex === selected)
    ? selected
    : (visibleResources[0]?.originalIndex ?? selected);
  const resource = resources[displayedIndex];
  const banglaMedium = resource.subject !== "English";
  const printableNoteSections = [
    { title: banglaMedium ? "ধারণা ও ভিত্তি" : "Concepts and foundations", notes: resource.notes.slice(0, 12) },
    { title: banglaMedium ? "নীতি, ধাপ ও প্রয়োগ" : "Rules, method and application", notes: resource.notes.slice(12, 24) },
    { title: banglaMedium ? "বিশ্লেষণ, উদাহরণ ও যাচাই" : "Analysis, examples and checks", notes: resource.notes.slice(24, 36) },
    { title: banglaMedium ? "পরীক্ষায় প্রয়োগ ও পুনরালোচনা" : "Exam application and revision", notes: resource.notes.slice(36) },
  ].filter((section) => section.notes.length > 0);
  const printableMcqs = resource.bank.questions?.filter((question) => question.type === "MCQ") ?? [];
  const printableWrittenQuestions = resource.bank.questions?.filter((question) => question.type !== "MCQ") ?? [];
  const chapterReviewChecks = resource.review ? [
    { label: banglaMedium ? "অফিসিয়াল উৎসের সংযোগ" : "Official source traceability", status: resource.review.checks.sourceTraceability },
    { label: banglaMedium ? "বিষয় ও পত্র বিন্যাস" : "Subject and paper mapping", status: resource.review.checks.subjectAndPaper },
    { label: banglaMedium ? "অধ্যায়ের নাম ও ক্রম" : "Chapter title and sequence", status: resource.review.checks.chapterTitleAndSequence },
    { label: banglaMedium ? "অনুমোদিত সংস্করণ" : "Approved edition and reapproval", status: resource.review.checks.editionAndReapproval },
    { label: banglaMedium ? "প্রশ্নের উৎস ও উদ্ধৃতি" : "Question provenance and citation", status: resource.review.checks.questionProvenance },
    { label: banglaMedium ? "তথ্য, সংজ্ঞা ও পরিভাষা" : "Facts, definitions and terminology", status: resource.review.contentChecks.factsDefinitionsTerminology },
    { label: banglaMedium ? "সূত্র, হিসাব ও জাবেদা" : "Formulas, calculations and entries", status: resource.review.contentChecks.formulasCalculationsEntries },
    { label: banglaMedium ? "MCQ বিকল্প, উত্তর ও ব্যাখ্যা" : "MCQ options, answers and explanations", status: resource.review.contentChecks.mcqAnswersAndExplanations },
    { label: banglaMedium ? "CQ ১+২+৩+৪ মানবণ্টন" : "CQ 1+2+3+4 marking accuracy", status: resource.review.contentChecks.cqMarkDistribution },
    { label: banglaMedium ? "English ভাষা ও source text" : "English language and source text", status: resource.review.contentChecks.englishLanguageAndSourceText },
    { label: banglaMedium ? "পর্যালোচকের চূড়ান্ত ঘোষণা" : "Final reviewer declaration", status: resource.review.contentChecks.finalReviewerDeclaration },
  ] : [];
  const cqChecklistKey = `hsc2plus-${group}-cq-parts:${resource.subject}:${resource.unit}`;
  const bankProgressKey = `hsc2plus-${group}-bank-progress:${resource.subject}:${resource.unit}`;
  const selectResource = (index: number) => {
    setSelected(index);
    setMode(display === "archiveOnly" ? "archive" : "cq");
    setLevel("All");
    setQuestionType("All");
    setCategory("All");
    setCqSeconds(20 * 60);
    setCqRunning(false);
    setCqPdf(null);
    setMockMcqAnswers({});
    setExamGuideVisible(false);
    setCqPdfError("");
    setCqSelfScores([0, 0, 0, 0]);
    setExamVariant(0);
    setBankQuery("");
    setBankPage(0);
    setBankPreset("all");
    setBankRound(0);
    setUnseenOnly(false);
  };
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-exam-resume`) ?? "null") as { subject?: string; unit?: string; mode?: string } | null;
        const index = saved ? resources.findIndex((item) => item.subject === saved.subject && item.unit === saved.unit) : -1;
        const allowedModes = display === "writingOnly" ? ["cq"] : display === "archiveOnly" ? ["archive"] : ["cq", "bank", "mock", "archive"];
        if (index >= 0) setSelected(index);
        if (saved?.mode && allowedModes.includes(saved.mode)) setMode(saved.mode as typeof mode);
      } catch { window.localStorage.removeItem(`hsc2plus-${group}-exam-resume`); }
      examResumeReady.current = true;
    }, 0);
    return () => window.clearTimeout(timer);
  }, [display, group, resources]);
  useEffect(() => {
    if (!examResumeReady.current || !resource) return;
    window.localStorage.setItem(`hsc2plus-${group}-exam-resume`, JSON.stringify({ subject: resource.subject, unit: resource.unit, mode }));
  }, [group, mode, resource]);
  useEffect(() => {
    if (!cqRunning || cqSeconds <= 0) return;
    const timer = window.setInterval(() => setCqSeconds((value) => value - 1), 1000);
    return () => window.clearInterval(timer);
  }, [cqRunning, cqSeconds]);
  useEffect(() => {
    const restore = window.setTimeout(() => {
      const saved = JSON.parse(window.localStorage.getItem(cqChecklistKey) ?? "[false,false,false,false]");
      setCqChecklist(Array.isArray(saved) && saved.length === 4 ? saved.map(Boolean) : [false, false, false, false]);
    }, 0);
    return () => window.clearTimeout(restore);
  }, [cqChecklistKey]);
  useEffect(() => {
    const reset = window.setTimeout(() => setBankPage(0), 0);
    return () => window.clearTimeout(reset);
  }, [resource.subject, resource.unit]);
  useEffect(() => {
    const restore = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(bankProgressKey) ?? "[]");
        setAttemptedBankQuestions(Array.isArray(saved) ? saved.filter((item): item is string => typeof item === "string") : []);
      } catch {
        window.localStorage.removeItem(bankProgressKey);
        setAttemptedBankQuestions([]);
      }
    }, 0);
    return () => window.clearTimeout(restore);
  }, [bankProgressKey]);
  const markBankQuestionReviewed = (key: string) => {
    setAttemptedBankQuestions((current) => {
      if (current.includes(key)) return current;
      const next = [...current, key];
      window.localStorage.setItem(bankProgressKey, JSON.stringify(next));
      return next;
    });
  };
  const resetBankProgress = () => {
    window.localStorage.removeItem(bankProgressKey);
    setAttemptedBankQuestions([]);
    setBankPage(0);
  };
  const toggleCqPart = (partIndex: number) => {
    setCqChecklist((current) => {
      const next = current.map((value, checklistIndex) => checklistIndex === partIndex ? !value : value);
      window.localStorage.setItem(cqChecklistKey, JSON.stringify(next));
      return next;
    });
  };
  const selectAllCqParts = () => {
    const next = [true, true, true, true];
    setCqChecklist(next);
    window.localStorage.setItem(cqChecklistKey, JSON.stringify(next));
  };
  const handleCqPdf = (file?: File) => {
    setCqPdfError("");
    if (!file) return;
    if (file.type !== "application/pdf" && !file.name.toLowerCase().endsWith(".pdf")) {
      setCqPdf(null);
      setCqPdfError(banglaMedium ? "শুধু PDF ফাইল আপলোড করা যাবে।" : "Please upload a PDF file.");
      return;
    }
    if (file.size > 20 * 1024 * 1024) {
      setCqPdf(null);
      setCqPdfError(banglaMedium ? "PDF ফাইলটি ২০ MB-এর মধ্যে হতে হবে।" : "The PDF must be 20 MB or smaller.");
      return;
    }
    setCqPdf({ name: file.name, size: file.size });
  };
  const cqPartMarks = [1, 2, 3, 4];
  const selectedCqMarks = cqChecklist.reduce((total, selectedPart, index) => total + (selectedPart ? cqPartMarks[index] : 0), 0);
  const earnedCqMarks = cqSelfScores.reduce((total, score, index) => total + (cqChecklist[index] ? Math.min(score, cqPartMarks[index]) : 0), 0);
  const visibleQuestions = (resource.bank.questions ?? []).filter(
    (question) =>
      (level === "All" || question.level === level) &&
      (questionType === "All" || question.type === questionType) &&
      (category === "All" || question.category === category) &&
      (!bankQuery.trim() || `${question.prompt} ${question.promptBn ?? ""} ${question.answerGuide} ${question.answerGuideBn ?? ""}`.toLowerCase().includes(bankQuery.trim().toLowerCase())) &&
      (!unseenOnly || !attemptedBankQuestions.includes(stableQuestionKey(question))),
  );
  const bankPageSize = 10;
  const bankPageCount = Math.max(1, Math.ceil(visibleQuestions.length / bankPageSize));
  const bankRotation = visibleQuestions.length ? (bankRound * 10) % visibleQuestions.length : 0;
  const unseenQuestions = visibleQuestions.filter((question) => !attemptedBankQuestions.includes(stableQuestionKey(question)));
  const reviewedQuestions = visibleQuestions.filter((question) => attemptedBankQuestions.includes(stableQuestionKey(question)));
  const priorityQuestions = [...unseenQuestions, ...reviewedQuestions];
  const orderedVisibleQuestions = bankRotation ? [...priorityQuestions.slice(bankRotation), ...priorityQuestions.slice(0, bankRotation)] : priorityQuestions;
  const pagedBankQuestions = orderedVisibleQuestions.slice(bankPage * bankPageSize, bankPage * bankPageSize + bankPageSize);
  const applyBankPreset = (preset: "all" | "foundation" | "board-cq" | "college-challenge") => {
    setBankPreset(preset);
    setBankQuery("");
    setBankPage(0);
    if (preset === "foundation") { setLevel("Foundation"); setQuestionType("MCQ"); setCategory("All"); return; }
    if (preset === "board-cq") { setLevel("All"); setQuestionType("CQ"); setCategory("Board-style"); return; }
    if (preset === "college-challenge") { setLevel("Challenge"); setQuestionType("All"); setCategory("College-standard"); return; }
    setLevel("All"); setQuestionType("All"); setCategory("All");
  };
  const allExamQuestions = resource.bank.questions ?? [];
  const rotateExamQuestions = <T,>(items: T[], count: number, offset: number) => Array.from({ length: Math.min(count, items.length) }, (_, index) => items[(offset + index) % items.length]);
  const chapterMockMcqs = rotateExamQuestions(allExamQuestions.filter((question) => question.type === "MCQ"), 10, examVariant * 5);
  const chapterMockCqs = rotateExamQuestions(allExamQuestions.filter((question) => question.type === "CQ"), 2, examVariant * 2);
  const chapterMockWritten = rotateExamQuestions(allExamQuestions.filter((question) => question.type === "Written"), 2, examVariant * 2);
  const chapterMockQuestions = [...chapterMockMcqs, ...chapterMockCqs, ...chapterMockWritten];
  const chapterMockMarks = chapterMockQuestions.reduce((total, question) => total + (question.marks ?? (question.type === "MCQ" ? 1 : 10)), 0);
  const archiveQuestions = previousBoardArchive.records.filter((question) =>
    question.subjectId === resource.subject.toLowerCase().replace(/\s.+$/, "") &&
    (archiveBoard === "All boards" || question.board === archiveBoard) &&
    (archiveYear === "All years" || String(question.year) === archiveYear) &&
    (!archiveSet.trim() || question.set.toLowerCase().includes(archiveSet.trim().toLowerCase())) &&
    (!archiveQuestionNumber.trim() || question.questionNumber.toLowerCase().includes(archiveQuestionNumber.trim().toLowerCase())),
  );
  const practiceArchiveQuestions = (resource.bank.questions ?? []).filter((question) =>
    (questionType === "All" || question.type === questionType) &&
    (level === "All" || question.level === level) &&
    (category === "All" || question.category === category) &&
    (!archiveQuery.trim() || `${question.prompt} ${question.promptBn ?? ""} ${question.answerGuide} ${question.answerGuideBn ?? ""}`.toLowerCase().includes(archiveQuery.trim().toLowerCase())),
  );
  const archivePageSize = 8;
  const practiceArchivePageCount = Math.max(1, Math.ceil(practiceArchiveQuestions.length / archivePageSize));
  const pagedPracticeArchive = practiceArchiveQuestions.slice(archivePage * archivePageSize, archivePage * archivePageSize + archivePageSize);
  const allModes = banglaMedium ? [
    { id: "cq" as const, label: "CQ লেখা ও PDF", icon: PenLine },
    { id: "bank" as const, label: "প্রশ্নভান্ডার", icon: ListChecks },
    { id: "mock" as const, label: "অধ্যায় মডেল টেস্ট", icon: Clock3 },
    { id: "archive" as const, label: "বিগত বোর্ড আর্কাইভ", icon: FileText },
  ] : [
    { id: "cq" as const, label: "Timed Writing & PDF", icon: PenLine },
    { id: "bank" as const, label: "Question Bank", icon: ListChecks },
    { id: "mock" as const, label: "Chapter Model Test", icon: Clock3 },
    { id: "archive" as const, label: "Previous-board Archive", icon: FileText },
  ];
  const modes = display === "writingOnly" ? allModes.filter((item) => item.id === "cq") : display === "archiveOnly" ? allModes.filter((item) => item.id === "archive") : allModes;
  return (
    <div className="page-shell">
      <section className="page-title">
        <span className="eyebrow">{display === "writingOnly" ? "QUIZ PRACTICE · CQ WRITING" : display === "archiveOnly" ? "EXAM PREP · VERIFIED ARCHIVE" : "EXAM PREP · NCTB REVIEW IN PROGRESS"}</span>
        <h1>{display === "writingOnly" ? "CQ Writing & PDF Practice" : display === "archiveOnly" ? "Previous-board Question Archive" : "Exam Practice, Question Bank & Assessment"}</h1>
        <p>{display === "writingOnly" ? "অধ্যায় বেছে সময় ধরে ক–খ–গ–ঘ উত্তর লেখো, প্রতিটি অংশ যাচাই করো এবং খাতার PDF সংরক্ষণ করো।" : display === "archiveOnly" ? "বোর্ড, বছর, সেট ও প্রশ্ন নম্বর অনুযায়ী উৎস-যাচাইকৃত প্রশ্ন খুঁজে অনুশীলন করো।" : "অধ্যায় বেছে সময় ধরে CQ লেখো, বোর্ড ও কলেজ-স্ট্যান্ডার্ড প্রশ্ন অনুশীলন করো এবং পূর্ণ মডেল টেস্ট দাও।"}</p>
      </section>
      <div className="library-tools">
        <label>
          <Search size={17}/>
          <input value={resourceQuery} onChange={(event) => setResourceQuery(event.target.value)} placeholder="অধ্যায় খুঁজুন" aria-label="পরীক্ষা প্রস্তুতির অধ্যায় খুঁজুন"/>
        </label>
        <select value={resourceSubject} onChange={(event) => setResourceSubject(event.target.value)} aria-label="বিষয় অনুযায়ী ছাঁকুন">
          {librarySubjects.map((subject) => <option key={subject} value={subject}>{subject === "All subjects" ? "সব বিষয় / All subjects" : subject === "English" ? "English" : resources.find((r) => r.subject === subject)?.subjectBn ?? subject}</option>)}
        </select>
        <span>{visibleResources.length}টি অধ্যায়</span>
      </div>
      <div className="library-layout">
        <aside className="library-subjects">
          {visibleResources.map(({ item, originalIndex }) => (
            <button
              key={`${item.subject}-${item.unit}`}
              className={displayedIndex === originalIndex ? "active" : ""}
              onClick={() => selectResource(originalIndex)}
            >
              <span>{item.subject === "English" ? item.subject : (item.subjectBn ?? item.subject)}</span>
              <strong>{item.subject === "English" ? item.unit : item.unitBn}</strong>
            </button>
          ))}
          {visibleResources.length === 0 && <div className="library-empty"><Search size={18}/><strong>কোনো অধ্যায় পাওয়া যায়নি</strong><span>অন্য বিষয় বা শব্দ দিয়ে খুঁজুন।</span></div>}
        </aside>
        <section className="library-reader">
          <div className="library-reader-head">
            <div>
              <span className="eyebrow">{banglaMedium ? (resource.subjectBn ?? resource.subject) : resource.subject}</span>
              <h2>{banglaMedium ? resource.unitBn : resource.unit}</h2>
              <p>{banglaMedium ? "CQ · প্রশ্নভান্ডার · মডেল টেস্ট · মূল্যায়ন নির্দেশিকা" : "CQ · question bank · model test · marking guides"}</p>
            </div>
            <div className="library-head-actions">
              <span className="content-pill building">{banglaMedium ? `পর্যালোচনা: ${resource.review?.lastReviewedBn ?? "২৭ সেপ্টেম্বর ২০২৬"}` : `Reviewed: ${resource.review?.lastReviewed ?? "27 September 2026"}`}</span>
            </div>
          </div>
          <div className="verification-strip" aria-label="কনটেন্টের অবস্থা">
            <span><CheckCircle2 size={14}/>{banglaMedium ? "বাংলা মাধ্যমে রচিত" : "English subject · English content"}</span>
            <span><PenLine size={14}/>{banglaMedium ? "নিজস্ব বোর্ড-প্যাটার্ন" : "Original board-style practice"}</span>
            <span className="pending"><Clock3 size={14}/>{resource.review?.status === "reviewed" ? (banglaMedium ? "একাডেমিক পর্যালোচনা সম্পন্ন" : "Academic review complete") : (banglaMedium ? "NCTB মিল যাচাই চলমান" : "NCTB alignment in review")}</span>
          </div>
          {resource.review?.mappingStage === "official-curriculum-located-edition-under-comparison" && <div className="curriculum-mapping-stage" role="status"><ShieldCheck size={18}/><div><strong>{banglaMedium ? "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে" : "Official curriculum located"}</strong><p>{banglaMedium ? "বিষয়টি mapped। এখন বইয়ের কাঠামো, title/imprint এবং প্রযোজ্য অনুমোদিত সংস্করণ মিলিয়ে দেখা হচ্ছে। বিনামূল্যের NCTB download না থাকাকে আর ‘unmapped’ ধরা হচ্ছে না।" : "The subject is mapped. Textbook structure, title/imprint and the applicable approved edition are now under comparison; a missing free NCTB download no longer makes it unmapped."}</p></div></div>}
          <details className="chapter-review-record">
            <summary><ShieldCheck size={16}/><span><strong>{banglaMedium ? "এই অধ্যায়ের পর্যালোচনা নথি" : "Chapter review record"}</strong><small>{resource.review?.recordId}</small></span><ChevronRight size={16}/></summary>
            <div className="chapter-review-body">
              <div className="chapter-review-status"><span><strong>{resource.review?.status === "reviewed" ? (banglaMedium ? "অনুমোদিত" : "Reviewed") : (banglaMedium ? "পর্যালোচনায়" : "Under review")}</strong><small>{banglaMedium ? "একাডেমিক অবস্থা" : "Academic status"}</small></span><span><strong>{resource.review?.reviewerName ?? (banglaMedium ? "নির্ধারিত নয়" : "Not assigned")}</strong><small>{banglaMedium ? "যোগ্য বিষয় পর্যালোচক" : "Qualified subject reviewer"}</small></span><span><strong>{resource.review?.lastReviewed}</strong><small>{banglaMedium ? "সর্বশেষ রেকর্ড" : "Record updated"}</small></span></div>
              <p>{banglaMedium ? resource.review?.evidenceNoteBn : resource.review?.evidenceNote}</p>
              {resource.review?.nctbComparison && <section className="chapter-nctb-comparison"><header><div><strong>{banglaMedium ? "NCTB বইয়ের সঙ্গে সরাসরি তুলনা" : "Direct NCTB textbook comparison"}</strong><small>{banglaMedium ? "সব ঘর প্রমাণসহ পূরণ না হওয়া পর্যন্ত অধ্যায়টি যাচাইকৃত নয়" : "Not verified until every field has primary evidence"}</small></div><span><Clock3 size={13}/>{banglaMedium ? "৭/১০ প্রমাণ বাকি" : "7/10 evidence fields pending"}</span></header><div>{curriculumVerificationLedger.comparisonFields.map((field) => { const entry = resource.review?.nctbComparison[field.id as keyof typeof resource.review.nctbComparison]; const isRecord = typeof entry === "object" && entry !== null && "status" in entry; const linked = isRecord && (String(entry.status) === "verified" || (field.id === "officialPaper" && entry.value !== null)); return <article key={field.id}>{linked ? <CheckCircle2 size={14}/> : <Clock3 size={14}/>}<span><strong>{banglaMedium ? field.labelBn : field.label}</strong><small>{isRecord && entry.value !== null ? String(entry.value) : (banglaMedium ? "নথিভুক্ত হয়নি" : "Not recorded")}</small></span><em>{linked ? (field.id === "officialPaper" ? (banglaMedium ? "রেফারেন্স-ম্যাপড" : "Reference-mapped") : (banglaMedium ? "উৎস যাচাইকৃত" : "Source verified")) : (banglaMedium ? "বাকি" : "Pending")}</em></article>; })}</div><p>{banglaMedium ? "বিষয়, পত্রের working map এবং ২০২৬ সিলেবাস-ভিত্তি সংযুক্ত। এখন প্রযোজ্য বইয়ের title ও imprint page, সূচিপত্র, অনুমোদন/পুনঃঅনুমোদন নোটিশ এবং অধ্যায়ের শুরু–শেষ পৃষ্ঠা মিলিয়ে reviewer sign-off প্রয়োজন।" : "Subject, working paper map and the HSC 2026 syllabus basis are linked. The applicable title/imprint pages, contents, approval notice and chapter page range still require comparison and reviewer sign-off."}</p></section>}
              <div className="chapter-review-checks">{chapterReviewChecks.map((check) => { const verified = check.status === "verified"; const authored = check.status === "authored-board-pattern"; const notApplicable = check.status === "not-applicable"; return <div className={verified ? "verified" : authored ? "authored" : notApplicable ? "not-applicable" : "pending"} key={check.label}>{verified ? <CheckCircle2 size={15}/> : authored ? <PenLine size={15}/> : notApplicable ? <Minus size={15}/> : <Clock3 size={15}/>}<span><strong>{check.label}</strong><small>{verified ? (banglaMedium ? "উৎস রেকর্ড সম্পন্ন" : "Evidence recorded") : authored ? (banglaMedium ? "নিজস্ব অনুশীলন—বিগত বোর্ড নয়" : "Original practice—not a past paper") : notApplicable ? (banglaMedium ? "এই বিষয়ে প্রযোজ্য নয়" : "Not applicable to this subject") : (banglaMedium ? "যোগ্য পর্যালোচকের অনুমোদন বাকি" : "Qualified reviewer sign-off pending")}</small></span></div>})}</div>
              <div className="chapter-review-columns"><div><strong>{banglaMedium ? "চূড়ান্ত করার আগে যা বাকি" : "Release blockers"}</strong><ul>{(banglaMedium ? resource.review?.blockingReasonsBn : resource.review?.blockingReasons)?.map((reason)=><li key={reason}>{reason}</li>)}</ul></div><div><strong>{banglaMedium ? "পরবর্তী একাডেমিক কাজ" : "Next academic action"}</strong><p>{banglaMedium ? resource.review?.nextActionBn : resource.review?.nextAction}</p></div></div>
              <div className="review-source-links"><strong>{banglaMedium ? "সংযুক্ত অফিসিয়াল প্রমাণ" : "Linked official evidence"}</strong><div>{(resource.review?.sourceIds ?? []).map((id) => { const source = officialAcademicSources.entries.find((entry) => entry.id === id); return source ? <a key={id} href={source.url} target="_blank" rel="noreferrer"><span>{banglaMedium ? source.labelBn : source.label}</span><ExternalLink size={13}/></a> : null; })}</div></div>
              {!!(resource.review?.supportingGuideReferences ?? []).length && <div className="supporting-source-record"><header><div><strong>{banglaMedium ? "এই পাঠ তৈরির সহায়ক উৎস" : "Supporting source used for this lesson"}</strong><small>{banglaMedium ? "গভীরতা ও অনুশীলনের ধরন বোঝার জন্য—অফিসিয়াল NCTB প্রমাণ নয়" : "Used for depth and practice design—not official NCTB evidence"}</small></div><span>{(resource.review?.supportingGuideReferences ?? []).length}</span></header>{(resource.review?.supportingGuideReferences ?? []).map((source,index)=><article key={`${source.book}-${index}`}><div><b>{source.book}</b><p>{source.edition}</p><small>{banglaMedium ? `পরিসর: ${source.page}` : `Scope: ${source.page}`}</small>{source.scopeNote&&<em>{source.scopeNote}</em>}</div>{source.url?<a href={source.url} target="_blank" rel="noreferrer" aria-label={`${source.book} source`}><ExternalLink size={14}/></a>:<ShieldCheck size={14}/>}</article>)}<footer>{banglaMedium ? "পদ্ধতি ও কাঠামো বিশ্লেষণ করা হয়েছে; শিক্ষার্থী-পাঠ ও প্রশ্ন নতুনভাবে রচিত।" : "Methods and structures were analysed; student lessons and questions were independently authored."}</footer></div>}
              {resource.review && (
                <ContentErrorReporter
                  bangla={banglaMedium}
                  target={{ recordId: resource.review.recordId, subject: banglaMedium ? (resource.subjectBn ?? resource.subject) : resource.subject, chapter: banglaMedium ? resource.unitBn : resource.unit, reviewerStatus: resource.review.reviewerStatus }}
                />
              )}
            </div>
          </details>
          <article className="chapter-print-book" aria-hidden="true">
            <header>
              <span>HSC2Plus · {resource.review?.curriculum ?? "NCTB HSC"}</span>
              <h1>{banglaMedium ? resource.unitBn : resource.unit}</h1>
              <p>{banglaMedium ? (resource.subjectBn ?? resource.subject) : resource.subject} · {banglaMedium ? "সম্পূর্ণ অধ্যায় নোট ও পরীক্ষা প্রস্তুতি" : "Complete chapter notes and exam preparation"}</p>
            </header>
            {resource.guide && <>
              <section><h2>{banglaMedium ? "১. অধ্যায়ের মূল ধারণা" : "1. Core concept"}</h2><p>{resource.guide.concept}</p><p>{resource.guide.application}</p></section>
              <section><h2>{banglaMedium ? "২. গুরুত্বপূর্ণ পরিভাষা" : "2. Key terminology"}</h2><ul>{resource.guide.terminology.map((item) => <li key={item}>{item}</li>)}</ul></section>
              <section><h2>{banglaMedium ? "৩. প্রয়োজনীয় সূত্র ও উত্তর কাঠামো" : "3. Formulas and answer structures"}</h2><ul>{resource.guide.structures.map((item) => <li key={item}>{item}</li>)}</ul></section>
              <section><h2>{banglaMedium ? "৪. শেখার পদ্ধতি" : "4. Learning method"}</h2><ol>{resource.guide.method.map((item) => <li key={item}>{item}</li>)}</ol></section>
              <section className="print-revision-sheet"><h2>{banglaMedium ? "দ্রুত পুনরালোচনা" : "Revision notes"}</h2><ul>{resource.guide.examChecklist.map((item)=><li key={item}>{item}</li>)}</ul><h3>{banglaMedium ? "নিজে যাচাই" : "Active self-check"}</h3><ul>{resource.guide.selfCheck.map((item)=><li key={item}>{item}</li>)}</ul></section>
              {resource.examToolkit && <section className="print-rapid-sheet"><h2>{banglaMedium ? "পরীক্ষার আগের ঝলক" : "Last-minute review"}</h2><div className="print-toolkit-grid"><div><h3>{banglaMedium ? "যা মনে রাখবে" : "Must remember"}</h3><ul>{resource.examToolkit.essentials.map((item)=><li key={item}>{item}</li>)}</ul></div><div><h3>{banglaMedium ? "যে ভুল এড়াবে" : "Avoid"}</h3><ul>{resource.examToolkit.mistakes.map((item)=><li key={item}>{item}</li>)}</ul></div><div><h3>{banglaMedium ? "জমা দেওয়ার আগে" : "Before submitting"}</h3><ul>{resource.examToolkit.scoringMoves.map((item)=><li key={item}>{item}</li>)}</ul></div></div></section>}
            </>}
            <section><h2>{banglaMedium ? "৫. পূর্ণ পাঠসমূহ" : "5. Complete lessons"}</h2>{resource.lessonDetails?.map((lesson, index) => <div className="print-lesson" key={lesson.title}><h3>{index + 1}. {lesson.title}</h3><p>{lesson.concept}</p><ol>{lesson.steps.map((step) => <li key={step}>{step}</li>)}</ol>{lesson.recallQuestions && <><h4>{banglaMedium ? "না দেখে মনে করো" : "Active recall"}</h4><ul>{lesson.recallQuestions.map((question) => <li key={question}>{question}</li>)}</ul></>}<p><strong>{banglaMedium ? "সাধারণ ভুল:" : "Common trap:"}</strong> {lesson.commonTrap}</p><p><strong>{banglaMedium ? "প্রয়োগ:" : "Application:"}</strong> {lesson.application}</p><p><strong>{banglaMedium ? "সমাধানের নমুনা:" : "Worked snapshot:"}</strong> {lesson.workedSnapshot}</p><p><strong>{banglaMedium ? "নিজে করো:" : "Independent practice:"}</strong> {lesson.practicePrompt}</p><p><strong>{banglaMedium ? "চ্যালেঞ্জ অনুশীলন:" : "Challenge task:"}</strong> {lesson.stretchPrompt}</p><p><strong>{banglaMedium ? "উত্তর যাচাই:" : "Answer check:"}</strong> {lesson.answerCheck}</p><p><strong>{banglaMedium ? "যাচাই:" : "Checkpoint:"}</strong> {lesson.checkpoint}</p></div>)}</section>
            <section className="print-notes-chapter"><h2>{banglaMedium ? "৬. বিস্তারিত অধ্যায় নোট" : "6. Detailed chapter notes"}</h2><p className="print-section-intro">{banglaMedium ? "অধ্যায়টি শুধু পুনরালোচনার জন্য নয়—ধারণা বোঝা, প্রয়োগ করা, ভুল যাচাই এবং পরীক্ষায় উত্তর লেখার ধারাবাহিকতায় সাজানো হয়েছে।" : "These notes move from understanding and application to error-checking and exam-ready writing."}</p>{printableNoteSections.map((section, sectionIndex) => <div className="print-note-section" key={section.title}><h3>৬.{sectionIndex + 1} {section.title}</h3>{section.notes.map((note, noteIndex) => <div className="print-note" key={note}><strong>{String(sectionIndex * 12 + noteIndex + 1).padStart(2, "0")}</strong><p>{note}</p></div>)}</div>)}</section>
            <section><h2>{banglaMedium ? "৭. সমাধানসহ উদাহরণ" : "7. Worked solutions"}</h2><h3>{resource.worked.problem}</h3><ol>{resource.worked.steps.map((step) => <li key={step}>{step}</li>)}</ol><p><strong>{banglaMedium ? "চূড়ান্ত উত্তর:" : "Final answer:"}</strong> {resource.worked.answer}</p>{resource.extraWorked?.map((example) => <div className="print-worked" key={example.title}><h3>{example.title}</h3><p>{example.problem}</p><ol>{example.approach.map((step) => <li key={step}>{step}</li>)}</ol><p><strong>{banglaMedium ? "যাচাই:" : "Check:"}</strong> {example.checkpoint}</p></div>)}</section>
            <section><h2>{banglaMedium ? "৮. সৃজনশীল/CQ উত্তর কাঠামো" : "8. Writing framework"}</h2><p>{resource.cq.stimulus}</p><ol>{resource.cq.framework.map((step) => <li key={step}>{step}</li>)}</ol></section>
            <section className="print-question-bank"><h2>{banglaMedium ? "৯. অনুশীলন প্রশ্ন" : "9. Practice questions"}</h2><p className="print-section-intro">{banglaMedium ? "প্রথমে উত্তর না দেখে সব প্রশ্ন সমাধান করো। বহুনির্বাচনি অংশে কোনো উত্তর আগে থেকে চিহ্নিত করা নেই; উত্তরসূচি এই অংশের শেষে দেওয়া হয়েছে।" : "Attempt every question first. No MCQ answer is preselected; the key appears after the complete question section."}</p><section className="print-question-group"><h3>{banglaMedium ? "ক. বহুনির্বাচনি প্রশ্ন" : "A. Multiple-choice questions"}</h3>{printableMcqs.map((question, index) => <article className="print-question" key={`mcq-question-${index}`}><div className="print-question-label"><strong>{index + 1}. MCQ</strong><span>{question.category} · {question.level}</span></div><p style={{whiteSpace:"pre-line"}}>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</p>{question.optionsBn && <div className="print-options">{question.optionsBn.map((option, optionIndex) => <p key={`${option}-${optionIndex}`}><strong>{(banglaMedium ? ["ক","খ","গ","ঘ"] : ["A","B","C","D"])[optionIndex]}.</strong><span>{option}</span></p>)}</div>}</article>)}</section><section className="print-question-group"><h3>{banglaMedium ? "খ. সৃজনশীল ও লিখিত প্রশ্ন" : "B. Creative and written questions"}</h3>{printableWrittenQuestions.map((question, index) => <article className="print-question" key={`written-question-${index}`}><div className="print-question-label"><strong>{index + 1}. {question.type}</strong><span>{question.category} · {question.level} · {question.marks ?? 10} {banglaMedium ? "নম্বর" : "marks"}</span></div><p style={{whiteSpace:"pre-line"}}>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</p></article>)}</section></section>
            <section className="print-answer-section"><h2>{banglaMedium ? "১০. উত্তরসূচি, মডেল উত্তর ও মূল্যায়ন নির্দেশিকা" : "10. Answer key, model answers and marking guides"}</h2><section className="print-answer-group"><h3>{banglaMedium ? "ক. MCQ উত্তরসূচি" : "A. MCQ answer key"}</h3><div className="print-mcq-key-grid">{printableMcqs.map((question, index) => <span key={`mcq-key-${index}`}><strong>{index + 1}.</strong> {(banglaMedium ? ["ক","খ","গ","ঘ"] : ["A","B","C","D"])[question.correctIndex ?? 0]}</span>)}</div>{printableMcqs.map((question, index) => <article className="print-answer print-mcq-explanation" key={`mcq-answer-${index}`}><h4>{index + 1}. {(banglaMedium ? ["ক","খ","গ","ঘ"] : ["A","B","C","D"])[question.correctIndex ?? 0]} — {question.optionsBn?.[question.correctIndex ?? 0]}</h4><p><strong>{banglaMedium ? "ব্যাখ্যা:" : "Explanation:"}</strong> {banglaMedium ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p></article>)}</section><section className="print-answer-group"><h3>{banglaMedium ? "খ. সৃজনশীল ও লিখিত উত্তর" : "B. Creative and written answers"}</h3>{printableWrittenQuestions.map((question, index) => <article className="print-answer" key={`written-answer-${index}`}><h4>{index + 1}. {question.type} · {question.marks ?? 10} {banglaMedium ? "নম্বর" : "marks"}</h4><p><strong>{banglaMedium ? "উত্তর নির্দেশিকা:" : "Answer guide:"}</strong> {banglaMedium ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p>{(banglaMedium ? question.markingPointsBn : question.markingPoints) && <ul>{(banglaMedium ? question.markingPointsBn : question.markingPoints)?.map((point) => <li key={point}>{point}</li>)}</ul>}{(banglaMedium ? question.modelAnswerBn : question.modelAnswer) && <div className="print-model-answer" style={{whiteSpace:"pre-line"}}><strong>{banglaMedium ? "পূর্ণাঙ্গ মডেল উত্তর:" : "Complete model answer:"}</strong><ModelAnswerBreakdown text={(banglaMedium ? question.modelAnswerBn : question.modelAnswer)!} bangla={banglaMedium} cq={question.type === "CQ"}/></div>}</article>)}</section></section>
            <footer>© 2026 HSC2Plus. All rights reserved. Personal educational use only. Reproduction or commercial distribution without permission is prohibited.</footer>
          </article>
          {display === "full" && <div className="resource-tabs exam-only-tabs" role="tablist" aria-label={banglaMedium ? "অধ্যায়ভিত্তিক পরীক্ষা প্রস্তুতি" : "Chapter exam preparation"}>
            <div className="resource-tab-group practice-tabs">
              <span>{banglaMedium ? "পরীক্ষা প্রস্তুতি" : "EXAM WORKSPACE"}</span>
              {modes.map(({ id, label, icon: Icon }) => (
                <button role="tab" aria-selected={mode === id} className={mode === id ? "active" : ""} onClick={() => setMode(id)} key={id}>
                  <Icon size={16} />{label}
                </button>
              ))}
            </div>
          </div>}
          <div className="resource-body">
            {mode === "guide" && resource.guide && (
              <div className="study-guide">
                <section className="guide-concept">
                  <span className="mini-heading"><Brain size={16}/> {banglaMedium ? "মূল ধারণা" : "CORE CONCEPT"}</span>
                  <h3>{resource.guide.concept}</h3>
                  <p>{resource.guide.application}</p>
                </section>
                <div className="guide-grid">
                  <section>
                    <span className="mini-heading">{banglaMedium ? "গুরুত্বপূর্ণ পরিভাষা" : "KEY TERMS"}</span>
                    <div className="term-cloud">{resource.guide.terminology.map((term) => <span key={term}>{term}</span>)}</div>
                  </section>
                  <section>
                    <span className="mini-heading">{banglaMedium ? "সূত্র বা উত্তর কাঠামো" : "FORMULAS & ANSWER STRUCTURE"}</span>
                    <ul>{resource.guide.structures.map((item) => <li key={item}>{item}</li>)}</ul>
                  </section>
                </div>
                <section className="guide-method">
                  <span className="mini-heading"><ListChecks size={16}/> {banglaMedium ? "নির্ভরযোগ্য সমাধান পদ্ধতি" : "RELIABLE METHOD"}</span>
                  {resource.guide.method.map((step, index) => <div key={step}><span>{index + 1}</span><p>{step}</p></div>)}
                </section>
                <div className="guide-grid checks">
                  <section><span className="mini-heading">{banglaMedium ? "নিজে যাচাই করো" : "SELF-CHECK"}</span><ul>{resource.guide.selfCheck.map((item) => <li key={item}>{item}</li>)}</ul></section>
                  <section><span className="mini-heading">{banglaMedium ? "পরীক্ষার চেকলিস্ট" : "EXAM CHECKLIST"}</span><ul>{resource.guide.examChecklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
                </div>
                {resource.examToolkit && (
                  <section className="exam-toolkit">
                    <div className="toolkit-heading"><span className="eyebrow">EXAM TOOLKIT</span><h3>{banglaMedium ? "এই অধ্যায়ে নম্বর তোলার প্রয়োজনীয় সহায়িকা" : "Tools for a stronger exam answer"}</h3></div>
                    <div className="toolkit-grid">
                      <article><span>01</span><h4>{banglaMedium ? "সূত্র ও কাঠামো" : "Essentials"}</h4><ul>{resource.examToolkit.essentials.map((item) => <li key={item}>{item}</li>)}</ul></article>
                      <article><span>02</span><h4>{banglaMedium ? "যে ভুলগুলো এড়াবে" : "Mistakes to avoid"}</h4><ul>{resource.examToolkit.mistakes.map((item) => <li key={item}>{item}</li>)}</ul></article>
                      <article><span>03</span><h4>Scoring Moves</h4><ul>{resource.examToolkit.scoringMoves.map((item) => <li key={item}>{item}</li>)}</ul></article>
                    </div>
                  </section>
                )}
              </div>
            )}
            {mode === "notes" && (
              <div className="full-chapter-notes">
                {resource.guide && (
                  <section className="notes-opening">
                    <span className="mini-heading"><BookOpen size={16}/> {banglaMedium ? "অধ্যায়ের ভিত্তি" : "CHAPTER FOUNDATION"}</span>
                    <h3>{resource.guide.concept}</h3>
                    <p>{resource.guide.application}</p>
                  </section>
                )}
                <div className="detailed-note-lessons">
                  {resource.lessonDetails?.map((lesson, index) => (
                    <article key={lesson.title}>
                      <div className="note-lesson-number">{String(index + 1).padStart(2, "0")}</div>
                      <div>
                        <span className="mini-heading">{banglaMedium ? "বিস্তারিত পাঠ" : "DETAILED LESSON"}</span>
                        <h3>{lesson.title}</h3>
                        <p>{lesson.concept}</p>
                        <ol>{lesson.steps.map((step) => <li key={step}>{step}</li>)}</ol>
                        <div className="note-application"><strong>{banglaMedium ? "বাস্তব প্রয়োগ" : "Application"}</strong><p>{lesson.application}</p></div>
                        <div className="note-checkpoint"><CheckCircle2 size={16}/><p><strong>{banglaMedium ? "নিজে যাচাই করো:" : "Self-check:"}</strong> {lesson.checkpoint}</p></div>
                      </div>
                    </article>
                  ))}
                </div>
                <section className="quick-revision-notes">
                  <span className="mini-heading"><ListChecks size={16}/> {banglaMedium ? "দ্রুত পুনরালোচনা" : "QUICK REVISION"}</span>
                  <div className="note-stack">
                    {resource.notes.map((note, index) => (
                      <article key={note}><span>{index + 1}</span><p>{note}</p></article>
                    ))}
                  </div>
                </section>
              </div>
            )}
            {mode === "worked" && (
              <div className="worked-solution">
                <span className="mini-heading">
                  <Brain size={16} /> {banglaMedium ? "সমস্যা" : "PROBLEM"}
                </span>
                <h3>{resource.worked.problem}</h3>
                <div className="solution-steps">
                  {resource.worked.steps.map((step, index) => (
                    <div key={step}>
                      <span>{banglaMedium ? `ধাপ ${index + 1}` : `STEP ${index + 1}`}</span>
                      <p>{step}</p>
                    </div>
                  ))}
                </div>
                <div className="final-answer">
                  <CheckCircle2 size={18} />
                  <div>
                    <small>{banglaMedium ? "চূড়ান্ত উত্তর" : "FINAL ANSWER"}</small>
                    <strong>{resource.worked.answer}</strong>
                  </div>
                </div>
                {resource.extraWorked?.map((example) => (
                  <article className="extra-worked" key={example.title}>
                    <span className="mini-heading">{example.title}</span>
                    <h3>{example.problem}</h3>
                    <ol>{example.approach.map((step) => <li key={step}>{step}</li>)}</ol>
                    <p><strong>{banglaMedium ? "যাচাই:" : "Check:"}</strong> {example.checkpoint}</p>
                  </article>
                ))}
              </div>
            )}
            {mode === "cq" && (
              <div className="cq-framework">
                <div className="cq-timer">
                  <div>
                    <small>{banglaMedium ? "সময় ধরে লেখা অনুশীলন" : "TIMED WRITING PRACTICE"}</small>
                    <strong>{String(Math.floor(cqSeconds / 60)).padStart(2, "0")}:{String(cqSeconds % 60).padStart(2, "0")}</strong>
                  </div>
                  <button onClick={() => setCqRunning((value) => !value)}>
                    {banglaMedium ? (cqRunning ? "বিরতি" : cqSeconds === 20 * 60 ? "২০ মিনিটের টাইমার শুরু" : "আবার শুরু") : (cqRunning ? "Pause" : cqSeconds === 20 * 60 ? "Start 20-minute timer" : "Resume")}
                  </button>
                  <button onClick={() => { setCqRunning(false); setCqSeconds(20 * 60); }}>Reset</button>
                </div>
                <span className="mini-heading">
                  <PenLine size={16} /> {banglaMedium ? "উদ্দীপক" : "WRITING TASK"}
                </span>
                <p className="cq-stimulus">{banglaMedium ? `উদ্দীপক: বাংলাদেশের বাস্তব প্রেক্ষাপটে “${resource.unitBn}” বিষয়ক তথ্য, ঘটনা বা সমস্যা উপস্থাপন করা হলো। নিচের প্রশ্নগুলোর উত্তর দাও।` : resource.cq.stimulus}</p>
                <div>
                  {(banglaMedium ? [
                    "ক. প্রাসঙ্গিক ধারণা বা পরিভাষাটি নির্ভুলভাবে লেখো। (জ্ঞান)",
                    "খ. ধারণাটির অর্থ বা পারস্পরিক সম্পর্ক ব্যাখ্যা করো। (অনুধাবন)",
                    "গ. উদ্দীপকের নির্দিষ্ট তথ্য ব্যবহার করে পাঠ্যবইয়ের নীতি বা পদ্ধতি প্রয়োগ করো। (প্রয়োগ)",
                    "ঘ. তথ্য ও প্রমাণ বিশ্লেষণ করে যুক্তিসংগত মূল্যায়ন ও সিদ্ধান্ত দাও। (উচ্চতর দক্ষতা)",
                  ] : resource.cq.framework).map((step, index) => (
                    <article key={step}>
                      <span>{banglaMedium ? ["ক", "খ", "গ", "ঘ"][index] : String.fromCharCode(65 + index)}</span>
                      <p>{step}</p>
                    </article>
                  ))}
                </div>
                <section className="cq-upload-workspace">
                  <div className="cq-submission-head">
                    <div><Upload size={19}/><div><strong>{banglaMedium ? "খাতায় লিখে PDF প্রস্তুত করো" : "Write on paper and prepare a PDF"}</strong><span>{banglaMedium ? "এখনই মূল্যায়ন নির্দেশিকা দিয়ে নিজে যাচাই করো; AI জমা এখনো চালু নয়" : "Review it now with the rubric; AI submission is not live yet"}</span></div></div>
                    <button type="button" onClick={selectAllCqParts}>{banglaMedium ? "সব অংশ নির্বাচন" : "Select all parts"}</button>
                  </div>
                  <div className="cq-part-checklist" aria-label={banglaMedium ? "মূল্যায়নের অংশ নির্বাচন" : "Select parts for assessment"}>
                    {(banglaMedium ? ["ক · জ্ঞান", "খ · অনুধাবন", "গ · প্রয়োগ", "ঘ · উচ্চতর দক্ষতা"] : ["A · Identify", "B · Explain", "C · Apply", "D · Evaluate"]).map((label, partIndex) => (
                      <label key={label}><input name={`cq-part-${partIndex}`} type="checkbox" checked={cqChecklist[partIndex]} onChange={() => toggleCqPart(partIndex)}/><span>{label}</span></label>
                    ))}
                  </div>
                  <label className={`pdf-dropzone ${cqPdf ? "ready" : ""}`}>
                    <input type="file" accept="application/pdf,.pdf" onChange={(event) => handleCqPdf(event.target.files?.[0])}/>
                    <Upload size={25}/>
                    <strong>{cqPdf ? cqPdf.name : (banglaMedium ? "ডিভাইস থেকে উত্তরের PDF নির্বাচন করো" : "Choose answer PDF from this device")}</strong>
                    <span>{cqPdf ? `${(cqPdf.size / 1024 / 1024).toFixed(2)} MB · ${cqChecklist.filter(Boolean).length}/4 ${banglaMedium ? "অংশ নির্বাচিত" : "parts selected"}` : (banglaMedium ? "PDF · সর্বোচ্চ ২০ MB" : "PDF · maximum 20 MB")}</span>
                  </label>
                  {cqPdfError && <p className="upload-error">{cqPdfError}</p>}
                  {cqPdf && cqChecklist.some(Boolean) && <section className="cq-self-review">
                    <div className="cq-self-review-head"><div><CheckCircle2 size={18}/><span><strong>{banglaMedium ? "মূল্যায়ন নির্দেশিকা দিয়ে নিজে যাচাই" : "Immediate rubric self-check"}</strong><small>{banglaMedium ? "PDF এই ডিভাইসেই আছে—কোথাও পাঠানো হয়নি" : "The PDF stays on this device and has not been submitted"}</small></span></div><strong>{earnedCqMarks}/{selectedCqMarks}</strong></div>
                    <div className="cq-score-grid">
                      {(banglaMedium ? ["ক · নির্ভুল পরিচয়", "খ · ব্যাখ্যা ও সম্পর্ক", "গ · উদ্দীপকে প্রয়োগ", "ঘ · বিশ্লেষণ ও সিদ্ধান্ত"] : ["A · Accurate identification", "B · Explanation and relationship", "C · Application to stimulus", "D · Analysis and judgement"]).map((label, partIndex) => cqChecklist[partIndex] && <label key={label}><span>{label}<small>{cqPartMarks[partIndex]} {banglaMedium ? "নম্বর" : cqPartMarks[partIndex] === 1 ? "mark" : "marks"}</small></span><select value={cqSelfScores[partIndex]} onChange={(event) => setCqSelfScores((scores) => scores.map((score, index) => index === partIndex ? Number(event.target.value) : score))}>{Array.from({length:cqPartMarks[partIndex]+1},(_,score)=><option key={score} value={score}>{score}</option>)}</select></label>)}
                    </div>
                    <details><summary>{banglaMedium ? "পূর্ণ মূল্যায়ন নির্দেশিকা দেখো" : "View the complete marking framework"}</summary><ol>{(banglaMedium ? ["ক: সঠিক পরিভাষা বা ধারণার নির্ভুল পরিচয়।", "খ: ধারণার অর্থ, কারণ বা সম্পর্ক স্পষ্ট ব্যাখ্যা।", "গ: উদ্দীপকের নির্দিষ্ট তথ্য ধরে নিয়ম বা পদ্ধতির প্রয়োগ।", "ঘ: প্রমাণ, তুলনা, সীমাবদ্ধতা ও যুক্তিসংগত সিদ্ধান্ত।"] : resource.cq.framework).map((line)=><li key={line}>{line}</li>)}</ol></details>
                    <button type="button" onClick={() => { setCqPdf(null); setCqSelfScores([0,0,0,0]); }}>{banglaMedium ? "নির্বাচিত PDF সরাও" : "Remove selected PDF"}</button>
                  </section>}
                  <div className="ai-assessment-status">
                    <ShieldCheck size={19}/>
                    <div><strong>{banglaMedium ? aiCqAssessmentReadiness.studentLabelBn : aiCqAssessmentReadiness.studentLabel}</strong><p>{banglaMedium ? "নির্বাচিত ফাইলটি এই ডিভাইসের বাইরে পাঠানো হয় না এবং HSC2Plus এটি পড়তে, সংরক্ষণ করতে বা নম্বর দিতে পারে না। নিরাপদ server-side ব্যবস্থা, স্পষ্ট গোপনীয়তা নীতি ও সম্মতির ধাপ প্রস্তুত না হওয়া পর্যন্ত AI scoring বন্ধ থাকবে। আপাতত উপরের মূল্যায়ন নির্দেশিকা ব্যবহার করে নিজে যাচাই করো।" : "The selected file never leaves this device. HSC2Plus cannot read, store or score it. AI scoring stays disabled until secure server-side handling, an explicit privacy policy and consent flow are production-ready; use the rubric self-check above for now."}</p></div>
                  </div>
                  <details className="ai-readiness-gates">
                    <summary><span><CircleAlert size={15}/><span><strong>{banglaMedium ? "বাস্তব AI মূল্যায়নের আগে যা তৈরি ও যাচাই করতে হবে" : "Required before real AI assessment"}</strong><small>{banglaMedium ? "সব ধাপ production-ready না হওয়া পর্যন্ত AI scoring বন্ধ" : "AI scoring stays disabled until every production gate is proven"}</small></span></span><ChevronRight size={15}/></summary>
                    <div><p>{banglaMedium ? aiCqAssessmentReadiness.releaseRuleBn : aiCqAssessmentReadiness.releaseRule}</p><section>{aiCqAssessmentReadiness.gates.map((gate)=><article key={gate.id}><Clock3 size={13}/><span>{banglaMedium ? gate.labelBn : gate.label}</span><em>{banglaMedium ? "তৈরি হয়নি" : "Not implemented"}</em></article>)}</section></div>
                  </details>
                </section>
              </div>
            )}
            {mode === "bank" && (
              <div className="bank-overview">
                <div className="bank-stats">
                  <span>
                    <strong>{resource.bank.questions?.filter((item) => item.type === "MCQ").length ?? 0}</strong>
                    <small>{banglaMedium ? "বহুনির্বাচনি প্রস্তুত" : "MCQ ready"}</small>
                  </span>
                  <span>
                    <strong>{resource.bank.questions?.filter((item) => item.type === "CQ").length ?? 0}</strong>
                    <small>{banglaMedium ? "সৃজনশীল প্রস্তুত" : "CQ ready"}</small>
                  </span>
                  <span>
                    <strong>{resource.bank.questions?.filter((item) => item.type === "Written").length ?? 0}</strong>
                    <small>{banglaMedium ? "লিখিত প্রস্তুত" : "Written ready"}</small>
                  </span>
                </div>
                <section className="bank-learning-progress" aria-label={banglaMedium ? "অধ্যায়ের প্রশ্ন অনুশীলন অগ্রগতি" : "Chapter question practice progress"}>
                  <div>
                    <span><strong>{attemptedBankQuestions.length}</strong>/{resource.bank.questions?.length ?? 0}</span>
                    <div><strong>{banglaMedium ? "অনন্য প্রশ্ন রিভিউ হয়েছে" : "unique questions reviewed"}</strong><small>{banglaMedium ? "উত্তর বা মূল্যায়ন নির্দেশিকা খুললে অগ্রগতি সংরক্ষিত হয়" : "Progress is saved when you open an answer or marking guide"}</small></div>
                  </div>
                  <div className="bank-learning-progress-bar"><span style={{width: `${Math.min(100, Math.round((attemptedBankQuestions.length / Math.max(1, resource.bank.questions?.length ?? 1)) * 100))}%`}} /></div>
                  <div className="bank-progress-actions">
                    <label><input type="checkbox" checked={unseenOnly} onChange={(event) => { setUnseenOnly(event.target.checked); setBankPage(0); }}/><span>{banglaMedium ? "শুধু না-দেখা প্রশ্ন" : "Unseen questions only"}</span></label>
                    {attemptedBankQuestions.length > 0 && <button type="button" onClick={resetBankProgress}>{banglaMedium ? "অগ্রগতি রিসেট" : "Reset progress"}</button>}
                  </div>
                </section>
                <div className="bank-focus">
                  <Target size={19} />
                  <div>
                    <small>{banglaMedium ? "প্রস্তুতির মূল ক্ষেত্র" : "FOCUS AREA"}</small>
                    <strong>{resource.bank.focus}</strong>
                  </div>
                </div>
                <p>
                  {banglaMedium ? "প্রশ্নগুলো ভিত্তিমূলক, মানসম্মত ও চ্যালেঞ্জ—এই তিন স্তরে সাজানো। চেষ্টা করার সময় উত্তর লুকানো থাকবে এবং প্রতিটি প্রশ্নে সংক্ষিপ্ত ব্যাখ্যা বা মূল্যায়ন নির্দেশিকা থাকবে।" : "Questions are organised into Foundation, Standard and Challenge levels. Answers stay hidden while you attempt them, with an explanation or marking guide for every question."}
                </p>
                <section className="bank-presets" aria-label={banglaMedium ? "দ্রুত অনুশীলনের পথ" : "Quick practice paths"}>
                  <div><span className="mini-heading"><Target size={15}/>{banglaMedium ? "দ্রুত অনুশীলনের পথ" : "QUICK PRACTICE PATHS"}</span><p>{banglaMedium ? "এক ক্লিকে লক্ষ্য অনুযায়ী প্রশ্ন সাজাও; চাইলে নিচের ফিল্টার দিয়ে আরও নির্দিষ্ট করো।" : "Set the right filters for your goal in one click, then refine them below if needed."}</p></div>
                  <div>
                    <button className={bankPreset === "all" ? "active" : ""} onClick={() => applyBankPreset("all")}>{banglaMedium ? "সব প্রশ্ন" : "All questions"}</button>
                    <button className={bankPreset === "foundation" ? "active" : ""} onClick={() => applyBankPreset("foundation")}>{banglaMedium ? "ভিত্তিমূলক MCQ" : "Foundation MCQ"}</button>
                    <button className={bankPreset === "board-cq" ? "active" : ""} onClick={() => applyBankPreset("board-cq")}>{banglaMedium ? "বোর্ড CQ" : "Board CQ"}</button>
                    <button className={bankPreset === "college-challenge" ? "active" : ""} onClick={() => applyBankPreset("college-challenge")}>{banglaMedium ? "কলেজ-স্ট্যান্ডার্ড" : "College Challenge"}</button>
                  </div>
                  <button className="new-bank-set" onClick={() => { setBankRound((round) => round + 1); setBankPage(0); }}>{banglaMedium ? "নতুন অনুশীলন সেট · না-দেখা প্রশ্ন আগে" : "New practice set · unseen first"}<span>{banglaMedium ? `সেশন ${bankRound + 1}` : `Session ${bankRound + 1}`}</span></button>
                </section>
                <div className="bank-filters" aria-label="প্রশ্ন ছাঁকনি">
                  <label className="bank-search-field">
                    {banglaMedium ? "প্রশ্ন খুঁজুন" : "Search questions"}
                    <span><Search size={16}/><input value={bankQuery} onChange={(event) => { setBankQuery(event.target.value); setBankPage(0); setBankPreset("custom"); }} placeholder={banglaMedium ? "বিষয়, শব্দ বা ধারণা লিখুন" : "Type a topic, term or concept"}/></span>
                  </label>
                  <label>
                    {banglaMedium ? "কঠিনতার স্তর" : "Difficulty"}
                    <select value={level} onChange={(event) => { setLevel(event.target.value as typeof level); setBankPage(0); setBankPreset("custom"); }}>
                      <option value="All">{banglaMedium ? "সব" : "All"}</option>
                      <option value="Foundation">{banglaMedium ? "ভিত্তিমূলক" : "Foundation"}</option>
                      <option value="Standard">{banglaMedium ? "মানসম্মত" : "Standard"}</option>
                      <option value="Challenge">{banglaMedium ? "চ্যালেঞ্জ" : "Challenge"}</option>
                    </select>
                  </label>
                  <label>
                    {banglaMedium ? "প্রশ্নের ধরন" : "Question type"}
                    <select value={questionType} onChange={(event) => { setQuestionType(event.target.value as typeof questionType); setBankPage(0); setBankPreset("custom"); }}>
                      <option value="All">{banglaMedium ? "সব" : "All"}</option>
                      <option value="MCQ">{banglaMedium ? "বহুনির্বাচনি" : "MCQ"}</option>
                      <option value="CQ">{banglaMedium ? "সৃজনশীল" : "CQ"}</option>
                      <option value="Written">{banglaMedium ? "লিখিত" : "Written"}</option>
                    </select>
                  </label>
                  <label>
                    {banglaMedium ? "শ্রেণি" : "Category"}
                    <select value={category} onChange={(event) => { setCategory(event.target.value as typeof category); setBankPage(0); setBankPreset("custom"); }}>
                      <option value="All">{banglaMedium ? "সব" : "All"}</option>
                      <option value="Concept">{banglaMedium ? "ধারণাভিত্তিক" : "Concept"}</option>
                      <option value="Application">{banglaMedium ? "প্রয়োগ" : "Application"}</option>
                      <option value="Board-style">{banglaMedium ? "বোর্ড-প্যাটার্ন" : "Board-style"}</option>
                      <option value="College-standard">{banglaMedium ? "কলেজ-স্ট্যান্ডার্ড" : "College-standard"}</option>
                    </select>
                  </label>
                </div>
                <div className="bank-result-summary"><strong>{visibleQuestions.length}</strong><span>{banglaMedium ? "টি প্রশ্ন পাওয়া গেছে" : "questions found"}</span>{visibleQuestions.length > 0 && <small>{banglaMedium ? `${bankPage * bankPageSize + 1}–${Math.min((bankPage + 1) * bankPageSize, visibleQuestions.length)} দেখানো হচ্ছে` : `Showing ${bankPage * bankPageSize + 1}–${Math.min((bankPage + 1) * bankPageSize, visibleQuestions.length)}`}</small>}</div>
                <div className="question-bank-list">
                  {pagedBankQuestions.map((question, index) => (
                    <article key={`${question.type}-${question.level}-${bankPage}-${index}`}>
                      <div>
                        <span>{banglaMedium ? (question.type === "MCQ" ? "বহুনির্বাচনি" : question.type === "CQ" ? "সৃজনশীল" : "লিখিত") : question.type}</span>
                        <span>{banglaMedium ? (question.level === "Foundation" ? "ভিত্তিমূলক" : question.level === "Standard" ? "মানসম্মত" : "চ্যালেঞ্জ") : question.level}</span>
                        <span>{banglaMedium ? (question.category === "Board-style" ? "বোর্ড-প্যাটার্ন" : question.category === "College-standard" ? "কলেজ-স্ট্যান্ডার্ড" : question.category === "Concept" ? "ধারণাভিত্তিক" : "প্রয়োগ") : question.category}</span>
                      </div>
                      <h3 style={{ whiteSpace: "pre-line" }}>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</h3>
                      <QuestionVisual visual={question.visual} surface="question"/>
                      {question.optionsBn && <ol className="bank-option-preview">{question.optionsBn.map((option) => <li key={option}>{option}</li>)}</ol>}
                      <details onToggle={(event) => { if (!event.currentTarget.open) markBankQuestionReviewed(stableQuestionKey(question)); }}>
                        <summary>{banglaMedium ? "উত্তর ও মূল্যায়ন নির্দেশিকা দেখো" : "View answer and marking guide"}</summary>
                        <QuestionVisual visual={question.visual} surface="answer"/>
                        <p>{banglaMedium ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p>
                        {(banglaMedium ? question.markingPointsBn : question.markingPoints) && <ol className="marking-breakdown">{(banglaMedium ? question.markingPointsBn : question.markingPoints)?.map((point) => <li key={point}>{point}</li>)}</ol>}
                        {(banglaMedium ? question.modelAnswerBn : question.modelAnswer) && <div className="bank-model-answer"><strong>{banglaMedium ? "পূর্ণাঙ্গ মডেল উত্তর" : "Complete model answer"}</strong><ModelAnswerBreakdown text={(banglaMedium ? question.modelAnswerBn : question.modelAnswer)!} bangla={banglaMedium} cq={question.type === "CQ"}/></div>}
                      </details>
                      <small className="question-source">{question.marks ? `${question.marks} ${banglaMedium ? "নম্বর" : question.marks === 1 ? "mark" : "marks"}` : ""}</small>
                    </article>
                  ))}
                  {visibleQuestions.length === 0 && <div className="bank-empty"><Search size={21}/><strong>{banglaMedium ? "মিলছে এমন প্রশ্ন নেই" : "No matching questions"}</strong><span>{banglaMedium ? "খোঁজের শব্দ বা একটি ফিল্টার পরিবর্তন করো।" : "Change the search term or one filter."}</span></div>}
                </div>
                <div className="deep-question-pages bank-pages"><button disabled={bankPage === 0} onClick={() => setBankPage((page) => Math.max(0,page-1))}>{banglaMedium ? "আগের ১০টি" : "Previous 10"}</button><span>{bankPage + 1}/{bankPageCount}</span><button disabled={bankPage >= bankPageCount - 1} onClick={() => setBankPage((page) => Math.min(bankPageCount - 1,page+1))}>{banglaMedium ? "পরের ১০টি" : "Next 10"}</button></div>
              </div>
            )}
            {mode === "mock" && (
              <section className="chapter-mock-test exam-library-mock">
                <div className="deep-panel-head mock-test-head">
                  <div><span className="eyebrow">CHAPTER MODEL TEST</span><h3>{banglaMedium ? `${resource.unitBn} · বোর্ড ও কলেজ পরীক্ষার মান` : `${resource.unit} · Board & College standard`}</h3><p>{banglaMedium ? "১০টি MCQ, ২টি সৃজনশীল ও ২টি লিখিত প্রশ্ন। উত্তর দেখার আগে ৯০ মিনিটে সম্পূর্ণ সেটটি শেষ করো।" : "10 MCQ, 2 CQ and 2 written questions. Finish the full set in 90 minutes before revealing the guide."}</p></div>
                  <div><span><Clock3 size={15}/>{banglaMedium ? "৯০ মিনিট" : "90 minutes"}</span><strong>{chapterMockMarks} {banglaMedium ? "নম্বর" : "marks"}</strong></div>
                </div>
                <div className="mock-test-actions"><button onClick={() => { setExamVariant((value) => value + 1); setExamGuideVisible(false); setMockMcqAnswers({}); }}><RotateCcw size={15}/>{banglaMedium ? "নতুন প্রশ্ন সেট" : "Generate another set"}</button><span>{banglaMedium ? `সেট ${examVariant + 1} · নিজস্ব বোর্ড/কলেজ-প্যাটার্ন · MCQ উত্তর ${Object.keys(mockMcqAnswers).length}/10` : `Set ${examVariant + 1} · Original board/college-pattern · MCQ answered ${Object.keys(mockMcqAnswers).length}/10`}</span></div>
                <div className="mock-paper-section"><h4>{banglaMedium ? "অংশ ক · বহুনির্বাচনি" : "Part A · Multiple choice"}<span>10 × 1 = 10</span></h4>{chapterMockMcqs.map((question, index) => <article key={`library-mcq-${index}`}><strong>{index + 1}.</strong><div><p>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</p>{question.optionsBn && <div className="mock-mcq-options" role="radiogroup" aria-label={banglaMedium ? `${index + 1} নম্বর প্রশ্নের উত্তর` : `Answer for question ${index + 1}`}>{question.optionsBn.map((option, optionIndex) => { const selectedOption = mockMcqAnswers[index] === optionIndex; const correctOption = question.correctIndex === optionIndex; return <button type="button" role="radio" aria-checked={selectedOption} disabled={examGuideVisible} className={`${selectedOption ? "selected" : ""} ${examGuideVisible && correctOption ? "correct" : ""} ${examGuideVisible && selectedOption && !correctOption ? "incorrect" : ""}`} key={`${option}-${optionIndex}`} onClick={() => setMockMcqAnswers((answers) => ({ ...answers, [index]: optionIndex }))}><span>{banglaMedium ? ["ক", "খ", "গ", "ঘ"][optionIndex] : String.fromCharCode(65 + optionIndex)}</span><strong>{option}</strong>{selectedOption && !examGuideVisible && <Check size={15}/>} {examGuideVisible && correctOption && <CheckCircle2 size={16}/>}</button>; })}</div>}</div></article>)}</div>
                <div className="mock-paper-section"><h4>{banglaMedium ? "অংশ খ · সৃজনশীল" : "Part B · Creative questions"}<span>2 × 10 = 20</span></h4>{chapterMockCqs.map((question, index) => <article key={`library-cq-${index}`}><strong>{index + 1}.</strong><div><p style={{whiteSpace:"pre-line"}}>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</p></div></article>)}</div>
                <div className="mock-paper-section"><h4>{banglaMedium ? "অংশ গ · লিখিত বিশ্লেষণ" : "Part C · Written analysis"}<span>2 × 10 = 20</span></h4>{chapterMockWritten.map((question, index) => <article key={`library-written-${index}`}><strong>{index + 1}.</strong><div><p>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</p></div></article>)}</div>
                <button className="mock-guide-toggle" onClick={() => setExamGuideVisible((value) => !value)}><ShieldCheck size={16}/>{examGuideVisible ? (banglaMedium ? "মূল্যায়ন নির্দেশিকা লুকাও" : "Hide assessment guide") : (banglaMedium ? "সমাধান শেষে মূল্যায়ন নির্দেশিকা দেখো" : "Finish first, then reveal the guide")}</button>
                {examGuideVisible && <div className="mock-answer-guide">{chapterMockQuestions.map((question, index) => { const isMcq = question.type === "MCQ"; const mcqIndex = isMcq ? index : -1; const options = question.optionsBn ?? []; const correctIndex = question.correctIndex ?? 0; const chosenIndex = isMcq ? mockMcqAnswers[mcqIndex] : undefined; const modelAnswer = banglaMedium ? question.modelAnswerBn : question.modelAnswer; return <article key={`library-guide-${index}`} className={question.type === "CQ" ? "full-cq-answer" : ""}><span>{index + 1}</span><div><strong>{question.type} · {question.marks ?? (isMcq ? 1 : 10)} {banglaMedium ? "নম্বর" : "marks"}</strong>{isMcq && <div className="mock-mcq-result"><b>{banglaMedium ? "সঠিক উত্তর" : "Correct answer"}: {banglaMedium ? ["ক", "খ", "গ", "ঘ"][correctIndex] : String.fromCharCode(65 + correctIndex)} — {options[correctIndex]}</b><small>{chosenIndex === undefined ? (banglaMedium ? "উত্তর দেওয়া হয়নি" : "Not answered") : chosenIndex === correctIndex ? (banglaMedium ? "তোমার উত্তর সঠিক" : "Your answer is correct") : (banglaMedium ? `তোমার উত্তর: ${["ক", "খ", "গ", "ঘ"][chosenIndex]} — ${options[chosenIndex]}` : `Your answer: ${String.fromCharCode(65 + chosenIndex)} — ${options[chosenIndex]}`)}</small></div>}<p>{banglaMedium ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p>{(banglaMedium ? question.markingPointsBn : question.markingPoints) && <ul>{(banglaMedium ? question.markingPointsBn : question.markingPoints)?.map((point) => <li key={point}>{point}</li>)}</ul>}{!isMcq && modelAnswer && <div className="mock-complete-answer"><strong>{banglaMedium ? "পূর্ণাঙ্গ মডেল উত্তর" : "Complete model answer"}</strong><ModelAnswerBreakdown text={modelAnswer} bangla={banglaMedium} cq={question.type === "CQ"}/></div>}</div></article>; })}</div>}
              </section>
            )}
            {mode === "archive" && (
              <section className="previous-board-archive">
                <div className="deep-panel-head archive-panel-head"><div><span className="eyebrow">QUESTION ARCHIVE</span><h3>{banglaMedium ? "অধ্যায়ভিত্তিক প্রশ্ন আর্কাইভ" : "Chapter Question Archive"}</h3><p>{banglaMedium ? "অনুশীলনের প্রশ্ন ও উৎস-যাচাইকৃত বিগত বোর্ড প্রশ্ন—দুই সংগ্রহ আলাদা পরিচয়ে সাজানো।" : "Practice questions and source-verified previous-board questions are kept in two clearly labelled collections."}</p></div><div className="archive-head-tools"><div className="archive-count"><strong>{archiveView === "practice" ? practiceArchiveQuestions.length : previousBoardArchive.records.length}</strong><span>{archiveView === "practice" ? (banglaMedium ? "এই অধ্যায়ের প্রশ্ন" : "chapter questions") : (banglaMedium ? "যাচাইকৃত বোর্ড প্রশ্ন" : "verified board questions")}</span></div></div></div>
                <div className="archive-view-switch" role="tablist" aria-label={banglaMedium ? "আর্কাইভের ধরন" : "Archive collection"}>
                  <button type="button" role="tab" aria-selected={archiveView === "practice"} className={archiveView === "practice" ? "active" : ""} onClick={() => { setArchiveView("practice"); setArchivePage(0); }}><ListChecks size={16}/><span><strong>{banglaMedium ? "Practice Archive" : "Practice Archive"}</strong><small>{banglaMedium ? "বোর্ড-প্যাটার্ন ও কলেজ-স্ট্যান্ডার্ড" : "Board-pattern and college-standard"}</small></span></button>
                  <button type="button" role="tab" aria-selected={archiveView === "authentic"} className={archiveView === "authentic" ? "active" : ""} onClick={() => setArchiveView("authentic")}><ShieldCheck size={16}/><span><strong>{banglaMedium ? "Authentic Board Archive" : "Authentic Board Archive"}</strong><small>{banglaMedium ? "মূল স্ক্যান ও পূর্ণ উৎস যাচাই করা" : "Original scan and complete evidence"}</small></span></button>
                </div>
                {archiveView === "practice" && <>
                  <div className="archive-practice-note"><CheckCircle2 size={17}/><p>{banglaMedium ? <><strong>অনুশীলনের জন্য প্রস্তুত:</strong> এগুলো HSC পাঠ্যধারা অনুযায়ী তৈরি Board-pattern বা College-standard প্রশ্ন; বিগত বোর্ড প্রশ্ন নয়।</> : <><strong>Ready to practice:</strong> These are original Board-pattern or College-standard questions, not previous-board questions.</>}</p></div>
                  <div className="archive-practice-filters">
                    <label className="archive-search"><Search size={16}/><input value={archiveQuery} onChange={(event) => { setArchiveQuery(event.target.value); setArchivePage(0); }} placeholder={banglaMedium ? "প্রশ্ন বা উত্তর খুঁজো" : "Search questions or answers"}/></label>
                    <select value={questionType} onChange={(event) => { setQuestionType(event.target.value as typeof questionType); setArchivePage(0); }} aria-label={banglaMedium ? "প্রশ্নের ধরন" : "Question type"}><option value="All">{banglaMedium ? "সব ধরন" : "All types"}</option><option value="MCQ">MCQ</option><option value="CQ">CQ</option><option value="Written">{banglaMedium ? "লিখিত" : "Written"}</option></select>
                    <select value={level} onChange={(event) => { setLevel(event.target.value as typeof level); setArchivePage(0); }} aria-label={banglaMedium ? "কঠিনতার স্তর" : "Difficulty"}><option value="All">{banglaMedium ? "সব স্তর" : "All levels"}</option><option value="Foundation">Foundation</option><option value="Standard">Standard</option><option value="Challenge">Challenge</option></select>
                    <select value={category} onChange={(event) => { setCategory(event.target.value as typeof category); setArchivePage(0); }} aria-label={banglaMedium ? "প্রশ্নের মান" : "Question standard"}><option value="All">{banglaMedium ? "সব ক্যাটাগরি" : "All categories"}</option><option value="Board-style">Board-pattern</option><option value="College-standard">College-standard</option><option value="Concept">Concept</option><option value="Application">Application</option></select>
                  </div>
                  <div className="practice-archive-results">{pagedPracticeArchive.map((question, index) => { const modelAnswer = banglaMedium ? question.modelAnswerBn : question.modelAnswer; const markingPoints = banglaMedium ? question.markingPointsBn : question.markingPoints; return <article key={`${stableQuestionKey(question)}-${index}`} className={question.type === "CQ" ? "archive-cq-card" : ""}><header><span>{question.type}</span><span>{question.category === "Board-style" ? "Board-pattern" : question.category}</span><span>{question.level}</span><b>{question.marks ?? (question.type === "MCQ" ? 1 : 10)} {banglaMedium ? "নম্বর" : "marks"}</b></header><h4>{banglaMedium ? (question.promptBn ?? question.prompt) : question.prompt}</h4><QuestionVisual visual={question.visual} surface="question"/>{question.type === "MCQ" && question.optionsBn && <ol>{question.optionsBn.map((option, optionIndex) => <li key={option}><span>{banglaMedium ? ["ক", "খ", "গ", "ঘ"][optionIndex] : String.fromCharCode(65 + optionIndex)}</span>{option}</li>)}</ol>}<details><summary>{banglaMedium ? (question.type === "CQ" ? "পূর্ণাঙ্গ ১+২+৩+৪ উত্তর দেখো" : "উত্তর ও ব্যাখ্যা দেখো") : "Show answer and explanation"}<ChevronRight size={15}/></summary><div className="archive-answer-panel">{question.type === "MCQ" && <strong>{banglaMedium ? "সঠিক উত্তর" : "Correct answer"}: {banglaMedium ? ["ক", "খ", "গ", "ঘ"][question.correctIndex ?? 0] : String.fromCharCode(65 + (question.correctIndex ?? 0))}</strong>}<QuestionVisual visual={question.visual} surface="answer"/><p>{banglaMedium ? (question.answerGuideBn ?? question.answerGuide) : question.answerGuide}</p>{markingPoints?.length ? <ol className="marking-breakdown">{markingPoints.map((point) => <li key={point}>{point}</li>)}</ol> : null}{modelAnswer ? <div className="bank-model-answer"><strong>{banglaMedium ? "পূর্ণাঙ্গ মডেল উত্তর" : "Complete model answer"}</strong><ModelAnswerBreakdown text={modelAnswer} bangla={banglaMedium} cq={question.type === "CQ"}/></div> : null}</div></details></article>; })}</div>
                  {practiceArchiveQuestions.length === 0 && <div className="archive-empty"><Search size={24}/><strong>{banglaMedium ? "এই ফিল্টারে প্রশ্ন পাওয়া যায়নি" : "No questions match these filters"}</strong><p>{banglaMedium ? "ফিল্টার বদলে আবার চেষ্টা করো।" : "Adjust the filters and try again."}</p></div>}
                  {practiceArchivePageCount > 1 && <div className="archive-pagination"><button disabled={archivePage === 0} onClick={() => setArchivePage((page) => Math.max(0, page - 1))}><ChevronLeft size={15}/>{banglaMedium ? "আগের" : "Previous"}</button><span>{archivePage + 1} / {practiceArchivePageCount}</span><button disabled={archivePage >= practiceArchivePageCount - 1} onClick={() => setArchivePage((page) => Math.min(practiceArchivePageCount - 1, page + 1))}>{banglaMedium ? "পরের" : "Next"}<ChevronRight size={15}/></button></div>}
                </>}
                {archiveView === "authentic" && <>
                {previousBoardArchive.records.length > 0 && <div className="archive-filters">
                  <label>{banglaMedium ? "বোর্ড" : "Board"}<select value={archiveBoard} onChange={(event)=>setArchiveBoard(event.target.value)}><option>All boards</option>{previousBoardArchive.boards.map((board)=><option key={board}>{board}</option>)}</select></label>
                  <label>{banglaMedium ? "বছর" : "Year"}<select value={archiveYear} onChange={(event)=>setArchiveYear(event.target.value)}><option>All years</option>{previousBoardArchive.years.map((year)=><option key={year}>{year}</option>)}</select></label>
                  <label>{banglaMedium ? "সেট/কোড" : "Set/code"}<input value={archiveSet} onChange={(event)=>setArchiveSet(event.target.value)} placeholder={banglaMedium ? "যেমন: ক / A" : "e.g. A"}/></label>
                  <label>{banglaMedium ? "প্রশ্ন নম্বর" : "Question number"}<input value={archiveQuestionNumber} onChange={(event)=>setArchiveQuestionNumber(event.target.value)} placeholder={banglaMedium ? "যেমন: ৭(গ)" : "e.g. 7(c)"}/></label>
                </div>}
                {archiveQuestions.length ? <div className="archive-results">{archiveQuestions.map((question)=><article key={question.id}><div><span>{question.board}</span><span>{question.year}</span><span>{question.set}</span><span>{question.questionNumber}</span></div><h4>{question.prompt}</h4><small>{question.sourceUrl}</small></article>)}</div> : <div className="archive-empty"><ShieldCheck size={25}/><strong>{banglaMedium ? "এখনও পূর্ণ উদ্ধৃতিসহ প্রশ্ন যুক্ত হয়নি" : "No fully cited questions yet"}</strong><p>{banglaMedium ? "নিজস্ব বোর্ড-প্যাটার্ন প্রশ্ন এখানে দেখানো হবে না। যাচাইকৃত প্রশ্ন যুক্ত হলে বোর্ড, বছর, সেট ও প্রশ্ন নম্বর অনুযায়ী খোঁজার সুবিধা চালু হবে।" : "Authored board-pattern practice is excluded. Board, Year, Set and Question Number filters will appear when verified questions are added."}</p></div>}
                <div className="archive-intake-callout"><FileText size={18}/><div><strong>{banglaMedium ? "মূল প্রশ্নপত্র হাতে আছে?" : "Have an original question paper?"}</strong><p>{banglaMedium ? "তথ্যভুক্তির ছক ডাউনলোড করে বোর্ড, বছর, সেট/কোড, প্রশ্ন নম্বর, স্ক্যানের পৃষ্ঠা এবং যাচাইকারীর তথ্য পূরণ করো। অসম্পূর্ণ নথি আর্কাইভে প্রকাশ হবে না।" : "Download the intake template and record Board, Year, Set/Code, Question Number, scan/page and verifier. Incomplete records are never published."}</p></div><button type="button" onClick={downloadArchiveIntakeTemplate}><Download size={14}/>{banglaMedium ? "তথ্যভুক্তির ছক" : "Download template"}</button></div>
                <details className="archive-source-details">
                  <summary><span><Search size={17}/><span><strong>{banglaMedium ? "উৎস অনুসন্ধানের অগ্রগতি" : "Source discovery progress"}</strong><small>{banglaMedium ? "PDF ও স্ক্যান যাচাইয়ের তালিকা—শিক্ষার্থীদের সাধারণ ব্যবহারে প্রয়োজন নেই" : "PDF and scan audit queue—not needed for everyday study"}</small></span></span><ChevronRight size={16}/></summary>
                  <section className="archive-discovery-catalog">
                    <header><div><span className="eyebrow">SOURCE REVIEW</span><h4>{banglaMedium ? "যেসব উৎসের PDF এখন যাচাই চলছে" : "Sources currently in PDF audit"}</h4></div><small>{banglaMedium ? `শেষ অনুসন্ধান: ${boardPaperSourceCatalog.checkedOnBn}` : `Last searched: ${boardPaperSourceCatalog.checkedOn}`}</small></header>
                    <p>{banglaMedium ? boardPaperSourceCatalog.policyBn : boardPaperSourceCatalog.policy}</p>
                    <div>{boardPaperSourceCatalog.sources.map((source)=><article key={source.id}><span className={source.status === "official-reference" ? "official" : "audit"}>{source.status === "official-reference" ? (banglaMedium ? "অফিসিয়াল নমুনা" : "OFFICIAL PATTERN") : (banglaMedium ? "স্ক্যান যাচাই বাকি" : "SCAN AUDIT PENDING")}</span><h5>{banglaMedium ? source.labelBn : source.label}</h5><p>{banglaMedium ? source.coverageBn : source.coverage}</p><small>{banglaMedium ? source.noteBn : source.coverage}</small><a href={source.url} target="_blank" rel="noreferrer">{banglaMedium ? "মূল উৎস দেখো" : "Open source"}<ExternalLink size={14}/></a></article>)}</div>
                  </section>
                </details>
                <details className="archive-audit-details">
                  <summary><span><ShieldCheck size={17}/><span><strong>{banglaMedium ? "আর্কাইভ যাচাইয়ের বিস্তারিত" : "Archive verification details"}</strong><small>{banglaMedium ? "উৎস, বোর্ডভিত্তিক পরিধি ও প্রকাশের নিয়ম" : "Sources, board coverage and publication rules"}</small></span></span><span>{boardSourceIntakeRegistry.summary.authenticPapersLocated} {banglaMedium ? "টি প্রশ্নপত্র প্রস্তুত" : "papers ready"}<ChevronRight size={16}/></span></summary>
                  <div className="archive-audit-body">
                <section className="archive-intake-ledger">
                  <div className="archive-intake-head"><div><strong>{banglaMedium ? "অফিসিয়াল উৎস যাচাইয়ের তালিকা" : "Official source intake queue"}</strong><small>{banglaMedium ? `সর্বশেষ উৎস যাচাই: ${boardSourceIntakeRegistry.checkedOnBn}` : `Last source check: ${boardSourceIntakeRegistry.checkedOn}`}</small></div><span>{boardSourceIntakeRegistry.summary.authenticPapersLocated} {banglaMedium ? "টি প্রশ্নপত্র প্রস্তুত" : "papers ready"}</span></div>
                  <p>{banglaMedium ? boardSourceIntakeRegistry.sourcePolicyBn : boardSourceIntakeRegistry.sourcePolicy}</p>
                  <div className="archive-stage-track">{boardSourceIntakeRegistry.stages.map((stage,index)=><span key={stage.id} className={index===0 ? "active" : "pending"}><strong>{index+1}</strong>{banglaMedium ? stage.labelBn : stage.label}</span>)}</div>
                  <div className="archive-source-list">{boardSourceIntakeRegistry.sources.map((source)=><article key={source.id}><div><CheckCircle2 size={15}/><span><strong>{banglaMedium ? source.labelBn : source.label}</strong><small>{banglaMedium ? source.noteBn : source.note}</small></span></div><div><span className="located">{banglaMedium ? "উৎস শনাক্ত" : "Source located"}</span><span className="not-located">{banglaMedium ? "প্রশ্নপত্র পাওয়া যায়নি" : "Paper not located"}</span><a href={source.url} target="_blank" rel="noreferrer" aria-label={banglaMedium ? `${source.labelBn} খুলুন` : `Open ${source.label}`}><ExternalLink size={14}/></a></div></article>)}</div>
                </section>
                <section className="board-coverage-desk" aria-label={banglaMedium ? "বোর্ড আর্কাইভ কভারেজ" : "Board archive coverage"}>
                  <div className="board-coverage-head"><div><strong>{banglaMedium ? "বোর্ডভিত্তিক সংগ্রহের অবস্থা" : "Board coverage desk"}</strong><small>{banglaMedium ? `সর্বশেষ প্রমাণ যাচাই: ${boardArchiveCoverage.checkedOnBn}` : `Last evidence check: ${boardArchiveCoverage.checkedOn}`}</small></div><span>{boardArchiveCoverage.verifiedQuestionTotal}/{boardArchiveCoverage.boards.length} {banglaMedium ? "বোর্ডে যাচাইকৃত প্রশ্ন" : "boards with verified questions"}</span></div>
                  <p>{banglaMedium ? boardArchiveCoverage.portalAuditRuleBn : boardArchiveCoverage.portalAuditRule}</p>
                  <div className="board-coverage-grid">{boardArchiveCoverage.boards.map((board)=><article key={board.id} className={board.portalStatus === "checked" ? "checked" : "queued"}><div><strong>{banglaMedium ? board.labelBn : board.label}</strong><span>{board.portalStatus === "checked" ? (banglaMedium ? "পোর্টাল দেখা হয়েছে" : "Portal checked") : (banglaMedium ? "যাচাইয়ের অপেক্ষায়" : "Audit queue")}</span></div><small>{board.paperStatus === "not-located" ? (banglaMedium ? "প্রশ্নপত্র পাওয়া যায়নি" : "Paper not located") : (banglaMedium ? "প্রমাণ যাচাই বাকি" : "Evidence audit pending")}</small>{"evidenceBn" in board && <p>{banglaMedium ? board.evidenceBn : board.evidence}</p>}</article>)}</div>
                  <div className="archive-next-action"><CircleAlert size={16}/><div><strong>{banglaMedium ? "আর্কাইভ প্রকাশের আগে যা প্রয়োজন" : "Evidence needed before archive publication"}</strong><p>{banglaMedium ? "পাঠযোগ্য মূল স্ক্যান বা অফিসিয়াল প্রশ্নপত্রের ফাইল—যেখানে বোর্ড, বছর, বিষয়, সেট/কোড ও প্রশ্ন নম্বর একই নথিতে দেখা যায়। এরপর প্রতিলিপি তৈরি ও বিষয়ভিত্তিক পর্যালোচকের অনুমোদন প্রয়োজন।" : "A legible original scan or official paper file showing board, year, subject, set/code and question number in one document, followed by transcription and subject-reviewer sign-off."}</p></div></div>
                </section>
                <div className="archive-required-fields"><strong>{banglaMedium ? "আর্কাইভে যুক্ত করার বাধ্যতামূলক তথ্য" : "Required archive evidence"}</strong><div>{(banglaMedium ? ["বিষয়", "অধ্যায়", "বোর্ড", "বছর", "সেট/ভার্সন", "প্রশ্ন নম্বর", "প্রশ্নের ধরন", "মূল প্রশ্ন", "মূল PDF/স্ক্যান", "স্ক্যানের পৃষ্ঠা", "উৎস লিংক", "যাচাই তারিখ", "যাচাইকারী"] : previousBoardArchive.requiredFields).map((field)=><span key={field}><Check size={12}/>{field}</span>)}</div></div>
                  </div>
                </details>
                </>}
              </section>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

type PlanTask = {
  id: string;
  date: string;
  day: string;
  subject: string;
  chapter: string;
  subjectId?: string;
  subjectName?: string;
  chapterTitle?: string;
  activity: string;
  minutes: number;
  done: boolean;
};

function StudyPlanner({ group, onNavigate }: { group: "commerce" | "humanities"; onNavigate: (id: string) => void }) {
  const subjects = subjectsByGroup[group];
  const [dailyMinutes, setDailyMinutes] = useState(60);
  const [priority, setPriority] = useState(subjects[0].id);
  const [examDate, setExamDate] = useState("");
  const [tasks, setTasks] = useState<PlanTask[]>([]);
  const [dataNotice, setDataNotice] = useState<{ tone: "success" | "error"; text: string } | null>(null);
  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-study-plan`) ?? "null");
        if (saved) {
          setDailyMinutes(saved.dailyMinutes ?? 60);
          setPriority(saved.priority ?? subjects[0].id);
          setExamDate(saved.examDate ?? "");
          setTasks(saved.tasks ?? []);
        }
      } catch {
        window.localStorage.removeItem(`hsc2plus-${group}-study-plan`);
      }
    }, 0);
    return () => window.clearTimeout(timer);
  }, [group, subjects]);
  const savePlan = (nextTasks: PlanTask[], nextDate = examDate) => {
    setTasks(nextTasks);
    window.localStorage.setItem(
      `hsc2plus-${group}-study-plan`,
      JSON.stringify({ dailyMinutes, priority, examDate: nextDate, tasks: nextTasks }),
    );
  };
  const generate = () => {
    const ordered = [
      subjects.find((subject) => subject.id === priority) ?? subjects[0],
      ...subjects.filter((subject) => subject.id !== priority),
    ];
    const completed: string[] = JSON.parse(window.localStorage.getItem("hsc2plus-completed-chapters") ?? "[]");
    const nextTasks = Array.from({ length: 7 }, (_, offset) => {
      const subject = ordered[offset % ordered.length];
      const chapters = chaptersBySubject[subject.id] ?? [];
      const chapter = chapters.find((item) => !completed.includes(`${group}:${subject.id}:${item.title}`)) ?? chapters[offset % Math.max(chapters.length, 1)];
      const date = new Date();
      date.setDate(date.getDate() + offset);
      const activities = ["ধারণাভিত্তিক পাঠ", "সমাধানসহ উদাহরণ", "অধ্যায় অনুশীলন", "সৃজনশীল লেখা"];
      return {
        id: `${date.toISOString().slice(0, 10)}-${subject.id}`,
        date: date.toISOString().slice(0, 10),
        day: new Intl.DateTimeFormat("bn-BD", { weekday: "short", day: "numeric", month: "short" }).format(date),
        subject: subject.id === "english" ? subject.name : subject.nameBn,
        chapter: subject.id === "english" ? (chapter?.title ?? "Revision") : (chapter?.titleBn ?? "পুনরাবৃত্তি"),
        subjectId: subject.id,
        subjectName: subject.name,
        chapterTitle: chapter?.title,
        activity: activities[offset % activities.length],
        minutes: dailyMinutes,
        done: false,
      };
    });
    savePlan(nextTasks);
  };
  const toggleTask = (id: string) => {
    const updated = tasks.map((task) => task.id === id ? { ...task, done: !task.done } : task);
    savePlan(updated);
    window.dispatchEvent(new Event("hsc2plus-progress"));
  };
  const openPlanTask = (task: PlanTask) => {
    const subject = subjects.find((item) => item.id === task.subjectId) ?? subjects.find((item) => item.name === task.subjectName || item.nameBn === task.subject);
    const chapter = task.chapterTitle ?? (subject ? (chaptersBySubject[subject.id] ?? []).find((item) => item.titleBn === task.chapter || item.title === task.chapter)?.title : undefined);
    if (task.activity === "অধ্যায় অনুশীলন" || task.activity === "সৃজনশীল লেখা") {
      const mode = task.activity === "সৃজনশীল লেখা" ? "writing" : "custom";
      window.localStorage.setItem(`hsc2plus-${group}-practice-entry`, JSON.stringify({ mode, source: "planner" }));
      if (subject && chapter) window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: subject.name, unit: chapter, questionType: task.activity === "সৃজনশীল লেখা" ? "CQ" : "All", source: "planner" } satisfies PracticeTarget));
      onNavigate("practice");
      return;
    }
    if (subject && chapter) window.localStorage.setItem(`hsc2plus-${group}-subject-resume`, JSON.stringify({ subjectId: subject.id, chapterTitle: chapter, lesson: 0, mode: task.activity === "সমাধানসহ উদাহরণ" ? "worked" : "lesson" }));
    onNavigate("subjects");
  };
  const daysToExam = examDate
    ? Math.max(0, Math.ceil((new Date(examDate).getTime() - new Date().setHours(0, 0, 0, 0)) / 86400000))
    : null;
  const isRestorableProgressKey = (key: string) => {
    if (key.length > 180 || !/^hsc2plus-[a-z0-9:_-]+$/.test(key)) return false;
    const shared = /^(hsc2plus-(completed-chapters|bookmarked-chapters|content-issue-outbox|content-issue-v1|last-backup-at|last-restore-at)|hsc2plus-(lesson-mastery|note-reading|note-self-check|study-sections):[a-z0-9:_-]+)$/;
    const grouped = /^hsc2plus-(commerce|humanities)-(activity-dates|active-test|bank-review|best-score|exam-resume|focus-history|focus-timer|last-section|mistakes|practice-stats|practice-target|quick-practice-seen|study-plan|subject-resume|test-history|test-recovery|missions:[a-z0-9:_-]+|answer-draft:[a-z0-9:_-]+|bank-progress:[a-z0-9:_-]+|cq-parts:[a-z0-9:_-]+|question-rotation:[a-z0-9:_-]+)$/;
    return shared.test(key) || grouped.test(key);
  };
  const exportProgress = () => {
    const records = Object.fromEntries(
      Object.keys(window.localStorage)
        .filter(isRestorableProgressKey)
        .map((key) => [key, window.localStorage.getItem(key)]),
    );
    const exportedAt = new Date().toISOString();
    const backup = { product: "HSC2Plus", version: 2, exportedAt, group, recordCount: Object.keys(records).length, records };
    const url = URL.createObjectURL(new Blob([JSON.stringify(backup, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = `hsc2plus-progress-${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
    window.localStorage.setItem("hsc2plus-last-backup-at", exportedAt);
    setDataNotice({ tone: "success", text: "ব্যাকআপ ডাউনলোড হয়েছে। ফাইলটি নিরাপদ জায়গায় রাখো।" });
  };
  const restoreProgress = async (file: File | undefined) => {
    if (!file) return;
    setDataNotice(null);
    if (file.size > 1024 * 1024) {
      setDataNotice({ tone: "error", text: "ব্যাকআপ ফাইলের আকার ১ MB-এর বেশি হতে পারবে না।" });
      return;
    }
    try {
      const parsed = JSON.parse(await file.text()) as { product?: string; version?: number; recordCount?: number; records?: Record<string, unknown> };
      if (parsed.product !== "HSC2Plus" || ![1, 2].includes(parsed.version ?? 0) || !parsed.records || Array.isArray(parsed.records)) throw new Error("invalid-backup");
      const rawEntries = Object.entries(parsed.records);
      const entries = rawEntries.filter(([key, value]) => isRestorableProgressKey(key) && typeof value === "string" && value.length <= 250000);
      if (!entries.length || entries.length > 250 || entries.length !== rawEntries.length) throw new Error("invalid-backup");
      if (parsed.version === 2 && parsed.recordCount !== entries.length) throw new Error("invalid-backup");
      const previous = new Map(entries.map(([key]) => [key, window.localStorage.getItem(key)]));
      try {
        for (const [key, value] of entries) window.localStorage.setItem(key, value as string);
      } catch (error) {
        for (const [key, value] of previous) {
          if (value === null) window.localStorage.removeItem(key);
          else window.localStorage.setItem(key, value);
        }
        throw error;
      }
      window.localStorage.setItem("hsc2plus-last-restore-at", new Date().toISOString());
      setDataNotice({ tone: "success", text: `${entries.length}টি তথ্য সফলভাবে ফিরিয়ে আনা হয়েছে। হালনাগাদ অগ্রগতি দেখাতে পেজটি আবার লোড হচ্ছে…` });
      window.setTimeout(() => window.location.reload(), 900);
    } catch {
      setDataNotice({ tone: "error", text: "এটি বৈধ HSC2Plus ব্যাকআপ নয়। HSC2Plus থেকে নেওয়া সঠিক JSON ফাইলটি বেছে নাও।" });
    }
  };
  const resetGroupProgress = () => {
    const groupLabel = group === "commerce" ? "Commerce" : "Humanities";
    if (!window.confirm(`${groupLabel} বিভাগের এই ডিভাইসে সংরক্ষিত অগ্রগতি মুছবে? আগে ব্যাকআপ নেওয়া ভালো।`)) return;
    Object.keys(window.localStorage).filter((key) => key.startsWith(`hsc2plus-${group}-`)).forEach((key) => window.localStorage.removeItem(key));
    for (const sharedKey of ["hsc2plus-completed-chapters", "hsc2plus-bookmarked-chapters"]) {
      try {
        const values: string[] = JSON.parse(window.localStorage.getItem(sharedKey) ?? "[]");
        window.localStorage.setItem(sharedKey, JSON.stringify(values.filter((value) => !value.startsWith(`${group}:`))));
      } catch { window.localStorage.removeItem(sharedKey); }
    }
    window.dispatchEvent(new Event("hsc2plus-progress"));
    window.location.reload();
  };
  return (
    <div className="page-shell">
      <section className="page-title">
        <span className="eyebrow">STUDY PLANNER</span>
        <h1>পাঠ্যক্রমকে বাস্তবসম্মত সাপ্তাহিক পরিকল্পনায় সাজাও।</h1>
        <p>প্রতিদিনের সময় ও অগ্রাধিকার বিষয় নির্বাচন করো। অসম্পন্ন অধ্যায় ধরে HSC2Plus সাত দিনের ভারসাম্যপূর্ণ পরিকল্পনা তৈরি করবে।</p>
      </section>
      <div className="planner-layout">
        <aside className="planner-controls surface">
          <div>
            <label htmlFor="daily-time">প্রতিদিন পড়ার সময়</label>
            <select id="daily-time" value={dailyMinutes} onChange={(event) => setDailyMinutes(Number(event.target.value))}>
              <option value={30}>৩০ মিনিট</option>
              <option value={45}>৪৫ মিনিট</option>
              <option value={60}>৬০ মিনিট</option>
              <option value={90}>৯০ মিনিট</option>
            </select>
          </div>
          <div>
            <label htmlFor="priority-subject">অগ্রাধিকার বিষয়</label>
            <select id="priority-subject" value={priority} onChange={(event) => setPriority(event.target.value)}>
              {subjects.map((subject) => <option key={subject.id} value={subject.id}>{subject.nameBn}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="exam-date">লক্ষ্য পরীক্ষার তারিখ</label>
            <input id="exam-date" type="date" value={examDate} onChange={(event) => { setExamDate(event.target.value); if (tasks.length) savePlan(tasks, event.target.value); }} />
          </div>
          <button className="primary-button full" onClick={generate}><Sparkles size={16}/>সাত দিনের পরিকল্পনা তৈরি করো</button>
          <details className="data-safety-panel">
            <summary><ShieldCheck size={16}/><span><strong>Progress backup & restore</strong><small>Device বদলালেও data সঙ্গে রাখো</small></span><ChevronRight size={15}/></summary>
            <div className="data-safety-body">
              <p>অ্যাকাউন্ট নেই—তাই নতুন ব্রাউজার বা ডিভাইসে যাওয়ার আগে ব্যাকআপ ডাউনলোড করো। ব্যাকআপে শুধু HSC2Plus-এর এই ডিভাইসে সংরক্ষিত পড়াশোনার তথ্য থাকে।</p>
              <button type="button" className="secondary-button full" onClick={exportProgress}><Download size={16}/>অগ্রগতির ব্যাকআপ নাও</button>
              <label className="restore-button"><FileUp size={16}/><span>Backup restore</span><input type="file" accept="application/json,.json" onChange={(event) => { void restoreProgress(event.target.files?.[0]); event.target.value = ""; }}/></label>
              <button type="button" className="reset-data-button" onClick={resetGroupProgress}><Trash2 size={15}/>{group === "commerce" ? "Commerce" : "Humanities"} data reset</button>
              {dataNotice && <p role="status" className={`data-notice ${dataNotice.tone}`}>{dataNotice.text}</p>}
            </div>
          </details>
        </aside>
        <section className="planner-board">
          <div className="planner-summary">
            <div className="planner-summary-main"><span><CalendarDays size={19}/>{daysToExam === null ? "পরীক্ষার তারিখ যোগ করো" : `লক্ষ্য পর্যন্ত ${daysToExam} দিন`}</span><strong>{tasks.filter((task) => task.done).length}/{tasks.length || 7}</strong><small>কাজ সম্পন্ন</small></div>
            <div className="planner-summary-progress"><i style={{ width: `${tasks.length ? (tasks.filter((task) => task.done).length / tasks.length) * 100 : 0}%` }}/></div>
          </div>
          {tasks.length ? (
            <div className="plan-list">
              {tasks.map((task) => (
                <article key={task.id} className={task.done ? "done" : ""}>
                  <button onClick={() => toggleTask(task.id)} aria-label={task.done ? "অসম্পন্ন হিসেবে চিহ্নিত করুন" : "সম্পন্ন হিসেবে চিহ্নিত করুন"}>
                    {task.done ? <Check size={16}/> : null}
                  </button>
                  <div><span className="plan-day">{task.day}</span><strong>{task.subject} · {task.chapter}</strong><small><em>{task.activity}</em><Clock3 size={12}/>{task.minutes} মিনিট</small></div>
                  <button className="plan-open" onClick={() => openPlanTask(task)}>শুরু করো <ArrowRight size={14}/></button>
                </article>
              ))}
            </div>
          ) : (
            <div className="planner-empty"><CalendarDays size={28}/><h2>তোমার সপ্তাহ সাজানোর জন্য প্রস্তুত।</h2><p>সময় ও অগ্রাধিকার ঠিক করে পরিকল্পনা তৈরি করো। প্রয়োজন হলে আবার তৈরি করে পরিবর্তন করতে পারবে।</p></div>
          )}
        </section>
      </div>
    </div>
  );
}

function Revision({ group, onNavigate }: { group: "commerce" | "humanities"; onNavigate: (id: string) => void }) {
  const metrics = useStudentMetrics(group);
  const [bankReview, setBankReview] = useState<string[]>([]);
  const [testRecovery, setTestRecovery] = useState<TestRecoveryItem[]>([]);
  const revisionResources = completeExamLibraryByGroup[group];
  const revisionSubjects = Array.from(new Set(revisionResources.map((item) => item.subject)));
  const [revisionSubject, setRevisionSubject] = useState(revisionSubjects[0]);
  const subjectRevisionResources = revisionResources.filter((item) => item.subject === revisionSubject);
  const [revisionUnit, setRevisionUnit] = useState(subjectRevisionResources[0]?.unit ?? "");
  const [revisionMinutes, setRevisionMinutes] = useState<5 | 15 | 30>(15);
  const [revisionChecks, setRevisionChecks] = useState<Record<string, boolean>>({});
  const [revisionPanel, setRevisionPanel] = useState<"know" | "terms" | "traps" | "recall">("know");
  const revisionResource = subjectRevisionResources.find((item) => item.unit === revisionUnit) ?? subjectRevisionResources[0];
  const englishRevision = revisionResource.subject === "English";
  const revisionDepth = revisionMinutes === 5 ? 4 : revisionMinutes === 15 ? 7 : 10;
  const mustKnow = revisionResource.notes.slice(0, revisionDepth);
  const keyTerms = revisionResource.guide?.terminology.slice(0, revisionMinutes === 5 ? 5 : revisionMinutes === 15 ? 8 : 12) ?? [];
  const answerMoves = revisionResource.examToolkit?.scoringMoves.slice(0, revisionMinutes === 5 ? 3 : revisionMinutes === 15 ? 5 : 6) ?? revisionResource.guide?.structures.slice(0, 6) ?? [];
  const commonTraps = revisionResource.examToolkit?.mistakes.slice(0, revisionMinutes === 5 ? 3 : revisionMinutes === 15 ? 5 : 6) ?? [];
  const recallChecks = revisionResource.lessonDetails?.flatMap((lesson) => lesson.recallQuestions ?? []).slice(0, revisionMinutes === 5 ? 3 : revisionMinutes === 15 ? 6 : 9) ?? [];
  const revisionFormulae = revisionResource.guide?.structures.slice(0, revisionMinutes === 5 ? 2 : revisionMinutes === 15 ? 4 : 6) ?? [];
  const revisionWorked = [revisionResource.worked, ...(revisionResource.extraWorked ?? [])].slice(0, revisionMinutes === 30 ? 3 : 1);
  const revisionTaskCount = mustKnow.length + recallChecks.length;
  const completedRevisionTasks = Object.values(revisionChecks).filter(Boolean).length;
  const revisionProgress = revisionTaskCount ? Math.round((completedRevisionTasks / revisionTaskCount) * 100) : 0;
  const selectRevisionSubject = (nextSubject: string) => {
    setRevisionSubject(nextSubject);
    setRevisionUnit(revisionResources.find((item) => item.subject === nextSubject)?.unit ?? "");
    setRevisionChecks({});
    setRevisionPanel("know");
  };
  const selectRevisionUnit = (nextUnit: string) => { setRevisionUnit(nextUnit); setRevisionChecks({}); setRevisionPanel("know"); };
  const toggleRevisionCheck = (key: string) => setRevisionChecks((current) => ({ ...current, [key]: !current[key] }));
  useEffect(() => {
    const restore = window.setTimeout(() => {
      try {
        setBankReview(JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-bank-review`) ?? "[]"));
      } catch {
        window.localStorage.removeItem(`hsc2plus-${group}-bank-review`);
      }
    }, 0);
    return () => window.clearTimeout(restore);
  }, [group]);
  useEffect(() => {
    const restore = window.setTimeout(() => {
      try { const saved = JSON.parse(window.localStorage.getItem(`hsc2plus-${group}-test-recovery`) ?? "[]"); setTestRecovery(Array.isArray(saved) ? saved : []); }
      catch { window.localStorage.removeItem(`hsc2plus-${group}-test-recovery`); setTestRecovery([]); }
    }, 0);
    return () => window.clearTimeout(restore);
  }, [group]);
  const groupedRecovery = Object.values(testRecovery.reduce<Record<string, { subject: string; unit: string; topic: string; wrong: number; unanswered: number; incomplete: number; weak: number }>>((groups, item) => {
    const key = `${item.subject}:${item.unit}`;
    const current = groups[key] ?? { subject: item.subject, unit: item.unit, topic: item.topic, wrong: 0, unanswered: 0, incomplete: 0, weak: 0 };
    current[item.reason] += 1;
    groups[key] = current;
    return groups;
  }, {})).sort((a, b) => (b.wrong + b.unanswered + b.incomplete + b.weak) - (a.wrong + a.unanswered + a.incomplete + a.weak));
  const openRecoveryChapter = (item: (typeof groupedRecovery)[number]) => { setRevisionSubject(item.subject); setRevisionUnit(item.unit); setRevisionChecks({}); };
  const openChapterPractice = (source: PracticeTarget["source"] = "revision") => {
    window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: revisionResource.subject, unit: revisionResource.unit, source } satisfies PracticeTarget));
    onNavigate("practice");
  };
  const openRecoveryPractice = (item: (typeof groupedRecovery)[number]) => {
    window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: item.subject, unit: item.unit, source: "recovery" } satisfies PracticeTarget));
    onNavigate("practice");
  };
  const clearRecoveryChapter = (item: (typeof groupedRecovery)[number]) => {
    const next = testRecovery.filter((entry) => !(entry.subject === item.subject && entry.unit === item.unit));
    setTestRecovery(next);
    window.localStorage.setItem(`hsc2plus-${group}-test-recovery`, JSON.stringify(next));
  };
  const topicCounts = metrics.mistakeTopics.reduce<Record<string, number>>(
    (counts, topic) => ({ ...counts, [topic]: (counts[topic] ?? 0) + 1 }),
    {},
  );
  const objectiveCards = Object.entries(topicCounts).map(([topic, count], index) => {
    const [subject, ...titleParts] = topic.split(" · ");
    return {
    title: titleParts.join(" · ") || topic,
    subject: subject || (group === "commerce" ? "ব্যবসায় শিক্ষা" : "মানবিক"),
    due: index === 0 ? "এখনই পুনরাবৃত্তি" : "তালিকায় আছে",
    count,
    tone: index === 0 ? "red" : "amber",
  }});
  const bankGroups = bankReview.reduce<Record<string, number>>((groups, item) => {
    const [subject, unit] = item.split(":");
    const key = `${subject} · ${unit}`;
    groups[key] = (groups[key] ?? 0) + 1;
    return groups;
  }, {});
  const bankCards = Object.entries(bankGroups).map(([topic, count], index) => {
    const [subject, title] = topic.split(" · ");
    const resource = completeExamLibraryByGroup[group].find((item) => item.subject === subject && item.unit === title);
    return {
      title: resource?.subject === "English" ? (resource?.unit ?? title) : (resource?.unitBn ?? title),
      subject: resource?.subject === "English" ? "English" : (resource?.subjectBn ?? subject),
      due: index === 0 && objectiveCards.length === 0 ? "এখনই পুনরাবৃত্তি" : "Custom Practice থেকে",
      count,
      tone: objectiveCards.length === 0 && index === 0 ? "red" : "blue",
    };
  });
  const activeCards = [...objectiveCards, ...bankCards];
  const totalReviewItems = metrics.mistakes + bankReview.length;
  const openRevisionCard = (card: (typeof activeCards)[number]) => {
    const resource = revisionResources.find((item) =>
      (item.subject === card.subject || item.subjectBn === card.subject) &&
      (item.unit === card.title || item.unitBn === card.title),
    );
    window.localStorage.setItem(`hsc2plus-${group}-practice-entry`, JSON.stringify({ mode: "custom", source: "revision" }));
    if (resource) window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: resource.subject, unit: resource.unit, source: "revision" } satisfies PracticeTarget));
    onNavigate("practice");
  };
  const suggestedResource = revisionResources.find((item) => group === "commerce" ? item.subject === "Accounting" && item.unit === "Journal and ledger" : item.subject === "Economics" && item.unit === "Demand and supply") ?? revisionResources[0];
  const openSuggestedRevision = () => {
    window.localStorage.setItem(`hsc2plus-${group}-practice-entry`, JSON.stringify({ mode: "custom", source: "revision" }));
    window.localStorage.setItem(`hsc2plus-${group}-practice-target`, JSON.stringify({ subject: suggestedResource.subject, unit: suggestedResource.unit, source: "revision" } satisfies PracticeTarget));
    onNavigate("practice");
  };
  return (
    <div className="page-shell">
      <section className="page-title">
        <span className="eyebrow">SMART REVISION</span>
        <h1>কম সময়ে বেশি মনে রাখো।</h1>
        <p>
          তোমার ভুল, দুর্বল বিষয় এবং শিগগির ভুলে যাওয়ার সম্ভাবনা আছে—এমন ধারণাগুলো আগে দেখানো হবে।
        </p>
      </section>
      <div className="revision-hero">
        <div>
          <Flame size={25} />
          <span>আজকের পুনরাবৃত্তি</span>
          <strong>{totalReviewItems}টি সংরক্ষিত পুনরাবৃত্তি · প্রায় {Math.max(8, totalReviewItems * 3)} মিনিট</strong>
        </div>
        <button className="primary-button" onClick={() => onNavigate("practice")}>
          পুনরাবৃত্তি শুরু করো <ArrowRight size={17} />
        </button>
      </div>
      {groupedRecovery.length > 0 && <section className="exam-recovery-plan"><header><div><span className="eyebrow">পরীক্ষার ফল থেকে</span><h2>যে অধ্যায়গুলো আবার দেখবে</h2><p>পরীক্ষায় ভুল হয়েছে, উত্তর বাদ গেছে বা CQ অসম্পূর্ণ ছিল—এমন অধ্যায়গুলো এখানে সাজানো হয়েছে। যে অধ্যায়ে বেশি সমস্যা হয়েছে, সেটি আগে দেখানো হচ্ছে।</p></div><strong>{testRecovery.length}<small>বাকি কাজ</small></strong></header><div>{groupedRecovery.slice(0,6).map((item, itemIndex) => <article key={`${item.subject}:${item.unit}`} className={itemIndex === 0 ? "priority" : ""}><span>{itemIndex === 0 ? "আগে দেখো" : `${itemIndex + 1} নম্বর অগ্রাধিকার`}</span><h3>{item.topic}</h3><p>{item.wrong ? `${item.wrong}টি ভুল MCQ` : ""}{item.wrong && item.unanswered ? " · " : ""}{item.unanswered ? `${item.unanswered}টি উত্তর দেওয়া হয়নি` : ""}{(item.wrong || item.unanswered) && item.incomplete ? " · " : ""}{item.incomplete ? `${item.incomplete}টি অসম্পূর্ণ CQ` : ""}{(item.wrong || item.unanswered || item.incomplete) && item.weak ? " · " : ""}{item.weak ? `${item.weak}টি CQ-তে আরও অনুশীলন দরকার` : ""}</p><div><button onClick={() => openRecoveryChapter(item)}>আবার পড়ো</button><button onClick={() => openRecoveryPractice(item)}>প্রশ্ন অনুশীলন</button><button onClick={() => clearRecoveryChapter(item)} aria-label={`${item.topic} পুনরালোচনা সম্পন্ন`}>সম্পন্ন</button></div></article>)}</div></section>}
      <section className="last-minute-studio">
        <header className="last-minute-head">
          <div><span className="eyebrow">LAST-MINUTE REVISION</span><h2>{englishRevision ? "Review the essentials before the exam." : "পরীক্ষার আগে জরুরি বিষয়গুলো একবার ঝালিয়ে নাও।"}</h2><p>{englishRevision ? "Choose a chapter and the time available. You will get the key ideas, common mistakes and quick recall questions in one place." : "অধ্যায় ও হাতে থাকা সময় বেছে নাও। গুরুত্বপূর্ণ ধারণা, সাধারণ ভুল এবং না দেখে মনে করার প্রশ্নগুলো এক জায়গায় গুছিয়ে পাবে।"}</p></div>
          <div className="revision-progress-ring"><Ring value={revisionProgress} size={82}/><span>{completedRevisionTasks}/{revisionTaskCount}<small>{englishRevision ? "checks complete" : "ধাপ সম্পন্ন"}</small></span></div>
        </header>
        <div className="last-minute-controls">
          <label>{englishRevision ? "Subject" : "বিষয়"}<select value={revisionSubject} onChange={(event) => selectRevisionSubject(event.target.value)}>{revisionSubjects.map((subject) => { const item = revisionResources.find((resource) => resource.subject === subject); return <option key={subject} value={subject}>{subject === "English" ? subject : (item?.subjectBn ?? subject)}</option>; })}</select></label>
          <label>{englishRevision ? "Chapter" : "অধ্যায়"}<select value={revisionResource.unit} onChange={(event) => selectRevisionUnit(event.target.value)}>{subjectRevisionResources.map((item) => <option key={item.unit} value={item.unit}>{item.subject === "English" ? item.unit : item.unitBn}</option>)}</select></label>
          <fieldset><legend>{englishRevision ? "Focus time" : "কত মিনিট সময় আছে?"}</legend>{([5,15,30] as const).map((minutes) => <button type="button" className={revisionMinutes === minutes ? "active" : ""} onClick={() => { setRevisionMinutes(minutes); setRevisionChecks({}); setRevisionPanel("know"); }} key={minutes}>{minutes}<small>min</small></button>)}</fieldset>
        </div>
        <section className="revision-chapter-brief" aria-label={englishRevision ? "Chapter revision brief" : "অধ্যায় পুনরালোচনার সারাংশ"}>
          <div><span>{englishRevision ? "CORE IDEA" : "অধ্যায়ের মূল কথা"}</span><p>{revisionResource.guide?.concept ?? mustKnow[0]}</p></div>
          <div><span>{englishRevision ? "EXAM USE" : "পরীক্ষায় প্রয়োগ"}</span><p>{revisionResource.guide?.application ?? revisionResource.bank.focus}</p></div>
          <div className="revision-session-map"><span>{englishRevision ? "THIS SESSION" : "এই সেশনে"}</span><p>{mustKnow.length} {englishRevision ? "essentials" : "মূল বিষয়"} · {keyTerms.length} {englishRevision ? "terms" : "পরিভাষা"} · {commonTraps.length} {englishRevision ? "traps" : "সাধারণ ভুল"} · {recallChecks.length} {englishRevision ? "recall checks" : "না-দেখে যাচাই"}</p></div>
        </section>
        <nav className="revision-panel-tabs" aria-label={englishRevision ? "Revision sections" : "পুনরালোচনার অংশ"}>{([['know',englishRevision ? 'Must know' : 'মূল ধারণা'],['terms',englishRevision ? 'Key terms' : 'পরিভাষা'],['traps',englishRevision ? 'Common traps' : 'সাধারণ ভুল'],['recall',englishRevision ? 'Active recall' : 'না দেখে বলো']] as const).map(([panel,label]) => <button type="button" key={panel} className={revisionPanel === panel ? "active" : ""} onClick={() => setRevisionPanel(panel)}>{label}</button>)}</nav>
        <div className="last-minute-grid focus-view">
          <article className={`revision-must-know ${revisionPanel === "know" ? "active" : ""}`}><span className="mini-heading"><BookOpen size={15}/>{englishRevision ? "MUST KNOW" : "অবশ্যই জানতে হবে"}</span>{mustKnow.map((point, itemIndex) => { const key = `know-${itemIndex}`; return <label key={key} className={revisionChecks[key] ? "checked" : ""}><input type="checkbox" checked={revisionChecks[key] ?? false} onChange={() => toggleRevisionCheck(key)}/><span>{itemIndex + 1}</span><p>{point}</p></label>; })}{revisionWorked.length > 0 && <aside className="revision-worked-glance"><strong>{englishRevision ? "Worked-example memory cue" : "সমাধান মনে রাখার সংকেত"}</strong>{revisionWorked.map((worked) => <p key={worked.problem}><b>{worked.problem}</b><span>{"answer" in worked ? worked.answer : worked.checkpoint}</span></p>)}</aside>}</article>
          <article className={revisionPanel === "terms" ? "active" : ""}><span className="mini-heading"><Sparkles size={15}/>{englishRevision ? "KEY TERMS & STRUCTURES" : "পরিভাষা ও উত্তর কাঠামো"}</span><div className="revision-term-cloud">{keyTerms.map((term) => <span key={term}>{term}</span>)}</div>{revisionFormulae.length > 0 && <div className="revision-formula-strip"><strong>{englishRevision ? "Formula / answer structure" : "সূত্র / উত্তর কাঠামো"}</strong>{revisionFormulae.map((item) => <code key={item}>{item}</code>)}</div>}<strong className="revision-subheading">{englishRevision ? "Scoring moves" : "নম্বর তোলার কৌশল"}</strong><ol className="revision-answer-moves">{answerMoves.map((move) => <li key={move}>{move}</li>)}</ol></article>
          <article className={`revision-traps ${revisionPanel === "traps" ? "active" : ""}`}><span className="mini-heading"><CircleAlert size={15}/>{englishRevision ? "COMMON TRAPS" : "যে ভুলগুলো এড়াবে"}</span><ul>{commonTraps.map((trap) => <li key={trap}>{trap}</li>)}</ul></article>
          <article className={`revision-recall ${revisionPanel === "recall" ? "active" : ""}`}><span className="mini-heading"><Brain size={15}/>{englishRevision ? "ACTIVE RECALL" : "না দেখে মনে করো"}</span>{recallChecks.map((question, itemIndex) => { const key = `recall-${itemIndex}`; return <label key={key} className={revisionChecks[key] ? "checked" : ""}><input type="checkbox" checked={revisionChecks[key] ?? false} onChange={() => toggleRevisionCheck(key)}/><p>{question}</p><CheckCircle2 size={17}/></label>; })}</article>
        </div>
        <footer className="last-minute-footer"><div><strong>{revisionProgress === 100 ? (englishRevision ? "Revision complete" : "রিভিশন শেষ হয়েছে") : (englishRevision ? "Try to recall each point before reading it again." : "আবার পড়ার আগে প্রতিটি বিষয় না দেখে মনে করার চেষ্টা করো।")}</strong><span>{englishRevision ? `${revisionMinutes}-minute revision · ${revisionResource.unit}` : `${revisionMinutes} মিনিটের রিভিশন · ${revisionResource.unitBn}`}</span></div><button className="primary-button" onClick={() => openChapterPractice("revision")}>{englishRevision ? "Practice this chapter" : "এই অধ্যায়ের প্রশ্ন অনুশীলন করো"}<ArrowRight size={16}/></button></footer>
      </section>
      <section className="revision-queue">
        <header className="revision-queue-head"><div><span className="eyebrow">REVISION QUEUE</span><h2>{activeCards.length ? "যে ভুলগুলো এখন ঠিক করবে" : "ভুলের তালিকা এখন পরিষ্কার"}</h2><p>{activeCards.length ? "তোমার Practice ফল থেকে তৈরি—সবচেয়ে বেশি ভুল হওয়া বিষয় আগে।" : "একটি Practice session শেষ করলে ভুল উত্তরগুলো এখানে বিষয় ও অধ্যায় অনুযায়ী সাজানো হবে।"}</p></div><span className={activeCards.length ? "has-items" : "is-clear"}><strong>{totalReviewItems}</strong><small>saved items</small></span></header>
        {activeCards.length ? <div className={`revision-grid ${activeCards.length === 1 ? "single" : ""}`}>
          {activeCards.map((c, index) => (
            <article className="revision-card" key={c.title}>
              <div className="revision-card-index">{String(index + 1).padStart(2,"0")}</div>
              <span className={`urgency ${c.tone}`}>{c.due}</span>
              <small>{c.subject}</small>
              <h2>{c.title}</h2>
              <p><strong>{c.count}টি</strong> প্রশ্ন আবার দেখবে—ব্যাখ্যা পড়ে ভুলের কারণ শনাক্ত করো, তারপর নতুন প্রশ্নে যাচাই করো।</p>
              <button className="secondary-button" onClick={() => openRevisionCard(c)}>এই বিষয়টি অনুশীলন করো <ArrowRight size={16}/></button>
            </article>
          ))}
        </div> : <div className="revision-empty-state">
          <div className="revision-empty-copy"><span className="revision-clear-icon"><CheckCircle2 size={25}/></span><div><strong>এখনো সংশোধনের জন্য কোনো ভুল জমা নেই।</strong><p>এটি ভালো শুরু। একটি ছোট MCQ session দিয়ে বর্তমান প্রস্তুতি যাচাই করো; ভুল হলে HSC2Plus স্বয়ংক্রিয়ভাবে এই তালিকা তৈরি করবে।</p><div><button className="primary-button" onClick={() => onNavigate("practice")}>Quick MCQ শুরু করো <ArrowRight size={16}/></button><button className="secondary-button" onClick={openSuggestedRevision}>{suggestedResource.subject === "English" ? suggestedResource.unit : suggestedResource.unitBn} অনুশীলন</button></div></div></div>
          <aside><span>HOW IT WORKS</span><ol><li><b>01</b><p>প্রশ্নের উত্তর দাও</p></li><li><b>02</b><p>ভুলের ব্যাখ্যা বোঝো</p></li><li><b>03</b><p>Revision Queue থেকে আবার চেষ্টা করো</p></li></ol></aside>
        </div>}
      </section>
    </div>
  );
}

function Progress({
  group,
  onNavigate,
}: {
  group: "commerce" | "humanities";
  onNavigate: (id: string) => void;
}) {
  const subjects = subjectsByGroup[group];
  const metrics = useStudentMetrics(group);
  const overall = metrics.readiness;
  const practiceAccuracy = metrics.questionsAnswered ? Math.round((metrics.correctAnswers / metrics.questionsAnswered) * 100) : 0;
  return (
    <div className="page-shell">
      <section className="page-title">
        <span className="eyebrow">PERFORMANCE</span>
        <h1>তোমার অগ্রগতি এক নজরে।</h1>
        <p>
          নম্বর ফলাফল দেখায়; দক্ষতার বিশ্লেষণ বলে দেয় কোথায় উন্নতি করতে হবে।
        </p>
      </section>
      <div className="progress-hero" aria-label={`HSC readiness ${overall} percent`}>
        <div className="progress-score"><Ring value={overall} size={110} /><small>LIVE SCORE</small></div>
        <div className="progress-summary">
          <span>HSC Readiness Score</span>
          <h2>{overall >= 70 ? "পরীক্ষার ভিত্তি শক্ত" : overall >= 35 ? "প্রস্তুতি এগোচ্ছে" : "এখান থেকেই শুরু"}</h2>
          <p>{metrics.questionsAnswered || metrics.completedChapters ? "তোমার পড়া, Practice এবং আজকের কাজ মিলিয়ে এই score তৈরি হয়েছে।" : "একটি পাঠ শেষ করে ২০টি MCQ দিলে score অর্থপূর্ণভাবে তৈরি হতে শুরু করবে।"}</p>
          <button type="button" onClick={() => onNavigate(metrics.questionsAnswered ? "subjects" : "practice")}>{metrics.questionsAnswered ? "পরের অধ্যায়ে যাও" : "প্রথম Practice শুরু করো"}<ArrowRight size={14}/></button>
        </div>
        <div className="progress-stats">
          <span><small>সমাধান</small><strong>{metrics.questionsAnswered}</strong><em>{practiceAccuracy}% accuracy</em></span>
          <span><small>Session</small><strong>{metrics.sessions}</strong><em>Practice + Test</em></span>
          <span><small>অধ্যায়</small><strong>{metrics.completedChapters}<i>/{metrics.totalChapters}</i></strong><em>সম্পন্ন</em></span>
        </div>
      </div>
      <details className="readiness-method">
        <summary><BarChart3 size={18}/><span><strong>Readiness Score কীভাবে তৈরি হয়</strong><small>এটি official grade নয়—তোমার local learning activity-এর একটি নির্দেশক</small></span><ChevronRight size={17}/></summary>
        <div><article><span>45%</span><strong>Practice performance</strong><small>সেরা MCQ score: {metrics.bestScore}% · সামগ্রিক accuracy: {practiceAccuracy}%</small></article><article><span>35%</span><strong>Chapter learning</strong><small>Lesson check, notes, worked solution, toolkit ও study session</small></article><article><span>20%</span><strong>Today&apos;s mission</strong><small>আজকের কাজ সম্পন্ন: {metrics.missionRate}% · streak: {metrics.streak} দিন</small></article></div>
      </details>
      <section className="surface">
        <div className="section-heading">
          <div>
            <span className="eyebrow">SUBJECT INSIGHTS</span>
            <h2>এবার কোথায় মনোযোগ দেবে</h2>
          </div>
        </div>
        <div className="progress-table">
          {subjects.map((s) => (
            <div key={s.id}>
              <span
                className="subject-icon"
                style={{ color: s.color, background: `${s.color}14` }}
              >
                <BookOpen size={18} />
              </span>
              <span>
                <strong>{s.id === "english" ? s.name : s.nameBn}</strong>
                <small>{s.id === "english" ? s.nextChapter : (chaptersBySubject[s.id]?.find((chapter) => chapter.title === s.nextChapter)?.titleBn ?? s.nextChapter)}</small>
              </span>
              <span className="progress-track large">
                <i style={{ width: `${metrics.subjectCompletion(s.id)}%`, background: s.color }} />
              </span>
              <strong>{metrics.subjectCompletion(s.id)}%</strong>
              <button className="text-button" onClick={() => onNavigate("subjects")}>
                Continue <ArrowRight size={14} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SubjectLibrary({ group }: { group: "commerce" | "humanities"; onNavigate: (id: string) => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  useEffect(() => {
    const sync = () => { try { setSelected(JSON.parse(localStorage.getItem(`hsc2plus-${group}-syllabus-subjects`) ?? "[]")); } catch { setSelected([]); } };
    sync(); window.addEventListener("hsc2plus-syllabus-updated", sync);
    return () => window.removeEventListener("hsc2plus-syllabus-updated", sync);
  }, [group]);
  const compulsory = ["bangla", "english", "ict"];
  const visibleIds = new Set([...compulsory, ...selected]);
  const subjects = selected.length ? subjectsByGroup[group].filter((item) => visibleIds.has(item.id)) : subjectsByGroup[group];
  return <div className="page-shell">
    <section className="page-title"><span className="eyebrow">SUBJECT STUDIOS</span><h1>{group === "commerce" ? "ব্যবসায় শিক্ষা বিভাগের বিষয়সমূহ" : "মানবিক বিভাগের বিষয়সমূহ"}</h1><p>প্রতিটি বিষয়ের নিজস্ব Studio-তে অধ্যায়, পাঠ, বিস্তারিত নোট, Practice ও Revision একসঙ্গে পাওয়া যাবে।</p></section>
    <div className="subject-card-grid compact-grid">{subjects.map((item) => {
      const chapterCount = (chaptersBySubject[item.id] ?? []).length;
      const lessonCount = (chaptersBySubject[item.id] ?? []).reduce((sum,chapter)=>sum+chapter.lessons,0);
      return <button type="button" key={item.id} className="subject-card selectable" onClick={() => { window.localStorage.setItem(`hsc2plus-${group}-subject-resume`, JSON.stringify({subjectId:item.id})); window.location.href=`/${group}/subjects/${item.id}`; }}><div className="subject-card-head"><span className="subject-icon large" style={{color:item.color,background:`${item.color}14`}}><BookOpen/></span><span className="status-pill">{item.paper === "1st & 2nd Paper" ? (item.id === "english" ? "1st + 2nd Paper" : "১ম + ২য় পত্র") : (item.id === "english" ? "Full subject" : "সম্পূর্ণ বিষয়")}</span></div><h2>{item.id === "english" ? item.name : item.nameBn}</h2><p>{item.id === "english" ? `${chapterCount} chapters · ${lessonCount} lessons` : `${chapterCount} অধ্যায় · ${lessonCount} পাঠ`}</p><div className="group-enter">{item.id === "english" ? "Enter studio" : "Studio-তে যাও"}<ArrowRight size={16}/></div></button>;
    })}</div>
  </div>;
}

function SyllabusSetup({ group, onNavigate }: { group: "commerce" | "humanities"; onNavigate: (id: string) => void }) {
  const subjects = subjectsByGroup[group];
  const compulsory = ["bangla", "english", "ict"];
  const [chosen, setChosen] = useState<string[]>([]);
  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState("");
  const [saved, setSaved] = useState(false);
  useEffect(() => {
    try { const stored=JSON.parse(localStorage.getItem(`hsc2plus-${group}-syllabus-subjects`) ?? "[]"); setChosen(Array.from(new Set([...compulsory,...stored]))); } catch { setChosen(compulsory); }
  }, [group]);
  useEffect(() => () => { if (preview) URL.revokeObjectURL(preview); }, [preview]);
  const handleImage = (file?: File) => {
    if (!file) return;
    if (!file.type.startsWith("image/") || file.size > 10 * 1024 * 1024) return;
    if (preview) URL.revokeObjectURL(preview);
    setPreview(URL.createObjectURL(file)); setFileName(file.name); setSaved(false);
  };
  const save = () => {
    const value = Array.from(new Set([...compulsory,...(chosen.length ? chosen : subjects.map((item) => item.id))]));
    localStorage.setItem(`hsc2plus-${group}-syllabus-subjects`, JSON.stringify(value));
    localStorage.setItem(`hsc2plus-${group}-syllabus-updated`, new Date().toISOString());
    window.dispatchEvent(new Event("hsc2plus-syllabus-updated")); setSaved(true);
  };
  return <div className="page-shell syllabus-setup">
    <header className="syllabus-hero"><div><span className="eyebrow">MY SYLLABUS</span><h1>Subjects তালিকা নিজের syllabus অনুযায়ী সাজাও</h1><p>ছবি দেখে বিষয়গুলো মিলিয়ে Save করো। শুধু Subjects পেজে নির্বাচিত বিষয়গুলো দেখা যাবে; Practice ও Test Centre-এর পূর্ণ question coverage অপরিবর্তিত থাকবে। ছবিটি কোনো server-এ পাঠানো হয় না।</p></div><FileImage size={42}/></header>
    <div className="syllabus-workspace">
      <section className="syllabus-upload-card"><div className="syllabus-step"><b>01</b><span><strong>Syllabus reference</strong><small>Optional · JPG, PNG বা WEBP · সর্বোচ্চ 10 MB</small></span></div><label className="syllabus-drop"><Upload size={21}/><strong>{fileName || "ছবি যোগ করো"}</strong><span>ছবিটি শুধু মিলিয়ে দেখার জন্য; Save বা upload হবে না</span><input type="file" accept="image/*" capture="environment" onChange={(event)=>handleImage(event.target.files?.[0])}/></label>{preview && <figure><img src={preview} alt="Uploaded syllabus preview"/><figcaption>ছবির সঙ্গে নিচের subject list মিলিয়ে নাও। Browser বন্ধ করলে ছবিটি আর থাকবে না।</figcaption></figure>}</section>
      <section className="syllabus-subject-card"><div className="syllabus-step"><b>02</b><span><strong>Subjects confirm করো</strong><small>বাংলা, English ও ICT সবার core subject; নিজের group/elective বিষয়গুলো বেছে নাও।</small></span></div><div className="syllabus-subject-list">{subjects.map((subject)=>{const locked=compulsory.includes(subject.id);return <label key={subject.id} className={`${chosen.includes(subject.id)?"selected":""} ${locked?"locked":""}`}><input type="checkbox" checked={locked||chosen.includes(subject.id)} disabled={locked} onChange={()=>{setSaved(false);setChosen((current)=>current.includes(subject.id)?current.filter((id)=>id!==subject.id):[...current,subject.id]);}}/><span><strong>{subject.id==="english"?subject.name:subject.nameBn}</strong><small>{locked?"Core subject · সবসময় থাকবে":subject.paper === "1st & 2nd Paper" ? (subject.id==="english"?"1st + 2nd Paper":"১ম + ২য় পত্র") : "Full subject"}</small></span></label>})}</div><div className="syllabus-actions"><button className="secondary-button" onClick={()=>setChosen(subjects.map((item)=>item.id))}>সব বিষয়</button><button className="primary-button" onClick={save}>{saved?"Saved":"Save subjects"}</button></div>{saved&&<div className="syllabus-saved" role="status"><CheckCircle2 size={18}/>Subjects তালিকা আপডেট হয়েছে। <button onClick={()=>onNavigate("subjects")}>Subjects দেখো</button></div>}</section>
    </div>
    <section className="syllabus-plan-preview"><div className="syllabus-step"><b>03</b><span><strong>Your subject shelf</strong><small>এটি আলাদা study plan নয়—Subjects পেজে কোন Studio দেখা যাবে তার preview।</small></span></div><div>{(chosen.length?subjects.filter((item)=>chosen.includes(item.id)):subjects).slice(0,6).map((subject)=><article key={subject.id}><span>SUBJECT</span><strong>{subject.id==="english"?subject.name:subject.nameBn}</strong><small>Lessons · Notes · Practice · Revision</small></article>)}</div></section>
  </div>;
}

export function Dashboard({ group }: { group: "commerce" | "humanities" }) {
  const [active, setActive] = useState("today");
  const navigationResumeReady = useRef(false);
  const metrics = useStudentMetrics(group);
  useEffect(() => {
    const saved = window.localStorage.getItem(`hsc2plus-${group}-last-section`);
    if (saved === "revision" || saved === "library") setActive("subjects");
    else if (["today", "subjects", "syllabus", "practice", "tests", "planner", "progress", "focus"].includes(saved ?? "")) setActive(saved!);
    navigationResumeReady.current = true;
  }, [group]);
  useEffect(() => {
    if (navigationResumeReady.current) window.localStorage.setItem(`hsc2plus-${group}-last-section`, active);
  }, [active, group]);
  const navigate = useCallback((id: string) => {
    setActive(id);
    window.requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" }));
  }, []);
  const content = useMemo(
    () =>
      ({
        today: <Today group={group} onNavigate={navigate} />,
        subjects: <SubjectLibrary group={group} onNavigate={navigate} />,
        syllabus: <SyllabusSetup group={group} onNavigate={navigate} />,
        practice: <Practice group={group} />,
        tests: <TestCenter group={group} onNavigate={navigate} />,
        planner: <StudyPlanner group={group} onNavigate={navigate} />,
        progress: <Progress group={group} onNavigate={navigate} />,
        focus: <FocusStudioPage group={group} />,
      })[active],
    [active, group, navigate],
  );
  return (
    <AppShell active={active} onChange={navigate} group={group} streak={metrics.streak}>
      {content}
    </AppShell>
  );
}
