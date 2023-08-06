function Smalller(n,arr) {
    // console.log(arr)
    
    let stack = [];
    let result = [];
    size = stack.length-1;
    
    for(let i=0;i<arr.length;i++){
        
        while(stack.length !== 0 && stack[stack.length-1] >= arr[i]){
            stack.pop()
        }
        if(stack.length == 0){
            result.push(-1)
        }else{
            result.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    console.log(result.join(" "))
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)

    let n = +input[0].trim()
    let arr = input[1].trim().split(" ").map(Number)
    
    Smalller(n,arr)
}

if (process.env.USER === "") {
  runProgram(`
  8
  39 27 11 4 24 32 32 1
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
//-1 -1 -1 -1 4 24 24 -1
