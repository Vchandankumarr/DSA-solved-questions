function reverseArrayInPlace(arr, startIndex) {
    let start = startIndex;
    let end = arr.length - 1;
    
    while (start < end) {
      // Swap the elements using a temporary variable
    //   let temp = arr[start];
    //   arr[start] = arr[end];
    //   arr[end] = temp;

      [arr[start],arr[end]]  = [arr[end],arr[start]]
  
      // Move the pointers towards the center
      start++;
      end--;
    }
  }
  
  // Test case
  let arr = [1, 2, 3, 4, 5, 6];
  reverseArrayInPlace(arr, 2);
  console.log(arr); // Output: [1, 2, 6, 5, 4, 3]
  