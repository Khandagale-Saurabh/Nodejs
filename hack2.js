const puppeteer = require('puppeteer')

const options = {
  
  headless: false,
  defaultViewport: null,
  args: ['--window-size=1920,1080'],
}


;(async () => {
  const browser = await puppeteer.launch(options)
  const page = await browser.newPage()
  await page.goto('https://gulshansainis.github.io/portfolio/')
  const head1=await page.$eval('body > header > h1',e1=>e1.textContent);

 console.log(head1);
let yy=await page.$eval('#contact > h2',w1=>w1.textContent);
console.log("    "+yy);
  await page.type("#first_name","ABC");
  await page.type("#last_name","LAST NAME");
  await page.type("#email","abc@gmail.com")
  await page.click("#contact-form > div > input[type=submit]");
  console.log("CLICK");
})()