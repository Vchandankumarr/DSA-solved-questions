function  SortingAlgorithm(n,k,arr){
    
    
    for(let i =0;i<n-1;i++){
        let noOfswap =0 
        
        for(let j=0;j<=n-i-1;j++){
            
            if((arr[j]%k) > (arr[j+1]%k)){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                noOfswap++
            }
           
                
        }
        if(noOfswap == 0){
            break;
        }
            
    }
    
    console.log(arr.join(" "))
}

function runProgram(input){
   // Write Code Here
   input = input.split("\n");
  // console.log(input);
   let [n,k] = input[0].trim().split(" ").map(Number);
   
   let arr = input[1].trim().split(" ").map(Number);
   
   SortingAlgorithm(n,k,arr);
}
if (process.env.USERNAME === "") {
     runProgram(`
     5 6
     12 18 17 65 46
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
//  12 18 46 17 65