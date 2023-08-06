function uniqueGift(str){
    
    let obj={};
    let que=[]
    let bag=""
    
    for(let i=0;i<str.length;i++){
        if(obj[str[i]]==undefined){
            obj[str[i]]= 0
        }
    }
   
    for(let j=0;j<str.length;j++){
        obj[str[j]]++
        que.push(str[j])
        
        while(que.length !=0){
            if(obj[que[0]] == 1){
                break
            }
            que.shift()
        }
        if(que.length==0){
            bag += '#'
        }else{
            bag += que[0]
        }
    }
    console.log(bag)
}

function runProgram(input){
   input=input.split('\n')
   let tc=+input[0]
   let line=1
   for(let i=0;i<tc;i++){
       let str = input[line++]
       uniqueGift(str)
   }
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