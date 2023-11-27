import FizzBuzz from "../src/fizzBuzz";
const FizzBuzzClass = new FizzBuzz();

describe('number remain number set', function (): void {

  it('test 1 returns "1"', (): void => {

    var result: string = FizzBuzzClass.handle(1);

    expect(result).toBe('1');
  });

  it('test 2 returns "2"', (): void => {

    var result: string = FizzBuzzClass.handle(2);

    expect(result).toBe('2');
  });

  it('test 4 returns "4"', (): void => {

    var result: string = FizzBuzzClass.handle(4);

    expect(result).toBe('4');
  });

});

describe('multiple of 3 returns Fizz', function (): void {

  it('test 3 returns "Fizz"', (): void => {

    var result: string = FizzBuzzClass.handle(3);

    expect(result).toBe('Fizz');
  });

  it('test 6 returns "Fizz"', (): void => {

    var result: string = FizzBuzzClass.handle(6);

    expect(result).toBe('Fizz');
  });

  it('test 9 returns "Fizz"', (): void => {

    var result: string = FizzBuzzClass.handle(9);

    expect(result).toBe('Fizz');
  });

});