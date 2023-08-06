function condition(n,x,arr,i=0,total=0){
    if(i == n){
        
        if(total == x){
            return 1;
        }
        else{
            return 0;
        }
    }
    let sum =0;
    sum += condition(n,x,arr,i+1,total+arr[i])
    
    sum += condition(n,x,arr,i+1,total)
    return sum;
}

function main(n,x,arr){
    let ans = condition(n,x,arr);
    console.log(ans)
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
   let [n,x]= input[0].trim().split(" ").map(Number);
   
   let arr = input[1].trim().split(" ").map(Number);
      main(n,x,arr)

}
if (process.env.USERNAME === "") {
     runProgram(`
     4 10
     1 2 3 4
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
 //1