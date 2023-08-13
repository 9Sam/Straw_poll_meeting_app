import { render, screen } from "@testing-library/react";
import Event from "../../../components/features/Event";

describe("Event", () => {
   it("should work as expected", () => {
      render(<Event />);
      expect(Event).toBeDefined();
   });
});
