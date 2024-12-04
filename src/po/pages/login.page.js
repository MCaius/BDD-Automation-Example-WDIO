import { LoginForm } from '../components/LoginForm';

export default class LoginPage {
    path = '/';
    form = new LoginForm();

    async open() {
        await browser.url(this.path);
    }
}