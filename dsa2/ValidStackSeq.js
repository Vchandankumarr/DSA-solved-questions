function  valid(n,arr1,arr2){
    // write code here
    
    let stk =[];
    let count=0;
    for(let i=0;i<=n;i++){
        
        while(stk.length !== 0 && stk[stk.length-1] == arr2[count]){
            stk.pop()
            count++;
        }
        if( i!= n){
            stk.push(arr1[i]);
        }
    }
    if(stk.length == 0){
        
        console.log("YES")
    }else{
        console.log("NO")
    }
}


function runProgram(input){
   // Write Code Here
   input  = input.split("\n");
   let tc = +input[0];
   let line=1;
   for(let i=0;i<tc;i++){
       let n = +input[line++]
       let arr1 =  input[line++].trim().split(" ").map(Number);
        let arr2 =  input[line++].trim().split(" ").map(Number);
        valid(n,arr1,arr2)
   }
}
if (process.env.USERNAME === "") {
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