import { test, expect } from '@playwright/test'
import { ai } from '@zerostep/playwright'

test.describe('Hamma', () => {
    test('See all modal working', async ({ page }) => {
        // Navigate to Google
        await page.goto('https://user-dashboard-trading-accounts.netlify.app');

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle')

        // confirm them elements are visible
        await expect(page.locator('text=Overview')).toBeVisible()
        await expect(page.locator('text=News')).toBeVisible()
        await expect(page.locator('text=Fundamentals')).toBeVisible()
        await expect(page.locator('text=Company Calendar')).toBeVisible()

        // next click oinf the overview page
        await ai('Click on "Overview"', { page, test })
        await expect(page.locator('text=See All')).toBeVisible()

        // next click on the see all btn
        await ai('Click on "See All"', { page, test })
        await expect(page.locator('text="Company Name"')).toBeVisible()

        
        // Take screenshot after all actions are complete
        await page.screenshot({
            path: 'screenshot/see-all-modal.png',
            fullPage: false
        })
    });

    // // test the search bar by the right
    test('search bar by the right', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app');

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        // confirm them elements are visible
        await expect(page.locator('text=Volatility')).toBeVisible()
        await expect(page.locator('text=Momentum')).toBeVisible()
        await expect(page.locator('text=Volume')).toBeVisible()
        await expect(page.locator('text=Watchlist')).toBeVisible()

        
    });

    // // test the search bar by the right
    test('Click home from bar by the right', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app');
        

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        
        // click on the home
        await ai('Click on "Home"', { page, test })

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle')
        
        // // confirm they elements are visible
        await expect(page.locator('text="Start trading to start earning"')).toBeVisible()
        await expect(page.locator('text="Trade Now"')).toBeVisible()
        // await expect(page.locator('text=Fundamentals')).toBeVisible()
        // await expect(page.locator('text=Company Calendar')).toBeVisible()
        
    });

    // // test the search bar by the right
    test('Test login route', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app/login');
        

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        
        // // confirm they elements are visible
        await expect(page.locator('text="Welcome back"')).toBeVisible()
        await expect(page.locator('text="Forgot password?"')).toBeVisible()

        // use ai to enter email and password;
        await ai(`Enter 'nwaforglory6@gmail.com' in the email field.`, { page, test })
        await ai('Enter "Password#123" in the password field', { page, test })

        await ai('Click "Login"', { page, test })

        await page.waitForLoadState('networkidle');

        await expect(page.locator('text=Fundamentals')).toBeVisible()
        await expect(page.locator('text=Company Calendar')).toBeVisible()

        
    })
    // test the search bar by the right
    test('Test postion route', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app/login');
        

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        
        // // confirm they elements are visible
        await expect(page.locator('text="Welcome back"')).toBeVisible()
        await expect(page.locator('text="Forgot password?"')).toBeVisible()

        // use ai to enter email and password;
        await ai(`Enter 'nwaforglory6@gmail.com' in the email field.`, { page, test })
        await ai('Enter "Password#123" in the password field', { page, test })

        await ai('Click "Login"', { page, test })

        await page.waitForLoadState('networkidle');

        await expect(page.locator('text=Fundamentals')).toBeVisible()
        await expect(page.locator('text=Company Calendar')).toBeVisible()

        await ai('Click "Postions on the left green vertical bar"', { page, test })

        await expect(page.locator('text="Balance"')).toBeVisible()
        await expect(page.locator('text="Equity"')).toBeVisible()

        await page.screenshot({
            path: 'screenshots/positions.png',
            fullPage: false
        })


    })

    test('Test wallet route', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app/login');
        

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        
        // // confirm they elements are visible
        await expect(page.locator('text="Welcome back"')).toBeVisible()
        await expect(page.locator('text="Forgot password?"')).toBeVisible()

        // use ai to enter email and password;
        await ai(`Enter 'nwaforglory6@gmail.com' in the email field.`, { page, test })
        await ai('Enter "Password#123" in the password field', { page, test })

        await ai('Click "Login"', { page, test })

        await page.waitForLoadState('networkidle');

        await expect(page.locator('text=Fundamentals')).toBeVisible()
        await expect(page.locator('text=Company Calendar')).toBeVisible()

        await ai('Click "Wallet on the left green vertical bar"', { page, test })

        await ai('Click "Add Funds button with a green color"', { page, test })

        await page.screenshot({
            path: 'screenshots/wallet.png',
            fullPage: false
        })


    })

    test('Test Alert route', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app/login');
        

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        
        // // confirm they elements are visible
        await expect(page.locator('text="Welcome back"')).toBeVisible()
        await expect(page.locator('text="Forgot password?"')).toBeVisible()

        // use ai to enter email and password;
        await ai(`Enter 'nwaforglory6@gmail.com' in the email field.`, { page, test })
        await ai('Enter "Password#123" in the password field', { page, test })

        await ai('Click "Login"', { page, test })

        await page.waitForLoadState('networkidle');

        await expect(page.locator('text=Fundamentals')).toBeVisible()
        await expect(page.locator('text=Company Calendar')).toBeVisible()

        await ai('Click "Alert on the left green vertical bar"', { page, test })

        await ai('Click "Add Funds button with a green color"', { page, test })

        // Enter name
        await ai('Enter "Zerostep test" in the Name field', { page, test })

        // Enter description
        await ai('Enter "Zerostep description" in the Description field', { page, test })

        // Select instrument
        await ai('Click the Instrument dropdown and select "AIICO"', { page, test })

        // Select alert type
        await ai('Click the "Choose alert type" dropdown and select "Volume"', { page, test })

        // Select action
        await ai('Click the "Choose action" dropdown and select "below"', { page, test })

        // Enter value
        await ai('Enter "10.2" in the value input field', { page, test })

        // Select schedule
        await ai('Click the Schedule dropdown and select "Once"', { page, test })

        // Click proceed
        await ai('Click the "Proceed" button', { page, test })

        await page.screenshot({
            path: 'screenshots/Alert.png',
            fullPage: false
        })


    })

    test('Test Account route', async({page})=>{
        await page.goto('https://user-dashboard-trading-accounts.netlify.app/login');
        

        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        
        // // confirm they elements are visible
        await expect(page.locator('text="Welcome back"')).toBeVisible()
        await expect(page.locator('text="Forgot password?"')).toBeVisible()

        // use ai to enter email and password;
        await ai(`Enter 'nwaforglory6@gmail.com' in the email field.`, { page, test })
        await ai('Enter "Password#123" in the password field', { page, test })

        await ai('Click "Login"', { page, test })

        await page.waitForLoadState('networkidle');

        await expect(page.locator('text=Fundamentals')).toBeVisible()
        await expect(page.locator('text=Company Calendar')).toBeVisible()

        await ai('Click "Account on the left green vertical bar"', { page, test })

        await ai('Click "Add New Account button with a green color"', { page, test })

        // Enter name
        await ai('Enter "demo3_acc" in the Name field', { page, test })

        // Select instrument
        await ai('Click "Demo Account" ', { page, test })


        // Click proceed
        await ai('Click the "Create Account" button', { page, test })
        // Wait for page to load and stabilize
        await page.waitForLoadState('networkidle');
        await page.screenshot({
            path: 'screenshots/Account.png',
            fullPage: false
        })


    })
})


// test.describe('Salesforce', () => {
//     test('search google', async ({ page }) => {
//         // Navigate to Google
//         await page.goto('https://www.google.com')
        
//         // Perform search
//         await ai('Type "salesforce search" in the search box', { page, test })
        
//         // Click result and wait for navigation
//         await ai('Click on the first search result', { page, test })
        
//         // Wait for page to load and stabilize
//         await page.waitForLoadState('networkidle')
        
//         // Extract title and log it
//         const title = await ai('Extract the content of the search result', { page, test })
//         console.log('Extracted title:', title)
        
//         // Take screenshot after all actions are complete
//         await page.screenshot({
//             path: 'book-definition.png',
//             fullPage: false
//         })
//     })
// })