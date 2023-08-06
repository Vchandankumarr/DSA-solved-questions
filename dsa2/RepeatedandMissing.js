function RepetedAndMissing(n,arr){
    let obj = {}
    arr = arr.sort((a,b)=>a-b)
    let totalNum = ((n)*(n+1)/2)
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]] ){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]++;
        }
    }
    // console.log(obj)
    let str =""
    for(let key in obj){
        if(obj[key] >= 2){
            str += key
        }
    }
    // console.log(arr)p
   
    // let totalNum = ((n)*(n+1)/2)
  for(let i=0;i<n;i++){
        if(arr[i]==arr[i+1]){
            arr[i]= 0;
        }
    }
     for (let i=0;i<arr.length;i++){
        totalNum-=arr[i]
    }
   console.log(totalNum +" "+ str)
     
  // console.log(totalNum)
    
}
function runProgram(input) {
  // Write code here
  input = input.split("\n")
  //console.log(input)
  let tc = +input[0];
  let line = 1;
  for(let i=0;i<tc;i++){
      let n  = +input[line++]
      let arr = input[line++].trim().split(" ").map(Number);
      RepetedAndMissing(n,arr)
  }
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