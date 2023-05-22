import AppointmentPage from "../pageObjects/appointment.page";
import HistoryPage from "../pageObjects/history.page";
import HomePage from "../pageObjects/home.page";
import SummaryPage from "../pageObjects/summary.page";

describe("HomePage", () => {
  beforeEach(() => {
    HomePage.visit();
  });
  it("Scenario 1 - Make an Appointment", () => {
    HomePage.MakeAppointment.click();
    HomePage.login("John Doe", "ThisIsNotAPassword");
    AppointmentPage.FacilityDropdown.select("Seoul CURA Healthcare Center");
    AppointmentPage.HospitalReadmissionChk.click();
    AppointmentPage.HealthProgramsMedicaid.check();
    AppointmentPage.Calendar.click();
    AppointmentPage.CalendarDays.contains("30").click();
    AppointmentPage.Title.click();
    AppointmentPage.CommentField.type("CURA Healthcare Service");
    AppointmentPage.BookAppontmentBtn.click();
    SummaryPage.FacultyField.should(
      "have.text",
      "Seoul CURA Healthcare Center"
    );
    SummaryPage.HospitalReadmissionField.should("have.text", "Yes");
    SummaryPage.ProgramField.should("have.text", "Medicaid");
    SummaryPage.VisitDateField.should("contain.text", "30/");
    SummaryPage.CommentField.should("have.text", "CURA Healthcare Service");
  });
  it.only("Scenario 2 - Appointment history empty", () => {
    HomePage.MakeAppointment.click();
    HomePage.login("John Doe", "ThisIsNotAPassword");
    AppointmentPage.MenuStack.click();
    AppointmentPage.SideBar.should("have.class", "active");
    AppointmentPage.MenuItemList.contains("History").click();
    HistoryPage.NoAppointmentText.should("be.visible");
  });
});
