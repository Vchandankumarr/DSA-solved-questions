function Teacher(n,str1,str2) {
    // console.log(str1)
    let cont1 =[];
    let cont2 = [];
    for(let i=0;i<n;i++){
        if(str1[i] == "#"){
            cont1.pop();
            
        }else {
            cont1.push(str1[i])
        }
    }
    // console.log(cont1)
    
     for(let j=0;j<n;j++){
        if(str2[j] == "#"){
            cont2.pop();
            
        }else {
            cont2.push(str2[j])
        }
    }
    
    if(cont1.join("") == cont2.join("")){
        console.log("CORRECT")
    }else {
        console.log("WRONG")
    }
    
    
}
function runProgram(input) {
  // Write code here
  input= input.trim().split("\n")
  let tc = +input[0];
  let line=1;
  for(let i=0;i<tc;i++){
      let n = +input[line++];
      let str1 = input[line++].trim();
      //console.log(str1)
      let str2 = input[line++].trim()
      
       Teacher(n,str1,str2)
      
  }
 
}

if (process.env.USER === "") {
  runProgram(`
  3
4
ab#c
ad#c
4
ab##
c#d#
3
aab
aa#
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
//CORRECT
// CORRECT
// WRONG