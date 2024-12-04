import { DashboardHeader } from '../components/DashboardHeader';

export default class InventoryPage {
  path = '/inventory.html';
  header = new DashboardHeader();

  async open() {
    await browser.url(this.path);
  }
}