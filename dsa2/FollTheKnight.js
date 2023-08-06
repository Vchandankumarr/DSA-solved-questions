function runProgram(input) {
    // Write code here
    input = input.split("\n");
  //   console.log(input)
      let [i,j,N] = input[0].trim().split(" ").map(Number);
      
      n = 10;
      arr = [];
      for(let i=0;i<n;i++){
          arr1= [];
          for(let j=0;j<n;j++){
              arr1.push(0);
              
          }
          arr.push(arr1)
      }
      function chesbord(i,j,N) {
      
      if(i < 0 || j <0 || j>=10 || i>=10){
          return ;
      }
      if( N == 0){
          arr[i][j] = 1;
          return;
      }
      chesbord(i-1,j-2,N-1)
      chesbord(i-2,j-1,N-1)
      chesbord(i-2,j+1,N-1)
      chesbord(i-1,j+2,N-1)
      chesbord(i+1,j-2,N-1)
      chesbord(i+2,j-1,N-1)
      chesbord(i+2,j+1,N-1)
      chesbord(i+1,j+2,N-1)
      
     }
     
      chesbord(i-1,j-1,N)
      let count =0;
      for(let i=0;i<n;i++){
          
          for(let j=0;j<n;j++){
              
              if(arr[i][j] == 1){
                  
                  count++;
              }
          }
      }
      console.log(count)
  
      
      
  }
  
  if (process.env.USER === "") {
    runProgram(`3 3 1`);
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
  // 8