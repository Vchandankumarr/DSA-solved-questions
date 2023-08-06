function factirialby(n){
    
    let total =0;
    for(let i=n; i>0; i--){
        total += Math.log(i)
       
    }
    console.log(total.toFixed(4))
}

function runProgram(input){
    let n = +input;
    factirialby(n);
}


if (process.env.USERNAME === "") {
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