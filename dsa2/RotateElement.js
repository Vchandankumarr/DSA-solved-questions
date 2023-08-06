function RotateElements(n,mat){
    
    let top =0;
    let bottom = n-1;
    let left =0;
    let right=n-1;
    
    while(left<right && top <bottom){
        
        let pre = mat[top+1][left]
        for(let i=left; i<=right; i++){
             
            [mat[top][i],pre] = [pre,mat[top][i]]
        }
        top++;
        for(let i=top; i<=bottom; i++){
                    
             [mat[i][right],pre]=[pre,mat[i][right]]
        }
        right--;
        for(let i=right; i>=left; i--){
            
            [mat[bottom][i],pre]=[pre,mat[bottom][i]]
        }
        bottom--;
        for(let i=bottom; i>=top; i--){
            
            [ mat[i][left],pre] =[ pre,mat[i][left]]
        }
        left++;
    }
        for(let  i=0;i<n;i++){
            let res = ""
            for(let j=0;j<n;j++){
                   res+= mat[i][j] +" "
            }
            console.log(res)
        }
    }
    
    function runProgram(input){
        input = input.trim().split("\n");
        let n = +input[0].trim();
        let mat = [];
        let line = 1;
        for(let i=0;i<n;i++){
            mat.push(input[line++].trim().split(" ").map(Number));
        }
        RotateElements(n,mat);
    }
    
    if (process.env.USER === "") {
        runProgram(`
        4
        1 2 3 4
        1 2 3 4
        1 2 3 4
        1 2 3 4
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