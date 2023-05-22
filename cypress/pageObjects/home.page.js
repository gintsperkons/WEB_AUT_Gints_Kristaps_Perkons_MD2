import BasePage from "./base.page";

class HomePage extends BasePage {
  static get MakeAppointment() {
    return cy.get("#btn-make-appointment");
  }
  static get UserField() {
    return cy.get("#txt-username");
  }
  static get PasswordField() {
    return cy.get("#txt-password");
  }
  static get LoginBtn() {
    return cy.get("#btn-login");
  }
  static login(username, password) {
    this.UserField.type(username);
    this.PasswordField.type(password);
    this.LoginBtn.click();
  }
}
export default HomePage;
