export class LoginForm {
    usernameInput = '#user-name';
    passwordInput = '#password';
    loginButton = '#login-button';
    errorMessage = '.error-message-container';
  
    async login(username, password) {
      await $(this.usernameInput).setValue(username);
      await $(this.passwordInput).setValue(password);
    }
  
    async clearUsernameInput() {
      const usernameInput = $(this.usernameInput);
      await usernameInput.doubleClick();
      await browser.keys('Delete');
    }
  
    async clearPasswordInput() {
      const passwordInput = $(this.passwordInput);
      await passwordInput.doubleClick();
      await browser.keys('Delete');
    }
  
    async clickLoginButton() {
      await $(this.loginButton).click();
    }
  
    async getErrorMessage() {
      return await $(this.errorMessage).getText();
    }
}