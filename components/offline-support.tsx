"use client";

import { useEffect, useSyncExternalStore, useState } from "react";
import { RefreshCw, WifiOff } from "lucide-react";

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
  const [updateReady, setUpdateReady] = useState(false);
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    let reloading = false;
    const changed = () => {
      if (reloading) return;
      reloading = true;
      window.location.reload();
    };
    navigator.serviceWorker.addEventListener("controllerchange", changed);
    navigator.serviceWorker.register("/sw.js", { updateViaCache: "none" }).then((registration) => {
      void registration.update().catch(() => undefined);
      if (registration.waiting) setUpdateReady(true);
      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        worker?.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) setUpdateReady(true);
        });
      });
    }).catch(() => undefined);
    return () => navigator.serviceWorker.removeEventListener("controllerchange", changed);
  }, []);
  useEffect(() => {
    const recoverChunk = async (event: ErrorEvent) => {
      const message = `${event.message} ${event.error?.name ?? ""}`;
      if (!/ChunkLoadError|Loading chunk|Failed to fetch dynamically imported module/i.test(message)) return;
      const recoveryKey = "hsc2plus-chunk-recovery";
      if (window.sessionStorage.getItem(recoveryKey) === "done") return;
      window.sessionStorage.setItem(recoveryKey, "done");
      const registration = await navigator.serviceWorker?.getRegistration();
      await registration?.update().catch(() => undefined);
      window.location.reload();
    };
    window.addEventListener("error", recoverChunk);
    return () => window.removeEventListener("error", recoverChunk);
  }, []);
  const applyUpdate = async () => {
    const registration = await navigator.serviceWorker.getRegistration();
    registration?.waiting?.postMessage({ type: "SKIP_WAITING" });
  };
  if (online && !updateReady) return null;
  return <div className="offline-notice" role="status" aria-live="polite">
    {online ? <RefreshCw size={16}/> : <WifiOff size={16}/>} 
    <span><strong>{online ? "Update ready" : "Offline mode"}</strong> · {online ? "Reload to use the latest version" : "Previously opened lessons remain available"}</span>
    {updateReady && <button type="button" onClick={() => void applyUpdate()}>Update now</button>}
  </div>;
}
