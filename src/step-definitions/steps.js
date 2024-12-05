import { Given, When, Then } from '@wdio/cucumber-framework';
import LoginPage from '../po/pages/login.page';
import InventoryPage from '../po/pages/inventory.page'; 

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

Given('I am on the login page', async () => {
    await loginPage.open();
  });
  
When('I enter {string} and {string}', async (username, password) => {
    const actualPassword = password === '{TEST_PWD}' 
        ? process.env.TEST_PASSWORD
        : password;
   // console.log('Using password:', actualPassword); // Print passowrds from the env file during test
    await loginPage.form.login(username, actualPassword);
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
  
Then('I should see the error message {string}', async (errorMessage) => {
    const actualMessage = await loginPage.form.getErrorMessage();
    expect(actualMessage).toContain(errorMessage);
  });

Then('I should see the dashboard title {string}', async (expectedTitle) => {
    // First, verify we're on the correct page
    const currentUrl = await browser.getUrl();
    expect(currentUrl).toContain(inventoryPage.path);
    
    // Then check the title
    const actualTitle = await inventoryPage.header.getDashboardTitle();
    expect(actualTitle).toContain(expectedTitle);
});
