import Link from "next/link";
import { ArrowLeft, BookOpenCheck, CircleAlert, DatabaseBackup, LifeBuoy, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Support & content trust — HSC2Plus",
  description: "HSC2Plus-এর academic error reporting, local progress recovery, source policy এবং technical support guidance।",
};

export default function SupportPage() {
  return <main className="legal-page">
    <div className="legal-shell">
      <Link className="legal-brand" href="/"><span className="brand-mark"><BookOpenCheck size={20}/></span><span>HSC2Plus</span></Link>
      <article className="legal-card">
        <span className="eyebrow">SUPPORT & CONTENT TRUST</span>
        <h1>সহায়তা ও একাডেমিক তথ্য</h1>
        <p className="legal-updated">বিষয়বস্তুর সংস্করণ: 2026.10.12 · সর্বশেষ নথি পর্যালোচনা: ১২ অক্টোবর ২০২৬</p>
        <p className="legal-highlight"><strong>জরুরি কথা:</strong> HSC2Plus এখন অ্যাকাউন্ট ছাড়াই এই ডিভাইসে তথ্য সংরক্ষণ করে। কোনো উত্তরের PDF, অগ্রগতির ব্যাকআপ বা ভুলের প্রতিবেদন নিজে থেকে সার্ভারে পাঠানো হয় না।</p>

        <section className="support-paths" aria-label="সহায়তার ধরন">
          <article><CircleAlert size={21}/><h2>পাঠের ভুল</h2><p>পাঠ বা প্রশ্নের “কনটেন্টে সমস্যা জানাও” অংশ খুলে অবস্থান, ভুলের বিবরণ, প্রস্তাবিত সংশোধন ও সমর্থনকারী উৎস লিখে প্রতিবেদন ডাউনলোড করো। প্রতিবেদন তৈরি করলে বিষয়বস্তুর পর্যালোচনার অবস্থা বদলায় না।</p></article>
          <article><DatabaseBackup size={21}/><h2>অগ্রগতি ফিরে পাওয়া</h2><p>Study Plan থেকে আগে JSON ব্যাকআপ নাও। তথ্য ফিরিয়ে আনার সময় কেবল HSC2Plus থেকে নেওয়া JSON ফাইল ব্যবহার করো। ব্রাউজারের তথ্য মুছে গেলে ব্যাকআপ ছাড়া স্থানীয় অগ্রগতি ফেরানো সম্ভব নয়।</p></article>
          <article><LifeBuoy size={21}/><h2>কারিগরি সহায়তা</h2><p>সমস্যা জানাতে ডিভাইস ও ব্রাউজারের নাম, সংশ্লিষ্ট পেজ বা অধ্যায়, কোন কাজের সময় সমস্যা হয়েছে এবং সম্ভব হলে স্ক্রিনশট লিখে রাখো। সরাসরি সহায়তার ইনবক্স এখনো চালু হয়নি—তাই এই সংস্করণে কোনো ফর্ম তথ্য পাঠায় না।</p></article>
        </section>

        <section className="legal-section"><h2>প্রশ্নের উৎস</h2><p><strong>Previous-board</strong> পরিচয় কেবল বোর্ড, বছর, সেট, প্রশ্ন নম্বর এবং যাচাইযোগ্য উৎস-নথি থাকা প্রশ্নের জন্য ব্যবহার করা হয়। <strong>Board-pattern</strong> ও <strong>College-standard</strong> হলো HSC কাঠামো অনুসরণে তৈরি নিজস্ব অনুশীলন—এগুলো বিগত বোর্ড প্রশ্ন নয়। পূর্ণ উদ্ধৃতি ছাড়া কোনো প্রশ্ন যাচাইকৃত বিগত বোর্ড আর্কাইভে যোগ হবে না।</p></section>
        <section className="legal-section"><h2>উৎস ও ছবির নথি</h2><p>NCTB ক্যাটালগ, অফিসিয়াল বিজ্ঞপ্তি এবং শিক্ষা বোর্ডের উৎস আলাদা প্রমাণ-নথি হিসেবে রাখা হয়। বাস্তব ছবির নিচে নির্মাতা, লাইসেন্স ও উৎসের লিংক দেখানো হয়; HSC2Plus-এর নিজস্ব শিক্ষাচিত্র আলাদাভাবে চিহ্নিত। বাইরের উৎস পাওয়া মানেই অধ্যায়ক্রম বা উত্তর একাডেমিকভাবে অনুমোদিত—এমন দাবি করা হয় না।</p></section>
        <section className="legal-section"><h2>পর্যালোচনার অবস্থা</h2><p><ShieldCheck size={16}/> স্বয়ংক্রিয় যাচাই কাঠামো, পূর্ণতা ও পুনরাবৃত্তি শনাক্ত করতে পারে; যোগ্য বিষয় পর্যালোচকের নাম, ভূমিকা, তারিখ ও পাঠ্যক্রমের সংস্করণ ছাড়া “একাডেমিক পর্যালোচনা সম্পন্ন” দেখানো হবে না।</p></section>
        <nav className="legal-actions" aria-label="Support links"><Link href="/release-readiness">Release validation</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms & reuse</Link></nav>
        <Link className="legal-back" href="/"><ArrowLeft size={16}/>বিভাগ বাছাইয়ে ফিরুন</Link>
      </article>
    </div>
  </main>;
}
