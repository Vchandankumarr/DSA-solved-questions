function NextGreater(size,arr){
    
    let stack =[];
    let ans = [];
    for(let i=size-1;i>=0;i--){
        
        while(stack.length !== 0 && stack[stack.length-1]<=arr[i]){
            stack.pop();
        }
        if(stack.length === 0){
            
            ans.push(-1)
        }else{
            
            ans.push(stack[stack.length-1])
        }
        stack.push(arr[i])
    }
    console.log(ans.reverse().join(" "))
}

function runProgram(input){
  input=input.split("\n")
    let tc = +input[0]
    let line=1
    for(let i=0;i<tc;i++){
        let size = +input[line]
        line++;
        let arr = input[line].split(" ").map(Number)
        line++;
       NextGreater(size,arr)
}
}
if (process.env.USERNAME === "") {
     runProgram(`
     1
     4
     1 3 2 4
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
 //3 4 4 -1