import { render } from "@testing-library/react";
import Navbar from "../../../components/shared/Navbar";

describe("Navbar", () => {
   it("should work as expected", () => {
      render(<Navbar />);
      expect(Navbar).toBeDefined();
   });
});
