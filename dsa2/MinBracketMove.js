function   Minmove(n,str) {
    
    // console.log(str)
    let count = 0;
    let move =0;
    for(let i=0;i<str.length;i++){
        
        if(str[i] == "("){
            
            count++;
            
        }else if(str[i] == ")") {
            
            count--;
            
            if(count < 0) {
                move++;
                count++;
            }
        }
    }
    return move;
    
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)
let tc =+input[0];
let line =1;
   for(let i=0;i<tc;i++){
       let n = +input[line++];
       let str = input[line++];
      console.log(Minmove(n,str)) 
       
   }
}

if (process.env.USER === "") {
  runProgram(`4
  2
  )(
  4
  ()()
  8
  ())()()(
  10
  )))((((())
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



//1
//0
//1
//3
