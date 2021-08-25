// power - Takes a number and an exponent and returns the answer
function power(num, pow){
    if (pow === 0) return 1;
    return num * power(num, pow - 1)
}
power(2, 4) // returns 256
// non recursive for power
function power(num, pow){
    let total = 1
    for(let i = 0; i < pow; i++){
        num *= total
    }
    return total
}

// Factorial - Takes a number and returns it's factorial
function factorial(num){
    if (num < 0) return 0
    if (num <= 1) return 1
    return num * factorial(num - 1)
}
factorial(7) // returns 5040

// Product of Array - Takes an array of numbers and multiples them
function productOfArray(arr){
    if (arr.length === 0) return 1
    return arr[0] * productOfArray(arr.slice(1))
}
productOfArray([1,2,3]) // returns 6

// Recursive Range - Takes a number and adds all the numbers below
function recursiveRange(num){
    if (num === 0) return 0
    return num + recursiveRange(num - 1)
}
recursiveRange(6) // return 6

// Harder problems

// isPalindrome - string
function isPalindrome(str){
    if(str.length === 1) return true
    if(str.length === 2) return str[0] === str[1]
    if(str[0] === str.slice(-1)) return(isPalindrome(str.slice(1,-1)))
    return false
}

isPalindrome('tacocat')

// Reverse - string
function reverse(str){
    if (str.length <= 1) return str
    return reverse(str.slice(1)) + str[0]
}
reverse('hello') // returns 'olleh'