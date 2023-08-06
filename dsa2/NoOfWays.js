function ways(n){
    
    if(n == 0) return 1;
    if(n < 0) return 0;
    
    return ways(n-1) + ways(n-2) + ways(n-3)
    
}

function runProgram(input) {
  // Write code here
  let n = +input.trim()
  console.log(ways(n))
}

if (process.env.USER === "") {
  runProgram(`4`);
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
//7
