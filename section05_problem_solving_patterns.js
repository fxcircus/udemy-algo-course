/////////////////////////////////////////////////////////////
// Ex.1: "same"
/////////////////////////////////////////////////////////////
console.log("\nsame:\n")
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// The function takes in 2 arrays
// and make sure that for each of the values in the first array, thre's also  a value in the 2nd array
// so for each x in arr1 we need to have x^2 in arr2
// The number of occurences needs to match as well

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// [2, 3], [4, 9] ==> true
// [2], [4, 10] ==> false? should we check if the num of elementts is the same?
// [5], [] => false
// ["a", 8], ["a", 56] ==> false. Can we assume the arrays only contain nums, or do we need to check each element?

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
/* same(arr1, arr2)
IF arr1.length !== arr2.length ==> return
ELSE init new objects freq1 and freq2.
for each el in arr1, push el^2 into freq1 using the "frequency counter" pattern
EX: arr1 = [2, 3] ==> ferq1 = {4:1, 9:1}
do the same for arr2 but without changing the values
EX: arr2 = [4, 9] ==> ferq2 = {4:1, 9:1}
compare the objects and return true / false
*/

/////////////////////////////////////////////////////////////
// 4. Solve 
const same = (arr1, arr2) => {
    // Check different lengths edge case:
    if (arr1.length !== arr2.length) {
        return false
    } else {
        const freq1 = {}
        const freq2 = {}
        // Check frequencies
        arr1.forEach(el => {
            el *= el
            freq1[el] = (freq1[el] || 0) + 1
        })
        arr2.forEach(el => {
            freq2[el] = (freq2[el] || 0) + 1
        })
        // Compare and match each key:value pair between freq1 and freq2
        for (n in freq1) {
            if ((!(n in freq2)) || ((freq1[n] !== freq2[n]))) return false 
        }
    }
    return true
}

console.log(same([3, 2], [4,9]))

/////////////////////////////////////////////////////////////
// Ex.2: "Anagrarms"
/////////////////////////////////////////////////////////////
console.log("\nAnagrarms:\n")
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function takes in 2 strings. Returns true if the 2nd string is an anagram of the 1st string.
// Otherwise, return false
// Anagram = a new string formed by rearranging chars from an original string

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// ("cinema", "iceman") ==> true
// ("I am Lord Voldemort", "Tom Marvolo Riddle") ==> true? do we need to account for spaces? how about nums \ special chars \ lowercase and uppercase?
// ("", "") ==> true
// ("apple", "lapel") ==> false 

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
/* 
IF string length is different ==> return false
ELSE use freq counter pattern to check freq of each char in 2 new objects
Iterate over new obj and return false if we find 1 mismatch
return true
*/

/////////////////////////////////////////////////////////////
// 4. Solve 
const validAnagram = (str1, str2) => {
    // Edge case - making sure string have same lengh:
    if (str1.length !== str2.length) {
        return false
    } else {
        str1 = str1.toLowerCase()
        str2 = str2.toLowerCase()
        const freq = {}
        // Getting frequency of each char in str1
        for (const idx in str1) {
            const char = str1[idx]
            freq[char] = (freq[char] || 0) + 1
        }
        // If current char does not exist as key in freq object - return false
        // Otherwise subtract value of key by 1
        for (const idx in str2) {
            const char = str2[idx]
            if (!freq[char]) {
                return false
            } else {
                freq[char] -= 1
            }
        }
    }
    return true
}

console.log(validAnagram("cinema", "iceman")) // true
console.log(validAnagram("IamLordVoldemort", "TomMarvoloRiddle")) // true
console.log(validAnagram("", "")) // true
console.log(validAnagram("apple", "lapel")) // false

/////////////////////////////////////////////////////////////
// Ex.2: "sumZero"
/////////////////////////////////////////////////////////////
console.log("\nsumZero:\n")
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function accepts SORTED array of ints, returns and array with the FIRST pair of nums where num1 + num2 = 0
// If no pair exists -> return undefined

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// [-1, 0, 1] ==> [-1, 1]
// [-6, 1, 3, 4, 5, 6, 7 ,9 ,100000] ==> [-6, 6]
// [] ==> undefined because empty
// [0, ...] => undefined because first num is 0 so no sum will return 0 assuming nums cannot repeat
// [-1, 2] => undefined

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// IF num in idx 0 >= 0 ==> return
// ELSE init "left and right" pointers
// IF sum of nums in pointer pos is 0 ==> return these nums in an array
// ELSE IF sum > 0 ==> decrease right by 1
// ELSE IF sum < 0 ==> increase left by 1
// Keep going until the pointers reach each other, that is the last possible point

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:
const sumZero = (arr) => {
    if (arr[0] === 0) {
        return
    } else {
        // init pointers:
        let left = 0
        let right = arr.length - 1
        while (left < right) {
            const sum = arr[left] + arr[right]
            if (sum === 0) {
                return [arr[left], arr[right]]
            } else if (sum > 0) {
                right--
            } else {
                left++
            }
        }
    }
}

console.log(sumZero([-1, 0, 1])) // [ -1, 1 ]
console.log(sumZero([-6, 1, 3, 4, 5, 6, 7 ,9 ,100000])) // [ -6, 6 ]
console.log(sumZero([])) // undefined
console.log(sumZero([0, 1, 2])) // undefined
console.log(sumZero([-1, 2])) // undefined

/////////////////////////////////////////////////////////////
// Ex.2: "countUniqueValues"
/////////////////////////////////////////////////////////////
console.log("\ncountUniqueValues:\n")
/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// Function accepts SORTED array of ints, returns int representing the count of unique values in the array

/////////////////////////////////////////////////////////////
// 2. Explore examples:
// [1, 1, 1, 1, 1, 2] ==> 2
// [0] ==> 0 edge case
// [9] ==> 1
// [-2, 0 , 1] ==> 3

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
// IF arr len is 0 ==> return 0
// ELSE init 2 pointers for last idx and last -1 AND res array
// Iterate over array, if arr elements are not equal and num is not in res than push to res
// return length of res array

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:
const countUniqueValues = (arr) => {
    if (arr.length === 0 ) {
        return 0
    } else if (arr.length === 1 ) {
        return 1
    } else {
        res = []
        let l1 = arr.length - 1
        let l2 = l1 - 1
        while (l2 > -1) {
            if (arr[l1] !== arr[l2]) {
                res.push(arr[l1], arr[l2])
            }
            l1--
            l2--
        }
    }
    return res
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]))
console.log(countUniqueValues([]))
// console.log(countUniqueValues())
// console.log(countUniqueValues())