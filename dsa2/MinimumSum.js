function  MinimuSum(n,k,arr) {
    
    let temp =0;
    let sum =0;
    
    for(let i=0;i<k;i++){
        temp += arr[i];
    }
    sum = temp;
    for(let i=k;i<n;i++){
        
        sum = sum - arr[i-k] + arr[i];
        
        temp = Math.min(sum,temp);
    }
    console.log(temp);
}
function runProgram(input) {
  // Write code here
   input = input.split("\n")
  let tc = +input[0];
  
  let line = 1;
  for(let i=0;i<tc;i++){
      let [n,k] = input[line++].trim().split(" ").map(Number);
      let arr =  input[line++].trim().split(" ").map(Number);
      
      
     MinimuSum(n,k,arr)
    
  }
}

if (process.env.USER === "") {
  runProgram(`
  2
  5 3
  9 9 -5 9 5 
  5 4
  2 7 6 2 -5 
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
//9
//10
