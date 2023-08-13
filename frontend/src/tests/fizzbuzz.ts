const fizzbuzz = (num: number) => {
   if (num % 5 === 0 && num % 3 === 0) return "fizzbuzz";
   if (num % 3 === 0) return "fizz";
   if (num % 5 === 0) return "buzz";
   return num;
};

export default fizzbuzz;
