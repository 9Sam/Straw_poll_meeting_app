// import
import fizzbuzz from "./fizzbuzz";

describe("FizzBuzz", () => {
   it("should be defined", () => {
      expect(typeof fizzbuzz).toBe("function");
   });

   it("should return 'fizz' when the number is a multiple of 3", () => {
      expect(fizzbuzz(3)).toBe("fizz");
   });

   it("should return 'buzz' when the number is a multiple of 5", () => {
      expect(fizzbuzz(5)).toBe("buzz");
   });

   it("should return 'fizzbuzz' when the number is a multiple of 3 and 5", () => {
      expect(fizzbuzz(15)).toBe("fizzbuzz");
   });
});
