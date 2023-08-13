import { render } from "@testing-library/react";
import EventCard from "../../../components/features/EventCard";
import { EventI } from "../../../interfaces/event.interface";
import { MemoryRouter } from "react-router-dom";

const mockEvent = {
   _id: "1",
   name: "Event 1",
   createdBy: "Sam",
   dueDate: new Date("12-12-2023"),
   creationDate: new Date(),
   status: "voting",
   description: "This is the description for my first task",
   eventType: "due",
   days: [],
   duration: 0,
   guests: [],
} as EventI;

describe("EventCard", () => {
   beforeEach(() => {
      render(
         <MemoryRouter>
            <EventCard event={mockEvent} />
         </MemoryRouter>
      );
   });

   it("should work as expected", () => {
      expect(EventCard).toBeDefined();
   });
});
