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

class HashTable {
    constructor(size = 17) {
        this.keyMap = new Array(size)
    }
    // Hash method - expects strings up to 100 chars
    _hash(key) {
      let total = 0
      let PRIME_NUMBER = 31 // prime numbers reduce collisions
      for (let i = 0; i < Math.min(key.length, 100); i++) {
        let char = key[i]
        let val = char.charCodeAt(0) - 96 // "a" = 1, "b" = 2 etc'... for each character in passed value
        total = (total * PRIME_NUMBER + val) % this.keyMap.length
      }
      return total // returned value is between 0 and keyMap.length
    }
    // Set method - add key:value pair to table
    set(key, value) {
      const idx = this._hash(key)
      // Edge case: init empty array in idx pos if not in use yet-
      if (!this.keyMap[idx]) this.keyMap[idx] = [] 
      this.keyMap[idx].push([key, value])
    }
    // Get method - retrieve values by key from table
    get(key) {
      const idx = this._hash(key)
      if (this.keyMap[idx]) {
        // Iterate over array in pos:
        for(let i = 0; i < this.keyMap[idx].length; i++) {
          if (this.keyMap[idx][i][0] === key) {
            return this.keyMap[idx][i]
          }
        }
      }
      return undefined
    }
}

let ht = new HashTable()
ht.set("first", "hello world")
console.log(ht.get("first")) // [ 'first', 'hello world' ]