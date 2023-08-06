function Largestnumber(n,mat){
    

}

function runProgram(input){
	input = input.trim().split("\n");
	let n = +input[0].trim();
	let line = 1;
	for(let i=0;i<n;i++){
	    mat.push(input[line++].trim().split(" ").map(Number));
	}
	Largestnumber(n,mat);
}

if (process.env.USER === "") {
    runProgram(`
    2
    10
    2
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