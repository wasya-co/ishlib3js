
/*
 * node src/talking_head/example_puppeteer.js --input_url=<> --api_key=<> --api_secret=<>
**/

import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

const args = process.argv.slice(2);
const params = {};
for (const arg of args) {
  const [key, value] = arg.replace(/^--/, '').split('=');
  params[key] = value ?? true;
}

await page.goto(`http://localhost:8080/2025/talking-head/example-3.html?input_url=${params.input_url}&api_key=${params.api_key}&api_secret=${params.api_secret}`);


setTimeout(async () => {
  await page.screenshot({ path: 'screenshots/example-3.png' });
  await browser.close();
}, 30*1000)
