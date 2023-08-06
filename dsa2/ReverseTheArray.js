function reverse(arr){
    
    let bag="";
    
    for(let i=arr.length-1;i>=0;i--){
        bag+=arr[i]+" "
    }
    console.log(bag)
}
// comment

function runProgram(input) {
  // Write code here
 input=input.trim().split("\n") 
 let n=+input[0]
 let arr=input[1].trim().split(" ").map(Number)
 reverse(arr)
  
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

//5
// 1 2 3 4 5