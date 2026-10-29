"use client";
import { useEffect } from "react";
export default function VisitSource() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem("aldawlia-source")) return;
      const params = new URLSearchParams(window.location.search);
      let referrer = "";
      try { referrer = document.referrer ? new URL(document.referrer).hostname : ""; } catch {}
      if (referrer === window.location.hostname) referrer = "";
      const source = params.get("utm_source") || referrer || "direct / unknown";
      sessionStorage.setItem("aldawlia-source", JSON.stringify({ source: source.slice(0,200), medium: (params.get("utm_medium") || "").slice(0,200), campaign: (params.get("utm_campaign") || "").slice(0,200), referrer, landingPage: window.location.pathname }));
    } catch { /* Enquiries remain available when storage is blocked. */ }
  }, []);
  return null;
}
