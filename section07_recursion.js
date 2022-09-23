/*
/////////////////////////////////////////////////////////////
// 1: Basic example
/////////////////////////////////////////////////////////////
const count10 = (n = 10) => {
    // Base case:
    if ( n === 0) return 0
    console.log(n) 
    // Recursion:
    return count10(n - 1)
}
count10()

/////////////////////////////////////////////////////////////
// 1: Power
/////////////////////////////////////////////////////////////
// Write a function called power which accepts a base and an exponent.
// The function should return the power of the base to the exponent.
// This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
// 2^3 = 2 * (2 * 2)
// (2)
*/
const power = (b, e) => {
    if (e === 0) return 1
    return b * power(b, e - 1)
}
// console.log(power(2, 3))

/////////////////////////////////////////////////////////////
// 2: factorial
/////////////////////////////////////////////////////////////
const factorial = (n) => {
    if (n === 0) return 1
    return n * factorial(n - 1)
}
console.log(factorial(4))