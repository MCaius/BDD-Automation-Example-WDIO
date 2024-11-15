export class LoginForm {
    static usernameInput = '#user-name';
    static passwordInput = '#password';
    static loginButton = '#login-button';
    static errorMessage = '.error-message-container';
  
    static async login(username, password) {
      await $(LoginForm.usernameInput).setValue(username);
      await $(LoginForm.passwordInput).setValue(password);
      await $(LoginForm.loginButton).click();
    }
  
    static async clearUsernameInput() {
      const usernameInput = $(LoginForm.usernameInput);
      // Useing this approch of clering fields to avoid inconsitency bewteen browsers
      await usernameInput.doubleClick(); // Select all text in the field
      await browser.keys('Delete'); // Delete selected text
    }
  
    static async clearPasswordInput() {
      const passwordInput = $(LoginForm.passwordInput);
      // Useing this approch of clering fields to avoid inconsitency bewteen browsers
      await passwordInput.doubleClick(); // Select all text in the field
      await browser.keys('Delete'); // Delete selected text
    }
  
    static async clickLoginButton() {
      await $(LoginForm.loginButton).click();
    }
  
    static async getErrorMessage() {
      return await $(LoginForm.errorMessage).getText();
    }
  }