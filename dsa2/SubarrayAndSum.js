function runProgram(input) {
    input = input.trim().split("\n");
    let [n, k] = input[0].trim().split(" ").map(Number);
    let arr = input[1].trim().split(" ").map(Number);
    console.log(subsum(arr, n, k));
  }
  
  function subsum(arr, n, k) {
    let s = arr.reduce((sum, num) => sum + num, 0);
  
    if (s % k !== 0) {
      return 1;
    } else {
      let x = 0;
      while (x < n && arr[x] % k === 0) {
        ++x;
      }
  
      let y = n - 1;
      while (y >= 0 && arr[y] % k === 0) {
        --y;
      }
  
      let length, sum = 0, count = 0;
  
      if (x === n) {
        return -1;
      } else {
        length = Math.max(n - 1 - x, y);
      }
  
      for (let i = 0; i < length; i++) {
        sum += arr[i];
      }
  
      if (sum % k !== 0) {
        count++;
      }
  
      for (let i = length; i < n; i++) {
        sum += arr[i];
        sum -= arr[i - length];
  
        if (sum % k !== 0) {
          count++;
        }
      }
  
      return count;
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
  