function waysOfProblem(n, obj = {}) {
    if (n === 0) return 1;
    if (n < 0) return 0;

    if (obj[n]) {
        return obj[n];
    }

    const result =
        waysOfProblem(n - 1, obj) +
        waysOfProblem(n - 2, obj) +
        waysOfProblem(n - 3, obj);

    obj[n] = result;
    return result;
}

function runProgram(input) {
    const n = +input;
    console.log(waysOfProblem(n));
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
