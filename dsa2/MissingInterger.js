function Missinginteger(arr){
   
    let n = arr.length;
    let sum =0
    let total = Math.ceil((n+1)*(n+2)/2)
    for(let i=0;i<arr.length;i++){
       
       sum += arr[i];
    }
    console.log(total - sum)
}


function runProgram(input){
  
   input = input.split("\n");
  // console.log(input)
   let arr =  input[0].trim().split(" ").map(Number);
   Missinginteger(arr)
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