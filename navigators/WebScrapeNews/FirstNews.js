// const puppeteer = require("puppeteer");
// async function scrapeNews(url) {
//   const browser = await puppeteer.launch();
//   const page = await browser.newPage();
//   await page.goto(url);

//   const [el] = await page.$x('//*[@id="post-4908"]');
//   const src = await el.getProperty("src");
//   const srcTxt = await src.jsonValue();

//   console.log({ srcTxt });

//   browser.close();
// }

// scrapeNews("https://www.rfl.com.my/hari-kitar-semula-2020/");
