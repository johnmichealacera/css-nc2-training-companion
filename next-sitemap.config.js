/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://learncssnc2.academy',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/test-analytics'],
      },
    ],
    additionalSitemaps: [
      'https://learncssnc2.academy/sitemap.xml',
    ],
  },
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ['/test-analytics'],
  generateIndexSitemap: false,
  // Customize priorities for different pages
  transform: async (config, path) => {
    // Customize priorities based on page importance
    let priority = 0.7;
    let changefreq = 'weekly';
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/coc')) {
      priority = 0.9;
      changefreq = 'monthly';
    } else if (path === '/about' || path === '/glossary') {
      priority = 0.8;
      changefreq = 'monthly';
    } else if (path === '/contact') {
      priority = 0.7;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
} 