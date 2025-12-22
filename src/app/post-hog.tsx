"use client";

import { useEffect } from "react";
import { initializePostHog } from "@mediaweb1/sdk/analytics";

export function PostHogProvider() {
  useEffect(() => {
    // This ONLY runs in the browser after component mounts
    initializePostHog();
  }, []);

  return null; // No UI needed
}
