function powerof(a,b){
    
    if(b == 1) return a
    return a**b;
}


function runProgram(input){
   // Write Code Here
   input = input.split("\n");
   //console.log(input)
   let [a,b] = input[0].trim().split(" ").map(Number);
   console.log(powerof(a,b))
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