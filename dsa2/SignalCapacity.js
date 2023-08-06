function SignalsCapacity(n, arr) {
    let stack = [];
    let ans = [];
  
    for (let i = 0; i < n; i++) {
      let temp = 1;
  
      while (stack.length !== 0 && arr[stack[stack.length - 1]] <= arr[i]) {
        temp += ans[stack[stack.length - 1]];
        stack.pop();
      }
  
      stack.push(i);
      ans[i] = temp;
    }
  
    console.log(ans.join(" "));
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
  
    for (let i = 0; i < tc; i++) {
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      SignalsCapacity(n, arr);
    }
  }
  
  if (process.env.USERNAME === "") {
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
  