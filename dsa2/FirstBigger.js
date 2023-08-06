function  bigger(n,arr,q,k,k2) {
    // console.log(k)
    arr.sort((a,b) => a-b)
    // console.log(arr)
    
    for(let i=0;i<n;i++){
        if(arr[i] > k){
            return arr[i]
        }
    }
    return -1;
    
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)

   let n = +input[0];
   let arr = input[1].trim().split(" ").map(Number)
   let q = +input[2];
   let line= 3;
   
   for(let i=0;i<q;i++){
       let k = +input[line++]
       console.log(bigger(n,arr,q,k))
   }
  
}

if (process.env.USER === "") {
  runProgram(`
  10
  13 89 81 66 81 63 71 76 73 81
  2
  65
  15
  `);
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
//66
//63