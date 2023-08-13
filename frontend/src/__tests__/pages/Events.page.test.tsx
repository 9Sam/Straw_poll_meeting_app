import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import EventsPage from "../../pages/Events.page";

describe("EventsPage", () => {
   beforeEach(() => {
      render(
         <MemoryRouter>
            <EventsPage />
         </MemoryRouter>
      );
   });

   it("should work as expected", () => {
      expect(EventsPage).toBeDefined();
   });

   it("should have a title with text 'My Events'", () => {
      expect(screen.getByText("My Events")).toBeDefined();
   });

   it("should have a button with text 'Create new event'", () => {
      const button = screen.getByText("Create new event");

      expect(button).toBeDefined();
   });
});
