function masaicla(N){
    let month = 0;
    let years = Math.floor(N/365);
     N = (N%365)
     
     let arr = [31,28,31,30,31,30,31,31,30,31,30,31]
     
     for(let i=0;i<arr.length;i++){
         if( N >= arr[i]){
             month++;
             N-= arr[i];
             
         }else{
             break;
             
         }
        
     }
      console.log(years +" Year "+month+" Month "+N+" Day ")
    
}
function runProgram(input) {
  // Write code here
  input = input.split("\n");
//   console.log(input)
let tc = +input[0];
let line =1;
for(let i=0;i<tc ;i++){
    let N = +input[line++]
    // console.log(N)
    masaicla(N)
}
}

if (process.env.USER ==="") {
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