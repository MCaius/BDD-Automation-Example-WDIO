import { LoginForm } from '../components/LoginForm';

export default class LoginPage {
    url = 'https://www.saucedemo.com/';
    form = new LoginForm();

    async open() {
        await browser.url(this.url);
    }
}