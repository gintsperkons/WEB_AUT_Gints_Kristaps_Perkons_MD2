import BasePage from "./base.page";

class AppointmentPage extends BasePage {
  static get FacilityDropdown() {
    return cy.get("#combo_facility");
  }
  static get HospitalReadmissionChk() {
    return cy.get("#chk_hospotal_readmission");
  }
  static get HealthProgramsMedicaid() {
    return cy.get("#radio_program_medicaid");
  }
  static get Calendar() {
    return cy.get(".input-group-addon");
  }
  static get CalendarDays() {
    return cy.get(".day:not(.old):not(.new)");
  }
  static get Title() {
    return cy.get("h2");
  }
  static get CommentField() {
    return cy.get("#txt_comment");
  }
  static get BookAppontmentBtn() {
    return cy.get("#btn-book-appointment");
  }
  static get MenuStack() {
    return cy.get("#menu-toggle");
  }
  static get SideBar() {
    return cy.get("#sidebar-wrapper");
  }
  static get MenuItemList() {
    return cy.get(".sidebar-nav > li > a");
  }
}
export default AppointmentPage;
