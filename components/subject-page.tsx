"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { flushSync } from "react-dom";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Banknote, BookMarked, BookOpen, Brain, BriefcaseBusiness, Calculator, CheckCircle2, ChevronRight, Clock3, Code2, FileDown, FileText, Globe2, Landmark, Languages, Lightbulb, PanelLeftClose, PanelLeftOpen, PenLine, Scale, ScrollText, Sparkles, Target } from "lucide-react";
import { chaptersBySubject, completeExamLibraryByGroup, englishMarksDistribution2026, subjectsByGroup } from "@/lib/academic-data";

type StudyMode = "learn" | "notes" | "practice" | "revision";
type NoteMode = "detailed" | "quick" | "lastMinute";

const subjectIdentity = {
  bangla: { accent:"#ffb05c", accent2:"#f06a6a", ink:"#35191a", Icon:BookMarked, label:"সাহিত্য · ভাষা · প্রকাশ", motif:"অক্ষর থেকে আত্মপ্রকাশ" },
  english: { accent:"#a98cff", accent2:"#63d3ff", ink:"#151737", Icon:Languages, label:"LANGUAGE · LITERATURE · WRITING", motif:"Read clearly. Write confidently." },
  ict: { accent:"#58e0c1", accent2:"#5fa8ff", ink:"#09222a", Icon:Code2, label:"প্রযুক্তি · যুক্তি · নির্মাণ", motif:"ধারণা বোঝো, প্রযুক্তি তৈরি করো" },
  accounting: { accent:"#f0c65d", accent2:"#67d6af", ink:"#12291f", Icon:Calculator, label:"হিসাব · বিশ্লেষণ · নির্ভুলতা", motif:"প্রতিটি সংখ্যার পেছনের গল্প" },
  finance: { accent:"#76b9ff", accent2:"#f4cd68", ink:"#10233c", Icon:Banknote, label:"অর্থ · সিদ্ধান্ত · ভবিষ্যৎ", motif:"আজকের সিদ্ধান্ত, আগামীর মূল্য" },
  business: { accent:"#ff9e69", accent2:"#ffd56b", ink:"#382116", Icon:BriefcaseBusiness, label:"উদ্যোগ · ব্যবস্থাপনা · নেতৃত্ব", motif:"ভাবনা থেকে কার্যকর প্রতিষ্ঠান" },
  economics: { accent:"#66dfb2", accent2:"#f2c968", ink:"#102d27", Icon:Globe2, label:"চাহিদা · বাজার · নীতি", motif:"সিদ্ধান্ত কীভাবে অর্থনীতিকে বদলায়" },
  civics: { accent:"#83b7ff", accent2:"#f0c66a", ink:"#17233b", Icon:Scale, label:"রাষ্ট্র · অধিকার · সুশাসন", motif:"সচেতন নাগরিক, দায়িত্বশীল রাষ্ট্র" },
  history: { accent:"#e8b873", accent2:"#e87867", ink:"#37251c", Icon:ScrollText, label:"কালক্রম · প্রমাণ · ব্যাখ্যা", motif:"অতীতের সূত্রে বর্তমানকে বোঝো" },
  logic: { accent:"#be9bff", accent2:"#67d5dc", ink:"#221b3c", Icon:Brain, label:"যুক্তি · বিশ্লেষণ · সিদ্ধান্ত", motif:"ভাবনার কাঠামো দৃশ্যমান করো" },
  islamic_history: { accent:"#e6c06f", accent2:"#70c9a8", ink:"#2d2718", Icon:Landmark, label:"কালক্রম · সভ্যতা · মূল্যবোধ", motif:"ঘটনা, প্রেক্ষাপট ও প্রভাব একসঙ্গে" },
  statistics: { accent:"#65c7cf", accent2:"#8a9cf5", ink:"#102a35", Icon:Calculator, label:"তথ্য · পরিমাপ · বিশ্লেষণ", motif:"সংখ্যা থেকে অর্থপূর্ণ সিদ্ধান্ত" },
  geography: { accent:"#62d2a2", accent2:"#6fa8ff", ink:"#102d2a", Icon:Globe2, label:"স্থান · পরিবেশ · মানচিত্র", motif:"পৃথিবীর প্রক্রিয়া থেকে মানুষের সিদ্ধান্ত" },
} as const;

const noteBlueprints: Record<string,{label:string; promise:string; steps:[string,string][]}> = {
  accounting:{label:"ACCOUNTING WORKFLOW",promise:"লেনদেন থেকে চূড়ান্ত বিবরণী—প্রতিটি অঙ্কের কারণ, কার্য ও যাচাই একই ধারায়।",steps:[["বোঝো","লেনদেন, হিসাবের ধরন ও ডেবিট–ক্রেডিটের কারণ"],["সাজাও","জাবেদা, খতিয়ান, ছক বা বিবরণীর সঠিক ফরম্যাট"],["সমাধান করো","প্রতিটি হিসাব আলাদা কার্যসহ ধাপে ধাপে"],["মিলিয়ে দেখো","জের, সমীকরণ, পার্শ্ব-হিসাব ও চূড়ান্ত ফল যাচাই"]]},
  economics:{label:"ECONOMICS WORKFLOW",promise:"ধারণা, শর্ত, সূচি, সূত্র ও রেখাচিত্র—তারপর বাংলাদেশের বাস্তব প্রয়োগ।",steps:[["ধারণা","চলক ও ‘অন্যান্য অবস্থা অপরিবর্তিত’ শর্ত"],["হিসাব","সূত্র, একক ও সারণিতে মান বসানো"],["রেখাচিত্র","অক্ষ, রেখা, তীর ও ভারসাম্যবিন্দু"],["ব্যাখ্যা","কারণ–ফল ও বাংলাদেশ প্রেক্ষাপট"]]},
  logic:{label:"LOGIC WORKFLOW",promise:"নিয়ম মুখস্থ নয়—যুক্তির রূপ দেখা, পরীক্ষা করা এবং ভুলটি প্রমাণ করা।",steps:[["চেনো","পদ, বাক্য বা যুক্তির সঠিক রূপ"],["নিয়ম","প্রযোজ্য সূত্র ও শর্ত"],["পরীক্ষা","উদাহরণ ও বিপরীত উদাহরণ"],["সিদ্ধান্ত","বৈধতা এবং ভুলের সুনির্দিষ্ট কারণ"]]},
  english:{label:"ENGLISH STUDY WORKFLOW",promise:"Read for meaning, notice the language, practise the task, then edit like an examiner.",steps:[["Read","Context, purpose and key evidence"],["Notice","Vocabulary, grammar and structure"],["Write","A guided response using the pattern"],["Edit","Accuracy, clarity, cohesion and task completion"]]},
  bangla:{label:"BANGLA STUDY WORKFLOW",promise:"পাঠের অর্থ, ভাষা ও প্রেক্ষাপট বুঝে নিজের ভাষায় পরীক্ষাযোগ্য উত্তর তৈরি করো।",steps:[["পাঠ বোঝো","বক্তব্য, চরিত্র, প্রসঙ্গ ও মূল সুর"],["ভাষা দেখো","শব্দ, অলংকার, রীতি ও উদ্ধৃতির কাজ"],["যোগসূত্র","পাঠের প্রমাণের সঙ্গে প্রশ্ন মিলাও"],["উত্তর লেখো","ব্যাখ্যা, প্রমাণ, বিশ্লেষণ ও সিদ্ধান্ত"]]},
  ict:{label:"ICT WORKFLOW",promise:"ধারণা থেকে চিত্র, নিয়ম, কোড বা গণনা—প্রতিটি ধাপ হাতে-কলমে।",steps:[["Concept","পরিভাষা ও কার্যপ্রবাহ"],["Visualise","চিত্র, সারণি বা সত্যক সারণি"],["Build","রূপান্তর, কোড বা সমাধান"],["Debug","আউটপুট ও ভুলের কারণ যাচাই"]]},
  statistics:{label:"STATISTICS WORKFLOW",promise:"তথ্য সংগ্রহ থেকে সারণি, সূত্র, হিসাব, ব্যাখ্যা ও সিদ্ধান্ত—প্রতিটি ধাপ যাচাইসহ।",steps:[["তথ্য বোঝো","চলক, পরিমাপের স্কেল, উৎস ও একক"],["সাজাও","শ্রেণিবিভাগ, সারণি, রেখাচিত্র ও প্রয়োজনীয় প্রতীক"],["হিসাব করো","সূত্র লিখে মান বসানো ও ধাপে ধাপে সমাধান"],["ব্যাখ্যা করো","ফলটির অর্থ, সীমাবদ্ধতা ও বাস্তব সিদ্ধান্ত"]]},
  geography:{label:"GEOGRAPHY WORKFLOW",promise:"স্থান ও প্রক্রিয়া চেনো, চিত্র–মানচিত্রে দেখাও, তারপর মানুষ ও পরিবেশের ফল ব্যাখ্যা করো।",steps:[["Locate","স্থান, অঞ্চল, scale ও দিক"],["Process","কারণ, ধাপ ও ভৌগোলিক প্রক্রিয়া"],["Visualise","মানচিত্র, cross-section, graph বা সারণি"],["Evaluate","বাংলাদেশ প্রেক্ষাপট, ফল ও ব্যবস্থাপনা"]]},
  finance:{label:"FINANCE DECISION WORKFLOW",promise:"সূত্রের ফলই শেষ কথা নয়—সময়, নগদপ্রবাহ, ঝুঁকি ও সিদ্ধান্তের যুক্তি একই পাতায়।",steps:[["তথ্য সাজাও","সময়, হার, নগদপ্রবাহ ও প্রয়োজনীয় চলক"],["হিসাব করো","সূত্র, মান প্রতিস্থাপন, একক ও কার্যপ্রণালি"],["তুলনা করো","ব্যয়, আয়, ঝুঁকি, তারল্য ও নিয়ন্ত্রণ"],["সিদ্ধান্ত দাও","প্রমাণ, শর্ত ও বিকল্পের সীমাবদ্ধতা"]]},
  business:{label:"BUSINESS CASE WORKFLOW",promise:"সংজ্ঞা থেকে বাস্তব ব্যবসায়িক সিদ্ধান্ত—নীতি, ঘটনা, বিশ্লেষণ ও সুপারিশ পরিষ্কারভাবে।",steps:[["চিহ্নিত করো","ঘটনার মূল সমস্যা, ব্যক্তি ও প্রতিষ্ঠানের লক্ষ্য"],["নীতি মেলাও","প্রযোজ্য ধারণা, নীতি বা ব্যবস্থাপনা কাজ"],["বিশ্লেষণ করো","কারণ, প্রভাব, ঝুঁকি ও বিকল্প"],["সুপারিশ দাও","বাস্তব পদক্ষেপ, দায়িত্ব ও প্রত্যাশিত ফল"]]},
  civics:{label:"CIVICS ANALYSIS WORKFLOW",promise:"রাষ্ট্রবিজ্ঞানের পরিভাষা, প্রতিষ্ঠান, অধিকার ও বাস্তব ঘটনার মধ্যে সঠিক সম্পর্ক তৈরি করো।",steps:[["ধারণা","রাষ্ট্র, সরকার, নাগরিকতা ও সুশাসনের নির্ভুল অর্থ"],["প্রতিষ্ঠান","ক্ষমতা, দায়িত্ব, সীমা ও পারস্পরিক নিয়ন্ত্রণ"],["প্রয়োগ","উদ্দীপকের তথ্যের সঙ্গে সাংবিধানিক ধারণা মিলানো"],["মূল্যায়ন","আইন, অধিকার, দায়িত্ব ও জনস্বার্থের ভারসাম্য"]]},
  history:{label:"HISTORY EVIDENCE WORKFLOW",promise:"তারিখ মুখস্থ নয়—কালক্রম, কারণ, উৎস, ঘটনা ও দীর্ঘমেয়াদি তাৎপর্য একসঙ্গে বোঝো।",steps:[["কালক্রম","সময়, স্থান, ব্যক্তি ও ঘটনার সঠিক ক্রম"],["কারণ","পটভূমি, তাৎক্ষণিক কারণ ও সূত্রপাত"],["প্রমাণ","উৎস, দৃষ্টিভঙ্গি ও নির্ভরযোগ্যতা"],["মূল্যায়ন","তাৎক্ষণিক ফল ও দীর্ঘমেয়াদি গুরুত্ব"]]},
  islamic_history:{label:"CIVILISATION STUDY WORKFLOW",promise:"ঘটনা ও শাসকের তালিকা নয়—প্রেক্ষাপট, প্রতিষ্ঠান, জ্ঞানচর্চা ও সভ্যতার প্রভাব বিশ্লেষণ করো।",steps:[["প্রেক্ষাপট","সময়, অঞ্চল, সমাজ ও রাজনৈতিক অবস্থা"],["ঘটনা","কারণ, নেতৃত্ব, ধাপ ও তাৎক্ষণিক ফল"],["সভ্যতা","প্রশাসন, শিক্ষা, বিজ্ঞান, শিল্প ও সংস্কৃতি"],["মূল্যায়ন","অবদান, সীমাবদ্ধতা ও দীর্ঘমেয়াদি প্রভাব"]]},
};

const defaultNoteBlueprint = {label:"SMART NOTE WORKFLOW",promise:"ধারণা বোঝো, উদাহরণে দেখো, নিজে প্রয়োগ করো এবং না দেখে যাচাই করো।",steps:[["বোঝো","মূল ধারণা ও প্রয়োজনীয় পরিভাষা"],["দেখো","প্রেক্ষাপট ও সমাধানসহ উদাহরণ"],["প্রয়োগ করো","নিজে উত্তর বা বিশ্লেষণ তৈরি"],["যাচাই করো","সাধারণ ভুল ও পরীক্ষার মানদণ্ড"]] as [string,string][]};

const banglaLiteratureClinics: Record<string,{
  outcomes:string[];
  precheck:{question:string;answer:string}[];
  glossary:{term:string;meaning:string}[];
}> = {
  "Aparichita": {
    outcomes:["অনুপমের আত্মসমালোচনা ও ব্যক্তিত্বের সীমাবদ্ধতা ব্যাখ্যা করা","পণপ্রথা, লোভ ও আত্মমর্যাদার সংঘাত পাঠের ঘটনা দিয়ে বিশ্লেষণ করা","কল্যাণীর সিদ্ধান্তে শিক্ষিত নারীর স্বাধীন সত্তা ও দেশচেতনা শনাক্ত করা"],
    precheck:[
      {question:"অনুপমের বাবা কী করে জীবিকা নির্বাহ করতেন?",answer:"ওকালতি। এই তথ্য অনুপমের পারিবারিক অবস্থান ও পরবর্তী আর্থসামাজিক মানসিকতা বুঝতে সাহায্য করে।"},
      {question:"অনুপমের বয়স কত?",answer:"সাতাশ বছর। গল্পের শুরুতেই বয়স ও আত্মবর্ণনা তার পরিণত বয়সের সঙ্গে সিদ্ধান্তহীনতার বৈপরীত্য তৈরি করে।"},
      {question:"গয়না যাচাইয়ের ঘটনাটি কেন গল্পের turning point?",answer:"গয়না খাঁটি কি না—এটি মূল বিষয় নয়; অবিশ্বাস ও অপমানের বিরুদ্ধে শম্ভুনাথের আত্মমর্যাদাপূর্ণ প্রত্যাখ্যান এখানেই বিবাহ ভেঙে দেয়।"},
    ],
    glossary:[
      {term:"ফল্গু",meaning:"উপরিভাগে বালু, ভেতরে জলপ্রবাহ—মামার গোপন কিন্তু সর্বগ্রাসী নিয়ন্ত্রণ বোঝাতে ব্যবহৃত উপমা।"},
      {term:"অন্নপূর্ণা",meaning:"অন্নে পরিপূর্ণা দেবী; অনুপমের আত্মব্যঙ্গ ও বাহ্যিক সৌন্দর্যের বর্ণনায় সাংস্কৃতিক অনুষঙ্গ।"},
      {term:"গণ্ডূষ",meaning:"একমুখ বা এক কোষ জল; প্রসঙ্গ অনুযায়ী পরিমাণ ও ব্যবহারের অর্থ ধরতে হবে।"},
      {term:"অন্তঃপুর",meaning:"বাড়ির ভেতরের নারীদের আবাসভাগ; তৎকালীন সামাজিক পরিসর বোঝায়।"},
      {term:"উমেদারি",meaning:"চাকরি বা অনুগ্রহের আশায় কারও কাছে ধরনা দেওয়া।"},
      {term:"স্বয়ংবরা",meaning:"যে নারী নিজের জীবনসঙ্গী নিজে নির্বাচন করে; নারীর সিদ্ধান্তক্ষমতার সাংস্কৃতিক ধারণা।"},
    ],
  },
  "Manab-Kalyan": {
    outcomes:["দান, করুণা ও মর্যাদাসম্পন্ন মানব-কল্যাণের পার্থক্য নির্ণয় করা","মানুষের সম্ভাবনা বিকাশে সমাজ ও রাষ্ট্রের দায়িত্ব ব্যাখ্যা করা","স্বনির্ভরতা, মুক্তবুদ্ধি ও মানবিক চেতনার সম্পর্ক বাস্তব উদাহরণে প্রয়োগ করা"],
    precheck:[
      {question:"মানব-কল্যাণ কখন তার প্রকৃত অর্থে পৌঁছে?",answer:"যখন সাহায্য মানুষের সম্ভাবনা বিকাশের সুযোগ দেয় এবং তাকে মর্যাদাসহ নিজের পায়ে দাঁড়াতে সক্ষম করে।"},
      {question:"Existentialism-এর মূল কথাটি এখানে কেন প্রাসঙ্গিক?",answer:"ব্যক্তির অস্তিত্ব ও স্বাধীন সত্তাকে স্বীকৃতি না দিলে সমষ্টিগত কল্যাণও অর্থপূর্ণ হয় না।"},
      {question:"এককালীন দান ও দীর্ঘমেয়াদি কল্যাণের প্রধান পার্থক্য কী?",answer:"এককালীন দান তাৎক্ষণিক অভাব কমায়; শিক্ষা, দক্ষতা ও ন্যায্য সুযোগ মানুষের সক্ষমতা ও স্বনির্ভরতা তৈরি করে।"},
    ],
    glossary:[
      {term:"অনুগৃহীত",meaning:"অন্যের অনুগ্রহ বা আনুকূল্য গ্রহণ করে উপকৃত ব্যক্তি; শব্দটির সঙ্গে নির্ভরতার দিকও জড়িত।"},
      {term:"মনীষা",meaning:"বুদ্ধি, মনন, প্রজ্ঞা ও সৃজনশীল চিন্তার সমন্বিত শক্তি।"},
      {term:"Rational",meaning:"বিচারবুদ্ধিসম্পন্ন, যুক্তিসংগত ও প্রমাণভিত্তিক।"},
      {term:"মুক্তবুদ্ধি",meaning:"সংকীর্ণতা, অন্ধ অনুকরণ ও গোঁড়ামি থেকে মুক্ত উদার বিচারবোধ।"},
      {term:"মানব-মর্যাদা",meaning:"মানুষকে করুণার বস্তু নয়, অধিকার ও সম্ভাবনাসম্পন্ন স্বাধীন সত্তা হিসেবে স্বীকার করা।"},
      {term:"স্বনির্ভরতা",meaning:"সহায়তার ওপর স্থায়ী নির্ভরতা নয়; নিজের সামর্থ্যে সিদ্ধান্ত ও জীবিকা পরিচালনার ক্ষমতা।"},
    ],
  },
};

function programmingCodeLab(chapterTitle:string, english:boolean, subjectId:string) {
  const accountingFormat = subjectId === "accounting";
  if (accountingFormat) {
    const examples = /Books of Accounts/i.test(chapterTitle) ? [
      {label:"জাবেদার পূর্ণ format",code:"Date | Particulars | L.F. | Debit (৳) | Credit (৳)\n-----|-------------|------|-----------|-----------\n2026 | Cash A/C Dr.      |      | 100,000   |\nJan 1|   Capital A/C     |      |           | 100,000\n     | (Business started with cash)",trace:"প্রথমে debit account, পরের লাইনে indentation-সহ credit account; amount ও narration বাদ দেবে না।"},
      {label:"খতিয়ান posting",code:"Cash Account\nDr.                                      Cr.\nDate | Particulars | J.F.| Amount || Date | Particulars | J.F.| Amount\nJan 1| Capital A/C | J-1 |100,000 || Jan 5| Furniture A/C| J-2 | 20,000",trace:"Journal-এর credit account Cash ledger-এর particulars-এ আসে; folio দিয়ে audit trail রাখো।"},
    ] : /Bank Reconciliation/i.test(chapterTitle) ? [
      {label:"Bank reconciliation format",code:"Balance as per adjusted Cash Book        ৳ xx\nAdd: Cheques issued but not presented     ৳ xx\nLess: Deposits not yet credited           ৳ xx\n                                          -----\nBalance as per Bank Statement             ৳ xx",trace:"Bank charge/direct deposit আগে cash book-এ adjust; timing difference-ই reconciliation-এ থাকবে।"},
      {label:"Direction test",code:"Item appears first where? → Which balance changed?\nIssued cheque not presented → Cash book ↓, Bank statement unchanged\nDeposit not credited        → Cash book ↑, Bank statement unchanged",trace:"মুখস্থ যোগ-বিয়োগ নয়; starting balance ধরে relative effect নির্ধারণ করো।"},
    ] : /Trial Balance/i.test(chapterTitle) ? [
      {label:"রেওয়ামিল format",code:"Account title              | Debit (৳) | Credit (৳)\nCash                        |  45,000   |\nPurchases                   |  80,000   |\nCapital                     |           | 100,000\nAccounts payable            |           |  25,000\n                            |-----------|-----------\nTotal                       | 125,000   | 125,000",trace:"Ledger balance-ই বসবে; transaction amount নয়। দুই total মিললেও error of principle থাকতে পারে।"},
    ] : /Cash Flow/i.test(chapterTitle) ? [
      {label:"Cash-flow statement skeleton",code:"A. Cash flow from operating activities      ৳ xx\nB. Cash flow from investing activities      ৳ xx\nC. Cash flow from financing activities      ৳ xx\nNet increase/(decrease) in cash              ৳ xx\nAdd: Opening cash and cash equivalents       ৳ xx\nClosing cash and cash equivalents            ৳ xx",trace:"A+B+C অবশ্যই net change; opening যোগ করে closing cash-এর সঙ্গে reconcile করো।"},
      {label:"Indirect operating section",code:"Net profit before tax                       ৳ xx\nAdd: Depreciation / non-cash expenses        ৳ xx\nOperating profit before WC changes           ৳ xx\nIncrease in receivables                     (৳xx)\nIncrease in payables                          ৳xx\nCash generated from operations               ৳xx",trace:"Current asset বাড়লে cash কমে; current liability বাড়লে cash বাড়ে—কারণসহ direction বোঝো।"},
    ] : /Non-profit/i.test(chapterTitle) ? [
      {label:"Subscription working",code:"Subscription received during the year       ৳ xx\nAdd: Closing outstanding                     ৳ xx\nAdd: Opening advance                         ৳ xx\nLess: Opening outstanding                   (৳xx)\nLess: Closing advance                       (৳xx)\nSubscription income                          ৳ xx",trace:"Cash received-কে accrual income-এ রূপান্তর; opening/closing due ও advance-এর দিক আলাদা।"},
      {label:"Income & Expenditure format",code:"Expenditure                         Income\nRevenue expenses      ৳ xx           Subscription income   ৳ xx\nDepreciation          ৳ xx           Other revenue income  ৳ xx\nSurplus (balancing)   ৳ xx",trace:"Capital receipt/payment নয়; current period-এর revenue items accrual basis-এ নাও।"},
    ] : /Partnership/i.test(chapterTitle) ? [
      {label:"Profit appropriation account",code:"Net profit before appropriation              ৳ xx\nLess: Interest on capital                     ৳ xx\nLess: Partners' salary/commission             ৳ xx\nAdd: Interest on drawings                     ৳ xx\nResidual profit shared in agreed ratio        ৳ xx",trace:"Interest on drawings firm-এর আয়; deed না থাকলে applicable default rules আলাদা করে যাচাই করো।"},
    ] : /Share Capital/i.test(chapterTitle) ? [
      {label:"Share issue flow",code:"Bank A/C Dr.                 [application cash]\n  Share Application A/C\nShare Application A/C Dr.\n  Share Capital A/C           [face value]\n  Securities Premium A/C     [premium, if due]",trace:"Cash received, amount due এবং transfer—তিন event আলাদা journal entry।"},
      {label:"Forfeiture and reissue check",code:"Maximum reissue discount ≤ forfeited amount on those shares\nCapital reserve = Forfeited amount − Reissue discount",trace:"অন্য forfeited share-এর balance ব্যবহার কোরো না; reissued shares-এর proportionate amount নাও।"},
    ] : /Inventory/i.test(chapterTitle) ? [
      {label:"Stores ledger",code:"Date | Receipts Qty×Rate=Amount | Issues Qty×Rate=Amount | Balance layers\nJan 1| 100×20=2,000           |                       | 100×20\nJan 5|  50×24=1,200           |                       | 100×20 + 50×24\nJan 8|                         | FIFO 120 units        | 30×24",trace:"FIFO-তে পুরোনো layer আগে; moving average-এ purchase-এর পরে নতুন rate হিসাব করো।"},
    ] : /Cost Accounting/i.test(chapterTitle) ? [
      {label:"Cost of production statement",code:"Direct materials used                         ৳ xx\nDirect labour                                  ৳ xx\nDirect expenses                                ৳ xx\nPrime cost                                     ৳ xx\nAdd: Factory overhead                          ৳ xx\nAdd: Opening WIP − Closing WIP                 ৳ xx\nFactory cost / Cost of production              ৳ xx",trace:"Selling ও general administration cost factory cost-এ নয়; WIP adjustment-এর direction দেখো।"},
    ] : /Worksheet/i.test(chapterTitle) ? [
      {label:"10-column worksheet route",code:"Unadjusted TB | Adjustments | Adjusted TB | Income Statement | Financial Position\n    Dr Cr      |    Dr Cr    |    Dr Cr    |      Dr Cr       |       Dr Cr",trace:"প্রতিটি adjustment-এর দুই অংশ; adjusted balance থেকে শেষ দুই statement column-এ একবার transfer।"},
    ] : [
      {label:"Income statement route",code:"Net sales\nLess: Cost of goods sold\nGross profit\nAdd: Other income\nLess: Operating expenses\nNet profit",trace:"প্রতিটি subtotal আলাদা দেখাও; adjustment-এর working note পাশে রাখো।"},
      {label:"Statement of financial position",code:"Assets\n  Non-current assets\n  Current assets\nEquity and liabilities\n  Owner's equity\n  Non-current liabilities\n  Current liabilities",trace:"Account balance শুধু বসাবে না—classification, deduction ও contra balance ঠিক রাখো।"},
    ];
    return {title:"হিসাবের ছক ও Working Note খাতা",intro:"ছকটি আগে খাতায় আঁকো, তারপর অঙ্ক বসাও। প্রতিটি subtotal, adjustment এবং cross-check দৃশ্যমান রাখলে final answer ভুল হলেও ধাপের নম্বর সুরক্ষিত থাকে।",examples};
  }
  if (subjectId === "finance") {
    const examples = /Time Value/i.test(chapterTitle) ? [
      {label:"Cash-flow timeline",code:"সময়       0        1        2        3\nCash flow (৳) -50,000   18,000   22,000   25,000\nDiscount rate = 10%\nPV = CFₜ ÷ (1+r)ᵗ",trace:"প্রতিটি cash flow-এর সময় আলাদা; সব প্রবাহকে একই সময়ে না এনে যোগ বা তুলনা কোরো না।"},
      {label:"Compound value",code:"P = ৳40,000, r = 8%, n = 3\nFV = P(1+r)ⁿ\n   = 40,000(1.08)³\n   = ৳50,388.48",trace:"8% কে 0.08 এবং বছরকে compounding period-এর সঙ্গে মিলিয়ে বসানো হয়েছে।"},
    ] : /Capital Budgeting/i.test(chapterTitle) ? [
      {label:"NPV working",code:"Initial outlay                         (৳100,000)\nPV of year 1–4 cash inflows              ৳118,600\nPV of terminal/salvage value               ৳4,300\nNet present value                         ৳22,900",trace:"NPV ধনাত্মক হলে value বাড়তে পারে; mutually exclusive project হলে শুধু positive হওয়া নয়—উচ্চতর NPV ও সীমাবদ্ধতা তুলনা করো।"},
      {label:"Relevant cash-flow checklist",code:"Include: initial cost, installation, working capital, after-tax operating CF, terminal CF\nExclude: sunk cost\nInclude: opportunity cost and side effects",trace:"Accounting profit নয়; incremental after-tax cash flow দিয়ে প্রকল্প বিচার করা হয়।"},
    ] : /Financial Analysis/i.test(chapterTitle) ? [
      {label:"Ratio decision sheet",code:"Current ratio = Current assets ÷ Current liabilities\nDebt ratio = Total debt ÷ Total assets\nNet profit margin = Net profit ÷ Sales × 100\nInventory turnover = COGS ÷ Average inventory",trace:"একটি ratio একা সিদ্ধান্ত দেয় না; সময়, industry benchmark এবং numerator–denominator-এর পরিবর্তন একসঙ্গে দেখো।"},
    ] : /Cost of Capital/i.test(chapterTitle) ? [
      {label:"WACC working",code:"Source      Weight    After-tax cost    Weighted cost\nDebt        0.40          7%                2.80%\nEquity      0.60         13%                7.80%\nWACC                                      10.60%",trace:"Weight-এর মোট 1.00; debt cost-এ প্রযোজ্য কর-প্রভাব এবং market/book value basis প্রশ্ন অনুযায়ী স্পষ্ট করো।"},
    ] : /Risk and Rate/i.test(chapterTitle) ? [
      {label:"Expected return and risk",code:"E(R) = ΣpᵢRᵢ\nVariance = Σpᵢ[Rᵢ−E(R)]²\nSD = √Variance\nCV = SD ÷ E(R)",trace:"ভিন্ন expected return-এর বিকল্প তুলনায় CV ব্যবহার করলে প্রতি একক return-এর risk দেখা যায়।"},
    ] : /Foreign Exchange/i.test(chapterTitle) ? [
      {label:"Exchange-rate working",code:"USD 1 = BDT 122.50\nInvoice = USD 8,000\nTaka required = 8,000 × 122.50 = BDT 980,000",trace:"Direct না indirect quotation আগে চেনো; buying/selling rate এবং charge প্রশ্নে যা দেওয়া আছে তাই ব্যবহার করো।"},
    ] : /Fire Insurance/i.test(chapterTitle) ? [
      {label:"Average clause",code:"Claim = Loss × (Sum insured ÷ Value at risk)\nLoss = ৳300,000\nSum insured = ৳600,000\nValue at risk = ৳900,000\nClaim = 300,000 × 600,000/900,000 = ৳200,000",trace:"Underinsurance থাকলে সম্পূর্ণ loss পেলেও পুরো ক্ষতিপূরণ নাও পাওয়া যেতে পারে; policy terms প্রশ্ন অনুযায়ী নাও।"},
    ] : [
      {label:"Decision matrix",code:"বিকল্প | সময়/মেয়াদ | প্রত্যক্ষ ব্যয় | নগদপ্রবাহ | ঝুঁকি | নিয়ন্ত্রণ/আইনি শর্ত\nA       |             |              |          |       |\nB       |             |              |          |       |",trace:"সংজ্ঞা লেখার পর পক্ষ, কার্যপ্রবাহ, সুবিধা–ঝুঁকি এবং পরিস্থিতির উপযোগিতা একই মানদণ্ডে তুলনা করো।"},
      {label:"Recommendation line",code:"প্রদত্ত লক্ষ্য ও সময় অনুযায়ী ___ অধিক উপযোগী, কারণ ___.\nতবে ___ ঝুঁকি/শর্ত থাকায় সিদ্ধান্তটি ___ ঘটলে পুনর্বিবেচনা করতে হবে।",trace:"শুধু ‘ভালো’ বা ‘লাভজনক’ নয়—প্রমাণ, শর্ত ও সীমাবদ্ধতা দৃশ্যমান রাখো।"},
    ];
    return {title:"Finance Calculation & Decision Sheet",intro:"সূত্রের আগে timeline বা decision condition সাজাও। হিসাবের পরে ফলটির আর্থিক অর্থ, ঝুঁকি এবং শর্ত লিখে তবেই সিদ্ধান্ত শেষ করো।",examples};
  }
  if (/Number Systems|Digital Devices/i.test(chapterTitle)) return {
    title:"রূপান্তর ও Logic খাতা",
    intro:"প্রতিটি ফলের আগে grouping, place value বা truth table দেখাও। ক্যালকুলেটর দিয়ে শুধু final answer মিলাবে—সমাধানের ধাপ বাদ দেবে না।",
    examples:[
      {label:"Binary → Decimal",code:"(101101)₂\n= 1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰\n= 32 + 0 + 8 + 4 + 0 + 1\n= (45)₁₀",trace:"ডান দিকের bit-এর power 0; বামে যেতে যেতে power এক করে বাড়ে।"},
      {label:"Binary → Hexadecimal",code:"(11010110)₂\n= 1101 0110\n= D    6\n= (D6)₁₆",trace:"ডান দিক থেকে 4 bit করে group; 1101=13=D এবং 0110=6।"},
      {label:"2's complement দিয়ে বিয়োগ",code:"  10110   (22)\n- 01101   (13)\n---------\n01101 invert = 10010\n+1            = 10011\n10110 + 10011 = 1 01001\ncarry বাদ → 01001 = 9",trace:"বিয়োগককে invert করে 1 যোগ; তারপর যোগফলের অতিরিক্ত carry বাদ দাও।"},
      {label:"Half adder truth table",code:"A B | S=A⊕B | C=A·B\n0 0 |    0    |   0\n0 1 |    1    |   0\n1 0 |    1    |   0\n1 1 |    0    |   1",trace:"Sum-এর জন্য XOR, Carry-এর জন্য AND। column heading না দিলে 01/10 output ভুল বোঝা যায়।"},
    ],
  };
  if (/Database/i.test(chapterTitle)) return {
    title:"Database ও SQL খাতা",
    intro:"প্রথমে table, field, data type ও key আঁকো; তারপর query লেখো। প্রতিটি SQL-এর পাশে expected rows কী হবে তা অনুমান করো।",
    examples:[
      {label:"Table design",code:"Student(\n  student_id INT PRIMARY KEY,\n  name VARCHAR(60) NOT NULL,\n  class_id INT,\n  FOREIGN KEY (class_id) REFERENCES Class(class_id)\n);",trace:"student_id unique পরিচয়; class_id অন্য table-এর সঙ্গে relationship তৈরি করে।"},
      {label:"শর্ত দিয়ে record খোঁজা",code:"SELECT student_id, name, mark\nFROM Result\nWHERE mark >= 80\nORDER BY mark DESC;",trace:"WHERE 80 বা বেশি record রাখে; ORDER BY সর্বোচ্চ mark আগে দেখায়।"},
      {label:"দুটি table JOIN",code:"SELECT s.name, c.class_name\nFROM Student AS s\nJOIN Class AS c\n  ON s.class_id = c.class_id;",trace:"ON clause দুই table-এর common key মিলিয়ে student-এর পাশে class name আনে।"},
      {label:"নিরাপদ update",code:"UPDATE Student\nSET name = 'Nabila Akter'\nWHERE student_id = 1042;",trace:"WHERE বাদ দিলে সব record বদলে যেতে পারে; update-এর আগে matching record SELECT করে দেখো।"},
    ],
  };
  if (/Web design|HTML/i.test(chapterTitle)) return {
    title: "HTML হাতে-কলমে খাতা",
    intro: "প্রতিটি code আগে পড়ো, browser-এ কী দেখা যাবে অনুমান করো, তারপর tag বা attribute বদলে ফল মিলিয়ে দেখো। শুধু tag-এর নাম নয়—কোথায়, কেন এবং কীভাবে ব্যবহার হচ্ছে সেটিই শেখার লক্ষ্য।",
    examples: [
      { label:"একটি সম্পূর্ণ HTML document", code:'<!DOCTYPE html>\n<html lang="bn">\n<head>\n  <meta charset="UTF-8">\n  <title>আমার প্রথম পেজ</title>\n</head>\n<body>\n  <h1>HSC2Plus</h1>\n  <p>আজ আমরা HTML শিখছি।</p>\n</body>\n</html>', trace:"Browser tab-এ ‘আমার প্রথম পেজ’; page-এ বড় heading এবং তার নিচে paragraph দেখা যাবে। head-এর তথ্য page body-তে দেখা যায় না।" },
      { label:"Heading, paragraph ও line break", code:'<h1>কলেজ পরিচিতি</h1>\n<h2>আমাদের লক্ষ্য</h2>\n<p>জ্ঞান, দক্ষতা ও মূল্যবোধ।<br>একসঙ্গে এগিয়ে যাই।</p>', trace:"h1 সবচেয়ে গুরুত্বপূর্ণ heading, h2 তার উপশিরোনাম; br একই paragraph-এর মধ্যে নতুন line তৈরি করে।" },
      { label:"List ও hyperlink", code:'<h2>পছন্দের বিষয়</h2>\n<ul>\n  <li>ICT</li>\n  <li>English</li>\n</ul>\n<a href="https://example.com" target="_blank">আরও জানো</a>', trace:"ul bullet list তৈরি করে; প্রতিটি item li-এর মধ্যে থাকে। href গন্তব্য এবং target=\"_blank\" নতুন tab খোলে।" },
      { label:"ছবি ও accessible alternative text", code:'<figure>\n  <img src="campus.jpg" alt="কলেজ ভবনের সামনের দৃশ্য" width="320">\n  <figcaption>আমাদের কলেজ ক্যাম্পাস</figcaption>\n</figure>', trace:"ছবি না খুললেও alt ছবির অর্থ জানায়। width display-র প্রস্থ ঠিক করে; figcaption ছবির caption দেয়।" },
      { label:"Table: row ও cell", code:'<table border="1">\n  <caption>পরীক্ষার ফল</caption>\n  <tr><th>বিষয়</th><th>নম্বর</th></tr>\n  <tr><td>ICT</td><td>82</td></tr>\n  <tr><td>English</td><td>76</td></tr>\n</table>', trace:"tr একটি row; th heading cell; td data cell। এখানে মোট ৩টি row ও ২টি column দেখা যাবে।" },
      { label:"Form ও input", code:'<form>\n  <label for="name">নাম</label>\n  <input id="name" name="studentName" type="text" required>\n  <label for="group">বিভাগ</label>\n  <select id="group" name="group">\n    <option>Commerce</option>\n    <option>Humanities</option>\n  </select>\n  <button type="submit">জমা দাও</button>\n</form>', trace:"label-এর for এবং input-এর id একই হওয়ায় label click করলেও input focus হয়। required খালি form জমা দিতে বাধা দেয়।" },
      { label:"ভুল nesting খুঁজে ঠিক করো", code:'<!-- ভুল -->\n<p>আমার <strong>প্রিয় বিষয়</p></strong>\n\n<!-- সঠিক -->\n<p>আমার <strong>প্রিয় বিষয়</strong></p>', trace:"যে tag পরে খোলা হয়, সেটি আগে বন্ধ করতে হয়। তাই strong আগে এবং p পরে বন্ধ হবে।" },
      { label:"ছোট একটি student profile page", code:'<!DOCTYPE html>\n<html lang="bn">\n<head><meta charset="UTF-8"><title>Student Profile</title></head>\n<body>\n  <header><h1>সাবা রহমান</h1></header>\n  <main>\n    <p>শ্রেণি: একাদশ · বিভাগ: মানবিক</p>\n    <h2>আজকের লক্ষ্য</h2>\n    <ol><li>HTML table</li><li>Form practice</li></ol>\n  </main>\n  <footer><small>শেষ হালনাগাদ: ২০২৬</small></footer>\n</body>\n</html>', trace:"header পরিচয়, main মূল content এবং footer শেষের তথ্য বহন করছে। এটি অর্থবহ বা semantic structure-এর উদাহরণ।" },
    ],
  };
  if (!/Programming/i.test(chapterTitle)) return null;
  return {
    title: english ? "C programming notebook" : "C Programming খাতা",
    intro: english ? "Read the trace beside the code; then change one input and predict the output before running it." : "Code-এর পাশের trace আগে বোঝো। তারপর একটি input বদলে output অনুমান করে নিজে মিলিয়ে দেখো।",
    examples: [
      { label: english?"Input, calculation and output":"Input → হিসাব → Output", code:'#include <stdio.h>\nint main(void) {\n  int a, b;\n  scanf("%d %d", &a, &b);\n  printf("Sum = %d\\n", a + b);\n  return 0;\n}', trace: english?"Input 12 8 → a=12, b=8 → a+b=20 → Sum = 20":"Input 12 8 → a=12, b=8 → a+b=20 → Sum = 20" },
      { label: english?"Decision with if–else":"if–else দিয়ে সিদ্ধান্ত", code:'#include <stdio.h>\nint main(void) {\n  int mark;\n  scanf("%d", &mark);\n  if (mark >= 33) printf("Pass");\n  else printf("Fail");\n  return 0;\n}', trace: english?"mark=47 → condition true → Pass; mark=28 → condition false → Fail":"mark=47 → শর্ত সত্য → Pass; mark=28 → শর্ত মিথ্যা → Fail" },
      { label: english?"Loop and accumulator":"Loop ও accumulator", code:'#include <stdio.h>\nint main(void) {\n  int i, sum = 0;\n  for (i = 1; i <= 5; i++) {\n    sum = sum + i;\n  }\n  printf("%d", sum);\n  return 0;\n}', trace: english?"sum: 0 → 1 → 3 → 6 → 10 → 15":"sum: 0 → 1 → 3 → 6 → 10 → 15" },
      { label: english?"Even-number sum":"জোড় সংখ্যার যোগফল", code:'#include <stdio.h>\nint main(void) {\n  int n, i, sum = 0;\n  scanf("%d", &n);\n  for (i = 2; i <= n; i += 2) sum += i;\n  printf("%d", sum);\n  return 0;\n}', trace: english?"n=8 → sum: 0 → 2 → 6 → 12 → 20":"n=8 → sum: 0 → 2 → 6 → 12 → 20" },
      { label: english?"Array maximum":"Array থেকে সর্বোচ্চ মান", code:'#include <stdio.h>\nint main(void) {\n  int a[5] = {12, 7, 31, 18, 24};\n  int i, max = a[0];\n  for (i = 1; i < 5; i++)\n    if (a[i] > max) max = a[i];\n  printf("%d", max);\n  return 0;\n}', trace: english?"max: 12 → 12 → 31 → 31 → 31":"max: 12 → 12 → 31 → 31 → 31; প্রথম element দিয়ে শুরু করায় negative data-তেও logic ঠিক থাকে।" },
      { label: english?"Function and return value":"Function ও return value", code:'#include <stdio.h>\nint square(int x) { return x * x; }\nint main(void) {\n  int n;\n  scanf("%d", &n);\n  printf("%d", square(n));\n  return 0;\n}', trace: english?"Input 6 → square(6) → 36":"Input 6 → function-এ x=6 → return 6×6 → output 36" },
    ],
  };
}

const subjectWorkbook: Record<string,{label:string; title:string; columns:string[]; rows:(title:string)=>string[][]; reminder:string}> = {
  bangla:{label:"পাঠ বিশ্লেষণ খাতা",title:"বক্তব্য থেকে পরীক্ষাযোগ্য ব্যাখ্যা",columns:["পাঠের অংশ","প্রমাণ","নিজের ভাষায় অর্থ","প্রশ্নে ব্যবহার"],rows:title=>[[title,"প্রাসঙ্গিক শব্দ/উদ্ধৃতি","লেখকের বক্তব্য","ক/খ/গ/ঘ-এর উপযুক্ত অংশ"],["ভাষা ও রীতি","অলংকার/শব্দচয়ন","কী প্রভাব তৈরি করেছে","ব্যাখ্যা বা বিশ্লেষণ"]],reminder:"উদ্ধৃতি কেবল লিখবে না—উদ্ধৃতিটি কী প্রমাণ করে, সেটিও লিখবে।"},
  english:{label:"TASK WORKBOOK",title:"Evidence-to-answer planner",columns:["Task","Evidence / rule","Your sentence","Edit check"],rows:title=>[[title,"Exact line, clue or grammar rule","Answer in your own words","Meaning + grammar"],["Writing task","Purpose, audience and format","Topic sentence + support","Cohesion + accuracy"]],reminder:"Complete the task first; then edit tense, agreement, punctuation and repetition."},
  ict:{label:"PRACTICAL WORKBOOK",title:"Input–process–output and debugging sheet",columns:["Input / data","Rule / process","Output","Test or error check"],rows:title=>[[title,"Algorithm, formula or logic","Expected result","Try a boundary value"],["System / code","Step-by-step flow","Screen/output state","Locate and explain the fault"]],reminder:"প্রতিটি প্রযুক্তিগত উত্তরে input, process, output এবং verification আলাদা করে দেখাও।"},
  accounting:{label:"WORKING-PAPER",title:"Transaction-to-statement audit trail",columns:["লেনদেন/তথ্য","হিসাব ও শ্রেণি","ডেবিট/ক্রেডিট বা সূত্র","যাচাই"],rows:title=>[[title,"সম্পদ/দায়/মূলধন/আয়/ব্যয়","নিয়মটি কেন প্রযোজ্য","সমীকরণ/জের/মোট"],["পোস্টিং/বিবরণী","তারিখ, বিবরণ, ফলিও","সঠিক ছক ও কার্যপ্রণালি","কলামের মোট ও শেষ যাচাই"]],reminder:"শুধু চূড়ান্ত অঙ্ক নয়—হিসাব নির্বাচন, কার্যপ্রণালি ও যাচাই দেখালেই ধাপের নম্বর সুরক্ষিত থাকে।"},
  finance:{label:"DECISION SHEET",title:"Cash-flow and recommendation matrix",columns:["বিকল্প/সময়","নগদপ্রবাহ ও সূত্র","ব্যয়–আয়–ঝুঁকি","সিদ্ধান্তের শর্ত"],rows:title=>[[title,"সময়রেখায় inflow/outflow","মান বসিয়ে হিসাব","ফল ও এককের অর্থ"],["বিকল্প উৎস","মেয়াদ ও repayment","তারল্য/নিয়ন্ত্রণ/ঝুঁকি","কখন গ্রহণযোগ্য"]],reminder:"সর্বোচ্চ সংখ্যাই সবসময় সেরা সিদ্ধান্ত নয়; ঝুঁকি, সময় ও নগদপ্রবাহের সামঞ্জস্য ব্যাখ্যা করো।"},
  business:{label:"CASE CANVAS",title:"Problem-to-action management canvas",columns:["ঘটনার তথ্য","নীতি/কার্য","সমস্যার কারণ","বাস্তব পদক্ষেপ"],rows:title=>[[title,"প্রযোজ্য নীতি","উদ্দীপকের নির্দিষ্ট প্রমাণ","দায়িত্বসহ সমাধান"],["Stakeholder","লক্ষ্য/দ্বন্দ্ব","সম্ভাব্য প্রভাব","পরিমাপযোগ্য ফল"]],reminder:"নীতির নাম লিখেই থেমো না—উদ্দীপকের কোন তথ্য নীতিটির সঙ্গে মেলে তা দেখাও।"},
  economics:{label:"ECONOMICS LAB",title:"Table–formula–graph–meaning",columns:["চলক ও একক","সূত্র/সারণি","Graph change","অর্থনৈতিক অর্থ"],rows:title=>[[title,"P, Q, সময় ও শর্ত","মান বসিয়ে হিসাব","movement না shift","কারণ ও ফল"],["নতুন অবস্থা","অন্য সব অপরিবর্তিত?","নতুন equilibrium","বাংলাদেশ উদাহরণ"]],reminder:"Graph-এ অক্ষ, রেখা, তীর, পুরোনো ও নতুন ভারসাম্যবিন্দু label না করলে বিশ্লেষণ অসম্পূর্ণ।"},
  civics:{label:"CIVICS MAP",title:"Institution–power–right analysis",columns:["ধারণা/প্রতিষ্ঠান","ক্ষমতা ও দায়িত্ব","উদ্দীপকের প্রমাণ","আইনসম্মত মূল্যায়ন"],rows:title=>[[title,"কার কাজ/সীমা","নির্দিষ্ট ঘটনা","অধিকার ও জনস্বার্থ"],["Checks & balance","কোন প্রতিষ্ঠান কাকে নিয়ন্ত্রণ করে","প্রক্রিয়ার ঘাটতি","সুশাসনের শর্ত"]],reminder:"রাষ্ট্র, সরকার, জাতি ও নাগরিকতা—শব্দগুলো বিনিময়যোগ্য নয়; পাঠ্যবইয়ের অর্থেই ব্যবহার করো।"},
  history:{label:"EVIDENCE TIMELINE",title:"Cause–event–result–significance",columns:["সময়/ঘটনা","পটভূমি ও কারণ","উৎস/প্রমাণ","ফল ও তাৎপর্য"],rows:title=>[[title,"দীর্ঘমেয়াদি + তাৎক্ষণিক কারণ","উৎসের বক্তব্য","তাৎক্ষণিক ফল"],["পরবর্তী ধাপ","কী বদলাল","দৃষ্টিভঙ্গি/সীমাবদ্ধতা","দীর্ঘমেয়াদি গুরুত্ব"]],reminder:"কারণ ও ফল এক তালিকায় মিশিও না; উৎসের পরিচয় ও সম্ভাব্য পক্ষপাতও বিবেচনা করো।"},
  logic:{label:"LOGIC SCRATCHPAD",title:"Form–rule–test–verdict",columns:["বাক্য/যুক্তির রূপ","প্রযোজ্য নিয়ম","পরীক্ষা/সারণি","সিদ্ধান্ত ও কারণ"],rows:title=>[[title,"পদ/বচন/সংযোজক","শর্ত ও scope","truth table/চিত্র","বৈধ বা অবৈধ"],["সম্ভাব্য ভ্রান্তি","ভুল অনুমান","counter-example","কোথায় নিয়ম ভেঙেছে"]],reminder:"সিদ্ধান্ত সত্য হলেই যুক্তি বৈধ হয় না; পূর্বধারণা থেকে সিদ্ধান্ত অনিবার্যভাবে আসে কি না পরীক্ষা করো।"},
  islamic_history:{label:"CIVILISATION MAP",title:"Context–event–institution–legacy",columns:["সময় ও অঞ্চল","ঘটনা/নেতৃত্ব","প্রতিষ্ঠান/অবদান","প্রভাব ও সীমাবদ্ধতা"],rows:title=>[[title,"সামাজিক-রাজনৈতিক প্রেক্ষাপট","মূল ঘটনা ও সিদ্ধান্ত","প্রশাসন/শিক্ষা/সংস্কৃতি","তাৎক্ষণিক ও দীর্ঘমেয়াদি প্রভাব"],["উৎস","লেখক/সময়/উদ্দেশ্য","সমর্থনকারী প্রমাণ","সতর্ক মূল্যায়ন"]],reminder:"অযাচাইকৃত কাহিনি নিশ্চিত ইতিহাস হিসেবে লিখবে না; উৎস, প্রেক্ষাপট ও প্রভাব আলাদা রাখো।"},
  statistics:{label:"DATA WORKSHEET",title:"Data–formula–calculation–interpretation",columns:["তথ্য ও একক","সারণি/সূত্র","কার্যপ্রণালি","ফলের ব্যাখ্যা"],rows:title=>[[title,"চলক ও scale","প্রতীকসহ সূত্র","মান বসানো ও হিসাব","ফল কী বোঝায়"],["Validation","মোট/পরিসর/শর্ত","পুনর্গণনা","সীমাবদ্ধতা ও সিদ্ধান্ত"]],reminder:"সূত্রের নাম, মান প্রতিস্থাপন, একক এবং ফলের ভাষাগত ব্যাখ্যা—চারটিই দেখাও।"},
  geography:{label:"MAP & PROCESS SHEET",title:"Location–process–visual–impact",columns:["স্থান/বিষয়","কারণ ও প্রক্রিয়া","চিত্র/মানচিত্রের label","ফল ও ব্যবস্থাপনা"],rows:title=>[[title,"প্রধান নিয়ামক ও ধাপ","title, direction, scale, legend","ভৌত ও মানবিক প্রভাব"],["বাংলাদেশ উদাহরণ","উদ্দীপকের স্থানিক প্রমাণ","অঞ্চল/প্রবাহ/পরিবর্তন","সমাধান ও সীমাবদ্ধতা"]],reminder:"মানচিত্র বা চিত্রে title, north direction, scale/legend এবং প্রয়োজনীয় label বাদ দিও না।"},
};

export function SubjectPage({ group, subjectId }: { group:"commerce"|"humanities"; subjectId:string }) {
  const subject = subjectsByGroup[group].find(item=>item.id===subjectId) ?? subjectsByGroup[group][0];
  const chapters = chaptersBySubject[subject.id] ?? [];
  const resources = completeExamLibraryByGroup[group].filter(item=>
    item.subject===subject.name || (subject.id==="finance" && item.subject==="Finance & Banking")
  );
  const [chapterIndex,setChapterIndex] = useState(0);
  const [mode,setMode] = useState<StudyMode>("learn");
  const [noteMode,setNoteMode] = useState<NoteMode|null>(null);
  const [activeLesson,setActiveLesson] = useState(0);
  const [readLessons,setReadLessons] = useState<number[]>([]);
  const [chapterRailOpen,setChapterRailOpen] = useState(false);
  const chapter = chapters[chapterIndex] ?? chapters[0];
  const resource = resources.find(item=>item.unit===chapter?.title);
  const english = subject.id==="english";
  const isIct = subject.id==="ict";
  const isLogic = subject.id==="logic";
  const isAccounting = subject.id==="accounting";
  const isFinance = subject.id==="finance";
  const isStructuredManual = isIct || isLogic || isAccounting || isFinance;
  const paperOptions = useMemo(()=>Array.from(new Set(chapters.map(item=>item.paper).filter((paper): paper is "1st Paper"|"2nd Paper"=>Boolean(paper)))),[chapters]);
  const [activePaper,setActivePaper] = useState<"1st Paper"|"2nd Paper"|null>(()=>paperOptions[0]??null);
  const visibleChapterEntries = useMemo(()=>chapters.map((item,index)=>({item,index})).filter(({item})=>!activePaper||item.paper===activePaper),[chapters,activePaper]);
  const identity = subjectIdentity[subject.id as keyof typeof subjectIdentity] ?? subjectIdentity.ict;
  const noteBlueprint = noteBlueprints[subject.id] ?? defaultNoteBlueprint;
  const codeLab = programmingCodeLab(chapter?.title ?? "", english, subject.id);
  const workbook = subjectWorkbook[subject.id] ?? subjectWorkbook.ict;
  const IdentityIcon = identity.Icon;
  const lessonActionLabels: Record<string,{try:string;check:string;example:string}> = {
    bangla:{try:chapter?.paper==="1st Paper"?"পাঠের প্রমাণ দিয়ে বলো":"নিজে লিখে সম্পাদনা করো",check:"উত্তরের ভাষা ও প্রমাণ মিলাও",example:"পাঠ থেকে উদাহরণ দেখো"},
    ict:{try:"এবার system/code চালিয়ে দেখো",check:"Output ও logic মিলাও",example:"Input থেকে output দেখো"},
    accounting:{try:"খাতায় এবার সম্পূর্ণ সমাধান করো",check:"Debit–credit ও জের মিলাও",example:"Working দেখে পদ্ধতি ধরো"},
    finance:{try:"হিসাব করে সিদ্ধান্ত নাও",check:"Formula, unit ও সিদ্ধান্ত মিলাও",example:"Cash flow থেকে সিদ্ধান্ত দেখো"},
    business:{try:"Case-টির ব্যবস্থাপনা সমাধান দাও",check:"নীতি, পদক্ষেপ ও KPI মিলাও",example:"Case diagnosis দেখে নাও"},
    economics:{try:"Table–graph–কারণ দিয়ে সমাধান করো",check:"Curve, label ও অর্থ মিলাও",example:"Data থেকে পরিবর্তন দেখো"},
    civics:{try:"আইনসম্মত পথ ও যুক্তি লেখো",check:"নীতি, প্রতিষ্ঠান ও প্রমাণ মিলাও",example:"ঘটনা থেকে সাংবিধানিক যোগ দেখো"},
    geography:{try:"মানচিত্র/চিত্রে প্রক্রিয়াটি দেখাও",check:"Scale, label, কারণ ও ফল মিলাও",example:"স্থান থেকে প্রক্রিয়া বোঝো"},
    history:{try:"সময়–কারণ–ফল সাজিয়ে লেখো",check:"তারিখ, উৎস ও তাৎপর্য মিলাও",example:"সময়রেখায় ঘটনাটি দেখো"},
    islamic_history:{try:"ঘটনা ও সভ্যতাগত প্রভাব বিশ্লেষণ করো",check:"কালানুক্রম, উৎস ও প্রভাব মিলাও",example:"প্রেক্ষাপট থেকে ফল দেখো"},
    logic:{try:"যুক্তির form নিজে পরীক্ষা করো",check:"Rule, test ও verdict মিলাও",example:"বাক্য থেকে logical form দেখো"},
    statistics:{try:"Data বসিয়ে পূর্ণ হিসাব করো",check:"Formula, working ও interpretation মিলাও",example:"Data থেকে ফল বের করা দেখো"},
    english:{try:"NOW WRITE YOUR OWN RESPONSE",check:"Check task, language and structure",example:"STUDY THE MODEL MOVE"},
  };
  const lessonAction = lessonActionLabels[subject.id] ?? {try:"এবার নিজে প্রয়োগ করো",check:"উত্তর যাচাই করো",example:"উদাহরণে দেখে নাও"};
  const title = english ? subject.name : subject.nameBn;
  const chapterTitle = english ? chapter?.title : chapter?.titleBn;
  const questions = resource?.bank.questions ?? [];
  const questionCounts = useMemo(()=>({
    mcq:questions.filter(item=>item.type==="MCQ").length,
    cq:questions.filter(item=>item.type==="CQ").length,
    written:questions.filter(item=>item.type==="Written").length,
  }),[questions]);
  const detailedNotes = resource?.notes ?? [];
  const revisionLessons = (resource?.lessonDetails??[]).slice(0,8);
  const quickNotes = revisionLessons.map(lesson=>`${lesson.title}: ${lesson.concept}`);
  const writtenTask = resource?.materialPack?.assessmentFormat === "written-task";
  const primaryModel = resource?.modelExamples?.[0];
  const secondaryModel = resource?.modelExamples?.[1];
  const writtenStructure = primaryModel ? [
    `${primaryModel.kind}: ${primaryModel.examinerNote}`,
    `প্রশ্ন: ${primaryModel.prompt}`,
    ...primaryModel.answer.slice(0,3).map((part,index)=>`নমুনা অংশ ${index+1}: ${part}`),
    ...(secondaryModel ? [`আরেক ধরন—${secondaryModel.kind}: ${secondaryModel.examinerNote}`] : []),
  ] : [];
  const lastMinute = [
    resource?.guide?.concept,
    ...(writtenTask && writtenStructure.length ? writtenStructure : (resource?.chapterWorkshop?.fiveMinuteRecap??revisionLessons.map(lesson=>lesson.concept))).slice(0,6),
    ...(writtenTask ? (resource?.guide?.structures??[]) : (resource?.chapterWorkshop?.formulaSheet??resource?.guide?.structures??[])).slice(0,4),
    ...(resource?.chapterWorkshop?.comparison.rows??[]).slice(0,3).map(row=>row.filter(Boolean).join(" → ")),
    ...(resource?.chapterWorkshop?.selfCheck??[]).slice(0,2).map(item=>`${item.question} — ${item.explanation}`),
    ...(resource?.examToolkit?.mistakes??[]).slice(0,3),
  ].filter(Boolean) as string[];
  const shownNotes = noteMode==="detailed" ? detailedNotes : noteMode==="quick" ? quickNotes : noteMode==="lastMinute" ? lastMinute : [];
  const activeLessonDetail = resource?.lessonDetails?.[activeLesson] ?? resource?.lessonDetails?.[0];
  const lessonTotal = resource?.lessonDetails?.length ?? 0;
  const subjectLessonTotal = resources.reduce((sum,item)=>sum+(item.lessonDetails?.length??0),0);
  const chapterProgress = Math.round((readLessons.length/Math.max(1,lessonTotal))*100);
  const nextLessonIndex = Array.from({length:lessonTotal},(_,index)=>index).find(index=>!readLessons.includes(index)) ?? Math.max(0,lessonTotal-1);
  const chapterReady = lessonTotal>0 && readLessons.length>=lessonTotal;
  const noteProgressKey = `hsc2plus-note-progress-${group}-${subject.id}-${chapter?.title ?? "chapter"}`;
  const chapterCoreTerms = (resource?.guide?.terminology ?? []).slice(0,6);
  const chapterVisualSteps = (resource?.chapterWorkshop?.visual?.steps ?? noteBlueprint.steps.map(([label])=>label)).slice(0,5);
  const chapterExamTargets = (resource?.chapterWorkshop?.examNightChecklist ?? resource?.guide?.examChecklist ?? []).slice(0,4);

  useEffect(()=>{
    try { setReadLessons(JSON.parse(localStorage.getItem(noteProgressKey) ?? "[]")); }
    catch { setReadLessons([]); }
  },[noteProgressKey]);

  const toggleLessonRead = (index:number) => setReadLessons(current=>{
    const next = current.includes(index) ? current.filter(item=>item!==index) : [...current,index].sort((a,b)=>a-b);
    localStorage.setItem(noteProgressKey,JSON.stringify(next));
    return next;
  });

  const chooseChapter = (index:number) => {
    setChapterIndex(index);
    setActiveLesson(0);
    setNoteMode(null);
  };

  const choosePaper = (paper:"1st Paper"|"2nd Paper") => {
    setActivePaper(paper);
    const nextIndex=chapters.findIndex(item=>item.paper===paper);
    if(nextIndex>=0) chooseChapter(nextIndex);
  };

  const chooseMode = (nextMode:StudyMode) => {
    setMode(nextMode);
    if(nextMode==="notes") setNoteMode(null);
  };

  const continueChapter = () => {
    chooseMode("learn");
    setActiveLesson(nextLessonIndex);
    window.setTimeout(()=>document.getElementById("chapter-lessons")?.scrollIntoView({behavior:"smooth",block:"start"}),60);
  };

  const printNote = (format:NoteMode) => {
    flushSync(()=>setNoteMode(format));
    document.documentElement.dataset.notePrint = format;
    window.requestAnimationFrame(()=>window.requestAnimationFrame(()=>{
      document.querySelectorAll<HTMLDetailsElement>(".subject-full-notes details").forEach((detail)=>{
        detail.dataset.printWasOpen = detail.open ? "true" : "false";
        detail.open = true;
      });
      window.print();
    }));
  };

  const literatureClinic = subject.id === "bangla" && chapterTitle ? banglaLiteratureClinics[chapterTitle] : undefined;
  useEffect(()=>{
    const clearPrintState=()=>{
      delete document.documentElement.dataset.notePrint;
      document.querySelectorAll<HTMLDetailsElement>(".subject-full-notes details[data-print-was-open]").forEach((detail)=>{
        detail.open = detail.dataset.printWasOpen === "true";
        delete detail.dataset.printWasOpen;
      });
    };
    window.addEventListener("afterprint",clearPrintState);
    return ()=>window.removeEventListener("afterprint",clearPrintState);
  },[]);

  const openDashboard = (section:"practice") => {
    if(resource && section==="practice"){
      localStorage.setItem(`hsc2plus-${group}-practice-entry`,JSON.stringify({mode:"custom",subject:resource.subject,unit:resource.unit,source:"subjects"}));
      localStorage.setItem(`hsc2plus-${group}-practice-target`,JSON.stringify({subject:resource.subject,unit:resource.unit,questionType:"All",source:"mission"}));
    }
    localStorage.setItem(`hsc2plus-${group}-last-section`,section);
    location.href=`/${group}`;
  };

  return <main className={`subject-page-premium subject-${subject.id}`} style={{"--subject-accent":identity.accent,"--subject-accent-2":identity.accent2,"--subject-ink":identity.ink} as CSSProperties}>
    <header className="subject-page-top"><Link href={`/${group}`}><ArrowLeft size={18}/>HSC2Plus</Link><span>{group==="commerce"?"Commerce":"Humanities"}</span></header>
    <section className="subject-page-hero">
      <div className="subject-hero-copy"><span className="subject-page-kicker">{identity.label}</span><h1>{title}<em>{english?"Studio":"স্টুডিও"}</em></h1><p>{english?"A focused space for lessons, complete notes, deliberate practice and exam-ready revision.":"পাঠ, পূর্ণাঙ্গ নোট, অনুশীলন ও পরীক্ষার প্রস্তুতি—এই বিষয়ের জন্য সাজানো একটি স্বতন্ত্র পড়ার জায়গা।"}</p></div>
      <aside className="subject-identity-card compact"><IdentityIcon aria-hidden="true"/><div><strong>{subjectLessonTotal}</strong><small>{english?"lessons":"পাঠ"}</small></div><div><strong>{resources.reduce((sum,item)=>sum+(item.bank.questions?.length??0),0)}</strong><small>{english?"questions":"প্রশ্ন"}</small></div></aside>
    </section>
    <section className="subject-route-strip" aria-label={english?"Study modes":"পড়ার ধরন"}>{([
      ["learn",BookOpen,english?"Lessons":"পাঠ"],["notes",FileText,english?"Notes":"নোট"],
    ] as const).map(([id,Icon,label],index)=><button type="button" key={id} className={mode===id?"active":""} onClick={()=>chooseMode(id)}><span>0{index+1}</span><Icon size={18}/><strong>{label}</strong></button>)}</section>
    {paperOptions.length>1&&<section className="subject-paper-switch" aria-label={english?"Choose paper":"পত্র নির্বাচন"}><div><span>{english?"SELECT PAPER":"পত্র বেছে নাও"}</span><strong>{english?"Study each paper separately":"প্রতিটি পত্র আলাদাভাবে পড়ো"}</strong><small>{english?"Practice sets and model tests stay in Practice and Test Centre.":"অনুশীলন সেট ও মডেল টেস্ট Practice এবং Test Centre-এ থাকবে—এখানে শুধু শেখার ইউনিট।"}</small></div><nav>{paperOptions.map(paper=><button type="button" key={paper} className={activePaper===paper?"active":""} onClick={()=>choosePaper(paper)}><BookMarked size={17}/><span>{english?paper:subjectId==="bangla"?(paper==="1st Paper"?"বাংলা ১ম পত্র":"বাংলা ২য় পত্র"):(paper==="1st Paper"?"১ম পত্র":"২য় পত্র")}</span><small>{chapters.filter(item=>item.paper===paper).length} {english?"study units":"শেখার ইউনিট"}</small></button>)}</nav></section>}
    {english&&<details className="english-pattern-card"><summary><div><span>HSC 2026 · PAPER BLUEPRINT</span><strong>{activePaper} · 100 marks</strong><small>Open the task-by-task marks map before choosing Practice or Test Centre.</small></div><ChevronRight size={20}/></summary><div className="english-pattern-body">{(activePaper==="2nd Paper"?englishMarksDistribution2026.secondPaper:englishMarksDistribution2026.firstPaper).sections.map(section=><section key={section.name}><header><strong>{section.name}</strong><span>{section.marks} marks</span></header><ul>{section.items.map(item=><li key={item}>{item}</li>)}</ul></section>)}<footer><span>Preparation reference · not an official board verification</span><a href={englishMarksDistribution2026.source.url} target="_blank" rel="noreferrer">View source <ArrowRight size={14}/></a></footer></div></details>}
    <div className={`subject-workspace-grid ${chapterRailOpen?"rail-open":"rail-closed"}`}>
      <button type="button" className="chapter-rail-toggle" onClick={()=>setChapterRailOpen(value=>!value)} aria-expanded={chapterRailOpen} aria-controls="chapter-rail"><span>{chapterRailOpen?(english?"Hide chapters":"অধ্যায় বন্ধ করো"):(english?"Choose chapter":"অধ্যায় বেছে নাও")}</span>{chapterRailOpen?<PanelLeftClose size={18}/>:<PanelLeftOpen size={18}/>}</button>
      {chapterRailOpen&&<aside id="chapter-rail" className="subject-chapter-rail"><header><span>{english?(activePaper?`${activePaper} STUDY UNITS`:"STUDY UNITS"):(activePaper?`${activePaper==="1st Paper"?"১ম পত্র":"২য় পত্র"} · শেখার ইউনিট`:"শেখার ইউনিট")}</span><button type="button" onClick={()=>setChapterRailOpen(false)} aria-label={english?"Close chapter list":"অধ্যায়ের তালিকা বন্ধ করো"}><PanelLeftClose size={17}/></button></header><div>{visibleChapterEntries.map(({item,index},visibleIndex)=><button type="button" key={item.title} className={chapterIndex===index?"active":""} onClick={()=>{chooseChapter(index);setChapterRailOpen(false);}}><span>{String(visibleIndex+1).padStart(2,"0")}</span><div><strong>{english?item.title:item.titleBn}</strong>{item.paper&&<small>{english?item.paper:item.paper==="1st Paper"?"১ম পত্র":"২য় পত্র"}</small>}</div><ArrowRight size={16}/></button>)}</div></aside>}
      <section className="subject-reading-stage">
        <header><div><span>{mode==="learn"?(english?"LESSON DESK":"অধ্যায় শেখো"):mode==="notes"?(english?"NOTES LIBRARY":"নোটস লাইব্রেরি"):mode==="practice"?"PRACTICE STUDIO":"REVISION ROUTE"}</span><h2>{chapterTitle}</h2>{mode==="learn"&&<p>{resource?.guide?.concept??resource?.bank.focus}</p>}</div>{mode==="learn"&&<span className="subject-time"><Clock3 size={16}/>{chapter?.lessonPlan?.reduce((sum,item)=>sum+item.minutes,0)??45} {english?"min":"মিনিট"}</span>}</header>
        {mode==="learn"&&<section className="chapter-mission" aria-label={english?"Chapter study plan":"অধ্যায়ের শেখার মানচিত্র"}>
          <header><div><span><Target size={15}/>{english?"CHAPTER CORE":"অধ্যায়ের সারকথা"}</span><h3>{chapterReady?(english?"You know the core—now prove it in a new problem.":"মূল ধারণা বোঝা হয়েছে—এবার নতুন প্রশ্নে প্রয়োগ করে দেখো।"):(english?"See the whole chapter before reading it section by section.":"খুঁটিনাটি পড়ার আগে পুরো অধ্যায়ের মানচিত্রটি দেখে নাও।")}</h3><p>{resource?.guide?.concept}</p></div><div className="chapter-mission-progress" aria-label={`${chapterProgress}%`}><strong>{chapterProgress}%</strong><small>{readLessons.length}/{lessonTotal} {english?"lessons complete":"টি পাঠ সম্পন্ন"}</small><i><b style={{width:`${chapterProgress}%`}}/></i></div></header>
          <div className="chapter-core-grid">
            <article><span>{english?"01 · ESSENTIAL IDEAS":"০১ · যে ধারণাগুলো আগে ধরবে"}</span><div className="chapter-core-terms">{chapterCoreTerms.map(term=><b key={term}>{term}</b>)}</div></article>
            <article><span>{english?"02 · CONCEPT FLOW":"০২ · ধারণার প্রবাহ"}</span><ol>{chapterVisualSteps.map((step,index)=><li key={`${step}-${index}`}><b>{index+1}</b>{step}</li>)}</ol></article>
            <article><span>{english?"03 · EVIDENCE FOR MARKS":"০৩ · নম্বর পাওয়ার প্রমাণ"}</span><ul>{chapterExamTargets.map(item=><li key={item}><CheckCircle2 size={14}/>{item}</li>)}</ul></article>
          </div>
          <div className="chapter-plan-route">
            <article className={readLessons.length>0?"done active":"active"}><b>{readLessons.length>0?<CheckCircle2 size={17}/>:"01"}</b><div><span>{english?"LEARN":"শিখো"}</span><strong>{english?"Understand each lesson":"পাঠ ধরে ধারণা বোঝো"}</strong><small>{english?`${readLessons.length} of ${lessonTotal} completed`:`${lessonTotal}টির মধ্যে ${readLessons.length}টি সম্পন্ন`}</small></div></article>
            <article className={chapterReady?"active":""}><b>02</b><div><span>{english?"APPLY":"প্রয়োগ"}</span><strong>{english?"Solve without looking":"না দেখে সমাধান করো"}</strong><small>{english?"Worked example → independent attempt":"উদাহরণ দেখো → নিজে চেষ্টা করো"}</small></div></article>
            <article><b>03</b><div><span>{english?"VERIFY":"যাচাই"}</span><strong>{english?"Use chapter practice":"Chapter Practice দাও"}</strong><small>{english?"Review mistakes, then revise only the gaps":"ভুল দেখে শুধু ঘাটতির অংশে ফিরে এসো"}</small></div></article>
          </div>
          <footer><button type="button" className="active" onClick={chapterReady?()=>openDashboard("practice"):continueChapter}>{chapterReady?<PenLine size={16}/>:<BookOpen size={16}/>} {chapterReady?(english?"Start chapter practice":"Chapter Practice শুরু করো"):(english?"Start the guided lessons":"পাঠ ধরে শেখা শুরু করো")}</button><button type="button" onClick={()=>{chooseMode("notes");setNoteMode("detailed");}}><FileText size={16}/>{english?"Open full tutor note":"পূর্ণাঙ্গ Tutor Note খোলো"}</button><small><Sparkles size={14}/>{english?"Core summary → guided lesson → full note → practice.":"Chapter Core → পাঠ → পূর্ণাঙ্গ নোট → Practice—এই ধারায় এগোও।"}</small></footer>
        </section>}
        {mode==="learn"&&<section id="chapter-lessons" className="subject-lesson-reader">
          <nav aria-label={english?"Lessons in this chapter":"এই অধ্যায়ের পাঠ"}><span>{english?"LESSONS":"পাঠসমূহ"}</span><div>{(resource?.lessonDetails??[]).map((lesson,index)=><button type="button" key={`${lesson.title}-reader`} className={activeLesson===index?"active":""} onClick={()=>setActiveLesson(index)}><b>{String(index+1).padStart(2,"0")}</b><span>{lesson.title}</span></button>)}</div></nav>
          {activeLessonDetail&&<article className="subject-tutor-lesson">
            <header><span>{english?`LESSON ${activeLesson+1}`:`পাঠ ${activeLesson+1}`}</span><h3>{activeLessonDetail.title}</h3><p>{activeLessonDetail.concept}</p></header>
            <section className="tutor-explain"><div><strong><Lightbulb size={16}/>{english?"Let’s understand it":"চলো, সহজভাবে বুঝি"}</strong><ol>{activeLessonDetail.steps.map((step,index)=><li key={`${step}-${index}`}><b>{index+1}</b><span>{step}</span></li>)}</ol></div><aside><strong>{english?"Why this matters":"এটি কেন জানা দরকার"}</strong><p>{activeLessonDetail.application}</p></aside></section>
            <section className="tutor-example"><span>{lessonAction.example}</span><p>{activeLessonDetail.workedSnapshot}</p></section>
            <section className="tutor-practice"><div><span>{lessonAction.try}</span><p>{activeLessonDetail.practicePrompt}</p></div><details><summary>{lessonAction.check}</summary><p>{activeLessonDetail.answerCheck}</p></details></section>
            <section className="tutor-recall"><strong>{english?"Close the note and answer":"নোট বন্ধ করে উত্তর দাও"}</strong><ul>{activeLessonDetail.recallQuestions?.map(question=><li key={question}>{question}</li>)}</ul></section>
            <footer><p><b>{english?"Watch out: ":"যে ভুলটি এড়াবে: "}</b>{activeLessonDetail.commonTrap}</p><button type="button" className={readLessons.includes(activeLesson)?"complete":""} onClick={()=>toggleLessonRead(activeLesson)}><CheckCircle2 size={17}/>{readLessons.includes(activeLesson)?(english?"Lesson complete":"পাঠটি সম্পন্ন"):(english?"Mark lesson complete":"পাঠটি সম্পন্ন করো")}</button></footer>
          </article>}
        </section>}
        {mode==="notes"&&<section className="subject-notes-panel">
          {!noteMode&&<><div className="subject-note-library-head"><span>{english?"CHAPTER NOTE STUDIO":"নোটস স্টুডিও"}</span><h3>{english?"Choose the note that matches today’s goal.":"আজকের প্রয়োজন অনুযায়ী নোট বেছে নাও।"}</h3><p>{english?"Tutor Note teaches the chapter, Smart Revision tests recall, and Exam-night Review protects the highest-value marks. They are different study tools—not shorter copies of the same note.":"Tutor Note-এ অধ্যায়টি শেখানো হবে, Smart Revision-এ না দেখে মনে করার অনুশীলন থাকবে, আর Exam-night Review-এ থাকবে পরীক্ষার আগে অবশ্যই দেখে যাওয়ার তথ্য, উদাহরণ ও ভুলের ফাঁদ। তিনটি নোটের কাজ আলাদা।"}</p></div>
          <section className="subject-note-blueprint" aria-label={english?"How this subject note is structured":"এই বিষয়ের নোট যেভাবে সাজানো"}>
            <header><div><span>{noteBlueprint.label}</span><h4>{english?"Built around the way this subject is solved":"বিষয়টির নিজস্ব শেখার পদ্ধতি"}</h4></div><p>{noteBlueprint.promise}</p></header>
            <div>{noteBlueprint.steps.map(([label,body],index)=><article key={label}><b>{String(index+1).padStart(2,"0")}</b><span><strong>{label}</strong><small>{body}</small></span>{index<noteBlueprint.steps.length-1&&<ArrowRight size={15}/>}</article>)}</div>
          </section>
          <div className="subject-note-shelf">{([
            ["detailed",english?"Tutor Note":"Tutor Note",english?"Teach me from the beginning":"শিক্ষকের মতো ধাপে ধাপে",english?"Concept → model → guided practice":"বোঝো → উদাহরণ দেখো → নিজে করো",(resource?.lessonDetails?.length??0)+detailedNotes.length+5],
            ["quick",english?"Smart Revision":"Smart Revision",english?"Make the chapter retrievable":"কতটা মনে আছে, যাচাই করো",english?"Recall → check → repair":"মনে করো → মিলাও → ভুল ঠিক করো",quickNotes.length],
            ["lastMinute",english?"Exam-night Review":"Exam-night Review",english?"Protect the marks that matter":"পরীক্ষার আগে দ্রুত ঝালাই",english?"High-yield → traps → final check":"জরুরি অংশ → ভুলের ফাঁদ → শেষ যাচাই",lastMinute.length],
          ] as const).map(([id,label,kicker,help,count],index)=><article key={id}><span>0{index+1}</span><div><em>{kicker}</em><h4>{label}</h4><p>{help}</p><small>{count} {english?"curated study blocks":"টি পড়ার অংশ"}</small></div><footer><button type="button" onClick={()=>setNoteMode(id)}><BookOpen size={16}/>{english?"Start reading":"পড়া শুরু করো"}</button><button className="pdf-glide-button" type="button" onClick={()=>printNote(id)}><FileText size={16}/><span>{english?"Open print view":"প্রিন্ট ভিউ"}</span></button></footer></article>)}</div></>}
          {noteMode&&<button type="button" className="back-note-library" onClick={()=>setNoteMode(null)}><ArrowLeft size={16}/>{english?"Back to note library":"সব নোটে ফিরে যাও"}</button>}
          {noteMode&&<>
          <div className="subject-notes-head"><div><span>{noteMode==="detailed"?(english?"COMPLETE CHAPTER NOTE":"পূর্ণাঙ্গ অধ্যায় নোট"):noteMode==="quick"?(english?"REVISION LAYER":"রিভিশন স্তর"):(english?"LAST-MINUTE LAYER":"শেষ মুহূর্তের ঝালাই")}</span><h3>{chapterTitle}</h3><p>{english?`${shownNotes.length} carefully separated study points.`:noteMode==="detailed"&&isIct?"ধারণা, চিত্র, হিসাব বা code—যেখানে যা দরকার, উদাহরণসহ একই পড়ার ধারায়।":noteMode==="detailed"&&isLogic?"যুক্তির ভাষা চেনা থেকে নিয়ম প্রয়োগ, counterexample ও সিদ্ধান্ত—প্রতিটি ধাপ উদাহরণে যাচাই করো।":noteMode==="detailed"&&isAccounting?"লেনদেন বিশ্লেষণ থেকে working, খাতা বা বিবরণী এবং জের—প্রতিটি অঙ্কের কারণসহ পূর্ণ সমাধান।":noteMode==="detailed"&&isFinance?"সময়রেখা, সূত্রের শর্ত, সম্পূর্ণ calculation এবং ঝুঁকি–তারল্যসহ সিদ্ধান্ত—একই ধারায় অনুশীলন করো।":`${shownNotes.length}টি আলাদা ও সহজপাঠ্য অধ্যয়ন অংশ।`}</p></div><button className="pdf-glide-button" type="button" onClick={()=>printNote(noteMode)}><FileDown size={17}/><span>{english?"Save PDF":"PDF সংরক্ষণ"}</span></button></div>
          {noteMode==="detailed" ? <div className={`subject-full-notes ${isIct?"ict-note-manual":isLogic?"logic-note-manual":isAccounting?"accounting-note-manual":isFinance?"finance-note-manual":""}`}>
            <nav className="subject-notes-contents" aria-label={english?"Complete note contents":"পূর্ণাঙ্গ নোটের সূচি"}>
              <span>{english?"IN THIS CHAPTER":isIct?"ICT STUDY MANUAL":isLogic?"LOGIC REASONING MANUAL":isAccounting?"ACCOUNTING WORKING MANUAL":isFinance?"FINANCE DECISION MANUAL":"এই অধ্যায়ে"}</span>
              <a href="#lesson-notes">{english?"Lesson explanations":isIct?"ধারণা ও কার্যপ্রবাহ":isLogic?"ধারণা ও যৌক্তিক ভাষা":isAccounting?"লেনদেন ও হিসাবের ধারণা":isFinance?"ধারণা, চলক ও সিদ্ধান্ত":"পাঠের বিস্তারিত ব্যাখ্যা"}</a>
              <a href="#terms-structures">{english?"Terms & structures":isIct?"সংজ্ঞা, সূত্র ও নিয়ম":isLogic?"পদ, নিয়ম ও প্রতীক":isAccounting?"নিয়ম, সূত্র ও format":isFinance?"সূত্র, শর্ত ও সময়রেখা":"পরিভাষা ও প্রয়োজনীয় কাঠামো"}</a>
              {resource?.chapterWorkshop&&<a href="#ict-workshop">{isIct?"চিত্র, ছক ও CQ":isLogic?"Argument & Rule Lab":isAccounting?"Statement & Reconcile Lab":isFinance?"Cash-flow & Decision Lab":"Chapter workshop"}</a>}
              {!isIct&&<a href="#worked-examples">{english?"Worked examples":isLogic?"উদাহরণ ও counterexample":isAccounting?"Working-সহ পূর্ণ সমাধান":isFinance?"হিসাব, ব্যাখ্যা ও সিদ্ধান্ত":"সমাধানসহ উদাহরণ"}</a>}
              <a href="#answer-framework">{english?"Answer framework":"উত্তর লেখার কাঠামো"}</a>
              <a href="#mistakes-checklist">{english?"Mistakes & checklist":"সাধারণ ভুল ও চূড়ান্ত যাচাই"}</a>
              {codeLab&&<a href="#code-lab">{english?"Code lab":"Code Lab"}</a>}
            </nav>
            <section className="subject-note-chapter chapter-visual-primer">
              <header><span>MAP</span><div><small>{english?"CHAPTER IN ONE VISUAL":"একটি চিত্রে পুরো অধ্যায়"}</small><h4>{chapterTitle}</h4></div></header>
              <div className="chapter-visual-primer-grid">
                <article><strong>{english?"The big idea":"অধ্যায়ের সারকথা"}</strong><p>{resource?.guide?.concept}</p><div className="chapter-core-terms">{chapterCoreTerms.map(term=><b key={term}>{term}</b>)}</div></article>
                <figure aria-label={english?"Chapter concept flow":"অধ্যায়ের ধারণাপ্রবাহ"}><figcaption>{english?"CONCEPT FLOW":"ধারণার প্রবাহ"}</figcaption><div>{chapterVisualSteps.map((step,index)=><span key={`${step}-visual`}><b>{index+1}</b><em>{step}</em>{index<chapterVisualSteps.length-1&&<ArrowRight size={15}/>}</span>)}</div></figure>
                <article><strong>{english?"What earns marks":"যেখানে নম্বর তৈরি হয়"}</strong><ul>{chapterExamTargets.map(item=><li key={item}><CheckCircle2 size={14}/>{item}</li>)}</ul></article>
              </div>
            </section>
            <section className="subject-note-progress" aria-label={english?"Detailed note progress":"বিস্তারিত নোট পড়ার অগ্রগতি"}>
              <div><span style={{width:`${Math.round((readLessons.length/Math.max(1,resource?.lessonDetails?.length??1))*100)}%`}}/></div>
              <p><strong>{readLessons.length}/{resource?.lessonDetails?.length??0}</strong> {english?"lessons revised":"টি পাঠ রিভিশন হয়েছে"}</p>
              <small>{english?"Mark a lesson after you can explain its central idea without looking.":"কোনো পাঠের মূল ধারণা না দেখে ব্যাখ্যা করতে পারলে সেটি সম্পন্ন হিসেবে চিহ্নিত করো।"}</small>
            </section>
            {isStructuredManual&&resource?.chapterWorkshop&&<section className={`ict-note-opening ${isLogic?"logic-note-opening":isAccounting?"accounting-note-opening":isFinance?"finance-note-opening":""}`} aria-label="এই অধ্যায়ের পড়ার মানচিত্র">
              <div><span>{isLogic?"ARGUMENT ROADMAP":isAccounting?"WORKING ROADMAP":isFinance?"DECISION ROADMAP":"CHAPTER ROADMAP"}</span><h4>{isLogic?"প্রথমে যুক্তির পথটি চোখে দেখো":isAccounting?"অঙ্ক শুরুর আগে হিসাবের পথ ঠিক করো":isFinance?"সূত্রের আগে সময়, নগদপ্রবাহ ও লক্ষ্য সাজাও":"প্রথমে পুরো অধ্যায়টি একবার দেখে নাও"}</h4><p>{resource?.guide?.concept}</p></div>
              <ol>{resource.chapterWorkshop.visual.steps.map((step,index)=><li key={step}><b>{String(index+1).padStart(2,"0")}</b><span>{step}</span></li>)}</ol>
              <aside><strong>{isLogic?"যুক্তি যাচাইয়ের অভ্যাস":isAccounting?"প্রতিটি অঙ্কে একই discipline":isFinance?"Calculation থেকে decision":"এই নোট যেভাবে পড়বে"}</strong><p>{isLogic?"বক্তব্য আলাদা করো → premise ও conclusion চিহ্নিত করো → নিয়ম বসাও → counterexample খোঁজো → তারপর verdict লেখো।":isAccounting?"উৎস দলিল পড়ো → হিসাবের নাম ঠিক করো → Dr/Cr নির্ধারণ করো → working দেখাও → জের ও statement cross-check করো।":isFinance?"সময়রেখা আঁকো → চলক ও হার ঠিক করো → সূত্রে মান বসাও → এককসহ ফল লেখো → ঝুঁকি, তারল্য ও সীমাবদ্ধতা ধরে সিদ্ধান্ত দাও।":"ধারণা বোঝো → চিত্র/ছক নিজে আঁকো → উদাহরণের ধাপ ঢেকে আবার করো → শেষে CQ ও self-check দিয়ে যাচাই করো।"}</p></aside>
            </section>}
            <section id="lesson-notes" className="subject-note-chapter">
              <header><span>01</span><div><small>{english?"DETAILED LESSON NOTES":isIct?"CONCEPT NOTE · উদাহরণসহ":isLogic?"CONCEPT · RULE · TEST":isAccounting?"TRANSACTION · WORKING · CHECK":isFinance?"CASH FLOW · FORMULA · DECISION":"বিস্তারিত পাঠ নোট"}</small><h4>{english?"Understand every lesson before memorising":isIct?"কী, কেন এবং কীভাবে—একই ধারায় শেখো":isLogic?"সংজ্ঞা মুখস্থ নয়—উদাহরণে নিয়মটি পরীক্ষা করো":isAccounting?"কেন Debit বা Credit—Working-সহ বুঝে অঙ্ক করো":isFinance?"শুধু হিসাব নয়—ফলটি কী সিদ্ধান্ত দেয়, সেটিও বোঝো":"মুখস্থ নয়—প্রতিটি পাঠ বুঝে শেখো"}</h4></div></header>
              <div className="subject-chapter-map"><span>{english?"CHAPTER MAP":"অধ্যায়ের মানচিত্র"}</span><div>{(resource?.lessonDetails??[]).map((lesson,index)=><a key={`${lesson.title}-map`} href={`#full-note-${index+1}`} className={readLessons.includes(index)?"complete":""}><b>{String(index+1).padStart(2,"0")}</b>{lesson.title}</a>)}</div></div>
              {literatureClinic&&<section className="note-entry-diagnostic"><header><div><span>পাঠে ঢোকার আগে</span><strong>মূল লেখাটি কতটা ধরতে পেরেছ?</strong></div><small>নিজে উত্তর ভেবে তারপর ব্যাখ্যা খোলো</small></header><div>{literatureClinic.precheck.map((item,index)=><details key={`${item.question}-${index}`}><summary><b>{String(index+1).padStart(2,"0")}</b><span>{item.question}</span></summary><p><strong>উত্তর ও ব্যাখ্যা: </strong>{item.answer}</p></details>)}</div></section>}
              {literatureClinic&&<section className="literature-note-clinic"><div className="literature-outcomes"><span>এই পাঠ শেষে পারবে</span><ul>{literatureClinic.outcomes.map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul></div><div className="literature-glossary"><header><span>শব্দ ও টীকা</span><strong>শুধু অর্থ নয়—পাঠে শব্দটির কাজ বোঝো</strong></header><div>{literatureClinic.glossary.map(item=><article key={item.term}><b>{item.term}</b><p>{item.meaning}</p></article>)}</div></div></section>}
              <div className="subject-lesson-notes">{(resource?.lessonDetails??[]).map((lesson,index)=><article id={`full-note-${index+1}`} key={`${lesson.title}-full-${index}`}>
                <div className="lesson-note-title"><b>{String(index+1).padStart(2,"0")}</b><div><h5>{lesson.title}</h5><p>{lesson.concept}</p></div></div>
                {(lesson.foundation||lesson.advanced)&&<div className="lesson-depth-ladder">
                  {lesson.foundation&&<section><span>{english?"FOUNDATION":"BASIC FOUNDATION"}</span><strong>{lesson.foundation.question}</strong><p>{lesson.foundation.answer}</p></section>}
                  {lesson.advanced&&<section className="advanced"><span>{english?"ADVANCED APPLICATION":"ADVANCED NOTE"}</span><strong>{lesson.advanced.focus}</strong><p>{lesson.advanced.explanation}</p><aside><b>{english?"Transfer task: ":"নতুন প্রশ্নে প্রয়োগ: "}</b>{lesson.advanced.transfer}</aside></section>}
                </div>}
                <div className="lesson-note-body"><section><strong>{english?"How it works":"ধাপে ধাপে বোঝো"}</strong><ol>{lesson.steps.map((step,stepIndex)=><li key={`${step}-${stepIndex}`}>{step}</li>)}</ol></section><section><strong>{english?"Application":"প্রয়োগ"}</strong><p>{lesson.application}</p>{lesson.workedSnapshot&&<p><b>{english?"Worked snapshot: ":"সমাধানের নমুনা: "}</b>{lesson.workedSnapshot}</p>}</section></div>
                <section className="lesson-independent-work"><div><strong>{english?"Try independently":"নিজে সমাধান করো"}</strong><p>{lesson.practicePrompt}</p></div><div><strong>{english?"Answer check":"উত্তর যাচাই"}</strong><p>{lesson.answerCheck}</p></div></section>
                {!english&&activePaper!=="2nd Paper"&&(()=>{const allCqs=(resource?.bank.questions??[]).filter(question=>question.type==="CQ");const matched=allCqs.filter(question=>question.promptBn?.includes(`“${lesson.title}”`));const examples=(matched.length?matched:allCqs.slice(index*3,index*3+3)).slice(0,3);return examples.length?<details className="topic-cq-clinic"><summary><span>৩টি CQ · ১+২+৩+৪</span><strong>এই পাঠ থেকে পূর্ণ নম্বরের উত্তর অনুশীলন</strong></summary><div>{examples.map((question,cqIndex)=><article key={`${lesson.title}-cq-${cqIndex}`}><header><b>{cqIndex+1}</b><span>{question.category} · {question.level}</span></header><p className="topic-cq-prompt">{question.promptBn}</p><details><summary>ধাপে ধাপে Model Answer</summary><p className="topic-cq-answer">{question.modelAnswerBn}</p>{question.markingPointsBn&&<ol>{question.markingPointsBn.map(point=><li key={point}>{point}</li>)}</ol>}</details></article>)}</div></details>:null;})()}
                {(lesson.commonTrap||lesson.checkpoint)&&<aside><span>{english?"CHECK BEFORE MOVING ON":"পরের পাঠে যাওয়ার আগে"}</span>{lesson.commonTrap&&<p><b>{english?"Common trap: ":"সাধারণ ভুল: "}</b>{lesson.commonTrap}</p>}<p>{lesson.checkpoint}</p></aside>}
                {lesson.recallQuestions?.length&&<details><summary>{english?"Active recall questions":"না দেখে মনে করার প্রশ্ন"}</summary><ul>{lesson.recallQuestions.map(question=><li key={question}>{question}</li>)}</ul>{lesson.stretchPrompt&&<p><b>{english?"Challenge: ":"চ্যালেঞ্জ: "}</b>{lesson.stretchPrompt}</p>}</details>}
                <button type="button" className={`lesson-read-button ${readLessons.includes(index)?"complete":""}`} onClick={()=>toggleLessonRead(index)}><CheckCircle2 size={16}/>{readLessons.includes(index)?(english?"Revised — mark unread":"রিভিশন হয়েছে — বাতিল করো"):(english?"Mark lesson revised":"রিভিশন সম্পন্ন হিসেবে রাখো")}</button><p className="print-completion-check">□ {english?"I can explain this lesson without looking at the note.":"নোট না দেখে এই পাঠের মূল কথা ব্যাখ্যা করতে পারি।"}</p>
              </article>)}</div>
            </section>
            <section id="terms-structures" className="subject-note-chapter split">
              <header><span>02</span><div><small>{english?"REFERENCE SHEET":"রেফারেন্স শিট"}</small><h4>{english?"Terminology, formulae and answer structures":"পরিভাষা, সূত্র ও প্রয়োজনীয় কাঠামো"}</h4></div></header>
              <article><strong>{english?"Important terms":"গুরুত্বপূর্ণ পরিভাষা"}</strong><div className="subject-term-cloud">{(resource?.guide?.terminology??[]).map(term=><span key={term}>{term}</span>)}</div></article>
              <article><strong>{english?"Formula / structure sheet":"সূত্র ও কাঠামোর শিট"}</strong><ol>{(resource?.guide?.structures??[]).map((item,index)=><li key={item}><b>{String(index+1).padStart(2,"0")}</b>{item}</li>)}</ol></article>
              <article className="wide"><strong>{english?"Reusable method":"বারবার ব্যবহারযোগ্য সমাধানপদ্ধতি"}</strong><ol>{(resource?.guide?.method??[]).map((item,index)=><li key={item}><b>{index+1}</b>{item}</li>)}</ol></article>
            </section>
            {!isIct&&!isLogic&&<section className="subject-note-chapter subject-workbook-sheet">
              <header><span>03</span><div><small>{workbook.label}</small><h4>{workbook.title}</h4></div></header>
              <div className="subject-workbook-scroll"><table><thead><tr>{workbook.columns.map(column=><th key={column}>{column}</th>)}</tr></thead><tbody>{workbook.rows(chapterTitle??"").map((row,rowIndex)=><tr key={`${subject.id}-workbook-${rowIndex}`}>{row.map((cell,cellIndex)=><td key={`${cell}-${cellIndex}`}>{cell}</td>)}</tr>)}</tbody></table></div>
              <aside><PenLine size={17}/><p>{workbook.reminder}</p></aside>
              <details><summary>{english?"Use this sheet now":"এই ছকটি এখন নিজে পূরণ করো"}</summary><p>{english?`Close the completed example and rebuild this worksheet for “${chapterTitle}” using one new question. Compare only after finishing.`:`সমাধান করা উদাহরণ বন্ধ করে “${chapterTitle}” অধ্যায়ের একটি নতুন প্রশ্ন নিয়ে ছকটি খাতায় পূরণ করো। শেষ করার পরই নোটের সঙ্গে মিলিয়ে দেখো।`}</p></details>
            </section>}
            {!isIct&&<section id="worked-examples" className="subject-note-chapter">
              <header><span>04</span><div><small>{english?"WORKED EXAMPLES":"সমাধানসহ উদাহরণ"}</small><h4>{english?"See the method, then try it independently":"পদ্ধতি দেখো, তারপর নিজে সমাধান করো"}</h4></div></header>
              <div className="subject-worked-grid"><article className="primary"><span>{english?"CORE EXAMPLE":"মূল উদাহরণ"}</span><h5>{resource?.worked.problem}</h5><ol>{resource?.worked.steps.map((step,index)=><li key={step}><b>{index+1}</b>{step}</li>)}</ol><p><strong>{english?"Answer: ":"উত্তর: "}</strong>{resource?.worked.answer}</p></article>{(resource?.extraWorked??[]).map((item,index)=><article key={`${item.title}-${index}`}><span>{english?`EXAMPLE ${index+2}`:`উদাহরণ ${index+2}`}</span><h5>{item.title}</h5><p>{item.problem}</p><ol>{item.approach.map(step=><li key={step}>{step}</li>)}</ol><aside>{item.checkpoint}</aside></article>)}</div>
            </section>}
            {resource?.chapterWorkshop&&<section id="ict-workshop" className="subject-note-chapter chapter-workshop">
              <header><span>05</span><div><small>{isLogic?"ARGUMENT & RULE LAB":isAccounting?"WORKING & STATEMENT LAB":isFinance?"CASH-FLOW & DECISION LAB":"CHAPTER-SPECIFIC WORKSHOP"}</small><h4>{resource.chapterWorkshop.title}</h4></div></header>
              <div className="workshop-formulas"><strong>সূত্র ও সংজ্ঞার শিট</strong>{resource.chapterWorkshop.formulaSheet.map(item=><p key={item}>{item}</p>)}</div>
              <div className="workshop-table-wrap"><table><thead><tr>{resource.chapterWorkshop.comparison.headers.map(item=><th key={item}>{item}</th>)}</tr></thead><tbody>{resource.chapterWorkshop.comparison.rows.map((row,index)=><tr key={index}>{row.map(cell=><td key={cell}>{cell}</td>)}</tr>)}</tbody></table></div>
              <figure className="workshop-flow"><figcaption><strong>{resource.chapterWorkshop.visual.title}</strong><p>{resource.chapterWorkshop.visual.caption}</p></figcaption><div>{resource.chapterWorkshop.visual.steps.map((step,index)=><span key={step}><b>{String(index+1).padStart(2,"0")}</b><strong>{step}</strong>{index<resource.chapterWorkshop!.visual.steps.length-1&&<ArrowRight size={16}/>}</span>)}</div><p className="workshop-flow-result"><CheckCircle2 size={16}/>{english?"Use this route to produce a complete answer, not as a list to memorise.":"প্রতিটি ধাপের তথ্য পরের ধাপে ব্যবহার করে পূর্ণ উত্তর তৈরি করবে—এটি শুধু মুখস্থ করার তালিকা নয়।"}</p></figure>
              <article className="workshop-cq"><span>{isLogic?"ARGUMENT ANALYSIS · ১+২+৩+৪":isAccounting?"WORKINGসহ CQ · ১+২+৩+৪":isFinance?"CALCULATION + DECISION CQ · ১+২+৩+৪":"STEP-BY-STEP CQ · ১+২+৩+৪"}</span><h5>{resource.chapterWorkshop.cqSolution.stimulus}</h5>{resource.chapterWorkshop.cqSolution.parts.map(part=><section key={part.label}><b>{part.label} · {part.marks}</b><p>{part.answer}</p></section>)}</article>
              <div className="workshop-recap"><article><strong>৫ মিনিটের Recap</strong><ol>{resource.chapterWorkshop.fiveMinuteRecap.map(item=><li key={item}>{item}</li>)}</ol></article><article><strong>Exam-night Checklist</strong><ul>{resource.chapterWorkshop.examNightChecklist.map(item=><li key={item}>□ {item}</li>)}</ul></article></div>
              <div className="workshop-self-check"><strong>নিজেকে যাচাই করো—উত্তরসহ</strong>{resource.chapterWorkshop.selfCheck.map(item=><details key={item.question}><summary>{item.question}</summary><p>{item.explanation}</p></details>)}</div>
            </section>}
            {!isStructuredManual&&resource?.materialPack&&<section className="subject-note-chapter subject-material-pack">
              <header><span>M</span><div><small>{english?"CHAPTER MATERIAL PACK":"অধ্যায়ভিত্তিক MATERIAL PACK"}</small><h4>{resource.materialPack.identity}</h4></div></header>
              <p className="material-pack-intro">{resource.materialPack.introduction}</p>
              <div className="material-concept-grid">{resource.materialPack.conceptNotes.map((item,index)=><article key={`${item.title}-${index}`}><span>{String(index+1).padStart(2,"0")}</span><h5>{item.title}</h5><p>{item.explanation}</p><aside><strong>{english?"See it in context":"উদাহরণে দেখো"}</strong><p>{item.example}</p></aside></article>)}</div>
              <div className="material-worked-stack"><header><span>{english?"WORKED QUESTION & ANSWER":"প্রশ্ন, সমাধানের পথ ও পূর্ণ উত্তর"}</span><strong>{english?"Study the method, then rebuild the answer yourself.":"শুধু উত্তর পড়বে না—কোন ধাপে কেন এগিয়েছে, সেটিও ধরো।"}</strong></header>{resource.materialPack.workedAnswers.map((item,index)=><article key={`${item.label}-${index}`}><div><span>{item.label}</span><b>{String(index+1).padStart(2,"0")}</b></div><h5>{item.question}</h5><ol>{item.steps.map(step=><li key={step}>{step}</li>)}</ol><p><strong>{english?"Complete answer":"পূর্ণ উত্তর"}</strong>{item.answer}</p></article>)}</div>
              {resource.materialPack.assessmentFormat==="cq"&&<article className="material-full-cq"><header><span>পূর্ণাঙ্গ CQ · ১+২+৩+৪</span><h5>{resource.materialPack.fullCq.stimulus}</h5></header><div>{resource.materialPack.fullCq.parts.map(part=><section key={`${part.label}-${part.question}`}><div><b>{part.label}</b><span>{part.marks} নম্বর</span></div><h6>{part.question}</h6><p>{part.answer}</p></section>)}</div></article>}
              <div className="material-self-check"><header><span>{english?"CHECK WITHOUT LOOKING":"নোট বন্ধ করে যাচাই"}</span><strong>{english?"Answer first—then reveal the guide.":"আগে নিজের উত্তর বলো, তারপর মিলিয়ে দেখো।"}</strong></header>{resource.materialPack.selfCheck.map((item,index)=><details key={`${item.question}-${index}`}><summary><b>Q{index+1}</b>{item.question}</summary><p>{item.answer}</p></details>)}</div>
            </section>}
            {!isIct&&resource?.modelExamples?.length&&<section className="subject-note-chapter model-answer-studio">
              <header><span>{codeLab?"07":"06"}</span><div><small>{english?"MODEL ANSWER STUDIO":"নমুনা উত্তর স্টুডিও"}</small><h4>{english?"Read a complete model, then rebuild it":"পূর্ণ উদাহরণ দেখো—তারপর নতুন প্রশ্নে নিজে লেখো"}</h4></div></header>
              <p className="model-studio-intro">{english?"These are teaching models, not passages to memorise. Notice the structure, development and final check.":"এগুলো মুখস্থ করার লেখা নয়। কীভাবে ভূমিকা, মূল ব্যাখ্যা, প্রমাণ/উদাহরণ ও উপসংহার সাজানো হয়েছে—সেটি দেখে নতুন প্রশ্নে একই পদ্ধতি ব্যবহার করো।"}</p>
              <div className="model-answer-grid">{resource.modelExamples.map((example,index)=><article key={`${example.kind}-${example.title}-${index}`}><div className="model-answer-meta"><span>{example.kind}</span><b>{String(index+1).padStart(2,"0")}</b></div><h5>{example.title}</h5><p className="model-prompt"><strong>{english?"Task: ":"প্রশ্ন: "}</strong>{example.prompt}</p><div className="model-answer-copy">{example.answer.map((paragraph,paragraphIndex)=><p key={paragraphIndex}>{paragraph}</p>)}</div><aside><strong>{english?"Examiner note":"পরীক্ষকের নোট"}</strong><p>{example.examinerNote}</p></aside></article>)}</div>
            </section>}
            {resource?.graphPractice&&<section className="subject-note-chapter graph-practice-studio">
              <header><span>VISUAL</span><div><small>{english?"DRAW · LABEL · EXPLAIN":"আঁকো · Label দাও · ব্যাখ্যা করো"}</small><h4>{resource.graphPractice.title}</h4></div></header>
              <div className="graph-practice-layout"><svg viewBox="0 0 100 100" role="img" aria-label={resource.graphPractice.title}><line x1="10" y1="88" x2="94" y2="88" className="graph-axis"/><line x1="10" y1="88" x2="10" y2="8" className="graph-axis"/><polyline points={resource.graphPractice.points.map(point=>`${point.x},${88-point.y*.8}`).join(" ")} className="graph-line"/>{resource.graphPractice.points.map(point=><g key={point.label}><circle cx={point.x} cy={88-point.y*.8} r="2.4"/><text x={point.x+2.5} y={88-point.y*.8-2}>{point.label}</text></g>)}<text x="53" y="98" textAnchor="middle">{resource.graphPractice.xLabel}</text><text x="4" y="48" textAnchor="middle" transform="rotate(-90 4 48)">{resource.graphPractice.yLabel}</text></svg><div><strong>{english?"How to use the visual":"চিত্রটি কীভাবে ব্যবহার করবে"}</strong><p>{resource.graphPractice.caption}</p><ol><li>{english?"Copy the axes and choose a scale from the question.":"প্রশ্নের তথ্য অনুযায়ী অক্ষ ও scale ঠিক করো।"}</li><li>{english?"Plot and label every required point or curve.":"প্রতিটি প্রয়োজনীয় বিন্দু/রেখা ও পরিবর্তন label করো।"}</li><li>{english?"Explain the cause and meaning below the graph.":"চিত্রের নিচে কারণ, পরিবর্তন ও ফলের অর্থ লেখো।"}</li></ol></div></div>
            </section>}
            {codeLab&&<section id="code-lab" className="subject-note-chapter subject-code-lab">
              <header><span>05</span><div><small>{isAccounting?"FORMAT · POST · RECONCILE":"WRITE · TRACE · DEBUG"}</small><h4>{codeLab.title}</h4></div></header>
              <p className="code-lab-intro">{codeLab.intro}</p>
              <div className="code-example-grid">{codeLab.examples.map((example,index)=><article key={example.label}><header><b>0{index+1}</b><strong>{example.label}</strong></header><pre><code>{example.code}</code></pre><aside><span>TRACE</span><p>{example.trace}</p></aside><details><summary>{english?"Now modify it":"এবার নিজে বদলাও"}</summary><p>{english?"Change the input, write the predicted output, then explain which variable or condition changed it.":"Input বদলে আগে সম্ভাব্য output লেখো। তারপর কোন variable বা condition ফল বদলেছে—এক বাক্যে ব্যাখ্যা করো।"}</p></details></article>)}</div>
            </section>}
            <section id="answer-framework" className="subject-note-chapter split">
              <header><span>{codeLab?"06":"05"}</span><div><small>{writtenTask?(english?"TASK FORMAT":"লিখিত কাজের বিন্যাস"):(english?"EXAM ANSWER FRAMEWORK":"পরীক্ষার উত্তর কাঠামো")}</small><h4>{writtenTask?(english?"Match format, purpose and audience":"ধরন, উদ্দেশ্য ও পাঠক অনুযায়ী উত্তর সাজাও"):(english?"Build answers that match the question pattern":"প্রশ্নের ধরন অনুযায়ী পূর্ণাঙ্গ উত্তর সাজাও")}</h4></div></header>
              <article><strong>{english?"Practice task":"অনুশীলনের কাজ"}</strong><p>{writtenTask?(primaryModel?.prompt??resource?.worked.problem):resource?.cq.stimulus}</p></article>
              <article><strong>{english?"Answer route":"উত্তরের ধাপ"}</strong><ol>{(writtenTask?(primaryModel?[english?"Identify the exact task, audience and required format.":"কাজের ধরন, পাঠক/প্রাপক ও বাধ্যতামূলক বিন্যাস আগে শনাক্ত করো।",...primaryModel.answer.map((part,index)=>`${index+1}. ${part}`),english?`Final check: ${primaryModel.examinerNote}`:`শেষ যাচাই: ${primaryModel.examinerNote}`]:[]):resource?.cq.framework??[]).map((item,index)=><li key={`${item}-${index}`}><b>{index+1}</b>{item}</li>)}</ol></article>
              <article className="wide"><strong>{english?"Examiner's marking lens":"পরীক্ষকের মূল্যায়ন দৃষ্টিভঙ্গি"}</strong><div className="subject-rubric-grid">{(resource?.examinerRubric??[]).map(item=><div key={item.command}><b>{item.command} · {item.marks}</b><p>{item.mustShow}</p><small>{english?"Avoid: ":"যে কারণে নম্বর কমে: "}{item.losesMarks}</small></div>)}</div></article>
            </section>
            <section id="mistakes-checklist" className="subject-note-chapter split">
              <header><span>{codeLab?"07":"06"}</span><div><small>{english?"FINAL CHECK":"চূড়ান্ত যাচাই"}</small><h4>{english?"Common mistakes, scoring moves and exam checklist":"সাধারণ ভুল, নম্বর তোলার কৌশল ও পরীক্ষার চেকলিস্ট"}</h4></div></header>
              <article className="mistakes"><strong>{english?"Common mistakes":"সাধারণ ভুল"}</strong><ul>{(resource?.examToolkit?.mistakes??[]).map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul></article>
              <article><strong>{english?"Scoring moves":"নম্বর তোলার কৌশল"}</strong><ul>{(resource?.examToolkit?.scoringMoves??[]).map(item=><li key={item}><CheckCircle2 size={15}/>{item}</li>)}</ul></article>
              <article className="wide"><strong>{english?"Before the exam":"পরীক্ষার আগে মিলিয়ে নাও"}</strong><ul className="subject-final-checks">{(resource?.guide?.examChecklist??[]).map(item=><li key={item}><span>□</span>{item}</li>)}</ul></article>
            </section>
            <section className="subject-note-chapter subject-note-bank notebook-paper">
              <header><span>{codeLab?"08":"07"}</span><div><small>{english?"RECALL DESK":"RECALL DESK"}</small><h4>{english?"Close the note. Prove what you can recall.":"নোট বন্ধ করো—কতটা বুঝেছ, এবার যাচাই করো"}</h4></div></header>
              <div className="notebook-overview"><article><small>{english?"ONE-MINUTE SUMMARY":"এক মিনিটের সারাংশ"}</small><p>{resource?.guide?.concept}</p></article><article><small>{english?"FINAL ROUTE":"শেষবার মিলিয়ে নাও"}</small><p>{english?"Explain the idea → solve one fresh task → check the mistake → revisit only the gap.":"মূল কথাটি বলো → নতুন একটি প্রশ্ন করো → ভুলটি ধরো → শুধু ঘাটতির অংশ আবার পড়ো।"}</p></article></div>
              <section className="notebook-self-check"><header><span>{english?"QUICK SELF-CHECK":"দ্রুত নিজেকে যাচাই"}</span><strong>{english?"Answer without reopening the note":"নোট না খুলে উত্তর দাও"}</strong></header><div>{(resource?.lessonDetails??[]).slice(0,5).map((lesson,index)=><details key={lesson.title}><summary><b>0{index+1}</b>{lesson.recallQuestions?.[0]??lesson.practicePrompt}</summary><p>{lesson.answerCheck}</p></details>)}</div></section>
            </section>
          </div> : noteMode==="quick" ? <div className="subject-revision-book">
            <section className="revision-book-overview"><span>{english?"CHAPTER IN ONE VIEW":"এক নজরে অধ্যায়"}</span><h4>{chapterTitle}</h4><p>{resource?.guide?.concept}</p></section>
            <section className="revision-book-grid">
              <article><header><span>01</span><div><small>{english?"RECALL FIRST":"আগে মনে করো"}</small><h4>{english?"Explain each idea without looking":"নোট না দেখে ধারণাগুলো বলো"}</h4></div></header><div>{revisionLessons.map((lesson,index)=><details key={`${lesson.title}-revision`}><summary><b>{String(index+1).padStart(2,"0")}</b><span>{lesson.title}</span></summary><p>{lesson.concept}</p>{lesson.application&&<aside><strong>{english?"Use it":"প্রয়োগ"}</strong>{lesson.application}</aside>}</details>)}</div></article>
              <article><header><span>02</span><div><small>{english?"TERMS & STRUCTURES":"পরিভাষা ও কাঠামো"}</small><h4>{english?"What must stay precise":"যেখানে নির্ভুলতা জরুরি"}</h4></div></header><div className="revision-reference-stack"><section><strong>{english?"Key terms":"গুরুত্বপূর্ণ পরিভাষা"}</strong><div className="subject-term-cloud">{(resource?.guide?.terminology??[]).slice(0,12).map(term=><span key={term}>{term}</span>)}</div></section><section><strong>{english?"Formula / answer structure":"সূত্র / উত্তর কাঠামো"}</strong><ol>{(resource?.chapterWorkshop?.formulaSheet??resource?.guide?.structures??[]).slice(0,8).map(item=><li key={item}>{item}</li>)}</ol></section></div></article>
              <article><header><span>03</span><div><small>{english?"REPAIR THE GAPS":"ভুল ঠিক করো"}</small><h4>{english?"Common traps and answer checks":"সাধারণ ভুল ও উত্তর যাচাই"}</h4></div></header><div className="revision-repair-list">{(resource?.examToolkit?.mistakes??revisionLessons.map(item=>item.commonTrap).filter(Boolean) as string[]).slice(0,7).map((mistake,index)=><p key={`${mistake}-${index}`}><b>×</b>{mistake}</p>)}</div></article>
              <article><header><span>04</span><div><small>{english?"ACTIVE RECALL":"না দেখে যাচাই"}</small><h4>{english?"Answer, then open the check":"উত্তর দাও, তারপর মিলিয়ে দেখো"}</h4></div></header><div>{revisionLessons.slice(0,6).map((lesson,index)=><details key={`${lesson.title}-recall`}><summary><b>Q{index+1}</b><span>{lesson.recallQuestions?.[0]??lesson.practicePrompt}</span></summary><p>{lesson.answerCheck??lesson.checkpoint}</p></details>)}</div></article>
            </section>
          </div> : <div className="subject-exam-night-book">
            <section className="exam-night-lead"><div><span>{english?"5–15 MINUTE REVIEW":"৫–১৫ মিনিটের রিভিশন"}</span><h4>{chapterTitle}</h4><p>{resource?.guide?.concept}</p></div><aside><strong>{english?"Use this after studying the chapter":"অধ্যায় পড়া শেষ হলে এটি ব্যবহার করো"}</strong><p>{english?"Read the summary, reproduce the structure, check one worked model and finish with the checklist.":"সারকথা পড়ো, সূত্র/কাঠামো না দেখে লেখো, একটি সমাধান মিলাও, তারপর শেষ চেকলিস্ট দেখো।"}</p></aside></section>
            <section className="exam-night-grid">
              <article className="exam-night-must"><header><span>01</span><div><small>{english?"CORE KNOWLEDGE":"অধ্যায়ের মূল তথ্য"}</small><h4>{english?"What you must be able to explain":"যা অবশ্যই ব্যাখ্যা করতে পারবে"}</h4></div></header><ol>{(resource?.chapterWorkshop?.fiveMinuteRecap??revisionLessons.map(lesson=>`${lesson.title}: ${lesson.concept}`)).slice(0,8).map(item=><li key={item}>{item}</li>)}</ol></article>
              <article><header><span>02</span><div><small>{english?"FORMULA / STRUCTURE":"সূত্র ও কাঠামো"}</small><h4>{english?"Write these once from memory":"না দেখে একবার লিখে নাও"}</h4></div></header><ol>{(resource?.chapterWorkshop?.formulaSheet??resource?.guide?.structures??[]).slice(0,8).map(item=><li key={item}>{item}</li>)}</ol></article>
              <article className="exam-night-worked"><header><span>03</span><div><small>{english?"ONE WORKED MODEL":"একটি সমাধান মনে রাখো"}</small><h4>{resource?.worked.problem}</h4></div></header><ol>{resource?.worked.steps.slice(0,6).map(step=><li key={step}>{step}</li>)}</ol><p><strong>{english?"Final answer: ":"চূড়ান্ত উত্তর: "}</strong>{resource?.worked.answer}</p></article>
              {writtenTask&&primaryModel?<article className="exam-night-cq written-task-review"><header><span>04</span><div><small>{english?"FORMAT SNAPSHOT":"বিন্যাসের ঝালাই"}</small><h4>{primaryModel.kind} · {primaryModel.title}</h4></div></header><p><strong>{english?"Task: ":"প্রশ্ন: "}</strong>{primaryModel.prompt}</p><div>{primaryModel.answer.map((part,index)=><section key={`${part}-${index}`}><b>{english?`PART ${index+1}`:`অংশ ${index+1}`}</b><p>{part}</p></section>)}</div><aside><strong>{english?"Final check":"শেষ যাচাই"}</strong><p>{primaryModel.examinerNote}</p></aside></article>:resource?.chapterWorkshop?.cqSolution&&<article className="exam-night-cq"><header><span>04</span><div><small>{english?"ANSWER FRAME":"CQ উত্তর কাঠামো"}</small><h4>{english?"Match depth to marks":"নম্বর অনুযায়ী উত্তরের গভীরতা"}</h4></div></header><p>{resource.chapterWorkshop.cqSolution.stimulus}</p><div>{resource.chapterWorkshop.cqSolution.parts.map(part=><section key={part.label}><b>{part.label} · {part.marks}</b><p>{part.answer}</p></section>)}</div></article>}
              <article className="exam-night-traps"><header><span>05</span><div><small>{english?"LAST CHECK":"শেষবার মিলিয়ে নাও"}</small><h4>{english?"Avoid lost marks":"যে ভুলে নম্বর কমে"}</h4></div></header><ul>{(resource?.examToolkit?.mistakes??[]).slice(0,6).map(item=><li key={item}>× {item}</li>)}</ul><strong>{english?"Before you stop":"শেষ করার আগে"}</strong><ul>{(resource?.chapterWorkshop?.examNightChecklist??resource?.guide?.examChecklist??[]).slice(0,7).map(item=><li key={item}>□ {item}</li>)}</ul></article>
            </section>
          </div>}</>}
        </section>}
        {mode==="practice"&&<section className="subject-mode-panel"><span>PRACTICE</span><h3>{english?"Build confidence through fresh questions.":"নতুন প্রশ্নে নিজের প্রস্তুতি যাচাই করো।"}</h3><p>{english?"Choose MCQ, CQ or written practice. Answers remain hidden until submission.":"MCQ, CQ অথবা লিখিত প্রশ্ন বেছে নাও। উত্তর জমা দেওয়ার আগে সঠিক উত্তর দেখানো হবে না।"}</p><div className="subject-question-stats"><span><strong>{questionCounts.mcq}</strong><small>MCQ</small></span><span><strong>{questionCounts.cq}</strong><small>CQ</small></span><span><strong>{questionCounts.written}</strong><small>{english?"Written":"লিখিত"}</small></span></div><button type="button" onClick={()=>openDashboard("practice")}>{english?"Open Practice Studio":"Practice Studio খোলো"}<ArrowRight size={17}/></button></section>}
        {mode==="revision"&&<section className="subject-mode-panel"><span>REVISION</span><h3>{english?"Recall first. Review only what you miss.":"আগে মনে করার চেষ্টা করো, তারপর প্রয়োজনীয় অংশ দেখো।"}</h3><p>{resource?.guide?.examChecklist.slice(0,5).join(" · ")}</p><div className="subject-revision-tags">{(resource?.guide?.terminology??[]).slice(0,8).map(item=><span key={item}>{item}</span>)}</div><button type="button" onClick={()=>openDashboard("practice")}>{english?"Practise this chapter":"এই অধ্যায়ের প্রশ্ন অনুশীলন করো"}<ArrowRight size={17}/></button></section>}
      </section>
    </div>
    <nav className="subject-mobile-actions"><Link href={`/${group}`}><ArrowLeft size={17}/>{english?"Dashboard":"ড্যাশবোর্ড"}</Link><button type="button" onClick={()=>chooseMode("notes")}><FileText size={17}/>{english?"Notes":"নোট"}</button></nav>
  </main>;
}
