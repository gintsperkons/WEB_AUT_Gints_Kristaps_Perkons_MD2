import BasePage from "./base.page";

class SummaryPage extends BasePage {
  static get FacultyField() {
    return cy.get("#facility");
  }
  static get HospitalReadmissionField() {
    return cy.get("#hospital_readmission");
  }
  static get ProgramField() {
    return cy.get("#program");
  }
  static get VisitDateField() {
    return cy.get("#visit_date");
  }
  static get CommentField() {
    return cy.get("#comment");
  }
}
export default SummaryPage;
