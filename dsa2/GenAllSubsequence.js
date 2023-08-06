function subseq(str,str1,n,index){
   
    if(str1.length != 0){
        console.log(str1.join(""));
    }
    if(n == index){
        return;
    }
    else{
        for(let i=index;i<n;i++){
            str1.push(str[i]);
            subseq(str,str1,n,i+1);
            str1.pop();
        }
    }
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
  
   let n = +input[0];
   let str = input[1];
   let str1=[];
   let index = 0;
   subseq(str,str1,n,index);
}

if (process.env.USERNAME === "") {
     runProgram(`
     4
     abcd`);
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
//  a
// ab
// abc
// abcd
// abd
// ac
// acd
// ad
// b
// bc
// bcd
// bd
// c
// cd
// d