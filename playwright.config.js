
import { defineConfig } from '@playwright/test';


const timestamp = new Date()
  .toISOString()
  .replace(/[:.]/g, '-');


export default defineConfig({
 

reporter: [
    ['list'],
    ['monocart-reporter', {
      name: 'Playwright Test Report',
      outputFile: `./monocart-report/${timestamp}/index.html`
    }]
  ],


  use: {
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  }
});
