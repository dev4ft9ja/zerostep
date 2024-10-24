// const { test, expect } = require('@playwright/test');
// const { ai } = require('@zerostep/playwright');
// const dotenv = require("dotenv");

// dotenv.config

// // Optional: Verify token is available
// if (!process.env.ZEROSTEP_TOKEN) {
//   console.warn('Warning: ZEROSTEP_TOKEN not found in environment variables. Checking for config file...');
// } else {
//   console.log('Using ZEROSTEP_TOKEN from environment variables');
// }
// test.describe('AI-powered Playwright Tests', () => {


//   // Book search and definition test
//   test('search for book definition and verify content', async ({ page }) => {
//     // Initial navigation
//     await page.goto('https://www.google.com');
//     await ai('Type "best selling books 2024" in the search box', { page, test });

//     // Use AI to find and click the dictionary link
//     // await ai('Click on the Book Definition & Meaning link', { page, test });

//     // Verify we're on the correct page
//     // await page.waitForURL('https://www.merriam-webster.com/dictionary/book');

//     // // Use AI to extract information
//     // const mainTitle = await ai('What is the main title on this page?', { page, test });
//     // console.log('Main title:', mainTitle);

//     // // Verify definition content
//     // const definition = await ai('Extract the first definition of book', { page, test });
//     // expect(definition).toContain('book');

//     // // Take screenshot of the definition
//     await page.screenshot({
//       path: 'book-definition.png',
//       fullPage: false
//     });
//   });

//   // Advanced search and navigation test
//   //   test('perform advanced book search and analyze results', async ({ page }) => {
//   //     await page.goto('https://www.google.com/');

//   //     // Use AI to interact with search
//   //     await ai('Type "best selling books 2024" in the search box', { page, test });
//   //     await ai('Click the search button', { page, test });

//   //     // Extract search results
//   //     const searchResults = await ai('List the titles of the first 3 book results', { page, test });
//   //     console.log('Top books:', searchResults);

//   //     // Navigate to a specific result
//   //     await ai('Click on the first book result', { page, test });

//   //     // Verify page content
//   //     const bookDetails = await ai('Extract the book title, author, and rating if available', { page, test });
//   //     console.log('Book details:', bookDetails);
//   //   });

//   // Interactive elements test
//   //   test('interact with dynamic page elements', async ({ page }) => {
//   //     await page.goto('https://www.google.com/search?q=book');

//   //     // Use AI to find and interact with filters
//   //     await ai('Click on the Books filter if available', { page, test });

//   //     // Wait for content update
//   //     await page.waitForLoadState('networkidle');

//   //     // Use AI to interact with dynamic elements
//   //     const categories = await ai('List all book categories visible on the page', { page, test });
//   //     console.log('Available categories:', categories);

//   //     // Filter results
//   //     await ai('Click on the Fiction category if available', { page, test });

//   //     // Extract filtered results
//   //     const fictionBooks = await ai('Extract titles of the first 3 fiction books shown', { page, test });
//   //     console.log('Fiction books:', fictionBooks);
//   //   });

//   //   // Error handling and recovery
//   //   test('handle dynamic content and errors gracefully', async ({ page }) => {
//   //     await page.goto('https://www.google.com/search?q=book');

//   //     try {
//   //       // Attempt to interact with elements that might not exist
//   //       await ai('Click on the Advanced Search option if it exists', { 
//   //         page, 
//   //         test,
//   //         timeout: 5000  // Custom timeout for AI actions
//   //       });
//   //     } catch (error) {
//   //       console.log('Advanced search not found, continuing with basic search');
//   //     }

//   //     // Use AI with custom options
//   //     await ai('Click on any book-related link', { 
//   //       page, 
//   //       test,
//   //       retries: 3,  // Retry AI action up to 3 times
//   //       confidence: 0.8  // Require high confidence for AI actions
//   //     });

//   //     // Take screenshot of final state
//   //     await page.screenshot({ 
//   //       path: 'final-state.png',
//   //       fullPage: true 
//   //     });
//   //   });
// });

// // Configure retry and timeout settings
// test.use({
//   actionTimeout: 10000,
//   navigationTimeout: 15000,
//   retries: process.env.CI ? 2 : 0,
// });

// // Custom error handler for AI actions
// process.on('unhandledRejection', (error) => {
//   console.error('AI Action Failed:', error);
//   // Add any custom error reporting logic here
// });

import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

const email = 'test@example.com'
const password = 'passwordhere'
const hostname = 'realhostnamehere.develop.lightning.force.com'

test.describe('Salesforce', () => {
  test('create an opportunity', async ({ page }) => {
    await page.goto('https://login.salesforce.com')
    await ai(`Enter the username ${email}`, { page, test })
    await ai(`Enter the password ${password}`, { page, test })
    await page.click('text="Log In"')

    // Only reaches here if we are successfully authenticated
    await page.waitForSelector('text="Home"')

    // Navigate directly to Sales app
    await page.goto(`https://${hostname}/lightning/page/home`)
    await page.waitForSelector('text="Quarterly Performance"')

    await ai('Click on Opportunities link', { page, test })
    await page.click('text="New"')

    // Wait for 'New Opportunity' form to be displayed
    await page.waitForSelector('text="New Opportunity"')

    await ai(`Enter '12000' in the Amount field.`, { page, test })
    await ai('Enter Test in the opportunity name input', { page, test })

    const thirtyDaysFromNow = new Date()
    thirtyDaysFromNow.setDate(thirtyDaysFromNow.getDate() + 30)

    const closeDate = thirtyDaysFromNow.toLocaleDateString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: 'numeric',
    })

    await ai(`Input ${closeDate} into the Close Date field`, { page, test })
    await ai('Click on the Stage dropdown', { page, test })
    await ai('Click on the Needs Analysis option', { page, test })
    await ai('Click Save', { page, test })

    const result = await ai('What is the current stage of the opportunity?', { page, test })
    expect(result).toEqual('Needs Analysis')
  })
})