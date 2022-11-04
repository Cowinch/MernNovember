const nums1 = [5,3,4,2,1];
const nums2 = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const nums3 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];


function bubbleSort(arr){
    for(i=0;i<arr.length-1;i++){
        for(j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                //destructured swap. slightly less efficient in computation, but more efficient in memory
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
    return arr
}
//in our second for loop, we reduce the length by -i. This is because each time we complete a loop, the largest number is at the end. We do not need to look at that number anymore, so each completed j loop can be reduced by 1.

console.log(bubbleSort(nums1))
console.log(bubbleSort(nums2))
console.log(bubbleSort(nums3))