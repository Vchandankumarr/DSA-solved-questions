function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;
    
    while (start < end) {
      // Swap the elements using a temporary variable
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
  
      // Move the pointers towards the center
      start++;
      end--;
    }
  }
  
  // Test case
  let arr = [1, 2, 3, 4, 5, 6];
  reverseArrayInPlace(arr);
  console.log(arr); // Output: [6, 5, 4, 3, 2, 1]
  