import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../po/pages/login.page';
import InventoryPage from '../po/pages/inventory.page'; 

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I am on the login page', async () => {
    await loginPage.open();
  });
  
When('I enter {string} and {string}', async (username, password) => {
    await loginPage.login(username, password);
  });
  
When('I clear the {string} and the {string} fields', async (field1, field2) => {
    const fieldsToClear = [field1, field2];
    if (fieldsToClear.includes('Username')) {
      await loginPage.clearUsernameInput();
    }
    if (fieldsToClear.includes('Password')) {
      await loginPage.clearPasswordInput();
    }
  });
  
When('I clear the {string} field', async (field) => {
    const fieldToClear = [field];
    if (fieldToClear.includes('Password')) {
      await loginPage.clearPasswordInput();
    }
  });

// For UTC1 and UTC2
When('I click the "Login" button for login', async () => {
    await loginPage.clickLoginButton();
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
    const actualMessage = await loginPage.getErrorMessage();
    expect(actualMessage).toContain(errorMessage);
  });

Then('I should see the dashboard title {string}', async (expectedTitle) => {
    // Check if we are on the dashboard page
    if (await browser.getUrl() === inventoryPage.url) { 
      const actualTitle = await inventoryPage.getDashboardTitle();
      expect(actualTitle).toContain(expectedTitle);
    }
});
