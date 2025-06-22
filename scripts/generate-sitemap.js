#!/usr/bin/env node

import { generateSitemap } from 'next-sitemap';
import config from '../next-sitemap.config.js';

async function main() {
  try {
    console.log('🔄 Generating sitemap...');
    await generateSitemap(config);
    console.log('✅ Sitemap generated successfully!');
    console.log('📍 Sitemap URL: https://learncssnc2.academy/sitemap.xml');
    console.log('📍 Robots.txt URL: https://learncssnc2.academy/robots.txt');
  } catch (error) {
    console.error('❌ Error generating sitemap:', error);
    process.exit(1);
  }
}

main(); 