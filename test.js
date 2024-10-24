// Import the necessary libraries
const { test, expect } = require('@playwright/test');
const { ai } = require('@zerostep/playwright');

test.describe('AI-powered Playwright Test', () => {

  // Define a test case
  test('Visit Website and Take Screenshot', async ({ page }) => {
    
    // Navigate to the website
    await page.goto('https://www.google.com/search?q=book');
    
    // Use AI to click on a link (you can replace this with any other prompt)
    await ai('Click on the Book Definition & Meaning link', { page, test: {} });
    
    // Wait for navigation
    await page.waitForURL('https://www.merriam-webster.com/dictionary/book');
    
    // Take a screenshot after navigation
    await page.screenshot({ path: 'screenshot.png' });

    // Example of using AI to extract some information
    const info = await ai('What is the main title on this page?', { page, test });
    console.log('Main title on the page:', info);
  });

});
