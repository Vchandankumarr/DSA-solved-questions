function  SquareSorting(n,arr){
    // console.log(arr)
    // bubble sort
    
    for(let i=0;i<n-1;i++){
        
        for(let j=0;j<=n-i-1;j++){
            
            if((arr[j]**2) > (arr[j+1])**2){
                
                [arr[j],arr[j+1]] =[arr[j+1],arr[j]]
                
                //  temp = arr[j]
                 
                //  arr[j] = arr[j+1];
                 
                //  arr[j+1] = temp ;
            }
        }
    }
    console.log(arr.join(" "))
}
function runProgram(input){
   // Write Code Here
   input = input.split("\n");
  // console.log(input);
  let tc =  +input[0];
  let line = 1;
  for(let i=0;i<tc ;i++){
      
   let n = +input[line]
   line++;
   let arr = input[line].trim().split(" ").map(Number);
   line++;
   SquareSorting(n,arr);
      
    }
  
   
}
if (process.env.USERNAME === "") {
     runProgram(`
     
     1
     5
     -2 3 1 -4 6
     
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

 // 1 -2 3 -4 6