"use client";

import { useEffect, useRef } from "react";
import { Code2, ExternalLink, Mail } from "lucide-react";

export function MakerProfileCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const move = (event: PointerEvent) => {
      if (reduced || event.pointerType !== "mouse") return;
      const box = card.getBoundingClientRect();
      const x = Math.max(-1, Math.min(1, ((event.clientX - box.left) / box.width) * 2 - 1));
      const y = Math.max(-1, Math.min(1, ((event.clientY - box.top) / box.height) * 2 - 1));
      card.style.setProperty("--pc-x", `${(x + 1) * 50}%`);
      card.style.setProperty("--pc-y", `${(y + 1) * 50}%`);
      card.style.setProperty("--pc-rx", `${y * -5}deg`);
      card.style.setProperty("--pc-ry", `${x * 7}deg`);
      card.dataset.active = "true";
    };
    const leave = () => {
      card.style.setProperty("--pc-rx", "0deg");
      card.style.setProperty("--pc-ry", "0deg");
      delete card.dataset.active;
    };
    card.addEventListener("pointermove", move);
    card.addEventListener("pointerleave", leave);
    return () => { card.removeEventListener("pointermove", move); card.removeEventListener("pointerleave", leave); };
  }, []);

  return <article ref={cardRef} className="maker-profile-card">
    <div className="maker-profile-photo">
      <img src="/maker-profile.jpeg" alt="HSC2Plus maker profile" />
      <span className="maker-profile-holo" aria-hidden="true" />
      <div><h1>Md Iftee Raiyan</h1><p>A random CSE student with lots of free time.</p></div>
    </div>
    <div className="maker-profile-meta">
      <div><span className="maker-online"/> <strong>@MdIfteeRaiyan</strong><small>Maker of HSC2Plus</small></div>
      <a href="mailto:iftunotsame@gmail.com"><Mail size={16}/>Email</a>
    </div>
    <nav aria-label="Maker links">
      <a href="https://github.com/MdIfteeRaiyan/" target="_blank" rel="noreferrer"><Code2 size={17}/>GitHub</a>
      <a href="https://www.linkedin.com/in/md-iftee-raiyan-b20336386/" target="_blank" rel="noreferrer"><ExternalLink size={17}/>LinkedIn</a>
    </nav>
  </article>;
}
