function Water(n,arr) {
    // console.log(arr)
    
      let ans =0;
      let i=0;
      let j = n-1;
      while(i<j){
          ans = Math.max(ans,Math.min(arr[i],arr[j])*(j-i))
          
          if(arr[i] <= arr[j]){
              i++
          }else {
              j--
          }
      }
      console.log(ans)
}
function runProgram(input) {
  // Write code here
   input= input.trim().split("\n")
  let tc = +input[0];
  let line=1;
  for(let i=0;i<tc;i++){
      let n = +input[line++];
      let arr = input[line++].trim().split(" ").map(Number);
      
      
       Water(n,arr)
      
  }
  
}

if (process.env.USER === "") {
  runProgram(`1
  9
  1 8 6 2 5 4 8 3 7
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
//49

