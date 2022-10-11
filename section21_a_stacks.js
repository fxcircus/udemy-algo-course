/* Stack:
=========
-   A LIFO (Last In First Out) data structure
-   The last added node will be the first one removed
-   Used for undo\redo functionality, the call stack, etc'...

The easiest way to implement is using the built in JS array.
Then we can either use push() and pop() to add\remove from end,
Or unshift() and shift() to add\remove from beginning.
*unshift() and shift() are nit efficient as the require reindexing the array.

The implementation below uses a linked list.
We change the previous methods from section 19,
To optimize pop() to constant time O(1) instead of O(N)
We do that by using the code from shift() and unshift(), instead of push() and pop() 
In other words we push to the START of the list instead of the end

Example:
========
    last---size=4----first
    |                   |
<-- |4|<--|6|<--|8|<--|2|
*/
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Stack {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    push(val) {
        let newFirstNode = new Node(val)
        if(!this.first) {
            this.first = this.last = newFirstNode // Edge case: empty list
        } else {
            let tmp = this.first
            this.first = newFirstNode
            this.first.next = tmp
        }
        return ++this.size
    }
    pop() {
        if(!this.first) {
            return null // Edge case 1: empty list
        } else if(this.first === this.last) {
            this.first = null // Edge case 2: only 1 node
        } else {
            let tmp = this.first
            this.first = tmp.next
            tmp.next = null
            this.size--
            return tmp.val
        }
    }
    print() {
        const arr = []
        let  curr = this.first
        while(curr) {
            arr.push(curr.val)
            curr = curr.next
        }
        console.log(arr)
    }
}

const list = new Stack()
list.push(2)        // 2
list.push(8)        // 8 <- 2
list.push(6)        // 6 <- 8 <- 2
list.push(4)        // 4 <- 6 <- 8 <- 2
list.pop()          // 6 <- 8 <- 2
list.pop()          // 8 <- 2
list.pop()          // 2
list.print()        