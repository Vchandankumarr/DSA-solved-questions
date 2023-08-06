function RowGame(n,m,mat) {
    // console.log(mat)
    let obj = {};
    for(let i=0;i<m;i++){
        if(obj[mat[0][i]] == undefined){
            obj[mat[0][i]] = 1;
            
        }
    }
    
    let res = 0;
    for(let key in obj){
        let count =0;
        for(let i=1;i<n;i++){
            for(let j=0;j<m;j++){
                if(mat[i][j] == +key){
                    count++
                     break;
                     
                }
            }
        }
        if(count == n-1) {
            res++
        }
    }
    console.log(res)
    
}
function runProgram(input) {
  // Write code here
  
  input= input.split("\n")
//   console.log(input)

  let tc = + input[0];
  let line =1;
  for(let i=0;i<tc;i++){
      
      let mat = [];
      let [n,m] = input[line++].trim().split(" ").map(Number);
      
      for(let i=0;i<n;i++){
          let arr = input[line++].trim().split(" ").map(Number);
          mat.push(arr)
      }
      RowGame(n,m,mat)
  }
}

if (process.env.USER === "") {
  runProgram(`
  2
  3 3
  1 2 1 
  1 3 1
  1 2 1
  3 3
  1 2 3
  1 1 3
  1 2 3`);
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
//2