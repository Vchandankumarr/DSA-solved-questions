const memo = {};

function superDigit(n) {
  if (memo[n] !== undefined) {
    return memo[n];
  }

  if (n < 10) {
    memo[n] = n;
    return n;
  }

  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }

  const result = superDigit(sum);
  memo[n] = result;
  return result;
}

function runProgram(input) {
  input = input.trim().split("\n");
  const tc = +input[0];
  let line = 1;

  for (let i = 1; i <= tc; i++) {
    const n = +input[line++];
    console.log(superDigit(n));
  }
}

if (process.env.USERNAME === "") {
  runProgram(`
  
  3
  45
  8
  186
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
// 8
// 6