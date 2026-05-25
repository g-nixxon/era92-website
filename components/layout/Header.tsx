"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ventures", label: "Ventures" },
  { href: "/insights", label: "Insights" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-stone-100">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="font-display text-2xl font-medium text-charcoal" aria-label="era92 Group home">
            era92
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" variant="primary" size="sm">
              Hire Us
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 -mr-2 text-charcoal"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="lg:hidden pb-6 pt-2 flex flex-col gap-1" aria-label="Mobile">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block py-4 px-2 text-lg font-body text-charcoal border-b border-stone-100"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="md" className="w-full justify-center">
                Hire Us
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
