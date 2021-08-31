/* Elementary Sorting Algorithms
    - Sorting is the process of rearranging the items in a collection
    (eg. an array) so that the items are in some sort of order.
        Examples
    Sorting numbers from smallest to largest
    Sorting names alphabetically
    Sorting movies based on release year

    JS has a few built in sorting methods
        The .sort() converts everything to a string then sorts by the unicode which is almost 
        always not what you want, but it has an optional comparator function. 
        The comparator looks at pairs of element (a and b), determines thier sort order based on the 
        return value.
            If it returns a negative number, a should come before b
            If it returns a positive number, a should come after b
            If it returns a 0, a and b are the same as far as the sort is concerned
*/

function numberCompare(num1, num2){
    return num1 - num2
}
[6, 4, 15, 10].sort(numberCompare) // returns [4, 6, 10, 15] instead of [10, 15, 4, 6]

function compareByLen(str1, str2){
    return str1.length - str2.length
}
['Hassen', 'Data Structures', 'Last', 'Name'].sort(compareByLen) // returns the shortest string to the longest

/* Bubble Sort
    A sorting algorithm where the largest values bubble up to the top
    Many sorting algorithms involve some type of swapping functionality.
*/
// ES5
function swap(arr, inx1, inx2){
    const temp = arr[ind1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
}
// ES6
const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubbleSort(arr){
    const swap = (arr, idx1, idx2) => {
      [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }
    for (let i = arr.length; i > 0; i--){
      for (let j = 0; j < arr.length; j++){
        if (arr[j] > arr[j + 1]){
          swap(arr, j, j + 1)
        }
      }
    }
    return arr
  }
  
bubbleSort([2,1,45,93,29,14,19,22])
