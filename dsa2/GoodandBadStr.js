function  goodstr(str) {
    // console.log(str)
    
     let bag = "";
     for(let i=0;i<str.length;i++){
         if(str[i] !== str[i+1]){
             bag+= str[i];
         }else {
             continue;
         }
     }
     console.log(bag)
}
function runProgram(input) {
  // Write code herei
  // write code here
  input = input.split("\n")
  let tc = +input[0];
  let line=1;
  for(let i=0;i<tc;i++){
      let str = input[line++];
      goodstr(str)
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
