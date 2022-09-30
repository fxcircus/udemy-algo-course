/* Radix Sort:
------------------
General idea - compare the digits of each num, from right to left
(instead of comparing 2 numbers like we did in prev sorting functions),
the numbers are sorted into lists by the value of current digit each time

10  11  562 ...
0   851 2   ...     ===>    [10, 0, 150, 11, 851,  1, 562, 2, 92] ....
150 1   92  ...
--- --- --- ---
0   1   2   ...

Big O time complexity:       O(nk)   
Big O space complexity:      O(n + k)
*** n=arr length, k=num of digits   ***
*/

// Step 1 - helper functions:
// --------------------------
// A) get digit in position (idx)
const getDigit = (num, i) => {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10 
}
// console.log (getDigit([12345, 0])) // 5
// console.log (getDigit([12345, 2])) // 3

// B) Count how many digits in given num
const digitCount = (num) => {
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

// C) Determine which num in given array has the most digits, using digitCount
const mostDigits = (nums) => {
    let maxDigits = 0
    for (let i = 0; i < nums.length; i++) {
      maxDigits = Math.max(maxDigits, digitCount(nums[i]))
    }
    return maxDigits
  }

// Step 2: sort function:
// ----------------------
const radixSort = (arr) => {
    let maxDigitCount = mostDigits(arr)
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for(let i = 0; i < arr.length; i++){
            let digit = getDigit(arr[i], k)
            digitBuckets[digit].push(arr[i])
        }
        arr = [].concat(...digitBuckets)
    }
    return arr
}
console.log(radixSort([23, 345, 5467, 12, 2345, 9852]))
// [12, 23, 345, 2345, 5467, 9852]