function next2(N,arr){
    let stk=[]
    let result=[]
    for(let i=2*N;i>=0;i--){
        
        while(stk.length!=0 && stk[stk.length-1]<=arr[i]){
            stk.pop()
            
        }if(stk.length == 0){
            
            
            result.push("-1")
        }else{
            
            result.push(stk[stk.length-1])
        }
        stk.push(arr[i % N])
    }
    let nextgreter=""
    let size=Math.floor(result.length-1)/2
    for(let i=result.length-1;i>size;i--){
        nextgreter=nextgreter+result[i]+" "
    }
    console.log(nextgreter)
}
function runProgram(input) {
  // Write code here
  input=input.trim().split("\n")
  let tc=+input[0]
  let line=1;
  for(let i=0;i<tc;i++){
      
       N=input[line++]
       
       arr=input[line++].trim().split(" ").map(Number)
       
      next2(N,arr)
  }
}

if (process.env.USER === "") {
  runProgram(``);
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