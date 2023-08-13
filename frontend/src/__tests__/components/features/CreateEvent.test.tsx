import { render, screen } from "@testing-library/react";
import CreateEvent from "../../../components/features/CreateEvent";

describe("CreateEvent", () => {
   it("should work as expected", () => {
      render(<CreateEvent />);
      expect(CreateEvent).toBeDefined();
   });
});
