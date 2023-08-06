function MaximumSumSubarray(n,k,arr) {
    if(n < k) return;
    
    let maxSum = 0;
    let curSum =  0;
    for(let i=0;i<k;i++){
        curSum += arr[i];
    }
    
    maxSum = curSum;
    for(let i= k;i<n;i++){
        curSum += arr[i] - arr[i-k];
        maxSum = Math.max(maxSum,curSum)
        
    }
    return maxSum
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  let [n,k] =  input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
//   console.log(arr)
  
    let ans=  MaximumSumSubarray(n,k,arr)
     console.log(ans)
}

if (process.env.USER === "") {
  runProgram(`
  10 3
  -1 -1 -2 1 -2 4 1 9 3 9
  `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}

//21