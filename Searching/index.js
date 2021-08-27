// Searching algorithms

// Linear Search
    // Javascript has array methods that use linear search
        // indexOf
        // includes
        // find
        // findIndex

// Ex. 1 Linear Search
function linearSearch(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return i
    }
    return -1
}

linearSearch([5, 8, 1, 100, 12, 3, 12], 100)

// Binary Search
    // Rather than eliminating one element at a time, you can eleminate half
    // of the remaining elements at one time
    // Only works on sorted arrays
    // Divide and conquer
function binarySearch(arr, val) {
    let left = 0;
    let right = arr.length - 1
    let mid = Math.floor((left + right) / 2)

    while (arr[mid] !== val && left <= right) {
        if (val < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
        mid = Math.floor((left + right) / 2)
    }
    if (arr[mid] === val) {
        return mid
    } else {
        return -1
    }
}

binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 1)

// String Search
    // Naive way
function stringSearch(long, short) {
    let count = 0;
    for (let i = 0; i < long.length; i++) {
        for (let j = 0; j < short.length; j++) {
            if (short[j] !== long[i + j]) {
                break;
            }
            if (j === short.length - 1) {
                count++
            }
        }
    }
    return count
}

stringSearch('lorie loled', 'lol')

