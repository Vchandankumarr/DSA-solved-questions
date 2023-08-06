function  AbOnly(s) {
    
    let str = s.split("")
    // console.log(str)
    
    let n = str.length;
    for(let i=0;i<str.length;i++){
        if(str[i] == "?"){
            if(i==0){
                if(str[1] != "a"){
                    str[0] = "a"
                }else {
                    str[i] = "b"
                }
            }
            
            if( i == n-1){
                if(str[i-1] != "a"){
                    str[i] = "a"
                }else {
                    str[i] = "b"
                }
            }
            
            if(str[i-1] != "a" && str[i+1] != "a"){
                str[i] = "a"
            }else {
                str[i] = "b"
            }
        }
    }
    
    console.log(str.join(""))
    
}
function runProgram(input) {
  // Write code here
  input =input.split("\n")
//   console.log(input)

  let s = input[0];
  AbOnly(s)
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
