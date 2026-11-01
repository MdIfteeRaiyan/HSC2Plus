"use client";

import { useEffect, useState } from "react";

export function OpeningLandscape() {
  const [ready, setReady] = useState(false);
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [loadScene, setLoadScene] = useState(false);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    let context: WebGL2RenderingContext | null = null;
    try {
      context = canvas.getContext("webgl2", { failIfMajorPerformanceCaveat: true });
    } catch {
      context = null;
    }
    setWebglSupported(Boolean(context));
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    const win = window as Window & { requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number; cancelIdleCallback?: (id: number) => void };
    const idleId = win.requestIdleCallback?.(() => setLoadScene(true), { timeout: 1200 });
    const timer = idleId === undefined ? window.setTimeout(() => setLoadScene(true), 500) : undefined;
    return () => {
      if (idleId !== undefined) win.cancelIdleCallback?.(idleId);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const markReady = (event: MessageEvent) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === "hsc2plus:ashen-ready") setReady(true);
    };
    window.addEventListener("message", markReady);
    return () => window.removeEventListener("message", markReady);
  }, []);

  return (
    <div
      className={`shader-frame ashen-press-opening${ready ? " is-ready" : ""}`}
      role="group"
      aria-label={ready ? "Interactive HSC2Plus learning shelf" : "HSC2Plus Commerce and Humanities learning shelf"}
    >
      <div className="ashen-shelf-fallback" aria-hidden="true">
        <div className="ashen-shelf-fallback__brand"><span>HSC2PLUS</span><strong>The Learning Shelf</strong></div>
        <div className="ashen-shelf-fallback__case">
          <div className="ashen-shelf-fallback__row commerce-row">
            {['Accounting','Finance','Business','Marketing','Revision'].map((title,index)=><i key={title} style={{'--book':index} as React.CSSProperties}><span title={title}>{title}</span></i>)}
          </div>
          <div className="ashen-shelf-fallback__row humanities-row">
            {['Economics','Civics','History','Logic','Culture'].map((title,index)=><i key={title} style={{'--book':index} as React.CSSProperties}><span title={title}>{title}</span></i>)}
          </div>
        </div>
      </div>
      {webglSupported && loadScene ? <iframe
          className="ashen-press-opening__frame"
          title="HSC2Plus interactive Commerce and Humanities learning shelf"
          src="/ashen-press-hsc.html"
          sandbox="allow-scripts"
          loading="lazy"
        /> : null}
      {ready ? <div className="gateway-scene-hint" aria-hidden="true">
          <span /> Select a book · drag to turn
        </div> : null}
    </div>
  );
}
