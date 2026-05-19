/**
 * Canonical absolute URL of the site, used for:
 *   - metadataBase (so og:image, twitter:image resolve to absolute URLs)
 *   - openGraph.url, JSON-LD, sitemap, robots
 *
 * Resolution priority:
 *   1. NEXT_PUBLIC_SITE_URL  — set in Vercel once a custom domain is connected
 *   2. VERCEL_PROJECT_PRODUCTION_URL  — auto-provided by Vercel (e.g. "poker-pi-site.vercel.app")
 *   3. localhost  — dev
 */
export const siteUrl = (() => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
})();
