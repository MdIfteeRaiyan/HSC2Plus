import { accountingReferenceChapters, accountingSecondPaperReferenceChapters, banglaSahityapathPoetry, banglaSahityapathProse, banglaSohopath, banglaSecondPaperReferenceChapters, banglaSecondPaperGuideSources, businessFirstPaperReferenceChapters, businessSecondPaperReferenceChapters, civicsReferenceChapters, civicsSecondPaperReferenceChapters, economicsReferenceChapters, englishForTodayUnits, englishSecondPaperReferenceChapters, financeReferenceChapters, geographyReferenceChapters, ictReferenceChapters, islamicHistoryFirstPaperReferenceChapters, islamicHistorySecondPaperReferenceChapters, logicReferenceChapters, statisticsFirstPaperReferenceChapters, statisticsSecondPaperReferenceChapters } from "./source-book-curriculum";

export type Subject = {
  id: string;
  name: string;
  nameBn: string;
  paper: string;
  progress: number;
  mastery: number;
  color: string;
  nextChapter: string;
  chapters: number;
};

export const businessSubjects: Subject[] = [
  { id: "bangla", name: "Bangla", nameBn: "বাংলা", paper: "1st & 2nd Paper", progress: 0, mastery: 0, color: "#b34f5f", nextChapter: "বাঙ্গালার নব্য লেখকদিগের প্রতি নিবেদন", chapters: 54 },
  { id: "english", name: "English", nameBn: "ইংরেজি", paper: "1st & 2nd Paper", progress: 57, mastery: 68, color: "#7a4db1", nextChapter: "People or Institutions Making History", chapters: 25 },
  { id: "ict", name: "Information & Communication Technology", nameBn: "তথ্য ও যোগাযোগ প্রযুক্তি", paper: "Full Subject", progress: 0, mastery: 0, color: "#087f8c", nextChapter: "বিশ্ব ও বাংলাদেশ প্রেক্ষিত", chapters: 6 },
  { id: "accounting", name: "Accounting", nameBn: "হিসাববিজ্ঞান", paper: "1st & 2nd Paper", progress: 64, mastery: 71, color: "#0a6b5c", nextChapter: "Journal & Ledger", chapters: 20 },
  { id: "finance", name: "Finance, Banking & Insurance", nameBn: "ফিন্যান্স, ব্যাংকিং ও বিমা", paper: "1st & 2nd Paper", progress: 48, mastery: 62, color: "#2456a6", nextChapter: "অর্থের সময়মূল্য", chapters: 23 },
  { id: "business", name: "Business Organisation", nameBn: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", paper: "1st & 2nd Paper", progress: 53, mastery: 66, color: "#c67922", nextChapter: "ব্যবসায়ের মৌলিক ধারণা", chapters: 22 },
];

export const humanitiesSubjects: Subject[] = [
  { id: "bangla", name: "Bangla", nameBn: "বাংলা", paper: "1st & 2nd Paper", progress: 0, mastery: 0, color: "#b34f5f", nextChapter: "বাঙ্গালার নব্য লেখকদিগের প্রতি নিবেদন", chapters: 54 },
  { id: "english", name: "English", nameBn: "ইংরেজি", paper: "1st & 2nd Paper", progress: 57, mastery: 68, color: "#7a4db1", nextChapter: "People or Institutions Making History", chapters: 25 },
  { id: "ict", name: "Information & Communication Technology", nameBn: "তথ্য ও যোগাযোগ প্রযুক্তি", paper: "Full Subject", progress: 0, mastery: 0, color: "#087f8c", nextChapter: "বিশ্ব ও বাংলাদেশ প্রেক্ষিত", chapters: 6 },
  { id: "economics", name: "Economics", nameBn: "অর্থনীতি", paper: "1st & 2nd Paper", progress: 76, mastery: 82, color: "#0a6b5c", nextChapter: "মৌলিক অর্থনৈতিক সমস্যা", chapters: 20 },
  { id: "civics", name: "Civics & Good Governance", nameBn: "পৌরনীতি ও সুশাসন", paper: "1st & 2nd Paper", progress: 51, mastery: 64, color: "#2456a6", nextChapter: "Values, Law & Liberty", chapters: 20 },
  { id: "geography", name: "Geography", nameBn: "ভূগোল", paper: "1st & 2nd Paper", progress: 0, mastery: 0, color: "#287d69", nextChapter: "প্রাকৃতিক ভূগোল", chapters: 18 },
  { id: "history", name: "History", nameBn: "ইতিহাস", paper: "1st & 2nd Paper", progress: 43, mastery: 58, color: "#c67922", nextChapter: "ভারতবর্ষে ইউরোপীয়দের আগমন", chapters: 17 },
  { id: "logic", name: "Logic", nameBn: "যুক্তিবিদ্যা", paper: "1st & 2nd Paper", progress: 0, mastery: 0, color: "#8056b3", nextChapter: "যুক্তিবিদ্যা পরিচিতি", chapters: 16 },
  { id: "statistics", name: "Statistics", nameBn: "পরিসংখ্যান", paper: "1st & 2nd Paper", progress: 0, mastery: 0, color: "#3c7f8f", nextChapter: "পরিসংখ্যান, চলক ও প্রতীক", chapters: 17 },
  { id: "islamic_history", name: "Islamic History & Culture", nameBn: "ইসলামের ইতিহাস ও সংস্কৃতি", paper: "1st & 2nd Paper", progress: 0, mastery: 0, color: "#9a6a25", nextChapter: "Pre-Islamic Arabia", chapters: 13 },
];

export const subjectsByGroup = { commerce: businessSubjects, humanities: humanitiesSubjects };

export type ChapterPreview = {
  title: string;
  titleBn: string;
  lessons: number;
  questions: number;
  status: "ready" | "building" | "pending";
  progress: number;
  outcomes?: string[];
  lessonPlan?: { title: string; titleBn: string; minutes: number; format: "Concept" | "Worked example" | "Practice" }[];
  examPlan?: { mcq: number; cq: number; written: number };
  examPrep?: string[];
  paper?: "1st Paper" | "2nd Paper";
  author?: string;
  sourceRef?: {
    book: string;
    edition: string;
    page: string;
    evidence: "official-textbook" | "reference-guide";
    url?: string;
    role?: "curriculum-evidence" | "content-foundation" | "worked-solution-reference" | "question-pattern-reference";
    scopeNote?: string;
  };
};

export const suppliedCommerceEconomicsSources = [
  { id:"hsc-curriculum-support",subjectId:"all",paper:"All",label:"Higher-secondary syllabus reference",labelBn:"উচ্চ মাধ্যমিক সিলেবাস সহায়ক নথি",url:"https://ctgcollege.gov.bd/resource/uploads/2021/01/%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A6%BF%E0%A6%95-%E0%A6%8F%E0%A6%B0-%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%AC%E0%A6%BE%E0%A6%B8.pdf",role:"curriculum-evidence",format:"college-hosted syllabus PDF",use:["subject and paper comparison","chapter-list cross-check","reviewer evidence intake"] },
  { id:"bangla-1-question-guide",subjectId:"bangla",paper:"1st Paper",label:"Bangla First Paper question and answer reference",labelBn:"বাংলা প্রথম পত্র প্রশ্ন ও উত্তর সহায়ক বই",url:"https://drive.google.com/file/d/1rWRQoT18O6uowWofJu51Y1OUgJMne0HN/view",role:"question-pattern-reference",format:"user-supplied guide scan",use:["literature stimulus patterns","1+2+3+4 response structure","chapter-specific practice planning"] },
  { id:"bangla-2-question-guide",subjectId:"bangla",paper:"2nd Paper",label:"Bangla Second Paper writing and question reference",labelBn:"বাংলা দ্বিতীয় পত্র লিখন ও প্রশ্ন সহায়ক বই",url:"https://drive.google.com/file/d/12ZArZL2rbgDGXJTFBU60OVKcwXEcb2lW/view",role:"question-pattern-reference",format:"user-supplied guide scan",use:["grammar task patterns","writing formats","original practice planning"] },
  { id:"finance-1-support",subjectId:"finance",paper:"1st Paper",label:"Finance, Banking & Insurance · First Paper reference",labelBn:"ফিন্যান্স, ব্যাংকিং ও বিমা · প্রথম পত্র সহায়ক বই",url:"https://drive.google.com/file/d/1Eesx-8EHt3XjHczqEMIO-oGbm-UOqTzM/view",role:"content-foundation",format:"162-page scan",use:["chapter concepts","formula and decision patterns","MCQ and written-task structure"] },
  { id:"finance-2-support",subjectId:"finance",paper:"2nd Paper",label:"Finance, Banking & Insurance · Second Paper reference",labelBn:"ফিন্যান্স, ব্যাংকিং ও বিমা · দ্বিতীয় পত্র সহায়ক বই",url:"https://drive.google.com/file/d/1XXVMZH4H495_6MEUz1WGNGXhyFEnCFrS/view",role:"content-foundation",format:"247-page scan",use:["banking and insurance concepts","case patterns","written-question structure"] },
  { id:"finance-1-chapter-pack-2026",subjectId:"finance",paper:"1st Paper",label:"Finance First Paper chapter pack",labelBn:"ফিন্যান্স প্রথম পত্র অধ্যায়ভিত্তিক প্যাক",url:"user-supplied:finance1st.zip",role:"worked-solution-reference",format:"9 chapter PDFs · 250 scanned pages · supplied 20 October 2026",use:["all nine chapter structures","formula and cash-flow workings","table/graph/stimulus patterns","original CQ and answer authoring"] },
  { id:"finance-2-chapter-pack-2026",subjectId:"finance",paper:"2nd Paper",label:"Finance Second Paper chapter pack",labelBn:"ফিন্যান্স দ্বিতীয় পত্র অধ্যায়ভিত্তিক প্যাক",url:"user-supplied:finanance2ndpaper.zip",role:"worked-solution-reference",format:"14 chapter PDFs · 220 scanned pages · supplied 20 October 2026",use:["all fourteen banking and insurance chapters","document and calculation layouts","stimulus/table patterns","original CQ and answer authoring"] },
  { id:"finance-2-mcq-pack-2026",subjectId:"finance",paper:"2nd Paper",label:"Finance Second Paper MCQ pack",labelBn:"ফিন্যান্স দ্বিতীয় পত্র MCQ প্যাক",url:"user-supplied:finanance2ndpaper.zip#MCQ",role:"question-pattern-reference",format:"27 scanned pages · supplied 20 October 2026",use:["chapter-balanced MCQ patterns","plausible distractor review","original practice and model-test authoring"] },
  { id:"finance-1-all-sheet",subjectId:"finance",paper:"1st Paper",label:"Finance First Paper all-sheet reference",labelBn:"ফিন্যান্স প্রথম পত্র অল-শিট সহায়ক উপকরণ",url:"https://drive.google.com/file/d/19v1NzLaopL0yrAiKJO7rmuOoFV/view",role:"worked-solution-reference",format:"user-supplied sheet collection",use:["formula practice","decision-case variations","worked-answer comparison"] },
  { id:"finance-1-scribd-guide",subjectId:"finance",paper:"1st Paper",label:"Finance, Banking & Insurance First Paper guide",labelBn:"ফিন্যান্স, ব্যাংকিং ও বিমা প্রথম পত্র গাইড",url:"https://www.scribd.com/document/606059986/ফিন্যান্স-ও-ব্যাংকিং-বিমা-১ম-পত্র",role:"question-pattern-reference",format:"274-page public Scribd preview · OCR quality limited",use:["chapter-wise question density","formula and numerical pattern sampling","original MCQ/CQ planning"] },
  { id:"finance-1-students-question-guide",subjectId:"finance",paper:"1st Paper",label:"Finance First Paper question reference",labelBn:"ফিন্যান্স প্রথম পত্র প্রশ্ন সহায়ক বই",url:"https://students.bd/en/download/read/1UQHt8OkVF9lUV5Y49T3-cgB8Trv_NG18",role:"question-pattern-reference",format:"Students.bd reader · direct content review pending",use:["MCQ/CQ structure comparison after access","practice-bank planning"] },
  { id:"finance-1-students-reading",subjectId:"finance",paper:"1st Paper",label:"Finance First Paper reading reference",labelBn:"ফিন্যান্স প্রথম পত্র পাঠ সহায়ক বই",url:"https://students.bd/en/download/read/1A2uWMxduObvqYOw5a0sJLPjwFTDhKp68",role:"content-foundation",format:"Students.bd reader · direct content review pending",use:["chapter explanation comparison after access","lesson-path planning"] },
  { id:"finance-2-students-mcq",subjectId:"finance",paper:"2nd Paper",label:"Finance Second Paper MCQ reference",labelBn:"ফিন্যান্স দ্বিতীয় পত্র MCQ সহায়ক বই",url:"https://students.bd/en/download/read/1T-ce3GQcICc8F3dV3-AtCdROaPA_213r",role:"question-pattern-reference",format:"Students.bd reader · direct content review pending",use:["MCQ distractor and coverage review after access","model-test planning"] },
  { id:"finance-2-students-cq",subjectId:"finance",paper:"2nd Paper",label:"Finance Second Paper CQ reference",labelBn:"ফিন্যান্স দ্বিতীয় পত্র CQ সহায়ক বই",url:"https://students.bd/en/download/read/1w86MJEK-55u3KEOhSmNgp_KkYrltM8Bn",role:"question-pattern-reference",format:"Students.bd reader · direct content review pending",use:["CQ stimulus and mark-depth review after access","original model-question planning"] },
  { id:"finance-2-students-reading",subjectId:"finance",paper:"2nd Paper",label:"Finance Second Paper reading reference",labelBn:"ফিন্যান্স দ্বিতীয় পত্র পাঠ সহায়ক বই",url:"https://students.bd/en/download/read/1607vQ7KZRkg4BkpmagbPyuks5timmVq_",role:"content-foundation",format:"Students.bd reader · direct content review pending",use:["banking and insurance lesson comparison after access","chapter-path planning"] },
  { id:"accounting-1-support",subjectId:"accounting",paper:"1st Paper",label:"Accounting · First Paper reference",labelBn:"হিসাববিজ্ঞান · প্রথম পত্র সহায়ক বই",url:"https://drive.google.com/file/d/10jfwflDORb8luujXoZNB5l1yk9fFmEHV/view",role:"worked-solution-reference",format:"441-page book scan",use:["numbered contents map","journal and ledger formats","full statement workings"] },
  { id:"accounting-2-support",subjectId:"accounting",paper:"2nd Paper",label:"Accounting · Second Paper reference",labelBn:"হিসাববিজ্ঞান · দ্বিতীয় পত্র সহায়ক বই",url:"https://drive.google.com/file/d/12ZTax4TUyFnlTm6teME94JPJ1QW9LLH4/view",role:"worked-solution-reference",format:"369-page solution scan",use:["multi-column account formats","adjustment workings","complete model solutions"] },
  { id:"accounting-2-note-sample",subjectId:"accounting",paper:"2nd Paper",label:"Accounting second-paper note sample",labelBn:"হিসাববিজ্ঞান দ্বিতীয় পত্র নোটের নমুনা",url:"https://www.facebook.com/groups/accounting.school/posts/7308896852517717/",role:"worked-solution-reference",format:"teacher/community note post",use:["handwritten-note hierarchy","worked-format comparison","common-error prompts"] },
  { id:"accounting-1-scribd-note",subjectId:"accounting",paper:"1st Paper",label:"Accounting First Paper compact-note reference",labelBn:"হিসাববিজ্ঞান প্রথম পত্র সংক্ষিপ্ত নোট রেফারেন্স",url:"https://www.scribd.com/document/631320891/Accounting-1st-Paper-Notes-pdf",role:"worked-solution-reference",format:"34-page public Scribd preview · full academic review pending",use:["compact working-note hierarchy","ledger and statement layout review","revision-block planning"] },
  { id:"accounting-2-scribd-note",subjectId:"accounting",paper:"2nd Paper",label:"Accounting Second Paper compact-note reference",labelBn:"হিসাববিজ্ঞান দ্বিতীয় পত্র সংক্ষিপ্ত নোট রেফারেন্স",url:"https://www.scribd.com/document/631320887/Accounting-2nd-Paper-Notes-pdf",role:"worked-solution-reference",format:"27-page public Scribd preview · full academic review pending",use:["formula and table density review","working-to-answer sequence","exam-revision layout planning"] },
  { id:"logic-1-scribd-reference",subjectId:"logic",paper:"1st Paper",label:"HSC Logic First Paper reference",labelBn:"HSC যুক্তিবিদ্যা প্রথম পত্র সহায়ক রেফারেন্স",url:"https://www.scribd.com/document/839890700/HSC-Logic-1st-Paper",role:"content-foundation",format:"356-page public Scribd preview · full academic review pending",use:["chapter hierarchy and bilingual terminology","rule-example-test sequence","argument and counterexample planning"] },
  { id:"logic-2-scribd-reference",subjectId:"logic",paper:"2nd Paper",label:"HSC Logic Second Paper reference",labelBn:"HSC যুক্তিবিদ্যা দ্বিতীয় পত্র সহায়ক রেফারেন্স",url:"https://www.scribd.com/document/1030747106/HSC-Logic-2nd-Paper",role:"content-foundation",format:"public Scribd preview · access-limited review",use:["second-paper topic sequence comparison","definition and classification practice planning","rule-based answer layout"] },
  { id:"economics-1-support",subjectId:"economics",paper:"1st Paper",label:"Economics · First Paper reference",labelBn:"অর্থনীতি · প্রথম পত্র সহায়ক বই",url:"https://drive.google.com/file/d/1scQIqE18VIB2NvMHpiKr8GFgKXELsft_/view",role:"worked-solution-reference",format:"297-page scan",use:["schedule and graph problems","formula applications","CQ stimulus patterns"] },
  { id:"economics-2-support",subjectId:"economics",paper:"2nd Paper",label:"Economics · Second Paper reference",labelBn:"অর্থনীতি · দ্বিতীয় পত্র সহায়ক বই",url:"https://drive.google.com/file/d/1XO7NlXUBqYSIOWTxFGpWmfmDgBeJYopn/view",role:"question-pattern-reference",format:"268-page scan",use:["Bangladesh-economy cases","data interpretation","analytical written questions"] },
  { id:"statistics-note-sample",subjectId:"statistics",paper:"1st & 2nd Paper",label:"Statistics note sample",labelBn:"পরিসংখ্যান নোটের নমুনা",url:"https://www.facebook.com/groups/895543298680538/posts/1229245755310289/",role:"worked-solution-reference",format:"teacher/community note post",use:["formula layout","worked table sequence","graph and interpretation prompts"] },
  { id:"business-1-master-note",subjectId:"business",paper:"1st Paper",label:"Business Organisation & Management First Paper master note",labelBn:"ব্যবসায় সংগঠন ও ব্যবস্থাপনা প্রথম পত্র মাস্টার নোট",url:"https://drive.google.com/file/d/1T6JVGK7PbtirfOhYx1BYyronQnC1HaNP/view",role:"content-foundation",format:"15-page rapid-revision PDF · visually reviewed",use:["chapter-wise rapid facts","definition and relationship recall","exam-night question-answer pattern","mistake-trap planning"] },
  { id:"production-marketing-2-master-note",subjectId:"production_marketing",paper:"2nd Paper",label:"Production Management & Marketing Second Paper master note",labelBn:"উৎপাদন ব্যবস্থাপনা ও বিপণন দ্বিতীয় পত্র মাস্টার নোট",url:"https://drive.google.com/file/d/13PAacNxYan1V9oyAI1Sf17vKn5idKYQ0/view",role:"content-foundation",format:"34-page question-answer revision PDF · visually reviewed",use:["separate-subject curriculum intake","short-answer depth pattern","consumer and marketing terminology","future subject-library planning"] },
  { id:"ict-6-handwritten-note",subjectId:"ict",paper:"Full Subject",label:"ICT chapter 6 handwritten-note reference",labelBn:"ICT অধ্যায় ৬ হাতে লেখা নোটের রেফারেন্স",url:"https://www.facebook.com/share/p/1EYTbD8k8L/",role:"content-foundation",format:"login-gated social post · content review pending",use:["handwritten hierarchy review after access","database chapter recap planning"] },
  { id:"accounting-1-handwritten-note",subjectId:"accounting",paper:"1st Paper",label:"Accounting First Paper handwritten-note reference",labelBn:"হিসাববিজ্ঞান প্রথম পত্র হাতে লেখা নোটের রেফারেন্স",url:"https://www.facebook.com/share/p/19fA7mBzjL/",role:"worked-solution-reference",format:"login-gated social post · content review pending",use:["working-note presentation review after access","calculation layout comparison"] },
  { id:"ict-1-handwritten-note",subjectId:"ict",paper:"Full Subject",label:"ICT chapter 1 handwritten-note reference",labelBn:"ICT অধ্যায় ১ হাতে লেখা নোটের রেফারেন্স",url:"https://www.facebook.com/share/p/19UAC5ig2x/",role:"content-foundation",format:"login-gated social post · content review pending",use:["visual summary review after access","chapter-one terminology recap planning"] },
  { id:"ict-cq-scan-369",subjectId:"ict",paper:"Full Subject",label:"HSC ICT CQ collection",labelBn:"HSC ICT সৃজনশীল প্রশ্ন সংগ্রহ",url:"user-supplied:HSC ICT CQ.pdf",role:"question-pattern-reference",format:"369-page scanned guide · visually reviewed chapter by chapter",use:["stimulus and command-word patterns","1+2+3+4 answer-depth comparison","chapter-wise CQ variation","diagram, code and table placement"] },
  { id:"ict-mcq-guide-28",subjectId:"ict",paper:"Full Subject",label:"HSC ICT MCQ collection",labelBn:"HSC ICT বহুনির্বাচনি প্রশ্ন সংগ্রহ",url:"https://drive.google.com/file/d/1SVsXnfuiRQmFhxabG8Ea8M_961pYcvFX/preview",role:"question-pattern-reference",format:"28-page user-supplied guide · visually reviewed",use:["concept and application MCQ coverage","distractor-pattern audit","chapter-balance planning","original renewable practice"] },
  { id:"ict-akkharpatra-full-guide",subjectId:"ict",paper:"Full Subject",label:"Akkharpatra HSC ICT full guide",labelBn:"অক্ষরপত্র HSC ICT পূর্ণাঙ্গ গাইড",url:"https://drive.google.com/file/d/18X3SelmGgr8MxzNNOr81UtZ1H6BV7K6u/preview",role:"content-foundation",format:"545-page user-supplied guide · contents and all chapter ranges visually reviewed",use:["six-chapter depth map","worked conversion and logic examples","HTML and C practice sequence","database question and answer patterns"] },
  { id:"assessment-mistake-guidance",subjectId:"all",paper:"All",label:"MCQ and CQ mistake-avoidance guidance",labelBn:"MCQ ও CQ ভুল এড়ানোর নির্দেশিকা",url:"https://www.facebook.com/share/p/1J48ZYmjqw/",role:"question-pattern-reference",format:"login-gated social post · content review pending",use:["option-quality audit after access","CQ command-word and mark-depth audit","common-error checklist comparison"] },
] as const;

export const supportingSourcePolicy = {
  label:"Supporting-source policy",
  labelBn:"সহায়ক উৎস ব্যবহারের নীতি",
  statement:"These books guide topic depth, worked-example formats and original board-pattern practice. They do not prove the official syllabus, approved edition or authentic past-board provenance.",
  statementBn:"এই বইগুলো বিষয়বস্তুর গভীরতা, সমাধানের ধরন ও নিজস্ব বোর্ড-প্যাটার্ন অনুশীলন তৈরিতে সহায়তা করে। এগুলো অফিসিয়াল সিলেবাস, অনুমোদিত সংস্করণ বা আসল বিগত বোর্ড প্রশ্নের প্রমাণ নয়।",
  copyright:"Structures and skills are analysed; lesson text and questions are independently rewritten rather than copied.",
  copyrightBn:"কাঠামো ও দক্ষতা বিশ্লেষণ করা হয়; বইয়ের লেখা বা প্রশ্ন কপি না করে পাঠ ও অনুশীলন নতুনভাবে রচনা করা হয়।",
} as const;

const banglaFirstPaperChapters: ChapterPreview[] = [...banglaSahityapathProse, ...banglaSahityapathPoetry, ...banglaSohopath].map((unit) => ({
  title: unit.title, titleBn: `${unit.titleBn} — ${unit.author}`, author: unit.author, lessons: unit.section === "উপন্যাস" || unit.section === "নাটক" ? 12 : 7,
  questions: unit.section === "উপন্যাস" || unit.section === "নাটক" ? 140 : 72, status: "pending", progress: 0, paper: "1st" + " Paper" as "1st Paper",
  outcomes: [`${unit.titleBn}-এর রচনাপ্রেক্ষাপট ও কেন্দ্রীয় বক্তব্য বোঝা`, "শব্দার্থ, টীকা, ঘটনা/চিত্রকল্প ও ভাষাশৈলী বিশ্লেষণ", "পাঠভিত্তিক MCQ ও ১+২+৩+৪ CQ উত্তর গঠন"],
  lessonPlan: ["লেখক ও রচনাপ্রেক্ষাপট", "পাঠের সহজ ব্যাখ্যা", "শব্দার্থ ও টীকা", unit.section === "কবিতা" ? "চিত্রকল্প, প্রতীক ও ছন্দ" : "ঘটনা, চরিত্র ও বক্তব্য", "ভাষাশৈলী ও গুরুত্বপূর্ণ উদ্ধৃতির তাৎপর্য", "CQ উত্তর গঠনের অনুশীলন", "MCQ ও শেষ মুহূর্তের রিভিশন"].map((titleBn, index) => ({ title: `${unit.title} study ${index + 1}`, titleBn, minutes: index > 4 ? 20 : 15, format: index === 5 ? "Worked example" as const : index === 6 ? "Practice" as const : "Concept" as const })),
  examPlan: { mcq: 60, cq: 20, written: 12 }, examPrep: ["মূলভাব নিজের ভাষায় লেখা", "উদ্দীপকের সঙ্গে পাঠের সম্পর্ক স্থাপন", "লেখক, রচনা ও গুরুত্বপূর্ণ প্রসঙ্গ নির্ভুল রাখা"],
  sourceRef: { book: unit.section === "উপন্যাস" || unit.section === "নাটক" ? "NCTB সহপাঠ" : "NCTB সাহিত্যপাঠ", edition: "Reprint 2023 (user-provided scan)", page: unit.page, evidence: "official-textbook" },
}));

const englishFirstPaperChapters: ChapterPreview[] = englishForTodayUnits.map((unit) => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons?.length ?? 0, questions: 96, status: "pending", progress: 0, paper: "1st" + " Paper" as "1st Paper",
  outcomes: ["Read every textbook lesson for meaning, evidence and inference", "Build lesson vocabulary and answer comprehension tasks", "Connect the unit theme to board-format writing and practice"],
  lessonPlan: (unit.lessons ?? []).map((title, index) => ({ title, titleBn: title, minutes: 22, format: index === (unit.lessons?.length ?? 1) - 1 ? "Practice" as const : "Concept" as const })),
  examPlan: { mcq: 0, cq: 0, written: 36 }, examPrep: ["Seen and unseen comprehension", "Information transfer, summary and flow chart", "Theme-linked paragraph and writing practice"],
  sourceRef: { book: "NCTB English for Today", edition: "Revised edition 2022 · Reprint 2023", page: unit.page, evidence: "official-textbook" },
}));

export const chaptersBySubject: Record<string, ChapterPreview[]> = {
  bangla: [
    { title: "Prose: reading and interpretation", titleBn: "সাহিত্যপাঠ: গদ্য পাঠ ও অনুধাবন", lessons: 8, questions: 80, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Poetry: reading and interpretation", titleBn: "সাহিত্যপাঠ: কবিতা পাঠ ও অনুধাবন", lessons: 8, questions: 80, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Writer, poet and literary context", titleBn: "লেখক-কবি পরিচিতি ও সাহিত্যিক প্রেক্ষাপট", lessons: 7, questions: 72, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Vocabulary, annotation and quotation", titleBn: "শব্দার্থ, টীকা ও উদ্ধৃতি ব্যাখ্যা", lessons: 7, questions: 78, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Theme, imagery and style", titleBn: "মূলভাব, চিত্রকল্প ও ভাষাশৈলী", lessons: 8, questions: 84, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Character, event and values", titleBn: "চরিত্র, ঘটনা ও মূল্যবোধ বিশ্লেষণ", lessons: 8, questions: 88, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Novel study", titleBn: "সহপাঠ: উপন্যাস পাঠ ও বিশ্লেষণ", lessons: 10, questions: 96, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Drama study", titleBn: "সহপাঠ: নাটক পাঠ ও বিশ্লেষণ", lessons: 10, questions: 96, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Bangla language and grammar foundations", titleBn: "বাংলা ভাষা ও ব্যাকরণের ভিত্তি", lessons: 8, questions: 90, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Sound, spelling and pronunciation", titleBn: "ধ্বনি, উচ্চারণ ও শুদ্ধ বানান", lessons: 8, questions: 96, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Word formation and morphology", titleBn: "শব্দগঠন, উপসর্গ, প্রত্যয়, সন্ধি ও সমাস", lessons: 10, questions: 118, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Parts of speech and usage", titleBn: "পদ, শব্দশ্রেণি ও শুদ্ধ প্রয়োগ", lessons: 8, questions: 100, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Sentence structure and transformation", titleBn: "বাক্যগঠন, রূপান্তর ও সংশোধন", lessons: 10, questions: 120, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Terminology and translation", titleBn: "পারিভাষিক শব্দ ও অনুবাদ", lessons: 7, questions: 76, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Summary and idea expansion", titleBn: "সারাংশ, সারমর্ম ও ভাবসম্প্রসারণ", lessons: 8, questions: 86, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Formal and creative composition", titleBn: "আবেদন, প্রতিবেদন, প্রবন্ধ ও রচনা", lessons: 12, questions: 124, status: "pending", progress: 0, paper: "2nd Paper" },
  ],
  ict: ictReferenceChapters.map((unit) => ({
    title: unit.title,
    titleBn: unit.titleBn,
    lessons: unit.lessons.length,
    questions: 144,
    status: "pending" as const,
    progress: 0,
    outcomes: ["ধারণা ও পরিভাষা নিজের ভাষায় ব্যাখ্যা", "চিত্র, হিসাব, code বা table দিয়ে প্রয়োগ", "বোর্ড-প্যাটার্ন MCQ ও ১+২+৩+৪ CQ সমাধান"],
    lessonPlan: unit.lessons.map((titleBn, index) => ({ title:`${unit.title} · lesson ${index + 1}`, titleBn, minutes:index > unit.lessons.length - 3 ? 24 : 18, format:index === unit.lessons.length - 1 ? "Practice" as const : index === unit.lessons.length - 2 ? "Worked example" as const : "Concept" as const })),
    examPlan:{mcq:72,cq:24,written:12},
    examPrep:["২৫ নম্বরের MCQ-তে ধারণা, হিসাব ও output যাচাই", "১+২+৩+৪ CQ-তে সংজ্ঞা থেকে প্রয়োগ ও মূল্যায়ন", "প্রতিটি practical উত্তরে input–process–output–test"],
    sourceRef:{book:"NCTB Information & Communication Technology",edition:"User-supplied textbook scan · edition/imprint approval review pending",page:unit.page,evidence:"official-textbook" as const,role:"curriculum-evidence" as const,scopeNote:"Chapter title, sequence and page range are transcribed from the supplied textbook contents; a qualified ICT reviewer must sign off before Verified is shown."},
  })),
  logic: [
    { title: "Nature and scope of logic", titleBn: "যুক্তিবিদ্যার প্রকৃতি ও পরিধি", lessons: 7, questions: 80, status: "pending", progress: 0 },
    { title: "Terms and concepts", titleBn: "পদ ও ধারণা", lessons: 8, questions: 90, status: "pending", progress: 0 },
    { title: "Proposition and classification", titleBn: "বচন ও শ্রেণিবিভাগ", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "Immediate inference", titleBn: "অমাধ্যম অনুমান", lessons: 9, questions: 110, status: "pending", progress: 0 },
    { title: "Syllogism", titleBn: "নিরপেক্ষ ন্যায়", lessons: 10, questions: 120, status: "pending", progress: 0 },
    { title: "Symbolic logic", titleBn: "প্রতীকী যুক্তিবিদ্যা", lessons: 10, questions: 120, status: "pending", progress: 0 },
    { title: "Induction and scientific method", titleBn: "আরোহ ও বৈজ্ঞানিক পদ্ধতি", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "Hypothesis and explanation", titleBn: "প্রকল্প ও ব্যাখ্যা", lessons: 8, questions: 90, status: "pending", progress: 0 },
    { title: "Fallacies and argument evaluation", titleBn: "ভ্রান্তি ও যুক্তি মূল্যায়ন", lessons: 9, questions: 110, status: "pending", progress: 0 },
  ],
  islamic_history: [
    { title: "Pre-Islamic Arabia", titleBn: "ইসলাম-পূর্ব আরব", lessons: 7, questions: 80, status: "pending", progress: 0 },
    { title: "Life and mission of Prophet Muhammad (PBUH)", titleBn: "মহানবী হযরত মুহাম্মদ (সা.)-এর জীবন ও কর্ম", lessons: 10, questions: 110, status: "pending", progress: 0 },
    { title: "The Rashidun Caliphate", titleBn: "খোলাফায়ে রাশেদিন", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "The Umayyad Caliphate", titleBn: "উমাইয়া খিলাফত", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "The Abbasid Caliphate", titleBn: "আব্বাসীয় খিলাফত", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "Muslim Spain", titleBn: "মুসলিম স্পেন", lessons: 8, questions: 90, status: "pending", progress: 0 },
    { title: "Muslim civilisation and culture", titleBn: "মুসলিম সভ্যতা ও সংস্কৃতি", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "Muslim rule in Bengal", titleBn: "বাংলায় মুসলিম শাসন", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "The Mughal period", titleBn: "মুঘল যুগ", lessons: 9, questions: 100, status: "pending", progress: 0 },
    { title: "Reform and revival movements", titleBn: "সংস্কার ও পুনর্জাগরণ আন্দোলন", lessons: 8, questions: 90, status: "pending", progress: 0 },
    { title: "Muslim society and culture in Bengal", titleBn: "বাংলার মুসলিম সমাজ ও সংস্কৃতি", lessons: 8, questions: 90, status: "pending", progress: 0 },
  ],
  accounting: [
    { title: "Accounting foundations", titleBn: "হিসাববিজ্ঞানের ভিত্তি", lessons: 6, questions: 48, status: "building", progress: 42,
      outcomes: ["Explain the purpose and users of accounting information", "Identify assets, liabilities, owner’s equity, income and expense", "Apply debit and credit logic to simple events"],
      lessonPlan: [
        { title: "Why accounting matters", titleBn: "হিসাববিজ্ঞান কেন প্রয়োজন", minutes: 12, format: "Concept" },
        { title: "Elements of accounting", titleBn: "হিসাবের মৌলিক উপাদান", minutes: 16, format: "Concept" },
        { title: "Classifying everyday transactions", titleBn: "দৈনন্দিন লেনদেন শ্রেণিবিন্যাস", minutes: 18, format: "Worked example" },
        { title: "Foundation check", titleBn: "ভিত্তি যাচাই অনুশীলন", minutes: 14, format: "Practice" },
      ], examPlan: { mcq: 30, cq: 10, written: 8 }, examPrep: ["Definitions in one precise sentence", "Classify five accounting elements", "Explain one real-life transaction"] },
    { title: "Transactions and the accounting equation", titleBn: "লেনদেন ও হিসাব সমীকরণ", lessons: 7, questions: 60, status: "building", progress: 34,
      outcomes: ["Decide whether an event is an accounting transaction", "Show the dual effect of a transaction on the equation", "Calculate missing assets, liabilities or owner’s equity"],
      lessonPlan: [
        { title: "Events versus transactions", titleBn: "ঘটনা ও লেনদেনের পার্থক্য", minutes: 13, format: "Concept" },
        { title: "The expanded accounting equation", titleBn: "বর্ধিত হিসাব সমীকরণ", minutes: 17, format: "Concept" },
        { title: "Analysing dual effects", titleBn: "দ্বৈত প্রভাব বিশ্লেষণ", minutes: 20, format: "Worked example" },
        { title: "Owner drawings, income and expense", titleBn: "উত্তোলন, আয় ও ব্যয়ের প্রভাব", minutes: 18, format: "Worked example" },
        { title: "Equation challenge set", titleBn: "সমীকরণ অনুশীলন সেট", minutes: 16, format: "Practice" },
      ], examPlan: { mcq: 36, cq: 14, written: 10 }, examPrep: ["Complete missing-value equations", "Show dual effects in a table", "Explain drawings, income and expense effects"] },
    { title: "Journal and ledger", titleBn: "জাবেদা ও খতিয়ান", lessons: 8, questions: 72, status: "building", progress: 32,
      outcomes: ["Apply debit and credit rules to common transactions", "Prepare journal entries with narration", "Post journal entries to ledger accounts and calculate balances"],
      lessonPlan: [
        { title: "Debit and credit decision rules", titleBn: "ডেবিট ও ক্রেডিট নির্ধারণের নিয়ম", minutes: 18, format: "Concept" },
        { title: "Journal format and narration", titleBn: "জাবেদার ছক ও সংক্ষিপ্ত বিবরণ", minutes: 16, format: "Concept" },
        { title: "Cash, credit and compound entries", titleBn: "নগদ, বাকিতে ও যৌগিক দাখিলা", minutes: 24, format: "Worked example" },
        { title: "Posting from journal to ledger", titleBn: "জাবেদা থেকে খতিয়ানে স্থানান্তর", minutes: 22, format: "Worked example" },
        { title: "Balancing ledger accounts", titleBn: "খতিয়ান হিসাবের জের নির্ণয়", minutes: 18, format: "Worked example" },
        { title: "Full transaction cycle challenge", titleBn: "পূর্ণ লেনদেন চক্র অনুশীলন", minutes: 25, format: "Practice" },
      ], examPlan: { mcq: 40, cq: 18, written: 14 }, examPrep: ["Identify both accounts before entry", "Write correct narration and dates", "Post and balance without sign errors", "Complete one timed board-style transaction set"] },
    { title: "Trial balance", titleBn: "রেওয়ামিল", lessons: 6, questions: 54, status: "building", progress: 24,
      outcomes: ["Prepare a trial balance from ledger balances", "Distinguish errors revealed and not revealed by a trial balance", "Trace and correct common balancing mistakes"],
      lessonPlan: [
        { title: "Purpose and limits of trial balance", titleBn: "রেওয়ামিলের উদ্দেশ্য ও সীমাবদ্ধতা", minutes: 15, format: "Concept" },
        { title: "Collecting ledger balances", titleBn: "খতিয়ানের জের সংগ্রহ", minutes: 18, format: "Worked example" },
        { title: "Preparing the trial balance", titleBn: "রেওয়ামিল প্রস্তুতকরণ", minutes: 22, format: "Worked example" },
        { title: "Errors and disagreement", titleBn: "ভুল ও গরমিল শনাক্তকরণ", minutes: 20, format: "Concept" },
        { title: "Correction challenge", titleBn: "ভুল সংশোধন অনুশীলন", minutes: 22, format: "Practice" },
      ], examPlan: { mcq: 34, cq: 16, written: 10 }, examPrep: ["Place balances on the correct side", "Calculate totals independently", "Explain errors not disclosed", "Finish one timed correction set"] },
    { title: "Cash book and bank transactions", titleBn: "নগদান বই ও ব্যাংক লেনদেন", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Financial statements", titleBn: "আর্থিক বিবরণী", lessons: 9, questions: 84, status: "pending", progress: 0 },
    { title: "Adjustments and rectification", titleBn: "সমন্বয় ও ভুল সংশোধন", lessons: 8, questions: 72, status: "pending", progress: 0 },
    { title: "Depreciation and provisions", titleBn: "অবচয় ও সঞ্চিতি", lessons: 7, questions: 64, status: "pending", progress: 0 },
    { title: "Partnership accounts", titleBn: "অংশীদারি হিসাব", lessons: 9, questions: 82, status: "pending", progress: 0 },
    { title: "Manufacturing accounts", titleBn: "উৎপাদন হিসাব", lessons: 8, questions: 74, status: "pending", progress: 0 },
  ],
  finance: [
    { title: "Introduction to finance", titleBn: "ফিন্যান্সের পরিচিতি", lessons: 5, questions: 42, status: "building", progress: 40,
      outcomes: ["Explain the role and scope of finance", "Distinguish personal, business and public finance", "Connect financing, investment and dividend decisions"],
      lessonPlan: [
        { title: "Finance in everyday decisions", titleBn: "দৈনন্দিন সিদ্ধান্তে ফিন্যান্স", minutes: 12, format: "Concept" },
        { title: "Types and scope of finance", titleBn: "ফিন্যান্সের ধরন ও পরিধি", minutes: 16, format: "Concept" },
        { title: "Core financial decisions", titleBn: "প্রধান আর্থিক সিদ্ধান্ত", minutes: 18, format: "Worked example" },
        { title: "Finance concept check", titleBn: "ফিন্যান্স ধারণা যাচাই", minutes: 14, format: "Practice" },
      ], examPlan: { mcq: 26, cq: 10, written: 6 }, examPrep: ["Compare three types of finance", "Explain the finance manager’s decisions", "Use one Bangladesh business example"] },
    { title: "Sources of finance", titleBn: "অর্থায়নের উৎস", lessons: 6, questions: 54, status: "building", progress: 32,
      outcomes: ["Classify sources by ownership and duration", "Compare equity, debt and retained earnings", "Select a suitable source for a business situation"],
      lessonPlan: [
        { title: "Why businesses need finance", titleBn: "ব্যবসায়ে অর্থায়নের প্রয়োজন", minutes: 13, format: "Concept" },
        { title: "Internal and external sources", titleBn: "অভ্যন্তরীণ ও বাহ্যিক উৎস", minutes: 17, format: "Concept" },
        { title: "Short, medium and long-term finance", titleBn: "স্বল্প, মধ্য ও দীর্ঘমেয়াদি অর্থায়ন", minutes: 18, format: "Concept" },
        { title: "Equity versus debt", titleBn: "মালিকানা মূলধন বনাম ঋণ", minutes: 21, format: "Worked example" },
        { title: "Source-selection scenarios", titleBn: "অর্থের উৎস নির্বাচন অনুশীলন", minutes: 20, format: "Practice" },
      ], examPlan: { mcq: 32, cq: 14, written: 8 }, examPrep: ["Build a source-comparison grid", "Match duration with financing need", "Justify a source using cost, risk and control"] },
    { title: "Time value of money", titleBn: "অর্থের সময়মূল্য", lessons: 8, questions: 68, status: "pending", progress: 0 },
    { title: "Risk and return", titleBn: "ঝুঁকি ও মুনাফা", lessons: 7, questions: 60, status: "pending", progress: 0 },
    { title: "Financial institutions", titleBn: "আর্থিক প্রতিষ্ঠান", lessons: 7, questions: 58, status: "pending", progress: 0 },
    { title: "Commercial banking", titleBn: "বাণিজ্যিক ব্যাংকিং", lessons: 8, questions: 68, status: "pending", progress: 0 },
    { title: "Central bank and monetary control", titleBn: "কেন্দ্রীয় ব্যাংক ও মুদ্রা নিয়ন্ত্রণ", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Bank accounts and instruments", titleBn: "ব্যাংক হিসাব ও দলিল", lessons: 7, questions: 60, status: "pending", progress: 0 },
    { title: "Insurance and risk management", titleBn: "বিমা ও ঝুঁকি ব্যবস্থাপনা", lessons: 8, questions: 68, status: "pending", progress: 0 },
    { title: "Foreign exchange and trade finance", titleBn: "বৈদেশিক মুদ্রা ও বাণিজ্য অর্থায়ন", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Capital market", titleBn: "পুঁজিবাজার", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Financial planning and control", titleBn: "আর্থিক পরিকল্পনা ও নিয়ন্ত্রণ", lessons: 7, questions: 64, status: "pending", progress: 0 },
  ],
  business: [
    { title: "Nature of business", titleBn: "ব্যবসায়ের প্রকৃতি", lessons: 5, questions: 45, status: "building", progress: 38,
      outcomes: ["Differentiate business, profession and employment", "Explain industry, commerce and direct services", "Relate business objectives to risk and social responsibility"],
      lessonPlan: [
        { title: "Meaning and characteristics of business", titleBn: "ব্যবসায়ের অর্থ ও বৈশিষ্ট্য", minutes: 15, format: "Concept" },
        { title: "Business, profession and employment", titleBn: "ব্যবসায়, পেশা ও চাকরি", minutes: 17, format: "Concept" },
        { title: "Industry, commerce and services", titleBn: "শিল্প, বাণিজ্য ও সেবা", minutes: 18, format: "Worked example" },
        { title: "Objectives, risk and responsibility", titleBn: "উদ্দেশ্য, ঝুঁকি ও দায়িত্ব", minutes: 17, format: "Concept" },
        { title: "Business classification practice", titleBn: "ব্যবসায় শ্রেণিবিন্যাস অনুশীলন", minutes: 15, format: "Practice" },
      ], examPlan: { mcq: 28, cq: 11, written: 6 }, examPrep: ["Build a comparison table", "Classify unfamiliar activities", "Write a structured social-responsibility answer"] },
    { title: "Business environment", titleBn: "ব্যবসায় পরিবেশ", lessons: 6, questions: 55, status: "building", progress: 30,
      outcomes: ["Separate internal and external environmental forces", "Apply economic, social, technological and legal factors", "Explain how environmental change creates risk and opportunity"],
      lessonPlan: [
        { title: "Meaning and layers of environment", titleBn: "ব্যবসায় পরিবেশের অর্থ ও স্তর", minutes: 14, format: "Concept" },
        { title: "Internal and micro environment", titleBn: "অভ্যন্তরীণ ও নিকট পরিবেশ", minutes: 17, format: "Concept" },
        { title: "Macro environment factors", titleBn: "সামষ্টিক পরিবেশের উপাদান", minutes: 20, format: "Concept" },
        { title: "Bangladesh business scenarios", titleBn: "বাংলাদেশের ব্যবসায়িক পরিস্থিতি", minutes: 22, format: "Worked example" },
        { title: "Risk and opportunity analysis", titleBn: "ঝুঁকি ও সুযোগ বিশ্লেষণ", minutes: 18, format: "Practice" },
      ], examPlan: { mcq: 34, cq: 15, written: 6 }, examPrep: ["Classify each environmental factor", "Link cause to business effect", "Use a local example in a structured CQ"] },
    { title: "Forms of business ownership", titleBn: "ব্যবসায় মালিকানার ধরন", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Management principles", titleBn: "ব্যবস্থাপনার নীতি", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Sole proprietorship and partnership", titleBn: "একমালিকানা ও অংশীদারি ব্যবসায়", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Company and cooperative", titleBn: "কোম্পানি ও সমবায়", lessons: 8, questions: 72, status: "pending", progress: 0 },
    { title: "Planning and decision making", titleBn: "পরিকল্পনা ও সিদ্ধান্ত গ্রহণ", lessons: 7, questions: 64, status: "pending", progress: 0 },
    { title: "Organising", titleBn: "সংগঠিতকরণ", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Staffing and leadership", titleBn: "কর্মীসংস্থান ও নেতৃত্ব", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Motivation and communication", titleBn: "প্রেষণা ও যোগাযোগ", lessons: 7, questions: 66, status: "pending", progress: 0 },
    { title: "Coordination and control", titleBn: "সমন্বয় ও নিয়ন্ত্রণ", lessons: 7, questions: 64, status: "pending", progress: 0 },
    { title: "Entrepreneurship and business ethics", titleBn: "উদ্যোক্তা ও ব্যবসায় নৈতিকতা", lessons: 8, questions: 72, status: "pending", progress: 0 },
  ],
  economics: [
    { title: "Basic economic problems", titleBn: "মৌলিক অর্থনৈতিক সমস্যা", lessons: 6, questions: 52, status: "building", progress: 38,
      outcomes: ["Connect scarcity with choice and opportunity cost", "Compare the central problems of an economy", "Use a production possibility curve to explain trade-offs"],
      lessonPlan: [
        { title: "Scarcity, choice and resources", titleBn: "অভাব, নির্বাচন ও সম্পদ", minutes: 14, format: "Concept" },
        { title: "What, how and for whom to produce", titleBn: "কী, কীভাবে ও কার জন্য উৎপাদন", minutes: 16, format: "Concept" },
        { title: "Opportunity cost with examples", titleBn: "উদাহরণসহ সুযোগ ব্যয়", minutes: 18, format: "Worked example" },
        { title: "Production possibility practice", titleBn: "উৎপাদন সম্ভাবনা অনুশীলন", minutes: 15, format: "Practice" },
      ], examPlan: { mcq: 32, cq: 12, written: 8 }, examPrep: ["Define scarcity and opportunity cost", "Read a production possibility curve", "Answer a four-part scenario CQ"] },
    { title: "Utility and consumer behaviour", titleBn: "উপযোগ ও ভোক্তার আচরণ", lessons: 7, questions: 64, status: "building", progress: 30,
      outcomes: ["Distinguish total utility from marginal utility", "Explain diminishing marginal utility with a schedule", "Relate consumer equilibrium to rational choice"],
      lessonPlan: [
        { title: "Meaning and forms of utility", titleBn: "উপযোগের অর্থ ও প্রকারভেদ", minutes: 14, format: "Concept" },
        { title: "Total and marginal utility", titleBn: "মোট ও প্রান্তিক উপযোগ", minutes: 18, format: "Concept" },
        { title: "Diminishing marginal utility", titleBn: "ক্রমহ্রাসমান প্রান্তিক উপযোগ", minutes: 19, format: "Worked example" },
        { title: "Consumer equilibrium", titleBn: "ভোক্তার ভারসাম্য", minutes: 20, format: "Worked example" },
        { title: "Utility schedule practice", titleBn: "উপযোগ সূচি অনুশীলন", minutes: 16, format: "Practice" },
      ], examPlan: { mcq: 38, cq: 16, written: 10 }, examPrep: ["Calculate marginal utility from a schedule", "Explain the diminishing-utility curve", "Solve a consumer-equilibrium scenario"] },
    { title: "Demand and supply", titleBn: "চাহিদা ও যোগান", lessons: 8, questions: 76, status: "building", progress: 30,
      outcomes: ["Distinguish demand from quantity demanded and supply from quantity supplied", "Draw and interpret demand and supply schedules and curves", "Explain equilibrium and predict the effect of curve shifts"],
      lessonPlan: [
        { title: "Demand, schedule and curve", titleBn: "চাহিদা, সূচি ও রেখা", minutes: 18, format: "Concept" },
        { title: "Determinants and shifts in demand", titleBn: "চাহিদার নির্ধারক ও রেখার স্থানান্তর", minutes: 20, format: "Worked example" },
        { title: "Supply, schedule and curve", titleBn: "যোগান, সূচি ও রেখা", minutes: 18, format: "Concept" },
        { title: "Determinants and shifts in supply", titleBn: "যোগানের নির্ধারক ও রেখার স্থানান্তর", minutes: 20, format: "Worked example" },
        { title: "Market equilibrium", titleBn: "বাজার ভারসাম্য", minutes: 22, format: "Worked example" },
        { title: "Shortage, surplus and price adjustment", titleBn: "ঘাটতি, উদ্বৃত্ত ও মূল্য সমন্বয়", minutes: 18, format: "Concept" },
        { title: "Graph and scenario challenge", titleBn: "লেখচিত্র ও পরিস্থিতিভিত্তিক অনুশীলন", minutes: 25, format: "Practice" },
      ], examPlan: { mcq: 42, cq: 20, written: 14 }, examPrep: ["Label axes and curves correctly", "Separate movement from curve shift", "Predict price and quantity after a change", "Complete one timed graph-based CQ"] },
    { title: "Production and cost", titleBn: "উৎপাদন ও ব্যয়", lessons: 7, questions: 64, status: "building", progress: 24,
      outcomes: ["Explain production functions and factors of production", "Calculate total, average and marginal product", "Distinguish fixed, variable, average and marginal cost"],
      lessonPlan: [
        { title: "Production and factors", titleBn: "উৎপাদন ও উৎপাদনের উপকরণ", minutes: 15, format: "Concept" },
        { title: "Short run and long run", titleBn: "স্বল্পকাল ও দীর্ঘকাল", minutes: 16, format: "Concept" },
        { title: "Total, average and marginal product", titleBn: "মোট, গড় ও প্রান্তিক উৎপাদন", minutes: 22, format: "Worked example" },
        { title: "Fixed and variable cost", titleBn: "স্থির ও পরিবর্তনশীল ব্যয়", minutes: 18, format: "Concept" },
        { title: "Average and marginal cost", titleBn: "গড় ও প্রান্তিক ব্যয়", minutes: 22, format: "Worked example" },
        { title: "Schedule and curve challenge", titleBn: "সূচি ও রেখাচিত্র অনুশীলন", minutes: 24, format: "Practice" },
      ], examPlan: { mcq: 38, cq: 18, written: 8 }, examPrep: ["Complete product and cost tables", "State formulas before calculation", "Interpret curve relationships", "Solve one timed numerical CQ"] },
    { title: "Market structures", titleBn: "বাজার কাঠামো", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "National income", titleBn: "জাতীয় আয়", lessons: 8, questions: 68, status: "pending", progress: 0 },
    { title: "Money, banking and inflation", titleBn: "অর্থ, ব্যাংকিং ও মূল্যস্ফীতি", lessons: 8, questions: 72, status: "pending", progress: 0 },
    { title: "Public finance", titleBn: "সরকারি অর্থব্যবস্থা", lessons: 7, questions: 64, status: "pending", progress: 0 },
    { title: "International trade", titleBn: "আন্তর্জাতিক বাণিজ্য", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Development and Bangladesh economy", titleBn: "উন্নয়ন ও বাংলাদেশের অর্থনীতি", lessons: 9, questions: 78, status: "pending", progress: 0 },
  ],
  civics: [
    { title: "Introduction to civics", titleBn: "পৌরনীতির পরিচিতি", lessons: 5, questions: 46, status: "building", progress: 40,
      outcomes: ["Explain the scope and importance of civics", "Connect citizenship with rights, duties and participation", "Distinguish state, government, society and nation"],
      lessonPlan: [
        { title: "Meaning and scope of civics", titleBn: "পৌরনীতির অর্থ ও পরিধি", minutes: 14, format: "Concept" },
        { title: "Citizen and citizenship", titleBn: "নাগরিক ও নাগরিকতা", minutes: 17, format: "Concept" },
        { title: "State, government, society and nation", titleBn: "রাষ্ট্র, সরকার, সমাজ ও জাতি", minutes: 20, format: "Worked example" },
        { title: "Responsible citizenship scenarios", titleBn: "দায়িত্বশীল নাগরিকতার পরিস্থিতি", minutes: 16, format: "Practice" },
      ], examPlan: { mcq: 28, cq: 12, written: 6 }, examPrep: ["Define core terms precisely", "Create a state-versus-government comparison", "Apply citizenship concepts to a scenario"] },
    { title: "Values, law and liberty", titleBn: "মূল্যবোধ, আইন ও স্বাধীনতা", lessons: 7, questions: 62, status: "building", progress: 30,
      outcomes: ["Relate social and political values to citizenship", "Explain the sources and functions of law", "Balance individual liberty with lawful social responsibility"],
      lessonPlan: [
        { title: "Values and civic life", titleBn: "মূল্যবোধ ও নাগরিক জীবন", minutes: 15, format: "Concept" },
        { title: "Meaning, sources and types of law", titleBn: "আইনের অর্থ, উৎস ও প্রকারভেদ", minutes: 20, format: "Concept" },
        { title: "Liberty and its safeguards", titleBn: "স্বাধীনতা ও এর রক্ষাকবচ", minutes: 19, format: "Concept" },
        { title: "Law versus arbitrary power", titleBn: "আইন বনাম স্বেচ্ছাচারী ক্ষমতা", minutes: 18, format: "Worked example" },
        { title: "Rights-conflict scenarios", titleBn: "অধিকার সংঘাতের পরিস্থিতি", minutes: 20, format: "Practice" },
      ], examPlan: { mcq: 36, cq: 16, written: 10 }, examPrep: ["Differentiate law, morality and custom", "Explain liberty with reasonable limits", "Use constitutional principles carefully in a CQ"] },
    { title: "Rights and duties", titleBn: "অধিকার ও কর্তব্য", lessons: 6, questions: 58, status: "pending", progress: 0 },
    { title: "Political institutions", titleBn: "রাজনৈতিক প্রতিষ্ঠান", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Constitution and constitutionalism", titleBn: "সংবিধান ও সাংবিধানিকতা", lessons: 8, questions: 68, status: "pending", progress: 0 },
    { title: "Organs of government", titleBn: "সরকারের অঙ্গসমূহ", lessons: 9, questions: 78, status: "pending", progress: 0 },
    { title: "Democracy and elections", titleBn: "গণতন্ত্র ও নির্বাচন", lessons: 7, questions: 64, status: "pending", progress: 0 },
    { title: "Good governance", titleBn: "সুশাসন", lessons: 7, questions: 66, status: "pending", progress: 0 },
    { title: "Public opinion and political parties", titleBn: "জনমত ও রাজনৈতিক দল", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Citizenship in Bangladesh", titleBn: "বাংলাদেশে নাগরিকতা", lessons: 7, questions: 64, status: "pending", progress: 0 },
  ],
  history: [
    { title: "Historical sources and method", titleBn: "ইতিহাসের উৎস ও পদ্ধতি", lessons: 5, questions: 40, status: "building", progress: 38,
      outcomes: ["Differentiate primary and secondary historical sources", "Evaluate reliability, bias and context", "Arrange evidence into a reasoned historical explanation"],
      lessonPlan: [
        { title: "What historians study", titleBn: "ইতিহাসবিদেরা কী অধ্যয়ন করেন", minutes: 13, format: "Concept" },
        { title: "Primary and secondary sources", titleBn: "প্রাথমিক ও মাধ্যমিক উৎস", minutes: 17, format: "Concept" },
        { title: "Reliability, perspective and bias", titleBn: "নির্ভরযোগ্যতা, দৃষ্টিভঙ্গি ও পক্ষপাত", minutes: 20, format: "Worked example" },
        { title: "Building an evidence-based answer", titleBn: "প্রমাণভিত্তিক উত্তর নির্মাণ", minutes: 20, format: "Worked example" },
        { title: "Source analysis challenge", titleBn: "উৎস বিশ্লেষণ অনুশীলন", minutes: 16, format: "Practice" },
      ], examPlan: { mcq: 24, cq: 10, written: 6 }, examPrep: ["Classify sources with reasons", "Identify possible bias", "Use evidence in chronological explanation"] },
    { title: "Bengal under colonial rule", titleBn: "ঔপনিবেশিক শাসনে বাংলা", lessons: 8, questions: 68, status: "building", progress: 28,
      outcomes: ["Trace major phases of colonial control in Bengal", "Explain administrative and economic changes through cause and effect", "Compare perspectives using evidence and chronology"],
      lessonPlan: [
        { title: "From company trade to political control", titleBn: "কোম্পানি বাণিজ্য থেকে রাজনৈতিক নিয়ন্ত্রণ", minutes: 18, format: "Concept" },
        { title: "Administrative transformation", titleBn: "প্রশাসনিক রূপান্তর", minutes: 20, format: "Concept" },
        { title: "Land and revenue systems", titleBn: "ভূমি ও রাজস্ব ব্যবস্থা", minutes: 22, format: "Worked example" },
        { title: "Economic and social effects", titleBn: "অর্থনৈতিক ও সামাজিক প্রভাব", minutes: 22, format: "Concept" },
        { title: "Resistance and response", titleBn: "প্রতিরোধ ও প্রতিক্রিয়া", minutes: 19, format: "Concept" },
        { title: "Timeline and evidence challenge", titleBn: "কালানুক্রম ও প্রমাণ অনুশীলন", minutes: 24, format: "Practice" },
      ], examPlan: { mcq: 38, cq: 18, written: 12 }, examPrep: ["Build a cause-event-effect timeline", "Use dates only when verified", "Compare administrative and economic effects", "Write one evidence-led analytical answer"] },
    { title: "Political awakening", titleBn: "রাজনৈতিক জাগরণ", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "Language movement", titleBn: "ভাষা আন্দোলন", lessons: 6, questions: 58, status: "pending", progress: 0 },
    { title: "Partition and political change", titleBn: "দেশভাগ ও রাজনৈতিক পরিবর্তন", lessons: 7, questions: 62, status: "pending", progress: 0 },
    { title: "United Front and autonomy movement", titleBn: "যুক্তফ্রন্ট ও স্বায়ত্তশাসন আন্দোলন", lessons: 8, questions: 70, status: "pending", progress: 0 },
    { title: "Liberation War", titleBn: "মুক্তিযুদ্ধ", lessons: 10, questions: 90, status: "pending", progress: 0 },
    { title: "Early Bengal and regional powers", titleBn: "প্রাচীন বাংলা ও আঞ্চলিক শক্তি", lessons: 8, questions: 68, status: "pending", progress: 0 },
    { title: "Social and cultural transformation", titleBn: "সামাজিক ও সাংস্কৃতিক রূপান্তর", lessons: 7, questions: 64, status: "pending", progress: 0 },
    { title: "Pakistan period and Bengali nationalism", titleBn: "পাকিস্তান পর্ব ও বাঙালি জাতীয়তাবাদ", lessons: 9, questions: 78, status: "pending", progress: 0 },
    { title: "Mass uprising and the road to independence", titleBn: "গণঅভ্যুত্থান ও স্বাধীনতার পথ", lessons: 8, questions: 74, status: "pending", progress: 0 },
    { title: "Independent Bangladesh", titleBn: "স্বাধীন বাংলাদেশ", lessons: 8, questions: 70, status: "pending", progress: 0 },
  ],
  english: [
    { title: "Guided textbook reading", titleBn: "পাঠ্যবইভিত্তিক নির্দেশিত পাঠ", lessons: 10, questions: 84, status: "building", progress: 46, paper: "1st Paper",
      outcomes: ["Identify main ideas, tone and supporting evidence", "Infer meaning from context", "Write concise answers in original language"],
      lessonPlan: [
        { title: "Purposeful first reading", titleBn: "উদ্দেশ্যভিত্তিক প্রথম পাঠ", minutes: 12, format: "Concept" },
        { title: "Main idea and evidence", titleBn: "মূলভাব ও সহায়ক প্রমাণ", minutes: 16, format: "Worked example" },
        { title: "Inference and vocabulary in context", titleBn: "অনুমান ও প্রসঙ্গভিত্তিক শব্দার্থ", minutes: 18, format: "Worked example" },
        { title: "Short-answer precision", titleBn: "সংক্ষিপ্ত উত্তরের যথার্থতা", minutes: 17, format: "Practice" },
      ], examPlan: { mcq: 30, cq: 0, written: 18 }, examPrep: ["Underline evidence, not whole paragraphs", "Answer in original wording", "Check tense and sentence completeness"] },
    { title: "Seen comprehension", titleBn: "পাঠ্যবইভিত্তিক অনুধাবন", lessons: 9, questions: 90, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Unseen comprehension", titleBn: "অপঠিত অনুচ্ছেদ অনুধাবন", lessons: 9, questions: 96, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Vocabulary in context", titleBn: "প্রসঙ্গভিত্তিক শব্দভাণ্ডার", lessons: 8, questions: 110, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Information transfer", titleBn: "তথ্য স্থানান্তর", lessons: 7, questions: 70, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Flow-chart completion", titleBn: "ফ্লোচার্ট সম্পন্নকরণ", lessons: 7, questions: 72, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Summary writing", titleBn: "সারাংশ লেখা", lessons: 8, questions: 72, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Cloze test and contextual completion", titleBn: "ক্লোজ টেস্ট ও প্রসঙ্গ পূরণ", lessons: 8, questions: 110, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Sentence rearrangement", titleBn: "বাক্য পুনর্বিন্যাস", lessons: 7, questions: 88, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Paragraph and composition", titleBn: "অনুচ্ছেদ ও রচনা", lessons: 7, questions: 42, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Graph and chart description", titleBn: "গ্রাফ ও চার্ট বর্ণনা", lessons: 7, questions: 64, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Story completion", titleBn: "গল্প সম্পূর্ণকরণ", lessons: 6, questions: 38, status: "pending", progress: 0, paper: "1st Paper" },
    { title: "Articles and determiners", titleBn: "আর্টিকেল ও নির্ধারক", lessons: 7, questions: 96, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Prepositions", titleBn: "প্রিপজিশন", lessons: 7, questions: 104, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Special words and phrases", titleBn: "বিশেষ শব্দ ও বাক্যাংশ", lessons: 7, questions: 96, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Completing sentences", titleBn: "বাক্য সম্পূর্ণকরণ", lessons: 8, questions: 104, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Right form of verbs and agreement", titleBn: "ক্রিয়ার সঠিক রূপ ও সামঞ্জস্য", lessons: 10, questions: 126, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Sentence transformation", titleBn: "বাক্য রূপান্তর", lessons: 10, questions: 120, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Narration", titleBn: "উক্তি পরিবর্তন", lessons: 9, questions: 110, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Pronoun reference", titleBn: "সর্বনাম নির্দেশ", lessons: 7, questions: 88, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Modifiers", titleBn: "মডিফায়ার", lessons: 8, questions: 100, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Sentence connectors", titleBn: "বাক্য সংযোজক", lessons: 8, questions: 100, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Punctuation and editing", titleBn: "বিরামচিহ্ন ও সম্পাদনা", lessons: 7, questions: 92, status: "pending", progress: 0, paper: "2nd Paper" },
    { title: "Formal writing and composition", titleBn: "আনুষ্ঠানিক লিখন ও রচনা", lessons: 12, questions: 104, status: "pending", progress: 0, paper: "2nd Paper" },
  ],
};

// Source-book rebuild: keep the established second-paper skill libraries, but replace
// the generic first-paper placeholders with the actual units found in the supplied books.
const banglaSecondPaperChapters: ChapterPreview[] = banglaSecondPaperReferenceChapters.map((unit, index) => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons.length, questions: 120, status: "pending", progress: 0, paper: "2nd Paper",
  outcomes: ["বিষয়টির নিয়ম, পরিভাষা ও প্রয়োজন সহজ ভাষায় ব্যাখ্যা করা", "উদাহরণ দেখে শুদ্ধ প্রয়োগ ও ভুল সংশোধন করা", "বোর্ড ও কলেজ-স্ট্যান্ডার্ড প্রশ্নে পূর্ণ নম্বরের উপযোগী উত্তর লেখা"],
  lessonPlan: unit.lessons.map((titleBn, index) => ({ title: `${unit.title} · lesson ${index + 1}`, titleBn, minutes: index === unit.lessons.length - 1 ? 25 : 19, format: index === unit.lessons.length - 1 ? "Practice" as const : index > 1 ? "Worked example" as const : "Concept" as const })),
  examPlan: { mcq: 120, cq: 0, written: 40 },
  examPrep: ["নিয়ম বা কাঠামো আগে শনাক্ত করো", "শুদ্ধ উদাহরণ ও ভুলের কারণ পাশাপাশি লেখো", "লিখিত অংশে রূপরেখা, ভাষা ও শব্দসীমা যাচাই করো", "উত্তর জমা দেওয়ার আগে বানান ও বিরামচিহ্ন সম্পাদনা করো"],
  sourceRef: { book: "Bangla Grammar & Composition 2nd Paper supporting guide", edition: "User-provided serial guide · current NCTB paper mapping under review", page: unit.page, evidence: "reference-guide", url: banglaSecondPaperGuideSources[index], role: "content-foundation", scopeNote: "Guide used for structure, examples and practice patterns; it does not establish official textbook approval." },
}));
const englishSecondPaperChapters: ChapterPreview[] = englishSecondPaperReferenceChapters.map((unit) => ({
  title: unit.title, titleBn: unit.title, lessons: unit.lessons.length, questions: 140, status: "pending", progress: 0, paper: "2nd Paper",
  outcomes: ["Explain the rule through meaning and context", "Apply the pattern accurately in complete passages", "Diagnose errors and edit an answer under exam conditions"],
  lessonPlan: unit.lessons.map((title, index) => ({ title, titleBn: title, minutes: index === unit.lessons.length - 1 ? 26 : 20, format: index === unit.lessons.length - 1 ? "Practice" as const : index > 1 ? "Worked example" as const : "Concept" as const })),
  examPlan: { mcq: 0, cq: 0, written: unit.title === "Composition" ? 80 : 120 },
  examPrep: ["Read the whole passage before choosing a form", "Use meaning, grammar and collocation together", "Keep writing task, tone and word limit visible", "Proofread agreement, punctuation and cohesion"],
  sourceRef: { book: "Panjeree English 2nd Paper Digital Question Bank + Nobodoot HSC model-test collection", edition: "Supporting question-bank and writing-pattern references · not official textbook verification", page: unit.page, evidence: "reference-guide", url: "https://www.nobodoot.com/public/pdf/HSC_English_Special_Model_Test_Papers_2023.pdf", role: "question-pattern-reference", scopeNote: "Reading, grammar and writing task patterns were reviewed; student-facing questions and answers are independently authored." },
}));
chaptersBySubject.bangla = [...banglaFirstPaperChapters, ...banglaSecondPaperChapters];
chaptersBySubject.english = [...englishFirstPaperChapters, ...englishSecondPaperChapters];
const buildStatisticsChapter = (unit: {title:string;titleBn:string;page:string;lessons:readonly string[]}, paper:"1st Paper"|"2nd Paper"): ChapterPreview => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons.length, questions: 160, status: "pending", progress: 0, paper,
  outcomes: ["পরিসংখ্যানের ধারণা, প্রতীক ও অনুমান স্পষ্টভাবে ব্যাখ্যা করা", "সারণি, সূত্র ও পূর্ণ working দেখিয়ে গাণিতিক সমস্যা সমাধান করা", "ফলাফলের অর্থ, তুলনা ও সীমাবদ্ধতা ব্যাখ্যা করা"],
  lessonPlan: unit.lessons.map((titleBn, index) => ({ title: `${unit.title} · lesson ${index + 1}`, titleBn, minutes: index === unit.lessons.length - 1 ? 30 : 22, format: index === unit.lessons.length - 1 ? "Practice" as const : index > 1 ? "Worked example" as const : "Concept" as const })),
  examPlan: { mcq: 0, cq: 0, written: 150 },
  examPrep: ["প্রদত্ত তথ্য, চলক ও প্রয়োজনীয় পরিমাপ আগে লেখো", "সূত্র, মান বসানো, একক ও প্রতিটি কার্য দেখাও", "সারণি ও রেখাচিত্রে শিরোনাম, অক্ষ ও স্কেল দাও", "চূড়ান্ত মানের পর এক বাক্যে ফলের অর্থ লিখো", "তত্ত্বীয় ৭৫ ও ব্যবহারিক ২৫ নম্বরের প্রস্তুতি আলাদা রাখো"],
  sourceRef: { book: paper === "1st Paper" ? "Higher Secondary Statistics First Paper supporting guide" : "Higher Secondary Statistics Second Paper supporting guide", edition: "User-provided guide scan · current NCTB syllabus and edition review pending", page: unit.page, evidence: "reference-guide" },
});
chaptersBySubject.statistics = [
  ...statisticsFirstPaperReferenceChapters.map((unit)=>buildStatisticsChapter(unit,"1st Paper")),
  ...statisticsSecondPaperReferenceChapters.map((unit)=>buildStatisticsChapter(unit,"2nd Paper")),
];
const buildIslamicHistoryChapter = (unit:{title:string;titleBn:string;page:string;lessons:readonly string[]}, paper:"1st Paper"|"2nd Paper"):ChapterPreview => ({
  title:unit.title, titleBn:unit.titleBn, lessons:unit.lessons.length, questions:132, status:"pending", progress:0, paper,
  outcomes:["ঘটনার সময়, স্থান, ব্যক্তি ও পটভূমি নির্ভুলভাবে সাজানো", "কারণ, ঘটনাপ্রবাহ ও ফল আলাদা করে প্রমাণসহ ব্যাখ্যা করা", "সভ্যতা, প্রতিষ্ঠান ও ঐতিহাসিক প্রভাব মূল্যায়ন করে ১+২+৩+৪ CQ লেখা"],
  lessonPlan:unit.lessons.map((titleBn,index)=>({ title:`${unit.title} · lesson ${index+1}`, titleBn, minutes:index===unit.lessons.length-1?26:20, format:index===unit.lessons.length-1?"Practice" as const:index>2?"Worked example" as const:"Concept" as const })),
  examPlan:{mcq:90,cq:30,written:18},
  examPrep:["তারিখ মুখস্থ করার আগে ঘটনাগুলো সময়রেখায় বসাও", "ব্যক্তি ও প্রতিষ্ঠানের ভূমিকা আলাদা রাখো", "কারণ–ঘটনা–ফল–মূল্যায়ন এই চার ধাপে বিশ্লেষণ লেখো", "মানচিত্র, শাসক-তালিকা ও তুলনা ছক দিয়ে দ্রুত রিভিশন করো"],
  sourceRef:{book:`Higher Secondary Islamic History & Culture ${paper} supporting guide`,edition:"User-provided guide scan · exact approved-edition comparison pending",page:unit.page,evidence:"reference-guide"},
});
chaptersBySubject.islamic_history = [
  ...islamicHistoryFirstPaperReferenceChapters.map((unit)=>buildIslamicHistoryChapter(unit,"1st Paper")),
  ...islamicHistorySecondPaperReferenceChapters.map((unit)=>buildIslamicHistoryChapter(unit,"2nd Paper")),
];
const historyFirstPaperReferenceChapters = [
  { title:"European arrival and British ascendancy in India", titleBn:"ভারতবর্ষে ইউরোপীয়দের আগমন: ইংরেজ আধিপত্য প্রতিষ্ঠা", page:"3-24", lessons:["ভারতবর্ষে আগত ইউরোপীয় কোম্পানিসমূহ","ইংরেজ ইস্ট ইন্ডিয়া কোম্পানির আধিপত্য বিস্তার","বাংলায় নবাবি বংশ","পলাশী ও বক্সারের যুদ্ধ","দেওয়ানি লাভ ও দ্বৈতশাসন","লর্ড ক্লাইভের চরিত্র ও কৃতিত্ব"] },
  { title:"British colonial rule: Company period", titleBn:"ইংরেজ ঔপনিবেশিক শাসন: কোম্পানি আমল", page:"51-98", lessons:["ওয়ারেন হেস্টিংস ও নিয়ামক আইন","কর্ণওয়ালিশ ও চিরস্থায়ী বন্দোবস্ত","ওয়েলেসলি ও অধীনতামূলক মিত্রতা","উইলিয়াম বেন্টিংকের সংস্কার","ডালহৌসির নীতি","ফরায়েজি ও ওহাবি আন্দোলন","১৮৫৭ সালের স্বাধীনতা সংগ্রাম"] },
  { title:"British colonial rule: Crown period", titleBn:"ইংরেজ ঔপনিবেশিক শাসন: ব্রিটিশ আমল", page:"99-162", lessons:["১৮৫৮ সালের ভারত শাসন আইন","বঙ্গভঙ্গ, স্বদেশি ও বয়কট আন্দোলন","সংস্কার আন্দোলন ও মুসলিম জাগরণ","কংগ্রেস ও মুসলিম লীগ","শাসনতান্ত্রিক সংস্কারসমূহ","লাহোর প্রস্তাব ও দ্বিজাতিতত্ত্ব","১৯৪৭ সালে ভারত ও পাকিস্তানের অভ্যুদয়"] },
  { title:"Bengal in Pakistan: Language Movement", titleBn:"পাকিস্তানি আমলে বাংলা: ভাষা আন্দোলন ও এর গতিপ্রকৃতি", page:"163-198", lessons:["পূর্ব বাংলার রাজনৈতিক ও অর্থনৈতিক অবস্থা","ভাষা আন্দোলনের প্রেক্ষাপট","ধীরেন্দ্রনাথ দত্তের ভূমিকা","১৯৪৮ সালের আন্দোলন","একুশে ফেব্রুয়ারি ১৯৫২","শহিদ, নারী ও ছাত্রসমাজের ভূমিকা","বাংলা ভাষার আন্তর্জাতিকায়ন"] },
  { title:"Autonomy and self-determination movement", titleBn:"পূর্ব বাংলার স্বায়ত্তশাসন ও স্বাধিকার আন্দোলন", page:"201-250", lessons:["যুক্তফ্রন্ট নির্বাচন ১৯৫৪","সামরিক শাসন ও শিক্ষা আন্দোলন","পূর্ব-পশ্চিম বৈষম্য","ছয় দফা ও আগরতলা মামলা","ঊনসত্তরের গণঅভ্যুত্থান","১৯৭০ সালের নির্বাচন","অসহযোগ আন্দোলন ও ৭ মার্চের ভাষণ"] },
  { title:"Declaration of independence and Liberation War", titleBn:"বাংলাদেশের স্বাধীনতা ঘোষণা ও মুক্তিযুদ্ধ", page:"251-284", lessons:["স্বাধীনতা ঘোষণার প্রেক্ষাপট","বঙ্গবন্ধুর স্বাধীনতার ঘোষণা ও গ্রেফতার","গণহত্যা ও নির্যাতন","বাঙালির প্রতিরোধ যুদ্ধ","নেতৃবৃন্দের ভারতে আশ্রয়","প্রবাসী সরকার গঠন ও শপথ"] },
  { title:"Activities of the Mujibnagar Government", titleBn:"বাংলাদেশ সরকারের (মুজিবনগর) কার্যক্রম", page:"285-312", lessons:["মন্ত্রণালয়, বিভাগ ও শাখা","মুক্তিবাহিনী গঠন","সেক্টর ব্যবস্থাপনা","মুক্তিযুদ্ধ পরিচালনা","গণমাধ্যমের ভূমিকা","কূটনৈতিক তৎপরতা","আত্মসমর্পণ ও স্বাধীন বাংলাদেশের অভ্যুদয়"] },
  { title:"Expatriate Bengalis and the outside world", titleBn:"প্রবাসী বাঙালি ও বহির্বিশ্ব", page:"313-334", lessons:["ভারত সরকার ও জনগণের ভূমিকা","বৃহৎ শক্তিবর্গের ভূমিকা","অন্যান্য দেশের ভূমিকা","জাতিসংঘ ও আন্তর্জাতিক সংস্থা","প্রবাসী বাঙালি ও বিদেশি ব্যক্তিবর্গ","বিদেশি বন্ধুদের সম্মাননা"] },
] as const;
const historySecondPaperReferenceChapters = [
  { title:"Industrial Revolution", titleBn:"শিল্প বিপ্লব", lessons:["বিপ্লব-পূর্ব ইংল্যান্ড","শিল্পবিপ্লবের কারণ","শিল্প-সম্পর্কিত আবিষ্কার","ইংল্যান্ডে অর্থনৈতিক, সামাজিক ও রাজনৈতিক পরিবর্তন","ইউরোপে প্রভাব ও ফলাফল","ঔপনিবেশিক শাসনের সূচনা"] },
  { title:"French Revolution", titleBn:"ফরাসি বিপ্লব", lessons:["প্রাক-বিপ্লব ফ্রান্স","দার্শনিকদের অবদান","বিপ্লবের ঘটনাপ্রবাহ","ফলাফল ও প্রভাব","নেপোলিয়ন বোনাপার্ট"] },
  { title:"First World War, Treaty of Versailles and League of Nations", titleBn:"প্রথম বিশ্বযুদ্ধ, ভার্সাই সন্ধি ও লীগ অব নেশনস", lessons:["ত্রিশক্তি আঁতাত ও ত্রিশক্তি চুক্তি","প্রথম বিশ্বযুদ্ধের ঘটনাপ্রবাহ","ফলাফল ও প্রভাব","ভার্সাই সন্ধি","লীগ অব নেশনস গঠনের পটভূমি"] },
  { title:"Bolshevik Revolution", titleBn:"বলশেভিক বিপ্লব", lessons:["প্রাক-বিপ্লব রাশিয়া","দার্শনিক পটভূমি","লেনিন ও বলশেভিক বিপ্লব","বিপ্লবের ফলাফল"] },
  { title:"Rise of Hitler and Mussolini and the Second World War", titleBn:"হিটলার ও মুসোলিনির উত্থান এবং দ্বিতীয় বিশ্বযুদ্ধ", lessons:["হিটলারের উত্থান","মুসোলিনির উত্থান","তাদের কর্মকাণ্ডের তুলনা","দ্বিতীয় বিশ্বযুদ্ধের কারণ, ঘটনাপ্রবাহ ও ফল"] },
  { title:"United Nations and world peace", titleBn:"জাতিসংঘ এবং বিশ্বশান্তি", lessons:["জাতিসংঘ গঠনের পটভূমি","জাতিসংঘে বৃহৎ শক্তির ভূমিকা","বিশ্বশান্তি ও নিরাপত্তায় জাতিসংঘ"] },
  { title:"Cold War", titleBn:"স্নায়ুযুদ্ধ: পুঁজিবাদী ও সমাজতান্ত্রিক বিশ্বের দ্বন্দ্ব", lessons:["স্নায়ুযুদ্ধের ধারণা","স্নায়ুযুদ্ধের উদ্ভব","শান্তিপূর্ণ সহাবস্থান","স্নায়ুযুদ্ধের অবসান"] },
  { title:"Post-Cold War world", titleBn:"স্নায়ুযুদ্ধ-পরবর্তী বিশ্ব", lessons:["সোভিয়েত ইউনিয়নের বিলুপ্তি","স্বাধীন রাষ্ট্রসমূহের উদ্ভব","পূর্ব ইউরোপে সমাজতন্ত্রের পতন","বার্লিন প্রাচীরের অবসান","জার্মানির একত্রীকরণ"] },
  { title:"Anti-racism movement", titleBn:"বর্ণবাদবিরোধী আন্দোলন", lessons:["বর্ণবাদের ধারণা","গান্ধী, মার্টিন লুথার কিং, ম্যান্ডেলা ও টুটু","বর্ণবাদবিরোধী আন্দোলনসমূহ","আন্দোলনের সফলতা ও ঐতিহাসিক গুরুত্ব"] },
] as const;
const buildHistoryChapter = (unit:{title:string;titleBn:string;lessons:readonly string[];page?:string},paper:"1st Paper"|"2nd Paper",index:number):ChapterPreview => ({
  title:unit.title,titleBn:unit.titleBn,lessons:unit.lessons.length,questions:paper==="1st Paper"?138:126,status:"pending",progress:0,paper,
  outcomes:["সময়, স্থান, ব্যক্তি ও ঘটনার নির্ভুল কালক্রম তৈরি করা","দীর্ঘমেয়াদি ও তাৎক্ষণিক কারণ থেকে ফল ও তাৎপর্য ব্যাখ্যা করা","উদ্দীপকের প্রমাণ ব্যবহার করে পূর্ণ ১+২+৩+৪ CQ উত্তর লেখা"],
  lessonPlan:unit.lessons.map((titleBn,lessonIndex)=>({title:`${unit.title} · lesson ${lessonIndex+1}`,titleBn,minutes:lessonIndex===unit.lessons.length-1?26:20,format:lessonIndex===unit.lessons.length-1?"Practice" as const:lessonIndex>2?"Worked example" as const:"Concept" as const})),
  examPlan:{mcq:90,cq:30,written:18},examPrep:["তারিখের তালিকা নয়—কারণ, ঘটনা, ফল ও গুরুত্বের যোগ তৈরি করো","ব্যক্তি ও প্রতিষ্ঠানের ভূমিকা আলাদা রাখো","উৎস বা উদ্দীপকের প্রমাণ সরাসরি প্রয়োগ করো","CQ-এর গ ও ঘ অংশে ব্যাখ্যা ও মূল্যায়ন সম্পূর্ণ করো"],
  sourceRef:{book:paper==="1st Paper"?"HSC History First Paper supporting guide (383-page scan)":"HSC History Second Paper supporting guide (302-page Scribd reference)",edition:paper==="1st Paper"?"User-provided 2027 supplement scan · official approval comparison pending":"User-provided reference · official approval comparison pending",page:unit.page??`Chapter ${index+1}`,evidence:"reference-guide",url:paper==="2nd Paper"?"https://www.scribd.com/document/805601344/HSC-History-2nd-Paper":undefined,role:"content-foundation",scopeNote:"Used for chapter structure, examples and practice patterns; subject-specialist verification is still required."},
});
chaptersBySubject.history = [
  ...historyFirstPaperReferenceChapters.map((unit,index)=>buildHistoryChapter(unit,"1st Paper",index)),
  ...historySecondPaperReferenceChapters.map((unit,index)=>buildHistoryChapter(unit,"2nd Paper",index)),
];
const buildAccountingChapter = (unit: { title:string; titleBn:string; page:string; lessons:string[] }, paper: "1st Paper"|"2nd Paper", index:number): ChapterPreview => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons.length, questions: unit.lessons.length >= 10 ? 148 : 124,
  status: "pending", progress: 0, paper,
  outcomes: ["ধারণা, পরিভাষা ও হিসাবের উদ্দেশ্য স্পষ্টভাবে বোঝা", "প্রতিটি ধাপ ছক, কার্য ও হিসাবসহ প্রয়োগ করা", "ভুল শনাক্ত করে পূর্ণাঙ্গ বোর্ড-প্যাটার্ন সমাধান লেখা"],
  lessonPlan: unit.lessons.map((titleBn, lessonIndex) => ({ title: `${unit.title} · lesson ${lessonIndex + 1}`, titleBn, minutes: lessonIndex === unit.lessons.length - 1 ? 30 : lessonIndex > 1 ? 24 : 18, format: lessonIndex === unit.lessons.length - 1 ? "Practice" as const : lessonIndex > 1 ? "Worked example" as const : "Concept" as const })),
  examPlan: { mcq: 100, cq: 36, written: 22 }, examPrep: ["লেনদেন বা তথ্যগুলো আগে শ্রেণিবিন্যাস করা", "সূত্র, জাবেদা বা বিবরণীর কাঠামো লিখে তারপর অঙ্ক বসানো", "কার্য, তারিখ, হিসাবের নাম ও টাকার অঙ্ক মিলিয়ে দেখা", "চূড়ান্ত ফলের সঙ্গে পার্শ্ব-যাচাই বা মিলকরণ দেখানো"],
  sourceRef: {
    book: paper === "1st Paper" ? "HSC Accounting First Paper supporting book" : "HSC Accounting Second Paper supporting book",
    edition: paper === "1st Paper" ? "441-page user-supplied scan · applicability and approval pending" : "369-page user-supplied solution scan · not official curriculum evidence",
    page: unit.page, evidence: "reference-guide",
    url: paper === "1st Paper" ? "https://drive.google.com/file/d/10jfwflDORb8luujXoZNB5l1yk9fFmEHV/view" : "https://drive.google.com/file/d/12ZTax4TUyFnlTm6teME94JPJ1QW9LLH4/view",
    role:"worked-solution-reference",
    scopeNote:"Account formats, adjustment workings and problem-solving patterns were inspected; all student-facing explanations and practice are independently authored.",
  },
});
chaptersBySubject.accounting = [
  ...accountingReferenceChapters.map((unit,index)=>buildAccountingChapter(unit,"1st Paper",index)),
  ...accountingSecondPaperReferenceChapters.map((unit,index)=>buildAccountingChapter(unit,"2nd Paper",index)),
];
const buildCivicsChapter = (unit: {title:string;titleBn:string;page:string;lessons?:string[]}, paper:"1st Paper"|"2nd Paper", index:number): ChapterPreview => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons?.length ?? 7, questions: 112, status: "pending", progress: 0, paper,
  outcomes: ["অধ্যায়ের মৌলিক ধারণা ও পরিভাষা নির্ভুলভাবে ব্যাখ্যা করা", "বাংলাদেশের নাগরিক ও প্রাতিষ্ঠানিক প্রেক্ষাপটে ধারণা প্রয়োগ করা", "সংজ্ঞা, ব্যাখ্যা, প্রয়োগ ও বিশ্লেষণ মিলিয়ে CQ লেখা"],
  lessonPlan: (unit.lessons ?? ["অধ্যায়ের মানচিত্র", "মূল ধারণা ও সংজ্ঞা", "বিষয়গুলোর পার্থক্য ও সম্পর্ক", "বাংলাদেশ প্রেক্ষাপটে প্রয়োগ", "উদ্দীপক বিশ্লেষণ", "১+২+৩+৪ CQ কাঠামো", "MCQ ও শেষ মুহূর্তের রিভিশন"]).map((titleBn, lessonIndex) => ({ title: `${unit.title} · lesson ${lessonIndex + 1}`, titleBn, minutes: lessonIndex > 3 ? 20 : 16, format: lessonIndex === 4 ? "Worked example" as const : lessonIndex > 4 ? "Practice" as const : "Concept" as const })),
  examPlan: { mcq: 70, cq: 24, written: 14 }, examPrep: ["সংজ্ঞা ও বৈশিষ্ট্য আলাদা রাখা", "উদ্দীপকের প্রমাণ সরাসরি ব্যবহার", "বিশ্লেষণে কারণ, প্রভাব ও মূল্যায়ন যোগ করা"],
  sourceRef: { book: paper === "1st Paper" ? "Hasan Book House Civics & Good Governance First Paper guide" : "User-supplied Civics & Good Governance Second Paper reference book", edition: "User-provided supporting scan · edition and official approval not independently verified", page: unit.page, evidence: "reference-guide", url: paper === "1st Paper" ? "https://students.bd/en/download/read/1LzPq5krBPrcM8kn8zFRi8wQvb9stKuS2" : "https://students.bd/en/download/read/1-2_wgY51NbELHwDTt0JybOLaCGhmIHoB", role: "content-foundation", scopeNote: "Chapter sequencing, terminology and question styles are supporting evidence only; NCTB mapping and specialist sign-off remain pending." },
});
chaptersBySubject.civics = [...civicsReferenceChapters.map((unit,index)=>buildCivicsChapter(unit,"1st Paper",index)),...civicsSecondPaperReferenceChapters.map((unit,index)=>buildCivicsChapter(unit,"2nd Paper",index))];
const buildReferenceChapter = (unit: { title: string; titleBn: string; page: string; lessons: string[] }, subject: "ict" | "business", index: number, paper:"1st Paper"|"2nd Paper"="1st Paper"): ChapterPreview => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons.length, questions: subject === "ict" ? 144 : 118, status: "pending", progress: 0,
  ...(subject === "business" ? { paper } : {}),
  outcomes: subject === "ict"
    ? ["মূল ধারণা, পরিভাষা ও কার্যপ্রবাহ সহজ ভাষায় ব্যাখ্যা করা", "ছক, রূপান্তর, কোড বা প্রযুক্তিগত নিয়ম ধাপে ধাপে প্রয়োগ করা", "বাংলাদেশের বাস্তব প্রেক্ষাপটে নিরাপদ ও যুক্তিসংগত সমাধান মূল্যায়ন করা"]
    : ["ব্যবসায় ধারণা, বৈশিষ্ট্য ও প্রাতিষ্ঠানিক কাঠামো নির্ভুলভাবে বোঝা", "বাংলাদেশের পরিচিত ব্যবসায় পরিস্থিতিতে ধারণা প্রয়োগ করা", "তুলনা, সুবিধা-সীমাবদ্ধতা ও সিদ্ধান্তসহ পূর্ণাঙ্গ CQ লেখা"],
  lessonPlan: unit.lessons.map((titleBn, lessonIndex) => ({ title: `${unit.title} · lesson ${lessonIndex + 1}`, titleBn, minutes: lessonIndex === unit.lessons.length - 1 ? 24 : 18, format: lessonIndex === unit.lessons.length - 1 ? "Practice" as const : lessonIndex > 1 ? "Worked example" as const : "Concept" as const })),
  examPlan: { mcq: subject === "ict" ? 100 : 90, cq: subject === "ict" ? 30 : 28, written: 16 },
  examPrep: subject === "ict"
    ? ["সংজ্ঞার সঙ্গে কার্যপ্রবাহ ও ব্যবহার যুক্ত করা", "সংখ্যা/লজিক/কোডে প্রতিটি ধাপ দেখানো", "চিত্র, সারণি ও প্রোগ্রাম যাচাই করে উত্তর জমা দেওয়া"]
    : ["সংজ্ঞা, বৈশিষ্ট্য ও উদাহরণ আলাদা রাখা", "একই মানদণ্ডে তুলনা করা", "উদ্দীপকের তথ্য দিয়ে সিদ্ধান্তের যৌক্তিকতা দেখানো"],
  sourceRef: subject === "ict"
    ? { book: "NCTB তথ্য ও যোগাযোগ প্রযুক্তি · একাদশ–দ্বাদশ শ্রেণি", edition: "User-supplied NCTB scan · contents and page range transcribed · applicable edition awaits specialist sign-off", page: unit.page, evidence: "official-textbook", role:"curriculum-evidence", scopeNote:"একক আবশ্যিক ICT বিষয়—১ম/২য় পত্র বিভাজন নেই। Chapter title, order and printed page range are mapped; edition and academic accuracy remain reviewer-pending." }
    : { book: paper === "1st Paper" ? "Cambridge Publications Business Organisation & Management First Paper guide" : "User-supplied Business Organisation & Management Second Paper guide", edition: "Supporting reference edition · current official mapping under review", page: unit.page, evidence: "reference-guide" },
});
chaptersBySubject.ict = ictReferenceChapters.map((unit, index) => buildReferenceChapter(unit, "ict", index));
chaptersBySubject.business = [...businessFirstPaperReferenceChapters.map((unit, index) => buildReferenceChapter(unit, "business", index,"1st Paper")),...businessSecondPaperReferenceChapters.map((unit,index)=>buildReferenceChapter(unit,"business",index,"2nd Paper"))];
chaptersBySubject.geography = geographyReferenceChapters.map((unit,index):ChapterPreview=>({
  title:unit.title,titleBn:unit.titleBn,lessons:unit.lessons.length,questions:132,status:"pending",progress:0,paper:unit.paper as "1st Paper"|"2nd Paper",
  outcomes:["ভৌগোলিক ধারণা, পরিভাষা ও প্রক্রিয়া নির্ভুলভাবে ব্যাখ্যা করা","মানচিত্র, চিত্র, সারণি ও তথ্য থেকে সম্পর্ক বিশ্লেষণ করা","বাংলাদেশের ভৌত ও মানব পরিবেশে ধারণা প্রয়োগ করে পূর্ণাঙ্গ CQ লেখা"],
  lessonPlan:unit.lessons.map((titleBn,lessonIndex)=>({title:`${unit.title} · lesson ${lessonIndex+1}`,titleBn,minutes:lessonIndex===unit.lessons.length-1?26:20,format:lessonIndex===unit.lessons.length-1?"Practice" as const:lessonIndex>2?"Worked example" as const:"Concept" as const})),
  examPlan:{mcq:100,cq:34,written:18},examPrep:["স্থান, প্রক্রিয়া ও কারণ–ফল আলাদা করো","চিত্র বা মানচিত্রে title, scale, direction, label ও legend সম্পূর্ণ রাখো","তথ্য বা উদ্দীপকের প্রমাণ দিয়ে বাংলাদেশ প্রেক্ষাপটে সিদ্ধান্ত দাও"],
  sourceRef:{book:`User-supplied Geography ${unit.paper} reference book`,edition:"Students.bd scan · edition and official approval not independently verified",page:unit.page,evidence:"reference-guide"},
}));
chaptersBySubject.finance = financeReferenceChapters.map((unit, index): ChapterPreview => ({
  title: unit.title,
  titleBn: unit.titleBn,
  lessons: unit.lessons.length,
  questions: unit.paper === "1st Paper" ? 144 : 132,
  status: "pending",
  progress: 0,
  paper: unit.paper,
  outcomes: unit.paper === "1st Paper"
    ? ["ধারণা ও আর্থিক পরিভাষা নির্ভুলভাবে ব্যাখ্যা করা", "সময়রেখা, সূত্র ও পূর্ণ working দেখিয়ে গাণিতিক সমস্যা সমাধান করা", "ব্যয়, ঝুঁকি, তারল্য ও ফলাফল বিশ্লেষণ করে যুক্তিসংগত সিদ্ধান্ত দেওয়া"]
    : ["ব্যাংকিং বা বিমা ধারণা, পক্ষ ও কার্যপ্রবাহ নির্ভুলভাবে ব্যাখ্যা করা", "দলিল, নীতি ও সেবার মধ্যে তুলনা করে উপযুক্তটি নির্বাচন করা", "বাংলাদেশের পরিচিত পরিস্থিতিতে নিয়ম প্রয়োগ করে পূর্ণাঙ্গ CQ লেখা"],
  lessonPlan: unit.lessons.map((titleBn, lessonIndex) => ({
    title: `${unit.title} · lesson ${lessonIndex + 1}`,
    titleBn,
    minutes: lessonIndex === unit.lessons.length - 1 ? 28 : lessonIndex > 2 ? 22 : 18,
    format: lessonIndex === unit.lessons.length - 1 ? "Practice" as const : lessonIndex > 2 ? "Worked example" as const : "Concept" as const,
  })),
  examPlan: { mcq: 100, cq: 36, written: 18 },
  examPrep: unit.paper === "1st Paper"
    ? ["প্রদত্ত মান, সময় ও একক আগে আলাদা করো", "প্রযোজ্য সূত্র লিখে মান বসানোসহ প্রতিটি working দেখাও", "ফলাফলের আর্থিক অর্থ, সিদ্ধান্ত ও সীমাবদ্ধতা এক বাক্যে ব্যাখ্যা করো", "বর্তমান হার উদ্ভাবন না করে প্রশ্নে দেওয়া হার ব্যবহার করো"]
    : ["পক্ষ, দলিল, নীতি ও কার্যপ্রবাহ আলাদা করে লেখো", "তুলনায় একই মানদণ্ড ব্যবহার করো", "উদ্দীপকের তথ্য উদ্ধৃত করে নিয়ম প্রয়োগ ও সিদ্ধান্ত দেখাও", "বাংলাদেশি উদাহরণে বর্তমান হার বা বিধান অনুমান করো না"],
  sourceRef: {
    book: `User-supplied Finance, Banking & Insurance ${unit.paper} reference`,
    edition: unit.paper === "1st Paper" ? "162-page supporting scan · official edition comparison pending" : "247-page supporting scan · official edition comparison pending",
    page: unit.page,
    evidence: "reference-guide",
    url: unit.paper === "1st Paper" ? "https://drive.google.com/file/d/1Eesx-8EHt3XjHczqEMIO-oGbm-UOqTzM/view" : "https://drive.google.com/file/d/1XXVMZH4H495_6MEUz1WGNGXhyFEnCFrS/view",
    role:"content-foundation",
    scopeNote:"Concept maps, formula patterns, case structure and assessment styles were analysed; source wording is not reproduced.",
  },
}));
const buildHumanitiesGuideChapter = (unit: { title: string; titleBn: string; page: string; paper: string; lessons: string[] }, subject: "logic" | "economics"): ChapterPreview => ({
  title: unit.title, titleBn: unit.titleBn, lessons: unit.lessons.length, questions: subject === "economics" ? 152 : 136, status: "pending", progress: 0,
  paper: unit.paper as "1st Paper" | "2nd Paper",
  outcomes: subject === "economics"
    ? ["অধ্যায়ের ধারণা, চলক ও অর্থনৈতিক সম্পর্ক সহজ ভাষায় ব্যাখ্যা করা", "সূত্র, সূচি ও রেখাচিত্রে প্রতিটি ধাপ দেখিয়ে সমস্যা সমাধান করা", "বাংলাদেশের বাস্তব তথ্যভিত্তিক পরিস্থিতিতে কারণ, প্রভাব ও সীমাবদ্ধতা মূল্যায়ন করা"]
    : ["পরিভাষা, যুক্তির গঠন ও নিয়ম নির্ভুলভাবে ব্যাখ্যা করা", "উদাহরণকে মান্য যুক্তির আকারে এনে নিয়ম প্রয়োগ ও বৈধতা পরীক্ষা করা", "সাদৃশ্যপূর্ণ ধারণার পার্থক্য এবং যুক্তিগত ভুল প্রমাণসহ বিশ্লেষণ করা"],
  lessonPlan: unit.lessons.map((titleBn, lessonIndex) => ({
    title: `${unit.title} · lesson ${lessonIndex + 1}`, titleBn, minutes: lessonIndex === unit.lessons.length - 1 ? 26 : 20,
    format: lessonIndex === unit.lessons.length - 1 ? "Practice" as const : lessonIndex > 2 ? "Worked example" as const : "Concept" as const,
  })),
  examPlan: subject === "economics" ? { mcq: 110, cq: 34, written: 18 } : { mcq: 100, cq: 32, written: 16 },
  examPrep: subject === "economics"
    ? ["অন্যান্য অবস্থা অপরিবর্তিত থাকার শর্ত আগে শনাক্ত করা", "সূত্রের চলক, একক ও প্রতিটি হিসাবের ধাপ লেখা", "রেখাচিত্রে অক্ষ, রেখা, তীর ও ভারসাম্যবিন্দু চিহ্নিত করা", "ফলকে বাংলাদেশের পরিচিত অর্থনৈতিক পরিস্থিতির সঙ্গে ব্যাখ্যা করা"]
    : ["সংজ্ঞা, নিয়ম ও উদাহরণ আলাদা অনুচ্ছেদে সাজানো", "পূর্বধারণা, সিদ্ধান্ত ও যুক্তির রূপ স্পষ্ট করা", "শুধু উত্তর নয়—কেন বৈধ বা অবৈধ তার নিয়ম দেখানো", "কাছাকাছি ধারণার পার্থক্য একই মানদণ্ডে লেখা"],
  sourceRef: {
    book: subject === "economics"
      ? (unit.paper === "1st Paper" ? "User-supplied chapter-wise Economics First Paper reference" : "Economics 2nd Paper supporting guide")
      : `Logic ${unit.paper} supporting guide`,
    edition: subject === "economics" && unit.paper === "1st Paper"
      ? "297-page user-supplied supporting scan · not official NCTB verification"
      : subject === "economics" ? "268-page user-supplied supporting scan · not official NCTB verification" : "User-provided supporting guide · not an official NCTB textbook",
    page: unit.page,
    evidence: "reference-guide",
    url: subject === "economics" ? (unit.paper === "1st Paper" ? "https://drive.google.com/file/d/1scQIqE18VIB2NvMHpiKr8GFgKXELsft_/view" : "https://drive.google.com/file/d/1XO7NlXUBqYSIOWTxFGpWmDgBeJYopn/view") : undefined,
    role: subject === "economics" ? "worked-solution-reference" : "content-foundation",
    scopeNote: subject === "economics" ? "Schedules, graphs, worked applications and Bangladesh-economy question patterns were analysed; all lesson copy and practice are newly written." : undefined,
  },
});
chaptersBySubject.logic = logicReferenceChapters.map((unit) => buildHumanitiesGuideChapter(unit, "logic"));
chaptersBySubject.economics = economicsReferenceChapters.map((unit) => buildHumanitiesGuideChapter(unit, "economics"));

export const businessMissions = [
  { id: 1, subject: "হিসাববিজ্ঞান", task: "হিসাবের পাঁচটি মৌলিক উপাদান পুনরাবৃত্তি করো", type: "শিখি", minutes: 18, target: "subjects", subjectId: "accounting", subjectName: "Accounting", chapterTitle: "Accounting foundations", lesson: 1, studyMode: "lesson", done: false },
  { id: 2, subject: "হিসাববিজ্ঞান", task: "জাবেদা দাখিলার ১৫টি বহুনির্বাচনি অনুশীলন করো", type: "অনুশীলন", minutes: 15, target: "practice", subjectName: "Accounting", chapterTitle: "Journal and ledger", practiceMode: "custom", questionType: "MCQ", done: false },
  { id: 3, subject: "ফিন্যান্স", task: "একটি গুছানো সৃজনশীল প্রশ্ন সমাধান করো", type: "লিখি", minutes: 22, target: "practice", subjectName: "Finance & Banking", chapterTitle: "Introduction to finance", practiceMode: "writing", done: false },
  { id: 4, subject: "পুনরাবৃত্তি", task: "সংরক্ষিত ভুলগুলো ব্যাখ্যাসহ সংশোধন করো", type: "ঝালাই", minutes: 10, target: "practice", practiceMode: "custom", done: false },
];

export const humanitiesMissions = [
  { id: 1, subject: "অর্থনীতি", task: "চাহিদার স্থিতিস্থাপকতা আবার ঝালিয়ে নাও", type: "Revision", minutes: 18, target: "subjects", subjectId: "economics", subjectName: "Economics", chapterTitle: "Demand and supply", lesson: 0, studyMode: "notes", done: false },
  { id: 2, subject: "পৌরনীতি", task: "অধিকার ও স্বাধীনতা থেকে ১৫টি MCQ সমাধান করো", type: "Practice", minutes: 15, target: "practice", subjectName: "Civics & Good Governance", chapterTitle: "Values, law and liberty", practiceMode: "custom", questionType: "MCQ", done: false },
  { id: 3, subject: "ইতিহাস", task: "একটি বোর্ড-প্যাটার্ন CQ-এর উত্তরকাঠামো তৈরি করো", type: "Writing", minutes: 22, target: "practice", subjectName: "History", chapterTitle: "Bengal under colonial rule", practiceMode: "writing", done: false },
  { id: 4, subject: "পুনরাবৃত্তি", task: "সংরক্ষিত ভুলগুলো ব্যাখ্যাসহ সংশোধন করো", type: "ঝালাই", minutes: 10, target: "practice", practiceMode: "custom", done: false },
];

export const week = [
  { day: "Sat", value: 62 }, { day: "Sun", value: 78 }, { day: "Mon", value: 46 },
  { day: "Tue", value: 84 }, { day: "Wed", value: 70 }, { day: "Thu", value: 91 }, { day: "Fri", value: 34 },
];

export type PracticeQuestion = {
  id: number; topic: string; question: string; options: string[]; answer: number; explanation: string;
  difficulty: "Foundation" | "Standard" | "Challenge";
  skill: "Recall" | "Apply" | "Analyse";
  isEnglish?: boolean;
};

export const practiceQuestionsByGroup: Record<"commerce" | "humanities", PracticeQuestion[]> = {
  commerce: [
    {
      id: 1,
      topic: "Accounting elements",
      question: "Which accounting element represents an obligation that a business must settle in the future?",
      options: ["Asset", "Liability", "Owner’s equity", "Income"],
      answer: 1,
      explanation: "A liability is a present obligation arising from a past event, expected to be settled by transferring an economic resource.",
      difficulty: "Foundation", skill: "Recall",
    },
    {
      id: 2,
      topic: "Accounting equation",
      question: "The owner invests Tk 50,000 cash to start a business. What is the immediate effect?",
      options: ["Assets rise and liabilities rise", "Assets rise and owner’s equity rises", "Assets fall and expenses rise", "Liabilities fall and income rises"],
      answer: 1,
      explanation: "Cash increases the business’s assets, while the owner’s investment increases owner’s equity by the same amount.",
      difficulty: "Standard", skill: "Apply",
    },
    {
      id: 3,
      topic: "Transaction analysis",
      question: "Buying furniture for cash changes which parts of the accounting equation?",
      options: ["Only total assets increase", "One asset increases and another asset decreases", "A liability and an expense increase", "Owner’s equity increases"],
      answer: 1,
      explanation: "Furniture increases while cash decreases. Both are assets, so total assets remain unchanged.",
      difficulty: "Standard", skill: "Analyse",
    },
    { id: 4, topic: "Accounting equation", question: "A business has assets of Tk 120,000 and liabilities of Tk 45,000. What is the owner’s equity?", options: ["Tk 75,000", "Tk 165,000", "Tk 45,000", "Tk 120,000"], answer: 0, explanation: "Owner’s equity equals assets minus liabilities: Tk 120,000 − Tk 45,000 = Tk 75,000.", difficulty: "Foundation", skill: "Apply" },
    { id: 5, topic: "Dual effect", question: "Goods worth Tk 20,000 are purchased on credit. Which effect is correct?", options: ["Assets increase and liabilities increase", "Assets decrease and equity decreases", "Liabilities decrease and equity increases", "Only expenses increase"], answer: 0, explanation: "Inventory, an asset, increases and the amount payable, a liability, also increases by Tk 20,000.", difficulty: "Standard", skill: "Apply" },
    { id: 6, topic: "Owner’s equity", question: "Which transaction decreases both an asset and owner’s equity?", options: ["Cash received from a debtor", "Owner withdraws cash for personal use", "Equipment bought for cash", "Loan received in cash"], answer: 1, explanation: "A personal withdrawal reduces business cash and is deducted from the owner’s equity.", difficulty: "Challenge", skill: "Analyse" },
  ],
  humanities: [
  {
    id: 1,
    topic: "Demand",
    question: "If the price of a normal good falls, what usually happens to quantity demanded, other things remaining unchanged?",
    options: ["It decreases", "It increases", "It remains fixed", "Supply decreases"],
    answer: 1,
    explanation: "According to the law of demand, price and quantity demanded move in opposite directions when other factors remain constant.",
    difficulty: "Foundation", skill: "Recall",
  },
  {
    id: 2,
    topic: "Elasticity",
    question: "A price elasticity of demand greater than 1 indicates which type of demand?",
    options: ["Perfectly inelastic", "Unit elastic", "Elastic", "Inelastic"],
    answer: 2,
    explanation: "When the percentage change in quantity demanded is greater than the percentage change in price, demand is elastic.",
    difficulty: "Standard", skill: "Apply",
  },
  {
    id: 3,
    topic: "Market equilibrium",
    question: "At the equilibrium price, which statement is correct?",
    options: ["Demand exceeds supply", "Supply exceeds demand", "Quantity demanded equals quantity supplied", "Price becomes zero"],
    answer: 2,
    explanation: "Market equilibrium occurs where quantity demanded equals quantity supplied, leaving neither shortage nor surplus.",
    difficulty: "Foundation", skill: "Recall",
  },
  { id: 4, topic: "Opportunity cost", question: "A student spends an evening studying Economics instead of working a paid shift. What is the opportunity cost?", options: ["The price of the textbook", "The wage given up", "The examination fee", "The total study time"], answer: 1, explanation: "Opportunity cost is the value of the next-best alternative forgone—in this case, the wage the student could have earned.", difficulty: "Standard", skill: "Apply" },
  { id: 5, topic: "Marginal utility", question: "When total utility reaches its maximum, marginal utility is normally:", options: ["Maximum", "Zero", "Negative from the first unit", "Equal to price in every case"], answer: 1, explanation: "Total utility is maximised at the point where the additional utility from the next unit becomes zero.", difficulty: "Standard", skill: "Analyse" },
  { id: 6, topic: "Consumer behaviour", question: "Why does marginal utility commonly fall as consumption of the same good increases?", options: ["Income always rises", "Successive units satisfy a less urgent want", "The price must increase", "Supply becomes perfectly elastic"], answer: 1, explanation: "As a want is progressively satisfied, each additional unit generally provides less extra satisfaction than the previous unit.", difficulty: "Challenge", skill: "Analyse" },
  ],
};

const banglaObjectivePractice: Record<"commerce" | "humanities", Pick<PracticeQuestion, "topic" | "question" | "options" | "explanation">[]> = {
  commerce: [
    { topic: "হিসাববিজ্ঞানের উপাদান", question: "ব্যবসায়কে ভবিষ্যতে যে দায় পরিশোধ করতে হবে, সেটি হিসাববিজ্ঞানের কোন উপাদান?", options: ["সম্পদ", "দায়", "মালিকানা স্বত্ব", "আয়"], explanation: "অতীত ঘটনার ফলে সৃষ্ট বর্তমান বাধ্যবাধকতা, যা অর্থনৈতিক সম্পদ হস্তান্তরের মাধ্যমে পরিশোধ করতে হবে, তাকে দায় বলে।" },
    { topic: "হিসাব সমীকরণ", question: "মালিক নগদ ৫০,০০০ টাকা দিয়ে ব্যবসা শুরু করলে হিসাব সমীকরণে তাৎক্ষণিক প্রভাব কী?", options: ["সম্পদ ও দায় বৃদ্ধি পাবে", "সম্পদ ও মালিকানা স্বত্ব বৃদ্ধি পাবে", "সম্পদ কমবে ও ব্যয় বাড়বে", "দায় কমবে ও আয় বাড়বে"], explanation: "নগদ সম্পদ ৫০,০০০ টাকা বাড়ে এবং একই পরিমাণ মালিকানা স্বত্ব বাড়ে।" },
    { topic: "লেনদেন বিশ্লেষণ", question: "নগদে আসবাবপত্র ক্রয় করলে হিসাব সমীকরণের কোন অংশ পরিবর্তিত হয়?", options: ["শুধু মোট সম্পদ বাড়ে", "একটি সম্পদ বাড়ে ও অন্যটি কমে", "দায় ও ব্যয় বাড়ে", "মালিকানা স্বত্ব বাড়ে"], explanation: "আসবাবপত্র বাড়ে এবং নগদ কমে—দুটিই সম্পদ; তাই মোট সম্পদের পরিমাণ অপরিবর্তিত থাকে।" },
    { topic: "হিসাব সমীকরণ", question: "কোনো ব্যবসায়ের সম্পদ ১,২০,০০০ টাকা এবং দায় ৪৫,০০০ টাকা হলে মালিকানা স্বত্ব কত?", options: ["৭৫,০০০ টাকা", "১,৬৫,০০০ টাকা", "৪৫,০০০ টাকা", "১,২০,০০০ টাকা"], explanation: "মালিকানা স্বত্ব = সম্পদ − দায় = ১,২০,০০০ − ৪৫,০০০ = ৭৫,০০০ টাকা।" },
    { topic: "দ্বৈত সত্তা", question: "ধারে ২০,০০০ টাকার পণ্য ক্রয় করলে সঠিক প্রভাব কোনটি?", options: ["সম্পদ ও দায় বৃদ্ধি", "সম্পদ ও মালিকানা স্বত্ব হ্রাস", "দায় হ্রাস ও মালিকানা স্বত্ব বৃদ্ধি", "শুধু ব্যয় বৃদ্ধি"], explanation: "পণ্য/মজুদ সম্পদ ২০,০০০ টাকা বাড়ে এবং পাওনাদারের নিকট দায়ও সমপরিমাণ বাড়ে।" },
    { topic: "মালিকানা স্বত্ব", question: "কোন লেনদেনে সম্পদ ও মালিকানা স্বত্ব উভয়ই কমে?", options: ["দেনাদারের কাছ থেকে নগদ আদায়", "মালিকের ব্যক্তিগত প্রয়োজনে নগদ উত্তোলন", "নগদে যন্ত্রপাতি ক্রয়", "নগদে ঋণ গ্রহণ"], explanation: "ব্যক্তিগত উত্তোলনে ব্যবসায়ের নগদ কমে এবং উত্তোলন মালিকানা স্বত্ব থেকে বাদ যায়।" },
  ],
  humanities: [
    { topic: "চাহিদা", question: "অন্যান্য অবস্থা অপরিবর্তিত থাকলে স্বাভাবিক দ্রব্যের দাম কমলে চাহিদার পরিমাণ সাধারণত কী হয়?", options: ["কমে", "বাড়ে", "অপরিবর্তিত থাকে", "যোগান কমে"], explanation: "চাহিদা বিধি অনুযায়ী অন্যান্য অবস্থা অপরিবর্তিত থাকলে দাম ও চাহিদার পরিমাণ বিপরীত দিকে পরিবর্তিত হয়।" },
    { topic: "স্থিতিস্থাপকতা", question: "চাহিদার দাম-স্থিতিস্থাপকতার মান ১-এর বেশি হলে চাহিদা কেমন?", options: ["সম্পূর্ণ অস্থিতিস্থাপক", "একক স্থিতিস্থাপক", "স্থিতিস্থাপক", "অস্থিতিস্থাপক"], explanation: "চাহিদার পরিমাণের শতকরা পরিবর্তন দামের শতকরা পরিবর্তনের চেয়ে বেশি হলে চাহিদা স্থিতিস্থাপক।" },
    { topic: "বাজার ভারসাম্য", question: "ভারসাম্য দামে কোন বক্তব্যটি সঠিক?", options: ["চাহিদা যোগানের চেয়ে বেশি", "যোগান চাহিদার চেয়ে বেশি", "চাহিদার পরিমাণ ও যোগানের পরিমাণ সমান", "দাম শূন্য হয়"], explanation: "যে দামে চাহিদার পরিমাণ ও যোগানের পরিমাণ সমান হয়, সেটিই বাজারের ভারসাম্য দাম।" },
    { topic: "সুযোগ ব্যয়", question: "একজন শিক্ষার্থী পারিশ্রমিকের কাজ না করে সন্ধ্যায় অর্থনীতি পড়ল। তার সুযোগ ব্যয় কী?", options: ["বইয়ের দাম", "ত্যাগ করা মজুরি", "পরীক্ষার ফি", "মোট পড়ার সময়"], explanation: "সুযোগ ব্যয় হলো ত্যাগ করা সর্বোত্তম বিকল্পের মূল্য—এখানে কাজটি করলে পাওয়া যেত এমন মজুরি।" },
    { topic: "প্রান্তিক উপযোগ", question: "মোট উপযোগ সর্বোচ্চ হলে প্রান্তিক উপযোগ সাধারণত কত হয়?", options: ["সর্বোচ্চ", "শূন্য", "প্রথম একক থেকেই ঋণাত্মক", "সবসময় দামের সমান"], explanation: "যে বিন্দুতে অতিরিক্ত একক থেকে প্রাপ্ত প্রান্তিক উপযোগ শূন্য হয়, সেখানে মোট উপযোগ সর্বোচ্চ।" },
    { topic: "ভোক্তার আচরণ", question: "একই দ্রব্যের ভোগ বাড়লে প্রান্তিক উপযোগ সাধারণত কমে কেন?", options: ["আয় সবসময় বাড়ে", "পরবর্তী একক কম জরুরি অভাব পূরণ করে", "দাম অবশ্যই বাড়ে", "যোগান সম্পূর্ণ স্থিতিস্থাপক হয়"], explanation: "একটি অভাব ধীরে ধীরে পূরণ হওয়ায় প্রতিটি অতিরিক্ত একক আগেরটির তুলনায় কম অতিরিক্ত তৃপ্তি দেয়।" },
  ],
};

for (const group of ["commerce", "humanities"] as const) {
  practiceQuestionsByGroup[group] = practiceQuestionsByGroup[group].map((question, index) => ({ ...question, ...banglaObjectivePractice[group][index] }));
}

export type QuestionVisual = {
  kind: "table" | "flow" | "graph" | "image";
  title: string;
  caption: string;
  alt: string;
  placement?: "question" | "answer" | "both";
  headers?: string[];
  rows?: string[][];
  steps?: string[];
  points?: { x: number; y: number; label: string }[];
  xLabel?: string;
  yLabel?: string;
  src?: string;
};

export type ExamResource = {
  subject: string;
  subjectBn?: string;
  unit: string;
  unitBn: string;
  review?: {
    recordId: string;
    status: "reviewed" | "under-review";
    lastReviewed: string;
    lastReviewedBn: string;
    curriculum: "NCTB HSC";
    sourcePolicy: "authored-board-pattern";
    verificationLevel: "catalogue-checked" | "official-curriculum-located" | "chapter-sequence-verified";
    mappingStage: "core-book-linked" | "official-curriculum-located-edition-under-comparison";
    sourceIds: string[];
    chapterSequenceVerified: boolean;
    reviewerStatus: "unassigned" | "assigned" | "signed-off";
    reviewerName: string | null;
    reviewerRole: string | null;
    reviewDate: string | null;
    supportingGuideReferences: NonNullable<ChapterPreview["sourceRef"]>[];
    nctbComparison: {
      officialSubject: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      officialPaper: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      officialChapterTitle: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      chapterSequence: { status: "pending" | "verified"; value: number | null; sourceId: string | null; evidenceNote: string };
      syllabusYear: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      applicableEdition: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      publisher: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      approvalEvidence: { status: "pending" | "verified"; value: string | null; sourceId: string | null; evidenceNote: string };
      textbookStartPage: { status: "pending" | "verified"; value: number | null; sourceId: string | null; evidenceNote: string };
      textbookEndPage: { status: "pending" | "verified"; value: number | null; sourceId: string | null; evidenceNote: string };
      comparedBy: string | null;
      comparedOn: string | null;
    };
    evidenceNote: string;
    evidenceNoteBn: string;
    nextAction: string;
    nextActionBn: string;
    blockingReasons: string[];
    blockingReasonsBn: string[];
    checks: {
      sourceTraceability: "verified";
      subjectAndPaper: "under-review" | "verified";
      chapterTitleAndSequence: "under-review" | "verified";
      editionAndReapproval: "under-review" | "verified";
      questionProvenance: "authored-board-pattern" | "verified-board-question";
    };
    contentChecks: {
      factsDefinitionsTerminology: "under-review" | "verified";
      datesNamesChronology: "under-review" | "verified" | "not-applicable";
      formulasCalculationsEntries: "under-review" | "verified" | "not-applicable";
      ictCodeAndOutput: "under-review" | "verified" | "not-applicable";
      mcqAnswersAndExplanations: "under-review" | "verified";
      cqMarkDistribution: "under-review" | "verified";
      modelAnswerDepth: "under-review" | "verified";
      naturalBangla: "under-review" | "verified" | "not-applicable";
      englishLanguageAndSourceText: "under-review" | "verified" | "not-applicable";
      finalReviewerDeclaration: "under-review" | "verified";
    };
  };
  notes: string[];
  lessonDetails?: {
    title: string;
    concept: string;
    steps: string[];
    application: string;
    checkpoint: string;
    workedSnapshot?: string;
    practicePrompt?: string;
    answerCheck?: string;
    recallQuestions?: string[];
    commonTrap?: string;
    stretchPrompt?: string;
    foundation?: { question: string; answer: string };
    advanced?: { focus: string; explanation: string; transfer: string };
  }[];
  guide?: {
    concept: string;
    terminology: string[];
    method: string[];
    structures: string[];
    application: string;
    selfCheck: string[];
    examChecklist: string[];
  };
  worked: { problem: string; steps: string[]; answer: string };
  extraWorked?: { title: string; problem: string; approach: string[]; checkpoint: string }[];
  examToolkit?: { essentials: string[]; mistakes: string[]; scoringMoves: string[] };
  chapterWorkshop?: {
    title: string;
    formulaSheet: string[];
    comparison: { headers: [string, string, string]; rows: [string, string, string][] };
    visual: { title: string; steps: string[]; caption: string };
    cqSolution: { stimulus: string; parts: { label: string; marks: number; answer: string }[] };
    fiveMinuteRecap: string[];
    examNightChecklist: string[];
    selfCheck: { question: string; explanation: string }[];
  };
  materialPack?: {
    identity: string;
    assessmentFormat: "cq" | "written-task";
    introduction: string;
    conceptNotes: { title: string; explanation: string; example: string }[];
    workedAnswers: { label: string; question: string; steps: string[]; answer: string }[];
    fullCq: { stimulus: string; parts: { label: string; marks: number; question: string; answer: string }[] };
    selfCheck: { question: string; answer: string }[];
  };
  modelExamples?: {
    kind: "CQ" | "Paragraph" | "Email" | "Letter" | "Composition" | "Report" | "Calculation" | "Diagram" | "Summary" | "Flow chart" | "Graph" | "Story" | "Grammar lab" | "দিনলিপি" | "প্রাতিষ্ঠানিক প্রতিবেদন" | "সংবাদ প্রতিবেদন" | "ই-মেইল" | "সারাংশ–সারমর্ম" | "ভাব-সম্প্রসারণ" | "সংলাপ" | "ক্ষুদেগল্প" | "উচ্চারণ ল্যাব" | "বানান সংশোধন" | "শব্দগঠন" | "শব্দশ্রেণি" | "বাক্য রূপান্তর" | "উক্তি পরিবর্তন" | "প্রসঙ্গভিত্তিক শব্দ" | "Exam drill" | "অনুবাদ কর্মশালা" | "সম্পাদনা" | "অনুচ্ছেদ" | "অভিজ্ঞতা বর্ণন" | "ভাষণ" | "প্রুফ ল্যাব" | "প্রবন্ধ";
    title: string;
    prompt: string;
    answer: string[];
    examinerNote: string;
  }[];
  graphPractice?: {
    title: string;
    xLabel: string;
    yLabel: string;
    points: { x: number; y: number; label: string }[];
    caption: string;
  };
  masteryPlan?: { day: number; title: string; focus: string; tasks: string[]; output: string; minutes: number }[];
  examinerRubric?: { command: string; marks: string; mustShow: string; sentenceStart: string; losesMarks: string }[];
  cq: { stimulus: string; framework: string[] };
  bank: {
    mcq: number;
    cq: number;
    written: number;
    focus: string;
    questions?: {
      type: "MCQ" | "CQ" | "Written";
      level: "Foundation" | "Standard" | "Challenge";
      category: "Concept" | "Application" | "Board-style" | "College-standard";
      prompt: string;
      answerGuide: string;
      promptBn?: string;
      answerGuideBn?: string;
      modelAnswer?: string;
      markingPoints?: string[];
      modelAnswerBn?: string;
      markingPointsBn?: string[];
      optionsBn?: string[];
      correctIndex?: number;
      marks?: number;
      sourceStatus?: "authored-board-pattern";
      requiresVisual?: boolean;
      visual?: QuestionVisual;
    }[];
  };
};

export const officialAcademicSources = {
  authority: "National Curriculum and Textbook Board (NCTB)",
  authorityBn: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড (এনসিটিবি)",
  checkedOn: "12 October 2026",
  checkedOnBn: "১২ অক্টোবর ২০২৬",
  session: "HSC 2025–26 / 2026 catalogue",
  policy: {
    label: "Academic verification policy",
    labelBn: "একাডেমিক যাচাই নীতি",
    statement: "Source links are recorded first; subject, paper, chapter title, sequence and edition are checked separately before a chapter is marked reviewed.",
    statementBn: "আগে অফিসিয়াল উৎস সংরক্ষণ করা হয়; অধ্যায় পর্যালোচিত হিসেবে চিহ্নিত করার আগে বিষয়, পত্র, অধ্যায়ের নাম-ক্রম ও সংস্করণ আলাদাভাবে মিলিয়ে দেখা হয়।",
    questionStatement: "Practice items are original board-pattern questions unless a board, year, set and question number are explicitly cited.",
    questionStatementBn: "বোর্ড, বছর, সেট ও প্রশ্ন নম্বর স্পষ্টভাবে উল্লেখ না থাকলে অনুশীলনের প্রশ্নগুলো নিজস্ব বোর্ড-প্যাটার্ন প্রশ্ন।",
  },
  checkpoints: [
    { id: "source", label: "Official source traceability", labelBn: "অফিসিয়াল উৎসের সংযোগ", status: "verified" },
    { id: "subject-paper", label: "Subject and paper mapping", labelBn: "বিষয় ও পত্র মিল", status: "under-review" },
    { id: "chapter-sequence", label: "Chapter title and sequence", labelBn: "অধ্যায়ের নাম ও ক্রম", status: "under-review" },
    { id: "edition", label: "Edition and reapproval", labelBn: "সংস্করণ ও পুনঃঅনুমোদন", status: "under-review" },
    { id: "provenance", label: "Question provenance", labelBn: "প্রশ্নের উৎস পরিচয়", status: "verified" },
  ],
  entries: [
    {
      id: "nctb-2026-secondary-higher-catalogue",
      label: "2026 secondary and higher-secondary textbook catalogue",
      labelBn: "২০২৬ মাধ্যমিক ও উচ্চ মাধ্যমিক পাঠ্যপুস্তক তালিকা",
      scopeBn: "বর্তমান catalogue layer; chapter title, order বা edition sign-off নয়",
      url: "https://nctb.gov.bd/pages/static-pages/695b98afc4774958d7b7044c",
    },
    {
      id: "nctb-2026-textbooks",
      label: "2026 textbook catalogue",
      labelBn: "২০২৬ শিক্ষাবর্ষের পাঠ্যপুস্তক তালিকা",
      scopeBn: "চলতি শিক্ষাবর্ষের বই ও প্রকাশনা-তালিকার প্রাথমিক যাচাই",
      url: "https://nctb.gov.bd/pages/static-pages/695b97ffc4774958d7b70329",
    },
    {
      id: "nctb-hsc-curriculum",
      label: "Higher-secondary curriculum",
      labelBn: "উচ্চ মাধ্যমিক স্তরের শিক্ষাক্রম",
      scopeBn: "বিষয়, পত্র ও পাঠ্যক্রমের কর্তৃপক্ষীয় রেফারেন্স",
      url: "https://nctb.gov.bd/site/files/e977a7e5-be01-4c42-99ac-bc966d334ae7/%E0%A6%89%E0%A6%9A%E0%A7%8D%E0%A6%9A-%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A6%BF%E0%A6%95",
    },
    {
      id: "nctb-xi-xii-textbooks",
      label: "2025–26 Class XI–XII textbooks",
      labelBn: "২০২৫–২৬ একাদশ–দ্বাদশ শ্রেণির পাঠ্যপুস্তক",
      scopeBn: "চলতি উচ্চ মাধ্যমিক শিক্ষাবর্ষের অফিসিয়াল বইয়ের তালিকা",
      url: "https://nctb.gov.bd/pages/static-pages/6922e145933eb65569e2b37b",
    },
    {
      id: "nctb-xi-xii-subject-structure",
      label: "Revised Class XI–XII subject structure",
      labelBn: "একাদশ–দ্বাদশ শ্রেণির সংশোধিত বিষয় কাঠামো",
      scopeBn: "বিষয় ও পত্র বিন্যাস সরাসরি যাচাইয়ের অফিসিয়াল নোটিশ",
      url: "https://dhakaeducationboard.gov.bd/data/20250908160625430976.pdf",
    },
    {
      id: "nctb-hsc-2026-full-syllabus",
      label: "HSC 2026 full-syllabus notice",
      labelBn: "২০২৬ HSC পূর্ণাঙ্গ পাঠ্যসূচি নোটিশ",
      scopeBn: "২০২৬ পরীক্ষার প্রযোজ্য বছর, পূর্ণাঙ্গ পাঠ্যসূচি ও পূর্ণ নম্বরের অফিসিয়াল প্রমাণ",
      url: "https://www.dhakaeducationboard.gov.bd/data/20251028164545536346.pdf",
    },
    {
      id: "dhaka-board-hsc-corner",
      label: "Dhaka Education Board HSC notice archive",
      labelBn: "ঢাকা শিক্ষা বোর্ড HSC নোটিশ আর্কাইভ",
      scopeBn: "বাংলা পাঠ্যসূচি, পরীক্ষা, প্রশ্ন কাঠামো ও পরবর্তী সংশোধনী খোঁজার চলমান অফিসিয়াল সূচি",
      url: "https://dhakaeducationboard.gov.bd/index.php/site/product/hsccorner",
    },
    {
      id: "nctb-xi-xii-reapproval-notice",
      label: "Class XI–XII textbook reapproval notice",
      labelBn: "একাদশ–দ্বাদশ শ্রেণির পাঠ্যপুস্তক পুনঃঅনুমোদন নোটিশ",
      scopeBn: "প্রকাশক ও সংস্করণ মিলানোর অফিসিয়াল নোটিশ; নির্দিষ্ট বইয়ের imprint-এর সঙ্গে মিল ছাড়া chapter approval নয়",
      url: "https://objectstorage.ap-dcc-gazipur-1.oraclecloud15.com/n/axvjbnqprylg/b/V2Ministry/o/office-nctb/2024/12/0cd954770ba641f69271c2441ef1d9bd.pdf",
    },
    {
      id: "nctb-hsc-subject-syllabus-index",
      label: "Official higher-secondary subject syllabus index",
      labelBn: "অফিসিয়াল উচ্চ মাধ্যমিক বিষয়ভিত্তিক শিক্ষাক্রম সূচি",
      scopeBn: "বাংলা, ইংরেজি, আইসিটি এবং ব্যবসায় শিক্ষা ও মানবিকের নির্বাচিত বিষয়গুলোর উপস্থিতি নিশ্চিত; বর্তমান অধ্যায়ক্রমের প্রমাণ নয়",
      url: "https://nctb.gov.bd/site/files/e977a7e5-be01-4c42-99ac-bc966d334ae7/nolink/%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%AE-%E0%A6%B6%E0%A6%BF%E0%A6%95%E0%A7%8D%E0%A6%B7%E0%A6%BE%E0%A6%AC%E0%A6%B0%E0%A7%8D%E0%A6%B7%E0%A7%87%E0%A6%B0-%E0%A6%B8%E0%A6%95%E0%A6%B2-%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%B0%E0%A7%87%E0%A6%B0-%E0%A6%AA%E0%A6%BE%E0%A6%A0%E0%A7%8D%E0%A6%AF%E0%A6%AA%E0%A7%81%E0%A6%B8%E0%A7%8D%E0%A6%A4%E0%A6%95%E0%A7%87%E0%A6%B0-%E0%A6%A4%E0%A6%BE%E0%A6%B2%E0%A6%BF%E0%A6%95%E0%A6%BE-",
    },
  ],
} as const;

export const curriculumVerificationLedger = {
  checkedOn: "12 October 2026",
  checkedOnBn: "১২ অক্টোবর ২০২৬",
  summary: {
    subjectsTraced: 13,
    officialSubjectListingsConfirmed: 13,
    officialCoreTextbooksLinked: 3,
    electiveSyllabusReviewsRemaining: 10,
  },
  distinction: {
    label: "Catalogue evidence is not the same as chapter approval",
    labelBn: "ক্যাটালগে বই থাকা আর অধ্যায় অনুমোদিত হওয়া এক নয়",
    statement: "A missing free elective-book download does not make the subject unmapped. Official curriculum and subject-structure evidence establish the subject; the reapproval record and matching book imprint establish the applicable edition; chapter approval still requires contents and page-level comparison.",
    statementBn: "কোনো নৈর্বাচনিক বই বিনামূল্যের download catalogue-এ না থাকলেই বিষয়টি unmapped নয়। অফিসিয়াল শিক্ষাক্রম ও বিষয়-কাঠামো দিয়ে বিষয়টি প্রতিষ্ঠিত হবে; পুনঃঅনুমোদন নথি ও বইয়ের imprint মিলিয়ে প্রযোজ্য সংস্করণ নির্ধারিত হবে; আর অধ্যায় অনুমোদনের জন্য সূচিপত্র ও পৃষ্ঠা-ভিত্তিক তুলনা প্রয়োজন।",
  },
  verificationRule: "Verified is permitted only when all ten primary-evidence fields contain a value, an official source ID and a named, dated comparison record.",
  verificationRuleBn: "দশটি প্রাথমিক-প্রমাণ ঘরের প্রতিটিতে মান, অফিসিয়াল উৎস নম্বর এবং পর্যালোচকের নাম-তারিখসহ তুলনা নথিভুক্ত না হলে ‘যাচাইকৃত’ দেখানো যাবে না।",
  comparisonFields: [
    { id: "officialSubject", label: "Official subject", labelBn: "অফিসিয়াল বিষয়", requiredEvidence: "Official subject structure/catalogue page" },
    { id: "officialPaper", label: "Official paper", labelBn: "অফিসিয়াল পত্র", requiredEvidence: "Official subject structure or syllabus page" },
    { id: "officialChapterTitle", label: "Official chapter title", labelBn: "অফিসিয়াল অধ্যায়ের নাম", requiredEvidence: "Textbook contents/chapter-opening page" },
    { id: "chapterSequence", label: "Chapter sequence", labelBn: "অধ্যায়ের ক্রম", requiredEvidence: "Numbered table of contents" },
    { id: "syllabusYear", label: "Applicable syllabus year", labelBn: "প্রযোজ্য সিলেবাস বছর", requiredEvidence: "Official syllabus/curriculum notice" },
    { id: "applicableEdition", label: "Applicable textbook edition", labelBn: "প্রযোজ্য পাঠ্যবই সংস্করণ", requiredEvidence: "Title and imprint/copyright pages" },
    { id: "publisher", label: "Publisher", labelBn: "প্রকাশক", requiredEvidence: "Book imprint/copyright page" },
    { id: "approvalEvidence", label: "Approval/reapproval evidence", labelBn: "অনুমোদন/পুনঃঅনুমোদন প্রমাণ", requiredEvidence: "NCTB notice plus matching book imprint" },
    { id: "textbookStartPage", label: "Textbook start page", labelBn: "পাঠ্যবইয়ের শুরু পৃষ্ঠা", requiredEvidence: "Printed chapter-opening page" },
    { id: "textbookEndPage", label: "Textbook end page", labelBn: "পাঠ্যবইয়ের শেষ পৃষ্ঠা", requiredEvidence: "Printed final page before next chapter" },
  ],
  subjects: [
    { id: "bangla", label: "Bangla", labelBn: "বাংলা", subjectPresence: "verified", catalogueEvidence: "official-core-textbook", catalogueLabel: "Official core subject · detailed mapping pending", catalogueLabelBn: "অফিসিয়াল আবশ্যিক বিষয় · বিস্তারিত মিল বাকি", paperMapping: "pending", chapterSequence: "pending", editionReview: "catalogue-linked" },
    { id: "ict", label: "Information & Communication Technology", labelBn: "তথ্য ও যোগাযোগ প্রযুক্তি", subjectPresence: "verified", catalogueEvidence: "official-core-textbook", catalogueLabel: "Official core subject · detailed mapping pending", catalogueLabelBn: "অফিসিয়াল আবশ্যিক বিষয় · বিস্তারিত মিল বাকি", paperMapping: "pending", chapterSequence: "pending", editionReview: "catalogue-linked" },
    { id: "accounting", label: "Accounting", labelBn: "হিসাববিজ্ঞান", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "finance", label: "Finance & Banking", labelBn: "ফিন্যান্স ও ব্যাংকিং", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "business", label: "Business Organisation & Management", labelBn: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "economics", label: "Economics", labelBn: "অর্থনীতি", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "civics", label: "Civics & Good Governance", labelBn: "পৌরনীতি ও সুশাসন", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "history", label: "History", labelBn: "ইতিহাস", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "logic", label: "Logic", labelBn: "যুক্তিবিদ্যা", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "islamic_history", label: "Islamic History & Culture", labelBn: "ইসলামের ইতিহাস ও সংস্কৃতি", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "statistics", label: "Statistics", labelBn: "পরিসংখ্যান", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "geography", label: "Geography", labelBn: "ভূগোল", subjectPresence: "verified", catalogueEvidence: "elective-curriculum", catalogueLabel: "Official curriculum located · textbook structure and approved edition under comparison", catalogueLabelBn: "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে · বইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন", paperMapping: "curriculum-located", chapterSequence: "under-comparison", editionReview: "under-comparison" },
    { id: "english", label: "English", labelBn: "ইংরেজি", subjectPresence: "verified", catalogueEvidence: "official-core-textbook", catalogueLabel: "Official listing + English for Today linked", catalogueLabelBn: "অফিসিয়াল তালিকা + English for Today সংযুক্ত", paperMapping: "pending", chapterSequence: "pending", editionReview: "catalogue-linked" },
  ],
} as const;

export const academicReviewGate = {
  totalChapterRecords: 356,
  signedOffChapterRecords: 0,
  pendingChapterRecords: 356,
  requiredReviewer: "Qualified HSC subject reviewer",
  requiredReviewerBn: "যোগ্য HSC বিষয়ভিত্তিক একাডেমিক পর্যালোচক",
  releaseRule: "A chapter can be marked Reviewed only when one named subject specialist records the source edition, completes every applicable check, records corrections, dates the decision and signs the final declaration.",
  releaseRuleBn: "একজন পরিচয়-উল্লেখিত বিষয় বিশেষজ্ঞ উৎস-সংস্করণ নথিভুক্ত করে প্রযোজ্য প্রতিটি যাচাই সম্পন্ন, সংশোধন লিখে, তারিখ দিয়ে চূড়ান্ত ঘোষণা অনুমোদন করার পরই অধ্যায়টি ‘পর্যালোচিত’ হবে।",
  checks: [
    { id: "curriculum", label: "Curriculum and paper", labelBn: "শিক্ষাক্রম ও পত্র", status: "pending" },
    { id: "sequence", label: "Chapter title and sequence", labelBn: "অধ্যায়ের নাম ও ক্রম", status: "pending" },
    { id: "edition", label: "Approved edition", labelBn: "অনুমোদিত সংস্করণ", status: "pending" },
    { id: "facts", label: "Facts, definitions and terminology", labelBn: "তথ্য, সংজ্ঞা ও পরিভাষা", status: "pending" },
    { id: "chronology", label: "Dates, names and chronology", labelBn: "তারিখ, নাম ও কালক্রম", status: "pending" },
    { id: "calculations", label: "Formulas, calculations and entries", labelBn: "সূত্র, হিসাব ও জাবেদা", status: "pending" },
    { id: "ict-code", label: "ICT code and output", labelBn: "ICT code ও output", status: "pending" },
    { id: "mcq", label: "MCQ options, answers and explanations", labelBn: "MCQ বিকল্প, উত্তর ও ব্যাখ্যা", status: "pending" },
    { id: "cq", label: "CQ 1+2+3+4 marking accuracy", labelBn: "CQ ১+২+৩+৪ মানবণ্টনের যথার্থতা", status: "pending" },
    { id: "answer-depth", label: "Model-answer depth", labelBn: "মডেল উত্তরের পূর্ণতা", status: "pending" },
    { id: "language", label: "Natural Bangla", labelBn: "স্বাভাবিক বাংলা ভাষা", status: "pending" },
    { id: "english", label: "English language and source text", labelBn: "English ভাষা ও source text", status: "pending" },
    { id: "declaration", label: "Named reviewer declaration", labelBn: "পর্যালোচকের পরিচয়সহ চূড়ান্ত ঘোষণা", status: "pending" },
  ],
  reviewerRoles: [
    { subjectId: "bangla", role: "HSC Bangla teacher, lecturer or examiner", roleBn: "HSC বাংলা শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "literature, grammar, composition and marking language", emphasisBn: "সাহিত্য, ব্যাকরণ, লিখিত অংশ ও মূল্যায়নের ভাষা" },
    { subjectId: "ict", role: "HSC ICT teacher, lecturer or examiner", roleBn: "HSC আইসিটি শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "number systems, logic, programming, web and database", emphasisBn: "সংখ্যা পদ্ধতি, লজিক, প্রোগ্রামিং, ওয়েব ও ডেটাবেজ" },
    { subjectId: "accounting", role: "HSC Accounting teacher, lecturer or examiner", roleBn: "HSC হিসাববিজ্ঞান শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "entries, ledgers, statements and calculations", emphasisBn: "জাবেদা, খতিয়ান, আর্থিক বিবরণী ও হিসাব" },
    { subjectId: "finance", role: "HSC Finance & Banking teacher, lecturer or examiner", roleBn: "HSC ফিন্যান্স ও ব্যাংকিং শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "formulas, numerical workings and financial decisions", emphasisBn: "সূত্র, গাণিতিক সমাধান ও আর্থিক সিদ্ধান্ত" },
    { subjectId: "business", role: "HSC Business Organisation teacher, lecturer or examiner", roleBn: "HSC ব্যবসায় সংগঠন শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "terminology, case application and management principles", emphasisBn: "পরিভাষা, ঘটনার প্রয়োগ ও ব্যবস্থাপনা নীতি" },
    { subjectId: "economics", role: "HSC Economics teacher, lecturer or examiner", roleBn: "HSC অর্থনীতি শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "formulas, tables, graphs and causal analysis", emphasisBn: "সূত্র, সারণি, রেখাচিত্র ও কার্যকারণ বিশ্লেষণ" },
    { subjectId: "civics", role: "HSC Civics teacher, lecturer or examiner", roleBn: "HSC পৌরনীতি শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "constitutional terms, institutions and analytical judgement", emphasisBn: "সাংবিধানিক পরিভাষা, প্রতিষ্ঠান ও বিশ্লেষণ" },
    { subjectId: "history", role: "HSC History teacher, lecturer or examiner", roleBn: "HSC ইতিহাস শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "dates, chronology, evidence and interpretation", emphasisBn: "তারিখ, কালক্রম, প্রমাণ ও ব্যাখ্যা" },
    { subjectId: "logic", role: "HSC Logic teacher, lecturer or examiner", roleBn: "HSC যুক্তিবিদ্যা শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "formal rules, validity, symbols and fallacies", emphasisBn: "নিয়ম, বৈধতা, প্রতীক ও যুক্তিভ্রান্তি" },
    { subjectId: "islamic_history", role: "HSC Islamic History teacher, lecturer or examiner", roleBn: "HSC ইসলামের ইতিহাস শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "chronology, sources, civilisation and culture", emphasisBn: "কালক্রম, উৎস, সভ্যতা ও সংস্কৃতি" },
    { subjectId: "statistics", role: "HSC Statistics teacher, lecturer or examiner", roleBn: "HSC পরিসংখ্যান শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "sampling, tables, formulas, calculations, graphs and practical work", emphasisBn: "নমুনায়ন, সারণি, সূত্র, হিসাব, রেখাচিত্র ও ব্যবহারিক কাজ" },
    { subjectId: "geography", role: "HSC Geography teacher, lecturer or examiner", roleBn: "HSC ভূগোল শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "maps, spatial data, physical processes and Bangladesh examples", emphasisBn: "মানচিত্র, স্থানিক তথ্য, ভৌত প্রক্রিয়া ও বাংলাদেশের উদাহরণ" },
    { subjectId: "english", role: "HSC English teacher, lecturer or examiner", roleBn: "HSC English শিক্ষক, প্রভাষক বা পরীক্ষক", emphasis: "source text, grammar, writing task and marking language", emphasisBn: "source text, grammar, writing task ও marking language" },
  ],
  requiredEvidence: ["Reviewer name and role", "Curriculum or textbook source ID", "Edition or publication year", "Page or chapter reference", "Correction log", "Decision date", "Final declaration"],
  requiredEvidenceBn: ["পর্যালোচকের নাম ও ভূমিকা", "শিক্ষাক্রম বা পাঠ্যবইয়ের উৎস নম্বর", "সংস্করণ বা প্রকাশের বছর", "পৃষ্ঠা বা অধ্যায়ের রেফারেন্স", "সংশোধনের তালিকা", "সিদ্ধান্তের তারিখ", "চূড়ান্ত ঘোষণা"],
  workflow: [
    { id: "source", label: "1. Establish the official reference", labelBn: "১. অফিসিয়াল রেফারেন্স নির্ধারণ", detail: "Record subject code, paper, textbook or syllabus title, edition, publication year and exact page or chapter reference.", detailBn: "বিষয় কোড, পত্র, পাঠ্যবই বা সিলেবাসের নাম, সংস্করণ, প্রকাশের বছর এবং নির্দিষ্ট পৃষ্ঠা বা অধ্যায়ের রেফারেন্স লিখতে হবে।" },
    { id: "content", label: "2. Verify the teaching content", labelBn: "২. পাঠ্যবিষয় যাচাই", detail: "Check every fact, definition, term, formula, calculation, entry, statement, date, diagram and worked solution—not a sample.", detailBn: "নমুনা নয়—প্রতিটি তথ্য, সংজ্ঞা, পরিভাষা, সূত্র, হিসাব, জাবেদা, বিবরণী, তারিখ, চিত্র ও worked solution যাচাই করতে হবে।" },
    { id: "assessment", label: "3. Verify every assessment item", labelBn: "৩. প্রতিটি প্রশ্ন ও মূল্যায়ন যাচাই", detail: "Review the stem, all four MCQ options, single correct answer, explanation, CQ stimulus, 1+2+3+4 rubric and model answer.", detailBn: "প্রশ্নের stem, চারটি MCQ বিকল্প, একক সঠিক উত্তর, ব্যাখ্যা, CQ উদ্দীপক, ১+২+৩+৪ rubric এবং model answer যাচাই করতে হবে।" },
    { id: "decision", label: "4. Correct, recheck and sign", labelBn: "৪. সংশোধন, পুনঃযাচাই ও অনুমোদন", detail: "Record each correction, recheck the amended material and choose Pending, Correction required or Signed off with date and declaration.", detailBn: "প্রতিটি সংশোধন নথিভুক্ত করে সংশোধিত উপকরণ আবার যাচাই করতে হবে; এরপর তারিখ ও ঘোষণাসহ Pending, Correction required বা Signed off নির্বাচন করতে হবে।" },
  ],
  acceptanceRules: [
    { label: "Full-scope review", labelBn: "সম্পূর্ণ পরিসরের যাচাই", detail: "Every lesson, MCQ, CQ, written answer and worked example in the chapter must be checked.", detailBn: "অধ্যায়ের প্রতিটি পাঠ, MCQ, CQ, লিখিত উত্তর ও worked example যাচাই করতে হবে।" },
    { label: "Single-answer MCQ rule", labelBn: "MCQ-তে একটিমাত্র সঠিক উত্তর", detail: "All distractors must be plausible but demonstrably incorrect under the stated conditions.", detailBn: "সব distractor বিশ্বাসযোগ্য হবে, তবে প্রশ্নের শর্তে স্পষ্টভাবে ভুল প্রমাণ করা যাবে।" },
    { label: "CQ marks rule", labelBn: "CQ মানবণ্টনের নিয়ম", detail: "The model answer and marking points must visibly support 1, 2, 3 and 4 marks respectively.", detailBn: "মডেল উত্তর ও marking point-এ যথাক্রমে ১, ২, ৩ ও ৪ নম্বর পাওয়ার উপাদান দৃশ্যমান থাকতে হবে।" },
    { label: "Correction closure", labelBn: "সংশোধন সম্পন্ন হওয়ার প্রমাণ", detail: "A chapter cannot be signed off while any factual, numerical, language or assessment correction remains open.", detailBn: "তথ্য, হিসাব, ভাষা বা প্রশ্নসংক্রান্ত কোনো সংশোধন বাকি থাকলে অধ্যায় অনুমোদন করা যাবে না।" },
  ],
  subjectChecklists: {
    accounting: ["Debit-credit classification and narration", "Journal, ledger and trial-balance posting", "Adjustments, statements and final balances", "Every numerical working and accounting format"],
    finance: ["Finance and banking terminology", "Formula, substitution, unit and rounding", "Risk-return and financing decisions", "Bangladesh banking examples without invented current rates"],
    business: ["Textbook terminology and management principles", "Case-to-principle application", "Organisation and management distinctions", "Bangladesh business examples and legal claims"],
    economics: ["Definitions and ceteris-paribus conditions", "Tables, formulas, units and calculations", "Axis labels, curves, shifts and equilibrium", "Cause-effect interpretation and limitations"],
    civics: ["Civic and constitutional terminology", "State, government and institution distinctions", "Rights, duties, law and governance concepts", "No unsupported current constitutional claim"],
    history: ["Names, dates, places and chronology", "Cause, event, consequence and significance", "Source provenance and conflicting perspectives", "No invented quotation or unsupported historical claim"],
    english: ["Source-text title, wording and attribution", "Grammar rule and exception accuracy", "Writing format, tone and task completion", "Model response language, punctuation and marking logic"],
    statistics: ["Population, sample, variable and measurement terminology", "Formula, symbol, substitution, unit and rounding", "Frequency tables, graphs and axis labels", "Practical procedure, interpretation and limits of inference"],
    geography: ["Place, region and geographical-process terminology", "Map title, scale, direction, legend and labels", "Physical and human cause-effect relationships", "Bangladesh examples and source-dated spatial data"],
  },
  subjectChecklistsBn: {
    accounting: ["ডেবিট-ক্রেডিট শ্রেণিবিন্যাস ও narration", "জাবেদা, খতিয়ান ও রেওয়ামিলে posting", "সমন্বয়, আর্থিক বিবরণী ও চূড়ান্ত জের", "প্রতিটি গাণিতিক ধাপ ও হিসাবের বিন্যাস"],
    finance: ["ফিন্যান্স ও ব্যাংকিংয়ের পরিভাষা", "সূত্র, মান বসানো, একক ও rounding", "ঝুঁকি-আয় ও অর্থায়ন সিদ্ধান্ত", "বর্তমান হার উদ্ভাবন না করে বাংলাদেশি ব্যাংকিং উদাহরণ"],
    business: ["পাঠ্যবইয়ের পরিভাষা ও ব্যবস্থাপনা নীতি", "ঘটনার সঙ্গে নীতির প্রয়োগ", "সংগঠন ও ব্যবস্থাপনার পার্থক্য", "বাংলাদেশি ব্যবসায় উদাহরণ ও আইনসংক্রান্ত দাবি"],
    economics: ["সংজ্ঞা ও অন্যান্য অবস্থা অপরিবর্তিত থাকার শর্ত", "সারণি, সূত্র, একক ও হিসাব", "অক্ষ, রেখা, স্থানান্তর ও ভারসাম্য", "কার্যকারণ ব্যাখ্যা ও সীমাবদ্ধতা"],
    civics: ["পৌর ও সাংবিধানিক পরিভাষা", "রাষ্ট্র, সরকার ও প্রতিষ্ঠানের পার্থক্য", "অধিকার, কর্তব্য, আইন ও সুশাসনের ধারণা", "যাচাইহীন বর্তমান সাংবিধানিক দাবি না থাকা"],
    history: ["নাম, তারিখ, স্থান ও কালক্রম", "কারণ, ঘটনা, ফলাফল ও গুরুত্ব", "উৎসের পরিচয় ও ভিন্ন দৃষ্টিভঙ্গি", "উদ্ভাবিত উদ্ধৃতি বা প্রমাণহীন ঐতিহাসিক দাবি না থাকা"],
    english: ["Source text-এর title, wording ও attribution", "Grammar rule ও exception-এর নির্ভুলতা", "Writing format, tone ও task completion", "Model response-এর ভাষা, punctuation ও marking logic"],
    statistics: ["সমগ্রক, নমুনা, চলক ও পরিমাপের পরিভাষা", "সূত্র, প্রতীক, মান বসানো, একক ও rounding", "গণসংখ্যা সারণি, রেখাচিত্র ও অক্ষের নাম", "ব্যবহারিক পদ্ধতি, ফলের ব্যাখ্যা ও সিদ্ধান্তের সীমা"],
    geography: ["স্থান, অঞ্চল ও ভৌগোলিক প্রক্রিয়ার পরিভাষা", "মানচিত্রের শিরোনাম, স্কেল, দিক, legend ও label", "ভৌত ও মানবিক কারণ–ফল সম্পর্ক", "বাংলাদেশের উদাহরণ ও উৎস-তারিখসহ স্থানিক তথ্য"],
  },
} as const;

export const questionProvenancePolicy = {
  authoredItemsLabel: "Original HSC practice",
  authoredItemsLabelBn: "নিজস্ব HSC অনুশীলন",
  authenticPastBoardCount: 0,
  citationFields: ["board", "year", "set", "question number"],
  citationFieldsBn: ["বোর্ড", "বছর", "সেট", "প্রশ্ন নম্বর"],
  rule: "Previous-board is reserved for an item with a complete board, year, set and question-number citation. Every current bank item is original practice and is labelled by its actual category.",
  ruleBn: "বোর্ড, বছর, সেট ও প্রশ্ন নম্বরের পূর্ণ উদ্ধৃতি ছাড়া কোনো প্রশ্নকে বিগত বোর্ড প্রশ্ন বলা হবে না। বর্তমান ব্যাংকের প্রতিটি প্রশ্ন নিজস্ব অনুশীলন এবং তার প্রকৃত শ্রেণি অনুযায়ী চিহ্নিত।",
} as const;

export const mcqQualityAudit = {
  status: "human-review-required",
  checkedSubjects: 0,
  totalSubjects: 7,
  rule: "Automated checks can detect missing options, duplicate prompts and invalid answer indexes, but only a qualified subject reviewer can approve ambiguity, textbook level, language quality and distractor validity.",
  ruleBn: "স্বয়ংক্রিয় যাচাই অনুপস্থিত বিকল্প, পুনরাবৃত্ত প্রশ্ন ও ভুল answer index ধরতে পারে; কিন্তু দ্ব্যর্থতা, পাঠ্যবইয়ের স্তর, ভাষার স্বাভাবিকতা ও distractor-এর যথার্থতা কেবল যোগ্য বিষয়ভিত্তিক পর্যালোচক অনুমোদন করবেন।",
  criteria: [
    { id: "single-answer", label: "Exactly one unquestionably correct answer", labelBn: "একটিমাত্র প্রশ্নাতীত সঠিক উত্তর" },
    { id: "ambiguity", label: "No ambiguous stem or options", labelBn: "প্রশ্ন বা বিকল্পে কোনো দ্ব্যর্থতা নেই" },
    { id: "distractors", label: "Plausible but demonstrably incorrect distractors", labelBn: "বিশ্বাসযোগ্য কিন্তু স্পষ্টভাবে ভুল distractor" },
    { id: "explanation", label: "Chapter-specific answer and wrong-option explanation", labelBn: "অধ্যায়ভিত্তিক সঠিক উত্তর ও ভুল বিকল্পের ব্যাখ্যা" },
    { id: "difficulty", label: "Accurate Foundation, Standard or Challenge label", labelBn: "সঠিক Foundation, Standard বা Challenge স্তর" },
    { id: "language", label: "Natural Bangla or correct English-subject wording", labelBn: "স্বাভাবিক বাংলা বা English বিষয়ের নির্ভুল ভাষা" },
    { id: "variation", label: "No repeated stem, option or reasoning pattern", labelBn: "একই প্রশ্ন, বিকল্প বা reasoning pattern-এর পুনরাবৃত্তি নেই" },
    { id: "level", label: "Genuine HSC XI–XII textbook difficulty", labelBn: "প্রকৃত HSC একাদশ–দ্বাদশ শ্রেণির মান" },
    { id: "cognitive-balance", label: "Balanced recall, understanding and application", labelBn: "স্মরণ, অনুধাবন ও প্রয়োগের ভারসাম্য" },
  ],
  decisions: ["Approved", "Correction required", "Rejected"],
  requiredRecord: ["Question ID", "Subject", "Chapter", "Reviewer name and role", "Textbook/edition/page", "Decision", "Correction note", "Review date"],
  subjects: [
    { id: "accounting", label: "Accounting", labelBn: "হিসাববিজ্ঞান", status: "pending", specialistFocus: "classification, entries, calculations and accounting terminology", specialistFocusBn: "শ্রেণিবিন্যাস, জাবেদা, হিসাব ও হিসাববিজ্ঞানের পরিভাষা" },
    { id: "finance", label: "Finance & Banking", labelBn: "ফিন্যান্স ও ব্যাংকিং", status: "pending", specialistFocus: "formula conditions, numerical decisions and banking terminology", specialistFocusBn: "সূত্রের শর্ত, গাণিতিক সিদ্ধান্ত ও ব্যাংকিং পরিভাষা" },
    { id: "business", label: "Business Organisation & Management", labelBn: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", status: "pending", specialistFocus: "principle-to-case application and closely related concepts", specialistFocusBn: "নীতি থেকে ঘটনার প্রয়োগ ও কাছাকাছি ধারণার পার্থক্য" },
    { id: "economics", label: "Economics", labelBn: "অর্থনীতি", status: "pending", specialistFocus: "ceteris-paribus conditions, tables, graphs and causal reasoning", specialistFocusBn: "অন্যান্য অবস্থা অপরিবর্তিত থাকার শর্ত, সারণি, রেখাচিত্র ও কার্যকারণ" },
    { id: "civics", label: "Civics & Good Governance", labelBn: "পৌরনীতি ও সুশাসন", status: "pending", specialistFocus: "constitutional concepts, institutions and precise terminology", specialistFocusBn: "সাংবিধানিক ধারণা, প্রতিষ্ঠান ও নির্ভুল পরিভাষা" },
    { id: "history", label: "History", labelBn: "ইতিহাস", status: "pending", specialistFocus: "dates, chronology, evidence and interpretation", specialistFocusBn: "তারিখ, কালক্রম, প্রমাণ ও ব্যাখ্যা" },
    { id: "english", label: "English", labelBn: "English", status: "pending", specialistFocus: "source text, grammar rules, context and natural option wording", specialistFocusBn: "source text, grammar rules, context ও স্বাভাবিক option wording" },
  ],
} as const;

export const aiCqAssessmentReadiness = {
  status: "local-only",
  enabled: false,
  studentLabel: "Local PDF self-review — no AI assessment",
  studentLabelBn: "লোকাল PDF self-review — AI মূল্যায়ন নয়",
  releaseRule: "AI scoring must remain disabled until every security, recognition, rubric, correction, privacy and abuse-control gate has production evidence.",
  releaseRuleBn: "নিরাপত্তা, লেখা শনাক্তকরণ, rubric, সংশোধন, গোপনীয়তা ও অপব্যবহার নিয়ন্ত্রণের প্রতিটি ধাপ production evidence-সহ প্রস্তুত না হওয়া পর্যন্ত AI scoring বন্ধ থাকবে।",
  gates: [
    { id: "secure-upload", label: "Secure server-side PDF upload", labelBn: "নিরাপদ server-side PDF upload" },
    { id: "handwriting", label: "Bangla handwriting recognition", labelBn: "বাংলা হাতের লেখা শনাক্তকরণ" },
    { id: "segmentation", label: "Page, answer-part and ক/খ/গ/ঘ detection", labelBn: "পৃষ্ঠা, উত্তরাংশ ও ক/খ/গ/ঘ শনাক্তকরণ" },
    { id: "matching", label: "Question-to-answer matching", labelBn: "প্রশ্নের সঙ্গে উত্তর মিলানো" },
    { id: "rubric", label: "1+2+3+4 rubric scoring with evidence", labelBn: "প্রমাণসহ ১+২+৩+৪ rubric scoring" },
    { id: "confidence", label: "Confidence warnings and low-confidence fallback", labelBn: "confidence warning ও অনিশ্চিত ফলের fallback" },
    { id: "correction", label: "Human correction of extracted text", labelBn: "শনাক্ত করা লেখা মানুষ দিয়ে সংশোধন" },
    { id: "privacy", label: "Explicit privacy consent and retention notice", labelBn: "স্পষ্ট privacy consent ও retention notice" },
    { id: "deletion", label: "Verified automatic file deletion", labelBn: "যাচাইকৃত স্বয়ংক্রিয় file deletion" },
    { id: "abuse", label: "Usage limits, malware scanning and abuse protection", labelBn: "usage limit, malware scanning ও abuse protection" },
  ].map((gate) => ({ ...gate, status: "not-implemented" as const })),
} as const;

export type PreviousBoardQuestion = {
  id: string;
  subjectId: string;
  paper: "1st Paper" | "2nd Paper" | "Full Subject";
  chapterTitle: string;
  board: string;
  year: number;
  set: string;
  questionNumber: string;
  questionType: "MCQ" | "CQ" | "Written";
  prompt: string;
  originalDocumentUrl: string;
  scanPage: string;
  sourceUrl: string;
  verifiedOn: string;
  verifiedBy: string;
  tags: string[];
};

export const previousBoardArchive = {
  status: "intake-ready",
  records: [] as PreviousBoardQuestion[],
  boards: ["Barishal", "Chattogram", "Cumilla", "Dhaka", "Dinajpur", "Jashore", "Mymensingh", "Rajshahi", "Sylhet", "Madrasah", "Technical"],
  years: [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015],
  requiredFields: ["subjectId", "paper", "chapterTitle", "board", "year", "set", "questionNumber", "questionType", "prompt", "originalDocumentUrl", "scanPage", "sourceUrl", "verifiedOn", "verifiedBy", "tags"],
  admissionRule: "A question enters the archive only after its scan or official source is checked and every citation field is complete.",
  admissionRuleBn: "স্ক্যান বা অফিসিয়াল উৎস যাচাই এবং সব উদ্ধৃতি-ঘর পূর্ণ হওয়ার পরই কোনো প্রশ্ন আর্কাইভে যুক্ত হবে।",
} as const;

export const boardPaperSourceCatalog = {
  checkedOn: "20 October 2026",
  checkedOnBn: "২০ অক্টোবর ২০২৬",
  policy: "Discovery links are not copied into HSC2Plus or called verified papers until a legible original PDF/scan and its board, year, subject, paper and set can be checked together.",
  policyBn: "পাঠযোগ্য মূল PDF/স্ক্যান এবং একই সঙ্গে বোর্ড, বছর, বিষয়, পত্র ও সেট যাচাই না হওয়া পর্যন্ত অনুসন্ধানে পাওয়া কোনো লিংক HSC2Plus-এ কপি করা বা যাচাইকৃত প্রশ্নপত্র বলা হবে না।",
  sources: [
    {
      id: "dhaka-board-moderator-manuals",
      kind: "official-pattern",
      label: "Dhaka Board question-setter and moderator manuals",
      labelBn: "ঢাকা বোর্ড প্রশ্নপ্রণেতা ও মডারেটর প্রশিক্ষণ ম্যানুয়াল",
      coverage: "Accounting, Business Organisation, Civics, Economics, Islamic History and related subjects",
      coverageBn: "হিসাববিজ্ঞান, ব্যবসায় সংগঠন, পৌরনীতি, অর্থনীতি, ইসলামের ইতিহাসসহ সংশ্লিষ্ট বিষয়",
      url: "https://dhakaeducationboard.gov.bd/index.php/site/cms/24857?w=on",
      status: "official-reference",
      noteBn: "অফিসিয়াল প্রশ্ন-কাঠামো যাচাইয়ের উৎস; এটি বিগত বোর্ড প্রশ্নপত্র নয়।",
    },
    {
      id: "satt-accounting-index",
      kind: "discovery-index",
      label: "Accounting 1st Paper multi-board index",
      labelBn: "হিসাববিজ্ঞান ১ম পত্র বহু-বোর্ড সূচি",
      coverage: "Board/year filters and printable question collections",
      coverageBn: "বোর্ড ও বছরভিত্তিক সূচি এবং print/PDF collection",
      url: "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0",
      status: "scan-audit-required",
      noteBn: "তৃতীয় পক্ষের অনুসন্ধানসূচি; প্রতিটি প্রশ্নপত্র আলাদাভাবে মূল স্ক্যানের সঙ্গে মিলাতে হবে।",
    },
    {
      id: "satt-economics-index",
      kind: "discovery-index",
      label: "Economics 1st Paper multi-board index",
      labelBn: "অর্থনীতি ১ম পত্র বহু-বোর্ড সূচি",
      coverage: "Multiple boards and years with MCQ/CQ listings",
      coverageBn: "একাধিক বোর্ড ও বছরের MCQ/CQ তালিকা",
      url: "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0",
      status: "scan-audit-required",
      noteBn: "প্রশ্ন পাওয়া যাওয়ার সম্ভাব্য সূচি; আর্কাইভে প্রকাশের আগে উৎসের ছবি, সেট এবং প্রশ্নপত্র যাচাই বাধ্যতামূলক।",
    },
    {
      id: "satt-bangla-board-index",
      kind: "discovery-index",
      label: "Bangla 1st and 2nd Paper multi-board index",
      labelBn: "বাংলা ১ম ও ২য় পত্রের বহু-বোর্ড সূচি",
      coverage: "2025 board-specific Bangla papers plus older paginated collections; question order, marks and topic labels are visible",
      coverageBn: "২০২৫ সালের বোর্ডভিত্তিক বাংলা প্রশ্ন এবং আগের বছরের paginated collection; প্রশ্নের ক্রম, নম্বর ও বিষয়ভিত্তিক tag দেখা যায়",
      url: "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-82989",
      status: "scan-audit-required",
      noteBn: "বোর্ড, বছর ও প্রশ্নের ক্রম শনাক্ত করা যায়; তবে তৃতীয় পক্ষের প্রতিলিপি বলে মূল প্রশ্নপত্র/স্ক্যানের সঙ্গে মিলিয়ে তারপর আর্কাইভে প্রকাশ করতে হবে।",
    },
    {
      id: "scribd-bangla-2-board-collection",
      kind: "discovery-index",
      label: "Bangla 2nd Paper all-board compiled document",
      labelBn: "বাংলা ২য় পত্র সকল বোর্ডের সংকলিত নথি",
      coverage: "Thirty-page secondary compilation useful for finding candidate questions and cross-checking year/board coverage",
      coverageBn: "৩০ পৃষ্ঠার secondary compilation; সম্ভাব্য প্রশ্ন খোঁজা ও বছর/বোর্ড coverage cross-check করতে উপযোগী",
      url: "https://www.scribd.com/document/819986292/Bangla-2nd-paper-all-board-question",
      status: "scan-audit-required",
      noteBn: "OCR-এ বিকৃতি আছে এবং নথিটি copyright-protected; bulk copy নয়—শুধু candidate discovery ও মূল প্রশ্নপত্রের সঙ্গে মিলানোর কাজে ব্যবহার করা হবে।",
    },
  ],
} as const;

export const boardQuestionMatchRegister = {
  checkedOn: "20 October 2026",
  subjectId: "bangla",
  status: "secondary-source-match-complete",
  rule: "A match proves that the same board/year/paper or task family appears in the discovery source and supplied study material. It does not by itself prove an authentic original board scan.",
  ruleBn: "match বলতে discovery source ও দেওয়া সহায়ক উপকরণে একই বোর্ড/বছর/পত্র বা একই task family পাওয়া বোঝায়; এটি একা মূল বোর্ড স্ক্যানের সত্যতা প্রমাণ করে না।",
  sourceIds: ["satt-bangla-board-index", "bangla-1-question-guide", "bangla-2-question-guide", "scribd-bangla-2-board-collection"],
  sattInventory: [
    { year: 2025, firstPaper: ["Mymensingh", "Barishal", "Dinajpur", "Cumilla", "Jashore", "Sylhet", "Chattogram", "Rajshahi", "Dhaka"], secondPaper: ["Mymensingh", "Barishal", "Dinajpur", "Cumilla", "Jashore", "Sylhet", "Chattogram", "Rajshahi", "Dhaka"] },
    { year: 2024, firstPaper: ["Mymensingh", "Barishal", "Dinajpur", "Cumilla", "Jashore", "Chattogram", "Rajshahi", "Dhaka", "Madrasah"], secondPaper: ["Mymensingh", "Barishal", "Dinajpur", "Cumilla", "Jashore", "Chattogram", "Rajshahi", "Dhaka", "Madrasah"] },
    { year: 2023, firstPaper: ["Mymensingh", "Barishal", "Dinajpur", "Cumilla", "Jashore", "Sylhet", "Chattogram", "Rajshahi", "Dhaka"], secondPaper: ["Mymensingh", "Barishal", "Dinajpur", "Cumilla", "Jashore", "Sylhet", "Rajshahi", "Dhaka"] },
    { year: 2018, firstPaper: ["Combined boards"], secondPaper: [] },
    { year: 2017, firstPaper: ["Barishal", "Jashore", "Sylhet", "Chattogram", "Cumilla", "Dinajpur", "Rajshahi", "Dhaka"], secondPaper: [] },
    { year: 2016, firstPaper: ["Barishal", "Jashore", "Sylhet", "Chattogram", "Cumilla", "Dinajpur", "Rajshahi", "Dhaka"], secondPaper: [] },
  ],
  secondPaperTaskMatches: [
    { order: 1, task: "Rules of Bangla pronunciation", taskBn: "বাংলা উচ্চারণের নিয়ম", guideUnit: "01_Bangla_2nd_Question_1_Rules_of_Bangla_Pronunciation.pdf", sattEvidence: "Dhaka and Mymensingh 2025 question 1", scribdEvidence: "compiled document candidate", match: "exact-topic" },
    { order: 2, task: "Rules of Bangla spelling", taskBn: "বাংলা বানানের নিয়ম", guideUnit: "02_Bangla_2nd_Question_2_Rules_of_Bangla_Spelling.pdf", sattEvidence: "Dhaka and Mymensingh 2025 question 2", scribdEvidence: "compiled document candidate", match: "exact-topic" },
    { order: 3, task: "Grammatical word classification", taskBn: "ব্যাকরণিক শব্দশ্রেণি", guideUnit: "03_Bangla_2nd_Question_3_Grammatical_Word_Classification.pdf", sattEvidence: "Dhaka and Mymensingh 2025 question 3", scribdEvidence: "compiled document candidate", match: "exact-topic" },
    { order: 4, task: "Prefix, suffix and compound", taskBn: "উপসর্গ, প্রত্যয় ও সমাস", guideUnit: "04_Bangla_2nd_Question_4_Prefix_Suffix_and_Samas.pdf", sattEvidence: "Dhaka and Mymensingh 2025 question 4", scribdEvidence: "compiled document candidate", match: "exact-topic" },
    { order: 5, task: "Syntax and sentence transformation", taskBn: "বাক্যতত্ত্ব ও বাক্য রূপান্তর", guideUnit: "05_Bangla_2nd_Question_5_Syntax.pdf", sattEvidence: "Dhaka and Mymensingh 2025 question 5", scribdEvidence: "compiled document candidate", match: "exact-topic" },
    { order: 6, task: "Misuse and proper use", taskBn: "অপপ্রয়োগ ও শুদ্ধ প্রয়োগ", guideUnit: "06_Bangla_2nd_Question_6_Misuse_and_Proper_Use_of_Bangla.pdf", sattEvidence: "Dhaka and Mymensingh 2025 question 6", scribdEvidence: "compiled document candidate", match: "exact-topic" },
    { order: 7, task: "Technical terms and translation", taskBn: "পারিভাষিক শব্দ ও অনুবাদ", guideUnit: "07_Bangla_2nd_Question_7_Technical_Terms_and_Translation.pdf", sattEvidence: "paper section is behind Satt pagination/login", scribdEvidence: "technical-term and translation section visible in OCR", match: "structural" },
    { order: 8, task: "Diary, speech and report", taskBn: "দিনলিপি, ভাষণ ও প্রতিবেদন", guideUnit: "08_Bangla_2nd_Question_8_Diary_Writing_Speech_and_Report.pdf", sattEvidence: "paper section is behind Satt pagination/login", scribdEvidence: "writing-section compilation", match: "structural" },
    { order: 9, task: "Email, SMS and formal letters", taskBn: "ই-মেইল, SMS ও প্রাতিষ্ঠানিক পত্র", guideUnit: "09_Bangla_2nd_Question_9_Email_SMS_and_Formal_Letters.pdf", sattEvidence: "paper section is behind Satt pagination/login", scribdEvidence: "writing-section compilation", match: "structural" },
    { order: 10, task: "Summary, theme and amplification", taskBn: "সারাংশ, সারমর্ম ও ভাব-সম্প্রসারণ", guideUnit: "10_Bangla_2nd_Question_10_Summary_Theme_and_Amplification.pdf", sattEvidence: "paper section is behind Satt pagination/login", scribdEvidence: "writing-section compilation", match: "structural" },
    { order: 11, task: "Dialogue and short story", taskBn: "সংলাপ ও ক্ষুদেগল্প", guideUnit: "11_Bangla_2nd_Question_11_Dialogue_and_Short_Story_Writing.pdf", sattEvidence: "paper section is behind Satt pagination/login", scribdEvidence: "writing-section compilation", match: "structural" },
    { order: 12, task: "Essay and article", taskBn: "প্রবন্ধ ও নিবন্ধ", guideUnit: "12_Bangla_2nd_Question_12_Essay_and_Article_Writing.pdf", sattEvidence: "paper section is behind Satt pagination/login", scribdEvidence: "writing-section compilation", match: "structural" },
  ],
  firstPaperMatch: {
    guideId: "bangla-1-question-guide",
    sattCoverage: "MCQ and CQ paper pages identified by board and year",
    matchingBasis: ["prose/poetry title", "stimulus topic", "MCQ option set", "CQ 1+2+3+4 structure"],
    status: "paper-index-matched-question-level-review-required",
  },
  unresolved: [
    "Satt second-page question details require login for some papers",
    "The Scribd OCR is unreliable for exact Bangla spelling",
    "Original scan page and set/code are still required before authentic-archive publication",
  ],
} as const;

export const allSubjectBoardQuestionSurvey = {
  checkedOn: "20 October 2026",
  subjectCount: 13,
  coveredSubjectIds: ["bangla", "english", "ict", "accounting", "finance", "business", "economics", "civics", "geography", "logic", "statistics", "islamic_history", "history"],
  status: "all-subject-discovery-and-reference-match-complete",
  admissionRule: "Satt pages locate candidate board/year/paper/question records. Supplied books and guides cross-check chapter, task type and solution method. Only an original or official paper can move a candidate into the authentic archive.",
  subjects: [
    { subjectId: "bangla", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-82989"], references: ["bangla-1-question-guide", "bangla-2-question-guide", "banglaSecondPaperGuideSources", "scribd-bangla-2-board-collection"], match: "paper-and-task-family", remaining: "original scans and set/code" },
    { subjectId: "english", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=english-for-today-47336", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=english-78800"], references: ["englishForTodayUnits", "englishSecondPaperReferenceChapters", "user-supplied English 1st model sets", "user-supplied English 2nd grammar and writing PDFs"], match: "paper-and-task-family", remaining: "original paper scans and teacher-approved answer keys" },
    { subjectId: "ict", papers: ["Full Subject"], sattUrls: ["https://sattacademy.com/board-exams?subject=%E0%A6%A4%E0%A6%A5%E0%A7%8D%E0%A6%AF-%E0%A6%93-%E0%A6%AF%E0%A7%8B%E0%A6%97%E0%A6%BE%E0%A6%AF%E0%A7%8B%E0%A6%97-%E0%A6%AA%E0%A7%8D%E0%A6%B0%E0%A6%AF%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF"], references: ["ict-cq-scan-369", "ict-mcq-guide-28", "ict-akkharpatra-full-guide", "ictReferenceChapters"], match: "chapter-question-and-code-task", remaining: "original diagrams/code screenshots and board scan pages" },
    { subjectId: "accounting", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%B9%E0%A6%BF%E0%A6%B8%E0%A6%BE%E0%A6%AC%E0%A6%AC%E0%A6%BF%E0%A6%9C%E0%A7%8D%E0%A6%9E%E0%A6%BE%E0%A6%A8-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["accounting-1-support", "accounting-2-support", "accountingReferenceChapters", "accountingSecondPaperReferenceChapters"], match: "chapter-calculation-and-statement", remaining: "original tables/figures and reviewer-recalculated answers" },
    { subjectId: "finance", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AB%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%AC%E0%A6%BF%E0%A6%AE%E0%A6%BE-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AB%E0%A6%BF%E0%A6%A8%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8%E0%A7%8D%E0%A6%B8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%82%E0%A6%95%E0%A6%BF%E0%A6%82-%E0%A6%93-%E0%A6%AC%E0%A6%BF%E0%A6%AE%E0%A6%BE-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["finance-1-chapter-pack-2026", "finance-2-chapter-pack-2026", "finance-2-mcq-pack-2026", "financeReferenceChapters"], match: "chapter-formula-and-decision", remaining: "original cash-flow/table images and reviewer-recalculated answers" },
    { subjectId: "business", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A6%BE%E0%A7%9F-%E0%A6%B8%E0%A6%82%E0%A6%97%E0%A6%A0%E0%A6%A8-%E0%A6%93-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%AA%E0%A6%A8%E0%A6%BE-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["business-1-master-note", "businessFirstPaperReferenceChapters", "businessSecondPaperReferenceChapters", "user-supplied second-paper guide"], match: "chapter-principle-and-case", remaining: "direct second-paper Satt index confirmation and original scans" },
    { subjectId: "economics", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%85%E0%A6%B0%E0%A7%8D%E0%A6%A5%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF-12603"], references: ["economics-1-support", "economics-2-support", "economicsReferenceChapters", "user-supplied chapter-wise first-paper files"], match: "chapter-graph-formula-and-case", remaining: "paper-specific index split and original graph/table scans" },
    { subjectId: "civics", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AA%E0%A7%8C%E0%A6%B0%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF-%E0%A6%93-%E0%A6%B8%E0%A7%81%E0%A6%B6%E0%A6%BE%E0%A6%B8%E0%A6%A8", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AA%E0%A7%8C%E0%A6%B0%E0%A6%A8%E0%A7%80%E0%A6%A4%E0%A6%BF-%E0%A6%93-%E0%A6%B8%E0%A7%81%E0%A6%B6%E0%A6%BE%E0%A6%B8%E0%A6%A8-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["civicsReferenceChapters", "civicsSecondPaperReferenceChapters", "user-supplied Civics first and second-paper readers"], match: "chapter-concept-and-analytical-case", remaining: "original scans and constitutional terminology review" },
    { subjectId: "geography", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AD%E0%A7%82%E0%A6%97%E0%A7%8B%E0%A6%B2-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AD%E0%A7%82%E0%A6%97%E0%A7%8B%E0%A6%B2-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["geographyReferenceChapters", "user-supplied Geography first and second-paper books"], match: "chapter-map-diagram-and-case", remaining: "original maps, figures and scan pages" },
    { subjectId: "logic", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AF%E0%A7%81%E0%A6%95%E0%A7%8D%E0%A6%A4%E0%A6%BF%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE"], references: ["logic-1-scribd-reference", "logic-2-scribd-reference", "logicReferenceChapters"], match: "chapter-rule-symbol-and-argument", remaining: "paper-specific index split and original symbol/diagram scans" },
    { subjectId: "statistics", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%B8%E0%A6%82%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%B8%E0%A6%82%E0%A6%96%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%A8-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["statisticsFirstPaperReferenceChapters", "statisticsSecondPaperReferenceChapters", "statistics-note-sample", "user-supplied Statistics books"], match: "chapter-table-formula-and-graph", remaining: "original tables/graphs and independently recalculated keys" },
    { subjectId: "islamic_history", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%87%E0%A6%B8%E0%A6%B2%E0%A6%BE%E0%A6%AE%E0%A7%87%E0%A6%B0-%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-%E0%A6%93-%E0%A6%B8%E0%A6%82%E0%A6%B8%E0%A7%8D%E0%A6%95%E0%A7%83%E0%A6%A4%E0%A6%BF-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0-39996"], references: ["islamicHistoryFirstPaperReferenceChapters", "islamicHistorySecondPaperReferenceChapters", "user-supplied Islamic History first and second-paper guides"], match: "chapter-date-event-and-analysis", remaining: "direct second-paper Satt index confirmation and historical fact review" },
    { subjectId: "history", papers: ["1st Paper", "2nd Paper"], sattUrls: ["https://sattacademy.com/guide/%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-%E0%A7%A7%E0%A6%AE-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0", "https://sattacademy.com/guide/%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0", "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%87%E0%A6%A4%E0%A6%BF%E0%A6%B9%E0%A6%BE%E0%A6%B8-%E0%A7%A8%E0%A7%9F-%E0%A6%AA%E0%A6%A4%E0%A7%8D%E0%A6%B0"], references: ["historyFirstPaperReferenceChapters", "historySecondPaperReferenceChapters", "383-page user-supplied History 1st Paper guide scan", "Scribd History 2nd Paper reference", "Satt 2026 first and second-paper candidate collections"], match: "paper-chapter-lesson-and-question-family", remaining: "original board-paper scan pages, set/code and specialist chronology review" },
  ],
  missingMaterialPriority: [
    { priority: 1, subjectId: "all", need: "Readable original board-paper scans/PDFs showing board, year, subject, paper and set/code" },
    { priority: 2, subjectId: "accounting-finance-statistics", need: "Teacher-checked numerical answer keys so every working can be independently recalculated" },
    { priority: 3, subjectId: "history-civics-islamic_history", need: "Subject-specialist review of chronology, names, constitutional terms and historical interpretation" },
    { priority: 4, subjectId: "english-bangla", need: "Teacher-approved writing samples and marking notes for open-ended answers" },
  ],
} as const;

export const boardArchiveCoverage = {
  checkedOn: "30 September 2026",
  checkedOnBn: "৩০ সেপ্টেম্বর ২০২৬",
  releaseState: "evidence-acquisition",
  verifiedQuestionTotal: 0,
  portalAuditRule: "Finding an official board portal does not verify a question. A legible paper with board, year, subject, set/code and question number is still required.",
  portalAuditRuleBn: "অফিসিয়াল বোর্ড পোর্টাল পাওয়া মানেই প্রশ্ন যাচাই নয়। বোর্ড, বছর, বিষয়, সেট/কোড ও প্রশ্ন নম্বরসহ পাঠযোগ্য প্রশ্নপত্র এখনও বাধ্যতামূলক।",
  boards: [
    { id: "dhaka", label: "Dhaka", labelBn: "ঢাকা", portalStatus: "checked", paperStatus: "not-located", evidence: "Official portal, HSC Corner and result archive checked; no citable question-paper library located.", evidenceBn: "অফিসিয়াল পোর্টাল, HSC Corner ও ফলাফলের আর্কাইভ দেখা হয়েছে; উদ্ধৃতিযোগ্য প্রশ্নপত্রের সংগ্রহ পাওয়া যায়নি।" },
    { id: "barishal", label: "Barishal", labelBn: "বরিশাল", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "chattogram", label: "Chattogram", labelBn: "চট্টগ্রাম", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "cumilla", label: "Cumilla", labelBn: "কুমিল্লা", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "dinajpur", label: "Dinajpur", labelBn: "দিনাজপুর", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "jashore", label: "Jashore", labelBn: "যশোর", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "mymensingh", label: "Mymensingh", labelBn: "ময়মনসিংহ", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "rajshahi", label: "Rajshahi", labelBn: "রাজশাহী", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "sylhet", label: "Sylhet", labelBn: "সিলেট", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "madrasah", label: "Madrasah", labelBn: "মাদ্রাসা", portalStatus: "queued", paperStatus: "not-audited" },
    { id: "technical", label: "Technical", labelBn: "কারিগরি", portalStatus: "queued", paperStatus: "not-audited" },
  ],
} as const;

export const boardSourceIntakeRegistry = {
  checkedOn: "20 October 2026",
  checkedOnBn: "২০ অক্টোবর ২০২৬",
  sourcePolicy: "Only an official board/NCTB document or a legible original scan with board, year, set and question number can advance to transcription.",
  sourcePolicyBn: "শুধু অফিসিয়াল বোর্ড/NCTB নথি অথবা বোর্ড, বছর, সেট ও প্রশ্ন নম্বরসহ পাঠযোগ্য মূল স্ক্যান transcription ধাপে যেতে পারবে।",
  summary: {
    sourcesChecked: 5,
    authenticPapersLocated: 0,
    transcriptionReady: 0,
    publishedQuestions: 0,
  },
  stages: [
    { id: "source", label: "Official source located", labelBn: "অফিসিয়াল উৎস শনাক্ত" },
    { id: "paper", label: "Question paper located", labelBn: "প্রশ্নপত্র পাওয়া গেছে" },
    { id: "citation", label: "Citation complete", labelBn: "উদ্ধৃতি সম্পূর্ণ" },
    { id: "transcription", label: "Academic transcription checked", labelBn: "একাডেমিক প্রতিলিপি যাচাই" },
    { id: "publish", label: "Archive publication approved", labelBn: "আর্কাইভ প্রকাশ অনুমোদিত" },
  ],
  sources: [
    {
      id: "dhaka-board-official",
      label: "Dhaka Education Board official portal",
      labelBn: "ঢাকা শিক্ষা বোর্ড অফিসিয়াল পোর্টাল",
      url: "https://dhakaeducationboard.gov.bd/",
      sourceLocated: true,
      paperLocated: false,
      note: "Official portal, HSC Corner and result archive confirmed; no citable HSC Commerce/Humanities question-paper library was located in this audit.",
      noteBn: "অফিসিয়াল পোর্টাল, HSC Corner ও ফলাফলের আর্কাইভ দেখা হয়েছে; এই যাচাইয়ে উদ্ধৃতিযোগ্য HSC ব্যবসায় শিক্ষা/মানবিক প্রশ্নপত্রের সংগ্রহ পাওয়া যায়নি।",
    },
    {
      id: "nctb-question-pattern",
      label: "NCTB HSC question-pattern and sample reference",
      labelBn: "NCTB HSC প্রশ্নের ধরন ও নমুনা রেফারেন্স",
      url: "https://nctb.gov.bd/pages/static-pages/6922dff5933eb65569e24d31",
      sourceLocated: true,
      paperLocated: false,
      note: "Useful for pattern and mark-distribution review; it is not evidence for a claimed past-board question.",
      noteBn: "প্রশ্নের ধরন ও নম্বর বিভাজন যাচাইয়ে উপযোগী; এটি কোনো দাবিকৃত বিগত বোর্ড প্রশ্নের প্রমাণ নয়।",
    },
    {
      id: "nctb-hsc-curriculum-source",
      label: "NCTB higher-secondary curriculum files",
      labelBn: "NCTB উচ্চ মাধ্যমিক শিক্ষাক্রম ফাইল",
      url: "https://nctb.gov.bd/pages/files/6922dbc6933eb65569e0c702",
      sourceLocated: true,
      paperLocated: false,
      note: "Curriculum authority reference only; paper images and exact board-question citations are still required.",
      noteBn: "শিক্ষাক্রম কর্তৃপক্ষের রেফারেন্স মাত্র; প্রশ্নপত্রের ছবি ও সুনির্দিষ্ট বোর্ড-প্রশ্ন উদ্ধৃতি এখনও প্রয়োজন।",
    },
    {
      id: "satt-bangla-board-index",
      label: "Satt Academy HSC Bangla board-question index",
      labelBn: "Satt Academy HSC বাংলা বোর্ড-প্রশ্ন সূচি",
      url: "https://sattacademy.com/board-exams/%E0%A6%8F%E0%A6%95%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%A6%E0%A7%8D%E0%A6%AC%E0%A6%BE%E0%A6%A6%E0%A6%B6-%E0%A6%B6%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%A3%E0%A6%BF?subject=%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-82989",
      sourceLocated: true,
      paperLocated: false,
      note: "Board/year/paper pages and readable transcriptions are available, but the source is a third-party index rather than an original board scan.",
      noteBn: "বোর্ড/বছর/পত্রভিত্তিক পৃষ্ঠা ও পাঠযোগ্য প্রতিলিপি আছে; তবে এটি মূল বোর্ড স্ক্যান নয়, তৃতীয় পক্ষের সূচি।",
    },
    {
      id: "scribd-bangla-2-board-collection",
      label: "Scribd Bangla 2nd Paper all-board compilation",
      labelBn: "Scribd বাংলা ২য় পত্র সকল বোর্ড সংকলন",
      url: "https://www.scribd.com/document/819986292/Bangla-2nd-paper-all-board-question",
      sourceLocated: true,
      paperLocated: false,
      note: "Useful as a secondary cross-check only; OCR corruption and copyright restrictions prevent direct bulk ingestion.",
      noteBn: "শুধু secondary cross-check হিসেবে উপযোগী; OCR বিকৃতি ও copyright সীমাবদ্ধতার কারণে সরাসরি bulk import করা হবে না।",
    },
  ],
} as const;

export const priorityCompletionLedger = {
  checkedOn: "8 October 2026",
  checkedOnBn: "৮ অক্টোবর ২০২৬",
  internal: [
    { id: "coverage", label: "All learning-unit packs", labelBn: "সব শেখার ইউনিটের প্যাক", status: "complete", evidence: "356/356 group learning-unit records include lessons, notes and practice." },
    { id: "notes", label: "Three note modes and printable books", labelBn: "তিন ধরনের নোট ও প্রিন্টযোগ্য অধ্যায় বই", status: "complete", evidence: "Detailed, revision and last-minute modes are available for every chapter." },
    { id: "questions", label: "Chapter-specific renewable question banks", labelBn: "অধ্যায়ভিত্তিক নবায়নযোগ্য প্রশ্নভান্ডার", status: "complete", evidence: "Every chapter keeps at least 32 chapter-linked items after generic-template and duplicate removal; practice rotation combines the relevant chapter pools." },
    { id: "answers", label: "Answers and marking frameworks", labelBn: "উত্তর ও নম্বর নির্দেশিকা", status: "complete", evidence: "CQ uses 1+2+3+4 marking; written and MCQ items include explanations." },
    { id: "exam", label: "Board-format Exam Center", labelBn: "বোর্ড-ফরম্যাট পরীক্ষা কেন্দ্র", status: "complete", evidence: "100 marks: 30 MCQ + 7 CQ, 180 minutes, review and recovery report." },
    { id: "quality", label: "Automated database and interface safeguards", labelBn: "স্বয়ংক্রিয় ডেটাবেস ও ইন্টারফেস সুরক্ষা", status: "complete", evidence: "Duplicate guards, answer-position balance, responsive rules, focus states and offline update controls are enforced. Physical-device approval remains separate." },
    { id: "review-handoff", label: "Reviewer and board-paper handoff packs", labelBn: "পর্যালোচক ও বোর্ড প্রশ্নপত্র হ্যান্ডঅফ প্যাক", status: "complete", evidence: "Downloadable chapter review registers, evidence manifests and citation-first paper intake templates are available." },
  ],
  external: [
    { id: "curriculum", label: "Direct NCTB paper, chapter and edition comparison", labelBn: "NCTB পত্র, অধ্যায়ক্রম ও সংস্করণ সরাসরি মিল", status: "evidence-required", owner: "Qualified subject reviewer + approved books/syllabi", progress: "13 subjects source-traced; 11 official-listing links recorded; paper/chapter/edition pending" },
    { id: "reviewer", label: "Academic reviewer sign-off", labelBn: "একাডেমিক পর্যালোচকের অনুমোদন", status: "reviewer-required", owner: "Qualified HSC subject reviewers", progress: "0/356" },
    { id: "archive", label: "Authentic previous-board archive", labelBn: "যাচাইকৃত বিগত বোর্ড আর্কাইভ", status: "source-required", owner: "Legible original/official papers with complete citations", progress: "0 verified" },
    { id: "ai-pdf", label: "AI assessment of uploaded answer PDFs", labelBn: "আপলোড করা উত্তর PDF-এর AI মূল্যায়ন", status: "service-required", owner: "Secure AI service, consent and server-side file handling" },
    { id: "device-qa", label: "Real-device accessibility and performance approval", labelBn: "বাস্তব ডিভাইসে accessibility ও performance অনুমোদন", status: "evidence-required", owner: "Android, iPhone, tablet, Windows and macOS test runs", progress: "0 physical-device runs recorded" },
    { id: "operations", label: "Public operations and legal sign-off", labelBn: "Public operations ও legal sign-off", status: "service-required", owner: "Final domain, analytics disclosure, monitoring, support owner and legal reviewer", progress: "Private preview only" },
  ],
  rule: "Only internal items are marked complete automatically. Evidence-gated items remain open until their named source, reviewer or service is available.",
  ruleBn: "শুধু যাচাইযোগ্য অভ্যন্তরীণ কাজ স্বয়ংক্রিয়ভাবে সম্পূর্ণ দেখানো হয়। প্রয়োজনীয় উৎস, পর্যালোচক বা নিরাপদ সেবা না পাওয়া পর্যন্ত প্রমাণনির্ভর কাজ খোলা থাকবে।",
} as const;

export const releaseReadinessAudit = {
  checkedOn: "8 October 2026",
  language: {
    status: "automated-pass-manual-pending",
    terminology: ["Practice", "Revision", "Test Centre", "Question Archive"],
    automated: [
      "English subject headings and learning content remain English",
      "Bangla-medium subjects use natural Bangla with familiar English academic terms where clearer",
      "Headings wrap cleanly; numerals follow their language context",
    ],
    manual: ["Read every screen aloud on mobile and desktop", "Check mixed-script punctuation and spacing", "Approve subject terminology during academic review"],
  },
  accessibility: {
    status: "structure-ready-manual-pending",
    automated: ["Skip link, focus transfer and visible focus", "Labelled navigation and status regions", "44px touch controls", "Reduced motion, forced colours and iPhone safe areas", "Responsive 200% zoom rules"],
    manual: ["Keyboard-only journeys", "VoiceOver and NVDA", "Heading and live announcements", "200% zoom", "WCAG AA contrast", "Real-device touch targets"],
  },
  performance: {
    status: "budget-pass-device-pending",
    budgets: ["Client chunk gzip ≤ 180 KB", "No eager PDF/image load", "Sized lazy WebP images", "Split data when budget or real-device speed regresses"],
    offline: ["Network-first navigation with offline fallback", "Versioned cache cleanup", "Visible update prompt", "Visited lessons remain offline"],
    manual: ["Production Lighthouse", "Fast 3G with 4× CPU slowdown", "Low-end Android start", "Deploy-update-reload", "Offline chapter revisit"],
  },
  operations: {
    status: "private-preview",
    ready: ["Versioned deployment history", "Owner-private preview", "Progress backup and restore", "Privacy, terms and support pages", "Academic-error report export"],
    blocked: ["Public access decision", "Final domain", "Analytics validation", "Error monitoring", "Named support owner and SLA", "Broken-link monitoring", "Rollback drill", "Backup/recovery drill"],
  },
  legal: {
    status: "product-copy-ready-legal-review-pending",
    covered: ["Independent from NCTB/boards", "Copyright and classroom reuse", "Image credits", "Local-only CQ PDFs", "Academic-error reports", "Board-pattern/authentic-board distinction", "Hosting/analytics disclosure"],
    manual: ["Legal approval", "Match final domain and analytics to policy", "Name a support contact", "Recheck policy before server uploads"],
  },
  launchPath: [
    "Complete direct NCTB mapping",
    "Appoint subject reviewers for all thirteen subjects",
    "Approve 15–20 representative chapters",
    "Audit their complete MCQ and CQ banks",
    "Complete real-device, accessibility and PDF testing",
    "Run a controlled teacher-and-student beta",
    "Resolve academic and usability reports",
    "Expand sign-off to all 356 group learning-unit records",
    "Build the authentic previous-board archive",
    "Complete operations and legal sign-off, then make the site public",
  ],
} as const;

export const curriculumCoverageRegistry = {
  totalUniqueSubjects: 13,
  totalChapterRecords: 356,
  languagePolicy: "Bangla-first; English subject remains English",
  groups: {
    commerce: {
      label: "Commerce",
      labelBn: "ব্যবসায় শিক্ষা",
      chapterRecords: 150,
      subjects: [
        { id: "bangla", label: "Bangla", labelBn: "বাংলা", chapters: 54, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "english", label: "English", labelBn: "ইংরেজি", chapters: 25, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "ict", label: "Information & Communication Technology", labelBn: "তথ্য ও যোগাযোগ প্রযুক্তি", chapters: 6, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "accounting", label: "Accounting", labelBn: "হিসাববিজ্ঞান", chapters: 20, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "finance", label: "Finance, Banking & Insurance", labelBn: "ফিন্যান্স, ব্যাংকিং ও বিমা", chapters: 23, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "business", label: "Business Organisation & Management", labelBn: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", chapters: 22, libraryScope: "full-subject", officialPaperMapping: "under-review" },
      ],
    },
    humanities: {
      label: "Humanities",
      labelBn: "মানবিক",
      chapterRecords: 206,
      subjects: [
        { id: "bangla", label: "Bangla", labelBn: "বাংলা", chapters: 54, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "english", label: "English", labelBn: "ইংরেজি", chapters: 25, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "ict", label: "Information & Communication Technology", labelBn: "তথ্য ও যোগাযোগ প্রযুক্তি", chapters: 6, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "economics", label: "Economics", labelBn: "অর্থনীতি", chapters: 20, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "civics", label: "Civics & Good Governance", labelBn: "পৌরনীতি ও সুশাসন", chapters: 20, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "history", label: "History", labelBn: "ইতিহাস", chapters: 17, libraryScope: "first-and-second-paper", officialPaperMapping: "reference-structure-matched" },
        { id: "logic", label: "Logic", labelBn: "যুক্তিবিদ্যা", chapters: 16, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "islamic_history", label: "Islamic History & Culture", labelBn: "ইসলামের ইতিহাস ও সংস্কৃতি", chapters: 13, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "statistics", label: "Statistics", labelBn: "পরিসংখ্যান", chapters: 17, libraryScope: "full-subject", officialPaperMapping: "under-review" },
        { id: "geography", label: "Geography", labelBn: "ভূগোল", chapters: 18, libraryScope: "full-subject", officialPaperMapping: "under-review" },
      ],
    },
  },
  verification: {
    contentCoverage: "complete",
    officialSourceLinks: "verified",
    subjectPaperMapping: "under-review",
    chapterTitleAndSequence: "under-review",
    editionAndReapproval: "under-review",
  },
} as const;

export const examLibraryByGroup: Record<"commerce" | "humanities", ExamResource[]> = {
  commerce: [
    {
      subject: "Accounting", unit: "Journal and ledger", unitBn: "জাবেদা ও খতিয়ান",
      notes: ["Every transaction has at least two effects; identify the accounts before choosing debit and credit.", "Assets and expenses normally increase on the debit side; liabilities, capital and income normally increase on the credit side.", "A journal records transactions chronologically with narration; the ledger groups them account by account.", "Posting must preserve date, counterpart account and amount, then each ledger account is balanced independently."],
      worked: { problem: "The owner starts a business with Tk 80,000 cash and buys furniture for Tk 15,000 cash. Show the entries and final equation effect.", steps: ["Entry 1: Cash A/C Dr 80,000; Capital A/C Cr 80,000.", "Entry 2: Furniture A/C Dr 15,000; Cash A/C Cr 15,000.", "Post cash: debit 80,000 and credit 15,000, leaving Tk 65,000.", "Furniture balance is Tk 15,000 and capital remains Tk 80,000."], answer: "Assets: cash 65,000 + furniture 15,000 = Tk 80,000; owner’s equity = Tk 80,000." },
      cq: { stimulus: "A trader begins with cash, purchases goods partly in cash and partly on credit, makes a sale, and withdraws cash for personal use.", framework: ["ক: Define a journal in one accurate sentence.", "খ: Explain why narration improves reliability.", "গ: Analyse each event and prepare journal entries.", "ঘ: Post selected entries to ledger and justify the closing balances."] },
      bank: { mcq: 90, cq: 24, written: 18, focus: "Debit-credit rules, narration, posting, balancing and error detection" },
    },
    {
      subject: "Finance & Banking", unit: "Sources of finance", unitBn: "অর্থায়নের উৎস",
      notes: ["Financing need should be matched with time: working-capital needs are usually shorter than fixed-asset needs.", "Internal finance comes from within the business; external finance comes from owners, lenders or markets.", "Equity does not create compulsory interest but may dilute control; debt preserves ownership but creates repayment pressure.", "A suitable source balances cost, risk, control, flexibility and the purpose of funds."],
      worked: { problem: "A growing retailer needs Tk 500,000 for seasonal inventory for four months. Compare a long-term share issue with short-term bank finance.", steps: ["The need is temporary working capital, not a permanent asset.", "A share issue is slow, costly and may affect ownership.", "Short-term bank finance better matches the four-month cash cycle.", "Repayment ability must still be tested against expected sales receipts."], answer: "Short-term bank finance is the more suitable starting choice, subject to cost and repayment capacity." },
      cq: { stimulus: "A family business wants new machinery and also needs cash for seasonal stock, but the owners do not want to lose control.", framework: ["ক: Define business finance.", "খ: Explain internal finance with an example.", "গ: Recommend separate sources for machinery and stock.", "ঘ: Evaluate the recommendations using cost, risk, term and control."] },
      bank: { mcq: 70, cq: 20, written: 14, focus: "Source classification, time matching, equity-debt comparison and scenario choice" },
    },
    {
      subject: "Accounting", unit: "Trial balance", unitBn: "রেওয়ামিল",
      notes: ["A trial balance is a statement of ledger balances prepared on a particular date to test the arithmetical equality of debits and credits.", "Debit balances such as assets and expenses normally appear in the debit column; liabilities, capital and income normally appear in the credit column.", "If the columns disagree, recheck totals, balance extraction, one-sided posting, side selection and transposition of figures.", "Agreement is useful evidence of arithmetical accuracy, but it does not prove that every transaction was recorded or classified correctly."],
      worked: { problem: "Prepare the trial-balance totals from: Cash Tk 30,000, Furniture Tk 20,000, Purchases Tk 40,000, Capital Tk 60,000, Sales Tk 25,000 and Creditors Tk 5,000.", steps: ["Place Cash, Furniture and Purchases in the debit column.", "Debit total = 30,000 + 20,000 + 40,000 = Tk 90,000.", "Place Capital, Sales and Creditors in the credit column.", "Credit total = 60,000 + 25,000 + 5,000 = Tk 90,000."], answer: "The trial balance agrees: total debit Tk 90,000 and total credit Tk 90,000." },
      cq: { stimulus: "A business extracts ledger balances, but its trial-balance columns differ. Later it discovers a sales transaction omitted from both the journal and ledger.", framework: ["ক: Define a trial balance.", "খ: Explain why equal columns do not guarantee complete accuracy.", "গ: Prepare the trial balance from the supplied ledger balances.", "ঘ: Classify the errors as revealed or not revealed and explain the correction process."] },
      bank: { mcq: 64, cq: 20, written: 14, focus: "Balance classification, preparation, disagreement tracing and limitations" },
    },
    {
      subject: "Finance & Banking", unit: "Commercial banking", unitBn: "বাণিজ্যিক ব্যাংকিং",
      notes: ["Commercial banks accept deposits and provide loans or advances while managing liquidity, risk and customer confidence.", "Core services include payment and settlement, fund transfer, collection, agency work and other lawful utility services.", "Banks connect savers with borrowers, but lending decisions must consider purpose, cash flow, security, character and repayment capacity.", "A sound answer separates a bank’s primary functions from supporting services and explains how each serves customers and the economy."],
      worked: { problem: "A seasonal retailer needs Tk 400,000 for inventory and expects customer receipts within five months. Assess a short-term bank loan.", steps: ["Match the borrowing period with the five-month operating cycle.", "Estimate whether expected cash receipts cover principal, interest and a safety margin.", "Check lending terms, security requirements and the cost of delayed sales.", "Compare the facility with alternatives such as supplier credit before deciding."], answer: "A short-term facility can fit the need when verified cash flow supports timely repayment at an acceptable cost." },
      cq: { stimulus: "A small manufacturer receives customer payments digitally, needs temporary working capital and wants the bank to collect bills on its behalf.", framework: ["ক: Define a commercial bank.", "খ: Explain deposit mobilisation.", "গ: Match each need with an appropriate banking function.", "ঘ: Evaluate the working-capital request using term, cost, risk and repayment capacity."] },
      bank: { mcq: 76, cq: 22, written: 16, focus: "Deposits, lending, payment services, agency functions and responsible credit decisions" },
    },
    {
      subject: "Business Organisation", unit: "Business environment", unitBn: "ব্যবসায় পরিবেশ",
      notes: ["The internal environment includes resources, people, culture and policies that the business can influence directly.", "The micro environment includes customers, suppliers, competitors and intermediaries close to the business.", "The macro environment includes economic, social, technological, political, legal and natural forces.", "Good analysis links a change to a specific cost, risk, opportunity or decision instead of merely naming the factor."],
      worked: { problem: "Digital payments grow rapidly while new consumer-protection rules are introduced. Analyse the environment of a small retailer.", steps: ["Digital payment growth is primarily a technological and social change.", "It may improve convenience and widen the customer base.", "Consumer-protection rules are a legal factor and may increase compliance duties.", "The retailer should adopt secure payments and update refund, record and privacy procedures."], answer: "The same environment creates opportunity through technology and responsibility through regulation." },
      cq: { stimulus: "A local food company faces changing customer preferences, rising input prices and stricter packaging rules.", framework: ["ক: Define business environment.", "খ: Distinguish micro and macro environment.", "গ: Classify the three changes in the stimulus.", "ঘ: Recommend a response and show how each action addresses a stated factor."] },
      bank: { mcq: 72, cq: 22, written: 14, focus: "Environmental classification, cause-effect analysis and Bangladesh business scenarios" },
    },
    {
      subject: "Business Organisation", unit: "Management principles", unitBn: "ব্যবস্থাপনার নীতি",
      notes: ["Management principles guide decisions; they are applied with judgment rather than treated as rigid formulas.", "Division of work can build skill and efficiency, while authority should remain matched with responsibility.", "Unity of command means one employee should receive accountable instructions from one superior; unity of direction aligns related activities under one plan.", "Scalar chain, discipline, fairness, initiative and coordination help an organisation combine order with effective human performance."],
      worked: { problem: "A sales assistant receives conflicting price instructions from the sales manager and operations manager. Diagnose the problem.", steps: ["Identify the conflict as a breach of unity of command.", "Clarify which manager owns the decision and accountability.", "Use an agreed communication route so specialist advice reaches the responsible manager.", "Document the final instruction and review whether the structure caused the conflict."], answer: "Restore one accountable reporting line while coordinating input from the other manager." },
      cq: { stimulus: "A growing firm has duplicated orders, unclear authority and employees who receive commands from several supervisors.", framework: ["ক: Define a management principle.", "খ: Distinguish unity of command from unity of direction.", "গ: Identify the principles violated in the stimulus.", "ঘ: Recommend a practical redesign and justify each change through the relevant principle."] },
      bank: { mcq: 74, cq: 22, written: 16, focus: "Principle recognition, unity, authority-responsibility, coordination and application" },
    },
    {
      subject: "English", unit: "Reading and grammar", unitBn: "পাঠ অনুধাবন ও ব্যাকরণ",
      notes: ["Read the question before returning to the passage so evidence is selected with purpose.", "Separate the writer’s main claim from examples and supporting details.", "Inference must be supported by words or tone in the passage, not personal opinion.", "Grammar answers should preserve meaning while correcting structure, agreement and connection."],
      worked: { problem: "A paragraph states that urban trees reduce heat, absorb pollution and improve wellbeing. Write a one-sentence main idea.", steps: ["Identify the repeated subject: urban trees.", "Group the details: environmental and human benefits.", "Remove examples that are too specific for a main idea.", "Write one complete sentence in original wording."], answer: "Urban trees make cities healthier by improving both environmental conditions and human wellbeing." },
      cq: { stimulus: "A short passage presents a problem, evidence and a proposed response.", framework: ["Identify the central idea.", "Quote or paraphrase one supporting detail.", "Explain one inference from context.", "Write the answer concisely and check grammar before submission."] },
      bank: { mcq: 0, cq: 0, written: 80, focus: "Comprehension, modifiers, connectors, verb forms and transformation" },
    },
  ],
  humanities: [
    {
      subject: "Economics", unit: "Demand and supply", unitBn: "চাহিদা ও যোগান",
      notes: ["Demand is the willingness and ability to buy at different prices during a period; quantity demanded is one point on that relationship.", "A price change causes movement along a curve; a non-price determinant shifts the entire curve.", "Equilibrium occurs where planned quantity demanded equals planned quantity supplied.", "A price below equilibrium creates shortage pressure; a price above equilibrium creates surplus pressure."],
      worked: { problem: "At Tk 40, demand is 90 units and supply is 50 units. At Tk 60, both equal 70 units. Identify the market condition at each price.", steps: ["At Tk 40, shortage = 90 − 50 = 40 units.", "Shortage creates upward pressure on price.", "At Tk 60, quantity demanded equals quantity supplied.", "Therefore Tk 60 is the equilibrium price and 70 units the equilibrium quantity."], answer: "Tk 40 creates a 40-unit shortage; equilibrium is Tk 60 at 70 units." },
      cq: { stimulus: "Income rises for a normal good while production technology also improves.", framework: ["ক: Define market equilibrium.", "খ: Explain movement versus shift.", "গ: Show the demand and supply shifts on a labelled graph.", "ঘ: Analyse the likely price and quantity effects, noting when price direction may be uncertain."] },
      bank: { mcq: 96, cq: 26, written: 16, focus: "Schedules, graphs, determinants, shifts, equilibrium, shortage and surplus" },
    },
    {
      subject: "Economics", unit: "Production and cost", unitBn: "উৎপাদন ও ব্যয়",
      notes: ["In the short run at least one input is fixed; in the long run all inputs can be varied.", "Total cost equals total fixed cost plus total variable cost: TC = TFC + TVC.", "Average fixed cost, average variable cost and average cost are found by dividing the relevant total by output; marginal cost measures the change in total cost from an additional unit.", "Calculations earn stronger marks when the formula, substitution, unit and economic interpretation are all shown."],
      worked: { problem: "At output of 10 units, total fixed cost is Tk 2,000 and total variable cost is Tk 3,000. Find TC, AFC, AVC and AC.", steps: ["TC = TFC + TVC = 2,000 + 3,000 = Tk 5,000.", "AFC = TFC ÷ Q = 2,000 ÷ 10 = Tk 200.", "AVC = TVC ÷ Q = 3,000 ÷ 10 = Tk 300.", "AC = TC ÷ Q = 5,000 ÷ 10 = Tk 500; it also equals AFC + AVC."], answer: "TC = Tk 5,000; AFC = Tk 200; AVC = Tk 300; AC = Tk 500 per unit." },
      cq: { stimulus: "A production table gives output, fixed cost and variable cost at successive employment levels.", framework: ["ক: Define marginal cost.", "খ: Explain why average fixed cost falls as output rises.", "গ: Complete TC, AFC, AVC, AC and MC columns with formulas.", "ঘ: Interpret the product-cost relationship and support the conclusion with table evidence."] },
      bank: { mcq: 82, cq: 24, written: 18, focus: "Short run, product measures, cost formulas, schedules, curves and interpretation" },
    },
    {
      subject: "Civics & Good Governance", unit: "Values, law and liberty", unitBn: "মূল্যবোধ, আইন ও স্বাধীনতা",
      notes: ["Values guide judgments about desirable conduct; civic values support responsible public life.", "Law is formally recognised and enforceable, while morality and custom may influence conduct without identical legal force.", "Liberty is not the absence of every restraint; lawful limits protect the equal freedom and safety of others.", "Rule of law requires known laws, equality before law and limits on arbitrary power."],
      worked: { problem: "A local authority restricts a public activity without stating any legal basis. Analyse it through rule-of-law principles.", steps: ["Identify the exercise of public power.", "Ask whether the restriction has a clear legal basis.", "Check whether the rule is applied equally and allows review.", "Balance public interest with individual liberty."], answer: "Without lawful authority, equal application and review, the restriction risks becoming arbitrary rather than rule-based." },
      cq: { stimulus: "Citizens demand freedom of expression while a community asks for protection from harmful misinformation.", framework: ["ক: Define liberty.", "খ: Explain why liberty requires safeguards.", "গ: Identify the competing civic interests.", "ঘ: Propose a lawful, proportionate balance and justify it through rule of law."] },
      bank: { mcq: 78, cq: 22, written: 16, focus: "Values, sources of law, liberty, rule of law and scenario analysis" },
    },
    {
      subject: "Civics & Good Governance", unit: "Organs of government", unitBn: "সরকারের অঙ্গসমূহ",
      notes: ["The legislature makes laws and represents public interests, the executive administers and implements policy, and the judiciary interprets law and resolves disputes.", "Separation of powers reduces concentration of authority, while checks and balances allow institutions to restrain one another lawfully.", "Judicial independence supports impartial decisions; accountability and transparent procedure support public trust in every organ.", "A strong answer identifies the relevant organ, its function, the constitutional principle involved and the lawful remedy or check."],
      worked: { problem: "An executive authority makes a decision that a citizen claims exceeds its lawful power, and the dispute reaches a court. Explain the institutional roles.", steps: ["The executive must show the legal authority and procedure behind its action.", "The judiciary examines legality and protects the rule of law through an independent decision.", "The legislature’s enacted law supplies the governing framework and may later be reviewed or amended through lawful process.", "The example shows institutional checks without assigning every organ the same function."], answer: "Each organ retains its own function while lawful review prevents unchecked public power." },
      cq: { stimulus: "A proposed law is debated, later implemented by public officials and finally challenged before a court.", framework: ["ক: Name the three principal organs of government.", "খ: Explain separation of powers.", "গ: Match each stage of the stimulus with the responsible organ.", "ঘ: Evaluate how independence and checks can protect constitutional government."] },
      bank: { mcq: 84, cq: 24, written: 18, focus: "Legislature, executive, judiciary, separation, checks, independence and accountability" },
    },
    {
      subject: "History", unit: "Colonial Bengal", unitBn: "ঔপনিবেশিক শাসনে বাংলা",
      notes: ["Historical explanation should connect causes, events and consequences rather than list isolated dates.", "Political control developed alongside administrative and revenue changes.", "Economic policies affected production, trade, land relations and different social groups unevenly.", "Sources must be read for authorship, purpose, context, evidence and possible bias."],
      worked: { problem: "Two sources describe the same revenue policy differently: an official report praises stability while a cultivator’s account describes hardship.", steps: ["Identify the author and purpose of each source.", "Separate the claim from the evidence offered.", "Explain how position may shape perspective.", "Use both accounts to form a balanced conclusion instead of choosing one automatically."], answer: "The sources reveal different effects and perspectives; reliability must be judged by context and corroborating evidence." },
      cq: { stimulus: "A timeline shows political expansion, administrative reform, changing land revenue and later resistance.", framework: ["ক: Identify the historical term requested.", "খ: Explain one cause in context.", "গ: Connect two events through cause and consequence.", "ঘ: Evaluate the wider impact using chronology and evidence from the stimulus."] },
      bank: { mcq: 82, cq: 24, written: 18, focus: "Chronology, sources, colonial administration, economic effects and evidence-led answers" },
    },
    {
      subject: "History", unit: "Language movement", unitBn: "ভাষা আন্দোলন",
      notes: ["After 1947, the language question became central because Bengali-speaking people sought recognition of Bangla in state affairs.", "The movement developed through public debate, student organisation, protest and sacrifice, with 21 February 1952 becoming its defining moment.", "Its importance extends beyond language: it strengthened cultural confidence, political awareness and the development of Bengali nationalism.", "Historical answers should connect background, movement, immediate outcome and longer significance while distinguishing evidence from later interpretation."],
      worked: { problem: "An official notice and a participant’s memoir describe a Language Movement protest differently. How should a student use them?", steps: ["Identify each source’s author, date, audience and purpose.", "Extract specific claims and note where the accounts agree or conflict.", "Consider whether official position or personal memory may shape emphasis.", "Corroborate with other reliable evidence before forming a balanced conclusion."], answer: "Use both as contextual evidence, but test their claims through provenance, comparison and corroboration." },
      cq: { stimulus: "A source set includes a policy statement, a student appeal and a later reflection on 21 February 1952.", framework: ["ক: Identify the historical event or term.", "খ: Explain the background of the language demand.", "গ: Compare the viewpoints and connect them to the movement’s development.", "ঘ: Evaluate the movement’s cultural and political significance using evidence and chronology."] },
      bank: { mcq: 86, cq: 26, written: 20, focus: "Background, chronology, evidence, 21 February 1952 and wider historical significance" },
    },
    {
      subject: "English", unit: "Reading and grammar", unitBn: "পাঠ অনুধাবন ও ব্যাকরণ",
      notes: ["Read the question before returning to the passage so evidence is selected with purpose.", "Separate the writer’s main claim from examples and supporting details.", "Inference must be supported by words or tone in the passage, not personal opinion.", "Grammar answers should preserve meaning while correcting structure, agreement and connection."],
      worked: { problem: "A paragraph states that urban trees reduce heat, absorb pollution and improve wellbeing. Write a one-sentence main idea.", steps: ["Identify the repeated subject: urban trees.", "Group the details: environmental and human benefits.", "Remove examples that are too specific for a main idea.", "Write one complete sentence in original wording."], answer: "Urban trees make cities healthier by improving both environmental conditions and human wellbeing." },
      cq: { stimulus: "A short passage presents a problem, evidence and a proposed response.", framework: ["Identify the central idea.", "Paraphrase one supporting detail.", "Explain one inference from context.", "Check clarity, tense and sentence completeness."] },
      bank: { mcq: 0, cq: 0, written: 80, focus: "Comprehension, modifiers, connectors, verb forms and transformation" },
    },
  ],
};

type SubjectBlueprint = {
  name: string;
  concepts: string;
  method: string;
  application: string;
  formulas: string[];
  bangladesh: string;
  evidence: string;
};

const subjectBlueprints: Record<string, SubjectBlueprint> = {
  bangla: {
    name: "Bangla",
    concepts: "পাঠ অনুধাবন, সাহিত্য বিশ্লেষণ, ভাষার শুদ্ধ প্রয়োগ ও উদ্দেশ্যভিত্তিক লিখন",
    method: "প্রশ্নের নির্দেশক শব্দ শনাক্ত করে পাঠের প্রমাণ, ভাষার নিয়ম ও সুসংগঠিত উপস্থাপন ব্যবহার করা",
    application: "একাদশ–দ্বাদশ শ্রেণির সাহিত্যপাঠ, সহপাঠ, ব্যাকরণ ও লিখিত অংশের বোর্ড-প্যাটার্ন কাজ",
    formulas: ["পূর্ণ উত্তর = মূল বক্তব্য + পাঠের প্রমাণ + ব্যাখ্যা + উপসংহার"],
    bangladesh: "সাহিত্যপাঠ ও সহপাঠকে একই বাংলা বিষয়ের পৃথক অধ্যয়নধারা হিসেবে উপস্থাপন করা হবে।",
    evidence: "সাহিত্য উত্তরে পাঠের প্রমাণ এবং ভাষা/লিখনে সঠিক রীতি ও বিন্যাস দৃশ্যমান থাকতে হবে।",
  },
  ict: {
    name: "Information & Communication Technology",
    concepts: "তথ্য, যোগাযোগ, সংখ্যা পদ্ধতি, ডিজিটাল লজিক, ওয়েব, প্রোগ্রামিং ও ডেটাবেজ",
    method: "ধারণা শনাক্ত করে নিয়ম বা অ্যালগরিদম ধাপে ধাপে প্রয়োগ, আউটপুট পরীক্ষা ও ভুল সংশোধন করা",
    application: "বাংলাদেশের শিক্ষা, সেবা ও দৈনন্দিন প্রযুক্তি ব্যবহারের বাস্তব সমস্যা",
    formulas: ["1 byte = 8 bits", "Decimal value = Σ(digit × base^position)"],
    bangladesh: "প্রযুক্তির উদাহরণে নিরাপত্তা, গোপনীয়তা ও দায়িত্বশীল ব্যবহার যুক্ত থাকবে।",
    evidence: "রূপান্তর, লজিক, কোড ও ডেটাবেজ উত্তরে প্রতিটি মধ্যবর্তী ধাপ ও যাচাই দেখাতে হবে।",
  },
  logic: {
    name: "Logic",
    concepts: "পদ, বচন, অনুমান, ন্যায়, আরোহ, প্রতীক ও যুক্তিভ্রান্তি",
    method: "যুক্তির গঠন শনাক্ত করে নিয়ম প্রয়োগ, বৈধতা পরীক্ষা এবং ফলের কারণ ব্যাখ্যা করা",
    application: "দৈনন্দিন দাবি ও একাদশ–দ্বাদশ শ্রেণির বোর্ড-প্যাটার্ন যুক্তি বিশ্লেষণ",
    formulas: ["Valid argument = true premises cannot yield a false conclusion"],
    bangladesh: "পরিচিত বক্তব্য ব্যবহার করা হবে, তবে রাজনৈতিক বা বর্তমান দাবিকে প্রমাণ ছাড়া সত্য ধরা হবে না।",
    evidence: "শুধু সিদ্ধান্ত নয়—পূর্বধারণা, যুক্তির রূপ, প্রয়োগ করা নিয়ম ও বৈধতার পরীক্ষা দেখাতে হবে।",
  },
  islamic_history: {
    name: "Islamic History & Culture",
    concepts: "কালানুক্রম, কারণ, শাসন, সমাজ, সংস্কৃতি, অবদান ও ঐতিহাসিক প্রমাণ",
    method: "ঘটনাকে সময়ক্রমে সাজিয়ে কারণ–ঘটনা–ফল সংযোগ এবং উৎসের সীমা বিচার করা",
    application: "ইসলামের ইতিহাস, সভ্যতা এবং বাংলা অঞ্চলের ঐতিহাসিক প্রেক্ষাপট",
    formulas: ["Historical answer = context + evidence + explanation + significance"],
    bangladesh: "বাংলার ইতিহাস ও সংস্কৃতির সংযোগ যথাযথ উৎস যাচাই সাপেক্ষে উপস্থাপন করা হবে।",
    evidence: "নাম, তারিখ, স্থান ও উদ্ধৃতি প্রকাশের আগে প্রযোজ্য পাঠ্যবই/নির্ভরযোগ্য উৎসে যাচাই করতে হবে।",
  },
  statistics: {
    name: "Statistics",
    concepts: "তথ্য, চলক, নমুনায়ন, সারণি, কেন্দ্রীয় প্রবণতা, বিস্তার, সহসম্বন্ধ, নির্ভরণ ও কালীন সারি",
    method: "প্রদত্ত তথ্য ও একক শনাক্ত করে উপযুক্ত সূত্র নির্বাচন, মান বসানো, ধাপে ধাপে হিসাব এবং ফলের অর্থ ব্যাখ্যা করা",
    application: "বাংলাদেশের শিক্ষা, জনসংখ্যা, কৃষি, ব্যবসা বা সামাজিক তথ্যের বাস্তবসম্মত dataset",
    formulas: ["Mean = Σx ÷ n", "Variance = Σ(x − x̄)² ÷ n", "CV = (SD ÷ Mean) × 100"],
    bangladesh: "প্রকাশিত পরিসংখ্যান ব্যবহারে উৎস, বছর, সংজ্ঞা ও একক স্পষ্ট থাকবে; যাচাইহীন বর্তমান সংখ্যা ব্যবহার করা হবে না।",
    evidence: "প্রতিটি সমাধানে সারণি/চিত্র, সূত্র, মান বসানো, মধ্যবর্তী হিসাব, একক এবং ফলের ব্যাখ্যা দেখাতে হবে।",
  },
  geography: {
    name: "Geography",
    concepts: "স্থান, অঞ্চল, ভৌত প্রক্রিয়া, মানুষ–পরিবেশ সম্পর্ক, মানচিত্র, সম্পদ ও স্থানিক পরিবর্তন",
    method: "প্রশ্নের স্থান ও প্রক্রিয়া শনাক্ত করে কারণ–ধাপ–ফল সাজানো, প্রয়োজনীয় মানচিত্র/চিত্র/সারণি আঁকা এবং বাংলাদেশ প্রেক্ষাপটে ব্যাখ্যা করা",
    application: "বাংলাদেশের ভূমিরূপ, জলবায়ু, জনসংখ্যা, বসতি, কৃষি, সম্পদ, পরিবহন ও দুর্যোগের বাস্তব উদাহরণ",
    formulas: ["Geographical answer = location + process + evidence + spatial consequence", "Scale = map distance ÷ ground distance"],
    bangladesh: "মানচিত্র, পরিসংখ্যান বা বর্তমান পরিবেশগত তথ্য ব্যবহার করলে উৎস, বছর, একক ও অঞ্চল স্পষ্ট করতে হবে।",
    evidence: "চিত্রে title, orientation, label ও legend; বিশ্লেষণে উদ্দীপকের নির্দিষ্ট স্থানিক প্রমাণ থাকতে হবে।",
  },
  accounting: {
    name: "Accounting",
    concepts: "recognition, classification, dual effect and reliable financial recording",
    method: "identify the accounts, apply the rule, show the working and verify both sides",
    application: "a Bangladeshi trading or service business recording a realistic transaction cycle",
    formulas: ["Assets = Liabilities + Owner’s Equity", "Profit = Revenue − Expenses"],
    bangladesh: "Use taka amounts, familiar local business documents and VAT-aware examples where the chapter requires them.",
    evidence: "The final figure must be supported by narration, ledger trail or statement working.",
  },
  finance: {
    name: "Finance & Banking",
    concepts: "time, cost, risk, return, liquidity and responsible financial choice",
    method: "identify the financial need, compare alternatives and justify the decision using cost, risk and control",
    application: "a Bangladeshi SME, bank customer or financial institution making a funding decision",
    formulas: ["Simple interest = Principal × Rate × Time", "Future value = Present value × (1 + rate)ⁿ"],
    bangladesh: "Connect decisions to local banks, SMEs, payment practices and regulatory context without inventing current rates.",
    evidence: "Recommendations must state assumptions and show why the selected option fits the stated need.",
  },
  business: {
    name: "Business Organisation",
    concepts: "enterprise, ownership, management, people, environment and ethical decision-making",
    method: "identify the principle, connect it to the situation and recommend a practical managerial response",
    application: "a growing Bangladeshi manufacturing, retail or service enterprise",
    formulas: ["Decision quality = relevant evidence + feasible action + justified trade-off"],
    bangladesh: "Use local enterprise conditions, supply chains, employment and customer expectations as context.",
    evidence: "A strong answer links each recommendation to a named principle and expected result.",
  },
  economics: {
    name: "Economics",
    concepts: "scarcity, incentives, marginal reasoning, markets, national outcomes and policy trade-offs",
    method: "state the concept, show the schedule or formula, draw and label when required, then interpret",
    application: "a Bangladesh household, producer, market or public-policy situation",
    formulas: ["Average = Total ÷ Quantity", "Marginal value = Change in total ÷ Change in quantity"],
    bangladesh: "Use familiar markets and national economic examples while separating illustration from verified statistics.",
    evidence: "Graphs require labelled axes and curves; numerical conclusions require formula and working.",
  },
  civics: {
    name: "Civics & Good Governance",
    concepts: "citizenship, institutions, law, rights, accountability and constitutional government",
    method: "define the principle, identify the institution or right, balance competing interests and justify a lawful response",
    application: "a realistic Bangladesh civic or institutional scenario stated without partisan assumptions",
    formulas: ["Analytical answer = principle + evidence + application + justified conclusion"],
    bangladesh: "Use constitutional and civic context carefully, avoiding claims that depend on unverified current events.",
    evidence: "Distinguish legal principle, personal opinion and evidence from the stimulus.",
  },
  history: {
    name: "History",
    concepts: "chronology, cause, consequence, continuity, change, perspective and historical evidence",
    method: "place events in sequence, connect causes to consequences and evaluate sources by provenance and context",
    application: "a Bangladesh or Bengal-focused source set, timeline or competing historical interpretation",
    formulas: ["Historical argument = claim + contextual evidence + explanation + evaluation"],
    bangladesh: "Use dates and names only when verified; connect regional events to wider political and social change.",
    evidence: "Source answers must consider author, purpose, date, audience, limitation and corroboration.",
  },
  english: {
    name: "English",
    concepts: "meaning, structure, accuracy, evidence, organisation and audience-aware communication",
    method: "read the task, plan the response, apply the language rule, revise for clarity and proofread",
    application: "HSC-style reading, grammar and writing situations relevant to Bangladeshi learners",
    formulas: ["Effective paragraph = topic sentence + support + explanation + closing link"],
    bangladesh: "Use natural contexts familiar to HSC students while keeping the target language accurate and formal where required.",
    evidence: "Reading answers must be supported by the passage; writing must meet purpose, form and word expectations.",
  },
};

const subjectDisplay: Record<string, string> = {
  bangla: "Bangla",
  ict: "Information & Communication Technology",
  logic: "Logic",
  islamic_history: "Islamic History & Culture",
  statistics: "Statistics",
  geography: "Geography",
  accounting: "Accounting",
  finance: "Finance & Banking",
  business: "Business Organisation",
  economics: "Economics",
  civics: "Civics & Good Governance",
  history: "History",
  english: "English",
};

function enrichChapter(chapter: ChapterPreview, subjectId: string, index: number): ChapterPreview {
  const blueprint = subjectBlueprints[subjectId];
  const focus = chapter.title.toLowerCase();
  chapter.outcomes ??= [
    `Explain the central ideas and terminology of ${focus}`,
    `Apply ${focus} to a structured HSC-style situation`,
    `Produce a clear answer using the correct method, evidence and conclusion`,
  ];
  chapter.lessonPlan ??= [
    { title: `${chapter.title}: core concepts`, titleBn: `${chapter.titleBn}: মূল ধারণা`, minutes: 16, format: "Concept" },
    { title: "Terminology and decision rules", titleBn: "পরিভাষা ও সিদ্ধান্তের নিয়ম", minutes: 18, format: "Concept" },
    { title: "Guided Bangladesh-context example", titleBn: "বাংলাদেশভিত্তিক সমাধানসহ উদাহরণ", minutes: 22, format: "Worked example" },
    { title: "Board-style application", titleBn: "বোর্ড-প্যাটার্ন প্রয়োগ", minutes: 24, format: "Worked example" },
    { title: "Mixed exam practice", titleBn: "মিশ্র পরীক্ষা অনুশীলন", minutes: 20, format: "Practice" },
  ];
  const enrichmentLessons: NonNullable<ChapterPreview["lessonPlan"]> = [
    { title: "Common mistakes and how to fix them", titleBn: "যে ভুলগুলো বেশি হয় এবং ঠিক করার উপায়", minutes: 18, format: "Practice" },
    { title: "Timed board-style practice", titleBn: "সময় ধরে বোর্ড-প্যাটার্ন অনুশীলন", minutes: 25, format: "Practice" },
    { title: "Check what you can recall", titleBn: "না দেখে কতটুকু মনে করতে পারো", minutes: 20, format: "Practice" },
  ];
  for (const lesson of enrichmentLessons) {
    if (chapter.lessonPlan.length >= 7) break;
    if (!chapter.lessonPlan.some((item) => item.title === lesson.title)) chapter.lessonPlan.push(lesson);
  }
  const extensionLessons: NonNullable<ChapterPreview["lessonPlan"]> = [
    { title: "A complete example, explained", titleBn: "একটি পূর্ণ উদাহরণ—ধাপে ধাপে ব্যাখ্যা", minutes: 20, format: "Worked example" },
    { title: "Now solve one yourself", titleBn: "এবার নিজে সমাধান করো", minutes: 18, format: "Practice" },
    { title: "Connect the chapter ideas", titleBn: "অধ্যায়ের ধারণাগুলো মিলিয়ে দেখো", minutes: 22, format: "Practice" },
    { title: "Make a model answer better", titleBn: "একটি মডেল উত্তর আরও ভালো করো", minutes: 20, format: "Worked example" },
    { title: "Are you ready for the exam?", titleBn: "পরীক্ষার জন্য কতটা প্রস্তুত", minutes: 16, format: "Practice" },
  ];
  const desiredLessonCount = Math.max(7, chapter.lessons);
  for (const lesson of extensionLessons) {
    if (chapter.lessonPlan.length >= desiredLessonCount) break;
    if (!chapter.lessonPlan.some((item) => item.title === lesson.title)) chapter.lessonPlan.push(lesson);
  }
  chapter.lessons = chapter.lessonPlan.length;
  chapter.examPlan ??= { mcq: 36 + (index % 3) * 4, cq: 14 + (index % 2) * 2, written: 8 + (index % 3) * 2 };
  chapter.questions = Math.max(chapter.questions, 60);
  // Learning-pack readiness is separate from external academic sign-off,
  // which remains explicit in every generated resource review record.
  chapter.status = "ready";
  chapter.progress = 100;
  chapter.examPrep ??= [
    `Define the key terms of ${focus} precisely`,
    `Follow this method: ${blueprint.method}`,
    "Show all working, labels, evidence or reasoning required by the question",
    "Reserve time to check the final answer against the command word",
  ];
  return chapter;
}

for (const [subjectId, chapters] of Object.entries(chaptersBySubject)) {
  chapters.forEach((chapter, index) => enrichChapter(chapter, subjectId, index));
}

type ChapterKnowledge = { terms: string; anchor: string; context: string };

const chapterKnowledge: Record<string, Record<string, ChapterKnowledge>> = {
  bangla: {
    "Prose: reading and interpretation": { terms: "প্রসঙ্গ, কেন্দ্রীয় বক্তব্য, অনুষঙ্গ, ভাষাশৈলী ও পাঠ-প্রমাণ", anchor: "গদ্যের বক্তব্য নিজের ভাষায় ব্যাখ্যা করে প্রতিটি সিদ্ধান্তের সঙ্গে পাঠের নির্দিষ্ট শব্দ, ঘটনা বা উদ্ধৃতির যোগ দেখাতে হবে।", context: "একটি গদ্যাংশ পড়ে মূল বক্তব্য, লেখকের দৃষ্টিভঙ্গি এবং দুটি ভাষিক বৈশিষ্ট্য প্রমাণসহ ব্যাখ্যা করো।" },
    "Poetry: reading and interpretation": { terms: "বক্তা, আবেগ, চিত্রকল্প, প্রতীক, ছন্দ ও মূলভাব", anchor: "কবিতার পঙ্‌ক্তি শুধু পুনরাবৃত্তি নয়—চিত্রকল্প ও প্রতীকের অর্থ ধরে মূলভাব ব্যাখ্যা করতে হবে।", context: "নির্বাচিত পঙ্‌ক্তির দৃশ্যকল্প, আবেগ ও সামগ্রিক তাৎপর্য নিজের ভাষায় বিশ্লেষণ করো।" },
    "Writer, poet and literary context": { terms: "জীবনকাল, সাহিত্যধারা, রচনাপ্রেক্ষাপট, বিষয়বৈচিত্র্য ও অবদান", anchor: "জীবনী মুখস্থ না লিখে প্রাসঙ্গিক জীবনঘটনা ও সাহিত্যিক বৈশিষ্ট্যকে আলোচ্য রচনার সঙ্গে যুক্ত করো।", context: "লেখক বা কবির সময়, অভিজ্ঞতা ও সাহিত্যিক প্রবণতা আলোচ্য পাঠকে কীভাবে প্রভাবিত করেছে তা দেখাও।" },
    "Vocabulary, annotation and quotation": { terms: "শব্দার্থ, প্রসঙ্গগত অর্থ, টীকা, উদ্ধৃতি, বক্তা ও তাৎপর্য", anchor: "উদ্ধৃতির বক্তা ও প্রসঙ্গ নির্ধারণ করে শব্দের প্রসঙ্গগত অর্থ এবং বক্তব্যের তাৎপর্য আলাদা অনুচ্ছেদে লিখতে হবে।", context: "একটি উদ্ধৃতির বক্তা, পরিস্থিতি, সহজ অর্থ ও পাঠে তার গুরুত্ব নির্ণয় করো।" },
    "Theme, imagery and style": { terms: "মূলভাব, উপভাব, চিত্রকল্প, প্রতীক, অলংকার, শব্দচয়ন ও ভঙ্গি", anchor: "সাহিত্যিক কৌশলের নাম বলাই যথেষ্ট নয়; সেটি পাঠকের মনে কী অর্থ বা অনুভূতি তৈরি করে তা ব্যাখ্যা করো।", context: "পাঠের একটি চিত্রকল্প বা ভাষাশৈলী কীভাবে মূলভাবকে শক্তিশালী করেছে তা প্রমাণসহ দেখাও।" },
    "Character, event and values": { terms: "চরিত্রায়ণ, উদ্দেশ্য, দ্বন্দ্ব, পরিবর্তন, ঘটনা ও মূল্যবোধ", anchor: "চরিত্রের গুণ সরাসরি লিখে থেমো না—কথা, কাজ, সিদ্ধান্ত ও অন্য চরিত্রের প্রতিক্রিয়া দিয়ে বিচার করো।", context: "একটি গুরুত্বপূর্ণ সিদ্ধান্ত চরিত্রের মানসিকতা এবং পাঠের মূল্যবোধ কীভাবে প্রকাশ করে তা বিশ্লেষণ করো।" },
    "Novel study": { terms: "কাহিনি, পটভূমি, চরিত্র, দ্বন্দ্ব, দৃষ্টিকোণ, সামাজিক বাস্তবতা ও পরিণতি", anchor: "উপন্যাসের বিচ্ছিন্ন ঘটনা নয়—কাহিনির বিকাশ, চরিত্রের পরিবর্তন ও সামাজিক প্রেক্ষাপটের সম্পর্ক দেখাতে হবে।", context: "উপন্যাসের একটি কেন্দ্রীয় দ্বন্দ্ব চরিত্র ও সমাজের ওপর কী প্রভাব ফেলে তা ঘটনাক্রমে ব্যাখ্যা করো।" },
    "Drama study": { terms: "অঙ্ক, দৃশ্য, সংলাপ, মঞ্চনির্দেশ, নাট্যদ্বন্দ্ব, চরিত্র ও পরিণতি", anchor: "সংলাপের আক্ষরিক অর্থের সঙ্গে মঞ্চপরিস্থিতি, চরিত্রের উদ্দেশ্য এবং নাট্যদ্বন্দ্ব যুক্ত করে বিশ্লেষণ করো।", context: "একটি দৃশ্যের সংলাপ ও মঞ্চনির্দেশ কীভাবে দ্বন্দ্বকে সামনে আনে তা দেখাও।" },
    "Bangla language and grammar foundations": { terms: "ভাষা, ব্যাকরণ, ধ্বনি, শব্দ, পদ, বাক্য ও অর্থ", anchor: "প্রতিটি ব্যাকরণিক একককে সংজ্ঞা, বৈশিষ্ট্য এবং সঠিক উদাহরণের মাধ্যমে আলাদা করো।", context: "ধ্বনি থেকে বাক্য পর্যন্ত ভাষার এককগুলোর সম্পর্ক একটি উদাহরণে দেখাও।" },
    "Sound, spelling and pronunciation": { terms: "ধ্বনি, বর্ণ, উচ্চারণস্থান, শুদ্ধ বানান, ণত্ব, ষত্ব ও প্রমিত রূপ", anchor: "উচ্চারণ ও বানানের নিয়ম প্রয়োগের আগে শব্দের গঠন এবং প্রযোজ্য ব্যতিক্রম যাচাই করো।", context: "ভুল উচ্চারণ ও বানান শনাক্ত করে নিয়মসহ শুদ্ধ রূপ লেখো।" },
    "Word formation and morphology": { terms: "প্রকৃতি, প্রত্যয়, উপসর্গ, সন্ধি, সমাস, ব্যাসবাক্য ও সাধিত শব্দ", anchor: "গঠিত শব্দ ভেঙে প্রতিটি অংশের কাজ দেখাও; শুধু সমাস বা প্রত্যয়ের নাম লিখলে বিশ্লেষণ পূর্ণ হয় না।", context: "নির্বাচিত শব্দের প্রকৃতি-প্রত্যয় বা সমস্যমান পদ নির্ণয় করে গঠন ও অর্থ ব্যাখ্যা করো।" },
    "Parts of speech and usage": { terms: "বিশেষ্য, সর্বনাম, বিশেষণ, ক্রিয়া, ক্রিয়াবিশেষণ, যোজক ও আবেগসূচক", anchor: "একটি শব্দের পদ বাক্যে তার কাজের ওপর নির্ভর করে; বিচ্ছিন্ন অভিধানগত অর্থ দেখে সিদ্ধান্ত নিও না।", context: "একই শব্দ দুটি বাক্যে ভিন্ন পদ হিসেবে ব্যবহৃত হলে তার কারণ ব্যাখ্যা করো।" },
    "Sentence structure and transformation": { terms: "উদ্দেশ্য, বিধেয়, খণ্ডবাক্য, সরল, জটিল, যৌগিক, রূপান্তর ও শুদ্ধি", anchor: "বাক্যের রূপ বদলালেও মূল অর্থ, কাল এবং সম্পর্ক অক্ষুণ্ণ রাখতে হবে।", context: "অর্থ অপরিবর্তিত রেখে বাক্যের গঠন বদলাও এবং অশুদ্ধ বাক্যটি কারণসহ সংশোধন করো।" },
    "Terminology and translation": { terms: "পারিভাষিক শব্দ, প্রসঙ্গ, ভাবানুবাদ, বাক্যগঠন, রেজিস্টার ও প্রমিত ভাষা", anchor: "শব্দে-শব্দে অনুবাদের বদলে মূল বক্তব্য, প্রসঙ্গ এবং লক্ষ্যভাষার স্বাভাবিক বাক্যরীতি রক্ষা করো।", context: "একটি প্রাতিষ্ঠানিক অনুচ্ছেদ স্বাভাবিক বাংলায় অনুবাদ করে গুরুত্বপূর্ণ পারিভাষিক শব্দগুলো আলাদা করো।" },
    "Summary and idea expansion": { terms: "মূলভাব, সহায়ক ভাব, সংক্ষেপণ, সারাংশ, সারমর্ম, ভাবসম্প্রসারণ ও উপসংহার", anchor: "সারাংশে অপ্রয়োজনীয় উদাহরণ বাদ দাও; ভাবসম্প্রসারণে মূল উক্তির সীমার মধ্যে যুক্তি ও প্রাসঙ্গিক উদাহরণ যোগ করো।", context: "একটি অনুচ্ছেদের সারাংশ লেখো এবং একটি উদ্ধৃতির ভাব সুসংগঠিতভাবে সম্প্রসারণ করো।" },
    "Formal and creative composition": { terms: "উদ্দেশ্য, প্রাপক, বিন্যাস, তথ্য, অনুচ্ছেদ, যুক্তি, ভাষাভঙ্গি ও সম্পাদনা", anchor: "আবেদন, প্রতিবেদন ও প্রবন্ধে একই ছক ব্যবহার নয়—উদ্দেশ্য ও পাঠক অনুযায়ী বিন্যাস, ভাষা এবং তথ্য নির্বাচন করো।", context: "কলেজ-সংক্রান্ত একটি আবেদন বা প্রতিবেদন পরিকল্পনা, খসড়া ও সম্পাদনার তিন ধাপে প্রস্তুত করো।" },
  },
  ict: {
    "ICT in Bangladesh and the world": { terms: "তথ্য, যোগাযোগ, বিশ্বগ্রাম, ই-সেবা, ডিজিটাল বাংলাদেশ, নৈতিকতা ও কর্মসংস্থান", anchor: "প্রযুক্তির সুবিধার সঙ্গে সীমাবদ্ধতা, নিরাপত্তা, গোপনীয়তা ও সামাজিক প্রভাবও বিচার করতে হবে।", context: "শিক্ষা বা স্বাস্থ্যসেবায় একটি ICT ব্যবহারের সুফল, ঝুঁকি ও দায়িত্বশীল প্রয়োগ বিশ্লেষণ করো।" },
    "Communication systems and networking": { terms: "signal, bandwidth, transmission mode, medium, topology, protocol, IP address ও network device", anchor: "ডেটা কোথা থেকে কোথায়, কোন মাধ্যমে এবং কোন নিয়মে যাচ্ছে—এই তিনটি স্তর আলাদা করে নেটওয়ার্ক ব্যাখ্যা করো।", context: "একটি কলেজের computer lab-এর উপযোগী topology ও network devices নির্বাচন করে যুক্তি দাও।" },
    "Number systems and digital devices": { terms: "binary, octal, decimal, hexadecimal, complement, Boolean algebra ও logic gate", anchor: "প্রতিটি রূপান্তরে স্থানমান বা ভাগের ধাপ দেখাও এবং logic output truth table দিয়ে যাচাই করো।", context: "একটি সংখ্যা base পরিবর্তন করো, complement নির্ণয় করো এবং প্রদত্ত logic circuit-এর output বের করো।" },
    "Web design and HTML": { terms: "tag, element, attribute, structure, link, list, table, form ও semantic HTML", anchor: "ওয়েবপেজে সঠিক nesting, প্রয়োজনীয় attribute এবং অর্থবহ কাঠামো বজায় রেখে code লিখতে হবে।", context: "একটি শিক্ষার্থী-তথ্য পেজের heading, table, link ও form-এর HTML কাঠামো তৈরি ও debug করো।" },
    "Programming concepts": { terms: "algorithm, flowchart, variable, data type, operator, condition, loop, array ও function", anchor: "সমস্যা ভেঙে input-process-output নির্ধারণ করে algorithm লিখো, তারপর dry run দিয়ে output যাচাই করো।", context: "নম্বর ইনপুট নিয়ে grade নির্ণয়ের algorithm, flowchart এবং C-style pseudocode প্রস্তুত করো।" },
    "Database management": { terms: "data, field, record, table, key, relation, query, redundancy ও integrity", anchor: "প্রতিটি table-এর উদ্দেশ্য ও key নির্ধারণ করে duplication কমাও এবং relation-এর যৌক্তিকতা পরীক্ষা করো।", context: "একটি কলেজ library database-এর tables, primary keys এবং প্রয়োজনীয় সম্পর্ক নকশা করো।" },
    "Cyber safety and responsible use": { terms: "malware, phishing, password, authentication, encryption, privacy, copyright ও digital footprint", anchor: "ঝুঁকি শনাক্ত করে prevention, response এবং recovery—তিন পর্যায়ে নিরাপত্তা পরিকল্পনা দাও।", context: "একটি phishing message চিহ্নিত করে শিক্ষার্থীর করণীয় এবং account recovery steps সাজাও।" },
  },
  logic: {
    "Nature and scope of logic": { terms: "চিন্তা, যুক্তি, অনুমান, সত্যতা, বৈধতা, আকার ও বিষয়বস্তু", anchor: "যুক্তিবিদ্যা কীভাবে শুদ্ধ চিন্তার নিয়ম দেয় এবং সত্য বক্তব্য থেকে বৈধ যুক্তি কীভাবে আলাদা—তা উদাহরণে দেখাও।", context: "দুটি দৈনন্দিন যুক্তির সত্যতা ও বৈধতা আলাদাভাবে বিচার করো।" },
    "Terms and concepts": { terms: "পদ, ব্যক্ত্যর্থ, জাত্যর্থ, ব্যাপ্যতা, শ্রেণি, গুণ ও সম্পর্ক", anchor: "পদের অর্থ নির্ধারণে সেটি কোন বস্তুকে নির্দেশ করে এবং কোন গুণ বোঝায়—দুটি দিক আলাদা করো।", context: "কয়েকটি পদকে ব্যক্ত্যর্থ, জাত্যর্থ ও ব্যাপ্যতার ভিত্তিতে বিশ্লেষণ করো।" },
    "Proposition and classification": { terms: "বচন, উদ্দেশ্য, বিধেয়, সংযোজক, গুণ, পরিমাণ ও ব্যাপ্যতা", anchor: "বচনের ভাষা মান্য আকারে এনে গুণ ও পরিমাণ নির্ধারণের পর উদ্দেশ্য-বিধেয়ের ব্যাপ্যতা বিচার করো।", context: "প্রদত্ত বাক্যকে যুক্তিবিদ্যার মান্য বচনে রূপান্তর করে শ্রেণি ও ব্যাপ্যতা নির্ণয় করো।" },
    "Immediate inference": { terms: "আবর্তন, প্রতিবর্তন, বিরুদ্ধতা, বিপরীত বিরুদ্ধতা ও অধীন বিরুদ্ধতা", anchor: "একটি বচন থেকেই সিদ্ধান্ত নেওয়ার সময় গুণ, পরিমাণ ও ব্যাপ্যতার নিয়ম ভাঙছে কি না যাচাই করো।", context: "একটি A/E/I/O বচন থেকে বৈধ immediate inference গঠন ও পরীক্ষা করো।" },
    "Syllogism": { terms: "প্রধান পদ, অপ্রধান পদ, মধ্যপদ, premise, conclusion, mood ও figure", anchor: "তিনটি পদ চিহ্নিত করে মধ্যপদের ব্যাপ্যতা এবং premise-conclusion-এর নিয়ম পর্যায়ক্রমে পরীক্ষা করো।", context: "একটি নিরপেক্ষ ন্যায়ের mood ও figure নির্ণয় করে নিয়মভিত্তিক বৈধতা পরীক্ষা করো।" },
    "Symbolic logic": { terms: "proposition, symbol, negation, conjunction, disjunction, implication ও truth table", anchor: "জটিল বচনকে ক্ষুদ্র বচনে ভেঙে প্রতীকায়ন করো এবং সব সম্ভাব্য truth values দিয়ে ফল যাচাই করো।", context: "একটি যৌগিক বক্তব্য প্রতীকায়ন করে truth table-এর মাধ্যমে tautology বা contingency নির্ণয় করো।" },
    "Induction and scientific method": { terms: "আরোহ, পর্যবেক্ষণ, পরীক্ষা, কারণ, সাধারণীকরণ, নমুনা ও বৈজ্ঞানিক পদ্ধতি", anchor: "সীমিত দৃষ্টান্ত থেকে সিদ্ধান্তের শক্তি নমুনা, নিয়ন্ত্রণ, পুনরাবৃত্তি ও বিকল্প ব্যাখ্যা দিয়ে বিচার করো।", context: "একটি পরীক্ষার নকশায় variable, control ও evidence যাচাই করে সাধারণীকরণের গ্রহণযোগ্যতা মূল্যায়ন করো।" },
    "Hypothesis and explanation": { terms: "প্রকল্প, পর্যবেক্ষণ, পরীক্ষাযোগ্যতা, সামঞ্জস্য, সরলতা, পূর্বানুমান ও ব্যাখ্যা", anchor: "ভালো hypothesis অবশ্যই স্পষ্ট, পরীক্ষাযোগ্য, বিদ্যমান প্রমাণের সঙ্গে সামঞ্জস্যপূর্ণ এবং নতুন ফল পূর্বানুমান করতে সক্ষম।", context: "একটি ঘটনার জন্য দুটি hypothesis তুলনা করে কোনটি বেশি পরীক্ষাযোগ্য তা নির্ধারণ করো।" },
    "Fallacies and argument evaluation": { terms: "প্রাসঙ্গিকতা, অস্পষ্টতা, circular reasoning, hasty generalisation, false cause ও ad hominem", anchor: "শুধু fallacy-এর নাম নয়—কোন premise কীভাবে conclusion-কে যথাযথ সমর্থন দিতে ব্যর্থ হয়েছে তা দেখাও।", context: "একটি বিজ্ঞাপন বা দৈনন্দিন দাবির লুকানো assumption ও fallacy শনাক্ত করে যুক্তিটি উন্নত করো।" },
  },
  islamic_history: {
    "Pre-Islamic Arabia": { terms: "ভূগোল, গোত্র, সমাজ, অর্থনীতি, ধর্মবিশ্বাস, সংস্কৃতি ও জাহেলিয়াত", anchor: "ইসলাম-পূর্ব আরবকে একমাত্রিকভাবে নয়—ভৌগোলিক অবস্থা, গোত্রব্যবস্থা, ইতিবাচক রীতি ও সামাজিক সমস্যার সমন্বয়ে ব্যাখ্যা করো।", context: "আরবের ভূগোল ও গোত্রব্যবস্থা সমাজ, বাণিজ্য এবং রাজনৈতিক ঐক্যকে কীভাবে প্রভাবিত করেছিল তা বিশ্লেষণ করো।" },
    "Life and mission of Prophet Muhammad (PBUH)": { terms: "নবুয়ত, মক্কি জীবন, হিজরত, মদিনা সনদ, দাওয়াত, রাষ্ট্রগঠন ও বিদায় হজ", anchor: "জীবনের ঘটনাগুলো কালানুক্রমে সাজিয়ে প্রতিটি ঘটনার কারণ, পদক্ষেপ এবং ঐতিহাসিক তাৎপর্য আলাদা করো।", context: "হিজরত কীভাবে দাওয়াতের নতুন পর্যায় ও সমাজ-রাষ্ট্র গঠনের সুযোগ তৈরি করেছিল তা ব্যাখ্যা করো।" },
    "The Rashidun Caliphate": { terms: "খিলাফত, নির্বাচন, শুরা, প্রশাসন, সম্প্রসারণ, বিচার ও জনকল্যাণ", anchor: "প্রত্যেক খলিফার সময়ের চ্যালেঞ্জ, গৃহীত নীতি ও ফল তুলনা করে প্রতিষ্ঠানগত বিকাশ দেখাও।", context: "খোলাফায়ে রাশেদিনের প্রশাসনিক নীতি ও সংকট মোকাবিলার পদ্ধতি তুলনা করো।" },
    "The Umayyad Caliphate": { terms: "উমাইয়া, কেন্দ্রীয় শাসন, প্রাদেশিক প্রশাসন, আরবীকরণ, সম্প্রসারণ ও উত্তরাধিকার", anchor: "রাজনৈতিক সাফল্য ও সীমাবদ্ধতা দুটোই প্রশাসন, সমাজ ও সাম্রাজ্য বিস্তারের প্রমাণে বিচার করো।", context: "উমাইয়া প্রশাসনিক সংস্কার সাম্রাজ্যের সংহতি ও বিরোধ—দুই ক্ষেত্রেই কী প্রভাব ফেলেছিল তা বিশ্লেষণ করো।" },
    "The Abbasid Caliphate": { terms: "আব্বাসীয় বিপ্লব, বাগদাদ, আমলাতন্ত্র, জ্ঞানচর্চা, বাণিজ্য, বিকেন্দ্রীকরণ ও পতন", anchor: "স্বর্ণযুগের সাংস্কৃতিক অবদানকে রাজনৈতিক পরিবর্তন ও অর্থনৈতিক নেটওয়ার্কের সঙ্গে যুক্ত করো।", context: "আব্বাসীয় যুগে রাজধানী, প্রশাসন ও জ্ঞানচর্চার বিকাশের পারস্পরিক সম্পর্ক দেখাও।" },
    "Muslim Spain": { terms: "আল-আন্দালুস, কর্ডোভা, আমিরাত, খিলাফত, জ্ঞানচর্চা, সহাবস্থান ও রিকনকুইস্তা", anchor: "রাজবংশের ক্রম, নগরসভ্যতা, জ্ঞান-বিজ্ঞান এবং রাজনৈতিক বিভাজনকে একই সময়রেখায় ব্যাখ্যা করো।", context: "মুসলিম স্পেনের সাংস্কৃতিক বিকাশ ও রাজনৈতিক দুর্বলতার কারণ-ফল বিশ্লেষণ করো।" },
    "Muslim civilisation and culture": { terms: "শিক্ষা, বিজ্ঞান, চিকিৎসা, দর্শন, সাহিত্য, শিল্প, স্থাপত্য ও অনুবাদ আন্দোলন", anchor: "অবদানের তালিকা নয়—প্রতিষ্ঠান, জ্ঞান বিনিময়, পদ্ধতি এবং দীর্ঘমেয়াদি প্রভাব উদাহরণে দেখাও।", context: "একটি জ্ঞানক্ষেত্রে মুসলিম পণ্ডিত, প্রতিষ্ঠান ও অনুবাদ কার্যক্রমের সম্মিলিত প্রভাব ব্যাখ্যা করো।" },
    "Muslim rule in Bengal": { terms: "বিজয়, সুলতানি শাসন, প্রশাসন, কৃষি, নগর, স্থাপত্য, ভাষা ও সংস্কৃতি", anchor: "শাসন পরিবর্তনকে রাজনৈতিক ঘটনার পাশাপাশি অর্থনীতি, বসতি, ভাষা ও সংস্কৃতির রূপান্তরের সঙ্গে যুক্ত করো।", context: "বাংলায় মুসলিম শাসনের প্রশাসনিক ও সাংস্কৃতিক প্রভাব প্রমাণসহ বিশ্লেষণ করো।" },
    "The Mughal period": { terms: "মুঘল, সুবা বাংলা, মনসবদারি, রাজস্ব, বাণিজ্য, নগরায়ণ ও আঞ্চলিক শক্তি", anchor: "কেন্দ্রীয় নীতি ও বাংলার স্থানীয় বাস্তবতার পারস্পরিক সম্পর্ক ধরে প্রশাসন ও অর্থনীতি ব্যাখ্যা করো।", context: "মুঘল আমলে বাংলার রাজস্ব, বাণিজ্য ও নগরায়ণের সংযোগ বিশ্লেষণ করো।" },
    "Reform and revival movements": { terms: "সংস্কার, পুনর্জাগরণ, শিক্ষা, ধর্মীয় নেতৃত্ব, ঔপনিবেশিক প্রেক্ষাপট ও সামাজিক পরিবর্তন", anchor: "আন্দোলনের নেতা-কেন্দ্রিক তালিকার বদলে কারণ, লক্ষ্য, পদ্ধতি, সমর্থক এবং ফল আলাদা করো।", context: "একটি সংস্কার আন্দোলনের সামাজিক প্রেক্ষাপট, কর্মপদ্ধতি এবং দীর্ঘমেয়াদি প্রভাব মূল্যায়ন করো।" },
    "Muslim society and culture in Bengal": { terms: "সমাজ, শিক্ষা, সাহিত্য, লোকসংস্কৃতি, ধর্মীয় প্রতিষ্ঠান, স্থাপত্য ও পরিচয়", anchor: "অভিজাত ও সাধারণ মানুষের অভিজ্ঞতা, অঞ্চলভেদ এবং ধারাবাহিকতা-পরিবর্তন—তিন দিক বিবেচনা করো।", context: "বাংলার মুসলিম সমাজে শিক্ষা, সাহিত্য ও লোকসংস্কৃতির পারস্পরিক প্রভাব ব্যাখ্যা করো।" },
  },
  accounting: {
    "Accounting foundations": { terms: "asset, liability, owner’s equity, revenue, expense and drawings", anchor: "Classify each element by its economic meaning before deciding its normal balance.", context: "Classify the resources and obligations of a small Dhaka service business." },
    "Transactions and the accounting equation": { terms: "transaction, dual effect and accounting equation", anchor: "Every recognised transaction keeps Assets = Liabilities + Owner’s Equity in balance.", context: "Trace cash investment, credit purchase, revenue, expense and drawings through an equation table." },
    "Journal and ledger": { terms: "journal, debit, credit, narration, posting and ledger balance", anchor: "Analyse both accounts, apply debit-credit rules, journalise, post and balance.", context: "Record one week of transactions for a local stationery trader." },
    "Trial balance": { terms: "ledger balance, debit column, credit column and arithmetical agreement", anchor: "Equal totals test posting arithmetic but do not prove complete accuracy.", context: "Prepare a trial balance and identify errors it can and cannot disclose." },
    "Cash book and bank transactions": { terms: "cash book, contra entry, cheque, bank column and reconciliation", anchor: "Record cash and bank movements once, then explain timing differences with the bank statement.", context: "Reconcile deposits in transit and unpresented cheques for a Bangladeshi retailer." },
    "Financial statements": { terms: "gross profit, net profit, income statement and statement of financial position", anchor: "Match revenues and expenses, calculate profit and present assets, liabilities and equity.", context: "Prepare statements from an adjusted trial balance of a trading concern." },
    "Adjustments and rectification": { terms: "accrual, prepayment, outstanding expense, closing inventory and correction entry", anchor: "Adjust the period’s income and position without hiding the original audit trail.", context: "Correct omitted expense and year-end inventory adjustments." },
    "Depreciation and provisions": { terms: "depreciable amount, useful life, residual value, provision and carrying amount", anchor: "Allocate cost systematically; do not confuse depreciation with market valuation.", context: "Compare straight-line and reducing-balance charges for delivery equipment." },
    "Partnership accounts": { terms: "capital, current account, drawings, interest, salary and profit-sharing ratio", anchor: "Apply the partnership agreement before distributing residual profit.", context: "Prepare an appropriation account for three partners with different terms." },
    "Manufacturing accounts": { terms: "direct material, direct labour, factory overhead and cost of production", anchor: "Separate production cost from selling and administrative expense.", context: "Calculate prime cost and factory cost for a small garment workshop." },
  },
  finance: {
    "Introduction to finance": { terms: "financing, investment, dividend, liquidity and financial objective", anchor: "Financial decisions balance return, risk, cash availability and stakeholder interest.", context: "Classify decisions made by a growing Bangladeshi enterprise." },
    "Sources of finance": { terms: "equity, debt, retained earnings, short-term and long-term finance", anchor: "Match the duration and risk of the source to the purpose of funds.", context: "Choose separate funding for seasonal stock and new machinery." },
    "Time value of money": { terms: "present value, future value, compounding, discounting and annuity", anchor: "Money today and money later are comparable only after adjusting for time and rate.", context: "Compare a present investment with future cash receipts using stated rates." },
    "Risk and return": { terms: "expected return, business risk, financial risk, diversification and risk premium", anchor: "Higher expected return normally requires accepting or managing greater uncertainty.", context: "Compare two investment choices using expected outcome and risk." },
    "Financial institutions": { terms: "bank, non-bank institution, intermediary, deposit and credit", anchor: "Institutions channel funds and provide specialised services under different mandates.", context: "Match household and SME needs to suitable Bangladesh financial institutions." },
    "Commercial banking": { terms: "deposit, loan, advance, liquidity, credit creation and agency service", anchor: "Banks mobilise deposits while managing repayment, liquidity and credit risk.", context: "Assess a working-capital request from a seasonal trader." },
    "Central bank and monetary control": { terms: "currency issue, lender of last resort, policy rate, reserve and open-market operation", anchor: "Monetary tools influence liquidity, credit conditions and price stability through different channels.", context: "Explain how a policy action may affect bank lending without inventing current rates." },
    "Bank accounts and instruments": { terms: "current account, savings account, cheque, draft, electronic transfer and endorsement", anchor: "Select an account or instrument according to purpose, access, cost and security.", context: "Recommend payment methods for a student, trader and importing firm." },
    "Insurance and risk management": { terms: "risk pooling, premium, insurable interest, indemnity, utmost good faith and claim", anchor: "Insurance transfers specified financial risk; it does not remove the underlying event.", context: "Analyse property and life-risk needs of a family-owned business." },
    "Foreign exchange and trade finance": { terms: "exchange rate, letter of credit, bill of exchange, remittance and trade document", anchor: "International settlement requires document control, currency conversion and counterparty assurance.", context: "Map the payment documents in a Bangladesh import transaction." },
    "Capital market": { terms: "share, bond, primary market, secondary market, return and investor protection", anchor: "Capital markets connect long-term fund raisers with investors through tradable claims.", context: "Compare issuing shares with bonds for business expansion." },
    "Financial planning and control": { terms: "budget, forecast, cash flow, variance and financial control", anchor: "Plan expected cash, compare actual results and investigate meaningful variances.", context: "Prepare and interpret a short cash budget for an SME." },
  },
  business: {
    "Nature of business": { terms: "business, profession, employment, industry, commerce and service", anchor: "Classify economic activity by purpose, risk, continuity and reward.", context: "Classify familiar Bangladesh occupations and enterprises." },
    "Business environment": { terms: "internal, micro, macro, economic, social, technological and legal environment", anchor: "Connect each environmental change to a specific opportunity, cost, risk or response.", context: "Analyse digital payment growth and regulatory change for a retailer." },
    "Forms of business ownership": { terms: "ownership, liability, control, continuity, capital and legal identity", anchor: "Choose ownership by comparing control, risk, finance, continuity and compliance.", context: "Recommend a form for a family venture planning national expansion." },
    "Management principles": { terms: "division of work, authority, responsibility, unity, discipline and scalar chain", anchor: "Principles guide coordinated decisions but require situational judgment.", context: "Resolve conflicting instructions and unclear accountability in a firm." },
    "Sole proprietorship and partnership": { terms: "sole owner, partner, deed, unlimited liability, mutual agency and dissolution", anchor: "Compare simplicity and control with shared resources, agency risk and continuity.", context: "Advise two entrepreneurs deciding whether to form a partnership." },
    "Company and cooperative": { terms: "separate legal entity, share, limited liability, board, member and cooperative principle", anchor: "Companies raise capital through ownership claims; cooperatives organise around member benefit.", context: "Compare a private company with a producer cooperative." },
    "Planning and decision making": { terms: "objective, forecast, policy, procedure, alternative and decision criterion", anchor: "Good planning moves from objective and evidence to alternatives, choice and review.", context: "Build a response plan for rising costs and uncertain demand." },
    "Organising": { terms: "structure, delegation, departmentation, span of control and authority", anchor: "Arrange work and reporting so responsibility, resources and coordination are clear.", context: "Redesign the structure of a growing multi-branch retailer." },
    "Staffing and leadership": { terms: "recruitment, selection, training, leadership style and performance", anchor: "Match capable people and leadership behaviour to task and organisational need.", context: "Select and develop supervisors for a new production line." },
    "Motivation and communication": { terms: "need, incentive, morale, channel, feedback and communication barrier", anchor: "Motivation and communication improve performance only when needs, message and feedback align.", context: "Address low morale and production errors caused by unclear instructions." },
    "Coordination and control": { terms: "standard, measurement, variance, corrective action and coordination", anchor: "Control compares actual performance with standards and corrects significant deviation.", context: "Investigate delivery delays across sales, inventory and transport teams." },
    "Entrepreneurship and business ethics": { terms: "innovation, opportunity, calculated risk, stakeholder, integrity and social responsibility", anchor: "Sustainable enterprise combines opportunity recognition with lawful and ethical conduct.", context: "Evaluate a startup decision involving customer data and environmental cost." },
  },
  economics: {
    "Basic economic problems": { terms: "scarcity, choice, opportunity cost, resources and production possibility", anchor: "Limited resources force choices about what, how and for whom to produce.", context: "Use a production possibility schedule for agriculture and manufactured goods." },
    "Utility and consumer behaviour": { terms: "total utility, marginal utility, diminishing utility and consumer equilibrium", anchor: "Successive units usually add less satisfaction; rational allocation compares marginal benefit.", context: "Complete a utility schedule and identify equilibrium." },
    "Demand and supply": { terms: "demand, supply, determinant, movement, shift, shortage, surplus and equilibrium", anchor: "Price changes move along curves; non-price determinants shift curves.", context: "Analyse a food market after income and production-cost changes." },
    "Production and cost": { terms: "short run, total product, marginal product, fixed cost, variable cost and marginal cost", anchor: "Relate input productivity to cost while showing every formula and unit.", context: "Complete product and cost tables for a small producer." },
    "Market structures": { terms: "competition, monopoly, product differentiation, entry barrier and price control", anchor: "Classify markets by sellers, product, information, entry and pricing power.", context: "Compare a competitive local market with a concentrated service market." },
    "National income": { terms: "GDP, GNI, value added, nominal, real and per-capita income", anchor: "Avoid double counting and distinguish current-price change from real output change.", context: "Calculate value added across a Bangladesh production chain." },
    "Money, banking and inflation": { terms: "money, deposit, credit, price level, inflation and purchasing power", anchor: "Inflation is a sustained general price rise, not one product becoming expensive.", context: "Explain how inflation affects savers, borrowers and fixed-income households." },
    "Public finance": { terms: "public revenue, tax, expenditure, budget, deficit and public debt", anchor: "Evaluate public choices through equity, efficiency, stability and development goals.", context: "Classify taxes and assess a development-spending decision." },
    "International trade": { terms: "comparative advantage, export, import, tariff, quota and balance of trade", anchor: "Specialisation depends on relative opportunity cost, while trade policy creates gains and costs.", context: "Compare opportunity costs of two goods between two countries." },
    "Development and Bangladesh economy": { terms: "growth, development, poverty, inequality, human capital and structural change", anchor: "Development combines income with capability, inclusion, resilience and institutional quality.", context: "Evaluate a policy using employment, productivity and human-development effects." },
  },
  civics: {
    "Introduction to civics": { terms: "citizen, citizenship, state, government, society and nation", anchor: "Distinguish permanent state elements from the changing machinery of government.", context: "Classify civic institutions and citizen responsibilities in Bangladesh." },
    "Values, law and liberty": { terms: "value, law, morality, custom, liberty and rule of law", anchor: "Liberty operates with lawful limits that protect equal freedom and public safety.", context: "Balance expression and protection from demonstrable harm." },
    "Rights and duties": { terms: "right, duty, civil, political, social and reciprocal responsibility", anchor: "Rights and duties reinforce one another within lawful constitutional order.", context: "Analyse a citizen claiming a right while ignoring a related duty." },
    "Political institutions": { terms: "institution, legislature, executive, judiciary, party and bureaucracy", anchor: "Institutions organise authority through defined roles, procedures and accountability.", context: "Map a public decision through relevant institutions." },
    "Constitution and constitutionalism": { terms: "constitution, supremacy, limited government, amendment and constitutionalism", anchor: "A constitution establishes authority; constitutionalism restrains its exercise.", context: "Evaluate whether a public action follows lawful authority and procedure." },
    "Organs of government": { terms: "legislature, executive, judiciary, separation and checks", anchor: "Each organ has a distinct function while lawful checks limit concentrated power.", context: "Trace a law from enactment through implementation and judicial review." },
    "Democracy and elections": { terms: "representation, participation, election, accountability and legitimacy", anchor: "Democracy requires meaningful participation, competition, rights and accountable institutions.", context: "Assess conditions that make an election substantively representative." },
    "Good governance": { terms: "accountability, transparency, participation, effectiveness and rule of law", anchor: "Good governance links lawful process with responsive and effective public service.", context: "Evaluate a local service-delivery case using governance indicators." },
    "Public opinion and political parties": { terms: "public opinion, media, interest, party, manifesto and opposition", anchor: "Opinion and parties connect citizens to policy but require information and internal accountability.", context: "Analyse how a public issue moves into organised political debate." },
    "Citizenship in Bangladesh": { terms: "citizenship, identity, participation, equality, duty and civic responsibility", anchor: "Responsible citizenship combines lawful status with informed participation and respect for others.", context: "Design a citizen response to a community service problem." },
  },
  history: {
    "Historical sources and method": { terms: "primary source, secondary source, provenance, bias and corroboration", anchor: "Judge evidence by origin, purpose, context, limitation and comparison.", context: "Compare an official record with a participant’s memoir." },
    "Bengal under colonial rule": { terms: "colonial control, administration, revenue, trade, resistance and social effect", anchor: "Connect policy to uneven political, economic and social consequences.", context: "Evaluate official and cultivator accounts of a revenue system." },
    "Political awakening": { terms: "association, education, press, reform, representation and nationalism", anchor: "Political consciousness developed through social change, organisation and public debate.", context: "Build a cause-development-consequence timeline from sources." },
    "Language movement": { terms: "state language, cultural identity, protest, 21 February 1952 and nationalism", anchor: "Explain background, mobilisation, sacrifice, outcome and wider significance.", context: "Compare policy statements, student appeals and later reflections." },
    "Partition and political change": { terms: "partition, boundary, migration, communal tension and political reorganisation", anchor: "Separate long-term causes, immediate decisions and varied human consequences.", context: "Use maps and testimonies to explain political and social change." },
    "United Front and autonomy movement": { terms: "coalition, election, regional demand, autonomy and political programme", anchor: "Trace how electoral demands developed into broader claims for regional power.", context: "Connect manifesto demands to later autonomy politics." },
    "Liberation War": { terms: "resistance, genocide, refugee, sector, international response and liberation", anchor: "Use verified chronology and multiple evidence types to explain struggle and outcome.", context: "Evaluate a timeline alongside testimony and diplomatic evidence." },
    "Early Bengal and regional powers": { terms: "region, dynasty, administration, economy, culture and source", anchor: "Reconstruct early history cautiously from material and written evidence.", context: "Compare inscription, archaeology and later narrative evidence." },
    "Social and cultural transformation": { terms: "reform, education, print, identity, social practice and cultural change", anchor: "Explain change through actors, institutions, resistance and long-term effect.", context: "Assess how education and print altered public life." },
    "Pakistan period and Bengali nationalism": { terms: "representation, language, economy, autonomy and nationalism", anchor: "Connect repeated political and economic grievances to identity and mobilisation.", context: "Organise evidence into political, economic and cultural strands." },
    "Mass uprising and the road to independence": { terms: "mass movement, six-point demand, uprising, election and non-cooperation", anchor: "Trace escalation through verified sequence, participation and political consequence.", context: "Build an evidence-led timeline leading toward independence." },
    "Independent Bangladesh": { terms: "reconstruction, constitution, institution, development and historical continuity", anchor: "Evaluate achievements and challenges through period-specific evidence rather than hindsight alone.", context: "Compare reconstruction priorities across political, economic and social fields." },
  },
  english: {
    "Guided textbook reading": { terms: "unit theme, main idea, textual evidence, inference and tone", anchor: "Read for meaning first, then support every response with a precise clue from the text.", context: "Annotate an English for Today-style lesson and connect its central idea, details and writer's attitude." },
    "Seen comprehension": { terms: "question focus, evidence, paraphrase, reference and precision", anchor: "Answer exactly what is asked, using the passage as evidence without copying unnecessary lines.", context: "Read a familiar textbook passage and build concise evidence-based answers." },
    "Unseen comprehension": { terms: "skimming, scanning, inference, reference word and contextual meaning", anchor: "Skim for the whole meaning, scan for evidence, then infer only what the passage supports.", context: "Read a new HSC-level passage and justify literal and inferential answers." },
    "Vocabulary in context": { terms: "context clue, synonym, antonym, collocation, register and word form", anchor: "Choose meaning from how the word functions in its sentence, not from a memorised isolated definition.", context: "Infer the meaning and suitable replacement of words in a short passage." },
    "Information transfer": { terms: "selection, table, flow, label, sequence and paraphrase", anchor: "Transfer every required fact accurately while removing examples and decorative wording.", context: "Convert a process or descriptive passage into a complete table or labelled flow." },
    "Flow-chart completion": { terms: "stage, sequence, cause, result, concise phrase and parallel form", anchor: "Keep the original order and express each stage with short, grammatically parallel phrases.", context: "Trace a passage's process and complete missing flow-chart steps." },
    "Summary writing": { terms: "central idea, compression, paraphrase, coherence and word control", anchor: "Retain the essential message, remove repetition and examples, and connect the remaining ideas naturally.", context: "Reduce a passage to a focused summary in original wording." },
    "Cloze test and contextual completion": { terms: "grammar signal, lexical fit, collocation, cohesion and meaning", anchor: "A correct word must fit both the grammar of the sentence and the meaning of the whole passage.", context: "Complete a connected text and explain the clue behind each choice." },
    "Sentence rearrangement": { terms: "opening clue, chronology, reference, connector, cause and effect", anchor: "Build the paragraph by tracking how ideas, pronouns and events depend on one another.", context: "Reconstruct a coherent narrative from shuffled sentences and verify every link." },
    "Paragraph and composition": { terms: "topic sentence, unity, coherence, support, counterargument and conclusion", anchor: "One controlling idea should organise relevant evidence and explanation; longer arguments should address a reasonable alternative view.", context: "Write on an education or environment issue familiar to Bangladesh students." },
    "Graph and chart description": { terms: "overview, trend, comparison, peak, low point and data accuracy", anchor: "Give the overall pattern first, then compare significant figures without inventing causes.", context: "Describe an education or population chart using accurate comparisons and units." },
    "Story completion": { terms: "setting, conflict, sequence, climax and resolution", anchor: "Continue consistently from the prompt and resolve the central conflict.", context: "Complete a story with plausible events and controlled tense." },
    "Articles and determiners": { terms: "definiteness, countability, specificity, quantity and zero article", anchor: "Decide whether the noun is general or specific and countable or uncountable before choosing a determiner.", context: "Complete a connected passage and justify article use from meaning and noun type." },
    "Prepositions": { terms: "time, place, direction, relation, fixed phrase and collocation", anchor: "Use the relationship expressed in context and learn fixed combinations as complete phrases.", context: "Choose prepositions in a passage and explain the relationship each one expresses." },
    "Special words and phrases": { terms: "had better, would rather, let alone, as soon as and contextual structure", anchor: "Learn each structure with its meaning, grammatical pattern and a natural example.", context: "Complete sentences with suitable special phrases while preserving intended meaning." },
    "Completing sentences": { terms: "clause, condition, purpose, result, comparison and logical sequence", anchor: "Complete both the grammar and the idea; the added clause must logically follow the given part.", context: "Finish incomplete sentences using appropriate clause patterns and realistic meaning." },
    "Right form of verbs and agreement": { terms: "tense, subject-verb agreement, voice, infinitive, gerund and participle", anchor: "Find the time, subject and surrounding structure before selecting the verb form.", context: "Complete a connected passage and explain each verb choice from grammar and context." },
    "Sentence transformation": { terms: "meaning preservation, clause structure, degree, voice and polarity", anchor: "Change the form without changing the central meaning or omitting essential information.", context: "Transform sentences and compare the original and revised meanings." },
    "Narration": { terms: "reporting verb, tense sequence, pronoun, time reference and punctuation", anchor: "Identify speaker, listener, reporting context and sentence type before applying changes.", context: "Convert a short dialogue into coherent indirect speech and justify key changes." },
    "Pronoun reference": { terms: "antecedent, number, person, gender, agreement and ambiguity", anchor: "Every pronoun must point clearly to one suitable antecedent and agree with it.", context: "Repair ambiguous pronoun references in a connected paragraph." },
    "Modifiers": { terms: "headword, premodifier, postmodifier, phrase, clause and placement", anchor: "Place each modifier close to the word it describes so the sentence cannot be misread.", context: "Add and correct modifiers in a paragraph while preserving natural meaning." },
    "Sentence connectors": { terms: "addition, contrast, cause, result, example and sequence", anchor: "Choose the connector from the logical relationship between the two ideas.", context: "Complete a passage with connectors and label the relationship each one creates." },
    "Punctuation and editing": { terms: "sentence boundary, comma, apostrophe, capitalisation, quotation and proofreading", anchor: "Read for meaning and sentence structure first, then apply punctuation and spelling consistently.", context: "Edit an unpunctuated paragraph and explain the most important corrections." },
    "Formal writing and composition": { terms: "purpose, audience, format, tone, organisation and proofreading", anchor: "Match content, register and layout to the exact task, then revise for clarity and accuracy.", context: "Plan, draft and edit a formal or extended writing task for a specified reader." },
  },
};

function getChapterKnowledge(subjectId: string, chapter: ChapterPreview): ChapterKnowledge {
  const recorded = chapterKnowledge[subjectId]?.[chapter.title];
  if (recorded) return recorded;
  const blueprint = subjectBlueprints[subjectId];
  if (chapter.sourceRef?.book.includes("সাহিত্যপাঠ") || chapter.sourceRef?.book.includes("সহপাঠ")) return {
    terms: `${chapter.titleBn}, ${chapter.author ?? "রচয়িতা"}, রচনাপ্রেক্ষাপট, মূলভাব, ভাষাশৈলী, পাঠ-প্রমাণ`,
    anchor: `“${chapter.titleBn}” পাঠে লেখক-প্রেক্ষাপট, কেন্দ্রীয় বক্তব্য, ঘটনা বা চিত্রকল্প এবং ভাষার ব্যবহারকে আলাদা করে বুঝে শেষে তাদের পারস্পরিক সম্পর্ক দেখাও।`,
    context: `“${chapter.titleBn}” থেকে প্রাসঙ্গিক ঘটনা, চরিত্র, চিত্রকল্প বা বক্তব্য শনাক্ত করে উদ্দীপকের সঙ্গে সুনির্দিষ্ট মিল-অমিল বিশ্লেষণ করো।`,
  };
  if (chapter.sourceRef?.book === "NCTB English for Today") return {
    terms: [chapter.title, ...(chapter.lessonPlan ?? []).map((lesson) => lesson.title)].join(", "),
    anchor: `Read every lesson in ${chapter.title} for main idea, evidence, inference, vocabulary and writer's purpose; answer in clear original English.`,
    context: `Connect the ideas across ${(chapter.lessonPlan ?? []).map((lesson) => lesson.title).join("; ")} and complete an HSC-format comprehension or writing task.`,
  };
  if (chapter.sourceRef?.evidence === "reference-guide") return {
    terms: `${chapter.titleBn}, মূল ধারণা, পরিভাষা, প্রয়োগ, উদ্দীপক ও মূল্যায়ন`,
    anchor: `${chapter.titleBn}-এর প্রতিটি সংজ্ঞা, নিয়ম ও ধাপ সহজ ভাষায় বুঝে উদাহরণে প্রয়োগ করো; গাইডের দাবিকে অফিসিয়াল যাচাই হিসেবে ব্যবহার করো না।`,
    context: `বাংলাদেশের পরিচিত শিক্ষা, ব্যবসা বা নাগরিক জীবনের একটি পরিস্থিতিতে ${chapter.titleBn}-এর ধারণা প্রয়োগ করে ধাপে ধাপে সিদ্ধান্ত দেখাও।`,
  };
  return {
    terms: `${chapter.title}, core terminology, application and analysis`,
    anchor: blueprint.method,
    context: `${blueprint.application}: ${chapter.title}`,
  };
}

function generatedQuestions(subjectId: string, chapter: ChapterPreview, blueprint: SubjectBlueprint, detail: ChapterKnowledge): NonNullable<ExamResource["bank"]["questions"]> {
  const questions: NonNullable<ExamResource["bank"]["questions"]> = [
    { type: "MCQ", level: "Foundation", category: "Concept", prompt: `Which statement correctly connects these terms: ${detail.terms}?`, answerGuide: `Choose the option consistent with this rule: ${detail.anchor}` },
    { type: "MCQ", level: "Standard", category: "Application", prompt: detail.context, answerGuide: `Identify the deciding fact first, then apply: ${detail.anchor}` },
    { type: "CQ", level: "Standard", category: "Board-style", prompt: `${detail.context} Answer knowledge, comprehension, application and higher-order parts.`, answerGuide: "Knowledge 1 mark: exact term. Comprehension 2 marks: explain the relationship. Application 3 marks: use stimulus evidence. Higher order 4 marks: analyse, justify and conclude." },
    { type: "CQ", level: "Challenge", category: "Application", prompt: `Interpret conflicting evidence about ${chapter.title} and recommend or evaluate the strongest conclusion.`, answerGuide: `Extract evidence, apply the relevant rule, acknowledge a limitation and justify the conclusion. ${blueprint.evidence}` },
    { type: "Written", level: "Foundation", category: "Concept", prompt: `Write a concise explanatory note on ${chapter.title} using three essential terms.`, answerGuide: "Opening definition, three connected points, one relevant example and a one-sentence conclusion." },
    { type: "Written", level: "Challenge", category: "Board-style", prompt: `Evaluate the importance or practical application of ${chapter.title} in a Bangladesh context.`, answerGuide: `Use a clear claim, organised evidence, application and balanced conclusion. ${blueprint.bangladesh}` },
  ];
  if (subjectId === "english") {
    return ([
      ...questions,
      { type: "Written", level: "Standard", category: "Application", prompt: `Complete an HSC-standard task on ${chapter.title}, then explain in Bangla why your structure is suitable.`, answerGuide: "Check purpose, audience, organisation, language accuracy and task completion.", marks: 10 },
      { type: "CQ", level: "Challenge", category: "Board-style", prompt: `Analyse a model and a weak response to ${chapter.title}. Identify four improvements.`, answerGuide: "Award marks for task understanding, organisation, language correction and a justified improved version.", marks: 10 },
      { type: "MCQ", level: "Standard", category: "Concept", prompt: `Which approach is most suitable for ${chapter.title}?`, answerGuide: "Choose the approach that fulfils purpose, audience, organisation and accuracy.", optionsBn: ["Plan for purpose and audience, then draft and proofread", "Memorise one answer for every task", "Ignore format and write one long paragraph", "Use difficult words without checking meaning"], correctIndex: 0, marks: 1 },
      { type: "MCQ", level: "Challenge", category: "Application", prompt: `Which revision would improve a weak ${chapter.title} response most?`, answerGuide: "Task completion and clear organisation come before decorative vocabulary.", optionsBn: ["Remove irrelevant ideas and organise evidence around the task", "Add an unrelated quotation", "Repeat the introduction", "Change every simple word to a longer word"], correctIndex: 0, marks: 1 },
      { type: "Written", level: "Challenge", category: "Board-style", prompt: `Write, edit and proofread a complete response on ${chapter.title}; then list three corrections you made.`, answerGuide: "Assess task fulfilment, structure, language control, correction quality and final presentation.", marks: 10 },
      { type: "CQ", level: "Standard", category: "Application", prompt: `A student’s ${chapter.title} response is relevant but poorly organised. Diagnose the problem and rewrite its structure.`, answerGuide: "Identify the controlling idea, reorder support, improve transitions and justify the revised structure.", marks: 10 },
      { type: "MCQ", level: "Foundation", category: "Concept", prompt: `Which first step is most effective for an HSC task on ${chapter.title}?`, answerGuide: "Begin by identifying the exact task, audience, format and required information.", optionsBn: ["Identify the task, audience and required format", "Write a memorised introduction immediately", "Ignore the command word", "Choose difficult vocabulary first"], correctIndex: 0, marks: 1 },
      { type: "MCQ", level: "Standard", category: "Application", prompt: `Which final check would improve a response on ${chapter.title} most?`, answerGuide: "The final check should confirm task completion, organisation and language accuracy.", optionsBn: ["Check every requirement and proofread", "Add an unrelated quotation", "Repeat the same point", "Remove all transitions"], correctIndex: 0, marks: 1 },
      { type: "MCQ", level: "Challenge", category: "Board-style", prompt: `Two answers to ${chapter.title} reach the same conclusion. Which deserves the higher mark?`, answerGuide: "The stronger response is relevant, organised, supported and accurately expressed.", optionsBn: ["The answer with relevant evidence and controlled language", "The longest answer", "The answer with the most difficult words", "The answer that copies the prompt"], correctIndex: 0, marks: 1 },
      { type: "Written", level: "Foundation", category: "Concept", prompt: `Prepare a one-page revision note for ${chapter.title}.`, answerGuide: "Include the purpose, essential structure, key language rules, one miniature example and a proofreading checklist.", marks: 8 },
      { type: "Written", level: "Standard", category: "Board-style", prompt: `Write a complete board-style response on ${chapter.title} for a clearly stated purpose and audience.`, answerGuide: "Assess relevance, format, paragraph organisation, vocabulary, grammar, spelling and task completion.", marks: 10 },
      { type: "CQ", level: "Challenge", category: "Board-style", prompt: `Evaluate a sample response to ${chapter.title}, award marks with reasons, and produce an improved version.`, answerGuide: "Use a transparent marking breakdown for content, organisation, language control and final presentation.", marks: 10 },
      { type: "Written", level: "Standard", category: "College-standard", prompt: `Your college sets a focused written task on ${chapter.title}. Produce a complete answer within the stated format and word limit.`, answerGuide: "Award marks for task fulfilment, logical organisation, accurate language, suitable register and final proofreading.", marks: 10 },
      { type: "CQ", level: "Challenge", category: "College-standard", prompt: `A college model test combines interpretation and writing skills from ${chapter.title}. Complete the task and justify two important language choices.`, answerGuide: "Assess interpretation, application, language control, justification and overall presentation.", marks: 10 },
    ] as NonNullable<ExamResource["bank"]["questions"]>).map((question, questionIndex) => ({
      ...question,
      ...(question.type === "MCQ" && !question.optionsBn ? {
        optionsBn: questionIndex === 0
          ? [detail.anchor, "Copy every sentence from the prompt", "Ignore the purpose and audience", "Use examples without a controlling idea"]
          : ["Identify the decisive information and apply the correct rule", "Guess from one familiar word", "Write before reading the complete task", "Ignore evidence from the text"],
        correctIndex: 0,
        marks: 1,
      } : {}),
      sourceStatus: "authored-board-pattern" as const,
    }));
  }
  const name = chapter.titleBn;
  const bn = banglaChapterDetails[chapter.title];
  const terms = bn?.terms ?? [name, "মূল ধারণা", "প্রয়োগ", "বিশ্লেষণ"];
  const example = bn?.example ?? `বাংলাদেশের প্রেক্ষাপটে “${name}” বিষয়টির একটি বাস্তব প্রয়োগ বিশ্লেষণ করো।`;
  const core = bn?.core ?? `“${name}” অধ্যায়ের ধারণা ও প্রয়োগ।`;
  const common = { sourceStatus: "authored-board-pattern" as const };
  const subjectCases: Record<string, { scenario: string; correct: string; wrong: string[]; evidence: string }> = {
    accounting: { scenario: "একটি লেনদেনের ডেবিট ঠিক হলেও ক্রেডিট দিক পোস্ট করা হয়নি", correct: "অসম্পূর্ণ দ্বৈত দাখিলা শনাক্ত করে উভয় দিক সংশোধন", wrong: ["জোর করে সমতা আনা", "শুধু narration বদলানো", "লেনদেনটি বাদ দেওয়া"], evidence: "দাখিলা, খতিয়ান, জের এবং সমতার ধারাবাহিক প্রমাণ" },
    finance: { scenario: "দীর্ঘমেয়াদি সম্পদের জন্য খুব স্বল্পমেয়াদি ঋণ নেওয়া হয়েছে", correct: "অর্থের প্রয়োজন ও উৎসের মেয়াদ সামঞ্জস্য করা", wrong: ["শুধু কম সুদের হার দেখা", "ঝুঁকি উপেক্ষা করা", "নগদপ্রবাহ না দেখা"], evidence: "ব্যয়, ঝুঁকি, সময়, তারল্য ও পরিশোধক্ষমতার তুলনা" },
    business: { scenario: "একই কাজের জন্য দুই কর্মকর্তা পরস্পরবিরোধী নির্দেশ দিচ্ছেন", correct: "কর্তৃত্ব ও reporting line স্পষ্ট করা", wrong: ["আরও নির্দেশ যোগ করা", "দায়িত্ব না দিয়ে শাস্তি দেওয়া", "সমস্যাটি উপেক্ষা করা"], evidence: "নীতি, সমস্যার কারণ, ব্যবস্থাপনা পদক্ষেপ ও ফলের সূচক" },
    economics: { scenario: "দাম অপরিবর্তিত থাকলেও ভোক্তার আয় বাড়ায় স্বাভাবিক দ্রব্যের ক্রয় বেড়েছে", correct: "চাহিদা রেখার ডানদিকে স্থানান্তর", wrong: ["চাহিদা রেখা বরাবর নিচে চলাচল", "যোগান রেখার বামে স্থানান্তর", "চাহিদার সংকোচন"], evidence: "পরিবর্তিত নির্ধারক, রেখার দিক, নতুন ভারসাম্য ও অর্থনৈতিক ব্যাখ্যা" },
    civics: { scenario: "একটি সরকারি প্রতিষ্ঠান সিদ্ধান্তের কারণ প্রকাশ করছে না", correct: "স্বচ্ছতা ও জবাবদিহির ঘাটতি", wrong: ["ক্ষমতার সম্পূর্ণ পৃথকীকরণ", "নাগরিকত্ব বাতিল", "সংসদীয় সার্বভৌমত্বের সমাপ্তি"], evidence: "আইন, প্রতিষ্ঠান, অধিকার, দায়িত্ব ও নাগরিক প্রভাব" },
    history: { scenario: "একই ঘটনা নিয়ে দুটি সমকালীন উৎসে ভিন্ন বিবরণ আছে", correct: "উৎসের উৎপত্তি ও উদ্দেশ্য যাচাই করে পারস্পরিক মিল খোঁজা", wrong: ["একটি উৎস সঙ্গে সঙ্গে বাতিল করা", "পরবর্তী লেখাকেই সবসময় সত্য ধরা", "তারিখ ছাড়া সিদ্ধান্ত দেওয়া"], evidence: "কালানুক্রম, উৎস-পরিচয়, পক্ষপাত, সীমাবদ্ধতা ও corroboration" },
  };
  const subjectCase = subjectCases[subjectId] ?? { scenario: example, correct: "প্রাসঙ্গিক নীতি প্রয়োগ", wrong: ["অপ্রাসঙ্গিক মতামত", "প্রমাণহীন সিদ্ধান্ত", "প্রশ্ন এড়িয়ে যাওয়া"], evidence: "ধারণা, প্রয়োগ, প্রমাণ ও সিদ্ধান্ত" };
  const banglaQuestions: NonNullable<ExamResource["bank"]["questions"]> = [
    { type: "MCQ", level: "Foundation", category: "Concept", prompt: "", answerGuide: "", promptBn: `“${name}” অধ্যায়ের আলোচনার সঙ্গে সবচেয়ে সরাসরি সম্পর্কিত পরিভাষা কোনটি?`, optionsBn: [terms[0], "অপ্রাসঙ্গিক ব্যক্তিগত মতামত", "শুধু মুখস্থ তথ্য", "কোনোটিই নয়"], correctIndex: 0, answerGuideBn: `সঠিক উত্তর: ${terms[0]}। ${core}`, marks: 1, ...common },
    { type: "MCQ", level: "Foundation", category: "Concept", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে সঠিক শেখার পদ্ধতি কোনটি?`, optionsBn: ["ধারণা বুঝে উদাহরণে প্রয়োগ করা", "শুধু সংজ্ঞা মুখস্থ করা", "প্রশ্ন না পড়ে উত্তর লেখা", "প্রমাণ ছাড়া সিদ্ধান্ত দেওয়া"], correctIndex: 0, answerGuideBn: "সঠিক উত্তর: ধারণা বুঝে উদাহরণে প্রয়োগ করা। বোর্ড প্রশ্নে সংজ্ঞার পাশাপাশি প্রয়োগ ও যুক্তি দেখাতে হয়।", marks: 1, ...common },
    { type: "MCQ", level: "Standard", category: "Application", prompt: "", answerGuide: "", promptBn: `${example}—এই পরিস্থিতি সমাধানের প্রথম কাজ কোনটি?`, optionsBn: ["প্রশ্নের চাওয়া ও নির্ণায়ক তথ্য চিহ্নিত করা", "সঙ্গে সঙ্গে উপসংহার লেখা", "অপ্রাসঙ্গিক সংজ্ঞা লেখা", "প্রশ্নটি এড়িয়ে যাওয়া"], correctIndex: 0, answerGuideBn: "প্রথমে প্রশ্নের নির্দেশক শব্দ ও উদ্দীপকের নির্ণায়ক তথ্য চিহ্নিত করতে হবে; এরপর প্রাসঙ্গিক নীতি প্রয়োগ করা যায়।", marks: 1, ...common },
    { type: "MCQ", level: "Challenge", category: "Application", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে উচ্চতর দক্ষতার উত্তরের সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য কোনটি?`, optionsBn: ["প্রমাণভিত্তিক বিশ্লেষণ ও যুক্তিসংগত সিদ্ধান্ত", "দীর্ঘ ভূমিকা", "একই কথা বারবার লেখা", "শুধু উদ্দীপক নকল করা"], correctIndex: 0, answerGuideBn: "ঘ নম্বর উত্তরে উদ্দীপক, পাঠ্যবইয়ের নীতি, বিশ্লেষণ এবং বিচারসম্মত সিদ্ধান্তের যোগসূত্র থাকতে হবে।", marks: 1, ...common },
    { type: "CQ", level: "Standard", category: "Board-style", prompt: "", answerGuide: "", promptBn: `উদ্দীপক: ${example}\nক. ${terms[0]} কী?\nখ. ${terms[1] ?? terms[0]} ব্যাখ্যা করো।\nগ. উদ্দীপকে “${name}” অধ্যায়ের ধারণাটি প্রয়োগ করো।\nঘ. উদ্দীপকের সিদ্ধান্তটি বিশ্লেষণ ও মূল্যায়ন করো।`, answerGuideBn: `ক—১: ${terms[0]}-এর নির্ভুল পরিচয়। খ—২: ধারণা ও সম্পর্ক ব্যাখ্যা। গ—৩: উদ্দীপকের তথ্য ধরে পদ্ধতির প্রয়োগ। ঘ—৪: প্রমাণ, বিশ্লেষণ, মূল্যায়ন ও সিদ্ধান্ত।`, marks: 10, ...common },
    { type: "CQ", level: "Standard", category: "Application", prompt: "", answerGuide: "", promptBn: `উদ্দীপক: “${name}” বিষয়ে একজন শিক্ষার্থী সঠিক ধারণা লিখলেও উদ্দীপকের তথ্য ব্যবহার করেনি।\nক. প্রাসঙ্গিক একটি পরিভাষা লেখো।\nখ. ধারণা ও প্রয়োগের পার্থক্য বোঝাও।\nগ. উদ্দীপকের তথ্য ব্যবহার করে উত্তরটি উন্নত করো।\nঘ. তার উত্তর পূর্ণ নম্বর না পাওয়ার কারণ মূল্যায়ন করো।`, answerGuideBn: "ক—সঠিক পরিভাষা। খ—সাধারণ ব্যাখ্যা বনাম পরিস্থিতিভিত্তিক ব্যবহার। গ—নির্দিষ্ট তথ্যের সঙ্গে নীতি যুক্ত করা। ঘ—মানবণ্টন ধরে ঘাটতি ও উন্নয়ন ব্যাখ্যা।", marks: 10, ...common },
    { type: "CQ", level: "Challenge", category: "Board-style", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে দুটি বিপরীত সিদ্ধান্ত দেওয়া হলো। পাঠ্যবইয়ের নীতি, প্রাসঙ্গিক তথ্য ও বাংলাদেশের বাস্তবতা ধরে অধিক গ্রহণযোগ্য সিদ্ধান্তটি নির্ধারণ করো।`, answerGuideBn: "দুটি সিদ্ধান্তের ভিত্তি আলাদা করো, প্রাসঙ্গিক নীতি প্রয়োগ করো, সীমাবদ্ধতা স্বীকার করো এবং তুলনামূলক যুক্তিতে সিদ্ধান্ত দাও।", marks: 10, ...common },
    { type: "CQ", level: "Challenge", category: "Application", prompt: "", answerGuide: "", promptBn: `${core}—এই বক্তব্যের যথার্থতা একটি নতুন উদাহরণ, প্রয়োজনীয় হিসাব/প্রমাণ এবং একটি ব্যতিক্রম ব্যবহার করে বিচার করো।`, answerGuideBn: "মূল দাবি ব্যাখ্যা, নতুন উদাহরণে প্রয়োগ, বিষয়ভেদে হিসাব/প্রমাণ, সীমাবদ্ধতা এবং স্পষ্ট চূড়ান্ত বিচার—এই পাঁচ অংশ দেখো।", marks: 10, ...common },
    { type: "Written", level: "Foundation", category: "Concept", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে ${terms.slice(0, 3).join(", ")} পরিভাষা ব্যবহার করে সংক্ষিপ্ত টীকা লেখো।`, answerGuideBn: "সংজ্ঞা দিয়ে শুরু, তিনটি পরিভাষার সম্পর্ক, একটি প্রাসঙ্গিক উদাহরণ এবং এক বাক্যের সারাংশ।", marks: 5, ...common },
    { type: "Written", level: "Challenge", category: "Board-style", prompt: "", answerGuide: "", promptBn: `বাংলাদেশের বাস্তবতায় “${name}” অধ্যায়ের গুরুত্ব, প্রয়োগ ও সীমাবদ্ধতা মূল্যায়ন করো।`, answerGuideBn: "ভূমিকা ১, মূল ধারণা ২, বাংলাদেশভিত্তিক প্রয়োগ ৩, বিশ্লেষণ/সীমাবদ্ধতা ২ এবং উপসংহার ২ নম্বর।", marks: 10, ...common },
    { type: "MCQ", level: "Standard", category: "Application", prompt: "", answerGuide: "", promptBn: `${subjectCase.scenario}—সবচেয়ে যথাযথ বিশ্লেষণ কোনটি?`, optionsBn: [subjectCase.correct, ...subjectCase.wrong], correctIndex: 0, answerGuideBn: `সঠিক উত্তর: ${subjectCase.correct}। কারণ “${name}” অধ্যায়ের নীতি অনুযায়ী ঘটনাটির নির্ণায়ক তথ্য আগে শনাক্ত করতে হয়।`, marks: 1, ...common },
    { type: "MCQ", level: "Foundation", category: "Concept", prompt: "", answerGuide: "", promptBn: `“${name}” প্রশ্নে পূর্ণ নম্বরের জন্য কোন প্রমাণটি সবচেয়ে কার্যকর?`, optionsBn: [subjectCase.evidence, "শুধু দীর্ঘ ভূমিকা", "একই সংজ্ঞা বারবার লেখা", "অপ্রাসঙ্গিক ব্যক্তিগত অভিজ্ঞতা"], correctIndex: 0, answerGuideBn: `সঠিক উত্তর: ${subjectCase.evidence}। বিষয়ভিত্তিক প্রমাণই উত্তরকে যাচাইযোগ্য করে।`, marks: 1, ...common },
    { type: "MCQ", level: "Challenge", category: "Board-style", prompt: "", answerGuide: "", promptBn: `“${name}” অধ্যায়ে দুটি উত্তর একই সিদ্ধান্তে পৌঁছেছে। কোন উত্তরটি বেশি নম্বর পাবে?`, optionsBn: ["যেটিতে ধাপ, প্রমাণ ও সীমাবদ্ধতা দেখানো হয়েছে", "যেটি সবচেয়ে দীর্ঘ", "যেটিতে বেশি ইংরেজি শব্দ আছে", "যেটি উদ্দীপক হুবহু নকল করেছে"], correctIndex: 0, answerGuideBn: "একই সিদ্ধান্ত হলেও প্রমাণযোগ্য কার্যপ্রণালি, অধ্যায়ের পরিভাষা এবং সীমাবদ্ধতা দেখানো উত্তর বেশি নম্বর পায়।", marks: 1, ...common },
    { type: "MCQ", level: "Standard", category: "Concept", prompt: "", answerGuide: "", promptBn: `“${name}” সমাধান যাচাইয়ের শেষ ধাপ কোনটি?`, optionsBn: ["চূড়ান্ত ফল প্রশ্নের চাহিদা পূরণ করেছে কি না মিলিয়ে দেখা", "নতুন তথ্য যোগ করা", "ভূমিকা বড় করা", "সব হিসাব/প্রমাণ মুছে ফেলা"], correctIndex: 0, answerGuideBn: "শেষে প্রশ্নের নির্দেশক শব্দ, নম্বর এবং প্রতিটি অংশের সঙ্গে নিজের উত্তর মিলিয়ে দেখতে হয়।", marks: 1, ...common },
    { type: "CQ", level: "Standard", category: "Board-style", prompt: "", answerGuide: "", promptBn: `উদ্দীপক: ${subjectCase.scenario}।\nক. ${terms[0]}-এর পরিচয় দাও।\nখ. ${terms[1] ?? terms[0]} কেন গুরুত্বপূর্ণ?\nগ. উদ্দীপকের সমস্যাটি “${name}” নীতি দিয়ে সমাধান করো।\nঘ. সমাধানটির কার্যকারিতা ও সীমাবদ্ধতা মূল্যায়ন করো।`, answerGuideBn: `ক-তে নির্ভুল পরিচয়, খ-তে কারণ ও সম্পর্ক, গ-তে ${subjectCase.correct}, এবং ঘ-তে ${subjectCase.evidence} ধরে মূল্যায়ন প্রত্যাশিত।`, marks: 10, ...common },
    { type: "CQ", level: "Challenge", category: "Application", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে প্রচলিত একটি ভুল ধারণা ও সঠিক ব্যাখ্যা তুলনা করে বাংলাদেশভিত্তিক উদাহরণে বিচার করো।`, answerGuideBn: "ভুল ধারণা শনাক্ত, সঠিক নীতি ব্যাখ্যা, বাস্তব উদাহরণে প্রয়োগ, সীমাবদ্ধতা এবং প্রমাণভিত্তিক সিদ্ধান্ত—এই পাঁচ অংশে উত্তর লেখো।", marks: 10, ...common },
    { type: "Written", level: "Standard", category: "Application", prompt: "", answerGuide: "", promptBn: `“${name}” অধ্যায়ের জন্য একটি one-page revision note তৈরি করো—মূল ধারণা, সূত্র/কাঠামো, একটি উদাহরণ ও তিনটি common mistake-সহ।`, answerGuideBn: "শিরোনামভিত্তিক সংক্ষিপ্ত note, নির্ভুল পরিভাষা, ব্যবহারযোগ্য উদাহরণ এবং ভুল-সংশোধন জোড়া থাকতে হবে।", marks: 8, ...common },
    { type: "Written", level: "Challenge", category: "Board-style", prompt: "", answerGuide: "", promptBn: `কলেজ পরীক্ষায় “${name}” বিষয়ে অসম্পূর্ণ উত্তরকে পূর্ণাঙ্গ উত্তরে রূপান্তরের ধাপগুলো উদাহরণসহ লেখো।`, answerGuideBn: "প্রশ্ন বিশ্লেষণ, ধারণা নির্বাচন, প্রমাণ বা হিসাব, প্রয়োগ, বিন্যাস, উপসংহার ও শেষ যাচাই—এই সাতটি ধাপ প্রত্যাশিত।", marks: 10, ...common },
    { type: "CQ", level: "Standard", category: "College-standard", prompt: "", answerGuide: "", promptBn: `কলেজ মডেল টেস্ট: ${example}\nক. ${terms[0]}-এর সংজ্ঞা দাও।\nখ. ${terms[1] ?? terms[0]}-এর প্রয়োজনীয়তা ব্যাখ্যা করো।\nগ. উদ্দীপকের তথ্য ব্যবহার করে “${name}” অধ্যায়ের নিয়ম প্রয়োগ করো।\nঘ. ফলাফলটি বিকল্প ও সীমাবদ্ধতাসহ মূল্যায়ন করো।`, answerGuideBn: "কলেজ পরীক্ষার মান অনুযায়ী ক-তে নির্ভুল পরিচয়, খ-তে কারণ, গ-তে তথ্যভিত্তিক প্রয়োগ এবং ঘ-তে তুলনা, সীমাবদ্ধতা ও সিদ্ধান্ত প্রত্যাশিত।", marks: 10, ...common },
    { type: "Written", level: "Challenge", category: "College-standard", prompt: "", answerGuide: "", promptBn: `“${name}” অধ্যায় থেকে কলেজ নির্বাচনী পরীক্ষার উপযোগী একটি বিশ্লেষণধর্মী প্রশ্নের পূর্ণ উত্তর লেখো।`, answerGuideBn: `উত্তরে ${terms.slice(0, 3).join(", ")} নির্ভুলভাবে ব্যবহার, বাংলাদেশভিত্তিক প্রয়োগ, প্রমাণ/হিসাব, সীমাবদ্ধতা ও যুক্তিসংগত উপসংহার থাকতে হবে।`, marks: 10, ...common },
  ];
  return banglaQuestions.map((question) => {
    if (question.type === "MCQ") return question;
    if (question.type === "Written") {
      return {
        ...question,
        markingPointsBn: question.marks === 5
          ? ["সঠিক সংজ্ঞা বা ভূমিকা — ১", "মূল ধারণার সুসংগঠিত ব্যাখ্যা — ২", "প্রাসঙ্গিক উদাহরণ — ১", "সংক্ষিপ্ত উপসংহার — ১"]
          : ["প্রাসঙ্গিক ভূমিকা — ১", "মূল ধারণা ও সম্পর্ক — ২", "বাংলাদেশভিত্তিক প্রয়োগ — ৩", "যুক্তি ও সীমাবদ্ধতা — ২", "সিদ্ধান্ত — ২"],
        modelAnswerBn: `“${name}” অধ্যায়টি বুঝতে প্রথমে ${terms.slice(0, 3).join(", ")}—এই ধারণাগুলোর পারস্পরিক সম্পর্ক স্পষ্ট করতে হয়। ${core} বাংলাদেশের বাস্তব ক্ষেত্রে বিষয়টি বিশ্লেষণ করলে দেখা যায়: ${example} তাই উত্তরে শুধু সংজ্ঞা নয়, প্রাসঙ্গিক তথ্য, প্রয়োগের ফল এবং সীমাবদ্ধতা যুক্ত করা জরুরি। সব দিক বিবেচনায়, পাঠ্যবইয়ের নীতির সঙ্গে বাস্তব তথ্যের সামঞ্জস্য দেখিয়ে সিদ্ধান্ত লিখলেই উত্তরটি পূর্ণতা পায়।`,
      };
    }
    return {
      ...question,
      markingPointsBn: [
        `ক · ${terms[0]}-এর নির্ভুল সংজ্ঞা বা পরিচয় — ১`,
        `খ · ${terms[1] ?? terms[0]}-এর অর্থ ও সম্পর্ক নিজের ভাষায় ব্যাখ্যা — ২`,
        `গ · উদ্দীপকের নির্দিষ্ট তথ্যের সঙ্গে “${name}” অধ্যায়ের নীতি মিলিয়ে প্রয়োগ — ৩`,
        "ঘ · প্রমাণভিত্তিক বিশ্লেষণ, বিকল্প/সীমাবদ্ধতা এবং স্পষ্ট সিদ্ধান্ত — ৪",
      ],
      modelAnswerBn: `ক. ${terms[0]} হলো “${name}” অধ্যায়ের একটি মৌলিক ধারণা, যা আলোচ্য বিষয়টির প্রকৃতি ও প্রয়োগ বুঝতে সাহায্য করে।\n\nখ. ${terms[1] ?? terms[0]}-এর সঙ্গে ${terms[0]}-এর সম্পর্ক হলো—একটি মূল ধারণা নির্ধারণ করে, অন্যটি সেই ধারণার কার্যকারণ বা ব্যবহার ব্যাখ্যা করে। ${core}\n\nগ. উদ্দীপকের নির্ণায়ক তথ্য হলো: ${example} এখানে “${name}” অধ্যায়ের নীতি প্রয়োগ করলে প্রাসঙ্গিক তথ্য আলাদা করে ধাপে ধাপে কারণ, পদ্ধতি এবং ফল দেখাতে হবে। তাই উদ্দীপকটি কেবল উদ্ধৃত না করে প্রতিটি তথ্যের সঙ্গে পাঠ্যবইয়ের ধারণার সরাসরি যোগসূত্র স্থাপন করতে হবে।\n\nঘ. সামগ্রিক বিচারে সিদ্ধান্তটির গ্রহণযোগ্যতা নির্ভর করে প্রমাণ, পাঠ্যনীতির সঠিক প্রয়োগ এবং বাস্তব সীমাবদ্ধতা বিবেচনার ওপর। অনুকূল ও প্রতিকূল উভয় দিক তুলনা করে দেখা যায়, যে সিদ্ধান্তটি উদ্দীপকের তথ্য ও “${name}” অধ্যায়ের মূলনীতির সঙ্গে সবচেয়ে বেশি সামঞ্জস্যপূর্ণ, সেটিই অধিক গ্রহণযোগ্য।`,
    };
  });
}

function buildAppliedQuestionSet(subjectId: string, chapter: ChapterPreview, _detail: ChapterKnowledge): NonNullable<ExamResource["bank"]["questions"]> {
  void _detail;
  const name = chapter.titleBn;
  const common = { sourceStatus: "authored-board-pattern" as const };
  const packs: Record<string, { stimulus: string; correct: string; distractors: string[]; method: string; evidence: string }> = {
    accounting: {
      stimulus: `মেসার্স প্রত্যয়ে মালিক ২,০০,০০০ টাকা বিনিয়োগ করলেন, ৫০,০০০ টাকার পণ্য ধারে কিনলেন এবং ৩০,০০০ টাকার আসবাব নগদে কিনলেন। পরে দেখা গেল ধারে ক্রয়টি নগদ ক্রয় হিসেবে লেখা হয়েছে।`,
      correct: "নগদ হিসাবের ভুল ক্রেডিট বাতিল করে পাওনাদার হিসাব ক্রেডিট করা",
      distractors: ["রেওয়ামিলে ৫০,০০০ টাকা যোগ করা", "মূলধন হিসাব ডেবিট করা", "লেনদেনটি সম্পূর্ণ বাদ দেওয়া"],
      method: "হিসাব শনাক্ত → শ্রেণিবিন্যাস → ডেবিট-ক্রেডিট → জাবেদা → খতিয়ান → জের/সমতা যাচাই",
      evidence: "সংশোধনের পর নগদ ১,৭০,০০০ টাকা, পণ্য ৫০,০০০ টাকা, আসবাব ৩০,০০০ টাকা, দায় ৫০,০০০ টাকা ও মূলধন ২,০০,০০০ টাকা; উভয় পাশ ২,৫০,০০০ টাকা",
    },
    finance: {
      stimulus: `একটি SME ৩ বছরের যন্ত্র কেনার জন্য ৫,০০,০০০ টাকা চায়। বিকল্প A: ১২% ব্যাংকঋণ; বিকল্প B: নতুন অংশীদার, যিনি লাভের ২৫% পাবেন। প্রত্যাশিত বার্ষিক নগদ আয় ২,২০,০০০ টাকা।`,
      correct: "ঋণের কিস্তি, মোট ব্যয়, নগদপ্রবাহ ও নিয়ন্ত্রণ—চারটি একসঙ্গে তুলনা করা",
      distractors: ["শুধু সুদের হার দেখা", "শুধু মালিকানা অক্ষুণ্ণ রাখা", "প্রথম প্রস্তাব গ্রহণ করা"],
      method: "উদ্দেশ্য/মেয়াদ → cash-flow timeline → ব্যয় ও return → liquidity/control/risk → sensitivity → শর্তযুক্ত সিদ্ধান্ত",
      evidence: "নির্বাচিত বিকল্পের বার্ষিক cash burden প্রত্যাশিত ২,২০,০০০ টাকার মধ্যে নিরাপদ কি না এবং খারাপ বছরে পরিশোধ সম্ভব কি না",
    },
    economics: {
      stimulus: `একটি বাজারে দাম ৫০, ৪০ ও ৩০ টাকা হলে চাহিদা যথাক্রমে ৬০, ৮০ ও ১০০ একক; যোগান ১১০, ৮০ ও ৫০ একক। পরে ভোক্তার আয় বাড়ল, কিন্তু উৎপাদন ব্যয় অপরিবর্তিত রইল।`,
      correct: "৪০ টাকায় ৮০ একক প্রাথমিক ভারসাম্য; আয় বৃদ্ধিতে স্বাভাবিক দ্রব্যের চাহিদা রেখা ডানে সরবে",
      distractors: ["৩০ টাকায় ১০০ একক ভারসাম্য", "যোগান রেখা বামে সরবে", "চাহিদা রেখা বরাবর নিচে চলবে"],
      method: "তথ্যছক → ভারসাম্য → পরিবর্তিত নির্ধারক → movement/shift → নতুন রেখা ও ফল → সীমাবদ্ধতা",
      evidence: "অক্ষ, D₁/S, E₁ এবং D₂/E₂ সঠিক লেবেল; নতুন ভারসাম্যে দাম ও পরিমাণের সম্ভাব্য বৃদ্ধি ব্যাখ্যা",
    },
    business: {
      stimulus: `একটি পোশাক প্রতিষ্ঠানে ক্রয় ও উৎপাদন বিভাগ একই কর্মীকে ভিন্ন নির্দেশ দেয়। কাজ দেরি হচ্ছে, কাঁচামাল অপচয় ৮% এবং অভিযোগের দায়িত্ব কেউ নিচ্ছে না।`,
      correct: "কর্তৃত্ব-দায়িত্ব ও reporting line স্পষ্ট করে অপচয় ও lead time KPI নির্ধারণ করা",
      distractors: ["আরও একজন নির্দেশদাতা নিয়োগ", "সব সিদ্ধান্ত স্থগিত রাখা", "শুধু কর্মীকে শাস্তি দেওয়া"],
      method: "লক্ষণ → মূল সমস্যা → নীতি → বিকল্প → দায়িত্ব ও বাস্তবায়ন → ফল মাপার সূচক → পর্যালোচনা",
      evidence: "unity of command, দায়িত্বের স্পষ্টতা, অপচয়ের হার, lead time এবং অভিযোগ নিষ্পত্তির সময়",
    },
    civics: {
      stimulus: `একটি স্থানীয় সরকারি দপ্তর সেবার আবেদন ৬০ দিন ধরে আটকে রেখেছে, সিদ্ধান্তের কারণ জানায়নি এবং অভিযোগ গ্রহণের নির্ধারিত পদ্ধতিও প্রকাশ করেনি।`,
      correct: "স্বচ্ছতা, জবাবদিহি ও আইনসম্মত প্রতিকারের ঘাটতি শনাক্ত করা",
      distractors: ["নাগরিকের সব অধিকার স্থগিত", "বিচার বিভাগের বিলুপ্তি", "রাষ্ট্র ও সমাজকে একই প্রতিষ্ঠান বলা"],
      method: "ঘটনার তথ্য → সাংবিধানিক/সুশাসন নীতি → প্রতিষ্ঠান → অধিকার ও দায়িত্ব → বৈধ প্রতিকার → ভারসাম্যপূর্ণ সিদ্ধান্ত",
      evidence: "আবেদনের তারিখ, নির্ধারিত সেবা-সময়, লিখিত সিদ্ধান্ত, অভিযোগের পথ ও সংশ্লিষ্ট প্রতিষ্ঠানের দায়িত্ব",
    },
    history: {
      stimulus: `একই রাজনৈতিক ঘটনার বিষয়ে ১৯৫২ সালের একটি সরকারি বিবৃতি, একজন শিক্ষার্থীর দিনলিপি এবং ১৯৮০ সালে লেখা স্মৃতিকথায় ভিন্ন দাবি পাওয়া গেল।`,
      correct: "প্রতিটি উৎসের সময়, রচয়িতা, উদ্দেশ্য ও নৈকট্য যাচাই করে পারস্পরিক corroboration করা",
      distractors: ["স্মৃতিকথাই স্বয়ংক্রিয়ভাবে সত্য", "সরকারি উৎসই একমাত্র গ্রহণযোগ্য", "সব উৎস সমানভাবে বাতিল"],
      method: "কালানুক্রম → provenance → claim → bias/limitation → corroboration → তাৎক্ষণিক ও দীর্ঘমেয়াদি গুরুত্ব",
      evidence: "উৎসের তারিখ, প্রত্যক্ষতার মাত্রা, লক্ষ্য-পাঠক, মিল/অমিল এবং অনুপস্থিত স্বাধীন প্রমাণ",
    },
  };
  if (subjectId === "english") {
    return [
      { type: "MCQ", level: "Standard", category: "Application", prompt: `A response on ${chapter.title} contains relevant ideas but no clear paragraph focus. Which revision should come first?`, answerGuide: "Create a controlling idea and reorganise supporting details around it.", optionsBn: ["Add difficult vocabulary", "Create a controlling idea and reorganise support", "Repeat the introduction", "Remove all linking words"], correctIndex: 1, marks: 1, ...common },
      { type: "MCQ", level: "Challenge", category: "College-standard", prompt: `Which proofreading sequence is most effective for ${chapter.title}?`, answerGuide: "Check task completion, organisation and sentence-level accuracy in that order.", optionsBn: ["Spelling only", "Vocabulary, then handwriting only", "Task → organisation → grammar and mechanics", "Rewrite without rereading"], correctIndex: 2, marks: 1, ...common },
      { type: "CQ", level: "Challenge", category: "Board-style", prompt: `A student completes ${chapter.title} with accurate grammar but misses the required audience and purpose. Diagnose the loss of marks and provide a corrected structure.`, answerGuide: "Identify task failure, restore audience/purpose/format, reorganise content and justify the changes.", marks: 10, ...common },
      { type: "CQ", level: "Challenge", category: "College-standard", prompt: `Compare two short responses to ${chapter.title}: one is fluent but irrelevant; the other is relevant but contains four language errors. Award marks transparently and improve the stronger base response.`, answerGuide: "Use separate criteria for task fulfilment, organisation, language control and editing quality.", marks: 10, ...common },
      { type: "Written", level: "Standard", category: "Board-style", prompt: `Complete a timed ${chapter.title} task, then attach a five-point editing log showing the original error, correction and rule.`, answerGuide: "Assess task completion, structure, accuracy and whether every logged correction states a valid rule.", marks: 10, ...common },
      { type: "Written", level: "Challenge", category: "College-standard", prompt: `Write a model response for ${chapter.title} and annotate its thesis or controlling idea, paragraph purpose, transitions and final proofreading decisions.`, answerGuide: "A complete response plus precise annotations demonstrating conscious control of organisation and language.", marks: 10, ...common },
    ];
  }
  const pack = packs[subjectId] ?? packs.business;
  return [
    { type: "MCQ", level: "Standard", category: "Application", prompt: "", answerGuide: "", promptBn: `উদ্দীপক: ${pack.stimulus}\n“${name}” অধ্যায়ের নিয়মে প্রথম সঠিক সিদ্ধান্ত কোনটি?`, optionsBn: [pack.distractors[0], pack.correct, pack.distractors[1], pack.distractors[2]], correctIndex: 1, answerGuideBn: `সঠিক উত্তর: ${pack.correct}। কার্যপ্রণালি: ${pack.method}।`, marks: 1, ...common },
    { type: "MCQ", level: "Challenge", category: "College-standard", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে সিদ্ধান্ত যাচাইয়ের সবচেয়ে শক্তিশালী প্রমাণ কোনটি?`, optionsBn: [pack.distractors[1], pack.distractors[2], pack.evidence, pack.distractors[0]], correctIndex: 2, answerGuideBn: `সঠিক উত্তর: ${pack.evidence}। এটি সিদ্ধান্তকে পরিমাপযোগ্য ও যাচাইযোগ্য করে।`, marks: 1, ...common },
    { type: "CQ", level: "Standard", category: "Board-style", prompt: "", answerGuide: "", promptBn: `উদ্দীপক: ${pack.stimulus}\nক. অধ্যায়ের প্রাসঙ্গিক মূল পরিভাষাটি কী?\nখ. সমস্যার সঙ্গে পরিভাষাটির সম্পর্ক ব্যাখ্যা করো।\nগ. ${pack.method} অনুসরণ করে সমাধান করো।\nঘ. ${pack.evidence} ধরে সিদ্ধান্তটির যথার্থতা মূল্যায়ন করো।`, answerGuideBn: "ক—নির্ভুল পরিচয় ১; খ—সম্পর্ক ২; গ—উদ্দীপকের তথ্য ও পূর্ণ পদ্ধতি ৩; ঘ—প্রমাণ, সীমাবদ্ধতা ও সিদ্ধান্ত ৪।", markingPointsBn: ["প্রাসঙ্গিক পরিভাষা — ১", "কারণ ও সম্পর্ক — ২", "তথ্যভিত্তিক প্রয়োগ — ৩", "প্রমাণসহ মূল্যায়ন — ৪"], modelAnswerBn: `উদ্দীপকের নির্ণায়ক তথ্য বিশ্লেষণে ${pack.correct} প্রয়োজন। কার্যপ্রণালি হবে: ${pack.method}। সিদ্ধান্ত যাচাইয়ের প্রধান ভিত্তি: ${pack.evidence}। অতএব শুধু সাধারণ সংজ্ঞা নয়, উদ্দীপকের প্রতিটি তথ্যের সঙ্গে নিয়ম ও ফলের সরাসরি যোগ দেখাতে হবে।`, marks: 10, ...common },
    { type: "CQ", level: "Challenge", category: "College-standard", prompt: "", answerGuide: "", promptBn: `কলেজ নির্বাচনী প্রশ্ন: ${pack.stimulus}\nদুটি বিকল্প সমাধান তৈরি করে “${name}” অধ্যায়ের নীতি, ঝুঁকি/সীমাবদ্ধতা ও যাচাইযোগ্য প্রমাণের ভিত্তিতে অধিক গ্রহণযোগ্যটি নির্বাচন করো।`, answerGuideBn: `দুটি বাস্তব বিকল্প, তুলনার মানদণ্ড, ${pack.evidence}, অন্তত একটি সীমাবদ্ধতা এবং শর্তযুক্ত সিদ্ধান্ত প্রত্যাশিত।`, markingPointsBn: ["বিকল্প শনাক্ত — ২", "অধ্যায়ের নীতি প্রয়োগ — ২", "প্রমাণভিত্তিক তুলনা — ৩", "সীমাবদ্ধতা ও সিদ্ধান্ত — ৩"], modelAnswerBn: `প্রথম বিকল্পটি দ্রুত হলেও তার প্রমাণ ও নিয়ন্ত্রণ দুর্বল; দ্বিতীয় বিকল্পে ${pack.correct} এবং ${pack.evidence} ব্যবহার করা যায়। ${pack.method} অনুসরণ করলে দ্বিতীয় বিকল্পটি অধিক যাচাইযোগ্য। তবে তথ্য অসম্পূর্ণ হলে সিদ্ধান্তটি শর্তসাপেক্ষ থাকবে।`, marks: 10, ...common },
    { type: "Written", level: "Standard", category: "Application", prompt: "", answerGuide: "", promptBn: `“${name}” অধ্যায়ের একটি পূর্ণ সমাধান লেখো: ${pack.stimulus}`, answerGuideBn: `প্রদত্ত তথ্য, প্রয়োজনীয় নিয়ম, ধাপভিত্তিক সমাধান, ${pack.evidence} এবং শেষ যাচাই আলাদা শিরোনামে লিখতে হবে।`, markingPointsBn: ["তথ্য ও নিয়ম — ২", "কার্যপ্রণালি — ৩", "ফল/প্রমাণ — ৩", "যাচাই — ২"], modelAnswerBn: `প্রথমে প্রদত্ত তথ্য আলাদা করে ${pack.correct} নির্ধারণ করতে হবে। এরপর ${pack.method} অনুসরণ করে প্রতিটি ধাপ দেখাতে হবে। সমাধানের গ্রহণযোগ্যতা যাচাই হবে এই প্রমাণে: ${pack.evidence}।`, marks: 10, ...common },
    { type: "Written", level: "Challenge", category: "Board-style", prompt: "", answerGuide: "", promptBn: `“${name}” বিষয়ে ভুল সমাধান শনাক্ত ও সংশোধন করো; প্রতিটি সংশোধনের পাশে সংশ্লিষ্ট নিয়ম এবং নম্বর পাওয়ার কারণ লেখো।`, answerGuideBn: `ভুলের ধরন, সঠিক নিয়ম, সংশোধিত ধাপ, যাচাইযোগ্য প্রমাণ ও পরীক্ষায় step mark—পাঁচটি অংশ থাকতে হবে।`, markingPointsBn: ["ভুল নির্ণয় — ২", "সঠিক নিয়ম — ২", "সংশোধিত প্রয়োগ — ৩", "প্রমাণ ও উপস্থাপন — ৩"], modelAnswerBn: `সাধারণ ভুল হলো প্রমাণের আগে সিদ্ধান্ত নেওয়া। সঠিক পদ্ধতি: ${pack.method}। সংশোধিত উত্তরে ${pack.correct} প্রয়োগ করে ${pack.evidence} দেখাতে হবে; এতে কার্যপ্রণালি ও চূড়ান্ত সিদ্ধান্ত উভয়ের নম্বর পাওয়া যায়।`, marks: 10, ...common },
  ];
}

/** Reject assessment-writing advice disguised as an academic question. */
const nonAcademicPromptPatterns = [
  /সঠিক শেখার পদ্ধতি/u, /পরিস্থিতি সমাধানের প্রথম কাজ/u,
  /প্রশ্নের চাওয়া ও নির্ণায়ক তথ্য/u, /প্রশ্নের উদ্দেশ্য ও নির্ধারিত বিন্যাস বুঝে একটি সম্পূর্ণ উত্তর/u,
  /উচ্চতর দক্ষতার উত্তরের সবচেয়ে গুরুত্বপূর্ণ বৈশিষ্ট্য/u,
  /দুটি উত্তর একই সিদ্ধান্তে পৌঁছেছে/u, /সমাধান যাচাইয়ের শেষ ধাপ/u,
  /পূর্ণ নম্বরের জন্য কোন প্রমাণ/u, /অসম্পূর্ণ উত্তরকে পূর্ণাঙ্গ উত্তরে/u,
  /অধ্যায়ের আলোচনার সঙ্গে সবচেয়ে সরাসরি সম্পর্কিত পরিভাষা/u,
  /প্রচলিত একটি ভুল ধারণা ও সঠিক ব্যাখ্যা/u,
  /মূল ধারণা, সূত্র\/কাঠামো, একটি উদাহরণ/u,
  /কোন উত্তরটি প্রয়োজনীয় দক্ষতা সবচেয়ে নির্ভুলভাবে দেখায়/u,
  /সঠিক ধারণা লিখলেও উদ্দীপকের তথ্য ব্যবহার করেনি/u,
  /পূর্ণ নম্বর পাওয়ার কৌশল/u, /বিশ্লেষণের প্রথম ধাপ/u,
  /সবচেয়ে প্রাসঙ্গিক প্রমাণ/u, /যথাযথ বাস্তব প্রয়োগ/u,
  /উত্তর যাচাইয়ের শেষ ধাপ/u, /বাংলাদেশভিত্তিক সিদ্ধান্ত কোনটি/u,
  /প্রয়োজনীয় সীমাবদ্ধতা কোনটি/u, /সবচেয়ে শক্তিশালী উপসংহার/u,
  /উদ্দীপকের নির্দিষ্ট তথ্য ব্যবহার করে নীতিটি প্রয়োগ করো/u,
  /বিকল্প, প্রমাণ ও সীমাবদ্ধতা বিবেচনায় ফলাফল মূল্যায়ন করো/u,
  /একটি উদ্ধৃতি বা ভাষারীতি কেন গুরুত্বপূর্ণ/u,
  /পরিভাষা ব্যবহার করে সংক্ষিপ্ত টীকা লেখো/u,
  /বাংলাদেশের বাস্তবতায় .*অধ্যায়ের গুরুত্ব, প্রয়োগ ও সীমাবদ্ধতা/u,
  /বাংলাদেশের প্রেক্ষাপটে .*বিষয়টির একটি বাস্তব প্রয়োগ বিশ্লেষণ/u,
  /কলেজ নির্বাচনী পরীক্ষার উপযোগী একটি বিশ্লেষণধর্মী প্রশ্ন/u,
  /একটি adjustment বদলে journal, ledger/iu,
  /Discount rate, মেয়াদ বা cash flow বদলালে/iu,
  /একটি বাংলাদেশি SME-তে একই সমস্যা হলে/u,
  /একটি determinant বদলে নতুন equilibrium/iu,
  /একই ঘটনায় নাগরিক, প্রশাসন ও আদালত/u,
  /একটি ঘটনার দুটি ভিন্ন উৎসের দৃষ্টিভঙ্গি/u,
  /একই সিদ্ধান্ত রেখে একটি বৈধ ও একটি অবৈধ যুক্তি/u,
  /একটি শাসন\/ঘটনার প্রশাসনিক, জ্ঞানচর্চা/u,
  /একটি extreme value যোগ করে ফল পুনর্গণনা/iu,
  /বাংলাদেশের দুটি অঞ্চল একই মানদণ্ডে তুলনা/u,
  /একটি লেনদেনের ডেবিট ঠিক হলেও ক্রেডিট দিক পোস্ট করা হয়নি/u,
  /দীর্ঘমেয়াদি সম্পদের জন্য খুব স্বল্পমেয়াদি ঋণ/u,
  /একই কাজের জন্য দুই কর্মকর্তা পরস্পরবিরোধী নির্দেশ/u,
  /দাম অপরিবর্তিত থাকলেও ভোক্তার আয় বাড়ায়/u,
  /একটি সরকারি প্রতিষ্ঠান সিদ্ধান্তের কারণ প্রকাশ করছে না/u,
  /একই ঘটনা নিয়ে দুটি সমকালীন উৎসে ভিন্ন বিবরণ/u,
  /সবচেয়ে নির্ভুল সংজ্ঞা কোনটি/u, /সঠিক পারস্পরিক সম্পর্ক কোনটি/u,
  /প্রচলিত ভুল ধারণা কোনটি/u, /one-page revision note/iu,
  /Which approach is most suitable/iu, /Which first step is most effective/iu,
  /Which final check would improve/iu, /Two answers .* deserves the higher mark/iu,
];

function isAcademicQuestion(question: NonNullable<ExamResource["bank"]["questions"]>[number]) {
  const text = `${question.promptBn ?? ""} ${question.prompt ?? ""}`.trim();
  return Boolean(text) && !nonAcademicPromptPatterns.some((pattern) => pattern.test(text));
}

const genericNotePatterns = [
  /^চার ধাপে অধ্যায়টি মনে রাখো/u, /^যে ভুলগুলো বেশি হয়: প্রশ্নের চাওয়া না ধরা/u,
  /^ক\/খ\/গ\/ঘ একভাবে লিখবে না/u, /^ভুল হলে পুরো অধ্যায় আবার পড়বে না/u,
  /^অনুশীলনে তিন ধরনের প্রশ্ন রাখো/u, /^কলেজ পরীক্ষার মতো সময় ধরে লেখো/u,
  /^সত্যি শিখেছ কি না বুঝবে/u, /^এক পাতায় অধ্যায়টি সাজাও/u,
  /^নোট বন্ধ করে নতুন একটি সমস্যা করো/u, /^একবার পড়ে ছেড়ে দিও না/u,
  /^অধ্যায় শেষ বলার আগে তিনটি কাজ করো/u, /^নির্ধারিত বিন্যাস আগে দাঁড় করাও/u,
  /^খসড়া শেষে তথ্যের পূর্ণতা/u, /^সাধারণ ভুল: মুখস্থ নমুনা হুবহু বসালে/u,
  /^প্রতিটি মূল শব্দের সঙ্গে একটি উদাহরণ/u, /^বিষয় অনুযায়ী একটি ছক, প্রবাহচিত্র/u,
  /^একটি প্রচলিত ভুল কথা লিখে/u, /^১০ নম্বরের CQ লেখার আগে চার অংশে/u,
  /^অপরিচিত ঘটনায় অধ্যায়ের দুটি ধারণা/u,
  /^Recommended method: read the task/iu, /^Essential summary: define the idea/iu,
  /^Bangladesh connection: Use natural contexts/iu, /^Common mistakes: memorising without application/iu,
  /^Exam tip: allocate marks to answer depth/iu, /^Answer construction: begin with the exact rule/iu,
  /^Error correction: locate whether the weakness/iu, /^Board practice: complete one foundation/iu,
  /^College-test practice: answer within a fixed time/iu, /^Mastery check: explain the chapter aloud/iu,
  /^Memory map: organise the chapter as/iu, /^Independent task: complete one unfamiliar case/iu,
  /^Revision schedule: revisit the chapter/iu, /^Formula or answer structure: Effective paragraph/iu,
  /^Evidence rule: Reading answers must/iu, /^Final readiness check: explain the chapter/iu,
  /^Vocabulary retrieval: define every key term/iu, /^Diagram or structure note: convert the chapter/iu,
  /^Worked-method note: record the complete route/iu, /^Misconception note: write one tempting/iu,
  /^Board-answer note: map a 10-mark response/iu, /^College-test note: combine two chapter ideas/iu,
  /^Planning note: create a short outline/iu,
];

function isUsefulChapterNote(note: string) {
  const text = note.replace(/\s+/g, " ").trim();
  return Boolean(text) && !genericNotePatterns.some((pattern) => pattern.test(text));
}

function buildDiversifiedPracticeSet(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge): NonNullable<ExamResource["bank"]["questions"]> {
  const isEnglish = subjectId === "english";
  const bn = banglaChapterDetails[chapter.title];
  const name = isEnglish ? chapter.title : chapter.titleBn;
  const terms = bn?.terms ?? detail.terms.split(",").map((term) => term.trim()).filter(Boolean);
  const core = bn?.core ?? detail.anchor;
  const baseContext = bn?.example ?? detail.context;
  const contexts = isEnglish
    ? ["a learner applies the rule to a familiar case", "one decisive fact changes", "two answers reach different conclusions", "a response hides a conceptual error", "the evidence is incomplete", "a Bangladesh-based institution must choose", "an unexpected result appears", "an examiner requests a justified response"]
    : ["একজন শিক্ষার্থী পরিচিত ঘটনায় নিয়মটি প্রয়োগ করেছে", "উদ্দীপকের একটি নির্ণায়ক তথ্য পরিবর্তিত হয়েছে", "দুটি উত্তর ভিন্ন সিদ্ধান্তে পৌঁছেছে", "একটি উত্তরে সূক্ষ্ম ধারণাগত ভুল আছে", "সিদ্ধান্তের প্রমাণ আংশিক", "বাংলাদেশের একটি প্রতিষ্ঠান দুটি বিকল্পের মধ্যে সিদ্ধান্ত নেবে", "অপ্রত্যাশিত ফল পাওয়া গেছে", "পরীক্ষক প্রমাণসমর্থিত বিচার চেয়েছেন"];
  const skills = isEnglish ? ["identify", "distinguish", "apply", "organise", "diagnose", "compare", "justify", "evaluate"] : ["শনাক্ত", "পার্থক্য নির্ণয়", "প্রয়োগ", "বিন্যাস", "ভুল নির্ণয়", "তুলনা", "যুক্তি প্রদান", "মূল্যায়ন"];
  const common = { sourceStatus: "authored-board-pattern" as const };
  const mcqs: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 48 }, (_, index) => {
    const term = terms[index % Math.max(1, terms.length)] ?? name;
    const context = contexts[index % contexts.length];
    const skill = skills[(index + Math.floor(index / contexts.length)) % skills.length];
    const correct = isEnglish ? `Use ${term} to ${skill} the decisive fact and verify the result` : `${term} ব্যবহার করে নির্ণায়ক তথ্য ${skill} করা এবং ফল যাচাই করা`;
    const wrong = isEnglish ? ["Repeat the case without evidence", "Conclude before applying the rule", "Select an unrelated long definition"] : ["প্রমাণ ছাড়া ঘটনা পুনরাবৃত্তি করা", "নিয়ম প্রয়োগের আগে উপসংহার লেখা", "দীর্ঘ বলে অপ্রাসঙ্গিক সংজ্ঞা বেছে নেওয়া"];
    const correctIndex = (index * 3 + 1) % 4;
    const options = [...wrong]; options.splice(correctIndex, 0, correct);
    return { type: "MCQ", level: (["Foundation","Standard","Challenge"] as const)[index % 3], category: (["Concept","Application","Board-style","College-standard"] as const)[index % 4], prompt: isEnglish ? `In ${name}, ${context}. Which response best demonstrates the required skill?` : "", promptBn: isEnglish ? undefined : `“${name}” অধ্যায়ে ${context}। কোন উত্তরটি প্রয়োজনীয় দক্ষতা সবচেয়ে নির্ভুলভাবে দেখায়?`, optionsBn: options, correctIndex, answerGuide: isEnglish ? `${core} The correct option joins concept, evidence and verification.` : "", answerGuideBn: isEnglish ? undefined : `সঠিক বিকল্পে ধারণা, নির্ণায়ক তথ্য ও যাচাই যুক্ত হয়েছে। ${core}`, marks: 1, ...common };
  });
  const cqs: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 24 }, (_, index) => {
    const term = terms[index % Math.max(1, terms.length)] ?? name;
    const context = contexts[(index * 3) % contexts.length];
    const skill = skills[(index + 2) % skills.length];
    return { type: "CQ", level: index % 3 === 0 ? "Standard" : "Challenge", category: index % 2 === 0 ? "Board-style" : "College-standard", prompt: isEnglish ? `Stimulus: ${baseContext} In a related situation, ${context}.\n(a) Define ${term}.\n(b) Explain its relationship to the chapter rule.\n(c) Apply it to the decisive evidence.\n(d) Evaluate the conclusion using an alternative and a limitation.` : "", promptBn: isEnglish ? undefined : `উদ্দীপক: ${baseContext} সংশ্লিষ্ট নতুন পরিস্থিতিতে ${context}।\nক. ${term} কী?\nখ. অধ্যায়ের মূলনীতির সঙ্গে ${term}-এর সম্পর্ক ব্যাখ্যা করো।\nগ. উদ্দীপকের তথ্য ব্যবহার করে ${skill} করে ফল দেখাও।\nঘ. উদ্দীপকের সিদ্ধান্তটি কতটা যৌক্তিক? পাঠ্যবইয়ের ধারণা ও প্রাসঙ্গিক তথ্য দিয়ে মতের পক্ষে যুক্তি দাও।`, answerGuide: isEnglish ? "Follow 1+2+3+4 marks: exact knowledge, connected explanation, evidence-led application and balanced evaluation." : "", answerGuideBn: isEnglish ? undefined : "ক-তে নির্ভুল সংজ্ঞা, খ-তে কারণসহ ব্যাখ্যা, গ-তে উদ্দীপকের তথ্য দিয়ে প্রয়োগ এবং ঘ-তে যুক্তিসহ সিদ্ধান্ত লিখতে হবে।", marks: 10, ...common };
  });
  const written: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 24 }, (_, index) => {
    const term = terms[index % Math.max(1, terms.length)] ?? name;
    const context = contexts[(index * 5) % contexts.length];
    const skill = skills[(index + 4) % skills.length];
    return { type: "Written", level: (["Foundation","Standard","Challenge"] as const)[index % 3], category: index % 2 === 0 ? "Application" : "College-standard", prompt: isEnglish ? `Write an exam-ready ${name} response using ${term} to ${skill} this situation: ${context}. Include evidence, one alternative and a justified conclusion.` : "", promptBn: isEnglish ? undefined : `“${name}” অধ্যায়ে ${context}—${term} ব্যবহার করে পরিস্থিতিটি ${skill} করে একটি পূর্ণাঙ্গ উত্তর লেখো। উত্তরে মূল ধারণা, প্রাসঙ্গিক উদাহরণ এবং সংক্ষিপ্ত উপসংহার থাকবে।`, answerGuide: isEnglish ? "Assess concept, method, evidence, alternative, evaluation and presentation." : "", answerGuideBn: isEnglish ? undefined : "মূল ধারণা ২, সঠিক পদ্ধতি ২, প্রাসঙ্গিক উদাহরণ বা হিসাব ২, বিশ্লেষণ ২ এবং পরিষ্কার উপসংহার ২ নম্বর।", marks: 10, ...common };
  });
  return [...mcqs, ...cqs, ...written];
}

function buildEnglishBoardPracticeSet(chapter: ChapterPreview, detail: ChapterKnowledge): NonNullable<ExamResource["bank"]["questions"]> {
  const common = { type: "Written" as const, sourceStatus: "authored-board-pattern" as const };
  const firstPaper = chapter.paper === "1st Paper";
  const firstPaperTasks = [
    { name:"Comprehension", prompt:`Read this short practice text: “Young people learn best when they connect an idea with a real problem. A learner who asks why, tests an answer and reflects on mistakes gradually becomes independent.” Answer: (a) What helps young people learn best? (b) What does an independent learner do? (c) Explain “reflects on mistakes” in your own words.`, guide:"Answer each question directly from the text. Paraphrase instead of copying a complete sentence; keep the tense and reference clear.", marks:10 },
    { name:"Information transfer", prompt:`Turn the following information into a table with the headings Activity, Purpose and Result: “Rina first skimmed the passage to understand its subject. She then scanned it for dates and names. Finally, she checked every answer against the exact line.”`, guide:"Include all three stages in the original order. Use short phrases, not full decorative sentences.", marks:5 },
    { name:"Flow chart", prompt:`Complete a six-step flow chart showing how a careful reader answers an unseen passage: read the questions → … → … → … → … → check every answer.`, guide:"Expected middle stages: skim for central idea; scan for relevant evidence; infer only from textual clues; write concise answers in original wording.", marks:5 },
    { name:"Summary", prompt:`Write a concise summary of the practice text about independent learning. Keep only the central idea and essential supporting points.`, guide:"A strong summary combines understanding, testing and reflection in original wording; it omits examples and repetition.", marks:10 },
    { name:"Vocabulary in context", prompt:`From the practice text, explain the contextual meanings of “connect”, “reflects” and “independent”; then use each word in a new sentence.`, guide:"The meaning must fit the sentence. New sentences should show the same word sense and correct grammar.", marks:5 },
    { name:"Paragraph", prompt:`Write a paragraph on “Learning from Mistakes” with a clear topic sentence, two developed examples and a concluding sentence.`, guide:"Keep one controlling idea. Develop rather than list points; use natural transitions and proofread tense, agreement and punctuation.", marks:10 },
    { name:"Graph description", prompt:`A college reading survey records 42% regular readers in January, 55% in February, 63% in March and 71% in April. Describe the trend in about 120–150 words.`, guide:"Begin with an overview, compare significant figures accurately and avoid inventing causes not supplied by the data.", marks:10 },
    { name:"Story completion", prompt:`Complete the story beginning: “Nabil found an envelope beside the college library. It contained examination fees and a student ID card…” Give the story a suitable title.`, guide:"Maintain past tense, develop one believable conflict and end with a clear resolution; the title should reflect the central idea.", marks:15 },
  ];
  const secondPaperTasks = [
    { name:"Articles", prompt:"Complete with articles where necessary: Honesty is ___ quality that gives ___ person courage to speak ___ truth. ___ honest student does not seek an unfair advantage.", guide:"Expected: a, a, the, An. Decide from countability, specificity and pronunciation—not spelling alone.", marks:5 },
    { name:"Prepositions", prompt:"Complete with suitable prepositions: A learner should concentrate ___ the task, learn ___ mistakes and remain responsible ___ his or her own progress.", guide:"Expected: on, from, for. Learn each item as a natural combination and check the relationship expressed.", marks:5 },
    { name:"Right form of verbs", prompt:"Complete the passage: If a student (plan) ___ regularly and (revise) ___ what has been learnt, confidence (grow) ___. Last-minute pressure then (become) ___ easier to manage.", guide:"Expected: plans, revises, grows, becomes. The general condition uses the present simple in both clauses.", marks:5 },
    { name:"Sentence transformation", prompt:"Transform without changing meaning: (a) Very few habits are as useful as regular revision. (superlative) (b) A careful student checks every answer. (passive) (c) Though the task was difficult, she completed it. (compound)", guide:"Possible answers: Regular revision is one of the most useful habits; Every answer is checked by a careful student; The task was difficult, but she completed it.", marks:5 },
    { name:"Narration", prompt:'Change into indirect speech: The teacher said to Rafi, “Have you checked your answer?” “No, sir,” he replied, “but I will check it now.”', guide:"Identify speakers and sentence types first. A suitable version: The teacher asked Rafi if he had checked his answer. Rafi respectfully replied in the negative and added that he would check it then.", marks:5 },
    { name:"Modifiers", prompt:"Use suitable modifiers: A ___ student reads a question ___ before writing and gives a ___ organised answer supported by ___ evidence.", guide:"Many answers are possible if grammar and meaning fit, e.g. careful, attentively, clearly, relevant.", marks:5 },
    { name:"Connectors", prompt:"Complete with connectors: Mina knew the rules; ___, she made errors under pressure. ___ she began timed practice, her accuracy improved. ___, knowing a rule is not enough; it must be applied calmly.", guide:"A coherent set is however, after/when, therefore. Accept alternatives only when the logical relation and punctuation remain correct.", marks:5 },
    { name:"Formal writing", prompt:"Write an email to your college principal requesting an additional weekly English practice class. State the need, propose a workable time and keep a respectful formal tone.", guide:"Use a clear subject, appropriate salutation, concise reason, specific request and courteous close. Check register, format and task completion.", marks:10 },
    { name:"Paragraph / composition", prompt:"Write a well-organised composition on “Responsible Use of Technology by Students”. Include benefits, risks, practical habits and a balanced conclusion.", guide:"Plan before writing. Each paragraph needs one controlling point with support; avoid memorised slogans and unrelated quotations.", marks:20 },
  ];
  const secondPaperFocus: Array<[RegExp, string[]]> = [
    [/article/i, ["Articles"]], [/preposition/i, ["Prepositions"]],
    [/right form|verb/i, ["Right form of verbs"]], [/transform/i, ["Sentence transformation"]],
    [/narration/i, ["Narration"]], [/modifier/i, ["Modifiers"]],
    [/connector/i, ["Connectors"]], [/email|letter|application|formal/i, ["Formal writing"]],
    [/paragraph|composition|essay|writing/i, ["Paragraph / composition", "Formal writing"]],
  ];
  const matchedNames = secondPaperFocus.find(([pattern]) => pattern.test(chapter.title))?.[1];
  const tasks = firstPaper ? firstPaperTasks : matchedNames
    ? secondPaperTasks.filter((task) => matchedNames.includes(task.name))
    : secondPaperTasks;
  const focus = detail.anchor.replace(/\s+/g, " ").trim();
  const chapterContext = detail.context.replace(/\s+/g, " ").trim();
  return Array.from({length:40},(_,index)=>{
    const task=tasks[index%tasks.length];
    const round=Math.floor(index/tasks.length)+1;
    const instruction = firstPaper
      ? `Textbook focus: ${chapter.title}. ${chapterContext}`
      : `Grammar/writing focus: ${chapter.title}. Apply this chapter's rule instead of an unrelated grammar item.`;
    return {...common,level:(index%4===0?"Foundation":index%4===3?"Challenge":"Standard") as "Foundation"|"Standard"|"Challenge",category:(index%3===0?"Board-style":index%3===1?"Application":"College-standard") as "Board-style"|"Application"|"College-standard",prompt:`${task.name} · ${chapter.title} · Practice set ${round}\n${instruction}\n${task.prompt}`,answerGuide:`${task.guide} Chapter check: ${focus}`,marks:task.marks};
  });
}

function buildTopicCqSet(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge, workshop?: ExamResource["chapterWorkshop"]): NonNullable<ExamResource["bank"]["questions"]> {
  if (subjectId === "english" || (subjectId === "bangla" && chapter.paper === "2nd Paper")) return [];
  const detailBn = banglaChapterDetails[chapter.title];
  const terms = detailBn?.terms ?? detail.terms.split(",").map((term) => term.trim()).filter(Boolean);
  const core = detailBn?.core ?? detail.anchor;
  const context = workshop?.cqSolution?.stimulus ?? detailBn?.example ?? detail.context;
  const termA = terms[0] ?? chapter.titleBn;
  const termB = terms[1] ?? termA;
  const profiles: Record<string,{method:string;evidence:string;visual:string;mistake:string}> = {
    bangla:{method:"প্রসঙ্গ শনাক্ত করে পাঠের নির্দিষ্ট ঘটনা, বক্তব্য, চরিত্র বা চিত্রকল্পের সঙ্গে মিল–অমিল দেখানো",evidence:"পাঠের সুনির্দিষ্ট ঘটনা/বক্তব্য এবং উদ্দীপকের প্রাসঙ্গিক বাক্য",visual:"প্রসঙ্গ → পাঠ-প্রমাণ → মিল/অমিল → তাৎপর্য flowchart",mistake:"পাঠের প্রমাণ না দিয়ে শুধু উদ্দীপক বা কাহিনি পুনরাবৃত্তি"},
    ict:{method:"input–process–output আলাদা করে প্রয়োজনমতো code, truth table, network diagram বা flowchart তৈরি ও dry run করা",evidence:"সঠিক syntax/label, ধাপভিত্তিক output এবং পরীক্ষাযোগ্য ফল",visual:"code/flowchart/truth-table-এ প্রতিটি ধাপ ও output label",mistake:"code বা diagram না দেখিয়ে শুধু প্রযুক্তির সুবিধা লেখা"},
    accounting:{method:"হিসাব শনাক্ত ও শ্রেণিবিন্যাস করে ডেবিট–ক্রেডিট নীতি প্রয়োগ, দাখিলা/খতিয়ান/ছক প্রস্তুত এবং জের মিলানো",evidence:"তারিখ, হিসাবের নাম, Dr/Cr, টাকার অঙ্ক, narration ও সমতা",visual:"পরীক্ষার খাতার স্বীকৃত হিসাব-ছক এবং সম্পূর্ণ working",mistake:"কার্যপ্রণালি বাদ দিয়ে কেবল চূড়ান্ত অঙ্ক লেখা"},
    finance:{method:"প্রদত্ত নগদপ্রবাহ, সময়, হার, ব্যয় ও ঝুঁকি আলাদা করে সূত্র/মানদণ্ড নির্বাচন, মান বসানো এবং সিদ্ধান্ত ব্যাখ্যা",evidence:"সূত্র, সঠিক একক, substitution, ফল এবং ঝুঁকি–তারল্যের তুলনা",visual:"cash-flow timeline অথবা সিদ্ধান্ত-তুলনা table",mistake:"শতকরা হার ও সময়ের একক না মিলিয়ে সূত্রে মান বসানো"},
    business:{method:"লক্ষণ থেকে ব্যবস্থাপনা সমস্যা ও প্রাসঙ্গিক নীতি শনাক্ত করে দায়িত্ব, বাস্তবায়ন ধাপ এবং ফল মাপার KPI নির্ধারণ",evidence:"উদ্দীপকের আচরণ, নীতির যোগসূত্র, দায়িত্ব ও পরিমাপযোগ্য ফল",visual:"সমস্যা → নীতি → পদক্ষেপ → দায়িত্ব → KPI flowchart",mistake:"নীতির নাম লিখে বাস্তব পদক্ষেপ ও ফলের সূচক না দেওয়া"},
    economics:{method:"চলক ও অন্যান্য অবস্থা অপরিবর্তিত থাকার শর্ত ধরে ছক/সূত্র/গ্রাফে প্রাথমিক অবস্থা, পরিবর্তন ও নতুন ফল দেখানো",evidence:"অক্ষ, রেখা, বিন্দু, সূত্র, প্রদত্ত তথ্য এবং অর্থনৈতিক ব্যাখ্যা",visual:"সঠিক অক্ষ ও label-সহ schedule/graph",mistake:"রেখা বরাবর চলাচল ও সম্পূর্ণ রেখার স্থানান্তর গুলিয়ে ফেলা"},
    statistics:{method:"তথ্য ও চলক সাজিয়ে উপযুক্ত সূত্র নির্বাচন, সারণিতে working, মান নির্ণয় এবং ফলের পরিসংখ্যানগত অর্থ ব্যাখ্যা",evidence:"শ্রেণি/চলক, সূত্র, substitution, calculation, একক ও interpretation",visual:"সম্পূর্ণ frequency table/graph এবং প্রয়োজনীয় column",mistake:"সূত্র বা calculation column বাদ দিয়ে শুধু final value লেখা"},
    civics:{method:"ঘটনা থেকে অধিকার, দায়িত্ব, প্রতিষ্ঠান ও সুশাসনের নীতি শনাক্ত করে আইনসম্মত প্রক্রিয়া ও নাগরিক প্রভাব বিচার",evidence:"নীতির সংজ্ঞা, প্রতিষ্ঠানের এখতিয়ার, উদ্দীপকের ঘটনা এবং জবাবদিহির পথ",visual:"নাগরিক → প্রতিষ্ঠান → জবাবদিহি/প্রতিকার flow",mistake:"সাংবিধানিক বা প্রাতিষ্ঠানিক ভিত্তি ছাড়া ব্যক্তিগত মত লেখা"},
    history:{method:"পটভূমি, কারণ, ঘটনা, তাৎক্ষণিক ফল ও দীর্ঘমেয়াদি গুরুত্ব সময়ক্রমে সাজিয়ে উৎসের পক্ষপাত ও সীমা যাচাই",evidence:"তারিখ–ঘটনার ক্রম, সমকালীন উৎস, কারণগত যোগ এবং পরবর্তী পরিবর্তন",visual:"তারিখসহ chronology এবং cause–event–result map",mistake:"বর্তমান মত অতীতে চাপিয়ে দেওয়া বা একটি উৎসকে সম্পূর্ণ সত্য ধরা"},
    geography:{method:"স্থান, প্রক্রিয়া ও কারণ শনাক্ত করে মানচিত্র/চিত্র/তথ্য বিশ্লেষণ এবং মানুষ–পরিবেশ সম্পর্ক ব্যাখ্যা",evidence:"স্কেল, দিক, legend, অবস্থান, প্রক্রিয়ার ধাপ ও প্রদত্ত উপাত্ত",visual:"label-সহ map/profile/process diagram",mistake:"চিত্রে label না দেওয়া বা স্থানিক প্রমাণ ছাড়া সাধারণ বর্ণনা"},
    logic:{method:"বক্তব্যকে মান্য আকারে এনে পদ/বচন/প্রতীক শনাক্ত, নিয়ম প্রয়োগ এবং truth table বা ধাপে বৈধতা যাচাই",evidence:"মান্য রূপ, ব্যবহৃত নিয়ম, প্রতিটি ধাপ এবং conclusion",visual:"truth table/Venn diagram/argument map",mistake:"premise ও conclusion আলাদা না করে সরাসরি বৈধ/অবৈধ বলা"},
    islamic_history:{method:"সময়, স্থান, ব্যক্তি, কারণ, ঘটনা ও ফল ধারাবাহিকভাবে সাজিয়ে রাজনৈতিক ও সাংস্কৃতিক গুরুত্ব বিচার",evidence:"নির্ভুল chronology, ব্যক্তির ভূমিকা, কারণগত সম্পর্ক ও প্রাসঙ্গিক ঐতিহাসিক প্রমাণ",visual:"সময়রেখা ও cause–event–impact map",mistake:"ভিন্ন সময়ের ঘটনা বা ব্যক্তিকে একই পর্যায়ে বসানো"},
  };
  const profile = profiles[subjectId] ?? profiles.business;
  const cases = [
    {label:"ধারণা থেকে প্রয়োগ",stimulus:`${context} একজন শিক্ষার্থী “${termA}” ধারণাটি ব্যবহার করে সিদ্ধান্তে পৌঁছেছে।`,focus:`সিদ্ধান্তটির প্রয়োগ`,change:`উদ্দীপকের নির্ণায়ক তথ্য`},
    {label:"ভুল শনাক্ত ও সংশোধন",stimulus:`${context} সমাধানকারী ${profile.mistake}—ফলে উত্তরটি অসম্পূর্ণ হয়েছে।`,focus:"ভুলটির সংশোধন",change:"ভুলের জায়গায় সঠিক কার্যপ্রণালি"},
    {label:"প্রমাণ ও উপস্থাপন",stimulus:`${context} দুই শিক্ষার্থীর একজন শুধু বর্ণনা লিখেছে; অন্যজন ${profile.visual} ব্যবহার করে ফল দেখিয়েছে।`,focus:"দুই উত্তরের মান",change:"দৃশ্যমান প্রমাণ ও উপস্থাপন"},
    {label:"পরিবর্তিত শর্ত ও বিচার",stimulus:`${context} পরে একটি গুরুত্বপূর্ণ শর্ত/তথ্য বদলে যাওয়ায় আগের সিদ্ধান্তটি পুনর্বিবেচনা করতে হয়।`,focus:"পরিবর্তিত সিদ্ধান্ত",change:"শর্ত বদলের প্রভাব ও সীমাবদ্ধতা"},
  ];
  const firstSentence = core.split(/[।.!?]/)[0]?.trim() || core;
  const caseVariants = subjectId === "accounting" ? cases.slice(0,1) : cases;
  return caseVariants.map((item,index)=>{
    const workshopParts = workshop?.cqSolution?.parts;
    const workshopAnswer = workshopParts?.length === 4
      ? workshopParts.map((part) => `${part.label}. ${part.marks} নম্বর: ${part.answer}`).join("\n\n")
      : null;
    const visualEvidence = workshop
      ? `${workshop.visual.steps.join(" → ")}। ${workshop.visual.caption}`
      : profile.visual;
    const workshopSpecificAnswer = workshopAnswer && index === 0
      ? workshopAnswer
      : null;
    const questionVisual: QuestionVisual | undefined = workshop
      ? (index % 2 === 0
        ? { kind:"table", title:workshop.title, caption:`${chapter.titleBn} অধ্যায়ের উদ্দীপক বিশ্লেষণের তথ্যছক`, alt:`${chapter.titleBn}: ${workshop.comparison.headers.join(", ")} তুলনামূলক তথ্যছক`, placement:"both", headers:[...workshop.comparison.headers], rows:workshop.comparison.rows.map((row)=>[...row]) }
        : { kind:"flow", title:workshop.visual.title, caption:workshop.visual.caption, alt:`${chapter.titleBn}: ${workshop.visual.steps.join(" থেকে ")} ধাপচিত্র`, placement:"both", steps:[...workshop.visual.steps] })
      : undefined;
    return ({
    type:"CQ" as const,
    level:index < 2 ? "Standard" as const : "Challenge" as const,
    category:index % 2 === 0 ? "Board-style" as const : "College-standard" as const,
    prompt:"",
    promptBn:`উদ্দীপক: ${item.stimulus}\nক. ${termA} বলতে কী বোঝায়?\nখ. “${chapter.titleBn}”-এ ${termA} ও ${termB}-এর সম্পর্ক ব্যাখ্যা করো।\nগ. উদ্দীপকের তথ্য ধরে ${item.focus} দেখাও; প্রয়োজনীয় ${visualEvidence} ব্যবহার করো।\nঘ. ${item.change} বিবেচনায় ফলটি কতটা গ্রহণযোগ্য—প্রমাণ, একটি বিকল্প এবং একটি সীমাবদ্ধতাসহ বিচার করো।`,
    answerGuide:"",
    answerGuideBn:`${item.label} · ক-তে এক বাক্যের পরিচয়; খ-তে কারণসহ সম্পর্ক; গ-তে উদ্দীপকের তথ্য ও দৃশ্যমান কার্যপ্রণালি; ঘ-তে প্রমাণ, বিকল্প, সীমাবদ্ধতা ও সিদ্ধান্ত।`,
    markingPointsBn:["ক · সরাসরি ও নির্ভুল জ্ঞান — ১","খ · কারণ ও সম্পর্কসহ ব্যাখ্যা — ২","গ · উদ্দীপকভিত্তিক প্রয়োগ ও কার্যপ্রণালি — ৩","ঘ · প্রমাণ, বিকল্প, সীমাবদ্ধতা ও যুক্ত সিদ্ধান্ত — ৪"],
    modelAnswerBn:workshopSpecificAnswer ?? `ক. ১ নম্বর: ${firstSentence}।\n\nখ. ২ নম্বর: ${core} তাই ${termA} মূল ধারণাটি শনাক্ত করে এবং ${termB} তার কার্যকারণ, প্রয়োগ বা ফল স্পষ্ট করে। শুধু দুটি সংজ্ঞা নয়—তাদের এই সম্পর্কটি লিখলেই অনুধাবন অংশ সম্পূর্ণ হয়।\n\nগ. ৩ নম্বর: উদ্দীপকের প্রাসঙ্গিক তথ্য হলো—${item.stimulus} প্রথমে তথ্যটি আলাদা করতে হবে। এরপর ${profile.method}। খাতায় ${visualEvidence} দেখিয়ে ফলটি ${profile.evidence}-এর সঙ্গে মিলিয়ে যাচাই করতে হবে। এভাবে উদ্দীপকের তথ্য, নিয়ম ও ফলের সরাসরি যোগ প্রতিষ্ঠিত হয়।\n\nঘ. ৪ নম্বর: ${item.change} বিচার করলে প্রথমে ${profile.evidence} সবচেয়ে গুরুত্বপূর্ণ প্রমাণ। এই প্রমাণ মূল সিদ্ধান্তকে সমর্থন করলে তা গ্রহণযোগ্য। বিকল্পভাবে অন্য শর্ত বা ব্যাখ্যায় ফল বদলাতে পারে—তাই সেই বিকল্পের সঙ্গে মূল ফল তুলনা করতে হবে। সীমাবদ্ধতা হলো, উদ্দীপকের বাইরে অনুপস্থিত তথ্য অনুমান করা যাবে না। অতএব “${chapter.titleBn}”-এর নিয়ম, দৃশ্যমান কার্যপ্রণালি ও প্রদত্ত প্রমাণ একই সিদ্ধান্ত সমর্থন করলেই ফলটি যুক্তিসংগত; অন্যথায় সিদ্ধান্ত সংশোধন করতে হবে।`,
    marks:10,
    sourceStatus:"authored-board-pattern" as const,
    requiresVisual:Boolean(questionVisual),
    visual:questionVisual,
  });});
}

function buildBanglaLiteratureCqSet(chapter: ChapterPreview): NonNullable<ExamResource["bank"]["questions"]> {
  if (chapter.paper !== "1st Paper") return [];
  const common = { type:"CQ" as const, marks:10, sourceStatus:"authored-board-pattern" as const };
  const markingPointsBn = ["ক · সরাসরি তথ্যভিত্তিক উত্তর — ১", "খ · ধারণা, কারণ ও পাঠ-সম্পর্ক — ২", "গ · উদ্দীপকের প্রমাণ দিয়ে পাঠের প্রয়োগ — ৩", "ঘ · তুলনা, বিশ্লেষণ ও যুক্ত সিদ্ধান্ত — ৪"];
  if (chapter.title !== "Raincoat") return [];
  const items = [
    {
      stimulus:"যুদ্ধের ভয়াবহতা এড়িয়ে চলতে চাওয়া এক শিক্ষক বিপদের মুখে বন্ধুর ব্যবহৃত একটি পোশাক পরে বের হন। পোশাকটি গায়ে দিতেই তাঁর ভেতরের ভয় ধীরে ধীরে দৃঢ়তায় বদলে যায়।",
      parts:["‘রেইনকোট’ গল্পের কথক কে?","রেইনকোটটি নুরুল হুদার মনে সাহস জাগায় কেন?","উদ্দীপকের শিক্ষকের মানসিক পরিবর্তনে নুরুল হুদার পরিবর্তনের যে দিকটি ফুটে উঠেছে, তা ব্যাখ্যা করো।","‘রেইনকোট শুধু বৃষ্টি থেকে রক্ষার পোশাক নয়; এটি চেতনা বদলের প্রতীক’—উদ্দীপক ও গল্পের আলোকে মন্তব্যটি বিচার করো।"],
      answer:["ক. ১ নম্বর: ‘রেইনকোট’ গল্পের কথক ও কেন্দ্রীয় চরিত্র নুরুল হুদা।","খ. ২ নম্বর: রেইনকোটটি ছিল নুরুল হুদার মুক্তিযোদ্ধা শ্যালক মিন্টুর। এটি গায়ে দেওয়ার পর তিনি যেন মিন্টুর সাহস ও মুক্তিযুদ্ধের চেতনাকে নিজের মধ্যে অনুভব করেন; তাই তাঁর ভীরুতা ধীরে ধীরে আত্মমর্যাদা ও সাহসে রূপ নেয়।","গ. ৩ নম্বর: উদ্দীপকের শিক্ষক বিপদ এড়িয়ে চলতে চাইলেও বিশেষ পোশাকটি পরে মানসিক শক্তি পান। নুরুল হুদাও যুদ্ধকে পাশ কাটিয়ে নিরাপদ থাকতে চেয়েছিলেন। কিন্তু মিন্টুর রেইনকোট পরার পর তাঁর চলন, দৃষ্টি ও ভাবনায় সাহস আসে। উভয় ক্ষেত্রেই পোশাকটি বাহ্যিক আবরণ না থেকে অন্তর্গত পরিবর্তনের অনুঘটক হয়েছে।","ঘ. ৪ নম্বর: মন্তব্যটি যথার্থ। প্রথমত, রেইনকোটটি মিন্টুর মুক্তিযোদ্ধা পরিচয়ের স্মারক। দ্বিতীয়ত, এটি নুরুল হুদার ভীরু ও নিরপেক্ষ মানসিকতায় সাহস সঞ্চার করে। তৃতীয়ত, সামরিক নির্যাতনের মধ্যেও তিনি মুক্তিযুদ্ধের প্রয়োজন উপলব্ধি করেন এবং চাবুকের আঘাতকে তুচ্ছ ভাবতে পারেন। উদ্দীপকেও পোশাকটি চরিত্রের ভেতরের শক্তিকে জাগায়। তাই গল্পে রেইনকোট বস্তুগত পোশাকের সীমা ছাড়িয়ে সাহস, দেশপ্রেম ও চেতনার রূপান্তরের প্রতীক হয়েছে।"],
    },
    {
      stimulus:"একজন নাগরিক মনে করেন, অন্যায় সংঘাত থেকে দূরে থাকলেই তিনি নিরাপদ থাকবেন। কিন্তু দমনকারী শক্তি কোনো প্রমাণ ছাড়াই তাঁকে আটক ও নির্যাতন করে। তখন তিনি বোঝেন—অন্যায়ের সময়ে নীরব থাকাও নিরাপত্তা দেয় না।",
      parts:["মিন্টু কে?","নুরুল হুদাকে সামরিক বাহিনী কেন সন্দেহ করে?","উদ্দীপকের নাগরিকের উপলব্ধির সঙ্গে নুরুল হুদার উপলব্ধির সাদৃশ্য ব্যাখ্যা করো।","‘সংকটকালে নিরপেক্ষ থাকার চেষ্টা শেষ পর্যন্ত নুরুল হুদাকে মুক্তিযুদ্ধের পক্ষেই দাঁড় করায়’—বিশ্লেষণ করো।"],
      answer:["ক. ১ নম্বর: মিন্টু নুরুল হুদার শ্যালক এবং একজন মুক্তিযোদ্ধা।","খ. ২ নম্বর: কলেজের সামনে গেরিলা আক্রমণের পর পাকিস্তানি সামরিক বাহিনী শিক্ষকদের সন্দেহ করে। নুরুল হুদার শ্যালক মিন্টু মুক্তিযুদ্ধে যোগ দেওয়ায় এবং তিনি মিন্টুর রেইনকোট পরে থাকায় সন্দেহ আরও ঘনীভূত হয়।","গ. ৩ নম্বর: উদ্দীপকের নাগরিক সংঘাত এড়িয়ে নিরাপদ থাকতে চেয়েও দমন-পীড়নের শিকার হন। নুরুল হুদাও যুদ্ধের পক্ষে বা বিপক্ষে প্রকাশ্যে না গিয়ে স্বাভাবিক জীবন চালাতে চেয়েছিলেন। কিন্তু নির্দোষ হয়েও আটক ও নির্যাতিত হয়ে তিনি বুঝতে পারেন, দখলদার শক্তির কাছে নিরপেক্ষতার কোনো নিরাপত্তা নেই। এই অভিজ্ঞতাই উভয় চরিত্রকে অন্যায়ের প্রকৃতি চিনিয়েছে।","ঘ. ৪ নম্বর: বক্তব্যটি সঠিক। শুরুতে নুরুল হুদা ভীতু, আত্মরক্ষামুখী এবং সংঘাত এড়িয়ে চলতে আগ্রহী। কিন্তু গেরিলা আক্রমণের ঘটনায় তাঁকে সন্দেহভাজন করা হয়; নির্দোষ হওয়া সত্ত্বেও তিনি নির্যাতিত হন। এই অভিজ্ঞতায় তাঁর নিরপেক্ষতার মোহ ভাঙে এবং মিন্টুর যুদ্ধে যাওয়ার কারণ বোধগম্য হয়। রেইনকোটের প্রতীকী সাহস ও নির্যাতনের বাস্তব অভিজ্ঞতা মিলিয়ে তাঁর মধ্যে দেশপ্রেম জাগে। ফলে তাঁর নিরপেক্ষ থাকার চেষ্টা শেষ পর্যন্ত মুক্তিযুদ্ধের নৈতিক প্রয়োজনকেই প্রতিষ্ঠা করে।"],
    },
    {
      stimulus:"একটি শিক্ষাপ্রতিষ্ঠানের সামনে প্রতিরোধযোদ্ধারা শাসকগোষ্ঠীর স্থাপনায় আঘাত হানে। ঘটনার সঙ্গে জড়িতদের না পেয়ে বাহিনী প্রতিষ্ঠানটির নিরীহ কর্মীদের জিজ্ঞাসাবাদ ও শাস্তি দেয়।",
      parts:["গল্পে নুরুল হুদার পেশা কী?","কলেজের শিক্ষকরা তলব হন কেন?","উদ্দীপকে দমননীতি ‘রেইনকোট’ গল্পের কোন ঘটনাকে স্মরণ করায়? ব্যাখ্যা করো।","উদ্দীপক ও গল্পে শাসকগোষ্ঠীর আচরণ কীভাবে মুক্তিযুদ্ধের নৈতিক যৌক্তিকতা প্রতিষ্ঠা করে—মূল্যায়ন করো।"],
      answer:["ক. ১ নম্বর: নুরুল হুদা ঢাকা কলেজের রসায়ন বিভাগের প্রভাষক।","খ. ২ নম্বর: কলেজের সামনে গেরিলা আক্রমণে বৈদ্যুতিক ট্রান্সফর্মার ধ্বংস হওয়ার পর পাকিস্তানি বাহিনী তথ্য আদায়ের জন্য শিক্ষকদের তলব করে।","গ. ৩ নম্বর: উদ্দীপকে প্রকৃত প্রতিরোধযোদ্ধাদের ধরতে না পেরে নিরীহ কর্মীদের শাস্তি দেওয়া হয়েছে। গল্পেও গেরিলা আক্রমণ সম্পর্কে কিছু না জানা সত্ত্বেও নুরুল হুদা ও অন্য শিক্ষককে সন্দেহ করে আটক ও নির্যাতন করা হয়। উভয় ক্ষেত্রেই প্রমাণভিত্তিক বিচার নয়, ভয় সৃষ্টি ও সমষ্টিগত দমনই বাহিনীর কৌশল।","ঘ. ৪ নম্বর: উভয় ঘটনাই দেখায় যে শাসকগোষ্ঠী আইন, ন্যায়বিচার ও মানবিক মর্যাদা অস্বীকার করেছে। নিরপরাধ মানুষকে শাস্তি দেওয়া তাদের শাসনের নৈতিক ভিত্তি নষ্ট করে। গল্পে নুরুল হুদার ওপর নির্যাতন তাঁর বিবেক জাগায় এবং মুক্তিযোদ্ধাদের প্রতিরোধের কারণ স্পষ্ট করে। উদ্দীপকেও দমননীতি সাধারণ মানুষকে প্রতিরোধের নৈতিক অবস্থানের দিকে ঠেলে দেয়। তাই স্বাধীনতা ও মানবমর্যাদা রক্ষার সংগ্রাম এখানে প্রতিশোধ নয়, বরং অন্যায় শাসনের বিরুদ্ধে ন্যায়সংগত প্রতিরোধ হিসেবে প্রতিষ্ঠিত।"],
    },
    {
      stimulus:"ভীত স্বভাবের একজন মানুষ কঠিন শারীরিক নির্যাতনের মধ্যেও হঠাৎ অনুভব করেন, আঘাত তাঁকে আর আগের মতো ভাঙতে পারছে না। তাঁর মনে হয়, তিনি এক বৃহত্তর সংগ্রামের অংশ।",
      parts:["‘স্রেফ উৎপাত’ কথাটি কার অনুভূতি প্রকাশ করে?","নির্যাতনের সময় নুরুল হুদার ভয় কমে যায় কেন?","উদ্দীপকের চরিত্রের মানসিক শক্তির সঙ্গে নুরুল হুদার অবস্থার মিল দেখাও।","শারীরিকভাবে বন্দি হয়েও নুরুল হুদা মানসিকভাবে মুক্ত—মন্তব্যটির যথার্থতা বিচার করো।"],
      answer:["ক. ১ নম্বর: ‘স্রেফ উৎপাত’ কথাটি নুরুল হুদার অনুভূতি প্রকাশ করে।","খ. ২ নম্বর: মিন্টুর রেইনকোট তাঁকে মুক্তিযোদ্ধার সাহসের সঙ্গে মানসিকভাবে যুক্ত করে। নির্যাতনের অভিজ্ঞতায় তিনি মুক্তিযুদ্ধের প্রয়োজন বুঝতে পারেন; তাই চাবুকের আঘাত তাঁর কাছে ভয়ংকর শাস্তি না হয়ে তুচ্ছ উৎপাত বলে মনে হয়।","গ. ৩ নম্বর: উদ্দীপকের চরিত্র আঘাতের মধ্যে নিজেকে বৃহত্তর সংগ্রামের অংশ ভাবায় মানসিক শক্তি পায়। একইভাবে নুরুল হুদা প্রথমে ভীত হলেও নির্যাতনের মুহূর্তে মিন্টু ও মুক্তিযোদ্ধাদের সাহস অনুভব করেন। দেহে আঘাত লাগলেও তাঁর চেতনা আর আত্মসমর্পণ করে না। এই আত্মিক সংযোগই দুই চরিত্রের মিল।","ঘ. ৪ নম্বর: মন্তব্যটি যথার্থ। পাকিস্তানি বাহিনী নুরুল হুদাকে বন্দি করে তাঁর শরীরের ওপর নিয়ন্ত্রণ প্রতিষ্ঠা করে, কিন্তু তাঁর চিন্তা ও বিবেককে নিয়ন্ত্রণ করতে পারে না। বরং নির্যাতন তাঁর নিরপেক্ষতার ভ্রান্তি দূর করে এবং স্বাধীনতার আকাঙ্ক্ষা জাগায়। রেইনকোটের প্রতীকী উষ্ণতা তাঁকে মিন্টুর সাহসের অংশীদার করে। ফলে শারীরিক যন্ত্রণা তাঁর মনোবল ভাঙার বদলে প্রতিরোধের চেতনাকে দৃঢ় করে; এই অর্থে বন্দি অবস্থাতেও তিনি মানসিকভাবে মুক্ত।"],
    },
  ];
  return items.map((item, itemIndex) => ({
    ...common,
    level: itemIndex < 2 ? "Standard" as const : "Challenge" as const,
    category: itemIndex % 2 === 0 ? "Board-style" as const : "College-standard" as const,
    prompt:"",
    promptBn:`উদ্দীপক: ${item.stimulus}\nক. ${item.parts[0]}\nখ. ${item.parts[1]}\nগ. ${item.parts[2]}\nঘ. ${item.parts[3]}`,
    answerGuide:"",
    answerGuideBn:"প্রথমে প্রশ্নের নির্দেশক শব্দ দেখো। ক-তে সরাসরি তথ্য, খ-তে কারণসহ ব্যাখ্যা, গ-তে উদ্দীপক ও পাঠের স্পষ্ট যোগ, ঘ-তে প্রমাণভিত্তিক বিচার ও সিদ্ধান্ত লিখবে।",
    markingPointsBn,
    modelAnswerBn:item.answer.join("\n\n"),
  }));
}

type IctMcqSeed = { q:string; options:[string,string,string,string]; answer:number; why:string };
const ictMcqSeeds: Record<string,IctMcqSeed[]> = {
  "ICT: World and Bangladesh Perspective":[
    {q:"কোন প্রযুক্তিতে ব্যক্তির আঙুলের ছাপকে digital template-এর সঙ্গে মিলিয়ে পরিচয় নিশ্চিত করা হয়?",options:["Biometrics","Bioinformatics","Virtual reality","Nanotechnology"],answer:0,why:"Biometrics মানুষের অনন্য শারীরিক বা আচরণগত বৈশিষ্ট্য capture করে সংরক্ষিত template-এর সঙ্গে মিলিয়ে পরিচয় যাচাই করে।"},
    {q:"একজন চিকিৎসক দূরের রোগীর ECG দেখে পরামর্শ দিলেন। এটি বিশ্বগ্রামের কোন প্রয়োগ?",options:["E-commerce","Telemedicine","E-governance","Robotics"],answer:1,why:"দূর থেকে যোগাযোগ প্রযুক্তির সাহায্যে চিকিৎসাসেবা দেওয়াই telemedicine; শুধু স্বাস্থ্যতথ্য সংরক্ষণকে telemedicine বলা যায় না।"},
    {q:"AI-ভিত্তিক রোগ শনাক্তকরণে সবচেয়ে দায়িত্বশীল সিদ্ধান্ত কোনটি?",options:["AI-এর ফলই চূড়ান্ত ধরা","রোগীর সব data উন্মুক্ত রাখা","মানব চিকিৎসকের review ও data protection রাখা","Consent ছাড়াই model train করা"],answer:2,why:"AI সহায়ক সিদ্ধান্ত দেয়; privacy, consent, bias এবং ভুল ফল সামলাতে নিরাপদ data handling ও qualified human review প্রয়োজন।"},
    {q:"Virtual reality-র বৈশিষ্ট্য কোনটি?",options:["কেবল স্থির ছবি দেখায়","জীববৈজ্ঞানিক data বিশ্লেষণ করে","পরমাণু স্তরে বস্তু তৈরি করে","computer-generated পরিবেশে উপস্থিতির অনুভূতি দেয়"],answer:3,why:"VR দৃষ্টি, শব্দ ও interaction দিয়ে কৃত্রিম পরিবেশে immersion বা উপস্থিতির অনুভূতি তৈরি করে।"},
  ],
  "Communication Systems and Networking":[
    {q:"একই সময়ে উভয় দিকে data পাঠানো যায় কোন mode-এ?",options:["Full-duplex","Simplex","Half-duplex","Broadcast only"],answer:0,why:"Full-duplex-এ দুই প্রান্ত একই সময়ে send ও receive করতে পারে; telephone call পরিচিত উদাহরণ।"},
    {q:"ভিন্ন network-এর মধ্যে IP packet-এর পথ নির্বাচন করে কোন device?",options:["Repeater","Router","Hub","NIC"],answer:1,why:"Router destination IP ও routing information দেখে এক network থেকে অন্য network-এ packet পাঠায়।"},
    {q:"একটি star network-এ একটি workstation-এর cable ছিঁড়ে গেলে সাধারণত কী ঘটে?",options:["পুরো network বন্ধ হয়","সব data দ্বিগুণ হয়","শুধু ওই workstation বিচ্ছিন্ন হয়","topology bus হয়ে যায়"],answer:2,why:"Star topology-তে প্রতিটি node-এর আলাদা link থাকে; একটি link নষ্ট হলে সংশ্লিষ্ট node-ই বিচ্ছিন্ন হয়, তবে central device নষ্ট হলে পুরো network প্রভাবিত হয়।"},
    {q:"দীর্ঘ দূরত্বে উচ্চ bandwidth ও কম electromagnetic interference-এর জন্য উপযুক্ত মাধ্যম কোনটি?",options:["Twisted pair","Coaxial cable","Microwave only","Optical fibre"],answer:3,why:"Optical fibre আলো দিয়ে signal বহন করে, তাই EMI প্রতিরোধী এবং দীর্ঘ দূরত্বে উচ্চ bandwidth দিতে পারে।"},
  ],
  "Number Systems and Digital Devices":[
    {q:"(101101)₂-এর দশমিক মান কত?",options:["45","41","51","53"],answer:0,why:"1×2⁵+1×2³+1×2²+1×2⁰ = 32+8+4+1 = 45।"},
    {q:"(11111111)₂-এর hexadecimal রূপ কোনটি?",options:["EE","FF","F0","1FF"],answer:1,why:"ডান দিক থেকে চার bit করে 1111 1111; প্রতিটি 1111 = F, তাই ফল FF₁₆।"},
    {q:"Half adder-এর Sum output কোন gate দেয়?",options:["AND","OR","XOR","NOR"],answer:2,why:"Half adder-এ Sum=A⊕B এবং Carry=A·B; তাই Sum-এর gate XOR।"},
    {q:"শুধু একটি gate দিয়ে যেকোনো Boolean circuit তৈরি করা যায়—এমন gate কোনটি?",options:["XOR","Buffer","XNOR","NAND"],answer:3,why:"NAND universal gate; NAND দিয়েই NOT, AND এবং OR তৈরি করা যায়।"},
  ],
  "Introduction to Web Design and HTML":[
    {q:"Browser tab-এ page-এর নাম দেখাতে কোন element ব্যবহার করা হয়?",options:["<title>","<h1>","<header>","<caption>"],answer:0,why:"<title> head-এর মধ্যে থাকে এবং browser tab/bookmark-এর নাম নির্ধারণ করে; visible heading-এর জন্য h1 ব্যবহৃত হয়।"},
    {q:"Table-এর একটি data cell সঠিকভাবে কোথায় থাকবে?",options:["সরাসরি body-এর child","<tr>-এর ভেতরে","<title>-এর ভেতরে","<img>-এর ভেতরে"],answer:1,why:"td বা th একটি table row অর্থাৎ tr-এর child; tr table-এর মধ্যে থাকে।"},
    {q:"ছবি load না হলে অর্থ বোঝাতে এবং screen reader-কে সহায়তা করতে কোন attribute দরকার?",options:["href","target","alt","method"],answer:2,why:"alt attribute ছবির meaningful text alternative দেয়; এটি file path নয়।"},
    {q:"কোন code-এ tag nesting সঠিক?",options:["<p><b>Text</p></b>","<table><td>A</table></td>","<ul><p>Item</p></ul>","<p><strong>Text</strong></p>"],answer:3,why:"যে element পরে খোলা হয় সেটি আগে বন্ধ হয়; তাই strong বন্ধ করে তারপর p বন্ধ করা সঠিক।"},
  ],
  "Programming Language":[
    {q:"একটি C program-এ sum ব্যবহার করার আগে int sum=0; লেখার প্রধান কারণ কী?",options:["নির্ধারিত প্রাথমিক মান দেওয়া","loop বন্ধ করা","input নেওয়া","compiler uninstall করা"],answer:0,why:"Local variable initialize না করলে অনির্ধারিত মান থাকতে পারে; accumulator-কে শূন্য দিয়ে শুরু করলে যোগের ফল নির্ভরযোগ্য হয়।"},
    {q:"for(i=2;i<=8;i+=2) loop-এ body কতবার চলবে?",options:["3","4","5","8"],answer:1,why:"i-এর মান 2, 4, 6, 8—মোট চারবার; এরপর i=10 হলে condition false।"},
    {q:"C-তে 5 element-এর array-এর শেষ valid index কত?",options:["5","1","4","0"],answer:2,why:"Array index 0 থেকে শুরু হয়; তাই 5 element-এর index 0,1,2,3,4।"},
    {q:"Program চলে কিন্তু ভুল result দেয়—এটি সাধারণত কোন error?",options:["Syntax error","Linker error","Typing font error","Logic error"],answer:3,why:"Logic error-এ instruction বৈধ হওয়ায় program চলে, কিন্তু algorithm বা condition ভুল হওয়ায় ফল ভুল হয়; dry run ও test case দিয়ে ধরা যায়।"},
  ],
  "Database Management System":[
    {q:"প্রতিটি record-কে uniquely শনাক্ত করে কোন key?",options:["Primary key","Foreign key","Sort key","Duplicate key"],answer:0,why:"Primary key-এর মান unique এবং null নয়; তাই প্রতিটি record নির্ভরযোগ্যভাবে শনাক্ত করা যায়।"},
    {q:"Student table-এর class_id যদি Class table-এর primary key-কে নির্দেশ করে, Student.class_id কী?",options:["Primary key","Foreign key","Report","Form"],answer:1,why:"অন্য table-এর primary key reference করা field হলো foreign key; এটি relationship ও referential integrity বজায় রাখতে সাহায্য করে।"},
    {q:"৮০ বা বেশি mark-এর record বাছতে সঠিক condition কোনটি?",options:["WHERE mark = 80 only","ORDER mark 80","WHERE mark >= 80","SELECT mark < 80"],answer:2,why:"WHERE record filter করে এবং >= 80 মানে 80-সহ তার বেশি সব মান।"},
    {q:"UPDATE Student SET name='Rafi'; লিখে WHERE বাদ দিলে কী ঝুঁকি?",options:["কোনো row বদলাবে না","শুধু প্রথম row বদলাবে","table delete হবে","সব row-এর name বদলে যেতে পারে"],answer:3,why:"WHERE ছাড়া UPDATE সাধারণত table-এর সব record-এ প্রয়োগ হয়; আগে SELECT দিয়ে target record যাচাই করা নিরাপদ।"},
  ],
};

function buildIctSeedQuestions(chapter: ChapterPreview): NonNullable<ExamResource["bank"]["questions"]> {
  return (ictMcqSeeds[chapter.title] ?? []).map((item,index)=>({
    type:"MCQ" as const,level:(index<2?"Foundation":"Standard") as "Foundation"|"Standard",category:(index%2?"Application":"Concept") as "Application"|"Concept",
    prompt:"",promptBn:item.q,optionsBn:item.options,correctIndex:item.answer,answerGuide:"",answerGuideBn:`সঠিক উত্তর: ${item.options[item.answer]}। ${item.why}`,marks:1,sourceStatus:"authored-board-pattern" as const,
  }));
}

function expandedQuestionSet(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge, base: NonNullable<ExamResource["bank"]["questions"]>, workshop?: ExamResource["chapterWorkshop"], materialPack?: ExamResource["materialPack"]): NonNullable<ExamResource["bank"]["questions"]> {
  if (subjectId === "english") return buildEnglishBoardPracticeSet(chapter, detail);
  const isEnglish = subjectId === "english";
  const name = isEnglish ? chapter.title : chapter.titleBn;
  const bn = banglaChapterDetails[chapter.title];
  const terms = bn?.terms ?? detail.terms.split(",").map((term) => term.trim()).filter(Boolean);
  const example = bn?.example ?? detail.context;
  const core = bn?.core ?? detail.anchor;
  const common = { sourceStatus: "authored-board-pattern" as const };
  const correct = isEnglish ? "The option that applies the chapter rule to the decisive evidence" : "অধ্যায়ের নিয়ম নির্ণায়ক তথ্যের সঙ্গে প্রয়োগ করা";
  const mcqAngles = isEnglish ? [
    "best definition", "correct relationship", "first analytical step", "most relevant evidence", "valid application", "common misconception", "best final check", "Bangladesh-context decision", "cause-and-effect link", "appropriate limitation", "strongest conclusion", "highest-scoring approach",
  ] : [
    "সবচেয়ে নির্ভুল সংজ্ঞা", "সঠিক পারস্পরিক সম্পর্ক", "বিশ্লেষণের প্রথম ধাপ", "সবচেয়ে প্রাসঙ্গিক প্রমাণ", "যথাযথ বাস্তব প্রয়োগ", "প্রচলিত ভুল ধারণা", "উত্তর যাচাইয়ের শেষ ধাপ", "বাংলাদেশভিত্তিক সিদ্ধান্ত", "কারণ ও ফলের সঠিক যোগসূত্র", "প্রয়োজনীয় সীমাবদ্ধতা", "সবচেয়ে শক্তিশালী উপসংহার", "পূর্ণ নম্বর পাওয়ার কৌশল",
  ];
  const mcqs = mcqAngles.map((angle, index) => ({
    type: "MCQ" as const,
    level: (["Foundation", "Standard", "Challenge"] as const)[index % 3],
    category: (["Concept", "Application", "Board-style", "College-standard"] as const)[index % 4],
    prompt: isEnglish ? `For ${name}, which option demonstrates the ${angle}?` : "",
    promptBn: isEnglish ? undefined : `“${name}” অধ্যায়ে ${angle} কোনটি?`,
    optionsBn: isEnglish
      ? [correct, "A memorised statement unrelated to the task", "A conclusion without evidence", "A repetition of the stimulus"]
      : [correct, "প্রশ্নের চাহিদাবহির্ভূত মুখস্থ বক্তব্য", "প্রমাণহীন উপসংহার", "উদ্দীপকের হুবহু পুনরাবৃত্তি"],
    correctIndex: 0,
    answerGuide: isEnglish ? `${detail.anchor} The correct choice connects the rule, evidence and required conclusion.` : "",
    answerGuideBn: isEnglish ? undefined : `সঠিক উত্তর: ${correct}। ${core}`,
    marks: 1,
    ...common,
  }));
  const cqAngles = isEnglish ? [
    "concept and application", "comparison and decision", "error diagnosis", "evidence evaluation", "Bangladesh-context problem", "alternative solution", "cause and consequence", "integrated revision case",
  ] : [
    "ধারণা ও প্রয়োগ", "তুলনা ও সিদ্ধান্ত", "ভুল নির্ণয়", "প্রমাণ মূল্যায়ন", "বাংলাদেশভিত্তিক সমস্যা", "বিকল্প সমাধান", "কারণ ও ফলাফল", "সমন্বিত পুনরালোচনা",
  ];
  const cqs = cqAngles.map((angle, index) => ({
    type: "CQ" as const,
    level: index < 3 ? "Standard" as const : "Challenge" as const,
    category: index % 2 === 0 ? "Board-style" as const : "College-standard" as const,
    prompt: isEnglish ? `${example} Develop a four-part HSC response on ${angle}, from knowledge to higher-order evaluation.` : "",
    promptBn: isEnglish ? undefined : `উদ্দীপক: ${example}\nক. ${terms[index % terms.length] ?? name} কী?\nখ. “${name}” অধ্যায়ের ${angle} ব্যাখ্যা করো।\nগ. উদ্দীপকের নির্দিষ্ট তথ্য ব্যবহার করে নীতিটি প্রয়োগ করো।\nঘ. বিকল্প, প্রমাণ ও সীমাবদ্ধতা বিবেচনায় ফলাফল মূল্যায়ন করো।`,
    answerGuide: isEnglish ? "1 mark exact knowledge; 2 marks explanation; 3 marks stimulus-based application; 4 marks evidence-led evaluation and conclusion." : "",
    answerGuideBn: isEnglish ? undefined : "ক—১: নির্ভুল পরিচয়। খ—২: কারণ ও সম্পর্ক। গ—৩: উদ্দীপকের তথ্যভিত্তিক প্রয়োগ। ঘ—৪: বিশ্লেষণ, বিকল্প/সীমাবদ্ধতা ও সিদ্ধান্ত।",
    markingPointsBn: isEnglish ? undefined : ["ক · নির্ভুল জ্ঞান — ১", "খ · সম্পর্কসহ ব্যাখ্যা — ২", "গ · উদ্দীপকভিত্তিক প্রয়োগ — ৩", "ঘ · প্রমাণভিত্তিক মূল্যায়ন — ৪"],
    marks: 10,
    ...common,
  }));
  const writingAngles = isEnglish ? ["structured note", "worked explanation", "comparison", "case analysis", "error correction", "Bangladesh application", "exam strategy", "full model answer"] : ["কাঠামোবদ্ধ নোট", "সমাধানসহ ব্যাখ্যা", "তুলনামূলক আলোচনা", "ঘটনা বিশ্লেষণ", "ভুল সংশোধন", "বাংলাদেশভিত্তিক প্রয়োগ", "পরীক্ষার কৌশল", "পূর্ণাঙ্গ মডেল উত্তর"];
  const written = writingAngles.map((angle, index) => ({
    type: "Written" as const,
    level: (["Foundation", "Standard", "Challenge"] as const)[index % 3],
    category: index % 2 === 0 ? "Application" as const : "College-standard" as const,
    prompt: isEnglish ? `Write a complete ${angle} for ${name}, using a relevant example and a justified conclusion.` : "",
    promptBn: isEnglish ? undefined : `“${name}” বিষয়ে ${angle} লেখো—মূল ধারণা, ${terms.slice(0, 3).join(", ")}, একটি প্রাসঙ্গিক উদাহরণ, সাধারণ ভুল এবং যুক্তিসংগত উপসংহারসহ।`,
    answerGuide: isEnglish ? "Assess task fulfilment, chapter accuracy, organisation, evidence, language and conclusion." : "",
    answerGuideBn: isEnglish ? undefined : "মানবণ্টন: ভূমিকা ১, নির্ভুল ধারণা ২, উদাহরণ/প্রয়োগ ৩, বিশ্লেষণ ও ভুল সংশোধন ২, উপসংহার ও উপস্থাপন ২।",
    markingPointsBn: isEnglish ? undefined : ["প্রাসঙ্গিক ভূমিকা — ১", "ধারণা ও পরিভাষা — ২", "উদাহরণ/প্রয়োগ — ৩", "বিশ্লেষণ — ২", "উপসংহার ও উপস্থাপন — ২"],
    marks: 10,
    ...common,
  }));
  const retrievalAngles = isEnglish ? [
    "Which statement gives the most accurate meaning and condition?",
    "Which statement connects the term to the chapter rule correctly?",
    "Which option applies the term to the decisive fact?",
    "Which option distinguishes it from a nearby idea?",
    "Which evidence would verify its use?",
    "Which final check prevents the most common error?",
  ] : [
    "কোন বক্তব্যে অর্থ ও প্রয়োগের শর্ত সবচেয়ে নির্ভুল?",
    "কোন বক্তব্যে পরিভাষাটি অধ্যায়ের মূলনীতির সঙ্গে সঠিকভাবে যুক্ত?",
    "কোন বিকল্পে পরিভাষাটি নির্ণায়ক তথ্যে যথাযথভাবে প্রয়োগ করা হয়েছে?",
    "কোন বক্তব্যে কাছাকাছি ধারণা থেকে এর পার্থক্য স্পষ্ট?",
    "কোন প্রমাণটি এর ব্যবহার সবচেয়ে ভালোভাবে যাচাই করবে?",
    "কোন শেষ যাচাইটি সাধারণ ভুল প্রতিরোধ করবে?",
  ];
  const contextLenses = isEnglish ? [
    "a classroom explanation", "an exam-hall decision", "a Bangladesh small-business case", "a household decision", "a public-service situation",
    "a data table", "a source extract", "an error-correction task", "a comparison task", "a final revision checkpoint",
  ] : [
    "শ্রেণিকক্ষের ব্যাখ্যা", "পরীক্ষার হলের সিদ্ধান্ত", "বাংলাদেশের ক্ষুদ্র ব্যবসার ঘটনা", "পরিবারের সিদ্ধান্ত", "জনসেবা পরিস্থিতি",
    "তথ্যছক", "উৎসের অংশ", "ভুল সংশোধনের কাজ", "তুলনামূলক পরিস্থিতি", "চূড়ান্ত রিভিশন যাচাই",
  ];
  const retrievalRounds: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 60 }, (_, index) => {
    const phase = index % 12;
    const term = terms[index % Math.max(terms.length, 1)] ?? name;
    const lens = contextLenses[Math.floor(index / 6) % contextLenses.length];
    if (phase < 6) return {
      type: "MCQ" as const,
      level: (["Foundation", "Standard", "Challenge"] as const)[index % 3],
      category: (["Concept", "Application", "Board-style"] as const)[index % 3],
      prompt: isEnglish ? `${name} · ${lens} · ${term}: ${retrievalAngles[phase]}` : "",
      promptBn: isEnglish ? undefined : `“${name}” অধ্যায়ে ${lens} ধরে ${term}: ${retrievalAngles[phase]}`,
      optionsBn: isEnglish ? [`Apply ${term} to the decisive evidence and verify it against the chapter rule`, "Repeat the term without explaining its meaning", "Reverse the chapter relationship", "Ignore the evidence and guess"] : [`${term}-কে নির্ণায়ক তথ্য ও অধ্যায়ের নিয়মের সঙ্গে মিলিয়ে ফল যাচাই করা`, "অর্থ ব্যাখ্যা না করে শুধু পরিভাষাটি লেখা", "অধ্যায়ের সম্পর্কটি উল্টোভাবে প্রয়োগ করা", "প্রমাণ উপেক্ষা করে অনুমান করা"],
      correctIndex: 0,
      answerGuide: isEnglish ? `Recall ${term}, then test it against this chapter rule: ${detail.anchor}` : "",
      answerGuideBn: isEnglish ? undefined : `${term}-এর অর্থ মনে করে অধ্যায়ের মূল নিয়মের সঙ্গে মিলাও। ${core}`,
      marks: 1,
      ...common,
    };
    if (phase < 9) return {
      type: "CQ" as const,
      level: phase === 8 ? "Challenge" as const : "Standard" as const,
      category: index % 2 === 0 ? "Board-style" as const : "College-standard" as const,
      prompt: isEnglish ? `${lens}: ${example} Use ${term} in a complete four-part response.` : "",
      promptBn: isEnglish ? undefined : `${lens}ভিত্তিক উদ্দীপক: ${example}\nক. ${term} কী?\nখ. অধ্যায়ে এর ভূমিকা ব্যাখ্যা করো।\nগ. উদ্দীপকের তথ্য ধরে প্রয়োগ করো।\nঘ. ফলাফল ও সীমাবদ্ধতা মূল্যায়ন করো।`,
      answerGuide: isEnglish ? "Answer from exact knowledge through evidence-based evaluation, matching 1+2+3+4 marks." : "",
      answerGuideBn: isEnglish ? undefined : "১+২+৩+৪ মানবণ্টন মেনে সংজ্ঞা, ব্যাখ্যা, উদ্দীপকভিত্তিক প্রয়োগ এবং মূল্যায়ন লিখতে হবে।",
      marks: 10,
      ...common,
    };
    return {
      type: "Written" as const,
      level: phase === 11 ? "Challenge" as const : "Standard" as const,
      category: index % 2 === 0 ? "Application" as const : "College-standard" as const,
      prompt: isEnglish ? `Using ${lens}, create an exam-ready response connecting ${term}, the chapter rule and ${example}.` : "",
      promptBn: isEnglish ? undefined : `${lens} ধরে ${term}, অধ্যায়ের মূল নিয়ম এবং “${example}”—এই তিনটি যুক্ত করে পরীক্ষার উপযোগী বিশ্লেষণধর্মী উত্তর লেখো।`,
      answerGuide: isEnglish ? "Use a precise opening, connected explanation, relevant application, one limitation and a supported conclusion." : "",
      answerGuideBn: isEnglish ? undefined : "নির্ভুল ভূমিকা, সম্পর্কিত ব্যাখ্যা, বাস্তব প্রয়োগ, একটি সীমাবদ্ধতা এবং প্রমাণসমর্থিত উপসংহার থাকতে হবে।",
      marks: 10,
      ...common,
    };
  });
  const literatureCqs = subjectId === "bangla" ? buildBanglaLiteratureCqSet(chapter) : [];
  const topicCqs = literatureCqs.length ? literatureCqs : buildTopicCqSet(subjectId, chapter, detail, workshop);
  const materialQuestions: NonNullable<ExamResource["bank"]["questions"]> = materialPack ? [
    {
      type:materialPack.assessmentFormat==="cq"?"CQ":"Written",level:"Standard",category:"Board-style",prompt:"",
      promptBn:`উদ্দীপক: ${materialPack.fullCq.stimulus}\n${materialPack.fullCq.parts.map(part=>`${part.label}. ${part.question}`).join("\n")}`,
      answerGuide:"",answerGuideBn:materialPack.assessmentFormat==="cq"?"Material Pack-এর সমাধানপদ্ধতি অনুসরণ করে ১+২+৩+৪ নম্বরের গভীরতায় উত্তর দাও।":"প্রশ্নের নির্ধারিত কাজ, বিন্যাস, ভাষা ও সম্পাদনা-মানদণ্ড মেনে পূর্ণ উত্তর দাও।",
      markingPointsBn:materialPack.fullCq.parts.map(part=>`${part.label} · ${part.marks} নম্বর — ${part.question}`),
      modelAnswerBn:materialPack.fullCq.parts.map(part=>`${part.label}. ${part.marks} নম্বর: ${part.answer}`).join("\n\n"),
      marks:10,sourceStatus:"authored-board-pattern",
    },
    ...materialPack.workedAnswers.map((item,index)=>({
      type:"Written" as const,level:index===0?"Standard" as const:"Challenge" as const,category:index===0?"Application" as const:"College-standard" as const,prompt:"",promptBn:item.question,
      answerGuide:"",answerGuideBn:`সমাধানের ধাপ: ${item.steps.join(" → ")}`,
      markingPointsBn:["প্রশ্নের চাহিদা ও তথ্য — ২","সঠিক নিয়ম/পদ্ধতি — ২","সম্পূর্ণ প্রয়োগ/working — ৩","যাচাই, ব্যাখ্যা ও সিদ্ধান্ত — ৩"],
      modelAnswerBn:`প্রশ্ন বিশ্লেষণ: ${item.steps[0]}।\n\nসমাধানের কার্যপ্রণালি: ${item.steps.slice(1).join(" → ")}।\n\nপূর্ণ উত্তর: ${item.answer}`,
      marks:10,sourceStatus:"authored-board-pattern" as const,
    })),
  ] : [];
  const diversified = buildDiversifiedPracticeSet(subjectId, chapter, detail);
  // Topic CQs come first so every lesson exposes three distinct 1+2+3+4 examples
  // even on low-memory devices. Renewable sessions still reshuffle the larger pool.
  if (topicCqs.length) {
    const nonCq = [...(subjectId==="ict"?buildIctSeedQuestions(chapter):[]), ...materialQuestions.filter(question=>question.type!=="CQ"), ...base, ...mcqs, ...written, ...retrievalRounds, ...buildAppliedQuestionSet(subjectId, chapter, detail), ...buildExamSprintSet(subjectId, chapter, detail), ...buildMistakeClinicSet(subjectId, chapter, detail), ...diversified].filter((question) => question.type !== "CQ");
    return [...topicCqs, ...materialQuestions.filter(question=>question.type==="CQ"), ...nonCq].slice(0, 72);
  }
  return [...materialQuestions, ...topicCqs, ...base, ...mcqs, ...cqs, ...written, ...retrievalRounds, ...buildAppliedQuestionSet(subjectId, chapter, detail), ...buildExamSprintSet(subjectId, chapter, detail), ...buildMistakeClinicSet(subjectId, chapter, detail), ...diversified].slice(0, 72);
}

function buildMistakeClinicSet(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge): NonNullable<ExamResource["bank"]["questions"]> {
  const isEnglish = subjectId === "english";
  const bn = banglaChapterDetails[chapter.title];
  const name = isEnglish ? chapter.title : chapter.titleBn;
  const terms = bn?.terms ?? detail.terms.split(",").map((term) => term.trim()).filter(Boolean);
  const context = bn?.example ?? detail.context;
  const rule = bn?.core ?? detail.anchor;
  const common = { sourceStatus: "authored-board-pattern" as const };
  const errors = isEnglish ? [
    "misreading the command word", "using evidence without explanation", "changing tense without reason", "writing an unsupported conclusion", "ignoring the required format", "repeating instead of developing an idea",
  ] : [
    "নির্দেশক শব্দ ভুল বোঝা", "ব্যাখ্যা ছাড়া প্রমাণ ব্যবহার", "নিয়ম না লিখে সরাসরি ফল দেওয়া", "প্রমাণহীন উপসংহার", "প্রয়োজনীয় ছক/কাঠামো বাদ দেওয়া", "একই বক্তব্য পুনরাবৃত্তি করা",
  ];
  const mcqs: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 18 }, (_, index) => {
    const term = terms[index % Math.max(terms.length, 1)] ?? name;
    const error = errors[index % errors.length];
    const correct = isEnglish ? `Identify ${error}, apply ${term} correctly and verify the revised answer` : `${error} চিহ্নিত করে ${term} সঠিকভাবে প্রয়োগ ও সংশোধিত উত্তর যাচাই করা`;
    const wrong = isEnglish ? ["Keep the error and add more words", "Delete all evidence", "Copy a memorised conclusion"] : ["ভুল রেখে আরও বাক্য যোগ করা", "সব প্রমাণ বাদ দেওয়া", "মুখস্থ উপসংহার নকল করা"];
    const correctIndex = (index + 1) % 4;
    const options = [...wrong];
    options.splice(correctIndex, 0, correct);
    return {
      type: "MCQ", level: (["Foundation", "Standard", "Challenge"] as const)[index % 3], category: (["Concept", "Application", "Board-style", "College-standard"] as const)[index % 4],
      prompt: isEnglish ? `Mistake clinic ${index + 1}: which correction best fixes ${error} in a ${name} response?` : "",
      promptBn: isEnglish ? undefined : `ভুল সংশোধন ক্লিনিক ${index + 1}: “${name}” উত্তরে ${error}—কোন সংশোধনটি সবচেয়ে যথাযথ?`,
      optionsBn: options, correctIndex,
      answerGuide: isEnglish ? `Diagnose the exact error, restore the chapter rule and check meaning: ${detail.anchor}` : "",
      answerGuideBn: isEnglish ? undefined : `ভুলের ধরন নির্ধারণের পর অধ্যায়ের নিয়ম ও প্রমাণ ফিরিয়ে আনতে হবে। ${rule}`,
      marks: 1, ...common,
    };
  });
  const cqs: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 3 }, (_, index) => ({
    type: "CQ", level: index === 0 ? "Standard" : "Challenge", category: index === 2 ? "College-standard" : "Board-style",
    prompt: isEnglish ? `A learner gives a weak response to this case: ${context} Diagnose four weaknesses and rebuild it from knowledge to evaluation.` : "",
    promptBn: isEnglish ? undefined : `উদ্দীপক: ${context}\nএকজন শিক্ষার্থীর উত্তরে ধারণা, প্রয়োগ, প্রমাণ ও সিদ্ধান্তে ভুল আছে।\nক. ${terms[index % terms.length] ?? name} কী?\nখ. ভুল ধারণাটি কেন ভুল?\nগ. উদ্দীপক ধরে সংশোধিত প্রয়োগ দেখাও।\nঘ. দুর্বল ও সংশোধিত উত্তর তুলনা করে অধিক গ্রহণযোগ্যটি বিচার করো।`,
    answerGuide: isEnglish ? "Locate the error, state the correct rule, revise with evidence, then justify why the new response earns more marks." : "",
    answerGuideBn: isEnglish ? undefined : "ক—সঠিক পরিচয় ১; খ—ভুলের কারণ ২; গ—সংশোধিত তথ্যভিত্তিক প্রয়োগ ৩; ঘ—দুটি উত্তর, প্রমাণ ও নম্বরের মানদণ্ডে মূল্যায়ন ৪।",
    markingPointsBn: isEnglish ? undefined : ["সঠিক ধারণা — ১", "ভুল নির্ণয় — ২", "সংশোধিত প্রয়োগ — ৩", "তুলনা ও মূল্যায়ন — ৪"],
    modelAnswerBn: isEnglish ? undefined : `দুর্বল উত্তরের প্রধান সমস্যা হলো অধ্যায়ের নিয়ম ও উদ্দীপকের তথ্যের যোগ না দেখানো। ${rule} সংশোধিত উত্তরে প্রথমে ${terms.slice(0, 2).join(" ও ")} নির্ভুলভাবে ব্যাখ্যা করতে হবে। এরপর ${context}—এই তথ্য ধরে ধাপে ধাপে প্রয়োগ, প্রমাণ ও ফল দেখাতে হবে। তাই যে উত্তর ধারণা, তথ্য, কার্যপ্রণালি ও সীমাবদ্ধতা একসঙ্গে দেখায়, সেটিই অধিক নম্বর পাওয়ার যোগ্য।`,
    marks: 10, ...common,
  }));
  const written: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 3 }, (_, index) => ({
    type: "Written", level: index === 0 ? "Standard" : "Challenge", category: index === 2 ? "College-standard" : "Application",
    prompt: isEnglish ? `Edit a weak ${name} answer. Present the original error, governing rule, corrected version and examiner comment.` : "",
    promptBn: isEnglish ? undefined : `“${name}” অধ্যায়ের একটি দুর্বল উত্তর সম্পাদনা করো—মূল ভুল, সংশ্লিষ্ট নিয়ম, সংশোধিত অংশ, প্রমাণ এবং পরীক্ষকের মন্তব্য আলাদা শিরোনামে লেখো।`,
    answerGuide: isEnglish ? "Marks: diagnosis 2, rule 2, correction 3, evidence 2, examiner comment 1." : "",
    answerGuideBn: isEnglish ? undefined : "মানবণ্টন: ভুল নির্ণয় ২, সঠিক নিয়ম ২, সংশোধিত প্রয়োগ ৩, প্রমাণ ২, পরীক্ষকের মন্তব্য ১।",
    markingPointsBn: isEnglish ? undefined : ["ভুল নির্ণয় — ২", "সঠিক নিয়ম — ২", "সংশোধিত প্রয়োগ — ৩", "প্রমাণ — ২", "পরীক্ষকের মন্তব্য — ১"],
    modelAnswerBn: isEnglish ? undefined : `মূল ভুল: উত্তরটি ${terms[0] ?? name} উল্লেখ করলেও উদ্দীপকের তথ্যের সঙ্গে সম্পর্ক দেখায়নি। সঠিক নিয়ম: ${rule} সংশোধিত অংশে ${context} ঘটনাটির নির্ণায়ক তথ্য নিয়ে নিয়মটি ধাপে ধাপে প্রয়োগ করতে হবে। পরীক্ষকের মন্তব্য: প্রমাণ ও কার্যপ্রণালি দৃশ্যমান হওয়ায় সংশোধিত উত্তরটি ধারণা, প্রয়োগ ও বিশ্লেষণ—তিন ক্ষেত্রেই বেশি নম্বর পাবে।`,
    marks: 10, ...common,
  }));
  return [...mcqs, ...cqs, ...written];
}

function buildExamSprintSet(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge): NonNullable<ExamResource["bank"]["questions"]> {
  const isEnglish = subjectId === "english";
  const bn = banglaChapterDetails[chapter.title];
  const name = isEnglish ? chapter.title : chapter.titleBn;
  const terms = bn?.terms ?? detail.terms.split(",").map((term) => term.trim()).filter(Boolean);
  const context = bn?.example ?? detail.context;
  const rule = bn?.core ?? detail.anchor;
  const common = { sourceStatus: "authored-board-pattern" as const };
  const levels = ["Foundation", "Standard", "Challenge"] as const;
  const categories = ["Concept", "Application", "Board-style", "College-standard"] as const;
  const mcqs: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 12 }, (_, index) => {
    const term = terms[index % Math.max(terms.length, 1)] ?? name;
    const correct = isEnglish
      ? `Apply ${term} to the decisive fact, then check the conclusion against the chapter rule`
      : `${term} নির্ণায়ক তথ্যে প্রয়োগ করে অধ্যায়ের নিয়ম দিয়ে সিদ্ধান্ত যাচাই করা`;
    const wrong = isEnglish
      ? ["Copy the stimulus without analysis", "Choose the longest option", "Ignore contrary evidence"]
      : ["বিশ্লেষণ ছাড়া উদ্দীপক নকল করা", "সবচেয়ে দীর্ঘ বিকল্প বেছে নেওয়া", "বিপরীত প্রমাণ উপেক্ষা করা"];
    const correctIndex = index % 4;
    const options = [...wrong];
    options.splice(correctIndex, 0, correct);
    return {
      type: "MCQ", level: levels[index % 3], category: categories[index % 4],
      prompt: isEnglish ? `Exam sprint ${index + 1}: which response uses ${term} most accurately in ${name}?` : "",
      promptBn: isEnglish ? undefined : `পরীক্ষা স্প্রিন্ট ${index + 1}: “${name}” অধ্যায়ে ${term}-এর সবচেয়ে নির্ভুল ব্যবহার কোনটি?`,
      optionsBn: options, correctIndex,
      answerGuide: isEnglish ? `The correct response connects the term, decisive evidence and rule: ${detail.anchor}` : "",
      answerGuideBn: isEnglish ? undefined : `সঠিক উত্তরে পরিভাষা, নির্ণায়ক তথ্য ও নিয়ম একসঙ্গে যুক্ত হয়েছে। ${rule}`,
      marks: 1, ...common,
    };
  });
  const cqs: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 6 }, (_, index) => ({
    type: "CQ", level: index < 2 ? "Standard" : "Challenge", category: index % 2 === 0 ? "Board-style" : "College-standard",
    prompt: isEnglish ? `Exam sprint case ${index + 1}: ${context} Build a four-part response using ${terms[index % terms.length] ?? name}, evidence and one limitation.` : "",
    promptBn: isEnglish ? undefined : `পরীক্ষা স্প্রিন্ট উদ্দীপক ${index + 1}: ${context}\nক. ${terms[index % terms.length] ?? name} কী?\nখ. অধ্যায়ের মূল নিয়মের সঙ্গে এর সম্পর্ক বোঝাও।\nগ. উদ্দীপকের নির্ণায়ক তথ্য ধরে সমাধান করো।\nঘ. একটি বিকল্প, প্রমাণ ও সীমাবদ্ধতা বিবেচনায় সিদ্ধান্ত মূল্যায়ন করো।`,
    answerGuide: isEnglish ? "Use the 1+2+3+4 sequence: exact knowledge, connected explanation, evidence-led application and qualified evaluation." : "",
    answerGuideBn: isEnglish ? undefined : "মানবণ্টন ১+২+৩+৪: নির্ভুল জ্ঞান, সম্পর্কসহ ব্যাখ্যা, তথ্যভিত্তিক প্রয়োগ এবং প্রমাণ-সীমাবদ্ধতাসহ মূল্যায়ন।",
    markingPointsBn: isEnglish ? undefined : ["ক · নির্ভুল পরিচয় — ১", "খ · সম্পর্ক ও কারণ — ২", "গ · উদ্দীপকভিত্তিক প্রয়োগ — ৩", "ঘ · বিকল্প, প্রমাণ ও সিদ্ধান্ত — ৪"],
    modelAnswerBn: isEnglish ? undefined : `ক. ${terms[index % terms.length] ?? name} অধ্যায়টির একটি কেন্দ্রীয় ধারণা।\n\nখ. ${rule}\n\nগ. উদ্দীপকের নির্ণায়ক তথ্য হলো—${context}। এই তথ্যকে অধ্যায়ের নিয়মের সঙ্গে মিলিয়ে ধাপে ধাপে প্রয়োগ করলে কারণ ও ফলের সরাসরি সম্পর্ক পাওয়া যায়।\n\nঘ. সিদ্ধান্তটি গ্রহণযোগ্য করতে পক্ষে-বিপক্ষে প্রমাণ, একটি বাস্তব সীমাবদ্ধতা এবং বিকল্প ফল তুলনা করতে হবে। প্রমাণ অধ্যায়ের নিয়মকে সমর্থন করলে সিদ্ধান্তটি শর্তসাপেক্ষে গ্রহণযোগ্য।`,
    marks: 10, ...common,
  }));
  const written: NonNullable<ExamResource["bank"]["questions"]> = Array.from({ length: 6 }, (_, index) => ({
    type: "Written", level: levels[(index + 1) % 3], category: index % 2 === 0 ? "Application" : "College-standard",
    prompt: isEnglish ? `Write an exam-ready response for ${name}: connect ${terms.slice(0, 3).join(", ")}, the case, one error and a justified conclusion.` : "",
    promptBn: isEnglish ? undefined : `“${name}” বিষয়ে পরীক্ষা-উপযোগী উত্তর লেখো—${terms.slice(0, 3).join(", ")}, বাংলাদেশভিত্তিক ঘটনা, একটি প্রচলিত ভুল, সংশোধন এবং যুক্তিসংগত উপসংহারসহ।`,
    answerGuide: isEnglish ? "Award marks for accurate concepts, organisation, relevant evidence, correction, evaluation and language control." : "",
    answerGuideBn: isEnglish ? undefined : "মূল ধারণা ২, সম্পর্ক ও সংগঠন ২, বাস্তব প্রয়োগ ২, ভুল-সংশোধন ২ এবং প্রমাণসমর্থিত উপসংহার ২ নম্বর।",
    markingPointsBn: isEnglish ? undefined : ["মূল ধারণা — ২", "সম্পর্ক ও বিন্যাস — ২", "বাস্তব প্রয়োগ — ২", "ভুল-সংশোধন — ২", "উপসংহার — ২"],
    modelAnswerBn: isEnglish ? undefined : `“${name}” বুঝতে ${terms.slice(0, 3).join(", ")} ধারণাগুলোর সম্পর্ক আগে স্পষ্ট করতে হয়। ${rule} বাংলাদেশের বাস্তবতায় ${context}—এই পরিস্থিতিতে নিয়মটি প্রয়োগ করা যায়। প্রচলিত ভুল হলো নির্ণায়ক তথ্য না দেখিয়ে সরাসরি সিদ্ধান্ত লেখা; সংশোধিত উত্তরে তথ্য, নিয়ম, প্রয়োগ ও ফল ধারাবাহিকভাবে দেখাতে হবে। তাই প্রমাণ ও সীমাবদ্ধতার সঙ্গে সামঞ্জস্যপূর্ণ সিদ্ধান্তই অধিক গ্রহণযোগ্য।`,
    marks: 10, ...common,
  }));
  return [...mcqs, ...cqs, ...written];
}

function additionalWorked(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge): NonNullable<ExamResource["extraWorked"]> {
  const secondBySubject: Record<string, { title: string; problem: string; approach: string[]; checkpoint: string }> = {
    accounting: {
      title: "Error-check challenge",
      problem: `A learner completes a ${chapter.title} problem but the final figures do not agree. Diagnose the work.`,
      approach: ["Recheck classification and opening balances.", "Trace each debit and credit or statement transfer.", "Recalculate totals independently.", "Correct the first confirmed error and retest."],
      checkpoint: "Never force agreement with an unexplained balancing figure.",
    },
    finance: {
      title: "Alternative-choice challenge",
      problem: `Two financial alternatives are proposed in a ${chapter.title} decision. Select the stronger option.`,
      approach: ["State the objective and time horizon.", "Compare cost, return, liquidity and risk.", "Test repayment or cash-flow capacity.", "Recommend one option with a stated limitation."],
      checkpoint: "A recommendation without a risk and cash-flow justification is incomplete.",
    },
    business: {
      title: "Management response challenge",
      problem: `A growing enterprise faces a practical problem involving ${chapter.title}. Design a response.`,
      approach: ["Identify the violated principle or structural weakness.", "Separate symptom from cause.", "Recommend a feasible managerial action.", "State how success would be measured."],
      checkpoint: "Link every action to a named principle and expected result.",
    },
    economics: {
      title: "Schedule and interpretation challenge",
      problem: `A table or graph changes after a new condition affects ${chapter.title}. Calculate or predict the result.`,
      approach: ["State the relevant relationship or formula.", "Show substitution, axes or curve movement.", "Distinguish movement from structural change.", "Interpret the result in economic language."],
      checkpoint: "A number or graph earns full value only when its meaning is explained.",
    },
    civics: {
      title: "Institutional analysis challenge",
      problem: `Two civic principles appear to conflict in a case involving ${chapter.title}. Recommend a lawful balance.`,
      approach: ["Identify the right, duty or institution involved.", "State the governing principle.", "Consider proportionality and accountability.", "Give a reasoned, lawful conclusion."],
      checkpoint: "Separate constitutional reasoning from personal preference.",
    },
    history: {
      title: "Source-evaluation challenge",
      problem: `Two sources offer different accounts of ${chapter.title}. Build a balanced historical conclusion.`,
      approach: ["Identify provenance and purpose.", "Compare specific claims and omissions.", "Place each source in chronology.", "Corroborate before concluding."],
      checkpoint: "Difference does not automatically make one source false; perspective and evidence must be evaluated.",
    },
    english: {
      title: "Revision and improvement challenge",
      problem: `Improve a weak response to a ${chapter.title} task without changing its intended meaning.`,
      approach: ["Identify purpose and audience.", "Correct organisation before sentence-level errors.", "Improve vocabulary and cohesion precisely.", "Proofread grammar, punctuation and format."],
      checkpoint: "A polished answer must remain faithful to the task and original meaning.",
    },
  };
  return [
    {
      title: "Guided application",
      problem: detail.context,
      approach: ["Identify the command word and supplied evidence.", `Recall the core rule: ${detail.anchor}`, "Apply the rule in a visible sequence.", "Conclude using the result or strongest evidence."],
      checkpoint: `Use these terms accurately: ${detail.terms}.`,
    },
    secondBySubject[subjectId],
    {
      title: "Transfer practice",
      problem: `Apply the central method from ${chapter.title} to a new situation: ${detail.context}`,
      approach: ["List the given facts and the exact result required.", `Select and state the governing idea: ${detail.anchor}`, "Complete the reasoning or calculation in visible, ordered steps.", "Change one assumption and explain whether the conclusion still holds."],
      checkpoint: `A transferable answer uses the method accurately and explains the effect of the changed condition. Key terms: ${detail.terms}.`,
    },
    {
      title: "Examiner's model explanation",
      problem: `Build a full-mark explanation for ${chapter.title}, then audit it as an examiner would.`,
      approach: ["Open with the precise concept or rule required by the command word.", "Use the supplied case or evidence instead of writing a memorised paragraph.", "Show every link between evidence, method, result and conclusion.", "Award marks point by point, then rewrite the weakest part."],
      checkpoint: "The finished response must be correct, relevant, visibly reasoned and easy for an examiner to mark.",
    },
  ];
}

type BanglaChapterDetail = { core: string; terms: string[]; example: string };

type ChapterSpecificLesson = {
  title: string; concept: string; steps: string[]; application: string; checkpoint: string;
  workedSnapshot: string; practicePrompt: string; answerCheck: string; recallQuestions: string[];
  commonTrap: string; stretchPrompt: string;
};

function banglaLiteratureLessons(chapterTitle:string): ChapterSpecificLesson[] | null {
  if (chapterTitle === "Aparichita") return [
    {
      title:"লেখক, রচনার প্রেক্ষাপট ও পাঠের দরজা",
      concept:"রবীন্দ্রনাথ ঠাকুরের ‘অপরিচিতা’ শুধু একটি ভেঙে যাওয়া বিয়ের গল্প নয়। পণলোভ, অভিভাবকের আধিপত্য, ব্যক্তিত্বহীনতা এবং শিক্ষিত নারীর আত্মমর্যাদা—এই চারটি স্রোত গল্পটিকে এগিয়ে নেয়।",
      steps:["প্রথমে কথক অনুপমের অবস্থান বোঝো—সে নিজের দুর্বলতাও স্বীকার করছে।","ঘটনার সময়কার বিবাহব্যবস্থা ও পণপ্রথাকে গল্পের সামাজিক পটভূমি হিসেবে ধরো।","কোন চরিত্র কোন মূল্যবোধের প্রতিনিধিত্ব করছে, পাশে লিখে পড়ো।","শেষে দেখো, ‘অপরিচিতা’ পরিচয়টি কীভাবে অনুপমের কাছে চির-অধরা সম্ভাবনায় পরিণত হয়।"],
      application:"কোনো প্রশ্নে সামাজিক প্রথা বনাম ব্যক্তিমর্যাদা এলে শম্ভুনাথ বাবুর সিদ্ধান্ত ও কল্যাণীর স্বাধীন অবস্থান পাঠ-প্রমাণ হিসেবে ব্যবহার করা যায়।",
      checkpoint:"এক বাক্যে বলো—গল্পটির কেন্দ্র কি ব্যর্থ প্রেম, নাকি আত্মমর্যাদার জয়? উত্তরটির পক্ষে দুটি ঘটনা দিতে পারলে এগিয়ে যাও।",
      workedSnapshot:"উত্তরের শুরু হতে পারে: ‘অপরিচিতা’ গল্পে বিবাহভঙ্গ ব্যক্তিগত দুর্ভাগ্য হলেও এর গভীরে রয়েছে পণপ্রথা ও পুরুষতান্ত্রিক নিয়ন্ত্রণের বিরুদ্ধে আত্মমর্যাদার প্রতিবাদ। এরপর শম্ভুনাথের গয়না যাচাইয়ের অপমান প্রত্যাখ্যান এবং কল্যাণীর দেশসেবার সিদ্ধান্ত দেখাবে।",
      practicePrompt:"‘অপরিচিতা’ গল্পের সামাজিক প্রেক্ষাপট কীভাবে চরিত্রগুলোর সিদ্ধান্ত নিয়ন্ত্রণ করেছে—১৫০ শব্দে লেখো।",
      answerCheck:"উত্তরে পণপ্রথা, মামার লোভ, অনুপমের নীরবতা, শম্ভুনাথের মর্যাদাবোধ এবং কল্যাণীর স্বাধীনতা—এগুলোর মধ্যে অন্তত তিনটির কার্যকারণ সম্পর্ক থাকতে হবে।",
      recallQuestions:["গল্পটির কথক কে?","বিবাহভঙ্গের তাৎক্ষণিক ও গভীর কারণ আলাদা করো।","শিরোনামটি কাকে এবং কোন অর্থে নির্দেশ করে?"],
      commonTrap:"শুধু কাহিনি পুনর্লিখলে বিশ্লেষণ হয় না; প্রতিটি ঘটনার সামাজিক বা চরিত্রগত অর্থ বলতে হবে।",
      stretchPrompt:"অনুপম যদি বিয়ের আসরে মামার বিরোধিতা করত, গল্পের মূল বক্তব্য কতটা বদলাত—যুক্তিসহ বিচার করো।"
    },
    {
      title:"ঘটনাক্রম—অনুপমের দেখা থেকে বিবাহভঙ্গ",
      concept:"গল্পের ঘটনাগুলো কারণ–ফল ধরে পড়লে চরিত্র ও বক্তব্য পরিষ্কার হয়: হরিশের প্রস্তাব → মামার দরকষাকষি → বিয়ের আয়োজন → গয়না যাচাই → শম্ভুনাথের প্রত্যাখ্যান → অনুপমের নীরব পরাজয়।",
      steps:["হরিশ কীভাবে সম্বন্ধ আনে, সেটি দিয়ে সূচনা ধরো।","মামার পণ ও সামাজিক মর্যাদা নিয়ে মানসিকতা চিহ্নিত করো।","গয়না যাচাইয়ের দৃশ্যটিকে গল্পের turning point হিসেবে ব্যাখ্যা করো।","বিবাহভঙ্গের পরে অনুপমের অনুতাপকে তার চরিত্রের পরিবর্তনের সূচনা হিসেবে দেখো।"],
      application:"ঘটনাক্রমভিত্তিক CQ-তে প্রতিটি ঘটনাকে পরের ঘটনার কারণ হিসেবে যুক্ত করলে উত্তর তালিকা না হয়ে বিশ্লেষণ হবে।",
      checkpoint:"গয়না যাচাইয়ের ঘটনাটি বাদ দিলে গল্পের সংঘাত কেন দুর্বল হয়ে যায়—নিজের ভাষায় বলো।",
      workedSnapshot:"মামা কন্যাপক্ষকে অবিশ্বাস করে স্যাকরা দিয়ে গয়না পরীক্ষা করান। শম্ভুনাথ এটিকে শুধু সন্দেহ নয়, কন্যা ও নিজের মর্যাদার অপমান হিসেবে দেখেন। তাই গয়না খাঁটি প্রমাণিত হলেও তিনি বিবাহ দেন না—এখানেই লোভের ওপর মর্যাদার জয়।",
      practicePrompt:"বিবাহভঙ্গের জন্য মামা, অনুপম ও তৎকালীন সমাজ—তিন পক্ষের দায় আলাদা করে লেখো।",
      answerCheck:"মামার ক্ষেত্রে লোভ ও কর্তৃত্ব, অনুপমের ক্ষেত্রে সিদ্ধান্তহীনতা, সমাজের ক্ষেত্রে পণনির্ভর বিবাহব্যবস্থা—এই তিনটি মাত্রা স্পষ্ট থাকতে হবে।",
      recallQuestions:["গল্পের turning point কোন ঘটনা?","শম্ভুনাথ কেন খাওয়া শেষ করিয়ে বরযাত্রী বিদায় দেন?","অনুপমের নীরবতা কী প্রকাশ করে?"],
      commonTrap:"শম্ভুনাথকে শুধু রাগী পিতা বললে ভুল হবে; তাঁর সিদ্ধান্তের নৈতিক ভিত্তি ব্যাখ্যা করতে হবে।",
      stretchPrompt:"বিবাহভঙ্গকে ‘অহংকারের সংঘর্ষ’ বলা যায় কি? আত্মমর্যাদা ও অহংকারের পার্থক্য ধরে মূল্যায়ন করো।"
    },
    {
      title:"চরিত্রপাঠ—অনুপম, মামা, শম্ভুনাথ ও কল্যাণী",
      concept:"চার চরিত্র চারটি মানসিক অবস্থান দেখায়: অনুপম—নরম কিন্তু ব্যক্তিত্বহীন; মামা—লোভী ও নিয়ন্ত্রণকারী; শম্ভুনাথ—সংযত ও মর্যাদাবান; কল্যাণী—শিক্ষিত, দৃঢ় ও কর্মমুখী।",
      steps:["চরিত্রের বিশেষণ লেখার আগে তার কাজ বা সংলাপ দাও।","অনুপমের আত্মসমালোচনা ও সিদ্ধান্তহীনতাকে পাশাপাশি রাখো।","মামার অর্থলোভ কীভাবে অনুপমের জীবন নিয়ন্ত্রণ করে দেখাও।","কল্যাণীর শেষ সিদ্ধান্তকে নারীর স্বাধীন সত্তার প্রকাশ হিসেবে বিশ্লেষণ করো।"],
      application:"চরিত্র বিশ্লেষণের উত্তরে ‘বৈশিষ্ট্য → পাঠের ঘটনা → অর্থ’—এই তিন ধাপ অনুসরণ করো।",
      checkpoint:"প্রতিটি চরিত্রের একটি বৈশিষ্ট্য এবং তার পক্ষে একটি ঘটনা না দেখে বলতে পারো কি?",
      workedSnapshot:"কল্যাণী কোমলতার বিপরীতে দুর্বল নয়। বিয়ে ভাঙার পর সে আত্মদয়ায় ডুবে না গিয়ে মেয়েদের শিক্ষা ও দেশসেবায় নিজেকে নিয়োজিত করে; তাই তার দৃঢ়তা কর্মের মাধ্যমে প্রমাণিত।",
      practicePrompt:"‘অনুপম শিক্ষিত, কিন্তু স্বাধীন ব্যক্তিত্বসম্পন্ন নয়’—দুটি পাঠ-প্রমাণ দিয়ে ব্যাখ্যা করো।",
      answerCheck:"শুধু ‘মামার কথা শোনে’ লিখলে অসম্পূর্ণ; বিয়ের সিদ্ধান্ত, গয়না যাচাই ও পরবর্তী সাক্ষাৎ—এসব থেকে তার মানসিক দ্বন্দ্ব দেখাতে হবে।",
      recallQuestions:["মামার প্রধান চরিত্রদোষ কী?","শম্ভুনাথের সংযম কোথায় প্রকাশিত?","কল্যাণী কেন অনুপমের চেয়ে শক্তিশালী চরিত্র?"],
      commonTrap:"চরিত্রের গুণের তালিকা দিও না; আচরণ ও সিদ্ধান্ত দিয়ে প্রতিটি গুণ প্রমাণ করো।",
      stretchPrompt:"অনুপমকে সম্পূর্ণ নেতিবাচক চরিত্র বলা ন্যায্য কি না—তার আত্মসমালোচনা ও পরিবর্তনের সম্ভাবনা ধরে বিচার করো।"
    },
    {
      title:"ভাষা, প্রতীক, কঠিন পঙ্‌ক্তি ও শিরোনামের তাৎপর্য",
      concept:"গল্পের উপমা, আত্মব্যঙ্গ ও প্রতীক চরিত্রের ভেতরকার সত্য প্রকাশ করে। ‘ফল্গুর বালি’, ‘মাকাল ফল’, ‘লোহার মৃদঙ্গ’ কিংবা ‘মাতৃভূমি আছে’—এগুলো সরল শব্দার্থের বাইরে অর্থ বহন করে।",
      steps:["উদ্ধৃতিটি কে, কোন পরিস্থিতিতে বলেছে তা আগে লেখো।","আক্ষরিক অর্থ এক লাইনে দাও।","প্রসঙ্গ অনুযায়ী অন্তর্নিহিত অর্থ ব্যাখ্যা করো।","শেষে উদ্ধৃতিটি চরিত্র বা মূল বক্তব্যকে কীভাবে শক্তিশালী করে বলো।"],
      application:"কঠিন লাইন ব্যাখ্যায় প্রসঙ্গ বাদ দিলে নম্বর কমে; প্রসঙ্গ–অর্থ–তাৎপর্য তিনটি অনুচ্ছেদে সাজাও।",
      checkpoint:"‘তার পরে বুঝিলাম মাতৃভূমি আছে’—এখানে মাতৃভূমি বলতে কী বোঝানো হয়েছে?",
      workedSnapshot:"‘মাতৃভূমি আছে’ উপলব্ধিতে অনুপম বুঝতে পারে, কল্যাণীর জীবনের লক্ষ্য ব্যক্তিগত বিবাহ নয়; দেশের মেয়েদের শিক্ষা ও সেবার বৃহত্তর দায়িত্ব। তাই বাক্যটি কল্যাণীর দেশচেতনা ও স্বাধীন জীবনবোধ প্রকাশ করে।",
      practicePrompt:"‘মামা ফল্গুর বালির মতো সংসার শুষে নিয়েছেন’—উক্তিটির প্রসঙ্গ ও তাৎপর্য লেখো।",
      answerCheck:"ফল্গু নদীর উপরিভাগের বালি ও অন্তঃসলিলা প্রবাহের তুলনাটি মামার সর্বগ্রাসী নিয়ন্ত্রণের সঙ্গে যুক্ত হতে হবে।",
      recallQuestions:["‘মাকাল ফল’ কোন বৈপরীত্য বোঝায়?","‘লোহার মৃদঙ্গ’ কোন দৃশ্যের শব্দচিত্র?","শিরোনাম ‘অপরিচিতা’ কেন বহুমাত্রিক?"],
      commonTrap:"শুধু শব্দের অভিধানগত অর্থ লিখে থেমে যেও না; গল্পে তার কাজ ব্যাখ্যা করো।",
      stretchPrompt:"শিরোনামটি ‘কল্যাণী’ হলে গল্পের ব্যঞ্জনা কী হারাত—বিশ্লেষণ করো।"
    }
  ];
  if (chapterTitle === "Manab-Kalyan") return [
    {
      title:"প্রবন্ধের কেন্দ্রীয় প্রশ্ন—দান নয়, মর্যাদাসম্পন্ন বিকাশ",
      concept:"আবুল ফজল মানব-কল্যাণকে সাময়িক দান বা করুণা হিসেবে দেখেন না। সত্যিকারের কল্যাণ হলো মানুষের আত্মমর্যাদা অক্ষুণ্ণ রেখে তার সামর্থ্য, স্বাধীন চিন্তা ও স্বনির্ভরতার বিকাশের সুযোগ তৈরি করা।",
      steps:["প্রচলিত দান-খয়রাতের ধারণাটি আলাদা করো।","‘মানব-মর্যাদা’ ও ‘মানবিক চেতনা’—দুটি কেন্দ্রীয় ধারণা নির্ধারণ করো।","সহায়তা কীভাবে নির্ভরশীলতা না বাড়িয়ে সক্ষমতা তৈরি করতে পারে, উদাহরণ দাও।","শেষে লেখকের কল্যাণ-ভাবনার সংজ্ঞা নিজের ভাষায় লেখো।"],
      application:"বৃত্তি, দক্ষতা প্রশিক্ষণ বা পুনর্বাসন প্রকল্প বিচার করতে প্রশ্ন করো—এটি কি মানুষকে শুধু সাহায্য নিচ্ছে, নাকি নিজের পায়ে দাঁড়ানোর ক্ষমতা দিচ্ছে?",
      checkpoint:"দান এবং মানব-কল্যাণের মধ্যে দুটি মৌলিক পার্থক্য লিখতে পারলে এগিয়ে যাও।",
      workedSnapshot:"একজন দরিদ্র শিক্ষার্থীকে একবার টাকা দেওয়া তাৎক্ষণিক সহায়তা; কিন্তু নিয়মিত শিক্ষা, দক্ষতা ও ন্যায্য সুযোগ নিশ্চিত করা তাকে আত্মনির্ভর করে। দ্বিতীয়টিই লেখকের অর্থে মর্যাদাসম্পন্ন মানব-কল্যাণ।",
      practicePrompt:"‘মানব-কল্যাণের উৎস মানুষের মর্যাদাবোধ বৃদ্ধি ও মানবিক চেতনার বিকাশে’—ব্যাখ্যা করো।",
      answerCheck:"উত্তরে দয়া/করুণার সীমা, মানব-মর্যাদা, সক্ষমতার বিকাশ এবং স্বনির্ভরতার সম্পর্ক থাকতে হবে।",
      recallQuestions:["মানব-কল্যাণকে লেখক কেন মামুলি অর্থে নেননি?","Human dignity কী?","সহায়তা কখন অপমান হয়ে ওঠে?"],
      commonTrap:"দানকে পুরোপুরি অস্বীকার করা লেখকের বক্তব্য নয়; জরুরি সহায়তা ও দীর্ঘমেয়াদি কল্যাণের স্তর আলাদা করতে হবে।",
      stretchPrompt:"বর্তমান relief কার্যক্রমকে লেখকের মানব-কল্যাণ ধারণায় মূল্যায়নের তিনটি মানদণ্ড তৈরি করো।"
    },
    {
      title:"সমাজ ও রাষ্ট্রের দায়িত্ব—সোপান তৈরি করা",
      concept:"মানুষের ভেতরের সম্ভাবনা বিকাশের পরিবেশ তৈরি করা সমাজ ও রাষ্ট্রের দায়িত্ব। শিক্ষা, স্বাস্থ্য, ন্যায়, নিরাপত্তা ও কাজের সুযোগ সেই ‘সোপান’—যার সাহায্যে মানুষ নিজ শক্তিতে এগোয়।",
      steps:["রাষ্ট্রকে কেবল প্রশাসন নয়, যৌথ জীবন ও চেতনার প্রতিষ্ঠান হিসেবে বোঝো।","মানুষের অধিকার ও সুযোগকে কল্যাণের পূর্বশর্ত হিসেবে ধরো।","নীতির ফল ব্যক্তির পাশাপাশি সমাজে কী প্রভাব ফেলে, তা বিশ্লেষণ করো।","সহায়তার সঙ্গে জবাবদিহি ও মর্যাদা যুক্ত করো।"],
      application:"একটি সরকারি দক্ষতা উন্নয়ন প্রকল্পে প্রবেশাধিকার, প্রশিক্ষণের মান, কর্মসংযোগ ও অংশগ্রহণকারীর মর্যাদা—এই চারটি সূচকে কল্যাণ বিচার করা যায়।",
      checkpoint:"‘সোপান রচনা’ কথাটির আক্ষরিক ও প্রবন্ধগত অর্থ আলাদা করে বলো।",
      workedSnapshot:"রাষ্ট্র মানুষের হয়ে তার জীবন যাপন করবে না; বরং শিক্ষা, স্বাস্থ্য, আইনগত সুরক্ষা ও কাজের সমান সুযোগ তৈরি করবে। এই সুযোগগুলোই বিকাশের সোপান, যার ওপর দাঁড়িয়ে মানুষ নিজের সামর্থ্য প্রকাশ করে।",
      practicePrompt:"‘রাষ্ট্র জাতির যৌথ জীবন আর যৌথ চেতনার প্রতীক’—প্রবন্ধের আলোকে ব্যাখ্যা করো।",
      answerCheck:"জাতীয় চেতনা, সামাজিক উন্নয়ন, অধিকার, সামগ্রিক বিকাশ এবং আত্মনির্ভরতার ভূমিকা যুক্ত থাকতে হবে।",
      recallQuestions:["রাষ্ট্রের কল্যাণমূলক দায়িত্ব কী?","সুযোগ সৃষ্টি ও দান কীভাবে আলাদা?","কল্যাণ-কর্মের social consequence বলতে কী বোঝায়?"],
      commonTrap:"রাষ্ট্রের কাজের তালিকা লিখে থেমে যেও না; প্রতিটি কাজ কীভাবে মর্যাদা ও সক্ষমতা বাড়ায় তা দেখাও।",
      stretchPrompt:"কোনো কল্যাণনীতি ভালো উদ্দেশ্য নিয়েও ক্ষতিকর সামাজিক ফল তৈরি করতে পারে—একটি উদাহরণ দিয়ে বিচার করো।"
    },
    {
      title:"কঠিন লাইন সহজ ব্যাখ্যা—প্রসঙ্গ, অর্থ, তাৎপর্য",
      concept:"প্রবন্ধের উদ্ধৃতি ব্যাখ্যা করতে তিন ধাপ দরকার: লেখকের তর্কে বাক্যটির স্থান, সহজ ভাষায় অর্থ, এবং মানব-মর্যাদা/সামাজিক দায়িত্বের সঙ্গে তার যোগ।",
      steps:["উদ্ধৃতির আগের ও পরের বক্তব্য থেকে প্রসঙ্গ ধরো।","মূল শব্দের সহজ অর্থ দাও।","লেখক কোন ভুল ধারণা ভাঙছেন তা চিহ্নিত করো।","একটি বাস্তব উদাহরণে বক্তব্যটির সত্যতা দেখাও।"],
      application:"‘ওপরের হাত’, ‘নিচের হাত’, ‘স্বয়ম্ভূ নয়’ বা ‘সদিচ্ছা যথেষ্ট নয়’—প্রতিটি বাক্য দাতা-গ্রহীতার অসম সম্পর্ক ও কার্যকর ব্যবস্থার প্রয়োজন বোঝায়।",
      checkpoint:"‘শুধু সদিচ্ছা দ্বারা মানব-কল্যাণ সাধিত হয় না’—একটি কারণ ও একটি উদাহরণ দাও।",
      workedSnapshot:"সদিচ্ছা কল্যাণের সূচনা, কিন্তু পরিকল্পনা, জ্ঞান ও কার্যকর পদ্ধতি ছাড়া তা ভুল ফল দিতে পারে। যেমন প্রয়োজন না বুঝে প্রশিক্ষণ দিলে অর্থ ব্যয় হলেও কর্মসংস্থান তৈরি নাও হতে পারে। তাই সদিচ্ছাকে বৈজ্ঞানিক ও যুক্তিনির্ভর কর্মে রূপ দিতে হয়।",
      practicePrompt:"‘মানব-কল্যাণ স্বয়ম্ভূ, বিচ্ছিন্ন, সম্পর্করহিত হতে পারে না’—ব্যাখ্যা করো।",
      answerCheck:"মানুষ–সমাজের পারস্পরিক সম্পর্ক, সামগ্রিক প্রভাব এবং বিচ্ছিন্ন দানের সীমাবদ্ধতা থাকতে হবে।",
      recallQuestions:["‘ওপরের হাত’ কোন মানসিকতা প্রকাশ করে?","কল্যাণ কেন সামাজিক সম্পর্কের বাইরে নয়?","বিজ্ঞান ও মুক্তবুদ্ধির ভূমিকা কী?"],
      commonTrap:"উদ্ধৃতিটি পুনরাবৃত্তি করা ব্যাখ্যা নয়; অন্তর্নিহিত যুক্তি নিজের ভাষায় খুলে বলতে হবে।",
      stretchPrompt:"‘ভালো উদ্দেশ্য’ ও ‘ভালো ফল’ সবসময় এক নয়—প্রবন্ধের আলোকে মূল্যায়ন করো।"
    },
    {
      title:"পূর্ণাঙ্গ CQ ও পরীক্ষার উত্তর নির্মাণ",
      concept:"এই প্রবন্ধের CQ-তে জ্ঞান অংশ সংক্ষিপ্ত, অনুধাবনে ধারণার সম্পর্ক, প্রয়োগে উদ্দীপকের সুনির্দিষ্ট তথ্য এবং উচ্চতর দক্ষতায় মানদণ্ডভিত্তিক বিচার থাকতে হবে।",
      steps:["ক-তে পাঠ্য পরিভাষার নির্ভুল পরিচয় দাও।","খ-তে কেন/কীভাবে প্রশ্নের কারণগত ব্যাখ্যা দাও।","গ-তে উদ্দীপকের অন্তত দুটি তথ্যের সঙ্গে প্রবন্ধের ধারণা মিলাও।","ঘ-তে বিকল্প, ফল ও সীমাবদ্ধতা বিচার করে সিদ্ধান্ত দাও।"],
      application:"উদ্দীপকে কোনো প্রতিষ্ঠান এককালীন সহায়তা দেয়, কিন্তু শিক্ষা/কাজের সুযোগ তৈরি করে না—এটি দিয়ে দান বনাম মর্যাদাসম্পন্ন কল্যাণ বিশ্লেষণ করা যায়।",
      checkpoint:"গ ও ঘ-এর পার্থক্য একটি বাক্যে বলো: গ-তে প্রয়োগ, ঘ-তে মানদণ্ড ধরে বিচার ও সিদ্ধান্ত।",
      workedSnapshot:"ঘ-এর শুরু: ‘উদ্দীপকের উদ্যোগটি সাময়িক উপকার করলেও আবুল ফজলের মানব-কল্যাণের পূর্ণ মানদণ্ড পূরণ করে না।’ এরপর মর্যাদা, সক্ষমতা, স্থায়িত্ব ও সামাজিক ফল—চার মানদণ্ডে বিচার করে শর্তযুক্ত সিদ্ধান্ত দাও।",
      practicePrompt:"একটি প্রতিষ্ঠান দরিদ্র মানুষকে খাদ্য দেয়, কিন্তু দক্ষতা ও কর্মসংস্থানের সুযোগ দেয় না। উদ্যোগটি মানব-কল্যাণের পূর্ণ রূপ কি না ১+২+৩+৪ মানবণ্টনে বিচার করো।",
      answerCheck:"উত্তরে পাঠের ধারণা, উদ্দীপকের তথ্য, দান ও সক্ষমতার তুলনা, মানব-মর্যাদা এবং যুক্তিসংগত সিদ্ধান্ত দৃশ্যমান থাকতে হবে।",
      recallQuestions:["গ অংশে কতটি stimulus fact ব্যবহার করবে?","ঘ অংশে কোন চার মানদণ্ডে বিচার করা যায়?","কোন বাক্য দিয়ে শর্তযুক্ত উপসংহার লেখা যায়?"],
      commonTrap:"ঘ অংশে শুধু ‘সম্পূর্ণ একমত’ লিখে থেমে গেলে উচ্চতর দক্ষতা প্রকাশ পায় না।",
      stretchPrompt:"তাৎক্ষণিক দুর্যোগে দান কি মানব-কল্যাণ নয়? সময়, প্রয়োজন ও দীর্ঘমেয়াদি পুনর্বাসন ধরে ভারসাম্যপূর্ণ উত্তর লেখো।"
    }
  ];
  return null;
}

function prioritySubjectLessons(subjectId:string, chapterTitle:string): ChapterSpecificLesson[] | null {
  if (subjectId === "accounting" && chapterTitle === "Introduction to Accounting") return [
    {
      title:"হিসাববিজ্ঞান কী এবং কার সিদ্ধান্তে লাগে",
      concept:"হিসাববিজ্ঞান শুধু খাতায় অঙ্ক লেখা নয়। একটি প্রতিষ্ঠানের আর্থিক ঘটনা শনাক্ত, অর্থে পরিমাপ, প্রমাণসহ লিপিবদ্ধ, শ্রেণিবদ্ধ ও সংক্ষেপ করে মালিক, ব্যবস্থাপক, বিনিয়োগকারী, ঋণদাতা এবং সরকারকে সিদ্ধান্ত নেওয়ার উপযোগী তথ্য দেওয়াই এর কাজ।",
      steps:["ঘটনাটি প্রতিষ্ঠানের আর্থিক অবস্থায় পরিবর্তন আনে কি না দেখো।","টাকায় নির্ভরযোগ্যভাবে পরিমাপ করা যায় কি না যাচাই করো।","উৎস দলিল থেকে সংশ্লিষ্ট সম্পদ, দায়, মূলধন, আয় বা ব্যয় শনাক্ত করো।","শেষে বলো—তথ্যটি কোন ব্যবহারকারীর কী সিদ্ধান্তে লাগবে।"],
      application:"একজন ব্যাংক কর্মকর্তা ঋণ দেওয়ার আগে প্রতিষ্ঠানের আয়, দায় ও নগদপ্রবাহ দেখবেন; মালিক একই তথ্য দিয়ে লাভ, ব্যয় ও ভবিষ্যৎ বিনিয়োগের সিদ্ধান্ত নেবেন।",
      checkpoint:"ব্যবসায়ের সুনাম গুরুত্বপূর্ণ হলেও কেন সবসময় হিসাবের লেনদেন নয়—অর্থে নির্ভরযোগ্য পরিমাপের শর্ত দিয়ে বোঝাও।",
      workedSnapshot:"ঘটনা: দক্ষ ব্যবস্থাপক নিয়োগ—গুরুত্বপূর্ণ, কিন্তু নিয়োগের মুহূর্তে নির্দিষ্ট আর্থিক পরিবর্তন না হলে লেনদেন নয়। ঘটনা: নগদ ৫০,০০০ টাকা দিয়ে আসবাব কেনা—নগদ কমে এবং আসবাব বাড়ে; এটি পরিমাপযোগ্য লেনদেন।",
      practicePrompt:"নতুন পণ্যের অর্ডার পাওয়া, অগ্রিম টাকা পাওয়া, কর্মচারী নিয়োগ এবং বাকিতে পণ্য কেনা—কোনগুলো লেনদেন তা কারণসহ শ্রেণিবিন্যাস করো।",
      answerCheck:"প্রতিটি সিদ্ধান্তে দুটি পরীক্ষা থাকবে: আর্থিক অবস্থার পরিবর্তন হয়েছে কি না এবং নির্ভরযোগ্য অর্থমূল্য আছে কি না।",
      recallQuestions:["হিসাববিজ্ঞানের পাঁচটি ধারাবাহিক কাজ কী?","অভ্যন্তরীণ ও বাহ্যিক ব্যবহারকারীর একটি করে উদাহরণ দাও।","ঘটনা ও লেনদেনের মূল পার্থক্য কী?"],
      commonTrap:"সব ব্যবসায়িক ঘটনাকে লেনদেন ধরা এবং ‘গুরুত্বপূর্ণ’ হওয়াকেই আর্থিক পরিমাপ মনে করা।",
      stretchPrompt:"কর্মীদের দক্ষতা প্রতিষ্ঠানের সম্পদ কি না—হিসাববিজ্ঞানের স্বীকৃতি ও ব্যবস্থাপনার মূল্য, দুই দিক আলাদা করে বিচার করো।"
    },
    {
      title:"হিসাব সমীকরণ—অঙ্ক নয়, ঘটনার মানচিত্র",
      concept:"প্রতিটি লেনদেনের পরে সম্পদ = দায় + মালিকানা স্বত্ব সমতা বজায় থাকে। আয় ও অতিরিক্ত বিনিয়োগ মালিকানা স্বত্ব বাড়ায়; ব্যয় ও উত্তোলন তা কমায়। তাই সমীকরণ লেনদেনের দ্বৈত প্রভাব দেখার সবচেয়ে সহজ মানচিত্র।",
      steps:["প্রথমে প্রভাবিত দুটি বা ততোধিক উপাদান লেখো।","প্রতিটি উপাদান বাড়ছে না কমছে, তীরচিহ্ন দাও।","অঙ্ক বসিয়ে বাম ও ডান পাশের নতুন মোট বের করো।","সমতা না মিললে শ্রেণি, চিহ্ন বা বাদ পড়া প্রভাব আবার যাচাই করো।"],
      application:"মালিক ১,০০,০০০ টাকা বিনিয়োগ করলেন; ৩০,০০০ টাকার আসবাব নগদে কিনলেন; ২০,০০০ টাকার সরঞ্জাম বাকিতে কিনলেন; ৮,০০০ টাকা সেবা আয় পেলেন; ৩,০০০ টাকা ভাড়া দিলেন।",
      checkpoint:"নগদে সম্পদ কেনায় মোট সম্পদ কেন অপরিবর্তিত থাকতে পারে—নগদ ও অন্য সম্পদের বিপরীত পরিবর্তন দিয়ে বোঝাও।",
      workedSnapshot:"শেষ অবস্থা: নগদ = ১,০০,০০০−৩০,০০০+৮,০০০−৩,০০০ = ৭৫,০০০; আসবাব ৩০,০০০; সরঞ্জাম ২০,০০০। মোট সম্পদ ১,২৫,০০০। দায় ২০,০০০; মালিকানা স্বত্ব = ১,০০,০০০+৮,০০০−৩,০০০ = ১,০৫,০০০। দুই পাশই ১,২৫,০০০।",
      practicePrompt:"উপরের উদাহরণে মালিক ব্যক্তিগত প্রয়োজনে আরও ৫,০০০ টাকা তুললে সংশোধিত সমীকরণ তৈরি করো।",
      answerCheck:"নগদ ৫,০০০ কমবে এবং উত্তোলনের কারণে মালিকানা স্বত্ব ৫,০০০ কমবে; উভয় পাশ ১,২০,০০০ হবে।",
      recallQuestions:["আয় কোন উপাদান বাড়ায়?","উত্তোলন কি ব্যবসায়ের ব্যয়?","বাকিতে সম্পদ কেনার দ্বৈত প্রভাব কী?"],
      commonTrap:"উত্তোলনকে ব্যয় ধরা, বাকিতে ক্রয়ে নগদ কমানো এবং নগদে এক সম্পদ কিনলে মোট সম্পদ বাড়ানো।",
      stretchPrompt:"একটি লেনদেনে সম্পদের মোট পরিমাণ না বদলিয়েও সম্পদের গঠন কীভাবে বদলায়—দুটি ভিন্ন উদাহরণ দাও।"
    },
    {
      title:"হিসাব চক্র ও উৎস দলিল—তথ্য কোথা থেকে কোথায় যায়",
      concept:"নির্ভরযোগ্য হিসাব শুরু হয় প্রমাণ থেকে। চালান, রসিদ, ভাউচার, চেকের কাউন্টারফয়েল বা ব্যাংক বিবরণী থেকে লেনদেন যাচাই করে জাবেদা, খতিয়ান, রেওয়ামিল, সমন্বয় এবং আর্থিক বিবরণীতে তথ্য প্রবাহিত হয়।",
      steps:["উৎস দলিলের তারিখ, পক্ষ, বিবরণ ও অঙ্ক মিলাও।","লেনদেন বিশ্লেষণ করে জাবেদায় প্রথম নথিভুক্ত করো।","খতিয়ানে হিসাবভিত্তিক পোস্টিং ও জের নির্ণয় করো।","রেওয়ামিল–সমন্বয়–বিবরণী পর্যন্ত audit trail অক্ষুণ্ণ রাখো।"],
      application:"একটি বিক্রয় চালান থেকে বিক্রয় ও প্রাপ্য হিসাব শনাক্ত করা যায়; পরে গ্রাহকের রসিদ দিয়ে প্রাপ্য কমা ও নগদ বাড়া যাচাই করা যায়।",
      checkpoint:"জাবেদা ও খতিয়ান একই তথ্য রাখলেও তাদের উদ্দেশ্য কেন আলাদা?",
      workedSnapshot:"বিক্রয় চালান নং ১২৫, ১০ জুন, রিমা ট্রেডার্সকে বাকিতে ১২,০০০ টাকা পণ্য বিক্রয় → প্রাপ্য হিসাব Dr ১২,০০০; বিক্রয় হিসাব Cr ১২,০০০ → দুই হিসাবের খতিয়ানে পোস্টিং → রেওয়ামিলে পৃথক জের।",
      practicePrompt:"নগদ ক্রয়ের একটি রসিদ থেকে আর্থিক বিবরণী পর্যন্ত তথ্যপ্রবাহ ছয় ধাপে লেখো।",
      answerCheck:"উৎস দলিল, বিশ্লেষণ, জাবেদা, খতিয়ান, রেওয়ামিল এবং বিবরণী—ধাপ ও উদ্দেশ্য দুটোই থাকতে হবে।",
      recallQuestions:["উৎস দলিল কেন প্রয়োজন?","জাবেদা কোন ক্রমে তথ্য রাখে?","খতিয়ান কোন ভিত্তিতে তথ্য একত্র করে?"],
      commonTrap:"দলিল না মিলিয়ে দাখিলা দেওয়া অথবা জাবেদা ও খতিয়ানকে একই বই মনে করা।",
      stretchPrompt:"ডিজিটাল invoice ও mobile banking record কীভাবে audit trail শক্তিশালী করে, আবার কোন নতুন ঝুঁকি তৈরি করে?"
    },
    {
      title:"নৈতিকতা, নির্ভরযোগ্যতা ও পূর্ণ ১+২+৩+৪ উত্তর",
      concept:"হিসাবের তথ্য সিদ্ধান্ত বদলায়। তাই সততা, নিরপেক্ষতা, প্রমাণ, সামঞ্জস্য এবং পূর্ণ প্রকাশ না থাকলে অঙ্ক মিললেও প্রতিবেদন বিভ্রান্তিকর হতে পারে। পরীক্ষায় নীতি শুধু লিখবে না—উদ্দীপকের কাজ, তথ্যের প্রভাব এবং ব্যবহারকারীর সিদ্ধান্তের সঙ্গে মিলাবে।",
      steps:["ক-তে নির্ভুল সংজ্ঞা বা পরিচয় দাও।","খ-তে ধারণার কারণ ও গুরুত্ব বোঝাও।","গ-তে উদ্দীপকের নির্দিষ্ট তথ্য সমীকরণ/শ্রেণিতে প্রয়োগ করো।","ঘ-তে নির্ভরযোগ্যতা, নৈতিকতা, ব্যবহারকারীর প্রভাব ও সীমাবদ্ধতা বিচার করে সিদ্ধান্ত দাও।"],
      application:"একটি প্রতিষ্ঠান ঋণ পাওয়ার জন্য বকেয়া ব্যয় গোপন করে লাভ বেশি দেখিয়েছে—এতে দায় ও ব্যয় কম, লাভ ও মালিকানা স্বত্ব বেশি দেখাবে এবং ব্যাংকের সিদ্ধান্ত বিভ্রান্ত হতে পারে।",
      checkpoint:"রেওয়ামিল মিললেও কেন প্রতিবেদন নৈতিক ও নির্ভুল নাও হতে পারে?",
      workedSnapshot:"ঘ-এর সিদ্ধান্ত: বকেয়া ব্যয় বাদ দেওয়ায় হিসাব সমীকরণের উভয় পাশে সংশ্লিষ্ট প্রভাব না-ও ধরা পড়তে পারে এবং রেওয়ামিল তবু মিলতে পারে; কিন্তু দায় গোপন ও লাভ অতিরঞ্জিত হওয়ায় তথ্য পূর্ণ প্রকাশ ও নির্ভরযোগ্যতার শর্ত পূরণ করে না।",
      practicePrompt:"মালিক ব্যক্তিগত ব্যয়কে ব্যবসায়ের ব্যয় হিসেবে দেখিয়েছেন—ব্যবসায় সত্তা ধারণা, লাভ ও সিদ্ধান্তের ওপর প্রভাব ধরে ১+২+৩+৪ উত্তর লেখো।",
      answerCheck:"চার অংশ আলাদা থাকবে; গ-তে ঘটনার হিসাবগত প্রভাব এবং ঘ-তে নীতি, stakeholder impact ও যুক্তিসংগত সিদ্ধান্ত থাকতে হবে।",
      recallQuestions:["ব্যবসায় সত্তা ধারণা কী?","পূর্ণ প্রকাশ কেন দরকার?","অঙ্ক মেলা ও তথ্য নির্ভরযোগ্য হওয়া কি একই বিষয়?"],
      commonTrap:"নৈতিকতা অংশে শুধু ‘এটি অনৈতিক’ লিখে থেমে যাওয়া; কোন হিসাব ও সিদ্ধান্ত কীভাবে বদলেছে তা না দেখানো।",
      stretchPrompt:"ব্যবস্থাপক bonus পাওয়ার জন্য আয় আগে স্বীকৃতি দিলে কোন ব্যবহারকারীরা কীভাবে ক্ষতিগ্রস্ত হতে পারেন—তুলনা করো।"
    }
  ];
  if (subjectId === "civics" && chapterTitle === "Civics reference chapter 1") return [
    {
      title:"পৌরনীতির পরিচয়—নাগরিক জীবনকে বোঝার বিদ্যা",
      concept:"পৌরনীতি নাগরিকের অধিকার, কর্তব্য, স্বাধীনতা, রাষ্ট্র, সরকার, প্রতিষ্ঠান এবং জনজীবনের পারস্পরিক সম্পর্ক আলোচনা করে। আধুনিক অর্থে এটি শুধু নগররাষ্ট্র বা সরকারের বর্ণনা নয়; সচেতন নাগরিকত্ব ও উত্তম জনজীবনের পথও বিশ্লেষণ করে।",
      steps:["নাগরিককে শুধু ভোটার নয়—অধিকার ও দায়িত্বসম্পন্ন সদস্য হিসেবে ধরো।","রাষ্ট্র, সরকার ও নাগরিক—তিনটির ভূমিকা আলাদা করো।","প্রতিষ্ঠান কীভাবে নিয়ম ও সেবা বাস্তবায়ন করে দেখো।","শেষে ব্যক্তির আচরণ জনস্বার্থ ও সুশাসনে কী প্রভাব ফেলে ব্যাখ্যা করো।"],
      application:"একজন নাগরিক জন্মনিবন্ধন, ভোটার তালিকা, কর, তথ্য অধিকার ও স্থানীয় সেবার মাধ্যমে রাষ্ট্র ও প্রতিষ্ঠানের সঙ্গে যুক্ত হন।",
      checkpoint:"পৌরনীতি কেন শুধু সরকারব্যবস্থার আলোচনা নয়—নাগরিকের ভূমিকা দিয়ে বোঝাও।",
      workedSnapshot:"রাস্তার বর্জ্য ব্যবস্থাপনায় সিটি করপোরেশনের সেবা, নাগরিকের নিয়ম মানা, অভিযোগ জানানোর ব্যবস্থা এবং জবাবদিহি—চারটি দিক একসঙ্গে দেখলেই পৌরনীতির বাস্তব ক্ষেত্র বোঝা যায়।",
      practicePrompt:"কলেজের আশপাশে যানজট সমস্যাকে নাগরিক, স্থানীয় প্রশাসন ও আইনের ভূমিকা দিয়ে বিশ্লেষণ করো।",
      answerCheck:"সমস্যার বর্ণনা নয়; অধিকার, কর্তব্য, প্রতিষ্ঠান, নিয়ম এবং যৌথ সমাধানের স্পষ্ট যোগ থাকতে হবে।",
      recallQuestions:["পৌরনীতির প্রধান আলোচ্য বিষয় কী?","নাগরিক ও জনসাধারণ কি একই ধারণা?","সচেতন নাগরিকত্বের দুটি লক্ষণ দাও।"],
      commonTrap:"পৌরনীতিকে শুধু রাষ্ট্রবিজ্ঞান বা শুধু নাগরিকের কর্তব্যের তালিকা হিসেবে লেখা।",
      stretchPrompt:"ডিজিটাল সেবা বাড়লে নাগরিকত্বের সুযোগ ও দায়িত্ব কীভাবে বদলায়—দুই দিক বিচার করো।"
    },
    {
      title:"রাষ্ট্র, সরকার, সমাজ ও নাগরিক—পার্থক্য এবং যোগসূত্র",
      concept:"রাষ্ট্র হলো নির্দিষ্ট ভূখণ্ড, জনসমষ্টি, সরকার ও সার্বভৌমত্বসম্পন্ন স্থায়ী রাজনৈতিক সংগঠন। সরকার রাষ্ট্রের ইচ্ছা বাস্তবায়নের পরিবর্তনশীল যন্ত্র; সমাজ আরও বিস্তৃত মানবসম্পর্কের ক্ষেত্র; আর নাগরিক রাষ্ট্রের পূর্ণ সদস্য।",
      steps:["প্রতিটি ধারণার উপাদান বা পরিচয় লেখো।","স্থায়ী ও পরিবর্তনশীল বৈশিষ্ট্য আলাদা করো।","ক্ষমতা, সদস্যতা ও উদ্দেশ্যের ভিত্তিতে তুলনা করো।","একটি বাস্তব ঘটনার মধ্যে চারটির ভূমিকা দেখাও।"],
      application:"সরকার পরিবর্তিত হলেও বাংলাদেশের রাষ্ট্র, ভূখণ্ড ও নাগরিকত্ব বিলীন হয় না; পরিবার, বাজার ও সাংস্কৃতিক সংগঠন সমাজের অংশ হলেও সবগুলো সরকার নয়।",
      checkpoint:"রাষ্ট্র ও সরকারকে একই বলা কেন ভুল—স্থায়িত্ব ও কাজের পার্থক্য দাও।",
      workedSnapshot:"তুলনা: রাষ্ট্র—স্থায়ী ও সার্বভৌম; সরকার—পরিবর্তনশীল ও রাষ্ট্র পরিচালনার যন্ত্র; সমাজ—রাজনৈতিক সম্পর্কের চেয়ে বিস্তৃত; নাগরিক—রাষ্ট্রের অধিকার-কর্তব্যসম্পন্ন সদস্য।",
      practicePrompt:"একটি জাতীয় নির্বাচনের উদাহরণে রাষ্ট্র, সরকার, সমাজ ও নাগরিকের পৃথক ভূমিকা চার কলামের ছকে দেখাও।",
      answerCheck:"প্রতিটি কলামে পরিচয়, কাজ এবং উদাহরণ থাকবে; সরকারকে রাষ্ট্র বা সমাজকে জনসংখ্যা বলে থেমে যেও না।",
      recallQuestions:["রাষ্ট্রের চার উপাদান কী?","সরকার কেন পরিবর্তনশীল?","নাগরিকত্বের সঙ্গে অধিকার ও কর্তব্য কীভাবে যুক্ত?"],
      commonTrap:"দেশ, রাষ্ট্র, সরকার ও সমাজ—চারটি শব্দকে সমার্থক ধরে ব্যবহার করা।",
      stretchPrompt:"রাষ্ট্রহীন জাতি বা বহুজাতিক রাষ্ট্রের ধারণা এই পার্থক্যগুলো বুঝতে কীভাবে সাহায্য করে?"
    },
    {
      title:"পৌরনীতির পরিধি ও অন্যান্য সামাজিক বিজ্ঞানের সঙ্গে সম্পর্ক",
      concept:"পৌরনীতি ইতিহাস থেকে প্রতিষ্ঠানের বিকাশ, অর্থনীতি থেকে সম্পদ ও নীতি, সমাজবিজ্ঞান থেকে গোষ্ঠী ও আচরণ, নীতিশাস্ত্র থেকে ন্যায়–অন্যায় এবং ভূগোল থেকে স্থান–সম্পদের প্রভাব নেয়। সম্পর্ক আছে, কিন্তু প্রতিটি শাস্ত্রের কেন্দ্রীয় প্রশ্ন আলাদা।",
      steps:["ঘটনার নাগরিক বা রাজনৈতিক প্রশ্নটি নির্ধারণ করো।","কোন সামাজিক বিজ্ঞান অতিরিক্ত ব্যাখ্যা দিচ্ছে শনাক্ত করো।","দুটি বিষয়ের মিল ও স্বতন্ত্র focus আলাদা লেখো।","শেষে সমন্বিত বিশ্লেষণ কেন ভালো সিদ্ধান্ত দেয় বলো।"],
      application:"বেকারত্ব অর্থনৈতিক সমস্যা হলেও তা নাগরিক অংশগ্রহণ, অপরাধ, জননীতি ও সরকারের জবাবদিহিতে প্রভাব ফেললে পৌরনীতির আলোচ্যও হয়।",
      checkpoint:"একটি সমস্যা একাধিক সামাজিক বিজ্ঞানের বিষয় হতে পারে—কিন্তু তাদের প্রশ্ন কেন এক নয়?",
      workedSnapshot:"দুর্নীতি: অর্থনীতি সম্পদের অপচয় দেখে; সমাজবিজ্ঞান সামাজিক আচরণ ও নেটওয়ার্ক দেখে; পৌরনীতি প্রতিষ্ঠান, ক্ষমতা, আইন, জবাবদিহি ও নাগরিক অধিকার দেখে।",
      practicePrompt:"জলবায়ুজনিত স্থানান্তরকে ভূগোল, অর্থনীতি ও পৌরনীতির দৃষ্টিতে তিনভাবে বিশ্লেষণ করো।",
      answerCheck:"তিনটি শাস্ত্রের আলাদা focus এবং শেষে তাদের পারস্পরিক যোগ—দুটিই থাকতে হবে।",
      recallQuestions:["পৌরনীতি ও ইতিহাসের সম্পর্ক কী?","নীতিশাস্ত্র কোন মানদণ্ড যোগ করে?","অর্থনৈতিক সমস্যা কখন পৌরনৈতিক সমস্যা হয়?"],
      commonTrap:"শুধু ‘সব বিষয় পরস্পর সম্পর্কিত’ লেখা; সম্পর্কের নির্দিষ্ট কারণ ও পার্থক্য না দেওয়া।",
      stretchPrompt:"সামাজিক মাধ্যমের গুজবকে মনোবিজ্ঞান, সমাজবিজ্ঞান ও পৌরনীতির আলাদা প্রশ্নে ভেঙে দেখাও।"
    },
    {
      title:"বাস্তব নাগরিক সমস্যা থেকে ১+২+৩+৪ উত্তর",
      concept:"পৌরনীতির ভালো CQ উত্তর মুখস্থ অনুচ্ছেদ নয়। উদ্দীপকের ব্যক্তি, প্রতিষ্ঠান, অধিকার, নিয়ম ও ফল শনাক্ত করে পাঠের ধারণা প্রয়োগ করতে হয়; উচ্চতর অংশে বিকল্প, সীমা ও বাস্তবায়নযোগ্য সিদ্ধান্ত দিতে হয়।",
      steps:["ক-তে চাওয়া ধারণার নির্ভুল পরিচয়।","খ-তে কেন/কীভাবে সম্পর্কটি কাজ করে তার ব্যাখ্যা।","গ-তে উদ্দীপকের কমপক্ষে দুটি তথ্যের সঙ্গে ধারণা মিলানো।","ঘ-তে আইনসম্মত বিকল্প, stakeholder impact, সীমাবদ্ধতা ও সিদ্ধান্ত।"],
      application:"একটি ইউনিয়ন পরিষদ বাজেট প্রকাশ করে না এবং নাগরিকের অভিযোগ নেয় না—এখানে স্বচ্ছতা, জবাবদিহি, অংশগ্রহণ ও প্রতিকারের পথ বিশ্লেষণ করা যায়।",
      checkpoint:"গ ও ঘ-এর পার্থক্য এক বাক্যে বলো—গ প্রয়োগ দেখায়; ঘ মানদণ্ড ধরে বিচার ও সিদ্ধান্ত দেয়।",
      workedSnapshot:"ঘ-এর শুরু: ‘উদ্দীপকের প্রতিষ্ঠানটি শুধু তথ্য না দেওয়ায় নয়, নাগরিক অংশগ্রহণ ও জবাবদিহির পথ বন্ধ করায় উত্তম নাগরিক শাসনের শর্ত পূরণ করছে না।’ এরপর তথ্য প্রকাশ, শুনানি, অভিযোগ নিষ্পত্তি ও তদারকির প্রস্তাব বিচার করবে।",
      practicePrompt:"একটি পৌরসভা সেবা ফি নেয় কিন্তু সময়সূচি, ব্যয়ের হিসাব ও অভিযোগের ফল প্রকাশ করে না—১+২+৩+৪ মানবণ্টনে উত্তর লেখো।",
      answerCheck:"সংজ্ঞা, কারণ, stimulus evidence, প্রাতিষ্ঠানিক প্রতিকার, সীমাবদ্ধতা ও যুক্ত সিদ্ধান্ত আলাদা করে দৃশ্যমান হতে হবে।",
      recallQuestions:["গ অংশে উদ্দীপকের তথ্য কীভাবে ব্যবহার করবে?","ঘ অংশে কোন চারটি মানদণ্ড কাজে লাগে?","ব্যক্তিগত মত ও নীতিভিত্তিক সিদ্ধান্তের পার্থক্য কী?"],
      commonTrap:"দলীয় বা আবেগী মতামত লেখা এবং সংশ্লিষ্ট প্রতিষ্ঠানের আইনসম্মত ভূমিকা বাদ দেওয়া।",
      stretchPrompt:"দ্রুত সেবা ও পূর্ণ জবাবদিহির মধ্যে সময়গত দ্বন্দ্ব হলে কীভাবে ভারসাম্য করা যায়—শর্তযুক্ত সিদ্ধান্ত দাও।"
    }
  ];
  return null;
}

const banglaChapterDetails: Record<string, BanglaChapterDetail> = {
  "Accounting foundations": { core: "হিসাববিজ্ঞান আর্থিক ঘটনা শনাক্ত, পরিমাপ, লিপিবদ্ধ ও ব্যবহারকারীর কাছে প্রতিবেদন করে। সম্পদ, দায়, মালিকানা স্বত্ব, আয়, ব্যয় ও উত্তোলনের প্রকৃতি বুঝে শ্রেণিবিন্যাস করতে হয়।", terms: ["হিসাববিজ্ঞান", "সম্পদ", "দায়", "মালিকানা স্বত্ব", "আয়", "ব্যয়"], example: "একটি ক্ষুদ্র সেবা প্রতিষ্ঠানের নগদ, আসবাবপত্র, পাওনাদার ও মালিকের বিনিয়োগ আলাদা করে শ্রেণিবিন্যাস করো।" },
  "Transactions and the accounting equation": { core: "শুধু অর্থমূল্যে পরিমাপযোগ্য এবং ব্যবসায়ের আর্থিক অবস্থায় পরিবর্তন আনে—এমন ঘটনাই লেনদেন। প্রতিটি লেনদেনে সম্পদ = দায় + মালিকানা স্বত্ব সমতা বজায় থাকে।", terms: ["লেনদেন", "দ্বৈত সত্তা", "হিসাব সমীকরণ", "উত্তোলন", "মূলধন"], example: "নগদ বিনিয়োগ, ধারে পণ্য ক্রয়, আয়, ব্যয় ও উত্তোলনের প্রভাব সমীকরণ ছকে দেখাও।" },
  "Journal and ledger": { core: "জাবেদায় তারিখক্রমে ডেবিট-ক্রেডিটসহ লেনদেন লেখা হয়; খতিয়ানে একই হিসাবের সব দাখিলা একত্র করে জের নির্ণয় করা হয়।", terms: ["জাবেদা", "ডেবিট", "ক্রেডিট", "সংক্ষিপ্ত বিবরণ", "খতিয়ান", "জের"], example: "একটি স্টেশনারি দোকানের এক সপ্তাহের লেনদেন জাবেদায় লিখে নগদ ও বিক্রয় হিসাবে স্থানান্তর করো।" },
  "Trial balance": { core: "রেওয়ামিল নির্দিষ্ট তারিখে খতিয়ানের জের নিয়ে ডেবিট ও ক্রেডিটের গাণিতিক সমতা যাচাই করে; সমতা মিললেও নীতিগত বা সম্পূর্ণ বাদ পড়া ভুল থাকতে পারে।", terms: ["রেওয়ামিল", "ডেবিট জের", "ক্রেডিট জের", "গাণিতিক শুদ্ধতা", "অনাবিষ্কৃত ভুল"], example: "প্রদত্ত খতিয়ান জের থেকে রেওয়ামিল তৈরি করে কোন ভুল ধরা পড়বে আর কোনটি পড়বে না তা বোঝাও।" },
  "Cash book and bank transactions": { core: "নগদান বই একই সঙ্গে জাবেদা ও নগদ/ব্যাংক খতিয়ানের কাজ করে। নগদ ও ব্যাংক কলাম, বিপরীত দাখিলা এবং ব্যাংক সমন্বয়ের কারণ বুঝতে হয়।", terms: ["নগদান বই", "ব্যাংক কলাম", "বিপরীত দাখিলা", "চেক", "ব্যাংক সমন্বয়"], example: "নগদ জমা, চেকে পরিশোধ ও ব্যাংক চার্জসহ দুই ঘরা নগদান বই প্রস্তুত করো।" },
  "Financial statements": { core: "আর্থিক বিবরণী নির্দিষ্ট সময়ের লাভ-ক্ষতি ও নির্দিষ্ট তারিখের আর্থিক অবস্থান দেখায়। আয়-ব্যয় সঠিক সময়ে মিলিয়ে ফলাফল ও সম্পদ-দায় উপস্থাপন করতে হয়।", terms: ["আয় বিবরণী", "আর্থিক অবস্থার বিবরণী", "নিট লাভ", "চলতি সম্পদ", "চলতি দায়"], example: "রেওয়ামিল থেকে আয় বিবরণী ও আর্থিক অবস্থার বিবরণী প্রস্তুত করে নিট লাভ নির্ণয় করো।" },
  "Adjustments and rectification": { core: "সমন্বয় দাখিলা হিসাবকালভিত্তিক আয়-ব্যয়কে সঠিক সময়ে স্বীকৃতি দেয়; ভুল সংশোধনে ভুলের ধরন বুঝে বিপরীত বা পরিপূরক দাখিলা দিতে হয়।", terms: ["বকেয়া ব্যয়", "অগ্রিম ব্যয়", "অর্জিত আয়", "অনুপার্জিত আয়", "ভুল সংশোধন"], example: "বকেয়া বেতন ও অগ্রিম বিমার সমন্বয় করে সংশোধিত লাভ ও আর্থিক অবস্থার প্রভাব দেখাও।" },
  "Depreciation and provisions": { core: "অবচয় হলো ব্যবহারযোগ্য আয়ুষ্কালে অবচয়যোগ্য মূল্য নিয়মতান্ত্রিকভাবে ব্যয় বণ্টন; সঞ্চিতি সম্ভাব্য ক্ষতি বা দায়ের জন্য সতর্কতামূলক স্বীকৃতি।", terms: ["অবচয়", "অবচয়যোগ্য মূল্য", "সরলরৈখিক পদ্ধতি", "ক্রমহ্রাসমান জের", "সঞ্চিতি"], example: "ক্রয়মূল্য, অবশিষ্ট মূল্য ও আয়ুষ্কাল থেকে বার্ষিক অবচয় এবং বহিমূল্য নির্ণয় করো।" },
  "Partnership accounts": { core: "অংশীদারি ব্যবসায়ে চুক্তি অনুযায়ী লাভ-ক্ষতি, মূলধনের সুদ, উত্তোলনের সুদ, বেতন ও সুনাম সমন্বয় করা হয়।", terms: ["অংশীদারি চুক্তি", "লাভ বণ্টন অনুপাত", "মূলধন", "উত্তোলন", "সুনাম"], example: "দুই অংশীদারের বেতন, মূলধনের সুদ ও উত্তোলনের সুদ সমন্বয় করে লাভ বণ্টন করো।" },
  "Manufacturing accounts": { core: "উৎপাদন হিসাব কাঁচামাল, প্রত্যক্ষ শ্রম ও কারখানা উপরিব্যয় থেকে উৎপাদিত পণ্যের ব্যয় নির্ণয় করে।", terms: ["কাঁচামাল ব্যবহৃত", "প্রত্যক্ষ শ্রম", "প্রাথমিক ব্যয়", "কারখানা উপরিব্যয়", "উৎপাদন ব্যয়"], example: "প্রারম্ভিক ও সমাপনী মজুদসহ কাঁচামাল ব্যবহৃত এবং মোট উৎপাদন ব্যয় নির্ণয় করো।" },

  "Introduction to finance": { core: "ফিন্যান্স ব্যক্তি, ব্যবসায় ও সরকারের অর্থ সংগ্রহ, বিনিয়োগ ও ব্যবহারের সিদ্ধান্ত বিশ্লেষণ করে। ব্যবসায়ে বিনিয়োগ, অর্থায়ন ও লভ্যাংশ সিদ্ধান্ত পরস্পর সম্পর্কিত।", terms: ["ফিন্যান্স", "বিনিয়োগ সিদ্ধান্ত", "অর্থায়ন সিদ্ধান্ত", "লভ্যাংশ", "তারল্য"], example: "একটি ক্ষুদ্র ব্যবসা নতুন যন্ত্র কিনবে নাকি চলতি মূলধন বাড়াবে—লক্ষ্য ও নগদপ্রবাহ ধরে সিদ্ধান্ত বিশ্লেষণ করো।" },
  "Sources of finance": { core: "অর্থের প্রয়োজনের মেয়াদ, ব্যয়, ঝুঁকি, নিয়ন্ত্রণ ও পরিশোধক্ষমতার সঙ্গে অর্থায়নের উৎস মিলিয়ে নির্বাচন করতে হয়।", terms: ["অভ্যন্তরীণ উৎস", "বাহ্যিক উৎস", "মালিকানা মূলধন", "ঋণ মূলধন", "স্বল্পমেয়াদি অর্থায়ন"], example: "চার মাসের মৌসুমি মজুদ ও দশ বছরের যন্ত্রপাতির জন্য আলাদা উপযুক্ত উৎস নির্বাচন করো।" },
  "Time value of money": { core: "আজকের এক টাকা ভবিষ্যতের এক টাকার চেয়ে মূল্যবান, কারণ আজকের অর্থ বিনিয়োগ করে আয় করা যায়। বর্তমান ও ভবিষ্যৎ মূল্য সুদের হার ও সময়ের ওপর নির্ভর করে।", terms: ["বর্তমান মূল্য", "ভবিষ্যৎ মূল্য", "চক্রবৃদ্ধি", "বাট্টাকরণ", "বার্ষিকী"], example: "বর্তমান ১০,০০০ টাকা ১০% হারে দুই বছর পরে কত হবে এবং ভবিষ্যৎ অর্থের বর্তমান মূল্য কত—নির্ণয় করো।" },
  "Risk and return": { core: "প্রত্যাশিত মুনাফার অনিশ্চয়তাই ঝুঁকি। সাধারণভাবে বেশি প্রত্যাশিত মুনাফার জন্য বেশি ঝুঁকি নিতে হয়; বৈচিত্র্যকরণ কিছু ঝুঁকি কমায়।", terms: ["ঝুঁকি", "প্রত্যাশিত মুনাফা", "বিচ্যুতি", "বৈচিত্র্যকরণ", "ঝুঁকি-মুনাফা সমন্বয়"], example: "দুটি বিনিয়োগের সম্ভাব্য মুনাফা ও ঝুঁকি তুলনা করে ঝুঁকি-সহনশীলতা অনুযায়ী সিদ্ধান্ত দাও।" },
  "Financial institutions": { core: "আর্থিক প্রতিষ্ঠান সঞ্চয়কারীর অর্থ সংগ্রহ করে ঋণগ্রহীতা ও বিনিয়োগকারীর কাছে পৌঁছে দেয় এবং লেনদেন, ঝুঁকি ও তথ্য ব্যয় কমায়।", terms: ["আর্থিক মধ্যস্থতা", "ব্যাংক", "অব্যাংক আর্থিক প্রতিষ্ঠান", "সঞ্চয়", "ঋণ"], example: "একজন উদ্যোক্তার দীর্ঘমেয়াদি যন্ত্রপাতি অর্থায়নে ব্যাংক ও আর্থিক প্রতিষ্ঠানের ভূমিকা তুলনা করো।" },
  "Commercial banking": { core: "বাণিজ্যিক ব্যাংক আমানত গ্রহণ, ঋণ প্রদান, অর্থ স্থানান্তর এবং ঋণ সৃষ্টি করে; লাভের পাশাপাশি তারল্য ও নিরাপত্তা বজায় রাখতে হয়।", terms: ["আমানত", "ঋণ", "ঋণ সৃষ্টি", "তারল্য", "জামানত"], example: "আমানত ও নগদ সংরক্ষণ অনুপাতের ভিত্তিতে ব্যাংকের ঋণ সৃষ্টির প্রক্রিয়া ব্যাখ্যা করো।" },
  "Central bank and monetary control": { core: "কেন্দ্রীয় ব্যাংক মুদ্রা ইস্যু, ব্যাংকারের ব্যাংক, সরকারের ব্যাংকার ও ঋণের শেষ আশ্রয় হিসেবে কাজ করে এবং মুদ্রানীতির মাধ্যমে অর্থ সরবরাহ নিয়ন্ত্রণ করে।", terms: ["কেন্দ্রীয় ব্যাংক", "মুদ্রানীতি", "ব্যাংক হার", "খোলাবাজার কার্যক্রম", "নগদ সংরক্ষণ"], example: "মূল্যস্ফীতি কমাতে বাংলাদেশ ব্যাংক কীভাবে নীতিহার ও সংরক্ষণ হার ব্যবহার করতে পারে তা বিশ্লেষণ করো।" },
  "Bank accounts and instruments": { core: "গ্রাহকের প্রয়োজন অনুযায়ী চলতি, সঞ্চয়ী ও স্থায়ী হিসাব ব্যবহৃত হয়; চেক, ড্রাফট ও ইলেকট্রনিক মাধ্যমের বৈশিষ্ট্য ও নিরাপত্তা ভিন্ন।", terms: ["চলতি হিসাব", "সঞ্চয়ী হিসাব", "স্থায়ী আমানত", "চেক", "ব্যাংক ড্রাফট"], example: "একজন শিক্ষার্থী, ব্যবসায়ী ও সঞ্চয়কারীর জন্য উপযুক্ত ব্যাংক হিসাব নির্বাচন করে কারণ দাও।" },
  "Insurance and risk management": { core: "বিমা প্রিমিয়ামের বিনিময়ে নির্দিষ্ট ঝুঁকির আর্থিক ক্ষতি বিমাকারীর কাছে স্থানান্তর করে; সর্বোচ্চ সদ্বিশ্বাস, বিমাযোগ্য স্বার্থ ও ক্ষতিপূরণ প্রধান নীতি।", terms: ["ঝুঁকি", "প্রিমিয়াম", "বিমাযোগ্য স্বার্থ", "সর্বোচ্চ সদ্বিশ্বাস", "ক্ষতিপূরণ"], example: "অগ্নিবিমার দাবিতে প্রকৃত ক্ষতি ও বিমাকৃত অর্থের ভিত্তিতে ক্ষতিপূরণ নীতি প্রয়োগ করো।" },
  "Foreign exchange and trade finance": { core: "বৈদেশিক মুদ্রার বিনিময় হার আন্তর্জাতিক লেনদেনের মূল্য নির্ধারণ করে; এলসি রপ্তানিকারক ও আমদানিকারকের অর্থপ্রদানের ঝুঁকি কমায়।", terms: ["বিনিময় হার", "বৈদেশিক মুদ্রা", "এলসি", "আমদানিকারক", "রপ্তানিকারক"], example: "ডলারের দর পরিবর্তনে আমদানি ব্যয় এবং এলসির মাধ্যমে অর্থপ্রদানের ধাপ ব্যাখ্যা করো।" },
  "Capital market": { core: "পুঁজিবাজার দীর্ঘমেয়াদি মূলধন সংগ্রহ ও বিনিয়োগের সুযোগ দেয়; প্রাথমিক বাজারে নতুন সিকিউরিটি এবং মাধ্যমিক বাজারে বিদ্যমান সিকিউরিটি লেনদেন হয়।", terms: ["শেয়ার", "বন্ড", "প্রাথমিক বাজার", "মাধ্যমিক বাজার", "স্টক এক্সচেঞ্জ"], example: "একটি কোম্পানির নতুন শেয়ার ইস্যু ও পরে স্টক এক্সচেঞ্জে লেনদেনের পার্থক্য বোঝাও।" },
  "Financial planning and control": { core: "আর্থিক পরিকল্পনা ভবিষ্যৎ অর্থের প্রয়োজন ও উৎস নির্ধারণ করে; বাজেট, নগদপ্রবাহ ও বিচ্যুতি বিশ্লেষণ নিয়ন্ত্রণে সহায়তা করে।", terms: ["বাজেট", "নগদ বাজেট", "পূর্বাভাস", "বিচ্যুতি", "আর্থিক নিয়ন্ত্রণ"], example: "মাসভিত্তিক নগদপ্রাপ্তি ও পরিশোধ থেকে ঘাটতির মাস চিহ্নিত করে অর্থায়ন পরিকল্পনা করো।" },

  "Nature of business": { core: "মুনাফার উদ্দেশ্যে ঝুঁকি গ্রহণ করে নিয়মিত পণ্য বা সেবা উৎপাদন ও বিনিময়ের অর্থনৈতিক কার্যক্রমই ব্যবসায়; পেশা ও চাকরি থেকে এর বৈশিষ্ট্য আলাদা।", terms: ["ব্যবসায়", "শিল্প", "বাণিজ্য", "প্রত্যক্ষ সেবা", "ঝুঁকি"], example: "দোকান, চিকিৎসা পেশা ও বেতনভুক্ত চাকরিকে বৈশিষ্ট্য অনুযায়ী শ্রেণিবিন্যাস করো।" },
  "Business environment": { core: "ব্যবসায়ের অভ্যন্তরীণ, নিকট ও সামষ্টিক পরিবেশের অর্থনৈতিক, সামাজিক, প্রযুক্তিগত, রাজনৈতিক ও আইনগত শক্তি সিদ্ধান্তে প্রভাব ফেলে।", terms: ["অভ্যন্তরীণ পরিবেশ", "নিকট পরিবেশ", "সামষ্টিক পরিবেশ", "সুযোগ", "হুমকি"], example: "ডিজিটাল পেমেন্ট, মূল্যস্ফীতি ও নতুন আইন একটি স্থানীয় ব্যবসায়কে কীভাবে প্রভাবিত করে তা বিশ্লেষণ করো।" },
  "Forms of business ownership": { core: "মালিকানা, দায়, মূলধন, নিয়ন্ত্রণ, স্থায়িত্ব ও আইনি মর্যাদার ভিত্তিতে ব্যবসায়ের উপযুক্ত রূপ নির্বাচন করা হয়।", terms: ["একমালিকানা", "অংশীদারি", "কোম্পানি", "সমবায়", "সীমিত দায়"], example: "ছোট খুচরা দোকান ও বড় উৎপাদন প্রতিষ্ঠানের জন্য আলাদা মালিকানা রূপ নির্বাচন করো।" },
  "Management principles": { core: "ব্যবস্থাপনার নীতি পরিকল্পনা, সংগঠন, নির্দেশনা ও নিয়ন্ত্রণে সাধারণ দিকনির্দেশ দেয়; পরিস্থিতি অনুযায়ী নমনীয়ভাবে প্রয়োগ করতে হয়।", terms: ["কাজের বিভাগ", "কর্তৃত্ব", "শৃঙ্খলা", "আদেশের একতা", "নিয়ন্ত্রণের পরিসর"], example: "এক কর্মী দুই কর্মকর্তার বিপরীত নির্দেশ পেলে কোন নীতি লঙ্ঘিত হয় ও কী সমাধান হবে বোঝাও।" },
  "Sole proprietorship and partnership": { core: "একমালিকানায় এক ব্যক্তি মালিকানা ও অসীম দায় বহন করেন; অংশীদারিতে দুই বা ততোধিক ব্যক্তি চুক্তি অনুযায়ী মূলধন, লাভ ও দায় ভাগ করেন।", terms: ["একমালিকানা", "অংশীদারি", "অসীম দায়", "অংশীদারি চুক্তি", "পারস্পরিক প্রতিনিধি"], example: "দুই বন্ধুর পরামর্শ ব্যবসার জন্য একমালিকানা ও অংশীদারির সুবিধা-অসুবিধা তুলনা করো।" },
  "Company and cooperative": { core: "কোম্পানি পৃথক আইনগত সত্তা ও সীমিত দায়যুক্ত মূলধনী প্রতিষ্ঠান; সমবায় পারস্পরিক সহযোগিতা ও সদস্যকল্যাণের গণতান্ত্রিক সংগঠন।", terms: ["পৃথক সত্তা", "সীমিত দায়", "শেয়ার", "সমবায়", "এক সদস্য এক ভোট"], example: "বিনিয়োগকারী মালিকানার কোম্পানি ও কৃষক সমবায়ের উদ্দেশ্য, নিয়ন্ত্রণ ও মুনাফা বণ্টন তুলনা করো।" },
  "Planning and decision making": { core: "পরিকল্পনা ভবিষ্যৎ লক্ষ্য ও করণীয় নির্ধারণ করে; সিদ্ধান্ত গ্রহণে সমস্যা শনাক্ত, বিকল্প মূল্যায়ন, নির্বাচন ও ফল যাচাই করা হয়।", terms: ["লক্ষ্য", "কৌশল", "নীতি", "বিকল্প", "সিদ্ধান্ত"], example: "বিক্রয় কমে গেলে তথ্যের ভিত্তিতে কয়েকটি বিকল্প তৈরি করে সর্বোত্তম সিদ্ধান্ত নির্বাচন করো।" },
  "Organising": { core: "সংগঠিতকরণে কাজ ভাগ, বিভাগ গঠন, কর্তৃত্ব অর্পণ ও সমন্বয়ের মাধ্যমে লক্ষ্য অর্জনের কাঠামো তৈরি হয়।", terms: ["কাজের বিভাগ", "বিভাগীকরণ", "কর্তৃত্ব", "দায়িত্ব", "অর্পণ"], example: "একটি বেড়ে ওঠা প্রতিষ্ঠানের ক্রয়, বিক্রয় ও হিসাব কাজের জন্য বিভাগ ও কর্তৃত্ব কাঠামো তৈরি করো।" },
  "Staffing and leadership": { core: "কর্মীসংস্থানে জনবল পরিকল্পনা, নিয়োগ, নির্বাচন, প্রশিক্ষণ ও মূল্যায়ন হয়; নেতৃত্ব কর্মীদের প্রভাবিত করে স্বেচ্ছায় লক্ষ্য অর্জনে উদ্বুদ্ধ করে।", terms: ["জনবল পরিকল্পনা", "নিয়োগ", "নির্বাচন", "প্রশিক্ষণ", "নেতৃত্ব"], example: "নতুন শাখার জন্য যোগ্য কর্মী নির্বাচন এবং পরিস্থিতি অনুযায়ী নেতৃত্বের ধরন প্রস্তাব করো।" },
  "Motivation and communication": { core: "প্রেষণা কর্মীর প্রয়োজন ও লক্ষ্যকে প্রতিষ্ঠানের লক্ষ্যের সঙ্গে যুক্ত করে; কার্যকর যোগাযোগে প্রেরক, বার্তা, মাধ্যম, গ্রাহক ও প্রতিক্রিয়া সমন্বিত থাকে।", terms: ["প্রেষণা", "প্রণোদনা", "যোগাযোগ", "প্রতিক্রিয়া", "যোগাযোগ বাধা"], example: "কর্মদক্ষতা কমে গেলে আর্থিক ও অনার্থিক প্রণোদনা এবং দ্বিমুখী যোগাযোগ পরিকল্পনা করো।" },
  "Coordination and control": { core: "সমন্বয় বিভিন্ন কাজ ও বিভাগের প্রচেষ্টাকে এক লক্ষ্যে যুক্ত করে; নিয়ন্ত্রণে মান নির্ধারণ, বাস্তব ফল মাপা, তুলনা ও সংশোধন করা হয়।", terms: ["সমন্বয়", "মানদণ্ড", "পরিমাপ", "বিচ্যুতি", "সংশোধন"], example: "উৎপাদন ও বিক্রয় বিভাগের দ্বন্দ্ব সমাধান এবং বাজেট বিচ্যুতি নিয়ন্ত্রণের ধাপ দেখাও।" },
  "Entrepreneurship and business ethics": { core: "উদ্যোক্তা সুযোগ শনাক্ত করে সম্পদ সংগঠিত ও ঝুঁকি নিয়ে মূল্য সৃষ্টি করেন; ব্যবসায় নৈতিকতা সিদ্ধান্তে সততা, ন্যায় ও সামাজিক দায়িত্ব নিশ্চিত করে।", terms: ["উদ্যোক্তা", "উদ্ভাবন", "ঝুঁকি", "নৈতিকতা", "সামাজিক দায়িত্ব"], example: "লাভজনক হলেও পরিবেশের ক্ষতি করে এমন সিদ্ধান্ত একজন দায়িত্বশীল উদ্যোক্তা কীভাবে মূল্যায়ন করবেন বোঝাও।" },

  "Basic economic problems": { core: "অসীম অভাবের বিপরীতে সম্পদ সীমিত হওয়ায় নির্বাচন ও সুযোগ ব্যয় সৃষ্টি হয়; কী, কীভাবে ও কার জন্য উৎপাদন—প্রতিটি অর্থনীতির মৌলিক সমস্যা।", terms: ["দুষ্প্রাপ্যতা", "নির্বাচন", "সুযোগ ব্যয়", "উৎপাদন সম্ভাবনা রেখা", "সম্পদ"], example: "একই জমিতে ধান বা সবজি উৎপাদনের সিদ্ধান্ত দিয়ে সুযোগ ব্যয় ও উৎপাদন সম্ভাবনা বোঝাও।" },
  "Utility and consumer behaviour": { core: "উপযোগ হলো অভাব পূরণের ক্ষমতা; ভোগ বাড়লে মোট উপযোগ বাড়লেও প্রান্তিক উপযোগ সাধারণত কমে এবং নির্দিষ্ট শর্তে ভোক্তা ভারসাম্যে পৌঁছে।", terms: ["মোট উপযোগ", "প্রান্তিক উপযোগ", "ক্রমহ্রাসমান প্রান্তিক উপযোগ", "ভোক্তা ভারসাম্য"], example: "পরপর কয়েক একক দ্রব্য ভোগের মোট ও প্রান্তিক উপযোগ ছক তৈরি করে সর্বোচ্চ মোট উপযোগ চিহ্নিত করো।" },
  "Demand and supply": { core: "অন্যান্য অবস্থা অপরিবর্তিত থাকলে দাম ও চাহিদার পরিমাণ বিপরীত, দাম ও যোগানের পরিমাণ সমমুখী; বাজার ভারসাম্যে চাহিদা ও যোগান সমান।", terms: ["চাহিদা", "যোগান", "চাহিদার পরিমাণ", "স্থিতিস্থাপকতা", "ভারসাম্য দাম"], example: "পেঁয়াজের দামের পরিবর্তন ও উৎপাদন ব্যয়ের পরিবর্তনে রেখা বরাবর গতি ও রেখা স্থানান্তর আলাদা করো।" },
  "Production and cost": { core: "উৎপাদনে উপকরণ মিলিয়ে পণ্য সৃষ্টি হয়; স্বল্পমেয়াদে কিছু উপকরণ স্থির এবং মোট, গড় ও প্রান্তিক উৎপাদন ও ব্যয়ের মধ্যে নির্দিষ্ট সম্পর্ক থাকে।", terms: ["উৎপাদন ফাংশন", "স্থির উপকরণ", "প্রান্তিক উৎপাদন", "স্থির ব্যয়", "প্রান্তিক ব্যয়"], example: "শ্রমিক বাড়লে মোট ও প্রান্তিক উৎপাদনের ছক থেকে ক্রমহ্রাসমান ফলনের পর্যায় চিহ্নিত করো।" },
  "Market structures": { core: "বিক্রেতার সংখ্যা, পণ্যের প্রকৃতি, প্রবেশ বাধা ও মূল্য নিয়ন্ত্রণের ভিত্তিতে পূর্ণ প্রতিযোগিতা, একচেটিয়া, একচেটিয়া প্রতিযোগিতা ও অলিগোপলি আলাদা।", terms: ["পূর্ণ প্রতিযোগিতা", "একচেটিয়া", "অলিগোপলি", "প্রবেশ বাধা", "মূল্য নির্ধারণ"], example: "কৃষিপণ্য বাজার, মোবাইল অপারেটর ও একক ইউটিলিটি সেবাকে বাজার বৈশিষ্ট্য অনুযায়ী শ্রেণিবিন্যাস করো।" },
  "National income": { core: "জাতীয় আয় নির্দিষ্ট সময়ে উৎপাদিত চূড়ান্ত পণ্য-সেবার আর্থিক মূল্য; উৎপাদন, আয় ও ব্যয় পদ্ধতিতে দ্বৈত গণনা বাদ দিয়ে হিসাব করা হয়।", terms: ["জিডিপি", "জিএনআই", "চূড়ান্ত পণ্য", "মূল্য সংযোজন", "মাথাপিছু আয়"], example: "কয়েকটি খাতের মূল্য সংযোজন থেকে জিডিপি এবং জনসংখ্যা দিয়ে মাথাপিছু আয় নির্ণয় করো।" },
  "Money, banking and inflation": { core: "অর্থ বিনিময় মাধ্যম, হিসাবের একক, মূল্য সংরক্ষণ ও স্থগিত পরিশোধের মান; মূল্যস্ফীতিতে সাধারণ মূল্যস্তর বাড়ে এবং অর্থের ক্রয়ক্ষমতা কমে।", terms: ["অর্থ", "অর্থ সরবরাহ", "ঋণ", "মূল্যস্ফীতি", "ক্রয়ক্ষমতা"], example: "ভোক্তা মূল্যসূচক বাড়লে মূল্যস্ফীতির হার ও স্থির আয়ের মানুষের ওপর প্রভাব ব্যাখ্যা করো।" },
  "Public finance": { core: "সরকারি অর্থব্যবস্থা রাজস্ব, ব্যয়, বাজেট ও ঋণের মাধ্যমে জনকল্যাণ, স্থিতিশীলতা ও সম্পদ বণ্টন পরিচালনা করে।", terms: ["সরকারি রাজস্ব", "প্রত্যক্ষ কর", "পরোক্ষ কর", "সরকারি ব্যয়", "বাজেট ঘাটতি"], example: "আয়কর ও ভ্যাটের প্রভাব তুলনা করে শিক্ষা খাতে সরকারি ব্যয়ের যৌক্তিকতা বিশ্লেষণ করো।" },
  "International trade": { core: "দেশগুলো তুলনামূলক সুবিধার ভিত্তিতে বিশেষায়ন ও বাণিজ্য করে; শুল্ক, কোটা, বিনিময় হার ও বাণিজ্য ভারসাম্য ফলাফলে প্রভাব ফেলে।", terms: ["তুলনামূলক সুবিধা", "রপ্তানি", "আমদানি", "শুল্ক", "বাণিজ্য ভারসাম্য"], example: "দুই দেশের সুযোগ ব্যয় তুলনা করে কোন পণ্যে বিশেষায়ন ও বিনিময় লাভ হবে নির্ণয় করো।" },
  "Development and Bangladesh economy": { core: "অর্থনৈতিক প্রবৃদ্ধি আয় বাড়ায়; উন্নয়ন আয় ছাড়াও শিক্ষা, স্বাস্থ্য, দারিদ্র্য, বৈষম্য, কর্মসংস্থান ও সক্ষমতার উন্নতি বোঝায়।", terms: ["প্রবৃদ্ধি", "উন্নয়ন", "মানব উন্নয়ন", "দারিদ্র্য", "বৈষম্য"], example: "বাংলাদেশের একটি উন্নয়ন প্রকল্পকে আয়, কর্মসংস্থান, মানবসম্পদ ও পরিবেশের সূচকে মূল্যায়ন করো।" },

  "Introduction to civics": { core: "পৌরনীতি নাগরিকের অধিকার, কর্তব্য, রাষ্ট্র, সরকার ও সামাজিক-রাজনৈতিক প্রতিষ্ঠানের সম্পর্ক আলোচনা করে। রাষ্ট্র স্থায়ী কাঠামো, সরকার তার পরিচালন যন্ত্র।", terms: ["নাগরিক", "নাগরিকতা", "রাষ্ট্র", "সরকার", "জাতি"], example: "রাষ্ট্রের চার উপাদান এবং সরকারের ভূমিকা বাংলাদেশের উদাহরণে আলাদা করে বোঝাও।" },
  "Values, law and liberty": { core: "মূল্যবোধ আচরণের মানদণ্ড, আইন রাষ্ট্রস্বীকৃত বাধ্যতামূলক নিয়ম এবং স্বাধীনতা যুক্তিসংগত আইনি সীমার মধ্যে ব্যক্তিত্ব বিকাশের সুযোগ।", terms: ["মূল্যবোধ", "আইন", "নৈতিকতা", "স্বাধীনতা", "আইনের শাসন"], example: "মতপ্রকাশের স্বাধীনতা ও অন্যের অধিকার রক্ষার মধ্যে আইনসম্মত ভারসাম্য বিশ্লেষণ করো।" },
  "Rights and duties": { core: "অধিকার ব্যক্তির বিকাশের স্বীকৃত সুযোগ এবং কর্তব্য সেই অধিকার রক্ষা ও সমাজের প্রতি দায়িত্ব পালনের বাধ্যবাধকতা; দুটি পরস্পর নির্ভরশীল।", terms: ["অধিকার", "কর্তব্য", "নাগরিক অধিকার", "রাজনৈতিক অধিকার", "সামাজিক অধিকার"], example: "একজন নাগরিক নিজের অধিকার দাবি করলেও সংশ্লিষ্ট কর্তব্য না মানলে কী সমস্যা হয় বিশ্লেষণ করো।" },
  "Political institutions": { core: "আইনসভা, নির্বাহী বিভাগ, বিচার বিভাগ, রাজনৈতিক দল ও আমলাতন্ত্র নির্ধারিত ভূমিকা ও জবাবদিহির মাধ্যমে রাষ্ট্রীয় সিদ্ধান্ত পরিচালনা করে।", terms: ["আইনসভা", "নির্বাহী বিভাগ", "বিচার বিভাগ", "রাজনৈতিক দল", "আমলাতন্ত্র"], example: "একটি জননীতি প্রণয়ন থেকে বাস্তবায়ন ও বিচারিক পর্যালোচনা পর্যন্ত প্রতিষ্ঠানের ভূমিকা দেখাও।" },
  "Constitution and constitutionalism": { core: "সংবিধান রাষ্ট্রের মৌলিক আইন ও ক্ষমতার কাঠামো নির্ধারণ করে; সাংবিধানিকতা সীমিত সরকার, অধিকার ও আইনের শাসনের মাধ্যমে ক্ষমতা নিয়ন্ত্রণ করে।", terms: ["সংবিধান", "সাংবিধানিকতা", "সর্বোচ্চতা", "সীমিত সরকার", "সংশোধন"], example: "কেবল লিখিত সংবিধান থাকা এবং বাস্তবে সাংবিধানিক শাসন চলার পার্থক্য বোঝাও।" },
  "Organs of government": { core: "আইনসভা আইন প্রণয়ন, নির্বাহী বিভাগ বাস্তবায়ন এবং বিচার বিভাগ ব্যাখ্যা ও ন্যায়বিচার করে; ক্ষমতার পৃথকীকরণ ও নিয়ন্ত্রণ ভারসাম্য রক্ষা করে।", terms: ["আইনসভা", "নির্বাহী", "বিচার বিভাগ", "ক্ষমতার পৃথকীকরণ", "নিয়ন্ত্রণ ও ভারসাম্য"], example: "একটি আইন প্রণয়ন, প্রয়োগ এবং আদালতে পর্যালোচনার ধারাবাহিকতা ব্যাখ্যা করো।" },
  "Democracy and elections": { core: "গণতন্ত্রে জনগণের অংশগ্রহণ, প্রতিযোগিতামূলক নির্বাচন, অধিকার, প্রতিনিধিত্ব ও জবাবদিহি প্রয়োজন; শুধু ভোট গ্রহণই যথেষ্ট নয়।", terms: ["গণতন্ত্র", "নির্বাচন", "প্রতিনিধিত্ব", "অংশগ্রহণ", "বৈধতা"], example: "একটি নির্বাচনকে অর্থবহ করতে স্বাধীনতা, প্রতিযোগিতা ও জবাবদিহির শর্ত মূল্যায়ন করো।" },
  "Good governance": { core: "সুশাসনে আইনের শাসন, স্বচ্ছতা, জবাবদিহি, অংশগ্রহণ, কার্যকারিতা ও সাড়া দেওয়ার ক্ষমতা একসঙ্গে কাজ করে।", terms: ["সুশাসন", "জবাবদিহি", "স্বচ্ছতা", "অংশগ্রহণ", "কার্যকারিতা"], example: "স্থানীয় সেবা প্রদানে বিলম্ব ও দুর্নীতির ঘটনা সুশাসনের সূচক দিয়ে বিশ্লেষণ করো।" },
  "Public opinion and political parties": { core: "জনমত নাগরিকদের সম্মিলিত মত; গণমাধ্যম, স্বার্থগোষ্ঠী ও রাজনৈতিক দল জনমত গঠন ও নীতিতে রূপ দিতে ভূমিকা রাখে।", terms: ["জনমত", "গণমাধ্যম", "স্বার্থগোষ্ঠী", "রাজনৈতিক দল", "ইশতেহার"], example: "একটি জনসমস্যা কীভাবে গণমাধ্যম ও রাজনৈতিক দলের মাধ্যমে নীতিগত আলোচনায় আসে বোঝাও।" },
  "Citizenship in Bangladesh": { core: "নাগরিকতা রাষ্ট্রের সঙ্গে আইনি ও রাজনৈতিক সম্পর্ক; দায়িত্বশীল নাগরিক অধিকার ভোগের পাশাপাশি আইন মানে, অংশ নেয় ও অন্যের সমতা সম্মান করে।", terms: ["নাগরিকতা", "জাতীয় পরিচয়", "সমতা", "অংশগ্রহণ", "নাগরিক দায়িত্ব"], example: "একটি স্থানীয় পরিবেশ সমস্যায় দায়িত্বশীল বাংলাদেশি নাগরিকের করণীয় পরিকল্পনা করো।" },

  "Historical sources and method": { core: "ইতিহাস রচনায় প্রাথমিক ও মাধ্যমিক উৎসের উৎপত্তি, উদ্দেশ্য, সময়, পক্ষপাত, সীমাবদ্ধতা ও পারস্পরিক সমর্থন যাচাই করতে হয়।", terms: ["প্রাথমিক উৎস", "মাধ্যমিক উৎস", "উৎস-পরিচয়", "পক্ষপাত", "পারস্পরিক যাচাই"], example: "একটি সরকারি নথি ও প্রত্যক্ষদর্শীর স্মৃতিকথা তুলনা করে নির্ভরযোগ্য উপসংহার তৈরি করো।" },
  "Bengal under colonial rule": { core: "ঔপনিবেশিক শাসনে প্রশাসন, ভূমি-রাজস্ব, বাণিজ্য ও শিক্ষা পুনর্গঠিত হয়; এর রাজনৈতিক, অর্থনৈতিক ও সামাজিক প্রভাব সব শ্রেণির ওপর সমান ছিল না।", terms: ["ঔপনিবেশিকতা", "ভূমি রাজস্ব", "বাণিজ্য", "প্রতিরোধ", "সামাজিক প্রভাব"], example: "একটি রাজস্ব নীতি নিয়ে সরকারি বক্তব্য ও কৃষকের অভিজ্ঞতা তুলনা করো।" },
  "Political awakening": { core: "শিক্ষা, সংবাদপত্র, সামাজিক সংস্কার, সমিতি ও প্রতিনিধিত্বের দাবির মাধ্যমে বাংলায় রাজনৈতিক চেতনা ও জাতীয়তাবাদ বিকশিত হয়।", terms: ["রাজনৈতিক চেতনা", "সমিতি", "সংবাদপত্র", "সংস্কার", "জাতীয়তাবাদ"], example: "শিক্ষা ও সংবাদপত্র কীভাবে সংগঠিত রাজনৈতিক দাবির পথ তৈরি করে তা কারণ-ঘটনা-ফল ধারায় লেখো।" },
  "Language movement": { core: "রাষ্ট্রভাষা প্রশ্নে সাংস্কৃতিক পরিচয়, রাজনৈতিক বৈষম্য ও ছাত্র-জনতার আন্দোলন ২১ ফেব্রুয়ারি ১৯৫২-এর আত্মত্যাগের মধ্য দিয়ে বাঙালি জাতীয়তাবাদকে শক্তিশালী করে।", terms: ["রাষ্ট্রভাষা", "২১ ফেব্রুয়ারি ১৯৫২", "সাংস্কৃতিক পরিচয়", "আন্দোলন", "জাতীয়তাবাদ"], example: "ভাষা আন্দোলনের পটভূমি, প্রধান ঘটনা, ফলাফল ও স্বাধীনতা সংগ্রামে গুরুত্ব ধারাবাহিকভাবে লেখো।" },
  "Partition and political change": { core: "দেশভাগ দীর্ঘমেয়াদি রাজনৈতিক দ্বন্দ্ব, সাম্প্রদায়িক উত্তেজনা ও তাৎক্ষণিক সিদ্ধান্তের ফল; সীমান্ত, অভিবাসন ও প্রশাসনিক পুনর্গঠনে গভীর মানবিক প্রভাব পড়ে।", terms: ["দেশভাগ", "সীমান্ত", "অভিবাসন", "সাম্প্রদায়িকতা", "রাজনৈতিক পুনর্গঠন"], example: "মানচিত্র, রাজনৈতিক সিদ্ধান্ত ও ব্যক্তিগত সাক্ষ্যের সাহায্যে দেশভাগের বহুমাত্রিক ফল ব্যাখ্যা করো।" },
  "United Front and autonomy movement": { core: "যুক্তফ্রন্টের নির্বাচনী কর্মসূচি পূর্ব বাংলার রাজনৈতিক-অর্থনৈতিক দাবি প্রকাশ করে; পরবর্তী স্বায়ত্তশাসন আন্দোলনে আঞ্চলিক ক্ষমতার দাবি আরও সুস্পষ্ট হয়।", terms: ["যুক্তফ্রন্ট", "২১ দফা", "নির্বাচন", "স্বায়ত্তশাসন", "আঞ্চলিক দাবি"], example: "যুক্তফ্রন্টের দাবির সঙ্গে পরবর্তী ছয় দফা ও স্বায়ত্তশাসন আন্দোলনের ধারাবাহিকতা দেখাও।" },
  "Liberation War": { core: "১৯৭১-এর মুক্তিযুদ্ধ রাজনৈতিক বঞ্চনা, গণরায় অস্বীকার, দমন ও গণহত্যার প্রেক্ষাপটে সশস্ত্র প্রতিরোধে রূপ নেয়; দেশীয় সংগ্রাম ও আন্তর্জাতিক প্রতিক্রিয়া বিজয়ে ভূমিকা রাখে।", terms: ["অসহযোগ", "গণহত্যা", "মুক্তিযুদ্ধ", "সেক্টর", "শরণার্থী", "বিজয়"], example: "মার্চ থেকে ডিসেম্বর ১৯৭১-এর যাচাইকৃত সময়রেখা তৈরি করে অভ্যন্তরীণ ও আন্তর্জাতিক ভূমিকা বিশ্লেষণ করো।" },
  "Early Bengal and regional powers": { core: "প্রাচীন ও মধ্যযুগীয় বাংলার ইতিহাস শিলালিপি, প্রত্নতত্ত্ব, মুদ্রা ও সাহিত্যিক উৎস মিলিয়ে পুনর্গঠন করা হয়; আঞ্চলিক রাজশক্তি প্রশাসন, অর্থনীতি ও সংস্কৃতিতে প্রভাব ফেলে।", terms: ["প্রত্নতত্ত্ব", "শিলালিপি", "রাজবংশ", "আঞ্চলিক শক্তি", "সংস্কৃতি"], example: "একটি শিলালিপি ও পরবর্তী সাহিত্যিক বিবরণ তুলনা করে প্রাচীন বাংলার বিষয়ে সতর্ক সিদ্ধান্ত দাও।" },
  "Social and cultural transformation": { core: "শিক্ষা, মুদ্রণ, সামাজিক সংস্কার, ধর্মীয় চিন্তা ও নতুন মধ্যবিত্তের বিকাশ বাংলার সমাজ ও সংস্কৃতিকে পরিবর্তন করে; পরিবর্তনের সঙ্গে প্রতিরোধও ছিল।", terms: ["সংস্কার", "শিক্ষা", "মুদ্রণ", "মধ্যবিত্ত", "সাংস্কৃতিক পরিবর্তন"], example: "শিক্ষা ও সংবাদপত্র কীভাবে সামাজিক প্রথা ও জনপরিসর বদলেছে তা ব্যক্তি-প্রতিষ্ঠান-ফল কাঠামোয় লেখো।" },
  "Pakistan period and Bengali nationalism": { core: "ভাষা, প্রতিনিধিত্ব, অর্থনৈতিক বৈষম্য ও স্বায়ত্তশাসনের প্রশ্নে ধারাবাহিক বঞ্চনা বাঙালি জাতীয়তাবাদ ও গণআন্দোলনকে শক্তিশালী করে।", terms: ["পূর্ব পাকিস্তান", "বৈষম্য", "ভাষা", "স্বায়ত্তশাসন", "বাঙালি জাতীয়তাবাদ"], example: "রাজনৈতিক, অর্থনৈতিক ও সাংস্কৃতিক প্রমাণ তিন ভাগে সাজিয়ে বাঙালি জাতীয়তাবাদের বিকাশ ব্যাখ্যা করো।" },
  "Mass uprising and the road to independence": { core: "ছয় দফা, আগরতলা মামলা, ১৯৬৯-এর গণঅভ্যুত্থান, ১৯৭০-এর নির্বাচন ও অসহযোগ আন্দোলন ধারাবাহিকভাবে স্বাধীনতার পথ তৈরি করে।", terms: ["ছয় দফা", "গণঅভ্যুত্থান", "সাধারণ নির্বাচন", "অসহযোগ", "স্বাধীনতা"], example: "১৯৬৬ থেকে মার্চ ১৯৭১ পর্যন্ত প্রধান ঘটনা, অংশগ্রহণ ও রাজনৈতিক ফলের সময়রেখা তৈরি করো।" },
  "Independent Bangladesh": { core: "স্বাধীনতার পর বাংলাদেশ পুনর্গঠন, সংবিধান, প্রতিষ্ঠান, অর্থনীতি ও সামাজিক উন্নয়নের জটিল পথে এগোয়; প্রতিটি সময়কে সমকালীন প্রেক্ষাপট ও প্রমাণে মূল্যায়ন করতে হয়।", terms: ["পুনর্গঠন", "সংবিধান", "রাষ্ট্রীয় প্রতিষ্ঠান", "উন্নয়ন", "ঐতিহাসিক ধারাবাহিকতা"], example: "স্বাধীনতার পর রাজনৈতিক, অর্থনৈতিক ও সামাজিক পুনর্গঠনের অগ্রাধিকার ও চ্যালেঞ্জ তুলনা করো।" },
};

const banglaSubjectMethod: Record<string, { method: string; check: string }> = {
  accounting: { method: "হিসাবের নাম নির্ধারণ → শ্রেণি শনাক্ত → ডেবিট-ক্রেডিট নিয়ম প্রয়োগ → দাখিলা/ছক → জের ও সমতা যাচাই", check: "প্রতিটি অঙ্কে হিসাবের কার্যপ্রণালি, টাকা, তারিখ ও বিপরীত দিক মিলিয়ে দেখো।" },
  finance: { method: "লক্ষ্য ও সময় নির্ধারণ → নগদপ্রবাহ/সূত্র বসানো → ব্যয়-ঝুঁকি-তারল্য তুলনা → সিদ্ধান্ত ও সীমাবদ্ধতা", check: "শতকরা হার, সময় একক, সূত্রের চলক এবং টাকার একক আবার যাচাই করো।" },
  business: { method: "সমস্যা শনাক্ত → প্রাসঙ্গিক নীতি নির্বাচন → কারণ ও প্রভাব আলাদা → বাস্তবসম্মত ব্যবস্থাপনা পদক্ষেপ → ফল মাপার উপায়", check: "প্রতিটি সুপারিশের সঙ্গে নীতি, কারণ এবং প্রত্যাশিত ফল যুক্ত আছে কি না দেখো।" },
  economics: { method: "অন্যান্য অবস্থা নির্ধারণ → সম্পর্ক/সূত্র লেখা → ছক বা রেখাচিত্র → পরিবর্তনের কারণ → অর্থনৈতিক ব্যাখ্যা", check: "রেখাচিত্রে অক্ষ, রেখার নাম, তীর ও ভারসাম্য বিন্দু স্পষ্টভাবে চিহ্নিত করো।" },
  civics: { method: "ঘটনা থেকে অধিকার/নীতি/প্রতিষ্ঠান শনাক্ত → সংবিধান ও আইনের নীতি প্রয়োগ → জবাবদিহি ও ভারসাম্য বিশ্লেষণ → নাগরিকসম্মত সিদ্ধান্ত", check: "ব্যক্তিগত মতামতের বদলে আইনি, সাংবিধানিক ও প্রাতিষ্ঠানিক যুক্তি ব্যবহার করো।" },
  history: { method: "সময় ও প্রেক্ষাপট নির্ধারণ → কারণ-ঘটনা-ফল সাজানো → উৎসের উৎপত্তি ও সীমাবদ্ধতা যাচাই → একাধিক প্রমাণ মিলিয়ে উপসংহার", check: "তারিখ, ব্যক্তি ও ঘটনার ক্রম যাচাই করো; একটি উৎসের ওপর পুরো সিদ্ধান্ত দাঁড় করিও না।" },
  english: { method: "প্রশ্নের উদ্দেশ্য বোঝো → ইংরেজি উত্তর পরিকল্পনা করো → সঠিক গঠন ও ব্যাকরণ প্রয়োগ করো → সংশোধন ও প্রুফরিড করো", check: "বিষয়বস্তু, সংগঠন, grammar, spelling, punctuation এবং word limit আলাদাভাবে যাচাই করো।" },
  statistics: { method: "তথ্য ও চলক শনাক্ত → সারণি/চিত্র সাজানো → সূত্র নির্বাচন → মান বসিয়ে হিসাব → একক ও ফলের অর্থ ব্যাখ্যা", check: "মোট গণসংখ্যা, শ্রেণিসীমা, প্রতীক, দশমিক, অক্ষের নাম এবং বিকল্প পদ্ধতিতে ফল আবার মিলিয়ে দেখো।" },
};

function buildExamToolkit(subjectId: string, chapter: ChapterPreview, detail: { terms: string[]; core: string }) {
  const name = chapter.titleBn;
  const toolkits: Record<string, { essentials: string[]; mistakes: string[]; scoringMoves: string[] }> = {
    accounting: {
      essentials: ["সম্পদ = দায় + মালিকানা স্বত্ব", "মুনাফা = আয় − ব্যয়", "সমাপনী মূলধন = প্রারম্ভিক মূলধন + অতিরিক্ত মূলধন + মুনাফা − উত্তোলন", `“${name}” অঙ্কে দাখিলা → খতিয়ান/ছক → জের/সমতা—এই ধারাটি বজায় রাখো`],
      mistakes: ["হিসাবের শ্রেণি না বুঝে ডেবিট–ক্রেডিট নির্ধারণ", "টাকার অঙ্ক বা তারিখ এক পাশ থেকে অন্য পাশে ভুল নেওয়া", "কার্যপ্রণালি না দেখিয়ে শুধু চূড়ান্ত উত্তর লেখা", "রেওয়ামিল মিললেই সব ভুল ধরা পড়েছে মনে করা"],
      scoringMoves: ["প্রথমে হিসাবের নাম ও শ্রেণি লেখো", "প্রতিটি হিসাবের কারণসহ ডেবিট/ক্রেডিট দেখাও", "ছকের শিরোনাম, তারিখ ও টাকার একক দাও", "শেষে মোট, জের ও সমতা স্বাধীনভাবে যাচাই করো"],
    },
    finance: {
      essentials: ["সরল সুদ = P × r × n", "ভবিষ্যৎ মূল্য = P(1+r)ⁿ", "বর্তমান মূল্য = FV ÷ (1+r)ⁿ", "ঝুঁকি, আয়, তারল্য, সময় ও নিয়ন্ত্রণ—সিদ্ধান্তের পাঁচ মানদণ্ড"],
      mistakes: ["শতকরা হারকে দশমিকে রূপান্তর না করা", "মাস ও বছরের সময় একক গুলিয়ে ফেলা", "শুধু সর্বোচ্চ আয় দেখে ঝুঁকি উপেক্ষা করা", "অর্থায়নের মেয়াদ ও প্রয়োজনের মেয়াদ না মেলানো"],
      scoringMoves: ["প্রদত্ত তথ্য ও নির্ণেয় মান আলাদা করো", "সূত্র লিখে চলকের মান বসাও", "ফলাফলের আর্থিক অর্থ এক বাক্যে ব্যাখ্যা করো", "সিদ্ধান্তের সঙ্গে অন্তত একটি ঝুঁকি বা সীমাবদ্ধতা দাও"],
    },
    economics: {
      essentials: ["চাহিদা/যোগানের পরিমাণ ও নির্ধারক পরিবর্তন আলাদা করো", "স্থিতিস্থাপকতা = পরিমাণের শতকরা পরিবর্তন ÷ দামের শতকরা পরিবর্তন", "মোট আয় (TR) = দাম × পরিমাণ", "ভারসাম্যে Qd = Qs"],
      mistakes: ["রেখা বরাবর চলাচল ও পুরো রেখার স্থানান্তর এক মনে করা", "গ্রাফে অক্ষ, রেখা ও ভারসাম্য বিন্দুর নাম না লেখা", "ঋণাত্মক চিহ্নের বদলে স্থিতিস্থাপকতার মান ব্যাখ্যা না করা", "অন্যান্য অবস্থা অপরিবর্তিত—এই শর্ত বাদ দেওয়া"],
      scoringMoves: ["প্রথমে কোন চলক বদলেছে তা বলো", "সূত্র/ছক/গ্রাফে ধাপ দেখাও", "কারণ ও ফল আলাদা বাক্যে লেখো", "ফলাফলকে বাজার বা বাংলাদেশের বাস্তব উদাহরণে ব্যাখ্যা করো"],
    },
    business: {
      essentials: ["নীতি → বাস্তব সমস্যা → ব্যবস্থাপনা পদক্ষেপ → প্রত্যাশিত ফল", "কর্তৃত্বের সঙ্গে দায়িত্ব ও জবাবদিহির ভারসাম্য", "পরিকল্পনা → সংগঠন → কর্মীসংস্থান → নির্দেশনা → নিয়ন্ত্রণ", `“${name}” উত্তরে প্রতিষ্ঠানের লক্ষ্য ও অংশীজনের প্রভাব যুক্ত করো`],
      mistakes: ["নীতির নাম লিখে উদ্দীপকে প্রয়োগ না করা", "সমস্যার লক্ষণকে মূল কারণ মনে করা", "অবাস্তব বা পরিমাপহীন সুপারিশ দেওয়া", "সব ব্যবস্থাপনা কাজকে একই স্তরের সিদ্ধান্ত ধরা"],
      scoringMoves: ["উদ্দীপকের সমস্যাটি এক বাক্যে নির্ণয় করো", "প্রাসঙ্গিক ব্যবস্থাপনা নীতির নাম ও অর্থ দাও", "প্রয়োগযোগ্য পদক্ষেপ ও দায়িত্বপ্রাপ্ত ব্যক্তি বলো", "সাফল্য মাপার সূচক দিয়ে সিদ্ধান্ত শেষ করো"],
    },
    civics: {
      essentials: ["অধিকার + দায়িত্ব + আইনের শাসন", "ক্ষমতার পৃথকীকরণ + পারস্পরিক নিয়ন্ত্রণ", "স্বচ্ছতা + জবাবদিহি + অংশগ্রহণ = সুশাসনের ভিত্তি", `“${name}” বিশ্লেষণে সংবিধান, প্রতিষ্ঠান ও নাগরিক প্রভাব একসঙ্গে দেখো`],
      mistakes: ["ব্যক্তিগত মতামতকে সাংবিধানিক ব্যাখ্যা হিসেবে লেখা", "রাষ্ট্র, সরকার ও জাতিকে এক অর্থে ব্যবহার", "অধিকার লিখে সংশ্লিষ্ট দায়িত্ব বাদ দেওয়া", "প্রতিষ্ঠানের নাম লিখে কার্যাবলি ব্যাখ্যা না করা"],
      scoringMoves: ["প্রাসঙ্গিক নীতি বা প্রতিষ্ঠানের পরিচয় দাও", "উদ্দীপকের নির্দিষ্ট কাজ/ঘটনার সঙ্গে নীতি মিলাও", "আইনি ও নাগরিক প্রভাব বিশ্লেষণ করো", "জবাবদিহিমূলক ও বাস্তবসম্মত সিদ্ধান্ত দাও"],
    },
    history: {
      essentials: ["পটভূমি → কারণ → প্রধান ঘটনা → ফলাফল → গুরুত্ব", "উৎসের উৎপত্তি + উদ্দেশ্য + সীমাবদ্ধতা + পারস্পরিক যাচাই", "সময়রেখায় তারিখ, ব্যক্তি, স্থান ও ফল আলাদা রাখো", `“${name}” অধ্যায়ে সমকালীন প্রেক্ষাপট ছাড়া বর্তমানের মানদণ্ড প্রয়োগ কোরো না`],
      mistakes: ["ঘটনার কালানুক্রম গুলিয়ে ফেলা", "একটি উৎস বা ব্যক্তির বক্তব্যকেই চূড়ান্ত সত্য ধরা", "কারণ ও ফলাফল এক তালিকায় মিশিয়ে লেখা", "গুরুত্ব ব্যাখ্যা না করে শুধু ঘটনা বর্ণনা করা"],
      scoringMoves: ["সংক্ষিপ্ত প্রেক্ষাপট দিয়ে উত্তর শুরু করো", "ঘটনা সঠিক ক্রমে এবং কারণসহ সাজাও", "অন্তত দুই ধরনের প্রমাণ বা দৃষ্টিভঙ্গি তুলনা করো", "তাৎক্ষণিক ও দীর্ঘমেয়াদি গুরুত্ব আলাদা করে সিদ্ধান্ত দাও"],
    },
    english: {
      essentials: ["Task, audience, purpose and format আগে শনাক্ত করো", "Paragraph: topic sentence → support → example → closing", "Composition: thesis → reasons → evidence → balanced conclusion", "শেষ ৫ মিনিট grammar, spelling, punctuation ও word limit যাচাই"],
      mistakes: ["প্রশ্নের নির্ধারিত format বাদ দেওয়া", "মুখস্থ লেখা দিয়ে task-এর চাহিদা এড়িয়ে যাওয়া", "একই idea বারবার লেখা", "subject–verb agreement ও tense shift যাচাই না করা"],
      scoringMoves: ["উত্তরের আগে ৩০–৬০ সেকেন্ডের outline করো", "প্রতিটি paragraph-এ একটি controlling idea রাখো", "Linking words স্বাভাবিকভাবে ব্যবহার করো", "শেষে task completion ও language accuracy আলাদা করে check করো"],
    },
  };
  return toolkits[subjectId] ?? {
    essentials: [detail.core, ...detail.terms.slice(0, 3)],
    mistakes: ["প্রশ্নের নির্দেশক শব্দ উপেক্ষা করা", "প্রমাণ ছাড়া সিদ্ধান্ত দেওয়া"],
    scoringMoves: ["ধারণা লেখো", "তথ্য প্রয়োগ করো", "যুক্তিসংগত সিদ্ধান্ত দাও"],
  };
}

function buildIctWorkshop(chapter: ChapterPreview, detail: BanglaChapterDetail): ExamResource["chapterWorkshop"] {
  const common = {
    fiveMinuteRecap: ["বই বন্ধ করে মূল ধারণা, একটি চিত্র/সূত্র এবং একটি বাস্তব প্রয়োগ লিখো।", "একটি পরিচিত ভুল খুঁজে সঠিক নিয়মটি পাশে লেখো।", "একটি নতুন input নিয়ে output অনুমান করে যাচাই করো।"],
    examNightChecklist: ["পরিভাষা পাঠ্যবইয়ের ভাষায় নির্ভুল", "চিত্র/সারণিতে heading ও label সম্পূর্ণ", "রূপান্তর বা code-এ প্রতিটি ধাপ দৃশ্যমান", "শেষ লাইনে ফলের অর্থ বা output লেখা"],
  };
  if (/World and Bangladesh/i.test(chapter.title)) return {
    title: "বিশ্বগ্রাম থেকে বাংলাদেশ · প্রয়োগ ও মূল্যায়ন ল্যাব",
    formulaSheet: ["বিশ্বগ্রাম = দ্রুত যোগাযোগ + তথ্যপ্রবাহ + দূরত্বের বাধা হ্রাস", "প্রযুক্তি মূল্যায়ন = সুবিধা + ঝুঁকি + নৈতিকতা + নিরাপদ ব্যবহার", "Biometrics: unique biological/behavioural trait → capture → template → match", "AI ≠ robot; AI সিদ্ধান্তের যুক্তি, robot ভৌত কাজের যন্ত্র"],
    comparison: { headers:["প্রযুক্তি","কীভাবে কাজ করে","বাংলাদেশে প্রয়োগ"], rows:[["Virtual Reality","computer-generated immersive environment","training ও simulation"],["Biometrics","unique trait দিয়ে পরিচয় যাচাই","জাতীয় পরিচয়/প্রবেশ নিয়ন্ত্রণ"],["Bioinformatics","জীববৈজ্ঞানিক data বিশ্লেষণ","রোগ গবেষণা ও কৃষি"]] },
    visual: { title:"প্রযুক্তি মূল্যায়নের মানচিত্র", steps:["সমস্যা","প্রযুক্তি","data/input","সুবিধা","ঝুঁকি","নৈতিক ও নিরাপদ সিদ্ধান্ত"], caption:"উত্তরে শুধু সুবিধা নয়—privacy, access, ভুল সিদ্ধান্ত এবং দায়িত্বশীল ব্যবহারের কথাও লিখবে।" },
    cqSolution: { stimulus:"একটি উপজেলা হাসপাতালে দূরবর্তী বিশেষজ্ঞের পরামর্শ, biometric পরিচয় এবং AI-ভিত্তিক প্রাথমিক screening চালু হলো।", parts:[{label:"ক",marks:1,answer:"বিশ্বগ্রাম হলো ICT-নির্ভর এমন পরিবেশ যেখানে দূরত্ব অতিক্রম করে মানুষ দ্রুত তথ্য ও সেবা আদান-প্রদান করে।"},{label:"খ",marks:2,answer:"Biometric system ব্যক্তির অনন্য বৈশিষ্ট্য capture করে stored template-এর সঙ্গে মিলিয়ে পরিচয় যাচাই করে; তাই password-এর মতো সহজে ভাগ করা যায় না।"},{label:"গ",marks:3,answer:"উদ্দীপকে telemedicine দূরের বিশেষজ্ঞকে রোগীর তথ্য দিয়ে সেবা দিতে সক্ষম করেছে। এতে যাতায়াত ও সময় কমে, তবে নির্ভরযোগ্য network ও সঠিক clinical data জরুরি।"},{label:"ঘ",marks:4,answer:"সমন্বিত ব্যবস্থাটি দ্রুততা ও access বাড়ায়, কিন্তু biometric ও health data ফাঁস, AI bias এবং ভুল screening-এর ঝুঁকি আছে। Consent, encryption, সীমিত access, human doctor review ও audit নিশ্চিত হলে প্রয়োগটি অধিক গ্রহণযোগ্য।"}] },
    ...common,
    selfCheck:[{question:"AI ও robot কি একই?",explanation:"না। AI সিদ্ধান্ত/শেখার কৌশল; robot sensor ও actuator-সহ ভৌত যন্ত্র—একটি robot AI ব্যবহার করতে পারে।"},{question:"Biometrics-এর প্রধান সতর্কতা কী?",explanation:"Biometric data বদলানো কঠিন; তাই consent, secure template storage ও সীমিত access জরুরি।"}],
  };
  if (/Communication Systems/i.test(chapter.title)) return {
    title:"ডেটা কমিউনিকেশন ও নেটওয়ার্ক ডিজাইন ল্যাব",
    formulaSheet:["Data communication = sender + receiver + message + medium + protocol", "Bandwidth = highest frequency − lowest frequency", "Bit rate: bps; baud rate: signal changes per second", "Simplex: একমুখী · half-duplex: পালাক্রমে দ্বিমুখী · full-duplex: একই সময়ে দ্বিমুখী"],
    comparison:{headers:["বিষয়","কখন ব্যবহার","সিদ্ধান্তের কারণ"],rows:[["Star topology","কেন্দ্রীয় switch-সহ lab","node fault বিচ্ছিন্ন; switch fault গুরুত্বপূর্ণ"],["Optical fibre","উচ্চ গতি ও দীর্ঘ দূরত্ব","কম attenuation, EMI প্রতিরোধ"],["Router","ভিন্ন network যুক্ত করা","IP দেখে packet-এর পথ নির্বাচন"]]},
    visual:{title:"বার্তা পৌঁছানোর পথ",steps:["source","encoder/transmitter","medium","noise","receiver/decoder","destination"],caption:"Network প্রশ্নে device-এর নাম নয়, কোন layer/স্থানে কী কাজ করছে সেটি দেখাও।"},
    cqSolution:{stimulus:"একটি কলেজে ৪০টি computer কেন্দ্রীয় switch-এ যুক্ত; ভবন দুটির মধ্যে fibre এবং Internet ভাগ করতে router ব্যবহৃত।",parts:[{label:"ক",marks:1,answer:"Protocol হলো data communication-এ অনুসৃত নিয়মসমষ্টি।"},{label:"খ",marks:2,answer:"Fibre আলো দিয়ে data বহন করে; তাই electromagnetic interference কম এবং দীর্ঘ দূরত্বে উচ্চ bandwidth পাওয়া যায়।"},{label:"গ",marks:3,answer:"৪০টি node একটি central switch-এ যুক্ত হওয়ায় এটি star topology। একটি cable নষ্ট হলে একটি node বন্ধ হবে, অন্যগুলো সচল থাকবে।"},{label:"ঘ",marks:4,answer:"ভবনের backbone-এ fibre গতি ও reliability দেয়, switch local traffic সামলায় এবং router ভিন্ন network/Internet-এর packet route করে। তবে central switch ও router-এর বিকলতা কমাতে backup power, configuration backup ও access control দরকার।"}]},
    ...common,selfCheck:[{question:"Switch ও router-এর পার্থক্য কী?",explanation:"Switch একই LAN-এ frame পাঠায়; router ভিন্ন network-এর মধ্যে IP packet-এর পথ বেছে নেয়।"},{question:"Full-duplex-এর পরিচিত উদাহরণ?",explanation:"Telephone call—দুই পক্ষ একই সময়ে পাঠাতে ও গ্রহণ করতে পারে।"}],
  };
  if (/Number Systems/i.test(chapter.title)) return {
    title:"সংখ্যা রূপান্তর, Boolean algebra ও logic circuit lab",
    formulaSheet:["(101101)₂ = 1×2⁵+0×2⁴+1×2³+1×2²+0×2¹+1×2⁰ = (45)₁₀", "2's complement = bit invert + 1", "A + A = A; A·A = A; A + A̅ = 1; A·A̅ = 0", "De Morgan: (A+B)̅=A̅·B̅ এবং (A·B)̅=A̅+B̅"],
    comparison:{headers:["পদ্ধতি/ডিভাইস","মূল নিয়ম","দ্রুত যাচাই"],rows:[["Binary→Octal","ডান দিক থেকে ৩ bit group","প্রতি group 0–7"],["Binary→Hex","ডান দিক থেকে ৪ bit group","10–15 = A–F"],["Half adder","Sum=A⊕B, Carry=A·B","চার input row-এর truth table"]]},
    visual:{title:"Digital solution route",steps:["base/variable শনাক্ত","group বা truth table","ধাপে কাজ","circuit/ফল","reverse check"],caption:"শুধু final answer নয়—base subscript, grouping, carry/complement এবং truth-table row দেখাও।"},
    cqSolution:{stimulus:"একটি digital counter-এ (2D)₁₆ মানটি binary-তে যায় এবং দুটি bit যোগে sum ও carry তৈরি হয়।",parts:[{label:"ক",marks:1,answer:"Hexadecimal সংখ্যা পদ্ধতির base 16।"},{label:"খ",marks:2,answer:"Hex-এর প্রতিটি digit ঠিক 4 bit binary দিয়ে প্রকাশ করা যায়, কারণ 16=2⁴; তাই conversion সরাসরি grouping-এ হয়।"},{label:"গ",marks:3,answer:"2=(0010)₂ এবং D=(1101)₂; তাই (2D)₁₆=(00101101)₂=(45)₁₀।"},{label:"ঘ",marks:4,answer:"দুটি bit-এর sum পেতে XOR এবং carry পেতে AND লাগে: S=A⊕B, C=A·B। Truth table: 00→00, 01→10, 10→10, 11→01 (ক্রম S,C নয়; C,S লিখলে 11→11? তাই column heading স্পষ্ট রাখতে হবে)।"}]},
    ...common,selfCheck:[{question:"(11111111)₂-এর hexadecimal কত?",explanation:"চার bit করে 1111 1111 = F F, তাই (FF)₁₆।"},{question:"NAND universal gate কেন?",explanation:"শুধু NAND দিয়ে NOT, AND ও OR তৈরি করা যায়; ফলে যেকোনো Boolean circuit বাস্তবায়ন সম্ভব।"}],
  };
  if (/Web Design|HTML/i.test(chapter.title)) return {
    title:"HTML build, output prediction ও debugging lab",
    formulaSheet:["Element = opening tag + content + closing tag", "Attribute opening tag-এ name=\"value\" আকারে লেখা হয়", "Relative link একই site-এর path; absolute link পূর্ণ URL", "Table: table → tr → th/td; list: ol/ul → li"],
    comparison:{headers:["HTML অংশ","কাজ","ভুল হলে কী দেখবে"],rows:[["head","metadata, title, charset","visible content এখানে রেখো না"],["body","browser-এ দৃশ্যমান content","semantic order ও nesting"],["img","src দিয়ে ছবি, alt দিয়ে অর্থ","path ও alternative text"]]},
    visual:{title:"Webpage নির্মাণ",steps:["content plan","semantic structure","text/link/media","table/form","browser test","validate ও fix"],caption:"Code-এর সঙ্গে expected output লিখবে; tag pair, nesting, path ও attribute আলাদাভাবে পরীক্ষা করবে।"},
    cqSolution:{stimulus:"এক শিক্ষার্থী timetable দেখাতে table লিখেছে, কিন্তু row-এর বাইরে td রেখেছে এবং ছবিতে alt দেয়নি।",parts:[{label:"ক",marks:1,answer:"HTML-এর পূর্ণরূপ HyperText Markup Language।"},{label:"খ",marks:2,answer:"alt ছবির বিকল্প অর্থ দেয়; ছবি load না হলে এবং screen reader ব্যবহারে content বোঝা যায়।"},{label:"গ",marks:3,answer:"সঠিক nesting: <table><tr><th>দিন</th><th>বিষয়</th></tr><tr><td>রবি</td><td>ICT</td></tr></table>। প্রতিটি th/td অবশ্যই tr-এর ভেতরে থাকবে।"},{label:"ঘ",marks:4,answer:"Structure ঠিক করার সঙ্গে <caption>, meaningful headings, alt text, label-for/id এবং keyboard-friendly controls যোগ করতে হবে। Browser test ও validator দিয়ে nesting/path error ধরলে page কার্যকর ও accessible হবে।"}]},
    ...common,selfCheck:[{question:"<title> কোথায় এবং কী করে?",explanation:"head-এর মধ্যে থাকে; browser tab/bookmark-এর নাম নির্ধারণ করে, page body-তে heading দেখায় না।"},{question:"table-এ td কোথায় থাকবে?",explanation:"td বা th সবসময় একটি tr-এর child; tr আবার table-এর ভেতরে থাকে।"}],
  };
  if (/Programming Language/i.test(chapter.title)) return {
    title:"Algorithm, C code, trace ও debugging lab",
    formulaSheet:["Problem → algorithm → flowchart → code → compile → run → test/debug", "if(condition){...} else {...}", "for(initialisation; condition; update){...}", "Array index C-তে 0 থেকে শুরু; n element-এর শেষ index n−1"],
    comparison:{headers:["Structure","কখন ব্যবহার","trace check"],rows:[["if–else","দুই বা একাধিক সিদ্ধান্ত","কোন condition true"],["for loop","পুনরাবৃত্তির সংখ্যা জানা","initial, condition, update"],["while loop","শর্তসাপেক্ষ অজানা পুনরাবৃত্তি","loop-এর আগে condition"]]},
    visual:{title:"Program solve route",steps:["input/output নির্ধারণ","algorithm","flowchart","C code","dry run table","boundary test ও debug"],caption:"Code মুখস্থ নয়—variable-এর প্রতিটি পরিবর্তন trace table-এ দেখালে logic error সহজে ধরা যায়।"},
    cqSolution:{stimulus:"১ থেকে n পর্যন্ত জোড় সংখ্যার যোগফল বের করার program-এ sum initialize করা হয়নি এবং loop i=1 থেকে চলছে।",parts:[{label:"ক",marks:1,answer:"Algorithm হলো সমস্যা সমাধানের সসীম ও ধারাবাহিক ধাপসমষ্টি।"},{label:"খ",marks:2,answer:"sum initialize না করলে এতে অনির্ধারিত মান থাকতে পারে; ফলে output নির্ভরযোগ্য হয় না। তাই int sum=0; লিখতে হবে।"},{label:"গ",marks:3,answer:"for(i=2;i<=n;i=i+2) sum=sum+i; ব্যবহার করলে কেবল জোড় মান যোগ হবে। n=6 হলে sum: 0→2→6→12।"},{label:"ঘ",marks:4,answer:"পূর্ণ solution-এ n input, sum=0, even-step loop ও final output থাকবে। n=0, n=1, n=2 এবং বড় মান দিয়ে boundary test; invalid negative input আলাদা handle; trace ও expected result মিলিয়ে logic যাচাই করতে হবে।"}]},
    ...common,selfCheck:[{question:"Syntax error ও logic error-এর পার্থক্য?",explanation:"Syntax error compiler ধরতে পারে; logic error-এ program চলে কিন্তু ভুল ফল দেয়—test ও trace দরকার।"},{question:"for loop-এর তিন অংশ কী?",explanation:"initialisation, condition এবং update; body প্রতিবার condition সত্য হলে চলে।"}],
  };
  return {
    title:"Database design, query ও SQL lab",
    formulaSheet:["Table = rows(records) + columns(fields)", "Primary key: unique + not null", "Foreign key অন্য table-এর primary key-কে reference করে", "SELECT field FROM table WHERE condition;"],
    comparison:{headers:["Database অংশ","কাজ","উদাহরণ"],rows:[["Primary key","record uniquely identify","student_id"],["Foreign key","table relationship তৈরি","class_id"],["Query","শর্তে data খোঁজা/সাজানো","marks>=80"]]},
    visual:{title:"Database নির্মাণ",steps:["requirement","entity ও field","key","relationship","table/data type","query, validation, backup"],caption:"এক table-এ সব data গুঁজে দিও না; duplicate data, update anomaly ও relationship আগে চিনে নাও।"},
    cqSolution:{stimulus:"Student(student_id,name,class_id) এবং Class(class_id,class_name) table থেকে 80 বা বেশি নম্বর পাওয়া শিক্ষার্থী খুঁজতে হবে।",parts:[{label:"ক",marks:1,answer:"DBMS হলো database তৈরি, সংরক্ষণ, অনুসন্ধান, হালনাগাদ ও নিয়ন্ত্রণের software system।"},{label:"খ",marks:2,answer:"Primary key প্রতিটি record-কে unique করে; duplicate ও null না থাকায় নির্ভরযোগ্যভাবে record শনাক্ত করা যায়।"},{label:"গ",marks:3,answer:"Student-এর student_id primary key এবং class_id foreign key; Class-এর class_id primary key। class_id দিয়ে দুই table-এর relationship তৈরি হবে।"},{label:"ঘ",marks:4,answer:"Marks table থাকলে query হতে পারে: SELECT s.student_id,s.name,m.mark FROM Student s JOIN Marks m ON s.student_id=m.student_id WHERE m.mark>=80; সঙ্গে data type, referential integrity, access control ও backup নিশ্চিত করতে হবে।"}]},
    ...common,selfCheck:[{question:"Record ও field-এর পার্থক্য?",explanation:"একটি row হলো একটি entity-এর record; একটি column হলো একই ধরনের attribute বা field।"},{question:"Foreign key কী নিশ্চিত করে?",explanation:"সম্পর্কিত table-এর record reference করে referential integrity বজায় রাখে।"}],
  };
}

function buildAccountingWorkshop(chapter: ChapterPreview, detail: BanglaChapterDetail): ExamResource["chapterWorkshop"] {
  type AccountingLab = { formulas:string[]; rows:[string,string,string][]; steps:string[]; stimulus:string; application:string; check:string };
  const labs: Record<string,AccountingLab> = {
    "Introduction to Accounting": { formulas:["সম্পদ = দায় + মালিকানা স্বত্ব","মালিকানা স্বত্ব = মূলধন + আয় − ব্যয় − উত্তোলন","প্রতিটি লেনদেনে সমীকরণের অন্তত দুটি উপাদান প্রভাবিত হয়"],rows:[["নগদে মূলধন","নগদ ↑ · মূলধন ↑","দুই পাশ সমান বৃদ্ধি"],["ধারে পণ্য ক্রয়","সম্পদ ↑ · দায় ↑","নগদ অপরিবর্তিত"],["বকেয়া ব্যয়","ব্যয় ↑ · দায় ↑","স্বত্ব কমে"]],steps:["লেনদেন শনাক্ত","হিসাবের নাম","শ্রেণি","বৃদ্ধি/হ্রাস","সমীকরণে প্রভাব","দুই পাশ মিল"],stimulus:"মালিক ১,৫০,০০০ টাকা বিনিয়োগ করলেন; ৩০,০০০ টাকার আসবাব নগদে এবং ২০,০০০ টাকার পণ্য ধারে কিনলেন।",application:"প্রতিটি ঘটনার সম্পদ, দায় ও মালিকানা স্বত্বের পরিবর্তন দেখিয়ে শেষ সমীকরণ প্রস্তুত করো।",check:"শেষে মোট সম্পদ ও দায়+স্বত্ব উভয় পাশ সমান হতে হবে।"},
    "Books of Accounts": { formulas:["সম্পদ/ব্যয় বৃদ্ধি → Debit; দায়/মূলধন/আয় বৃদ্ধি → Credit","Journal → Ledger → Balance","নগদান বই একই সঙ্গে journal ও cash ledger"],rows:[["জাবেদা","তারিখ·হিসাব·অঙ্ক·ব্যাখ্যা","Dr=Cr"],["খতিয়ান","হিসাবভিত্তিক posting","বিপরীত হিসাব ও folio"],["নগদান বই","cash/bank receipt-payment","credit cash balance নয়"]],steps:["উৎস দলিল","লেনদেন বিশ্লেষণ","জাবেদা","খতিয়ান posting","জের","রেওয়ামিল"],stimulus:"রাফি ট্রেডার্স নগদে পণ্য ক্রয়, ধারে বিক্রয়, পাওনাদারের টাকা পরিশোধ এবং দেনাদারের কাছ থেকে বাট্টাসহ টাকা পেল।",application:"জাবেদা, প্রয়োজনীয় খতিয়ান ও নগদান বইয়ের ধারাবাহিকতা দেখাও।",check:"প্রতিটি journal entry-এর দুই পাশ ledger-এ post হয়েছে এবং cash balance বাস্তবসম্মত কি না মিলাও।"},
    "Bank Reconciliation Statement": { formulas:["Adjusted cash-book balance ↔ bank statement balance","Unpresented cheque: bank statement সাধারণত cash book-এর চেয়ে বেশি","Uncredited deposit: bank statement সাধারণত cash book-এর চেয়ে কম"],rows:[["Bank charge","cash book-এ আগে নেই","cash book কমাও"],["Direct deposit","cash book-এ আগে নেই","cash book বাড়াও"],["Issued cheque not presented","bank statement-এ কমেনি","reconciliation item"]],steps:["দুই balance শনাক্ত","cash-book error/update","timing difference","যোগ-বিয়োগ","target balance","recheck"],stimulus:"নগদান বইয়ের ব্যাংক জের ৪৮,০০০ টাকা; ১২,০০০ টাকার cheque উপস্থাপিত হয়নি, ৫,০০০ টাকার deposit credit হয়নি এবং ৮০০ টাকা bank charge অজানা ছিল।",application:"আগে cash book সংশোধন, পরে reconciliation statement প্রস্তুত করো।",check:"একটি item cash-book correction ও reconciliation—দুই জায়গায় যেন না আসে।"},
    "Trial Balance": { formulas:["মোট Debit balance = মোট Credit balance","Suspense account = সাময়িক অসমতার পার্থক্য","Trial balance agreement ≠ error-free accounts"],rows:[["One-sided posting","trial balance অমিল","suspense/rectification"],["Complete omission","trial balance মিলতে পারে","source document audit"],["Error of principle","trial balance মিলতে পারে","classification review"]],steps:["ledger balance","Dr/Cr শ্রেণি","trial balance","difference","error locate","rectification ও revised balance"],stimulus:"রেওয়ামিলে ৩,৬০০ টাকা অমিল; একটি purchase return credit হয়নি এবং ১,৮০০ টাকার rent দুইবার debit হয়েছে।",application:"ভুলের প্রভাব, suspense account এবং সংশোধিত রেওয়ামিল দেখাও।",check:"Correction entry-এর পরে suspense account শূন্য এবং trial balance সমান হওয়া উচিত।"},
    "Principles of Accounting": { formulas:["Matching: একই period-এর revenue-এর সঙ্গে সংশ্লিষ্ট expense","Accrual: cash নয়, earned/incurred সময়ে স্বীকৃতি","Consistency: পদ্ধতি বদলালে কারণ ও প্রভাব disclose"],rows:[["Business entity","মালিক ও ব্যবসা পৃথক","personal withdrawal = drawings"],["Going concern","চলমান কার্যক্রম ধারণা","forced-sale value নয়"],["Conservatism","অনিশ্চিত loss সতর্ক স্বীকৃতি","গোপন reserve নয়"]],steps:["ঘটনা","প্রযোজ্য নীতি","স্বীকৃতির সময়","measurement","entry/presentation","disclosure"],stimulus:"বছরশেষে বেতন বকেয়া, অগ্রিম insurance এবং doubtful debt estimate আছে; প্রতিষ্ঠান হঠাৎ inventory method বদলেছে।",application:"প্রতিটি item-এর নীতি, adjustment এবং disclosure ব্যাখ্যা করো।",check:"নীতি প্রয়োগে আয়-ব্যয় ও সম্পদ-দায়ের period সঠিক হয়েছে কি না দেখো।"},
    "Accounting for Receivables": { formulas:["Interest = Principal × Rate × Time","Net realisable value = Accounts receivable − Allowance","Maturity value = Principal + Interest"],rows:[["Direct write-off","loss জানা গেলে expense","matching দুর্বল"],["Allowance method","আগে estimate","NRV উপস্থাপন"],["Note dishonoured","note পুনরায় receivable","interest/charge যোগ"]],steps:["receivable classify","age/risk","allowance or note","journal","interest/maturity","NRV ও disclosure"],stimulus:"বছরশেষে দেনাদার ২,০০,০০০ টাকা; ৫% সন্দেহজনক দেনা সঞ্চিতি এবং ৫০,০০০ টাকার ১২% তিন মাসের note receivable আছে।",application:"সঞ্চিতি, note interest ও balance-sheet presentation নির্ণয় করো।",check:"Percentage base, time fraction এবং existing allowance balance ঠিকভাবে নেওয়া হয়েছে কি না মিলাও।"},
    "Worksheet": { formulas:["Adjusted trial balance = unadjusted balance ± adjustment","Net income: income statement credit > debit","Worksheet is a working paper, not a formal account"],rows:[["Accrued expense","expense Dr · payable Cr","IS debit + BS credit"],["Prepaid used","expense Dr · prepaid Cr","IS debit + BS credit reduction"],["Depreciation","expense Dr · accumulated dep. Cr","IS debit + BS credit"]],steps:["unadjusted TB","adjustments","adjusted TB","income statement columns","balance-sheet columns","net income/loss ও totals"],stimulus:"রেওয়ামিলের সঙ্গে বকেয়া বেতন, ব্যবহৃত insurance ও depreciation adjustment দিয়ে ১০-কলাম কার্যপত্র তৈরি করতে হবে।",application:"প্রতিটি adjustment দুই কলামে বসিয়ে adjusted balance এবং net income transfer দেখাও।",check:"প্রতিটি column pair সমান এবং net income দুই বিপরীত পাশে বসেছে কি না দেখো।"},
    "Accounting for Tangible and Intangible Assets": { formulas:["SL depreciation = (Cost − Residual value) ÷ Useful life","WDV depreciation = Opening book value × Rate","Book value = Cost − Accumulated depreciation"],rows:[["Capital expenditure","future benefit","asset cost"],["Revenue expenditure","current-period benefit","expense"],["Disposal","cash + accumulated dep. বনাম cost","gain/loss"]],steps:["cost components","useful life/residual","method","partial period","accumulated depreciation","disposal ও carrying amount"],stimulus:"যন্ত্রের invoice ৫,০০,০০০, installation ২৫,০০০, residual ২৫,০০০ এবং life ৫ বছর; দুই বছর পরে ৩,৫০,০০০ টাকায় বিক্রি।",application:"সম্পদের cost, বার্ষিক depreciation, disposal date book value ও gain/loss নির্ণয় করো।",check:"Installation capitalised এবং disposal পর্যন্ত depreciation নেওয়া হয়েছে কি না দেখো।"},
    "Financial Statements": { formulas:["COGS = Opening inventory + Net purchases + Direct expenses − Closing inventory","Gross profit = Net sales − COGS","Closing capital = Opening capital + profit + additional capital − drawings"],rows:[["Trading section","gross profit","sales ও COGS"],["Income statement","net profit","operating income/expense"],["Financial position","asset-liability-equity","classified balances"]],steps:["trial balance","adjustments","COGS","income statement","owner's equity","statement of financial position"],stimulus:"রেওয়ামিলের সঙ্গে closing inventory, outstanding wages, prepaid insurance ও depreciation দেওয়া আছে।",application:"adjustment working দেখিয়ে সম্পূর্ণ financial statements প্রস্তুত করো।",check:"একটি adjustment-এর income-statement ও balance-sheet—দুই প্রভাবই এসেছে কি না যাচাই করো।"},
    "Single Entry System": { formulas:["Profit = Closing capital + Drawings − Additional capital − Opening capital","Capital = Assets − Liabilities","Credit sales = Closing debtors + Cash received + Returns/discount/bad debt − Opening debtors"],rows:[["Statement of affairs","capital estimate","incomplete records"],["Debtors control","credit sales বের করা","missing figure"],["Cash summary","cash/bank movement","unknown receipt/payment"]],steps:["opening affairs","closing affairs","capital adjustments","control accounts","cash summary","profit ও final statements"],stimulus:"অসম্পূর্ণ হিসাব থেকে opening/closing assets-liabilities, drawings, new capital ও debtors তথ্য দেওয়া আছে।",application:"capital comparison এবং control account দিয়ে profit নির্ণয় করো।",check:"Drawings যোগ ও additional capital বিয়োগের দিক সঠিক এবং missing figure independently checked কি না দেখো।"},
    "Accounts of Non-profit Organisations": { formulas:["Subscription income = cash received + closing due − opening due − closing advance + opening advance","Consumables used = opening stock + purchases − closing stock","Surplus/deficit = revenue income − revenue expenditure"],rows:[["Receipts & payments","cash basis","capital+revenue সব cash"],["Income & expenditure","accrual basis","শুধু revenue items"],["Special fund","restricted purpose","related income/expense fund-এ"]],steps:["cash statement","item classify","subscription working","consumables/depreciation","income-expenditure","closing financial position"],stimulus:"একটি club-এর subscription received, outstanding/advance subscription, sports fund, equipment purchase ও consumables stock দেওয়া আছে।",application:"subscription income, fund treatment, income-expenditure account ও financial position প্রস্তুত করো।",check:"Capital receipt income হিসেবে যায়নি এবং restricted fund-এর ব্যয় সঠিক fund-এ সমন্বিত হয়েছে কি না দেখো।"},
    "Partnership Accounts": { formulas:["Residual profit = Net profit − interest on capital − salary/commission + interest on drawings","Sacrificing ratio = Old ratio − New ratio","Gaining ratio = New ratio − Old ratio"],rows:[["Fixed capital","capital স্থির","current account আলাদা"],["Fluctuating capital","সব adjustment capital-এ","একটি capital account"],["Goodwill adjustment","sacrifice/gain অনুযায়ী","old/new partner compensation"]],steps:["deed read","appropriation items","capital method","profit distribution","goodwill/revaluation","admission/retirement balance"],stimulus:"A ও B 3:2 অনুপাতে লাভ ভাগ করে; capital interest, partner salary, drawings interest ও নতুন partner admission-এর তথ্য আছে।",application:"appropriation account, partners' capital/current accounts এবং goodwill adjustment প্রস্তুত করো।",check:"Appropriation-এর পরে distributed residual profit partners' ratio-তে হয়েছে এবং total capital reconciliation মিলেছে কি না দেখো।"},
    "Cash Flow Statement": { formulas:["Net cash change = CFO + CFI + CFF","Closing cash = Opening cash + Net cash change","Indirect CFO = Net profit + non-cash expense ± working-capital changes"],rows:[["Operating","মূল revenue activities","customer/supplier or indirect"],["Investing","long-term asset/investment","purchase/sale"],["Financing","capital ও borrowing","issue/repayment/dividend"]],steps:["comparative statements","classify","CFO working","CFI","CFF","net change ও cash reconciliation"],stimulus:"Comparative balance sheets-এ receivables, inventory, payable, plant, loan ও share capital পরিবর্তন; depreciation ও asset-sale তথ্য আছে।",application:"indirect method-এ তিন activity-এর cash flow এবং closing cash reconciliation প্রস্তুত করো।",check:"Non-cash transaction cash flow-তে ঢোকেনি এবং asset sale-এ full proceeds investing-এ গেছে কি না দেখো।"},
    "Share Capital of Joint-stock Companies": { formulas:["Issued capital = shares issued × face value","Securities premium = issue shares × premium per share","Capital reserve on reissue = forfeiture credit − reissue discount"],rows:[["Application","cash received","application account credit"],["Allotment/call","amount due","share capital/premium credit"],["Forfeiture/reissue","default ও পুনঃইস্যু","capital reserve limit"]],steps:["issue terms","application","allotment","calls","arrears/advance","forfeiture ও reissue"],stimulus:"১০,০০০ share-এর issue-এ oversubscription, pro-rata allotment, একজন shareholder-এর call default ও forfeited share reissue হয়েছে।",application:"application থেকে reissue পর্যন্ত journal entries ও capital reserve নির্ণয় করো।",check:"Share capital কেবল called-up face value এবং premium আলাদা credit হয়েছে কি না দেখো।"},
    "Company Financial Statements": { formulas:["Profit after tax = Profit before tax − tax expense","Retained earnings closing = opening + PAT − dividend − transfer","Equity = share capital + premium/reserves + retained earnings"],rows:[["Statement of profit or loss","period performance","tax পর্যন্ত"],["Changes in equity","owner-related movement","issue/dividend/reserve"],["Financial position","classified balances","current/non-current"]],steps:["adjusted balances","income statement","tax","retained earnings","equity changes","financial position ও notes"],stimulus:"একটি company trial balance-এর সঙ্গে tax, depreciation, proposed/paid dividend ও reserve transfer information আছে।",application:"profit statement, retained earnings/equity change এবং statement of financial position প্রস্তুত করো।",check:"Dividend-এর সঠিক period ও tax liability presentation মিলিয়ে দেখো।"},
    "Financial Statement Analysis": { formulas:["Current ratio = Current assets ÷ Current liabilities","Quick ratio = (CA − Inventory − Prepaid) ÷ CL","Net profit margin = Net profit ÷ Net sales × 100","Inventory turnover = COGS ÷ Average inventory"],rows:[["Liquidity","short-term payment","current/quick ratio"],["Profitability","earning efficiency","margin/return"],["Activity","asset use","turnover ratios"]],steps:["comparable data","formula","average where needed","calculation","trend/benchmark","cause, limit ও decision"],stimulus:"দুই বছরের sales, profit, inventory, receivables, current assets ও liabilities দিয়ে ratio trend বিশ্লেষণ করতে হবে।",application:"liquidity, profitability ও efficiency ratio হিসাব করে improvement/deterioration ব্যাখ্যা করো।",check:"Ratio-এর numerator-denominator একই period/average basis এবং সিদ্ধান্তে industry/quality limitation উল্লেখ আছে কি না দেখো।"},
    "Cost Accounting": { formulas:["Prime cost = Direct material + Direct labour + Direct expense","Factory cost = Prime cost + Factory overhead + Opening WIP − Closing WIP","COGM = Factory cost + Administration overhead related to production","COGS = Opening finished goods + COGM − Closing finished goods"],rows:[["Direct material","product-এ traceable","prime cost"],["Factory overhead","indirect production cost","conversion cost"],["WIP adjustment","অসম্পূর্ণ উৎপাদন","factory cost"]],steps:["cost classify","material used","prime cost","factory overhead","WIP adjustment","COGM/COGS ও unit cost"],stimulus:"Raw material, carriage inward, direct wages, indirect material, factory rent, WIP ও finished-goods balances দেওয়া আছে।",application:"cost of production statement ও unit cost প্রস্তুত করো।",check:"Selling/admin non-production cost factory cost-এ ঢোকেনি এবং stock adjustments সঠিক দিক হয়েছে কি না দেখো।"},
    "Inventory Valuation Methods": { formulas:["FIFO: earliest cost issued first","Weighted average rate = Cost available ÷ Units available","COGS + Closing inventory = Cost of goods available"],rows:[["FIFO","পুরোনো layer আগে issue","ending stock recent cost"],["Periodic weighted average","period শেষে এক average","সব issue same rate"],["Moving average","প্রতি purchase-এর পরে average","perpetual ledger"]],steps:["opening layer","purchase/return","available units-cost","issue rule","closing layers","COGS ও reconciliation"],stimulus:"Opening stock ও তিনটি ভিন্ন দামের purchase-এর মধ্যে দুইবার issue এবং একটি purchase return হয়েছে।",application:"FIFO ও moving weighted average stores ledger তৈরি করে COGS ও closing stock তুলনা করো।",check:"প্রতি issue-এর আগে available quantity এবং শেষে quantity×rate layers মোট cost-এর সঙ্গে মিলেছে কি না দেখো।"},
    "Cost and Cost Classification": { formulas:["Total cost = Fixed cost + Variable cost","Variable cost per unit সাধারণত activity range-এ স্থির","Relevant cost = future cost that differs between alternatives"],rows:[["Product cost","inventory-তে যায়","DM+DL+production OH"],["Period cost","বর্তমান period expense","selling/admin"],["Opportunity cost","ত্যাগ করা সেরা বিকল্প","book entry নাও থাকতে পারে"]],steps:["cost item","traceability","function","behaviour","product/period","decision relevance"],stimulus:"একটি factory-র material, supervisor salary, machine power, office rent, sales commission এবং unused-capacity alternative দেওয়া আছে।",application:"প্রতিটি cost বহু ভিত্তিতে classify করে decision-এর relevant costs আলাদা করো।",check:"একই cost ভিন্ন উদ্দেশ্যে ভিন্ন class হতে পারে—classification basis লেখা হয়েছে কি না দেখো।"},
    "Introduction to Management Accounting": { formulas:["Decision = relevant quantitative information + qualitative factors","Variance = Actual − Budget (sign-এর অর্থ context অনুযায়ী)","Management accounting is forward-looking and internally focused"],rows:[["Financial accounting","external, historical","regulated statements"],["Cost accounting","cost ascertainment/control","cost records"],["Management accounting","planning/decision/control","tailored internal reports"]],steps:["decision objective","relevant data","alternative","quantitative analysis","qualitative/ethical factors","recommendation ও control"],stimulus:"একটি প্রতিষ্ঠান spare capacity-তে special order নেবে কি না সিদ্ধান্ত নিচ্ছে; offered price, variable cost, avoidable fixed cost ও regular market impact দেওয়া আছে।",application:"relevant cost analysis করে order গ্রহণ/বর্জনের শর্তযুক্ত সিদ্ধান্ত দাও।",check:"Sunk/unavoidable cost বাদ, opportunity cost অন্তর্ভুক্ত এবং qualitative risk আলোচনা হয়েছে কি না দেখো।"},
  };
  const lab=labs[chapter.title] ?? { formulas:["সম্পদ = দায় + মালিকানা স্বত্ব","Debit মোট = Credit মোট"],rows:[[detail.terms[0]??chapter.titleBn,"হিসাবের প্রকৃতি","কার্য ও যাচাই"]],steps:["তথ্য","শ্রেণি","নিয়ম","কার্য","ফল","যাচাই"],stimulus:detail.example,application:"প্রদত্ত তথ্য ছক ও কার্যসহ সমাধান করো।",check:"হিসাবের দুই পাশ, মোট ও presentation মিলাও।" };
  return { title:`${chapter.titleBn} · পূর্ণ হিসাব অনুশীলন`, formulaSheet:lab.formulas,comparison:{headers:["বিষয়","হিসাবের অর্থ/প্রভাব","পরীক্ষায় যাচাই"],rows:lab.rows},visual:{title:"সমাধানের কার্যপ্রবাহ",steps:lab.steps,caption:lab.check},cqSolution:{stimulus:lab.stimulus,parts:[{label:"ক",marks:1,answer:`${detail.terms[0]??chapter.titleBn}-এর নির্ভুল সংজ্ঞা বা সূত্র লেখো।`},{label:"খ",marks:2,answer:`প্রযোজ্য নিয়মটি ব্যাখ্যা করো এবং কেন এই পরিস্থিতিতে ব্যবহার হবে তা হিসাবের প্রকৃতি দিয়ে বোঝাও।`},{label:"গ",marks:3,answer:`${lab.application} সূত্র, মান প্রতিস্থাপন, জাবেদা বা ছকের প্রয়োজনীয় ধাপ বাদ দেবে না।`},{label:"ঘ",marks:4,answer:`ফলটি ${lab.check} এরপর বিকল্প treatment, আর্থিক বিবরণীর প্রভাব এবং সিদ্ধান্তের সীমাবদ্ধতা বিশ্লেষণ করো।`}]},fiveMinuteRecap:["মূল সূত্র বা format না দেখে লেখো","একটি item-এর classification ও debit-credit বলো","একটি working note সম্পূর্ণ করো","সবচেয়ে সাধারণ ভুলটি সংশোধন করো","final answer-এর cross-check বলো"],examNightChecklist:["হিসাবের নাম ও classification ঠিক","সূত্রে সময়/হার/average ঠিক","working note ও adjustment দৃশ্যমান","Debit-Credit/statement totals মিলে","final result-এর অর্থ ও presentation সম্পূর্ণ"],selfCheck:[{question:"Final answer পেলেই কি পূর্ণ নম্বর?",explanation:"না। সূত্র, working, adjustment, format ও cross-check দৃশ্যমান না হলে ধাপের নম্বর হারাবে।"},{question:"একটি adjustment কোথায় কোথায় প্রভাব ফেলতে পারে?",explanation:"সাধারণত আয়-ব্যয় এবং সম্পদ-দায়/স্বত্ব—দুই জায়গায়; chapter-এর format অনুযায়ী উভয় প্রভাব দেখাতে হবে।"}]};
}

function buildFinanceWorkshop(chapter: ChapterPreview, detail: BanglaChapterDetail): ExamResource["chapterWorkshop"] {
  type FinanceLab = { formulas:string[]; rows:[string,string,string][]; steps:string[]; stimulus:string; task:string; check:string };
  const title = chapter.title;
  const profiles: Record<string,FinanceLab> = {
    "Introduction to Finance":{formulas:["সম্পদ সর্বাধিককরণ = দীর্ঘমেয়াদি cash flow, সময় ও ঝুঁকির সমন্বিত মূল্য","Financing decision + Investment decision + Dividend decision"],rows:[["ব্যক্তিগত অর্থায়ন","আয়–ব্যয়–সঞ্চয়","লক্ষ্য ও সামর্থ্য"],["ব্যবসায় অর্থায়ন","তহবিল সংগ্রহ ও ব্যবহার","ব্যয়–ঝুঁকি–নিয়ন্ত্রণ"],["সরকারি অর্থায়ন","রাজস্ব, ব্যয় ও ঋণ","জনকল্যাণ ও স্থিতিশীলতা"]],steps:["লক্ষ্য","সময়","cash need","উৎস","ব্যয় ও ঝুঁকি","সিদ্ধান্ত"],stimulus:"একটি ক্ষুদ্র প্রতিষ্ঠান নতুন যন্ত্র কিনবে; নিজস্ব সঞ্চয়, ব্যাংকঋণ ও নতুন অংশীদার—তিন বিকল্প আছে।",task:"তিন অর্থায়ন বিকল্পকে ব্যয়, মেয়াদ, নগদপ্রবাহ, ঝুঁকি ও নিয়ন্ত্রণে তুলনা করো।",check:"প্রয়োজনের মেয়াদ ও অর্থের উৎসের মেয়াদ মিলেছে কি না দেখো।"},
    "Legal Aspects of Financial Markets":{formulas:["Primary market: নতুন security issue","Secondary market: বিদ্যমান security-এর লেনদেন","Disclosure + fair dealing + investor protection = বাজারের আস্থার ভিত্তি"],rows:[["Money market","স্বল্পমেয়াদি তহবিল","তারল্য"],["Capital market","দীর্ঘমেয়াদি debt/equity","বিনিয়োগ ও capital formation"],["Primary বনাম secondary","issue বনাম trading","issuer proceeds কোথায় যায়"]],steps:["security","issuer","market type","intermediary","disclosure","investor remedy"],stimulus:"একটি কোম্পানি প্রথমবার share ছাড়ছে এবং পরে stock exchange-এ সেই share লেনদেন হচ্ছে।",task:"দুটি পর্যায়ের বাজার, সংশ্লিষ্ট পক্ষ, disclosure এবং investor protection আলাদা করো।",check:"আইন বা বর্তমান হার উদ্ভাবন না করে প্রশ্নে দেওয়া বিধান ব্যবহার করো।"},
    "Time Value of Money":{formulas:["FV = P(1+r)ⁿ","PV = FV/(1+r)ⁿ","FV annuity = A[((1+r)ⁿ−1)/r]","PV annuity = A[1−(1+r)⁻ⁿ]/r"],rows:[["Single sum","একটি cash flow","একটি compounding path"],["Ordinary annuity","period শেষে কিস্তি","nটি সমান cash flow"],["Annuity due","period শুরুতে কিস্তি","ordinary value ×(1+r)"]],steps:["timeline","cash-flow sign","rate-period match","formula","substitution","financial meaning"],stimulus:"আজ ৮০,০০০ টাকা বিনিয়োগ বনাম তিন বছর শেষে ১,১০,০০০ টাকা পাওয়ার বিকল্প; discount rate ১০%।",task:"দুই মূল্যকে একই সময়ে এনে তুলনা এবং সিদ্ধান্ত দাও।",check:"শতাংশ দশমিকে এবং rate ও period একই compounding unit-এ আছে কি না দেখো।"},
    "Financial Analysis":{formulas:["Current ratio = CA/CL","Quick ratio = (CA−Inventory−Prepaid)/CL","Debt ratio = Total debt/Total assets","Net margin = Net profit/Sales ×100"],rows:[["Liquidity","স্বল্পমেয়াদি দায় পরিশোধ","current/quick"],["Solvency","দীর্ঘমেয়াদি ঋণঝুঁকি","debt/interest coverage"],["Profitability","বিক্রয়/সম্পদ থেকে আয়","margin/return"]],steps:["statement data","consistent base","ratio","prior year/benchmark","cause","qualified decision"],stimulus:"দুই বছরের current assets, inventory, liabilities, sales, profit ও debt দেওয়া আছে।",task:"তারল্য, ঋণঝুঁকি ও মুনাফা অনুপাত হিসাব করে trend ব্যাখ্যা করো।",check:"একটি ratio দেখে চূড়ান্ত সিদ্ধান্ত নয়; trend ও benchmark একসঙ্গে নাও।"},
    "Short and Medium-term Financing":{formulas:["Trade-credit cost = Discount/(100−Discount) × 365/(Net days−Discount days)","Effective borrowing cost = Interest/Usable funds ×100"],rows:[["Trade credit","সহজ ও স্বতঃস্ফূর্ত","discount না নিলে hidden cost"],["Bank loan","চুক্তিভিত্তিক","interest, compensating balance"],["Factoring","receivable থেকে cash","fee ও recourse"]],steps:["cash gap","term","usable funds","explicit+implicit cost","security","source choice"],stimulus:"2/10, net 40 trade credit এবং 12% bank loan-এর মধ্যে 90 দিনের প্রয়োজন মেটাতে হবে।",task:"কার্যকর ব্যয় ও ব্যবহারযোগ্য তহবিল তুলনা করে উৎস বেছে নাও।",check:"Nominal rate নয়—usable funds ও সময়সহ effective cost মিলাও।"},
    "Long-term Financing":{formulas:["After-tax debt cost = Kd(1−T)","Lease/borrow decision: after-tax incremental cash flows তুলনা","Equity-তে বাধ্যতামূলক সুদ নেই, ownership dilution হতে পারে"],rows:[["Debt","সুদ ও maturity","tax shield; default risk"],["Preference share","fixed dividend","সাধারণত voting control কম"],["Ordinary equity","স্থায়ী capital","ownership/control dilution"]],steps:["asset life","fund term","after-tax cost","cash commitment","risk/control","recommendation"],stimulus:"দীর্ঘমেয়াদি expansion-এর জন্য bond, preference share ও ordinary share—তিন উৎস বিবেচ্য।",task:"ব্যয়, ঝুঁকি, কর, repayment ও নিয়ন্ত্রণে উৎসগুলো তুলনা করো।",check:"Long-lived asset-কে short-term finance দিয়ে mismatch কোরো না।"},
    "Cost of Capital":{formulas:["Kd(after tax)=Kd(1−T)","Kp = Dp/Net proceeds","Ke = D₁/P₀ + g","WACC = Σwᵢkᵢ"],rows:[["Debt","interest-based cost","tax effect"],["Preference","fixed dividend/net proceeds","no growth"],["Equity","dividend+growth or required return","highest uncertainty"]],steps:["source amount","specific cost","tax/flotation","weights","weighted cost","WACC decision"],stimulus:"Debt 40%, preference 10%, equity 50%; respective costs and tax rate দেওয়া আছে।",task:"প্রতিটি specific cost ও WACC হিসাব করে project hurdle rate ব্যাখ্যা করো।",check:"Weights-এর যোগফল 1 এবং before/after-tax basis consistent কি না দেখো।"},
    "Capital Budgeting and Investment Decisions":{formulas:["NPV = ΣCFₜ/(1+k)ᵗ − Initial outlay","PI = PV inflows/Initial outlay","Payback = পূর্ণ বছর + unrecovered/next cash flow","IRR-এ NPV=0"],rows:[["Payback","liquidity/speed","TVM ও post-payback cash flow উপেক্ষা"],["NPV","value added","discount rate দরকার"],["IRR","percentage return","multiple/conflicting result হতে পারে"]],steps:["initial outlay","incremental CF","terminal CF","discount","criterion","risk/sensitivity"],stimulus:"দুটি mutually exclusive project-এর initial cost ও চার বছরের after-tax cash flow দেওয়া আছে।",task:"Payback, NPV ও PI হিসাব করে conflict হলে value-based সিদ্ধান্ত দাও।",check:"Sunk cost বাদ, working capital ও terminal recovery অন্তর্ভুক্ত হয়েছে কি না দেখো।"},
    "Risk and Rate of Return":{formulas:["E(R)=ΣpᵢRᵢ","Variance=Σpᵢ(Rᵢ−E(R))²","SD=√Variance","CV=SD/E(R)"],rows:[["Business risk","operations","fixed operating cost/demand"],["Financial risk","debt financing","fixed interest commitment"],["Portfolio risk","combined assets","diversification effect"]],steps:["states","probability","expected return","deviation","SD/CV","risk-adjusted choice"],stimulus:"দুটি investment-এর boom, normal ও recession return এবং probability দেওয়া আছে।",task:"Expected return, SD ও CV দিয়ে risk-adjusted alternative নির্বাচন করো।",check:"Probability-এর যোগফল 1 এবং negative return-সহ deviation square ঠিক আছে কি না দেখো।"},
  };
  const bankingInsurance: FinanceLab = /Central Bank/i.test(title) ? {formulas:["Policy rate/CRR/SLR পরিবর্তন → liquidity ও credit condition পরিবর্তন","Central bank ≠ profit-maximising commercial bank"],rows:[["Quantitative control","মোট credit","policy rate/reserve/open-market"],["Qualitative control","credit direction","margin/selective control"],["Lender of last resort","system liquidity","solvent bank support"]],steps:["economic condition","policy tool","bank liquidity","credit","spending/investment","price-output effect"],stimulus:"মূল্যস্ফীতি বাড়ছে; কেন্দ্রীয় ব্যাংক reserve requirement ও policy stance কঠোর করছে।",task:"ব্যাংকের lending capacity ও অর্থনীতিতে transmission ব্যাখ্যা করো।",check:"Tool-এর তাৎক্ষণিক প্রভাব ও চূড়ান্ত macro effect আলাদা করো।"}
  : /Commercial Bank|Introduction to Banking/i.test(title) ? {formulas:["Simple deposit multiplier = 1/Required reserve ratio (শর্তসাপেক্ষ)","Liquidity + Safety + Profitability—ঋণনীতির ত্রিমুখী ভারসাম্য"],rows:[["Deposit","bank liability","liquidity source"],["Loan","bank asset","income+credit risk"],["Agency service","fee/service","payment/collection"]],steps:["customer/fund","deposit","reserve","credit appraisal","loan/payment","risk monitoring"],stimulus:"একটি ব্যাংক নতুন আমানতের অংশ reserve রেখে ঋণ দেয়; ঋণের অর্থ অন্য ব্যাংকে জমা হয়।",task:"শর্তসাপেক্ষ deposit creation chain ও এর সীমা ব্যাখ্যা করো।",check:"Multiplier model-এর assumptions না লিখে বাস্তব ফল দাবি কোরো না।"}
  : /Bank Accounts/i.test(title) ? {formulas:["Simple interest = P×r×t","Maturity value = Principal + Interest"],rows:[["Current","frequent transaction","সাধারণত low/no interest"],["Savings","সঞ্চয়+limited transaction","interest/conditions"],["Fixed deposit","নির্দিষ্ট term","premature encashment conditions"]],steps:["customer need","KYC","account type","deposit/withdrawal rule","interest/fee","closure/nomination"],stimulus:"একজন শিক্ষার্থী, একজন ব্যবসায়ী ও একজন অবসরপ্রাপ্ত ব্যক্তি আলাদা banking need নিয়ে এসেছে।",task:"প্রয়োজন, transaction frequency, liquidity ও return দেখে account নির্বাচন করো।",check:"বর্তমান rate/fee অনুমান নয়—প্রশ্নে দেওয়া তথ্য ব্যবহার করো।"}
  : /Negotiable|Cheque, Bill/i.test(title) ? {formulas:["Holder in due course: value + good faith + before maturity + without defect notice","Cheque is drawn on a banker and payable on demand"],rows:[["Cheque","drawer-drawee-payee","payable on demand"],["Bill of exchange","drawer-drawee-payee","acceptance relevant"],["Promissory note","maker-payee","unconditional promise"]],steps:["instrument","parties","essential terms","endorsement/delivery","presentment","dishonour/remedy"],stimulus:"একটি order cheque endorse করে হস্তান্তর করা হয়েছে; পরে signature/notice নিয়ে বিরোধ সৃষ্টি হয়।",task:"পক্ষ, valid negotiation, holder status ও ব্যাংকারের সতর্কতা বিশ্লেষণ করো।",check:"আইনগত ফলের জন্য document-এর exact facts ছাড়া অনুমান কোরো না।"}
  : /Bank Fund/i.test(title) ? {formulas:["Net interest margin = (Interest income−Interest expense)/Average earning assets","Loan-to-deposit ratio = Loans/Deposits ×100"],rows:[["Primary reserve","cash/central bank balance","highest liquidity"],["Secondary reserve","marketable securities","liquidity+income"],["Loans","earning asset","credit/default risk"]],steps:["fund source","reserve need","asset allocation","return","liquidity/capital risk","rebalance"],stimulus:"একটি ব্যাংকের deposit দ্রুত বাড়লেও loan concentration ও liquidity pressure তৈরি হয়েছে।",task:"Asset–liability allocation-এ return, liquidity ও safety ভারসাম্য প্রস্তাব করো।",check:"High loan growth-কে শুধু profit হিসেবে না দেখে funding ও concentration risk দেখো।"}
  : /Foreign Exchange/i.test(title) ? {formulas:["Home-currency cost = Foreign amount × quoted BDT rate","Forward premium/discount = (F−S)/S × annualisation ×100"],rows:[["Spot","তাৎক্ষণিক settlement","current rate"],["Forward","ভবিষ্যৎ rate fixed","hedging"],["LC","documentary payment undertaking","terms/documents decisive"]],steps:["currency pair","direct/indirect quote","buy/sell rate","amount","document/hedge","currency-risk decision"],stimulus:"বাংলাদেশি importer USD invoice তিন মাস পরে দেবে; spot ও forward rate দেওয়া আছে।",task:"Taka exposure ও forward hedge-এর শর্তযুক্ত ফল হিসাব করো।",check:"Quote direction, bank buying/selling side ও time basis মিলাও।"}
  : /Electronic/i.test(title) ? {formulas:["Authentication ≠ authorisation ≠ settlement","Risk controls: something you know + have + are"],rows:[["EFT/ACH","batch transfer","কম জরুরি/high volume"],["RTGS","real-time gross","large/urgent"],["Card/mobile","customer channel","fraud/privacy controls"]],steps:["initiation","authentication","authorisation","clearing","settlement","alert/reconciliation"],stimulus:"একজন গ্রাহকের credential phishing-এর মাধ্যমে mobile transfer চেষ্টা হয়েছে।",task:"Transaction flow-এ control failure শনাক্ত এবং preventive/detective response সাজাও।",check:"OTP/PIN কখনো প্রকাশ নয়; user action, bank control ও dispute process আলাদা করো।"}
  : /Life Insurance/i.test(title) ? {formulas:["Need-based cover = future obligations − available financial resources","Premium depends on cover, term, risk and policy conditions"],rows:[["Term","নির্দিষ্ট মেয়াদের risk cover","সাধারণত pure protection"],["Whole life","জীবনব্যাপী condition","long-term"],["Endowment","protection+savings element","maturity benefit"]],steps:["financial need","insurable interest","proposal/underwriting","premium","nomination/assignment","claim"],stimulus:"পরিবারের আয়নির্ভর সদস্য সীমিত budget-এ protection ও savings—দুই লক্ষ্য বিবেচনা করছেন।",task:"Need, term, affordability ও exclusions দিয়ে policy type তুলনা করো।",check:"Guaranteed/non-guaranteed benefit ও policy wording না জেনে প্রতিশ্রুতি দিও না।"}
  : /Marine Insurance/i.test(title) ? {formulas:["Contribution = Insurer share based on respective cover","General average loss is shared by interests benefited from common sacrifice"],rows:[["Hull","জাহাজ","physical vessel risk"],["Cargo","পণ্য","goods in transit"],["Freight","freight interest","earning at risk"]],steps:["interest","voyage/time","peril","proximate cause","loss type","documents/claim"],stimulus:"ঝড়ের সময় জাহাজ রক্ষায় কিছু cargo ইচ্ছাকৃতভাবে ফেলে দেওয়া হলো এবং অন্য cargo ক্ষতিগ্রস্ত হলো।",task:"General/specific loss, insured interest ও claim evidence আলাদা করো।",check:"Peril, proximate cause ও policy coverage তিনটি মিলাও।"}
  : /Fire Insurance/i.test(title) ? {formulas:["Average-clause claim = Loss × Sum insured/Value at risk","Claim cannot normally exceed actual covered loss"],rows:[["Valued","agreed value subject to terms","valuation basis"],["Floating","multiple locations","stock movement"],["Declaration","fluctuating stock","periodic declaration"]],steps:["property/interest","covered fire","proximate cause","value at risk","underinsurance","survey/claim"],stimulus:"সম্পদের মূল্য ৯ লাখ, sum insured ৬ লাখ এবং covered fire loss ৩ লাখ টাকা।",task:"Average clause প্রয়োগ করে claim এবং underinsurance-এর প্রভাব দেখাও।",check:"Policy wording, excess, exclusions ও salvage প্রশ্নে থাকলে সমন্বয় করো।"}
  : /Miscellaneous/i.test(title) ? {formulas:["Coverage decision = exposure + probability/severity + exclusion + affordability","Indemnity cover-এ actual covered loss সীমা গুরুত্বপূর্ণ"],rows:[["Motor","vehicle/third-party exposure","policy scope"],["Health","medical expense","waiting/exclusion/network"],["Agriculture","crop/livestock peril","index or loss evidence"]],steps:["exposure","insured interest","coverage","exclusion","premium/excess","claim evidence"],stimulus:"একটি পরিবার motor, health ও crop risk-এর জন্য সীমিত budget-এ cover বাছছে।",task:"Risk priority, coverage gap, exclusion ও affordability দিয়ে portfolio সাজাও।",check:"Policy name নয়—কোন peril covered এবং কোনটি excluded তা লিখো।"}
  : {formulas:["Insurance = risk pooling + contract + premium + covered loss","Indemnity, utmost good faith, insurable interest, proximate cause—নীতি আলাদা করে প্রয়োগ"],rows:[["Insurable interest","আর্থিক সম্পর্ক","policy অনুযায়ী প্রয়োজনীয় সময়ে থাকতে হবে"],["Utmost good faith","material fact disclosure","misrepresentation risk"],["Proximate cause","dominant effective cause","coverage decision"]],steps:["risk","interest","proposal/disclosure","premium/policy","loss/cause","claim/indemnity"],stimulus:"প্রস্তাবক গুরুত্বপূর্ণ ঝুঁকির তথ্য গোপন করেছেন; পরে ক্ষতি হলেও কারণ ও coverage নিয়ে বিরোধ হয়েছে।",task:"চুক্তির নীতি, disclosure, proximate cause ও claim outcome বিশ্লেষণ করো।",check:"ঘটনার fact ও policy term ছাড়া claim গ্রহণ/বাতিলের চূড়ান্ত সিদ্ধান্ত দিও না।"};
  const lab = profiles[title] ?? { ...bankingInsurance, stimulus: `${chapter.titleBn}: ${bankingInsurance.stimulus}` };
  return {title:`${chapter.titleBn} · হিসাব ও সিদ্ধান্ত ল্যাব`,formulaSheet:lab.formulas,comparison:{headers:["বিষয়/বিকল্প","অর্থ ও ব্যবহার","সিদ্ধান্তে সতর্কতা"],rows:lab.rows},visual:{title:"তথ্য থেকে আর্থিক সিদ্ধান্ত",steps:lab.steps,caption:lab.check},cqSolution:{stimulus:lab.stimulus,parts:[{label:"ক",marks:1,answer:`${detail.terms[0]??chapter.titleBn}-এর নির্ভুল অর্থ লেখো।`},{label:"খ",marks:2,answer:"ধারণাটির উদ্দেশ্য, পক্ষ বা আর্থিক সম্পর্ক কারণসহ ব্যাখ্যা করো।"},{label:"গ",marks:3,answer:`${lab.task} প্রয়োজনীয় formula/flow ও দৃশ্যমান working দেখাও।`},{label:"ঘ",marks:4,answer:`ফল, ঝুঁকি, বিকল্প ও সীমাবদ্ধতা তুলনা করে শর্তযুক্ত সিদ্ধান্ত দাও; ${lab.check}`}]},fiveMinuteRecap:["মূল সংজ্ঞা ও শর্ত","প্রধান সূত্র/flow","একটি ছোট working","একটি common trap","এক বাক্যের recommendation"],examNightChecklist:["প্রদত্ত তথ্য ও নির্ণেয় মান আলাদা","rate ও time unit consistent","সূত্র/পক্ষ/দলিল ঠিক","হিসাবের পরে আর্থিক অর্থ লেখা","ঝুঁকি ও সীমাবদ্ধতাসহ সিদ্ধান্ত"],selfCheck:[{question:"শুধু final number লিখলে কি পূর্ণ নম্বর হবে?",explanation:"না। সূত্র বা সিদ্ধান্তের ভিত্তি, মান প্রতিস্থাপন/কার্যপ্রবাহ, একক এবং ফলের ব্যাখ্যা দেখাতে হবে।"},{question:"বেশি return বা কম cost-ই কি সবসময় সেরা?",explanation:"না। সময়, ঝুঁকি, তারল্য, cash-flow capacity, control এবং আইনি/চুক্তিগত শর্তও সিদ্ধান্তে লাগে।"}]};
}

function buildEconomicsWorkshop(chapter: ChapterPreview, detail: BanglaChapterDetail): ExamResource["chapterWorkshop"] {
  type EconomicsLab = { formulas:string[]; rows:[string,string,string][]; steps:string[]; stimulus:string; task:string; check:string };
  const profiles: Record<string,EconomicsLab> = {
    "Basic Economic Problems and their Solution":{formulas:["Opportunity cost = ত্যাগ করা পরবর্তী সেরা বিকল্প","PPC-এর ওপর = দক্ষ; ভেতরে = অদক্ষ/বেকার সম্পদ; বাইরে = বর্তমান সামর্থ্যের বাইরে"],rows:[["কী উৎপাদন","সম্পদ কোন পণ্যে","পছন্দ ও opportunity cost"],["কীভাবে","labour/capital technique","ব্যয় ও দক্ষতা"],["কার জন্য","আয় ও বণ্টন","purchasing power"]],steps:["দুষ্প্রাপ্যতা","বিকল্প","নির্বাচন","opportunity cost","PPC point/shift","system response"],stimulus:"একটি অর্থনীতি সীমিত জমি ও শ্রম দিয়ে ধান ও পোশাক উৎপাদনের পাঁচটি সমন্বয় বেছে নিতে পারে।",task:"PPC আঁকো, একটি movement ও একটি outward shift আলাদা করে opportunity cost ব্যাখ্যা করো।",check:"দুই অক্ষ, সব combination, curve ও direction label দাও।"},
    "Consumer and Producer Behaviour":{formulas:["MU = ΔTU/ΔQ","Consumer equilibrium: MUx/Px = MUy/Py","Ed = %ΔQd/%ΔP","Es = %ΔQs/%ΔP"],rows:[["Demand movement","নিজ পণ্যের দাম","একই curve"],["Demand shift","আয়/রুচি/সম্পর্কিত দাম","পুরো curve সরে"],["Supply shift","cost/technology/tax","পুরো supply curve সরে"]],steps:["utility/determinant","schedule","formula","curve","movement/shift","consumer/producer result"],stimulus:"চালের দাম কমেছে; একই সময়ে পরিবারের আয় ও বিকল্প পণ্যের দামও বদলেছে।",task:"Price effect ও non-price determinant আলাদা করে demand schedule/curve এবং elasticity দেখাও।",check:"Quantity demanded পরিবর্তন ও demand পরিবর্তন এক লিখবে না।"},
    "Production, Production Cost and Revenue":{formulas:["AP=TP/L","MP=ΔTP/ΔL","TC=TFC+TVC","AC=TC/Q","MC=ΔTC/ΔQ","TR=P×Q; MR=ΔTR/ΔQ"],rows:[["TP–MP","MP positive হলে TP বাড়ে","MP=0-তে TP সর্বোচ্চ"],["AC–MC","MC<AC হলে AC কমে","MC=AC-তে AC minimum"],["TR–MR","MR হলো অতিরিক্ত আয়","market structure-নির্ভর"]],steps:["input-output data","TP/AP/MP","cost table","revenue table","curve relation","production decision"],stimulus:"একটি কারখানায় শ্রমিক ১–৬ জন হলে output, fixed cost ও variable cost দেওয়া আছে।",task:"AP, MP, TC, AC, MC ও revenue columns পূরণ করে গুরুত্বপূর্ণ turning point চিহ্নিত করো।",check:"Average-এর denominator ও marginal-এর পরিবর্তন-ভিত্তি ঠিক রাখো।"},
    "Market":{formulas:["Equilibrium: Qd=Qs","Profit = TR−TC","Perfect competition firm: P=AR=MR"],rows:[["Perfect competition","many firms, homogeneous product","price taker"],["Monopoly","single seller, entry barrier","price influence"],["Oligopoly","few interdependent firms","strategic reaction"]],steps:["market features","demand/supply or MR/MC","equilibrium","price-output","profit/loss","welfare/limitation"],stimulus:"একটি বাজারে demand ও supply schedule দেওয়া; পরে production tax যোগ হয়েছে।",task:"প্রাথমিক equilibrium এবং supply shift-এর পর নতুন price-output গ্রাফে দেখাও।",check:"Market equilibrium ও individual firm equilibrium গুলিয়ে ফেলো না।"},
    "Labour Market":{formulas:["Real wage = Money wage/Price index ×100","Labour demand derives from worker productivity and output demand","Competitive equilibrium: labour demand = labour supply"],rows:[["Money wage","টাকায় মজুরি","purchasing power বলে না"],["Real wage","price-adjusted wage","জীবনমান তুলনা"],["Wage differential","skill/risk/location/productivity","কারণভিত্তিক"]],steps:["labour type","demand determinant","supply determinant","wage equilibrium","real wage","Bangladesh context"],stimulus:"নামমাত্র মজুরি ৮% বাড়লেও price index ১২% বেড়েছে; একটি sector-এ skilled worker shortage আছে।",task:"Real wage change ও skill shortage-এর wage/employment effect ব্যাখ্যা করো।",check:"Nominal বৃদ্ধি মানেই real wage বৃদ্ধি নয়।"},
    "Capital":{formulas:["Real interest ≈ Nominal interest − Inflation","Investment = capital stock-এর পরিকল্পিত সংযোজন","Capital formation: saving → mobilisation → investment"],rows:[["Fixed capital","machine/building","দীর্ঘস্থায়ী"],["Working capital","raw material/cash","চলতি উৎপাদন"],["Human capital","skill/health","উৎপাদনশীলতা"]],steps:["saving source","financial mobilisation","investment","capital formation","productivity","growth constraint"],stimulus:"সঞ্চয় কম, inflation বেশি এবং দীর্ঘমেয়াদি productive investment সীমিত।",task:"Capital formation chain ও nominal-real interest-এর প্রভাব বিশ্লেষণ করো।",check:"Money-কে capital বলার আগে উৎপাদনে ব্যবহারের শর্ত দেখাও।"},
    "Organisation":{formulas:["Economic profit = Total revenue − explicit cost − implicit cost","Normal profit is part of opportunity cost","Entrepreneur bears uncertainty and coordinates resources"],rows:[["Entrepreneur","innovation+uncertainty","decision/residual claim"],["Manager","delegated administration","salary/authority"],["Organisation","resources coordinated","scale and efficiency"]],steps:["opportunity","resource combination","risk/uncertainty","innovation","revenue-cost","profit and employment"],stimulus:"একজন তরুণ চাকরি ছেড়ে নিজস্ব প্রতিষ্ঠান গড়েছেন; নিজের ভবন ও মূলধন ব্যবহার করছেন।",task:"Explicit/implicit cost ও accounting/economic profit আলাদা করে উদ্যোক্তার ভূমিকা মূল্যায়ন করো।",check:"নিজস্ব সম্পদের opportunity cost বাদ দিও না।"},
    "Rent":{formulas:["Economic rent = Actual earning − Transfer earning","Ricardian rent arises from differential fertility/location under stated assumptions"],rows:[["Contract rent","চুক্তিভিত্তিক payment","building/capital elements থাকতে পারে"],["Economic rent","surplus over transfer earning","সব factor-এ সম্ভব"],["Ricardian rent","land differential surplus","specific assumptions"]],steps:["factor/land unit","transfer earning","actual earning","differential advantage","rent area","theory limitation"],stimulus:"সমান বিনিয়োগে তিন শ্রেণির জমির output আলাদা; marginal land-এর surplus নেই।",task:"Differential rent table ও diagram তৈরি করে modern economic rent-এর সঙ্গে তুলনা করো।",check:"Rent আর profit/interest এক করে লিখো না; transfer earning দেখাও।"},
    "Aggregate Income and Expenditure":{formulas:["GDP = C+I+G+(X−M)","GNP = GDP + Net factor income from abroad","NNP = GNP − Depreciation","Saving = Income − Consumption"],rows:[["Nominal GDP","current price","price effect আছে"],["Real GDP","constant price","volume comparison"],["Per-capita income","income/population","distribution দেখায় না"]],steps:["boundary/period","final output","method","avoid double count","nominal-real","welfare limitation"],stimulus:"Consumption, investment, government spending, exports, imports, depreciation ও NFIA দেওয়া আছে।",task:"GDP, GNP ও NNP হিসাব করে real welfare interpretation-এর সীমা লেখো।",check:"Intermediate goods double count এবং imports-এর sign যাচাই করো।"},
    "Money and Banking":{formulas:["Fisher form: MV=PY","Simple deposit multiplier = 1/Required reserve ratio (assumptions apply)","Real interest ≈ Nominal interest − Inflation"],rows:[["Money functions","medium/unit/store/deferred payment","liquidity"],["Commercial bank","deposit+credit+payment","profit and risk"],["Central bank","currency/policy/stability","system role"]],steps:["money function","deposit/reserve","loan creation","money supply","policy tool","inflation/output effect"],stimulus:"Required reserve ratio বাড়ানো হয়েছে এবং একই সময়ে inflation pressure আছে।",task:"Bank credit creation ও monetary-policy transmission ধাপে ধাপে ব্যাখ্যা করো।",check:"Textbook multiplier-এর assumptions ও real-world leakage উল্লেখ করো।"},
  };
  const fallback: EconomicsLab = {formulas:["পরিবর্তনের আগে ceteris paribus শর্ত স্পষ্ট করো","প্রয়োজনে rate/ratio = relevant part ÷ relevant base ×100"],rows:[["কারণ","কোন নির্ধারক বদলেছে","প্রমাণ"],["প্রভাব","কোন চলক/খাত বদলেছে","দিক ও মাত্রা"],["নীতি/সমাধান","কার্যপ্রবাহ","trade-off"]],steps:["পরিভাষা","তথ্য","কারণ","ছক/সূত্র","প্রভাব","বাংলাদেশ প্রেক্ষাপট"],stimulus:detail.example,task:"প্রদত্ত অর্থনৈতিক তথ্যকে কারণ–প্রভাব–নীতি ধারায় বিশ্লেষণ করো।",check:"বর্তমান পরিসংখ্যান বা হার উদ্ভাবন না করে প্রশ্নে দেওয়া তথ্য ব্যবহার করো।"};
  const lab=profiles[chapter.title]??fallback;
  return {title:`${chapter.titleBn} · ছক, সূত্র ও গ্রাফ ল্যাব`,formulaSheet:lab.formulas,comparison:{headers:["ধারণা/পরিবর্তন","অর্থনৈতিক সম্পর্ক","পরীক্ষায় প্রমাণ"],rows:lab.rows},visual:{title:"অর্থনৈতিক বিশ্লেষণের পথ",steps:lab.steps,caption:lab.check},cqSolution:{stimulus:lab.stimulus,parts:[{label:"ক",marks:1,answer:`${detail.terms[0]??chapter.titleBn}-এর নির্ভুল সংজ্ঞা লেখো।`},{label:"খ",marks:2,answer:"দুটি চলকের সম্পর্ক ও প্রয়োজনীয় ceteris paribus শর্ত ব্যাখ্যা করো।"},{label:"গ",marks:3,answer:`${lab.task} অক্ষ, সূত্র, মান ও label স্পষ্ট রাখো।`},{label:"ঘ",marks:4,answer:`ফল, বিকল্প ব্যাখ্যা, বাংলাদেশ প্রেক্ষাপট ও সীমাবদ্ধতা মূল্যায়ন করো; ${lab.check}`}]},fiveMinuteRecap:["সংজ্ঞা ও determinant","মূল সূত্র","একটি schedule/graph","movement বনাম shift বা cause-effect","এক বাক্যের interpretation"],examNightChecklist:["চলক ও ceteris paribus শর্ত","formula denominator ঠিক","graph-এর অক্ষ/curve/point label","কারণ ও ফল আলাদা","বাংলাদেশ উদাহরণ ও সীমাবদ্ধতা"],selfCheck:[{question:"Graph এঁকেই কি উত্তর শেষ?",explanation:"না। কোন নির্ধারক বদলেছে, curve/point কীভাবে বদলেছে এবং অর্থনৈতিক অর্থ কী—লিখতে হবে।"},{question:"একটি বর্তমান হার বা সংখ্যা জানা না থাকলে কী করবে?",explanation:"অনুমান করবে না। প্রশ্নে দেওয়া data ব্যবহার করবে অথবা qualitative relation ব্যাখ্যা করবে।"}]};
}

function buildChapterWorkshop(subjectId: string, chapter: ChapterPreview, detail: BanglaChapterDetail): ExamResource["chapterWorkshop"] | undefined {
  const name = chapter.titleBn;
  const term = (index:number) => detail.terms[index] ?? name;
  const common = {
    fiveMinuteRecap: [`১ মিনিট—${detail.core}`, `১ মিনিট—${detail.terms.slice(0,4).join(" · ")}`, "১ মিনিট—মূল ছক/সূত্র না দেখে লেখো", "১ মিনিট—একটি worked example-এর ধাপ মনে করো", "১ মিনিট—সবচেয়ে সাধারণ ভুলটি কীভাবে এড়াবে বলো"],
    examNightChecklist: ["মূল সংজ্ঞা ও শর্ত একবার মিলিয়েছি", "সূত্র/ছক/চিত্রের label মনে আছে", "একটি পূর্ণ সমাধান না দেখে করতে পারি", "CQ-র গ ও ঘ অংশে উদ্দীপকের তথ্য ব্যবহার করতে পারি", "একক, চিহ্ন ও শেষ যাচাই বাদ দিইনি"],
  };
  if (subjectId === "accounting") return buildAccountingWorkshop(chapter, detail);
  if (subjectId === "finance") return buildFinanceWorkshop(chapter, detail);
  if (subjectId === "statistics") return { title:`${name} · তথ্য থেকে সিদ্ধান্ত`,formulaSheet:["গড় = Σx ÷ n","গণসংখ্যাযুক্ত গড় = Σfx ÷ Σf","পরিসর = সর্বোচ্চ মান − সর্বনিম্ন মান","সূত্রের আগে চলক, একক ও data type শনাক্ত করো"],comparison:{headers:["পদ্ধতি","কখন ব্যবহার","সীমাবদ্ধতা"],rows:[["Mean","সব মান কাজে লাগাতে","চরম মানে বেশি প্রভাবিত"],["Median","ক্রমবদ্ধ বা skewed data","সব মানের ব্যবধান ব্যবহার করে না"],["Mode","সবচেয়ে ঘন মান জানতে","একাধিক বা কোনো mode নাও থাকতে পারে"]]},visual:{title:"কাঁচা তথ্য থেকে ব্যাখ্যা",steps:["চলক","তথ্য পরিষ্কার","সারণি","সূত্র","হিসাব","অর্থ ও সীমা"],caption:"শুধু সংখ্যা নয়—ফলটি data সম্পর্কে কী বলছে সেটিই শেষ ধাপ।"},cqSolution:{stimulus:detail.example,parts:[{label:"ক",marks:1,answer:`${term(0)}-এর সংজ্ঞা লেখো।`},{label:"খ",marks:2,answer:"পদ্ধতিটি কেন এবং কখন উপযুক্ত তা ব্যাখ্যা করো।"},{label:"গ",marks:3,answer:"সারণি সাজিয়ে সূত্র, মান প্রতিস্থাপন ও ধাপে ধাপে ফল দেখাও।"},{label:"ঘ",marks:4,answer:"ফল তুলনা, ব্যতিক্রমী মানের প্রভাব ও সিদ্ধান্তের সীমা মূল্যায়ন করো।"}]},...common,selfCheck:[{question:"Σfx ÷ Σf-এ denominator কী?",explanation:"মোট গণসংখ্যা Σf; শ্রেণির সংখ্যা নয়।"},{question:"ফল লেখার পর কী বাকি?",explanation:"একক, দশমিকের যথার্থতা এবং ফলটির বাস্তব অর্থ ব্যাখ্যা করা।"}]};
  if (subjectId === "economics") return buildEconomicsWorkshop(chapter, detail);
  if (subjectId === "geography") return { title:`${name} · মানচিত্র ও প্রক্রিয়া ল্যাব`,formulaSheet:["মানচিত্রে title, north arrow, scale, legend ও source রাখো","Scale = map distance ÷ ground distance","প্রক্রিয়া লিখবে: কারণ → ধাপ → ভৌত ফল → মানবিক প্রভাব","বাংলাদেশ উদাহরণে স্থান ও প্রমাণ নির্দিষ্ট করো"],comparison:{headers:["দিক","ভৌত ভূগোল","মানব ভূগোল"],rows:[["মূল প্রশ্ন","কোন প্রক্রিয়ায় ভূমি/জলবায়ু বদলায়","মানুষ স্থান ও সম্পদ কীভাবে ব্যবহার করে"],["প্রমাণ","মানচিত্র, cross-section, climate data","জনসংখ্যা, বসতি, অর্থনৈতিক data"],["উত্তর","কারণ–প্রক্রিয়া–ফল","স্থান–কারণ–প্রভাব–ব্যবস্থাপনা"]]},visual:{title:"স্থান থেকে প্রভাব",steps:["অবস্থান","নিয়ামক","প্রক্রিয়া","চিত্র/মানচিত্র","ভৌত ফল","মানুষ ও ব্যবস্থাপনা"],caption:"চিত্রে direction, scale/legend ও প্রয়োজনীয় label দাও; সাজসজ্জার ছবি নম্বর আনে না।"},cqSolution:{stimulus:detail.example,parts:[{label:"ক",marks:1,answer:`${term(0)}-এর নির্ভুল পরিচয় দাও।`},{label:"খ",marks:2,answer:"প্রক্রিয়াটির কারণ ও দুটি প্রধান ধাপ ব্যাখ্যা করো।"},{label:"গ",marks:3,answer:"উদ্দীপকের স্থানিক তথ্য map/diagram-এ বসিয়ে ফল দেখাও।"},{label:"ঘ",marks:4,answer:"ভৌত ও মানবিক প্রভাব তুলনা করে বাংলাদেশের উপযোগী ব্যবস্থাপনা মূল্যায়ন করো।"}]},...common,selfCheck:[{question:"মানচিত্রে পাঁচটি বাধ্যতামূলক জিনিস কী?",explanation:"Title, north direction, scale, legend এবং প্রয়োজনমতো source/label।"},{question:"শুধু কারণের তালিকা কি যথেষ্ট?",explanation:"না। কারণ কী প্রক্রিয়ায় কোন স্থানিক ফল তৈরি করে, তা ধারাবাহিকভাবে দেখাতে হবে।"}]};
  if (subjectId === "ict") return buildIctWorkshop(chapter, detail);
  if (subjectId === "english" || (subjectId === "bangla" && chapter.paper === "2nd Paper")) return undefined;
  const lenses: Record<string,{sheet:string[];headers:[string,string,string];rows:[string,string,string][];steps:string[]}> = {
    bangla:{sheet:["মূলভাব = পাঠের কেন্দ্রীয় বক্তব্য; কাহিনির সারাংশ নয়","প্রমাণ = পাঠের নির্দিষ্ট ঘটনা/চিত্রকল্প/উক্তির তাৎপর্য","প্রয়োগ = উদ্দীপকের তথ্য + পাঠের ধারণার মিল","মূল্যায়ন = মিল–অমিল, তাৎপর্য ও শর্তযুক্ত সিদ্ধান্ত"],headers:["অংশ","কী লিখবে","কী এড়াবে"],rows:[["ক","সরাসরি পরিচয়/সংজ্ঞা","অপ্রাসঙ্গিক ভূমিকা"],["গ","উদ্দীপক ও পাঠের দৃশ্যমান যোগ","শুধু গল্প বলা"],["ঘ","বিশ্লেষণ ও বিচার","প্রমাণহীন প্রশংসা"]],steps:["প্রশ্নের শব্দ","পাঠের প্রমাণ","উদ্দীপকের তথ্য","মিল/অমিল","তাৎপর্য","সিদ্ধান্ত"]},
    business:{sheet:["ব্যবস্থাপনা: পরিকল্পনা → সংগঠন → কর্মীসংস্থান → নির্দেশনা → নিয়ন্ত্রণ","সিদ্ধান্তে লক্ষ্য, সম্পদ, কর্তৃত্ব, সময় ও ঝুঁকি আলাদা করো","নীতিকে উদ্দীপকের বাস্তব ঘটনায় প্রয়োগ করো","বর্তমান হার/আইন অনুমান না করে প্রশ্নের তথ্য ব্যবহার করো"],headers:["দিক","ধারণা","প্রয়োগ"],rows:[["লক্ষ্য","কী অর্জন করতে হবে","পরিমাপযোগ্য ফল"],["সম্পদ","মানুষ–অর্থ–উপকরণ","সীমাবদ্ধতা"],["নিয়ন্ত্রণ","মানদণ্ড–ফল–সংশোধন","ফিডব্যাক"]],steps:["ঘটনা","সমস্যা","নীতি","প্রয়োগ","বিকল্প","সিদ্ধান্ত"]},
    civics:{sheet:["অধিকার ও দায়িত্ব পাশাপাশি বিশ্লেষণ করো","রাষ্ট্র, সরকার, নাগরিক ও প্রতিষ্ঠানের ভূমিকা আলাদা রাখো","ক্ষমতার পৃথকীকরণ মানে সম্পূর্ণ বিচ্ছিন্নতা নয়","আইনি তথ্য, উদ্দীপকের প্রমাণ ও মতামত আলাদা করো"],headers:["বিচার","প্রশ্ন","প্রমাণ"],rows:[["আইনসম্মততা","ক্ষমতা/প্রক্রিয়া বৈধ?","নীতি ও প্রতিষ্ঠান"],["জবাবদিহি","কার কাছে ব্যাখ্যা?","নিয়ন্ত্রণব্যবস্থা"],["সুশাসন","স্বচ্ছতা–অংশগ্রহণ–ন্যায়","উদ্দীপকের ফল"]],steps:["পরিভাষা","প্রতিষ্ঠান","অধিকার/দায়িত্ব","প্রক্রিয়া","জবাবদিহি","মূল্যায়ন"]},
    history:{sheet:["সময়রেখা: তারিখ → ব্যক্তি → স্থান → ঘটনা → ফল","কারণ: দীর্ঘমেয়াদি অবস্থা + তাৎক্ষণিক সূত্রপাত","উৎস: নির্মাতা, সময়, উদ্দেশ্য, সীমাবদ্ধতা","তাৎপর্য: তাৎক্ষণিক ফল ও দীর্ঘমেয়াদি পরিণতি আলাদা"],headers:["স্তর","প্রশ্ন","উত্তরের প্রমাণ"],rows:[["কালানুক্রম","কখন কী ঘটেছে","তারিখ ও turning point"],["কারণ","কেন ঘটেছে","অবস্থা, trigger, actor"],["তাৎপর্য","কী বদলেছে","তাৎক্ষণিক ও দীর্ঘমেয়াদি ফল"]],steps:["সময়","পটভূমি","কারণ","ঘটনা","ফল","তাৎপর্য"]},
    islamic_history:{sheet:["কালানুক্রম ও ভৌগোলিক প্রেক্ষাপট আগে নির্ধারণ করো","ব্যক্তি, প্রতিষ্ঠান, ঘটনা ও সভ্যতাগত অবদান আলাদা করো","ধর্মীয় মর্যাদা ও ঐতিহাসিক প্রমাণ সম্মানের সঙ্গে স্পষ্ট রাখো","কারণ–ঘটনা–ফল–তাৎপর্যের ধারায় উত্তর দাও"],headers:["স্তর","কেন্দ্র","উত্তর"],rows:[["পটভূমি","সময় ও অঞ্চল","প্রাসঙ্গিক অবস্থা"],["ঘটনা","ব্যক্তি ও পদক্ষেপ","প্রমাণভিত্তিক বর্ণনা"],["প্রভাব","রাজনৈতিক–সামাজিক–সাংস্কৃতিক","স্বল্প ও দীর্ঘমেয়াদি ফল"]],steps:["সময়/স্থান","পটভূমি","ব্যক্তি","ঘটনা","প্রভাব","মূল্যায়ন"]},
    logic:{sheet:["যুক্তির আকার ও বক্তব্যের সত্যতা এক নয়","পদ, অবধারণ ও অনুমানের স্তর আলাদা করো","নিয়ম প্রয়োগের আগে প্রতীক/শ্রেণি ঠিক করো","ভুল যুক্তিতে ঠিক কোন নিয়ম ভেঙেছে দেখাও"],headers:["পরীক্ষা","প্রশ্ন","ফল"],rows:[["পদ","ব্যাপ্তি/শ্রেণি কী","সংজ্ঞা ও বিভাজন"],["অবধারণ","গুণ ও পরিমাণ","বণ্টন/বিরোধ"],["অনুমান","পূর্বধারণা থেকে সিদ্ধান্ত আসে?","বৈধ/অবৈধ"]],steps:["বক্তব্য","প্রতীক","আকার","নিয়ম","পরীক্ষা","সিদ্ধান্ত"]},
  };
  const lens=lenses[subjectId]??{sheet:["সংজ্ঞা → সম্পর্ক → প্রয়োগ → মূল্যায়ন","উদ্দীপকের প্রমাণ ছাড়া সিদ্ধান্ত দিও না","প্রশ্নের নম্বর অনুযায়ী গভীরতা বাড়াও"],headers:["ধাপ","কাজ","যাচাই"],rows:[["ধারণা","সঠিক নিয়ম","পরিভাষা"],["প্রয়োগ","তথ্যের যোগসূত্র","প্রমাণ"],["সিদ্ধান্ত","বিশ্লেষণ","সীমাবদ্ধতা"]],steps:["চাওয়া","ধারণা","তথ্য","প্রয়োগ","বিশ্লেষণ","সিদ্ধান্ত"]};
  return {title:`${name} · পূর্ণ উত্তর ল্যাব`,formulaSheet:lens.sheet,comparison:{headers:lens.headers,rows:lens.rows},visual:{title:"পূর্ণ নম্বরের উত্তরের পথ",steps:lens.steps,caption:"প্রতিটি ধাপে প্রশ্নের ভাষা ও উদ্দীপকের তথ্য দৃশ্যমান রাখো।"},cqSolution:{stimulus:detail.example,parts:[{label:"ক",marks:1,answer:`${term(0)} হলো ${detail.core.split("।")[0]}।`},{label:"খ",marks:2,answer:`${term(0)}-এর অর্থ শুধু নাম জানা নয়; “${name}”-এর মূল সম্পর্কটি কারণসহ বুঝতে হয়। তাই সংজ্ঞার পরে ধারণাটি কীভাবে কাজ করে, দুই–তিনটি সংযুক্ত বাক্যে ব্যাখ্যা করতে হবে।`},{label:"গ",marks:3,answer:`উদ্দীপকের নির্ণায়ক তথ্য—${detail.example}। এই তথ্যের সঙ্গে প্রাসঙ্গিক নিয়মের সরাসরি যোগ আছে। প্রথমে তথ্যটি চিহ্নিত, তারপর নিয়ম প্রয়োগ এবং শেষে ফল ব্যাখ্যা করলে প্রয়োগ সম্পূর্ণ হয়।`},{label:"ঘ",marks:4,answer:`উদ্দীপকের সিদ্ধান্ত মূল্যায়নে মূল ধারণা, বাস্তব শর্ত, বিকল্প ব্যাখ্যা ও সীমাবদ্ধতা একসঙ্গে বিবেচ্য। “${name}”-এর নিয়ম ঘটনাটিকে সমর্থন করে; তবে প্রমাণ বা শর্ত বদলালে সিদ্ধান্তও বদলাতে পারে। তাই উদ্দীপকভিত্তিক যুক্তি ও শর্তযুক্ত উপসংহারই গ্রহণযোগ্য পূর্ণাঙ্গ উত্তর।`}]},...common,selfCheck:[{question:"গ অংশে শুধু সংজ্ঞা লিখলে হবে?",explanation:"না। উদ্দীপকের নির্দিষ্ট তথ্যের সঙ্গে নিয়মের যোগসূত্র ও ফল দেখাতে হবে।"},{question:"ঘ অংশে কী নতুন থাকবে?",explanation:"গ-এর প্রয়োগের ওপর দাঁড়িয়ে বিকল্প, সীমাবদ্ধতা, প্রভাব ও শর্তযুক্ত সিদ্ধান্ত থাকবে।"}]};
}

function buildBanglaWorkedSet(subjectId: string, chapter: ChapterPreview, detail: { core: string; example: string }): NonNullable<ExamResource["extraWorked"]> {
  const name = chapter.titleBn;
  const sets: Record<string, NonNullable<ExamResource["extraWorked"]>> = {
    accounting: [
      { title: "Foundation Worked Example", problem: `একটি ব্যবসায়ে নগদ ১,২০,০০০ টাকা বিনিয়োগ, ৩০,০০০ টাকার আসবাব নগদে ক্রয় এবং ২০,০০০ টাকার পণ্য ধারে ক্রয় করা হলো। “${name}” অধ্যায়ের নিয়মে প্রভাব দেখাও।`, approach: ["হিসাবগুলো শনাক্ত করো: নগদ, আসবাব, ক্রয়/মজুদ, পাওনাদার ও মূলধন।", "প্রতিটি হিসাব সম্পদ, দায়, মালিকানা স্বত্ব, আয় বা ব্যয়—কোন শ্রেণির তা লেখো।", "লেনদেনভিত্তিক ডেবিট–ক্রেডিট বা সমীকরণের প্রভাব দেখাও।", "শেষে সম্পদ = দায় + মালিকানা স্বত্ব মিলিয়ে দেখো।"], checkpoint: "শেষ অবস্থা: নগদ ৯০,০০০ + আসবাব ৩০,০০০ + পণ্য ২০,০০০ = দায় ২০,০০০ + মূলধন ১,২০,০০০; উভয় পাশ ১,৪০,০০০ টাকা।" },
      { title: "Board-style Error Correction", problem: `“${name}” সমাধানে একজন শিক্ষার্থী ধারে পণ্য ক্রয়কে নগদ ক্রয় লিখেছে। ভুলটির প্রভাব ও সংশোধন দেখাও।`, approach: ["ভুল দাখিলায় কোন হিসাব অযথা কমেছে তা শনাক্ত করো।", "সঠিক লেনদেনে যে দায় সৃষ্টি হয়েছে সেটি চিহ্নিত করো।", "প্রয়োজনে সংশোধনী দাখিলা/কার্যপ্রণালি লেখো।", "রেওয়ামিল মেললেও কেন এই ভুল থাকতে পারে তা ব্যাখ্যা করো।"], checkpoint: "নগদ কমানো বাতিল হবে এবং পাওনাদার/দায় স্বীকৃত হবে; নীতিগত ভুল শুধু গাণিতিক সমতা দেখে ধরা নাও পড়তে পারে।" },
      { title: "Exam-ready Verification", problem: `“${name}” অঙ্ক শেষ করার পর চার ধাপে নির্ভুলতা যাচাই করো।`, approach: ["দাখিলার মোট ডেবিট ও ক্রেডিট মিলাও।", "খতিয়ানে প্রতিটি দাখিলার দুই দিক পোস্ট হয়েছে কি না দেখো।", "জের সঠিক পাশে আনা হয়েছে কি না পরীক্ষা করো।", "চূড়ান্ত বিবরণীতে অঙ্কের স্থানান্তর পুনরায় হিসাব করো।"], checkpoint: "একটি অঙ্ককে সঠিক বলতে কার্যপ্রণালি, দুই দিকের পোস্টিং, মোট এবং চূড়ান্ত সমতা—সব ঠিক থাকতে হবে।" },
    ],
    finance: [
      { title: "Calculation Lab", problem: `১,০০,০০০ টাকা বার্ষিক ১০% হারে ২ বছরের জন্য বিনিয়োগ করা হলো। “${name}” সিদ্ধান্তে সরল ও চক্রবৃদ্ধি ফল তুলনা করো।`, approach: ["সরল সুদ: I = P × r × n = ১,০০,০০০ × ০.১০ × ২।", "সরল মোট মূল্য = ১,০০,০০০ + ২০,০০০ = ১,২০,০০০ টাকা।", "চক্রবৃদ্ধি মূল্য = ১,০০,০০০(১.১০)² = ১,২১,০০০ টাকা।", "পার্থক্য ও সময়মূল্যের কারণ ব্যাখ্যা করো।"], checkpoint: "চক্রবৃদ্ধি ফলে ১,০০০ টাকা বেশি; কারণ দ্বিতীয় বছরে পূর্বের সুদের ওপরও আয় হয়।" },
      { title: "Decision Scenario", problem: `একটি প্রতিষ্ঠান ৫ লাখ টাকার যন্ত্র কিনবে। ব্যাংকঋণ ১২% সুদে অথবা নতুন অংশীদার নেওয়ার সুযোগ আছে। “${name}” অনুযায়ী সিদ্ধান্ত দাও।`, approach: ["অর্থের উদ্দেশ্য ও প্রয়োজনের মেয়াদ নির্ধারণ করো।", "ঋণের সুদ, কিস্তি ও নগদপ্রবাহ চাপ হিসাব করো।", "অংশীদারের ক্ষেত্রে নিয়ন্ত্রণ ও মুনাফা ভাগের প্রভাব দেখো।", "ঝুঁকি, তারল্য ও মালিকদের অগ্রাধিকার ধরে সিদ্ধান্ত দাও।"], checkpoint: "একক সঠিক উত্তর নয়—নগদপ্রবাহ শক্ত হলে ঋণ, পরিশোধক্ষমতা দুর্বল হলে ঝুঁকি ভাগ করা অধিক যুক্তিসংগত হতে পারে।" },
      { title: "Formula Check", problem: `“${name}” অঙ্কে সূত্র ব্যবহারের আগে ও পরে কী কী যাচাই করবে?`, approach: ["P, r, n, FV/PV এবং নগদপ্রবাহের সময় চিহ্নিত করো।", "শতকরা হারকে দশমিকে এবং মাসকে প্রয়োজনমতো বছরে রূপান্তর করো।", "সূত্রে মান বসিয়ে ধাপে ধাপে হিসাব করো।", "ফল টাকায়/শতাংশে লিখে সিদ্ধান্তের অর্থ ব্যাখ্যা করো।"], checkpoint: "সঠিক সংখ্যা কিন্তু ভুল সময় একক বা ভুল আর্থিক ব্যাখ্যা হলে পূর্ণ নম্বর পাওয়া যাবে না।" },
    ],
    economics: [
      { title: "Data & Elasticity Lab", problem: `দাম ২০ টাকা থেকে ২৫ টাকা হলে চাহিদা ১০০ একক থেকে ৮০ এককে নেমেছে। “${name}” বিশ্লেষণে স্থিতিস্থাপকতা নির্ণয় করো।`, approach: ["চাহিদার পরিবর্তন = −২০/১০০ × ১০০ = −২০%।", "দামের পরিবর্তন = ৫/২০ × ১০০ = ২৫%।", "Ed = |−২০% ÷ ২৫%| = ০.৮।", "০.৮ < ১ হওয়ায় চাহিদা অস্থিতিস্থাপক—এই অর্থ লিখো।"], checkpoint: "স্থিতিস্থাপকতার মান ০.৮; শুধু হিসাব নয়, শ্রেণি ও অর্থনৈতিক ব্যাখ্যাও লিখতে হবে।" },
      { title: "Graph Reasoning", problem: `ভোক্তার আয় বাড়ার পর স্বাভাবিক দ্রব্যের “${name}” পরিস্থিতি গ্রাফে দেখাও।`, approach: ["উল্লম্ব অক্ষে দাম ও অনুভূমিক অক্ষে পরিমাণ বসাও।", "প্রাথমিক রেখা ও ভারসাম্য E₁ চিহ্নিত করো।", "আয় বৃদ্ধিতে চাহিদা রেখা ডানে স্থানান্তর দেখাও।", "নতুন ভারসাম্য E₂-তে দাম ও পরিমাণের পরিবর্তন ব্যাখ্যা করো।"], checkpoint: "আয় দাম নয়; তাই এটি রেখা বরাবর চলাচল নয়, পুরো চাহিদা রেখার স্থানান্তর।" },
      { title: "Bangladesh Application", problem: `উৎসবের আগে চাল বা পোশাকের বাজারে “${name}” কীভাবে বদলাতে পারে তা বিশ্লেষণ করো।`, approach: ["মৌসুমি চাহিদার নির্ধারক চিহ্নিত করো।", "স্বল্পমেয়াদি যোগানের প্রতিক্রিয়া ব্যাখ্যা করো।", "দাম ও পরিমাণের সম্ভাব্য পরিবর্তন দেখাও।", "সরবরাহব্যবস্থা বা নীতিগত সীমাবদ্ধতা উল্লেখ করো।"], checkpoint: "বাস্তব উদাহরণে কারণ, রেখার পরিবর্তন, নতুন ফল এবং সীমাবদ্ধতা—চারটি অংশ থাকতে হবে।" },
    ],
    business: [
      { title: "Management Case", problem: `একটি স্থানীয় উৎপাদন প্রতিষ্ঠানে দায়িত্ব স্পষ্ট নয়, সিদ্ধান্ত দেরিতে হয় এবং কাজ পুনরাবৃত্তি হচ্ছে। “${name}” অনুযায়ী সমাধান দাও।`, approach: ["লক্ষণ নয়, সাংগঠনিক মূল সমস্যা শনাক্ত করো।", "কর্তৃত্ব, দায়িত্ব ও জবাবদিহির ঘাটতি ব্যাখ্যা করো।", "কাজ বিভাজন ও reporting line পুনর্নির্ধারণ করো।", "সময়, মান ও দায়বদ্ধতার সূচকে ফল মাপার প্রস্তাব দাও।"], checkpoint: "সুপারিশটি প্রতিষ্ঠানের আকার ও বাস্তব সামর্থ্যের সঙ্গে মানানসই হতে হবে।" },
      { title: "Principle Application", problem: `“${name}” নীতি না মানলে কর্মী ও প্রতিষ্ঠানের ওপর দুটি করে প্রভাব দেখাও।`, approach: ["নীতিটির নির্ভুল অর্থ লেখো।", "উদ্দীপকের আচরণ বা সিদ্ধান্তের সঙ্গে নীতি মিলাও।", "কর্মীর প্রেরণা/দায়িত্বে প্রভাব দেখাও।", "ব্যয়, সময়, মান বা গ্রাহকসেবায় প্রভাব দেখিয়ে সিদ্ধান্ত দাও।"], checkpoint: "প্রভাবগুলো পরিমাপযোগ্য ও নীতির সঙ্গে সরাসরি সম্পর্কিত হতে হবে।" },
      { title: "College-standard Evaluation", problem: `দুটি ব্যবস্থাপনা বিকল্পের মধ্যে “${name}” অনুযায়ী অধিক কার্যকরটি নির্বাচন করো।`, approach: ["দুটি বিকল্পের উদ্দেশ্য ও সম্পদ প্রয়োজন তুলনা করো।", "সময়, ব্যয়, ঝুঁকি ও কর্মী-প্রভাব বিশ্লেষণ করো।", "প্রতিটির একটি সুবিধা ও সীমাবদ্ধতা দাও।", "শর্তসাপেক্ষ সুপারিশ লেখো।"], checkpoint: "শুধু পছন্দ নয়—তুলনামূলক প্রমাণই উচ্চতর দক্ষতার নম্বর নিশ্চিত করে।" },
    ],
    civics: [
      { title: "Constitutional Analysis", problem: `একটি স্থানীয় দপ্তর তথ্য দিতে অস্বীকার করেছে এবং অভিযোগের জবাব দেয়নি। “${name}” অনুযায়ী ঘটনাটি বিশ্লেষণ করো।`, approach: ["সংশ্লিষ্ট অধিকার, প্রতিষ্ঠান ও সুশাসনের নীতি শনাক্ত করো।", "স্বচ্ছতা ও জবাবদিহির ঘাটতি ব্যাখ্যা করো।", "আইনসম্মত অভিযোগ/তথ্যপ্রাপ্তির পথ উল্লেখ করো।", "নাগরিক ও প্রতিষ্ঠানের দায়িত্ব ভারসাম্য করে সিদ্ধান্ত দাও।"], checkpoint: "ব্যক্তিগত ক্ষোভ নয়—আইন, নীতি, প্রতিষ্ঠান ও নাগরিক প্রভাব ধরে উত্তর লিখবে।" },
      { title: "Institution Comparison", problem: `“${name}” প্রসঙ্গে আইনসভা, নির্বাহী ও বিচার বিভাগের ভূমিকা তুলনা করো।`, approach: ["প্রতিটি বিভাগের প্রধান কাজ এক বাক্যে লেখো।", "ক্ষমতার পৃথকীকরণের উদ্দেশ্য বোঝাও।", "পারস্পরিক নিয়ন্ত্রণের একটি উদাহরণ দাও।", "স্বাধীনতা ও জবাবদিহির ভারসাম্য মূল্যায়ন করো।"], checkpoint: "পৃথকীকরণ মানে সম্পূর্ণ বিচ্ছিন্নতা নয়; সাংবিধানিক সহযোগিতা ও নিয়ন্ত্রণও দেখাতে হবে।" },
      { title: "Citizen Response", problem: `“${name}” সংশ্লিষ্ট একটি কমিউনিটি সমস্যায় দায়িত্বশীল নাগরিকের পদক্ষেপ সাজাও।`, approach: ["তথ্য যাচাই ও সমস্যার আইনগত দিক বোঝো।", "শান্তিপূর্ণ ও প্রাতিষ্ঠানিক অংশগ্রহণের পথ বেছে নাও।", "সংশ্লিষ্ট কর্তৃপক্ষ ও অংশীজনকে যুক্ত করো।", "ফল পর্যবেক্ষণ ও জবাবদিহির ব্যবস্থা রাখো।"], checkpoint: "নাগরিক অংশগ্রহণ হতে হবে আইনসম্মত, তথ্যভিত্তিক, অন্তর্ভুক্তিমূলক ও ফলমুখী।" },
    ],
    history: [
      { title: "Chronology Lab", problem: `“${name}” অধ্যায়ের ঘটনাগুলো পটভূমি, মোড় পরিবর্তনকারী ঘটনা এবং ফলাফল—এই তিন স্তরে সাজাও।`, approach: ["শুরু ও শেষ সময়সীমা নির্ধারণ করো।", "প্রধান তারিখ, ব্যক্তি ও ঘটনাকে ক্রমানুসারে বসাও।", "প্রতিটি ঘটনার সঙ্গে তাৎক্ষণিক কারণ ও ফল যুক্ত করো।", "দীর্ঘমেয়াদি ঐতিহাসিক গুরুত্ব আলাদা করে লেখো।"], checkpoint: "শুধু তারিখের তালিকা নয়; ঘটনাগুলোর কারণগত সংযোগ দেখাতে হবে।" },
      { title: "Source Analysis", problem: `একই ঘটনা নিয়ে সরকারি নথি ও প্রত্যক্ষদর্শীর স্মৃতিতে ভিন্নতা আছে। “${name}” বুঝতে উৎস দুটি মূল্যায়ন করো।`, approach: ["উৎসের রচয়িতা, সময় ও উদ্দেশ্য চিহ্নিত করো।", "প্রত্যেক উৎসের শক্তি ও সম্ভাব্য পক্ষপাত লেখো।", "মিল ও অমিল নির্ধারণ করো।", "অন্য প্রমাণ দিয়ে যাচাই করে সীমিত সিদ্ধান্ত দাও।"], checkpoint: "একটি উৎস বাতিল নয়; উৎপত্তি ও সীমাবদ্ধতা বুঝে পারস্পরিক যাচাই করতে হবে।" },
      { title: "Significance Essay", problem: `“${name}” বাংলাদেশের ইতিহাসে কেন গুরুত্বপূর্ণ—তা তাৎক্ষণিক ও দীর্ঘমেয়াদি ফল দিয়ে বিচার করো।`, approach: ["প্রাসঙ্গিক পটভূমি সংক্ষেপে দাও।", "রাজনৈতিক, অর্থনৈতিক ও সামাজিক ফল আলাদা করো।", "সমকালীন মানুষের অভিজ্ঞতা বা প্রমাণ যুক্ত করো।", "পরবর্তী ঘটনার ওপর প্রভাব দেখিয়ে ভারসাম্যপূর্ণ সিদ্ধান্ত দাও।"], checkpoint: "‘গুরুত্বপূর্ণ’ বললেই হবে না; কী বদলেছে, কার জন্য এবং কতদিন—এগুলো দেখাও।" },
    ],
    english: [
      { title: "Writing Workshop", problem: `Complete an HSC-standard task on “${chapter.title}” for the stated audience and purpose.`, approach: ["Underline the task, audience, format and required points.", "Prepare a brief outline with one controlling idea per paragraph.", "Write in accurate, natural English with suitable transitions.", "Check task completion, grammar, spelling, punctuation and word limit."], checkpoint: "A polished response is relevant, organised, accurate and complete—not merely long." },
      { title: "Error Clinic", problem: `Improve a weak response on “${chapter.title}” containing repetition, tense shift and an unclear conclusion.`, approach: ["Remove ideas that do not answer the task.", "Combine repeated points and restore logical order.", "Correct tense, agreement, modifiers and punctuation.", "Rewrite the conclusion so it answers the question directly."], checkpoint: "Explain each major correction in Bangla, but keep the corrected answer in English." },
      { title: "Timed Board Task", problem: `Plan and complete a “${chapter.title}” response within a realistic exam-time limit.`, approach: ["Reserve 10% of time for planning.", "Use 80% for a complete first draft.", "Reserve the final 10% for language and format checking.", "Mark the strongest sentence and one sentence that still needs improvement."], checkpoint: "Time control must protect both task completion and final proofreading." },
    ],
  };
  const coreSet = sets[subjectId] ?? [
    { title: "নির্দেশিত অনুশীলন", problem: detail.example, approach: ["প্রশ্নের চাওয়া নির্ধারণ করো।", "প্রাসঙ্গিক ধারণা লেখো।", "তথ্য প্রয়োগ করো।", "উত্তর যাচাই করো।"], checkpoint: detail.core },
  ];
  if (subjectId === "english") return [
    ...coreSet,
    { title: "Transfer Practice", problem: `Use the method from “${chapter.title}” in a fresh HSC-style task with a different audience or situation.`, approach: ["Identify the new task, audience, purpose and required format.", "Transfer the chapter method without copying the earlier response.", "Develop each point with relevant support and natural transitions.", "Check whether every instruction has been answered before proofreading."], checkpoint: "A successful transfer keeps the method but adapts content, tone and format to the new task." },
    { title: "Examiner's Marking Lab", problem: `Review a sample “${chapter.title}” answer and turn it into a full-mark response.`, approach: ["Mark task fulfilment and organisation separately.", "Underline vague, repeated or unsupported sentences.", "Correct grammar, vocabulary, spelling, punctuation and format.", "Rewrite the weakest paragraph, then justify the changes."], checkpoint: "The final response must be relevant, coherent, accurate and complete; all rewritten content remains in English." },
  ];
  return [
    ...coreSet,
    { title: "নতুন পরিস্থিতিতে প্রয়োগ", problem: `“${name}” অধ্যায়ের একই পদ্ধতি নতুন বাংলাদেশভিত্তিক পরিস্থিতিতে প্রয়োগ করো: ${detail.example}`, approach: ["প্রদত্ত তথ্য ও প্রশ্নের নির্দেশক শব্দ আলাদা করো।", "প্রাসঙ্গিক ধারণা/সূত্র/নীতি নিজের ভাষায় লেখো।", "তথ্যের সঙ্গে নিয়মের প্রতিটি যোগসূত্র ধাপে ধাপে দেখাও।", "একটি শর্ত বদলালে ফল কীভাবে বদলাবে তা ব্যাখ্যা করো।"], checkpoint: "মুখস্থ উদাহরণ নয়—পদ্ধতি সঠিক রেখে নতুন তথ্য অনুযায়ী ফল ও ব্যাখ্যা বদলাতে হবে।" },
    { title: "পরীক্ষকের মূল্যায়ন অনুশীলন", problem: `“${name}” বিষয়ে একটি উত্তরকে পূর্ণ নম্বরের মানে উন্নীত করো।`, approach: ["সংজ্ঞা/মূল ধারণা সঠিক ও প্রশ্নসংশ্লিষ্ট কি না যাচাই করো।", "প্রতিটি নম্বরের জন্য দৃশ্যমান তথ্য, ধাপ, প্রমাণ বা প্রয়োগ চিহ্নিত করো।", "অপ্রাসঙ্গিক পুনরাবৃত্তি বাদ দিয়ে যুক্তির ফাঁক পূরণ করো।", "উপসংহার প্রশ্নের চাওয়া সরাসরি পূরণ করছে কি না মিলিয়ে পুনর্লিখন করো।"], checkpoint: "পূর্ণ নম্বরের উত্তরে নির্ভুলতা, প্রাসঙ্গিকতা, দৃশ্যমান কার্যপ্রণালি এবং যাচাইকৃত উপসংহার—সব থাকতে হবে।" },
  ];
}

function buildMaterialPack(subjectId: string, chapter: ChapterPreview, detail: BanglaChapterDetail, workshop?: ExamResource["chapterWorkshop"]): NonNullable<ExamResource["materialPack"]> {
  const english = subjectId === "english";
  const title = english ? chapter.title : chapter.titleBn;
  const terms = detail.terms.length ? detail.terms : [title];
  const lessonNames = (chapter.lessonPlan ?? []).map((lesson) => english ? lesson.title : lesson.titleBn).filter(Boolean);
  const profiles: Record<string,{identity:string;method:string;evidence:string;second:string;mistake:string}> = {
    bangla:{identity:"পাঠ, ভাষা ও পরীক্ষার উত্তর",method:chapter.paper==="1st Paper"?"প্রসঙ্গ ধরো → পাঠের নির্দিষ্ট প্রমাণ দাও → প্রমাণের অর্থ ব্যাখ্যা করো → সামগ্রিক তাৎপর্যে পৌঁছাও":"কাজের উদ্দেশ্য ধরো → নিয়ম/বিন্যাস ঠিক করো → সম্পূর্ণ নমুনা লেখো → বানান ও ভাষা সম্পাদনা করো",evidence:chapter.paper==="1st Paper"?"পাঠের ঘটনা, শব্দ, চিত্রকল্প, চরিত্রের আচরণ ও লেখকের বক্তব্য":"প্রমিত নিয়ম, নির্ধারিত বিন্যাস, শুদ্ধ বাক্য ও সম্পূর্ণ তথ্য",second:"একটি উদ্ধৃতি বা ভাষারীতি কেন গুরুত্বপূর্ণ—নিজের ভাষায় ব্যাখ্যা করো।",mistake:"পাঠের প্রমাণ না দিয়ে মুখস্থ সাধারণ আলোচনা লেখা"},
    english:{identity:"Reading, language and complete task models",method:"Read the task → locate evidence or rule → plan the response → write → edit for accuracy and purpose",evidence:"exact textual evidence, task completion, organisation, grammar, vocabulary and appropriate register",second:"Write one fresh response for a different audience, purpose or context and annotate three changes.",mistake:"using a memorised answer that does not complete the exact task"},
    ict:{identity:"Concept, diagram, code and output lab",method:"সমস্যা/ইনপুট ধরো → নিয়ম, চিত্র বা code লেখো → ধাপে trace করো → output দাও → error test করো",evidence:"labelled diagram, truth table, conversion steps, valid syntax, trace এবং expected output",second:`“${chapter.titleBn}”-এর একটি input বা condition বদলে নতুন output আগে অনুমান করো; তারপর সংশ্লিষ্ট code, truth table বা logic trace দিয়ে যাচাই করো।`,mistake:"শুধু প্রযুক্তির সংজ্ঞা লেখা, কিন্তু কার্যপ্রবাহ, code, চিত্র বা output না দেখানো"},
    accounting:{identity:"লেনদেন, working ও statement lab",method:"তথ্য শনাক্ত → হিসাবের নাম ও শ্রেণি → ডেবিট/ক্রেডিট বা সূত্র → স্বীকৃত ছক → জের/মোট যাচাই",evidence:"তারিখ, হিসাবের নাম, narration, ledger/statement format, working এবং দুই পাশের মিল",second:"একটি adjustment বদলে journal, ledger এবং final statement-এ নতুন প্রভাব দেখাও।",mistake:"শুধু final amount লেখা, working note ও দুই দিকের প্রভাব না দেখানো"},
    finance:{identity:"Cash-flow, formula and decision lab",method:"সময়রেখা আঁকো → cash flow ও চলক বসাও → সূত্রে মান প্রতিস্থাপন → ফলের একক লেখো → ঝুঁকি ও তারল্যসহ সিদ্ধান্ত দাও",evidence:"cash-flow timing, rate conversion, complete working, unit, risk and decision condition",second:"Discount rate, মেয়াদ বা cash flow বদলালে সিদ্ধান্ত কীভাবে বদলায়—পুনর্গণনা করো।",mistake:"সময় ও হারের একক না মিলিয়ে সূত্রে মান বসানো বা হিসাবের ফলকে সিদ্ধান্ত ভেবে থেমে যাওয়া"},
    business:{identity:"Case, management action and result lab",method:"সমস্যার লক্ষণ → প্রযোজ্য নীতি → উদ্দীপকের প্রমাণ → বাস্তব পদক্ষেপ → দায়িত্ব → KPI",evidence:"case-এর নির্দিষ্ট আচরণ/ঘটনা, ব্যবস্থাপনা নীতি, বাস্তবায়নযোগ্য action এবং মাপযোগ্য ফল",second:"একটি বাংলাদেশি SME-তে একই সমস্যা হলে কম খরচে দুটি বিকল্প পদক্ষেপ তুলনা করো।",mistake:"নীতির নাম লিখে উদ্দীপকের কোন তথ্য নীতিটিকে প্রমাণ করে তা না দেখানো"},
    economics:{identity:"Table, formula, graph and explanation lab",method:"চলক ও শর্ত ধরো → data table/সূত্র → axis ও curve → movement/shift → নতুন ফলের অর্থ",evidence:"এককসহ data, formula working, labelled graph, causal direction and economic interpretation",second:"একটি determinant বদলে নতুন equilibrium বা ফল table ও graph-এ পাশাপাশি দেখাও।",mistake:"movement ও shift গুলিয়ে ফেলা অথবা graph এঁকে কারণ ও ফলের অর্থ না লেখা"},
    civics:{identity:"Concept, institution and lawful remedy lab",method:"ধারণা/অধিকার → সংশ্লিষ্ট প্রতিষ্ঠান → ক্ষমতা ও সীমা → জবাবদিহির প্রক্রিয়া → নাগরিক প্রতিকার",evidence:"পাঠ্যবইসম্মত পরিভাষা, প্রতিষ্ঠানের দায়িত্ব, উদ্দীপকের তথ্য এবং আইনসম্মত প্রক্রিয়া",second:"একই ঘটনায় নাগরিক, প্রশাসন ও আদালত/তদারকি প্রতিষ্ঠানের ভূমিকা আলাদা করো।",mistake:"রাষ্ট্র, সরকার, জাতি, নাগরিকতা বা প্রতিষ্ঠানকে একই অর্থে ব্যবহার করা"},
    history:{identity:"Timeline, source and significance lab",method:"পটভূমি → দীর্ঘমেয়াদি কারণ → তাৎক্ষণিক কারণ → ঘটনাক্রম → ফল → ঐতিহাসিক তাৎপর্য",evidence:"সঠিক কালক্রম, ব্যক্তি, স্থান, উৎস, কারণ–ফলের যোগ এবং স্বল্প/দীর্ঘমেয়াদি প্রভাব",second:"একটি ঘটনার দুটি ভিন্ন উৎসের দৃষ্টিভঙ্গি ও সীমাবদ্ধতা তুলনা করো।",mistake:"কারণ, ঘটনা ও ফল এক তালিকায় মিশিয়ে লেখা বা যাচাই ছাড়া তারিখ যোগ করা"},
    logic:{identity:"Form, rule, test and verdict lab",method:"বাক্যকে যৌক্তিক রূপ দাও → পদ/সংযোজক ধরো → নিয়ম বেছে নাও → truth table/diagram/counterexample → verdict",evidence:"সঠিক প্রতীক/রূপ, rule condition, সম্পূর্ণ test এবং verdict-এর কারণ",second:"একই সিদ্ধান্ত রেখে একটি বৈধ ও একটি অবৈধ যুক্তি তৈরি করে পার্থক্য প্রমাণ করো।",mistake:"সিদ্ধান্ত সত্য বলে যুক্তিকে বৈধ ধরে নেওয়া বা scope না দেখে প্রতীক বসানো"},
    islamic_history:{identity:"Chronology, institution and civilisation lab",method:"সময়–স্থান → পটভূমি → ব্যক্তি/প্রতিষ্ঠান → ঘটনা → তাৎক্ষণিক ফল → সভ্যতাগত প্রভাব",evidence:"নির্ভুল নাম-কালক্রম, প্রেক্ষাপট, গ্রহণযোগ্য ঐতিহাসিক প্রমাণ ও ভারসাম্যপূর্ণ মূল্যায়ন",second:"একটি শাসন/ঘটনার প্রশাসনিক, জ্ঞানচর্চা ও সাংস্কৃতিক প্রভাব আলাদা করে বিচার করো।",mistake:"অযাচাইকৃত কাহিনি নিশ্চিত ইতিহাস হিসেবে লেখা বা অবদান লিখে সীমাবদ্ধতা বাদ দেওয়া"},
    statistics:{identity:"Data, formula, calculation and interpretation lab",method:"data type ও scale → table/class → formula ও symbol → substitution → calculation → result interpretation",evidence:"data source, class/scale, correct notation, complete working, unit and limitation",second:"একটি extreme value যোগ করে ফল পুনর্গণনা করো এবং কোন measure বেশি বদলেছে ব্যাখ্যা করো।",mistake:"সূত্র ও অঙ্ক লিখে ফলের বাস্তব অর্থ, একক বা সীমাবদ্ধতা না বলা"},
    geography:{identity:"Location, process, map and impact lab",method:"স্থান/অঞ্চল → নিয়ামক → প্রক্রিয়ার ধাপ → map/profile/diagram → মানুষ–পরিবেশের ফল → ব্যবস্থাপনা",evidence:"title, direction, scale/legend, labelled process, Bangladesh location and cause–effect chain",second:"বাংলাদেশের দুটি অঞ্চল একই মানদণ্ডে তুলনা করে একটি labelled sketch map দাও।",mistake:"চিত্রে title/label/direction না দেওয়া বা স্থানিক প্রমাণ ছাড়া সাধারণ বর্ণনা লেখা"},
  };
  const profile = profiles[subjectId] ?? {identity:"Concept and application material",method:"concept → evidence → application → conclusion",evidence:"accurate terminology and visible reasoning",second:"Apply the idea to a fresh context.",mistake:"giving a conclusion without evidence"};
  const conceptNotes = terms.slice(0,4).map((term,index)=>({
    title: term,
    explanation: english
      ? `${term} is part of the chapter's central idea: ${detail.core} Connect it to ${terms[(index+1)%terms.length] ?? title} instead of memorising it alone.`
      : `${term} আলাদা করে মুখস্থ করার শব্দ নয়। “${title}” অধ্যায়ের মূল কথার মধ্যে এর ভূমিকা হলো—${detail.core} উত্তরে ${terms[(index+1)%terms.length] ?? title}-এর সঙ্গে সম্পর্কটি স্পষ্ট করলে ধারণাটি সম্পূর্ণ হবে।`,
    example: english
      ? `${detail.example} Use ${profile.evidence} to show exactly where ${term} appears in the task.`
      : `উদাহরণ: ${detail.example} এখানে ${term} কোথায় কাজ করছে, ${profile.evidence} দিয়ে চিহ্নিত করো।`,
  }));
  const primarySteps = workshop?.visual.steps ?? profile.method.split(" → ");
  const secondSteps = english
    ? ["Identify what changes in the new task.","Keep the governing rule unchanged.","Adapt the evidence, working or structure.","Check the answer against the new purpose."]
    : ["নতুন প্রশ্নে কোন তথ্য বদলেছে, আগে দাগ দাও।","মূল নিয়ম অপরিবর্তিত রেখে নতুন তথ্য বসাও।","প্রয়োজনীয় হিসাব, প্রমাণ, ছক বা চিত্র সম্পূর্ণ করো।","আগের ফলের সঙ্গে নতুন ফল মিলিয়ে পার্থক্যের কারণ লেখো।"];
  const workedAnswers = [
    {
      label: english ? "Guided model" : "সমাধানসহ মূল উদাহরণ",
      question: workshop?.cqSolution.stimulus ?? detail.example,
      steps: primarySteps,
      answer: english
        ? `A complete response uses this route: ${profile.method}. The judgement must be supported by ${profile.evidence}; avoid ${profile.mistake}.`
        : `সমাধানে এই ধারাটি দৃশ্যমান থাকবে—${profile.method}। সিদ্ধান্তের পক্ষে ${profile.evidence} দেখাতে হবে। বিশেষভাবে খেয়াল রাখবে: ${profile.mistake}।`,
    },
    {
      label: english ? "Transfer model" : "নতুন পরিস্থিতিতে প্রয়োগ",
      question: profile.second,
      steps: secondSteps,
      answer: english
        ? `The second response should preserve the chapter rule but change the evidence and final wording for the new context. Verify it with ${profile.evidence}.`
        : `নতুন উত্তরে অধ্যায়ের নিয়ম একই থাকবে, কিন্তু বদলে যাওয়া তথ্য অনুযায়ী working/প্রমাণ ও ফল বদলাবে। পূর্ণ উত্তরের শেষে ${profile.evidence} দিয়ে সিদ্ধান্তটি যাচাই করবে।`,
    },
  ];
  const cqQuestions = english
    ? ["State the central idea or rule.","Explain why the rule matters.","Apply it to the supplied task.","Evaluate the result and justify the final response."]
    : [`${terms[0] ?? title} কী?`,`${terms[0] ?? title} ও ${terms[1] ?? title}-এর সম্পর্ক ব্যাখ্যা করো।`,`উদ্দীপকের তথ্য ধরে “${title}”-এর নিয়ম প্রয়োগ করো।`,`সমাধান/সিদ্ধান্তটির যথার্থতা প্রমাণ ও সীমাবদ্ধতাসহ মূল্যায়ন করো।`];
  const workshopAnswers = workshop?.cqSolution.parts.map(part=>{
    if (part.marks === 1) return part.answer;
    if (english) return `${part.answer} The response earns its ${part.marks} marks by connecting the stated rule to ${profile.evidence} and explaining the resulting effect.`;
    if (part.marks === 2) return `${part.answer} অর্থাৎ মূল ধারণা ও এর ফলের মধ্যে কারণ–সম্পর্কটি স্পষ্ট; শুধু সংজ্ঞা লিখলে এই অংশ সম্পূর্ণ হবে না।`;
    if (part.marks === 3) return `${part.answer} উদ্দীপকের নির্ণায়ক তথ্যের সঙ্গে নিয়মটির সরাসরি যোগ এখানেই; প্রয়োজনীয় ${profile.evidence} দেখালে প্রয়োগের তিনটি ধাপ সম্পূর্ণ হয়।`;
    return `${part.answer} এই সিদ্ধান্তের পক্ষে ${profile.evidence} প্রধান প্রমাণ। তবে তথ্য বা শর্ত বদলালে বিকল্প ফল হতে পারে—তাই প্রদত্ত তথ্যের সীমার মধ্যে তুলনা করে এই সিদ্ধান্তটিই অধিক গ্রহণযোগ্য।`;
  });
  const fallbackAnswers = english
    ? [`${terms[0] ?? title} is the precise chapter idea requested in the question.`,`It matters because ${detail.core}`,`In the supplied task, use ${profile.method}; cite the decisive evidence rather than repeating the task.`,`The stronger judgement is the one supported by ${profile.evidence}. It should also acknowledge one alternative or limitation.`]
    : [`${terms[0] ?? title} হলো “${title}” অধ্যায়ের প্রাসঙ্গিক মূল ধারণা; এক বাক্যে পাঠ্যবইসম্মত পরিচয় লিখবে।`,`${detail.core} তাই ${terms[0] ?? title} ও ${terms[1] ?? title}-এর সম্পর্ক কারণ–ফলসহ দুই থেকে তিনটি বাক্যে ব্যাখ্যা করবে।`,`উদ্দীপকের নির্ণায়ক তথ্য আলাদা করে ${profile.method} ধারায় প্রয়োগ দেখাবে। শুধু নিয়ম লিখলে প্রয়োগের উত্তর সম্পূর্ণ হবে না।`,`মূল্যায়নে ${profile.evidence} ব্যবহার করে পক্ষে প্রমাণ, একটি বিকল্প/সীমাবদ্ধতা এবং প্রশ্নমাফিক চূড়ান্ত সিদ্ধান্ত লিখবে।`];
  const answers = workshopAnswers ?? fallbackAnswers;
  const fullCq = {
    stimulus: workshop?.cqSolution.stimulus ?? (english ? detail.example : `উদ্দীপক: ${detail.example}`),
    parts: cqQuestions.map((question,index)=>({label:english?String.fromCharCode(97+index):["ক","খ","গ","ঘ"][index],marks:index+1,question,answer:answers[index] ?? fallbackAnswers[index]})),
  };
  const selfCheck = (lessonNames.length ? lessonNames : terms).slice(0,5).map((lesson,index)=>({
    question: english ? `What must you demonstrate in “${lesson}”?` : `“${lesson}” অংশে কী দেখাতে হবে?`,
    answer: english
      ? `${detail.core} Use ${profile.evidence}; the main mistake to avoid is ${profile.mistake}.`
      : `${detail.core} উত্তরে ${profile.evidence} দৃশ্যমান রাখবে। যে ভুলটি এড়াবে: ${profile.mistake}।`,
  }));
  return {
    identity: profile.identity,
    assessmentFormat: !english && !(subjectId === "bangla" && chapter.paper === "2nd Paper") ? "cq" : "written-task",
    introduction: english ? `${title} becomes useful when the learner can explain, demonstrate and transfer it—not merely repeat a definition.` : `“${title}” সত্যি শেখা হবে তখনই, যখন সংজ্ঞার বাইরে নিয়মটি বুঝিয়ে বলতে, উদাহরণে দেখাতে এবং নতুন প্রশ্নে প্রয়োগ করতে পারবে। এই material pack সেই তিনটি কাজ একসঙ্গে করাবে।`,
    conceptNotes,workedAnswers,fullCq,selfCheck,
  };
}

function buildModelExamples(subjectId: string, chapter: ChapterPreview, detail: BanglaChapterDetail): NonNullable<ExamResource["modelExamples"]> {
  const title = chapter.titleBn;
  const firstTerm = detail.terms[0] ?? title;
  if (subjectId === "english") {
    const topic = chapter.title;
    if (/summary/i.test(topic)) return [{
      kind: "Summary", title: "Worked summary · select, compress, rewrite",
      prompt: "A passage explains that education changes behaviour, develops civic responsibility and helps people improve community life. Write a summary in your own words.",
      answer: ["Education becomes meaningful when it improves conduct and inspires responsible action. By applying knowledge, skills and values to public life, learners can challenge injustice and contribute to the wellbeing of their community."],
      examinerNote: "Keep only the central claim and essential support. Remove examples, quotations and repetition; do not add a personal opinion."
    }];
    if (/flow.?chart|information transfer/i.test(topic)) return [{
      kind: "Flow chart", title: "Worked flow chart · parallel phrases",
      prompt: "A passage describes how a learner reads a problem, identifies evidence, compares alternatives, chooses a response and reviews the result. Transfer the process into six boxes.",
      answer: ["1. Reading the problem carefully → 2. Identifying relevant evidence → 3. Comparing possible alternatives → 4. Selecting a justified response → 5. Applying the response → 6. Reviewing the result"],
      examinerNote: "Preserve the passage order, use short parallel phrases and include every required stage—complete sentences are unnecessary."
    }];
    if (/graph|chart/i.test(topic)) return [{
      kind: "Graph", title: "Model graph response · overview before detail",
      prompt: "A line graph shows a fall in the poverty rate from 45% in 1995 to 35% in 2003, 30% in 2007 and 28% in 2010. Describe it in at least 80 words.",
      answer: ["The line graph illustrates the percentage of people living below the poverty line between 1995 and 2010. Overall, the rate declined throughout the period. It stood at 45% in 1995 and fell by ten percentage points to 35% in 2003. The downward trend continued, reaching 30% in 2007 and 28% in 2010. The sharpest fall occurred during the first eight years, whereas the decrease from 2007 to 2010 was comparatively small. Thus, the graph indicates substantial progress, although more than one quarter of the population still remained below the poverty line in 2010."],
      examinerNote: "State the overall trend, compare key figures and quote units accurately. Do not invent reasons that the graph does not show."
    }];
    if (/story/i.test(topic)) return [{
      kind: "Story", title: "Model story completion · conflict, action, consequence",
      prompt: "Complete the story: Two friends promised to help each other while crossing a forest. Suddenly, a bear appeared…",
      answer: ["One friend climbed a tree without looking back. The other could not climb, so he lay still and held his breath, remembering that bears usually avoid a motionless body. The bear sniffed his face and left. When the danger had passed, the friend in the tree climbed down and jokingly asked what the bear had whispered. The other replied, ‘It advised me never to trust a friend who deserts me in danger.’ Ashamed, the selfish friend apologised. They continued their journey, but both now understood that friendship is proved by action, not by promises."],
      examinerNote: "Continue from the supplied opening, keep tense and characters consistent, create a believable turning point and finish with a clear outcome."
    }];
    if (/articles|prepositions|verbs|transformation|narration|pronoun|modifiers|connectors|punctuation|completing sentences|special words/i.test(topic)) return [{
      kind: "Grammar lab", title: `Solved passage · ${topic}`,
      prompt: `Edit the following idea using the rules of ${topic}: “A student read a passage carefully. The student wanted understand it. Therefore the difficult words discouraged the student.”`,
      answer: ["Improved version: A student read the passage carefully because the student wanted to understand it. Although some words were difficult, they did not discourage the learner.", "Check: ‘the passage’ identifies a specific text; ‘wanted to understand’ needs the infinitive; ‘although’ expresses the intended contrast; ‘they’ clearly refers to ‘some words’."],
      examinerNote: "A grammar answer must fit both sentence structure and passage meaning. Explain why the correction works instead of memorising an isolated form."
    }];
    const writingFocus = /email|letter|application|formal writing/i.test(topic);
    const compositionFocus = /paragraph|composition|essay|story|writing/i.test(topic);
    return [
      {
        kind: "Paragraph", title: "Model paragraph · organised, specific and natural",
        prompt: `Write a paragraph connected to “${topic}” in about 150–180 words.`,
        answer: [
          `${topic} is important because it influences both individual choices and the wider community. A strong response should begin with a clear controlling idea instead of a memorised quotation.`,
          "The next sentences should explain the idea with two or three connected points. Each point needs a relevant example, consequence or contrast; unrelated facts only make the paragraph longer.",
          "In Bangladesh, the topic can be connected to students, families, institutions or public life when that connection is genuinely relevant. The concluding sentence should return to the central idea and state a realistic lesson or action."
        ],
        examinerNote: "Check unity, logical order, sentence variety, grammar, spelling and whether every sentence supports the topic sentence."
      },
      {
        kind: writingFocus ? "Email" : "Letter", title: writingFocus ? "Model formal email" : "Model letter",
        prompt: `Write to the appropriate person about a practical issue related to “${topic}”.`,
        answer: [
          "Subject: Request for an educational awareness session",
          "Dear Sir/Madam,",
          `I am writing on behalf of the students of our college to request an awareness session related to ${topic}. The session would help learners understand the issue, examine reliable evidence and apply the lesson responsibly in real life.`,
          "We would be grateful if the programme could be arranged next Thursday during the activity period. A short presentation followed by a question-and-answer session would be especially useful.",
          "Yours faithfully,\nA Student Representative\nClass XII"
        ],
        examinerNote: "Keep the subject line precise, purpose visible in the opening, details in the body and the closing appropriate to the audience."
      },
      {
        kind: "Composition", title: compositionFocus ? "Model composition plan and opening" : "Transfer writing model",
        prompt: `Develop an HSC-standard composition related to “${topic}”.`,
        answer: [
          "Plan: introduction → present situation → causes or dimensions → effects → practical responses → conclusion.",
          `Opening: “${topic}” is not an isolated textbook idea; it shapes the way people understand problems and respond to them. Its importance becomes clearer when we connect the central concept with evidence from everyday life.`,
          "Development rule: use one controlling idea in each paragraph, explain it, support it with an example and link it to the next paragraph.",
          "Conclusion: restate the position without repeating the introduction word for word, and end with a realistic recommendation."
        ],
        examinerNote: "A full composition needs developed paragraphs; this model gives the structure and a polished opening, not a passage to memorise blindly."
      }
    ];
  }
  if (subjectId === "bangla" && chapter.paper === "2nd Paper") {
    if (/ধ্বনিবিজ্ঞান/.test(title)) return [
      {kind:"উচ্চারণ ল্যাব",title:"ধ্বনি–বর্ণ আলাদা করে বোঝো",prompt:"‘ঋণ’, ‘পদ্ম’ ও ‘লক্ষ্য’ শব্দের উচ্চারণগত সতর্কতা লেখো।",answer:["ঋণ—লিখিত রূপ দেখে ‘রিন’ বানান করা যাবে না; প্রমিত উচ্চারণ ও শুদ্ধ বানান আলাদা করে মনে রাখবে।","পদ্ম—যুক্তবর্ণটি ভেঙে লিখলে পদ্+ম; উচ্চারণে অপ্রয়োজনীয় স্বর যোগ করবে না।","লক্ষ্য—ক্ষ্য যুক্তধ্বনির অবস্থান চিনে বানান লিখবে; ‘লখো’ ধরনের কথ্য রূপ পরীক্ষার বানান নয়।"],examinerNote:"উচ্চারণ, বর্ণ ও বানান—তিনটিকে এক জিনিস ধরে উত্তর দিও না। উদাহরণে কোন নিয়ম কাজ করেছে তা এক লাইনে লেখো।"},
      {kind:"বানান সংশোধন",title:"ভুল ধরো, নিয়ম বলো, শুদ্ধ রূপ লেখো",prompt:"ভুলগুলো সংশোধন করো: আকাংখা, মুমুর্ষু, স্বায়ত্বশাসন।",answer:["আকাঙ্ক্ষা—কাঙ্ক্ষ ধ্বনিগুচ্ছ অক্ষুণ্ন থাকবে।","মুমূর্ষু—দীর্ঘ ঊ-কার এবং র্ষু রূপ ঠিক রাখতে হবে।","স্বায়ত্তশাসন—‘স্বায়ত্ত’ শব্দে দ্বিত্ব ত থাকবে।"],examinerNote:"শুধু শুদ্ধ বানান নয়; যে অংশে ভুল হয়েছে সেটি চিহ্নিত করলে নিয়মটি মনে থাকে।"}
    ];
    if (/রূপতত্ত্ব/.test(title)) return [
      {kind:"শব্দগঠন",title:"মূল শব্দ থেকে গঠন দেখো",prompt:"‘অসামাজিক’, ‘মানবতা’ ও ‘রাজপথ’ শব্দের গঠন বিশ্লেষণ করো।",answer:["অ+সামাজিক = অসামাজিক; এখানে ‘অ-’ নঞর্থক উপসর্গ।","মানব+তা = মানবতা; ‘-তা’ ভাববাচক প্রত্যয়।","রাজা+পথ = রাজপথ; দুই পদের অর্থসংযোগে সমাসবদ্ধ শব্দ।"],examinerNote:"উপসর্গ, প্রত্যয় ও সমাসের নাম আন্দাজে লিখবে না—মূল শব্দ, যুক্ত অংশ এবং নতুন অর্থ মিলিয়ে দেখবে।"},
      {kind:"শব্দশ্রেণি",title:"বাক্যে কাজ দেখে পদ চেনো",prompt:"‘পরিশ্রমী শিক্ষার্থী মন দিয়ে পড়ে’—পদ পরিচয় দাও।",answer:["পরিশ্রমী—বিশেষণ; শিক্ষার্থীর গুণ বোঝায়।","শিক্ষার্থী—বিশেষ্য; ব্যক্তি নির্দেশ করে।","মন দিয়ে—ক্রিয়াবিশেষণীয় পদগুচ্ছ; কীভাবে পড়ে তা বোঝায়।","পড়ে—ক্রিয়া; কাজ সংঘটিত হওয়া প্রকাশ করে।"],examinerNote:"একই শব্দ ভিন্ন বাক্যে ভিন্ন পদ হতে পারে; তাই অভিধানগত অর্থ নয়, বাক্যের কাজ দেখবে।"}
    ];
    if (/বাক্যতত্ত্ব/.test(title)) return [
      {kind:"বাক্য রূপান্তর",title:"অর্থ অক্ষুণ্ন রেখে গঠন বদলাও",prompt:"‘পরিশ্রম করলে সফল হবে’ বাক্যটি যৌগিক ও সরল বাক্যে রূপান্তর করো।",answer:["যৌগিক: পরিশ্রম করো, তাহলে সফল হবে।","সরল: পরিশ্রমের মাধ্যমে সফল হওয়া যায়।"],examinerNote:"রূপান্তরে মূল বক্তব্য, কর্তা ও কারণ–ফল বদলে গেলে উত্তর ভুল হবে।"},
      {kind:"উক্তি পরিবর্তন",title:"বক্তা, কাল ও নির্দেশক শব্দ মিলাও",prompt:"শিক্ষক বললেন, ‘তোমরা আজ কাজটি শেষ করো।’—পরোক্ষ উক্তি করো।",answer:["শিক্ষক শিক্ষার্থীদের সেদিন কাজটি শেষ করতে বললেন।"],examinerNote:"‘তোমরা’→‘শিক্ষার্থীদের’, ‘আজ’→‘সেদিন’ এবং আদেশসূচক ক্রিয়া→‘শেষ করতে বললেন’—তিন পরিবর্তনই দেখবে।"}
    ];
    if (/বাগর্থতত্ত্ব|সমার্থক|ভিন্নার্থক|সমোচ্চারিত|বিপরীতার্থক|বাক্য সংকোচন|বাগধারা|প্রবাদ|পরিভাষা/.test(title)) return [
      {kind:"প্রসঙ্গভিত্তিক শব্দ",title:"তালিকা নয়—বাক্যে অর্থ যাচাই",prompt:`“${title}” থেকে দুটি শব্দ/প্রকাশ বেছে অর্থসহ বাক্যে প্রয়োগ করো।`,answer:["‘অকালকুষ্মাণ্ড’—অপদার্থ ব্যক্তি; দায়িত্ব দিয়েও সে কাজ না করায় সবাই তাকে অকালকুষ্মাণ্ড বলল।","‘চোখে সর্ষেফুল দেখা’—আঘাত বা বিপদে দিশেহারা হওয়া; দুর্ঘটনার ধাক্কায় সে চোখে সর্ষেফুল দেখল।"],examinerNote:"বাগধারা বা শব্দের অর্থ লিখে এমন বাক্য দেবে যেখানে ব্যঞ্জিত অর্থ স্পষ্ট; আক্ষরিক বাক্য গ্রহণযোগ্য নয়।"},
      {kind:"Exam drill",title:"ভুল বিকল্প বাদ দেওয়ার কৌশল",prompt:"‘যা সহজে অতিক্রম করা যায় না’—এক কথায় প্রকাশ করো এবং একটি বাক্য লেখো।",answer:["দুরতিক্রম্য। বাক্য: প্রবল স্রোতের কারণে নদীপথটি দুরতিক্রম্য হয়ে উঠেছিল।"],examinerNote:"এক কথায় প্রকাশে পদটির বানান, অর্থ এবং বাক্যে পদ হিসেবে ব্যবহার—তিনটি যাচাই করো।"}
    ];
    if (/অনুবাদ/.test(title)) return [
      {kind:"অনুবাদ কর্মশালা",title:"শব্দ নয়, সম্পূর্ণ ভাব স্থানান্তর",prompt:"Translate into natural Bangla: ‘Education should prepare young people not only for employment but also for responsible citizenship.’",answer:["শিক্ষার লক্ষ্য শুধু তরুণদের কর্মসংস্থানের উপযোগী করা নয়; দায়িত্বশীল নাগরিক হিসেবেও গড়ে তোলা।"],examinerNote:"‘not only…but also’ সম্পর্কটি বাংলায় স্বাভাবিকভাবে রাখো; ইংরেজি শব্দক্রম নকল কোরো না।"},
      {kind:"সম্পাদনা",title:"আক্ষরিক অনুবাদকে প্রাঞ্জল করো",prompt:"‘সে একটি সিদ্ধান্ত গ্রহণ করল যে সে যাবে’—বাক্যটি প্রাঞ্জল করো।",answer:["সে যাওয়ার সিদ্ধান্ত নিল।"],examinerNote:"অর্থ না হারিয়ে অপ্রয়োজনীয় ভারী শব্দ ও ইংরেজি কাঠামো বাদ দাও।"}
    ];
    if (/অনুচ্ছেদ/.test(title)) return [{kind:"অনুচ্ছেদ",title:"পূর্ণ নমুনা · কেন্দ্রীয় ভাব অক্ষুণ্ন",prompt:"‘নিরাপদ ইন্টারনেট ব্যবহার’ বিষয়ে একটি অনুচ্ছেদ লেখো।",answer:["ইন্টারনেট শিক্ষা, যোগাযোগ ও প্রয়োজনীয় তথ্য পাওয়ার গুরুত্বপূর্ণ মাধ্যম; তবে অসতর্ক ব্যবহার ব্যক্তিগত তথ্য, সময় ও মানসিক নিরাপত্তাকে ঝুঁকিতে ফেলতে পারে। নিরাপদ থাকতে শক্তিশালী আলাদা password ব্যবহার, two-factor authentication চালু এবং অচেনা link বা attachment এড়িয়ে চলা দরকার। সামাজিক যোগাযোগমাধ্যমে ঠিকানা, পরিচয়পত্র বা আর্থিক তথ্য প্রকাশ করা উচিত নয়। কোনো খবর শেয়ার করার আগে নির্ভরযোগ্য উৎসে যাচাই করতে হবে। হয়রানি বা প্রতারণার শিকার হলে প্রমাণ সংরক্ষণ করে অভিভাবক, শিক্ষক বা সংশ্লিষ্ট কর্তৃপক্ষকে জানানো জরুরি। প্রযুক্তিকে ভয় নয়—জ্ঞান, সংযম ও দায়িত্বের সঙ্গে ব্যবহার করাই নিরাপদ ডিজিটাল জীবনের ভিত্তি।"],examinerNote:"এক অনুচ্ছেদে একটি কেন্দ্রীয় ভাব; সংজ্ঞা দিয়ে শুরু করে ঝুঁকি, করণীয় ও সিদ্ধান্ত স্বাভাবিকভাবে যুক্ত করো।"}];
    if (/অভিজ্ঞতা/.test(title)) return [{kind:"অভিজ্ঞতা বর্ণন",title:"ঘটনা, অনুভূতি ও শেখা",prompt:"বন্যার্তদের সহায়তা কার্যক্রমে অংশ নেওয়ার অভিজ্ঞতা লেখো।",answer:["কলেজের স্বেচ্ছাসেবক দলের সঙ্গে সকালেই আশ্রয়কেন্দ্রে পৌঁছাই। প্রথমে মনে হয়েছিল খাবারের প্যাকেট বিলি করাই প্রধান কাজ; কিন্তু তালিকা না থাকায় একই পরিবার দুবার পাচ্ছিল, কেউ বাদ পড়ছিল। আমরা স্থানীয় প্রতিনিধির সহায়তায় পরিবারভিত্তিক তালিকা করি, শিশু ও অসুস্থদের আগে দিই এবং বিশুদ্ধ পানির স্থান চিহ্নিত করি। ক্লান্তি ছিল, তবু এক বৃদ্ধার স্বস্তির হাসি বুঝিয়ে দিল—সহায়তা মানে শুধু সামগ্রী নয়, শৃঙ্খলা ও মর্যাদাও। ফিরে এসে উপলব্ধি করি, ভালো ইচ্ছাকে কার্যকর করতে পরিকল্পনা ও সমন্বয় জরুরি।"],examinerNote:"দিনলিপির মতো তারিখ–সময় নয়; নির্বাচিত ঘটনার কালক্রম, ব্যক্তিগত অনুভূতি এবং অর্জিত উপলব্ধি রাখো।"}];
    if (/ভাষণ/.test(title)) return [{kind:"ভাষণ",title:"শ্রোতাকে সঙ্গে নিয়ে এগোনো বক্তব্য",prompt:"‘পরীক্ষার প্রস্তুতিতে সময় ব্যবস্থাপনা’ বিষয়ে সহপাঠীদের উদ্দেশে ভাষণ লেখো।",answer:["সম্মানিত শিক্ষকবৃন্দ ও প্রিয় সহপাঠীরা, আসসালামু আলাইকুম। পরীক্ষার আগে আমাদের বড় সমস্যা সময়ের অভাব নয়, সময়ের অস্পষ্ট ব্যবহার। প্রতিদিন তিনটি বাস্তবসম্মত কাজ ঠিক করে কঠিন বিষয়টি সতেজ সময়ে পড়লে চাপ কমে। ২৫–৪০ মিনিট মনোযোগ দিয়ে পড়ার পর ছোট বিরতি, সপ্তাহে এক দিন ভুলের খাতা দেখা এবং নির্দিষ্ট সময়ে model test দেওয়া প্রস্তুতিকে মাপা যায় এমন করে। দীর্ঘ তালিকা নয়—আজ কী শেষ করব, কোথায় ভুল করছি এবং কাল কী পুনরাবৃত্তি করব, এই তিন প্রশ্নের উত্তরই যথেষ্ট। চলুন, ভয় নয়—পরিকল্পনা দিয়ে পরীক্ষার প্রস্তুতি নিয়ন্ত্রণ করি। সবাইকে ধন্যবাদ।"],examinerNote:"সম্বোধন, মনোযোগ-কাড়া সূচনা, ২–৩টি যুক্তি, করণীয় আহ্বান ও সৌজন্যমূলক সমাপ্তি রাখো।"}];
    if (/প্রুফ সংশোধন/.test(title)) return [{kind:"প্রুফ ল্যাব",title:"চিহ্নের আগে ভুলের ধরন শনাক্ত",prompt:"সম্পাদনা করো: ‘শিক্ষার্থীরা বই পড়েনা, তাই তাদের ভাষা জ্ঞান কমে যাচ্ছে।’",answer:["শুদ্ধ: শিক্ষার্থীরা বই পড়ে না, তাই তাদের ভাষাজ্ঞান কমে যাচ্ছে।","সংশোধন: ‘পড়ে না’ আলাদা; ‘ভাষাজ্ঞান’ সমাসবদ্ধ এক শব্দ; বাক্যের কমা যথাস্থানে থাকবে।"],examinerNote:"বানান, শব্দের ফাঁক, বিরামচিহ্ন ও বাক্যের অর্থ—চার স্তরে proofread করো।"}];
    if (/প্রবন্ধ-নিবন্ধ/.test(title)) return [{kind:"প্রবন্ধ",title:"রূপরেখা থেকে পূর্ণাঙ্গ রচনা",prompt:"‘জলবায়ু পরিবর্তন ও বাংলাদেশ’ বিষয়ে প্রবন্ধের রূপরেখা ও একটি উন্নত অনুচ্ছেদ লেখো।",answer:["রূপরেখা: ভূমিকা → বাংলাদেশের ঝুঁকি → কৃষি ও জীবিকা → স্বাস্থ্য ও নগর → অভিযোজন → ব্যক্তি ও রাষ্ট্রের করণীয় → উপসংহার।","নমুনা অনুচ্ছেদ: বাংলাদেশের দীর্ঘ উপকূল, ঘন জনসংখ্যা ও কৃষিনির্ভর জীবিকা জলবায়ু পরিবর্তনের প্রভাবকে তীব্র করে। লবণাক্ততা বাড়লে শুধু ধানের ফলন কমে না; পানীয় জল, স্বাস্থ্য এবং স্থানীয় কর্মসংস্থানও ক্ষতিগ্রস্ত হয়। ফলে অনেক পরিবার শহরমুখী হয় এবং নগরের আবাসন ও সেবায় নতুন চাপ তৈরি হয়। তাই অভিযোজনকে কেবল বাঁধ নির্মাণে সীমাবদ্ধ না রেখে লবণসহিষ্ণু কৃষি, নিরাপদ পানি, আগাম সতর্কতা এবং বিকল্প জীবিকার সঙ্গে যুক্ত করতে হবে।"],examinerNote:"শিরোনামের নিচে ধারাবাহিক উপশিরোনাম নয়; রূপরেখা মাথায় রেখে সংযুক্ত অনুচ্ছেদে যুক্তি ও বাংলাদেশভিত্তিক উদাহরণ দাও।"}];
    if (/দিনলিপি/.test(title)) return [{
      kind: "দিনলিপি", title: "পূর্ণ নমুনা · ঘটনা নয়, দিনের ব্যক্তিগত উপলব্ধি",
      prompt: "কলেজের বিজ্ঞানমেলায় অংশ নেওয়ার অভিজ্ঞতা নিয়ে দিনলিপি লেখো।",
      answer: ["১২ অক্টোবর ২০২৬, সোমবার", "রাত ১০টা ১৫ মিনিট", "আজকের দিনটি অনেক দিন মনে থাকবে। সকাল থেকেই আমাদের দলের ছোট সৌরচালিত সেচযন্ত্রটি ঠিকমতো চলবে কি না—এই দুশ্চিন্তা ছিল। প্রদর্শনী শুরু হলে কয়েকবার সংযোগ খুলে গেলেও আমরা ধৈর্য ধরে সমস্যাটি ঠিক করি। বিচারকেরা শুধু ফল নয়, কেন এই যন্ত্র কৃষকের খরচ কমাতে পারে—সেটিও জানতে চাইলেন। পুরস্কার পাইনি, তবু নিজের হাতে বানানো কাজটি অন্যদের বোঝাতে পেরে অদ্ভুত আত্মবিশ্বাস জন্মেছে। আজ বুঝলাম, ব্যর্থতার ভয় কাটিয়ে চেষ্টা চালিয়ে যাওয়াই শেখার সবচেয়ে বড় অংশ।", "— রাইয়ান"],
      examinerNote: "পাতার ডান দিকে তারিখ–সময়, ব্যক্তিগত স্বর, নির্বাচিত ঘটনা, অনুভূতি ও উপলব্ধি রাখো; সারাদিনের সব ঘটনা তালিকা কোরো না।"
    }];
    if (/প্রতিবেদন/.test(title)) return [{
      kind: "প্রাতিষ্ঠানিক প্রতিবেদন", title: "আবেদনসহ প্রাতিষ্ঠানিক প্রতিবেদন",
      prompt: "কলেজে অনুষ্ঠিত বার্ষিক ক্রীড়া প্রতিযোগিতা সম্পর্কে অধ্যক্ষের কাছে প্রতিবেদন লেখো।",
      answer: ["বরাবর\nঅধ্যক্ষ\n………… কলেজ, ঢাকা", "বিষয়: বার্ষিক ক্রীড়া প্রতিযোগিতা–২০২৬-এর প্রতিবেদন।", "জনাব,\nআপনার ১০ অক্টোবর ২০২৬ তারিখের নির্দেশনা অনুযায়ী নিচে প্রতিবেদনটি পেশ করছি।", "বার্ষিক ক্রীড়া প্রতিযোগিতা উৎসাহ ও শৃঙ্খলার সঙ্গে সম্পন্ন", "গত ৮ অক্টোবর কলেজ মাঠে দিনব্যাপী বার্ষিক ক্রীড়া প্রতিযোগিতা অনুষ্ঠিত হয়। অধ্যক্ষ সকাল ৯টায় অনুষ্ঠানের উদ্বোধন করেন। দৌড়, দীর্ঘ লাফ, গোলক নিক্ষেপ ও দলীয় রিলে-সহ ১২টি ইভেন্টে প্রায় ১৮০ জন শিক্ষার্থী অংশ নেয়। শিক্ষক ও স্বেচ্ছাসেবকেরা নিবন্ধন, নিরাপত্তা ও প্রাথমিক চিকিৎসার দায়িত্ব পালন করেন। বিকেল ৪টায় বিজয়ীদের মধ্যে পুরস্কার বিতরণ করা হয়। অংশগ্রহণ বাড়াতে আগামী বছর মেয়েদের জন্য আরও দুটি দলীয় ইভেন্ট এবং আগে থেকেই অনলাইন নিবন্ধনের সুপারিশ করা হলো।", "প্রতিবেদক\nনাম, শ্রেণি ও রোল"],
      examinerNote: "প্রতিষ্ঠানিক প্রতিবেদনে আবেদন, সূত্র/স্মারক, শিরোনাম, নিরপেক্ষ তথ্য, ফল/সুপারিশ ও স্বাক্ষর থাকবে। সংবাদ প্রতিবেদন হলে আবেদন অংশ থাকবে না।"
    }, {
      kind: "সংবাদ প্রতিবেদন", title: "পত্রিকায় প্রকাশের উপযোগী প্রতিবেদন",
      prompt: "অগ্নিকাণ্ড প্রতিরোধে জনসচেতনতা বিষয়ে সংবাদ প্রতিবেদন লেখো।",
      answer: ["অগ্নিকাণ্ড প্রতিরোধে চাই নিয়মিত মহড়া ও জনসচেতনতা", "নিজস্ব প্রতিবেদক, ঢাকা, ১২ অক্টোবর ২০২৬: ঘনবসতিপূর্ণ এলাকায় বৈদ্যুতিক ত্রুটি, অনিরাপদ গ্যাস সংযোগ এবং জরুরি নির্গমনপথ বন্ধ থাকার কারণে অগ্নিঝুঁকি বাড়ছে। ফায়ার সার্ভিসের কর্মীরা জানিয়েছেন, নিয়মিত তার পরীক্ষা, অনুমোদিত যন্ত্রপাতি ব্যবহার, অগ্নিনির্বাপক সচল রাখা এবং বহির্গমনপথ খোলা রাখলে ক্ষতি অনেক কমানো সম্ভব। বাসিন্দাদের জন্য মহড়া আয়োজন ও জরুরি নম্বর দৃশ্যমান স্থানে রাখারও পরামর্শ দেওয়া হয়েছে। সচেতনতা, নিয়ম মেনে চলা এবং দ্রুত খবর দেওয়াই অগ্নিকাণ্ডে প্রাণহানি কমানোর প্রধান উপায়।"],
      examinerNote: "Headline → byline/place/date → verified facts → source/response → significance; আবেদনপত্রের ভাষা বা ব্যক্তিগত আবেগ ব্যবহার কোরো না।"
    }];
    if (/বৈদ্যুতিন চিঠি|পত্র, আবেদনপত্র/.test(title)) return [{
      kind: "ই-মেইল", title: "কার্যকর বৈদ্যুতিন চিঠি",
      prompt: "কলেজে একটি career counselling session আয়োজনের অনুরোধ জানিয়ে অধ্যক্ষকে ই-মেইল লেখো।",
      answer: ["To: principal@examplecollege.edu.bd", "Subject: Request to arrange a career counselling session", "মাননীয় অধ্যক্ষ,\nএকাদশ–দ্বাদশ শ্রেণির শিক্ষার্থীদের উচ্চশিক্ষার বিষয়, ভর্তি-প্রস্তুতি ও পেশা নির্বাচনের নির্ভরযোগ্য দিকনির্দেশনার জন্য একটি career counselling session আয়োজনের অনুরোধ জানাচ্ছি। বিশ্ববিদ্যালয়ের শিক্ষক ও সংশ্লিষ্ট পেশাজীবীদের নিয়ে ৬০ মিনিটের আলোচনা এবং ২০ মিনিটের প্রশ্নোত্তর পর্ব রাখলে শিক্ষার্থীরা উপকৃত হবে। আগামী মাসের প্রথম বৃহস্পতিবার মিলনায়তনে আয়োজনটি করা যেতে পারে। বিষয়টি বিবেচনা করার জন্য কৃতজ্ঞ থাকব।\nবিনীত\nরাইয়ান\nশ্রেণি XII, রোল …"],
      examinerNote: "To, স্পষ্ট Subject, সম্ভাষণ, উদ্দেশ্য, প্রয়োজনীয় detail, নির্দিষ্ট request ও পরিচয়—সব রাখো; অপ্রয়োজনীয় postal address দিও না।"
    }];
    if (/সারাংশ|সারমর্ম/.test(title)) return [{kind:"সারাংশ–সারমর্ম",title:"মূলভাব ধরে সংক্ষিপ্তকরণ",prompt:"একটি গদ্যাংশে বলা হয়েছে—শিক্ষা কেবল সনদ নয়; জ্ঞানকে মানুষের কল্যাণে কাজে লাগানোই শিক্ষার সার্থকতা। সারাংশ লেখো।",answer:["শিক্ষার প্রকৃত মূল্য সনদে নয়, জ্ঞানের দায়িত্বশীল প্রয়োগে। অর্জিত জ্ঞান মানুষের জীবন ও সমাজের কল্যাণে ব্যবহৃত হলেই শিক্ষা সার্থক হয়।"],examinerNote:"মূল বক্তব্য রাখো, উদাহরণ–পুনরুক্তি বাদ দাও, নিজের ভাষায় লেখো; নতুন মত যোগ কোরো না।"}];
    if (/ভাব-সম্প্রসারণ/.test(title)) return [{kind:"ভাব-সম্প্রসারণ",title:"ভাব → যুক্তি → উদাহরণ → সিদ্ধান্ত",prompt:"‘স্বদেশের উপকারে নেই যার মন, কে বলে মানুষ তারে?’—ভাবসম্প্রসারণ করো।",answer:["মানুষ শুধু নিজের প্রয়োজন পূরণ করে পূর্ণ মানুষ হয়ে ওঠে না; সমাজ ও দেশের প্রতি দায়িত্ববোধ তার মানবিক পরিচয়ের গুরুত্বপূর্ণ মানদণ্ড। যে ব্যক্তি শিক্ষা, শ্রম ও সামর্থ্য দিয়ে মানুষের উপকারে এগিয়ে আসে, সে নিজের জীবনকেও অর্থবহ করে। বিপরীতে, দেশের সংকটে উদাসীন থেকে কেবল ব্যক্তিস্বার্থে ডুবে থাকা বিবেক ও সহমর্মিতার অভাব প্রকাশ করে। স্বদেশপ্রেম মানে অন্ধ আবেগ নয়; আইন মানা, কাজ সততার সঙ্গে করা, সম্পদ রক্ষা এবং অন্যের অধিকারকে সম্মান করাও এর অংশ। তাই দেশের কল্যাণে দায়িত্বশীল অংশগ্রহণই প্রকৃত মানবতার প্রমাণ।"],examinerNote:"উক্তির শব্দার্থ নয়—নিহিত ভাব ব্যাখ্যা করো, যুক্তি ও প্রাসঙ্গিক উদাহরণ দাও, শেষে মূল ভাবেই ফিরে আসো।"}];
    if (/সংলাপ/.test(title)) return [{kind:"সংলাপ",title:"স্বাভাবিক দুই কণ্ঠ, এক পরিষ্কার উদ্দেশ্য",prompt:"বইমেলার গুরুত্ব নিয়ে দুই বন্ধুর সংলাপ লেখো।",answer:["সোহাগ: এবারের বইমেলায় যাবে?\nশাহনাম: অবশ্যই। শুধু বই কেনার জন্য নয়, নতুন লেখক আর নতুন ভাবনার সঙ্গে পরিচিত হওয়ার সুযোগও তো আছে।\nসোহাগ: অনলাইনে বই পাওয়া যায়; মেলায় যাওয়ার আলাদা লাভ কী?\nশাহনাম: একই জায়গায় প্রকাশনা দেখা যায়, লেখকের কথা শোনা যায়, বই হাতে নিয়ে বেছে নেওয়া যায়।\nসোহাগ: ঠিক বলেছ। তবে তালিকা ছাড়া গেলে অপ্রয়োজনীয় বই কিনে ফেলি।\nশাহনাম: তাই আগে বাজেট ও পছন্দের বিষয় লিখে নিই। শনিবার বিকেলে চল?\nসোহাগ: ঠিক আছে। একটি বই পড়ে পরে আমরা দুজন review-ও লিখব।"],examinerNote:"একই বক্তাকে বক্তৃতা দিও না; প্রশ্ন–উত্তর, ভিন্ন মত, অগ্রগতি ও উদ্দেশ্যমূলক সমাপ্তি রাখো।"}];
    if (/ক্ষুদেগল্প/.test(title)) return [{kind:"ক্ষুদেগল্প",title:"দৃশ্য, সংঘাত ও অর্থবহ মোড়",prompt:"‘হারানো মানিব্যাগ’ শিরোনামে একটি ক্ষুদেগল্প লেখো।",answer:["বাসস্ট্যান্ডে পাওয়া মানিব্যাগটিতে টাকা কম, কাগজ বেশি—একটি ওষুধের প্রেসক্রিপশন, বৃদ্ধার ছবি আর হাসপাতালের টোকেন। ফোন নম্বর খুঁজে না পেয়ে নাবিল টোকেনের হাসপাতালেই গেল। কাউন্টারের পাশে উদ্বিগ্ন এক বৃদ্ধ লোক বারবার পকেট দেখছিলেন। পরিচয় মিলিয়ে মানিব্যাগটি ফেরত দিতেই লোকটি টাকার বদলে প্রেসক্রিপশনটি বুকে চেপে ধরলেন। স্ত্রীটির আজ চিকিৎসা হওয়ার কথা। নাবিল বুঝল, সে শুধু একটি মানিব্যাগ নয়—কারও অপেক্ষা ও আশাও ফিরিয়ে দিয়েছে।"],examinerNote:"চরিত্র কম রাখো, দৃশ্য দিয়ে শুরু করো, একটি সংঘাত ও পরিবর্তন দেখাও; শেষে ব্যাখ্যা না করে অর্থটি অনুভব করাও।"}];
    return [
      {
        kind: "Paragraph", title: "নমুনা অনুচ্ছেদ · বিষয়–ব্যাখ্যা–উদাহরণ–উপসংহার",
        prompt: `“${title}” অধ্যায়ের নিয়ম মেনে ‘সুশিক্ষা ও মানবিকতা’ বিষয়ে একটি অনুচ্ছেদ লেখো।`,
        answer: ["সুশিক্ষা কেবল পরীক্ষায় ভালো ফল করার উপায় নয়; এটি মানুষকে বিবেচনাবোধ, দায়িত্বশীলতা ও মানবিক আচরণ শেখায়। জ্ঞান তখনই অর্থবহ হয়, যখন তা অন্যের অধিকারকে সম্মান করতে এবং সমাজের সমস্যার ন্যায়সংগত সমাধান খুঁজতে সাহায্য করে। পরিবার, শিক্ষাপ্রতিষ্ঠান ও সামাজিক পরিবেশ—তিন জায়গাতেই সততা, সহমর্মিতা ও যুক্তিবোধের চর্চা প্রয়োজন। তাই শিক্ষার সাফল্য শুধু সনদে নয়, শিক্ষার্থীর চিন্তা ও কাজে প্রকাশ পায়।"],
        examinerNote: "একটি কেন্দ্রীয় ভাব রাখো; একই কথা ঘুরিয়ে না লিখে কারণ, উদাহরণ ও ফলের স্বাভাবিক সংযোগ দেখাও।"
      },
      {
        kind: "Letter", title: "নমুনা আবেদনপত্র",
        prompt: "কলেজ গ্রন্থাগারে প্রয়োজনীয় বই বাড়ানোর জন্য অধ্যক্ষের কাছে আবেদন লেখো।",
        answer: ["তারিখ: …………", "বরাবর\nঅধ্যক্ষ\n………… কলেজ, …………", "বিষয়: কলেজ গ্রন্থাগারে প্রয়োজনীয় বই বৃদ্ধির আবেদন।", "জনাব,\nবিনীত নিবেদন এই যে, আমাদের কলেজ গ্রন্থাগারে একাদশ–দ্বাদশ শ্রেণির কয়েকটি বিষয়ের সাম্প্রতিক পাঠসহায়ক বই ও রেফারেন্সের সংখ্যা প্রয়োজনের তুলনায় কম। ফলে শিক্ষার্থীরা নির্ধারিত সময়ে বই পায় না এবং দলগত অধ্যয়নে অসুবিধা হয়। প্রয়োজনীয় বইয়ের তালিকা সংযুক্ত করে দ্রুত সংগ্রহের ব্যবস্থা করলে আমাদের পাঠ ও পরীক্ষার প্রস্তুতি উপকৃত হবে।", "অতএব, বিষয়টি বিবেচনা করে প্রয়োজনীয় ব্যবস্থা গ্রহণের জন্য বিনীত অনুরোধ করছি।\nনিবেদক\nশিক্ষার্থীদের পক্ষে\nনাম, শ্রেণি ও রোল"],
        examinerNote: "প্রাপক, বিষয়, সমস্যা, প্রমাণভিত্তিক প্রয়োজন, চাওয়া ব্যবস্থা ও পরিচয়—সব অংশ রাখো।"
      },
      {
        kind: "Report", title: "নমুনা প্রতিবেদন",
        prompt: "তোমার কলেজে আয়োজিত বইপড়া কর্মসূচি সম্পর্কে প্রতিবেদন লেখো।",
        answer: ["কলেজে সপ্তাহব্যাপী বইপড়া কর্মসূচি অনুষ্ঠিত", "নিজস্ব প্রতিবেদক, ১১ অক্টোবর ২০২৬: শিক্ষার্থীদের পাঠাভ্যাস গড়ে তুলতে কলেজ মিলনায়তন ও গ্রন্থাগারে সপ্তাহব্যাপী বইপড়া কর্মসূচি অনুষ্ঠিত হয়েছে। উদ্বোধনী দিনে অধ্যক্ষ পাঠ্যবইয়ের বাইরে ইতিহাস, বিজ্ঞান ও সাহিত্য পাঠের গুরুত্ব তুলে ধরেন।", "কর্মসূচিতে বই প্রদর্শনী, নীরব পাঠ, পাঠ-প্রতিক্রিয়া লেখা এবং দলীয় আলোচনা ছিল। শিক্ষার্থীরা নির্বাচিত বই থেকে শেখা বিষয় সংক্ষেপে উপস্থাপন করে। আয়োজকেরা জানান, অংশগ্রহণ ও প্রতিক্রিয়ার ভিত্তিতে প্রতি মাসে এমন আয়োজন করা হবে।"],
        examinerNote: "শিরোনাম, স্থান–তারিখ, কী ঘটেছে, কারা অংশ নিয়েছে, ফল ও পরবর্তী উদ্যোগ—সংবাদভঙ্গিতে সাজাও।"
      }
    ];
  }
  if (["accounting","finance","economics"].includes(subjectId)) {
    const workshop = buildChapterWorkshop(subjectId, chapter, detail);
    if (workshop) return [{
      kind: subjectId === "economics" ? "Diagram" : "Calculation",
      title: `পূর্ণ worked CQ · ${title}`,
      prompt: `${workshop.cqSolution.stimulus}\nক/খ/গ/ঘ অংশে ১+২+৩+৪ মানবণ্টন মেনে উত্তর করো।`,
      answer: workshop.cqSolution.parts.map((part) => `${part.label} · ${part.marks} নম্বর — ${part.answer}`),
      examinerNote: subjectId === "accounting"
        ? "হিসাবের নাম, কার্য, format, adjustment ও final cross-check দৃশ্যমান না হলে শুধু চূড়ান্ত অঙ্কে পূর্ণ নম্বর পাওয়া যাবে না।"
        : subjectId === "finance"
          ? "প্রদত্ত তথ্য → সূত্র/প্রক্রিয়া → working → আর্থিক অর্থ → শর্তযুক্ত সিদ্ধান্ত—এই ধারাটি সম্পূর্ণ রাখো।"
          : "চলক ও শর্ত চিহ্নিত করে schedule/সূত্র/graph-এ label দাও; তারপর ফলের অর্থ ও সীমাবদ্ধতা লিখো।",
    }];
  }
  const cqAnswer = [
    `ক · ১ নম্বর — ${firstTerm} হলো ${detail.core.split("।")[0]}।`,
    `খ · ২ নম্বর — ধারণাটি গুরুত্বপূর্ণ, কারণ এটি “${title}” বিষয়ের মূল সম্পর্কটি বুঝতে সাহায্য করে। এখানে সংজ্ঞার পর কারণ ও সম্পর্ক—দুটিই সংক্ষেপে দেখাতে হবে।`,
    `গ · ৩ নম্বর — উদ্দীপকের নির্ণায়ক তথ্য হলো: ${detail.example}। প্রথমে প্রাসঙ্গিক নিয়ম শনাক্ত করতে হবে, এরপর তথ্যটির সঙ্গে নিয়মের সরাসরি যোগসূত্র দেখিয়ে ফল ব্যাখ্যা করতে হবে। তাই শুধু অধ্যায়ের নাম লিখলে প্রয়োগ সম্পূর্ণ হবে না; কোন তথ্য কোন সিদ্ধান্তে পৌঁছেছে তা দৃশ্যমান করতে হবে।`,
    `ঘ · ৪ নম্বর — উদ্দীপকটি বিশ্লেষণ করলে দেখা যায়, “${title}”-এর ফল একক কোনো কারণে তৈরি হয়নি। মূল ধারণা, বাস্তব শর্ত, সম্ভাব্য বিকল্প এবং সীমাবদ্ধতা একসঙ্গে বিচার করতে হবে। প্রমাণের ভিত্তিতে সিদ্ধান্তটি গ্রহণযোগ্য; তবে শর্ত বদলালে ফলও বদলাতে পারে। তাই সবচেয়ে শক্তিশালী উত্তর হবে—ধারণা, উদ্দীপকের প্রমাণ, বিকল্প ব্যাখ্যা এবং শর্তযুক্ত উপসংহারসহ পূর্ণ মূল্যায়ন।`
  ];
  return [{
    kind: "CQ", title: `পূর্ণ ১০ নম্বরের CQ · ${title}`,
    prompt: `${detail.example} — এই উদ্দীপকের ভিত্তিতে ক/খ/গ/ঘ উত্তর করো।`,
    answer: cqAnswer,
    examinerNote: "১+২+৩+৪ অংশে গভীরতা বাড়বে: সংজ্ঞা → ব্যাখ্যা → উদ্দীপক প্রয়োগ → বিকল্প ও সীমাবদ্ধতাসহ মূল্যায়ন।"
  }];
}

function buildBanglaWritingLessons(
  chapter: ChapterPreview,
  detail: BanglaChapterDetail,
  examples: NonNullable<ExamResource["modelExamples"]>,
): NonNullable<ExamResource["lessonDetails"]> {
  const isReport = /Report Writing/i.test(chapter.title) || /প্রতিবেদন/.test(chapter.titleBn);
  const reportStructures = [
    "প্রাতিষ্ঠানিক প্রতিবেদন: বরাবর ও প্রতিষ্ঠানের ঠিকানা → বিষয় → সম্বোধন/নির্দেশনার সূত্র → প্রতিবেদনের শিরোনাম → সময়–স্থান–ঘটনা–ফল → প্রয়োজনীয় সুপারিশ → প্রতিবেদকের পরিচয়।",
    "সংবাদ প্রতিবেদন: তথ্যবহুল শিরোনাম → নিজস্ব প্রতিবেদক/স্থান/তারিখ → প্রথম অনুচ্ছেদে মূল ঘটনা → যাচাইযোগ্য তথ্য ও সংশ্লিষ্ট বক্তব্য → তাৎপর্য বা পরবর্তী করণীয়।",
    "দুই ধরন মিশিও না: সংবাদ প্রতিবেদনে ‘বরাবর/জনাব’ থাকবে না; প্রাতিষ্ঠানিক প্রতিবেদনে byline-ভিত্তিক সংবাদভাষা ব্যবহার করবে না।",
  ];
  const lessons = chapter.lessonPlan ?? [];
  return lessons.map((lesson, index) => {
    const model = examples[index % Math.max(1, examples.length)];
    const secondModel = examples[(index + 1) % Math.max(1, examples.length)] ?? model;
    const structure = isReport ? reportStructures : [
      `প্রথমে কাজের ধরন ঠিক করো—${model?.kind ?? chapter.titleBn}। প্রশ্নে প্রাপক, উদ্দেশ্য, বিষয় ও সীমা দাগ দাও।`,
      "নির্ধারিত বিন্যাস আগে দাঁড় করাও; এরপর তথ্য বসাও। একই মুখস্থ ছক সব প্রশ্নে ব্যবহার কোরো না।",
      "খসড়া শেষে তথ্যের পূর্ণতা, ভাষার স্বাভাবিকতা, বানান, বিরামচিহ্ন ও প্রশ্নের নির্দেশ আলাদা করে মিলাও।",
    ];
    const modelAnswer = model?.answer?.join("\n\n") ?? detail.example;
    const shortModel = modelAnswer.length > 560 ? `${modelAnswer.slice(0, 557).trim()}…` : modelAnswer;
    return {
      title: lesson.titleBn,
      concept: isReport
        ? `প্রতিবেদন মানে কোনো ঘটনা বা পরিস্থিতির যাচাইযোগ্য তথ্য নিরপেক্ষভাবে সাজিয়ে নির্দিষ্ট পাঠকের কাছে উপস্থাপন করা। “${lesson.titleBn}” অংশে আগে ঠিক করবে এটি প্রাতিষ্ঠানিক নাকি সংবাদ প্রতিবেদন; তারপর সেই ধরনটির নিজস্ব বিন্যাস অনুসরণ করবে।`
        : `“${lesson.titleBn}” একটি লিখিত কাজ। এখানে নম্বর আসে সঠিক বিন্যাস, প্রাসঙ্গিক তথ্য, স্বাভাবিক ভাষা এবং সম্পাদনা থেকে—সাধারণ CQ কাঠামো থেকে নয়।`,
      steps: structure,
      application: model ? `বোর্ড-প্যাটার্ন কাজ: ${model.prompt}` : detail.example,
      checkpoint: isReport
        ? "নিজেকে জিজ্ঞেস করো: প্রতিবেদনের ধরন ঠিক করেছি? শিরোনাম ও মূল ঘটনা শুরুতেই পরিষ্কার? সময়–স্থান–তথ্য যাচাইযোগ্য? ব্যক্তিগত আবেগ বাদ? সমাপ্তিতে ফল বা করণীয় আছে?"
        : "বিন্যাস, উদ্দেশ্য, তথ্য, ভাষা ও সম্পাদনা—এই পাঁচটি আলাদাভাবে মিলিয়ে তারপর পাঠটি সম্পন্ন চিহ্নিত করো।",
      workedSnapshot: `${model?.title ?? "সম্পূর্ণ নমুনা"}\n${shortModel}`,
      practicePrompt: secondModel ? `${secondModel.prompt} নমুনা না দেখে আগে কাঠামো লেখো, তারপর পূর্ণ উত্তর তৈরি করো।` : `“${lesson.titleBn}” নিয়ে একটি নতুন বোর্ড-প্যাটার্ন কাজ সম্পূর্ণ করো।`,
      answerCheck: model?.examinerNote ?? "প্রশ্নের কাজ, নির্ধারিত বিন্যাস, তথ্যের পূর্ণতা, ভাষা ও বানান আলাদা করে যাচাই করো।",
      recallQuestions: isReport ? [
        "প্রাতিষ্ঠানিক ও সংবাদ প্রতিবেদনের শুরু এবং শেষ কোথায় আলাদা?",
        "প্রতিবেদনের প্রথম অনুচ্ছেদে কোন তথ্যগুলো থাকা জরুরি?",
        "কোন তিনটি ভুল একটি প্রতিবেদনকে ব্যক্তিগত রচনা বানিয়ে ফেলে?",
      ] : [
        `“${lesson.titleBn}” কাজের বাধ্যতামূলক অংশগুলো কী?`,
        "কোন তথ্য বাদ গেলে উত্তরটি অসম্পূর্ণ হবে?",
        "সম্পাদনার সময় কোন পাঁচটি বিষয় আলাদা করে দেখবে?",
      ],
      commonTrap: isReport
        ? "প্রতিবেদনকে আবেদনপত্র, রচনা বা CQ বানিয়ে ফেলো না। কল্পিত প্রশংসা, অতিরঞ্জন ও অযাচাইকৃত সংখ্যা বাদ দাও।"
        : "মুখস্থ নমুনা হুবহু বসালে প্রশ্নের প্রাপক, উদ্দেশ্য বা বিষয় বদলে গেলেও উত্তর বদলায় না—এতেই নম্বর কমে।",
      stretchPrompt: secondModel ? `একই বিষয়কে ${model?.kind ?? "প্রথম ধরন"} ও ${secondModel.kind}—দুই বিন্যাসে লিখে শুরু, ভাষা ও সমাপ্তির পার্থক্য দাগ দাও।` : "একই কাজ ভিন্ন প্রাপক ও উদ্দেশ্যের জন্য আবার লিখে ভাষা ও বিন্যাসের পরিবর্তন চিহ্নিত করো।",
      foundation: {
        question: isReport ? "প্রতিবেদন লেখা শুরুর আগে প্রথম সিদ্ধান্ত কী?" : `“${lesson.titleBn}” শুরু করার আগে কী ঠিক করবে?`,
        answer: isReport ? "প্রথমে ধরন ঠিক করবে—প্রাতিষ্ঠানিক নাকি সংবাদ। ধরন ভুল হলে শিরোনাম, সম্বোধন, পরিচয় ও শেষাংশ সবই ভুল পথে যায়।" : "কাজের ধরন, পাঠক/প্রাপক, উদ্দেশ্য, প্রয়োজনীয় তথ্য এবং নির্ধারিত বিন্যাস ঠিক করবে।",
      },
      advanced: {
        focus: isReport ? "তথ্য নির্বাচন, নিরপেক্ষতা ও দুই ধরনের আলাদা বিন্যাস" : "বিন্যাস ঠিক রেখে বিষয়ভিত্তিক স্বাভাবিক লেখা",
        explanation: `${model?.examinerNote ?? detail.core} পূর্ণ নম্বরের উত্তরে নিয়মটি শুধু উল্লেখ করলে হবে না; নমুনার নির্দিষ্ট অংশে সেটি কীভাবে কাজ করেছে দেখিয়ে, নতুন প্রশ্নে একই সিদ্ধান্ত নিজের ভাষায় প্রয়োগ করতে হবে।`,
        transfer: isReport ? "একই কলেজ-ঘটনা প্রথমে অধ্যক্ষের কাছে প্রাতিষ্ঠানিক প্রতিবেদন, পরে স্থানীয় পত্রিকার জন্য সংবাদ প্রতিবেদন হিসেবে লেখো।" : "একই কাজ নতুন প্রাপক ও নতুন উদ্দেশ্যে লিখে পরিবর্তিত অংশগুলো annotate করো।",
      },
    };
  });
}

function buildGraphPractice(subjectId: string, chapter: ChapterPreview): ExamResource["graphPractice"] | undefined {
  if (!["economics","statistics","finance","geography"].includes(subjectId)) return undefined;
  if (subjectId === "economics") {
    const profiles: Record<string,{title:string;xLabel:string;yLabel:string;points:{x:number;y:number;label:string}[];caption:string}> = {
      "Basic Economic Problems and their Solution":{title:"PPC · সুযোগ ব্যয় ও সামর্থ্যের পরিবর্তন",xLabel:"ভোগ্যপণ্য",yLabel:"মূলধনী পণ্য",points:[{x:14,y:82,label:"A"},{x:28,y:76,label:"B"},{x:46,y:64,label:"C"},{x:66,y:44,label:"D"},{x:84,y:16,label:"E"}],caption:"A–E উৎপাদন-সম্ভাবনার combination। curve-এর ভেতরের U বিন্দু অদক্ষতা এবং বাইরের Z বর্তমান সামর্থ্যের বাইরে—নিজের আঁকায় দুটি বিন্দুই যোগ করে movement ও outward shift আলাদা ব্যাখ্যা করো।"},
      "Consumer and Producer Behaviour":{title:"চাহিদা রেখা · schedule থেকে curve",xLabel:"চাহিদার পরিমাণ (Qd)",yLabel:"দাম (P)",points:[{x:18,y:80,label:"P₅"},{x:32,y:66,label:"P₄"},{x:48,y:52,label:"P₃"},{x:66,y:35,label:"P₂"},{x:84,y:20,label:"P₁"}],caption:"নিজ পণ্যের দাম বদলালে একই demand curve-এ movement; আয়, রুচি বা সম্পর্কিত পণ্যের দাম বদলালে পুরো curve shift। নতুন রেখা D₁ এঁকে তীরসহ পার্থক্য দেখাও।"},
      "Production, Production Cost and Revenue":{title:"TP curve · MP-এর turning point খোঁজো",xLabel:"শ্রমের একক (L)",yLabel:"মোট উৎপাদন (TP)",points:[{x:14,y:12,label:"L₀"},{x:28,y:32,label:"L₁"},{x:44,y:58,label:"L₂"},{x:62,y:76,label:"L₃"},{x:78,y:84,label:"L₄"},{x:88,y:80,label:"L₅"}],caption:"একই data থেকে AP ও MP table তৈরি করো। MP কমতে শুরু, MP=0 এবং negative MP—এই তিন অবস্থার সঙ্গে TP-এর slope ও maximum-এর সম্পর্ক লিখো।"},
      "Market":{title:"বাজার ভারসাম্য · demand schedule",xLabel:"পরিমাণ (Q)",yLabel:"দাম (P)",points:[{x:16,y:82,label:"D₁"},{x:34,y:68,label:"D₂"},{x:52,y:52,label:"E"},{x:70,y:34,label:"D₄"},{x:86,y:18,label:"D₅"}],caption:"এখানে demand রেখা দেখানো হয়েছে। একই axes-এ ঊর্ধ্বমুখী supply রেখা যোগ করে E চিহ্নিত করো; tax হলে S→S₁ shift, নতুন দাম-পরিমাণ এবং shortage/surplus ব্যাখ্যা করো।"},
      "Labour Market":{title:"শ্রমের চাহিদা · মজুরি ও কর্মসংস্থান",xLabel:"শ্রম/কর্মসংস্থান (L)",yLabel:"প্রকৃত মজুরি (W/P)",points:[{x:18,y:78,label:"W₄"},{x:36,y:64,label:"W₃"},{x:54,y:48,label:"E"},{x:72,y:31,label:"W₁"},{x:86,y:20,label:"W₀"}],caption:"Labour demand-এর সঙ্গে labour supply যোগ করে equilibrium দেখাও। skill বৃদ্ধি বা শ্রমশক্তির পরিবর্তনে কোন curve shift করবে—কারণসহ আলাদা করো।"},
      "Rent":{title:"Differential rent · জমির শ্রেণিভিত্তিক উদ্বৃত্ত",xLabel:"জমির শ্রেণি",yLabel:"উৎপাদন/উদ্বৃত্ত",points:[{x:18,y:82,label:"A"},{x:38,y:64,label:"B"},{x:58,y:45,label:"C"},{x:78,y:24,label:"D"}],caption:"D-কে marginal land ধরে A–C-এর differential surplus table বানাও। আধুনিক অর্থনৈতিক খাজনায় actual earning − transfer earning আলাদা করে দেখাও।"},
      "Aggregate Income and Expenditure":{title:"আয়–ব্যয় সম্পর্ক · 45° line অনুশীলন",xLabel:"জাতীয় আয় (Y)",yLabel:"সামগ্রিক ব্যয় (AE)",points:[{x:14,y:22,label:"AE₀"},{x:32,y:36,label:"AE₁"},{x:50,y:50,label:"E"},{x:68,y:64,label:"AE₃"},{x:86,y:78,label:"AE₄"}],caption:"45° রেখা যোগ করে AE=Y বিন্দু দেখাও। autonomous expenditure বদলালে AE shift ও equilibrium income-এর দিক ব্যাখ্যা করো—চিত্রটি scale ছাড়া নকল কোরো না।"},
      "Inflation":{title:"মূল্যসূচক · base year থেকে inflation",xLabel:"বছর",yLabel:"ভোক্তা মূল্যসূচক (CPI)",points:[{x:14,y:30,label:"100"},{x:32,y:38,label:"108"},{x:50,y:50,label:"120"},{x:68,y:63,label:"133"},{x:86,y:76,label:"147"}],caption:"প্রতিটি বছরকে একই দূরত্বে বসিয়ে CPI change থেকে inflation rate হিসাব করো: (CPIₜ−CPIₜ₋₁)/CPIₜ₋₁×100। Price level ও inflation rate এক নয়।"},
    };
    const p=profiles[chapter.title]??{title:`${chapter.titleBn} · তথ্য থেকে graph`,xLabel:"পর্যবেক্ষণ/সময়",yLabel:"সূচক/পরিমাণ",points:[{x:14,y:24,label:"A"},{x:32,y:38,label:"B"},{x:50,y:55,label:"C"},{x:68,y:62,label:"D"},{x:86,y:76,label:"E"}],caption:"প্রশ্নের data ছাড়া রেখার অর্থ অনুমান কোরো না। title, unit, scale, source/period ও label দিয়ে তারপর কারণ–ফল ব্যাখ্যা করো।"};
    return p;
  }
  if (subjectId === "statistics") return { title:`${chapter.titleBn} · data plot practice`,xLabel:"শ্রেণি / পর্যবেক্ষণ",yLabel:"গণসংখ্যা / মান",points:[{x:15,y:25,label:"1"},{x:32,y:48,label:"2"},{x:50,y:74,label:"3"},{x:68,y:55,label:"4"},{x:84,y:30,label:"5"}],caption:"সারণি থেকে বিন্দু বসাও, scale সমান রাখো এবং graph দেখে কেন্দ্র, বিস্তার বা প্রবণতার অর্থ লিখো।" };
  if (subjectId === "finance") {
    const quantitative=/Time Value|Risk and Return|Capital Budgeting|Cost of Capital|Capital Structure|Working Capital|Financial Analysis|Dividend/i.test(chapter.title);
    return quantitative
      ? { title:`${chapter.titleBn} · decision timeline`,xLabel:"সময় / বিকল্প",yLabel:"নগদপ্রবাহ / মূল্য",points:[{x:12,y:26,label:"t₀"},{x:30,y:38,label:"t₁"},{x:48,y:52,label:"t₂"},{x:66,y:62,label:"t₃"},{x:84,y:76,label:"t₄"}],caption:"প্রশ্নের inflow/outflow, rate ও timing দিয়ে রেখাটি নতুন করে আঁকো। এরপর PV/FV, return, cost বা project criterion হিসাব করে risk, liquidity ও assumptionসহ সিদ্ধান্ত দাও।"}
      : { title:`${chapter.titleBn} · service/risk flow`,xLabel:"কার্যপ্রবাহ",yLabel:"নিয়ন্ত্রণের স্তর",points:[{x:12,y:18,label:"পক্ষ"},{x:30,y:32,label:"দলিল"},{x:48,y:48,label:"যাচাই"},{x:66,y:62,label:"লেনদেন"},{x:84,y:78,label:"নিষ্পত্তি"}],caption:"এটি পরিমাণগত graph নয়—process map। অধ্যায় অনুযায়ী পক্ষ, প্রয়োজনীয় দলিল, যাচাই, ঝুঁকি, control ও final settlement/claim নিজে label করো।"};
  }
  return { title:`${chapter.titleBn} · profile/variation sketch`,xLabel:"স্থান / দূরত্ব",yLabel:"উচ্চতা / পরিমাণ",points:[{x:10,y:30,label:"A"},{x:30,y:58,label:"B"},{x:50,y:76,label:"C"},{x:70,y:52,label:"D"},{x:88,y:36,label:"E"}],caption:"চিত্রে title, direction, scale/legend ও প্রয়োজনীয় স্থাননাম লিখে কারণ–প্রক্রিয়া–ফল ব্যাখ্যা করো।" };
}

function buildSubjectDepthNotes(subjectId: string, chapter: ChapterPreview, english = false): string[] {
  const title = english ? chapter.title : chapter.titleBn;
  const packs: Record<string, { en: string[]; bn: string[] }> = {
    bangla: {
      en: [],
      bn: [
        `পাঠ-অনুসন্ধান: “${title}” পড়ার সময় বক্তা/লেখক, প্রসঙ্গ, কেন্দ্রীয় বক্তব্য, ভাষার ভঙ্গি এবং তাৎপর্য আলাদা করে নোট করো।`,
        "প্রমাণসহ ব্যাখ্যা: গদ্য বা কবিতার উত্তর দিলে পাঠ্যাংশের নির্দিষ্ট শব্দ, চিত্রকল্প, ঘটনা বা বক্তব্য দিয়ে বিশ্লেষণ সমর্থন করো।",
        chapter.paper === "1st Paper" ? "সাহিত্য বিশ্লেষণ: মূলভাবের সঙ্গে চরিত্র, ঘটনা, চিত্রকল্প, সুর বা লেখকের দৃষ্টিভঙ্গির সম্পর্ক প্রমাণসহ দেখাও।" : "ব্যাকরণ প্রয়োগ: নিয়ম লিখেই থেমো না—শুদ্ধ উদাহরণ, ভুলের কারণ এবং সংশোধিত রূপ পাশাপাশি দেখাও।",
        chapter.paper === "1st Paper" ? "পাঠ-সংযোগ: লেখক/কবির বক্তব্যকে রচনার সামাজিক, মানবিক বা ঐতিহাসিক প্রেক্ষাপটের সঙ্গে যুক্ত করো; অপ্রমাণিত জীবনী যোগ কোরো না।" : "লিখিত অংশের পরিকল্পনা: উদ্দেশ্য, পাঠক, বিন্যাস, প্রয়োজনীয় তথ্য ও ভাষার মাত্রা ঠিক করে তারপর অনুচ্ছেদ বা প্রাতিষ্ঠানিক লেখা শুরু করো।",
        "উত্তরের স্বাভাবিকতা: মুখস্থ ভারী বাক্যের বদলে পাঠ্যবইসম্মত পরিভাষা দিয়ে সহজ, সম্পূর্ণ ও প্রমাণনির্ভর বাক্য লেখো।",
        "চূড়ান্ত সম্পাদনা: বানান, বিরামচিহ্ন, বাক্যসংযোগ, অপ্রাসঙ্গিক পুনরাবৃত্তি এবং প্রশ্নের সব অংশ পূরণ হয়েছে কি না আলাদাভাবে যাচাই করো।",
      ],
    },
    ict: {
      en: [],
      bn: [
        `সিস্টেম মানচিত্র: “${title}” অধ্যায়ের ইনপুট → প্রক্রিয়া → আউটপুট → সংরক্ষণ/যোগাযোগ → নিরাপত্তা—এই প্রবাহটি এক পাতায় আঁকো।`,
        "প্রযুক্তি তুলনা: কাছাকাছি দুটি প্রযুক্তিকে কাজ, গতি, পরিসর, সুবিধা, সীমাবদ্ধতা ও ব্যবহারক্ষেত্র দিয়ে তুলনা করো।",
        "সংখ্যা/লজিক নিয়ন্ত্রণ: প্রতিটি রূপান্তর বা সত্যক সারণিতে ধাপ, ভিত্তি, বিটের অবস্থান এবং ফল পুনরায় যাচাই করো।",
        "কোড ও HTML পাঠ: syntax মুখস্থ না করে প্রতিটি tag, statement বা variable কী কাজ করছে—লাইন ধরে ব্যাখ্যা করো।",
        "বাংলাদেশ প্রেক্ষাপট: শিক্ষা, স্বাস্থ্য, ব্যবসা বা সরকারি সেবার বাস্তব প্রয়োগে সুবিধার সঙ্গে গোপনীয়তা, নিরাপত্তা ও ডিজিটাল বৈষম্যও উল্লেখ করো।",
        "পরীক্ষার উপস্থাপন: প্রয়োজনমতো labelled diagram, truth table, algorithm, code indentation এবং প্রত্যাশিত output পরিষ্কার রাখো।",
      ],
    },
    logic: {
      en: [],
      bn: [
        `যুক্তির গঠন: “${title}” অধ্যায়ে প্রতিটি উদাহরণকে পূর্বধারণা, সংযোজক, সিদ্ধান্ত এবং যুক্তির আকারে ভেঙে দেখো।`,
        "পদ ও বচন নিয়ন্ত্রণ: ব্যাপ্যতা, গুণ, পরিমাণ ও সম্পর্ক নির্ধারণের আগে বাক্যের ব্যাকরণগত রূপ নয়—যৌক্তিক রূপ চিহ্নিত করো।",
        "বৈধতা পরীক্ষা: সিদ্ধান্ত বাস্তবে সত্য হতে পারে, তবু পূর্বধারণা থেকে অনিবার্যভাবে না এলে যুক্তি অবৈধ—এই পার্থক্য উদাহরণে দেখাও।",
        "প্রতীকী অনুশীলন: প্রতীক দেওয়ার আগে সরল বচনগুলো আলাদা করো, সংযোজক কতটুকু অংশে কাজ করছে তা ঠিক করো, তারপর সত্যক সারণি তৈরি করো।",
        "ভ্রান্তি বিশ্লেষণ: শুধু ভ্রান্তির নাম নয়—কোন ধাপে প্রাসঙ্গিকতা, প্রমাণ বা অনুমানের ভুল হয়েছে তা নির্দিষ্ট বাক্য দিয়ে দেখাও।",
        "পরীক্ষার উত্তর: নিয়ম → উদাহরণের যৌক্তিক রূপ → পরীক্ষা/চিত্র → ফল → সংক্ষিপ্ত ব্যাখ্যা—এই ক্রম বজায় রাখো।",
      ],
    },
    islamic_history: {
      en: [],
      bn: [
        `কালানুক্রম: “${title}” অধ্যায়ের তারিখ, স্থান, ব্যক্তি, ঘটনা, তাৎক্ষণিক ফল ও দীর্ঘমেয়াদি প্রভাব একটি সময়রেখায় সাজাও।`,
        "কারণ বিশ্লেষণ: ধর্মীয়, রাজনৈতিক, সামাজিক ও অর্থনৈতিক কারণ আলাদা করে কোনটি পটভূমি, কোনটি তাৎক্ষণিক সূত্র—নির্ধারণ করো।",
        "ব্যক্তি ও প্রতিষ্ঠান: কোনো শাসক বা নেতার অবদান লিখলে প্রশাসন, জ্ঞানচর্চা, সমাজ, সংস্কৃতি ও সীমাবদ্ধতা প্রমাণসহ ভারসাম্যে রাখো।",
        "উৎস যাচাই: ঐতিহাসিক বর্ণনার সময় উৎসের সময়কাল, উদ্দেশ্য ও সম্ভাব্য পক্ষপাত বিবেচনা করো; অযাচাইকৃত কাহিনি নিশ্চিত তথ্য হিসেবে লিখো না।",
        "সভ্যতার তাৎপর্য: শিক্ষা, বিজ্ঞান, শিল্প, স্থাপত্য, বাণিজ্য ও সামাজিক প্রতিষ্ঠানে প্রভাব আলাদা উদাহরণে ব্যাখ্যা করো।",
        "পরীক্ষার কাঠামো: পটভূমি → কারণ → মূল ঘটনা → ফল → মূল্যায়ন; তারিখ ও নামের বানান শেষে আবার মিলিয়ে নাও।",
      ],
    },
    accounting: {
      en: [
        `Transaction trail: trace every event in ${title} from source document to journal, ledger, trial balance and final statement.`,
        "Posting audit: verify date, particulars, folio, debit-credit side, amount and balancing independently.",
        "Classification table: separate assets, liabilities, equity, income and expenses before choosing the account treatment.",
        "Calculation control: recompute totals, cross-cast columns and explain why an apparently balanced answer may still contain an error.",
        "Bangladesh business case: apply the chapter to a small trader, service firm or partnership using realistic documents and taka amounts.",
        "Exam presentation: show narration, working notes, account format and final verification clearly enough for step marks.",
      ],
      bn: [
        `লেনদেন অনুসরণ: “${title}” সম্পর্কিত প্রতিটি ঘটনাকে উৎস দলিল → জাবেদা → খতিয়ান → রেওয়ামিল → চূড়ান্ত হিসাব পর্যন্ত অনুসরণ করো।`,
        "পোস্টিং অডিট: তারিখ, বিবরণ, জে.এফ./এল.এফ., ডেবিট–ক্রেডিট দিক, অঙ্ক ও জের আলাদাভাবে যাচাই করো।",
        "শ্রেণিবিন্যাস ছক: হিসাবের নিয়ম প্রয়োগের আগে সম্পদ, দায়, মালিকানা স্বত্ব, আয় ও ব্যয় আলাদা করো।",
        "হিসাব নিয়ন্ত্রণ: মোট পুনর্গণনা ও cross-cast করো; রেওয়ামিল মিললেও কোন নীতিগত ভুল থাকতে পারে তা ব্যাখ্যা করো।",
        "বাংলাদেশি ব্যবসায় প্রয়োগ: টাকা, বাস্তব দলিল ও স্থানীয় ক্ষুদ্র ব্যবসা/সেবা প্রতিষ্ঠান/অংশীদারি কারবার ধরে অধ্যায়টি প্রয়োগ করো।",
        "পরীক্ষার উপস্থাপন: বর্ণনা, কার্যপ্রণালি, হিসাবের ছক ও চূড়ান্ত যাচাই স্পষ্ট রাখো যাতে প্রতিটি ধাপের নম্বর পাওয়া যায়।",
      ],
    },
    finance: {
      en: [
        `Decision matrix: compare the financing or investment choices in ${title} by cost, return, liquidity, control and risk.`,
        "Cash-flow timeline: place every inflow and outflow at the correct date before applying a time-value formula.",
        "Formula control: identify variables, convert rate and time units, show substitution and interpret the final unit.",
        "Risk-return note: explain the uncertainty behind the expected result and test how one changed assumption affects the decision.",
        "Bangladesh context: connect the case to banks, capital markets, SMEs, insurance or household financial decisions.",
        "Recommendation standard: choose an option only after stating the evidence, trade-off and condition under which it remains suitable.",
      ],
      bn: [
        `সিদ্ধান্ত ছক: “${title}” অধ্যায়ে অর্থায়ন বা বিনিয়োগের বিকল্পগুলো ব্যয়, আয়, তারল্য, নিয়ন্ত্রণ ও ঝুঁকি দিয়ে তুলনা করো।`,
        "নগদপ্রবাহ সময়রেখা: অর্থের সময়মূল্যের সূত্র প্রয়োগের আগে প্রতিটি অন্তঃপ্রবাহ ও বহিঃপ্রবাহ সঠিক সময়ে বসাও।",
        "সূত্র নিয়ন্ত্রণ: চলক শনাক্ত, হার ও সময়ের একক রূপান্তর, মান প্রতিস্থাপন এবং ফলের একক/অর্থ—সব দেখাও।",
        "ঝুঁকি–আয় বিশ্লেষণ: প্রত্যাশিত ফলের অনিশ্চয়তা বোঝাও এবং একটি অনুমান বদলালে সিদ্ধান্ত কীভাবে বদলায় তা যাচাই করো।",
        "বাংলাদেশ প্রেক্ষাপট: ব্যাংক, পুঁজিবাজার, SME, বিমা বা পরিবারের আর্থিক সিদ্ধান্তের সঙ্গে অধ্যায়ের প্রয়োগ যুক্ত করো।",
        "সুপারিশের মান: প্রমাণ, আপস ও কোন শর্তে সিদ্ধান্তটি কার্যকর থাকবে—এই তিনটি না লিখে কোনো বিকল্প নির্বাচন কোরো না।",
      ],
    },
    economics: {
      en: [
        `Determinant check: decide whether ${title} causes movement along a curve or a shift of the whole curve, and state why.`,
        "Data table: organise variables, units and periods before calculating percentage change, elasticity or equilibrium.",
        "Graph standard: label axes, curves, initial and new equilibrium, direction of change and the cause outside the graph.",
        "Formula interpretation: show working, classify the result and explain its economic meaning rather than stopping at a number.",
        "Bangladesh market case: use a realistic product, household, firm or policy situation and acknowledge supply or data constraints.",
        "Evaluation note: separate assumption, evidence, short-run effect, long-run effect and the final qualified conclusion.",
      ],
      bn: [
        `নির্ধারক যাচাই: “${title}” রেখা বরাবর চলাচল নাকি পুরো রেখার স্থানান্তর ঘটায়—কারণসহ নির্ধারণ করো।`,
        "তথ্যছক: শতকরা পরিবর্তন, স্থিতিস্থাপকতা বা ভারসাম্য হিসাবের আগে চলক, একক ও সময়কাল সাজাও।",
        "গ্রাফের মান: অক্ষ, রেখা, প্রাথমিক ও নতুন ভারসাম্য, পরিবর্তনের দিক এবং গ্রাফের বাইরের কারণ লেবেল করো।",
        "সূত্রের ব্যাখ্যা: কার্যপ্রণালি, ফলের শ্রেণি ও অর্থনৈতিক অর্থ লেখো; শুধু সংখ্যায় উত্তর শেষ কোরো না।",
        "বাংলাদেশের বাজার: বাস্তব পণ্য, পরিবার, প্রতিষ্ঠান বা নীতির উদাহরণ ব্যবহার করে যোগান ও তথ্যের সীমাবদ্ধতাও উল্লেখ করো।",
        "মূল্যায়ন নোট: অনুমান, প্রমাণ, স্বল্পমেয়াদি ফল, দীর্ঘমেয়াদি ফল ও শর্তযুক্ত সিদ্ধান্ত আলাদা রাখো।",
      ],
    },
    business: {
      en: [
        `Management chain: connect the issue in ${title} to the relevant principle, action, responsible role and measurable KPI.`,
        "Stakeholder map: identify who is affected, their interest, their influence and the likely conflict between objectives.",
        "Alternative comparison: compare at least two actions by cost, time, people, quality and implementation risk.",
        "Bangladesh enterprise case: adapt the solution to a local SME, cooperative, startup or manufacturing organisation.",
        "Common-error check: do not name a principle without showing the exact evidence that proves it applies to the stimulus.",
        "Answer structure: diagnosis → principle → action → implementation → measurement → qualified recommendation.",
      ],
      bn: [
        `ব্যবস্থাপনা শৃঙ্খল: “${title}” অধ্যায়ের সমস্যা → প্রাসঙ্গিক নীতি → করণীয় → দায়িত্বপ্রাপ্ত ব্যক্তি → ফল মাপার সূচক যুক্ত করো।`,
        "Stakeholder map: কারা প্রভাবিত, তাদের স্বার্থ ও প্রভাব কত এবং উদ্দেশ্যের কোথায় সংঘাত—ছকে দেখাও।",
        "বিকল্প তুলনা: অন্তত দুটি পদক্ষেপকে ব্যয়, সময়, কর্মী, মান ও বাস্তবায়ন ঝুঁকি দিয়ে তুলনা করো।",
        "বাংলাদেশি প্রতিষ্ঠান: স্থানীয় ক্ষুদ্র ও মাঝারি ব্যবসা, সমবায়, নতুন উদ্যোগ বা উৎপাদন প্রতিষ্ঠানের সামর্থ্যের সঙ্গে সমাধান মানিয়ে নাও।",
        "সাধারণ ভুল যাচাই: উদ্দীপকের কোন তথ্য নীতিটির প্রয়োগ প্রমাণ করে তা না দেখিয়ে শুধু নীতির নাম লিখো না।",
        "উত্তর কাঠামো: সমস্যা নির্ণয় → নীতি → পদক্ষেপ → বাস্তবায়ন → ফল পরিমাপ → শর্তযুক্ত সুপারিশ।",
      ],
    },
    civics: {
      en: [
        `Constitutional map: connect ${title} to the relevant principle, institution, right, duty and lawful remedy.`,
        "Checks and balances: distinguish separation of powers from complete isolation and show the accountability mechanism.",
        "Lawful pathway: identify the appropriate authority, process and evidence instead of giving only a personal opinion.",
        "Bangladesh governance case: analyse a realistic national or local institution while avoiding unsupported political claims.",
        "Evidence control: separate constitutional or legal fact, stimulus evidence, inference and value judgement.",
        "Analytical conclusion: balance citizen rights, public duty, institutional capacity and accountability in the final judgement.",
      ],
      bn: [
        `সাংবিধানিক মানচিত্র: “${title}” বিষয়কে প্রাসঙ্গিক নীতি, প্রতিষ্ঠান, অধিকার, দায়িত্ব ও আইনসম্মত প্রতিকারের সঙ্গে যুক্ত করো।`,
        "পারস্পরিক নিয়ন্ত্রণ: ক্ষমতার পৃথকীকরণকে সম্পূর্ণ বিচ্ছিন্নতা ভাববে না; জবাবদিহির কার্যপ্রণালি দেখাও।",
        "আইনসম্মত পথ: ব্যক্তিগত মতামতের বদলে উপযুক্ত কর্তৃপক্ষ, প্রক্রিয়া ও প্রয়োজনীয় প্রমাণ শনাক্ত করো।",
        "বাংলাদেশের সুশাসন: অপ্রমাণিত রাজনৈতিক দাবি ছাড়া বাস্তব জাতীয় বা স্থানীয় প্রতিষ্ঠানের ঘটনা বিশ্লেষণ করো।",
        "প্রমাণ নিয়ন্ত্রণ: সাংবিধানিক/আইনি তথ্য, উদ্দীপকের প্রমাণ, অনুমান ও মূল্যবোধভিত্তিক মত আলাদা রাখো।",
        "বিশ্লেষণী সিদ্ধান্ত: নাগরিক অধিকার, সরকারি দায়িত্ব, প্রাতিষ্ঠানিক সামর্থ্য ও জবাবদিহির ভারসাম্য দেখাও।",
      ],
    },
    history: {
      en: [
        `Chronology: place the events of ${title} on a dated sequence with actor, location, immediate result and turning point.`,
        "Source provenance: examine who created the source, when, for whom, for what purpose and with what limitation.",
        "Causation: rank long-term condition, short-term trigger and individual action instead of presenting an unstructured list.",
        "Corroboration: compare at least two sources or perspectives and explain agreement, contradiction and missing evidence.",
        "Bangladesh significance: distinguish immediate outcome, long-term consequence and present historical importance.",
        "Judgement standard: reach a qualified conclusion that acknowledges source limits and a plausible alternative explanation.",
      ],
      bn: [
        `কালানুক্রম: “${title}” অধ্যায়ের ঘটনাগুলো তারিখ, ব্যক্তি, স্থান, তাৎক্ষণিক ফল ও মোড় ঘোরানো ঘটনাসহ সাজাও।`,
        "উৎসের উৎপত্তি: কে, কখন, কার জন্য, কী উদ্দেশ্যে উৎসটি তৈরি করেছে এবং তার সীমাবদ্ধতা কী—বিশ্লেষণ করো।",
        "কারণ বিশ্লেষণ: দীর্ঘমেয়াদি অবস্থা, তাৎক্ষণিক সূত্রপাত ও ব্যক্তির ভূমিকা গুরুত্ব অনুযায়ী সাজাও।",
        "পারস্পরিক যাচাই: অন্তত দুটি উৎস/দৃষ্টিভঙ্গির মিল, অমিল ও অনুপস্থিত প্রমাণ ব্যাখ্যা করো।",
        "বাংলাদেশের তাৎপর্য: তাৎক্ষণিক ফল, দীর্ঘমেয়াদি পরিণতি ও বর্তমান ঐতিহাসিক গুরুত্ব আলাদা করো।",
        "সিদ্ধান্তের মান: উৎসের সীমা ও একটি গ্রহণযোগ্য বিকল্প ব্যাখ্যা স্বীকার করে শর্তযুক্ত উপসংহার দাও।",
      ],
    },
    english: {
      en: [
        `Task control: identify the audience, purpose, format, tone and required content before answering ${title}.`,
        "Planning note: create a short outline with one controlling idea and supporting detail for each paragraph.",
        "Language control: check tense consistency, subject–verb agreement, reference, sentence boundaries and punctuation.",
        "Model improvement: compare a weak and improved response, then name the exact change that earns more marks.",
        "Timed writing: reserve time for planning, drafting and a final task-completion and accuracy check.",
        "Proofreading pass: inspect content first, organisation second and grammar, spelling and punctuation last.",
      ],
      bn: [],
    },
  };
  const pack = packs[subjectId] ?? {
    en: [
      `Concept map: connect the key terms, rule, example and final check for ${title}.`,
      "Evidence control: distinguish the supplied fact from assumption and conclusion.",
      "Guided method: complete each step in order and explain why it is necessary.",
      "Transfer task: change one condition and predict how the answer must change.",
      "Exam presentation: match the depth and structure to the command word and marks.",
      "Final review: check terminology, reasoning, evidence and conclusion separately.",
    ],
    bn: [
      `ধারণা-মানচিত্র: “${title}” অধ্যায়ের মূল পরিভাষা, নিয়ম, উদাহরণ ও শেষ যাচাই এক পাতায় যুক্ত করো।`,
      "প্রমাণ নিয়ন্ত্রণ: প্রদত্ত তথ্য, অনুমান ও সিদ্ধান্ত আলাদা করে চিহ্নিত করো।",
      "নির্দেশিত পদ্ধতি: প্রতিটি ধাপ ক্রমে সম্পন্ন করে ধাপটি কেন প্রয়োজন তা ব্যাখ্যা করো।",
      "নতুন পরিস্থিতিতে প্রয়োগ: একটি শর্ত বদলে উত্তর বা সিদ্ধান্ত কীভাবে বদলাবে তা নির্ণয় করো।",
      "পরীক্ষার উপস্থাপন: নির্দেশক শব্দ ও নম্বর অনুযায়ী উত্তরের গভীরতা ও বিন্যাস ঠিক রাখো।",
      "চূড়ান্ত যাচাই: পরিভাষা, যুক্তি, প্রমাণ ও উপসংহার আলাদাভাবে মিলিয়ে দেখো।",
    ],
  };
  return english || subjectId === "english" ? pack.en : pack.bn;
}

function buildMasteryDepthNotes(subjectId: string, chapter: ChapterPreview, english = false): string[] {
  const detail = getChapterKnowledge(subjectId, chapter);
  const bn = banglaChapterDetails[chapter.title];
  const name = english ? chapter.title : chapter.titleBn;
  const context = english ? detail.context : (bn?.example ?? detail.context);
  return english ? [
    `Evidence ladder: for ${name}, separate the claim, given fact, rule, inference and final judgement so every conclusion can be traced.`,
    `Cross-chapter bridge: connect ${name} to one earlier chapter and explain which idea transfers and which condition changes.`,
    `Case variation: change one fact in “${context}” and predict which step, result or recommendation must change.`,
    "Marker simulation: award marks line by line, circle unsupported claims and rewrite only the weakest scoring section.",
    "Closed-book recall: produce the definition, rule, method, example, limitation and final check from memory in six minutes.",
    "Mixed-paper readiness: identify whether an unfamiliar task needs recall, calculation, interpretation, comparison or evaluation before answering.",
  ] : [
    `কথার সঙ্গে প্রমাণ মিলাও: “${name}” নিয়ে যে সিদ্ধান্ত লিখবে, তার পাশে উদ্দীপকের তথ্য, নিয়ম বা হিসাবটি দেখাও।`,
    `আগের শেখার সঙ্গে মিল: “${name}” কোন আগের অধ্যায়ের কাজে লাগে? মিলটি এক বাক্যে এবং পার্থক্যটি আরেক বাক্যে লেখো।`,
    `একটি তথ্য বদলে দেখো: “${context}” উদাহরণের একটি শর্ত পাল্টালে উত্তর কোথায় বদলাবে—কারণসহ লেখো।`,
    "নিজেই খাতা দেখো: প্রতিটি লাইনের পাশে সম্ভাব্য নম্বর বসাও। যে দাবির পক্ষে কারণ বা প্রমাণ নেই, সেটি ঠিক করে আবার লেখো।",
    "বই বন্ধ রেখে ছয় মিনিটে মূল সংজ্ঞা, নিয়ম, একটি উদাহরণ ও শেষ যাচাইটি লিখে ফেলো। কোথায় আটকে গেলে শুধু সেই অংশটি আবার পড়ো।",
    "প্রশ্নটি আগে চিনে নাও—এটি কি হিসাব, ব্যাখ্যা, তুলনা, প্রয়োগ নাকি মূল্যায়ন চাইছে? এরপর সেই ধরনে উত্তর সাজাও।",
  ];
}

function buildExaminerRevisionNotes(subjectId: string, chapter: ChapterPreview, english = false): string[] {
  const detail = getChapterKnowledge(subjectId, chapter);
  const bn = banglaChapterDetails[chapter.title];
  const name = english ? chapter.title : chapter.titleBn;
  const terms = english ? detail.terms.split(",").map((item) => item.trim()) : (bn?.terms ?? []);
  return english ? [
    `Examiner lens: in ${name}, award marks only when the answer makes the link between ${terms.slice(0, 2).join(" and ")} visible rather than implied.`,
    "Weak-to-strong rewrite: replace a vague opening with the exact rule, then attach each piece of evidence to one sentence of analysis.",
    "Distractor audit: for every MCQ, explain why each wrong option fails by definition, relationship, evidence or task demand.",
    "Command-word control: distinguish identify, explain, apply, compare, analyse and evaluate before deciding answer depth.",
    "Answer economy: remove repetition, preserve necessary evidence and use the saved time for a final task-completion check.",
    "Last-night revision: review the one-page map, two recurring errors, one worked model and one timed response—then stop passive rereading.",
  ] : [
    `নম্বর পেতে সম্পর্কটি লিখে দেখাও: “${name}” উত্তরে ${terms.slice(0, 2).join(" ও ")} কীভাবে যুক্ত, তা পরিষ্কার এক–দুই বাক্যে বলো।`,
    "অস্পষ্ট ভূমিকা বাদ দাও। আগে সঠিক নিয়মটি লেখো, তারপর উদ্দীপকের তথ্য দিয়ে বোঝাও কেন নিয়মটি এখানে প্রযোজ্য।",
    "MCQ মিলিয়ে শেখো: সঠিক উত্তর জানার পর বাকি তিনটি কেন ভুল, এক লাইনে করে লিখে রাখো। একই ফাঁদে আবার পড়বে না।",
    "প্রশ্নের শব্দ খেয়াল করো: ‘চিহ্নিত করো’, ‘ব্যাখ্যা করো’, ‘প্রয়োগ করো’ ও ‘মূল্যায়ন করো’—প্রতিটির উত্তর এক রকম নয়।",
    "একই কথা বারবার না লিখে দরকারি সংজ্ঞা, ধাপ ও প্রমাণ রাখো। শেষে প্রশ্নের কোনো অংশ বাদ গেছে কি না মিলিয়ে নাও।",
    "পরীক্ষার আগের রাতে শুধু চারটি জিনিস দেখো: এক পাতার সারাংশ, বারবার হওয়া দুই ভুল, একটি সমাধান করা উদাহরণ এবং একটি সময় ধরে লেখা উত্তর।",
  ];
}

function buildSevenDayMasteryPlan(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge, bnDetail: { core: string; terms: string[]; example: string }) {
  const english = subjectId === "english";
  const blueprint = subjectBlueprints[subjectId];
  const banglaMethod = banglaSubjectMethod[subjectId] ?? { method: blueprint.method, check: blueprint.evidence };
  const subjectTask = english ? blueprint.method : banglaMethod.method;
  const evidence = english ? blueprint.evidence : banglaMethod.check;
  const name = english ? chapter.title : chapter.titleBn;
  const terms = english ? detail.terms.split(",").map((term) => term.trim()) : bnDetail.terms;
  const application = english ? detail.context : bnDetail.example;
  if (english) return [
    { day: 1, title: "Diagnose and map", focus: `Find what you already know about ${name}.`, tasks: ["Attempt 10 mixed MCQs without notes.", `Build a one-page map using ${terms.slice(0, 4).join(", ")}.`, "List three uncertain rules for targeted study."], output: "A baseline score and one-page chapter map", minutes: 35 },
    { day: 2, title: "Concept and language control", focus: "Make every key idea usable in a sentence.", tasks: ["Study the first half of the detailed lessons.", "Define each key term in original wording.", "Correct five deliberately weak examples."], output: "A precise terminology sheet with examples", minutes: 45 },
    { day: 3, title: "Method and worked response", focus: `Reuse the chapter method: ${subjectTask}.`, tasks: ["Complete two worked examples step by step.", "Annotate why every step is necessary.", "Redo one example without viewing the solution."], output: "One independently reconstructed model response", minutes: 50 },
    { day: 4, title: "MCQ accuracy clinic", focus: "Remove distractor-based mistakes.", tasks: ["Attempt 25 unseen MCQs.", "For every error, explain why the chosen option failed.", "Retest only the incorrect concepts."], output: "An error log with corrected rules", minutes: 40 },
    { day: 5, title: "Board-pattern writing", focus: "Control task, evidence, structure and time.", tasks: ["Write one standard response under time.", "Compare it with the marking guide.", "Rewrite the weakest paragraph or step."], output: "One corrected exam-ready written answer", minutes: 50 },
    { day: 6, title: "Challenge and transfer", focus: `Apply the chapter to an unfamiliar context: ${application}`, tasks: ["Attempt one challenge CQ or written case.", "Test one alternative interpretation.", `Verify the result using: ${evidence}`], output: "A justified answer with one limitation", minutes: 55 },
    { day: 7, title: "Chapter mock and recovery", focus: "Prove readiness, then repair the final gaps.", tasks: ["Complete a chapter model test without notes.", "Mark it strictly using the supplied guide.", "Schedule incorrect concepts for 1-day and 7-day retrieval."], output: "Final score, gap list and next-review dates", minutes: 90 },
  ];
  return [
    { day: 1, title: "প্রাথমিক যাচাই ও মানচিত্র", focus: `“${name}” বিষয়ে আগে থেকে কী জানো তা নির্ণয় করো।`, tasks: ["নোট না দেখে ১০টি মিশ্র MCQ দাও।", `${terms.slice(0, 4).join(" · ")} দিয়ে এক পাতার ধারণা-মানচিত্র বানাও।`, "যে ৩টি নিয়মে সন্দেহ আছে সেগুলো আলাদা করো।"], output: "প্রাথমিক স্কোর ও এক পাতার অধ্যায়-মানচিত্র", minutes: 35 },
    { day: 2, title: "ধারণা ও পরিভাষা", focus: "প্রতিটি গুরুত্বপূর্ণ ধারণা নিজের ভাষায় ব্যবহার করতে শেখো।", tasks: ["বিস্তারিত পাঠের প্রথম অর্ধেক পড়ো।", "প্রতিটি পরিভাষার অর্থ, উদাহরণ ও বিপরীত/পার্থক্য লেখো।", "৫টি ভুল বক্তব্য সংশোধন করো।"], output: "উদাহরণসহ নির্ভুল পরিভাষা শিট", minutes: 45 },
    { day: 3, title: "পদ্ধতি ও সমাধান", focus: `অধ্যায়ের সমাধানপদ্ধতি আয়ত্ত করো: ${subjectTask}।`, tasks: ["দুটি সমাধানসহ উদাহরণ ধাপে ধাপে অনুসরণ করো।", "প্রতিটি ধাপ কেন প্রয়োজন তা পাশে লেখো।", "সমাধান না দেখে একটি উদাহরণ আবার করো।"], output: "নিজে সম্পন্ন করা একটি পূর্ণ সমাধান", minutes: 50 },
    { day: 4, title: "MCQ নির্ভুলতা ক্লিনিক", focus: "বিভ্রান্তিকর বিকল্পে ভুল করার কারণ দূর করো।", tasks: ["২৫টি না-দেখা MCQ দাও।", "প্রতিটি ভুল বিকল্প কেন ভুল তা এক বাক্যে লেখো।", "শুধু ভুল হওয়া ধারণাগুলো আবার যাচাই করো।"], output: "সংশোধিত নিয়মসহ ভুলের খাতা", minutes: 40 },
    { day: 5, title: "বোর্ড-প্যাটার্ন CQ লেখা", focus: "১+২+৩+৪ মানবণ্টনে উত্তর সম্পূর্ণ করো।", tasks: ["সময় ধরে একটি পূর্ণ CQ লেখো।", "ক/খ/গ/ঘ আলাদা rubric দিয়ে নম্বর দাও।", "যে অংশে আরও কাজ দরকার, সেটি মডেল উত্তর দেখে আবার লেখো।"], output: "সংশোধিত পূর্ণাঙ্গ ১০ নম্বরের CQ", minutes: 55 },
    { day: 6, title: "চ্যালেঞ্জ ও নতুন প্রয়োগ", focus: `অপরিচিত পরিস্থিতিতে নিয়ম প্রয়োগ করো: ${application}`, tasks: ["একটি Challenge বা কলেজ-স্ট্যান্ডার্ড প্রশ্ন সমাধান করো।", "একটি বিকল্প সিদ্ধান্ত বা ফল তুলনা করো।", `এই নিয়মে ফল যাচাই করো: ${evidence}`], output: "প্রমাণ, বিকল্প ও সীমাবদ্ধতাসহ বিশ্লেষণ", minutes: 55 },
    { day: 7, title: "অধ্যায় মডেল টেস্ট ও পুনরুদ্ধার", focus: "প্রস্তুতি প্রমাণ করো এবং শেষ দুর্বলতা ঠিক করো।", tasks: ["নোট ছাড়া পূর্ণ অধ্যায় মডেল টেস্ট দাও।", "মূল্যায়ন নির্দেশিকা দিয়ে কঠোরভাবে নম্বর দাও।", "ভুল ধারণাগুলো ১ দিন ও ৭ দিন পর পুনরুদ্ধারের তালিকায় রাখো।"], output: "চূড়ান্ত স্কোর, দুর্বলতার তালিকা ও পরবর্তী রিভিশন তারিখ", minutes: 90 },
  ];
}

function buildExaminerRubric(subjectId: string, chapter: ChapterPreview, detail: ChapterKnowledge, bnDetail: { core: string; terms: string[]; example: string }) {
  const english = subjectId === "english";
  const blueprint = subjectBlueprints[subjectId];
  const terms = english ? detail.terms.split(",").map((term) => term.trim()) : bnDetail.terms;
  const first = terms[0] ?? (english ? chapter.title : chapter.titleBn);
  const second = terms[1] ?? first;
  if (english) return [
    { command: "Identify / State", marks: "1", mustShow: `One exact idea, term or rule connected to ${first}.`, sentenceStart: `${first} is…`, losesMarks: "Giving examples, history or explanation before stating the requested point." },
    { command: "Explain", marks: "2", mustShow: `The meaning plus a visible because/therefore relationship between ${first} and ${second}.`, sentenceStart: `This happens because… Therefore…`, losesMarks: "Writing two definitions without explaining their relationship." },
    { command: "Apply", marks: "3", mustShow: `Specific task evidence, the relevant ${chapter.title} rule and the resulting effect.`, sentenceStart: `In the supplied context, the decisive evidence is…`, losesMarks: "Repeating the task or rule without using its specific evidence." },
    { command: "Analyse", marks: "3–4", mustShow: `A chain from evidence to rule, intermediate effect and final implication.`, sentenceStart: `The evidence suggests… which leads to…`, losesMarks: "Listing points without showing how one causes, supports or changes another." },
    { command: "Compare", marks: "4", mustShow: "A common basis, at least one similarity, one difference and what the difference means.", sentenceStart: `Both…; however… This difference matters because…`, losesMarks: "Describing two items separately without direct comparison." },
    { command: "Evaluate / Justify", marks: "4", mustShow: `A supported judgement using ${blueprint.evidence}, an alternative and one limitation.`, sentenceStart: `The stronger conclusion is… because… However…`, losesMarks: "Giving a personal opinion or conclusion without evidence and qualification." },
  ];
  return [
    { command: "সংজ্ঞা দাও / কী", marks: "১", mustShow: `${first}-এর এক বাক্যের নির্ভুল পরিচয় বা সংজ্ঞা।`, sentenceStart: `${first} হলো…`, losesMarks: "সংজ্ঞার আগে অপ্রয়োজনীয় ইতিহাস, উদাহরণ বা ব্যাখ্যা লেখা।" },
    { command: "ব্যাখ্যা করো / কেন", marks: "২", mustShow: `${first} ও ${second}-এর অর্থ, কারণ এবং সম্পর্ক।`, sentenceStart: `এর কারণ হলো… ফলে…`, losesMarks: "শুধু দুটি সংজ্ঞা লিখে সম্পর্ক বা কারণ না দেখানো।" },
    { command: "প্রয়োগ করো / নির্ণয় করো", marks: "৩", mustShow: `উদ্দীপকের নির্দিষ্ট তথ্য + “${chapter.titleBn}”-এর নিয়ম + প্রাপ্ত ফল।`, sentenceStart: `উদ্দীপকের নির্ণায়ক তথ্য হলো…`, losesMarks: "উদ্দীপক নকল করা অথবা নিয়ম লিখে নির্দিষ্ট তথ্যে প্রয়োগ না করা।" },
    { command: "বিশ্লেষণ করো", marks: "৩–৪", mustShow: "তথ্য → নিয়ম → মধ্যবর্তী প্রভাব → চূড়ান্ত ফলের ধারাবাহিক যোগসূত্র।", sentenceStart: `তথ্যটি নির্দেশ করে… এর ফলে…`, losesMarks: "বিচ্ছিন্ন পয়েন্ট লেখা কিন্তু কারণ, প্রভাব বা পারস্পরিক সম্পর্ক না দেখানো।" },
    { command: "তুলনা করো", marks: "৪", mustShow: "একই মানদণ্ডে অন্তত একটি মিল, একটি অমিল এবং অমিলের তাৎপর্য।", sentenceStart: `উভয়ের মিল… তবে পার্থক্য… এই পার্থক্যের গুরুত্ব…`, losesMarks: "দুটি বিষয় আলাদাভাবে বর্ণনা করা কিন্তু সরাসরি তুলনা না করা।" },
    { command: "মূল্যায়ন / যৌক্তিকতা দেখাও", marks: "৪", mustShow: `প্রমাণসমর্থিত সিদ্ধান্ত, একটি বিকল্প এবং একটি সীমাবদ্ধতা; যাচাই: ${(banglaSubjectMethod[subjectId] ?? { check: subjectBlueprints[subjectId].evidence }).check}।`, sentenceStart: `অধিক গ্রহণযোগ্য সিদ্ধান্ত হলো… কারণ… তবে…`, losesMarks: "প্রমাণহীন ব্যক্তিগত মত দেওয়া অথবা সীমাবদ্ধতা না লিখে চূড়ান্ত দাবি করা।" },
  ];
}

function generatedResource(subjectId: string, chapter: ChapterPreview): ExamResource {
  const blueprint = subjectBlueprints[subjectId];
  const detail = getChapterKnowledge(subjectId, chapter);
  const subjectFallback: Record<string, BanglaChapterDetail> = {
    bangla: chapter.paper === "1st Paper"
      ? { core: `“${chapter.titleBn}” অংশে প্রসঙ্গ, বক্তব্য, ভাষা, সাহিত্যিক কৌশল ও তাৎপর্য একসঙ্গে বুঝতে হবে। উত্তরে পাঠের নির্দিষ্ট প্রমাণ দিয়ে নিজের ব্যাখ্যাটি প্রতিষ্ঠা করতে হবে।`, terms: [chapter.titleBn, ...(chapter.lessonPlan??[]).slice(0,3).map(item=>item.titleBn), "পাঠ-প্রমাণ"], example: `“${chapter.titleBn}” পাঠ থেকে ${(chapter.lessonPlan??[]).slice(0,3).map(item=>`“${item.titleBn}”`).join(", ") || "মূল বক্তব্য, ভাষারীতি ও তাৎপর্য"}—এই দিকগুলো আলাদা করো। প্রতিটির পাশে পাঠের নির্দিষ্ট শব্দ, ঘটনা বা চিত্রকল্প লিখে তারপর তাদের পারস্পরিক সম্পর্ক ব্যাখ্যা করো।` }
      : { core: `“${chapter.titleBn}” অংশে নিয়ম জানার পাশাপাশি শুদ্ধ প্রয়োগ, প্রয়োজনীয় বিন্যাস এবং সম্পূর্ণ লিখিত রূপ দেখাতে হবে।`, terms: [chapter.titleBn, "শুদ্ধ প্রয়োগ", "বাক্যগঠন", "বিন্যাস", "সম্পাদনা"], example: `প্রশ্নের উদ্দেশ্য ও নির্ধারিত বিন্যাস বুঝে একটি সম্পূর্ণ উত্তর লেখো; তারপর বানান, বাক্য, বিরামচিহ্ন ও প্রাসঙ্গিকতা আলাদাভাবে সম্পাদনা করো।` },
    ict: { core: `“${chapter.titleBn}” অধ্যায়ে প্রযুক্তির ধারণা শুধু সংজ্ঞা নয়—উপাদান, কার্যপ্রবাহ, ব্যবহার, নিরাপত্তা এবং বাস্তব ফলের সম্পর্ক বুঝে প্রয়োগ করতে হবে।`, terms: [chapter.titleBn, "ইনপুট", "প্রক্রিয়াকরণ", "আউটপুট", "নিরাপত্তা"], example: `বাংলাদেশের শিক্ষা, ব্যবসা বা নাগরিক সেবায় “${chapter.titleBn}”-এর একটি নির্দিষ্ট ব্যবহার বেছে তার input, process, output, প্রয়োজনীয় diagram/code এবং নিরাপত্তা ঝুঁকি দেখাও।` },
    logic: { core: `“${chapter.titleBn}” অধ্যায়ে ভাষার রূপ, ধারণার পরিধি এবং যুক্তির বৈধতা আলাদা করে বিচার করতে হবে; সিদ্ধান্ত সত্য মনে হলেই যুক্তি বৈধ হয় না।`, terms: [chapter.titleBn, "যুক্তি", "আকার", "বিষয়বস্তু", "বৈধতা"], example: `“${chapter.titleBn}” থেকে একটি দৈনন্দিন বক্তব্য বেছে পূর্বধারণা ও সিদ্ধান্ত আলাদা করো; তারপর যুক্তির আকার পরীক্ষা করে ঠিক কোন অনুমানে ত্রুটি হচ্ছে তা দেখাও।` },
    islamic_history: { core: `“${chapter.titleBn}” অধ্যায়কে সময়, স্থান, ব্যক্তি, কারণ, ঘটনা, ফল এবং সভ্যতাগত তাৎপর্যের ধারায় পড়তে হবে; ধর্মীয় মর্যাদা ও ঐতিহাসিক প্রমাণ—দুটিই সম্মানের সঙ্গে স্পষ্ট রাখতে হবে।`, terms: [chapter.titleBn, "কালানুক্রম", "পটভূমি", "কারণ", "ঐতিহাসিক তাৎপর্য"], example: `“${chapter.titleBn}”-এর নির্দিষ্ট ঘটনাগুলো সময়রেখায় সাজিয়ে একটি ঘটনার রাজনৈতিক, সামাজিক ও সাংস্কৃতিক প্রভাব পাঠের প্রমাণসহ ব্যাখ্যা করো।` },
    statistics: { core: `“${chapter.titleBn}” অধ্যায়ে তথ্যের ধরন, প্রয়োজনীয় প্রতীক, সারণি বা রেখাচিত্র, সূত্র, হিসাব এবং ফলের ব্যাখ্যা—সব একই সমাধানে যুক্ত রাখতে হবে।`, terms: [chapter.titleBn, "তথ্য", "চলক", "সূত্র", "ব্যাখ্যা"], example: `“${chapter.titleBn}”-এর উপযোগী একটি ছোট dataset দিয়ে সারণি বা চিত্র তৈরি করো, প্রতিটি হিসাব দেখাও এবং পাওয়া ফলটির বাস্তব অর্থ ব্যাখ্যা করো।` },
    geography: { core: `“${chapter.titleBn}” অধ্যায়ে স্থান, প্রক্রিয়া, নিয়ামক, চিত্র/মানচিত্র এবং মানুষ–পরিবেশের প্রভাব একই বিশ্লেষণে যুক্ত করতে হবে।`, terms: [chapter.titleBn,"স্থান","প্রক্রিয়া","মানচিত্র","কারণ–ফল"], example: `বাংলাদেশের একটি পরিচিত অঞ্চলে “${chapter.titleBn}” (${chapter.paper})-এর প্রক্রিয়া বা বৈশিষ্ট্য labelled চিত্র/মানচিত্রে দেখিয়ে স্থানীয় কারণ, দৃশ্যমান ফল এবং কার্যকর ব্যবস্থাপনা ব্যাখ্যা করো।` },
    accounting: { core:`এই অধ্যায়ে তোমার কাজ তিনটি—লেনদেন বা তথ্যটি ঠিকভাবে চিনবে, স্বীকৃত হিসাবের নিয়মে working দেখাবে, তারপর জের/মোট/বিবরণী মিলিয়ে নেবে। “${chapter.titleBn}” পড়ার সময় প্রতিটি অঙ্ক কোথা থেকে এলো, পাশে ছোট করে লিখে রাখো।`,terms:[chapter.titleBn,...(chapter.lessonPlan??[]).slice(0,4).map(item=>item.titleBn)],example:`একটি ছোট ব্যবসার “${chapter.titleBn}” সম্পর্কিত তথ্য দেওয়া আছে। হিসাবের নাম ও শ্রেণি ঠিক করে স্বীকৃত ছকে সম্পূর্ণ working দেখাও; শেষে দুই পাশ, জের বা মোট দিয়ে ফল যাচাই করো।`},
    business: { core:`“${chapter.titleBn}” মুখস্থ সংজ্ঞার অধ্যায় নয়। একটি প্রতিষ্ঠানে কী সমস্যা হচ্ছে, কোন নীতিটি এখানে কাজে লাগবে, কার দায়িত্ব কী এবং ফল কীভাবে মাপবে—এই চারটি প্রশ্ন ধরে পড়লে অধ্যায়টি সহজ হবে।`,terms:[chapter.titleBn,...(chapter.lessonPlan??[]).slice(0,4).map(item=>item.titleBn)],example:`একটি বাংলাদেশি প্রতিষ্ঠানের পরিচিত সমস্যা ধরে “${chapter.titleBn}” থেকে উপযুক্ত নীতি বেছে নাও। উদ্দীপকের প্রমাণ, বাস্তব পদক্ষেপ, দায়িত্বপ্রাপ্ত ব্যক্তি এবং ফল মাপার একটি সূচক লিখো।`},
    civics: { core:`“${chapter.titleBn}” বুঝতে ব্যক্তি, অধিকার, দায়িত্ব ও প্রতিষ্ঠানকে আলাদা করে দেখো। কে কোন ক্ষমতা ব্যবহার করছে, সেই ক্ষমতার সীমা কোথায় এবং নাগরিকের আইনসম্মত প্রতিকার কী—এই পথেই উত্তর সাজাবে।`,terms:[chapter.titleBn,...(chapter.lessonPlan??[]).slice(0,4).map(item=>item.titleBn)],example:`একজন নাগরিক সেবা বা অধিকার পেতে সমস্যায় পড়েছেন। “${chapter.titleBn}” অনুযায়ী সংশ্লিষ্ট প্রতিষ্ঠান, তার দায়িত্ব, জবাবদিহির পথ এবং নাগরিকের করণীয় ব্যাখ্যা করো।`},
    history: { core:`“${chapter.titleBn}” পড়ার সময় তারিখের তালিকা বানিয়ে থেমো না। ঘটনার আগে কী পরিস্থিতি ছিল, কী কারণে মোড় বদলাল, কারা সিদ্ধান্ত নিল এবং পরে কী পরিবর্তন হলো—এই গল্পের ধারাটি আগে ধরো।`,terms:[chapter.titleBn,...(chapter.lessonPlan??[]).slice(0,4).map(item=>item.titleBn)],example:`“${chapter.titleBn}”-এর একটি নির্দিষ্ট ঘটনাকে পটভূমি → কারণ → ঘটনা → তাৎক্ষণিক ফল → দীর্ঘমেয়াদি গুরুত্ব ধারায় সাজাও; ব্যবহৃত উৎসটি কী জানায় এবং কী জানায় না, সেটিও লিখো।`},
    finance: {
      core: chapter.paper === "1st Paper"
        ? `“${chapter.titleBn}” অধ্যায়ে আর্থিক সিদ্ধান্ত নেওয়ার আগে লক্ষ্য, সময়, নগদপ্রবাহ, ব্যয় ও ঝুঁকি আলাদা করতে হবে। এরপর অধ্যায়ের উপযুক্ত সূত্র বা তুলনার মানদণ্ড ব্যবহার করে ফলটির অর্থ এবং সিদ্ধান্তের সীমাবদ্ধতা ব্যাখ্যা করতে হবে।`
        : `“${chapter.titleBn}” অধ্যায়ে সংশ্লিষ্ট পক্ষ, দলিল/সেবা, কার্যপ্রবাহ, ঝুঁকি ও নিয়ন্ত্রণের সম্পর্ক বুঝতে হবে। বর্তমান হার বা বিধান অনুমান না করে প্রশ্নে দেওয়া তথ্যের ভিত্তিতে নিরাপদ ও যুক্তিসংগত সিদ্ধান্ত দিতে হবে।`,
      terms: [chapter.titleBn,...(chapter.lessonPlan??[]).slice(0,4).map((lesson)=>lesson.titleBn)],
      example: chapter.paper === "1st Paper"
        ? `একটি বাংলাদেশি পরিবার বা প্রতিষ্ঠান “${chapter.titleBn}” বিষয়ে দুটি আর্থিক বিকল্প বিবেচনা করছে। timeline/working-এ প্রদত্ত তথ্য সাজিয়ে ব্যয়, আয়, ঝুঁকি ও তারল্যের ভিত্তিতে শর্তযুক্ত সিদ্ধান্ত দাও।`
        : `একজন বাংলাদেশি গ্রাহক বা প্রতিষ্ঠান “${chapter.titleBn}” সম্পর্কিত একটি সেবা/দলিল ব্যবহার করছে। পক্ষ, ধাপ, প্রয়োজনীয় সতর্কতা এবং সম্ভাব্য ঝুঁকি ধরে সঠিক করণীয় ব্যাখ্যা করো।`,
    },
    economics: {
      core: `“${chapter.titleBn}” অধ্যায়ে কোন চলক বদলেছে, কোন শর্ত অপরিবর্তিত ধরা হয়েছে এবং পরিবর্তনটি কোন পথে ফল তৈরি করেছে—এই তিনটি বিষয় স্পষ্ট করতে হবে। প্রয়োজনমতো সূত্র, সূচি বা রেখাচিত্র ব্যবহার করে শেষে ফলটির অর্থনৈতিক অর্থ ও সীমাবদ্ধতা লিখতে হবে।`,
      terms: [chapter.titleBn,...(chapter.lessonPlan??[]).slice(0,4).map((lesson)=>lesson.titleBn)],
      example: `বাংলাদেশের পরিচিত বাজার, পরিবার, প্রতিষ্ঠান বা সামষ্টিক অর্থনীতির একটি পরিস্থিতিতে “${chapter.titleBn}” অধ্যায়ের নির্ধারকগুলো শনাক্ত করো। প্রযোজ্য ছক/সূত্র/গ্রাফ দিয়ে পরিবর্তন দেখিয়ে ফলটির কারণ, প্রভাব ও সীমা ব্যাখ্যা করো।`,
    },
  };
  const recordedBanglaDetail = subjectId !== "english" && chapterKnowledge[subjectId]?.[chapter.title]
    ? { core: detail.anchor, terms: detail.terms.split(",").map((term) => term.trim()).filter(Boolean), example: detail.context }
    : undefined;
  const bnDetail = banglaChapterDetails[chapter.title] ?? recordedBanglaDetail ?? subjectFallback[subjectId] ?? {
    core: `চলো “${chapter.titleBn}” ধীরে ধীরে বুঝি। আগে মূল কথাটি নিজের ভাষায় বলবে, তারপর একটি পরিচিত উদাহরণে ব্যবহার করবে। যে জায়গায় ফল বদলায়, সেখানে কারণটি লিখে রাখবে—এই এক অভ্যাসেই উত্তর অনেক পরিষ্কার হবে।`,
    terms: subjectId === "english" ? detail.terms.split(",").map((term) => term.trim()) : [chapter.titleBn, "মূল ধারণা", "প্রয়োগ", "বিশ্লেষণ"],
    example: `তোমার কলেজ, পরিবার, স্থানীয় প্রতিষ্ঠান বা পরিচিত কোনো ঘটনার সঙ্গে “${chapter.titleBn}” মিলিয়ে দেখো। কোন তথ্যটি গুরুত্বপূর্ণ, কোন নিয়মটি লাগবে এবং ফলটি কেন গ্রহণযোগ্য—তিন ধাপে উত্তর দাও।`,
  };
  const chapterWorkshop = buildChapterWorkshop(subjectId, chapter, bnDetail);
  const materialPack = buildMaterialPack(subjectId, chapter, bnDetail, chapterWorkshop);
  const lessonDepthNotes = buildSubjectDepthNotes(subjectId, chapter, subjectId === "english");
  const lessonTransferNotes = buildMasteryDepthNotes(subjectId, chapter, subjectId === "english");
  const lessonExaminerNotes = buildExaminerRevisionNotes(subjectId, chapter, subjectId === "english");
  const bnMethod = banglaSubjectMethod[subjectId] ?? { method: blueprint.method, check: blueprint.evidence };
  const subjectLessonRoute = ({
    accounting: { lens:"লেনদেনের তথ্য → হিসাবের শ্রেণি → ডেবিট/ক্রেডিট → দাখিলা → জের/সমতা", evidence:"হিসাবের নাম, শ্রেণি, অঙ্কের দুই পাশ এবং চূড়ান্ত জের" },
    finance: { lens:"দেওয়া তথ্য → timeline/cash flow → সূত্র → মান বসানো → আর্থিক সিদ্ধান্ত", evidence:"সূত্র, একক, working এবং ঝুঁকি–তারল্যসহ ফলের অর্থ" },
    economics: { lens:"চলক ও শর্ত → সূচি/সূত্র → অক্ষ ও রেখা → পরিবর্তন → অর্থনৈতিক ব্যাখ্যা", evidence:"সঠিক axis, curve/point, কারণ এবং নতুন ফল" },
    statistics: { lens:"তথ্যের ধরন → সারণি → সূত্র → ধাপে হিসাব → ফলের ব্যাখ্যা", evidence:"প্রতীক, class/সারণি, working, একক এবং interpretation" },
    ict: { lens:"সমস্যা → input → rule/code/logic → trace/output → debug", evidence:"বাস্তব code/diagram, line-by-line trace, output এবং ভুলের কারণ" },
    geography: { lens:"স্থান → নিয়ামক → প্রক্রিয়া → মানচিত্র/চিত্র → মানুষ–পরিবেশের ফল", evidence:"স্থাননাম, label, directional change, কারণ ও প্রভাব" },
    history: { lens:"পটভূমি → কারণ → ঘটনাক্রম → তাৎক্ষণিক ফল → দীর্ঘমেয়াদি গুরুত্ব", evidence:"তারিখ, ব্যক্তি, উৎস এবং কারণ–ফলের স্পষ্ট যোগ" },
    islamic_history: { lens:"সময়–স্থান → ব্যক্তি → ঘটনাক্রম → ফল → সভ্যতাগত তাৎপর্য", evidence:"কালানুক্রম, নির্ভরযোগ্য প্রমাণ এবং সম্মানজনক নির্ভুল পরিভাষা" },
    civics: { lens:"ধারণা/অধিকার → প্রতিষ্ঠান → প্রক্রিয়া → জবাবদিহি → নাগরিক প্রভাব", evidence:"সাংবিধানিক নীতি, প্রতিষ্ঠানের ভূমিকা ও বাস্তব প্রতিকার" },
    logic: { lens:"বাক্য → পদ/অবধারণা → পূর্বধারণা → যুক্তির আকার → বৈধতা যাচাই", evidence:"প্রতীক/আকার, নিয়ম, counterexample এবং সিদ্ধান্ত" },
    business: { lens:"সমস্যার লক্ষণ → ব্যবস্থাপনা নীতি → দায়িত্ব → বাস্তবায়ন → ফলের সূচক", evidence:"উদ্দীপকের আচরণ, নীতির যোগ এবং পরিমাপযোগ্য ফল" },
    bangla: { lens:"প্রসঙ্গ → মূল বক্তব্য → পাঠের প্রমাণ → ব্যাখ্যা → তাৎপর্য", evidence:"ঘটনা/উদ্ধৃতি, চরিত্র বা যুক্তি এবং পাঠের কেন্দ্রীয় বক্তব্য" },
  } as Record<string,{lens:string;evidence:string}>)[subjectId] ?? { lens:"চাওয়া → প্রাসঙ্গিক ধারণা → প্রয়োগ → প্রমাণ → সিদ্ধান্ত", evidence:"সঠিক পরিভাষা, দৃশ্যমান ধাপ এবং প্রশ্নমাফিক উপসংহার" };
  const examToolkit = buildExamToolkit(subjectId, chapter, bnDetail);
  const curatedLessons = (subjectId === "bangla" ? banglaLiteratureLessons(chapter.title) : null) ?? prioritySubjectLessons(subjectId, chapter.title);
  const ictDirectMap = subjectId === "ict" ? (() => {
    const sequence = chaptersBySubject.ict.findIndex((item) => item.title === chapter.title) + 1;
    const pageNumbers = (chapter.sourceRef?.page ?? "").replace(/[০-৯]/g, (digit) => String("০১২৩৪৫৬৭৮৯".indexOf(digit))).split(/[–-]/).map(Number);
    return { sequence, start: pageNumbers[0] || null, end: pageNumbers[1] || null, sourceId:"user-supplied-nctb-ict-scan" };
  })() : null;
  const referenceSequence = chaptersBySubject[subjectId]
    .filter((item) => (item.paper ?? "") === (chapter.paper ?? ""))
    .findIndex((item) => item.title === chapter.title) + 1;
  const referencePages = (chapter.sourceRef?.page ?? "")
    .replace(/[০-৯]/g, (digit) => String("০১২৩৪৫৬৭৮৯".indexOf(digit)))
    .match(/\d+/g)?.map(Number) ?? [];
  const referenceSourceId = chapter.sourceRef?.evidence === "official-textbook"
    ? `supplied-official-textbook-${subjectId}`
    : chapter.sourceRef ? `supporting-reference-${subjectId}` : null;
  const referenceEvidenceNote = chapter.sourceRef?.evidence === "official-textbook"
    ? "Working value transcribed from the supplied textbook scan; applicable edition and qualified reviewer sign-off remain pending."
    : "Working value transcribed from the supplied supporting reference. It helps organise the chapter, but cannot become official NCTB evidence until matched to an approved syllabus/book record.";
  const resource: ExamResource = {
    subject: subjectDisplay[subjectId],
    subjectBn: ({ bangla: "বাংলা", english: "ইংরেজি", ict: "তথ্য ও যোগাযোগ প্রযুক্তি", accounting: "হিসাববিজ্ঞান", finance: "ফিন্যান্স ও ব্যাংকিং", business: "ব্যবসায় সংগঠন ও ব্যবস্থাপনা", economics: "অর্থনীতি", civics: "পৌরনীতি ও সুশাসন", history: "ইতিহাস", logic: "যুক্তিবিদ্যা", islamic_history: "ইসলামের ইতিহাস ও সংস্কৃতি", statistics: "পরিসংখ্যান", geography:"ভূগোল" } as Record<string, string>)[subjectId],
    unit: chapter.title,
    unitBn: chapter.titleBn,
    review: {
      recordId: `review-${subjectId}-${chapter.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`,
      status: "under-review",
      lastReviewed: officialAcademicSources.checkedOn,
      lastReviewedBn: officialAcademicSources.checkedOnBn,
      curriculum: "NCTB HSC",
      sourcePolicy: "authored-board-pattern",
      verificationLevel: ["bangla", "english", "ict"].includes(subjectId) ? "catalogue-checked" : "official-curriculum-located",
      mappingStage: ["bangla", "english", "ict"].includes(subjectId) ? "core-book-linked" : "official-curriculum-located-edition-under-comparison",
      sourceIds: officialAcademicSources.entries.map((source) => source.id),
      chapterSequenceVerified: false,
      reviewerStatus: "unassigned",
      reviewerName: null,
      reviewerRole: null,
      reviewDate: null,
      supportingGuideReferences: chapter.sourceRef ? [chapter.sourceRef] : [],
      nctbComparison: {
        officialSubject: { status: "verified", value: ({ bangla:"বাংলা", english:"English", ict:"তথ্য ও যোগাযোগ প্রযুক্তি", accounting:"হিসাববিজ্ঞান", finance:"ফিন্যান্স, ব্যাংকিং ও বিমা", business:"ব্যবসায় সংগঠন ও ব্যবস্থাপনা", economics:"অর্থনীতি", civics:"পৌরনীতি ও সুশাসন", history:"ইতিহাস", logic:"যুক্তিবিদ্যা", islamic_history:"ইসলামের ইতিহাস ও সংস্কৃতি", statistics:"পরিসংখ্যান", geography:"ভূগোল" } as Record<string,string>)[subjectId], sourceId: "nctb-hsc-curriculum", evidenceNote: "Subject presence is recorded from the official NCTB higher-secondary curriculum index; this does not approve the local chapter order." },
        officialPaper: ictDirectMap ? { status: "pending", value: "একক আবশ্যিক বিষয়; পত্র বিভাজন নেই", sourceId: ictDirectMap.sourceId, evidenceNote: "Book structure recorded; current examination-structure notice still requires specialist confirmation." } : { status: "pending", value: chapter.paper ?? "Paper allocation under direct comparison", sourceId: "nctb-xi-xii-subject-structure", evidenceNote: "The site's paper allocation is linked to the official subject-structure layer and supplied paper-specific books; exact curriculum-PDF page transcription and reviewer confirmation remain required." },
        officialChapterTitle: ictDirectMap ? { status: "pending", value: chapter.titleBn, sourceId: ictDirectMap.sourceId, evidenceNote: "Title transcribed from the supplied textbook contents page; reviewer sign-off pending." } : { status: "pending", value: chapter.titleBn, sourceId: referenceSourceId, evidenceNote: referenceEvidenceNote },
        chapterSequence: ictDirectMap ? { status: "pending", value: ictDirectMap.sequence, sourceId: ictDirectMap.sourceId, evidenceNote: "Sequence transcribed from the six-chapter contents page; reviewer sign-off pending." } : { status: "pending", value: referenceSequence || null, sourceId: referenceSourceId, evidenceNote: referenceEvidenceNote },
        syllabusYear: { status: "verified", value: "HSC 2026 · পূর্ণাঙ্গ পাঠ্যসূচি ও পূর্ণ নম্বর", sourceId: "nctb-hsc-2026-full-syllabus", evidenceNote: "The official NCTB notice hosted by Dhaka Education Board establishes the 2026 full-syllabus examination basis; it does not by itself establish chapter pages." },
        applicableEdition: { status: "pending", value: chapter.sourceRef?.edition ?? null, sourceId: referenceSourceId, evidenceNote: referenceEvidenceNote },
        publisher: ictDirectMap ? { status: "pending", value: "জাতীয় শিক্ষাক্রম ও পাঠ্যপুস্তক বোর্ড, বাংলাদেশ", sourceId: ictDirectMap.sourceId, evidenceNote: "Publisher statement visible in supplied scan; exact edition/imprint and current applicability require review." } : { status: "pending", value: null, sourceId: null, evidenceNote: "Publisher has not been transcribed from the applicable book imprint." },
        approvalEvidence: { status: "pending", value: null, sourceId: null, evidenceNote: "Approval/reapproval notice has not been matched to the book imprint." },
        textbookStartPage: ictDirectMap ? { status: "pending", value: ictDirectMap.start, sourceId: ictDirectMap.sourceId, evidenceNote: "Printed start page transcribed from the supplied contents page; reviewer sign-off pending." } : { status: "pending", value: referencePages[0] ?? null, sourceId: referenceSourceId, evidenceNote: referenceEvidenceNote },
        textbookEndPage: ictDirectMap ? { status: "pending", value: ictDirectMap.end, sourceId: ictDirectMap.sourceId, evidenceNote: "Printed end page transcribed from the supplied contents page; reviewer sign-off pending." } : { status: "pending", value: referencePages[1] ?? referencePages[0] ?? null, sourceId: referenceSourceId, evidenceNote: referenceEvidenceNote },
        comparedBy: null,
        comparedOn: null,
      },
      evidenceNote: ["bangla", "english", "ict"].includes(subjectId)
        ? "Official core-book and curriculum records are linked; chapter-level comparison still requires qualified reviewer sign-off."
        : "Official curriculum located — textbook structure and applicable approved edition under comparison. Supporting guides are used only for explanations, examples and practice design.",
      evidenceNoteBn: ["bangla", "english", "ict"].includes(subjectId)
        ? "অফিসিয়াল আবশ্যিক বই ও শিক্ষাক্রমের নথি সংযুক্ত; অধ্যায়ভিত্তিক তুলনায় এখনো যোগ্য বিষয় পর্যালোচকের অনুমোদন প্রয়োজন।"
        : "অফিসিয়াল শিক্ষাক্রম পাওয়া গেছে—পাঠ্যবইয়ের কাঠামো ও প্রযোজ্য অনুমোদিত সংস্করণ তুলনাধীন। সহায়ক guide শুধু ব্যাখ্যা, উদাহরণ ও অনুশীলন তৈরিতে ব্যবহৃত।",
      nextAction: "Assign a qualified subject reviewer and compare paper, chapter title, order, edition, worked solutions and marking guides.",
      nextActionBn: "যোগ্য HSC বিষয় পর্যালোচক নির্ধারণ করে পত্র, অধ্যায়ের নাম ও ক্রম, অনুমোদিত সংস্করণ, সমাধান এবং নম্বর নির্দেশিকা সরাসরি মিলিয়ে অনুমোদন নিতে হবে।",
      blockingReasons: ["Curriculum, paper, chapter order and edition are not signed off", "Facts, terminology and applicable numerical work are not signed off", "MCQ answers, explanations and CQ 1+2+3+4 marking are not signed off", "Named reviewer declaration and dated correction log are missing"],
      blockingReasonsBn: ["শিক্ষাক্রম, পত্র, অধ্যায়ক্রম ও সংস্করণ অনুমোদিত নয়", "তথ্য, পরিভাষা ও প্রযোজ্য গাণিতিক কাজ অনুমোদিত নয়", "MCQ উত্তর-ব্যাখ্যা ও CQ ১+২+৩+৪ মানবণ্টন অনুমোদিত নয়", "পর্যালোচকের পরিচয়সহ ঘোষণা ও তারিখযুক্ত সংশোধন তালিকা নেই"],
      checks: {
        sourceTraceability: "verified",
        subjectAndPaper: "under-review",
        chapterTitleAndSequence: "under-review",
        editionAndReapproval: "under-review",
        questionProvenance: "authored-board-pattern",
      },
      contentChecks: {
        factsDefinitionsTerminology: "under-review",
        datesNamesChronology: ["history", "islamic_history", "civics", "bangla"].includes(subjectId) ? "under-review" : "not-applicable",
        formulasCalculationsEntries: ["accounting", "finance", "economics", "statistics", "ict"].includes(subjectId) ? "under-review" : "not-applicable",
        ictCodeAndOutput: subjectId === "ict" ? "under-review" : "not-applicable",
        mcqAnswersAndExplanations: "under-review",
        cqMarkDistribution: "under-review",
        modelAnswerDepth: "under-review",
        naturalBangla: subjectId === "english" ? "not-applicable" : "under-review",
        englishLanguageAndSourceText: subjectId === "english" ? "under-review" : "not-applicable",
        finalReviewerDeclaration: "under-review",
      },
    },
    lessonDetails: (chapter.lessonPlan ?? []).map((lesson, lessonIndex) => subjectId === "english" ? {
      title: lesson.title,
      concept: `${lesson.title}: read this part of “${chapter.title}” for its exact claim, supporting detail and language—not for a memorised summary. ${detail.anchor}`,
      steps: lesson.format === "Practice" ? [
        `Underline the command words and required output in the “${lesson.title}” task.`,
        "Write the audience, purpose and format at the top of the rough page.",
        `Draft the complete ${lesson.title} response with specific content from the task—not a reusable opening.`,
        "Edit once for missing content and again for grammar, spelling, punctuation and tone.",
      ] : lesson.format === "Worked example" ? [
        `Read the model for “${lesson.title}” and box the sentence that performs the task most directly.`,
        "Label the opening, development, evidence/example and closing in the model.",
        `Explain how two word or sentence choices fit the audience and purpose of ${chapter.title}.`,
        "Close the model, rebuild one paragraph, then compare content and organisation—not wording.",
      ] : [
        `Locate the exact person, event, claim or language feature named in “${lesson.title}”.`,
        `Write one text-based statement and attach the evidence that proves it: ${detail.anchor}`,
        "Separate what the text states from what you infer; justify the inference with a word, action or detail.",
        `Write a 3-sentence response: answer → evidence from “${chapter.title}” → explanation.`,
      ],
      application: `Use this chapter situation as your evidence base: ${detail.context} Your response must identify the decisive detail and explain what it reveals; a plot summary alone is not an answer.`,
      checkpoint: `Without looking back, state the main point of “${lesson.title}”, quote or paraphrase one supporting detail, and explain the connection in one sentence.`,
      workedSnapshot: `Claim: “${lesson.title}” matters because it develops the central concern of “${chapter.title}”. Evidence: select one precise action, contrast, image or statement from the lesson. Explanation: show how that evidence changes the reader’s understanding—do not stop after naming it.`,
      practicePrompt: `Write 120–150 words on “${lesson.title}”. Begin with a direct answer, use two precise details from “${chapter.title}”, explain each detail, and finish with the larger significance.`,
      answerCheck: `Check five things separately: direct answer, two relevant details, explanation after each detail, logical paragraph order, and accurate English. Delete any sentence that only repeats the title or question.`,
      recallQuestions: [
        `What exact claim, event or skill does “${lesson.title}” develop?`,
        `Which two details from “${chapter.title}” would you use as evidence, and what does each prove?`,
        "Which sentence in your answer explains the evidence instead of merely repeating it?",
      ],
      commonTrap: `Retelling “${chapter.title}” or using impressive but unsupported language. Every important claim needs a precise detail and an explanation of what that detail proves.`,
      stretchPrompt: `Compare “${lesson.title}” with another person, event or idea in this unit. State one meaningful similarity, one difference and the evidence behind both.`,
      foundation: { question:`What must a strong answer on “${lesson.title}” contain?`, answer:`A direct response to the task, precise evidence from “${chapter.title}”, and an explanation connecting that evidence to the claim. For a writing task, audience, purpose and format must also be correct.` },
      advanced: { focus:"Interpret, support and refine", explanation:`A high-scoring response distinguishes fact from inference, chooses the most decisive evidence and explains its effect or significance. Fluency cannot replace task completion or textual support.`, transfer:`Change the question’s focus or audience, then rewrite the opening and one evidence paragraph. Annotate why each change was necessary.` },
    } : {
      title: lesson.titleBn,
      concept: chapterWorkshop
        ? `আজকের বিষয় “${lesson.titleBn}”। এই পাঠে যে নির্দিষ্ট নিয়মটি কাজে লাগবে—${chapterWorkshop.formulaSheet[lessonIndex % chapterWorkshop.formulaSheet.length]}। “${chapter.titleBn}” অধ্যায়ের সমস্যায় নিয়মটি কখন ব্যবহার করবে, নিচের উদাহরণ ও কার্যপ্রবাহে সেটিই হাতে-কলমে দেখানো হয়েছে।`
        : `আজকের বিষয় “${lesson.titleBn}”। সহজ কথায় মূল ধারণাটি হলো—${bnDetail.core} পড়ার সময় সংজ্ঞাটি শুধু মুখস্থ কোরো না; কেন সত্য এবং প্রশ্নে কীভাবে চিনবে, সেটিও বোঝো।`,
      steps: lesson.format === "Practice" ? [
        "প্রশ্নটি কী চেয়েছে এবং কত নম্বর—প্রথমে সেটি দাগ দাও।",
        "নমুনা উত্তর না দেখে নিজের মতো করে উত্তরটি লেখো।",
        "যেখানে দরকার, সূত্র, হিসাব, যুক্তি বা পাঠের প্রমাণ স্পষ্ট করে দেখাও।",
        "শেষে একবার পড়ে অসম্পূর্ণ ও অপ্রাসঙ্গিক বাক্য কেটে ঠিক করো।",
      ] : lesson.format === "Worked example" ? [
        `“${lesson.titleBn}” উদাহরণে কোন তথ্যগুলো কাজে লাগবে, আগে সেগুলো আলাদা করো।`,
        `এবার নিয়মটি ব্যবহার করো: ${bnMethod.method}।`,
        "প্রতিটি ধাপের পাশে ছোট করে লিখো—এই ধাপটি কেন নিলে।",
        `শেষে মিলিয়ে নাও: ${bnMethod.check}`,
      ] : [
        chapterWorkshop ? `নির্ণায়ক নিয়ম: ${chapterWorkshop.formulaSheet[lessonIndex % chapterWorkshop.formulaSheet.length]}।` : `“${lesson.titleBn}” বুঝতে যে শব্দগুলো জানা দরকার, আগে সেগুলোর সহজ অর্থ পড়ো।`,
        chapterWorkshop ? `কাজের ধাপ: ${chapterWorkshop.visual.steps.join(" → ")}।` : `এই অধ্যায়ে কাজের পথটি অনুসরণ করো: ${subjectLessonRoute.lens}।`,
        chapterWorkshop ? `পাশাপাশি মিলাও—${chapterWorkshop.comparison.rows[lessonIndex % chapterWorkshop.comparison.rows.length].join(" · ")}।` : "একটি ঠিক উদাহরণ ও একটি প্রচলিত ভুল পাশাপাশি দেখে পার্থক্যটি ধরো।",
        chapterWorkshop ? `শেষ যাচাই: ${chapterWorkshop.visual.caption}` : "শেষে নিজের ভাষায় তিনটি ছোট বাক্যে পাঠটি বুঝিয়ে বলো।",
      ],
      application: chapterWorkshop ? `এই উদ্দীপকটি ধরে কাজ করো: ${chapterWorkshop.cqSolution.stimulus} “${lesson.titleBn}” পাঠের নিয়মটি কোন তথ্যের ওপর প্রয়োগ হবে, তা আগে দাগ দিয়ে তারপর ধাপে সমাধান করো।` : `বাস্তবে কোথায় লাগবে: ${bnDetail.example} এই পরিস্থিতিতে “${lesson.titleBn}” থেকে শেখা নিয়মটি কোথায় ব্যবহার করবে, ধাপে ধাপে দেখাও।`,
      checkpoint: `বই বন্ধ করে বলো—“${lesson.titleBn}” কী, কোথায় কাজে লাগে এবং এখানে কোন ভুলটি বেশি হয়। তিনটির উত্তর দিতে পারলে এগিয়ে যাও।`,
      workedSnapshot: chapterWorkshop ? `${chapterWorkshop.comparison.headers.join(" | ")} — ${chapterWorkshop.comparison.rows[lessonIndex % chapterWorkshop.comparison.rows.length].join(" | ")}। খাতায় ${chapterWorkshop.visual.steps.join(" → ")} ধারাটি দৃশ্যমান রাখো।` : `${lessonDepthNotes[(lessonIndex + 1) % lessonDepthNotes.length]} “${lesson.titleBn}” অংশে কোন তথ্য, নিয়ম ও ফল একসঙ্গে লিখবে—একটি ছোট উদাহরণে পাশে পাশে দেখাও।`,
      practicePrompt: chapterWorkshop ? `${chapterWorkshop.cqSolution.stimulus} “${lesson.titleBn}” পাঠের নিয়ম ধরে নতুন করে সমাধান করো। ${lessonDepthNotes[lessonIndex % lessonDepthNotes.length]}` : `${lessonDepthNotes[lessonIndex % lessonDepthNotes.length]} এবার “${lesson.titleBn}” নিয়ে নিজের একটি নতুন উদাহরণ তৈরি করে সম্পূর্ণ উত্তর দাও।`,
      answerCheck: chapterWorkshop ? `${lessonExaminerNotes[lessonIndex % lessonExaminerNotes.length]} এরপর ${chapterWorkshop.visual.caption} অনুযায়ী working এবং model CQ-র ক/খ/গ/ঘ গভীরতা মিলাও।` : `${lessonExaminerNotes[lessonIndex % lessonExaminerNotes.length]} শেষে “${lesson.titleBn}” উত্তরের দাবি, প্রমাণ ও উপসংহার আলাদা করে মিলিয়ে নাও।`,
      recallQuestions: [
        `“${lesson.titleBn}” পাঠের মূল নিয়মটি না দেখে কীভাবে ব্যাখ্যা করবে?`,
        `“${chapter.titleBn}” অধ্যায়ের কোন ধারণার সঙ্গে এই পাঠের সরাসরি সম্পর্ক আছে?`,
        "একটি নতুন উদ্দীপকে কোন তথ্য দেখে বুঝবে যে এই পদ্ধতি প্রয়োগ করতে হবে?",
      ],
      commonTrap: chapterWorkshop ? `শুধু final answer লিখে থেমো না। ${chapterWorkshop.visual.steps.join(" → ")} ধারার যে ধাপটি বাদ যাবে, সেই ধাপের নম্বরও হারাবে। ${lessonExaminerNotes[(lessonIndex + 2) % lessonExaminerNotes.length]}` : lessonExaminerNotes[(lessonIndex + 2) % lessonExaminerNotes.length],
      stretchPrompt: chapterWorkshop ? `${lessonTransferNotes[lessonIndex % lessonTransferNotes.length]} তারপর উদ্দীপকের একটি তথ্য বদলে ${chapterWorkshop.comparison.headers[0]} ও ${chapterWorkshop.comparison.headers[2]}-এর নতুন অবস্থা পাশাপাশি দেখাও।` : `${lessonTransferNotes[lessonIndex % lessonTransferNotes.length]} কাজটি “${lesson.titleBn}” পাঠের নিয়মে সম্পন্ন করে আগের ফলের সঙ্গে পার্থক্য লেখো।`,
      foundation: chapterWorkshop ? {
        question:`“${lesson.titleBn}” শুরু করার আগে কোন নিয়ম ও তথ্যটি ধরবে?`,
        answer:`প্রথমে উদ্দীপকের নির্ণায়ক তথ্য আলাদা করো। এরপর এই নিয়মটি লেখো—${chapterWorkshop.formulaSheet[lessonIndex % chapterWorkshop.formulaSheet.length]}। নিয়মের সঙ্গে তথ্য না মিলিয়ে সরাসরি final answer-এ যেও না।`,
      } : {
        question:`“${lesson.titleBn}” সহজ ভাষায় কীভাবে বুঝবে?`,
        answer:`${lessonDepthNotes[lessonIndex % lessonDepthNotes.length]} এই কাজের ভিত্তি হলো—${bnDetail.core} “${lesson.titleBn}” পড়ার সময় ${bnDetail.terms.slice(0,3).join(" · ")} শব্দগুলোর ব্যবহার নিজের উদাহরণে দেখো।`,
      },
      advanced: chapterWorkshop ? {
        focus:`${chapterWorkshop.comparison.headers[0]} থেকে ${chapterWorkshop.comparison.headers[2]}`,
        explanation:`Advanced উত্তরে শুধু নিয়ম প্রয়োগ নয়; ${chapterWorkshop.comparison.rows[lessonIndex % chapterWorkshop.comparison.rows.length].join(" → ")} সম্পর্কটি দেখিয়ে ফল কেন বদলায় তা ব্যাখ্যা করবে। ${chapterWorkshop.visual.caption}`,
        transfer:`${chapterWorkshop.cqSolution.stimulus} এখান থেকে একটি তথ্য বদলে নতুন ফল বের করো; আগের ও নতুন ফল একই ছক, code, graph, timeline বা প্রমাণে পাশাপাশি দেখাও।`,
      } : {
        focus:"সম্পর্ক, প্রমাণ ও পরিবর্তিত শর্ত",
        explanation:`${lessonTransferNotes[lessonIndex % lessonTransferNotes.length]} উচ্চতর উত্তরে “${lesson.titleBn}”-এর দাবি, প্রমাণ, সম্পর্ক ও শর্ত আলাদা করে দৃশ্যমান রাখবে।`,
        transfer:`${lessonTransferNotes[(lessonIndex + 2) % lessonTransferNotes.length]} নতুন উদ্দীপকে “${lesson.titleBn}” প্রয়োগ করে একটি বিকল্প ব্যাখ্যা ও সীমাবদ্ধতাসহ সিদ্ধান্ত দাও।`,
      },
    }),
    guide: {
      concept: `${chapter.title} develops this central understanding: ${detail.anchor}`,
      terminology: detail.terms.split(",").map((term) => term.trim()),
      method: [
        "Read the command word and identify the exact output required.",
        `Recall and state the governing rule: ${detail.anchor}`,
        `Apply the chapter method: ${blueprint.method}.`,
        `Verify the result: ${blueprint.evidence}`,
      ],
      structures: blueprint.formulas,
      application: `${detail.context} ${blueprint.bangladesh}`,
      selfCheck: [
        `Can I explain ${chapter.title} without copying a definition?`,
        "Can I identify the decisive information in an unfamiliar stimulus?",
        "Can I show every required calculation, label, source or reasoning step?",
        "Can I justify the conclusion in one precise sentence?",
      ],
      examChecklist: [
        "Match answer depth to marks and command words.",
        "Use chapter terminology accurately.",
        "Show working, evidence or labelled structure.",
        "Check the conclusion against the question.",
      ],
    },
    notes: [
      `Important terminology: ${detail.terms}.`,
      `Core rule: ${detail.anchor}`,
      `Focused application: ${detail.context}`,
      `Recommended method: ${blueprint.method}.`,
      `Essential summary: define the idea, demonstrate it with relevant working or evidence, apply it to the stimulus and finish with a justified conclusion.`,
      `Bangladesh connection: ${blueprint.bangladesh}`,
      `Common mistakes: memorising without application, ignoring the command word, omitting working or evidence, and giving a conclusion that is not supported.`,
      `Exam tip: allocate marks to answer depth, use precise terminology and check the response against every part of the question.`,
      ...(blueprint.formulas.map((formula) => `Formula or answer structure: ${formula}.`)),
      `Concept connection: relate ${detail.terms} instead of learning each term as an isolated definition.`,
      `Application drill: ${detail.context}`,
      `Evidence rule: ${blueprint.evidence}`,
      `Answer construction: begin with the exact rule, add relevant working or evidence, then explain what the result means.`,
      `Error correction: locate whether the weakness is in concept, method, evidence, calculation or conclusion before rewriting.`,
      `Board practice: complete one foundation, one standard and one challenge task without notes, then compare with the marking guide.`,
      `College-test practice: answer within a fixed time and reserve the final ten percent for checking labels, units, evidence and language.`,
      `Mastery check: explain the chapter aloud, solve an unfamiliar case and justify why an alternative answer is weaker.`,
      `Memory map: organise the chapter as definition → relationship → method → application → evidence → conclusion.`,
      `Independent task: complete one unfamiliar case without notes, then identify the exact step where your reasoning became uncertain.`,
      `Revision schedule: revisit the chapter after one day, one week and three weeks using retrieval rather than rereading only.`,
      `Final readiness check: explain the chapter, complete one timed problem and correct the answer using the marking guide.`,
      `Concept diagnostic: before rereading, write everything you remember about ${chapter.title}; mark each uncertain relationship for targeted revision.`,
      `Vocabulary retrieval: define every key term, add one correct example and distinguish it from the most easily confused term.`,
      `Diagram or structure note: convert the chapter into one labelled table, flow, timeline, account format or answer map appropriate to the subject.`,
      `Worked-method note: record the complete route from given information to rule, working, interpretation and final check.`,
      `Misconception note: write one tempting but incorrect claim, explain why it fails and replace it with the accurate rule.`,
      `Board-answer note: map a 10-mark response into knowledge, comprehension, application and higher-order evidence before writing it fully.`,
      `College-test note: combine two chapter ideas in one unfamiliar case and state what additional evidence would strengthen the conclusion.`,
      `Teach-back note: explain ${chapter.title} to a classmate in five minutes, then answer two follow-up questions without using the book.`,
      ...buildSubjectDepthNotes(subjectId, chapter, true),
      ...buildMasteryDepthNotes(subjectId, chapter, true),
      ...buildExaminerRevisionNotes(subjectId, chapter, true),
    ],
    worked: {
      problem: detail.context,
      steps: [
        "Identify exactly what the question asks and underline the decisive information.",
        `Recall the relevant rule or relationship: ${blueprint.concepts}.`,
        `Apply the method step by step: ${blueprint.method}.`,
        `Check the result: ${blueprint.evidence}`,
      ],
      answer: `A complete answer states the rule, applies it to the supplied facts, shows required working or evidence and ends with a justified conclusion.`,
    },
    extraWorked: additionalWorked(subjectId, chapter, detail),
    examToolkit: buildExamToolkit(subjectId, chapter, { terms: detail.terms.split(",").map((term) => term.trim()).filter(Boolean), core: detail.anchor }),
    chapterWorkshop,
    materialPack,
    modelExamples: buildModelExamples(subjectId, chapter, bnDetail),
    graphPractice: buildGraphPractice(subjectId, chapter),
    masteryPlan: buildSevenDayMasteryPlan(subjectId, chapter, detail, bnDetail),
    examinerRubric: buildExaminerRubric(subjectId, chapter, detail, bnDetail),
    cq: {
      stimulus: `A Bangladesh-focused case presents facts, evidence and a decision connected to ${chapter.title}.`,
      framework: [
        "Knowledge (1): give the exact definition or identify the requested term.",
        "Comprehension (2): explain the idea and show the relevant relationship.",
        "Application (3): use specific facts from the stimulus with the correct rule or method.",
        "Higher order (4): analyse alternatives, evaluate evidence and reach a justified conclusion.",
      ],
    },
    bank: {
      mcq: chapter.examPlan?.mcq ?? 40,
      cq: chapter.examPlan?.cq ?? 16,
      written: chapter.examPlan?.written ?? 10,
      focus: `${chapter.title}: concepts, application, board-style reasoning and exam technique`,
      questions: expandedQuestionSet(subjectId, chapter, detail, generatedQuestions(subjectId, chapter, blueprint, detail), chapterWorkshop, materialPack),
    },
  };
  if (subjectId === "english") return resource;

  const banglaWritingLessons = subjectId === "bangla" && chapter.paper === "2nd Paper"
    ? buildBanglaWritingLessons(chapter, bnDetail, resource.modelExamples ?? [])
    : undefined;
  const firstWritingModel = banglaWritingLessons ? resource.modelExamples?.[0] : undefined;
  const secondWritingModel = banglaWritingLessons ? resource.modelExamples?.[1] : undefined;
  const reportWriting = banglaWritingLessons && (/Report Writing/i.test(chapter.title) || /প্রতিবেদন/.test(chapter.titleBn));
  const writingStructures = reportWriting ? [
    "প্রাতিষ্ঠানিক প্রতিবেদন: বরাবর ও প্রতিষ্ঠানের ঠিকানা → বিষয় → সম্বোধন/নির্দেশনার সূত্র → আলাদা শিরোনাম → সময়–স্থান–ঘটনা ও ফল → সুপারিশ → প্রতিবেদকের নাম, শ্রেণি ও রোল।",
    "সংবাদ প্রতিবেদন: তথ্যবহুল headline → নিজস্ব প্রতিবেদক, স্থান ও তারিখ → প্রথম অনুচ্ছেদে মূল ঘটনা → যাচাইযোগ্য তথ্য/সংশ্লিষ্ট বক্তব্য → তাৎপর্য বা করণীয়।",
    "মনে রাখো: সংবাদ প্রতিবেদনে ‘বরাবর/জনাব’ নয়; প্রাতিষ্ঠানিক প্রতিবেদনে byline-ভিত্তিক সংবাদভাষা নয়।",
  ] : [
    ...(firstWritingModel ? [`${firstWritingModel.kind}: ${firstWritingModel.answer.map((_,index)=>`অংশ ${index+1}`).join(" → ")}`, firstWritingModel.examinerNote] : []),
    ...(secondWritingModel ? [`${secondWritingModel.kind}: ${secondWritingModel.answer.map((_,index)=>`অংশ ${index+1}`).join(" → ")}`, secondWritingModel.examinerNote] : []),
  ];
  const banglaWritingGuide: ExamResource["guide"] | undefined = banglaWritingLessons ? {
    concept: bnDetail.core,
    terminology: bnDetail.terms,
    method: [
      "প্রশ্নে কাজের ধরন, প্রাপক/পাঠক, উদ্দেশ্য এবং প্রয়োজনীয় তথ্য দাগ দাও।",
      firstWritingModel?.examinerNote ?? "নির্ধারিত বিন্যাস আগে দাঁড় করিয়ে তারপর তথ্য বসাও।",
      "সম্পূর্ণ খসড়া লেখার পর অপ্রাসঙ্গিক ও পুনরুক্ত বাক্য বাদ দাও।",
      "বিন্যাস, তথ্য, ভাষা, বানান ও বিরামচিহ্ন—পাঁচ স্তরে শেষবার সম্পাদনা করো।",
    ],
    structures: writingStructures,
    application: firstWritingModel?.prompt ?? bnDetail.example,
    selfCheck: [
      "কাজের ধরন ও নির্ধারিত বিন্যাস ঠিক আছে?",
      "প্রশ্নে চাওয়া সব তথ্য উত্তরটিতে এসেছে?",
      "ভাষা কি স্বাভাবিক, নিরপেক্ষ এবং পাঠক/প্রাপকের উপযোগী?",
      "বানান, বিরামচিহ্ন ও অনুচ্ছেদ শেষবার মিলিয়েছি?",
    ],
    examChecklist: [
      "কাজের ধরন ও প্রাপক/পাঠক ঠিক করো।",
      "শিরোনাম, সূচনা, মূল তথ্য ও সমাপ্তি সম্পূর্ণ রাখো।",
      "মুখস্থ নমুনা নয়—প্রশ্নের তথ্য অনুযায়ী লেখা বদলাও।",
      "শেষ ৩–৫ মিনিট শুধু সম্পাদনার জন্য রাখো।",
    ],
  } : undefined;
  return {
    ...resource,
    lessonDetails: banglaWritingLessons ?? (curatedLessons ? [...curatedLessons, ...(resource.lessonDetails ?? []).slice(curatedLessons.length)] : resource.lessonDetails)?.map((lesson,index)=>({
      ...lesson,
      foundation: ("foundation" in lesson ? lesson.foundation : undefined) ?? { question:`“${lesson.title}” বুঝতে প্রথমে কী ধরবে?`, answer:`প্রথমে অধ্যায়ের কেন্দ্রীয় কথাটি ধরো—${bnDetail.core}। তারপর ${bnDetail.terms.slice(0,3).join(" · ")} শব্দগুলোর অর্থ পাঠের নির্দিষ্ট ঘটনা, নিয়ম বা প্রমাণের সঙ্গে মিলিয়ে দেখো।` },
      advanced: ("advanced" in lesson ? lesson.advanced : undefined) ?? { focus:"প্রমাণ থেকে বিশ্লেষণ", explanation:`Advanced উত্তরে ${subjectLessonRoute.lens} ধারাটি দেখাবে। সিদ্ধান্তের ভিত্তি হিসেবে ${subjectLessonRoute.evidence} ব্যবহার করবে—শুধু মুখস্থ বক্তব্য নয়।`, transfer:`“${lesson.title}” থেকে একটি নতুন উদ্দীপক তৈরি করো; একটি মিল, একটি অমিল, একটি বিকল্প ব্যাখ্যা এবং প্রমাণসমর্থিত সিদ্ধান্ত লেখো।` },
    })),
    guide: banglaWritingGuide ?? {
      concept: bnDetail.core,
      terminology: bnDetail.terms,
      method: [
        "প্রশ্নের নির্দেশক শব্দ ও চাওয়া বিষয়টি প্রথমে চিহ্নিত করো।",
        bnMethod.method,
        `নির্দেশিত উদাহরণ: ${bnDetail.example}`,
        bnMethod.check,
      ],
      structures: [
        "ক—জ্ঞান: সংজ্ঞা বা সঠিক পরিচয় (১ নম্বর)",
        "খ—অনুধাবন: কারণ ও সম্পর্ক ব্যাখ্যা (২ নম্বর)",
        "গ—প্রয়োগ: উদ্দীপকের তথ্য ধরে সমাধান (৩ নম্বর)",
        "ঘ—উচ্চতর দক্ষতা: বিশ্লেষণ, মূল্যায়ন ও সিদ্ধান্ত (৪ নম্বর)",
      ],
      application: bnDetail.example,
      selfCheck: [
        `আমি কি “${chapter.titleBn}” নিজের ভাষায় ব্যাখ্যা করতে পারি?`,
        "অপরিচিত উদ্দীপক থেকে প্রয়োজনীয় তথ্য আলাদা করতে পারি?",
        "প্রয়োজনীয় হিসাব, সূত্র, যুক্তি বা প্রমাণ দেখাতে পারি?",
        "প্রশ্নের মান অনুযায়ী সংক্ষিপ্ত ও সম্পূর্ণ উপসংহার লিখতে পারি?",
      ],
      examChecklist: [
        "নম্বর ও নির্দেশক শব্দ অনুযায়ী উত্তরের দৈর্ঘ্য ঠিক রাখো।",
        "অধ্যায়ের পরিভাষা নির্ভুলভাবে ব্যবহার করো।",
        "প্রয়োজনীয় হিসাব, ছক, প্রমাণ বা ধাপ বাদ দিও না।",
        "শেষে প্রশ্নের প্রতিটি অংশের উত্তর হয়েছে কি না যাচাই করো।",
      ],
    },
    notes: banglaWritingLessons ? banglaWritingLessons.flatMap((lesson) => [
      `${lesson.title}: ${lesson.concept}`,
      ...lesson.steps,
      `পূর্ণ উদাহরণ: ${lesson.workedSnapshot}`,
      `নিজে লেখো: ${lesson.practicePrompt}`,
      `শেষ যাচাই: ${lesson.answerCheck}`,
      `সাধারণ ভুল: ${lesson.commonTrap}`,
    ]) : curatedLessons ? curatedLessons.flatMap((lesson) => [
      `${lesson.title}: ${lesson.concept}`,
      ...lesson.steps,
      `প্রয়োগ: ${lesson.application}`,
      `সাধারণ ভুল: ${lesson.commonTrap}`,
      `নিজে চেষ্টা করো: ${lesson.practicePrompt}`,
      `উত্তর যাচাই: ${lesson.answerCheck}`,
      `পাঠশেষ যাচাই: ${lesson.checkpoint}`,
      ...lesson.recallQuestions.map((question) => `না দেখে বলো: ${question}`),
      `আরও ভাবো: ${lesson.stretchPrompt}`,
    ]) : [
      `প্রথমে এই কথাটি ধরো—${bnDetail.core}`,
      `যে শব্দগুলো না জানলে আটকে যাবে: ${bnDetail.terms.join(" · ")}। প্রতিটির পাশে নিজের ভাষায় এক লাইনের অর্থ লেখো।`,
      `পরিচিত একটি উদাহরণ: ${bnDetail.example}`,
      `খাতায় এভাবে এগোও: ${bnMethod.method}।`,
      `উত্তর শেষে ৩০ সেকেন্ডে মিলিয়ে দেখো: ${bnMethod.check}`,
      "যে ভুলগুলো বেশি হয়: প্রশ্নের চাওয়া না ধরা, অকারণে বড় উত্তর লেখা, প্রয়োজনীয় ধাপ বাদ দেওয়া এবং কারণ না লিখে সিদ্ধান্ত দেওয়া।",
      "ক/খ/গ/ঘ একভাবে লিখবে না—ক-তে সরাসরি উত্তর, খ-তে ব্যাখ্যা, গ-তে উদ্দীপকের প্রয়োগ, ঘ-তে বিচার ও সিদ্ধান্ত দেখাও।",
      "চার ধাপে অধ্যায়টি মনে রাখো: মূল কথা বোঝো → নিয়ম ধরো → উদাহরণে ব্যবহার করো → ফল মিলিয়ে নাও।",
      `${bnDetail.terms.slice(0, 3).join("—")} আলাদা শব্দ নয়। তারা কীভাবে একে অন্যের সঙ্গে যুক্ত, একটি ছোট উদাহরণে বোঝাও।`,
      `এবার নিজে চেষ্টা করো: ${bnDetail.example}`,
      `সমাধানের পথ: ${bnMethod.method}। ধাপ মুখস্থ না করে প্রতিটি ধাপ কেন নিচ্ছ, সেটি বোঝো।`,
      `ফল ঠিক হয়েছে কি না দেখবে এভাবে: ${bnMethod.check}`,
      "ভুল হলে পুরো অধ্যায় আবার পড়বে না। আগে দেখো ভুলটি সংজ্ঞায়, নিয়মে, প্রয়োগে, হিসাবে নাকি শেষ সিদ্ধান্তে হয়েছে।",
      "অনুশীলনে তিন ধরনের প্রশ্ন রাখো—একটি সহজ, একটি বোর্ড-মানের এবং একটি নতুন পরিস্থিতির। শেষে উত্তর মিলিয়ে ভুলের কারণ লিখে রাখো।",
      "কলেজ পরীক্ষার মতো সময় ধরে লেখো। শেষ কয়েক মিনিট শিরোনাম, একক, ছক, বানান ও প্রশ্নের সব অংশ মিলিয়ে দেখার জন্য রাখো।",
      "সত্যি শিখেছ কি না বুঝবে যখন বই ছাড়া বিষয়টি বোঝাতে, নতুন ঘটনায় ব্যবহার করতে এবং ভুল উত্তরটি কেন ভুল বলতে পারবে।",
      "এক পাতায় অধ্যায়টি সাজাও: সংজ্ঞা → সম্পর্ক → নিয়ম → উদাহরণ → যাচাই। পরীক্ষার আগে এই পাতাটিই দ্রুত কাজে দেবে।",
      "নোট বন্ধ করে নতুন একটি সমস্যা করো। যে ধাপে থেমে গেলে, শুধু সেই অংশটি খুলে দেখে আবার চেষ্টা করো।",
      "একবার পড়ে ছেড়ে দিও না। পরের দিন, এক সপ্তাহ পরে এবং তিন সপ্তাহ পরে বই না দেখে যতটা পারো লিখে দেখো।",
      "অধ্যায় শেষ বলার আগে তিনটি কাজ করো: কাউকে বুঝিয়ে বলো, সময় ধরে একটি প্রশ্ন সমাধান করো, নিজের ভুল নিজে ঠিক করো।",
      `পড়া শুরুর আগে “${chapter.titleBn}” সম্পর্কে যা মনে আছে দুই মিনিটে লিখে ফেলো। এতে কোন জায়গা বেশি মন দিয়ে পড়তে হবে, তা বোঝা যাবে।`,
      "প্রতিটি মূল শব্দের সঙ্গে একটি উদাহরণ ও কাছাকাছি আরেকটি শব্দের পার্থক্য লিখে রাখো। সংজ্ঞা মনে রাখা সহজ হবে।",
      "বিষয় অনুযায়ী একটি ছক, প্রবাহচিত্র, সময়রেখা, হিসাবের ফরম্যাট বা উত্তর-মানচিত্র বানাও। চোখে দেখা কাঠামো দীর্ঘদিন মনে থাকে।",
      `“${chapter.titleBn}” সমাধানের ধারাটি রাখো: দেওয়া তথ্য → দরকারি নিয়ম → কাজের ধাপ → ফলের অর্থ → শেষ যাচাই।`,
      "একটি প্রচলিত ভুল কথা লিখে তার নিচে সঠিক কথাটি লেখো। কেন প্রথমটি ভুল, এক বাক্যে বুঝিয়ে দাও।",
      "১০ নম্বরের CQ লেখার আগে চার অংশে কী কী লিখবে, পাশে ১+২+৩+৪ নম্বর বসিয়ে ছোট পরিকল্পনা করে নাও।",
      "অপরিচিত ঘটনায় অধ্যায়ের দুটি ধারণা একসঙ্গে লাগতে পারে। কোন তথ্য কোন ধারণাকে সমর্থন করছে, আলাদা করে চিহ্নিত করো।",
      `পাঁচ মিনিটে একজন বন্ধুকে “${chapter.titleBn}” বুঝিয়ে বলো। সে যে দুটি প্রশ্ন করবে, বই না দেখে উত্তর দেওয়ার চেষ্টা করো।`,
      ...buildSubjectDepthNotes(subjectId, chapter),
      ...buildMasteryDepthNotes(subjectId, chapter),
      ...buildExaminerRevisionNotes(subjectId, chapter),
    ],
    worked: banglaWritingLessons && firstWritingModel ? {
      problem: firstWritingModel.prompt,
      steps: firstWritingModel.answer,
      answer: firstWritingModel.examinerNote,
    } : {
      problem: bnDetail.example,
      steps: [
        "প্রশ্নের নির্দেশক শব্দ এবং উদ্দীপকের নির্ণায়ক তথ্য দাগ দাও।",
        `প্রাসঙ্গিক ধারণা: ${bnDetail.core}`,
        `অধ্যায়ভিত্তিক পদ্ধতি অনুসরণ করো: ${bnMethod.method}।`,
        bnMethod.check,
      ],
      answer: "পূর্ণাঙ্গ উত্তরে সঠিক ধারণা, উদ্দীপকভিত্তিক প্রয়োগ, প্রয়োজনীয় হিসাব বা প্রমাণ এবং প্রশ্নের সঙ্গে সামঞ্জস্যপূর্ণ উপসংহার থাকবে।",
    },
    extraWorked: buildBanglaWorkedSet(subjectId, chapter, bnDetail),
    examToolkit,
    chapterWorkshop: buildChapterWorkshop(subjectId, chapter, bnDetail),
    cq: {
      stimulus: `বাংলাদেশের বাস্তব প্রেক্ষাপটে “${chapter.titleBn}” বিষয়ক একটি ঘটনা, তথ্য বা সমস্যা উপস্থাপন করা হলো।`,
      framework: [
        "ক. প্রাসঙ্গিক ধারণা বা পরিভাষাটি নির্ভুলভাবে লেখো।",
        "খ. ধারণাটির অর্থ বা সম্পর্ক ব্যাখ্যা করো।",
        "গ. উদ্দীপকের তথ্য ধরে নীতি বা পদ্ধতি প্রয়োগ করো।",
        "ঘ. তথ্য বিশ্লেষণ করে যুক্তিসংগত মূল্যায়ন ও সিদ্ধান্ত দাও।",
      ],
    },
    bank: {
      ...resource.bank,
      focus: `${chapter.titleBn}: ধারণা, প্রয়োগ, বোর্ড-প্যাটার্ন বিশ্লেষণ ও উত্তর লেখার কৌশল`,
    },
  };
}

const groupSubjectIds: Record<"commerce" | "humanities", string[]> = {
  commerce: ["bangla", "english", "ict", "accounting", "finance", "business"],
  humanities: ["bangla", "english", "ict", "economics", "civics", "history", "logic", "islamic_history", "statistics", "geography"],
};

export const completeExamLibraryByGroup: Record<"commerce" | "humanities", ExamResource[]> = {
  commerce: [],
  humanities: [],
};

function detailedBanglaCqAnswer(resource: ExamResource, terms: string[], rule: string, application: string) {
  const termA = terms[0] ?? resource.unitBn;
  const termB = terms[1] ?? termA;
  const subjectMethod: Record<string, { method: string; evidence: string; limit: string }> = {
    Accounting: { method: "প্রথমে সংশ্লিষ্ট হিসাবগুলো শনাক্ত ও সম্পদ–দায়–মালিকানা স্বত্ব–আয়–ব্যয় হিসেবে শ্রেণিবিন্যাস করতে হবে। এরপর প্রযোজ্য ডেবিট–ক্রেডিট নীতি মেনে দাখিলা/কার্যপ্রণালি দেখিয়ে দুই পাশের অঙ্ক, জের বা হিসাব সমীকরণ মিলিয়ে নিতে হবে।", evidence: "উৎস দলিল, হিসাবের শ্রেণি, ডেবিট–ক্রেডিটের সমতা এবং চূড়ান্ত জের", limit: "রেওয়ামিল মিলে গেলেও নীতিগত ভুল বা সম্পূর্ণ বাদ পড়া লেনদেন থাকতে পারে" },
    Finance: { method: "প্রদত্ত নগদপ্রবাহ, সময়, হার, ব্যয় ও ঝুঁকি আলাদা করে প্রয়োজনীয় সূত্র বা সিদ্ধান্তের মানদণ্ড নির্বাচন করতে হবে। হার ও সময়ের একক ঠিক রেখে মান বসিয়ে ফল নির্ণয় এবং ফলটির আর্থিক অর্থ ব্যাখ্যা করতে হবে।", evidence: "সূত্রে সঠিক মান প্রতিস্থাপন, নগদপ্রবাহ সামর্থ্য, ব্যয়–আয়, তারল্য ও ঝুঁকির তুলনা", limit: "সুদের হার, সময় বা ভবিষ্যৎ নগদপ্রবাহের অনুমান বদলালে সিদ্ধান্তও বদলাতে পারে" },
    "Business Organisation & Management": { method: "উদ্দীপকের লক্ষণ থেকে মূল ব্যবস্থাপনা সমস্যা আলাদা করে প্রাসঙ্গিক নীতি শনাক্ত করতে হবে। দায়িত্বপ্রাপ্ত ব্যক্তি, বাস্তবায়ন ধাপ এবং সময়–ব্যয়–মান–কর্মী প্রভাবের পরিমাপযোগ্য সূচকসহ সমাধান দিতে হবে।", evidence: "উদ্দীপকের নির্দিষ্ট আচরণ, নীতির সঙ্গে তার যোগসূত্র এবং প্রস্তাবিত পদক্ষেপের পরিমাপযোগ্য ফল", limit: "প্রতিষ্ঠানের আকার, সম্পদ ও কর্মীদের প্রস্তুতি বিবেচনা না করলে আদর্শ সমাধান বাস্তবে কার্যকর নাও হতে পারে" },
    Economics: { method: "চলক, নির্ধারক ও অন্যান্য অবস্থা অপরিবর্তিত থাকার শর্ত শনাক্ত করে প্রয়োজনমতো ছক, সূত্র বা গ্রাফ ব্যবহার করতে হবে। রেখা বরাবর চলাচল ও রেখার স্থানান্তর আলাদা করে নতুন ভারসাম্য বা ফলের অর্থনৈতিক ব্যাখ্যা দিতে হবে।", evidence: "সঠিক অক্ষ ও রেখা, প্রদত্ত তথ্য, শতকরা পরিবর্তন/সূত্র, প্রাথমিক ও নতুন ফলের তুলনা", limit: "বাস্তবে অন্যান্য অবস্থা সবসময় অপরিবর্তিত থাকে না এবং স্বল্পমেয়াদি যোগান বা তথ্যের সীমা ফলকে প্রভাবিত করতে পারে" },
    "Civics & Good Governance": { method: "সংশ্লিষ্ট অধিকার, দায়িত্ব, প্রতিষ্ঠান ও সাংবিধানিক/সুশাসনের নীতি চিহ্নিত করে আইনসম্মত প্রতিকার বা জবাবদিহির পথ দেখাতে হবে। ব্যক্তিগত মত নয়—নীতি, প্রক্রিয়া ও নাগরিক প্রভাবের ভারসাম্যে সিদ্ধান্ত দিতে হবে।", evidence: "প্রাসঙ্গিক নীতি, প্রতিষ্ঠানের এখতিয়ার, স্বচ্ছতা–জবাবদিহির মানদণ্ড এবং নাগরিকের ওপর দৃশ্যমান প্রভাব", limit: "অধিকার প্রয়োগেও আইন, জনস্বার্থ, প্রক্রিয়াগত ন্যায় ও অন্যের অধিকারের যুক্তিসংগত সীমা থাকে" },
    History: { method: "ঘটনাকে পটভূমি, কারণ, মোড় পরিবর্তনকারী ঘটনা, তাৎক্ষণিক ফল ও দীর্ঘমেয়াদি গুরুত্বের সময়ক্রমে সাজাতে হবে। উৎসের রচয়িতা, সময়, উদ্দেশ্য ও সম্ভাব্য পক্ষপাত বিবেচনা করে একাধিক প্রমাণ মিলিয়ে সিদ্ধান্ত দিতে হবে।", evidence: "তারিখ–ঘটনার ক্রম, কারণগত সংযোগ, সমকালীন উৎস এবং পরবর্তী পরিবর্তনের প্রমাণ", limit: "একটি উৎস আংশিক বা পক্ষপাতপূর্ণ হতে পারে; বর্তমান দৃষ্টিভঙ্গি অতীতের মানুষের পরিস্থিতির ওপর চাপিয়ে দেওয়া যাবে না" },
  };
  const support = subjectMethod[resource.subject] ?? { method: "উদ্দীপকের নির্ণায়ক তথ্য আলাদা করে অধ্যায়ের নিয়ম ধাপে ধাপে প্রয়োগ এবং ফল যাচাই করতে হবে।", evidence: "প্রাসঙ্গিক তথ্য, নির্ভুল নিয়ম, দৃশ্যমান কার্যপ্রণালি ও সামঞ্জস্যপূর্ণ ফল", limit: "তথ্য অসম্পূর্ণ হলে সিদ্ধান্ত শর্তসাপেক্ষ হবে" };
  return `ক. ১ নম্বর: ${termA} হলো “${resource.unitBn}” অধ্যায়ের কেন্দ্রীয় ধারণা। এটি আলোচ্য ঘটনা বা সমস্যার প্রকৃতি নির্দিষ্ট করে এবং প্রযোজ্য নিয়ম নির্বাচনের ভিত্তি দেয়।\n\nখ. ২ নম্বর: ${rule} এই মূলনীতিতে ${termA} বিষয়টি শনাক্ত করে, আর ${termB} তার কার্যকারণ, প্রয়োগ বা ফল স্পষ্ট করে। ফলে দুটি ধারণা বিচ্ছিন্ন নয়: প্রথমটি সমস্যার পরিচয় দেয় এবং দ্বিতীয়টি সেই সমস্যা কীভাবে ফল তৈরি করে তা বোঝায়। ${application}—এটি সম্পর্কটির সরাসরি উদাহরণ।\n\nগ. ৩ নম্বর: উদ্দীপকের প্রাসঙ্গিক পরিস্থিতি হলো—${application}। এখানে “${resource.unitBn}”-এর নিয়ম প্রয়োগে ${support.method} এই ধারায় তথ্য থেকে ফল পাওয়া যায়। ফলটির যথার্থতা ${support.evidence} দিয়ে মেলে; তাই উদ্দীপকের তথ্য, নিয়ম এবং প্রাপ্ত ফলের মধ্যে প্রত্যক্ষ যোগ প্রতিষ্ঠিত হয়।\n\nঘ. ৪ নম্বর: সিদ্ধান্তটির পক্ষে প্রধান প্রমাণ ${support.evidence}। এই প্রমাণ অধ্যায়ের নিয়ম ও উদ্দীপকের ফলকে একই দিকে সমর্থন করায় সিদ্ধান্তটি গ্রহণযোগ্য। বিপরীত ব্যাখ্যায় ফল বদলাতে পারে, বিশেষত ${support.limit}। তবু প্রদত্ত তথ্যের সীমায় “${resource.unitBn}”-এর নীতি, কার্যপ্রণালি ও দৃশ্যমান প্রমাণ পরস্পর সামঞ্জস্যপূর্ণ; তাই সিদ্ধান্তটি যুক্তিসংগত, তবে উল্লিখিত সীমাবদ্ধতার কারণে শর্তসাপেক্ষ।`;
}

function chapterSolvedCqAnswer(resource: ExamResource, terms: string[], rule: string, application: string) {
  const prepared = resource.materialPack?.fullCq?.parts?.filter((part) => part.answer?.trim());
  if (prepared?.length === 4 && prepared.every((part) => !/(লিখবে|লিখতে হবে|লেখো|দাও|করো|দেখাও|মূল্যায়ন করো)[।\s]*$/u.test(part.answer.trim()))) {
    return prepared.map((part) => `${part.label}. ${part.marks} নম্বর: ${part.answer.trim()}`).join("\n\n");
  }
  const workshop = resource.chapterWorkshop?.cqSolution?.parts?.filter((part) => part.answer?.trim());
  if (workshop?.length === 4 && workshop.every((part) => !/(লেখো|দাও|করো|দেখাও|মূল্যায়ন করো)[।\s]*$/u.test(part.answer.trim()))) {
    return workshop.map((part) => `${part.label}. ${part.marks} নম্বর: ${part.answer.trim()}`).join("\n\n");
  }
  return detailedBanglaCqAnswer(resource, terms, rule, application);
}

function isInstructionOnlyCqAnswer(answer?: string) {
  if (!answer) return true;
  const parts = answer.split(/\n\s*\n/).filter(Boolean);
  const commands = answer.match(/(?:লিখতে হবে|লিখবে|লেখো|উল্লেখ করো|ব্যাখ্যা করো|দেখাতে হবে|দেখাও|মূল্যায়ন করো|বিশ্লেষণ করো)/gu)?.length ?? 0;
  return parts.length < 4 || answer.length < 420 || commands >= 3;
}

function detailedEnglishCqAnswer(resource: ExamResource, terms: string[], rule: string, application: string) {
  const first = terms[0] ?? resource.unit;
  const second = terms[1] ?? first;
  return `Knowledge (1): ${first} is a central concept in ${resource.unit}. It identifies the precise idea required by the task and provides the basis for selecting the correct rule.\n\nComprehension (2): ${second} is connected to ${first} because one identifies the governing concept while the other explains its function, relationship or effect. ${rule} A complete explanation therefore states the relationship and illustrates it instead of listing two isolated definitions.\n\nApplication (3): The decisive context is: ${application} First, select the exact evidence demanded by the task. Second, apply the chapter rule in a visible sequence, showing the relevant language, organisation, calculation or reasoning. Third, connect the resulting effect directly to the stimulus and check that every required output has been completed.\n\nHigher order (4): The conclusion should be tested against the strongest supporting evidence, a reasonable alternative and at least one limitation. The preferred interpretation is the one that satisfies the task, uses the chapter rule accurately and explains the evidence without contradiction. If the audience, evidence or underlying assumption changes, the conclusion may need qualification. Therefore, the most defensible conclusion is the one that remains relevant, coherent and explicitly supported by the supplied context.`;
}

function withCompleteAnswerSupport(resource: ExamResource): ExamResource {
  const english = resource.subject === "English";
  const terms = resource.guide?.terminology ?? [];
  const rule = resource.guide?.concept ?? resource.bank.focus;
  const application = resource.guide?.application ?? resource.worked.problem;
  return {
    ...resource,
    notes: resource.notes.filter(isUsefulChapterNote),
    bank: {
      ...resource.bank,
      questions: resource.bank.questions?.filter(isAcademicQuestion).map((question) => {
        if (question.type === "MCQ") return question;
        if (english) return {
          ...question,
          marks: question.type === "CQ" ? 10 : question.marks,
          markingPoints: question.type === "CQ"
            ? ["Knowledge: accurate identification — 1", "Comprehension: connected explanation — 2", "Application: task evidence — 3", "Higher order: evaluation and conclusion — 4"]
            : (question.markingPoints ?? ["Task fulfilment and opening — 2", "Organisation and development — 2", "Relevant evidence or example — 2", "Language accuracy and editing — 2", "Conclusion and presentation — 2"]),
          modelAnswer: question.type === "CQ" ? (question.modelAnswer ?? detailedEnglishCqAnswer(resource, terms, rule, application)) : (question.modelAnswer ?? `A complete response to ${resource.unit} begins by identifying the purpose, audience and required format. It uses ${terms.slice(0, 3).join(", ")} accurately, develops one controlling idea with relevant evidence, and maintains logical paragraph order. ${application} The final version removes repetition, corrects grammar and punctuation, and ends with a conclusion that directly answers the task.`),
        };
        const solvedCq = question.type === "CQ" && isInstructionOnlyCqAnswer(question.modelAnswerBn)
          ? chapterSolvedCqAnswer(resource, terms, rule, application)
          : question.modelAnswerBn;
        return {
          ...question,
          marks: question.type === "CQ" ? 10 : question.marks,
          markingPointsBn: question.type === "CQ"
            ? ["ক · নির্ভুল জ্ঞান — ১", "খ · সম্পর্কসহ ব্যাখ্যা — ২", "গ · তথ্যভিত্তিক প্রয়োগ — ৩", "ঘ · প্রমাণ, সীমাবদ্ধতা ও সিদ্ধান্ত — ৪"]
            : (question.markingPointsBn ?? ["প্রাসঙ্গিক ভূমিকা — ২", "ধারণা ও সংগঠন — ২", "উদাহরণ/প্রমাণ — ২", "বিশ্লেষণ ও সংশোধন — ২", "উপসংহার ও উপস্থাপন — ২"]),
          modelAnswerBn: question.type === "CQ" ? (solvedCq ?? detailedBanglaCqAnswer(resource, terms, rule, application)) : (question.modelAnswerBn ?? `“${resource.unitBn}” বিষয়ে পূর্ণাঙ্গ উত্তরে প্রথমে ${terms.slice(0, 3).join(" · ")} ধারণাগুলোর সম্পর্ক নির্ভুলভাবে ব্যাখ্যা করতে হবে। ${rule} বাস্তব প্রয়োগে ${application}—এই উদাহরণের নির্ণায়ক তথ্য ব্যবহার করা যায়। উত্তরে প্রাসঙ্গিক ভূমিকা, ধারাবাহিক বিশ্লেষণ, প্রয়োজনীয় প্রমাণ/হিসাব, একটি সীমাবদ্ধতা এবং প্রশ্নসঙ্গত উপসংহার থাকলে তা পূর্ণ নম্বরের উপযোগী হয়।`),
        };
      }),
    },
  };
}

function ensureChapterQuestionMinimums(resource: ExamResource): ExamResource {
  const questions = [...(resource.bank.questions ?? [])];
  const lessons = resource.lessonDetails ?? [];
  const concepts = resource.materialPack?.conceptNotes ?? [];
  const terms = resource.guide?.terminology?.filter(Boolean) ?? [resource.unitBn];
  const checklist = resource.guide?.examChecklist ?? [];
  const counts = (type: "MCQ" | "CQ" | "Written") => questions.filter((question) => question.type === type).length;
  const common = { sourceStatus: "authored-board-pattern" as const };
  const contextAt = (index: number) => {
    const lesson = lessons[index % Math.max(lessons.length, 1)];
    const concept = concepts[index % Math.max(concepts.length, 1)];
    return {
      lessonTitle: lesson?.title ?? resource.unitBn,
      conceptTitle: concept?.title ?? terms[index % Math.max(terms.length, 1)] ?? resource.unitBn,
      explanation: concept?.explanation ?? lesson?.concept ?? resource.guide?.concept ?? resource.bank.focus,
      example: concept?.example ?? lesson?.workedSnapshot ?? resource.guide?.application ?? resource.worked.problem,
      check: lesson?.answerCheck ?? checklist[index % Math.max(checklist.length, 1)] ?? "অধ্যায়ের নিয়ম ও প্রদত্ত তথ্য মিলিয়ে ফল যাচাই করো।",
    };
  };

  if (resource.subject === "English") {
    const models = resource.modelExamples ?? [];
    for (let index = counts("Written"); index < 100; index += 1) {
      const lesson = lessons[index % Math.max(lessons.length, 1)];
      const model = models[index % Math.max(models.length, 1)];
      const title = model?.title ?? lesson?.title ?? resource.unit;
      const task = model?.prompt ?? lesson?.practicePrompt ?? `Complete an exam-standard task on ${title}.`;
      const answer = model?.answer?.join("\n\n") ?? lesson?.workedSnapshot ?? resource.worked.answer;
      const family = index % 5;
      const prompts = [
        `${title}\n${task}`,
        `${title} — timed practice\n${task}\nKeep the response within the expected HSC length and preserve the required format.`,
        `${title} — editing task\nWrite a complete response to the task, then revise it for organisation, grammar, punctuation and relevance.\n${task}`,
        `${title} — examiner practice\n${task}\nMake the opening, development and ending visibly serve the question.`,
        `${title} — transfer task\nUse the same rule or structure in a fresh Bangladesh context. ${task}`,
      ];
      questions.push({
        type: "Written", level: (["Foundation", "Standard", "Challenge"] as const)[index % 3],
        category: (["Application", "Board-style", "College-standard"] as const)[index % 3],
        prompt: prompts[family], answerGuide: lesson?.answerCheck ?? model?.examinerNote ?? "Check task fulfilment, organisation, language accuracy and the required format.",
        markingPoints: ["Task fulfilment and relevance — 2", "Organisation and cohesion — 2", "Accurate language — 2", "Supporting detail — 2", "Format and final editing — 2"],
        modelAnswer: `${answer}\n\nExaminer check: ${model?.examinerNote ?? lesson?.answerCheck ?? "The response must answer the exact task and retain the required HSC format."}`,
        marks: 10, ...common,
      });
    }
    return { ...resource, bank: { ...resource.bank, questions } };
  }

  const optionContext = (index: number) => {
    const contexts = [0, 1, 2, 3].map((offset) => contextAt(index + offset));
    const unique = contexts.filter((item, itemIndex, all) => all.findIndex((other) => other.conceptTitle === item.conceptTitle) === itemIndex);
    while (unique.length < 4) {
      const fallbackTerm = terms[(index + unique.length) % Math.max(terms.length, 1)] ?? `${resource.unitBn} ধারণা ${unique.length + 1}`;
      unique.push({ ...contextAt(index + unique.length), conceptTitle: fallbackTerm });
    }
    return unique.slice(0, 4);
  };

  for (let index = counts("MCQ"); index < 100; index += 1) {
    const item = contextAt(index);
    const choices = optionContext(index);
    const family = index % 4;
    const prompts = [
      `“${resource.unitBn}” অধ্যায়ে ${item.conceptTitle}-এর সবচেয়ে নির্ভুল পরিচয় কোনটি?`,
      `${item.example}\nঘটনাটির নির্ণায়ক ধারণা কোনটি?`,
      `${item.lessonTitle} নিয়ে কাজ করার সময় কোন ব্যাখ্যাটি অধ্যায়ের নিয়মের সঙ্গে সামঞ্জস্যপূর্ণ?`,
      `${item.example}\nফল যাচাইয়ের জন্য প্রথমে কোন বিষয়টি ধরতে হবে?`,
    ];
    const correct = family === 1 ? item.conceptTitle : family === 3 ? item.check : `${item.conceptTitle} — ${item.explanation}`;
    const wrong = choices.slice(1).map((choice) => family === 1 ? choice.conceptTitle : family === 3 ? choice.check : `${choice.conceptTitle} — ${choice.explanation}`);
    const correctIndex = index % 4;
    const options = [...wrong];
    options.splice(correctIndex, 0, correct);
    questions.push({
      type: "MCQ", level: (["Foundation", "Standard", "Challenge"] as const)[index % 3],
      category: (["Concept", "Application", "Board-style", "College-standard"] as const)[index % 4],
      prompt: "", promptBn: prompts[family], optionsBn: options, correctIndex,
      answerGuide: "", answerGuideBn: `${item.conceptTitle} এখানে নির্ণায়ক, কারণ ${item.explanation} উদাহরণটির সঙ্গে মিল: ${item.example} যাচাইয়ের ধাপ: ${item.check}`,
      marks: 1, ...common,
    });
  }
  for (let index = counts("CQ"); index < 50; index += 1) {
    const item = contextAt(index + 7);
    const term = terms[index % Math.max(terms.length, 1)] ?? item.conceptTitle;
    const family = index % 3;
    const applicationQuestion = [`উদ্দীপকের নির্দিষ্ট তথ্য ব্যবহার করে ${item.conceptTitle} প্রয়োগ করো।`,`উদ্দীপকের সমস্যা সমাধানে ${item.conceptTitle}-এর কার্যপ্রণালি দেখাও।`,`উদ্দীপকের ফলটি ${item.conceptTitle}-এর আলোকে ব্যাখ্যা করো।`][family];
    const evaluationQuestion = [`${item.check}—এই মানদণ্ডে সিদ্ধান্তটির যথার্থতা মূল্যায়ন করো।`,`বিকল্প ব্যাখ্যা বিবেচনা করে উদ্দীপকের সিদ্ধান্তটি বিচার করো।`,`অধ্যায়ের নিয়ম, প্রমাণ ও সীমাবদ্ধতা মিলিয়ে উদ্দীপকের ফল বিশ্লেষণ করো।`][family];
    questions.push({
      type: "CQ", level: index % 3 === 2 ? "Challenge" : "Standard", category: index % 2 === 0 ? "Board-style" : "College-standard",
      prompt: "", promptBn: `উদ্দীপক: ${item.example}\nক. ${term} কী?\nখ. “${item.lessonTitle}”-এর সঙ্গে ${term}-এর সম্পর্ক ব্যাখ্যা করো।\nগ. ${applicationQuestion}\nঘ. ${evaluationQuestion}`,
      answerGuide: "", answerGuideBn: `ক-তে ${term}-এর নির্ভুল পরিচয়, খ-তে ${item.lessonTitle}-এর সঙ্গে সম্পর্ক, গ-তে উদ্দীপকের তথ্যভিত্তিক প্রয়োগ এবং ঘ-তে ${item.check} ধরে প্রমাণসমর্থিত সিদ্ধান্ত লিখবে।`,
      markingPointsBn: ["ক · নির্ভুল জ্ঞান — ১", "খ · সম্পর্কসহ ব্যাখ্যা — ২", "গ · তথ্যভিত্তিক প্রয়োগ — ৩", "ঘ · প্রমাণ, সীমাবদ্ধতা ও সিদ্ধান্ত — ৪"],
      modelAnswerBn: detailedBanglaCqAnswer(resource, [term, item.conceptTitle], item.explanation, item.example), marks: 10, ...common,
    });
  }
  for (let index = counts("Written"); index < 60; index += 1) {
    const item = contextAt(index + 13);
    const term = terms[index % Math.max(terms.length, 1)] ?? item.conceptTitle;
    const family = index % 4;
    const tasks = [
      `“${resource.unitBn}” · ${item.lessonTitle}: ${item.example}\n${term} ও ${item.conceptTitle} ব্যবহার করে তথ্য, পদ্ধতি, ফল এবং শেষ যাচাইসহ একটি সম্পূর্ণ পরীক্ষার উত্তর লেখো।`,
      `${item.lessonTitle}: ${term} ও ${item.conceptTitle}-এর পার্থক্য উদাহরণসহ দেখাও; কোন পরিস্থিতিতে কোনটি প্রযোজ্য তা ব্যাখ্যা করো।`,
      `ভুল-সংশোধন: ${item.example}\nসমাধানের সম্ভাব্য ভুল ধাপ শনাক্ত করে সঠিক নিয়মে ফল পুনর্গঠন করো।`,
      `নতুন পরিস্থিতি: ${item.example}\nঅধ্যায়ের নিয়ম প্রয়োগ করে সিদ্ধান্ত নাও এবং ${item.check} পদ্ধতিতে তা যাচাই করো।`,
    ];
    questions.push({
      type: "Written", level: (["Foundation", "Standard", "Challenge"] as const)[index % 3], category: index % 2 === 0 ? "Application" : "College-standard",
      prompt: "", promptBn: tasks[family],
      answerGuide: "", answerGuideBn: `উত্তরে ${item.explanation} ধারণাটি নির্ভুলভাবে ব্যবহার করবে। কাজের শেষে এই যাচাইটি থাকবে: ${item.check}`,
      markingPointsBn: ["প্রশ্নের চাহিদা ও প্রাসঙ্গিক ধারণা — ২", "অধ্যায়নির্ভর ব্যাখ্যা — ২", "উদাহরণ/প্রয়োগ — ২", "ফল বিশ্লেষণ ও যাচাই — ২", "উপসংহার ও উপস্থাপন — ২"],
      modelAnswerBn: `প্রশ্নটির কেন্দ্রীয় বিষয় ${term} এবং ${item.conceptTitle}। ${item.explanation}\n\nপ্রয়োগ: ${item.example}\n\nবিশ্লেষণে তথ্য ও অধ্যায়ের নিয়মের যোগ স্পষ্ট করে প্রতিটি ধাপ দেখাতে হবে। ফল নির্ণয়ের পর ${item.check} এই মানদণ্ডে উত্তর যাচাই করতে হবে। তাই প্রাসঙ্গিক ধারণা, সম্পূর্ণ কার্যপ্রণালি, দৃশ্যমান প্রমাণ এবং প্রশ্নসঙ্গত উপসংহার—চারটি অংশ মিলেই উত্তরটি পূর্ণাঙ্গ হবে।`,
      marks: 10, ...common,
    });
  }
  return { ...resource, bank: { ...resource.bank, questions } };
}

function balanceChapterMcqOptions(resource: ExamResource): ExamResource {
  return {
    ...resource,
    bank: {
      ...resource.bank,
      questions: resource.bank.questions?.map((question, questionIndex) => {
        if (question.type !== "MCQ" || !question.optionsBn?.length || question.correctIndex === undefined) return question;
        const shift = questionIndex % question.optionsBn.length;
        const indexed = question.optionsBn.map((text, optionIndex) => ({ text, correct: optionIndex === question.correctIndex }));
        const rotated = [...indexed.slice(shift), ...indexed.slice(0, shift)];
        return {
          ...question,
          optionsBn: rotated.map((option) => option.text),
          correctIndex: Math.max(0, rotated.findIndex((option) => option.correct)),
        };
      }),
    },
  };
}

function diversifyDuplicatePrompts(resource: ExamResource): ExamResource {
  const english = resource.subject === "English";
  const lenses = english
    ? ["classroom explanation", "timed exam", "error clinic", "comparison task", "evidence check", "Bangladesh context", "revision checkpoint", "independent practice"]
    : ["শ্রেণিকক্ষের ব্যাখ্যা", "সময় ধরে পরীক্ষা", "ভুল সংশোধন", "তুলনামূলক কাজ", "প্রমাণ যাচাই", "বাংলাদেশের বাস্তবতা", "রিভিশন যাচাই", "স্বাধীন অনুশীলন"];
  const terms = resource.guide?.terminology?.length ? resource.guide.terminology : [english ? resource.unit : resource.unitBn];
  const seen = new Map<string, number>();
  return {
    ...resource,
    bank: {
      ...resource.bank,
      questions: resource.bank.questions?.map((question) => {
        const visiblePrompt = question.promptBn ?? question.prompt;
        const key = visiblePrompt.toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
        const occurrence = seen.get(key) ?? 0;
        seen.set(key, occurrence + 1);
        if (occurrence === 0) return question;
        const lens = lenses[(occurrence - 1) % lenses.length];
        const term = terms[(occurrence - 1) % terms.length];
        if (english) return { ...question, prompt: `${question.prompt}\nContext focus ${occurrence + 1}: ${lens}; use ${term} as the decisive idea.` };
        return { ...question, promptBn: `${question.promptBn ?? question.prompt}\nপ্রেক্ষিত ${occurrence + 1}: ${lens}; ${term}-এর দিকটি নির্ণায়ক হিসেবে ব্যবহার করো।` };
      }),
    },
  };
}

for (const group of ["commerce", "humanities"] as const) {
  completeExamLibraryByGroup[group] = groupSubjectIds[group].flatMap((subjectId) =>
    chaptersBySubject[subjectId].map((chapter) => {
      const generated = generatedResource(subjectId, chapter);
      const cleaned = withCompleteAnswerSupport(generated);
      const completed = ensureChapterQuestionMinimums(cleaned);
      return balanceChapterMcqOptions(diversifyDuplicatePrompts(completed));
    }),
  );

  for (const subject of new Set(completeExamLibraryByGroup[group].map((resource) => resource.subject))) {
    const subjectResources = completeExamLibraryByGroup[group].filter((resource) => resource.subject === subject);
    const frequency = new Map<string, number>();
    for (const resource of subjectResources) for (const note of resource.notes) {
      const key = note.replace(/\s+/g, " ").trim();
      frequency.set(key, (frequency.get(key) ?? 0) + 1);
    }
    for (const resource of subjectResources) {
      resource.notes = resource.notes.filter((note) => (frequency.get(note.replace(/\s+/g, " ").trim()) ?? 0) === 1);
    }
  }

  const groupResources = completeExamLibraryByGroup[group];
  const questionFrequency = new Map<string, number>();
  const noteFrequency = new Map<string, number>();
  for (const resource of groupResources) {
    for (const question of resource.bank.questions ?? []) {
      const key = (question.promptBn ?? question.prompt).replace(/\s+/g, " ").trim();
      questionFrequency.set(key, (questionFrequency.get(key) ?? 0) + 1);
    }
    for (const note of resource.notes) {
      const key = note.replace(/\s+/g, " ").trim();
      noteFrequency.set(key, (noteFrequency.get(key) ?? 0) + 1);
    }
  }
  for (const resource of groupResources) {
    const identity = `${resource.subjectBn ?? resource.subject} · ${resource.unitBn}`;
    resource.bank.questions = (resource.bank.questions ?? []).map((question) => {
      const visiblePrompt = question.promptBn ?? question.prompt;
      const key = visiblePrompt.replace(/\s+/g, " ").trim();
      if ((questionFrequency.get(key) ?? 0) < 2) return question;
      return question.promptBn
        ? { ...question, promptBn: `${identity}\n${question.promptBn}` }
        : { ...question, prompt: `${resource.subject} · ${resource.unit}\n${question.prompt}` };
    });
    resource.notes = resource.notes.map((note) => {
      const key = note.replace(/\s+/g, " ").trim();
      return (noteFrequency.get(key) ?? 0) > 1 ? `${identity}: ${note}` : note;
    });
  }
}

function rotateObjectiveOptions(options: string[], correctIndex: number, seed: number) {
  const shift = options.length ? seed % options.length : 0;
  const indexed = options.map((text, index) => ({ text, correct: index === correctIndex }));
  const rotated = [...indexed.slice(shift), ...indexed.slice(0, shift)];
  return {
    options: rotated.map((item) => item.text),
    answer: Math.max(0, rotated.findIndex((item) => item.correct)),
  };
}

for (const group of ["commerce", "humanities"] as const) {
  const resources = completeExamLibraryByGroup[group];
  const perSubject = groupSubjectIds[group].map((subjectId) => resources
    .map((resource, resourceIndex) => ({ resource, resourceIndex }))
    .filter(({ resource }) => resource.subject === subjectDisplay[subjectId])
    .flatMap(({ resource, resourceIndex }) => (resource.bank.questions ?? [])
      .filter((question) => question.type === "MCQ" && question.optionsBn?.length === 4)
      .map((question, questionIndex) => {
        const english = resource.subject === "English";
        const optionSet = rotateObjectiveOptions(question.optionsBn ?? [], question.correctIndex ?? 0, resourceIndex + questionIndex);
        return {
          id: resourceIndex * 1000 + questionIndex + 100,
          topic: english ? `${resource.subject} · ${resource.unit}` : `${resource.subjectBn ?? resource.subject} · ${resource.unitBn}`,
          question: english ? question.prompt : (question.promptBn ?? question.prompt),
          options: optionSet.options,
          answer: optionSet.answer,
          explanation: english ? question.answerGuide : (question.answerGuideBn ?? question.answerGuide),
          difficulty: question.level,
          skill: question.category === "Concept" ? "Recall" as const : question.category === "Application" ? "Apply" as const : "Analyse" as const,
          isEnglish: english,
        };
      })),
  );
  const longestSubjectPool = Math.max(...perSubject.map((questions) => questions.length));
  const objectivePool = Array.from({ length: longestSubjectPool }, (_, questionIndex) =>
    perSubject.map((questions) => questions[questionIndex]).filter((question): question is NonNullable<typeof question> => Boolean(question)),
  ).flat();
  const uniquePrompts = new Set<string>();
  practiceQuestionsByGroup[group] = objectivePool.filter((question) => {
    const promptKey = question.question.toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim();
    if (uniquePrompts.has(promptKey)) return false;
    uniquePrompts.add(promptKey);
    return true;
  });
}

export const academicDatabaseSummary = (Object.keys(completeExamLibraryByGroup) as Array<keyof typeof completeExamLibraryByGroup>).reduce((summary, group) => {
  const resources = completeExamLibraryByGroup[group];
  summary[group] = {
    chapters: resources.length,
    lessons: resources.reduce((total, resource) => total + (resource.lessonDetails?.length ?? 0), 0),
    notes: resources.reduce((total, resource) => total + resource.notes.length, 0),
    questions: resources.reduce((total, resource) => total + (resource.bank.questions?.length ?? 0), 0),
  };
  return summary;
}, {} as Record<"commerce" | "humanities", { chapters: number; lessons: number; notes: number; questions: number }>);

export const contentCoverageManifest = (Object.keys(completeExamLibraryByGroup) as Array<keyof typeof completeExamLibraryByGroup>).reduce((manifest, group) => {
  manifest[group] = completeExamLibraryByGroup[group].map((resource) => {
    const questions = resource.bank.questions ?? [];
    return {
      subject: resource.subject,
      unit: resource.unit,
      lessons: resource.lessonDetails?.length ?? 0,
      notes: resource.notes.length,
      mcq: questions.filter((question) => question.type === "MCQ").length,
      cq: questions.filter((question) => question.type === "CQ").length,
      written: questions.filter((question) => question.type === "Written").length,
      boardPattern: questions.filter((question) => question.category === "Board-style").length,
      collegeStandard: questions.filter((question) => question.category === "College-standard").length,
      noteModes: ["detailed", "revision", "last-minute"] as const,
      printableBook: true,
      academicReview: resource.review?.status ?? "under-review",
    };
  });
  return manifest;
}, {} as Record<"commerce" | "humanities", Array<{ subject: string; unit: string; lessons: number; notes: number; mcq: number; cq: number; written: number; boardPattern: number; collegeStandard: number; noteModes: readonly ["detailed", "revision", "last-minute"]; printableBook: boolean; academicReview: string }>>);

function markingTotal(points: string[] | undefined) {
  return (points ?? []).reduce((total, point) => {
    const match = point.match(/(?:—|-|·)\s*([০-৯0-9]+)\s*$/u);
    if (!match) return total;
    const value = match[1].replace(/[০-৯]/g, (digit) => String("০১২৩৪৫৬৭৮৯".indexOf(digit)));
    return total + Number(value);
  }, 0);
}

/**
 * Automated assurance proves database completeness and assessment structure only.
 * It deliberately does not convert a chapter into academically reviewed status.
 */
export const academicContentAssurance = {
  auditedOn: "13 October 2026",
  auditedOnBn: "১৩ অক্টোবর ২০২৬",
  scope: "356 group learning-unit records · lessons, notes, MCQ, CQ, written practice and provenance",
  scopeBn: "৩৫৬টি গ্রুপভিত্তিক অধ্যায়ের নথি · পাঠ, নোট, MCQ, CQ, লিখিত অনুশীলন ও উৎস-পরিচয়",
  automatedStatus: "passed",
  academicStatus: "reviewer-sign-off-pending",
  checks: [
    { id: "chapter-record", label: "Chapter record and official-source links", labelBn: "অধ্যায় রেকর্ড ও অফিসিয়াল উৎসের সংযোগ" },
    { id: "mcq-structure", label: "Four options, valid answer and explanation for every MCQ", labelBn: "প্রতিটি MCQ-তে চার বিকল্প, বৈধ উত্তর ও ব্যাখ্যা" },
    { id: "cq-structure", label: "10-mark CQ framework, marking points and model answer", labelBn: "১০ নম্বরের CQ কাঠামো, মানবণ্টন ও মডেল উত্তর" },
    { id: "language-policy", label: "English tasks stay in English; Bangla-medium subjects use Bangla", labelBn: "ইংরেজি বিষয়ের কাজ ইংরেজিতে; বাংলা মাধ্যমের অন্যান্য বিষয় বাংলায়" },
    { id: "provenance", label: "Every uncited item is labelled original practice", labelBn: "উদ্ধৃতিহীন প্রতিটি প্রশ্ন নিজস্ব অনুশীলন হিসেবে চিহ্নিত" },
  ],
  limitation: "Automated checks cannot certify factual accuracy, textbook edition, chapter sequence or a teacher's academic judgement.",
  limitationBn: "স্বয়ংক্রিয় যাচাই তথ্যগত নির্ভুলতা, পাঠ্যবইয়ের সংস্করণ, অধ্যায়ক্রম বা শিক্ষকের একাডেমিক বিচার অনুমোদন করতে পারে না।",
} as const;

export const examSystemValidation = {
  validatedOn: "5 October 2026",
  fullPaper: { mcq: 30, cq: 7, marks: 100, minutes: 180, mcqMinutes: 30, cqMinutes: 150 },
  independentModes: ["mcq", "cq", "full"],
  sessionRules: { uniqueWithinSession: true, repetitionOnlyInRevision: true, activeSessionResume: true, deadlineBasedTimer: true },
  resultRules: { unansweredSeparate: true, partialCqSeparate: true, chapterWeakness: true, timeAnalysis: true, revisionRecommendation: true },
  pdfRules: { printableQuestionPaper: true, printableResult: true, answerUploadLocalOnly: true, aiAssessmentAvailable: false },
} as const;

export const englishMarksDistribution2026 = {
  status: "secondary-source-reference",
  warning: "Use as a preparation blueprint; final board notice and qualified English reviewer sign-off are still required.",
  firstPaper: {
    total: 100,
    sections: [
      { name:"Reading", marks:60, items:["MCQ from context · 5", "Comprehension · 10", "Information transfer / flow chart · 10", "Summary · 10", "Cloze with clues · 5", "Cloze without clues · 10", "Rearranging · 10"] },
      { name:"Writing", marks:40, items:["Question-guided paragraph · 10", "Completing a story · 7", "Informal letter / email · 5", "Graph / chart analysis · 10", "Appreciating stories / poems · 8"] },
    ],
  },
  secondPaper: {
    total: 100,
    sections: [
      { name:"Grammar", marks:60, items:["Articles · 5", "Prepositions · 5", "Gap filling with clues · 5", "Completing sentences · 5", "Right form of verbs · 5", "Sentence transformation · 5", "Narration · 5", "Pronoun reference · 5", "Modifiers · 5", "Connectors · 5", "Synonym & antonym · 5", "Punctuation · 5"] },
      { name:"Composition", marks:40, items:["Formal letter / email · 8", "Report writing · 8", "Paragraph · 10", "Free writing (200–250 words) · 14"] },
    ],
  },
  source: { label:"Skylark Education · Marks Distribution for HSC 2026", url:"https://skylarkeducation.com/marks-distribution-for-hsc-2026/", checkedOn:"11 October 2026" },
} as const;

export type HscPaperTask = { label: string; marks: number; instruction: string };
export type HscPaperBlueprint = {
  total: number;
  minutes: number;
  theoryMarks?: number;
  practicalMarks?: number;
  mcq?: { shown: number; answer: number; marks: number };
  cq?: { shown: number; answer: number; marksEach: number };
  tasks?: readonly HscPaperTask[];
  evidence: { status: "secondary-reference" | "supplied-board-image"; label: string; url?: string; checkedOn: string };
  warning: string;
};

/**
 * Paper blueprints drive Test Centre composition. They are preparation mappings,
 * not academic sign-off: the applicable board notice and a subject reviewer must
 * still confirm them before the interface may call them verified.
 */
export const hscPaperBlueprints: Record<string,HscPaperBlueprint> = {
  "bangla:1st Paper": {
    total:100, minutes:180,
    mcq:{shown:30,answer:30,marks:30}, cq:{shown:11,answer:7,marksEach:10},
    evidence:{status:"secondary-reference",label:"Byakoron School · HSC 2026 Bangla syllabus and marks distribution",url:"https://byakoronschool.com/%E0%A6%8F%E0%A6%87%E0%A6%9A%E0%A6%8F%E0%A6%B8%E0%A6%B8%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%AC%E0%A6%BE%E0%A6%B8/",checkedOn:"11 October 2026"},
    warning:"Preparation blueprint: 30 MCQ compulsory; 7 of 11 CQ. Official notice and Bangla reviewer confirmation pending.",
  },
  "bangla:2nd Paper": {
    total:100, minutes:180,
    tasks:[
      {label:"উচ্চারণ",marks:5,instruction:"নিয়ম লেখা অথবা প্রদত্ত শব্দের শুদ্ধ উচ্চারণ"},{label:"বানান",marks:5,instruction:"নিয়ম লেখা অথবা প্রদত্ত অশুদ্ধ বানানের শুদ্ধরূপ"},{label:"ব্যাকরণিক শব্দশ্রেণি",marks:5,instruction:"বর্ণনা অথবা বাক্যে শব্দের শ্রেণি নির্ণয়"},{label:"শব্দগঠন",marks:5,instruction:"উপসর্গ, সমাস অথবা প্রকৃতি–প্রত্যয়"},{label:"বাক্যতত্ত্ব",marks:5,instruction:"বাক্যের বৈশিষ্ট্য অথবা রূপান্তর"},{label:"অপপ্রয়োগ ও শুদ্ধ প্রয়োগ",marks:5,instruction:"বাক্য অথবা অনুচ্ছেদের শুদ্ধরূপ"},
      {label:"পারিভাষিক রূপ / অনুবাদ",marks:10,instruction:"দুটি বিকল্প থেকে একটি"},{label:"দিনলিপি / প্রতিবেদন",marks:10,instruction:"দুটি বিকল্প থেকে একটি"},{label:"ই-মেইল / আবেদনপত্র",marks:10,instruction:"দুটি বিকল্প থেকে একটি"},{label:"সারাংশ–সারমর্ম / ভাবসম্প্রসারণ",marks:10,instruction:"দুটি বিকল্প থেকে একটি"},{label:"সংলাপ / খুদে গল্প",marks:10,instruction:"দুটি বিকল্প থেকে একটি"},{label:"প্রবন্ধ–নিবন্ধ",marks:20,instruction:"পাঁচটি বিকল্প থেকে একটি"},
    ],
    evidence:{status:"secondary-reference",label:"Byakoron School · HSC 2026 Bangla Second Paper distribution",url:"https://byakoronschool.com/%E0%A6%8F%E0%A6%87%E0%A6%9A%E0%A6%8F%E0%A6%B8%E0%A6%B8%E0%A6%BF-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE-%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%AC%E0%A6%BE%E0%A6%B8/",checkedOn:"11 October 2026"},
    warning:"Preparation blueprint: grammar 30 + composition 70. Official notice and Bangla reviewer confirmation pending.",
  },
  "english:1st Paper": {
    total:100,minutes:180,
    tasks:englishMarksDistribution2026.firstPaper.sections.flatMap(section=>section.items.map(item=>{const match=item.match(/^(.*?)\s*·\s*(\d+)$/);return {label:match?.[1]??item,marks:Number(match?.[2]??0),instruction:section.name};})),
    evidence:{status:"secondary-reference",label:"English First Paper model-question set + HSC 2026 preparation distribution",checkedOn:"11 October 2026"},
    warning:"Preparation blueprint reconstructed from supplied model questions and secondary distribution; English reviewer confirmation pending.",
  },
  "english:2nd Paper": {
    total:100,minutes:180,
    tasks:englishMarksDistribution2026.secondPaper.sections.flatMap(section=>section.items.map(item=>{const match=item.match(/^(.*?)\s*·\s*(\d+)$/);return {label:match?.[1]??item,marks:Number(match?.[2]??0),instruction:section.name};})),
    evidence:{status:"secondary-reference",label:"English Second Paper model-question and answer sets + HSC 2026 preparation distribution",checkedOn:"11 October 2026"},
    warning:"Preparation blueprint reconstructed from supplied model questions and secondary distribution; English reviewer confirmation pending.",
  },
  "ict:all": {
    total:100,minutes:150,theoryMarks:75,practicalMarks:25,
    mcq:{shown:25,answer:25,marks:25},cq:{shown:8,answer:5,marksEach:10},
    evidence:{status:"supplied-board-image",label:"User-supplied marks-distribution image + ICT question-pattern reference",url:"https://suggestion-hsc.blogspot.com/2017/11/hsc-ict-suggestion-with-question-paper.html?m=1",checkedOn:"11 October 2026"},
    warning:"Theory simulation: 25 MCQ compulsory and 5 of 8 CQ; practical 25 is recorded separately. Current applicability requires official confirmation.",
  },
} as const;

export const academicDatabaseIssues = (Object.keys(completeExamLibraryByGroup) as Array<keyof typeof completeExamLibraryByGroup>).flatMap((group) => {
  const expectedChapters = groupSubjectIds[group].reduce((total, subjectId) => total + chaptersBySubject[subjectId].length, 0);
  const resources = completeExamLibraryByGroup[group];
  const issues: string[] = resources.length === expectedChapters ? [] : [`${group}: expected ${expectedChapters} chapter records, found ${resources.length}`];
  const curriculumGroup = curriculumCoverageRegistry.groups[group];
  if (curriculumGroup.chapterRecords !== expectedChapters) issues.push(`${group}: curriculum registry chapter total is stale`);
  if (curriculumGroup.subjects.map((subject) => subject.id).join("|") !== groupSubjectIds[group].join("|")) issues.push(`${group}: curriculum registry subject mapping is stale`);
  if (curriculumGroup.subjects.some((subject) => !["full-subject", "first-and-second-paper"].includes(subject.libraryScope) || !["under-review", "reference-structure-matched"].includes(subject.officialPaperMapping))) issues.push(`${group}: subject-library scope or paper-review status is misleading`);
  if (subjectsByGroup[group].some((subject) => !["Full Subject", "1st & 2nd Paper", "Paper mapping under review"].includes(subject.paper))) issues.push(`${group}: subject card makes an unsupported paper claim`);
  const objectivePool = practiceQuestionsByGroup[group];
  const uniqueObjectivePrompts = new Set(objectivePool.map((question) => question.question.toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim()));
  if (uniqueObjectivePrompts.size !== objectivePool.length) issues.push(`${group}: objective practice contains duplicate prompts`);
  if (objectivePool.length < expectedChapters * 3) issues.push(`${group}: objective practice does not cover every chapter with three questions`);
  for (const answerIndex of [0, 1, 2, 3]) if (!objectivePool.some((question) => question.answer === answerIndex)) issues.push(`${group}: objective answer positions are not balanced`);
  const objectiveSubjectCount = groupSubjectIds[group].filter((subjectId) => subjectId !== "english").length;
  if (new Set(objectivePool.slice(0, 20).map((question) => question.topic.split(" · ")[0])).size < objectiveSubjectCount) issues.push(`${group}: first quick-practice session does not cover every objective-question subject`);
  const canonicalSubjectNames: Record<string, string> = { bangla: "Bangla", english: "English", ict: "Information & Communication Technology", accounting: "Accounting", finance: "Finance & Banking", business: "Business Organisation", economics: "Economics", civics: "Civics & Good Governance", history: "History", logic: "Logic", islamic_history: "Islamic History & Culture", statistics: "Statistics", geography:"Geography" };
  for (const subjectId of groupSubjectIds[group]) {
    const subjectName = canonicalSubjectNames[subjectId];
    const subjectQuestions = resources.filter((resource) => resource.subject === subjectName).flatMap((resource) => resource.bank.questions ?? []);
    const uniqueMcq = new Set(subjectQuestions.filter((question) => question.type === "MCQ").map((question) => (question.promptBn ?? question.prompt).toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim()));
    const uniqueCq = new Set(subjectQuestions.filter((question) => question.type === "CQ" && (question.category === "Board-style" || question.category === "College-standard")).map((question) => (question.promptBn ?? question.prompt).toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim()));
    if (subjectId !== "english" && uniqueMcq.size < examSystemValidation.fullPaper.mcq) issues.push(`${group}/${subjectName}: fewer than 30 unique MCQs for a full model test`);
    if (subjectId !== "english" && uniqueCq.size < examSystemValidation.fullPaper.cq) issues.push(`${group}/${subjectName}: fewer than 7 unique CQs for a full model test`);
  }
  resources.forEach((resource) => {
    const label = `${group}/${resource.subject}/${resource.unit}`;
    const questions = resource.bank.questions ?? [];
    const normalizedPrompts = questions.map((question) => (question.promptBn ?? question.prompt).toLocaleLowerCase("bn-BD").replace(/[^\p{L}\p{N}]+/gu, " ").trim());
    if ((resource.lessonDetails?.length ?? 0) < 7) issues.push(`${label}: fewer than 7 detailed lessons`);
    if (resource.lessonDetails?.some((lesson) => !lesson.workedSnapshot || !lesson.practicePrompt || !lesson.answerCheck || !lesson.recallQuestions?.length || !lesson.commonTrap || !lesson.stretchPrompt)) issues.push(`${label}: incomplete lesson practice loop`);
    if (resource.lessonDetails?.some((lesson) => !lesson.foundation?.question?.trim() || !lesson.foundation?.answer?.trim())) issues.push(`${label}: lesson is missing its basic foundation explanation`);
    if (resource.lessonDetails?.some((lesson) => !lesson.advanced?.focus?.trim() || !lesson.advanced?.explanation?.trim() || !lesson.advanced?.transfer?.trim())) issues.push(`${label}: lesson is missing its advanced transfer layer`);
    if (resource.lessonDetails?.some((lesson) => lesson.foundation!.answer.trim().length < 70 || lesson.advanced!.explanation.trim().length < 70)) issues.push(`${label}: foundation or advanced explanation is too thin`);
    if (resource.lessonDetails?.some((lesson) => {
      const worked = lesson.workedSnapshot?.trim();
      const practice = lesson.practicePrompt?.trim();
      const stretch = lesson.stretchPrompt?.trim();
      return Boolean(worked && practice && stretch && (worked === practice || practice === stretch));
    })) issues.push(`${label}: worked example and student tasks are mechanically repeated`);
    if (resource.notes.length < 4) issues.push(`${label}: fewer than 4 unique chapter-note sections in addition to lessons and toolkits`);
    if (questions.length < 32) issues.push(`${label}: fewer than 32 chapter-specific questions`);
    const typeCounts = {
      MCQ: questions.filter((question) => question.type === "MCQ").length,
      CQ: questions.filter((question) => question.type === "CQ").length,
      Written: questions.filter((question) => question.type === "Written").length,
    };
    if (resource.subject === "English") {
      if (typeCounts.Written < 100) issues.push(`${label}: fewer than 100 paper-specific English tasks`);
    } else {
      if (typeCounts.MCQ < 100) issues.push(`${label}: fewer than 100 chapter-specific MCQs`);
      if (typeCounts.CQ < 50) issues.push(`${label}: fewer than 50 chapter-specific CQs`);
      if (typeCounts.Written < 60) issues.push(`${label}: fewer than 60 chapter-specific written questions`);
    }
    if (new Set(normalizedPrompts).size !== questions.length) issues.push(`${label}: duplicate question prompts`);
    const mcqAnswerPositions = new Set(questions.filter((question) => question.type === "MCQ").map((question) => question.correctIndex));
    if (resource.subject !== "English" && [0, 1, 2, 3].some((position) => !mcqAnswerPositions.has(position))) issues.push(`${label}: MCQ answer positions are not balanced`);
    const requiredTypes = resource.subject === "English" ? ["Written"] as const : ["MCQ", "CQ", "Written"] as const;
    for (const type of requiredTypes) if (!questions.some((question) => question.type === type)) issues.push(`${label}: missing ${type}`);
    const requiredCategories = resource.subject === "English" ? ["Application", "Board-style", "College-standard"] as const : ["Concept", "Application", "Board-style", "College-standard"] as const;
    for (const category of requiredCategories) if (!questions.some((question) => question.category === category)) issues.push(`${label}: missing ${category}`);
    if (!resource.guide || !resource.worked || !resource.cq || !resource.examToolkit) issues.push(`${label}: incomplete study package`);
    if (!resource.materialPack || resource.materialPack.conceptNotes.length < 4 || resource.materialPack.workedAnswers.length < 2 || resource.materialPack.selfCheck.length < 5) issues.push(`${label}: material-type note pack is incomplete`);
    if (resource.materialPack?.conceptNotes.some((item) => item.explanation.trim().length < 80 || item.example.trim().length < 60)) issues.push(`${label}: material concept explanation is too thin`);
    if (resource.materialPack?.workedAnswers.some((item) => item.steps.length < 4 || item.answer.trim().length < 100)) issues.push(`${label}: worked material answer is incomplete`);
    if (resource.materialPack && (resource.materialPack.fullCq.parts.length !== 4 || resource.materialPack.fullCq.parts.reduce((sum,part)=>sum+part.marks,0) !== 10 || resource.materialPack.fullCq.parts.some((part)=>part.answer.trim().length < part.marks*15) || resource.materialPack.fullCq.parts.reduce((sum,part)=>sum+part.answer.trim().length,0) < 220)) issues.push(`${label}: material assessment does not provide a complete mark-scaled answer`);
    if (resource.masteryPlan?.length !== 7 || resource.masteryPlan.some((day) => day.tasks.length < 3 || !day.output || day.minutes < 30)) issues.push(`${label}: incomplete seven-day mastery plan`);
    if (resource.examinerRubric?.length !== 6 || resource.examinerRubric.some((row) => !row.mustShow || !row.sentenceStart || !row.losesMarks)) issues.push(`${label}: incomplete examiner command-word rubric`);
    if (questions.some((question) => question.type !== "MCQ" && !(resource.subject === "English" ? question.modelAnswer && question.markingPoints?.length : question.modelAnswerBn && question.markingPointsBn?.length))) issues.push(`${label}: incomplete model-answer support`);
    const mcqQuestions = questions.filter((question) => question.type === "MCQ");
    if (mcqQuestions.some((question) => question.optionsBn?.length !== 4 || question.correctIndex === undefined || question.correctIndex < 0 || question.correctIndex > 3)) issues.push(`${label}: MCQ must have four options and one valid answer index`);
    if (mcqQuestions.some((question) => !(resource.subject === "English" ? question.answerGuide : question.answerGuideBn)?.trim())) issues.push(`${label}: MCQ explanation is missing`);
    if (questions.some((question) => question.requiresVisual && !question.visual)) issues.push(`${label}: a visual-dependent question is missing its visual`);
    if (questions.some((question) => {
      const visual = question.visual;
      if (!visual) return false;
      if (!visual.title.trim() || !visual.caption.trim() || !visual.alt.trim()) return true;
      if (visual.kind === "table") return !visual.headers?.length || !visual.rows?.length || visual.rows.some((row) => row.length !== visual.headers!.length);
      if (visual.kind === "flow") return (visual.steps?.length ?? 0) < 2;
      if (visual.kind === "graph") return (visual.points?.length ?? 0) < 2 || !visual.xLabel?.trim() || !visual.yLabel?.trim();
      return !visual.src?.trim();
    })) issues.push(`${label}: question visual has incomplete accessible data`);
    const cqQuestions = questions.filter((question) => question.type === "CQ");
    if (cqQuestions.some((question) => question.marks !== 10)) issues.push(`${label}: CQ is not configured for 10 marks`);
    if (cqQuestions.some((question) => {
      const points = resource.subject === "English" ? question.markingPoints : question.markingPointsBn;
      return points?.length !== 4 || markingTotal(points) !== 10;
    })) issues.push(`${label}: CQ marking guide does not contain four parts totalling 10`);
    if (cqQuestions.some((question) => {
      const answer = resource.subject === "English" ? question.modelAnswer : question.modelAnswerBn;
      return resource.subject === "English"
        ? !answer || !["Knowledge (1)", "Comprehension (2)", "Application (3)", "Higher order (4)"].every((part) => answer.includes(part))
        : !answer || !["ক.", "খ.", "গ.", "ঘ."].every((part) => answer.includes(part));
    })) issues.push(`${label}: CQ model answer is not visibly divided into all four scoring parts`);
    if (resource.subject === "English" && questions.some((question) => !question.prompt.trim() || question.promptBn?.trim())) issues.push(`${label}: English question language policy is inconsistent`);
    if (resource.subject !== "English" && questions.some((question) => !question.promptBn?.trim())) issues.push(`${label}: Bangla-medium question is missing Bangla text`);
    if (!resource.review || resource.review.sourceIds.length !== officialAcademicSources.entries.length) issues.push(`${label}: incomplete official source traceability`);
    if (!resource.review?.nctbComparison || Object.keys(resource.review.nctbComparison).length < 12) issues.push(`${label}: incomplete NCTB comparison record`);
    const comparison = resource.review?.nctbComparison;
    const comparisonEntries = comparison ? [comparison.officialSubject, comparison.officialPaper, comparison.officialChapterTitle, comparison.chapterSequence, comparison.syllabusYear, comparison.applicableEdition, comparison.publisher, comparison.approvalEvidence, comparison.textbookStartPage, comparison.textbookEndPage] : [];
    const comparisonComplete = comparisonEntries.length === 10 && comparisonEntries.every((entry) => entry.status === "verified" && entry.value !== null && Boolean(entry.sourceId)) && Boolean(comparison?.comparedBy) && Boolean(comparison?.comparedOn);
    if (resource.review?.status === "reviewed" && !comparisonComplete) issues.push(`${label}: reviewed status without complete direct NCTB comparison`);
    if (resource.review?.status === "reviewed" && (!resource.review.chapterSequenceVerified || resource.review.reviewerStatus !== "signed-off" || !resource.review.reviewerName || !resource.review.reviewerRole || !resource.review.reviewDate || Object.values(resource.review.checks).some((status) => status === "under-review") || Object.values(resource.review.contentChecks).some((status) => status === "under-review"))) issues.push(`${label}: reviewed status without complete evidence and named reviewer sign-off`);
    if (!resource.review?.checks || resource.review.checks.sourceTraceability !== "verified") issues.push(`${label}: incomplete verification checklist`);
    if (!resource.review?.contentChecks || resource.review.contentChecks.factsDefinitionsTerminology !== "under-review" || resource.review.contentChecks.mcqAnswersAndExplanations !== "under-review" || resource.review.contentChecks.cqMarkDistribution !== "under-review" || resource.review.contentChecks.modelAnswerDepth !== "under-review" || resource.review.contentChecks.finalReviewerDeclaration !== "under-review") issues.push(`${label}: subject-specialist checklist is incomplete or overstates approval`);
    if (resource.subject === "English" && resource.review?.contentChecks.englishLanguageAndSourceText !== "under-review") issues.push(`${label}: English language and source-text review is not pending`);
    if (!resource.review?.recordId || resource.review.reviewerStatus !== "unassigned" || resource.review.reviewerName !== null || resource.review.reviewerRole !== null || resource.review.reviewDate !== null || !Array.isArray(resource.review.supportingGuideReferences) || resource.review.blockingReasons.length !== 4 || resource.review.blockingReasonsBn.length !== 4 || !resource.review.evidenceNoteBn || !resource.review.nextActionBn) issues.push(`${label}: chapter review record is incomplete or overstates sign-off`);
    if (questions.some((question) => question.sourceStatus !== "authored-board-pattern")) issues.push(`${label}: question provenance is not explicit`);
  });
  const coverageRecords = contentCoverageManifest[group];
  if (coverageRecords.length !== resources.length) issues.push(`${group}: content coverage manifest is incomplete`);
  if (coverageRecords.some((record) => record.lessons < 7 || record.notes < 4 || record.mcq + record.cq + record.written < 32 || record.noteModes.length !== 3 || !record.printableBook)) issues.push(`${group}: content coverage manifest overstates learning-pack readiness`);
  if (groupSubjectIds[group].some((subjectId) => chaptersBySubject[subjectId].some((chapter) => chapter.status !== "ready" || chapter.progress !== 100))) issues.push(`${group}: chapter content readiness is stale`);
  return issues;
});

const uniqueCurriculumSubjectIds = new Set(Object.values(curriculumCoverageRegistry.groups).flatMap((group) => group.subjects.map((subject) => subject.id)));
const registeredCurriculumChapters = Object.values(curriculumCoverageRegistry.groups).reduce((total, group) => total + group.chapterRecords, 0);
if (uniqueCurriculumSubjectIds.size !== curriculumCoverageRegistry.totalUniqueSubjects) academicDatabaseIssues.push("curriculum registry unique-subject total is stale");
if (registeredCurriculumChapters !== curriculumCoverageRegistry.totalChapterRecords) academicDatabaseIssues.push("curriculum registry total chapter count is stale");
const ledgerSubjectIds = new Set(curriculumVerificationLedger.subjects.map((subject) => subject.id));
if (ledgerSubjectIds.size !== curriculumVerificationLedger.summary.subjectsTraced || [...uniqueCurriculumSubjectIds].some((id) => !ledgerSubjectIds.has(id))) academicDatabaseIssues.push("curriculum verification ledger does not cover every unique subject");
if (curriculumVerificationLedger.subjects.filter((subject) => subject.subjectPresence === "verified").length !== curriculumVerificationLedger.summary.officialSubjectListingsConfirmed) academicDatabaseIssues.push("official subject-listing verification total is stale");
if (curriculumVerificationLedger.subjects.filter((subject) => subject.catalogueEvidence === "official-core-textbook").length !== curriculumVerificationLedger.summary.officialCoreTextbooksLinked) academicDatabaseIssues.push("official textbook audit total is stale");
if (curriculumVerificationLedger.subjects.filter((subject) => subject.editionReview === "under-comparison").length !== curriculumVerificationLedger.summary.electiveSyllabusReviewsRemaining) academicDatabaseIssues.push("elective edition-review total is stale");
if (curriculumVerificationLedger.subjects.some((subject) => subject.catalogueEvidence === "elective-curriculum"
  ? subject.paperMapping !== "curriculum-located" || subject.chapterSequence !== "under-comparison"
  : subject.paperMapping !== "pending" || subject.chapterSequence !== "pending")) academicDatabaseIssues.push("subject ledger mapping stage is inconsistent");
if (academicReviewGate.totalChapterRecords !== curriculumCoverageRegistry.totalChapterRecords || academicReviewGate.signedOffChapterRecords + academicReviewGate.pendingChapterRecords !== academicReviewGate.totalChapterRecords) academicDatabaseIssues.push("academic review gate totals are stale");
if (academicReviewGate.checks.some((check) => check.status !== "pending")) academicDatabaseIssues.push("academic review gate overstates reviewer sign-off");
if (academicReviewGate.reviewerRoles.length !== curriculumCoverageRegistry.totalUniqueSubjects) academicDatabaseIssues.push("academic reviewer roster does not cover every subject");
if (questionProvenancePolicy.authenticPastBoardCount !== 0) academicDatabaseIssues.push("uncited previous-board questions are being claimed");
if (previousBoardArchive.records.length !== questionProvenancePolicy.authenticPastBoardCount) academicDatabaseIssues.push("previous-board archive and provenance count disagree");
if (previousBoardArchive.records.some((record) => previousBoardArchive.requiredFields.some((field) => !record[field as keyof PreviousBoardQuestion]))) academicDatabaseIssues.push("previous-board archive contains incomplete citations");
if (boardSourceIntakeRegistry.sources.length !== boardSourceIntakeRegistry.summary.sourcesChecked) academicDatabaseIssues.push("board-source intake summary is stale");
if (boardSourceIntakeRegistry.sources.filter((source) => source.paperLocated).length !== boardSourceIntakeRegistry.summary.authenticPapersLocated) academicDatabaseIssues.push("board-source paper count is stale");
if (boardSourceIntakeRegistry.summary.publishedQuestions !== previousBoardArchive.records.length) academicDatabaseIssues.push("board-source publication count disagrees with archive");
if (boardArchiveCoverage.boards.length !== previousBoardArchive.boards.length) academicDatabaseIssues.push("board archive coverage does not include every supported board");
if (boardArchiveCoverage.verifiedQuestionTotal !== previousBoardArchive.records.length) academicDatabaseIssues.push("board coverage verified total disagrees with archive");
if (priorityCompletionLedger.internal.some((item) => item.status !== "complete")) academicDatabaseIssues.push("internal priority ledger contains unfinished product work");
if (priorityCompletionLedger.external.some((item) => String(item.status) === "complete")) academicDatabaseIssues.push("external priority ledger overstates evidence-gated completion");
if (boardArchiveCoverage.boards.filter((board) => board.portalStatus === "checked").some((board) => board.paperStatus !== "not-located")) academicDatabaseIssues.push("board portal audit overstates paper evidence");

if (academicDatabaseIssues.length) {
  throw new Error(`Academic database integrity check failed:\n${academicDatabaseIssues.join("\n")}`);
}
