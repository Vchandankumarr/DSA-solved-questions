function santoshAndProf(n) {
    
    if (n == 0) return 1
    
    if (n < 0) return 0
    
     return santoshAndProf(n - 4) + santoshAndProf(n - 8)
  
}

function runProgram(input) {
     input = input.split("\n")
    
    let tc = +input[0];
    let line =1;
    for (let i = 0; i < tc; i++){
        
        let n = +input[line++];
        console.log(santoshAndProf(n));
    }
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