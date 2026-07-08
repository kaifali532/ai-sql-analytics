const puppeteer = require('puppeteer');

(async () => {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();

  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log(`BROWSER ERROR: ${msg.text()}`);
    } else {
      console.log(`BROWSER LOG: ${msg.text()}`);
    }
  });

  page.on('pageerror', error => {
    console.log(`PAGE ERROR: ${error.message}`);
  });

  page.on('requestfailed', request => {
    console.log(`REQUEST FAILED: ${request.url()} - ${request.failure().errorText}`);
  });

  console.log('Navigating to https://ai-sql-analytics.vercel.app/ ...');
  try {
    await page.goto('https://ai-sql-analytics.vercel.app/', { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    // We should be redirected to /login
    console.log('Current URL:', page.url());
    
    // Fill the login form
    console.log('Typing credentials...');
    await page.type('input[type="email"]', 'demo@apple.com');
    await page.type('input[type="password"]', 'password123');
    
    console.log('Submitting form...');
    await page.click('button[type="submit"]');
    
    // Wait for network idle or redirect
    await page.waitForNavigation({ waitUntil: 'networkidle0', timeout: 10000 });
    
    console.log('After login URL:', page.url());

  } catch (e) {
    console.log(`SCRIPT ERROR: ${e.message}`);
  }

  await browser.close();
})();
