function spider(n,k,arr){
    
    let dp =new Array(n).fill(Infinity)
    
    dp[0] = 0
    
    for(let i=0;i<n;i++){
        for(let j=i+1;j<i+1+k && j<n;j++){
            let diff = Math.abs(arr[i]-arr[j])
            dp[j] = Math.min(dp[j],diff+dp[i])
        }
    }
    console.log(dp[n-1])
}

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let [n,k]= input[0].trim().split(" ").map(Number)
	let arr = input[1].trim().split(" ").map(Number)
	spider(n,k,arr)
}


if (process.env.USER === "ritesh") {
    runProgram(`
    5 3
    10 30 40 50 20
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