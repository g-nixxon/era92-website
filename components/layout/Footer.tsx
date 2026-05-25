import Link from "next/link";
import { Container } from "./Container";

const VENTURES = [
  { href: "/ventures/studio", label: "era92 Studio" },
  { href: "/ventures/labs", label: "era92 Labs" },
  { href: "/ventures/capital", label: "era92 Capital" },
  { href: "/ventures/press", label: "era92 Press" },
];

const SOCIAL = [
  { href: "#", label: "Instagram" },
  { href: "#", label: "LinkedIn" },
  { href: "#", label: "Are.na" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream mt-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 py-16">
          <div className="md:col-span-5">
            <p className="font-display text-3xl md:text-4xl leading-tight">
              Let&rsquo;s build something <em className="italic">worth keeping</em>.
            </p>
            <a
              href="mailto:trinity@era92.com"
              className="inline-block mt-6 font-body text-cream hover:underline decoration-orange underline-offset-4 decoration-2"
            >
              trinity@era92.com
            </a>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs uppercase tracking-widest text-orange font-body mb-4">
              Ventures
            </h3>
            <ul className="space-y-2">
              {VENTURES.map((v) => (
                <li key={v.href}>
                  <Link
                    href={v.href}
                    className="font-body text-cream/90 hover:text-cream hover:underline decoration-orange underline-offset-4 decoration-2"
                  >
                    {v.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-orange font-body mb-4">
              Social
            </h3>
            <ul className="space-y-2">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="font-body text-cream/90 hover:text-cream hover:underline decoration-orange underline-offset-4 decoration-2"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs uppercase tracking-widest text-orange font-body mb-4">
              Visit
            </h3>
            <address className="not-italic font-body text-cream/90 text-sm leading-relaxed">
              By appointment
              <br />
              Atlanta, GA
            </address>
          </div>
        </div>

        <div className="border-t border-cream/15 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs font-body text-cream/60">
          <p>&copy; {year} era92 Group. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-cream">Privacy</Link>
            <Link href="/terms" className="hover:text-cream">Terms</Link>
            <Link href="/colophon" className="hover:text-cream">Colophon</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
