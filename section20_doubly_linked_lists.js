/* Singly linked lists:
=======================
Linke singly linked but we add a pointer for previous node 
(last node.next = null)

Example:
========
HEAD--------------LENGTH---------------TAIL
|                   |
|4|<---  --->|6|<---  --->|8|<---  --->|2|-->
   prev next    prev next    prev next    null

Big O time complexity:
======================
Insertion   
Removal     
Searching   
Access      
*/
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val) {
        const newNode = new Node(val)
        // Edge case: empty list
        if(this.length === 0) {
            this.tail = newNode
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop() {
        // Edge case 1: empty list
        if(this.length === 0) return undefined 
        const oldTail = this.tail
        // Edge case 2: only 1 item
        if (this.lengh === 1) {
            this.head = this.tail = null
        } else {
            this.tail = oldTail.prev // tail-1 is new tail
            this.tail.next = null   // remove new tail next
            oldTail.prev = null     // remove old tail prev
        }
        this.length--
        return oldTail
    }
    shift() {
        // Edge case 1: empty list
        if(this.length === 0) return undefined 
        const oldHead = this.head
        // Edge case 2: only 1 item
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }
    unshift(val) {
        const newHead = new Node(val)
        // Edge case 1: empty list
        if(this.length === 0) {
            this.head = newHead
            this.tail = newHead
        } else {
            this.head.prev = newHead
            newHead.next = this.head
            this.head = newHead
        }
        this.length++
        return this
    }   
    get(idx) {
        // Edge cases: index is negative OR out of bounds  
        if(idx < 0 || idx >= this.length) return null
        /* get() optimization over singly linked list! -
        we can either loop from the start using the Node.next property
        or from the end using Node.prev */
        let currNode, count
        if(idx >= this.length / 2) {
            count = this.length - 1
            currNode = this.tail
            while(count !== idx) {
                currNode = currNode.prev
                count--
            }
        } else {
            count = 0
            currNode = this.head
            while(count !== idx) {
                currNode = currNode.next
                count++
            }
        }
        return currNode
    }
    set(idx, val) {
        const theNode = this.get(idx)
        if(theNode) {
            theNode.val = val
            return true
        } else {
            return false // Edge case: no node found in get()
        }
    }
    insert(idx, val) {
        if(idx < 0 || idx > this.length) return null // Edge case 1: out of bounds  
        if(idx === 0) return this.unshift(val) // E.C 2: use unshift() for beginning of list
        if(idx === this.length) return this.push(val) // E.C 3: use push() for end of list
        const prevNode = this.get(idx - 1)
        const newNode = new Node(val)
        newNode.next = prevNode.next
        newNode.prev = prevNode
        prevNode.next.prev = newNode
        prevNode.next = newNode
        this.length++
        return true
    }
    remove(idx) {
        if(idx < 0 || idx >= this.length) return null // Edge case 1: out of bounds  
        if(idx === 0) return this.shift() // E.C 2: use shift() for beginning of list
        if(idx === this.length - 1) return this.pop() // E.C 3: use pop() for end of list
        let nodeToRemove = this.get(idx)
        nodeToRemove.prev.next = nodeToRemove.next
        nodeToRemove.next.prev  = nodeToRemove.prev
        nodeToRemove =  null
        this.length--
        return nodeToRemove
    }
    // aux method, prints list as array for readability
    print() {
        const arr = []
        let currNode = this.head
        while(currNode) {
            arr.push(currNode.val)
            currNode = currNode.next
        }
        console.log(arr)
    }
}

const list = new DoublyLinkedList()
list.push(1)                // 1
list.push(2)                // 1<->2
list.pop()                  // 1
list.push(3)                // 1 - 3
list.shift()                // 3
list.shift()                // { head: null, tail: null, length: 0 }
list.push(1)                // 1
list.unshift(5)             // 5 - 1
list.push(2)                // 5 - 1 - 2
list.push(3)                // 5 - 1 - 2 - 3
list.push(4)                // 5 - 1 - 2 - 3 - 4
// console.log(list.get(5))  
// console.log(list.get(3))  
list.set(2, 100)             // 5 - 1 - 100 - 3 - 4
list.insert(3, 500)          // 5 - 1 - 100 - 500 - 3 - 4
list.remove(1)               // 5 - 100 - 500 - 3 - 4
list.remove(4)               // 5 - 100 - 500 - 4
list.print()