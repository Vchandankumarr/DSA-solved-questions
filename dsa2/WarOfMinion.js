function WarofMinions(n,str){
    // write code here
    let stack=[]
    
    for(let i=0;i<n;i++){
        
        if(stack.length==0){
            stack.push(str[i])
            
        }else if(stack[stack.length-1]==str[i]){
            stack.pop()
            
        }else{
            stack.push(str[i])
        }
    }
    if(stack.length == 0){
        console.log(-1)
        
    }else{
        console.log(stack.join(""))
    }
}

function runProgram(input){
   input = input.split("\n")
   let n = +input[0]
   let str = input[1]
//   console.log(str)
   WarofMinions(n,str)
}
if (process.env.USERNAME === "") {
     runProgram(`aabbc`);
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

 //c