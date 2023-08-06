function dailyTemperature(n, arr) {
    const stack = [];
    const ans = [];
    for (let i = 0; i < n; i++) {
      while (stack.length !== 0 && arr[i] > arr[stack[stack.length - 1]]) {
        const index = stack.pop();
        ans[index] = i - index;
      }
      stack.push(i);
    }
    while (stack.length !== 0) {
      const index = stack.pop();
      ans[index] = 0;
    }
    console.log(ans.join(" "));
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    const tc = +input[0];
    let line = 1;
    for (let i = 0; i < tc; i++) {
      const n = +input[line++];
      const arr = input[line++].trim().split(" ").map(Number);
      dailyTemperature(n, arr);
    }
  }
  
  if (process.env.USERNAME === "") {
    runProgram(`
    2
    4
    30 40 50 60
    8
    73 74 75 71 69 72 76 73
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
  //1 1 1 0
//1 1 4 2 1 1 0 0
  