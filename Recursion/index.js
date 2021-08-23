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
