function Maximumpages(n,k,costs,pages) {
    let ans = new Array(n+1).fill(0).map(()=> Array(k+1).fill(0))
    
    for(let i=1;i<= costs.length;i++){
        let cost = costs[i-1];
        let page = pages[i-1];
        
        for(let j=1;j<=k;j++){
            if(cost <= j){
                ans[i][j] = Math.max(ans[i-1][j],page +ans[i-1][j - cost])
                
            }else {
                ans[i][j] = ans[i-1][j];
                
            }
        }
    }
    return ans[n][k]
}
function runProgram(input) {
 // Write code here
 input = input.trim().split("\n")
 let [n,k] = input[0].trim().split(" ").map(Number);
 let costs =  input[1].trim().split(" ").map(Number);
 let pages =  input[2].trim().split(" ").map(Number);
 console.log(Maximumpages(n,k,costs,pages))
 
 
}

if (process.env.USER === "") {
 runProgram(`4 17
 4 3 3 10 
 7 4 10 3 
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
//21
