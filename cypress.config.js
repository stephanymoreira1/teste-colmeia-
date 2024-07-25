const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://colmeia-cx.github.io/colmeia-qa-teste/',
    setupNodeEvents(on, config) {
      
     
    },
  },
});
