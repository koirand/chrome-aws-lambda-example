const chromium = require('chrome-aws-lambda')

const main = async function () {
  let browser = null
  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless, // PCでの動作確認時はfalseをセットすると良い
      ignoreHTTPSErrors: true,
      slowMo: 0
    })
    const page = await browser.newPage()

    // Yahoo!占いにアクセスして獅子座の運勢を取得
    await page.goto('https://fortune.yahoo.co.jp/12astro/leo')
    const luck = await page.$eval('#lnk01 dd', el => el.textContent)

    console.log(luck)
  } finally {
    if (browser !== null) {
      await browser.close()
    }
  }
}

exports.handler = async (event, context) => {
  await main()
}

if (require.main === module) {
  (async () => {
    await main()
  })()
}

