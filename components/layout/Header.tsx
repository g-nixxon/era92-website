"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Container } from "./Container";
import { Button } from "@/components/ui/Button";

// Nav structure. Items with `children` render a dropdown on desktop and an
// inline indented list inside the mobile menu. Clicking the parent itself still
// navigates to `href` so the index page remains directly reachable.
type NavChild = { href: string; label: string };
type NavLink = { href: string; label: string; children?: NavChild[] };

const VENTURE_LINKS: NavChild[] = [
  { href: "/ventures/elevate", label: "era92 Elevate" },
  { href: "/ventures/creative", label: "era92 Creative" },
  { href: "/ventures/fund", label: "era92 Fund" },
  { href: "/ventures/hub", label: "era92 Hub" },
];

const NAV_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/ventures", label: "Ventures", children: VENTURE_LINKS },
  { href: "/insights", label: "Insights" },
  { href: "/partner", label: "Partner" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Hover dropdowns close eagerly on mouseleave. The tiny delay below covers
  // the gap users cross when moving from the parent link to a dropdown item —
  // without it the menu flickers shut between the two.
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
  };
  const cancelClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  // Escape closes the desktop dropdown for keyboard users.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenMenu(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-stone-100">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="font-display text-2xl font-medium text-charcoal"
            aria-label="era92 Group home"
          >
            era92
          </Link>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              if (!link.children) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-sm font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
                  >
                    {link.label}
                  </Link>
                );
              }
              const isOpen = openMenu === link.href;
              return (
                <div
                  key={link.href}
                  className="relative"
                  onMouseEnter={() => {
                    cancelClose();
                    setOpenMenu(link.href);
                  }}
                  onMouseLeave={scheduleClose}
                >
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-1 text-sm font-body text-charcoal hover:underline decoration-orange underline-offset-4 decoration-2"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    onFocus={() => {
                      cancelClose();
                      setOpenMenu(link.href);
                    }}
                  >
                    {link.label}
                    <ChevronDown size={14} aria-hidden="true" />
                  </Link>
                  {isOpen && (
                    <ul
                      className="absolute top-full left-0 pt-3 min-w-[200px]"
                      onMouseEnter={cancelClose}
                      onMouseLeave={scheduleClose}
                    >
                      <div className="bg-cream border border-stone-300 rounded-lg shadow-lg py-2">
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block px-4 py-2 text-sm font-body text-charcoal hover:bg-stone-100 hover:underline decoration-orange underline-offset-4 decoration-2"
                              onClick={() => setOpenMenu(null)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </div>
                    </ul>
                  )}
                </div>
              );
            })}
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
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-4 px-2 text-lg font-body text-charcoal border-b border-stone-100"
                >
                  {link.label}
                </Link>
                {link.children && (
                  <ul className="pl-6 border-b border-stone-100">
                    {link.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-3 px-2 text-base font-body text-stone-600 hover:text-charcoal"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button href="/contact" variant="primary" size="md" className="w-full">
                Hire Us
              </Button>
            </div>
          </nav>
        )}
      </Container>
    </header>
  );
}
