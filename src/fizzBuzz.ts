class FizzBuzz {
    convert(n: number): string {
        if (n % 15 === 0) {
            return "FizzBuzz";
        }
        if (n % 3 === 0) {
            return "Fizz";
        }
        if (n % 5 === 0) {
            return "Buzz";
        }
        return String(n);
    }

    sequence(upTo: number): string[] {
        const result: string[] = [];
        for (let i = 1; i <= upTo; i++) {
            result.push(this.convert(i));
        }
        return result;
    }
}

export default FizzBuzz;
