const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://github.com/puppeteer/puppeteer");

  await page.pdf({ path: "documentation.pdf", format: "A4" });

  await browser.close();
})();
