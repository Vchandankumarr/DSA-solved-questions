function runProgram(input) {
    input = input.trim().split("\n");
    const [n,m] = input[0].trim().split(" ").map(Number);
    const arr=[];
    let line=1;
    for(let i=0;i<n;i++){
        arr.push(input[line++].trim().split(" ").map(Number));
        
    }
     let max = -1;
          for (let i = 0; i < n; i++) {
              for (let j = 0; j < m; j++) {
                  max = Math.max(max, solve(i, j, arr, n, m));
              }
          }
    console.log(max)
    
    function solve(i, j, arr, n, m){
         let max = 0;
          if (i - 1 >= 0 && arr[i - 1][j] > arr[i][j]) {
              let temp = arr[i][j];
              arr[i][j] = -1;
              max = Math.max(max,solve(i - 1, j, arr, n, m));
              arr[i][j] = temp;
          }
          if (i + 1 < n && arr[i + 1][j] > arr[i][j]) {
              let temp = arr[i][j];
              arr[i][j] = -1;
              max = Math.max(max, solve(i + 1, j, arr, n, m));
              arr[i][j] = temp;
          }
          if (j - 1 >= 0 && arr[i][j - 1] > arr[i][j]) {
              let temp = arr[i][j];
              arr[i][j] = -1;
              max = Math.max(max, solve(i, j - 1, arr, n, m));
              arr[i][j] = temp;
          }
          if (j + 1 < m && arr[i][j + 1] > arr[i][j]) {
              let temp = arr[i][j];
              arr[i][j] = -1;
              max = Math.max(max, solve(i, j+1, arr, n, m));
              arr[i][j] = temp;
          }
          return max + 1;
    }
  }
  
  
  if (process.env.USER === "") {
      runProgram(`3 3
      9 9 4
      6 6 8
      2 1 1
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
  //4