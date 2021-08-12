Big O Notation
    - Allows us to talk formally how how the runtime of an 
    algorithm grows as the input grows

Simplyfying Big O Expressions
    1. Constants don't matter
        A. O(2n) = O(n) **Number of operations depends on n 
        B. O(500) = O(1) **There's 500 operations every time no matter what n is
        C. O(13n²) = O(n²)
    2. Smaller Terms don't matter
        A. O(n + 10) = O(n)
        B. O(1000n + 50) = O(n)
        C. O(n² + 5n + 8) = O(n²)
    3. Big O Shorthands
        A. Arithmetic operations are constant
        B. Variable assignment is constant
        C. Accessing elements in an array (by index) or object (by key) is constant
        D. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

Space Complexity in JS
    1. Most primatives (booleans, numbers, undefined, null) are constant in space
    2. Strings require O(n) space (where n is the length of the string)
    2. Refrence types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

Logs - inverse of an exponent
    log₂(4) = 3 means 2² = 4

Big O of objects
    - Unordered key value pairs data structures
When to use objects
    A. When you don't need order
    B. When you need fast acess and insertion/removal
        - Insertion = O(1)
        - Removal = O(1)
        - Searching = O(N)
        - Access = O(1)

Big O of Arrays
    - Ordered lists
When to use Arrays
    A. When you need order
    B. When you need fast acess and insertion/removal
        - Insertion = depends..
            inserting at the end is O(1) but inserting at the beginning is O(n)
        - Removal = depends..
            removing at the end is O(1) but inserting at the beginning is O(n)
        - Searching = O(N)
        - Access = O(1)