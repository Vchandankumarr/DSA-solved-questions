function  Party(n,c,r,arr){
    // console.log(arr)
    
    arr.sort((a,b)=> a-b)
    let friends = 0;
    let total = 0;
    
    for (let i=0;i<n;i++){
        
        friends= friends+arr[i];
        
        if(friends > r || total > r){
            continue;
        }
        else{
            total++;
        }
    }
    // console.log(total);
    if(total === c){
        console.log("Party")
    }
    else{
        console.log("Sad")
    }
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
//   console.log(input)

   let [n,c,r] =  input[0].trim().split(" ").map(Number);
   let arr = input[1].trim().split(" ").map(Number);
   Party(n,c,r,arr)
}

if (process.env.USER === "") {
  runProgram(`
     5 3 24
     6 4 21 20 13`);
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
