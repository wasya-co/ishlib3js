
/*
 * node src/talking_head/example_puppeteer.js --input_url=<> --api_key=<> --api_secret=<>
**/

import puppeteer from 'puppeteer';

const logg = (a, b="") => {
  console.log(`+++ ${b}:`, a); // eslint-disable-line no-console
};

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();

const args = process.argv.slice(2);
const params = {};
for (const arg of args) {
  const [key, value] = arg.replace(/^--/, '').split('=');
  params[key] = value ?? true;
}
logg(params, 'ze params')

const page_url = `https://email.wasya.co/2025/talkinghead_example.html?wco_origin=${params.wco_origin}&newspartial_id=${params.newspartial_id}&api_key=${params.api_key}&api_secret=${params.api_secret}`
logg(page_url, 'page_url')
await page.goto(page_url);


setTimeout(async () => {
  await page.screenshot({ path: 'screenshots/example-3.png' });
  await browser.close();
}, 30*1000)
