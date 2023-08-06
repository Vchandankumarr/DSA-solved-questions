let bag1="";
function rats(bag,row,col,ans){
    if(row<0||row>=bag.length||col<0||col>=bag.length){
        return ;
    }
    if(bag[row][col]==0){
        return;
    }
    if(row==bag.length-1&&col==bag.length-1){
        bag1+=ans+" ";
        return;
    }
    bag[row][col]=0;
    rats(bag,row+1,col,ans+"D");
    rats(bag,row,col-1,ans+"L");
    rats(bag,row,col+1,ans+"R");
    rats(bag,row-1,col,ans+"U");
    bag[row][col]=1;
}

function runProgram(input){
   // Write Code Here
   input=input.split("\n");
   let n=+input[0];
   let bag=[];
   let line=1;
   for(let i=0;i<n;i++){
       let arr=input[line++].split(" ").map(Number);
       bag.push(arr);
    }
   rats(bag,0,0,[]);
   if(bag1){
   console.log(bag1);
    }else{
     console.log(-1);   
}
}
if (process.env.USERNAME === "") {
     runProgram(`
     4
     1 0 0 0
     1 1 0 1
     1 1 0 0 
     0 1 1 1
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