function binaryconvert(n){
    
   
    const number = +(n);
     
    const result = number.toString(2);
    return result;


   
}


function runProgram(input){
  // Write Code Here
  input =  input.split("\n");
 // console.log(input);
 let tc = +input[0];
 let line =1;
 for(let i=0;i<tc ;i++){
     let n = +input[line++].trim();
     console.log(binaryconvert(n))
     
 }
}
if (process.env.USERNAME === "") {
    runProgram(`
    15
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
//1111