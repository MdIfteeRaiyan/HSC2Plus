"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowRight, BarChart3, BookOpenCheck, Landmark, LineChart, NotebookPen, UserRound } from "lucide-react";
import { OpeningLandscape } from "@/components/opening-landscape";
import { SpecularButton, TechWordmark } from "@/components/premium-ui";

const groups = [
  {
    href: "/commerce",
    eyebrow: "ব্যবসায় শিক্ষা",
    title: "Commerce",
    description: "হিসাব, ব্যবসা ও ভাষা—ধাপে ধাপে শেখো, নিজের গতিতে Practice করো।",
    subjects: ["হিসাববিজ্ঞান", "ফিন্যান্স ও ব্যাংকিং", "ব্যবসায় সংগঠন", "ইংরেজি"],
    icon: BarChart3,
    accent: "commerce",
  },
  {
    href: "/humanities",
    eyebrow: "মানবিক",
    title: "Humanities",
    description: "ঘটনা, সমাজ ও যুক্তি—বুঝে পড়ো, গুছিয়ে লেখো।",
    subjects: ["অর্থনীতি", "পৌরনীতি ও সুশাসন", "ইতিহাস", "ইংরেজি"],
    icon: Landmark,
    accent: "humanities",
  },
];

export function GroupSelector() {
  const router = useRouter();
  return <main className="group-gateway gateway-cinematic">
    <section className="gateway-scene" aria-label="Interactive opening landscape"><OpeningLandscape /></section>
    <section className="gateway-panel">
      <Link className="gateway-brand" href="/" aria-label="HSC2Plus home"><span className="brand-mark"><BookOpenCheck size={22}/></span><span className="gateway-brand-copy"><strong>HSC2Plus</strong><span>Your complete HSC learning companion.</span></span></Link>
      <div className="gateway-intro">
        <div className="gateway-welcome"><span aria-hidden="true"/><p className="gateway-greeting">Welcome to HSC2Plus</p></div>
        <TechWordmark text="Learn. Practice. Repeat." />
        <p className="gateway-summary">বিভাগ বেছে নাও। বিস্তারিত শেখা, Practice, Revision ও Test Centre—HSC প্রস্তুতির সবকিছু এক জায়গায়।</p>
        <span className="gateway-choice-label">CHOOSE YOUR GROUP</span>
      </div>
      <section className="group-choice-grid" aria-label="শিক্ষা বিভাগ নির্বাচন করুন">
        {groups.map(({href,eyebrow,title,description,subjects,icon:Icon,accent}) => <article className={`group-choice ${accent}`} key={href}>
          <div className="group-choice-heading"><span className="group-choice-icon"><Icon size={21}/></span><div><span className="group-eyebrow">{eyebrow}</span><h2>{title}</h2></div></div>
          <p>{description}</p>
          <div className="group-subjects">{subjects.map((subject,index)=><span key={subject}>{index % 2 ? <NotebookPen size={13}/> : <LineChart size={13}/>} {subject}</span>)}</div>
          <SpecularButton accent={accent === "commerce" ? "#a8621f" : "#355ba6"} onClick={() => router.push(href)} aria-label={`Explore ${title}`}>Explore {title}</SpecularButton>
        </article>)}
      </section>
      <aside className="gateway-about" id="about" aria-label="About HSC2Plus">
        <span className="gateway-about-logo"><BookOpenCheck size={17}/></span>
        <p><strong>About HSC2Plus</strong><span>বাংলা মাধ্যমের HSC study companion.</span></p>
        <Link href="/support">Learn more <ArrowRight size={13}/></Link>
      </aside>
      <footer className="gateway-footer">
        <span>© {new Date().getFullYear()} HSC2Plus · Progress stays on this device.</span>
        <nav aria-label="Legal information"><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/support">Support</Link><Link href="/maker"><UserRound size={12}/>Maker</Link></nav>
      </footer>
    </section>
  </main>;
}
