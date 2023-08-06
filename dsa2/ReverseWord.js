function reverse(str) {
    
    const words = str.split(' ');
  //   console.log(words)
    let reversed = "";
  
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const Wordrev = word.split('').reverse().join('');
  
      reversed += Wordrev;
  
      if (i < words.length - 1) {
        reversed += ' ';
      }
    }
  
     console.log(reversed)
  }
  function runProgram(input) {
    // Write code here
    input = input.split("\n");
  //   console.log(input)
     let tc = +input[0];
     let line =1;
     for(let i=0;i<tc;i++){
         
         let n = +input[line++]
         let str = input[line++]
         reverse(str)
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