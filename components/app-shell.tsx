"use client";

import { useEffect, useRef, useState } from "react";
import { BookOpen, CalendarDays, ChartNoAxesColumnIncreasing, ClipboardCheck, Cloud, FileScan, House, Menu, MoreHorizontal, NotebookPen, RotateCcw, Timer, UserRound, X } from "lucide-react";
import Link from "next/link";

const navSections = [
  { label: "LEARN", items: [
    { id: "today", label: "Today", icon: House },
    { id: "subjects", label: "Subjects", icon: BookOpen },
    { id: "syllabus", label: "My Syllabus", icon: FileScan },
  ]},
  { label: "PRACTICE", items: [
    { id: "practice", label: "Quiz Practice", icon: NotebookPen },
    { id: "tests", label: "Test Centre", icon: ClipboardCheck },
  ]},
  { label: "PLAN & TRACK", items: [
    { id: "planner", label: "Study Plan", icon: CalendarDays },
    { id: "progress", label: "Progress", icon: ChartNoAxesColumnIncreasing },
    { id: "focus", label: "Focus Studio", icon: Timer },
  ]},
];
const nav = navSections.flatMap((section) => section.items);

export function AppShell({ active, onChange, group, streak, pending = false, children }: { active: string; onChange: (id: string) => void; group: "commerce" | "humanities"; streak: number; pending?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const select = (id: string) => {
    onChange(id);
    setOpen(false);
    window.requestAnimationFrame(() => {
      mainRef.current?.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: "auto" });
    });
  };
  const groupLabel = group === "commerce" ? "ব্যবসায় শিক্ষা" : "মানবিক";

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.setTimeout(() => menuButtonRef.current?.focus(), 0);
      }
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  return (
    <div className="app-frame">
      <a className="skip-link" href="#main-content">মূল অংশে যান</a>
      <aside id="main-navigation" className={`sidebar ${open ? "sidebar-open" : ""}`} aria-label="Main navigation">
        <div className="brand-row">
          <Link className="brand-home-link" href={`/${group}`} aria-label="HSC2Plus dashboard home">
            <span className="brand-mark"><img src="/hsc2plus-logo.svg" alt="" /></span>
            <span className="brand-copy"><strong>HSC2Plus <small className="beta-badge">Public Beta</small></strong><span>Learn. Practice. Repeat.</span></span>
          </Link>
          <button ref={closeButtonRef} type="button" className="icon-button mobile-only" onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }} aria-label="মেনু বন্ধ করুন"><X size={20} /></button>
        </div>
        <nav>
          {navSections.map((section) => (
            <div className="nav-group" key={section.label}>
              <span className="nav-group-label">{section.label}</span>
              {section.items.map(({ id, label, icon: Icon }) => (
                <button type="button" key={id} aria-current={active === id ? "page" : undefined} className={active === id ? "nav-item active" : "nav-item"} onClick={() => select(id)}>
                  <Icon size={19} /><span>{label}</span>
                </button>
              ))}
            </div>
          ))}
        </nav>
        <footer className="sidebar-footer">
          <nav className="sidebar-utility-bar" aria-label="Account and site options">
            <Link className="sidebar-account-row" href="/account" aria-label="Student account · Optional cloud backup"><Cloud size={16}/><span>Account</span></Link>
            <Link href="/" aria-label={`Switch Group. Current group: ${groupLabel}`}><RotateCcw size={16}/><span>Switch</span></Link>
            <details className="sidebar-more"><summary><MoreHorizontal size={17}/><span>More</span></summary><nav aria-label="Support and policies"><Link href="/support">Support</Link><Link href="/maker"><UserRound size={12}/>Maker</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><small>© {new Date().getFullYear()} HSC2Plus</small></nav></details>
          </nav>
        </footer>
      </aside>
      {open && <button type="button" className="scrim" onClick={() => { setOpen(false); menuButtonRef.current?.focus(); }} aria-label="মেনু বন্ধ করুন" />}
      <div className="main-column">
        <div className={`route-progress${pending ? " is-visible" : ""}`} role="status" aria-live="polite" aria-label={pending ? "Section loading" : undefined}><span /></div>
        <header className="topbar">
          <button ref={menuButtonRef} type="button" className="icon-button mobile-only" onClick={() => setOpen(true)} aria-label="মেনু খুলুন" aria-expanded={open} aria-controls="main-navigation"><Menu size={21} /></button>
          <Link className="mobile-brand" href={`/${group}`} aria-label="HSC2Plus dashboard home"><img src="/hsc2plus-logo.svg" alt=""/><strong>HSC2Plus</strong><span className="mobile-beta">Beta</span></Link>
          <div className="top-actions"><span className="streak">🔥 {streak} day streak</span></div>
        </header>
        <main ref={mainRef} id="main-content" tabIndex={-1}>{children}</main>
        <nav className="bottom-nav" aria-label="Mobile navigation">
          {nav.filter((item) => ["today", "subjects", "practice", "tests"].includes(item.id)).map(({ id, label, icon: Icon }) => (
            <button type="button" key={id} aria-current={active === id ? "page" : undefined} aria-label={label} className={active === id ? "active" : ""} onClick={() => select(id)}><Icon size={19} /><span>{id === "practice" ? "Practice" : id === "tests" ? "Tests" : label}</span></button>
          ))}
        </nav>
      </div>
    </div>
  );
}
