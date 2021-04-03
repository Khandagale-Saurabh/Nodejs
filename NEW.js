
const puppeteer = require('puppeteer');

(async () => {
  // Makes the browser to be launched in a headful way
  const browser = await puppeteer.launch({ headless: false });
  console.info(browser);
  const page = await browser.newPage();

page.on('load', () => console.log('Loaded: ' + page.url()))

await page.goto('https://www.pepcoding.com');
  await browser.close();
})();
