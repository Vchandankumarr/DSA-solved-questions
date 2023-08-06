function HeightofTree(n,arr){
    // console.log(arr)
    
    const temp = new Array(n).fill(1);
    // console.log(temp)
    
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i;j++){
            
            if(arr[i]>arr[j] && temp[i]<temp[j]+1){
                
                temp[i] = temp[j]+1;
            }
        }
    }
    
    let maxlength = 0;
    for(let i=0;i<temp.length;i++){
        
        if(temp[i] > maxlength){
            
            maxlength = temp[i];
            
        }
    }
    console.log(maxlength)
}
function runProgram(input) {
  // Write code here
  input = input.split("\n");
//   console.log(input
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
    
    HeightofTree(n,arr)
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