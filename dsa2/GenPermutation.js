function permute(arr) {
    const res = [];
  
    function backtrack(start) {
      if (start === arr.length - 1) {
        res.push([...arr]);
        return;
      }
  
      for (let i = start; i < arr.length; i++) {
        swap(arr, i, start);
        backtrack(start + 1);
        swap(arr, i, start);
      }
    }
  
    backtrack(0);
    return res;
  }
  
  function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  
  function runProgram(input) {
    input = input.trim().split("\n");
    const n = +input[0];
    const arr = input[1].split(" ").map(Number);
  
    const permutations = permute(arr);
    permutations.sort();
  
    for (let i = 0; i < permutations.length; i++) {
      console.log(permutations[i].join(" "));
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
  