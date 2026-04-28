"use client";

import { useEffect } from "react";
import { initializeBoafoWidget } from "boafo-accessibility-widget";

export default function BoafoWidgetInitializer() {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_BOAFO_API_KEY;
    if (apiKey) {
      initializeBoafoWidget(apiKey);
    }
  }, []);

  return null; // nothing to render
}
