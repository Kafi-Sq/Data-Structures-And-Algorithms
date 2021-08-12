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