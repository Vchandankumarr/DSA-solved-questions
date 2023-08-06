function Solve(n,arr) {
    // console.log(arr)
   
    let stack = [];
    let ans = [];
    for(let i=0;i< arr.length;i++){
        let count =1
        while(stack.length !== 0 && arr[stack[stack.length -1]] <= arr[i]){
            count = count + ans[stack[stack.length -1]]
            stack.pop()
        }
        // console.log(count)
        stack.push(i)
        ans[i] = count
    }
    console.log(ans.join(" "))
    
    
    
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)

 let tc =+input[0];
 let line=1;
 for(let i=0;i<tc;i++){
     let n =+input[line++];
     let arr = input[line++].trim().split(" ").map(Number)
     Solve(n,arr)
 }
}

if (process.env.USER === "") {
  runProgram(`
  1
  6
  100 60 70 65 80 85
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
//1 1 2 1 4 5