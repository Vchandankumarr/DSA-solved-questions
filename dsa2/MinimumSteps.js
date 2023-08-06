function stage(n,arr){
    let arrDp= new Array(n).fill(Infinity);
    arrDp[0]=0;
    for(let i=0;i<n;i++){
        for(let j=1;j<=arr[i] && i+j<n;j++){
            arrDp[i+j]= Math.min(arrDp[i+j],arrDp[i]+1)
        }
    }
    return arrDp[n-1]
}

function main(n,arr){
    let ans = stage(n,arr);
    console.log(ans);
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
   // console.log(input);
   let tc = +(input[0]);
   let arr = input[1].trim().split(" ").map(Number);
   //console.log(arr)
   main(tc,arr);
//   console.log(stage(tc,arr))
}
if (process.env.USERNAME === "") {
     runProgram(`
     11
     1 3 5 8 9 2 6 7 6 8 9
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
 //3