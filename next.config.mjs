/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // SVG placeholders in /public/images/placeholders/ — sourced from this repo only.
    // Swap to real JPGs/WebPs before launch and this flag can stay on safely.
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
