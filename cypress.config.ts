import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  "reporterOptions": {
    "embeddedScreenshots": true,
    "charts": true,
    "reportPageTitle": "Cypress Inline Report",
    "inlineAssets": true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      on('before:spec', (spec) => {
        /* ... */
      })
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php'
    },

  pageLoadTimeout:120000,
  video:false,
  viewportWidth: 1920,
  viewportHeight: 1080, 
});


