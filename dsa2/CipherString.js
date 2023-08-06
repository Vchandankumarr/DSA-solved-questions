function Cipher(n,str) {
    // console.log(str)
    let count =1;
    bag ="";
   let preChar = str[0];
   
   for(let i=1;i<=str.length;i++){
       if(str[i] == preChar){
           count++
       }else {
           bag += preChar + count;
           count =1;
           preChar = str[i];
       }
   }
   console.log(bag)
    
    
}
function runProgram(input) {
  // Write code here
  input= input.split("\n")
//   console.log(input)
let tc = +input[0];
let line =1;
for(let i=0;i<tc;i++){
    let n = +input[line++]

    let str  = input[line++]
    Cipher(n,str)
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