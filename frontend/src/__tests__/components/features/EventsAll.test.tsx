import { render } from "@testing-library/react";
import EventsAll from "../../../components/features/EventsAll";

describe("EventsAll", () => {
   it("should work as expected", () => {
      render(<EventsAll />);
      expect(EventsAll).toBeDefined();
   });
});
