"use client";

import { useEffect, useState } from "react";
import { getSupabaseBrowserClient } from "@/lib/supabase";

const STORAGE_KEY = "hsc2plus-student-display-name";

function cleanName(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ").slice(0, 60) : "";
}

export function saveStudentDisplayName(value: string) {
  const name = cleanName(value);
  if (name) window.localStorage.setItem(STORAGE_KEY, name);
  else window.localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent("hsc2plus-profile", { detail: { name } }));
  return name;
}

export function useStudentDisplayName() {
  const [name, setName] = useState("");

  useEffect(() => {
    let active = true;
    const readLocal = () => setName(cleanName(window.localStorage.getItem(STORAGE_KEY)));
    readLocal();
    const client = getSupabaseBrowserClient();
    client?.auth.getUser().then(({ data }) => {
      if (!active) return;
      const cloudName = cleanName(data.user?.user_metadata?.display_name ?? data.user?.user_metadata?.full_name);
      if (cloudName) setName(saveStudentDisplayName(cloudName));
    });
    const onProfile = (event: Event) => setName(cleanName((event as CustomEvent<{ name?: string }>).detail?.name));
    const onStorage = (event: StorageEvent) => { if (event.key === STORAGE_KEY) readLocal(); };
    window.addEventListener("hsc2plus-profile", onProfile);
    window.addEventListener("storage", onStorage);
    return () => {
      active = false;
      window.removeEventListener("hsc2plus-profile", onProfile);
      window.removeEventListener("storage", onStorage);
    };
  }, []);
  return name;
}
