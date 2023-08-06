function EtoX(n,m){
    if(m == 0){
        return 1
    }
    let bag = 1
    for(let i=1;i<= m;i++){
        bag*=i
    }
    let flag = Math.pow(n,m)
    let bag1 = flag/bag + EtoX(n,m-1)
    return bag1
}

function runProgram(input){
	// write code here
	input = input.trim().split("\n")
	let [n,m]=input[0].trim().split(" ").map(Number)
	console.log(EtoX(n,m).toFixed(4))
}


if (process.env.USER === "") {
    runProgram(`4 2`);
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
//13.0000