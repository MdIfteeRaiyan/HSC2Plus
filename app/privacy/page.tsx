import Link from "next/link";
import { ArrowLeft, BookOpenCheck } from "lucide-react";

export const metadata = {
  title: "Privacy — HSC2Plus",
  description: "HSC2Plus কীভাবে local progress, practice history, backups, analytics এবং uploaded CQ PDFs পরিচালনা করে।",
};

export default function PrivacyPage() {
  return <main className="legal-page">
    <div className="legal-shell">
      <Link className="legal-brand" href="/"><span className="brand-mark"><BookOpenCheck size={20}/></span><span>HSC2Plus</span></Link>
      <article className="legal-card">
        <span className="eyebrow">PRIVACY</span>
        <h1>তোমার তথ্য কোথায় থাকে</h1>
        <p className="legal-updated">সর্বশেষ হালনাগাদ: ১৫ অক্টোবর ২০২৬ · নীতিমালার সংস্করণ 2026.10.15</p>
        <p className="legal-highlight"><strong>সহজ কথায়:</strong> Guest হিসেবে পড়লে তথ্য শুধু এই browser-এ থাকে। ঐচ্ছিক Student Account চালু করে নিজে “Backup now” চাপলে পড়ার অগ্রগতির একটি private snapshot Supabase-এ সংরক্ষিত হয়।</p>
        <section className="legal-section"><h2>এই ডিভাইসে যা সংরক্ষিত হয়</h2><ul><li>সম্পন্ন ও সংরক্ষিত অধ্যায়</li><li>অনুশীলনের নম্বর, ভুলের তালিকা, পরীক্ষার ইতিহাস ও পড়ার পরিকল্পনা</li><li>Focus Timer-এর চলমান অবস্থা, দৈনিক পড়ার সময় এবং সাত দিনের history</li><li>অসম্পূর্ণ লিখিত উত্তরের খসড়া এবং অধ্যয়ন সেশনের অগ্রগতি</li></ul></section>
        <section className="legal-section"><h2>উত্তরের PDF ও AI মূল্যায়ন</h2><p>CQ অনুশীলনে বেছে নেওয়া PDF এই ডিভাইসের বাইরে পাঠানো হয় না। বর্তমানে AI মূল্যায়ন চালু নয়। নিরাপদ প্রক্রিয়াকরণ, স্পষ্ট সম্মতি এবং যথাযথ গোপনীয়তা নিয়ন্ত্রণ প্রস্তুত না হওয়া পর্যন্ত এটি চালু করা হবে না।</p></section>
        <section className="legal-section"><h2>হোস্টিং ও ব্যবহার পরিমাপ</h2><p>সাইটটি OpenAI Sites-এর পরিচালিত হোস্টিংয়ে প্রকাশিত। অ্যাপে Vercel Analytics ও Speed Insights যুক্ত আছে; হোস্টিং পরিবেশ সমর্থন করলে পেজ দেখা এবং কার্যক্ষমতার সাধারণ পরিমাপ পাঠানো হতে পারে। HSC2Plus ইচ্ছাকৃতভাবে localStorage-এ থাকা পড়াশোনার তথ্য, নির্বাচিত উত্তর, JSON ব্যাকআপের বিষয়বস্তু বা CQ-এর PDF বিশ্লেষণ সেবায় পাঠায় না। নিরাপত্তা ও সাইট সরবরাহের জন্য হোস্টিং প্রতিষ্ঠান সাধারণ অনুরোধ-সংক্রান্ত তথ্য প্রক্রিয়া করতে পারে।</p></section>
        <section className="legal-section"><h2>ঐচ্ছিক Supabase account</h2><p>Email magic link দিয়ে login করলে Supabase Authentication student-এর পরিচয় যাচাই করে। Cloud backup-এ HSC2Plus-এর localStorage progress keys, যেমন সম্পন্ন পাঠ, practice history, plan ও timer history থাকতে পারে। Row-level security অনুযায়ী প্রতিটি user কেবল নিজের progress row পড়তে বা পরিবর্তন করতে পারে। CQ answer PDF এই snapshot-এ রাখা হয় না।</p></section>
        <section className="legal-section"><h2>ব্যাকআপ, পুনরুদ্ধার ও মুছে ফেলা</h2><p>Guest mode-এ browser data মুছে গেলে স্থানীয় অগ্রগতি হারাতে পারে। Study Plan-এর JSON backup অথবা Student Account-এর manual Cloud backup দিয়ে অন্য browser-এ তথ্য ফিরিয়ে আনা যায়। Cloud sync ইচ্ছাকৃতভাবে manual রাখা হয়েছে, যাতে একটি পুরোনো device নীরবে নতুন progress overwrite না করে। Account বা Cloud row মুছে ফেলতে Support-এ যোগাযোগ করা যাবে।</p></section>
        <section className="legal-section"><h2>বাইরের লিংক</h2><p>NCTB বা শিক্ষা বোর্ডের অফিসিয়াল উৎস খুললে সংশ্লিষ্ট প্রতিষ্ঠানের ওয়েবসাইট ও গোপনীয়তার নিয়ম প্রযোজ্য হবে।</p></section>
        <section className="legal-section"><h2>Support</h2><p>পাঠের ভুল জানানো, অগ্রগতি পুনরুদ্ধার এবং কারিগরি সহায়তার বর্তমান ব্যবস্থা <Link href="/support">Support &amp; Content Trust</Link> পেজে দেওয়া আছে। সরাসরি সহায়তার ইনবক্স চালু না হওয়া পর্যন্ত কোনো ফর্ম সার্ভারে পাঠানো হয়—এমন দাবি করা হবে না।</p></section>
        <nav className="legal-actions" aria-label="Legal links"><Link href="/support">Support</Link><Link href="/terms">Terms &amp; reuse</Link></nav>
        <Link className="legal-back" href="/"><ArrowLeft size={16}/>বিভাগ বাছাইয়ে ফিরুন</Link>
      </article>
    </div>
  </main>;
}
