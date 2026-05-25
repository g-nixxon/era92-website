/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // SVG placeholders in /public/images/placeholders/ — sourced from this repo only.
    // Swap to real JPGs/WebPs before launch and this flag can stay on safely.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // MDX note: case-study content lives in /content/case-studies/*.mdx and is
  // rendered at request time by next-mdx-remote (see app/portfolio/[slug]/).
  // We intentionally do NOT add 'mdx' to pageExtensions — that would turn any
  // .mdx file inside /app into a route, which we don't want for content files.
  // mdx-components.tsx at the project root supplies the design-system mapping
  // and is read both by the @next/mdx hook (if ever used) and by our explicit
  // <MDXRemote components={...}> usage in the case-study page.
};

export default nextConfig;
