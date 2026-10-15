import Link from "next/link";
import { ArrowLeft, BookOpenCheck } from "lucide-react";

export const metadata = {
  title: "Terms — HSC2Plus",
  description: "HSC2Plus-এর independent status, academic limitations, copyright, reuse এবং responsible-use terms।",
};

export default function TermsPage() {
  const year = new Date().getFullYear();
  return <main className="legal-page">
    <div className="legal-shell">
      <Link className="legal-brand" href="/"><span className="brand-mark"><BookOpenCheck size={20}/></span><span>HSC2Plus</span></Link>
      <article className="legal-card">
        <span className="eyebrow">TERMS OF USE</span>
        <h1>ব্যবহারের শর্ত</h1>
        <p className="legal-updated">সর্বশেষ হালনাগাদ: ১৫ অক্টোবর ২০২৬ · শর্তাবলির সংস্করণ 2026.10.15</p>
        <p className="legal-highlight">HSC2Plus একটি স্বাধীন শিক্ষাসহায়ক প্ল্যাটফর্ম—এটি NCTB, কোনো শিক্ষা বোর্ড, কলেজ বা সরকারি প্রতিষ্ঠানের অফিসিয়াল সেবা নয়।</p>
        <section className="legal-section"><h2>একাডেমিক অবস্থা</h2><p>যোগ্য একাডেমিক পর্যালোচকের যাচাই শেষ না হওয়া পর্যন্ত সংশ্লিষ্ট পর্যালোচনার অবস্থা স্পষ্টভাবে দেখানো হবে। চলতি সিলেবাস, পাঠ্যবইয়ের অনুমোদিত সংস্করণ এবং শিক্ষকের নির্দেশনাকে অগ্রাধিকার দাও।</p></section>
        <section className="legal-section"><h2>প্রশ্ন ও উৎস</h2><p>“Board-pattern” বা “College-standard” প্রশ্ন HSC কাঠামো অনুসরণ করে তৈরি নিজস্ব অনুশীলন; এগুলো বিগত বোর্ড প্রশ্ন নয়। কেবল বোর্ড, বছর, সেট, প্রশ্ন নম্বর এবং যাচাইযোগ্য উৎস থাকা প্রশ্নই বিগত বোর্ড আর্কাইভে প্রকাশ করা হবে।</p></section>
        <section className="legal-section"><h2>স্বত্ব ও পুনর্ব্যবহার</h2><ul><li>HSC2Plus-এর তৈরি নোট, ব্যাখ্যা, শিক্ষাচিত্র, নিজস্ব প্রশ্ন ও বিন্যাস © {year} HSC2Plus; ব্যক্তিগত পড়াশোনা ও শ্রেণিকক্ষের আলোচনায় ব্যবহার করা যায়।</li><li>অনুমতি ছাড়া সম্পূর্ণ নোটভান্ডার, প্রশ্নভান্ডার, ব্র্যান্ডিং বা PDF বাণিজ্যিকভাবে বিক্রি, পুনঃপ্রকাশ বা ব্যাপকভাবে বিতরণ করা যাবে না।</li><li>তৃতীয় পক্ষের ছবি ও উৎস প্রদর্শিত নির্মাতা ও লাইসেন্সের অধীন; HSC2Plus সেসব কাজের মালিকানা দাবি করে না।</li></ul></section>
        <section className="legal-section"><h2>দায়িত্বশীল ব্যবহার</h2><ul><li>অনুশীলনের নম্বর, প্রস্তুতির হিসাব ও নিজের যাচাই শেখার সহায়ক—এগুলো অফিসিয়াল ফলাফল বা শিক্ষকের মূল্যায়ন নয়।</li><li>কোনো পরীক্ষার ফল বা গ্রেড নিশ্চিত করা হয় না।</li><li>ডাউনলোড করা CQ প্রতিবেদন বা উত্তরের PDF শুধু এই ডিভাইসে ব্যবহৃত হলে সেটিকে AI মূল্যায়ন হিসেবে উপস্থাপন করা যাবে না।</li></ul></section>
        <section className="legal-section"><h2>Student Account ও Cloud backup</h2><p>Account তৈরি বাধ্যতামূলক নয়। Cloud backup ব্যবহারকারী নিজে শুরু করেন এবং Restore করলে বর্তমান browser-এর সংশ্লিষ্ট progress বদলে যেতে পারে। একাধিক device ব্যবহারের সময় সর্বশেষ সঠিক copy নির্বাচন করার দায়িত্ব ব্যবহারকারীর; HSC2Plus পুরোনো ও নতুন copy স্বয়ংক্রিয়ভাবে merge করার নিশ্চয়তা দেয় না।</p></section>
        <section className="legal-section"><h2>পরিবর্তন ও প্রাপ্যতা</h2><p>নির্ভুলতা, নিরাপত্তা ও পাঠ্যক্রমের সঙ্গে সামঞ্জস্য উন্নত করতে বিষয়বস্তু বা সুবিধা পরিবর্তিত হতে পারে। ভুল বা অসম্পূর্ণ উৎস পাওয়া গেলে সংশ্লিষ্ট উপকরণ প্রকাশ করা হবে না।</p></section>
        <section className="legal-section"><h2>বিষয়বস্তুর সংস্করণ</h2><p>বর্তমান প্রকাশনা নথি: 2026.10.15। প্রতিটি অধ্যায়ের পর্যালোচকের অবস্থা ও সর্বশেষ পর্যালোচনার তথ্য অধ্যায় অংশে দেখানো হয়। স্বয়ংক্রিয় যাচাই কখনোই যোগ্য একাডেমিক পর্যালোচকের অনুমোদনের বিকল্প নয়।</p></section>
        <nav className="legal-actions" aria-label="Legal links"><Link href="/support">Support</Link><Link href="/privacy">Privacy</Link></nav>
        <Link className="legal-back" href="/"><ArrowLeft size={16}/>বিভাগ বাছাইয়ে ফিরুন</Link>
      </article>
    </div>
  </main>;
}
