"use client";

import { useEffect, useSyncExternalStore } from "react";
import { WifiOff } from "lucide-react";

const subscribeOnline = (callback: () => void) => {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
};

export function OfflineSupport() {
  const online = useSyncExternalStore(subscribeOnline, () => navigator.onLine, () => true);
  useEffect(() => {
    const recoverChunk = (event: ErrorEvent) => {
      const message = `${event.message} ${event.error?.name ?? ""}`;
      if (!/ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module/i.test(message)) return;
      const recoveryKey = "hsc2plus-chunk-recovery";
      if (window.sessionStorage.getItem(recoveryKey) === "done") return;
      window.sessionStorage.setItem(recoveryKey, "done");
      window.location.reload();
    };
    window.addEventListener("error", recoverChunk);
    return () => window.removeEventListener("error", recoverChunk);
  }, []);
  if (online) return null;
  return <div className="offline-notice" role="status" aria-live="polite">
    <WifiOff size={16}/>
    <span><strong>আপনি এখন offline</strong> · সংযোগ ফিরলে আবার চেষ্টা করুন</span>
  </div>;
}
