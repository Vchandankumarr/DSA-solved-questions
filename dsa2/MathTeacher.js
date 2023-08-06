function Maths(n,str1,str2){
    // console.log(str2)
    
    let obj = {};
    let obj2= {};
    let count1 =0;
    let count2=0;
    for(let i=0;i<str1.length;i++){
        if(obj[str1[i]] === undefined){
            obj[str1[i]] =1;
            count1++;
        }else {
            obj[str1[i]]++;
        }
    }
    for(let i=0;i<str2.length;i++){
        if(obj2[str2[i]] === undefined){
            obj2[str2[i]] =1;
            count2++;
        }else {
            obj2[str2[i]]++;
        }
    }
    
    if(count1 == count2){
        return "Equivalent"
    }else {
        return "Not Equivalent"
    }
}
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n")
//   console.log(input)

   let tc = +input[0];
   let line=1;
   for(let i=0;i<tc;i++){
       
       let n = +input[line++]
       let str1 = input[line++].trim().split("");
       let str2 = input[line++].trim().split("")
             console.log(Maths(n,str1,str2))
   }
}

if (process.env.USER === "") {
  runProgram(`
  2
  3
  eff
  arr
  3
  foo
  bar
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
//Equivalent
//Not Equivalent
