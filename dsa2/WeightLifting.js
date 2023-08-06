function Weightlifting(n,arr){
    // write code 
  
    let l= 0;
    let r = n-1;
    let  hlw =0;
    let  htw=0;
    let  jlw=0;
    let  jtw=0;
    
    while(l<=r){
          hlw =0;
     
         while(hlw<=jlw && l<= r){
           hlw+=arr[l];
           l++;
        }
         htw+=hlw;
         
         jlw=0;
    
         while(jlw<=hlw && l<= r){
            jlw+=arr[r];
             r--;
         }
         jtw+=jlw;
    }
    console.log(htw+" "+ jtw);
        
}
  
    function runProgram(input){
   // Write Code Here
   input = input.split("\n");
  // console.log(input);
  let tc = +input[0];
  let line =1;
  for(let i=0;i<tc;i++){
      let n = +input[line];
      line++;
      let arr = input[line].split(" ").map(Number);
      line++;
      Weightlifting(n,arr);
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