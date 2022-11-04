// given two sorted arrays that may have duplicate values, merge them and remove any duplicates
//          a
var arr1 = [1, 3, 3, 5, 8, 10,]
//          b
var arr2 = [1, 3, 3, 5, 8, 10, 10, 10]

var arrA = [1, 3, 4, 5]
var arrB = [1, 3, 3, 5, 8, 10,]

function mergeDedupe(array1, array2) {
    let returnArray = []
    let current=0
    for (var i = 0; i < array1.length || i < array2.length; i++) {
        
        if(array1[i]<array2[i]){

            if(array1[i]>current){
                returnArray.push(array1[i])
                current=array1[i]
            }
    
            if(array2[i]>current){
                returnArray.push(array2[i])
                current=array2[i]
            }

        } else {

            if(array2[i]>current){
                returnArray.push(array2[i])
                current=array2[i]
            }

            if(array1[i]>current){
                returnArray.push(array1[i])
                current=array1[i]
            }
        }

    }
    console.log(returnArray)
    return returnArray
}

mergeDedupe(arr1, arr2)




// try out some other tests
mergeDedupe([1, 3, 3, 5, 8, 10], [1, 3, 4, 5])
// [ 1, 3, 4, 5, 8, 10 ]




mergeDedupe([2, 3, 3, 5, 8, 10, 12], [1, 3, 4, 6]) // [1, 2, 3, 4, 5, 6, 8, 10, 12]

//   a ->
//     [1, 3, 3, 5, 8, 10]
//   b
//     [1, 3, 4, 5]