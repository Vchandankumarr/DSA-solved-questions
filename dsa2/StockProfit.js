function stockbroker(n,arr){
    
    let priceMin = arr[0] ;
    
    let profitMax = 0 ;
    
    for(let i=0;i<n;i++){
   
        if(arr[i]<priceMin){
   
            priceMin= arr[i];
   
        }
   
        else{
   
            let profit = arr[i]-priceMin;
   
            if(profit>profitMax){
   
                profitMax= profit
   
            }
   
        }
   
    }
   
    return profitMax;

}

function main (n,arr){
    
    let ans = stockbroker(n,arr);
    
    console.log(ans);

    
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
   //console.log(input);
   let tc = +(input[0]);
   let line = 1;
   for (let i=0;i<tc;i++){
       let n = +(input[line++]);
       let arr = input[line++].trim().split(" ").map(Number);
       //console.log(n,arr)
       main(n,arr);
   }
}
if (process.env.USERNAME === "") {
     runProgram(` 2
     6
     7 1 5 3 6 4
     4
     4 3 2 1
     
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
 //5
 //0