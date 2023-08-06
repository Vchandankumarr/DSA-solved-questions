function SquareRootSort(n,arr) {
    // console.log(arr)
    
    for(let i=0;i<n-1;i++){
        
        for(let j=0;j<n-i-1;j++){
            
            let val1 = Math.floor(Math.abs(arr[j]) ** (1/2))
            let val2 = Math.floor(Math.abs(arr[j+1])**(1/2))
            
            if(val1 > val2)
            {
                 [arr[j],arr[j+1]]  =[arr[j+1],arr[j]]
            }
            else if(val1 == val2 && arr[j] > arr[j+1]){
                
                 [arr[j],arr[j+1]]  =[arr[j+1],arr[j]]
             }
        }
    }
    console.log(arr.join(" "))
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)
    let tc = +input[0];
    let line=1;
    for(let i=0;i<tc;i++){
        let n = +input[line++].trim();
        let arr = input[line++].trim().split(" ").map(Number);
        SquareRootSort(n,arr)
    }
}

if (process.env.USER === "") {
  runProgram(`
  2
  3
  4 9 1
  5
  8 4 5 11 9
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
//1 4 9
//4 5 8 9 11
