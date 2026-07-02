"use client";

import { useScrollAnalytics } from "@/lib/useAnalytics";

export function AnalyticsProvider() {
  useScrollAnalytics();
  return null;
}
