/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://advocate-atul-gupta.vercel.app', // 🔁 Replace with your live domain
  generateRobotsTxt: true,           // ✅ Generates robots.txt
  sitemapSize: 5000,                 // Default max URLs per sitemap
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/admin', '/privacy'],  // Optional: pages to exclude
};
