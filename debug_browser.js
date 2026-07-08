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

  console.log('Navigating to http://localhost:4173/login ...');
  
  try {
    await page.goto('http://localhost:4173/login', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (e) {
    console.log(`GOTO ERROR: ${e.message}`);
  }

  // Also check /
  console.log('Navigating to http://localhost:4173/ ...');
  try {
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (e) {
    console.log(`GOTO ERROR: ${e.message}`);
  }

  await browser.close();
})();
