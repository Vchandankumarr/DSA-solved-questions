function Birthdaygift(str1,str2){
    
    str1=str1.toLowerCase();
    str2=str2.toLowerCase();
    
    if(str1 == str2){
        console.log("Angry")
    }else{
        console.log("Not angry")
    }
}

function runProgram(input){
   input = input.split("\n")
   let tc = Number(input[0]);
   let line=1
   for(let i=0;i<tc;i++){
       
       let str1 =input[line++].trim()
       let str2 = input[line++].trim()
      Birthdaygift(str1,str2)
   }
}
if (process.env.USERNAME === "") {
     runProgram(`
     2
     aaaa
     aaaA
     tradffA
     TradffD`);
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
 //an
 //dis