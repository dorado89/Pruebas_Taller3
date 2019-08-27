const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://angular-6-registration-login-example.stackblitz.io/register');
    await page.waitForNavigation();
    await page.screenshot({path: 'example.png'});
    await browser.close();
})();