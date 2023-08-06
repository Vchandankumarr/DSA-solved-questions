function Searchevil(n,m,mat,k){
    let flag = false;
    for(let i=0;i<n;i++ ){
        
        for(let j=0;j<m;j++){
            
            if(mat[i][j] == k){
                flag = true;
                
            }
        }
    }
    console.log(flag)
}
function runProgram(input) {
  // Write code herein
  input = input.split("\n")
//   console.log(input)
let tc =+input[0];
let line=1;

  for(let i=0;i<tc;i++){
      let [n,m] = input[line++].trim().split(" ").map(Number);
      let mat = [];
      for(let i=0;i<n;i++){
          let arr  = input[line++].trim().split(" ").map(Number);
          mat.push(arr)
      }
      
      let  k = +input[line++].trim();
      Searchevil(n,m,mat,k)
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