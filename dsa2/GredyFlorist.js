function Gredy(n,k,arr) {
    arr = arr.sort((a,b)=> b-a)
    
    let price = 0;
    let temp =0;
    for(let i=0;i<n;i++){
        let temp2 = Math.floor(i/k)
        let cost = (temp2+1)*arr[i]
        price += cost
    }
    console.log(price)
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  let [n,k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  Gredy(n,k,arr)
}

if (process.env.USER === "") {
  runProgram(`
  5 3
  1 3 5 7 9
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
//29