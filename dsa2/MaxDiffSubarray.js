function Subarray(n,k,arr) {
    //  console.log(n,k,arr)
    
    let res= -Infinity;
    for(let i=0;i<n;i++){
        let a = [];
        for(let j=i;j<n;j++){
            a.push(arr[j])
            let p = (main(a))
            if(p <= k){
                res = Math.max(res,a.length)
            }
        }
    }
    console.log(res)
    
    
}

function main(arr2){
    if(arr2.length == 1){
        return 0
    }
    let ans = Math.abs(Math.max(...arr2)-Math.min(...arr2))
    return ans
}
function runProgram(input) {
  // Write code here
  
  input = input.trim().split("\n")
//   console.log(input)

   let tc = +input[0];
   let line=1;
   for(let i=0;i<tc;i++){
       let [n,k] = input[line++].trim().split(" ").map(Number);
       let arr = input[line++].trim().split(" ").map(Number);
       
       Subarray(n,k,arr)
   }
}

if (process.env.USER === "") {
  runProgram(`
  1
  4 2
  8 2 4 7
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
//2
