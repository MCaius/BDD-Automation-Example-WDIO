export class DashboardHeader {
    dashboardTitle = '.header_label .app_logo';
  
    async getDashboardTitle() {
      return await $(this.dashboardTitle).getText();
    }
}
