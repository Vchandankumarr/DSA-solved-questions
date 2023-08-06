function factorial(n) {
    // console.log(n)
   if(n <= 0){
       return 1;
   }else {
       return n*factorial(n-1)
   }
    
    return factorial(n) * factorial(n-1)
}
function runProgram(input) {
  // Write code here
  let n = +input.trim()
  console.log(factorial(n))
}

if (process.env.USER === "") {
  runProgram(`5`);
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

// 120
