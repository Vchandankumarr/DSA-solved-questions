function encrypt(str, low, high) {
    if (low > high) return "";
    else {
        
        let mid = low + Math.floor((high - low) / 2);
        
        return str[mid] + encrypt(str, low, mid - 1) + encrypt(str, mid + 1, high);
    }
}

function runProgram(input) {
     input = input.split("\n");
    let tc = Number(input[0]);
    let line =1;
    
    for (let i = 0; i < tc; i++) {
        let n = +input[line++]
        
        let str = input[line++].trim();
        console.log(encrypt(str, 0, str.length - 1));
    }
}
if (process.env.USERNAME === "getsu") {
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