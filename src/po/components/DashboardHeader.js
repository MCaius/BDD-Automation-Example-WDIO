export class DashboardHeader {
    static dashboardTitle = '.header_label .app_logo';
  
    static async getDashboardTitle() {
      return await $(DashboardHeader.dashboardTitle).getText();
    }
  }
