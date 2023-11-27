class FizzBuzz {
    handle(number: number): string {
        if (number % 3 === 0) {
            return 'Fizz'
        }
        return number.toString()
    }
}

export default FizzBuzz