function Duplicate(str){
    let stack=[]
    let ans= -1
    for(let i=0;i<str.length;i++){
        
        if(stack.length==0){
            
            ans++
            
            stack[ans]=str[i]
            
        }else{
            if(str[i]==stack[ans]){
                
                stack.pop()
                ans--
            }else{
                ans++
                
                stack[ans]=str[i]
            }
        }
    }
    if(stack.length==0){
        console.log("Empty String")
    }else{
        console.log(stack.join(""))
    }
}

function runProgram(input){
   let str = input
   Duplicate(str)
  }
if (process.env.USERNAME === "") {
     runProgram(`aaabccddd
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
 //abd