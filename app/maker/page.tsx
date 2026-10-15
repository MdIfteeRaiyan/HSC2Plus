import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Lightbulb, Mail } from "lucide-react";
import { MakerProfileCard } from "@/components/maker-profile-card";

export const metadata: Metadata = {
  title: "Maker Profile | HSC2Plus",
  description: "Meet the student maker behind HSC2Plus and send suggestions for improving the learning platform.",
};

export default function MakerPage() {
  return <main className="maker-page">
    <Link className="maker-back" href="/"><ArrowLeft size={16}/>HSC2Plus-এ ফিরে যাও</Link>
    <section className="maker-layout">
      <MakerProfileCard />
      <div className="maker-copy">
        <span>MAKER PROFILE</span>
        <h2>Built by a student, improved with students.</h2>
        <p>HSC2Plus তৈরি হয়েছে বাংলা মাধ্যমের Commerce ও Humanities শিক্ষার্থীদের পড়া, Practice এবং পরীক্ষার প্রস্তুতি একটু সহজ করার জন্য। এটি কোনো শিক্ষা বোর্ড বা NCTB-এর অফিসিয়াল পণ্য নয়।</p>
        <article><Lightbulb size={20}/><div><strong>Suggestion or academic correction?</strong><p>কোনো ভুল, অসম্পূর্ণ পাঠ বা ভালো করার মতো জায়গা চোখে পড়লে সরাসরি জানাও।</p></div></article>
        <a className="maker-mail" href="mailto:iftunotsame@gmail.com?subject=HSC2Plus%20Suggestion"><Mail size={18}/>iftunotsame@gmail.com</a>
      </div>
    </section>
  </main>;
}
