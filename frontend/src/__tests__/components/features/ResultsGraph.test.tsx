import { render } from "@testing-library/react";
import ResultsGraph from "../../../components/features/ResultsGraph";

describe("ResultsGraph", () => {
   it("should work as expected", () => {
      render(<ResultsGraph />);
      expect(ResultsGraph).toBeDefined();
   });
});
