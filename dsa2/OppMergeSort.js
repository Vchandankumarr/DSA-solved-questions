function merge(left, right){
    
    let Mergearr = [];
    let i=0;
    let j=0;
    while(i<left.length && j<right.length){
        
        if(left[i]>right[j]){
            Mergearr.push(left[i]);
            i++;
        }
        else{
            Mergearr.push(right[j]);
            j++;
        }
    }
    return[...Mergearr, ...left.slice(i), ...right.slice(j)];
}

function reverseMerge(n,arr){
    if(n <= 1){
        return arr
    }
    
    let mid = Math.floor(n/2);
    let left=[];
    let right=[];
    for (let i=0;i<mid;i++){
        left.push(arr[i]);
    }
    for (let i=mid;i<n;i++){
        right.push(arr[i]);
    }
    left = reverseMerge(left.length,left),
    right = reverseMerge(right.length,right)
    return merge(left,right);
}

function main(n,arr){
    let ans = reverseMerge(n,arr);
    console.log(ans.join(" "))
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
//   console.log(input);
   let n = +(input[0]);
   let arr = input[1].trim().split(" ").map(Number);
//   reverseMerge(n,arr);
   main(n,arr)
}
if (process.env.USERNAME === "") {
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