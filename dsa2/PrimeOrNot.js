function  primeornot(num) {
    
    if (num <= 1) {
          return false;
      }
  for (let i=2;i <= (num ** 0.5);i++) {
          if (num % i === 0) {
              return false;
          }
      }
  
      return true;
  }
  
  function identifyPrime(num) {
      if (primeornot(num)) {
          console.log("Yes");
      } else {
          console.log("No");
      }
      
     
  }
  function runProgram(input) {
    // Write code here
    input = input.split("\n")
  //   console.log(input);
  
    let tc = +input[0]
    let line =1;
    
    for(let i=0;i<tc;i++){
          let num = +input[line++];
    identifyPrime(num)
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
  