/* Hash Table:
================
- Fast data structure.
- Used for storing key-value pairs in non-ordered manner.
  For example, let's say we want to store SN for company employees
  The SN themselves are hard to make sense of on their own. Attaching 
  An employee name for each workstation will help understanding the data-
  SN[Roy: "123souhwg4", Bill: "0395jiogny", James: 3459migoeakg....]
  Then, we can call SN[Roy] to access "123souhwg4"

- We use a "Hash Function" to look up the key by the key name
  Hash functions takes data of ANY size and return valus with FIXED size
  Also needs to be Deterministic and not random.
  They normally only work one way.
  Commonly used in web security algorithms etc'...

- Most programming langues HAVE built in hash table implementations-
    Python ->       Dictionaries
    Javascript ->   Objects and Maps
    Ruby ->         Hash
    etc'...


Big O time complexity:
======================
Insertion   
Removal     
Searching   
*/

// Basic Hash function that only works on strings (NOT constant time):
const hash = (key, arrLen) => {
    let total = 0
    for(let char of key) {
        let val = char.charCodeAt(0) - 96 // "a" = 1, "b" = 2 etc'... for each character in passed value
        total = (total + val) % arrLen
    }
    console.log(total)
    return total // returned value is between 0 and arrLen
}

hash("pink", 10)    // 0
hash("purple", 10)  // 8


// class HashTable {
//     constructor() {
        
//     }
    
// }
// let hashTable = new HashTable()
