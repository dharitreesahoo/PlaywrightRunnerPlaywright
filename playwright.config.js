// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
    use: {
        screenshot: 'only-on-failure'
      },
    reporter: "allure-playwright",
    


}

module.exports = config;