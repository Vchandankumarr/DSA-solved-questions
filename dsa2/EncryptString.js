function encrypt(str,low,high) {
    // console.log(str)
    if (low > high) return "";
    else {
        
        let mid = low + Math.floor((high - low) / 2);
        
        return str[mid] + encrypt(str, low, mid - 1) + encrypt(str, mid + 1, high);
    }
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  let tc = +input[0].trim();
  let line=1;
  for(let i=0;i<tc;i++){
      let n = +input[line++].trim();
      let str = input[line++].trim()
      console.log(encrypt(str,0,str.length-1))
  }
}

if (process.env.USER === "") {
  runProgram(`
    
3
3
abc
4
abcd
11
abcdefghijk
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
// bac
// bacd
// fcabdeighjk

