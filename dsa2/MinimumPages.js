function page(n){
    
    let arrDp = new Array(n+1).fill(Infinity);
    
    arrDp[0]=0;
    
    for(let i=10;i<=n;i+=10){
    
        arrDp[i]=i/10;
    
    }
    
    for(let i=12;i<=n;i+=12){
    
        arrDp[i]=Math.min(arrDp[i], i/12);
    
    }
    
    // console.log(arrDp)
    
    for(let i=1;i<=n;i++){
    
        for(let j =10;j<=i;j+=10){
    
            arrDp[i] = Math.min(arrDp[i],arrDp[i-j]+arrDp[j])
    
        }
    
        for(let j =12;j<=i;j+=12){
    
            arrDp[i] = Math.min(arrDp[i],arrDp[i-j]+arrDp[j])
    
        }
    
    }
    
    if(arrDp[n]===Infinity){
    
        return -1
    
    }
    
    else{
    
        return arrDp[n]
    
    }

}

function main(n) {
   
    let ans = page(n);
   
    console.log(ans);
}

function runProgram(input){
   // Write Code Here
   input = input.trim().split("\n");
   // console.log(input);
   let tc = +(input[0]);
   let line =1 ;
   for (let i=0;i<tc;i++){
       let n = +(input[line++]);
       //console.log(n)
       main(n)
   }
}
if (process.env.USERNAME === "") {
     runProgram(`
     2
     23
     32`);
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

 //-1
 //3