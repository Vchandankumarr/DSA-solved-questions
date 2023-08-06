function Subsequence(n,m,str1,str2) {
    // console.log(str2)
    let j = 0;
    for(let i=0;i<str2.length;i++){
        
        if(str1[j] == str2[i]) {
            j++;
        }
    }
    if( j== n) {
    console.log("YES")
        
    }
    else {
        console.log("NO")
    }
    
    
}
function runProgram(input) {
   input = input.split("\n")
//   console.log(input)

    let tc = +input[0];
    let line =1;
    for(let i=0;i<tc;i++){
        let [n,m]  =input[line++].trim().split(" ").map(Number);
        let str1 = input[line++]
        let str2 = input[line++]
        Subsequence(n,m,str1,str2)
    }
}

if (process.env.USER === "") {
  runProgram(`2
  4 6
  abcd
  aebcrd
  5 7
  aaacc
  abaccac
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
//yes
//no