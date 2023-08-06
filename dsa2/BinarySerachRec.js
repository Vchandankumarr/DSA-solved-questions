function binarySearch(n,k,i,j,arr){
    
    if( i >j){
        
        return -1;
    }
    let mid = Math.floor((i +j) /2)
    
        if(arr[mid] == k){
            return 1
            
        }else if(arr[mid]  > k){
            return binarySearch(n,k,i,mid-1,arr)
        }else{
            binarySearch(n,k,mid+1,j,arr)   
        }
        return -1;
}

function runProgram(input){
   // Write Code Here
   input = input.split("\n");
   let [n,k] = input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(" ").map(Number);
   let i = 0;
   let j = arr.length -1;
   console.log(binarySearch(n,k,i,j,arr))
}
if (process.env.USERNAME === "") {
     runProgram(`
     5 0
     2 -2 0 3 4`);
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
 // 1