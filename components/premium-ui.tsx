"use client";

import { ArrowRight, Volume2 } from "lucide-react";
import type { ButtonHTMLAttributes, CSSProperties } from "react";

export function TechWordmark({ text }: { text: string }) {
  return <div className="tech-wordmark" aria-label={text}>
    <span aria-hidden="true" data-text={text}>{text}</span>
  </div>;
}

type SpecularButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  accent?: string;
};

export function SpecularButton({ children, accent = "#0a6b5c", className = "", ...props }: SpecularButtonProps) {
  return <button
    {...props}
    className={`specular-button ${className}`.trim()}
    style={{ "--specular-accent": accent, ...props.style } as CSSProperties}
  >
    <span>{children}</span><ArrowRight size={16} aria-hidden="true" />
  </button>;
}

export function AeroFocusBackdrop() {
  return <div className="aero-focus-backdrop" aria-hidden="true">
    <span className="aero-shard shard-a"/><span className="aero-shard shard-b"/>
    <span className="aero-shard shard-c"/><span className="aero-shard shard-d"/>
    <span className="aero-orbit"/><span className="aero-grain"/>
  </div>;
}

export function SoundStatus({ on }: { on: boolean }) {
  return <span className="sound-status"><Volume2 size={14}/>{on ? "Sound on" : "Sound off"}</span>;
}
