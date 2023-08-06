function findTripletSum(arr) {
    const n = arr.length;
  
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        for (let k = 0; k < n; k++) {
          if (arr[i] + arr[j] === arr[k] && i !== k && j !== k) {
            return 1;
          }
        }
      }
    }
  
    return 0;
  }
  
  function runProgram(input) {
    const inputLines = input.trim().split("\n");
    const t = Number(inputLines[0]);
  
    let line = 1;
    for (let i = 0; i < t; i++) {
      const n = Number(inputLines[line++]);
      const arr = inputLines[line++].trim().split(" ").map(Number);
  
      const result = findTripletSum(arr);
      console.log(result);
    }
  }
  
  // Run the code
  if (process.env.USERNAME === "") {
    runProgram(`1
  5
  1 3 2 4 5`);
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
  