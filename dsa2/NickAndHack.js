function Nikshaks(n){
   
    if (n == 1)
        return true;
       
    else if (n < 1)
       return false;
      
    else
        return Nikshaks(n / 10) || Nikshaks(n / 20)
        
       
}


function runProgram(input){
   // Write Code Here
   input = input.split("\n");
   //console.log(input)
   
   let tc = +input[0];
   
   for (let i = 1; i <= tc; i++) {
        let flag = Nikshaks(input[i])
        if (flag)
             console.log("Yes");
        else
            console.log("No");
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