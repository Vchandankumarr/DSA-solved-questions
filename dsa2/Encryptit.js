function EncryptString(str,k){
    
    // write your code here
     let symbol='!@#$%^&*+-:;><.,/?'
     let lower="abcdefghijklmnopqrstuvwxyz";
     let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
     let number="0123456789"
     let n=str.length;
     let res=''
    for(let j=0;j<n;j++){    
         
     for(let i=0;i<26;i++){
         
        if(str[j]===lower[i]){
            
           i+k>25?i=((i+k)%26):i=i+k
           res+=lower[i];
            break;
            
        }
        else if(str[j]===upper[i]){
            
            i+k>25?i=((i+k)%26):i=i+k
            res+=upper[i] ;    
            break;
            
        }else if(str[j]===number[i]){
            
             i+k>10? i=(i+k)%10:i=i+k
             res+=number[i]
             break;
             
         }else if(str[j]===symbol[i]){
             
             res+=symbol[i]
             break;
      }  
    }
}
  console.log(res)  
}

function runProgram(input){
	input=input.trim().split("\n")
	let str = input[0].trim().split("")
	let k = +input[1].trim()
	EncryptString(str,k)
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