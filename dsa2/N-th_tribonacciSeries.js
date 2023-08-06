function tribonacci(n){
    if(n === 0) return 0;
    if(n === 1  || n ===2) return 1;
    
    let t1 = 0,t2 =  1,t3 = 1,tn;
    for(let i=3;i<=n;i++){
        tn = t1+t2+t3;
        t1=  t2;
        t2 = t3;
        t3 = tn;
        
    }
    
    
    return t3;
    
    
}
function runProgram(input) {
  // Write code here
  input=  input.split("\n")
//   console.log(input)
    let tc = +input[0];
   let line =1;
   for(let i=0;i<tc;i++){
     let n = +input[line++];
//   console(.log(n)
console.log(tribonacci(n))
}

    
}
 
 


if (process.env.USER === "") {
  runProgram(`
  1
  4
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
// 4