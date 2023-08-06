function Party(C, n, values, weights){
    // Create an array to store the maximum values for each weight
 const dp = new Array(C + 1).fill(0);

 for (let i = 0; i < n; i++) {
   const value = values[i];
   const weight = weights[i];

   // Check each weight starting from the maximum capacity
   for (let j = C; j >= weight; j--) {
     // Calculate the maximum value by either including the current gem or excluding it
     dp[j] = Math.max(dp[j], dp[j - weight] + value);
   }
 }

 // Round the maximum value to the nearest integer
 const maximumValue = Math.round(dp[C]);
 return maximumValue;
}
function runProgram(input) {
 // Write code here
  // Write code here
 input = input.split("\n")
//   console.log(input)
//C, n, values, weights
  let C = +(input[0])
  let n = +(input[1])
  let values = input[2].trim().split(" ").map(Number)
  let weights = input[3].trim().split(" ").map(Number)
  console.log(Party(C, n, values, weights))
   
  
}

if (process.env.USER === "") {
 runProgram(`
 4 10
 5 4 2 4
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
