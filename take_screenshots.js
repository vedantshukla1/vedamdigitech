import puppeteer from 'puppeteer';

const routes = [
  { path: '/web-minimalist', name: 'web_minimalist.png' },
];

(async () => {
  try {
    const browser = await puppeteer.launch({ 
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      protocolTimeout: 60000
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    for (const route of routes) {
      console.log(`Taking screenshot of ${route.path}...`);
      await page.goto(`http://localhost:5173${route.path}`, { waitUntil: 'networkidle2' });
      // wait for animations
      await new Promise(resolve => setTimeout(resolve, 2000));
      await page.screenshot({ path: `public/images/projects/${route.name}` });
    }

    await browser.close();
    console.log('All screenshots taken!');
  } catch(e) {
    console.error(e);
  }
})();
