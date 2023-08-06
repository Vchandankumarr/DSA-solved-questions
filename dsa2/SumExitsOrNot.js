function exists(n,arr,sum,i){
    if(sum == 0){
        return true;
    }
    if(sum < 0 || i == n){
        
        return false;
    }
    
    let sum1 = exists(n,arr,sum-arr[i],i+1);
    let sum2 = exists(n,arr,sum,i+1);
    
    return sum1||sum2
}

function SumExists(n,arr,sum){
    let i=0;
    let ans = exists(n,arr,sum,i)
    //console.log(ans)
    if(ans){
        console.log("yes");
    }
    else{
        console.log("no");
    }
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
    //console.log(input);
   let n = +input[0];
   let arr = input[1].trim().split(" ").map(Number);
   let sum = +input[2];
   SumExists(n,arr,sum);
}
if (process.env.USERNAME === "") {
     runProgram(`9
     1 2 3 4 5 6 7 8 9
     5
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
 //yes