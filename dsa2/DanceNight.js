function  Dance(N,M,boys,girls){
  
    
    boys.sort((a,b)=> a-b)
    girls.sort((a,b)=> a-b)
    //   console.log(boys)
    let j = 0;
    
    for (let i=0;i<M;i++){
        
        if(boys[j]>girls[i]){
            j++;
        }
    }
    if(j==N){
        console.log("YES")
    }
    else{
        console.log("NO")
    }
  
  }
  function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input);
  let tc = +input[0];
  let line =1;
  for(let i=0;i<tc;i++){
      
      let [N,M] = input[line++].trim().split(" ").map(Number);
      let boys = input[line++].trim().split(" ").map(Number);
      let girls = input[line++].trim().split(" ").map(Number);
      
      Dance(N,M,boys,girls)
  }
  
}

if (process.env.USER === "") {
  runProgram(`
  1
  4 5
  2 5 6 8
  3 8 5 1 7`);
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
