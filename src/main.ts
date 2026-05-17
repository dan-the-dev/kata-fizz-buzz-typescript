import FizzBuzz from "./fizzBuzz";

const fizzBuzz = new FizzBuzz();
const lines = fizzBuzz.sequence(100);

for (const line of lines) {
    console.log(line);
}
