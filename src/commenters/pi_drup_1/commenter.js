
/**
 * this is drupal_1/commenter.js , it hard codes the assumptions about piousbox_com
**/

import puppeteer from 'puppeteer'

const screenshot_filename = '202602-a-tmp'

const logg = (a, b="") => {
  console.log(`+++ ${b}:`, a); // eslint-disable-line no-console
};


const browser = await puppeteer.launch({
  headless: false,
  userDataDir: `./sessions/${config_name}`,
})
const page = await browser.newPage()


const response = await page.goto(config.login_url)
const redirects = response.request().redirectChain()
if (0 == redirects.length) {
  await page.type('#edit-name', config.user.login, { delay: 50 });
  await page.type('#edit-pass', config.user.password, { delay: 50 });
  await Promise.all([
    page.click('form#user-login-form #edit-submit'),
    page.waitForNavigation({ waitUntil: 'networkidle2' })
  ]);
  logg('+++ Logged in successfully');
}


await page.goto(page_url)
const title = await page.$eval( 'article.node--view-mode-full h2.title', el => el.textContent.trim() )
logg(title, 'ze title')
const commentValue = await gpt.comment_on_title(title)
logg(commentValue, 'commentValue')
await page.type('textarea#edit-field-comment-0-value', commentValue)
await page.click('form#comment-form #edit-submit')


setTimeout(async () => {
  await page.screenshot({ path: `screenshots/${screenshot_filename}` });
  await browser.close();
}, 30*1000)

