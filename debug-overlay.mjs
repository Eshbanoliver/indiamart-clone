import puppeteer from 'puppeteer';
import * as fs from 'fs';

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  
  await page.goto('http://localhost:3000/login', { waitUntil: 'domcontentloaded' });
  await page.waitForSelector('input[type="email"]');
  await page.type('input[type="email"]', 'example@user.com');
  await page.type('input[type="password"]', 'password123');
  await page.click('button[type="submit"]');
  
  await page.waitForNavigation({ waitUntil: 'networkidle2' });
  await new Promise(r => setTimeout(r, 2000));
  
  const overlay = await page.$('nextjs-portal');
  if (overlay) {
    const html = await page.evaluate(el => el.shadowRoot.innerHTML, overlay);
    fs.writeFileSync('shadow-dom.html', html);
    console.log('Saved shadow-dom.html');
  }

  await browser.close();
})();
