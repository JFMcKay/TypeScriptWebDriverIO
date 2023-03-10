import type { Options } from '@wdio/types'

export const config: Options.Testrunner = {
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    autoCompileOpts: {
        tsNodeOpts: {
            project: './tsconfig.json'
        }
    },

    hostname: 'localhost',
    port: 4444,
    path: '/',
    
    // ==================
    // Specify Test Files
    // ==================

    specs: [
        './test/specs/**/*.ts'
    ],
    // Patterns to exclude.
    exclude: [
        './test/specs/informed7.spec.ts',
        // './test/specs/informed1.spec.ts',
        './test/specs/informed2.spec.ts',
        './test/specs/informed4.spec.ts',
        './test/specs/informed3.spec.ts',
        './test/specs/heroku*.spec.ts',
        './test/specs/example.e2e.ts',
        './test/specs/wiki-home.spec.ts'
        // 'path/to/excluded/files'
    ],
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    maxInstances: 10,
    //
    capabilities: [
    {
        browserName: 'chrome',
        'goog:chromeOptions': { args: ["--headless", "--disable-gpu", "--disable-extension", "--dns-prefetch-disable", "--no-sandbox", "--force-device-scale-factor=1", ,"--safebrowsing-disable-auto-update", "--disable-background-networking","--window-size=1920,1080"]},
        acceptInsecureCerts: true,
    },
    {
        browserName: 'firefox',
       // 'moz:firefoxOptions': { args: ["--headless"]},
        acceptInsecureCerts: true,

    },

    
    
],


    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    // If you only want to run your tests until a specific amount of tests have failed use
    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    //
    // Set a base URL in order to shorten url command calls. If your `url` parameter starts
    // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
    // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
    // gets prepended directly.
    baseUrl: 'http://localhost:8080/',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 5,
    //
    // Test runner services
    // Services take over a specific job you don't want to take care of. They enhance
    // your test setup with almost no effort. Unlike plugins, they don't add new
    // commands. Instead, they hook themselves up into the test process.
    services: ['docker'],

    
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    //
    // The number of times to retry the entire specfile when it fails as a whole
    // specFileRetries: 1,
    //
    // Delay in seconds between the spec file retry attempts
    // specFileRetriesDelay: 0,
    //
    // Whether or not retried specfiles should be retried immediately or deferred to the end of the queue
    // specFileRetriesDeferred: false,
    //
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec'],
    //
    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 50000
    },

    

}
