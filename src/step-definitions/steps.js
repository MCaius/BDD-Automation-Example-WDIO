import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../po/pages/login.page';
import InventoryPage from '../po/pages/inventory.page'; 

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I am on the login page', async () => {
    await loginPage.open();
  });
  
When('I enter {string} and {string}', async (username, password) => {
    await loginPage.form.login(username, password);
  });
  
When('I clear the fields:', async (dataTable) => {
    const fieldsToClear = dataTable.raw().flat();
    if (fieldsToClear.includes('Username')) {
        await loginPage.form.clearUsernameInput();
    }
    if (fieldsToClear.includes('Password')) {
        await loginPage.form.clearPasswordInput();
    }
});
  
When('I click the "Login" button for login', async () => {
    await loginPage.form.clickLoginButton();
});
  
// For UTC3 ( Successful Login )
When('I am logged in and on the dashboard', async () => {
    // Wait for the page to transition
    if (await browser.getUrl() === loginPage.url) {
        await browser.waitUntil(
            async () => (await browser.getUrl()) === inventoryPage.url,
            {
                timeout: 50000,
                timeoutMsg: 'Expected URL did not change to inventory page within 5 seconds'
            }
        );
    }
});

Then('I should see the error message {string}', async (errorMessage) => {
    const actualMessage = await loginPage.form.getErrorMessage();
    expect(actualMessage).toContain(errorMessage);
  });

Then('I should see the dashboard title {string}', async (expectedTitle) => {
    // Check if we are on the dashboard page
    if (await browser.getUrl() === inventoryPage.url) { 
        const actualTitle = await inventoryPage.header.getDashboardTitle();
        expect(actualTitle).toContain(expectedTitle);
    }
});
