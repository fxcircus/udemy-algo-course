/* Stack:
=========
-   A FIFO (First In First Out) data structure
-   The first added node will be the first one removed
-   Used for background tasks, print queues etc'...

The easiest way to implement is using the built in JS array:
We use unshift() to add to the begining, and pop() remove from end
(or push() and shift() to go the other way)
*unshift() and shift() are not efficient as the require reindexing the array.

The implementation below uses a modified linked list.
We do that by using the push() and shift() methods from section 19
Add to the tail\last, remove from the head\first

Naming convention:
==================
enqueue() instead of push()
dequeue() instead of shift()

Example:
========
first---size=4----last
|                   |
|2|-->|4|-->|6|-->|8|-->

Big O time complexity:
======================
Insertion   O(1)
Removal     O(1)
Searching   O(N) // not commonly used in queues
Access      O(N) // not commonly used in queues
*/
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class Queue {
    constructor() {
        this.first = null
        this.last = null
        this.size = 0
    }
    enqueue(val) {
        let newNode = new Node(val)
        if(!this.first) {
            this.first = this.last = newNode // Edge case: empty list
        } else {
            this.last.next = newNode
            this.last = newNode
        }
        return ++this.size
    }
    dequeue() {
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

const list = new Queue()
list.enqueue(2)        // 2
list.enqueue(8)        // 2 -> 8
list.enqueue(6)        // 2 -> 8 -> 6
list.enqueue(4)        // 2 -> 8 -> 6 -> 4
list.dequeue()         // 8 -> 6 -> 4
list.dequeue()         // 6 -> 4
list.dequeue()         // 4
list.print()        