function TwoSum(n,k,arr) {
    // console.log(arr)
     let left = 0;
     let right = n-1;
     
     while(left < right) {
         
         let sum = arr[left] + arr[right];
         
         if(sum == k){
             
             return left+" "+right;
             
         }else if(sum > k){
             
             right--;
         }else {
             left++
        }
         
     }
     return "-1"+" "+"-1"
     
     
     
     
}


 
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  let tc = +input[0];
  
  let line = 1;
  for(let i=0;i<tc;i++){
      let [n,k] = input[line++].trim().split(" ").map(Number);
      let arr =  input[line++].trim().split(" ").map(Number);
      
      
      console.log(TwoSum(n,k,arr))
      
  }
}

if (process.env.USER === "") {
  runProgram(``);
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

// 3
// 4 9
// 2 7 11 15
// 5 10
// 1 2 3 5 5
// 2 100
// 48 49