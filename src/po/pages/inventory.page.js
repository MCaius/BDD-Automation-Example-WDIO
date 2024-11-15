import { DashboardHeader } from '../components/DashboardHeader';

export default class InventoryPage {
  url = 'https://www.saucedemo.com/inventory.html';

  async open() {
    await browser.url(this.url);
  }

  async getDashboardTitle() {
    return await DashboardHeader.getDashboardTitle();
  }
}