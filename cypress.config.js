const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://connect.studylink.com",
    viewportHeight: 1280,
    viewportWidth: 1920

  },
});
