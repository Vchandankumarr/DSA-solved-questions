function Bobandbox(n) {
    
    if (n == 0) return 1
    
    if (n < 0) return 0
    
     return Bobandbox(n - 1) + Bobandbox(n - 3)+Bobandbox(n- 5)
  
}

function runProgram(input) {
    
    let n = +input;
    console.log(Bobandbox(n));
    
}
if (process.env.USERNAME === "getsu") {
    runProgram();
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