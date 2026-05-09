/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // Redirect old .html URLs to clean URLs
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/about.html', destination: '/about', permanent: true },
      { source: '/contact.html', destination: '/contact', permanent: true },
      { source: '/news.html', destination: '/news', permanent: true },
      { source: '/service.html', destination: '/services', permanent: true },
      { source: '/services/social-media.html', destination: '/services/social-media', permanent: true },
      { source: '/services/web-development.html', destination: '/services/web-development', permanent: true },
      { source: '/services/branding.html', destination: '/services/branding', permanent: true },
      { source: '/services/seo-strategy.html', destination: '/services/seo-strategy', permanent: true },
      { source: '/services/ai-content.html', destination: '/services/ai-content', permanent: true },
      { source: '/services/content-writing.html', destination: '/services/content-writing', permanent: true },
      { source: '/services/ecommerce.html', destination: '/services/ecommerce', permanent: true },
      { source: '/services/paid-ads.html', destination: '/services/paid-ads', permanent: true },
      { source: '/services/ui-ux-design.html', destination: '/services/ui-ux-design', permanent: true },
      { source: '/profiles/index.html', destination: '/profiles', permanent: true },
      { source: '/profiles/menna.html', destination: '/profiles/menna', permanent: true },
      { source: '/profiles/sally.html', destination: '/profiles/sally', permanent: true },
      { source: '/profiles/abdelalim.html', destination: '/profiles/abdelalim', permanent: true },
    ];
  },
};

module.exports = nextConfig;
