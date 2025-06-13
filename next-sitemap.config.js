/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://advocate-atul-gupta.vercel.app", // ✅ Must match your live domain
  generateRobotsTxt: true, // ✅ This tells it to generate robots.txt
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://advocate-atul-gupta.vercel.app/sitemap.xml",
    // Remove host: Not needed
  },
};
