import BasePage from "./base.page";

class HistoryPage extends BasePage {
  static get NoAppointmentText() {
    return cy.get(".text-center > p");
  }
}
export default HistoryPage;
