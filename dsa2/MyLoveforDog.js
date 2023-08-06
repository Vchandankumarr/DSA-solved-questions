function  MyLOveForDog(n,strength,cal){
    
    let sum = 0;
    strength.sort((a,b) => a-b)
    cal.sort((a,b) => a-b)
    for(let i=0;i<strength.length;i++){
        sum += strength[i] * cal[i]
        
    }
    console.log(sum)
}


function runProgram(input) {
  // Write code here
  input = input.split("\n")
  //console.log(input)
  let n = +input[0]
  let strength = input[1].trim().split(" ").map(Number);
  let cal = input[2].trim().split(" ").map(Number);
  MyLOveForDog(n,strength,cal)
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