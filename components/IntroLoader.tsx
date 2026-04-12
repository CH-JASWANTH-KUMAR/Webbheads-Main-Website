"use client";

import { useEffect, useRef, useState } from "react";

const INTRO_KEY = "introSeen";
const FADE_DURATION_MS = 600;

export default function IntroLoader() {
  const [shouldRender, setShouldRender] = useState(false);
  const [isFading, setIsFading] = useState(false);
  const didCloseRef = useRef(false);

  useEffect(() => {
    try {
      const alreadySeen = sessionStorage.getItem(INTRO_KEY) === "1";
      if (alreadySeen) {
        setShouldRender(false);
        return;
      }

      setShouldRender(true);
    } catch {
      // If storage is unavailable, still show intro once for current render.
      setShouldRender(true);
    }
  }, []);

  const closeIntro = () => {
    if (didCloseRef.current) {
      return;
    }
    didCloseRef.current = true;

    try {
      sessionStorage.setItem(INTRO_KEY, "1");
    } catch {
      // Ignore storage failures; intro will still close correctly.
    }

    setIsFading(true);
    window.setTimeout(() => {
      setShouldRender(false);
    }, FADE_DURATION_MS);
  };

  if (!shouldRender) {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-[#0f1f1b] transition-opacity duration-[600ms] ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      <video
        className="h-full w-full object-cover"
        src="/video/landscapeintro.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={closeIntro}
        onError={closeIntro}
      />
    </div>
  );
}
