function  stepcount(N) {
    // console.log(N)
    
    let count=0;
    
    while(N !== 1){
        if(N %2 === 0){
            N= N/2
        }else if(N%3 === 0){
            N= (2*N)/3
        }else if(N%5 === 0){
            N = (4*N)/5
        }else {
           return -1
        }
        
        count++;
    }
    return count
}
function runProgram(input) {
  // Write code here
  input= input.split("\n")
//   console.log(input);
  let tc = +input[0];
  let line=1;
  for(let i=0;i<tc;i++){
      let N = +input[line++].trim();
      console.log(stepcount(N))
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
