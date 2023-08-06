function AngryPeople(n,arr){

    for(let i=0; i<=n-2; i++){
        
         for(let j=0; j<n-i-1; j++){
             
             if(arr[j]>arr[j+1]){
                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
             }
         }
    }
    
    
    
    let tpe=[]
    
     for(let i=0; i<=arr.length-1; i++){
         
         if(i%2==0){
             tpe.unshift(arr[i])
         }else{
             
             tpe.push(arr[i])
         }
     }
     
       let pe=-Infinity;
       let s=0
       
       for(let i=0; i<=arr.length-1; i++){
           s=Math.abs(tpe[i]-tpe[i+1])
           if(pe<s){
               
               pe=s
           }
       }
       console.log(pe)
       
}

function runProgram(input) {
  // Write code here
  input=input.split("\n")
  let n=+input[0]
  let arr=input[1].trim().split(" ").map(Number)
  AngryPeople(n,arr)
}

if (process.env.USER === "") {
  runProgram(`
  4
  5 10 6 8
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

