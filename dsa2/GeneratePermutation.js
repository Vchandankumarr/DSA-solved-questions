let res=[];
function Permutation(n,arr,index){
    if(index==arr.length-1){
        
        let temp=[];
        for(let i=0;i<n;i++)
        
            temp.push(arr[i])
            res.push(temp);
            return;
        }
        for(let i=index;i<n;i++){
            
            swap(arr,i,index);
            Permutation(n,arr,index+1);
            swap(arr,i,index);
        }
    }
    function swap(arr,i,j){
        
        let temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    function runProgram(input){
    input=input.split("\n");
    let n=+input[0];
    let arr=input[1].split(" ").map(Number);
     Permutation(n,arr,0);
     
     res.sort();
     for(let i=0;i<res.length;i++){
         console.log(res[i].join(" "));
     }
}
  if (process.env.USERNAME === "") {
     runProgram(`3
     1 2 3`);
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
//  1 2 3 
// 1 3 2 
// 2 1 3 
// 2 3 1 
// 3 1 2 
// 3 2 1