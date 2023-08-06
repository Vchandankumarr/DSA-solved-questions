function similer(str,str1,i,j){
    
    if(i>=str.length || j>=str1.length)
    return 0;
    
    if(str[i] == str1[j]){
        return 1 + similer(str,str1,i+1,j+1)
    }
    return Math.max(similer(str,str1,i+1,j),similer(str,str1,i,j+1))
    
}
function runProgram(input){
    input = input.split("\n")	
    let str = input[0]
    let str1 = input[1]
   
	console.log(similer(str,str1,0,0))
}



if (process.env.USER === "") {
    runProgram(``);
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