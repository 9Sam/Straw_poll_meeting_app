import { render } from "@testing-library/react";
import Results from "../../../components/features/Results";

describe("Results", () => {
   it("should work as expected", () => {
      render(<Results />);
      expect(Results).toBeDefined();
   });
});
