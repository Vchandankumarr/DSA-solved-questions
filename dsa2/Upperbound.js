function UpperBound(n,k,arr){
    let i = 0;
    let j = arr.length -1;
    let res = arr.length -1;
    while( i <= j){
        mid = Math.floor((i+j) /2)
        if(arr[mid] == k){
            
            i = mid + 1
        }else if(arr[mid]  > k){
            res = mid
            j = mid-1
        }else{
             i = mid+1;
        }
        
    }
    return res;
        
    }
    
    

function runProgram(input){
   // Write Code Here
   input = input.split("\n");
   let [n,k] = input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(" ").map(Number);
  
   console.log(UpperBound(n,k,arr))
}
if (process.env.USERNAME === "") {
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