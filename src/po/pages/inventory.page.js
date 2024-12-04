import { DashboardHeader } from '../components/DashboardHeader';

export default class InventoryPage {
  url = 'https://www.saucedemo.com/inventory.html';
  header = new DashboardHeader();

  async open() {
    await browser.url(this.url);
  }
}