"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export function PostHogProvider() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const hostname = window.location.hostname;
    if (hostname === "localhost" || hostname === "127.0.0.1") return;

    const apiKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const apiHost = process.env.NEXT_PUBLIC_POSTHOG_HOST;

    if (apiKey && apiHost) {
      posthog.init(apiKey, {
        api_host: apiHost,
        person_profiles: "always",
        capture_pageview: true,
        capture_pageleave: true,
        disable_session_recording: true,
      });
    }
  }, []);

  return null;
}
