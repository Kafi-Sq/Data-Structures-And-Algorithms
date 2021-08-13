// Examples of adding to Big O Notation

// Time Complexity - analyzing the runtime of an algorithm as the size increases
// Both functions take an input (n) and add up all the 
    // numbers in between 0 and n but the second function is
    // significantlly faster because the number of opertaions 
    // stays the same no matter how big n gets.
function addUpToN(n) {
    total = 0;
    for (let i = 0; i <= n; i++){
        total += i
    }
    return total
    // O(n)
}

function addUpToN(n) {
    return n * (n + 1) / 2
    // O(1)
}

// Counts up n and counts back down to 0. The number of operations
// grows as n grows so it's O(n)
function countUpAndDown(n) {
    console.log('going up!')
        for (let i = 0; i <= n; i++){
    // O(n)
            console.log(i)
        }
    console.log('at the top')
        for (let j = n - 1; j >= 0; j--){
    // O(n)
            console.log(j)
        }
    console.log('back down!')
}

// Prints numbers twice
// as n grows the run time grows at n squared since there's a
// nested for loop
function PrintPairs(n) { 
    for (let i = 0; i <= n; i++) {
        // O(n)        
            for (let j = 0; j < n; j++) {
            // O(n)    
                console.log(i, j)
            }
        }
    // O(n²)    
}

// Logs at least 5 or n. The number of operations past 5 depends on n 
function logAtleast5(n) {
    for (let i = 0; i <= Math.max(5, n); i ++){
    // O(n)
        console.log(i)
    }
}
//logs at most 5 so it only does 5 operations no matter n
function logAtMost5(n) {
    for (let i = 0; i <= Math.min(5, n); i ++){
    // O(1)
        console.log(i)
    }
}

// Space Complexity - analyzing the space or memory we need to allocate
    // in order to run the code

function sum(arr) {
    let total = 0; // one number assignment
    for (let i = 0; i < arr.length; i++){
// another one ↑
        total += arr[i]
    }
    return total
    // O(1) space
}

function double(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++){
        newArr.push(2 * arr[i])
        // array gets larger as n gets bigger
    }
    return newArr
    // O(n) space
}

// Valid Anagram
function validAnagram(str1, str2){
    if (str1.length !== str2.length){
      return false
    }
  
    const lookup = {}
  
    for (let val of str1){
      let letter = val
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
    }
  
    for (let val of str2){
      let letter = val
      if (!lookup[letter]){
        return false
      }else {
        lookup[letter] -= 1
      }
    }
    return true
    
  }




