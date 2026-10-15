import Link from "next/link";
import { ArrowLeft, BookOpenCheck, Search } from "lucide-react";

export const metadata = {
  title: "Page not found — HSC2Plus",
  description: "The requested HSC2Plus page could not be found.",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return <main className="legal-page">
    <div className="legal-shell">
      <Link className="legal-brand" href="/"><span className="brand-mark"><BookOpenCheck size={20}/></span><span>HSC2Plus</span></Link>
      <article className="legal-card not-found-card">
        <span className="eyebrow">PAGE NOT FOUND · 404</span>
        <Search size={38}/>
        <h1>এই পেজটি পাওয়া যায়নি</h1>
        <p>লিংকটি পুরোনো হতে পারে অথবা ঠিকানায় ভুল আছে। বিভাগ বাছাইয়ে ফিরে Commerce বা Humanities থেকে আবার শুরু করো।</p>
        <Link className="legal-back" href="/"><ArrowLeft size={16}/>বিভাগ বাছাইয়ে ফিরুন</Link>
      </article>
    </div>
  </main>;
}
