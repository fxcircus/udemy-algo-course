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
// console.log(factorial(4)) // 24

/////////////////////////////////////////////////////////////
// 3: productOfArray
/////////////////////////////////////////////////////////////
// Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
const productOfArray = (arr) => {
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}
// console.log(productOfArray([1,2,3])) // 6

/////////////////////////////////////////////////////////////
// 4: fib
/////////////////////////////////////////////////////////////
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. 
const fib = (n) => {
    if (n <= 2) return 1
    return fib(n  - 1) + fib (n - 2)
}
fib(4) // 0, 1, 1, 2 = 3
// fib(3) + fib(2) ==> fib(2) + fib(1)  ==> 1 + 1 = 2 ==> 2 + fib(2) ==> 2 + 1  = 3
// console.log(fib(8)) // 0, 1, 1, 2, 3, 5, 8, 13, 21 
// fib(7) + fib(6)
// fib(6) + fib(5) + fib(5) + fib(4)
// fib(5) + fib(4) +fib(4) + fib(3) + fib(4) + fib(3) + fib(3) + fib(2)
// fib(4) + fib(3) + fib(3) + fib(2) + fib(3) + fib(2) + fib(2) + fib(1) + fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) +1
// fib(3) + fib(2) + fib(2) + fib(1) + fib(2) + fib(1) + 1 + fib(2) + fib(1) + 1 + 1 + 1 + 2 + 1 + 1 + 1 + 1 + 1 +1
// 2 + 5 + 3 + 11 = 21

/////////////////////////////////////////////////////////////
// 5: reverse
/////////////////////////////////////////////////////////////
// Write a recursive function called reverse which accepts a string and returns a new string in reverse.
const reverse = (str) => {
    if (str.length <= 1) return str
    return reverse(str.slice(1)) + str[0]
}
// console.log(reverse('awesome')) // 'emosewa'
// reverse('wesome') + a
// reverse('esome') + w
// reverse('some') + e
// reverse('ome') + s
// reverse('me') + o
// reverse('e') + m
// ==> e + m + o + s + e + w + a = emosewa

// reverse('rithmschool') // 'loohcsmhtir'
// reverse('ithmschool') + r
// reverse('thmschool') + i
// reverse('hmschool') + t
// reverse('mschool') + h
// reverse('school') + m
// reverse('chool') + s
// reverse('hool') + c
// reverse('ool') + h
// reverse('ol') + o
// reverse('l') + o
// loohcsmhtir

/////////////////////////////////////////////////////////////
// 6: isPalindrome
/////////////////////////////////////////////////////////////
// returns true if the string passed to it is a palindrome (reads the same forward and backward).
// Otherwise it returns false.
// *** Q: need to check edge case when str is sent as 1 string
const isPalindrome = (str) => {
    if(str.length === 1) return true
    if(str[0] !== str[str.length - 1]) return false
    isPalindrome(str.slice(1,-1))
    return true
}
console.log(isPalindrome('tacocat'))// true
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false