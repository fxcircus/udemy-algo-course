/* Stack:
=========
-   A LIFO (Last In First Out) data structure
-   The last added node will be the first one removed
-   Used for undo\redo functionality, the call stack, etc'...

The easiest way to implement is using the built in JS array.
Then we can either use push() and pop() to add\remove from end,
Or unshift() and shift() to add\remove from beginning.
*unshift() and shift() are nit efficient as the require reindexing the array.

The implementation below uses a linked list
*/
