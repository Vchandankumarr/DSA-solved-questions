
function FlowerManagement(n,m,arr){
    
    let count=0; 
     for(let i=0; i<=arr.length-1;i++){
         
         if(arr[i]==0 && arr[i-1]!=1 && arr[i+1]!=1){
             arr[i]=1
             count++
         }
         
     }
     
     
   //  console.log(count)
     if(count >= m){
         
         console.log("Yes")
     }else{
         console.log("No")
     }
 }
 function runProgram(input) {
   // Write code here
   
   input=input.split("\n")
   let tc=+input[0]
   let line=1
   for(let i=0; i<tc; i++){
       
       let [n,m]=input[line++].trim().split(" ").map(Number)
       
       let arr=input[line++].trim().split(" ").map(Number)
       
       
       FlowerManagement(n,m,arr)
   }
 }
 
 if (process.env.USER === "") {
   runProgram(`
    1
    5 1
    1 0 0 0 1
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
 
 
 