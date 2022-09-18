/////////////////////////////////////////////////////////////
// Ex.1: "same"
/////////////////////////////////////////////////////////////

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
        const freq1 = {}
        const freq2 = {}
        // Getting frequency of each char in the strings
        for (const idx in str1) {
            const char = str1[idx]
            freq1[char] = (freq1[char] || 0) + 1
        }
        for (const idx in str2) {
            const char = str2[idx]
            freq2[char] = (freq2[char] || 0) + 1
        }
        // comparing
        for(key in freq1) {
            if((!(key in freq2)) || (freq1[key] !== freq2[key])) return false
        }
    }
    return true
}

console.log(validAnagram("cinema", "iceman"))
console.log(validAnagram("IamLordVoldemort", "TomMarvoloRiddle"))
console.log(validAnagram("", ""))
console.log(validAnagram("apple", "lapel"))