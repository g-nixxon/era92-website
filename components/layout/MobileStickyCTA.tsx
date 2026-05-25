"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 80) {
        setVisible(true);
      } else if (y > lastY) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <div
      className={`lg:hidden fixed inset-x-0 bottom-0 z-30 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-3 bg-gradient-to-t from-cream via-cream/95 to-cream/0 transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <Button href="/contact" variant="primary" size="lg" className="w-full justify-center shadow-lg shadow-charcoal/10">
        Hire Us
      </Button>
    </div>
  );
}
