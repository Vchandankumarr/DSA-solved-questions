function ExittheGrid(n,mtr){
    // write the code here.
        let count=0;
        let i=0;
        let j=0;
        
        while(i >=0 && j >=0 && i<n && j<n){
            
            if(mtr[i][j] == "x"){
                count=0;
                break;
                
            }
            else if(mtr[i][j] == "L"){
                mtr[i][j] = "x"
                count++;
                j--;
                
            }else if(mtr[i][j] == "R"){
                mtr[i][j] = "x"
                count++;
                j++;
            }else if(mtr[i][j] == "U"){
                mtr[i][j] = "x"
                count++;
                i--;
                
            }else if(mtr[i][j] == "D"){
                mtr[i][j] = "x"
                count++;
                i++;
            }
        }
        console.log(count);
    
    }
    function runProgram(input){
       // Write Code Here
       input = input.split( "\n")
       //console.log(input)
       let tc= +input[0];
       let line=1;
       for(let i=0;i<tc;i++){
           let n=+input[line];
           line++;
           let mtr=[];
           for(let j=0;j<n;j++){
               let arr=input[line].split("");
               line++;
               mtr.push(arr);
           }
           ExittheGrid(n,mtr);
       }
    }
    if (process.env.USERNAME === "") {
         runProgram(`
         3
         4 
         RRRR
         LLLL
         UUUU
         DDDD
         3
         LRL
         UUU
         DLR
         2
         RL
         DD
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