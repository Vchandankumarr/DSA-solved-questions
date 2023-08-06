function Marathon(N,arr){
    let result;
    for(let i=0;i<N;i++){
        
        let sum=0
        let flag=0
        
        for(let j=i;j<N;j++){
            
            sum += arr[j][0]
            if(sum>arr[j][1]){
                
                sum -= arr[j][1]
            }
            else{
                flag=1
                break;
            }
        }
        if(flag == 0){
            if(sum > arr[i][1]){
                result = i 
                break;
            }
        }
    }
    
    if(result == undefined){
        
        console.log("No starting points")
    }else{
        console.log(result)
    }
    
} 

function runProgram(input){
	input = input.trim().split("\n")
	let n = +input[0]
	let line = 1;
	let arr = [];
	for(let i=0;i<n;i++){
	    
	    arr.push(input[line++].trim().split(" ").map(Number));
	    
	}
	Marathon(n,arr);
}
if (process.env.USER === "") {
    runProgram(`
    3
    1 5
    10 3
    3 4
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