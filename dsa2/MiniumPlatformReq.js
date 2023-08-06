function minimumPlatform(n,arrival,departure){
    //console.log(n,arrival,departure);
    let i = 1;
    
    let j = 0;
    
    let platform =1;
    
    while(j<n-1 && i<n){
        
        if(departure[j]<arrival[i]){
        
            j++;
        
            i++;
            
        }
        else{
            
            platform++;
           
            i++;
        }
   
    }
     console.log(platform)
    
}

function runProgram(input){
   // Write Code Here
   input= input.trim().split("\n");
   // console.log(input);
   
   let n = +(input[0]);
  
   
   let arrival = input[1].trim().split(":").join("").split(" ").map(Number);
 
  
   let departure = input[2].trim().split(":").join("").split(" ").map(Number);

    minimumPlatform(n,arrival,departure)
}
if (process.env.USERNAME === "") {
     runProgram(`
     6
     9:00 9:40 9:50 11:00 15:00 18:00
     9:10 12:00 11:20 11:30 19:00 20:00
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