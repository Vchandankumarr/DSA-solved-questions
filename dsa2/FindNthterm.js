function  Nthterm(n) {
    if(n === 0 || n==1)
        return 10
    
    if(n === 2) return -19
    
    if(n>2 && n%2 === 0 && n % 3 === 0)
        return n/6 + (Nthterm(n-1) + Nthterm(n-3))
    
    if(n > 2 && n%2 === 0 )
        return n/2 - (Nthterm(n-1)+ Nthterm(n-2))
    
    if(n>2 && n%3 === 0)
        return n /3 + (Nthterm(n-1)+ Nthterm(n-3))
        return Nthterm(n-1)
    
    
}
function runProgram(input) {
  // Write code here
   input = +input;
  let res= Nthterm(input)
  console.log(res)
  
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
