// Recursion - A process (or function) that calls itself
    // The Call Stack - Adds functions to the top and removes
    // from the top when the function ends or there is a return

// Example of the call stack
function takeShower() {
    return 'Showering'
}
function eatBreakfast() {
    let meal = cookFood()
    return `Eating ${meal}`
}
function cookFood() {
    let items = ['Oatmeal', 'Eggs', 'Protein Shake']
    return items[Math.floor(Math.random() * items.length)]
}
function wakeUp() {
    takeShower()
    eatBreakfast()
    console.log('Ok ready to go work!')
}
wakeUp()
    // In the top method, functions are pushed and popped off from the call stack
    // depending on if they finished running or if they called another function
    // but recursive function keep adding functions to the call stack because it
    // keeps calling itself.

// Recursive function
// Two essential parts of a recursive function
    // Base Case - where the recursive function stops
    // Different Input - Calling the same function over and 
    // over with a different peice of data each time
function countDown(num) {
    if(num <= 0){
        console.log('Done!')
        return
    }
    console.log(num)
    num--
    countDown(num)
}
countDown(5)

function sumRange(num) {
    if (num === 1) return 1
    return num + sumRange(num - 1)
}
sumRange(4)

// Non recursive way
function factorial(num){
    let total = 1
    for (let i = num; i > 0; i--){
        total *= 1
    }
    return total
}
// Recursive way
function factorial(num){
    if (num === 1) return 1
    return num * factorial(num -1)
}

// Common pitfalls of recursion
    // no or wrong base case - 'maximum callstack size exceeded
    // forgetting the return or returning the wrong thing 

// Helper method recursion
function outer(input){
    const outerScopedVariable = []

    function helper(helperInput){
        // Modify the outerScopedVariable
        helper(helperInput--)
    }
    helper(input)
    return outerScopedVariable
}

// Actual example
function collectOddValues(arr){
    let result = []
// if result was called inside the recursive function, then it would be reset to an empty array
// so it's better to call it outside the recursive function and push to it. And since we dont want
// it just floating around, we wrap another function around the whole thing.
    function helper(helperInput){
        if (helperInput.length === 0){
            return
        }
        if (helperInput[0] % 0 !== 0){
            result.push(helperInput[0])
        }
        helper(helperInput.slice(1))
    }

    helper(arr)
    return result
}

// Pure recursion method
    // no helper method, just recursion
function collectOddValues(arr){
    let newArr = []

    if (arr.length === 0){
        return newArr
    }
    if(arr[0] % 2 !== 0){
        newArr.push(arr[0])
    }
    // new array is empty every time but it makes an array of the single odd value every time and in the end it concats
    // everything together. concat waits on the call stack.
    newArr = newArr.concat(collectOddValues(arr.slice(1)))
    return newArr
}