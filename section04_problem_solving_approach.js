/////////////////////////////////////////////////////////////
// 1. Understand the problem:
// The function takes in a string and returns JSON
// Each key in the JSON represents a char from the input string
// And the value is the num on occurences for that char

// Questions: 
// Do we count both uppercase and lowercase?
// What about numbers / special characters / whitespaces?

/////////////////////////////////////////////////////////////
// 2. Explore examples:
/* charCount("Roy")
charCount("! 52^# Jjkoo T")
charCount("") */

/////////////////////////////////////////////////////////////
// 3. Break it down (pseudocode):
/* charCount("Roy") ==> { r: 1, o: 1, y: 1 }
charCount("! 52^# Jjkoo T") ==> { 5: 1, 2: 1, j: 2, k: 1, o: 2, t:1}
charCount("") == > {}
charCount("Your PIN number is  1234!") */

/////////////////////////////////////////////////////////////
// 4. Solve or simplify if not able to produce full solution:
const charCountFirstRun = (str) => {
    // init empty object:
    res = {} 
    // Edge case for empty strings:
    if (str !== "" && str !== null) {
        // Lowecarse original input string
        s = str.toLowerCase()
        // Using frequency counter to count occurences
        for(let i = 0; i < s.length; i++) {
            res[s[i]] = (res[s[i]] || 0) + 1
        }
    }
    return res
}

console.log(charCountFirstRun(null))
console.log(charCountFirstRun("Roy"))
/////////////////////////////////////////////////////////////
// 5. Refactor

const charCount = (str) => {
    res = {} 
    if (str !== "" && str !== null) {
        s = str.toLowerCase()
        for(let i = 0; i < s.length; i++) {
            char = s[i]
            // Using regex to check if char matches abc OR numbers,
            // and ternary operator to only append these to the res object
            char.match(/[a-z]|[1-9]/) ? res[char] = (res[char] || 0) + 1 : null
        }
    }
    return res
}

console.log(charCount("Lucy in the Sky with diaMonds! ()"))