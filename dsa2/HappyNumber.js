function HappyNumber(n){
    //wirte code here
   let flag = "No" 
   let count=0;
   while(count < 10){
       
       n = n.toString()
       let sum = 0;
       for(let i=0;i<n.length;i++){
           sum += Number(n[i] **2);
       }
       n = sum;
       if(sum == 1){
            
            flag="Yes"
       }
       count++;
   }
   console.log(flag);
}
function runProgram(input){
   // Write Code Here
   input = input.split("\n");
   //console.log(input);
   let tc = +input[0];
   let line=1;
   for(let i=0;i<tc;i++){
       let n = +input[line];
       line++;
       
       HappyNumber(n);
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