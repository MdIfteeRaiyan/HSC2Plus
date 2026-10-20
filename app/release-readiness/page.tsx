import Link from "next/link";
import { ArrowLeft, BookOpenCheck, CheckCircle2, Clock3, Download, ExternalLink, ShieldCheck } from "lucide-react";
import { academicContentAssurance, academicDatabaseSummary, curriculumVerificationLedger, officialAcademicSources } from "@/lib/academic-data";

export const metadata = {
  title: "Release validation — HSC2Plus",
  description: "HSC2Plus-এর NCTB mapping, qualified reviewer approval, device accessibility QA এবং controlled beta evidence workspace।",
};

const subjects = [
  ["bangla", "Bangla", "বাংলা", "54"], ["english", "English", "English", "25"], ["ict", "Information & Communication Technology", "তথ্য ও যোগাযোগ প্রযুক্তি", "6"],
  ["accounting", "Accounting", "হিসাববিজ্ঞান", "20"], ["finance", "Finance, Banking & Insurance", "ফিন্যান্স, ব্যাংকিং ও বিমা", "23"],
  ["business", "Business Organisation & Management", "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", "22"], ["economics", "Economics", "অর্থনীতি", "20"],
  ["civics", "Civics & Good Governance", "পৌরনীতি ও সুশাসন", "20"], ["geography", "Geography", "ভূগোল", "18"], ["history", "History", "ইতিহাস", "12"], ["logic", "Logic", "যুক্তিবিদ্যা", "16"],
  ["islamic_history", "Islamic History & Culture", "ইসলামের ইতিহাস ও সংস্কৃতি", "13"], ["statistics", "Statistics", "পরিসংখ্যান", "17"],
] as const;

const mappingFields = ["Official subject", "Official paper", "Official chapter title", "Chapter sequence", "Applicable syllabus year", "Textbook edition", "Publisher", "Approval/reapproval evidence", "Start page", "End page"] as const;
const reviewChecks = ["Definitions and terminology", "Dates, names and chronology", "Formulas, calculations and accounting entries", "ICT code and output", "English grammar, writing and source text", "All four MCQ options, answer and explanation", "CQ ১+২+৩+৪ distribution", "Model-answer depth", "Natural Bangla"] as const;

const devices = [
  ["Android Chrome", "360×800", "TalkBack + touch"], ["iPhone Safari", "390×844", "VoiceOver + touch"],
  ["Tablet", "768×1024", "Touch + keyboard"], ["Windows Chrome", "1440×900", "NVDA + keyboard"],
  ["Windows Edge", "1440×900", "Keyboard"], ["macOS Safari", "1440×900", "VoiceOver + keyboard"],
] as const;

const interactionChecks = [
  ["Opening & group choice","Home logo, Commerce, Humanities","Route and keyboard target covered","Real-device tap pending"],
  ["Primary navigation","Learn, Practice, Plan & Track, Test Centre","Route-state tests passing","Screen-reader journey pending"],
  ["Subject workspace","Subject, paper, chapter and lesson switching","State and content tests passing","iOS/Android swipe-scroll pending"],
  ["Notes","Tutor Note, Smart Revision, Exam-night Review","Mode, progress and content tests passing","Representative PDF print pending"],
  ["Practice","MCQ choice, CQ parts, PDF attachment, submit/review","Assessment tests passing","Touch and refresh run pending"],
  ["Test Centre","MCQ/CQ/full model paper, timer, resume, result","Exam-state tests passing","Full timed device run pending"],
  ["Student data","Bookmark, progress, backup, restore and reset","Local persistence tests passing","Cross-browser restore pending"],
  ["Trust links","Sources, error report, Privacy, Terms, Support","Route/link tests passing","External-link sampling pending"],
] as const;

export default function ReleaseReadinessPage() {
  return <main className="release-page"><div className="release-shell">
    <header className="release-page-head">
      <Link className="legal-brand" href="/"><span className="brand-mark"><BookOpenCheck size={20}/></span><span>HSC2Plus</span></Link>
      <span className="release-private"><ShieldCheck size={14}/>Release validation workspace</span>
      <span className="eyebrow">ACADEMIC & BETA VALIDATION</span>
      <h1>Release evidence centre</h1>
      <p>এই পেজটি শিক্ষার্থীর পড়ার অংশ নয়। NCTB mapping, reviewer sign-off, real-device QA এবং controlled beta—চারটি release gate-এর কাজ ও প্রমাণ এখানে আলাদা রাখা হয়েছে। ১৩/১৩ বিষয়ের official curriculum presence এখন নথিভুক্ত।</p>
      <div className="release-status-row"><span className="passed"><CheckCircle2 size={14}/>Automated checks passing</span><span><Clock3 size={14}/>0/356 group learning-unit records signed off</span><span><Clock3 size={14}/>0 physical-device runs recorded</span><span><Clock3 size={14}/>Beta not started</span></div>
    </header>

    <section className="release-workstream" id="nctb-mapping">
      <header><span>01</span><div><p className="eyebrow">DIRECT NCTB MAPPING</p><h2>প্রতিটি অধ্যায়কে প্রমাণসহ official source-এর সঙ্গে মিল</h2><p>নৈর্বাচনিক বিষয়ের free PDF না থাকলেও official curriculum ও subject structure পাওয়া গেলে বিষয়টি mapped। এরপর reapproval record + book imprint দিয়ে edition এবং contents/page evidence দিয়ে chapter mapping সম্পন্ন হবে।</p></div></header>
      <div className="source-evidence-grid">{officialAcademicSources.entries.filter((source)=>["nctb-2026-secondary-higher-catalogue","nctb-xi-xii-textbooks","nctb-hsc-curriculum","nctb-xi-xii-subject-structure","nctb-hsc-2026-full-syllabus","nctb-xi-xii-reapproval-notice"].includes(source.id)).map((source)=><a key={source.id} href={source.url} target="_blank" rel="noreferrer"><strong>{source.label}</strong><small>{source.scopeBn}</small><ExternalLink size={14}/></a>)}</div>
      <div className="mapping-fields">{mappingFields.map((item)=><article key={item}><Clock3 size={15}/><strong>{item}</strong><small>Value + official source ID + evidence page required</small></article>)}</div>
      <div className="release-table-wrap" role="region" aria-label="NCTB mapping status by subject" tabIndex={0}><table><thead><tr><th>Subject</th><th>Records</th><th>Official presence</th><th>Paper allocation</th><th>Chapters</th><th>Edition/pages</th></tr></thead><tbody>{subjects.map(([id,en,bn,count])=>{const audit=curriculumVerificationLedger.subjects.find((item)=>item.id===id)!; return <tr key={id}><th>{en}<small>{bn}</small></th><td>{count}</td><td><span className="status-linked">Source-linked</span></td><td><span className="status-linked">Reference-mapped</span></td><td><span className="status-pending">Direct comparison</span></td><td><span className="status-pending">{audit.editionReview === "catalogue-linked" ? "Catalogue linked" : "Imprint pending"}</span></td></tr>})}</tbody></table></div>
      <aside className="release-integrity-note"><ShieldCheck size={17}/><div><strong>Supporting guides are stored separately</strong><p>Guidebooks may deepen notes and practice, but they cannot fill an official curriculum field. Only the applicable NCTB/board record, approved textbook imprint and matching page evidence can move a field to Verified.</p></div></aside>
      <div className="release-actions"><a href="/templates/hsc2plus-nctb-mapping-register.csv" download><Download size={15}/>Download mapping register</a><p><ShieldCheck size={14}/>“Verified” becomes available only after all ten fields and named, dated comparison evidence are complete.</p></div>
    </section>

    <section className="release-workstream" id="reviewer-approval">
      <header><span>02</span><div><p className="eyebrow">QUALIFIED REVIEWER APPROVAL</p><h2>Thirteen subject specialists, one accountable sign-off protocol</h2><p>প্রতিটি reviewer-এর পরিচয়, যোগ্যতা, subject responsibility এবং conflict-of-interest declaration নথিভুক্ত হবে। বর্তমানে ১৩টির ১৩টি পদই Unassigned—কোনো chapter specialist-approved নয়।</p></div></header>
      <div className="reviewer-protocol-grid">
        {subjects.map(([en,bn])=><article key={en}><div><strong>{en}</strong><span>Unassigned</span></div><p>{bn} · HSC teacher, lecturer, examiner or demonstrably qualified subject specialist</p><ul><li>Textbook/curriculum edition</li><li>Every lesson and worked solution</li><li>All MCQ options and explanations</li><li>CQ ১+২+৩+৪ rubric and model answer</li></ul></article>)}
      </div>
      <div className="mapping-fields reviewer-checks">{reviewChecks.map((item)=><article key={item}><Clock3 size={15}/><strong>{item}</strong><small>Every applicable item must be checked; sampling alone cannot sign off a chapter.</small></article>)}</div>
      <div className="pilot-gate"><div><span>PHASE 1</span><strong>15–20 representative chapters</strong><p>High-risk calculations, English source text, Bangla literature, ICT practical work, Civics terminology and History chronology must be included.</p></div><div><span>PHASE 2</span><strong>Correction closure</strong><p>Every correction receives an owner, due date, recheck decision and evidence link.</p></div><div><span>PHASE 3</span><strong>Full subject expansion</strong><p>No chapter inherits approval from another chapter or from automated checks.</p></div></div>
      <div className="release-actions"><a href="/templates/hsc2plus-reviewer-register.csv" download><Download size={15}/>Reviewer register</a><a href="/templates/hsc2plus-chapter-signoff.csv" download><Download size={15}/>Chapter sign-off sheet</a></div>
    </section>

    <section className="release-workstream" id="device-testing">
      <header><span>03</span><div><p className="eyebrow">REAL-DEVICE & SCREEN-READER QA</p><h2>একই journey, ছয়টি বাস্তব environment</h2><p>Responsive CSS থাকা pass নয়। প্রতিটি run-এ tester, device, OS/browser version, evidence এবং result লাগবে।</p></div></header>
      <div className="device-matrix">{devices.map(([device,size,assistive])=><article key={device}><strong>{device}</strong><span>{size}</span><small>{assistive}</small><em>Not tested</em></article>)}</div>
      <ol className="qa-journey"><li>Group নির্বাচন ও primary/bottom navigation</li><li>Subject → chapter → lesson switching</li><li>Detailed, Revision, Last-minute ও printable notes</li><li>Unlimited MCQ, CQ practice ও 100-mark model test</li><li>Timer, refresh recovery, result report ও PDF print</li><li>Backup/restore, offline revisit ও service-worker update</li><li>Keyboard-only, visible focus, labels and live announcements</li><li>200% zoom, contrast, reduced motion, 44px targets and safe areas</li></ol>
      <div className="release-actions"><a href="/templates/hsc2plus-device-screenreader-run.csv" download><Download size={15}/>Device test record</a><p><Clock3 size={14}/>A run passes only when all critical journeys pass and no blocker remains open.</p></div>
    </section>

    <section className="release-workstream" id="controlled-beta">
      <header><span>04</span><div><p className="eyebrow">CONTROLLED TEACHER/STUDENT BETA</p><h2>Small cohort, measurable tasks, evidence-led decision</h2><p>Private beta আগে; feedback ছাড়া public launch নয়। ব্যক্তিগত academic data বা CQ PDF সংগ্রহ না করেও usability test চালানো যাবে।</p></div></header>
      <div className="beta-plan-grid"><article><strong>Participants</strong><p>5–7 subject teachers/reviewers and 20–50 Commerce/Humanities students; mixed device and preparation levels.</p></article><article><strong>Two rounds</strong><p>Round 1: 15–20 pilot chapters. Round 2: corrected flows and expanded representative coverage.</p></article><article><strong>Core tasks</strong><p>Find a chapter, learn a concept, revise, practise MCQ/CQ, sit a test, interpret the report and return offline.</p></article><article><strong>Measures</strong><p>Task completion, wrong turns, time-on-task, crash/blocker rate, content errors, readability and confidence.</p></article></div>
      <div className="go-no-go"><h3>Go / No-go thresholds</h3><div><p><CheckCircle2 size={15}/><strong>Go candidate</strong><span>≥90% critical-task completion; zero unresolved blocker; ≥80% can find notes/practice/test without help; every academic error triaged.</span></p><p><Clock3 size={15}/><strong>Hold release</strong><span>Any wrong academic answer, data loss, inaccessible critical flow, test-scoring defect, privacy mismatch or repeated navigation failure.</span></p></div></div>
      <div className="release-actions"><a href="/templates/hsc2plus-beta-session-log.csv" download><Download size={15}/>Beta session log</a><a href="/templates/hsc2plus-beta-issue-register.csv" download><Download size={15}/>Issue register</a></div>
    </section>

    <section className="release-workstream" id="interaction-audit">
      <header><span>05</span><div><p className="eyebrow">OPTION & INTERACTION AUDIT</p><h2>প্রতিটি দৃশ্যমান option-এর কাজ, destination ও বাকি manual check</h2><p>Automated test কোনো physical-device run-এর বিকল্প নয়। এখানে কোন option source/build test-এ pass করেছে এবং public release-এর আগে কোন tap, keyboard বা screen-reader check এখনো বাকি—দুটিই আলাদা করে দেখানো হয়েছে।</p></div></header>
      <div className="release-table-wrap" role="region" aria-label="Visible option interaction audit" tabIndex={0}><table><thead><tr><th>Area</th><th>Options checked</th><th>Automated evidence</th><th>Manual release gate</th></tr></thead><tbody>{interactionChecks.map(([area,options,automated,manual])=><tr key={area}><th>{area}</th><td>{options}</td><td><span className="status-linked">{automated}</span></td><td><span className="status-pending">{manual}</span></td></tr>)}</tbody></table></div>
      <aside className="release-integrity-note"><ShieldCheck size={17}/><div><strong>No false “fully checked” claim</strong><p>Build ও automated interaction pass প্রকাশ করা যাবে; Android, iPhone, desktop keyboard এবং screen reader-এ evidence record না হওয়া পর্যন্ত manual column Pending-ই থাকবে।</p></div></aside>
    </section>

    <section className="release-workstream" id="content-integrity">
      <header><span>06</span><div><p className="eyebrow">AUTOMATED CONTENT INTEGRITY</p><h2>সংখ্যা নয়—প্রতিটি lesson-এর শেখার কাঠামোও build gate-এর অংশ</h2><p>এই automated gate chapter count-এর পাশাপাশি Foundation explanation, Advanced transfer, worked example, student practice, answer check, MCQ/CQ structure এবং source status যাচাই করে। এটি subject-specialist approval নয়।</p></div></header>
      <div className="beta-plan-grid">
        {(["commerce","humanities"] as const).map((group)=><article key={group}><strong>{group === "commerce" ? "Commerce" : "Humanities"}</strong><p>{academicDatabaseSummary[group].chapters} chapter records · {academicDatabaseSummary[group].lessons} detailed lessons · {academicDatabaseSummary[group].notes} note blocks · {academicDatabaseSummary[group].questions} questions</p></article>)}
        <article><strong>Lesson depth gate</strong><p>Basic Foundation → worked example → guided practice → answer check → Advanced Note → new-question transfer.</p></article>
        <article><strong>Assessment gate</strong><p>Four-option MCQ with explanation; non-English subjects carry 10-mark CQ answers visibly split into ক/খ/গ/ঘ and ১+২+৩+৪.</p></article>
      </div>
      <div className="mapping-fields reviewer-checks">{academicContentAssurance.checks.map((check)=><article key={check.id}><CheckCircle2 size={15}/><strong>{check.label}</strong><small>{check.labelBn}</small></article>)}</div>
      <aside className="release-integrity-note"><ShieldCheck size={17}/><div><strong>Automated pass · specialist review pending</strong><p>Last run: {academicContentAssurance.auditedOn}. {academicContentAssurance.limitation}</p></div></aside>
    </section>

    <footer className="release-page-footer"><p><ShieldCheck size={15}/>All downloaded files are blank operational templates. Downloading or completing one does not automatically change public status or chapter approval.</p><Link className="legal-back" href="/support"><ArrowLeft size={16}/>Support &amp; Content Trust-এ ফিরুন</Link></footer>
  </div></main>;
}
