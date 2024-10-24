import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 90000,
  retries: 2, // Retry test in case of failure
  use: {
    browserName: 'chromium', // chromium, firefox, webkit
    headless: false, // Set to true for headless mode
    screenshot: 'on', // Automatically take screenshots on failure
    trace: 'on', // Capture a trace of the test
  },
});
