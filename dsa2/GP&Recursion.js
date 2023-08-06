let sum =1;

function  RecursionGP(index, n, r){
    
    if(index > n) {
        
        console.log(sum.toFixed(4))
        return;
    }else {
        let a = Math.pow(r,index)
        sum += 1/a;
        
    }
    RecursionGP(index+1,n,r)
}
function runProgram(input) {
  // Write code here
   let index = 1;
   input = input.split(" ").map(Number);
  //console.log(input)
  let n = input[0];
  let r = input[1];
   RecursionGP(index, n, r);
}

if (process.env.USER === "") {
  runProgram(`1 1`);
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
//2.0000