// Problem Solving Techniques 

// Frequency counter Example
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }

  const lookup = {}

  for (let val of str1) {
    let letter = val
    if (lookup[letter]) {
      lookup[letter] += 1
    } else {
      lookup[letter] = 1
    }
    // lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1
  }

  for (let val of str2) {
    let letter = val
    if (!lookup[letter]) {
      return false
    } else {
      lookup[letter] -= 1
    }
  }
  return true

}

validAnagram('hello', 'lhelo')

// Multiple Pointer Example
// naive way
function sumZero(nums) {
  // find a pair of numbers that add up to 0
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === 0) {
        return [nums[i], nums[j]]
      }
    }
  }
}
sumZero([4, 3, 6, -4, -2])
// better way with pointers
function sumZero(nums) {
  let left = 0;
  let right = nums.length - 1
  while (left < right) {
    let sum = nums[left] + nums[right]
    if (sum === 0) {
      return [nums[left], nums[right]]
    } else if (sum > 0) {
      right--
    } else {
      left++
    }
  }
}

// unique values example
function uniqueNumbers(nums) {
  if (nums.length === 0) return 0
  let i = 0;
  for (let j = 1; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }
  return i + 1
}

uniqueNumbers([1, 1, 1, 1, 2, 3])

// Sliding Window 
// naive way
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null
  }
  const max = -Infinity
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0
    for (let j = 0; j < num; J++) {
      temp += arr[i + j]
    }
    if (temp > max) {
      max = temp
    }
  }
  return max
}
maxSubarraySum([2, 3, 4, 2, 1, 4, 5, 6, 6, 7], 2)

//better way
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;

  if (arr.length < num) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

// Divide and Conquer

const reverse = function (x) {
  if (x === 0) {
    return 0
  }

  let strX = x.toString()
  
  let strSplit = strX.split('')
  let reverse = strSplit.reverse()
  let result = reverse.join().replace(/,/g, "")
  if (result.includes('-')) {
    let rev = result.split('')
    rev.unshift(rev.pop());
    let reve = rev.join().replace(/,/g, "")
    return parseInt(reve)
  }

  if (strX.length >= 10) {
    if (strX[0] === '-' && strX.length <= 11) {
      let strSplit = strX.split('')
      let reverse = strSplit.reverse()
      let result = reverse.join().replace(/,/g, "")
      if (result.includes('-')) {
        let rev = result.split('')
        rev.unshift(rev.pop());
        let reve = rev.join().replace(/,/g, "")
        return parseInt(reve)
      }
      return parseInt(result)
    } else {
      return 0
    }
    return 0
  }


  return parseInt(result)

};
