function  ClasicalProblem(str) {
    // console.log(str)
       let obj = {
                   ')':'(',
                   '}':'{',
                   ']':'['
           
                 }
                 
    let stack = [];
    for(let i=0;i<str.length;i++){
        
        if(str[i] == "(" || str[i] == "[" || str[i] == "{"){
            stack.push(str[i])
        }else {
            if(obj[str[i]] == stack[stack.length -1]){
                stack.pop()
            }else {
                return "not balanced"
            }
        }
    }
    if(stack.length == 0) return "balanced"
    else return "not balanced"
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)
   let tc = +input[0];
   let line =1;
   for(let i=0;i<tc;i++){
   
       let str = input[line++];
       console.log(ClasicalProblem(str))
   }
   
}

if (process.env.USER === "") {
  runProgram(`
  3
  {([])}
  ()
  ([]
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
//balanced
// balanced
// not balanced