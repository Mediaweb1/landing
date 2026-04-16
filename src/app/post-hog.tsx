"use client";

import { useEffect } from "react";
import { initializePostHog } from "@mediaweb1/sdk/analytics";

export function PostHogProvider() {
  useEffect(() => {
    initializePostHog();
  }, []);

  return null;
}
