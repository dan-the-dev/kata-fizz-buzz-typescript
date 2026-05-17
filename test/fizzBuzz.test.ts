import FizzBuzz from "../src/fizzBuzz";

describe("FizzBuzz", () => {
  const fizzBuzz = new FizzBuzz();

  it("returns 1 as string for input 1", () => {
    expect(fizzBuzz.convert(1)).toBe("1");
  });

  it("returns 2 as string for input 2", () => {
    expect(fizzBuzz.convert(2)).toBe("2");
  });

  it('returns "Fizz" for input 3', () => {
    expect(fizzBuzz.convert(3)).toBe("Fizz");
  });

  it('returns "Buzz" for input 5', () => {
    expect(fizzBuzz.convert(5)).toBe("Buzz");
  });

  it('returns "Fizz" for multiples of 3', () => {
    expect(fizzBuzz.convert(6)).toBe("Fizz");
    expect(fizzBuzz.convert(9)).toBe("Fizz");
  });

  it('returns "Buzz" for multiples of 5', () => {
    expect(fizzBuzz.convert(10)).toBe("Buzz");
    expect(fizzBuzz.convert(20)).toBe("Buzz");
  });

  it('returns "FizzBuzz" for multiples of 15', () => {
    expect(fizzBuzz.convert(15)).toBe("FizzBuzz");
    expect(fizzBuzz.convert(30)).toBe("FizzBuzz");
  });

  it("returns sequence from 1 to n", () => {
    expect(fizzBuzz.sequence(3)).toEqual(["1", "2", "Fizz"]);
  });

  it("returns full sequence from 1 to 100", () => {
    const expected = [
      "1", "2", "Fizz", "4", "Buzz", "Fizz", "7", "8", "Fizz", "Buzz",
      "11", "Fizz", "13", "14", "FizzBuzz", "16", "17", "Fizz", "19", "Buzz",
      "Fizz", "22", "23", "Fizz", "Buzz", "26", "Fizz", "28", "29", "FizzBuzz",
      "31", "32", "Fizz", "34", "Buzz", "Fizz", "37", "38", "Fizz", "Buzz",
      "41", "Fizz", "43", "44", "FizzBuzz", "46", "47", "Fizz", "49", "Buzz",
      "Fizz", "52", "53", "Fizz", "Buzz", "56", "Fizz", "58", "59", "FizzBuzz",
      "61", "62", "Fizz", "64", "Buzz", "Fizz", "67", "68", "Fizz", "Buzz",
      "71", "Fizz", "73", "74", "FizzBuzz", "76", "77", "Fizz", "79", "Buzz",
      "Fizz", "82", "83", "Fizz", "Buzz", "86", "Fizz", "88", "89", "FizzBuzz",
      "91", "92", "Fizz", "94", "Buzz", "Fizz", "97", "98", "Fizz", "Buzz",
    ];
    expect(fizzBuzz.sequence(100)).toEqual(expected);
  });
});
