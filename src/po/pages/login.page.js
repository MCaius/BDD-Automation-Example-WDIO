import { LoginForm } from '../components/LoginForm';

export default class LoginPage {
    url = 'https://www.saucedemo.com/';

    async open() {
        await browser.url(this.url);
    }

    async login(username, password) {
        await LoginForm.login(username, password);
    }

    async clearUsernameInput() {
        await LoginForm.clearUsernameInput();
    }

    async clearPasswordInput() {
        await LoginForm.clearPasswordInput();
    }

    async clickLoginButton() {
      await $(LoginForm.loginButton).click();
    }

    async getErrorMessage() {
        return await LoginForm.getErrorMessage();
    }
}