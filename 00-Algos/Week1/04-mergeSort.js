// Array: Merge Sort
// visualization: https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
// multiple sorts, visualized: https://i.imgur.com/fq0A8hx.gif

// Time Complexity
//  - Best case: O(n log(n)
//  - Average case: O(n log(n))
//   - Worst case: O(n log(n))

var testArr = [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12, 99, 111, 9, 15, 49];
// [88, 22, 44, 12]     99, 111, 9, 15, 49
// 88, 22
// 88

// main recursive function that will be passed in mergeSortedArrays(left, right)
// create a new sorted arr based on the given arr being recursively split and merged.
function mergeSort(arr, left = 0, right = arr[arr.length - 1]) {
    if (left > right) {
        return
    }
    let mid = (left + right) / 2
    mergeSort(arr, left, mid)
    mergeSort(arr, mid + 1, right)

}

// helper function
// 👉 try solving this first! 
// return a new sorted array with all of the values of arr1 and arr2
var mergeArr1 = [55, 66];
var mergeArr2 = [33, 44];

var mergeArrA = [33, 44, 55];
var mergeArrB = [11, 66];

var arrLeft = [22];
var arrRight = [11, 33];
//                      arrLeft, arrRight
function mergeSortedArrays(arr1, arr2 = 0) {
    if (arr2 == 0) {
        array = [...arr1]
        arr1 = array.slice(0, Math.floor((array.length - 1) / 2))
        console.log("this is arr1 " + arr1)
        arr2 = array.slice(Math.floor((array.length - 1) / 2))
        console.log("this is arr2 " + arr2)
    }
    let newArr = []
    //initial index of first subarray
    let a = 0;
    //initial index of second subarray
    let b = 0;

    while (a < arr1.length && b < arr2.length) {
        //comparing both arrays
        //push that value
        //increment the index that has the lowest number
        if (arr1[a] <= arr2[b]) {
            newArr.push(arr1[a])
            a++
        } else {
            newArr.push(arr2[b])
            b++
        }
    }
    while (a < arr1.length) {
        newArr.push(arr1[a])
        a++
    }
    while (b < arr2.length) {
        newArr.push(arr2[b])
        b++
    }
    //havent figured out how to stop the recursion
    return newArr
    return mergeSortedArrays(arr1, arr2)

}

// console.log(mergeSortedArrays(mergeArr1, mergeArr2))
// console.log(mergeSortedArrays(mergeArrA, mergeArrB))
// console.log(mergeSortedArrays(arrLeft, arrRight))

console.log(mergeSortedArrays(testArr))