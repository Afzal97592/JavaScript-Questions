// Linear Serach question 

// find the target if target exist in the array then return the index value else return the -1

const TargetIndexValue = (arr, target) =>{
    
    for(let i = 0; i<arr.length; i++){
        if(arr[i] === target){
        //    console.log(i)
        //   return/
        return i;
        }
    }
    // console.log(-1)
    return -1

}
// TargetIndexValue([1,2,3,4,5], 5)

console.log(TargetIndexValue([1,2,3,4,5], 5))


// Binary Search Question

// Note binary ssearch implemet only sorted array

 function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length-1

    while(leftIndex<=rightIndex){
        let middleIndex = Math.floor((leftIndex+rightIndex)/2)

        if(arr[middleIndex] === target){
            return middleIndex;
        }
        if(arr[middleIndex]<target){
            leftIndex = middleIndex+1
        }if(arr[middleIndex]>target){
            rightIndex = middleIndex-1
        }
    }
 }
 console.log(binarySearch([-5,2,3,4,10], 4))

//   Hello  We are learning git also on new branche 

// Now i again come to dev branch
 // checking branch merging
// Start
// developer
// End

