function useSideLane(array) {
    
    let stack = [];
    let line =1;
    for(let i=0;i<array.length;i++){
        if(stack.length === 0 || array[i] < stack[stack.length -1]){
            stack.push(array[i])
        }else {
            while(stack[stack.length -1] === line){
                stack.pop()
                line++;
            }
            if(stack.length === 0 || array[i] < stack[stack.length -1]){
                stack.push(array[i])
            }else {
                return "no"
            }
        }
    }
    return "yes";
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  let i = 0;
    while (input[i].trim() !== "0") {
        let array = input[i+1].trim().split(" ").map(Number);
        i+=2
        
        console.log(useSideLane(array));
        
    }
}

if (process.env.USER === "") {
  runProgram(`
  5
  5 1 2 4 3 
  2
  1 2
  5
  1 3 5 2 4
  0
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

//yes
//yes
//no
